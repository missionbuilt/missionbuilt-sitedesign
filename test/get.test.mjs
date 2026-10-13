// /get (#144): where each device goes, and that nothing but an App Store URL is ever followed.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { destination, onRequest } from '../functions/get.js';

const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 26_0 like Mac OS X) AppleWebKit/605.1.15';
const IPAD = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Version/26.0 Safari/605.1.15';
const ANDROID = 'Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 Chrome/130.0';
const env = { IRONSTACK_APP_STORE_URL: 'https://apps.apple.com/us/app/ironstack/id1', MISSIONSTACK_APP_STORE_URL: 'https://apps.apple.com/us/app/missionstack/id2' };

test('each device to its app once the App Store pages exist', () => {
  assert.equal(destination(IPHONE, env), env.IRONSTACK_APP_STORE_URL);
  assert.equal(destination(IPAD, env), env.MISSIONSTACK_APP_STORE_URL);
  assert.equal(destination(ANDROID, env), '/rack/');
  assert.equal(destination('', env), '/rack/');
});

test('before launch everyone goes to the page about the apps', () => {
  assert.equal(destination(IPHONE, {}), '/rack/');
  assert.equal(destination(IPAD, {}), '/rack/');
});

test('only an apps.apple.com URL is ever followed', () => {
  assert.equal(destination(IPHONE, { IRONSTACK_APP_STORE_URL: 'https://evil.example/x' }), '/rack/');
  assert.equal(destination(IPHONE, { IRONSTACK_APP_STORE_URL: 'javascript:alert(1)' }), '/rack/');
});

test('a 302 with no-store and Vary, any query ignored, nothing but GET and HEAD', async () => {
  const req = new Request('https://missionbuilt.io/get?utm=x', { headers: { 'user-agent': IPHONE } });
  const res = onRequest({ request: req, env: {} });
  assert.equal(res.status, 302);
  assert.equal(res.headers.get('location'), 'https://missionbuilt.io/rack/');
  assert.equal(res.headers.get('cache-control'), 'no-store');
  assert.equal(res.headers.get('vary'), 'User-Agent');
  assert.equal(res.headers.get('set-cookie'), null);
  const post = onRequest({ request: new Request('https://missionbuilt.io/get', { method: 'POST' }), env: {} });
  assert.equal(post.status, 405);
});
