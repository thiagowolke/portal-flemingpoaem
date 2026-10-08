/* =====================================================================
   FESTIVAL DE CINEMA (página "Festival de Cinema")
   ---------------------------------------------------------------------
   Troque A_INSERIR pelos textos reais, entre aspas.
   Para adicionar um item, copie uma linha { … } e altere os textos.
   Negrito: coloque o trecho entre **dois asteriscos**.
   ===================================================================== */

window.CONTEUDO = window.CONTEUDO || {};

CONTEUDO.festival = {
  // LIGA/DESLIGA a página no site:
  //   false = escondida (some do menu, do rodapé e da página inicial; nada é apagado)
  //   true  = aparece normalmente
  ativo: false,

  subtitulo: "1ª e 2ª séries · 2º semestre",
  apresentacao: "Os estudantes produzem um **curta-metragem** a partir das **leituras obrigatórias da UFRGS**.",
  data: A_INSERIR,             // data do festival (aparece no topo da página)

  // Foto à direita do título (deixe "" para não mostrar foto)
  imagem: "imagens/festival/festival-cinematografico.jpg",
  imagemDescricao: "Auditório lotado diante do telão do Festival de Cinema do Fleming",

  // 01 — O que é o festival
  sobre: [
    "No **segundo semestre**, o trabalho (**TRAB**) da **1ª e da 2ª séries** é composto pelo **festival de cinema**.",
    "Os estudantes produzem um **curta-metragem** a partir de **leituras obrigatórias da UFRGS**."
  ],

  // 02 — Como vale na nota
  nota: [
    "O festival compõe o **TRAB** do 2º semestre, que vale **até 1,5 ponto** na média semestral (PL + PR + TRAB + SPP + PE)."
  ],

  // 03 — Leituras obrigatórias usadas no festival (uma por linha)
  leituras: [
    A_INSERIR
  ],

  // 04 — Cronograma (etapas e datas)
  cronograma: [
    { etapa: A_INSERIR, data: A_INSERIR }
  ],

  // 05 — Informações importantes
  informacoes: [
    { titulo: "Data",           icone: "calendario", texto: A_INSERIR },
    { titulo: "Local",          icone: "predio",     texto: A_INSERIR },
    { titulo: "Quem participa", icone: "pessoas",    texto: "Estudantes da 1ª e da 2ª séries" },
    { titulo: "Entrega do filme", icone: "pasta",    texto: A_INSERIR }
  ],

  // 06 — Fique atento (deixe a lista vazia [] para esconder a seção)
  avisos: [
  ]
};
