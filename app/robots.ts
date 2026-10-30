// app/robots.ts
import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/pages'

export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/snipercoders/admin/',
        '/*?utm_',
        '/*?fbclid=',
        '/*?gclid=',
        '/*?ref=',
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
