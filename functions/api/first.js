/**
 * /api/first — the launch list behind missionbuilt.io/first (#194, the launch ad's QR page).
 *
 * POST  JSON {email, website?, t?} or a form post of the same fields.
 *       Hands the address to Buttondown (our processor for the launch emails) server-side, so
 *       no Buttondown script, pixel or font ever loads on our page. Buttondown sends its own
 *       confirmation email first (double opt-in); open and click tracking are off in its
 *       settings (Mike's step). We keep no copy of the address ourselves.
 *       Honeypot (`website`) and a load-time check (`t`, ms since epoch, must be ≥ 2 s old)
 *       drop bots quietly. Per-IP limit: 5 posts an hour, counted under a salted hash of the
 *       IP (never the IP itself) for one hour. Answers JSON when the client asks for it,
 *       otherwise redirects back to /first with ?first=ok|err|closed so the form works
 *       without JavaScript.
 *
 *       The address is never logged, never echoed back, and never stored by this function.
 *       Someone already on the list gets the same answer as someone new, so the form can't be
 *       used to learn who signed up.
 *
 * Bindings: BUTTONDOWN_API_KEY (Pages secret, Mike sets it; until then every post answers 503
 * "not open yet" and nothing is sent or stored), BETA_KV (the existing KV namespace, used here
 * only for the hourly per-IP counter under the `first-rl:` prefix).
 */

const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,24}$/;
const RATE_LIMIT = 5;          // posts per IP per window
const RATE_WINDOW = 3600;      // seconds
const MIN_AGE_MS = 2000;       // form must be at least this old
const BUTTONDOWN = 'https://api.buttondown.com/v1/subscribers';
const TIMEOUT_MS = 8000;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

function wantsJson(request) {
  const accept = request.headers.get('accept') || '';
  const ctype = request.headers.get('content-type') || '';
  return accept.includes('application/json') || ctype.includes('application/json');
}

// Always back to /first: the destination is fixed, never taken from the request.
function back(request, result) {
  const url = new URL('/first', request.url);
  url.searchParams.set('first', result);
  url.hash = 'first';
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

// The counter's key: a hash of the IP with a secret-derived salt, so KV never holds an IP.
async function ipKey(ip, salt) {
  const data = new TextEncoder().encode(`${salt}|${ip}`);
  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', data));
  return 'first-rl:' + [...digest.slice(0, 12)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** What each outcome says, for JSON callers (the page has the same words). */
const SAY = {
  ok: { ok: true },
  closed: { ok: false, closed: true, error: 'The list opens soon. Come back in a few days.' },
  bad: { ok: false, error: 'That does not look like an email address.' },
  busy: { ok: false, error: 'Too many tries from here. Give it an hour.' },
  failed: { ok: false, error: 'That did not go through. Try again in a minute.' },
};

export async function onRequestPost({ request, env }, deps = {}) {
  const fetchFn = deps.fetch || fetch;
  const asJson = wantsJson(request);
  const answer = (kind, status) => (asJson ? json(SAY[kind], status) : back(request, kind === 'ok' ? 'ok' : kind === 'closed' ? 'closed' : 'err'));
  const body = await readBody(request);

  const email = String(body.email || '').trim().toLowerCase();
  const honeypot = String(body.website || '').trim();
  const t = parseInt(String(body.t || '0'), 10);

  // Bots: say yes, send and store nothing.
  if (honeypot || (t && Date.now() - t < MIN_AGE_MS)) return answer('ok', 200);

  // Not open until Mike sets the Buttondown key: nothing is sent or stored.
  if (!env.BUTTONDOWN_API_KEY) return answer('closed', 503);

  if (!EMAIL.test(email)) return answer('bad', 400);

  if (env.BETA_KV) {
    const ip = request.headers.get('cf-connecting-ip') || 'unknown';
    const key = await ipKey(ip, env.BUTTONDOWN_API_KEY);
    const used = parseInt((await env.BETA_KV.get(key)) || '0', 10);
    if (used >= RATE_LIMIT) return answer('busy', 429);
    await env.BETA_KV.put(key, String(used + 1), { expirationTtl: RATE_WINDOW });
  }

  // Hand it over. Only the address and one tag; no IP, no referrer, no metadata.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetchFn(BUTTONDOWN, {
      method: 'POST',
      headers: { authorization: `Token ${env.BUTTONDOWN_API_KEY}`, 'content-type': 'application/json' },
      body: JSON.stringify({ email_address: email, tags: ['first'] }),
      signal: controller.signal,
    });
    if (res.ok) return answer('ok', 200);
    // Already on the list: the same answer as new, so the form tells nobody who signed up.
    if (res.status === 400 || res.status === 409) {
      const detail = await res.text().catch(() => '');
      if (/already|exists|subscribed/i.test(detail)) return answer('ok', 200);
    }
    // Status only, never the address or the response body.
    console.log(`[first] buttondown answered ${res.status}`);
    return answer('failed', 502);
  } catch {
    console.log('[first] buttondown unreachable or timed out');
    return answer('failed', 502);
  } finally {
    clearTimeout(timer);
  }
}

export async function onRequest() {
  return new Response('Method not allowed', { status: 405, headers: { allow: 'POST' } });
}
