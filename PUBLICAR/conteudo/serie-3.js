/* =====================================================================
   CONTEÚDO DA 3ª SÉRIE
   ---------------------------------------------------------------------
   Troque apenas o que está ENTRE AS ASPAS "…".
   A_INSERIR mostra "INFORMAÇÃO A INSERIR" no site.
   Para adicionar um item a uma lista, copie uma linha { … }, cole abaixo
   e altere os textos (mantenha a vírgula no final de cada linha).

   Cada bloco abaixo (calendario, materiais, links) é uma seção da
   página. Se um bloco for apagado, a seção some do site automaticamente.
   Os Avisos são automáticos (conteudo/eventos-calendario.js).
   ===================================================================== */

window.CONTEUDO = window.CONTEUDO || {};
CONTEUDO.series = CONTEUDO.series || {};

CONTEUDO.series["3"] = {
  titulo: "3ª Série",
  subtitulo: "Ensino Médio",

  // Turmas da série (aparecem no topo da página, junto do asterisco)
  turmas: ["301", "302"],

  // Calendário: arquivo PDF na pasta "calendarios".
  // Para trocar, substitua o arquivo (mesmo nome) ou altere o caminho abaixo.
  calendarioPdf: "calendarios/calendario-3a-serie.pdf",

  // Composição da nota (seção "Composição da nota" da página)
  //   componentes: sigla, valor e nome de cada parte da nota
  //   destaque: "extra" ou "rec" muda o visual do cartão; etiqueta: texto pequeno no cartão
  composicaoNota: {
    titulo: "Composição da nota",
    introducao: "Como é formada a nota da 3ª série.",
    componentes: [
      { sigla: "PL",  valor: "4,0", nome: "Prova local" },
      { sigla: "PR",  valor: "4,0", nome: "Prova de rede" },
      { sigla: "SPP", valor: "2,0", nome: "Simulados" },
      { sigla: "PE",  valor: "0,5", nome: "Pontuação extra (olimpíadas)", destaque: "extra", etiqueta: "Extra" },
      { sigla: "REC", valor: "8,0", nome: "Recuperação das provas", destaque: "rec", etiqueta: "Recuperação" }
    ],
    instrumentos: [
      { sigla: "PL", nome: "Prova local",
        textos: ["Prova com questões **estilo vestibular** (UFRGS, UFSC, outras…), elaborada pelo **professor da sede**. Há **uma prova local para cada disciplina**. A avaliação contém **20 questões** e o tempo de realização é de **1h30min**."] },
      { sigla: "PL", nome: "Prova local — Redação",
        textos: ["Redação **estilo UFRGS**, com tema definido pelo professor da disciplina. **2h** para realização."] },
      { sigla: "PR", nome: "Prova de rede",
        textos: ["Prova com questões **estilo ENEM**, elaboradas **pela rede**. Há **uma prova de Linguagens, Humanas e Redação** e **outra de Ciências da Natureza e Matemática**, assim como no ENEM:"],
        itens: [
          "**Linguagens e Ciências Humanas:** 90 questões, junto com a **redação** — **5h30min** para realização",
          "**Ciências da Natureza e Matemática:** 90 questões — **5h** para realização"
        ] },
      { sigla: "SPP", nome: "Simulados",
        textos: ["Simulados **periódicos progressivos**, **estilo ENEM e vestibulares de públicas**, que avaliam o **acompanhamento do conteúdo**."] },
      { sigla: "PE", nome: "Pontuação extra",
        textos: ["Os estudantes realizam **olimpíadas de conhecimento**, das mais variadas áreas, periodicamente. Ao **obter medalha** em alguma olimpíada, recebem uma pontuação extra no valor de **0,5 ponto**."] }
    ],
    // Regras da calculadora de notas (seção "Calculadora de notas")
    //   recSubstitui: notas que a REC substitui quando for maior
    calculadora: { recSubstitui: ["PL", "PR"], mediaAprovacao: 7, mediaExame: 5 },
    calculo: [
      { rotulo: "Média semestral",      formula: "PL + PR + SPP + PE" },
      { rotulo: "Média anual",          formula: "(1º semestre + 2º semestre) ÷ 2" },
      { rotulo: "Média para aprovação", formula: "**7,0**" }
    ],
    exame: {
      titulo: "Exame final",
      textos: [
        "Caso o estudante não alcance a **média anual 7** em alguma disciplina, fará o **exame final** da disciplina.",
        "O exame final é uma prova composta por **20 questões**, que retoma todo o conteúdo do ano da disciplina."
      ],
      rotuloFormula: "Aprovação por exame",
      formula: "(média anual + média do exame) ÷ 2 **≥ 5**"
    }
  },

  // Composição da nota de redação (seção "Nota de redação" da página)
  //   peso: porcentagem mostrada no cartão
  composicaoRedacao: {
    titulo: "Composição da nota — Redação",
    introducao: "Na 3ª série, a nota de redação será composta por **seis redações no estilo ENEM** (gênero dissertativo-argumentativo), **quatro redações de outros gêneros textuais** e pela produção de duas redações, uma vinculada à **Prova Local** e outra à **Prova em Rede**.",
    componentes: [
      { sigla: "PE1", valor: "0,7", peso: "7%",  nome: "Produção ENEM 1" },
      { sigla: "PE2", valor: "0,7", peso: "7%",  nome: "Produção ENEM 2" },
      { sigla: "PE3", valor: "0,7", peso: "7%",  nome: "Produção ENEM 3" },
      { sigla: "PE4", valor: "0,7", peso: "7%",  nome: "Produção ENEM 4" },
      { sigla: "PE5", valor: "0,7", peso: "7%",  nome: "Produção ENEM 5" },
      { sigla: "PE6", valor: "0,7", peso: "7%",  nome: "Produção ENEM 6" },
      { sigla: "PM1", valor: "0,7", peso: "7%",  nome: "Produção Multigêneros 1" },
      { sigla: "PM2", valor: "0,7", peso: "7%",  nome: "Produção Multigêneros 2" },
      { sigla: "PM3", valor: "0,7", peso: "7%",  nome: "Produção Multigêneros 3" },
      { sigla: "PM4", valor: "0,7", peso: "7%",  nome: "Produção Multigêneros 4" },
      { sigla: "PL",  valor: "1,5", peso: "15%", nome: "Prova Local" },
      { sigla: "PR",  valor: "1,5", peso: "15%", nome: "Prova em Rede" },
      { sigla: "REC", valor: "3,0", peso: "30%", nome: "Recuperação — instrumento adicional, para fins de recuperação", destaque: "rec", etiqueta: "Recuperação" }
    ],
    instrumentos: [
      { sigla: "PE", nome: "Redação ENEM",
        textos: ["Redação **estilo ENEM**, avaliada a partir dos **critérios estabelecidos pelo INEP**."] },
      { sigla: "PM", nome: "Produções Multigêneros",
        textos: ["Redação **estilo vestibulares**, em que os estudantes produzem, ao longo do ano, **redações de diferentes gêneros de escrita**. Aqui está prevista a produção de redações **estilo UFRGS, PUCRS e outros vestibulares**."] }
    ],
    // Regras da calculadora de redação: a REC substitui a(s) prova(s) quando for maior
    calculadora: { recSubstitui: ["PL", "PR"], mediaAprovacao: 7 },
    calculo: [
      { rotulo: "Média semestral (MS)", formula: "PE1 + PE2 + PE3 + PE4 + PE5 + PE6 + PM1 + PM2 + PM3 + PM4 + PL + PR **≥ 7,0**" }
    ]
  },

  // Avaliação do Projeto de Vida: usa os indicadores de conteudo/eletivas.js,
  // com título, abertura e nome do atalho próprios da 3ª série
  mostrarEletivas: true,
  eletivasTitulo: "Composição da nota — Projeto de Vida",
  eletivasIntroducao: "No Projeto de Vida, o estudante é avaliado pelos indicadores abaixo, em quatro níveis de desempenho e progresso.",
  eletivasAtalho: "Projeto de Vida",

  // Materiais para baixar. Cada item:
  //   arquivo:      caminho do arquivo no site (sem acentos nem espaços)
  //   nomeDownload: nome que o arquivo recebe ao ser baixado
  materiais: [
    { titulo: "Guia Escolar 2026", descricao: "Guia escolar da 3ª série.",
      arquivo: "guias/guia-escolar-3a-serie-2026.pdf", nomeDownload: "Guia Escolar 3ª Série 2026.pdf" },
    { titulo: "Calendário 2026", descricao: "Calendário da 3ª série, de agosto a dezembro de 2026.",
      arquivo: "calendarios/calendario-3a-serie.pdf", nomeDownload: "Calendário 3ª Série 2026.pdf" }
  ],

  // Links úteis. link: "" = ainda sem link
  links: [
    { titulo: "Portal do Aluno — Portal Fleming", link: "https://fleming.aletech.com.br/login" },
    { titulo: "Resultados dos Simulados ENEM e SAE — pelo computador", link: "https://flemingeducacao.azurewebsites.net/" },
    { titulo: "Resultados dos Simulados ENEM e SAE — pelo celular", link: "https://flemingeducacao-mob-crbkbcanbnghc4fn.brazilsouth-01.azurewebsites.net/" },
    { titulo: "Galeria de Aprovados — Ensino Médio", link: "https://flemingeducacao.com.br/apv_ensinomedio/" }
  ]
};
