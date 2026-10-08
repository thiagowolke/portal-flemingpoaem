/* =====================================================================
   AVALIAÇÃO — DISCIPLINAS ELETIVAS E PROJETO DE VIDA
   ---------------------------------------------------------------------
   Aparece nas séries que tiverem  mostrarEletivas: true  no seu arquivo
   (hoje: 1ª e 2ª séries).

   - niveis:      os níveis de desempenho (sigla, nome e cor da etiqueta)
                  cores disponíveis: "verde", "azul", "amarelo", "vermelho"
   - indicadores: cada indicador tem um título, "o que se espera avaliar"
                  e a descrição de cada nível (use as siglas dos níveis)
   ===================================================================== */

window.CONTEUDO = window.CONTEUDO || {};

CONTEUDO.avaliacaoEletivas = {
  titulo: "Composição da nota — Disciplinas eletivas e Projeto de Vida",
  introducao: "Nas disciplinas eletivas e no Projeto de Vida, o estudante é avaliado pelos indicadores abaixo, em quatro níveis de desempenho e progresso.",

  niveis: [
    { sigla: "D",  nome: "Desenvolveu",         cor: "verde" },
    { sigla: "ED", nome: "Está Desenvolvendo",  cor: "azul" },
    { sigla: "EM", nome: "Em Desenvolvimento",  cor: "amarelo" },
    { sigla: "ND", nome: "Não Desenvolveu",     cor: "vermelho" }
  ],

  indicadores: [
    {
      titulo: "Participação ativa e engajamento",
      espera: "Avaliar a participação ativa e engajamento, considerando frequência em aulas, contribuição em discussões e envolvimento em projetos e atividades práticas para promover uma aprendizagem interativa e significativa.",
      niveis: {
        D:  "Participação constante, contribuindo significativamente para as discussões em sala de aula.",
        ED: "Participação regular, demonstrando interesse, mas com espaço para maior envolvimento.",
        EM: "Participação ocasional, indicando a necessidade de maior engajamento.",
        ND: "Participação limitada ou inexistente nas atividades da disciplina."
      }
    },
    {
      titulo: "Desempenho em projetos práticos com abordagem integrada",
      espera: "Avaliar o desempenho em projetos, destacando qualidade, originalidade, aplicação de conceitos, habilidades de escrita e análise crítica. O foco é evidenciar aprofundamento e reflexão nas atividades práticas da disciplina, promovendo uma abordagem integrada e criativa no desenvolvimento dos projetos.",
      niveis: {
        D:  "Excelente execução de projetos, demonstrando domínio dos conceitos.",
        ED: "Realiza projetos com sucesso, mas com algumas áreas de melhoria identificadas.",
        EM: "Dificuldades na aplicação prática, necessitando de orientação adicional.",
        ND: "Falhas significativas na execução dos projetos, mostrando falta de compreensão prática."
      }
    },
    {
      titulo: "Colaboração e criatividade em projetos, fomentando inovação e cooperação",
      espera: "Avaliar a colaboração e criatividade em projetos de grupo, destacando a aplicação de ideias inovadoras e a colaboração efetiva com colegas. Incentiva a troca de conhecimentos e a disposição para compartilhar aprendizados entre os estudantes, promovendo um ambiente colaborativo e inovador na disciplina.",
      niveis: {
        D:  "Contribuição consistente e construtiva para o sucesso do grupo.",
        ED: "Participa ativamente, mas pode melhorar na colaboração e na comunicação.",
        EM: "Dificuldades na colaboração, exigindo orientação para melhorar.",
        ND: "Pouca ou nenhuma colaboração efetiva em atividades em grupo."
      }
    },
    {
      titulo: "Progresso contínuo, adaptação e melhoria com feedback durante o semestre",
      espera: "Avaliar a progressão contínua das habilidades e conhecimentos, incentivando adaptação e melhoria constante com base no feedback recebido ao longo do curso.",
      niveis: {
        D:  "Progresso notável, com demonstração consistente de melhoria ao longo do curso.",
        ED: "Progresso gradual, indicando esforço contínuo, mas com áreas a serem trabalhadas.",
        EM: "Progresso limitado, requerendo intervenção e suporte adicional.",
        ND: "Pouco ou nenhum progresso identificável durante o período do curso."
      }
    }
  ]
};
