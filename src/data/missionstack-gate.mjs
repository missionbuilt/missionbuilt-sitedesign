/**
 * The one switch for MissionStack's public pages (#193).
 *
 * Mike cleared the name 2026-10-16 08:30 ("Cleared."). True on feat/site-launch-preview, the branch
 * that goes live; main stays false until Mike's site go. When true, the MissionStack pages index,
 * the sitemap lists them and the third app is named MissionStack everywhere. (A plain .mjs so
 * astro.config.mjs can read it too.)
 */
export const MISSIONSTACK_ANNOUNCED = true;
