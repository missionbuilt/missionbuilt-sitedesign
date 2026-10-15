/**
 * The one switch for MissionStack's public pages (#193).
 *
 * The MissionStack name isn't cleared yet (question to Mike, 10-14 20:52). Until he says it is,
 * every page under /rack/missionstack is noindex and out of the sitemap. Flip this to true only
 * on Mike's word; the pages then index and the sitemap lists them. (A plain .mjs so
 * astro.config.mjs can read it too.)
 */
export const MISSIONSTACK_ANNOUNCED = false;
