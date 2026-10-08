/* =====================================================================
   Monta as páginas do portal a partir dos arquivos da pasta "conteudo".
   Não é necessário alterar este arquivo para mudar textos.
   ===================================================================== */
(function () {
  "use strict";

  var C = window.CONTEUDO || {};
  var G = C.geral || {};
  var MARCADOR = "INFORMAÇÃO A INSERIR";
  // Cor predominante de cada página (os temas ficam em assets/css/estilo.css)
  //   menta = #1ce692    rosa = #f85651    amarelo = #ffe151    azul = #2867d2
  // Página sem tema na lista usa o verde escuro padrão.
  var TEMAS = {
    "inicio": "menta",
    "tutoriais": "menta",
    "regras": "menta",
    "contatos": "menta",
    // As séries usam o mesmo verde das demais abas.
    // (Para voltar às cores próprias: "rosa", "amarelo" e "azul".)
    "serie-1": "menta",
    "serie-2": "menta",
    "serie-3": "menta",
    "conecta": "conecta",
    "vestibulares": "floresta",
    "festival": "cinema",
    "materiais": "menta",
    "atendimentos": "menta"
  };

  /* ---------- Ícones (traço fino) ---------- */
  var ICONES = {
    livro: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20"/>',
    calendario: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    presenca: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M9 15l2 2 4-4"/>',
    prancheta: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 12l2 2 4-4M9 17h6"/>',
    pasta: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    sino: '<path d="M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    regras: '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    tutorial: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5 3.5-5 3.5z"/>',
    telefone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>',
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    relogio: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    usuario: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    cracha: '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M8 17a4 4 0 0 1 8 0"/>',
    pessoas: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
    wifi: '<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><path d="M12 19.5h.01"/>',
    impressora: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>',
    nuvem: '<path d="M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 8.5a4.5 4.5 0 0 1-.5 9.5z"/>',
    capelo: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6"/>',
    portal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
    grade: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    fechar: '<path d="M6 6l12 12M18 6L6 18"/>',
    seta: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    voltar: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    externo: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    busca: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    predio: '<path d="M4 21V5l8-2 8 2v16"/><path d="M9 21v-5h6v5M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01"/>',
    documento: '<path d="M6 3h8l5 5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
    carteira: '<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 15h2"/>',
    suporte: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
    bussola: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    estrela: '<path d="M12 3l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 16.4l-5.3 2.9 1.1-5.9-4.4-4.1 6-.8z"/>',
    coracao: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
    imagem: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/>',
    video: '<rect x="3" y="5" width="13" height="14" rx="2"/><path d="M16 10l5-3v10l-5-3z"/>',
    casa: '<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    expandir: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
    alerta: '<path d="M12 3.5L2.5 20h19z"/><path d="M12 10v4.5M12 17.5h.01"/>',
    calculadora: '<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 6.5h8v3H8zM8.5 13h.01M12 13h.01M15.5 13h.01M8.5 16.5h.01M12 16.5h.01M15.5 16.5h.01"/>',
    cadeado: '<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3M12 14.5v2.5"/>',
    celular: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',
    sol: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'
  };

  // Asterisco do logo "fleming*": seis pontas retas (três barras a 60°)
  function asterisco(classe) {
    var barra = '<rect x="9.4" y="0.5" width="5.2" height="23"/>';
    return '<svg class="asterisco' + (classe ? " " + classe : "") + '" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">' +
      barra + '<g transform="rotate(60 12 12)">' + barra + '</g><g transform="rotate(120 12 12)">' + barra + "</g></svg>";
  }

  function icone(nome, classe) {
    var d = ICONES[nome] || ICONES.info;
    return '<svg class="icone' + (classe ? " " + classe : "") + '" viewBox="0 0 24 24" aria-hidden="true">' + d + "</svg>";
  }

  /* ---------- Utilidades ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  // Texto seguro, destacando "INFORMAÇÃO A INSERIR".
  // Trechos entre **dois asteriscos** aparecem em negrito.
  function t(s) {
    if (s == null || s === "") return '<span class="a-inserir">' + MARCADOR + "</span>";
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .split(MARCADOR).join('<span class="a-inserir">' + MARCADOR + "</span>");
  }
  function lista(arr) { return Array.isArray(arr) ? arr : []; }
  // Transforma endereços de e-mail (em texto já escapado) em links clicáveis
  function comEmails(html) {
    return String(html).replace(/([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g, function (m) {
      var email = m.replace(/\.$/, ""), resto = m.slice(email.length);
      return '<a href="mailto:' + email + '">' + email + "</a>" + resto;
    });
  }
  function temLink(l) { return typeof l === "string" && l.trim() !== "" && l !== MARCADOR; }
  function externo(l) { return /^https?:\/\//i.test(l); }
  function attrLink(l) { return 'href="' + esc(l) + '"' + (externo(l) ? ' target="_blank" rel="noopener"' : ""); }
  function param(nome) {
    var m = new RegExp("[?&]" + nome + "=([^&#]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : null;
  }
  function el(id) { return document.getElementById(id); }

  /* ---------- Marca (logo) ---------- */
  // clara = true usa a versão branca do logo (para fundos verdes)
  function marca(clara) {
    var nome = G.nomeEscola || "Colégio Fleming";
    var arquivo = clara ? (G.logoBranco || G.logo) : G.logo;
    if (arquivo) {
      return '<a class="marca com-logo" href="index.html" aria-label="' + esc(nome) + " " + esc(G.unidade || "") + ' — página inicial">' +
        '<img src="' + esc(arquivo) + '" alt="' + esc(nome) + '">' +
        '<span class="marca-legenda">' +
        (G.tituloPortal ? '<span class="marca-portal">' + esc(G.tituloPortal) + "</span>" : "") +
        (G.unidade ? '<span class="marca-unidade">' + esc(G.unidade) + "</span>" : "") +
        "</span></a>";
    }
    return '<a class="marca" href="index.html" aria-label="' + esc(nome) + ' — página inicial"><span class="marca-selo" aria-hidden="true">F</span>' +
      '<span class="marca-texto"><span class="marca-nome">' + esc(nome) + '</span><span class="marca-sub">' + esc(G.unidade || "") + "</span></span></a>";
  }

  /* ---------- Cabeçalho e menu ---------- */
  var MENU = [
    { id: "inicio", titulo: "Início", link: "index.html" },
    // Menu suspenso: as séries aparecem ao clicar em "Turmas"
    { id: "turmas", titulo: "Turmas", itens: [
      { id: "serie-1", titulo: "1ª Série", link: "serie.html?s=1" },
      { id: "serie-2", titulo: "2ª Série", link: "serie.html?s=2" },
      { id: "serie-3", titulo: "3ª Série", link: "serie.html?s=3" }
    ] },
    { id: "materiais", titulo: "Materiais", link: "materiais.html" },
    { id: "atendimentos", titulo: "Atendimentos", link: "atendimentos.html" },
    { id: "regras", titulo: "Regras", link: "regras.html" },
    { id: "tutoriais", titulo: "Tutoriais", link: "tutoriais.html" },
    // Menu suspenso: as páginas abaixo aparecem ao clicar em "Outros recursos"
    { id: "outros", titulo: "Outros recursos", itens: [
      { id: "conecta", titulo: "Conecta", link: "conecta.html" },
      { id: "vestibulares", titulo: "Vestibulares", link: "vestibulares.html" },
      { id: "festival", titulo: "Festival de Cinema", link: "festival.html", requer: "festival" }
    ] },
    { id: "contatos", titulo: "Contatos", link: "contatos.html" }
  ];

  // Páginas que podem ser desligadas (ex.: Festival de Cinema, com "ativo: false" no seu arquivo)
  function ligado(item) {
    return !item || !item.requer || (C[item.requer] || {}).ativo !== false;
  }
  // Menu sem as páginas desligadas (e sem grupos que fiquem vazios)
  function menuVisivel() {
    return MENU.filter(ligado).map(function (m) {
      return m.itens ? { id: m.id, titulo: m.titulo, itens: m.itens.filter(ligado) } : m;
    }).filter(function (m) { return !m.itens || m.itens.length; });
  }

  function cabecalho(ativo) {
    // A página atual ganha o asterisco do Fleming; cada página leva a sua cor (data-cor)
    function link(m, sub) {
      var at = m.id === ativo;
      return '<a href="' + m.link + '"' + (at ? ' class="ativo" aria-current="page"' : "") +
        (TEMAS[m.id] ? ' data-cor="' + TEMAS[m.id] + '"' : "") + ">" +
        (at && !sub ? asterisco("menu-asterisco") : "") + "<span>" + m.titulo + "</span></a>";
    }
    var itens = menuVisivel().map(function (m) {
      if (!m.itens) return link(m);
      var dentro = m.itens.some(function (s) { return s.id === ativo; });
      return '<div class="menu-grupo">' +
        '<button type="button" class="menu-grupo-botao' + (dentro ? " ativo" : "") + '" aria-expanded="false" aria-controls="submenu-' + m.id + '">' +
        (dentro ? asterisco("menu-asterisco") : "") + "<span>" + m.titulo + "</span>" +
        '<svg class="menu-seta" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>' +
        '<div class="submenu" id="submenu-' + m.id + '">' + m.itens.map(function (s) { return link(s, true); }).join("") + "</div></div>";
    }).join("");
    return '<a class="pular" href="#conteudo">Pular para o conteúdo</a>' +
      '<header class="topo">' +
      '<div class="container">' + marca() +
      '<button class="botao-menu" type="button" aria-expanded="false" aria-controls="menu-principal">' + icone("menu") + "<span>Menu</span></button>" +
      '<nav class="menu" id="menu-principal" aria-label="Menu principal">' + itens + "</nav>" +
      "</div></header>";
  }

  function rodape() {
    var r = G.rodape || {};
    var ano = new Date().getFullYear();
    return '<footer class="rodape"><div class="container"><div class="rodape-grade">' +
      "<div>" + marca(true) + '<p style="margin-top:16px;max-width:360px">' + esc(G.tituloPortal || "Portal do Ensino Médio") + ". Informações, orientações e contatos para estudantes e famílias.</p></div>" +
      '<div class="rodape-nav"><h3>Navegação</h3><ul>' + menuVisivel().reduce(function (todos, m) { return todos.concat(m.itens || [m]); }, [])
        .map(function (m) { return '<li><a href="' + m.link + '">' + m.titulo + "</a></li>"; }).join("") + "</ul></div>" +
      "<div><h3>Contato</h3><ul>" +
      '<li class="dado">' + icone("predio", "p") + "<span>" + t(r.endereco) + "</span></li>" +
      '<li class="dado">' + icone("telefone", "p") + "<span>" + (temLink(r.telefone) ? '<a href="tel:' + esc(String(r.telefone).replace(/[^\d+]/g, "")) + '">' + esc(r.telefone) + "</a>" : t(r.telefone)) + "</span></li>" +
      '<li class="dado">' + icone("email", "p") + "<span>" + (temLink(r.email) ? '<a href="mailto:' + esc(r.email) + '">' + esc(r.email) + "</a>" : t(r.email)) + "</span></li>" +
      "</ul></div></div>" +
      '<div class="rodape-base"><span>© ' + ano + " " + esc(G.nomeEscola || "") + " · " + esc(G.unidade || "") + "</span>" + (r.creditos ? '<span class="creditos">' + esc(r.creditos) + "</span>" : "") + "</div>" +
      "</div></footer>";
  }

  function faixa(opts) {
    var trilha = '<nav class="trilha" aria-label="Você está em"><a href="index.html">Início</a>' +
      lista(opts.trilha).map(function (x) {
        return "<span aria-hidden=\"true\">/</span>" + (x.link ? '<a href="' + x.link + '">' + esc(x.titulo) + "</a>" : "<span>" + esc(x.titulo) + "</span>");
      }).join("") + "</nav>";
    var principal = trilha +
      (opts.rotulo ? '<span class="rotulo">' + esc(opts.rotulo) + "</span>" : "") +
      "<h1>" + esc(opts.titulo) + "</h1>" +
      (opts.sub ? '<p class="sub">' + t(opts.sub) + "</p>" : "") +
      (opts.extra || "");
    // opts.marcaDagua: asterisco grande e translúcido ao fundo da faixa
    var abre = '<section class="faixa' + (opts.marcaDagua ? " com-marca-dagua" : "") + '">' +
      (opts.marcaDagua ? asterisco("asterisco-fundo") : "");
    // opts.lateral: conteúdo em destaque do lado direito (ex.: turmas da série)
    if (opts.lateral) {
      return abre + '<div class="container faixa-grade"><div class="faixa-principal">' + principal + "</div>" +
        '<div class="faixa-lateral">' + opts.lateral + "</div></div></section>";
    }
    return abre + '<div class="container">' + principal + "</div></section>";
  }

  function listaAvisos(avisos) {
    return '<ul class="lista-avisos">' + lista(avisos).map(function (a) {
      return "<li><div class=\"aviso-meta\">" + icone("calendario", "p") + "<span>" + t(a.data) + "</span>" +
        (a.destaque ? '<span class="selo-destaque">Importante</span>' : "") + "</div>" +
        "<h3>" + t(a.titulo) + "</h3><p>" + t(a.texto) + "</p></li>";
    }).join("") + "</ul>";
  }

  /* =================================================================
     PÁGINAS
     ================================================================= */

  function paginaInicio() {
    function card(c) {
      var topo = c.numero
        ? '<span class="numero">' + esc(c.numero) + "</span>"
        : '<span class="icone-caixa">' + icone(c.icone, "g") + "</span>";
      return '<a class="card-grande surge' + (c.numero ? " serie" : "") + (c.largo ? " largo" : "") + '" href="' + esc(c.link) + '">' + topo +
        '<div class="card-texto"><h3>' + esc(c.titulo) + "</h3><p>" + t(c.descricao) + "</p></div>" +
        '<span class="ir">Acessar ' + icone("seta", "p") + "</span></a>";
    }
    // Cards agrupados pelo campo "grupo" (na ordem em que aparecem em geral.js)
    var ordem = [], porGrupo = {};
    lista(G.cards).filter(ligado).forEach(function (c) {
      var g = c.grupo || "";
      if (!porGrupo[g]) { porGrupo[g] = []; ordem.push(g); }
      porGrupo[g].push(c);
    });
    var cards = ordem.map(function (g) {
      return '<div class="grupo-cards">' + (g ? '<h3 class="grupo-cards-titulo">' + asterisco("grupo-ast") + "<span>" + esc(g) + "</span></h3>" : "") +
        '<div class="grade-cards n' + porGrupo[g].length + '">' + porGrupo[g].map(card).join("") + "</div></div>";
    }).join("");

    // Subtítulo: o trecho antes da barra "|" aparece em destaque
    var sub = "";
    if (G.subtituloPortal) {
      var partes = String(G.subtituloPortal).split("|");
      sub = '<p class="hero-subtitulo">' + (partes.length > 1
        ? "<strong>" + esc(partes[0].trim()) + '</strong><span class="barra" aria-hidden="true">|</span>' + esc(partes.slice(1).join("|").trim())
        : esc(G.subtituloPortal)) + "</p>";
    }

    var foto = G.imagemInicio
      ? '<figure class="hero-foto"><img src="' + esc(G.imagemInicio) + '" alt="' + esc(G.imagemInicioDescricao || "") + '" width="800" height="533"></figure>'
      : "";

    return barraAvisos() +
      '<section class="inicio-hero"><div class="container ' + (foto ? "hero-com-foto" : "hero-unico") + '">' +
      "<div>" +
      "<h1>" + esc(G.tituloPortal || "Portal do Ensino Médio").replace(/(Ensino Médio)$/, "<em>$1</em>") + "</h1>" +
      sub +
      '<p class="apresentacao">' + t(G.apresentacao) + "</p>" +
      (G.avisoPortal ? '<p class="aviso-portal" role="note">' + icone("info", "p") + "<span>" + t(G.avisoPortal) + "</span></p>" : "") +
      '<div class="acoes"><a class="botao claro" href="#areas">Explorar o portal ' + icone("seta", "p") + "</a>" +
      '<a class="botao contorno" href="contatos.html">' + icone("telefone", "p") + "Contatos</a></div></div>" +
      foto +
      "</div></section>" +

      '<section class="secao" id="areas"><div class="container">' +
      '<div class="secao-topo"><div><h2>Navegue pelo portal</h2><p>Escolha a sua série ou acesse as informações gerais da escola.</p></div></div>' +
      cards + "</div></section>";
  }

  /* ---------- Barra de avisos rolante (página inicial) ----------
     Junta, sozinha, as informações do site:
       1. avisos escritos à mão em conteudo/geral.js (avisosRolantes)
       2. próximas provas de vestibular (conteudo/vestibulares.js)
       3. próximas datas do calendário escolar (conteudo/eventos-calendario.js)
       4. conquistas do Painel dos campeões do Conecta (conteudo/conecta.js) */
  function avisosRolantes() {
    var hoje = dataDeHoje(), itens = [];
    function quando(d) {
      var f = diasAte(hoje, d);
      return f <= 0 ? "hoje" : f === 1 ? "amanhã" : "em " + f + " dias";
    }
    function juntar(nomes) { return nomes.length > 1 ? nomes.slice(0, -1).join(", ") + " e " + nomes[nomes.length - 1] : nomes[0]; }

    // 1. Avisos manuais
    lista(G.avisosRolantes).forEach(function (a) {
      if (typeof a === "string") a = { texto: a };
      if (a && a.texto && a.texto !== MARCADOR) itens.push({ tag: a.tag || "Aviso", texto: a.texto, link: a.link || "" });
    });

    // 2. Vestibulares dos próximos 60 dias (provas do mesmo dia ficam juntas)
    var V = C.vestibulares || {}, porDia = {};
    lista(V.provas).forEach(function (p) {
      var dias = lista(p.dias).map(lerData).filter(Boolean).sort(function (a, b) { return a - b; });
      if (!dias.length || dias[dias.length - 1] < hoje) return;
      var ini = dias.filter(function (d) { return d >= hoje; })[0];
      if (diasAte(hoje, ini) > 60) return;
      var k = +ini;
      (porDia[k] = porDia[k] || { data: ini, nomes: [] }).nomes.push(p.instituicao);
    });
    Object.keys(porDia).sort(function (a, b) { return a - b; }).slice(0, 4).forEach(function (k) {
      var g = porDia[k], enem = g.nomes.length === 1 && /enem/i.test(g.nomes[0]);
      itens.push({ tag: "Vestibulares",
        texto: (enem ? "**ENEM**" : (g.nomes.length > 1 ? "Provas da " : "Prova da ") + "**" + juntar(g.nomes) + "**") +
          " em " + dataCurta(g.data) + " (" + quando(g.data) + ")",
        link: "vestibulares.html#proximas" });
    });

    // 3. Calendário escolar: próximos 21 dias (sem datas comemorativas)
    var ev = {};
    [["1", "1ª e 2ª séries"], ["3", "3ª série"]].forEach(function (s) {
      eventosDaSerie(s[0]).forEach(function (e) {
        var tipo = TIPOS_EVENTO[e.tipo] || {};
        var ini = lerData(e.data), fim = lerData(e.ate) || ini;
        if (!ini || tipo.ocultar || e.tipo === "vestibular" || fim < hoje || diasAte(hoje, ini) > 21) return;
        var k = e.data + "|" + e.titulo;
        if (ev[k]) { ev[k].series.push(s[1]); return; }
        ev[k] = { ini: ini, fim: fim, titulo: e.titulo, serie: s[0], series: [s[1]] };
      });
    });
    Object.keys(ev).map(function (k) { return ev[k]; })
      .sort(function (a, b) { return a.ini - b.ini; }).slice(0, 5).forEach(function (e) {
        var quem = e.series.length > 1 ? "Ensino Médio" : e.series[0];
        var data = e.ini < hoje ? "até " + dataCurta(e.fim) : +e.fim !== +e.ini ? dataCurta(e.ini) + " a " + dataCurta(e.fim) : dataCurta(e.ini);
        itens.push({ tag: quem, texto: "**" + e.titulo + "** — " + data + (e.ini >= hoje ? " (" + quando(e.ini) + ")" : ""),
          link: "serie.html?s=" + e.serie + "#avisos" });
      });

    // 4. Conquistas do Conecta (ouro primeiro)
    var ordem = { ouro: 0, prata: 1, bronze: 2 };
    lista((C.conecta || {}).campeoes).filter(function (c) { return c && c.descricao; })
      .sort(function (a, b) { return (ordem[a.medalha] != null ? ordem[a.medalha] : 9) - (ordem[b.medalha] != null ? ordem[b.medalha] : 9); })
      .forEach(function (c) {
        itens.push({ tag: "Conecta", medalha: c.medalha, texto: c.descricao, link: "conecta.html#campeoes" });
      });
    return itens;
  }

  function barraAvisos() {
    var itens = avisosRolantes();
    if (!itens.length) return "";
    var corMedalha = { ouro: "#e8b923", prata: "#b9c2cc", bronze: "#c98a4b" };
    var html = itens.map(function (x) {
      var medalha = x.medalha && corMedalha[x.medalha]
        ? '<span class="ticker-medalha" style="background:' + corMedalha[x.medalha] + '" aria-hidden="true"></span>' : "";
      var corpo = '<span class="ticker-tag">' + esc(x.tag) + "</span>" + medalha + "<span>" + t(x.texto) + "</span>";
      return '<li class="ticker-item">' + (x.link ? '<a href="' + esc(x.link) + '">' + corpo + "</a>" : corpo) + "</li>";
    }).join("");
    // A lista aparece duas vezes para a rolagem emendar sem "buraco"; a cópia é escondida dos leitores de tela
    return '<section class="ticker" aria-label="Avisos importantes">' +
      '<div class="ticker-janela"><div class="ticker-trilho"><ul class="ticker-lista">' + html + "</ul>" +
      '<ul class="ticker-lista" aria-hidden="true">' + html.replace(/<a /g, '<a tabindex="-1" ') + "</ul></div></div>" +
      '<button type="button" class="ticker-pausa" aria-label="Pausar avisos" aria-pressed="false">' +
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg></button></section>';
  }

  // Velocidade constante (pixels por segundo), qualquer que seja a quantidade de avisos
  function montarBarraAvisos() {
    var barra = document.querySelector(".ticker");
    if (!barra) return;
    var trilho = barra.querySelector(".ticker-trilho"), lista1 = barra.querySelector(".ticker-lista");
    // 40 pixels por segundo: devagar o bastante para ler com calma
    function ajustar() { trilho.style.animationDuration = Math.max(30, lista1.scrollWidth / 40) + "s"; }
    ajustar();
    window.addEventListener("resize", ajustar);
    var botao = barra.querySelector(".ticker-pausa");
    botao.addEventListener("click", function () {
      var pausado = barra.classList.toggle("pausado");
      botao.setAttribute("aria-pressed", pausado ? "true" : "false");
      botao.setAttribute("aria-label", pausado ? "Continuar avisos" : "Pausar avisos");
      botao.innerHTML = pausado
        ? '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M7 5l12 7-12 7z"/></svg>'
        : '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>';
    });
  }

  /* ---------- Alertas automáticos do calendário ----------
     Lê os eventos de conteudo/eventos-calendario.js e compara com a data de hoje.
     Para testar outra data, abra a página com ?s=1&hoje=2026-10-10 no endereço. */
  var TIPOS_EVENTO = {
    prova:        { rotulo: "Prova",             icone: "prancheta", alerta: true },
    simulado:     { rotulo: "Simulado",          icone: "documento", alerta: true },
    vestibular:   { rotulo: "ENEM / Vestibular", icone: "capelo",    alerta: true },
    feriado:      { rotulo: "Feriado",           icone: "sol",       alerta: true },
    aulas:        { rotulo: "Aulas",             icone: "livro",     alerta: true },
    entrega:      { rotulo: "Entrega",           icone: "documento", alerta: true },
    evento:       { rotulo: "Evento",            icone: "pessoas",   alerta: false },
    comemorativo: { rotulo: "Data comemorativa", icone: "coracao",   alerta: false, ocultar: true }
  };
  var DIAS_LISTA = 30;   // mostra as datas dos próximos 30 dias
  var MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  var SEMANA = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

  function eventosDaSerie(n) {
    var todos = (C.eventosCalendario || {})[n];
    return Array.isArray(todos) ? todos : [];
  }
  function lerData(txt) {
    var p = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(txt || "").trim());
    return p ? new Date(+p[1], +p[2] - 1, +p[3]) : null;
  }
  function dataDeHoje() {
    var teste = lerData(param("hoje"));
    if (teste) return teste;
    var d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }
  function diasAte(de, ate) { return Math.round((ate - de) / 86400000); }
  function dataCurta(d) { return ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2); }
  function dataLonga(d) { return SEMANA[d.getDay()] + ", " + d.getDate() + " de " + MESES[d.getMonth()]; }

  function alertasCalendario(eventos) {
    if (!eventos.length) return "";
    var hoje = dataDeHoje();

    // Prepara os eventos: início, fim e situação em relação a hoje
    var itens = [];
    eventos.forEach(function (e) {
      var tipo = TIPOS_EVENTO[e.tipo] || TIPOS_EVENTO.evento;
      var ini = lerData(e.data);
      if (!ini || tipo.ocultar) return;
      var fim = lerData(e.ate) || ini;
      if (fim < hoje) return;                         // já passou
      var faltam = diasAte(hoje, ini);
      if (faltam > DIAS_LISTA && !tipo.alerta) return;
      itens.push({ e: e, tipo: tipo, ini: ini, fim: fim, faltam: faltam, emAndamento: ini <= hoje });
    });
    itens.sort(function (a, b) { return (a.ini - b.ini) || (a.fim - b.fim); });

    function quando(i) {
      if (i.faltam <= 0 && diasAte(hoje, i.fim) > 0) return i.faltam === 0 ? "Começa hoje" : "Em andamento · até " + dataCurta(i.fim);
      if (i.faltam === 0) return "Hoje";
      if (i.faltam === 1) return "Amanhã";
      return "Em " + i.faltam + " dias";
    }
    function periodo(i) {
      return i.fim > i.ini ? dataCurta(i.ini) + " a " + dataCurta(i.fim) : dataLonga(i.ini);
    }

    // Alerta principal: o compromisso importante mais próximo (e os do mesmo dia)
    var importantes = itens.filter(function (i) { return i.tipo.alerta; });
    var destaque = "";
    var usados = [];
    if (importantes.length) {
      var primeiro = importantes[0];
      var chaveDia = primeiro.emAndamento ? 0 : primeiro.faltam;
      var doDia = importantes.filter(function (i) { return (i.emAndamento ? 0 : i.faltam) === chaveDia; });
      usados = doDia;
      var numero = chaveDia <= 0 ? "Hoje" : chaveDia === 1 ? "Amanhã" : chaveDia;
      var legenda = chaveDia <= 1 ? "" : "dias";
      destaque = '<div class="alerta-principal" role="status">' +
        '<div class="alerta-contagem"><span class="alerta-numero' + (typeof numero === "string" ? " texto" : "") + '">' + numero + "</span>" +
        (legenda ? '<span class="alerta-legenda">' + legenda + "</span>" : "") + "</div>" +
        '<div class="alerta-corpo"><span class="alerta-rotulo">' + icone("sino", "p") + (chaveDia <= 0 ? "Atenção: é hoje" : "Próximo compromisso") + "</span>" +
        doDia.map(function (i) {
          return '<div class="alerta-evento"><h3>' + esc(i.e.titulo) + "</h3>" +
            '<p class="alerta-data">' + esc(periodo(i)) + (i.emAndamento && i.fim > hoje ? " · em andamento" : "") +
            ' <span class="etiqueta-tipo tipo-' + esc(i.e.tipo) + '">' + esc(i.tipo.rotulo) + "</span></p>" +
            (i.e.detalhe ? '<p class="alerta-detalhe">' + esc(i.e.detalhe) + "</p>" : "") + "</div>";
        }).join("") +
        "</div></div>";
    } else {
      destaque = '<div class="alerta-principal vazio"><div class="alerta-corpo"><span class="alerta-rotulo">' + icone("sino", "p") +
        "Calendário</span><h3>Nenhum compromisso importante pela frente</h3>" +
        '<p class="alerta-detalhe">Não há provas, simulados ou feriados previstos no calendário a partir de hoje.</p></div></div>';
    }

    // Lista das próximas datas (sem repetir o que já está no destaque)
    var proximas = itens.filter(function (i) { return usados.indexOf(i) === -1 && i.faltam <= DIAS_LISTA; }).slice(0, 8);
    var listaHtml = proximas.length
      ? '<ul class="proximas-datas">' + proximas.map(function (i) {
          return '<li><span class="data-bloco"><strong>' + i.ini.getDate() + "</strong><small>" + MESES[i.ini.getMonth()].slice(0, 3) + "</small></span>" +
            '<span class="txt"><strong>' + esc(i.e.titulo) + "</strong>" +
            "<small>" + (i.fim > i.ini ? esc(periodo(i)) + " · " : "") + '<span class="etiqueta-tipo tipo-' + esc(i.e.tipo) + '">' + esc(i.tipo.rotulo) + "</span></small></span>" +
            '<span class="quando' + (i.faltam <= 1 ? " perto" : "") + '">' + esc(quando(i)) + "</span></li>";
        }).join("") + "</ul>"
      : '<p class="proximas-vazio">Nenhuma outra data nos próximos ' + DIAS_LISTA + " dias.</p>";

    return '<p class="hoje-e">' + icone("calendario", "p") + "Hoje é " + dataLonga(hoje) + " de " + hoje.getFullYear() + ".</p>" +
      '<div class="avisos-automaticos">' + destaque +
      '<div class="proximas"><h3 class="avisos-subtitulo">Próximas datas</h3>' + listaHtml + "</div></div>" +
      '<p class="avisos-fonte">Alertas gerados automaticamente a partir do calendário da série.</p>';
  }

  /* ---------- Composição da nota (página da série) ----------
     Dados em conteudo/serie-N.js, nos blocos "composicaoNota" e "composicaoRedacao".
     id / iconeTitulo: identificação da seção (para o menu de atalhos) e ícone do título. */
  function composicaoNota(N, titulo, id, iconeTitulo) {
    var componentes = lista(N.componentes).map(function (c) {
      return '<div class="nota-item' + (c.destaque ? " nota-" + esc(c.destaque) : "") + '">' +
        (c.etiqueta ? '<span class="nota-etiqueta">' + esc(c.etiqueta) + "</span>" : "") +
        '<span class="nota-sigla">' + esc(c.sigla) + "</span>" +
        '<span class="nota-valor">' + esc(c.valor) + "</span>" +
        (c.peso ? '<span class="nota-peso">Peso ' + esc(c.peso) + "</span>" : "") +
        '<span class="nota-nome">' + t(c.nome) + "</span></div>";
    }).join("");
    // Muitos componentes: no máximo 4 por linha
    var qtd = Math.max(1, lista(N.componentes).length);
    var colunas = qtd > 6 ? (qtd % 5 === 0 ? 5 : 4) : qtd;

    var calculo = lista(N.calculo).map(function (c) {
      return '<div class="calculo-linha"><dt>' + esc(c.rotulo) + '</dt><dd><span class="formula">' + t(c.formula) + "</span></dd></div>";
    }).join("");

    var exame = N.exame
      ? '<div class="nota-caixa nota-exame"><h3>' + icone("prancheta", "p") + esc(N.exame.titulo || "Exame final") + "</h3>" +
        lista(N.exame.textos).map(function (x) { return "<p>" + t(x) + "</p>"; }).join("") +
        (N.exame.formula ? '<div class="calculo-linha exame-formula"><dt>' + esc(N.exame.rotuloFormula || "Aprovação por exame") +
          '</dt><dd><span class="formula">' + t(N.exame.formula) + "</span></dd></div>" : "") +
        "</div>"
      : "";

    // "Entenda cada instrumento": explicação de cada sigla (opcional)
    var instrumentos = lista(N.instrumentos).length
      ? '<h3 class="instrumentos-titulo">Entenda cada instrumento</h3><div class="instrumentos">' +
        lista(N.instrumentos).map(function (x) {
          return '<article class="instrumento"><div class="instrumento-topo"><span class="instrumento-sigla">' + esc(x.sigla) + "</span>" +
            "<h4>" + esc(x.nome) + "</h4></div>" +
            lista(x.textos).map(function (p) { return "<p>" + t(p) + "</p>"; }).join("") +
            (lista(x.itens).length ? '<ul class="instrumento-itens">' + lista(x.itens).map(function (i) { return "<li>" + t(i) + "</li>"; }).join("") + "</ul>" : "") +
            "</article>";
        }).join("") + "</div>"
      : "";

    return '<section class="bloco surge" id="' + esc(id || "nota") + '">' + titulo(iconeTitulo || "prancheta", N.titulo || "Composição da nota") +
      (N.introducao ? '<p class="texto-intro nota-intro">' + t(N.introducao) + "</p>" : "") +
      '<div class="nota-grade" style="--n:' + colunas + '">' + componentes + "</div>" +
      instrumentos +
      '<div class="nota-colunas">' +
      '<div class="nota-caixa"><h3>' + icone("info", "p") + "Como é calculada</h3><dl class=\"calculo\">" + calculo + "</dl>" +
      (N.observacao ? '<p class="calculo-obs">' + t(N.observacao) + "</p>" : "") + "</div>" +
      exame + "</div></section>";
  }

  /* ---------- Calculadora de notas (página da série) ----------
     Usa os componentes e as regras de "composicaoNota" (conteudo/serie-N.js).
     O cálculo em si é feito por montarCalculadora(), depois que a página aparece. */
  function numeroBR(txt) {
    var v = parseFloat(String(txt == null ? "" : txt).replace(/\s/g, "").replace(",", "."));
    return isNaN(v) ? null : v;
  }
  function formatarNota(v) {
    return (Math.round(v * 100) / 100).toFixed(2).replace(/0$/, "").replace(/\.$/, "").replace(".", ",");
  }

  // opts.modo: "anual" (disciplinas: média anual e exame) ou "semestral" (redação: MS ≥ 7 por semestre)
  function calculadoraNotas(N, titulo, opts) {
    opts = opts || {};
    var modo = opts.modo || "anual";
    var comps = lista(N.componentes);
    var regras = N.calculadora || {};
    var subst = lista(regras.recSubstitui);
    function campos(sem) {
      return comps.map(function (c) {
        var max = numeroBR(c.valor);
        var rec = c.destaque === "rec";
        var dica = rec ? "opcional · substitui " + subst.join(" + ") + " se for maior" : (c.destaque === "extra" ? "opcional · máx. " + esc(c.valor) : "máx. " + esc(c.valor));
        return '<label class="calc-campo' + (rec ? " calc-rec" : "") + '">' +
          '<span class="calc-rotulo"><strong>' + esc(c.sigla) + "</strong> " + t(c.nome) + "<small>" + dica + "</small></span>" +
          '<input type="text" inputmode="decimal" autocomplete="off" placeholder="—" data-sem="' + sem + '" data-sigla="' + esc(c.sigla) + '" data-max="' + max + '"' +
          ' aria-label="' + esc(c.sigla) + " — " + sem + 'º semestre"></label>';
      }).join("");
    }
    function semestre(sem) {
      return '<fieldset class="calc-sem"><legend>' + sem + "º semestre</legend>" + campos(sem) +
        '<div class="calc-ms"><span>Média do ' + sem + "º semestre</span><strong data-ms=\"" + sem + '">—</strong></div></fieldset>';
    }
    var intro = opts.intro || "Simule a nota de uma disciplina: digite as notas que você já tem (use vírgula, por exemplo <strong>2,5</strong>). O resultado aparece na hora.";
    return '<section class="bloco surge" id="' + esc(opts.id || "calculadora") + '">' + titulo("calculadora", opts.titulo || "Calculadora de notas") +
      '<p class="texto-intro nota-intro">' + intro + "</p>" +
      '<div class="calc" data-calc data-modo="' + modo + '" data-aprov="' + (regras.mediaAprovacao || 7) + '" data-exame="' + (regras.mediaExame || 5) + '" data-subst="' + esc(subst.join(",")) + '">' +
      '<div class="calc-topo">' +
      (modo === "anual" ? '<label class="calc-disciplina"><span>Disciplina</span><input type="text" placeholder="Ex.: Matemática (opcional)" data-disciplina></label>' : "<span></span>") +
      '<button type="button" class="botao linha" data-calc-limpar>' + icone("fechar", "p") + "Limpar</button></div>" +
      '<div class="calc-semestres">' + semestre(1) + semestre(2) + "</div>" +
      '<div class="calc-resultado" aria-live="polite" data-calc-resultado></div>' +
      '<p class="calc-aviso">' + icone("info", "p") + "Esta é apenas uma simulação. A nota oficial é sempre a publicada no Portal do Aluno.</p>" +
      "</div></section>";
  }

  function montarCalculadora() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-calc]"), montarUmaCalculadora);
  }

  function montarUmaCalculadora(raiz) {
    var modo = raiz.getAttribute("data-modo") || "anual";
    var aprov = +raiz.getAttribute("data-aprov");
    var exameMin = +raiz.getAttribute("data-exame");
    var subst = (raiz.getAttribute("data-subst") || "").split(",").filter(Boolean);
    var entradas = Array.prototype.slice.call(raiz.querySelectorAll("input[data-sem]"));
    var saida = raiz.querySelector("[data-calc-resultado]");
    var disciplina = raiz.querySelector("[data-disciplina]") || { value: "", addEventListener: function () {} };

    function media(sem) {
      var notas = {}, faltando = [], invalido = false, restanteMax = 0;
      entradas.filter(function (i) { return i.getAttribute("data-sem") === String(sem); }).forEach(function (i) {
        var sigla = i.getAttribute("data-sigla"), max = +i.getAttribute("data-max");
        var opcional = i.closest(".calc-rec") || /opcional/.test(i.closest(".calc-campo").textContent);
        var v = numeroBR(i.value);
        var erro = i.value.trim() !== "" && (v === null || v < 0 || v > max);
        i.classList.toggle("invalido", erro);
        if (erro) { invalido = true; return; }
        if (v === null) { if (!opcional) { faltando.push(sigla); restanteMax += max; } return; }
        notas[sigla] = v;
      });
      var provas = subst.reduce(function (s, k) { return s + (notas[k] || 0); }, 0);
      var usouRec = notas.REC != null && notas.REC > provas;
      var total = 0;
      Object.keys(notas).forEach(function (k) { if (k !== "REC" && subst.indexOf(k) === -1) total += notas[k]; });
      total += usouRec ? notas.REC : provas;
      return { valor: Math.min(10, total), completo: !faltando.length && !invalido, faltando: faltando, restanteMax: restanteMax, invalido: invalido, usouRec: usouRec, temAlgo: Object.keys(notas).length > 0 };
    }

    // Redação: cada semestre é avaliado sozinho (MS ≥ média de aprovação)
    function calcularSemestral(m1, m2) {
      var linhas = [], algumAbaixo = false, algumOk = false;
      [m1, m2].forEach(function (m, idx) {
        if (!m.temAlgo) return;
        var sem = "<strong>" + (idx + 1) + "º semestre:</strong> ";
        if (m.completo) {
          if (m.valor >= aprov) { algumOk = true; linhas.push(sem + "média <strong>" + formatarNota(m.valor) + "</strong> — atingiu a média " + aprov + "."); }
          else { algumAbaixo = true; linhas.push(sem + "média <strong>" + formatarNota(m.valor) + "</strong> — abaixo de " + aprov + ". É recomendada a <strong>recuperação semestral (REC)</strong>."); }
        } else {
          var falta = aprov - m.valor;
          if (falta <= 0) { algumOk = true; linhas.push(sem + "você já atingiu a média " + aprov + ", mesmo sem as notas que faltam (" + esc(m.faltando.join(", ")) + ")."); }
          else if (falta > m.restanteMax + 1e-9) { algumAbaixo = true; linhas.push(sem + "mesmo com a nota máxima no que falta (" + esc(m.faltando.join(", ")) + "), a média ficaria abaixo de " + aprov + ". É recomendada a <strong>recuperação semestral (REC)</strong>."); }
          else linhas.push(sem + "para chegar à média " + aprov + ", você precisa somar pelo menos <strong>" + formatarNota(falta) + "</strong> nas notas que faltam (" + esc(m.faltando.join(", ")) + " — valem até " + formatarNota(m.restanteMax) + ").");
        }
      });
      if (!linhas.length) return { html: "Digite suas notas de redação para ver a média.", classe: "" };
      return { html: linhas.join("<br>"), classe: algumAbaixo ? "exame" : (algumOk && !linhas.some(function (l) { return /precisa somar/.test(l); }) ? "ok" : "info") };
    }

    function calcular() {
      var m1 = media(1), m2 = media(2);
      [m1, m2].forEach(function (m, idx) {
        var alvo = raiz.querySelector('[data-ms="' + (idx + 1) + '"]');
        alvo.textContent = m.temAlgo ? formatarNota(m.valor) + (m.completo ? "" : " (parcial)") : "—";
        alvo.parentNode.classList.toggle("ok", m.completo && m.valor >= aprov);
      });
      if (modo === "semestral") {
        var r = (m1.invalido || m2.invalido)
          ? { html: "Há uma nota fora do limite (veja os campos em vermelho). Confira o valor máximo de cada nota.", classe: "alerta" }
          : calcularSemestral(m1, m2);
        if ((m1.usouRec || m2.usouRec) && r.classe !== "alerta") r.html += " <small>A REC foi usada no lugar de " + esc(subst.join(" + ")) + ", pois é maior.</small>";
        saida.className = "calc-resultado " + r.classe;
        saida.innerHTML = r.html;
        return;
      }
      var nome = disciplina.value.trim() ? "em <strong>" + esc(disciplina.value.trim()) + "</strong>" : "nesta disciplina";
      var html = "", classe = "";
      if (m1.invalido || m2.invalido) {
        html = "Há uma nota fora do limite (veja os campos em vermelho). Confira o valor máximo de cada nota.";
        classe = "alerta";
      } else if (m1.completo && m2.completo) {
        var anual = (m1.valor + m2.valor) / 2;
        if (anual >= aprov) {
          html = "<strong>Aprovado(a)</strong> " + nome + " com média anual <strong>" + formatarNota(anual) + "</strong>.";
          classe = "ok";
        } else {
          var precisa = 2 * exameMin - anual;
          html = "Média anual <strong>" + formatarNota(anual) + "</strong>: abaixo de " + aprov + ", então haverá <strong>exame final</strong>. " +
            "Para ser aprovado(a), você precisa de pelo menos <strong>" + formatarNota(precisa) + "</strong> no exame.";
          classe = "exame";
        }
      } else if (m1.completo && !m2.temAlgo) {
        var falta2 = 2 * aprov - m1.valor;
        html = falta2 <= 0
          ? "Com essa média no 1º semestre, você já garante a média anual " + aprov + " " + nome + "."
          : falta2 > 10
            ? "Mesmo tirando 10 no 2º semestre, a média anual ficaria abaixo de " + aprov + ": haveria exame final."
            : "Para fechar a média anual " + aprov + " " + nome + ", você precisa de pelo menos <strong>" + formatarNota(falta2) + "</strong> no 2º semestre.";
        classe = falta2 > 10 ? "exame" : "info";
      } else if (m1.temAlgo || m2.temAlgo) {
        var falt = [];
        if (m1.temAlgo && !m1.completo) falt.push("1º semestre: " + m1.faltando.join(", "));
        if (m2.temAlgo && !m2.completo) falt.push("2º semestre: " + m2.faltando.join(", "));
        html = "Continue preenchendo. Faltam: " + esc(falt.join(" · ")) + ".";
        classe = "info";
      } else {
        html = "Digite suas notas para ver a média.";
      }
      if ((m1.usouRec || m2.usouRec) && classe !== "alerta") html += " <small>A REC foi usada no lugar de " + esc(subst.join(" + ")) + ", pois é maior.</small>";
      saida.className = "calc-resultado " + classe;
      saida.innerHTML = html;
    }

    entradas.concat([disciplina]).forEach(function (i) { i.addEventListener("input", calcular); });
    raiz.querySelector("[data-calc-limpar]").addEventListener("click", function () {
      entradas.forEach(function (i) { i.value = ""; });
      disciplina.value = "";
      calcular();
      entradas[0].focus();
    });
    calcular();
  }

  /* ---------- Avaliação das disciplinas eletivas e Projeto de Vida ----------
     Dados em conteudo/eletivas.js */
  // S (opcional): a série pode trocar o título (eletivasTitulo) e a abertura (eletivasIntroducao)
  function avaliacaoEletivas(E, titulo, S) {
    S = S || {};
    var tituloSecao = S.eletivasTitulo || E.titulo || "Disciplinas eletivas e Projeto de Vida";
    var introducao = S.eletivasIntroducao || E.introducao;
    var niveis = lista(E.niveis);
    function etiqueta(n) {
      return '<span class="nivel-sigla nivel-' + esc(n.cor || "verde") + '" title="' + esc(n.nome) + '">' + esc(n.sigla) + "</span>";
    }
    var legenda = '<ul class="niveis-legenda">' + niveis.map(function (n) {
      return "<li>" + etiqueta(n) + "<span>" + esc(n.nome) + "</span></li>";
    }).join("") + "</ul>";

    var cards = lista(E.indicadores).map(function (ind, i) {
      return '<article class="indicador">' +
        '<div class="indicador-info"><span class="indicador-num">' + ("0" + (i + 1)).slice(-2) + "</span>" +
        "<h3>" + t(ind.titulo) + "</h3>" +
        (ind.espera ? '<p class="indicador-espera"><strong>O que se espera avaliar:</strong> ' + t(ind.espera) + "</p>" : "") + "</div>" +
        '<ul class="indicador-niveis">' + niveis.map(function (n) {
          var txt = (ind.niveis || {})[n.sigla];
          // Só a sigla ao lado da descrição (o significado está na legenda do topo)
          return txt ? "<li>" + etiqueta(n) + "<span>" + t(txt) + "</span></li>" : "";
        }).join("") + "</ul></article>";
    }).join("");

    return '<section class="bloco surge" id="eletivas">' + titulo("estrela", tituloSecao) +
      (introducao ? '<p class="texto-intro nota-intro">' + t(introducao) + "</p>" : "") +
      legenda + '<div class="indicadores">' + cards + "</div></section>";
  }

  function paginaSerie() {
    var n = param("s");
    var series = C.series || {};
    if (!series[n]) n = "1";
    var S = series[n];
    if (!S) return naoEncontrado("Série não encontrada", "index.html", "Voltar ao início");
    document.title = S.titulo + " · " + (G.tituloPortal || "Portal do Ensino Médio");

    var seletor = '<div class="seletor-series" aria-label="Outras séries">' + ["1", "2", "3"].filter(function (k) { return series[k]; }).map(function (k) {
      return '<a href="serie.html?s=' + k + '"' + (k === n ? ' class="ativo" aria-current="page"' : "") + ">" + esc(series[k].titulo) + "</a>";
    }).join("") + "</div>";

    // Uma seção só aparece se existir no arquivo da série (conteudo/serie-N.js)
    function tem(chave) {
      if (chave === "calendario" && S.calendarioPdf) return true;
      if (chave === "avisos" && eventosDaSerie(n).length) return true;
      if (chave === "nota") return !!S.composicaoNota;
      if (chave === "redacao") return !!S.composicaoRedacao;
      if (chave === "calculadora") return !!(S.composicaoNota && S.composicaoNota.calculadora);
      if (chave === "calc-redacao") return !!(S.composicaoRedacao && S.composicaoRedacao.calculadora);
      if (chave === "eletivas") return !!(S.mostrarEletivas && C.avaliacaoEletivas);
      return Array.isArray(S[chave]);
    }
    var secoes = [
      ["informacoes", "Informações"], ["disciplinas", "Disciplinas"], ["calendario", "Calendário"],
      ["avisos", "Avisos"], ["nota", "Composição da nota"], ["calculadora", "Calculadora de notas"], ["redacao", "Redação"], ["calc-redacao", "Calculadora de redação"], ["eletivas", S.eletivasAtalho || "Eletivas e Projeto de Vida"], ["avaliacoes", "Avaliações"], ["materiais", "Materiais"], ["links", "Links úteis"]
    ].filter(function (s) { return tem(s[0]); });
    var subnav = '<nav class="subnav" aria-label="Seções da série"><div class="container">' +
      secoes.map(function (s) { return '<a href="#' + s[0] + '">' + s[1] + "</a>"; }).join("") + "</div></nav>";

    function titulo(ic, txt) {
      return '<div class="titulo-bloco"><span class="icone-caixa">' + icone(ic) + "</span><h2>" + txt + "</h2></div>";
    }

    var info = '<section class="bloco surge" id="informacoes">' + titulo("info", "Informações da série") +
      (S.apresentacao ? '<p class="texto-intro">' + t(S.apresentacao) + "</p>" : "") +
      '<dl class="info-grade">' + lista(S.informacoes).map(function (i) {
        return '<div class="info-item"><dt>' + esc(i.rotulo) + "</dt><dd>" + t(i.valor) + "</dd></div>";
      }).join("") + "</dl></section>";

    var disc = '<section class="bloco surge" id="disciplinas">' + titulo("livro", "Disciplinas") +
      '<div class="grade-disciplinas">' + lista(S.disciplinas).map(function (d) {
        return '<article class="card"><h3>' + t(d.nome) + "</h3>" +
          '<p class="linha-dado">' + icone("usuario", "p") + "<span>Professor(a): " + t(d.professor) + "</span></p>" +
          '<p class="linha-dado">' + icone("relogio", "p") + "<span>Carga horária: " + t(d.cargaHoraria) + "</span></p></article>";
      }).join("") + "</div></section>";

    var cal;
    if (S.calendarioPdf) {
      // Calendário em PDF: as páginas são desenhadas pelo próprio site (ver montarVisorPdf),
      // assim funciona igual em qualquer navegador, sem baixar o arquivo
      var pdf = encodeURI(S.calendarioPdf);
      cal = '<div id="calendario"><div class="calendario-topo">' + titulo("calendario", "Calendário") +
        '<div class="calendario-acoes">' +
        '<button type="button" class="botao primario" data-pdf-tela-cheia>' + icone("expandir", "p") + "Tela cheia</button>" +
        '<a class="botao linha" href="' + esc(pdf) + '" download>' + icone("download", "p") + "Baixar PDF</a></div></div>" +
        '<div class="pdf-visor" data-pdf="' + esc(S.calendarioPdf) + '" role="region" aria-label="Calendário da ' + esc(S.titulo) + '">' +
        '<button type="button" class="botao primario pdf-fechar" data-pdf-fechar>' + icone("fechar", "p") + "Fechar</button>" +
        '<div class="pdf-paginas" tabindex="0"><p class="pdf-status">Carregando calendário…</p></div></div></div>';
    } else {
      cal = '<div id="calendario">' + titulo("calendario", "Calendário") +
        '<ol class="linha-tempo">' + lista(S.calendario).map(function (e) {
          return '<li><span class="data">' + t(e.data) + "</span><h3>" + t(e.titulo) + "</h3><p>" + t(e.descricao) + "</p></li>";
        }).join("") + "</ol></div>";
    }

    // Avisos: alertas automáticos do calendário + avisos escritos à mão (se houver)
    var manuais = lista(S.avisos);
    var avisos = '<div id="avisos">' + titulo("sino", "Avisos") +
      alertasCalendario(eventosDaSerie(n)) +
      (manuais.length
        ? (eventosDaSerie(n).length ? '<h3 class="avisos-subtitulo">Outros avisos</h3>' : "") +
          '<div class="caixa-avisos">' + listaAvisos(manuais) + "</div>"
        : "") +
      "</div>";

    var aval = '<section class="bloco surge" id="avaliacoes">' + titulo("prancheta", "Avaliações") +
      '<div class="tabela-envolve"><table class="tabela"><thead><tr><th>Disciplina</th><th>Tipo</th><th>Data</th><th>Conteúdo</th></tr></thead><tbody>' +
      lista(S.avaliacoes).map(function (a) {
        return '<tr><td data-rotulo="Disciplina">' + t(a.disciplina) + '</td><td data-rotulo="Tipo">' + t(a.tipo) +
          '</td><td data-rotulo="Data">' + t(a.data) + '</td><td data-rotulo="Conteúdo">' + t(a.conteudo) + "</td></tr>";
      }).join("") + "</tbody></table></div></section>";

    function itemLink(ic, titulo, desc, link) {
      var miolo = '<span class="icone-caixa">' + icone(ic) + '</span><span class="txt"><strong>' + t(titulo) + "</strong>" +
        (desc ? "<small>" + t(desc) + "</small>" : "");
      if (temLink(link)) return "<li><a " + attrLink(link) + ">" + miolo + "</span>" + icone(externo(link) ? "externo" : "seta", "p seta") + "</a></li>";
      return '<li><div class="item">' + miolo + '<small><span class="a-inserir">LINK A INSERIR</span></small></span></div></li>';
    }

    // Material com "arquivo": um clique baixa o arquivo (ex.: PDF)
    function itemDownload(m) {
      var nome = m.nomeDownload || String(m.arquivo).split("/").pop();
      var ext = (String(m.arquivo).split(".").pop() || "").toUpperCase();
      return '<li><a class="item-download" href="' + esc(encodeURI(m.arquivo)) + '" download="' + esc(nome) + '">' +
        '<span class="icone-caixa">' + icone("documento") + '</span><span class="txt"><strong>' + t(m.titulo) + "</strong>" +
        (m.descricao ? "<small>" + t(m.descricao) + "</small>" : "") +
        '<span class="formato">' + esc(ext) + " · Clique para baixar</span></span>" +
        '<span class="baixar-icone">' + icone("download", "p") + "</span></a></li>";
    }

    var mat = '<div id="materiais">' + titulo("pasta", "Materiais") +
      '<ul class="lista-simples">' + lista(S.materiais).map(function (m) {
        return m.arquivo ? itemDownload(m) : itemLink("documento", m.titulo, m.descricao, m.link);
      }).join("") + "</ul></div>";

    var links = '<div id="links">' + titulo("link", "Links úteis") +
      '<ul class="lista-simples">' + lista(S.links).map(function (l) { return itemLink("link", l.titulo, "", l.link); }).join("") + "</ul></div>";

    // Duas seções lado a lado; se só uma existir, ela ocupa a largura toda
    function par(a, htmlA, b, htmlB) {
      var partes = [];
      if (tem(a)) partes.push(htmlA);
      if (tem(b)) partes.push(htmlB);
      if (!partes.length) return "";
      return '<section class="bloco surge">' + (partes.length === 2 ? '<div class="bloco-duplo">' + partes.join("") + "</div>" : partes[0]) + "</section>";
    }

    // Turmas da série, com o asterisco do logo Fleming
    var turmas = lista(S.turmas);
    // O título grande mostra a(s) turma(s) (ex.: "Turma 101", "Turmas 201 e 202"); à direita fica só o asterisco
    var tituloTurmas = turmas.length
      ? (turmas.length > 1 ? "Turmas " + turmas.slice(0, -1).join(", ") + " e " + turmas[turmas.length - 1] : "Turma " + turmas[0])
      : S.titulo;
    var turmasHtml = '<div class="turmas-destaque">' + asterisco() + "</div>";

    return faixa({ trilha: [{ titulo: S.titulo }], rotulo: S.subtitulo, titulo: tituloTurmas, sub: "", extra: seletor, lateral: turmasHtml }) + subnav +
      '<div class="container serie-corpo">' +
      (tem("informacoes") ? info : "") +
      (tem("disciplinas") ? disc : "") +
      // Com PDF, o calendário ocupa a largura toda e os avisos vêm abaixo
      (S.calendarioPdf
        ? '<section class="bloco surge">' + cal + "</section>" + (tem("avisos") ? '<section class="bloco surge">' + avisos + "</section>" : "")
        : par("calendario", cal, "avisos", avisos)) +
      (tem("nota") ? composicaoNota(S.composicaoNota, titulo, "nota", "prancheta") : "") +
      (tem("calculadora") ? calculadoraNotas(S.composicaoNota, titulo) : "") +
      (tem("redacao") ? composicaoNota(S.composicaoRedacao, titulo, "redacao", "documento") : "") +
      (tem("calc-redacao") ? calculadoraNotas(S.composicaoRedacao, titulo, {
        id: "calc-redacao", titulo: "Calculadora de redação", modo: "semestral",
        intro: "Simule a sua média de redação em cada semestre: digite as notas que você já tem (use vírgula, por exemplo <strong>1,2</strong>). O resultado aparece na hora."
      }) : "") +
      (tem("eletivas") ? avaliacaoEletivas(C.avaliacaoEletivas, titulo, S) : "") +
      (tem("avaliacoes") ? aval : "") +
      par("materiais", mat, "links", links) +
      "</div>";
  }

  function paginaRegras() {
    var R = C.regras || {};
    var cats = lista(R.categorias);
    var indice = '<aside class="indice" aria-label="Categorias"><p>Categorias</p><ul>' + cats.map(function (c) {
      return '<li><a href="#' + esc(c.id) + '">' + esc(c.titulo) + "</a></li>";
    }).join("") + "</ul></aside>";

    var corpo = cats.map(function (c) {
      return '<section class="categoria surge" id="' + esc(c.id) + '"><div class="categoria-topo"><span class="icone-caixa">' + icone(c.icone) + "</span>" +
        "<div><h2>" + esc(c.titulo) + "</h2><p>" + t(c.descricao) + "</p></div></div>" +
        '<ol class="lista-regras">' + lista(c.regras).map(function (r) {
          // Regra simples (texto) ou regra com lista: { texto: "...", itens: [...] }
          if (r && typeof r === "object") {
            return "<li>" + comEmails(t(r.texto)) +
              (r.marcador === "nenhum"
                ? '<ol class="subitens sem-numero">'
                : '<ol class="subitens"' + (r.marcador ? ' type="' + esc(r.marcador) + '"' : "") + ">") + lista(r.itens).map(function (i) { return "<li>" + comEmails(t(i)) + "</li>"; }).join("") + "</ol>" +
              (r.depois ? '<p class="regra-depois">' + comEmails(t(r.depois)) + "</p>" : "") + "</li>";
          }
          return "<li>" + comEmails(t(r)) + "</li>";
        }).join("") + "</ol></section>";
    }).join("");

    return faixa({ trilha: [{ titulo: "Regras da Escola" }], rotulo: "Orientações", titulo: "Regras da Escola", sub: R.introducao,
      marcaDagua: true }) +
      '<section class="secao"><div class="container layout-lateral">' + indice + "<div>" + corpo + "</div></div></section>";
  }

  /* ---------- Materiais (conteudo/materiais.js) ----------
     Duas abas internas (1ª e 2ª séries / 3ª série). Cada aba tem grupos (seções
     alternadas branco/cinza) e cada material vira um cartão: capa(s) à esquerda,
     título, "O que é" e "Como usar" à direita. Clique na capa para ampliar. */
  function paginaMateriais() {
    var M = C.materiais || {};
    var abas = lista(M.abas);
    var nFoto = 0;

    function parte(ic, titulo, conteudo) {
      if (!conteudo || (Array.isArray(conteudo) && !conteudo.length)) return "";
      var corpo = Array.isArray(conteudo)
        ? "<ul>" + conteudo.map(function (x) { return "<li>" + comLinks(t(x)) + "</li>"; }).join("") + "</ul>"
        : "<p>" + comLinks(t(conteudo)) + "</p>";
      return '<div class="material-parte"><h4>' + icone(ic, "p") + titulo + "</h4>" + corpo + "</div>";
    }

    function cartao(m) {
      var fotos = lista(m.imagens).filter(Boolean);
      var capas = fotos.length
        ? '<div class="material-capas' + (fotos.length > 1 ? " varias" : "") + '" style="--n:' + fotos.length + '">' + fotos.map(function (f) {
            return '<figure class="material-capa"><a href="' + esc(f) + '" data-ampliar="' + (nFoto++) + '" aria-label="Ampliar capa: ' + esc(m.nome) + '">' +
              '<img src="' + esc(f) + '" alt="Capa: ' + esc(m.nome) + '" loading="lazy"></a>' +
              '<figcaption class="so-leitor"><span class="campeao-titulo"><span>' + esc(m.nome) + "</span></span></figcaption></figure>";
          }).join("") + "</div>"
        : '<div class="material-capas sem-foto">' + icone("imagem", "g") + '<span class="a-inserir">FOTO A INSERIR</span></div>';
      return '<article class="material surge">' + capas +
        '<div class="material-texto"><div class="material-topo"><div class="material-titulo"><h3>' + t(m.nome) + "</h3>" +
        (m.quantidade ? '<span class="material-qtd">' + icone("pasta", "p") + "<span>" + t(m.quantidade) + "</span></span>" : "") + "</div>" +
        (m.link ? '<a class="botao primario material-link" href="' + esc(m.link) + '" target="_blank" rel="noopener">Acessar ' + icone("externo", "p") + "</a>" : "") +
        "</div>" +
        parte("info", "O que é", m.oQueE || m.paraQueServe) +
        parte("prancheta", "Como usar", m.comoUsar) +
        parte("estrela", "Dicas", m.dicas) +
        "</div></article>";
    }

    var ICONES_GRUPO = ["livro", "documento", "pasta", "estrela"];
    function grupos(a) {
      // compatível com o formato antigo (aba com "materiais" direto, sem grupos)
      var gs = a.grupos ? lista(a.grupos) : [{ titulo: "", materiais: a.materiais }];
      return '<div class="serie-corpo materiais-corpo">' + gs.map(function (g, k) {
        return '<section class="bloco">' +
          (g.titulo ? '<div class="titulo-bloco"><span class="icone-caixa">' + icone(g.icone || ICONES_GRUPO[k % ICONES_GRUPO.length]) + "</span><h2>" + t(g.titulo) + "</h2></div>" : "") +
          (g.introducao ? '<div class="etapa-destaque">' + icone("info", "p") + "<div><p>" + t(g.introducao) + "</p></div></div>" : "") +
          '<div class="lista-materiais">' + lista(g.materiais).map(cartao).join("") + "</div></section>";
      }).join("") + "</div>";
    }

    var botoes = '<div class="abas-materiais" role="tablist" aria-label="Escolha a série">' + abas.map(function (a, i) {
      return '<button type="button" role="tab" id="aba-mat-' + i + '" aria-controls="painel-mat-' + i + '" aria-selected="' + (i === 0) + '"' +
        (i ? ' tabindex="-1"' : "") + ">" + esc(a.titulo) + "</button>";
    }).join("") + "</div>";

    var paineis = abas.map(function (a, i) {
      return '<div class="painel-materiais" role="tabpanel" id="painel-mat-' + i + '" aria-labelledby="aba-mat-' + i + '"' + (i ? " hidden" : "") + ">" +
        (a.introducao ? '<p class="texto-intro">' + t(a.introducao) + "</p>" : "") +
        grupos(a) + "</div>";
    }).join("");

    return faixa({ trilha: [{ titulo: "Materiais" }], rotulo: "Guia de uso", titulo: "Materiais", sub: M.introducao, marcaDagua: true }) +
      '<section class="secao materiais-secao"><div class="container">' + apresentacaoMateriais() + botoes + paineis + "</div></section>";

    // Bloco de apresentação antes das abas (asterisco + título + texto justificado)
    function apresentacaoMateriais() {
      var P = M.apresentacao || {};
      if (!P.texto) return "";
      return '<div class="materiais-apresentacao">' + asterisco("materiais-ast") +
        "<div>" + (P.titulo ? "<h2>" + t(P.titulo) + "</h2>" : "") + "<p>" + t(P.texto) + "</p></div></div>";
    }
  }

  // Troca de aba na página Materiais (clique, setas do teclado e endereço #3a-serie)
  function montarAbasMateriais() {
    var lista1 = document.querySelector(".abas-materiais");
    if (!lista1) return;
    var botoes = Array.prototype.slice.call(lista1.querySelectorAll('[role="tab"]'));
    function ativar(i, foco) {
      botoes.forEach(function (b, k) {
        var sim = k === i;
        b.setAttribute("aria-selected", sim ? "true" : "false");
        b.tabIndex = sim ? 0 : -1;
        document.getElementById(b.getAttribute("aria-controls")).hidden = !sim;
      });
      if (foco) botoes[i].focus();
      try { history.replaceState(null, "", i === 1 ? "#3a-serie" : "#1a-2a-series"); } catch (e) {}
      // os cartões da aba que aparece entram já visíveis
      document.querySelectorAll("#painel-mat-" + i + " .surge").forEach(function (el) { el.classList.add("visivel"); });
    }
    botoes.forEach(function (b, i) {
      b.addEventListener("click", function () { ativar(i, false); });
      b.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          ativar((i + (e.key === "ArrowRight" ? 1 : -1) + botoes.length) % botoes.length, true);
        }
      });
    });
    if (/3a-serie/.test(location.hash) && botoes[1]) ativar(1, false);
  }

  /* ---------- Atendimentos (conteudo/atendimentos.js) ----------
     Cada atendimento é uma seção numerada (faixas branco/cinza, como nas séries),
     com um cartão de informações; responsável e contatos vêm da página Contatos. */
  function paginaAtendimentos() {
    var A = C.atendimentos || {};
    var setores = lista((C.contatos || {}).setores);
    // valor pode ser um texto ou uma lista (cada item vira uma linha, ex.: dias e horários)
    function linha(ic, rotulo, valor) {
      if (!valor || (Array.isArray(valor) && !valor.length)) return "";
      var conteudo = Array.isArray(valor)
        ? '<ul class="atend-itens">' + valor.map(function (v) { return "<li>" + comLinks(t(v)) + "</li>"; }).join("") + "</ul>"
        : comLinks(t(valor));
      return '<div class="atend-linha"><span class="atend-ic">' + icone(ic, "p") + "</span><div><dt>" + rotulo + "</dt><dd>" + conteudo + "</dd></div></div>";
    }
    function idDe(txt, i) {
      return "atend-" + (String(txt || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || i);
    }
    var secoes = lista(A.secoes || A.lista);
    var corpo = secoes.map(function (a, i) {
      var k = a.contato ? (setores.filter(function (s) { return s.setor === a.contato; })[0] || {}) : {};
      var pessoa = k.nome ? '<div class="atend-topo"><span class="atend-rotulo">' + esc(a.contatoRotulo || "Responsável") + '</span><p class="atend-pessoa"><strong>' + esc(k.nome) + "</strong>" + (k.funcao ? " · " + esc(k.funcao) : "") + "</p></div>" : "";
      var contatos = (k.telefone && k.telefone !== MARCADOR ? '<a href="tel:' + esc(String(k.telefone).replace(/[^\d+]/g, "")) + '">' + icone("telefone", "p") + esc(k.telefone) + "</a>" : "") +
        (k.email && k.email !== MARCADOR ? '<a href="mailto:' + esc(k.email) + '">' + icone("email", "p") + esc(k.email) + "</a>" : "");
      return '<section class="bloco surge" id="' + idDe(a.titulo, i) + '">' +
        '<div class="titulo-bloco"><span class="icone-caixa">' + icone(a.icone || "pessoas") + "</span><h2>" + t(a.titulo) + "</h2></div>" +
        // Apresentação do tema à esquerda e a imagem (pequena) à direita
        (a.imagem ? '<div class="atend-intro"><div>' : "") +
        // "oQueE" pode ser um texto só ou uma lista de parágrafos
        (a.oQueE ? [].concat(a.oQueE).map(function (p) { return '<p class="texto-intro nota-intro">' + comLinks(t(p)) + "</p>"; }).join("") : "") +
        (a.imagem ? '</div><figure class="atend-imagem"><div class="atend-imagem-moldura">' +
          '<img src="' + esc(a.imagem) + '" alt="' + esc(a.imagemLegenda || a.titulo) + '" loading="lazy"></div>' +
          (a.imagemLegenda ? '<figcaption><span class="campeao-titulo"><span>' + esc(a.imagemLegenda) + "</span></span></figcaption>" : "") +
          "</figure></div>" : "") +
        '<article class="atend">' + pessoa +
        '<dl class="atend-dados">' +
          linha("info", "Para que serve", a.paraQue) +
          linha("relogio", "Dias e horários", a.quando) +
          linha("calendario", "Como participar", a.comoAgendar) +
        "</dl>" +
        (contatos || a.link || a.whatsapp ? '<div class="atend-rodape">' + (contatos ? '<div class="atend-contatos">' + contatos + "</div>" : "") +
          '<div class="atend-botoes">' +
          (a.whatsapp ? '<a class="botao linha atend-whats" href="https://wa.me/' + esc(String(a.whatsapp).replace(/\D/g, "")) + '" target="_blank" rel="noopener">' +
            '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3z"/></svg>' +
            "Chamar no WhatsApp</a>" : "") +
          (a.link ? '<a class="botao primario" href="' + esc(a.link) + '" target="_blank" rel="noopener">Agendar atendimento ' + icone("seta", "p") + "</a>" : "") +
          "</div></div>" : "") +
        "</article></section>";
    }).join("");
    var subnav = secoes.length > 1
      ? '<nav class="subnav" aria-label="Seções de Atendimentos"><div class="container">' +
        secoes.map(function (a, i) { return '<a href="#' + idDe(a.titulo, i) + '">' + esc(a.titulo) + "</a>"; }).join("") + "</div></nav>"
      : "";
    return faixa({ trilha: [{ titulo: "Atendimentos" }], rotulo: "Fale com a equipe", titulo: "Atendimentos", sub: A.introducao, marcaDagua: true }) +
      subnav + '<div class="container serie-corpo">' + corpo + "</div>";
  }

  function paginaTutoriais() {
    var T = lista(C.tutoriais);
    var cards = T.map(function (x) {
      return '<a class="card-tutorial surge" href="tutorial.html?id=' + encodeURIComponent(x.id) + '" data-busca="' + esc((x.titulo + " " + x.resumo).toLowerCase()) + '">' +
        '<span class="icone-caixa">' + icone(x.icone) + "</span><h3>" + esc(x.titulo) + "</h3><p>" + t(x.resumo) + "</p>" +
        '<span class="ir">Ver tutorial ' + icone("seta", "p") + "</span></a>";
    }).join("");
    return faixa({ trilha: [{ titulo: "Tutoriais" }], rotulo: "Ajuda", titulo: "Tutoriais", sub: "Guias passo a passo para usar os sistemas e serviços da escola.",
      marcaDagua: true }) +
      '<section class="secao"><div class="container">' +
      '<div class="secao-topo"><div><h2>Todos os tutoriais</h2><p>Selecione um tema para ver as instruções.</p></div>' +
      '<label class="busca">' + icone("busca", "p") + '<input type="search" id="busca-tutorial" placeholder="Buscar tutorial…" aria-label="Buscar tutorial"></label></div>' +
      '<div class="grade-tutoriais" id="lista-tutoriais">' + cards + "</div>" +
      '<p class="nada" id="nada">Nenhum tutorial encontrado.</p></div></section>';
  }

  // Aviso "Importante" com as observações gerais dos tutoriais (conteudo/tutoriais.js)
  function avisoTutoriais() {
    var obs = lista(C.tutoriaisImportante);
    if (!obs.length) return "";
    return '<div class="aviso-importante" role="note">' + icone("info") +
      "<div><strong>Importante</strong><ul>" + obs.map(function (o) { return "<li>" + t(o) + "</li>"; }).join("") + "</ul></div></div>";
  }

  // Transforma endereços de sites (em texto já escapado) em links clicáveis
  function comLinks(html) {
    return String(html).replace(/(https?:\/\/[^\s<]+[^\s<.,;:!?)])/g, function (u) {
      return '<a href="' + u + '" target="_blank" rel="noopener">' + u + "</a>";
    });
  }

  function paginaTutorial() {
    var T = lista(C.tutoriais);
    var id = param("id");
    var x = null;
    T.forEach(function (i) { if (i.id === id) x = i; });
    if (!x) return naoEncontrado("Tutorial não encontrado", "tutoriais.html", "Ver todos os tutoriais");
    document.title = x.titulo + " · Tutoriais";

    var passos = '<ol class="passos">' + lista(x.passos).map(function (p) { return "<li><span>" + comLinks(t(p)) + "</span></li>"; }).join("") + "</ol>";

    // Dados de acesso (usuário e senha)
    var acesso = "";
    if (x.acesso && (x.acesso.usuario || x.acesso.senha)) {
      acesso = '<section class="surge"><h2>Dados de acesso</h2><dl class="dados-acesso">' +
        (x.acesso.usuario ? '<div><dt>' + icone("usuario", "p") + "Usuário</dt><dd>" + t(x.acesso.usuario) + "</dd></div>" : "") +
        (x.acesso.senha ? '<div><dt>' + icone("cadeado", "p") + "Senha</dt><dd>" + t(x.acesso.senha) + "</dd></div>" : "") +
        "</dl>" + (x.acesso.observacao ? '<p class="acesso-obs">' + t(x.acesso.observacao) + "</p>" : "") + "</section>";
    }

    // Imagens e vídeo só aparecem quando existirem
    var imgs = lista(x.imagens).filter(function (im) { return im && im.arquivo; });
    var imagens = imgs.length ? '<section class="surge"><h2>Imagens</h2><div class="grade-imagens">' + imgs.map(function (im) {
      return '<figure><img src="' + esc(im.arquivo) + '" alt="' + esc(im.legenda || x.titulo) + '" loading="lazy">' + (im.legenda ? "<figcaption>" + esc(im.legenda) + "</figcaption>" : "") + "</figure>";
    }).join("") + "</div></section>" : "";

    var video = "";
    var yt = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/.exec(x.video || "");
    if (yt) {
      video = '<section class="surge"><h2>Vídeo</h2><div class="video-caixa"><iframe src="https://www.youtube-nocookie.com/embed/' + yt[1] + '" title="' + esc(x.titulo) + '" allowfullscreen loading="lazy"></iframe></div>' +
        '<a class="video-link" ' + attrLink(x.video) + ">" + icone("externo", "p") + "Abrir vídeo no YouTube</a></section>";
    } else if (temLink(x.video)) {
      video = '<section class="surge"><h2>Vídeo</h2><a class="botao linha" ' + attrLink(x.video) + ">" + icone("video", "p") + "Assistir ao vídeo</a></section>";
    }

    var blocoLink = temLink(x.link)
      ? '<h3>Acesso direto</h3><p>Abra o sistema deste tutorial.</p><a class="botao primario" ' + attrLink(x.link) + ">" +
        esc(x.textoLink || "Acessar") + " " + icone(externo(x.link) ? "externo" : "seta", "p") + "</a><hr>"
      : "";

    var outros = T.filter(function (i) { return i.id !== x.id; }).map(function (i) {
      return '<li><a href="tutorial.html?id=' + encodeURIComponent(i.id) + '">' + esc(i.titulo) + "</a></li>";
    }).join("");

    return faixa({ trilha: [{ titulo: "Tutoriais", link: "tutoriais.html" }, { titulo: x.titulo }], rotulo: "Tutorial", titulo: x.titulo, sub: x.descricao,
      marcaDagua: true }) +
      '<section class="secao"><div class="container tutorial-corpo"><div>' +
      '<section class="surge"><h2>Passo a passo</h2>' + passos + "</section>" +
      acesso + imagens + video +
      (avisoTutoriais() ? '<section class="surge">' + avisoTutoriais() + "</section>" : "") +
      "</div>" +
      '<aside class="lateral-tutorial">' + blocoLink +
      "<h3>Outros tutoriais</h3><ul>" + outros + "</ul>" +
      '<hr><a href="tutoriais.html" class="botao linha" style="width:100%;justify-content:center">' + icone("voltar", "p") + "Todos os tutoriais</a></aside>" +
      "</div></section>";
  }

  /* ---------- Conecta 2026 (paleta de cores do "Conecta Sounds") ----------
     Textos em conteudo/conecta.js. O topo segue o mesmo modelo das outras páginas. */
  function paginaConecta() {
    var K = C.conecta || {};
    function tituloSecao(ic, txt) {
      return '<div class="titulo-bloco"><span class="icone-caixa">' + icone(ic) + "</span><h2>" + txt + "</h2></div>";
    }

    // Marca "Conecta Sounds" redesenhada em vetor (círculo rosa, estrela verde, letras pretas)
    function seloConecta() {
      // 12 pontas de tamanhos levemente diferentes, como na arte original
      var pontas = [97, 86, 94, 83, 98, 88, 92, 85, 96, 89, 93, 84], raios = [], pts = [];
      pontas.forEach(function (p, k) { raios.push(p, 58 + (k % 3) * 3); });
      for (var i = 0; i < raios.length; i++) {
        var ang = (Math.PI * 2 / raios.length) * i - Math.PI / 2 + 0.12;
        var r = raios[i] * 0.86;
        pts.push((100 + r * Math.cos(ang)).toFixed(1) + "," + (100 + r * Math.sin(ang)).toFixed(1));
      }
      var barra = '<rect x="9.2" y="0.5" width="5.6" height="23" rx="0.4"/>';
      var fonte = "font-family=\"'Bebas Neue', 'Oswald', Impact, 'Arial Narrow', sans-serif\"";
      return '<svg class="conecta-selo" viewBox="0 0 200 200" role="img" aria-label="Conecta Sounds">' +
        '<circle cx="100" cy="100" r="96" fill="#f13b86" stroke="#fff" stroke-width="4"/>' +
        '<polygon points="' + pts.join(" ") + '" fill="#23e891"/>' +
        '<text x="34" y="111" ' + fonte + ' font-size="46" textLength="20" lengthAdjust="spacingAndGlyphs" fill="#000">C</text>' +
        '<g transform="translate(55 77) scale(1.05)" fill="#fff">' + barra + '<g transform="rotate(60 12 12)">' + barra + '</g><g transform="rotate(120 12 12)">' + barra + "</g></g>" +
        '<text x="82" y="111" ' + fonte + ' font-size="46" textLength="90" lengthAdjust="spacingAndGlyphs" fill="#000">NECTA</text>' +
        '<text x="0" y="0" ' + fonte + ' font-size="27" textLength="68" lengthAdjust="spacingAndGlyphs" fill="#000" transform="translate(112 138) skewX(-14)">SOUNDS</text>' +
        "</svg>";
    }

    // Inscrições: botão para o formulário + "Vagas limitadas" + barra quase cheia
    function inscricaoHtml() {
      var I = K.inscricao || {};
      if (!I.link) return "";
      var pct = Math.max(0, Math.min(100, Number(I.barra) || 0));
      return '<div class="inscricao">' +
        '<div class="inscricao-topo"><span class="inscricao-aviso"><span class="inscricao-pulso" aria-hidden="true"></span>' + esc(I.aviso || "Vagas limitadas") + "</span></div>" +
        '<div class="inscricao-barra" role="progressbar" aria-label="' + esc(I.aviso || "Vagas limitadas") + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '">' +
          '<span class="inscricao-preenchido" style="--pct:' + pct + '%"></span></div>' +
        '<a class="botao inscricao-botao" href="' + esc(I.link) + '" target="_blank" rel="noopener">' + esc(I.botao || "Inscreva-se já") + " " + icone("seta", "p") + "</a>" +
        "</div>";
    }

    // Topo no mesmo modelo da página inicial: texto à esquerda e foto à direita (com o selo do Conecta)
    var foto = K.imagem
      ? '<figure class="hero-foto conecta-foto">' + seloConecta() + '<img src="' + esc(K.imagem) + '" alt="' + esc(K.imagemDescricao || "") + '"></figure>'
      : "";
    var hero = '<section class="inicio-hero"><div class="container ' + (foto ? "hero-com-foto" : "hero-unico") + '"><div>' +
      "<h1>Conecta <em>" + esc(K.ano || "") + "</em></h1>" +
      (K.edicao ? '<p class="hero-subtitulo"><strong>Conecta ' + esc(K.edicao) + "</strong></p>" : "") +
      (K.slogan ? '<p class="apresentacao">' + esc(K.slogan) + "</p>" : "") +
      (K.datas ? '<p class="aviso-portal">' + icone("calendario", "p") + "<span><strong>Datas:</strong> " + esc(K.datas) + "</span></p>" : "") +
      inscricaoHtml() +
      "</div>" + foto + "</div></section>";

    // "O que é o Conecta": foto à esquerda (se houver) e texto à direita
    var textoSobre = lista(K.sobre).map(function (p) { return '<p class="texto-intro nota-intro">' + t(p) + "</p>"; }).join("");
    var fotoSobre = K.sobreImagem
      ? '<figure class="etapa-foto"><a href="' + esc(K.sobreImagem) + '" data-ampliar="sobre" aria-label="Ampliar foto: O que é o Conecta">' +
        '<img src="' + esc(K.sobreImagem) + '" alt="' + esc(K.sobreImagemDescricao || "Conecta") + '" loading="lazy"></a>' +
        '<figcaption class="so-leitor"><span class="campeao-titulo"><span>O que é o Conecta</span></span>' +
        (K.sobreImagemDescricao ? '<span class="campeao-desc">' + esc(K.sobreImagemDescricao) + "</span>" : "") + "</figcaption></figure>"
      : "";
    var sobre = '<section class="bloco surge" id="sobre">' + tituloSecao("info", "O que é o Conecta") +
      (fotoSobre ? '<div class="etapa-layout foto-esquerda">' + fotoSobre + '<div class="etapa-texto">' + textoSobre + "</div></div>" : textoSobre) +
      "</section>";

    // Etapas (local, em rede…): grupos em cartões + texto de destaque
    function etapaHtml(id, nome, ic, E) {
      // Com foto: texto à esquerda e foto à direita (clique na foto para ampliar)
      var foto = E && E.imagem
        ? '<figure class="etapa-foto"><a href="' + esc(E.imagem) + '" data-ampliar="etapa-' + id + '" aria-label="Ampliar foto: ' + esc(nome) + '">' +
          '<img src="' + esc(E.imagem) + '" alt="' + esc(E.imagemDescricao || nome) + '" loading="lazy"></a>' +
          '<figcaption class="so-leitor"><span class="campeao-titulo"><span>' + esc(nome) + "</span></span>" +
          (E.imagemDescricao ? '<span class="campeao-desc">' + esc(E.imagemDescricao) + "</span>" : "") + "</figcaption></figure>"
        : "";
      return E
      ? '<section class="bloco surge' + (foto ? " etapa-com-foto" : "") + '" id="' + id + '">' + tituloSecao(ic, nome) +
        (foto ? '<div class="etapa-layout"><div class="etapa-texto">' : "") +
        (E.introducao ? '<p class="texto-intro nota-intro">' + t(E.introducao) + "</p>" : "") +
        '<div class="etapa-grupos">' + lista(E.grupos).map(function (g) {
          return '<article class="etapa-grupo"><div class="etapa-grupo-topo"><span class="icone-caixa">' + icone(g.icone || "estrela") + "</span><h3>" + esc(g.titulo) + "</h3></div>" +
            '<ul class="etapa-itens">' + lista(g.itens).map(function (i) { return "<li>" + asterisco("etapa-ast") + "<span>" + t(i) + "</span></li>"; }).join("") + "</ul></article>";
        }).join("") + "</div>" +
        (lista(E.textos).length ? '<div class="etapa-destaque">' + icone("info", "p") + "<div>" + lista(E.textos).map(function (p) { return "<p>" + t(p) + "</p>"; }).join("") + "</div></div>" : "") +
        (foto ? "</div>" + foto + "</div>" : "") +
        "</section>"
      : "";
    }
    var etapa = etapaHtml("etapa-local", "Etapa local", "bussola", K.etapaLocal) +
      etapaHtml("etapa-rede", "Etapa em rede", "pessoas", K.etapaRede);

    // Painel dos campeões: galeria de fotos (clique para ampliar)
    // Medalha desenhada: fita lilás/azul + disco metálico com o asterisco do Fleming em relevo
    var CORES_MEDALHA = {
      ouro:   { claro: "#fff3b0", medio: "#f2c94c", escuro: "#b8860b", nome: "Ouro" },
      prata:  { claro: "#ffffff", medio: "#cfd6de", escuro: "#7d8894", nome: "Prata" },
      bronze: { claro: "#f6c9a0", medio: "#cd7f32", escuro: "#7a4318", nome: "Bronze" }
    };
    function medalha(tipo, id) {
      var c = CORES_MEDALHA[tipo];
      if (!c) return "";
      var g = "med-" + id, barra = '<rect x="9.4" y="0.5" width="5.2" height="23" rx="0.6"/>';
      return '<svg class="medalha medalha-' + tipo + '" viewBox="0 0 64 88" role="img" aria-label="Medalha de ' + c.nome.toLowerCase() + '">' +
        "<defs>" +
        '<radialGradient id="' + g + '" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="' + c.claro + '"/><stop offset=".55" stop-color="' + c.medio + '"/><stop offset="1" stop-color="' + c.escuro + '"/></radialGradient>' +
        "</defs>" +
        // Fita (duas faixas cruzadas, nas cores do Conecta)
        '<path d="M14 0h16l6 30H22z" fill="#1747ff"/><path d="M34 0h16l-8 30H28z" fill="#f13b86"/>' +
        '<path d="M22 30h20l-3 8H25z" fill="#8a0f45"/>' +
        // Disco metálico
        '<circle cx="32" cy="60" r="25" fill="url(#' + g + ')" stroke="' + c.escuro + '" stroke-width="1.5"/>' +
        '<circle cx="32" cy="60" r="19" fill="none" stroke="' + c.claro + '" stroke-opacity=".7" stroke-width="1.2"/>' +
        // Asterisco em relevo (sombra + destaque)
        '<g transform="translate(21 49) scale(.92)" fill="' + c.escuro + '" opacity=".55">' + barra +
        '<g transform="rotate(60 12 12)">' + barra + '</g><g transform="rotate(120 12 12)">' + barra + "</g></g>" +
        '<g transform="translate(20.2 48.2) scale(.92)" fill="' + c.claro + '">' + barra +
        '<g transform="rotate(60 12 12)">' + barra + '</g><g transform="rotate(120 12 12)">' + barra + "</g></g>" +
        // Brilho
        '<ellipse cx="24" cy="49" rx="7" ry="3.5" fill="#fff" opacity=".45" transform="rotate(-30 24 49)"/>' +
        "</svg>";
    }

    // Cartões sem foto (arquivo: "") mostram um espaço "FOTO A INSERIR"
    // Ordem automática pela medalha: ouro, prata, bronze (e, no mesmo nível, a ordem do arquivo)
    var ORDEM_MEDALHA = { ouro: 0, prata: 1, bronze: 2 };
    var fotos = lista(K.campeoes).filter(function (f) { return f && (f.arquivo || f.titulo); })
      .map(function (f, i) { return { f: f, i: i }; })
      .sort(function (a, b) {
        var ma = a.f.medalha in ORDEM_MEDALHA ? ORDEM_MEDALHA[a.f.medalha] : 3;
        var mb = b.f.medalha in ORDEM_MEDALHA ? ORDEM_MEDALHA[b.f.medalha] : 3;
        return (ma - mb) || (a.i - b.i);
      })
      .map(function (x) { return x.f; });
    var campeoes = fotos.length
      ? '<section class="bloco surge" id="campeoes">' + tituloSecao("estrela", "Painel dos campeões") +
        '<div class="galeria-campeoes">' + fotos.map(function (f, i) {
          var midia = f.arquivo
            ? '<a href="' + esc(f.arquivo) + '" data-ampliar="' + i + '" aria-label="Ampliar foto: ' + esc(f.titulo || "") + '">' +
              '<img src="' + esc(f.arquivo) + '" alt="' + esc(f.titulo || "Campeões do Conecta") + '" loading="lazy">' +
              '<span class="campeao-lupa" aria-hidden="true">' + icone("expandir", "p") + "</span></a>"
            : '<div class="campeao-sem-foto">' + icone("imagem", "g") + '<span class="a-inserir">FOTO A INSERIR</span></div>';
          var cm = CORES_MEDALHA[f.medalha];
          return '<figure class="campeao">' + (cm ? medalha(f.medalha, i) : "") + midia +
            (f.titulo || f.descricao ? "<figcaption>" +
              (f.titulo ? '<span class="campeao-titulo">' + asterisco("campeao-ast") + "<span>" + esc(f.titulo) + "</span>" +
                (cm ? '<span class="medalha-etiqueta medalha-' + esc(f.medalha) + '">' + cm.nome + "</span>" : "") + "</span>" : "") +
              (f.descricao ? '<span class="campeao-desc">' + t(f.descricao) + "</span>" : "") +
              "</figcaption>" : "") + "</figure>";
        }).join("") + "</div></section>"
      : "";

    // Edições anteriores: cada vídeo do Instagram aparece dentro de um mini iPhone
    function codigoReel(url) {
      var m = /instagram\.com\/(?:reel|reels|p)\/([A-Za-z0-9_-]+)/.exec(String(url || ""));
      return m ? m[1] : "";
    }
    function iphone(url, ano, n) {
      var cod = codigoReel(url);
      if (!cod) return "";
      var link = "https://www.instagram.com/reel/" + cod + "/";
      return '<figure class="iphone-item">' +
        '<div class="iphone-escala"><div class="iphone" aria-label="Vídeo do Conecta ' + esc(ano) + ' no Instagram">' +
          '<span class="iphone-ilha" aria-hidden="true"></span>' +
          '<span class="iphone-botao b1" aria-hidden="true"></span><span class="iphone-botao b2" aria-hidden="true"></span><span class="iphone-botao b3" aria-hidden="true"></span>' +
          '<div class="iphone-tela">' +
            // aparece se a pré-visualização não carregar (sem internet, por exemplo)
            '<a class="iphone-reserva" href="' + esc(link) + '" target="_blank" rel="noopener">' +
              '<span class="iphone-play" aria-hidden="true"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M8 5l12 7-12 7z"/></svg></span>' +
              "<span>Ver vídeo no Instagram</span></a>" +
            '<iframe src="https://www.instagram.com/reel/' + esc(cod) + '/embed/" title="Vídeo ' + n + " do Conecta " + esc(ano) + ' (Instagram)" loading="lazy" scrolling="no" allowtransparency="true" allow="encrypted-media; picture-in-picture"></iframe>' +
          "</div>" +
        "</div></div>" +
        '<figcaption><a class="botao linha iphone-link" href="' + esc(link) + '" target="_blank" rel="noopener">Assistir no Instagram ' + icone("externo", "p") + "</a></figcaption>" +
        "</figure>";
    }
    var edicoes = lista(K.edicoesAnteriores).filter(function (e) { return lista(e.videos).length; });
    var anteriores = edicoes.length
      ? '<section class="bloco surge" id="edicoes-anteriores">' + tituloSecao("video", "Veja mais sobre as edições anteriores") +
        '<div class="edicoes">' + edicoes.map(function (e) {
          return '<div class="edicao"><h3 class="edicao-ano">' + asterisco("edicao-ast") + "<span>Conecta " + esc(e.ano) + "</span></h3>" +
            '<div class="iphones">' + lista(e.videos).map(function (v, i) { return iphone(v, e.ano, i + 1); }).join("") + "</div></div>";
        }).join("") + "</div></section>"
      : "";

    // Menu rápido: um atalho para cada seção que existe na página
    var corpo = sobre + etapa + campeoes + anteriores;
    var atalhos = [
      ["sobre", "O que é o Conecta"], ["etapa-local", "Etapa local"], ["etapa-rede", "Etapa em rede"],
      ["campeoes", "Painel dos campeões"], ["edicoes-anteriores", "Edições anteriores"]
    ].filter(function (s) { return corpo.indexOf('id="' + s[0] + '"') !== -1; });
    var subnav = atalhos.length
      ? '<nav class="subnav" aria-label="Seções do Conecta"><div class="container">' +
        atalhos.map(function (s) { return '<a href="#' + s[0] + '">' + s[1] + "</a>"; }).join("") + "</div></nav>"
      : "";

    return hero + subnav + '<div class="container serie-corpo">' + corpo + "</div>";
  }

  /* ---------- Festival de Cinema (conteudo/festival.js) ----------
     Mesmo modelo de topo da página inicial, do Conecta e de Vestibulares. */
  function paginaFestival() {
    var F = C.festival || {};
    function tituloSecao(ic, txt) {
      return '<div class="titulo-bloco"><span class="icone-caixa">' + icone(ic) + "</span><h2>" + txt + "</h2></div>";
    }
    function paragrafos(arr) {
      return lista(arr).map(function (p) { return '<p class="texto-intro nota-intro">' + t(p) + "</p>"; }).join("");
    }

    // Selo redondo: asterisco do Fleming + estatueta dourada (desenhado em vetor)
    function seloCinema() {
      var barra = '<rect x="-6" y="-29" width="12" height="58" rx="1.2"/>';
      return '<svg class="conecta-selo festival-selo" viewBox="0 0 200 200" role="img" aria-label="Festival de Cinema do Fleming">' +
        '<defs><linearGradient id="ouro-selo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6e27a"/><stop offset=".5" stop-color="#d4af37"/><stop offset="1" stop-color="#9c7a1c"/></linearGradient></defs>' +
        '<circle cx="100" cy="100" r="96" fill="#0d0d0d" stroke="url(#ouro-selo)" stroke-width="6"/>' +
        '<circle cx="100" cy="100" r="84" fill="none" stroke="#d4af37" stroke-opacity=".45" stroke-width="1.5" stroke-dasharray="3 5"/>' +
        // asterisco do Fleming
        '<g transform="translate(70 96)" fill="url(#ouro-selo)">' + barra +
          '<g transform="rotate(60)">' + barra + '</g><g transform="rotate(120)">' + barra + "</g></g>" +
        // linha divisória
        '<rect x="106" y="62" width="2" height="72" fill="#d4af37" opacity=".7"/>' +
        // estatueta
        '<g fill="url(#ouro-selo)">' +
          '<ellipse cx="136" cy="50" rx="6" ry="7"/>' +
          '<rect x="133.5" y="55" width="5" height="6" rx="1.5"/>' +
          '<path d="M122 66q2-5 14-5t14 5l-3 5-1.5 22q-1 13-3.5 27h-12q-2.5-14-3.5-27L124 71z"/>' +
          '<rect x="128" y="120" width="16" height="6" rx="1"/>' +
          '<rect x="124" y="126" width="24" height="4" rx="1"/>' +
          '<rect x="120" y="130" width="32" height="10" rx="2"/>' +
        "</g>" +
        // braços cruzados, separação das pernas e friso da base
        '<g fill="none" stroke="#7a5d12" stroke-width="2.2" stroke-linecap="round">' +
          '<path d="M127 75l18 9M145 75l-18 9"/><path d="M136 96v23"/></g>' +
        '<rect x="120" y="133" width="32" height="1.6" fill="#7a5d12" opacity=".6"/>' +
        '<text x="100" y="164" text-anchor="middle" font-family="\'Red Hat Display\', Arial, sans-serif" font-weight="800" font-size="15" letter-spacing="3" fill="#d4af37">CINEMA</text>' +
        "</svg>";
    }

    var foto = F.imagem
      ? '<figure class="hero-foto festival-foto">' + seloCinema() + '<img src="' + esc(F.imagem) + '" alt="' + esc(F.imagemDescricao || "") + '"></figure>'
      : "";
    var hero = '<section class="inicio-hero"><div class="container ' + (foto ? "hero-com-foto" : "hero-unico") + '"><div>' +
      "<h1>Festival de <em>Cinema</em></h1>" +
      (F.subtitulo ? '<p class="hero-subtitulo"><strong>' + esc(F.subtitulo) + "</strong></p>" : "") +
      (F.apresentacao ? '<p class="apresentacao">' + t(F.apresentacao) + "</p>" : "") +
      (F.data ? '<p class="aviso-portal">' + icone("calendario", "p") + "<span><strong>Data:</strong> " + t(F.data) + "</span></p>" : "") +
      '<div class="acoes"><a class="botao claro" href="#sobre">Como funciona ' + icone("seta", "p") + "</a>" +
      '<a class="botao contorno" href="#informacoes">' + icone("info", "p") + "Informações</a></div>" +
      "</div>" + foto + "</div></section>";

    var sobre = lista(F.sobre).length ? '<section class="bloco surge" id="sobre">' + tituloSecao("video", "O que é o festival") + paragrafos(F.sobre) + "</section>" : "";
    var nota = lista(F.nota).length ? '<section class="bloco surge" id="nota">' + tituloSecao("calculadora", "Como vale na nota") + paragrafos(F.nota) + "</section>" : "";
    var leituras = lista(F.leituras).length
      ? '<section class="bloco surge" id="leituras">' + tituloSecao("livro", "Leituras obrigatórias") +
        '<ul class="conecta-avisos festival-lista">' + lista(F.leituras).map(function (l) { return "<li>" + asterisco("conecta-marcador") + "<span>" + t(l) + "</span></li>"; }).join("") + "</ul></section>"
      : "";
    var cronograma = lista(F.cronograma).length
      ? '<section class="bloco surge" id="cronograma">' + tituloSecao("calendario", "Cronograma") +
        '<ul class="conecta-atividades festival-cronograma">' + lista(F.cronograma).map(function (c) {
          return '<li><span class="conecta-hora">' + t(c.data) + "</span><span>" + t(c.etapa) + "</span></li>";
        }).join("") + "</ul></section>"
      : "";
    var info = lista(F.informacoes).length
      ? '<section class="bloco surge" id="informacoes">' + tituloSecao("pasta", "Informações importantes") +
        '<div class="conecta-infos">' + lista(F.informacoes).map(function (i) {
          return '<article class="conecta-info"><span class="icone-caixa">' + icone(i.icone) + "</span><div><h3>" + esc(i.titulo) + "</h3><p>" + t(i.texto) + "</p></div></article>";
        }).join("") + "</div></section>"
      : "";
    var avisos = lista(F.avisos).length
      ? '<section class="bloco surge" id="fique-atento">' + tituloSecao("sino", "Fique atento") +
        '<ul class="conecta-avisos">' + lista(F.avisos).map(function (a) { return "<li>" + asterisco("conecta-marcador") + "<span>" + t(a) + "</span></li>"; }).join("") + "</ul></section>"
      : "";

    return hero + '<div class="container serie-corpo">' + sobre + nota + leituras + cronograma + info + avisos + "</div>";
  }

  /* ---------- Vestibulares (conteudo/vestibulares.js) ----------
     Próximas provas com contagem regressiva + calendário por mês. */
  function paginaVestibulares() {
    var V = C.vestibulares || {};
    var hoje = dataDeHoje();
    function tituloSecao(ic, txt) {
      return '<div class="titulo-bloco"><span class="icone-caixa">' + icone(ic) + "</span><h2>" + txt + "</h2></div>";
    }
    var SEMANA_CURTA = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

    // Prepara as provas: datas, primeiro/último dia e texto das datas
    var provas = lista(V.provas).map(function (p, i) {
      var dias = lista(p.dias).map(lerData).filter(Boolean).sort(function (a, b) { return a - b; });
      return { p: p, i: i, dias: dias, ini: dias[0], fim: dias[dias.length - 1] };
    }).filter(function (x) { return x.ini; })
      .sort(function (a, b) { return (a.ini - b.ini) || (a.i - b.i); });

    function textoDias(x) {
      var d = x.dias.map(function (d) { return ("0" + d.getDate()).slice(-2); });
      var mesAno = ("0" + (x.fim.getMonth() + 1)).slice(-2);
      return (d.length > 1 ? d.slice(0, -1).join(", ") + " e " + d[d.length - 1] : d[0]) + "/" + mesAno;
    }
    function quando(x) {
      if (x.fim < hoje) return { txt: "Realizado", cls: "passou" };
      var f = diasAte(hoje, x.ini);
      if (f <= 0) return { txt: "Hoje", cls: "perto" };
      if (f === 1) return { txt: "Amanhã", cls: "perto" };
      return { txt: "Em " + f + " dias", cls: f <= 7 ? "perto" : "" };
    }

    // 01 — Próximas provas (agrupa as instituições do mesmo dia)
    var futuras = provas.filter(function (x) { return x.fim >= hoje; });
    var destaque = "";
    if (futuras.length) {
      var prim = futuras[0];
      var mesmoDia = futuras.filter(function (x) { return +x.ini === +prim.ini; });
      var faltam = diasAte(hoje, prim.ini);
      var numero = faltam <= 0 ? "Hoje" : faltam === 1 ? "Amanhã" : faltam;
      destaque = '<div class="alerta-principal vest-destaque" role="status">' +
        '<div class="alerta-contagem"><span class="alerta-numero' + (typeof numero === "string" ? " texto" : "") + '">' + numero + "</span>" +
        (faltam > 1 ? '<span class="alerta-legenda">dias</span>' : "") + "</div>" +
        '<div class="alerta-corpo"><span class="alerta-rotulo">' + icone("capelo", "p") + "Próxima prova</span>" +
        mesmoDia.map(function (x) {
          return '<div class="alerta-evento"><h3>' + esc(x.p.instituicao) + "</h3>" +
            '<p class="alerta-data">' + esc(dataLonga(x.ini)) + (x.dias.length > 1 ? " · também em " + esc(textoDias(x)) : "") +
            (x.p.cidade ? ' <span class="etiqueta-tipo tipo-vestibular">' + esc(x.p.cidade) + "</span>" : "") + "</p></div>";
        }).join("") + "</div></div>";
    } else {
      destaque = '<div class="alerta-principal vazio"><div class="alerta-corpo"><h3>Não há provas futuras no calendário</h3></div></div>';
    }
    // As próximas 8 provas depois das que estão em destaque
    var proximasLista = futuras.filter(function (x) { return +x.ini !== +futuras[0].ini; }).slice(0, 8);
    var proximas = '<section class="bloco surge" id="proximas">' + tituloSecao("sino", "Próximas provas") +
      '<p class="hoje-e">' + icone("calendario", "p") + "Hoje é " + dataLonga(hoje) + " de " + hoje.getFullYear() + ".</p>" +
      '<div class="avisos-automaticos">' + destaque +
      '<div class="proximas"><h3 class="avisos-subtitulo">Em seguida</h3>' +
      (proximasLista.length ? '<ul class="proximas-datas">' + proximasLista.map(function (x) {
        var q = quando(x);
        return '<li><span class="data-bloco"><strong>' + x.ini.getDate() + "</strong><small>" + MESES[x.ini.getMonth()].slice(0, 3) + "</small></span>" +
          '<span class="txt"><strong>' + esc(x.p.instituicao) + "</strong><small>" + esc(textoDias(x)) + (x.p.cidade ? " · " + esc(x.p.cidade) : "") + "</small></span>" +
          '<span class="quando ' + q.cls + '">' + q.txt + "</span></li>";
      }).join("") + "</ul>" : '<p class="proximas-vazio">Nenhuma outra prova no calendário.</p>') +
      "</div></div></section>";

    // 02 — Calendário por mês
    var meses = [];
    provas.forEach(function (x) {
      x.dias.forEach(function (d) {
        var chave = d.getFullYear() * 12 + d.getMonth();
        if (meses.indexOf(chave) === -1) meses.push(chave);
      });
    });
    meses.sort(function (a, b) { return a - b; });

    function calendarioMes(chave) {
      var ano = Math.floor(chave / 12), mes = chave % 12;
      var marcados = {};
      provas.forEach(function (x) {
        x.dias.forEach(function (d) {
          if (d.getFullYear() === ano && d.getMonth() === mes) (marcados[d.getDate()] = marcados[d.getDate()] || []).push(x.p.instituicao);
        });
      });
      var primeiro = new Date(ano, mes, 1).getDay(), total = new Date(ano, mes + 1, 0).getDate();
      var celulas = SEMANA_CURTA.map(function (s) { return '<span class="cal-sem">' + s.charAt(0).toUpperCase() + "</span>"; }).join("");
      for (var v = 0; v < primeiro; v++) celulas += '<span class="cal-vazio"></span>';
      for (var dia = 1; dia <= total; dia++) {
        var data = new Date(ano, mes, dia), m = marcados[dia];
        var cls = "cal-dia" + (m ? " cal-prova" : "") + (+data === +hoje ? " cal-hoje" : "") + (data < hoje ? " cal-passado" : "");
        celulas += '<span class="' + cls + '"' + (m ? ' title="' + esc(m.join(", ")) + '"' : "") + ">" + dia + "</span>";
      }
      var doMes = provas.filter(function (x) { return x.dias.some(function (d) { return d.getFullYear() === ano && d.getMonth() === mes; }); });
      return '<article class="vest-mes"><h3>' + MESES[mes].charAt(0).toUpperCase() + MESES[mes].slice(1) + " <span>" + ano + "</span></h3>" +
        '<div class="vest-mes-corpo"><div class="cal-grade" aria-hidden="true">' + celulas + "</div>" +
        '<ul class="vest-lista">' + doMes.map(function (x) {
          var q = quando(x);
          return '<li class="' + (q.cls === "passou" ? "passou" : "") + '"><span class="vest-dia">' + esc(textoDias(x)) + "</span>" +
            '<span class="vest-nome"><strong>' + esc(x.p.instituicao) + "</strong>" + (x.p.cidade ? "<small>" + esc(x.p.cidade) + "</small>" : "") + "</span>" +
            (q.cls === "passou" ? '<span class="vest-status">Realizado</span>' : "") + "</li>";
        }).join("") + "</ul></div></article>";
    }
    var calendario = '<section class="bloco surge" id="calendario-vestibulares">' + tituloSecao("calendario", "Calendário de vestibulares") +
      '<div class="vest-meses">' + meses.map(calendarioMes).join("") + "</div></section>";

    // Selo redondo "fleming MEDICINA" (desenhado em vetor para ficar nítido em qualquer tamanho)
    function seloMedicina() {
      return '<svg class="conecta-selo vest-selo" viewBox="0 0 200 200" role="img" aria-label="' + esc(V.seloDescricao || "Fleming Medicina") + '">' +
        '<circle cx="100" cy="100" r="96" fill="#16694a" stroke="#fff" stroke-width="4"/>' +
        '<text x="22" y="112" font-family="\'Red Hat Display\', Arial, sans-serif" font-weight="700" font-size="46" letter-spacing="-1.5" fill="#fff">fleming</text>' +
        '<text x="25" y="130" font-family="\'Red Hat Display\', Arial, sans-serif" font-weight="700" font-size="8.5" letter-spacing="1" fill="#fff">MEDICINA</text>' +
        // estetoscópio saindo do "g"
        '<g fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round">' +
          '<path d="M153 52c-4 12-1 24 10 31"/>' +
          '<path d="M175 50c5 13 1 26-12 33"/>' +
          '<path d="M163 83v5"/>' +
          '<path d="M170 121c10 4 18-2 17-13"/>' +
        "</g>" +
        '<circle cx="153" cy="52" r="2.4" fill="#fff"/><circle cx="175" cy="50" r="2.4" fill="#fff"/>' +
        '<circle cx="187" cy="103" r="6" fill="none" stroke="#fff" stroke-width="2.6"/>' +
        "</svg>";
    }

    // Topo no mesmo modelo da página inicial e do Conecta: texto à esquerda, imagens à direita
    var imgs = lista(V.imagens).filter(function (x) { return x && x.arquivo; });
    var pilha = V.imagem
      ? '<figure class="hero-foto vest-foto">' +
        (V.selo ? seloMedicina() : "") +
        '<img class="vest-foto-img" src="' + esc(V.imagem) + '" alt="' + esc(V.imagemDescricao || "") + '"></figure>'
      : imgs.length
      ? '<div class="vest-pilha">' + imgs.slice(0, 2).map(function (x, i) {
          return '<figure class="campeao vest-img vest-img-' + (i + 1) + '"><a href="' + esc(x.arquivo) + '" data-ampliar="' + i + '" aria-label="Ampliar: ' + esc(x.titulo || "") + '">' +
            '<img src="' + esc(x.arquivo) + '" alt="' + esc(x.titulo || "Calendário de vestibulares") + '">' +
            '<span class="campeao-lupa" aria-hidden="true">' + icone("expandir", "p") + "</span></a>" +
            (x.titulo ? '<figcaption class="vest-img-legenda"><span class="campeao-titulo"><span>' + esc(x.titulo) + "</span></span></figcaption>" : "") + "</figure>";
        }).join("") + "</div>"
      : "";
    var proxTxt = "";
    if (futuras.length) {
      var nomes = futuras.filter(function (x) { return +x.ini === +futuras[0].ini; }).map(function (x) {
        return esc(x.p.instituicao) + (x.p.cidade ? ' <span class="vest-cidade">(' + esc(x.p.cidade) + ")</span>" : "");
      });
      var fq = quando(futuras[0]);
      proxTxt = '<p class="aviso-portal">' + icone("capelo", "p") + "<span><strong>Próxima prova:</strong> " + nomes.join(" e ") +
        " — " + esc(dataCurta(futuras[0].ini)) + " (" + esc(fq.txt.toLowerCase()) + ")</span></p>";
    }
    var hero = '<section class="inicio-hero vest-hero"><div class="container ' + (pilha ? "hero-com-foto" : "hero-unico") + '"><div>' +
      "<h1>Vestibulares <em>" + esc(V.ano || "") + "</em></h1>" +
      (V.subtitulo ? '<p class="hero-subtitulo"><strong>' + esc(V.subtitulo) + "</strong></p>" : "") +
      (V.introducao ? '<p class="apresentacao">' + t(V.introducao) + "</p>" : "") +
      proxTxt +
      '<div class="acoes"><a class="botao claro" href="#proximas">Próximas provas ' + icone("seta", "p") + "</a>" +
      '<a class="botao contorno" href="#calendario-vestibulares">' + icone("calendario", "p") + "Calendário</a></div>" +
      "</div>" + pilha + "</div></section>";

    return hero + '<div class="container serie-corpo">' + proximas + calendario + "</div>";
  }

  // Galeria: abre a foto ampliada sobre a página (setas ‹ › ou teclado; Esc fecha)
  function montarGaleria() {
    var links = Array.prototype.slice.call(document.querySelectorAll("[data-ampliar]"));
    if (!links.length) return;
    var atual = 0;
    var caixa = document.createElement("div");
    caixa.className = "foto-ampliada";
    caixa.setAttribute("role", "dialog");
    caixa.setAttribute("aria-modal", "true");
    caixa.setAttribute("aria-label", "Foto ampliada");
    caixa.innerHTML = '<button type="button" class="fa-fechar" aria-label="Fechar">' + icone("fechar") + "</button>" +
      '<button type="button" class="fa-ant" aria-label="Foto anterior">' + icone("voltar") + "</button>" +
      '<figure><img alt=""><figcaption></figcaption></figure>' +
      '<button type="button" class="fa-prox" aria-label="Próxima foto">' + icone("seta") + "</button>";
    document.body.appendChild(caixa);
    var img = caixa.querySelector("img"), legenda = caixa.querySelector("figcaption");

    function mostrar(i) {
      atual = (i + links.length) % links.length;
      var a = links[atual], fig = a.closest("figure");
      img.src = a.getAttribute("href");
      img.alt = a.querySelector("img").alt;
      var tituloFoto = fig.querySelector(".campeao-titulo > span:not(.medalha-etiqueta)"), descFoto = fig.querySelector(".campeao-desc");
      var medalhaFoto = fig.querySelector(".medalha-etiqueta");
      legenda.innerHTML = (tituloFoto ? "<strong>" + esc(tituloFoto.textContent) + (medalhaFoto ? " · " + esc(medalhaFoto.textContent) : "") + "</strong>" : "") +
        (descFoto ? "<span>" + esc(descFoto.textContent) + "</span>" : "");
    }
    function abrir(i) { mostrar(i); caixa.classList.add("aberta"); document.body.classList.add("pdf-aberto"); caixa.querySelector(".fa-fechar").focus(); }
    function fechar() { caixa.classList.remove("aberta"); document.body.classList.remove("pdf-aberto"); links[atual].focus(); }

    links.forEach(function (a, i) { a.addEventListener("click", function (e) { e.preventDefault(); abrir(i); }); });
    caixa.querySelector(".fa-fechar").addEventListener("click", fechar);
    caixa.querySelector(".fa-ant").addEventListener("click", function () { mostrar(atual - 1); });
    caixa.querySelector(".fa-prox").addEventListener("click", function () { mostrar(atual + 1); });
    caixa.addEventListener("click", function (e) { if (e.target === caixa) fechar(); });
    document.addEventListener("keydown", function (e) {
      if (!caixa.classList.contains("aberta")) return;
      if (e.key === "Escape") fechar();
      if (e.key === "ArrowLeft") mostrar(atual - 1);
      if (e.key === "ArrowRight") mostrar(atual + 1);
    });
  }

  function paginaContatos() {
    var K = C.contatos || {};
    function dado(ic, rot, val, tipo) {
      var v = t(val);
      if (tipo === "tel" && val && val !== MARCADOR) v = '<a href="tel:' + esc(String(val).replace(/[^\d+]/g, "")) + '">' + esc(val) + "</a>";
      if (tipo === "mail" && val && val !== MARCADOR) v = '<a href="mailto:' + esc(val) + '">' + esc(val) + "</a>";
      return "<li>" + icone(ic, "p") + "<div><small>" + rot + "</small><span>" + v + "</span></div></li>";
    }
    var cards = lista(K.setores).map(function (s) {
      return '<article class="card-contato surge"><div class="card-contato-topo"><span class="icone-caixa">' + icone(s.icone) + "</span><h2>" + esc(s.setor) + "</h2></div>" +
        '<ul class="dados">' +
        dado("usuario", "Nome", s.nome) +
        dado("cracha", "Função", s.funcao) +
        dado("telefone", "Telefone", s.telefone, "tel") +
        dado("email", "E-mail", s.email, "mail") +
        // O horário só aparece se for informado (campo "horario" no conteudo/contatos.js)
        (s.horario ? dado("relogio", "Horário de atendimento", s.horario) : "") +
        "</ul></article>";
    }).join("");
    return faixa({ trilha: [{ titulo: "Contatos" }], rotulo: "Fale com a escola", titulo: "Contatos", sub: K.introducao,
      marcaDagua: true }) +
      '<section class="secao"><div class="container"><div class="grade-contatos">' + cards + "</div></div></section>";
  }

  function naoEncontrado(titulo, link, texto) {
    return '<div class="container vazio"><h2>' + esc(titulo) + "</h2><p>O conteúdo procurado não está disponível.</p>" +
      '<a class="botao primario" href="' + link + '">' + icone("voltar", "p") + esc(texto) + "</a></div>";
  }

  /* =================================================================
     COMPORTAMENTOS
     ================================================================= */

  function ativarMenu() {
    var botao = document.querySelector(".botao-menu");
    var menu = el("menu-principal");
    if (!botao || !menu) return;
    function definir(aberto) {
      menu.classList.toggle("aberto", aberto);
      document.body.classList.toggle("menu-aberto", aberto);
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
      botao.innerHTML = icone(aberto ? "fechar" : "menu") + "<span>" + (aberto ? "Fechar" : "Menu") + "</span>";
    }
    botao.addEventListener("click", function () { definir(!menu.classList.contains("aberto")); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") definir(false); });
    window.addEventListener("resize", function () { if (window.innerWidth > 980) definir(false); });

    // Menu suspenso "Outros recursos": abre e fecha ao clicar; fecha ao clicar fora ou com Esc
    var grupos = Array.prototype.slice.call(menu.querySelectorAll(".menu-grupo"));
    function fecharGrupos(exceto) {
      grupos.forEach(function (g) {
        if (g === exceto) return;
        g.classList.remove("aberto");
        g.querySelector(".menu-grupo-botao").setAttribute("aria-expanded", "false");
      });
    }
    grupos.forEach(function (g) {
      var b = g.querySelector(".menu-grupo-botao");
      b.addEventListener("click", function (e) {
        e.stopPropagation();
        var abrir = !g.classList.contains("aberto");
        fecharGrupos(g);
        g.classList.toggle("aberto", abrir);
        b.setAttribute("aria-expanded", abrir ? "true" : "false");
      });
    });
    document.addEventListener("click", function (e) { if (!e.target.closest || !e.target.closest(".menu-grupo")) fecharGrupos(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") fecharGrupos(); });

    // Ao rolar a página, o cabeçalho fica mais baixo e ganha sombra
    var topo = document.querySelector(".topo");
    function aoRolar() { topo.classList.toggle("rolado", window.scrollY > 12); }
    window.addEventListener("scroll", aoRolar, { passive: true });
    aoRolar();
  }

  function ativarSurgimento() {
    var itens = document.querySelectorAll(".surge");
    if (!("IntersectionObserver" in window)) { itens.forEach(function (i) { i.classList.add("visivel"); }); return; }
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visivel"); obs.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0.05 });
    itens.forEach(function (i, idx) {
      i.style.transitionDelay = Math.min(idx % 6, 5) * 50 + "ms";
      obs.observe(i);
    });
  }

  // Destaca no submenu/índice a seção visível
  function ativarIndice(seletorLinks) {
    var links = Array.prototype.slice.call(document.querySelectorAll(seletorLinks));
    if (!links.length) return;
    var pausaAte = 0;
    var atual = null;

    function marcar(link) {
      if (link === atual) return;
      atual = link;
      links.forEach(function (a) { a.classList.toggle("ativo", a === link); });
      if (link && link.closest(".subnav")) {
        var box = link.parentNode;
        box.scrollLeft = link.offsetLeft - box.clientWidth / 2 + link.clientWidth / 2;
      }
    }

    function atualizar() {
      if (Date.now() < pausaAte) return;
      var linha = window.innerHeight * 0.35;
      var escolhido = null, melhorTopo = -Infinity;
      links.forEach(function (a) {
        var alvo = document.getElementById(a.getAttribute("href").slice(1));
        if (!alvo) return;
        var topo = alvo.getBoundingClientRect().top;
        // a seção mais abaixo que já passou da linha; em empate, a primeira
        if (topo <= linha && topo > melhorTopo + 1) { melhorTopo = topo; escolhido = a; }
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2 && atual) return;
      marcar(escolhido);
    }

    links.forEach(function (a) {
      a.addEventListener("click", function () { marcar(a); pausaAte = Date.now() + 900; });
    });
    window.addEventListener("scroll", atualizar, { passive: true });
    atualizar();
  }

  function ativarBusca() {
    var campo = el("busca-tutorial");
    if (!campo) return;
    var cards = document.querySelectorAll(".card-tutorial");
    function normalizar(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
    campo.addEventListener("input", function () {
      var q = normalizar(campo.value.trim());
      var n = 0;
      cards.forEach(function (c) {
        var ok = !q || normalizar(c.getAttribute("data-busca")).indexOf(q) !== -1;
        c.style.display = ok ? "" : "none";
        if (ok) n++;
      });
      el("nada").style.display = n ? "none" : "block";
    });
  }

  /* ---------- Visor de PDF (calendários) ----------
     Usa a biblioteca PDF.js para desenhar cada página do PDF na tela.
     - Site na internet: lê o arquivo PDF diretamente.
     - Site aberto do computador (dois cliques): o navegador não deixa ler
       arquivos locais, então usa uma cópia do PDF em "calendarios/NOME.pdf.js",
       gerada pelo atalho "Atualizar calendarios.bat". */
  var PDFJS = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js";
  var PDFJS_WORKER = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

  function carregarScript(src) {
    return new Promise(function (ok, erro) {
      var s = document.createElement("script");
      s.src = src;
      s.onload = ok;
      s.onerror = function () { erro(new Error("Falha ao carregar " + src)); };
      document.head.appendChild(s);
    });
  }

  function base64ParaBytes(b64) {
    var bin = atob(b64), bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }

  function dadosDoPdf(caminho) {
    function copiaLocal() {
      return carregarScript(encodeURI(caminho) + ".js").then(function () {
        var b64 = window.PDFS && window.PDFS[caminho];
        if (!b64) throw new Error("Cópia local do PDF não encontrada");
        return base64ParaBytes(b64);
      });
    }
    var local = location.protocol === "file:" || /[?&]pdflocal=1/.test(location.search);
    if (local || !window.fetch) return copiaLocal();
    return fetch(encodeURI(caminho)).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.arrayBuffer();
    }).then(function (buf) { return new Uint8Array(buf); }, copiaLocal);
  }

  function montarVisorPdf() {
    var visor = document.querySelector("[data-pdf]");
    if (!visor) return;
    var area = visor.querySelector(".pdf-paginas");
    var caminho = visor.getAttribute("data-pdf");
    var documento = null, larguraDesenhada = 0, desenhando = false, pendente = false;

    function status(html) { area.innerHTML = '<p class="pdf-status">' + html + "</p>"; }

    function larguraUtil() {
      var cs = getComputedStyle(area);
      var w = area.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      return Math.max(200, Math.min(w, 1000));
    }

    function desenhar() {
      if (!documento) return;
      if (desenhando) { pendente = true; return; }
      desenhando = true;
      var largura = larguraUtil();
      larguraDesenhada = largura;
      // Resolução extra: no celular, para continuar nítido ao dar zoom com os dedos
      var dprBase = window.devicePixelRatio || 1;
      var dpr = largura < 700 ? Math.min(Math.max(dprBase, 2), 3) : Math.min(Math.max(dprBase, 1.5), 2);
      var antigas = Array.prototype.slice.call(area.querySelectorAll("canvas"));
      var cadeia = Promise.resolve();
      for (var n = 1; n <= documento.numPages; n++) {
        (function (num) {
          cadeia = cadeia.then(function () { return documento.getPage(num); }).then(function (pagina) {
            var base = pagina.getViewport({ scale: 1 });
            var vp = pagina.getViewport({ scale: (largura / base.width) * dpr });
            var canvas = document.createElement("canvas");
            canvas.width = Math.floor(vp.width);
            canvas.height = Math.floor(vp.height);
            canvas.style.width = largura + "px";
            canvas.setAttribute("role", "img");
            canvas.setAttribute("aria-label", "Página " + num + " de " + documento.numPages);
            return pagina.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise.then(function () {
              // Mostra cada página assim que fica pronta
              var antiga = antigas[num - 1];
              if (antiga) { area.replaceChild(canvas, antiga); return; }
              var aviso = area.querySelector(".pdf-status");
              if (aviso) area.removeChild(aviso);
              area.appendChild(canvas);
            });
          });
        })(n);
      }
      cadeia.catch(function () {
        status("Não foi possível exibir o calendário.");
      }).then(function () {
        desenhando = false;
        if (pendente) { pendente = false; desenhar(); }
      });
    }

    carregarScript(PDFJS)
      .then(function () { return carregarScript(PDFJS_WORKER); })
      .then(function () {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
        return dadosDoPdf(caminho);
      })
      .then(function (bytes) { return window.pdfjsLib.getDocument({ data: bytes }).promise; })
      .then(function (doc) { documento = doc; desenhar(); })
      .catch(function () {
        status('Não foi possível exibir o calendário aqui.<br>Use o botão <strong>Baixar PDF</strong> acima.' +
          (location.protocol === "file:" ? '<br><small>Dica: verifique a internet ou execute "Atualizar calendarios.bat".</small>' : ""));
      });

    // Redesenha quando a largura muda (girar o celular, redimensionar, tela cheia)
    var espera;
    window.addEventListener("resize", function () {
      clearTimeout(espera);
      espera = setTimeout(function () { if (Math.abs(larguraUtil() - larguraDesenhada) > 30) desenhar(); }, 250);
    });

    // Tela cheia (dentro do próprio site)
    function telaCheia(abrir) {
      visor.classList.toggle("aberto", abrir);
      document.body.classList.toggle("pdf-aberto", abrir);
      if (abrir) visor.querySelector("[data-pdf-fechar]").focus();
      setTimeout(function () { if (Math.abs(larguraUtil() - larguraDesenhada) > 30) desenhar(); }, 50);
    }
    var abrir = document.querySelector("[data-pdf-tela-cheia]");
    if (abrir) abrir.addEventListener("click", function () { telaCheia(true); });
    visor.querySelector("[data-pdf-fechar]").addEventListener("click", function () { telaCheia(false); abrir && abrir.focus(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && visor.classList.contains("aberto")) telaCheia(false); });
  }

  /* ---------- Início ---------- */
  function iniciar() {
    var pagina = document.body.getAttribute("data-pagina");
    var ativo = pagina;
    var html = "";
    if (pagina === "inicio") html = paginaInicio();
    else if (pagina === "serie") { var s = param("s"); ativo = "serie-" + (["1", "2", "3"].indexOf(s) >= 0 ? s : "1"); html = paginaSerie(); }
    else if (pagina === "regras") html = paginaRegras();
    else if (pagina === "tutoriais") html = paginaTutoriais();
    else if (pagina === "tutorial") { ativo = "tutoriais"; html = paginaTutorial(); }
    else if (pagina === "contatos") html = paginaContatos();
    else if (pagina === "conecta") html = paginaConecta();
    else if (pagina === "vestibulares") html = paginaVestibulares();
    else if (pagina === "festival") html = ligado({ requer: "festival" }) ? paginaFestival()
      : naoEncontrado("Página indisponível no momento", "index.html", "Voltar ao início");
    else if (pagina === "materiais") html = paginaMateriais();
    else if (pagina === "atendimentos") html = paginaAtendimentos();
    if (pagina === "vestibulares") document.title = "Vestibulares 2026 · Portal do Ensino Médio";

    // "ativo" identifica a aba (ex.: serie-1); a página de um tutorial segue a aba Tutoriais
    var tema = TEMAS[ativo];
    if (tema) document.body.classList.add("tema-vivo", "tema-" + tema);
    el("topo").innerHTML = cabecalho(ativo);
    el("conteudo").innerHTML = html;
    el("rodape").innerHTML = rodape();

    ativarMenu();
    ativarSurgimento();
    ativarIndice(".subnav a");
    ativarIndice(".indice a");
    ativarBusca();
    montarVisorPdf();
    montarCalculadora();
    montarGaleria();
    montarBarraAvisos();
    montarAbasMateriais();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
