import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  trailingSlash: 'never',
  // ... vos autres configs (i18n, etc.)
});
