// FILE PATH: app/sitemap.ts

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // ✅ FIX 1: Changed to www — was causing canonical issues in GSC
  const baseUrl = 'https://www.snipercoders.in'

  // ✅ FIX 2: Added katra (was missing)
  const locationPages = [
    'best-software-agency-bangalore',
    'best-software-agency-udhampur',
    'best-software-agency-jammu',
    'best-software-agency-kashmir',
    'best-software-agency-delhi',
    'best-software-agency-mumbai',
    'best-software-agency-hyderabad',
    'best-software-agency-pune',
    'best-software-agency-chennai',
    'best-software-agency-chandigarh',
    'best-software-agency-katra', // ✅ Added
  ]

  const servicePages = [
    'web-development',
    'app-development',
    'mobile-development',
    'custom-software-development',
    'digital-marketing',
    'it-consulting',
  ]

  return [
    // Core pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/showcase`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/showcase/websites`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/showcase/video-editing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/agents`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    // ✅ FIX 3: Removed /index.html and /Testimonials.html — were causing 404 errors in GSC

    // Service sub-pages
    ...servicePages.map(slug => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),

    // Location SEO pages
    ...locationPages.map(slug => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}
