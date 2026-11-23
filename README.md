# Observium UFRJ — Novo Portal Institucional

Portal oficial do **Observatório de Vigilância e Uso de Medicamentos da Faculdade de Farmácia da Universidade Federal do Rio de Janeiro (UFRJ)**.

---

## 🏛️ Sobre o Projeto

O Observium reúne esforços de ensino, pesquisa e extensão na Faculdade de Farmácia da UFRJ, atuando como um centro de referência em:
- **Farmacovigilância e Farmacoepidemiologia**
- **Segurança do Paciente e Uso Racional de Medicamentos**
- **Políticas e Gestão da Assistência Farmacêutica no SUS**

Este projeto é um rebranding e modernização do portal institucional, priorizando performance, acessibilidade, custo zero de infraestrutura e facilidade de atualização por colaboradores e docentes sem conhecimento técnico de programação.

---

## 🚀 Arquitetura Tecnológica

- **Framework:** [Astro 5](https://astro.build/) com geração de páginas estáticas (SSG)
- **Content Engine:** Astro Content Collections com validação rigorosa via schemas [Zod](https://zod.dev/)
- **Painel Administrativo:** [Pages CMS](https://pagescms.org/) (interface visual conectada ao GitHub)
- **Mecanismo de Busca:** [Pagefind](https://pagefind.app/) (busca textual estática de alta performance)
- **Hospedagem & CDN:** [Cloudflare Pages](https://pages.cloudflare.com/) (100% gratuito com deploys automáticos)
- **Controle de Versão:** [GitHub](https://github.com/)

---

## 📁 Estrutura do Projeto

```
Observium/
├── .pages.yml                  # Configuração dos formulários do Pages CMS
├── astro.config.mjs            # Configuração do Astro e Sitemap
├── package.json                # Dependências e scripts npm
├── tsconfig.json               # Configuração TypeScript
│
├── public/                     # Arquivos estáticos servidos diretamente
│   ├── images/                 # Logotipos institucionais e fotos
│   ├── documents/              # PDFs de boletins e alertas anuais
│   └── robots.txt              # Diretrizes para indexadores de busca
│
├── src/
│   ├── content.config.ts       # Definição e schemas das coleções de dados
│   ├── content/                # Arquivos de conteúdo em Markdown
│   │   ├── alertas/            # Alertas regulatórios e comunicados de segurança
│   │   ├── artigos/            # Artigos institucionais e editoriais
│   │   ├── boletins/           # Edições periódicas do Boletim Observium
│   │   ├── equipe/             # Perfis do corpo docente e pesquisadores
│   │   ├── entrevistas/        # Entrevistas, vídeos e coberturas
│   │   ├── eventos/            # Eventos e conferências
│   │   ├── producao-tecnica/   # Manuais, livros e relatórios técnicos
│   │   ├── publicacoes/        # Artigos científicos publicados em periódicos
│   │   └── recomendacoes/      # Recomendações bibliográficas curadas
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro    # Layout padrão (Header, Footer, SEO, Fonts)
│   ├── components/             # Componentes modulares reutilizáveis
│   ├── pages/                  # Rotas e páginas do portal
│   ├── styles/
│   │   └── global.css          # Estilos institucionais (Azul UFRJ e Branco)
│   └── utils/
│       ├── content.ts          # Helpers para consulta e filtros de conteúdo
│       └── date.ts             # Formatadores de data em português (pt-BR)
```

---

## 💻 Como Executar Localmente

### Pré-requisitos
- **Node.js** (versão 20 ou superior recomendada)
- **Git**

### 1. Clonar o repositório
```bash
git clone https://github.com/SEU-USUARIO/observium-ufrj.git
cd observium-ufrj
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Iniciar servidor de desenvolvimento
```bash
npm run dev
```
O site estará disponível em `http://localhost:4321`.

### 4. Compilar versão de produção com Pagefind
```bash
npm run build
```

### 5. Pré-visualizar a versão de produção (com busca funcional)
```bash
npm run preview
```

---

## 📝 Como Atualizar Conteúdos via Pages CMS (Sem Programação)

Colaboradores, professores e alunos extensionistas podem cadastrar e editar conteúdos sem precisar mexer em código:

1. Acesse **[app.pagescms.org](https://app.pagescms.org/)**;
2. Faça login com sua conta do **GitHub**;
3. Selecione o repositório do **Observium**;
4. No menu lateral, você verá todas as seções organizadas em português:
   - **Artigos do Portal**
   - **Boletins Observium**
   - **Alertas Terapêuticos**
   - **Artigos Científicos da Equipe**
   - **Produção Técnica**
   - **Recomendações Bibliográficas**
   - **Entrevistas e Mídia**
   - **Equipe do Observium**
5. Clique em **"Novo"** para criar um novo registro ou clique em um item existente para editar;
6. Preencha os campos nos formulários intuitivos e selecione o status editorial:
   - `rascunho`: O conteúdo fica salvo no sistema, mas **não aparece publicamente no site**.
   - `em-revisao`: Aguardando revisão pelos coordenadores.
   - `publicado`: O conteúdo é compilado e publicado no portal.
7. Clique em **Salvar**. O Cloudflare Pages detectará a alteração e republicará o site automaticamente em cerca de 2 minutos.

---

## 🎨 Identidade Visual e Acessibilidade

O projeto utiliza rigorosamente a identidade institucional da **Universidade Federal do Rio de Janeiro**:
- **Cor Primária:** Azul UFRJ Oficial (`#003366`, Pantone 654C)
- **Cor de Fundo:** Branco Puro (`#FFFFFF`) e Superfícies Neutras (`#F8FAFC`)
- **Tipografia:** Montserrat (títulos institucionais) e Inter (corpo de texto de alta legibilidade)
- **Acessibilidade:** Padrões WCAG 2.1 AA, skip navigation links, contraste aprovado e navegação por teclado.

---

## ☁️ Publicação no Cloudflare Pages (100% Gratuito)

1. Conecte sua conta do Cloudflare ao repositório no GitHub;
2. Crie um novo projeto no **Cloudflare Pages**;
3. Configure os parâmetros de build:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Clique em **Deploy**. A cada novo commit ou publicação no Pages CMS, o Cloudflare atualizará o site automaticamente.

---

## 📄 Licença
Conteúdo institucional e acadêmico sob licença [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).
Desenvolvido para a Faculdade de Farmácia da Universidade Federal do Rio de Janeiro.
