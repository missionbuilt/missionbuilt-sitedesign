/**
 * Logs feed — /logs/rss.xml. Hand-rolled RSS 2.0, no dependency.
 * Newest first, drafts excluded. Descriptions are plain text from frontmatter.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { byNewest, logUrl } from '../../data/logs';

const SITE = 'https://missionbuilt.io';

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const GET: APIRoute = async () => {
  const logs = (await getCollection('logs', ({ data }) => !data.draft)).sort(byNewest);

  const items = logs
    .map((n) => {
      const url = `${SITE}${logUrl(n)}`;
      return [
        '    <item>',
        `      <title>${esc(n.data.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${n.data.date.toUTCString()}</pubDate>`,
        `      <description>${esc(n.data.description)}</description>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const lastBuild = logs.length ? logs[0].data.date.toUTCString() : new Date().toUTCString();

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    '    <title>Logs · Mission Built</title>',
    `    <link>${SITE}/logs</link>`,
    '    <description>What happened, written down. Logs from the barbell and the boardroom, by Mike Nichols.</description>',
    '    <language>en-us</language>',
    `    <lastBuildDate>${lastBuild}</lastBuildDate>`,
    `    <atom:link href="${SITE}/logs/rss.xml" rel="self" type="application/rss+xml" />`,
    items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
