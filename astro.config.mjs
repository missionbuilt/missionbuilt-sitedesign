import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { readdirSync } from 'node:fs';
import { MISSIONSTACK_ANNOUNCED } from './src/data/missionstack-gate.mjs';

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
  // the release notes' version redirects (above), MissionStack's draft privacy page until
  // MissionStack is announced (#118; every MissionStack page, one switch: src/data/missionstack-gate.mjs), and /join, a board QR's landing page (#133).
  integrations: [mdx(), sitemap({
    // HOLD #143: /coach is a noindex draft; take the /coach/ clause out when it's approved.
    filter: (page) => !page.endsWith('/404/') && !page.includes('/loadout/mealstack/privacy') && !page.includes('/coach/')
      && (MISSIONSTACK_ANNOUNCED || !page.includes('/rack/missionstack'))
      && !releaseRedirects.has(new URL(page).pathname) && new URL(page).pathname !== '/join/'
      // /first (#194) stays out until Mike's go (first.astro's LIVE).
      && new URL(page).pathname !== '/first/'
      // The compare pages (plan §8) stay out until Mike's word yes on the launch preview.
      && !new URL(page).pathname.startsWith('/rack/compare/'),
  })],
  // Static output by default — the whole site can be a static export.
  output: 'static',
});
