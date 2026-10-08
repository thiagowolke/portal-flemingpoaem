/* =====================================================================
   VESTIBULARES — 2º semestre de 2026
   ---------------------------------------------------------------------
   Cada prova:
     dias:         dia(s) da prova no formato "AAAA-MM-DD"
     instituicao:  nome da instituição (ou ENEM)
     cidade:       cidade/estado (opcional)
   O site organiza tudo por mês, monta os calendários e mostra a contagem
   regressiva sozinho, comparando com a data de hoje.
   ===================================================================== */

window.CONTEUDO = window.CONTEUDO || {};

CONTEUDO.vestibulares = {
  ano: "2026",
  subtitulo: "2º semestre",
  introducao: "Datas dos principais vestibulares e do ENEM no 2º semestre de 2026.",

  // Foto à direita do título (deixe "" para mostrar as imagens dos calendários abaixo)
  imagem: "imagens/vestibulares/estudante-concentrada-na-prova.jpg",
  imagemDescricao: "Estudante concentrada fazendo prova em sala de aula",
  selo: true,   // selo redondo "fleming MEDICINA" no canto da foto (false para tirar)
  seloDescricao: "Fleming Medicina",

  // Imagens dos calendários (usadas no topo apenas se "imagem" estiver vazia)
  imagens: [
    { arquivo: "imagens/vestibulares/calendario-novembro-2026.webp", titulo: "Vestibulares — Novembro 2026" },
    { arquivo: "imagens/vestibulares/calendario-dezembro-2026.webp", titulo: "Vestibulares — Dezembro 2026" }
  ],

  provas: [
    // Outubro
    { dias: ["2026-10-18"], instituicao: "FEEVALE", cidade: "Novo Hamburgo/RS" },
    { dias: ["2026-10-18"], instituicao: "CESUCA", cidade: "Cachoeirinha/RS" },
    { dias: ["2026-10-31"], instituicao: "UPF", cidade: "Passo Fundo/RS" },

    // Novembro
    { dias: ["2026-11-01"], instituicao: "UFPR", cidade: "Santa Maria/RS" },
    { dias: ["2026-11-08", "2026-11-15"], instituicao: "ENEM", cidade: "" },
    { dias: ["2026-11-22"], instituicao: "FURG", cidade: "Rio Grande/RS" },
    { dias: ["2026-11-22"], instituicao: "UCS", cidade: "Caxias do Sul/RS" },
    { dias: ["2026-11-23"], instituicao: "UFN", cidade: "Santa Maria/RS" },
    { dias: ["2026-11-28", "2026-11-29"], instituicao: "UFRGS", cidade: "" },

    // Dezembro
    { dias: ["2026-12-05"], instituicao: "PUCRS", cidade: "Porto Alegre/RS" },
    { dias: ["2026-12-05"], instituicao: "UNISINOS", cidade: "São Leopoldo/RS" },
    { dias: ["2026-12-05"], instituicao: "UNISC", cidade: "Santa Cruz do Sul/RS" },
    { dias: ["2026-12-06"], instituicao: "MOINHOS", cidade: "Porto Alegre/RS" },
    { dias: ["2026-12-06"], instituicao: "UNIJUÍ", cidade: "Ijuí/RS" },
    { dias: ["2026-12-05", "2026-12-06"], instituicao: "UFSC", cidade: "Criciúma/SC" },

    // Janeiro de 2027
    { dias: ["2027-01-09", "2027-01-10"], instituicao: "UFSM", cidade: "Santa Maria/RS" },
    { dias: ["2027-01-25"], instituicao: "UNIVATES", cidade: "Lajeado/RS" }
  ]
};
