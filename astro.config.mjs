import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.cpapc.net',   // CHANGE PER CUSTOMER
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },   // /privacy-policy.html is served at /privacy-policy
});
