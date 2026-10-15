// node --test tests/  — functions/api/first.js (#194). Kept out of functions/, where Pages would
// make a test file a route.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost, onRequest } from '../functions/api/first.js';

const KEY = 'bd-test-key';
const OLD = String(Date.now() - 10_000);

function kv() {
  const m = new Map();
  return { m, get: async (k) => m.get(k) ?? null, put: async (k, v) => { m.set(k, v); } };
}

function post(body, { json = true, ip = '203.0.113.7' } = {}) {
  const headers = { 'cf-connecting-ip': ip };
  if (json) {
    headers['content-type'] = 'application/json';
    headers.accept = 'application/json';
    return new Request('https://missionbuilt.io/api/first', { method: 'POST', headers, body: JSON.stringify(body) });
  }
  const form = new FormData();
  for (const [k, v] of Object.entries(body)) form.set(k, v);
  return new Request('https://missionbuilt.io/api/first', { method: 'POST', headers, body: form });
}

function buttondown(status = 201, text = '{}') {
  const calls = [];
  const fetch = async (url, init) => { calls.push({ url, init }); return new Response(text, { status }); };
  return { calls, fetch };
}

test('closed until the key is set: 503, nothing sent, nothing stored', async () => {
  const store = kv(); const bd = buttondown();
  const res = await onRequestPost({ request: post({ email: 'a@b.co', t: OLD }), env: { BETA_KV: store } }, bd);
  assert.equal(res.status, 503);
  assert.equal((await res.json()).closed, true);
  assert.equal(bd.calls.length, 0);
  assert.equal(store.m.size, 0);
});

test('a good address goes to Buttondown, address and tag only, and the answer never echoes it', async () => {
  const store = kv(); const bd = buttondown(201);
  const res = await onRequestPost({ request: post({ email: ' A@B.co ', t: OLD }), env: { BETA_KV: store, BUTTONDOWN_API_KEY: KEY } }, bd);
  assert.equal(res.status, 200);
  const text = await res.text();
  assert.ok(!text.includes('a@b.co'));
  assert.equal(bd.calls.length, 1);
  assert.equal(bd.calls[0].url, 'https://api.buttondown.com/v1/subscribers');
  assert.equal(bd.calls[0].init.headers.authorization, `Token ${KEY}`);
  assert.deepEqual(JSON.parse(bd.calls[0].init.body), { email_address: 'a@b.co', tags: ['first'] });
});

test('KV holds only the hourly counter (under a hash) and today\'s salt, never the IP or the address', async () => {
  const store = kv(); const bd = buttondown(201);
  await onRequestPost({ request: post({ email: 'a@b.co', t: OLD }), env: { BETA_KV: store, BUTTONDOWN_API_KEY: KEY } }, bd);
  const keys = [...store.m.keys()].sort();
  assert.equal(keys.length, 2);
  assert.match(keys[0], /^first-rl:[0-9a-f]{24}$/);
  assert.match(keys[1], /^first-salt:\d{4}-\d{2}-\d{2}$/);
  assert.ok(keys.every((k) => !k.includes('203.0.113.7')));
  assert.ok(![...store.m.values()].some((v) => v.includes('a@b.co')));
});

test('honeypot and a too-young form: yes, nothing sent', async () => {
  for (const body of [{ email: 'a@b.co', website: 'x', t: OLD }, { email: 'a@b.co', t: String(Date.now()) }]) {
    const bd = buttondown();
    const res = await onRequestPost({ request: post(body), env: { BETA_KV: kv(), BUTTONDOWN_API_KEY: KEY } }, bd);
    assert.equal(res.status, 200);
    assert.equal(bd.calls.length, 0);
  }
});

test('a bad address: 400, nothing sent', async () => {
  const bd = buttondown();
  const res = await onRequestPost({ request: post({ email: 'nope', t: OLD }), env: { BETA_KV: kv(), BUTTONDOWN_API_KEY: KEY } }, bd);
  assert.equal(res.status, 400);
  assert.equal(bd.calls.length, 0);
});

test('five an hour per IP, then 429', async () => {
  const store = kv(); const bd = buttondown(201);
  const env = { BETA_KV: store, BUTTONDOWN_API_KEY: KEY };
  for (let i = 0; i < 5; i++) assert.equal((await onRequestPost({ request: post({ email: `a${i}@b.co`, t: OLD }), env }, bd)).status, 200);
  assert.equal((await onRequestPost({ request: post({ email: 'z@b.co', t: OLD }), env }, bd)).status, 429);
  assert.equal((await onRequestPost({ request: post({ email: 'z@b.co', t: OLD }, { ip: '198.51.100.1' }), env }, bd)).status, 200);
});

test('already on the list answers like a new sign-up', async () => {
  const bd = buttondown(400, '{"code":"email_already_exists","detail":"That email address already exists."}');
  const res = await onRequestPost({ request: post({ email: 'a@b.co', t: OLD }), env: { BETA_KV: kv(), BUTTONDOWN_API_KEY: KEY } }, bd);
  assert.equal(res.status, 200);
  assert.equal((await res.json()).ok, true);
});

test('Buttondown failing: 502, and the log line has no address', async () => {
  const lines = []; const orig = console.log; console.log = (...a) => lines.push(a.join(' '));
  try {
    const res = await onRequestPost({ request: post({ email: 'a@b.co', t: OLD }), env: { BETA_KV: kv(), BUTTONDOWN_API_KEY: KEY } }, buttondown(500, 'a@b.co boom'));
    assert.equal(res.status, 502);
    const thrown = await onRequestPost({ request: post({ email: 'a@b.co', t: OLD }), env: { BETA_KV: kv(), BUTTONDOWN_API_KEY: KEY } }, { fetch: async () => { throw new Error('a@b.co'); } });
    assert.equal(thrown.status, 502);
  } finally { console.log = orig; }
  assert.ok(lines.length >= 2);
  assert.ok(lines.every((l) => !l.includes('a@b.co')));
});

test('a form post without JS redirects to /first only', async () => {
  const res = await onRequestPost({ request: post({ email: 'a@b.co', t: OLD, page: '//evil.example' }, { json: false }), env: { BETA_KV: kv(), BUTTONDOWN_API_KEY: KEY } }, buttondown(201));
  assert.equal(res.status, 303);
  assert.equal(res.headers.get('location'), 'https://missionbuilt.io/first?first=ok#first');
  const closed = await onRequestPost({ request: post({ email: 'a@b.co', t: OLD }, { json: false }), env: {} }, buttondown());
  assert.equal(closed.headers.get('location'), 'https://missionbuilt.io/first?first=closed#first');
});

test('anything but POST: 405', async () => {
  assert.equal((await onRequest()).status, 405);
});

// Security review fixes (10-15).
test('a post without the page time is a bot: yes, nothing sent', async () => {
  const bd = buttondown();
  const res = await onRequestPost({ request: post({ email: 'a@b.co' }), env: { BETA_KV: kv(), BUTTONDOWN_API_KEY: KEY } }, bd);
  assert.equal(res.status, 200);
  assert.equal(bd.calls.length, 0);
});

test('another site\'s form is refused: nothing sent', async () => {
  const bd = buttondown();
  const req = new Request('https://missionbuilt.io/api/first', {
    method: 'POST', headers: { 'content-type': 'application/json', accept: 'application/json', origin: 'https://evil.example' },
    body: JSON.stringify({ email: 'a@b.co', t: OLD }) });
  const res = await onRequestPost({ request: req, env: { BETA_KV: kv(), BUTTONDOWN_API_KEY: KEY } }, bd);
  assert.equal(res.status, 403);
  assert.equal(bd.calls.length, 0);
});

test('our own page\'s origin is let through', async () => {
  const bd = buttondown();
  const req = new Request('https://missionbuilt.io/api/first', {
    method: 'POST', headers: { 'content-type': 'application/json', accept: 'application/json', origin: 'https://missionbuilt.io' },
    body: JSON.stringify({ email: 'a@b.co', t: OLD }) });
  const res = await onRequestPost({ request: req, env: { BETA_KV: kv(), BUTTONDOWN_API_KEY: KEY } }, bd);
  assert.equal(res.status, 200);
  assert.equal(bd.calls.length, 1);
});

test('without the counter store nothing is sent', async () => {
  const bd = buttondown();
  const res = await onRequestPost({ request: post({ email: 'a@b.co', t: OLD }), env: { BUTTONDOWN_API_KEY: KEY } }, bd);
  assert.equal(res.status, 503);
  assert.equal(bd.calls.length, 0);
});

test('a big body is refused before it is read', async () => {
  const bd = buttondown();
  const req = new Request('https://missionbuilt.io/api/first', {
    method: 'POST', headers: { 'content-type': 'application/json', accept: 'application/json', 'content-length': '50000' },
    body: JSON.stringify({ email: 'a@b.co', t: OLD }) });
  const res = await onRequestPost({ request: req, env: { BETA_KV: kv(), BUTTONDOWN_API_KEY: KEY } }, bd);
  assert.equal(res.status, 413);
  assert.equal(bd.calls.length, 0);
});

test('the counter key holds no IP and the salt is not the API key', async () => {
  const store = kv();
  await onRequestPost({ request: post({ email: 'a@b.co', t: OLD }), env: { BETA_KV: store, BUTTONDOWN_API_KEY: KEY } }, buttondown());
  const keys = [...store.m.keys()];
  assert.ok(keys.some((k) => k.startsWith('first-salt:')));
  assert.ok(keys.every((k) => !k.includes('203.0.113.7')));
  assert.ok([...store.m.values()].every((v) => v !== KEY));
});
