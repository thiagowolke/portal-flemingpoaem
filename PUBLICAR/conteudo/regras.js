/* =====================================================================
   REGRAS DA ESCOLA
   ---------------------------------------------------------------------
   Cada categoria tem um título, uma descrição e uma lista de regras.
   Cada regra é um texto entre aspas. Exemplo:
       regras: [ "Primeira regra.", "Segunda regra." ]

   Para uma regra com lista numerada dentro dela, use:
       { texto: "Frase de introdução:", itens: ["Item 1", "Item 2"] }
   (acrescente  marcador: "i"  para numerar com i, ii, iii… ou  marcador: "a"  para a, b, c…
    ou  marcador: "nenhum"  para uma lista sem numeração)
   (acrescente  depois: "texto"  para uma frase que continua depois da lista)

   NEGRITO: coloque o trecho entre dois asteriscos de cada lado.
       "O uso do uniforme é **obrigatório**."  →  obrigatório aparece em negrito

   Endereços de e-mail escritos nas regras viram links automaticamente.
   A_INSERIR mostra "INFORMAÇÃO A INSERIR" no site.
   ===================================================================== */

window.CONTEUDO = window.CONTEUDO || {};

CONTEUDO.regras = {
  // Texto logo abaixo do título "Regras da Escola"
  introducao: "Orientações sobre o comportamento no ambiente escolar.",

  categorias: [
    { id: "regras-gerais", titulo: "Regras gerais", icone: "regras",
      descricao: "Orientações gerais válidas para todos os estudantes do Ensino Médio.",
      regras: [
        "**O uso do uniforme é obrigatório.** É considerado uniformizado o estudante que estiver utilizando **camiseta ou moletom do Fleming**."
      ] },

    { id: "avaliacoes", titulo: "Avaliações", icone: "prancheta",
      descricao: "Método avaliativo, segunda chamada e atestados.",
      regras: [
        "A descrição do método avaliativo está presente na **aba de cada série**.",
        { texto: "O estudante tem direito à **segunda chamada** das avaliações nos casos em que:", marcador: "i",
          itens: ["tiver **atestado médico**;", "for **atleta federado** e estiver em competição esportiva."] },
        "Atestados médicos devem ser apresentados, necessariamente, **até 48h após a avaliação perdida**."
      ] },

    { id: "frequencia", titulo: "Frequência", icone: "presenca",
      descricao: "Presença mínima exigida para aprovação.",
      regras: [
        "Para aprovar, o estudante deve necessariamente ter **75% de presença em cada disciplina**.",
        "O estudante que não atingir a frequência estará **automaticamente em exame**."
      ] },

    { id: "atrasos", titulo: "Atrasos", icone: "relogio",
      descricao: "Procedimentos em caso de chegada após o horário.",
      regras: [
        "O estudante que chegar **após as 7h45** deverá **aguardar até as 8h na recepção** para subir para a sua sala.",
        "O estudante que chegar **após as 8h** deve **aguardar o horário do início do próximo período** para subir."
      ] },

    { id: "espacos", titulo: "Uso dos espaços", icone: "predio",
      descricao: "Espaços destinados ao Ensino Médio e cuidados no seu uso.",
      regras: [
        { texto: "Os espaços destinados ao Ensino Médio são:",
          itens: [
            "**Espaço de convivência** do segundo andar.",
            "**Sala de jogos** do terceiro andar.",
            "**Espaço Flemer** no quarto andar.",
            "**Biblioteca** do quinto andar.",
            "**Cantina** no sétimo andar."
          ] },
        "Parte desses espaços é **compartilhada com o pré-vestibular**. É necessário **respeito e cuidado** com os espaços e com os colegas."
      ] },

    { id: "tecnologia", titulo: "Tecnologia", icone: "monitor",
      descricao: "Uso de celulares e outros aparelhos eletrônicos.",
      regras: [
        "O uso de aparelho celular e de qualquer outro eletrônico é **estritamente proibido em horário de aula ou intervalo**. Nos demais horários em que o estudante decidir ficar na escola, o uso é permitido."
      ] },

    { id: "procedimentos", titulo: "Procedimentos acadêmicos", icone: "documento",
      descricao: "Liberações e solicitações à secretaria.",
      regras: [
        "**Liberações** devem ser enviadas para secretariaempoa@flemingeducacao.com.br. O estudante deve **recolher sua liberação na secretaria do segundo andar**."
      ] },

    { id: "advertencias", titulo: "Advertências e suspensões", icone: "alerta",
      descricao: "Medidas aplicadas em caso de descumprimento das regras.",
      regras: [
        { texto: "Qualquer comportamento inapropriado, como:",
          itens: [
            "Estar **fora de sala** durante período de aula.",
            "Ser **convidado a se retirar de sala** pelo professor.",
            "**Uso de eletrônico.**",
            "**Depredação** dos espaços.",
            "Outros **comportamentos inadequados** no ambiente escolar,"
          ],
          depois: "resulta em **advertência**." },
        { texto: "As advertências são aplicadas de forma progressiva:", marcador: "nenhum",
          itens: [
            "**1ª advertência:** verbal.",
            "**2ª advertência:** por escrito.",
            "**3ª advertência:** os pais são convocados.",
            "**4ª advertência:** o estudante é **suspenso por três dias**."
          ] },
        "Casos mais graves podem resultar em **suspensão imediata**."
      ] }
  ]
};
