import Link from 'next/link';

export default function SeoBreadcrumbs({ items }: { items: Array<{ name: string; path: string }> }) {
  return <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400"><ol className="flex flex-wrap gap-2">{items.map((item, i) => <li key={item.path} className="flex gap-2"><Link className="transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-cyan-300" href={item.path}>{item.name}</Link>{i < items.length - 1 && <span aria-hidden="true">/</span>}</li>)}</ol></nav>;
}
