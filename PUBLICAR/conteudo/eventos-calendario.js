/* =====================================================================
   EVENTOS DO CALENDÁRIO (usados nos alertas automáticos de "Avisos")
   ---------------------------------------------------------------------
   Transcritos dos PDFs da pasta "calendarios" (agosto a dezembro de 2026).
   O site compara estas datas com a data de hoje e mostra, em "Avisos",
   um alerta do próximo compromisso importante e a lista das próximas datas.

   Cada evento:
     data:    dia do evento, no formato "AAAA-MM-DD"  (ex.: "2026-09-22")
     ate:     (opcional) último dia, quando o evento dura vários dias
     titulo:  nome do evento
     tipo:    prova | simulado | vestibular | feriado | aulas | entrega |
              evento | comemorativo
              (comemorativo não aparece nos alertas)
     detalhe: (opcional) observação que aparece junto do alerta

   IMPORTANTE: quando um calendário em PDF mudar, estes eventos precisam
   ser atualizados também. Basta pedir ao Claude:
   "atualize os eventos do calendário a partir do novo PDF".
   ===================================================================== */

window.CONTEUDO = window.CONTEUDO || {};

// ---------------------------------------------------------------------
// 1ª e 2ª SÉRIES  (calendarios/calendario-1a-e-2a-series.pdf)
// ---------------------------------------------------------------------
var EVENTOS_1A_2A = [
  // Agosto
  { data: "2026-08-03", titulo: "Volta às aulas — todo o Ensino Médio", tipo: "aulas" },
  { data: "2026-08-07", titulo: "Envio dos conteúdos da PR", tipo: "entrega" },
  { data: "2026-08-09", titulo: "Dia dos Pais", tipo: "comemorativo" },
  { data: "2026-08-10", titulo: "Início das Eletivas 26/2", tipo: "aulas" },
  { data: "2026-08-11", titulo: "Dia do Estudante", tipo: "comemorativo" },
  { data: "2026-08-12", titulo: "SPP04 — Dia 1 (presencial, à tarde)", tipo: "simulado",
    detalhe: "O SPP04 presencial vale nota nas notas de SPPs e simulados: 0,5 ponto no total, 0,25 para cada tarde." },
  { data: "2026-08-19", titulo: "SPP04 — Dia 2 (presencial, à tarde)", tipo: "simulado",
    detalhe: "O SPP04 presencial vale nota nas notas de SPPs e simulados: 0,5 ponto no total, 0,25 para cada tarde." },

  // Setembro
  { data: "2026-09-03", ate: "2026-09-14", titulo: "Intercâmbio", tipo: "evento" },
  { data: "2026-09-07", titulo: "Feriado — Independência", tipo: "feriado" },
  { data: "2026-09-19", titulo: "Simulado TRIEDUC — Dia 1", tipo: "simulado",
    detalhe: "O Simulado TRIEDUC presencial vale nota nas notas de SPPs e simulados: 0,5 ponto no total, 0,25 para cada prova." },
  { data: "2026-09-22", ate: "2026-09-25", titulo: "Prova Local", tipo: "prova",
    detalhe: "Modelo vestibulares. 20 questões por disciplina. Vale 3 pontos." },
  { data: "2026-09-26", titulo: "Simulado TRIEDUC — Dia 2", tipo: "simulado",
    detalhe: "O Simulado TRIEDUC presencial vale nota nas notas de SPPs e simulados: 0,5 ponto no total, 0,25 para cada prova." },
  { data: "2026-09-29", ate: "2026-10-01", titulo: "Conecta", tipo: "evento" },
  { data: "2026-09-30", titulo: "SPP05 — Dia 1 (presencial, à tarde)", tipo: "simulado",
    detalhe: "Será realocado para quem for ao Conecta. O SPP05 presencial vale nota nas notas de SPPs e simulados: 0,5 ponto no total, 0,25 para cada tarde." },

  // Outubro
  { data: "2026-10-04", titulo: "Eleições — 1º turno", tipo: "comemorativo" },
  { data: "2026-10-07", titulo: "SPP05 — Dia 2 (presencial, à tarde)", tipo: "simulado",
    detalhe: "O SPP05 presencial vale nota nas notas de SPPs e simulados: 0,5 ponto no total, 0,25 para cada tarde." },
  { data: "2026-10-12", titulo: "Feriado — Nossa Senhora Aparecida", tipo: "feriado" },
  { data: "2026-10-13", titulo: "Feriado antecipado do Dia do Professor", tipo: "feriado" },
  { data: "2026-10-15", titulo: "Dia do Professor", tipo: "comemorativo" },
  { data: "2026-10-19", titulo: "SPP06 — Dia 1 (online)", tipo: "simulado" },
  { data: "2026-10-25", titulo: "Eleições — 2º turno", tipo: "comemorativo" },
  { data: "2026-10-26", titulo: "SPP06 — Dia 2 (online)", tipo: "simulado" },
  { data: "2026-10-30", titulo: "Halloween", tipo: "comemorativo" },

  // Novembro
  { data: "2026-11-02", titulo: "Feriado — Finados", tipo: "feriado" },
  { data: "2026-11-08", titulo: "ENEM — 1º dia", tipo: "vestibular" },
  { data: "2026-11-11", titulo: "Prova em Rede (1EM + 2EM) — LC + Redação", tipo: "prova",
    detalhe: "Modelo ENEM, elaborada pela rede. Vale 4 pontos." },
  { data: "2026-11-12", titulo: "Prova em Rede (1EM + 2EM) — CH", tipo: "prova",
    detalhe: "Modelo ENEM, elaborada pela rede. Vale 4 pontos." },
  { data: "2026-11-15", titulo: "ENEM — 2º dia", tipo: "vestibular" },
  { data: "2026-11-17", titulo: "Prova em Rede (1EM + 2EM) — CN", tipo: "prova",
    detalhe: "Modelo ENEM, elaborada pela rede. Vale 4 pontos." },
  { data: "2026-11-18", titulo: "Prova em Rede (1EM + 2EM) — MT", tipo: "prova",
    detalhe: "Modelo ENEM, elaborada pela rede. Vale 4 pontos." },
  { data: "2026-11-20", titulo: "Feriado — Consciência Negra", tipo: "feriado" },
  { data: "2026-11-28", titulo: "Vestibular UFRGS — Dia 1", tipo: "vestibular" },
  { data: "2026-11-29", titulo: "Vestibular UFRGS — Dia 2", tipo: "vestibular" },
  { data: "2026-11-30", ate: "2026-12-03", titulo: "Recuperações", tipo: "prova",
    detalhe: "Modelo vestibulares. 20 questões por disciplina. Recupera os 7 pontos de prova. 30/11 e 01/12 à tarde; 02 e 03/12 sem aulas regulares à tarde." },

  // Dezembro
  { data: "2026-12-11", titulo: "Entrega de boletins", tipo: "entrega" },
  { data: "2026-12-11", titulo: "Término das aulas — todos", tipo: "aulas" },
  { data: "2026-12-14", ate: "2026-12-17", titulo: "Exames finais", tipo: "prova",
    detalhe: "Prova elaborada pela rede. Recupera o ano." },
  { data: "2026-12-18", titulo: "Entrega dos resultados finais", tipo: "entrega" },
  { data: "2026-12-25", titulo: "Feriado — Natal", tipo: "feriado" }
];

// ---------------------------------------------------------------------
// 3ª SÉRIE  (calendarios/calendario-3a-serie.pdf)
// ---------------------------------------------------------------------
var EVENTOS_3A = [
  // Agosto
  { data: "2026-08-03", titulo: "Volta às aulas — todo o Ensino Médio", tipo: "aulas" },
  { data: "2026-08-07", titulo: "Envio dos conteúdos da PR", tipo: "entrega" },
  { data: "2026-08-09", titulo: "Dia dos Pais", tipo: "comemorativo" },
  { data: "2026-08-11", titulo: "Dia do Estudante", tipo: "comemorativo" },
  { data: "2026-08-16", titulo: "Simulado ENEM 2 — Dia 1", tipo: "simulado",
    detalhe: "O Simulado ENEM 2 presencial vale nota nas notas de SPPs e simulados: 0,6 ponto no total, 0,3 para cada prova." },
  { data: "2026-08-23", titulo: "Simulado ENEM 2 — Dia 2", tipo: "simulado",
    detalhe: "O Simulado ENEM 2 presencial vale nota nas notas de SPPs e simulados: 0,6 ponto no total, 0,3 para cada prova." },

  // Setembro
  { data: "2026-09-03", ate: "2026-09-14", titulo: "Intercâmbio", tipo: "evento" },
  { data: "2026-09-05", ate: "2026-09-06", titulo: "Simulado Públ. 3 (PV + 3EM) — presencial", tipo: "simulado" },
  { data: "2026-09-07", titulo: "Feriado — Independência", tipo: "feriado" },
  { data: "2026-09-09", titulo: "Simulados particulares — presencial", tipo: "simulado",
    detalhe: "O SPP Particular presencial vale nota nas notas de SPPs e simulados: 0,6 ponto no total." },
  { data: "2026-09-15", ate: "2026-09-18", titulo: "Prova Local", tipo: "prova",
    detalhe: "Modelo vestibulares. 20 questões por disciplina. Vale 4 pontos." },
  { data: "2026-09-19", titulo: "Simulado ENEM 3 — Dia 1", tipo: "simulado",
    detalhe: "O Simulado ENEM 3 presencial vale nota nas notas de SPPs e simulados: 0,6 ponto no total, 0,3 para cada prova." },
  { data: "2026-09-26", titulo: "Simulado ENEM 3 — Dia 2", tipo: "simulado",
    detalhe: "O Simulado ENEM 3 presencial vale nota nas notas de SPPs e simulados: 0,6 ponto no total, 0,3 para cada prova." },
  { data: "2026-09-29", ate: "2026-10-01", titulo: "Conecta", tipo: "evento" },

  // Outubro
  { data: "2026-10-04", titulo: "Eleições — 1º turno", tipo: "comemorativo" },
  { data: "2026-10-08", titulo: "Prova em Rede (3EM) — LC + CH + Redação", tipo: "prova",
    detalhe: "Modelo ENEM, elaborada pela rede. Vale 4 pontos." },
  { data: "2026-10-12", titulo: "Feriado — Nossa Senhora Aparecida", tipo: "feriado" },
  { data: "2026-10-13", titulo: "Antecipação do feriado do Dia do Professor", tipo: "feriado" },
  { data: "2026-10-14", titulo: "Prova em Rede (3EM) — CN + MT", tipo: "prova",
    detalhe: "Modelo ENEM, elaborada pela rede. Vale 4 pontos." },
  { data: "2026-10-15", titulo: "Dia do Professor", tipo: "comemorativo" },
  { data: "2026-10-18", titulo: "Dia do Médico", tipo: "comemorativo" },
  { data: "2026-10-25", titulo: "Eleições — 2º turno", tipo: "comemorativo" },
  { data: "2026-10-30", titulo: "Halloween", tipo: "comemorativo" },

  // Novembro
  { data: "2026-11-02", titulo: "Feriado — Finados", tipo: "feriado" },
  { data: "2026-11-08", titulo: "ENEM — 1º dia", tipo: "vestibular" },
  { data: "2026-11-15", titulo: "ENEM — 2º dia", tipo: "vestibular" },
  { data: "2026-11-16", ate: "2026-11-19", titulo: "Recuperações", tipo: "prova",
    detalhe: "Modelo vestibulares. 20 questões por disciplina. Recupera os 8 pontos de prova. 16 e 18/11 à tarde; 17 e 19/11 sem aulas regulares à tarde." },
  { data: "2026-11-20", titulo: "Feriado — Consciência Negra", tipo: "feriado" },
  { data: "2026-11-28", titulo: "Vestibular UFRGS — Dia 1", tipo: "vestibular" },
  { data: "2026-11-29", titulo: "Vestibular UFRGS — Dia 2", tipo: "vestibular" },

  // Dezembro
  { data: "2026-12-07", ate: "2026-12-09", titulo: "Exames finais", tipo: "prova",
    detalhe: "Prova elaborada pela rede. Recupera o ano." },
  { data: "2026-12-11", titulo: "Entrega de boletins", tipo: "entrega" },
  { data: "2026-12-11", titulo: "Término das aulas — todos", tipo: "aulas" },
  { data: "2026-12-18", titulo: "Entrega dos resultados finais", tipo: "entrega" },
  { data: "2026-12-25", titulo: "Feriado — Natal", tipo: "feriado" }
];

// Qual lista de eventos cada série usa
CONTEUDO.eventosCalendario = {
  "1": EVENTOS_1A_2A,
  "2": EVENTOS_1A_2A,
  "3": EVENTOS_3A
};
