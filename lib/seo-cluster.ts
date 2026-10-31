import type { Cluster, PageEntry } from '@/lib/pages';
import areaHub from '@/content/pages/areas-hub.json';
import industryHub from '@/content/pages/industries-hub.json';
import hospital from '@/content/pages/hospital.json';
import jewellers from '@/content/pages/jewellers.json';
import luxuryRealEstate from '@/content/pages/luxury-real-estate.json';
import servicesHub from '@/content/pages/services-hub.json';
import pillarCopy from '@/content/pages/pillar.json';
import guidesHub from '@/content/pages/guides-hub.json';
import b2bSaas from '@/content/pages/b2b-saas.json';
import hotelsResorts from '@/content/pages/hotels-and-resorts.json';

const groups = {
  area: ['indiranagar','koramangala','mg-road-lavelle-road','whitefield','hsr-layout','jayanagar','sadashivanagar','malleshwaram','richmond-road','cunningham-road','sarjapur-road','bellandur-outer-ring-road','hebbal','electronic-city','jp-nagar'],
  industry: ['luxury-real-estate','commercial-real-estate','interior-designers-architects','hospitals','cosmetic-surgeons','dermatology-clinics','ivf-clinics','dental-clinics','jewellers','luxury-car-dealers','salons-and-spas','hotels-and-resorts','fine-dining-restaurants','wedding-planners','private-schools-colleges','d2c-fashion-brands','b2b-saas','fintech','ev-clean-tech','law-ca-firms'],
  service: ['instagram-marketing','linkedin-lead-generation','meta-ads','influencer-marketing','reels-short-video','youtube-marketing','whatsapp-marketing','social-media-management','social-media-content','personal-branding-founders'],
  guide: ['custom-strategy-plan','roi-and-reporting','how-to-choose-agency','agency-vs-in-house','luxury-premium-brand-agency'],
} as const;

const hubNames: Record<string,string> = { area: 'Areas', industry: 'Industries', service: 'Services', guide: 'Guides' };
const hubSlugs: Record<string,string> = { area: 'areas', industry: 'industries', service: 'services', guide: 'guides' };
const nice = (slug: string) => slug.split('-').map(word => word.length <= 3 ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1)).join(' ').replace('Mg Road', 'MG Road').replace('B2b', 'B2B').replace('D2c', 'D2C').replace('Ev ', 'EV ');
const description = (label: string, type: Cluster) => {
  const phrases: Record<string,string> = {
    area: `Explore how a considered social media programme can serve businesses connected to ${label}. Get a free audit and a custom plan from SniperCoders.`,
    industry: `Explore a social media strategy shaped around the buyer journey and content needs of ${label}. Get a free audit and a custom plan.`,
    service: `Learn how ${label} can fit into a broader social media programme, with clear creative, review and reporting processes. Get a free audit.`,
    guide: `Use this practical guide to make clearer social media decisions for your business. Review the framework and request a free custom-plan audit.`,
    hub: `Browse social media marketing resources for Bangalore ${label.toLowerCase()}. Choose a relevant topic and request a free audit from SniperCoders.`,
    pillar: 'Explore a practical approach to social media strategy, content and measurement for Bangalore businesses. Request a free audit and custom plan.',
  };
  let text = phrases[type];
  const addOns = [' Talk with SniperCoders about a custom plan.', ' Start with a free audit and clear next steps.', ' Review the approach with the SniperCoders team.'];
  let i = 0;
  while (text.length < 140 && i < addOns.length) text = `${text.replace(/\.$/, '')}.${addOns[i++]}`;
  if (text.length > 155) text = `${text.slice(0, 153).replace(/\s+\S*$/, '')}.`;
  return text;
};

export interface PageCopy {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: Array<{ h2: string; paragraphs?: string[]; bullets?: string[] }>;
  children?: Array<{ path: string; title: string; blurb: string }>;
  faqs?: Array<{ q: string; a: string }>;
}
export interface SeoPage extends PageEntry { heading: string; label: string; hub: string; related: string[]; copy?: PageCopy }
const entries: SeoPage[] = [];
const add = (path: string, cluster: Cluster, slug: string, hub: string, related: string[] = []) => {
  const label = slug === 'social-media-marketing-agency-bangalore' ? 'Social Media Marketing Agency in Bangalore' : nice(slug);
  const heading = cluster === 'area' ? `Social Media Marketing for Businesses in ${label}, Bangalore` : cluster === 'pillar' ? label : `${label} Social Media Marketing in Bangalore`;
  const titleBase = cluster === 'pillar' ? 'Social Media Marketing Agency Bangalore' : `${label} Social Media | SniperCoders`;
  const title = titleBase.length <= 60 ? titleBase : `${label.slice(0, 39).trim()} | SniperCoders`;
  entries.push({ path, cluster, label, heading, hub, related, title, description: description(label, cluster), updatedAt: '2026-10-21', indexable: false });
};

add('/social-media-marketing-agency-bangalore','pillar','social-media-marketing-agency-bangalore','', ['/bangalore/industries','/bangalore/guides/custom-strategy-plan']);
for (const [hub, children] of Object.entries(groups)) {
  const hubPath = `/bangalore/${hubSlugs[hub]}`;
  add(hubPath,'hub',hubNames[hub],hubPath,children.map(slug => `${hubPath}/${slug}`));
  children.forEach((slug, i) => add(`${hubPath}/${slug}`, hub as Cluster, slug, hubPath,
    children.filter((_,j) => j !== i).slice(0,3).map(s => `${hubPath}/${s}`)));
}

const areaIndustry: Record<string,string[]> = {
  indiranagar: ['jewellers','salons-and-spas','fine-dining-restaurants'], koramangala: ['b2b-saas','fintech','fine-dining-restaurants'],
  'mg-road-lavelle-road': ['luxury-real-estate','hotels-and-resorts','luxury-car-dealers'], whitefield: ['b2b-saas','private-schools-colleges','hospitals'],
  'hsr-layout': ['b2b-saas','d2c-fashion-brands','fintech'], jayanagar: ['dental-clinics','jewellers','wedding-planners'],
  sadashivanagar: ['luxury-real-estate','interior-designers-architects','luxury-car-dealers'], malleshwaram: ['private-schools-colleges','hospitals','jewellers'],
  'richmond-road': ['hotels-and-resorts','hospitals','law-ca-firms'], 'cunningham-road': ['hospitals','law-ca-firms','commercial-real-estate'],
  'sarjapur-road': ['private-schools-colleges','d2c-fashion-brands','b2b-saas'], 'bellandur-outer-ring-road': ['b2b-saas','fintech','ev-clean-tech'],
  hebbal: ['hospitals','commercial-real-estate','luxury-car-dealers'], 'electronic-city': ['b2b-saas','ev-clean-tech','fintech'], 'jp-nagar': ['dental-clinics','salons-and-spas','wedding-planners'],
};
const serviceIndustry: Record<string,string[]> = {
  'instagram-marketing': ['jewellers','d2c-fashion-brands','salons-and-spas'], 'linkedin-lead-generation': ['b2b-saas','fintech','law-ca-firms'],
  'meta-ads': ['d2c-fashion-brands','fine-dining-restaurants','wedding-planners'], 'influencer-marketing': ['d2c-fashion-brands','hotels-and-resorts','salons-and-spas'],
  'reels-short-video': ['hotels-and-resorts','fine-dining-restaurants','jewellers'], 'youtube-marketing': ['b2b-saas','private-schools-colleges','luxury-car-dealers'],
  'whatsapp-marketing': ['hospitals','wedding-planners','dental-clinics'], 'social-media-management': ['commercial-real-estate','hospitals','b2b-saas'],
  'social-media-content': ['interior-designers-architects','luxury-real-estate','ev-clean-tech'], 'personal-branding-founders': ['b2b-saas','fintech','ev-clean-tech'],
};
const servicePaths = groups.service.map(slug => `/bangalore/services/${slug}`);
const guidePaths = groups.guide.map(slug => `/bangalore/guides/${slug}`);
for (const page of entries) {
  const slug = page.path.split('/').at(-1)!;
  if (page.cluster === 'pillar') page.related = ['/bangalore/areas','/bangalore/industries','/bangalore/services','/bangalore/guides',guidePaths[0],guidePaths[2]];
  if (page.cluster === 'area') page.related = [...page.related, ...(areaIndustry[slug] ?? []).map(id => `/bangalore/industries/${id}`)];
  if (page.cluster === 'industry') {
    const mappedAreas = Object.entries(areaIndustry).filter(([, ids]) => ids.includes(slug)).map(([id]) => `/bangalore/areas/${id}`).slice(0,3);
    const matchedServices = Object.entries(serviceIndustry).filter(([, ids]) => ids.includes(slug)).map(([id]) => `/bangalore/services/${id}`).slice(0,2);
    page.related = [...page.related.slice(0,2), ...mappedAreas, ...matchedServices];
  }
  if (page.cluster === 'service') {
    const matchedIndustries = (serviceIndustry[slug] ?? []).map(id => `/bangalore/industries/${id}`);
    const pair = servicePaths[(servicePaths.indexOf(page.path) + 1) % servicePaths.length];
    page.related = [...matchedIndustries, pair];
  }
  if (page.cluster === 'guide') {
    const siblings = guidePaths.filter(target => target !== page.path).slice(0,3);
    const guideIndex = guidePaths.indexOf(page.path);
    page.related = [...siblings, servicePaths[guideIndex % servicePaths.length], servicePaths[(guideIndex + 1) % servicePaths.length]];
  }
}

const copyByPath = [areaHub, industryHub, servicesHub, guidesHub, hospital, jewellers, luxuryRealEstate, pillarCopy, b2bSaas, hotelsResorts] as unknown as PageCopy[];
const brandSuffix = ' | SniperCoders';
const seoTitleFor = (copy: PageCopy) => {
  if (copy.path === '/social-media-marketing-agency-bangalore') return `Social Media Agency Bangalore${brandSuffix}`;
  if (copy.path === '/bangalore/areas') return `Social Media Marketing by Area${brandSuffix}`;
  if (copy.path === '/bangalore/industries') return `Social Media by Industry in Bangalore${brandSuffix}`;
  if (copy.path === '/bangalore/services') return `Social Media Services in Bangalore${brandSuffix}`;
  if (copy.path === '/bangalore/guides') return `Social Media Guides for Bangalore${brandSuffix}`;
  if (copy.path === '/bangalore/industries/b2b-saas') return `Social Media for B2B SaaS${brandSuffix}`;
  if (copy.path === '/bangalore/industries/hotels-and-resorts') return `Social Media for Hotels & Resorts${brandSuffix}`;
  const concise = copy.title.replace(/ in Bangalore$/, '');
  if (concise.length + brandSuffix.length <= 60) return `${concise}${brandSuffix}`;
  const shortened = concise.slice(0, 60 - brandSuffix.length).replace(/\s+\S*$/, '');
  return `${shortened}${brandSuffix}`;
};
for (const copy of copyByPath) {
  const page = entries.find(item => item.path === copy.path);
  if (!page) continue;
  page.copy = copy;
  page.heading = copy.h1;
  page.label = copy.title;
  page.description = copy.description;
  page.title = seoTitleFor(copy);
}

// These pages have supplied editorial copy and have passed the current automated gate.
// Keep the remaining routes in noindex until their own copy passes the same checks.
const approvedPages = new Set([
  '/social-media-marketing-agency-bangalore',
  '/bangalore/areas',
  '/bangalore/industries',
  '/bangalore/services',
  '/bangalore/guides',
  '/bangalore/industries/hospitals',
  '/bangalore/industries/jewellers',
  '/bangalore/industries/luxury-real-estate',
  '/bangalore/industries/b2b-saas',
  '/bangalore/industries/hotels-and-resorts',
]);
for (const page of entries) page.indexable = approvedPages.has(page.path);

export const seoPages = entries;
export const seoPageByPath = new Map(seoPages.map(page => [page.path, page]));
export const seoPageIndex: PageEntry[] = seoPages.map(({ path, cluster, title, description, updatedAt, indexable }) => ({ path, cluster, title, description, updatedAt, indexable }));
export const hubTitles = hubNames;
