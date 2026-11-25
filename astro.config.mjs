import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// build.format "file" keeps the old Weebly URLs (/bio.html, /music--store.html ...)
// so nothing that links to the current site breaks.
export default defineConfig({
  site: 'https://www.sarahpalu.com',
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [sitemap()],
});
