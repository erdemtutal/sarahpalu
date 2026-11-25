import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// build.format "file" keeps the old Weebly URLs (/bio.html, /music--store.html ...)
// so nothing that links to the current site breaks.
export default defineConfig({
  // The workflow sets these two for the github.io preview; on the real domain they stay unset.
  site: process.env.SITE_URL || 'https://www.sarahpalu.com',
  base: process.env.BASE_PATH || '/',
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [sitemap()],
});
