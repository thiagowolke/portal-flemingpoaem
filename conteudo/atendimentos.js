/* =====================================================================
   ATENDIMENTOS (página "Atendimentos")
   ---------------------------------------------------------------------
   Cada seção da página tem:
     titulo:        nome da seção
     icone:         (opcional) bussola | documento | estrela | pessoas | calendario | relogio | capelo
     contato:       (opcional) setor da página Contatos ("Secretaria", "Coordenação" ou "Direção").
                    O nome, o cargo, o telefone e o e-mail vêm de lá automaticamente.
     imagem:        (opcional) imagem da seção, com imagemLegenda (clique para ampliar)
     oQueE:         o que é o atendimento
     paraQue:       para que serve / quando procurar
     quando:        dias e horários
     comoAgendar:   como participar ou marcar
     link:          (opcional) endereço de um formulário de agendamento (vira um botão)
   Negrito: coloque o trecho entre **dois asteriscos**.
   ===================================================================== */

window.CONTEUDO = window.CONTEUDO || {};

CONTEUDO.atendimentos = {
  introducao: "Apoio individual da nossa equipe para montar seu cronograma, analisar seus resultados e tirar dúvidas com os monitores.",

  secoes: [
    {
      titulo: "Cronograma de estudos e análise de desempenho",
      icone: "calendario",
      contato: "Coordenação",
      imagem: "imagens/atendimentos/cronograma-de-estudos.png",   // imagem da seção ("" para tirar)
      imagemLegenda: "Cronograma de estudos",
      oQueE: [
        "O **acompanhamento pedagógico** é essencial para tornar a preparação mais **organizada, estratégica e eficiente**. Por meio da **montagem de cronogramas personalizados**, do **acompanhamento da rotina de estudos** e da **análise contínua de desempenho**, é possível identificar avanços, dificuldades e oportunidades de melhoria. Assim, cada estudante compreende **onde está, o que precisa desenvolver e quais caminhos deve seguir** para alcançar seus objetivos.",
        "**Conte com nossa equipe** para acompanhar sua trajetória, esclarecer dúvidas, analisar seu desempenho e construir estratégias para potencializar seus resultados."
      ],
      paraQue: "**Análise de desempenho** após a divulgação dos resultados dos **simulados e das provas** e **direcionamento dos estudos**.",
      quando: [
        "**Segunda-feira:** 14h às 16h",
        "**Terça-feira:** 14h às 16h",
        "**Quarta-feira:** 16h às 18h",
        "**Quinta-feira:** 16h às 18h",
        "**Sexta-feira:** 14h às 16h"
      ],
      comoAgendar: [
        "Agende pelo botão **Agendar atendimento**, logo abaixo. **É necessário indicar o nome** no agendamento.",
        "**Não é permitido** marcar atendimentos **em horários de aula**.",
        "Para agendamentos **em intervalos**, chame o **Thiago no WhatsApp**."
      ],
      link: "https://bookings.cloud.microsoft/bookwithme/user/11b3ddf2782a4c6f8547098ab28556fd@flemingeducacao.com.br?anonymous&ismsaljsauthenabled&ep=plink",
      whatsapp: "+55 51 9141-7424"   // número do botão "Chamar no WhatsApp" ("" para tirar)
    },
    {
      titulo: "Monitorias Tira-Dúvidas",
      icone: "pessoas",
      contato: "Secretaria",
      contatoRotulo: "Disponibilidade",   // texto que aparece antes do nome (padrão: "Responsável")
      oQueE: "Conte com o apoio dos nossos **monitores** para **esclarecer dúvidas, revisar conteúdos e aprofundar seus conhecimentos** em **Física, Matemática e Biologia**. Um espaço de **atendimento individualizado** para superar dificuldades, fortalecer a aprendizagem e avançar com mais segurança na preparação.",
      paraQue: "Esclarecer dúvidas, revisar conteúdos e aprofundar conhecimentos em **Física, Matemática e Biologia**.",
      quando: [
        "**Segunda-feira:** 14h às 17h30",
        "**Terça-feira:** 14h às 17h30",
        "**Quarta-feira:** 14h às 17h30",
        "**Sexta-feira:** 14h às 17h30"
      ],
      comoAgendar: "Verifique a disponibilidade e **agende diretamente com a secretaria**.",
      link: "",
      whatsapp: "+55 51 8122-7306"   // WhatsApp da secretaria ("" para tirar)
    }
  ]
};
