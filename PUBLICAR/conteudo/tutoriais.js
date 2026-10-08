/* =====================================================================
   TUTORIAIS
   ---------------------------------------------------------------------
   Cada tutorial vira um card na página "Tutoriais" e tem página própria.

   - id:        nome curto, sem espaços nem acentos (usado no endereço da página)
   - titulo:    nome do tutorial
   - resumo:    frase curta que aparece no card
   - descricao: frase que aparece no topo da página do tutorial
   - passos:    lista de passos, cada um entre aspas (links viram clicáveis)
   - acesso:    usuário e senha, mostrados na caixa "Dados de acesso"
   - link:      endereço do sistema (aparece o botão "Acesso direto"); ou ""
   - textoLink: texto do botão (opcional)
   - imagens:   (opcional) ex.: [{ arquivo: "imagens/tela-1.png", legenda: "Tela inicial" }]
   - video:     (opcional) link do YouTube
   Imagens e vídeo só aparecem quando forem preenchidos.
   ===================================================================== */

window.CONTEUDO = window.CONTEUDO || {};

// Observações que aparecem na caixa "Importante" dentro de cada tutorial
CONTEUDO.tutoriaisImportante = [
  "Para verificar sua **matrícula**, entre em contato com a **secretaria**.",
  "A **data de nascimento** deve conter **8 dígitos**."
];

CONTEUDO.tutoriais = [
  {
    id: "pacote-office",
    titulo: "Pacote Office",
    icone: "grade",
    resumo: "Como acessar Outlook, Excel, SharePoint e outros aplicativos.",
    descricao: "Como utilizar o pacote Office com a sua conta do Fleming.",
    passos: [
      "Entre no aplicativo desejado (Outlook, Excel, SharePoint, entre outros).",
      "Faça login com os dados de acesso abaixo."
    ],
    acesso: {
      usuario: "matrícula@flemingeducacao.com.br",
      senha: "Fleming@datadenascimento"
    },
    link: ""
  },
  {
    id: "portal-1a-2a-serie",
    titulo: "Portal do Fleming — 1ª e 2ª série",
    icone: "portal",
    resumo: "Como fazer login no portal (alunos da 1ª e 2ª série).",
    descricao: "Como fazer login no portal do Fleming — alunos da 1ª e 2ª série.",
    passos: [
      "Entre no seguinte link: https://fleming.aluno.gvdasa.com.br/",
      "Faça login com os dados de acesso abaixo."
    ],
    acesso: {
      usuario: "matrícula@flemingeducacao.com.br",
      senha: "Fleming@datadenascimento"
    },
    link: "https://fleming.aluno.gvdasa.com.br/",
    textoLink: "Abrir o portal"
  },
  {
    id: "portal-3a-serie",
    titulo: "Portal do Fleming — 3ª série",
    icone: "portal",
    resumo: "Como fazer login no portal (alunos da 3ª série).",
    descricao: "Como fazer login no portal do Fleming — alunos da 3ª série.",
    passos: [
      "Entre no seguinte link: https://fleming.aletech.com.br/login",
      "Faça login com os dados de acesso abaixo."
    ],
    acesso: {
      usuario: "matrícula@flemingeducacao.com.br",
      senha: "Fleming@datadenascimento"
    },
    link: "https://fleming.aletech.com.br/login",
    textoLink: "Abrir o portal"
  },
  {
    id: "stifft",
    titulo: "Redações e dúvidas — STIFFT",
    icone: "documento",
    resumo: "Como enviar redações e tirar dúvidas pelo aplicativo STIFFT.",
    descricao: "Como enviar redações e tirar dúvidas.",
    passos: [
      "Baixe o aplicativo **STIFFT**.",
      "Faça login com os dados de acesso abaixo."
    ],
    acesso: {
      usuario: "matrícula@flemingeducacao.com.br",
      senha: "Fleming@datadenascimento"
    },
    link: ""
  },
  {
    id: "gvcollege",
    titulo: "Notas e presenças — GVCOLLEGE",
    icone: "prancheta",
    resumo: "Como verificar notas e presenças pelo aplicativo GVCOLLEGE.",
    descricao: "Como verificar notas e presenças.",
    passos: [
      "Baixe o aplicativo **GVCOLLEGE**.",
      "Faça login com os dados de acesso abaixo."
    ],
    acesso: {
      usuario: "matrícula",
      senha: "data de nascimento com oito dígitos"
    },
    link: ""
  }
];
