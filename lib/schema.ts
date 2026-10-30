import { SITE_URL } from '@/lib/pages';

export function organization() {
  return { '@context': 'https://schema.org', '@type': 'Organization', name: 'SniperCoders', url: SITE_URL };
}
export function breadcrumbs(items: Array<{ name: string; path: string }>) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: `${SITE_URL}${item.path}` })) };
}
export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
}
export function serviceSchema(name: string, description: string, url: string) {
  return { '@context': 'https://schema.org', '@type': 'Service', name, description, url: `${SITE_URL}${url}`, provider: { '@type': 'Organization', name: 'SniperCoders', url: SITE_URL }, areaServed: { '@type': 'City', name: 'Bangalore' } };
}
export function articleSchema(input: { title: string; description: string; url: string; datePublished: string; dateModified: string }) {
  return { '@context': 'https://schema.org', '@type': 'Article', headline: input.title, description: input.description, mainEntityOfPage: `${SITE_URL}${input.url}`, datePublished: input.datePublished, dateModified: input.dateModified, author: { '@type': 'Organization', name: 'SniperCoders strategy team' }, publisher: { '@type': 'Organization', name: 'SniperCoders', url: SITE_URL } };
}
export function collectionSchema(name: string, url: string, paths: string[]) {
  return { '@context': 'https://schema.org', '@type': 'CollectionPage', name, url: `${SITE_URL}${url}`, mainEntity: { '@type': 'ItemList', itemListElement: paths.map((path, index) => ({ '@type': 'ListItem', position: index + 1, url: `${SITE_URL}${path}` })) } };
}
