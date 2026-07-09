//app/sitemap.ts

import { MetadataRoute } from 'next'

const baseUrl = 'https://www.snipercoders.in'

const corePages = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/showcase', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/showcase/websites', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/showcase/video-editing', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/agents', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/faqs', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/refund', changeFrequency: 'yearly', priority: 0.3 },
] as const

const servicePages = [
  'app-development',
  'custom-software-development',
  'digital-marketing',
  'it-consulting',
  'mobile-development',
  'web-development',
] as const

const pricingPages = [
  'video-editing',
  'social-media-marketing',
  'web-development',
] as const

const locationPages = [
  'best-software-agency-bangalore',
  'best-software-agency-chandigarh',
  'best-software-agency-chennai',
  'best-software-agency-delhi',
  'best-software-agency-hyderabad',
  'best-software-agency-jammu',
  'best-software-agency-kashmir',
  'best-software-agency-katra',
  'best-software-agency-mumbai',
  'best-software-agency-pune',
  'best-software-agency-udhampur',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    ...corePages.map(page => ({
      url: `${baseUrl}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...servicePages.map(slug => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...pricingPages.map(slug => ({
      url: `${baseUrl}/pricing/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...locationPages.map(slug => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}
