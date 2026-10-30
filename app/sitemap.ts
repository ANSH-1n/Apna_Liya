import type { MetadataRoute } from 'next';
import { indexablePages, SITE_URL } from '@/lib/pages';

const priority: Record<string, number> = {
  home: 1, pillar: 0.9, hub: 0.8, industry: 0.7, service: 0.7, area: 0.6, guide: 0.6, static: 0.5,
};
const frequency: Record<string, NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>> = {
  home: 'weekly', pillar: 'weekly', hub: 'monthly', industry: 'monthly', service: 'monthly', area: 'monthly', guide: 'monthly', static: 'yearly',
};

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePages.map(page => ({
    url: page.path === '/' ? SITE_URL : `${SITE_URL}${page.path}`,
    lastModified: new Date(page.updatedAt),
    changeFrequency: frequency[page.cluster],
    priority: page.priority ?? priority[page.cluster],
  }));
}
