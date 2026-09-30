/**
 * Releases — shared helpers for the MealStack and IronStack release notes pages.
 * The content comes from scripts/sync_mealstack_changelog.py (`--app ironstack`).
 *
 * One entry per build: a weekly update keeps the version and bumps the build, so
 * 0.9.1 can be both "build 86" (shipped) and "next build" (in progress). URLs:
 *   /rack/{app}/changelog/0-9-1-b86   a shipped build
 *   /rack/{app}/changelog/0-9-1-next  the build in progress
 *   /rack/{app}/changelog/0-9         a section with no build (a date, or in review)
 * The version alone (/changelog/0-9-1) redirects to that version's newest build, and
 * the index's `#v0-9-1` anchor sits on the same row: installed builds link to both.
 */
import type { CollectionEntry } from 'astro:content';
import { longDate } from './logs';

export type Release = CollectionEntry<'releases'>;
type Data = Release['data'];

/** An app's release notes index. */
export const changelogFor = (app: Data['app']) => `/rack/${app}/changelog`;


/** "0.9.1" → "0-9-1": the version's URL segment, and its `#v0-9-1` anchor on the index. */
export const versionSlug = (version: string) => version.replaceAll('.', '-');
export const versionUrl = (app: Data['app'], version: string) => `${changelogFor(app)}/${versionSlug(version)}`;

/** The entry's URL segment: "0-9-1-b86", "0-9-1-next", or "0-9" when it has no build. */
export function releaseSlug(r: Release): string {
  const v = versionSlug(r.data.version);
  if (r.data.status === 'in-progress') return `${v}-next`;
  return r.data.build ? `${v}-b${r.data.build}` : v;
}
export const releaseUrl = (r: Release) => `${changelogFor(r.data.app)}/${releaseSlug(r)}`;

/** The entry's own anchor on the index: "b86", "v0-9-1-next", or "v0-9". */
export function releaseAnchor(r: Release): string {
  if (r.data.status === 'in-progress') return `v${versionSlug(r.data.version)}-next`;
  return r.data.build ? `b${r.data.build}` : `v${versionSlug(r.data.version)}`;
}

/** "0.9.1 · build 86", "0.9.1 · next build", or "0.9". */
export function releaseLabel(d: Data): string {
  if (d.status === 'in-progress') return `${d.version} · next build`;
  return d.build ? `${d.version} · build ${d.build}` : d.version;
}

/** Within a version: the build in progress, then builds by number, then no build. */
const rank = (d: Data) => (d.status === 'in-progress' ? Infinity : d.build ?? -1);

/** Newest first: by version, then by build. */
export const byOrder = (a: Release, b: Release) => b.data.order - a.data.order || rank(b.data) - rank(a.data);

/** Each version's newest build, the one `/changelog/0-9-1` and `#v0-9-1` point at: the
 *  newest one testers can have (not the one in progress), or the one in progress when
 *  that is all the version has. Keyed by version. */
export function versionHeads(releases: Release[]): Map<string, Release> {
  const heads = new Map<string, Release>();
  for (const r of [...releases].sort(byOrder)) {
    const held = heads.get(r.data.version);
    if (!held || (held.data.status === 'in-progress' && r.data.status !== 'in-progress')) heads.set(r.data.version, r);
  }
  return heads;
}

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

/** The newest release testers can have: the newest one that isn't still in progress.
 *  The details pages show it in the beta panel, so the status never goes stale by date. */
export function newestBuild(releases: Release[], app: Data['app']): Release | undefined {
  return releases.filter((r) => r.data.app === app && r.data.status !== 'in-progress').sort(byOrder)[0];
}
