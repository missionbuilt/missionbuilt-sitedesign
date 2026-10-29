// node --test tests/ — functions/api/beta.js, hardened 2026-10-15 before the launch QR's fallback.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost } from '../functions/api/beta.js';

const OLD = String(Date.now() - 10_000);
function kv() {
  const m = new Map();
  return { m, get: async (k, type) => { const v = m.get(k) ?? null; return type === 'json' && v ? JSON.parse(v) : v; }, put: async (k, v) => { m.set(k, v); } };
}
function post(body, headers = {}) {
  return new Request('https://missionbuilt.io/api/beta', { method: 'POST', headers: { 'content-type': 'application/json', accept: 'application/json', 'cf-connecting-ip': '203.0.113.7', ...headers }, body: JSON.stringify(body) });
}

test('a good sign-up is stored under the email', async () => {
  const store = kv();
  const res = await onRequestPost({ request: post({ email: 'A@b.co', t: OLD, page: '/rack' }), env: { BETA_KV: store } });
  assert.equal(res.status, 200);
  assert.ok(store.m.has('signup:a@b.co'));
});

test('another origin is refused and nothing is stored', async () => {
  const store = kv();
  const res = await onRequestPost({ request: post({ email: 'a@b.co', t: OLD }, { origin: 'https://evil.example' }), env: { BETA_KV: store } });
  assert.equal(res.status, 403);
  assert.equal(store.m.size, 0);
});

test('our own origin is let through', async () => {
  const store = kv();
  const res = await onRequestPost({ request: post({ email: 'a@b.co', t: OLD }, { origin: 'https://missionbuilt.io' }), env: { BETA_KV: store } });
  assert.equal(res.status, 200);
});

test('a big body is refused before it is read', async () => {
  const store = kv();
  const res = await onRequestPost({ request: post({ email: 'a@b.co', t: OLD }, { 'content-length': '5000' }), env: { BETA_KV: store } });
  assert.equal(res.status, 413);
  assert.equal(store.m.size, 0);
});

test('a post without the page time is a bot: yes, but nothing stored', async () => {
  const store = kv();
  const res = await onRequestPost({ request: post({ email: 'a@b.co' }), env: { BETA_KV: store } });
  assert.equal(res.status, 200);
  assert.equal(store.m.size, 0);
});

test('the rate-limit key holds no IP', async () => {
  const store = kv();
  await onRequestPost({ request: post({ email: 'a@b.co', t: OLD }), env: { BETA_KV: store } });
  const keys = [...store.m.keys()];
  assert.ok(keys.every((k) => !k.includes('203.0.113.7')));
  assert.ok(keys.some((k) => /^rl:[0-9a-f]{24}$/.test(k)));
});

test('a later note is added to an earlier one, not written over it', async () => {
  const store = kv();
  await onRequestPost({ request: post({ email: 'a@b.co', t: OLD, note: 'my coach invited me' }), env: { BETA_KV: store } });
  await onRequestPost({ request: post({ email: 'a@b.co', t: OLD, note: 'Get in first · via li' }), env: { BETA_KV: store } });
  assert.equal(JSON.parse(store.m.get('signup:a@b.co')).note, 'my coach invited me · Get in first · via li');
});

test('a chunked ~5 KB body with no content-length: 413, read stops at the cap, nothing stored', async () => {
  const store = kv();
  const bytes = new TextEncoder().encode(JSON.stringify({ email: 'a@b.co', t: OLD, note: 'x'.repeat(5000) }));
  const pulled = { n: 0, cancelled: false };
  const stream = new ReadableStream({
    pull(c) {
      if (pulled.n >= bytes.length) return c.close();
      c.enqueue(bytes.slice(pulled.n, pulled.n + 512)); pulled.n += 512;
    },
    cancel() { pulled.cancelled = true; },
  });
  const req = new Request('https://missionbuilt.io/api/beta', { method: 'POST', duplex: 'half', body: stream,
    headers: { 'content-type': 'application/json', accept: 'application/json', 'cf-connecting-ip': '203.0.113.7' } });
  assert.equal(req.headers.get('content-length'), null);
  const res = await onRequestPost({ request: req, env: { BETA_KV: store } });
  assert.equal(res.status, 413);
  assert.equal(store.m.size, 0);
  assert.equal(pulled.cancelled, true);
  assert.ok(pulled.n <= 4096 + 1024, `read ${pulled.n} bytes`);
});

test('a plain urlencoded form post (no JS) is stored and redirects back to its page', async () => {
  const store = kv();
  const req = new Request('https://missionbuilt.io/api/beta', { method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded', 'cf-connecting-ip': '203.0.113.7' },
    body: new URLSearchParams({ email: 'a@b.co', t: OLD, page: '/rack/ironstack' }).toString() });
  const res = await onRequestPost({ request: req, env: { BETA_KV: store } });
  assert.equal(res.status, 303);
  assert.match(res.headers.get('location'), /\/rack\/ironstack\?beta=ok#beta$/);
  assert.deepEqual(JSON.parse(store.m.get('signup:a@b.co')).pages, ['/rack/ironstack']);
});
