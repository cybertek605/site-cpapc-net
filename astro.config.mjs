import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cpapc.net',   // CHANGE PER CUSTOMER
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },   // /sms-terms.html is served at /sms-terms
});
