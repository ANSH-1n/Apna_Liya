import type { MetadataRoute } from 'next';
import { seoPageIndex } from '@/lib/seo-cluster';

export type Cluster = 'home' | 'pillar' | 'hub' | 'area' | 'industry' | 'service' | 'guide' | 'static';
export interface PageEntry {
  path: string;
  cluster: Cluster;
  title: string;
  description: string;
  updatedAt: string;
  indexable: boolean;
  priority?: number;
}

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.snipercoders.in').replace(/\/$/, '');

// Only verified, live pages are listed. Proposed Bangalore cluster pages stay out of
// the sitemap until their evidence and unique-content quality gates pass.
export const pages: PageEntry[] = [
  { path: '/', cluster: 'home', title: 'Video Editing & Social Media Marketing Agency | SniperCoders', description: 'SniperCoders helps brands with short-form video editing, social media management and ad creatives. Explore our services and request a custom quote.', updatedAt: '2026-10-21', indexable: true },
  { path: '/about', cluster: 'static', title: 'About SniperCoders', description: 'Meet SniperCoders, a creative growth agency helping brands with social media, video and web services.', updatedAt: '2026-10-21', indexable: true },
  { path: '/services', cluster: 'static', title: 'Digital Services | SniperCoders', description: 'Explore social media, video, web and digital services from SniperCoders.', updatedAt: '2026-10-21', indexable: true },
  { path: '/services/locations', cluster: 'static', title: 'Service Locations | SniperCoders', description: 'Learn about the locations served by SniperCoders and discuss your project with the team.', updatedAt: '2026-10-21', indexable: true },
  { path: '/services/app-development', cluster: 'static', title: 'App Development | SniperCoders', description: 'Explore app development services from SniperCoders and discuss your product requirements.', updatedAt: '2026-10-21', indexable: true },
  { path: '/services/custom-software-development', cluster: 'static', title: 'Custom Software Development | SniperCoders', description: 'Explore custom software development services and discuss your project requirements with SniperCoders.', updatedAt: '2026-10-21', indexable: true },
  { path: '/services/digital-marketing', cluster: 'static', title: 'Digital Marketing | SniperCoders', description: 'Explore digital marketing and creative services from SniperCoders.', updatedAt: '2026-10-21', indexable: true },
  { path: '/services/it-consulting', cluster: 'static', title: 'IT Consulting | SniperCoders', description: 'Discuss technology planning and IT consulting requirements with SniperCoders.', updatedAt: '2026-10-21', indexable: true },
  { path: '/services/mobile-development', cluster: 'static', title: 'Mobile Development | SniperCoders', description: 'Explore mobile development services from SniperCoders.', updatedAt: '2026-10-21', indexable: true },
  { path: '/services/web-development', cluster: 'static', title: 'Web Development | SniperCoders', description: 'Explore website design and development services from SniperCoders.', updatedAt: '2026-10-21', indexable: true },
  { path: '/pricing/video-editing', cluster: 'static', title: 'Video Editing Pricing | SniperCoders', description: 'Review video editing packages from SniperCoders and request a quote for your content needs.', updatedAt: '2026-10-21', indexable: true },
  { path: '/pricing/social-media-marketing', cluster: 'static', title: 'Social Media Marketing Pricing | SniperCoders', description: 'Explore social media marketing packages and discuss the right scope for your brand.', updatedAt: '2026-10-21', indexable: true },
  { path: '/pricing/web-development', cluster: 'static', title: 'Web Development Pricing | SniperCoders', description: 'Explore website development packages and request a scope-specific quote.', updatedAt: '2026-10-21', indexable: true },
  { path: '/contact', cluster: 'static', title: 'Contact SniperCoders', description: 'Contact SniperCoders to discuss social media marketing, video editing, web development or a digital project.', updatedAt: '2026-10-21', indexable: true },
  { path: '/showcase', cluster: 'static', title: 'Creative Work Showcase | SniperCoders', description: 'Browse selected creative and digital work from SniperCoders.', updatedAt: '2026-10-21', indexable: true },
  { path: '/showcase/websites', cluster: 'static', title: 'Website Showcase | SniperCoders', description: 'Browse website work featured by SniperCoders.', updatedAt: '2026-10-21', indexable: true },
  { path: '/showcase/video-editing', cluster: 'static', title: 'Video Editing Showcase | SniperCoders', description: 'Browse video editing work featured by SniperCoders.', updatedAt: '2026-10-21', indexable: true },
  { path: '/agents', cluster: 'static', title: 'AI Agents | SniperCoders', description: 'Explore AI agent solutions from SniperCoders.', updatedAt: '2026-10-21', indexable: true },
  { path: '/faqs', cluster: 'static', title: 'Frequently Asked Questions | SniperCoders', description: 'Answers to common questions about SniperCoders services and project engagement.', updatedAt: '2026-10-21', indexable: true },
  { path: '/privacy', cluster: 'static', title: 'Privacy Policy | SniperCoders', description: 'Read the SniperCoders privacy policy and learn how information is handled.', updatedAt: '2026-10-21', indexable: true },
  { path: '/terms', cluster: 'static', title: 'Terms of Service | SniperCoders', description: 'Read the terms that apply to SniperCoders services and website use.', updatedAt: '2026-10-21', indexable: true },
  { path: '/refund', cluster: 'static', title: 'Refund Policy | SniperCoders', description: 'Review the SniperCoders refund policy.', updatedAt: '2026-10-21', indexable: true },
  ...seoPageIndex,
];

export const indexablePages = pages.filter(page => page.indexable);
export type Sitemap = MetadataRoute.Sitemap;
