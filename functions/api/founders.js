/**
 * /api/founders — the approved names for the founders page (missionbuilt.io/founders).
 *
 * GET only. Answers a JSON array of display names, the list Mike approved by hand, read from the
 * KV namespace FOUNDERS_KV under the key `approved` (rules: hq/briefs/site/founders-page-rules.md).
 * Names are never read live from Buttondown and never kept in the site's code (a public repo).
 * Nothing about a person but the name they asked to have shown is stored or answered.
 *
 * Until FOUNDERS_KV is bound (Mike's go), the answer is an empty list and the page says the first
 * names go up at launch.
 */

const MAX_NAMES = 2000;
const MAX_LEN = 40;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300',
      'x-content-type-options': 'nosniff',
    },
  });
}

/** Keeps only short strings; the approved list is checked by hand, this is a second guard. */
export function cleanList(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((n) => typeof n === 'string')
    .map((n) => Array.from(n.normalize('NFC').replace(/[\p{C}<>]/gu, '').replace(/\s+/g, ' ').trim()).slice(0, MAX_LEN).join(''))
    .filter(Boolean)
    .slice(0, MAX_NAMES);
}

export async function onRequestGet({ env }) {
  if (!env.FOUNDERS_KV) return json([]);
  let raw = null;
  try { raw = await env.FOUNDERS_KV.get('approved', 'json'); } catch { raw = null; }
  return json(cleanList(raw));
}

export async function onRequest() {
  return new Response('Method not allowed', { status: 405, headers: { allow: 'GET' } });
}
