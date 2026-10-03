import { existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Whether the pages show the apps' screenshots. On, normally.
 *
 * Mike, 2026-09-30: the screenshots are retaken from each weekend's build before the site's
 * main goes live; if they are not ready by then, this goes false and every strip of app
 * screens comes off the pages rather than show an older app (the 2026-10-03 update renamed
 * Coach to Stack AI, and older shots still say Coach). The words on every page stand alone.
 */
export const SHOW_APP_SCREENS = true;

const missing = new Set<string>();

/**
 * Whether a screenshot under public/ is in the repo yet. A page shows a screen slot (its
 * shape, labelled with the file it waits for) in place of a screen that has not been
 * captured, so a layout can land before its screens do. The build lists every slot it drew.
 */
export function hasScreen(src: string): boolean {
  const ok = existsSync(join(process.cwd(), 'public', src));
  if (!ok && !missing.has(src)) {
    missing.add(src);
    console.warn(`[screens] not captured yet, showing a slot: public${src}`);
  }
  return ok;
}

/** The file name a screen slot shows. */
export const slotName = (src: string) => src.replace(/^\/images\//, '');
