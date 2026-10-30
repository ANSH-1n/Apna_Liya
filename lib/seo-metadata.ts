import type { Metadata } from 'next';
import { pages, SITE_URL } from '@/lib/pages';

export function buildMetadata(path: string): Metadata {
  const page = pages.find(item => item.path === path);
  if (!page) return {};
  const url = page.path === '/' ? SITE_URL : `${SITE_URL}${page.path}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    robots: { index: page.indexable, follow: true },
    openGraph: { title: page.title, description: page.description, url, siteName: 'SniperCoders', type: 'website' },
    twitter: { card: 'summary_large_image', title: page.title, description: page.description },
  };
}
