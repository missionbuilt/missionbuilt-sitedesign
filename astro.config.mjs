import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { readdirSync } from 'node:fs';

// Release notes are one page per build; the version alone (/rack/mealstack/changelog/0-9-1)
// is a redirect page to its newest build, for old links (src/data/releases.ts). The
// sitemap leaves those out: a version with builds but no section of its own.
const releaseFiles = readdirSync(new URL('./src/content/releases/', import.meta.url));
const releaseRedirects = new Set(
  releaseFiles
    .map((f) => f.match(/^(\w+)-([\d.]+)-(?:b\d+|next)\.md$/))
    .filter((m) => m && !releaseFiles.includes(`${m[1]}-${m[2]}.md`))
    .map((m) => `/rack/${m[1]}/changelog/${m[2].replaceAll('.', '-')}/`),
);

// https://astro.build/config
export default defineConfig({
  site: 'https://missionbuilt.io',
  // The sitemap leaves out the 404 page, the old MealStack privacy address, which
  // only serves installed builds and App Review (its canonical is /rack/mealstack/privacy),
  // and the release notes' version redirects (above).
  integrations: [mdx(), sitemap({
    filter: (page) => !page.endsWith('/404/') && !page.includes('/loadout/mealstack/privacy')
      && !releaseRedirects.has(new URL(page).pathname),
  })],
  // Static output by default — the whole site can be a static export.
  output: 'static',
});
