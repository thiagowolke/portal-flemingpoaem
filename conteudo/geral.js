/* =====================================================================
   CONTEÚDO GERAL DO PORTAL (página inicial, avisos, acessos rápidos, rodapé)
   ---------------------------------------------------------------------
   Para alterar um texto, troque apenas o que está ENTRE AS ASPAS "…".
   Onde aparece A_INSERIR, o site mostra "INFORMAÇÃO A INSERIR".
   Para preencher, troque A_INSERIR por um texto entre aspas.
   Exemplo:   telefone: A_INSERIR,
   vira:      telefone: "(51) 0000-0000",
   ===================================================================== */

window.CONTEUDO = window.CONTEUDO || {};
var A_INSERIR = "INFORMAÇÃO A INSERIR";

CONTEUDO.geral = {
  nomeEscola: "Colégio Fleming",
  unidade: "Porto Alegre",

  // Logo: versão verde (usada no cabeçalho branco)
  // e versão branca (usada nas áreas verdes: página inicial e rodapé).
  // Para voltar ao "F" provisório, deixe os dois como "".
  logo: "imagens/logo-verde.png",
  logoBranco: "imagens/logo-branco.png",

  tituloPortal: "Portal do Ensino Médio",

  // Linha abaixo do título.
  // (Se usar uma barra "|", o trecho antes dela aparece em negrito.)
  subtituloPortal: "Colégio Fleming Porto Alegre",

  // Foto à direita do título na página inicial (deixe "" para não mostrar foto)
  imagemInicio: "imagens/colegio.webp",
  imagemInicioDescricao: "Prédio do Colégio Fleming em Porto Alegre",

  // Aviso em destaque no topo da página inicial (deixe "" para não mostrar)
  avisoPortal: "**Atenção:** este é um portal somente para estudantes e responsáveis da sede de Porto Alegre do Fleming.",

  // Barra de avisos que roda no alto da página inicial.
  // O site já coloca nela, sozinho: próximos vestibulares, próximas datas do
  // calendário e as conquistas do Conecta. Aqui você acrescenta avisos próprios.
  // Cada aviso:  { texto: "...", link: "pagina.html" }   (link é opcional)
  // Negrito: coloque o trecho entre **dois asteriscos**.
  // Exemplo:
  //   { texto: "**Reunião de pais** dia 20/10, às 19h", link: "contatos.html" },
  avisosRolantes: [
  ],

  apresentacao:
    "Aqui estudantes e famílias encontram, em um só lugar, as informações de cada série, " +
    "as regras da escola, tutoriais e os contatos das equipes.",

  // Cards grandes da página inicial ("Navegue pelo portal")
  //   grupo: os cards com o mesmo grupo aparecem juntos, sob o mesmo título
  //   largo: true faz o card ocupar a linha inteira
  // (a ordem aqui é a ordem na tela)
  cards: [
    { grupo: "Turmas", titulo: "1ª Série", descricao: "Calendário, avisos, composição da nota e calculadoras da 1ª série.", link: "serie.html?s=1", numero: "1ª" },
    { grupo: "Turmas", titulo: "2ª Série", descricao: "Calendário, avisos, composição da nota e calculadoras da 2ª série.", link: "serie.html?s=2", numero: "2ª" },
    { grupo: "Turmas", titulo: "3ª Série", descricao: "Calendário, avisos, composição da nota e calculadoras da 3ª série.", link: "serie.html?s=3", numero: "3ª" },

    { grupo: "Orientações", titulo: "Materiais", descricao: "Livros, simulados e outros materiais: o que é cada um e como usar.", link: "materiais.html", icone: "livro" },
    { grupo: "Orientações", titulo: "Atendimentos", descricao: "Cronograma de estudos, análise de desempenho e monitorias tira-dúvidas de Física, Matemática e Biologia.", link: "atendimentos.html", icone: "calendario" },
    { grupo: "Orientações", titulo: "Regras da Escola", descricao: "Regras gerais, avaliações, frequência, atrasos e advertências.", link: "regras.html", icone: "regras" },
    { grupo: "Orientações", titulo: "Tutoriais", descricao: "Passo a passo para usar os sistemas e serviços da escola.", link: "tutoriais.html", icone: "tutorial" },

    { grupo: "Outros recursos", titulo: "Conecta", descricao: "O evento da rede: etapa local, etapa em rede e Painel dos campeões.", link: "conecta.html", icone: "estrela" },
    { grupo: "Outros recursos", titulo: "Vestibulares", descricao: "Datas dos principais vestibulares e do ENEM, com contagem regressiva.", link: "vestibulares.html", icone: "capelo" },
    { grupo: "Outros recursos", titulo: "Festival de Cinema", descricao: "Curtas-metragens a partir das leituras obrigatórias da UFRGS.", link: "festival.html", icone: "video", requer: "festival" },

    { grupo: "Fale com a escola", titulo: "Contatos", descricao: "Secretaria, coordenação e direção.", link: "contatos.html", icone: "telefone", largo: true }
  ],

  // Rodapé (parte de baixo de todas as páginas)
  rodape: {
    endereco: "Rua Ramiro Barcellos, 1260",
    telefone: "+55 51 8122-7306",
    email: "secretariaempoa@flemingeducacao.com.br",

    // Crédito exibido na última linha de todas as páginas
    creditos: "Desenvolvido por Thiago Wolke"
  }
};
