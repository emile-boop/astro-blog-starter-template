import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://emilesavoie.com',
  trailingSlash: 'never',
  output: 'hybrid',
  adapter: cloudflare(),
  // ... le reste de votre config
});
