/**
 * Releases — shared helpers for the MealStack and Ironstack release notes pages.
 * The content comes from scripts/sync_mealstack_changelog.py (`--app ironstack`).
 */
import type { CollectionEntry } from 'astro:content';
import { longDate } from './logs';

export type Release = CollectionEntry<'releases'>;
type Data = Release['data'];

/** An app's release notes index. */
export const changelogFor = (app: Data['app']) => `/rack/${app}/changelog`;

export const CHANGELOG = changelogFor('mealstack');

/** "0.9.1" → "0-9-1": the release's URL segment. */
export const releaseSlug = (version: string) => version.replaceAll('.', '-');
export const releaseUrl = (r: Release) => `${changelogFor(r.data.app)}/${releaseSlug(r.data.version)}`;

export const byOrder = (a: Release, b: Release) => b.data.order - a.data.order;

const shortDate = (d: Date) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(d);

/** What a release's status line says, long or short. */
export function when(d: Data, short = false): string {
  if (d.status === 'in-progress') return short ? 'Next' : 'In progress. Not on TestFlight yet.';
  if (d.status === 'in-review') return short ? 'In review' : 'Submitted. Waiting on Apple.';
  if (d.date) return short ? shortDate(d.date) : `Shipped ${longDate(d.date)}`;
  if (d.build) return short ? `Build ${d.build}` : `Shipped as build ${d.build}`;
  return 'Shipped';
}

export const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;
