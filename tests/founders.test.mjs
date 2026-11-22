// node --test tests/ — functions/api/founders.js (the founders page's approved list).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestGet, onRequest, cleanList } from '../functions/api/founders.js';

const kv = (value) => ({ get: async (k, t) => (k === 'approved' ? value : null) });

test('no store bound: an empty list', async () => {
  const res = await onRequestGet({ env: {} });
  assert.deepEqual(await res.json(), []);
});

test('the approved list comes back, cleaned', async () => {
  const res = await onRequestGet({ env: { FOUNDERS_KV: kv(['Iron Jane', '  <b>x</b> ', 42, '', 'y'.repeat(60)]) } });
  const list = await res.json();
  assert.deepEqual(list.slice(0, 2), ['Iron Jane', 'bx/b']);
  assert.equal(list.length, 3);
  assert.equal(list[2].length, 40);
});

test('a broken value is an empty list, never an error', async () => {
  assert.deepEqual(cleanList({ not: 'a list' }), []);
  const res = await onRequestGet({ env: { FOUNDERS_KV: { get: async () => { throw new Error('kv down'); } } } });
  assert.deepEqual(await res.json(), []);
});

test('only GET', async () => {
  const res = await onRequest();
  assert.equal(res.status, 405);
});
