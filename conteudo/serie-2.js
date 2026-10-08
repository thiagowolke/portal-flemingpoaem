/* =====================================================================
   CONTEÚDO DA 2ª SÉRIE
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

CONTEUDO.series["2"] = {
  titulo: "2ª Série",
  subtitulo: "Ensino Médio",

  // Turmas da série (aparecem no topo da página, junto do asterisco)
  turmas: ["201", "202"],

  // Calendário: arquivo PDF na pasta "calendarios".
  // Para trocar, substitua o arquivo (mesmo nome) ou altere o caminho abaixo.
  calendarioPdf: "calendarios/calendario-1a-e-2a-series.pdf",

  // Composição da nota (seção "Composição da nota" da página)
  //   componentes: sigla, valor e nome de cada parte da nota
  //   destaque: "extra" ou "rec" muda o visual do cartão; etiqueta: texto pequeno no cartão
  composicaoNota: {
    titulo: "Composição da nota",
    introducao: "Como é formada a nota da 1ª e da 2ª séries.",
    componentes: [
      { sigla: "PL",   valor: "3,0", nome: "Prova local" },
      { sigla: "PR",   valor: "4,0", nome: "Prova de rede" },
      { sigla: "TRAB", valor: "1,5", nome: "Trabalho ou iniciação científica" },
      { sigla: "SPP",  valor: "1,5", nome: "Simulados" },
      { sigla: "PE",   valor: "0,5", nome: "Pontuação extra (olimpíadas)", destaque: "extra", etiqueta: "Extra" },
      { sigla: "REC",  valor: "7,0", nome: "Recuperação das provas", destaque: "rec", etiqueta: "Recuperação" }
    ],
    instrumentos: [
      { sigla: "PL", nome: "Prova local",
        textos: ["Prova com questões **estilo vestibular** (UFRGS, UFSC, outras…), elaborada pelo **professor da sede**. Há **uma prova local para cada disciplina**. A avaliação contém **20 questões** e o tempo de realização é de **1h30min**."] },
      { sigla: "PL", nome: "Prova local — Redação",
        textos: ["Redação **estilo UFRGS**, com tema definido pelo professor da disciplina. **2h** para realização."] },
      { sigla: "PR", nome: "Prova de rede",
        textos: ["Prova com questões **estilo ENEM**, elaboradas **pela rede**. Há **uma prova de rede por área do conhecimento**:"],
        itens: [
          "**Linguagens:** 32 questões, junto com a **redação** — **4h** para resolução",
          "**Ciências Humanas:** 32 questões — **2h40min** para resolução",
          "**Ciências da Natureza:** 24 questões — **2h** para resolução",
          "**Matemática:** 24 questões — **2h** para resolução"
        ] },
      { sigla: "SPP", nome: "Simulados",
        textos: ["Simulados **periódicos progressivos**, **estilo ENEM**, que avaliam o **acompanhamento do conteúdo**."] },
      { sigla: "TRAB", nome: "Trabalhos",
        textos: [
          "No **primeiro semestre**, o trabalho é composto pela **iniciação científica**, em que os estudantes produzem um trabalho científico, a ser apresentado em uma **mostra na escola**.",
          "No **segundo semestre**, o trabalho é composto pelo **festival de cinema**, em que os estudantes produzem um **curta-metragem** a partir de **leituras obrigatórias da UFRGS**."
        ] },
      { sigla: "PE", nome: "Pontuação extra",
        textos: ["Os estudantes realizam **olimpíadas de conhecimento**, das mais variadas áreas, periodicamente. Ao **obter medalha** em alguma olimpíada, recebem uma pontuação extra no valor de **0,5 ponto**."] }
    ],
    // Regras da calculadora de notas (seção "Calculadora de notas")
    //   recSubstitui: notas que a REC substitui quando for maior
    calculadora: { recSubstitui: ["PL", "PR"], mediaAprovacao: 7, mediaExame: 5 },
    calculo: [
      { rotulo: "Média semestral",      formula: "PL + PR + TRAB + SPP + PE" },
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
    introducao: "Na 2ª série, a nota de redação será composta por **quatro redações no estilo ENEM** (gênero dissertativo-argumentativo), **quatro redações de outros gêneros textuais** e pela produção de **uma redação vinculada à PR**.",
    componentes: [
      { sigla: "PE1", valor: "1,2", peso: "12%", nome: "Produção ENEM 1" },
      { sigla: "PE2", valor: "1,2", peso: "12%", nome: "Produção ENEM 2" },
      { sigla: "PE3", valor: "1,2", peso: "12%", nome: "Produção ENEM 3" },
      { sigla: "PE4", valor: "1,2", peso: "12%", nome: "Produção ENEM 4" },
      { sigla: "PM1", valor: "0,8", peso: "8%",  nome: "Produção Multigêneros 1" },
      { sigla: "PM2", valor: "0,8", peso: "8%",  nome: "Produção Multigêneros 2" },
      { sigla: "PM3", valor: "0,8", peso: "8%",  nome: "Produção Multigêneros 3" },
      { sigla: "PM4", valor: "0,8", peso: "8%",  nome: "Produção Multigêneros 4" },
      { sigla: "PR",  valor: "2,0", peso: "20%", nome: "Prova em Rede" },
      { sigla: "REC", valor: "2,0", peso: "20%", nome: "Recuperação — décimo instrumento, para fins de recuperação", destaque: "rec", etiqueta: "Recuperação" }
    ],
    instrumentos: [
      { sigla: "PE", nome: "Redação ENEM",
        textos: ["Redação **estilo ENEM**, avaliada a partir dos **critérios estabelecidos pelo INEP**."] },
      { sigla: "PM", nome: "Produções Multigêneros",
        textos: ["Redação **estilo vestibulares**, em que os estudantes produzem, ao longo do ano, **redações de diferentes gêneros de escrita**. Aqui está prevista a produção de redações **estilo UFRGS, PUCRS e outros vestibulares**."] }
    ],
    // Regras da calculadora de redação: a REC substitui a(s) prova(s) quando for maior
    calculadora: { recSubstitui: ["PR"], mediaAprovacao: 7 },
    calculo: [
      { rotulo: "Média semestral (MS)", formula: "PE1 + PE2 + PE3 + PE4 + PM1 + PM2 + PM3 + PM4 + PR **≥ 7,0**" }
    ],
    observacao: "Caso o estudante não alcance a nota mínima com as notas parciais, deverá ser recomendada a realização da **recuperação semestral (REC)**."
  },

  // Mostrar a seção de avaliação das disciplinas eletivas e Projeto de Vida (conteudo/eletivas.js)
  mostrarEletivas: true,

  // Materiais para baixar. Cada item:
  //   arquivo:      caminho do arquivo no site (sem acentos nem espaços)
  //   nomeDownload: nome que o arquivo recebe ao ser baixado
  materiais: [
    { titulo: "Guia Escolar 2026", descricao: "Guia escolar da 2ª série.",
      arquivo: "guias/guia-escolar-2a-serie-2026.pdf", nomeDownload: "Guia Escolar 2ª Série 2026.pdf" },
    { titulo: "Calendário 2026", descricao: "Calendário da 1ª e 2ª séries, de agosto a dezembro de 2026.",
      arquivo: "calendarios/calendario-1a-e-2a-series.pdf", nomeDownload: "Calendário 1ª e 2ª Séries 2026.pdf" }
  ],

  // Links úteis. link: "" = ainda sem link
  links: [
    { titulo: "Portal do Aluno — GVDasa", link: "https://fleming.aluno.gvdasa.com.br/" },
    { titulo: "Galeria de Aprovados — Ensino Médio", link: "https://flemingeducacao.com.br/apv_ensinomedio/" }
  ]
};
