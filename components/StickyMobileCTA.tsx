import Link from 'next/link';

export default function StickyMobileCTA() {
  return <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/95 p-3 backdrop-blur sm:hidden"><Link href="/contact" className="flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-5 text-sm font-semibold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100">Get a free audit</Link></div>;
}
