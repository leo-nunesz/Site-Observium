import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Retorna os artigos do portal filtrando rascunhos em produção
 */
export async function getArtigosPublicados() {
  const itens = await getCollection('artigos', ({ data }) => {
    return import.meta.env.PROD ? data.status === 'publicado' : true;
  });
  return itens.sort((a, b) => b.data.data_publicacao.getTime() - a.data.data_publicacao.getTime());
}

/**
 * Retorna os boletins informativos ordenados por edição decrescente
 */
export async function getBoletinsPublicados() {
  const itens = await getCollection('boletins', ({ data }) => {
    return import.meta.env.PROD ? data.status === 'publicado' : true;
  });
  return itens.sort((a, b) => b.data.numero_edicao - a.data.numero_edicao);
}

/**
 * Retorna os alertas terapêuticos ordenados por data
 */
export async function getAlertasPublicados() {
  const itens = await getCollection('alertas', ({ data }) => {
    return import.meta.env.PROD ? data.status === 'publicado' : true;
  });
  return itens.sort((a, b) => b.data.data_publicacao.getTime() - a.data.data_publicacao.getTime());
}

/**
 * Retorna os membros ativos da equipe ordenados pela ordem definida
 */
export async function getEquipeAtiva() {
  const itens = await getCollection('equipe', ({ data }) => {
    return data.ativo !== false;
  });
  return itens.sort((a, b) => a.data.ordem - b.data.ordem);
}

/**
 * Retorna as publicações científicas ordenadas por ano decrescente
 */
export async function getPublicacoesCientificas() {
  const itens = await getCollection('publicacoes', ({ data }) => {
    return import.meta.env.PROD ? data.status === 'publicado' : true;
  });
  return itens.sort((a, b) => b.data.ano - a.data.ano);
}

/**
 * Retorna a produção técnica da equipe
 */
export async function getProducaoTecnica() {
  const itens = await getCollection('producao-tecnica', ({ data }) => {
    return import.meta.env.PROD ? data.status === 'publicado' : true;
  });
  return itens.sort((a, b) => b.data.ano - a.data.ano);
}

/**
 * Retorna as recomendações bibliográficas
 */
export async function getRecomendacoes() {
  const itens = await getCollection('recomendacoes', ({ data }) => {
    return import.meta.env.PROD ? data.status === 'publicado' : true;
  });
  return itens.sort((a, b) => b.data.ano - a.data.ano);
}

/**
 * Retorna as entrevistas
 */
export async function getEntrevistas() {
  const itens = await getCollection('entrevistas', ({ data }) => {
    return import.meta.env.PROD ? data.status === 'publicado' : true;
  });
  return itens.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}
