import { readFile } from 'node:fs/promises';

const clusterSource = await readFile(new URL('../lib/seo-cluster.ts', import.meta.url), 'utf8');
const groupSource = clusterSource.match(/const groups = \{([\s\S]*?)\n\};/)?.[1] ?? '';
const approvedSource = clusterSource.match(/const approvedPages = new Set\(\[([\s\S]*?)\]\);/)?.[1] ?? '';
const approvedPaths = new Set([...approvedSource.matchAll(/'([^']+)'/g)].map(match => match[1]));
const routePrefixes: Record<string, { base: string; hub: string }> = {
  area: { base: '/bangalore/areas', hub: '/bangalore/areas' },
  industry: { base: '/bangalore/industries', hub: '/bangalore/industries' },
  service: { base: '/bangalore/services', hub: '/bangalore/services' },
  guide: { base: '/bangalore/guides', hub: '/bangalore/guides' },
};
const seoPages: Array<{ path: string; cluster: string; hub: string; indexable: boolean }> = [
  { path: '/social-media-marketing-agency-bangalore', cluster: 'pillar', hub: '', indexable: approvedPaths.has('/social-media-marketing-agency-bangalore') },
  ...Object.entries(routePrefixes).flatMap(([cluster, config]) => {
    const values = groupSource.match(new RegExp(`${cluster}: \\[([^\\]]+)\\]`))?.[1] ?? '';
    const slugs = [...values.matchAll(/'([^']+)'/g)].map(match => match[1]);
    return [{ path: config.hub, cluster: 'hub', hub: config.hub, indexable: approvedPaths.has(config.hub) }, ...slugs.map(slug => ({ path: `${config.base}/${slug}`, cluster, hub: config.hub, indexable: approvedPaths.has(`${config.base}/${slug}`) }))];
  }),
];

const origin = process.env.SEO_CHECK_ORIGIN ?? 'http://localhost:3000';
const minimumWords: Record<string, number> = { pillar: 1800, hub: 500, area: 900, industry: 1100, service: 1100, guide: 1500 };
const failures: Array<{ path: string; reasons: string[] }> = [];
const documents = new Map<string, { html: string; text: string; title: string; description: string }>();

const strip = (html: string) => html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, ' ').replace(/&#x27;|&#39;/g, "'")
  .replace(/&nbsp;|&#xA0;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
const words = (text: string) => text.match(/[\p{L}\p{N}’'-]+/gu) ?? [];
const shingles = (text: string) => {
  const tokens = words(text.toLowerCase());
  const result = new Set<string>();
  for (let i = 0; i <= tokens.length - 5; i++) result.add(tokens.slice(i, i + 5).join(' '));
  return result;
};

for (const page of seoPages) {
  const reasons: string[] = [];
  let response: Response;
  try { response = await fetch(`${origin}${page.path}`); }
  catch { throw new Error(`Cannot reach ${origin}. Start the site before running the SEO quality gate.`); }
  if (!response.ok) { failures.push({ path: page.path, reasons: [`HTTP ${response.status}`] }); continue; }
  const html = await response.text();
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/&amp;/g, '&') ?? '';
  const description = html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1] ?? '';
  const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? html;
  const text = strip(main);
  const headingCount = (main.match(/<h1\b/gi) ?? []).length;
  const canon = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
  const robots = html.match(/<meta[^>]+name="robots"[^>]+content="([^"]+)"/i)?.[1] ?? '';
  if (title.length > 60 || title.length === 0) reasons.push(`title length ${title.length} (target 1–60)`);
  if (description.length < 140 || description.length > 155) reasons.push(`meta description length ${description.length} (target 140–155)`);
  if (headingCount !== 1) reasons.push(`expected one H1, found ${headingCount}`);
  if (canon !== `https://www.snipercoders.in${page.path}`) reasons.push('canonical missing or does not match the self URL');
  if (page.indexable ? robots.toLowerCase().includes('noindex') || !robots.toLowerCase().includes('index') : !robots.toLowerCase().includes('noindex')) reasons.push('robots index directive does not match the quality-gate decision');
  const count = words(text).length;
  if (count < minimumWords[page.cluster]) reasons.push(`word count ${count} below ${minimumWords[page.cluster]}`);
  if (!text.includes('Reviewed by the SniperCoders strategy team') || !text.includes('Last reviewed October 21, 2026')) reasons.push('reviewer or review date missing');
  if (!html.includes('Get a free audit') || !html.includes('/contact')) reasons.push('free audit CTA missing');
  if (/\b(?:₹|INR|Rs\.?|pricing|price|starting at|affordable|cheap)\b/i.test(text)) reasons.push('pricing language found');
  if (/\d+\s*%|\b\d+x\s+(?:increase|growth|return)/i.test(text)) reasons.push('numeric outcome claim needs manual review');
  if (!html.includes('BreadcrumbList') || !html.includes('FAQPage')) reasons.push('breadcrumb or visible FAQ schema missing');
  const outbound = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map(match => match[1]);
  const required = [page.hub, '/social-media-marketing-agency-bangalore', page.path === '/bangalore/guides/custom-strategy-plan' ? undefined : '/bangalore/guides/custom-strategy-plan'].filter((target): target is string => Boolean(target));
  for (const target of required) {
    if (!outbound.includes(target)) reasons.push(`required internal link missing: ${target}`);
  }
  documents.set(page.path, { html, text, title, description });
  if (reasons.length) failures.push({ path: page.path, reasons });
}

const comparisons = new Map<string, { path: string; overlap: number }>();
for (const page of seoPages) {
  const doc = documents.get(page.path);
  if (!doc) continue;
  for (const sibling of seoPages.filter(other => other.cluster === page.cluster && other.path !== page.path)) {
    const other = documents.get(sibling.path);
    if (!other) continue;
    const a = shingles(doc.text), b = shingles(other.text);
    const overlap = a.size ? [...a].filter(shingle => b.has(shingle)).length / a.size : 0;
    if (overlap > (comparisons.get(page.path)?.overlap ?? 0)) comparisons.set(page.path, { path: sibling.path, overlap });
  }
}
for (const [path, sibling] of comparisons) {
  if (sibling.overlap > 0.30) failures.push({ path, reasons: [`highest 5-gram sibling overlap is ${(sibling.overlap * 100).toFixed(1)}% with ${sibling.path} (maximum 30%)`] });
}

const [sitemapResponse, robotsResponse] = await Promise.all([fetch(`${origin}/sitemap.xml`), fetch(`${origin}/robots.txt`)]);
if (!sitemapResponse.ok) throw new Error(`Sitemap returned HTTP ${sitemapResponse.status}`);
if (!robotsResponse.ok) throw new Error(`Robots returned HTTP ${robotsResponse.status}`);
const sitemapXml = await sitemapResponse.text();
const robotsTxt = await robotsResponse.text();
for (const page of seoPages) {
  const listed = sitemapXml.includes(`snipercoders.in${page.path}</loc>`);
  if (page.indexable && !listed) failures.push({ path: page.path, reasons: ['indexable page missing from sitemap'] });
  if (!page.indexable && listed) failures.push({ path: page.path, reasons: ['noindex draft page is present in sitemap'] });
}
if (!robotsTxt.includes('/sitemap.xml')) failures.push({ path: '/robots.txt', reasons: ['sitemap URL missing'] });
if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production' && !robotsTxt.includes('Disallow: /')) failures.push({ path: '/robots.txt', reasons: ['preview/staging block unavailable'] });

console.log(`SEO quality gate: ${seoPages.length} proposed pages checked`);
const byPage = new Map<string, Set<string>>();
for (const failure of failures) {
  const reasons = byPage.get(failure.path) ?? new Set<string>();
  failure.reasons.forEach(reason => reasons.add(reason));
  byPage.set(failure.path, reasons);
}
console.log(`${seoPages.length - byPage.size} passed; ${byPage.size} failed.`);
for (const [path, reasons] of byPage) console.log(`FAIL ${path}: ${[...reasons].join('; ')}`);
if (failures.length) process.exitCode = 1;
