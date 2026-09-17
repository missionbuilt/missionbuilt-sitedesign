# missionbuilt-sitedesign

The open-source code that runs [missionbuilt.io](https://missionbuilt.io), the web home of *Mission Built: A Field Guide for Building Things That Matter* by Mike Nichols.

Static site. Dark theme. Industrial type. Chalk on charcoal, oxblood as the primary signal, army green as a secondary accent.

## What this repo is

This is the **site code**. The book content lives in a separate repo: [missionbuilt-book](https://github.com/missionbuilt/missionbuilt-book). The two are split intentionally so the writing and the rendering can evolve independently.

## Stack

- **[Astro 4](https://astro.build)** with the static export adapter. Every page is pre-rendered HTML; no runtime server needed.
- **MDX** for chapter content. Each section is a single `.mdx` file under `src/content/chapters/`, validated by an Astro content collection schema.
- **No CSS framework.** Design tokens live in `src/styles/tokens.css`; component styles use scoped `<style>` blocks inside Astro components.
- **No client JS framework.** Pages are static HTML. The vanilla JS that ships is deliberate and small: the demo lightbox in `DemoEmbed.astro`, the meal-timing slider on the MealStack page, and the beta signup form.

Three font families do all the typographic work:
- **Oswald** for display, headlines, all-caps labels.
- **Merriweather** for long-form prose.
- **JetBrains Mono** for metadata, eyebrows, version stamps.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview  # serve ./dist locally
```

Node 20+ required (`engines` in `package.json`, and `.nvmrc` pins 20).

## Project layout

```
src/
├── components/        # Lockup, TopNav, Bar (mini-barbell mark), DemoEmbed (loadout demo iframe)
├── content/
│   ├── config.ts      # content collection schema
│   └── chapters/      # 48 .mdx files: prologue, ch.01–13, conclusion
├── data/
│   └── book.ts        # MB metadata: chapter list, parts, helpers
├── layouts/
│   ├── BaseLayout.astro     # html/head/fonts/global styles wrapper
│   └── ReadingLayout.astro  # two-column shell for section pages
├── pages/
│   ├── index.astro                          # Home
│   ├── about.astro                          # About
│   ├── source.astro                         # Source (book + site repos)
│   ├── download.astro                       # Download (book + standalone skills)
│   ├── loadout/
│   │   ├── index.astro                      # The Loadout overview
│   │   ├── warmup.astro                     # The Warmup (demo + download)
│   │   ├── approach.astro                   # The Approach (demo + download)
│   │   ├── spotter.astro                    # The Spotter (demo + download)
│   │   └── floodlight.astro                 # Floodlight (in development)
│   ├── rack/
│   │   ├── index.astro                      # The Rack overview (the barbell half)
│   │   ├── ironstack.astro                  # Ironstack (in testing; app frames are replicas on fictional data)
│   │   ├── mealstack.astro                  # MealStack (iPhone app, open source with 1.0, private beta; product page with the click-through demo)
│   │   └── mealstack/privacy.astro          # MealStack privacy policy (the App Store privacy URL)
│   └── chapters/
│       ├── index.astro                      # Chapter Index
│       ├── 01/the-mission-is-the-magnet.astro  # static landing for the opening section
│       └── [chapter]/[section].astro        # dynamic Reading View
└── styles/
    ├── tokens.css     # colors, type scale, spacing
    └── global.css     # reset + base typography
```

Outside `src/`: `public/` holds static assets, including the generated `public/demos/` (Loadout and Rack click-through demos) and `public/downloads/` (the book PDF/Markdown and the standalone skill zips). `scripts/` holds the Python builders that regenerate those — see [`scripts/README.md`](scripts/README.md).

## Pages

- `/` Home: hero, meta strip, two-column intro, Start Here panel.
- `/chapters` Chapter Index: full TOC with three Parts and bookend rows.
- `/chapters/{chapter}/{section-slug}` Reading View: chapter rail + prose column.
- `/about` About: bio, project mission, fine print.
- `/source` Source: links to the book repo and this repo.
- `/download` Download: the book (PDF/Markdown) and the standalone Loadout skill zips.
- `/loadout` The Loadout: overview of the product-leadership skill kit (the boardroom half), with a page per skill — `/loadout/warmup`, `/loadout/approach`, `/loadout/spotter` (each embeds a live click-through demo and a download) and `/loadout/floodlight` (in development).
- `/rack` The Rack: the barbell half — `/rack/mealstack` (the iPhone app, open source with 1.0 and the license not yet settled, private beta: a product page with a click-through demo of real Simulator screens at `public/demos/mealstack.html` (images in `public/demos/mealstack/`, made by `scripts/build_mealstack_demo_images.py`) and a Join-the-beta form posting to the Pages Function `functions/api/beta.js`, which needs the `BETA_KV` binding described in `wrangler.jsonc`), `/rack/ironstack` (in testing: the page is live, the install doors open with v1.0) and `/rack/mealstack/privacy` (the privacy policy the app and the App Store listing link to). Both tools lived under `/loadout` until Sept 13, 2026; `public/_redirects` carries permanent 301s from the old paths, and must keep them, because installed MealStack builds link to the old privacy URL.

## Adding or editing content

Each section is a single `.mdx` file. To edit a section's prose, open the file and change the body. Frontmatter controls metadata:

```yaml
---
chapter: "01"
chapterTitle: "Mission Before Metrics"
section: "1.1"
order: 1
title: "The Mission Is the Magnet"
mins: 5
draft: false
---
```

The dynamic route picks up new files at build time. Use markdown blockquotes (`> ...`) for pull quotes; they render with the oxblood-rail iron-log treatment.

## Design tokens

All visual values are defined as CSS custom properties in [`src/styles/tokens.css`](src/styles/tokens.css). Reach for those instead of hard-coded values:

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#171513` | Page background |
| `--color-panel` | `#1f1c19` | Sunken panels, active rows |
| `--color-chalk` | `#ebe5d8` | Primary foreground |
| `--color-chalk-dim` | `#a8a094` | Secondary foreground |
| `--color-blood` | `#a8211a` | Primary accent (oxblood) |
| `--color-army` | `#7a8b3a` | Secondary accent (army green) |

No border-radius anywhere. The 90° corners are intentional.

## Deploy

The build output in `./dist` is static, but the site is not purely static any more: `functions/api/beta.js` is a Cloudflare Pages Function handling the MealStack beta signup form. That ties the deploy to Cloudflare Pages — Netlify uses a different functions convention and GitHub Pages cannot run server code at all, so on either one the signup form degrades to its 503 fallback.

Cloudflare Pages needs two things set before the beta endpoint works:

- `BETA_KV` — KV namespace binding (see `wrangler.jsonc`)
- `BETA_ADMIN_KEY` — secret gating the `GET /api/beta?key=...` signup dump

The rest of the site has no environment variables and no runtime requirements, so the static pages alone will serve from any host.

## License

Site code is licensed under the [MIT License](LICENSE). Use it, fork it, learn from it.

The MealStack files the site hosts (`public/downloads/mealstack-plan.zip`, `public/downloads/mealstack/`, `public/demos/mealstack.html`, `public/demos/mealstack/`) are not covered by that license. MealStack's license is not decided yet; nothing on the site names one.

The book content (the prose) lives in a separate repo and is licensed [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

## Acknowledgments

Visual design was drafted in Claude Design and implemented in Claude Code by Mike Nichols. The Iron Log aesthetic, type system, and component patterns are documented in the design handoff that sits alongside this code.
