/**
 * The pricing page's flags and its build checks (#44, briefs/launch/pricing-page-spec.md §1–2).
 *
 * - `PUBLIC_PRICING` (on at the soft-launch release, ~12-15): /pricing builds and is reachable by
 *   link, with `noindex`, out of the nav and the sitemap.
 * - `PUBLIC_LAUNCH` (on 1-1): /pricing is in the nav and the sitemap, without `noindex`.
 * - Both off: /pricing is not in the build output at all.
 *
 * While either is on, the build fails if a competitor's price was checked more than 60 days
 * before the build, or if any value still says "[verify]".
 */
import data from './pricing.json';

const flag = (name: string): boolean => {
  const fromVite = (import.meta as any).env?.[name];
  const fromNode = typeof process !== 'undefined' ? process.env?.[name] : undefined;
  return String(fromVite ?? fromNode ?? '').toLowerCase() === 'true';
};

export const pricingFlags = () => {
  const launch = flag('PUBLIC_LAUNCH');
  // Launch implies the page exists.
  const pricing = launch || flag('PUBLIC_PRICING');
  return { pricing, launch };
};

export const STALE_DAYS = 60;

/** Every problem the build must stop on, as plain sentences. Empty when the page may build. */
export function pricingProblems(now: Date = new Date()): string[] {
  const problems: string[] = [];
  for (const c of data.competitors) {
    const checked = new Date(`${c.checked}T00:00:00Z`);
    if (Number.isNaN(checked.getTime())) {
      problems.push(`${c.name}: "checked" isn't a date (${c.checked}).`);
      continue;
    }
    const days = (now.getTime() - checked.getTime()) / 86_400_000;
    if (days > STALE_DAYS) problems.push(`${c.name}: price checked ${c.checked}, more than ${STALE_DAYS} days ago.`);
  }
  const walk = (value: unknown, path: string) => {
    if (typeof value === 'string' && value.includes('[verify]')) problems.push(`${path} still says [verify].`);
    else if (Array.isArray(value)) value.forEach((v, i) => walk(v, `${path}[${i}]`));
    else if (value && typeof value === 'object') for (const [k, v] of Object.entries(value)) walk(v, path ? `${path}.${k}` : k);
  };
  walk(data, '');
  return problems;
}

/** Called by the page while either flag is on: a stale price stops the build. */
export function assertPricingFresh(now: Date = new Date()) {
  const problems = pricingProblems(now);
  if (problems.length) {
    throw new Error(`The pricing page can't build:\n- ${problems.join('\n- ')}\nRe-check the prices in src/data/pricing.json.`);
  }
}

/** Whether today is inside the founding window (the window starts on the release day, set then). */
export function inFoundingWindow(now: Date = new Date()): boolean {
  const start = data.founding.window_start ? new Date(`${data.founding.window_start}T00:00:00Z`) : null;
  const end = new Date(`${data.founding.window_end}T23:59:59Z`);
  return !!start && now >= start && now <= end;
}

export const checkedLabel = (iso: string) => {
  const d = new Date(`${iso}T00:00:00Z`);
  return `checked ${d.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' })} ${d.getUTCFullYear()}`;
};

export { data as pricing };
