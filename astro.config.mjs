import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kenev.net',
  output: 'static',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
