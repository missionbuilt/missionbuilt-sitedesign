/**
 * /get — the board's "get the app" QR (#144; Chalkboard, 2026-10-13). One fixed URL on the
 * board, sent on by device:
 *   iPhone or iPod          → IronStack on the App Store
 *   iPad or Mac             → MissionStack on the App Store (iPadOS Safari says "Macintosh",
 *                             so one rule covers both)
 *   anything else           → /rack/, the page about the three apps
 * Until an app's App Store page exists (its URL var is empty), that device goes to /rack/ too,
 * which says how to join the beta.
 *
 * Plain GET or HEAD; any query string is ignored. Nothing is logged, counted or stored, and no
 * cookie is set (privacy promise 8: the page reads only the User-Agent, to choose where to send
 * the visitor). `Vary: User-Agent` and no-store, so no cache answers one device for another.
 *
 * Vars (Pages project settings, both optional): IRONSTACK_APP_STORE_URL, MISSIONSTACK_APP_STORE_URL.
 * Only an https://apps.apple.com/ URL is used; anything else is ignored.
 */

const APP_STORE = /^https:\/\/apps\.apple\.com\/[A-Za-z0-9/_.-]+$/;

export function destination(userAgent, env) {
  const ua = userAgent || '';
  const store = (v) => (typeof v === 'string' && APP_STORE.test(v) ? v : null);
  if (/\b(iPhone|iPod)\b/.test(ua)) return store(env.IRONSTACK_APP_STORE_URL) || '/rack/';
  if (/\b(iPad|Macintosh)\b/.test(ua)) return store(env.MISSIONSTACK_APP_STORE_URL) || '/rack/';
  return '/rack/';
}

export function onRequest({ request, env }) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method not allowed', { status: 405, headers: { allow: 'GET, HEAD' } });
  }
  const to = destination(request.headers.get('user-agent'), env || {});
  const location = to.startsWith('/') ? new URL(to, request.url).toString() : to;
  return new Response(null, {
    status: 302,
    headers: { location, 'cache-control': 'no-store', vary: 'User-Agent', 'referrer-policy': 'no-referrer' },
  });
}
