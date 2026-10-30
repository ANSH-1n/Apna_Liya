import { caseStudies } from '@/content/case-studies';

export default function CaseStudy({ path }: { path: string }) {
  const study = (caseStudies as Record<string, { title: string; summary: string } | undefined>)[path];
  if (!study) return null;
  return <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"><p className="text-sm uppercase tracking-[.2em] text-cyan-300">Client work</p><h2 className="mt-3 text-2xl font-semibold">{study.title}</h2><p className="mt-3 max-w-3xl text-slate-300">{study.summary}</p></section>;
}
