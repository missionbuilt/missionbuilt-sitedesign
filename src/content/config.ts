import { defineCollection, z } from 'astro:content';

/**
 * Chapters collection — the book content.
 *
 * Layout:
 *   src/content/chapters/{chapter-folder}/{section-slug}.mdx
 *
 * Where chapter-folder is one of: '01', '02', ..., '12', 'prologue', 'conclusion'.
 * Each MDX file has frontmatter describing its position and metadata, plus
 * the section's prose body.
 */
const chapters = defineCollection({
  type: 'content',
  schema: z.object({
    /** Two-digit chapter number, '00' for prologue, '13' for conclusion. */
    chapter: z.string(),
    /** Display title for the parent chapter, e.g. "Mission Before Metrics". */
    chapterTitle: z.string(),
    /** Section identifier, e.g. "1.1". */
    section: z.string(),
    /** 1-based position within the chapter. */
    order: z.number(),
    /** Section title, e.g. "The Mission Is the Magnet". */
    title: z.string(),
    /** Estimated read time in minutes for this section alone. */
    mins: z.number(),
    /** True while the section has no real content yet. */
    draft: z.boolean().default(false),
    /** True for sections that existed in a previous edition but no longer
     *  belong to the book. Filtered out of all routing and listings. */
    obsolete: z.boolean().default(false),
    /** Optional kicker for prologue / conclusion. */
    kicker: z.enum(['Prologue', 'Conclusion']).optional(),
    /** Optional pull quote rendered in the right-margin treatment. */
    pull: z.string().optional(),
  }),
});

/**
 * Logs collection — Logs, the essays.
 *
 * Layout: src/content/logs/{slug}.mdx  →  /logs/{slug}
 * Newest first on /logs and in /logs/rss.xml. A log can point at a tool
 * (`tool`), which draws the "Built into …" block at its foot and lets the
 * tool's page list it under "From the logs".
 */
const logs = defineCollection({
  type: 'content',
  schema: z.object({
    /** Display title. Sentence case; the layout uppercases it. */
    title: z.string(),
    /** One word (or phrase) of the title to set in oxblood. Must appear in `title`. */
    accent: z.string().optional(),
    /** Mono eyebrow above the title, e.g. "Why MealStack exists". */
    eyebrow: z.string().optional(),
    /** One or two sentences under the title, Oswald. */
    standfirst: z.string(),
    /** Listing, meta description and RSS. Plain text, no markup. */
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** Which tool the note belongs to, if any. Drives cross-links both ways. */
    tool: z.enum(['mealstack', 'ironstack', 'loadout']).optional(),
    /** 1200x630 share image under /public. Defaults to the site card. */
    ogImage: z.string().optional(),
    ogImageAlt: z.string().optional(),
    /** Hidden from listings, the feed and routing while true. */
    draft: z.boolean().default(false),
  }),
});

/**
 * Releases collection — release notes for the tools.
 *
 * Layout: src/content/releases/{app}-{version}.md. Generated, not hand-written:
 * scripts/sync_mealstack_changelog.py splits the app repo's CHANGELOG.md into one
 * file per release. /rack/mealstack/changelog renders them, newest first by `order`.
 */
const releases = defineCollection({
  type: 'content',
  schema: z.object({
    app: z.enum(['mealstack']),
    /** "0.9", "0.8.1". */
    version: z.string(),
    /** Sort key: major * 1e6 + minor * 1e3 + patch. */
    order: z.number(),
    /** in-progress: still being built. in-review: submitted, waiting on Apple. */
    status: z.enum(['in-progress', 'in-review', 'shipped']),
    date: z.coerce.date().optional(),
    /** TestFlight build number, when that is all the heading carries. */
    build: z.string().optional(),
  }),
});

export const collections = { chapters, logs, releases };
