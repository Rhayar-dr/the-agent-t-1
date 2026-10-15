// games/shared/parse.js
// Utilitário para carregar e preparar uma história para uso em livros/jogos LearningJesus

/**
 * Carrega e prepara um JSON de história, colocando como window.HISTORIA.
 * Efetua normalização para consumo em jogos/livros, em especial campos:
 * cenas, personagens, quiz (perguntas), escolhas de bondade, atividade de organização.
 * @param {Object} json Historia carregada do arquivo .json
 * @returns {Object} Estrutura pronta para uso em window.HISTORIA
 */
function parseHistoria(json) {
  // Normaliza personagens como dict por id
  const personagens = {};
  if (Array.isArray(json.personagens)) {
    json.personagens.forEach(p => {
      personagens[p.id] = {
        id: p.id,
        nome: p.nome,
        descricao_visual: p.descricao_visual
      };
    });
  }
  // Normaliza cenas: adiciona personagens e cenario explícitos
  const cenas = (json.cenas || []).map(cena => ({
    numero: cena.numero,
    narracao: cena.narracao,
    dialogos: Array.isArray(cena.dialogos) ? cena.dialogos : [],
    descricao_visual: cena.descricao_visual,
    cenario: cena.cenario || null,
    personagens: Array.isArray(cena.personagens) ? cena.personagens.map(id => personagens[id] || {id, nome: id}) : [],
    emocao: cena.emocao || null,
    duracao_seg: cena.duracao_seg || null
  }));

  // Quiz: perguntas
  const perguntas = (json.perguntas || []).map(q => ({
    pergunta: q.pergunta,
    opcoes: q.opcoes,
    correta: q.correta,
    explicacao: q.explicacao || ''
  }));

  // Escolhas de bondade
  const escolhas_bondade = (json.escolhas_bondade || []).map(e => ({
    situacao: e.situacao,
    opcoes: (e.opcoes || []).map(o => ({
      texto: o.texto,
      bondosa: !!o.bondosa,
      feedback: o.feedback || ''
    }))
  }));

  // Atividade de organização
  const atividade_organizacao = json.atividade_organizacao ? {
    titulo: json.atividade_organizacao.titulo || '',
    instrucoes: json.atividade_organizacao.instrucoes || '',
    itens: Array.isArray(json.atividade_organizacao.itens) ? json.atividade_organizacao.itens.map(i => ({
      item: i.item,
      lugar: i.lugar
    })) : []
  } : null;

  const historia = {
    id: json.id,
    titulo: json.titulo,
    referencia_biblica: json.referencia_biblica,
    faixa_etaria: json.faixa_etaria,
    valor_central: json.valor_central,
    versiculo_chave: json.versiculo_chave,
    resumo: json.resumo,
    personagens: personagens,       // dict
    cenas: cenas,                   // array, com personagens expandido
    licao: json.licao,
    perguntas: perguntas,           // quiz
    escolhas_bondade: escolhas_bondade,
    atividade_organizacao: atividade_organizacao,
    oracao_curta: json.oracao_curta || ''
  };
  return historia;
}

/**
 * Carrega história a partir de JSON já carregado e exporta como window.HISTORIA
 * @param {Object} json
 */
function carregarHistoria(json) {
  window.HISTORIA = parseHistoria(json);
}

// Exporta para uso global e ES module
window.parseHistoria = parseHistoria;
window.carregarHistoria = carregarHistoria;

export { parseHistoria, carregarHistoria };
