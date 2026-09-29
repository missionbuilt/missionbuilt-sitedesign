import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://missionbuilt.io',
  // The sitemap leaves out the 404 page and the old MealStack privacy address, which
  // only serves installed builds and App Review (its canonical is /rack/mealstack/privacy).
  integrations: [mdx(), sitemap({
    filter: (page) => !page.endsWith('/404/') && !page.includes('/loadout/mealstack/privacy'),
  })],
  // Static output by default — the whole site can be a static export.
  output: 'static',
});
