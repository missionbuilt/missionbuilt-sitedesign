/**
 * Logs — shared helpers for the logs collection.
 *
 * A log's `tool` frontmatter draws the "Built into …" block at the foot of
 * the log and lets the tool's page list its logs. Keep the wording here in
 * step with the Rack and Loadout cards.
 */
import type { CollectionEntry } from 'astro:content';

export type Log = CollectionEntry<'logs'>;
export type ToolKey = 'mealstack' | 'ironstack' | 'loadout';

export const TOOLS: Record<ToolKey, { name: string; href: string; line: string; cta: string }> = {
  mealstack: {
    name: 'MealStack',
    href: '/rack/mealstack',
    line: 'Fueling is training. A meal timing tracker for people who train, on iPhone. Private beta.',
    cta: 'See the app →',
  },
  ironstack: {
    name: 'Ironstack',
    href: '/rack/ironstack',
    line: 'Weight is a number. Heavy is a feeling. A training partner with your whole history in its head.',
    cta: 'Preview →',
  },
  loadout: {
    name: 'The Loadout',
    href: '/loadout',
    line: 'The boardroom half: open-source skills for product leaders. The Warmup, the Approach, the Spotter.',
    cta: 'Open →',
  },
};

export function logUrl(log: Log): string {
  return `/logs/${log.slug}`;
}

/** Newest first. Drafts are filtered by the caller's getCollection filter. */
export function byNewest(a: Log, b: Log): number {
  return b.data.date.getTime() - a.data.date.getTime();
}

/** "September 16, 2026". Dates in frontmatter are calendar days, read as UTC so they never slip a day. */
export function longDate(d: Date): string {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(d);
}

/** "September 2026", for bylines. */
export function monthYear(d: Date): string {
  return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d);
}

/** ISO calendar day, for <time datetime> and JSON-LD. */
export function isoDay(d: Date): string {
  return d.toISOString().slice(0, 10);
}
