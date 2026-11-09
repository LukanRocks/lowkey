// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lowkeyestudios.com',
  trailingSlash: 'never',
  // Seasonal ad landing pages (/natal/*) stay out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/natal/') })],
  build: {
    // Inline all CSS so the first paint never waits on a stylesheet request.
    inlineStylesheets: 'always',
    format: 'file',
  },
});
