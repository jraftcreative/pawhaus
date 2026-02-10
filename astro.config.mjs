import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jraftcreative.github.io',
  base: '/pawhaus',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
