import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://observium-ufrj.pages.dev',
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
