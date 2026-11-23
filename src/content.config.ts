import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Coleção: Artigos editoriais do portal
const artigos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/artigos' }),
  schema: z.object({
    titulo: z.string(),
    subtitulo: z.string().optional(),
    autor: z.string().default('Equipe Observium'),
    data_publicacao: z.coerce.date(),
    categoria: z.enum(['Boletim', 'Alerta', 'Institucional', 'Opinião', 'Educação']),
    imagem_capa: z.string().optional(),
    resumo: z.string().max(350),
    palavras_chave: z.array(z.string()).default([]),
    referencias: z.string().optional(),
    status: z.enum(['rascunho', 'em-revisao', 'aprovado', 'publicado']).default('rascunho'),
    destaque: z.boolean().default(false),
  }),
});

// Coleção: Boletins Observium
const boletins = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/boletins' }),
  schema: z.object({
    numero_edicao: z.number(),
    titulo: z.string(),
    apresentacao: z.string(),
    data_publicacao: z.coerce.date(),
    imagem_capa: z.string().optional(),
    arquivo_pdf: z.string().optional(),
    corpo_editorial: z.array(z.string()).default([
      'Thiago Botelho Azeredo',
      'Guacira Corrêa de Matos',
      'Elisangela Costa Lima'
    ]),
    status: z.enum(['rascunho', 'em-revisao', 'aprovado', 'publicado']).default('publicado'),
    destaque: z.boolean().default(false),
  }),
});

// Coleção: Alertas Terapêuticos
const alertas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/alertas' }),
  schema: z.object({
    titulo: z.string(),
    medicamento: z.string(),
    autoridade_regulatoria: z.string(),
    pais: z.string(),
    data_publicacao: z.coerce.date(),
    data_atualizacao: z.coerce.date().optional(),
    ano: z.number(),
    resumo: z.string(),
    fonte_oficial: z.string().url().optional().or(z.literal('')),
    referencias: z.string().optional(),
    aviso_disclaimer: z.boolean().default(true),
    status: z.enum(['rascunho', 'em-revisao', 'aprovado', 'publicado']).default('publicado'),
  }),
});

// Coleção: Publicações Científicas (Artigos em Periódicos)
const publicacoes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publicacoes' }),
  schema: z.object({
    titulo: z.string(),
    autores: z.array(z.string()),
    periodico: z.string(),
    ano: z.number(),
    doi: z.string().optional(),
    link_externo: z.string().url().optional().or(z.literal('')),
    resumo: z.string().optional(),
    tipo: z.enum(['artigo-original', 'revisao', 'carta', 'editorial', 'outro']).default('artigo-original'),
    status: z.enum(['rascunho', 'publicado']).default('publicado'),
  }),
});

// Coleção: Produção Técnica
const producaoTecnica = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/producao-tecnica' }),
  schema: z.object({
    titulo: z.string(),
    autores: z.array(z.string()),
    tipo: z.enum(['livro', 'manual', 'relatorio', 'nota-tecnica', 'posicionamento', 'entrevista', 'outro']),
    ano: z.number(),
    editora: z.string().optional(),
    link_externo: z.string().url().optional().or(z.literal('')),
    arquivo_pdf: z.string().optional(),
    resumo: z.string().optional(),
    status: z.enum(['rascunho', 'publicado']).default('publicado'),
  }),
});

// Coleção: Recomendações Bibliográficas
const recomendacoes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/recomendacoes' }),
  schema: z.object({
    titulo: z.string(),
    autores: z.array(z.string()),
    tipo_material: z.enum(['livro', 'artigo', 'guia', 'manual', 'relatorio', 'outro']),
    ano: z.number(),
    editora_periodico: z.string().optional(),
    doi_link: z.string().url().optional().or(z.literal('')),
    resumo: z.string().optional(),
    areas: z.array(z.string()).default([]),
    status: z.enum(['rascunho', 'publicado']).default('publicado'),
  }),
});

// Coleção: Entrevistas e Eventos
const entrevistas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/entrevistas' }),
  schema: z.object({
    titulo: z.string(),
    entrevistado: z.string(),
    entrevistador: z.string().optional(),
    descricao: z.string(),
    data: z.coerce.date(),
    imagem: z.string().optional(),
    veiculo: z.string().optional(),
    link_video: z.string().url().optional().or(z.literal('')),
    link_externo: z.string().url().optional().or(z.literal('')),
    status: z.enum(['rascunho', 'publicado']).default('publicado'),
  }),
});

// Coleção: Eventos
const eventos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/eventos' }),
  schema: z.object({
    titulo: z.string(),
    descricao: z.string(),
    data_inicio: z.coerce.date(),
    data_fim: z.coerce.date().optional(),
    local: z.string().optional(),
    modalidade: z.enum(['presencial', 'online', 'hibrido']).default('online'),
    link_inscricao: z.string().url().optional().or(z.literal('')),
    imagem: z.string().optional(),
    status: z.enum(['rascunho', 'publicado']).default('publicado'),
  }),
});

// Coleção: Equipe do Observium
const equipe = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/equipe' }),
  schema: z.object({
    nome: z.string(),
    cargo: z.string(),
    titulacao: z.string(),
    area_atuacao: z.array(z.string()),
    foto: z.string().optional(),
    lattes: z.string().url().optional().or(z.literal('')),
    email: z.string().optional(),
    ordem: z.number().default(99),
    ativo: z.boolean().default(true),
  }),
});

export const collections = {
  artigos,
  boletins,
  alertas,
  publicacoes,
  'producao-tecnica': producaoTecnica,
  recomendacoes,
  entrevistas,
  eventos,
  equipe,
};
