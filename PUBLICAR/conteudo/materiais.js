/* =====================================================================
   MATERIAIS (página "Materiais")
   ---------------------------------------------------------------------
   A página tem duas abas: "1ª e 2ª séries" e "3ª série".
   Cada aba é dividida em grupos (ex.: "Simulados"), e cada grupo tem materiais.

   Cada grupo:
     titulo:      nome do grupo
     introducao:  (opcional) texto que aparece em destaque antes dos materiais
     materiais:   lista de materiais

   Cada material:
     nome:     nome do material
     quantidade: (opcional) quantos volumes/módulos/simulados, ex.: "4 módulos"
     imagens:  foto(s) da capa, na pasta imagens/materiais (pode ter mais de uma)
     oQueE:    o que é o material
     comoUsar: como usar o material
     dicas:    (opcional) lista de dicas
     link:     (opcional) endereço para acessar o material

   Para adicionar um material, copie um bloco { … } inteiro e altere os textos.
   Negrito: coloque o trecho entre **dois asteriscos**.
   ===================================================================== */

window.CONTEUDO = window.CONTEUDO || {};

CONTEUDO.materiais = {
  introducao: "Conheça os livros, guias e simulados da sua série: o que é cada material e como aproveitá-lo ao máximo nos estudos.",

  // Apresentação que aparece antes das abas (deixe texto "" para esconder)
  apresentacao: {
    titulo: "Material Didático",
    texto: "Nosso material didático é **produzido por nossos próprios professores**, com **alta qualidade, rigor acadêmico** e atenção às **exigências dos principais vestibulares**. Conteúdos cuidadosamente elaborados para proporcionar uma preparação **completa, objetiva e eficiente**."
  },

  abas: [
    // ---------------------------------------------------------------
    // 1ª E 2ª SÉRIES
    // ---------------------------------------------------------------
    {
      titulo: "1ª e 2ª séries",
      grupos: [
        {
          titulo: "Livros teóricos",
          materiais: [
            {
              nome: "Linguagens",
              imagens: ["imagens/materiais/em-ling.jpg"],
              oQueE: "**Livro teórico** para acompanhamento das aulas. Possui **questões de fixação**, com **nível de dificuldade progressivo**.",
              comoUsar: "**Fixação e revisão de conteúdos**, através da leitura e da resolução das questões."
            },
            {
              nome: "Humanas",
              imagens: ["imagens/materiais/em-humanas.jpg"],
              oQueE: "**Livro teórico** para acompanhamento das aulas. Possui **questões de fixação**, com **nível de dificuldade progressivo**.",
              comoUsar: "**Fixação e revisão de conteúdos**, através da leitura e da resolução das questões."
            },
            {
              nome: "Ciências da Natureza",
              imagens: ["imagens/materiais/em-nat.jpg"],
              oQueE: "**Livro teórico** para acompanhamento das aulas. Possui **questões de fixação**, com **nível de dificuldade progressivo**.",
              comoUsar: "**Fixação e revisão de conteúdos**, através da leitura e da resolução das questões."
            },
            {
              nome: "Matemática",
              imagens: ["imagens/materiais/em-mat.jpg"],
              oQueE: "**Livro teórico** para acompanhamento das aulas. Possui **questões de fixação**, com **nível de dificuldade progressivo**.",
              comoUsar: "**Fixação e revisão de conteúdos**, através da leitura e da resolução das questões."
            }
          ]
        },
        {
          titulo: "Simulados",
          materiais: [
            {
              nome: "SPPs",
              quantidade: "6 simulados",
              imagens: ["imagens/materiais/simulado-enem.jpg"],
              oQueE: "**Simulado de aprendizagem progressiva.** Possui questões de **nível mais básico**, somente com **conteúdo visto**. Acontece **nas quartas-feiras, pela tarde**.",
              comoUsar: "Resolução de questões para **fixação do conteúdo** visto em aula e para **análise e monitoramento de dificuldades** e lacunas teóricas."
            },
            {
              nome: "Simulados TRIEDUC",
              quantidade: "2 simulados",
              imagens: ["imagens/materiais/em-trieduc.jpg"],
              oQueE: "**Simulado ENEM.** Possui **questões inéditas estilo ENEM**, com conteúdo visto e não visto, na mesma proporção da prova realizada pelo INEP.",
              comoUsar: "Simulação real da prova ENEM. Acontece **aos sábados, pela tarde**, no mesmo horário da prova real."
            }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------
    // 3ª SÉRIE
    // ---------------------------------------------------------------
    {
      titulo: "3ª série",
      grupos: [
        {
          titulo: "Livros teóricos e Guias de estudo",
          materiais: [
            {
              nome: "Linguagens e Humanas",
              quantidade: "4 módulos",
              imagens: ["imagens/materiais/ling-humanas.jpg"],
              oQueE: "**Livro teórico** para acompanhamento das aulas. Possui **questões de fixação**, com nível de dificuldade um pouco menor.",
              comoUsar: "**Fixação e revisão de conteúdos**, através da leitura e da resolução das questões."
            },
            {
              nome: "Ciências da Natureza e Matemática",
              quantidade: "4 módulos",
              imagens: ["imagens/materiais/nat-mat.jpg"],
              oQueE: "**Livro teórico** para acompanhamento das aulas. Possui **questões de fixação**, com nível de dificuldade um pouco menor.",
              comoUsar: "**Fixação e revisão de conteúdos**, através da leitura e da resolução das questões."
            },
            {
              nome: "Livros únicos: Filosofia, Sociologia, Inglês e Projeto de vida",
              imagens: ["imagens/materiais/filo-socio.jpg", "imagens/materiais/projeto-de-vida.jpg", "imagens/materiais/ingles.jpg"],
              oQueE: "**Livro teórico** para acompanhamento das aulas. Possui **questões de fixação**, com nível de dificuldade um pouco menor.",
              comoUsar: "**Fixação e revisão de conteúdos**, através da leitura e da resolução das questões."
            },
            {
              nome: "Guias de estudo",
              quantidade: "4 módulos",
              imagens: ["imagens/materiais/guia-de-estudos.jpg"],
              oQueE: "Guia de questões, com questões **organizadas por nível de dificuldade**. O guia possui cerca de **3000 questões** dos mais variados vestibulares, com foco em **ENEM e UFRGS**.",
              comoUsar: "Resolução de questões para **treino** e **direcionamento de estudo** a partir das dificuldades e erros."
            }
          ]
        },
        {
          titulo: "Simulados",
          introducao: "Cada um dos simulados gera um **boletim de desempenho completo**, que conta com: posição geral do estudante, média, análise de erros e outros recursos. Recomenda-se, após a divulgação dos resultados, **agendar horário com a coordenação** para análise de desempenho e direcionamento dos estudos.",
          materiais: [
            {
              nome: "SAP",
              quantidade: "7 simulados",
              imagens: ["imagens/materiais/sap.jpg"],
              oQueE: "**Simulado de Aprendizagem Progressiva.** Possui questões de **nível mais básico**, somente com **conteúdo visto**.",
              comoUsar: "Resolução de questões para fixação do conteúdo visto em aula. Direcionado para alunos que estão **consolidando uma base teórica**. O estudante recebe o SAP em aula, **todas as sextas-feiras**, e tem uma janela de aplicação para a sua resolução."
            },
            {
              nome: "SAE",
              quantidade: "7 simulados",
              imagens: ["imagens/materiais/sae.jpg"],
              oQueE: "**Simulado Avançado ENEM.** Possui **questões inéditas estilo ENEM**, com conteúdo visto e não visto, na mesma proporção da prova realizada pelo INEP.",
              comoUsar: "Resolução de questões, simulando a prova na íntegra, para fixação e revisão do conteúdo visto em aula e adiantamento de conteúdos. Além disso, treina o estudante para dificuldades práticas encontradas na prova do ENEM. Direcionado para alunos que estão com **base consolidada**, em um nível mais próximo do avançado. O estudante recebe o SAE em aula, **todas as sextas-feiras**, e tem uma janela de aplicação para a sua resolução. O recomendado é que o SAE seja realizado em **aplicação única, no final de semana**, simulando um ENEM real."
            },
            {
              nome: "Simulado ENEM",
              quantidade: "4 simulados",
              imagens: ["imagens/materiais/simulado-enem.jpg"],
              oQueE: "**Simulado ENEM.** Possui **questões inéditas estilo ENEM**, com conteúdo visto e não visto, na mesma proporção da prova realizada pelo INEP.",
              comoUsar: "Simulação real da prova ENEM. Acontece **aos sábados, pela tarde**, no mesmo horário da prova real."
            },
            {
              nome: "Simulado UFRGS",
              quantidade: "3 simulados",
              imagens: ["imagens/materiais/simulado-ufrgs.jpg"],
              oQueE: "Possui **questões inéditas estilo UFRGS**, com conteúdo visto e não visto, na mesma proporção da prova realizada pela COPERSE.",
              comoUsar: "Simulação real da prova da UFRGS. Acontece **aos sábados e domingos, pela tarde**, no mesmo horário da prova real."
            },
            {
              nome: "Simulado UFRGS por livro",
              quantidade: "4 simulados",
              imagens: ["imagens/materiais/simulado-ufrgs.jpg"],
              oQueE: "Possui **questões inéditas estilo UFRGS**, com **conteúdo visto no módulo de livros recém-finalizado**.",
              comoUsar: "Simulação real da prova da UFRGS. Acontece **nas terças e quartas, pela tarde**, no mesmo horário da prova real. Deve ser utilizado, para além da simulação, como uma ferramenta para **revisão de conteúdos** vistos e **análise de lacunas**."
            }
          ]
        },
        {
          titulo: "Outros materiais",
          materiais: [
            {
              nome: "EMAX",
              quantidade: "1 volume para cada área do conhecimento: Linguagens, Humanas, Natureza e Matemática",
              imagens: ["imagens/materiais/emax.jpg"],
              oQueE: "Cadernos de prova das **últimas seis edições do ENEM**, em que as questões estão organizadas por **competências, habilidades e níveis de proficiência**. Essa organização é realizada a partir dos microdados, divulgados pelo INEP após cada edição do ENEM.",
              comoUsar: "A partir dos resultados obtidos nos simulados estilo ENEM, os estudantes devem **procurar a coordenação**, onde serão orientados sobre a utilização dos cadernos. A partir de dificuldades observadas em certas habilidades e competências, e das proficiências não alcançadas, o estudante deve realizar as **questões compatíveis**."
            },
            {
              nome: "EMAP UFRGS",
              quantidade: "4 módulos",
              imagens: ["imagens/materiais/emap-ufrgs.jpg"],
              oQueE: "Cadernos de prova das **últimas seis edições do vestibular da UFRGS**, em que as questões estão organizadas por **conteúdos do módulo atual** que está sendo utilizado pelo estudante.",
              comoUsar: "Resolução de questões para **fixação e revisão** dos conteúdos vistos no módulo."
            },
            {
              nome: "Redação",
              imagens: ["imagens/materiais/redacao.jpg"],
              oQueE: "**Livro teórico** para acompanhamento das aulas. Possui direcionamento sobre a **escrita da redação em diferentes gêneros**, além de **ideias de repertório** e outras ferramentas.",
              comoUsar: "Usar como recurso de **acompanhamento das aulas** e da **escrita de redações**."
            }
          ]
        }
      ]
    }
  ]
};
