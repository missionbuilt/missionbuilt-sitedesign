/**
 * /api/beta — MealStack private-beta sign-up (Cloudflare Pages Function).
 *
 * POST  JSON {email, note?, website?, t?, page?} or a form post of the same fields.
 *       Stores signup:<email> in the BETA_KV namespace. Honeypot (`website`) and a
 *       load-time check (`t`, ms since epoch, must be ≥ 2 s old) drop bots quietly.
 *       Per-IP limit: 5 posts an hour. Answers JSON when the client asks for it,
 *       otherwise redirects back to the page with ?beta=ok|err so the form works
 *       without JavaScript.
 * GET   ?key=<BETA_ADMIN_KEY> lists every signup as tab-separated lines
 *       (when\temail\tnote\tcountry). Anything else is a 404.
 *
 * Bindings (wrangler.jsonc): BETA_KV (KV namespace), BETA_ADMIN_KEY (secret).
 * If BETA_KV is not bound yet the function answers 503 {ok:false, fallback:true}
 * and the page shows the email fallback instead of an error.
 */

const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,24}$/;
const RATE_LIMIT = 5;          // posts per IP per window
const RATE_WINDOW = 3600;      // seconds
const MIN_AGE_MS = 2000;       // form must be at least this old

function json(body, status = 200, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...extra },
  });
}

function wantsJson(request) {
  const accept = request.headers.get('accept') || '';
  const ctype = request.headers.get('content-type') || '';
  return accept.includes('application/json') || ctype.includes('application/json');
}

// Pages we will redirect back to after a signup POST. `page` arrives from the
// form body, so it is matched against this list rather than pattern-checked:
// a bare startsWith('/') test lets "//evil.example" through as a scheme-relative
// URL, turning this endpoint into an open redirect off missionbuilt.io.
const RETURN_PAGES = new Set([
  '/rack/mealstack',
  '/rack/ironstack',
  '/rack',
]);

function back(request, page, result) {
  const dest = RETURN_PAGES.has(page) ? page : '/rack/mealstack';
  const url = new URL(dest, request.url);
  url.searchParams.set('beta', result);
  url.hash = 'beta';
  return Response.redirect(url.toString(), 303);
}

async function readBody(request) {
  const ctype = request.headers.get('content-type') || '';
  if (ctype.includes('application/json')) {
    try { return await request.json(); } catch { return {}; }
  }
  try {
    const form = await request.formData();
    return Object.fromEntries(form.entries());
  } catch { return {}; }
}

export async function onRequestPost({ request, env }) {
  const asJson = wantsJson(request);
  const body = await readBody(request);
  const page = typeof body.page === 'string' ? body.page : '/rack/mealstack';

  if (!env.BETA_KV) {
    return asJson ? json({ ok: false, fallback: true, error: 'The beta list is not wired up yet.' }, 503) : back(request, page, 'err');
  }

  const email = String(body.email || '').trim().toLowerCase();
  const note = String(body.note || '').trim().slice(0, 200);
  const honeypot = String(body.website || '').trim();
  const t = parseInt(String(body.t || '0'), 10);

  // Bots: say yes, store nothing.
  if (honeypot || (t && Date.now() - t < MIN_AGE_MS)) {
    return asJson ? json({ ok: true }) : back(request, page, 'ok');
  }

  if (!EMAIL.test(email)) {
    return asJson ? json({ ok: false, error: 'That does not look like an email address.' }, 400) : back(request, page, 'err');
  }

  // Rate limit by IP.
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  const rlKey = 'rl:' + ip;
  const used = parseInt((await env.BETA_KV.get(rlKey)) || '0', 10);
  if (used >= RATE_LIMIT) {
    return asJson ? json({ ok: false, error: 'Too many tries from here. Give it an hour.' }, 429) : back(request, page, 'err');
  }
  await env.BETA_KV.put(rlKey, String(used + 1), { expirationTtl: RATE_WINDOW });

  // Store. A repeat signup keeps its first timestamp and takes the newer note.
  const key = 'signup:' + email;
  const existing = await env.BETA_KV.get(key, 'json');
  const record = {
    email,
    note: note || (existing && existing.note) || '',
    at: (existing && existing.at) || new Date().toISOString(),
    updated: new Date().toISOString(),
    country: request.headers.get('cf-ipcountry') || '',
    invited: (existing && existing.invited) || false,
    // Which app page(s) the person signed up from, so MealStack and Ironstack testers
    // can be told apart. Only values from RETURN_PAGES are kept.
    pages: [...new Set([...((existing && existing.pages) || []), ...(RETURN_PAGES.has(page) ? [page] : [])])],
  };
  await env.BETA_KV.put(key, JSON.stringify(record));

  return asJson ? json({ ok: true }) : back(request, page, 'ok');
}

// Length-independent, content-constant-time comparison. HMACing both sides
// with a per-request random key means the compare below runs over fixed-size
// digests, so response timing carries nothing about the real key.
async function safeEqual(a, b) {
  const enc = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(32));
  const mac = async (v) => {
    const k = await crypto.subtle.importKey('raw', salt, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    return new Uint8Array(await crypto.subtle.sign('HMAC', k, enc.encode(v)));
  };
  const [x, y] = await Promise.all([mac(a), mac(b)]);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const key = url.searchParams.get('key') || '';
  if (!env.BETA_KV || !env.BETA_ADMIN_KEY || !key || !(await safeEqual(key, env.BETA_ADMIN_KEY))) {
    return new Response('Not found', { status: 404 });
  }
  const lines = ['when\temail\tnote\tcountry\tinvited'];
  let cursor;
  do {
    const page = await env.BETA_KV.list({ prefix: 'signup:', cursor });
    for (const k of page.keys) {
      const r = await env.BETA_KV.get(k.name, 'json');
      if (r) lines.push([r.at, r.email, (r.note || '').replace(/\s+/g, ' '), r.country || '', r.invited ? 'yes' : ''].join('\t'));
    }
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
  return new Response(lines.join('\n') + '\n', {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' },
  });
}

export async function onRequest({ request }) {
  return new Response('Method not allowed', { status: 405, headers: { allow: 'GET, POST' } });
}
