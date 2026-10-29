/**
 * Shared by /api/first and /api/beta: read a POST body with a hard byte cap.
 *
 * Not a route: Pages makes a route only from a file that exports onRequest*, and this one doesn't.
 *
 * The content-length header is only a fast path. A chunked post can leave it out, so the body is
 * read from the stream and counted as it arrives; past the cap the stream is cancelled and the
 * caller gets null (it answers 413). Nothing past the cap is ever buffered or parsed.
 */

/**
 * The body as a plain object, {} when it can't be parsed, or null when it is over `max` bytes.
 * JSON (by content-type) is JSON.parse'd; anything else is read as a form (urlencoded or
 * multipart), the same as request.formData() would.
 */
export async function readCapped(request, max) {
  const declared = parseInt(request.headers.get('content-length') || '0', 10);
  if (declared > max) return null;

  const bytes = await readBytes(request, max);
  if (bytes === null) return null;

  const ctype = request.headers.get('content-type') || '';
  if (ctype.includes('application/json')) {
    try {
      // A non-object (null, a number) is unparseable here; null must only ever mean "over the cap".
      const v = JSON.parse(new TextDecoder().decode(bytes));
      return v && typeof v === 'object' ? v : {};
    } catch { return {}; }
  }
  if (ctype.toLowerCase().includes('application/x-www-form-urlencoded')) {
    return Object.fromEntries(new URLSearchParams(new TextDecoder().decode(bytes)));
  }
  // Multipart (or anything else formData() might accept): parse the bytes we already hold,
  // under the same content-type, so the boundary is kept.
  try {
    const form = await new Request(request.url, { method: 'POST', headers: { 'content-type': ctype }, body: bytes }).formData();
    return Object.fromEntries(form.entries());
  } catch { return {}; }
}

/** Up to `max` bytes of the body as one Uint8Array, or null (stream cancelled) past it. */
async function readBytes(request, max) {
  if (!request.body) return new Uint8Array(0);
  const reader = request.body.getReader();
  const chunks = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > max) {
      await reader.cancel().catch(() => {});
      return null;
    }
    chunks.push(value);
  }
  const out = new Uint8Array(total);
  let at = 0;
  for (const c of chunks) { out.set(c, at); at += c.byteLength; }
  return out;
}
