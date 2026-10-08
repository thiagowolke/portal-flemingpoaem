/* =====================================================================
   CONECTA 2026 (página "Conecta 2026")
   ---------------------------------------------------------------------
   Troque A_INSERIR pelos textos reais, entre aspas.
   Para adicionar uma atividade, copie uma linha { … } e altere os textos.
   Negrito: coloque o trecho entre **dois asteriscos**.
   ===================================================================== */

window.CONTEUDO = window.CONTEUDO || {};

CONTEUDO.conecta = {
  slogan: "Sinta o ritmo. Viva a conexão.",
  edicao: "Sounds",
  ano: "2026",
  datas: "29/09 a 01/10",   // conforme o calendário escolar

  // Seções "Etapa local" e "Etapa em rede": cada uma tem
  //   introducao, grupos (cartões com título, ícone e lista) e textos (caixa de destaque)

  // Inscrições (aparece no topo da página; deixe link "" para esconder)
  //   barra: quanto da barra aparece preenchido, de 0 a 100
  inscricao: {
    link: "https://forms.office.com/r/PbepyudmDd",
    botao: "Inscreva-se já",
    aviso: "Vagas limitadas",
    barra: 90
  },

  // Foto à direita do título (deixe "" para não mostrar foto)
  imagem: "imagens/recantomaestro.jpg",
  imagemDescricao: "Vista aérea do Recanto Maestro",

  // 01 — O que é o Conecta
  sobreImagem: "imagens/conecta/sobre-campeao.jpg",   // foto à esquerda do texto ("" para tirar)
  sobreImagemDescricao: "Estudante comemorando com o troféu do Conecta",
  sobre: [
    "O **CONECTA 2026** é uma experiência que combina **competição, diversão, criatividade e espírito de equipe** em três dias que prometem ficar na memória.",
    "De **29 de setembro a 1º de outubro**, o **Hotel Recanto Maestro** será o cenário de uma grande gincana, com desafios que vão muito além da competição esportiva. As equipes participarão de **tarefas de arrecadação, provas esportivas, desafios artísticos e atividades intelectuais**, colocando à prova diferentes talentos e habilidades.",
    "Aqui, **cada prova pode fazer a diferença**. É preciso ter **estratégia** para competir, **criatividade** para resolver desafios, **disposição** para entrar em campo e **união** para fazer a equipe avançar.",
    "Mais do que ganhar pontos, o CONECTA é uma oportunidade de **viver momentos diferentes com os amigos**, conhecer novas pessoas, superar desafios e fazer parte de uma experiência que **só acontece uma vez por ano**.",
    "**Prepare sua equipe. Entre na disputa. Viva o CONECTA 2026.**"
  ],

  // Etapa local (antes do evento)
  etapaLocal: {
    imagem: "imagens/conecta/etapa-local-doacoes.jpg",   // foto ao lado do texto ("" para tirar)
    imagemDescricao: "Estudantes organizando as doações de alimentos arrecadadas para o Conecta",
    introducao: "Antes do evento, as sedes participam de tarefas que ajudam a definir a **sede vencedora**.",
    grupos: [
      { titulo: "Tarefas artísticas", icone: "estrela", itens: [
        "Enfeitar a sede;",
        "Produzir obras artísticas;",
        "Fazer postagens nas redes sociais."
      ] },
      { titulo: "Tarefas solidárias", icone: "coracao", itens: [
        "Arrecadar alimentos e produtos de limpeza."
      ] }
    ],
    textos: [
      "A sede que realizar as tarefas **da melhor maneira e mais rapidamente** conquista a etapa.",
      "Por isso, a organização destaca a importância de **agilidade nas postagens** e de produzir **conteúdos visualmente atrativos e com bastante engajamento**."
    ]
  },

  // Etapa em rede (durante o evento)
  etapaRede: {
    imagem: "imagens/conecta/etapa-rede-competicoes.jpg",   // foto ao lado do texto ("" para tirar)
    imagemDescricao: "Partida de futebol durante as competições do Conecta",
    introducao: "Durante o CONECTA, haverá diferentes tipos de **competições**.",
    grupos: [
      { titulo: "Competições esportivas", icone: "estrela", itens: [
        "Futebol;",
        "Basquete;",
        "Tênis;",
        "Vôlei;",
        "Beach Tennis;",
        "entre outras."
      ] },
      { titulo: "Competições intelectuais e artísticas", icone: "capelo", itens: [
        "Xadrez;",
        "Uno;",
        "Imagem e Ação;",
        "Dança;",
        "Dança em grupo;",
        "Lipsync."
      ] }
    ],
    textos: [
      "Cada **equipe vencedora** recebe um **troféu**, enquanto cada **estudante vencedor** recebe uma **medalha**.",
      "Para a preparação, será necessário organizar **treinos** e **representantes para cada modalidade**."
    ]
  },

  // Painel dos campeões (galeria de fotos)
  //   arquivo: caminho da foto (use as versões otimizadas da pasta imagens/campeoes)
  //   titulo:  legenda da foto
  //   descricao: (opcional) texto que aparece embaixo da legenda
  //   medalha:   "ouro", "prata" ou "bronze" (desenha a medalha no cartão)
  campeoes: [
    { arquivo: "imagens/campeoes/gabriel-e-santiago.jpg",            titulo: "Beach Tennis", medalha: "ouro",
      descricao: "Gabriel e Santiago, da turma 202 de 2026, conquistam o ouro no Beach Tennis Masculino." },
    { arquivo: "imagens/campeoes/danca-em-grupo.jpg",                titulo: "Dança em grupo", medalha: "bronze",
      descricao: "Estudantes Ana, Isadora, Maria Clara, Manuela e Natália, da turma 101 de 2026, conquistam o bronze na Dança em grupo." },
    { arquivo: "imagens/campeoes/evolucao-dos-estilos-musicais.jpg", titulo: "Evolução dos estilos musicais", medalha: "ouro",
      descricao: "Estudantes Ana, Isadora, Maria Clara, Manuela e Natália, da turma 101 de 2026, conquistam o ouro na Dança em grupo." },
    { arquivo: "imagens/campeoes/quiz-musicalidades.jpg",            titulo: "Quiz Musicalidades", medalha: "bronze",
      descricao: "Estudantes Maria Clara e Lauren, da turma 101 de 2026, conquistam o bronze no Quiz Musicalidades." },
    { arquivo: "imagens/campeoes/apresentacao-cultural-solo.jpg",    titulo: "Apresentação Cultural Solo", medalha: "ouro",
      descricao: "Estudante Lauren, da turma 101 de 2026, conquista o ouro na Apresentação Cultural Solo." }
  ],

  // Veja mais sobre as edições anteriores (vídeos do Instagram dentro de um mini iPhone)
  //   Para acrescentar um vídeo, cole o link do reel entre aspas na lista do ano.
  edicoesAnteriores: [
    { ano: "2024", videos: [
      "https://www.instagram.com/reel/C_YZ3rkOaaM/",
      "https://www.instagram.com/reel/C_ttUWcOT1f/"
    ] },
    { ano: "2025", videos: [
      "https://www.instagram.com/reel/DNRjhx1v3Ct/"
    ] }
  ]
};
