/* =====================================================================
   "PORTEIRO" DO PORTAL (Cloudflare Pages Functions)
   ---------------------------------------------------------------------
   Roda antes de QUALQUER arquivo do site. Só deixa passar quem entrou
   com a conta Microsoft da escola (Fleming). Quem não entrou é levado
   para a tela de login da Microsoft.

   Configurações (ficam na Cloudflare, em Settings > Variables and Secrets):
     TENANT_ID       ID do diretório (locatário) da Microsoft da escola
     CLIENT_ID       ID do aplicativo (cliente) registrado pelo TI
     CLIENT_SECRET   segredo do aplicativo (tipo "Secret")
     SESSION_SECRET  frase longa e aleatória usada para assinar o login (tipo "Secret")
     ALLOWED_DOMAIN  (opcional) ex.: flemingeducacao.com.br — aceita só e-mails desse domínio

   Endereços especiais:
     /auth/login     abre o login da Microsoft
     /auth/callback  volta da Microsoft (não abrir direto)
     /auth/logout    sai da conta
   ===================================================================== */

const COOKIE_SESSAO = "portal_sessao";
const COOKIE_ESTADO = "portal_estado";
const DURACAO_SESSAO = 60 * 60 * 12;   // 12 horas logado
const DURACAO_ESTADO = 60 * 10;        // 10 minutos para concluir o login

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);

  const faltando = ["TENANT_ID", "CLIENT_ID", "CLIENT_SECRET", "SESSION_SECRET"].filter((k) => !env[k]);
  if (faltando.length) {
    return pagina("Portal em configuração",
      "O login ainda não foi configurado. Falta definir na Cloudflare: " + faltando.join(", ") + ".", 503);
  }

  if (url.pathname === "/auth/login") return iniciarLogin(url, env);
  if (url.pathname === "/auth/callback") return concluirLogin(request, url, env);
  if (url.pathname === "/auth/logout") return sair(url, env);

  const sessao = await lerSessao(request, env);
  if (sessao) return next();

  // Sem login: manda para a Microsoft e, depois, volta para a página pedida
  const volta = url.pathname + url.search;
  return Response.redirect(url.origin + "/auth/login?volta=" + encodeURIComponent(volta), 302);
}

/* ---------- Etapa 1: enviar para a Microsoft ---------- */
async function iniciarLogin(url, env) {
  const volta = destinoSeguro(url.searchParams.get("volta"));
  const estado = aleatorio(24);
  const nonce = aleatorio(24);
  const cookieEstado = await assinar({ estado, nonce, volta, exp: agora() + DURACAO_ESTADO }, env.SESSION_SECRET);

  const autorizar = new URL("https://login.microsoftonline.com/" + env.TENANT_ID + "/oauth2/v2.0/authorize");
  autorizar.searchParams.set("client_id", env.CLIENT_ID);
  autorizar.searchParams.set("response_type", "code");
  autorizar.searchParams.set("redirect_uri", url.origin + "/auth/callback");
  autorizar.searchParams.set("response_mode", "query");
  autorizar.searchParams.set("scope", "openid profile email");
  autorizar.searchParams.set("state", estado);
  autorizar.searchParams.set("nonce", nonce);
  autorizar.searchParams.set("prompt", "select_account");

  return new Response(null, {
    status: 302,
    headers: {
      Location: autorizar.toString(),
      "Set-Cookie": cookie(COOKIE_ESTADO, cookieEstado, DURACAO_ESTADO),
      "Cache-Control": "no-store"
    }
  });
}

/* ---------- Etapa 2: a Microsoft devolve o aluno com um código ---------- */
async function concluirLogin(request, url, env) {
  if (url.searchParams.get("error")) {
    return pagina("Não foi possível entrar",
      "A Microsoft não autorizou o acesso. Use a sua conta da escola (Fleming).", 403, true);
  }
  const codigo = url.searchParams.get("code");
  const estadoRecebido = url.searchParams.get("state");
  const estado = await verificar(lerCookie(request, COOKIE_ESTADO), env.SESSION_SECRET);
  if (!codigo || !estado || estado.estado !== estadoRecebido) {
    return pagina("Login expirado", "O login demorou demais ou foi interrompido. Tente de novo.", 400, true);
  }

  // Troca o código pelo token, direto com a Microsoft (conexão segura + segredo do aplicativo)
  const resposta = await fetch("https://login.microsoftonline.com/" + env.TENANT_ID + "/oauth2/v2.0/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env.CLIENT_ID,
      client_secret: env.CLIENT_SECRET,
      grant_type: "authorization_code",
      code: codigo,
      redirect_uri: url.origin + "/auth/callback",
      scope: "openid profile email"
    })
  });
  if (!resposta.ok) {
    return pagina("Não foi possível entrar", "A Microsoft recusou o login. Tente de novo em instantes.", 502, true);
  }
  const dados = await resposta.json();
  const token = lerToken(dados.id_token);

  // Confere se o token é deste portal, desta escola e ainda válido
  const valido = token &&
    token.aud === env.CLIENT_ID &&
    token.tid === env.TENANT_ID &&
    token.nonce === estado.nonce &&
    token.exp > agora();
  if (!valido) {
    return pagina("Acesso não permitido", "Este portal é exclusivo para contas do Colégio Fleming.", 403, true);
  }

  const email = String(token.preferred_username || token.email || "").toLowerCase();
  if (env.ALLOWED_DOMAIN && !email.endsWith("@" + String(env.ALLOWED_DOMAIN).toLowerCase())) {
    return pagina("Acesso não permitido",
      "Entre com o seu e-mail @" + env.ALLOWED_DOMAIN + ".", 403, true);
  }

  const sessao = await assinar({ nome: token.name || "", email, exp: agora() + DURACAO_SESSAO }, env.SESSION_SECRET);
  const cabecalhos = new Headers({ Location: url.origin + destinoSeguro(estado.volta), "Cache-Control": "no-store" });
  cabecalhos.append("Set-Cookie", cookie(COOKIE_SESSAO, sessao, DURACAO_SESSAO));
  cabecalhos.append("Set-Cookie", cookie(COOKIE_ESTADO, "", 0));
  return new Response(null, { status: 302, headers: cabecalhos });
}

/* ---------- Sair ---------- */
function sair(url, env) {
  const cabecalhos = new Headers({ "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
  cabecalhos.append("Set-Cookie", cookie(COOKIE_SESSAO, "", 0));
  return new Response(htmlPagina("Você saiu do portal",
    "Para entrar de novo, clique no botão abaixo.", true), { status: 200, headers: cabecalhos });
}

/* ---------- Sessão assinada (o aluno não consegue falsificar) ---------- */
async function lerSessao(request, env) {
  const dados = await verificar(lerCookie(request, COOKIE_SESSAO), env.SESSION_SECRET);
  return dados && dados.exp > agora() ? dados : null;
}

async function assinar(obj, segredo) {
  const corpo = b64url(new TextEncoder().encode(JSON.stringify(obj)));
  return corpo + "." + (await hmac(corpo, segredo));
}

async function verificar(valor, segredo) {
  if (!valor || valor.indexOf(".") === -1) return null;
  const [corpo, assinatura] = valor.split(".");
  const esperada = await hmac(corpo, segredo);
  if (!iguais(assinatura, esperada)) return null;
  try {
    const obj = JSON.parse(new TextDecoder().decode(deB64url(corpo)));
    return obj.exp > agora() ? obj : null;
  } catch (e) { return null; }
}

async function hmac(texto, segredo) {
  const chave = await crypto.subtle.importKey("raw", new TextEncoder().encode(segredo),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", chave, new TextEncoder().encode(texto));
  return b64url(new Uint8Array(sig));
}

/* ---------- Auxiliares ---------- */
function lerToken(jwt) {
  try {
    const partes = String(jwt || "").split(".");
    return JSON.parse(new TextDecoder().decode(deB64url(partes[1])));
  } catch (e) { return null; }
}

function destinoSeguro(caminho) {
  // Só aceita caminhos deste próprio site (evita redirecionar para outros sites)
  return caminho && caminho.startsWith("/") && !caminho.startsWith("//") && !caminho.startsWith("/auth/") ? caminho : "/";
}

function lerCookie(request, nome) {
  const todos = request.headers.get("Cookie") || "";
  for (const parte of todos.split(";")) {
    const [k, ...v] = parte.trim().split("=");
    if (k === nome) return v.join("=");
  }
  return "";
}

function cookie(nome, valor, maxAge) {
  return nome + "=" + valor + "; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=" + maxAge;
}

function aleatorio(n) { return b64url(crypto.getRandomValues(new Uint8Array(n))); }
function agora() { return Math.floor(Date.now() / 1000); }

function iguais(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

function b64url(bytes) {
  let s = "";
  bytes.forEach((b) => { s += String.fromCharCode(b); });
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function deB64url(texto) {
  const s = String(texto).replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(s + "===".slice((s.length + 3) % 4));
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}

function pagina(titulo, texto, status, comBotao) {
  return new Response(htmlPagina(titulo, texto, comBotao), {
    status, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" }
  });
}

function htmlPagina(titulo, texto, comBotao) {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  return '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    "<title>" + esc(titulo) + " · Portal do Ensino Médio</title>" +
    "<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#1ce692;font-family:system-ui,Segoe UI,Arial,sans-serif;color:#0b2a20}" +
    ".c{background:#fff;max-width:420px;margin:16px;padding:32px;border-radius:18px;box-shadow:0 20px 50px rgba(11,42,32,.25);text-align:center}" +
    "h1{font-size:24px;margin:0 0 10px}p{color:#3c5149;line-height:1.5;margin:0}" +
    "a{display:inline-block;margin-top:22px;background:#0b2a20;color:#fff;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:10px}" +
    ".m{font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#0c7a4d;font-weight:800;margin-bottom:14px}</style></head><body>" +
    '<div class="c"><div class="m">Portal do Ensino Médio · Fleming</div><h1>' + esc(titulo) + "</h1><p>" + esc(texto) + "</p>" +
    (comBotao ? '<a href="/auth/login">Entrar com a conta Fleming</a>' : "") + "</div></body></html>";
}
