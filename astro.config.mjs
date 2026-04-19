import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://joinfediverse.kr',
  integrations: [sitemap()],
});
