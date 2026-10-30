import Link from 'next/link';
import { clusterLinks } from '@/lib/links';
import { seoPageByPath } from '@/lib/seo-cluster';

export default function RelatedLinks({ path }: { path: string }) {
  return <nav aria-label="Related resources" className="flex flex-wrap gap-3">{(clusterLinks[path] ?? []).map(target => <Link key={target} href={target} className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-200/60 hover:text-cyan-100">{seoPageByPath.get(target)?.label ?? target.split('/').at(-1)?.replace(/-/g, ' ')}</Link>)}</nav>;
}
