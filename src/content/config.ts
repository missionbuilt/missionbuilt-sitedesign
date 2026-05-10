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

export const collections = { chapters };
