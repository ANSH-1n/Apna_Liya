import { seoPages } from '@/lib/seo-cluster';

/** The hub-and-spoke graph for the Bangalore cluster. */
export const clusterLinks: Record<string, string[]> = Object.fromEntries(seoPages.map(page => {
  const upward = page.cluster === 'pillar' ? [] : [page.hub, '/social-media-marketing-agency-bangalore'].filter((target): target is string => Boolean(target));
  const pillarHubs = page.cluster === 'pillar' ? ['/bangalore/areas', '/bangalore/industries', '/bangalore/services', '/bangalore/guides'] : [];
  const guide = page.cluster === 'guide' ? [] : ['/bangalore/guides/custom-strategy-plan'];
  return [page.path, [...new Set([...upward, ...pillarHubs, ...guide, ...page.related])]];
}));

export function getClusterLinks(path: string): string[] {
  return clusterLinks[path] ?? [];
}
