import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://missionbuilt.io',
  integrations: [mdx()],
  // Static output by default — the whole site can be a static export.
  output: 'static',
});
