// FILE PATH: app/robots.ts
// Next.js auto-generates /robots.txt from this file

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // ✅ FIX: Block images folder — Google was trying to index logo.ico as a page
        disallow: [
          '/images/',
          '/videos/',
          '/api/',
          '/snipercoders/admin/',
          '/_next/',
        ],
      },
    ],
    // ✅ Points to www sitemap
    sitemap: 'https://www.snipercoders.in/sitemap.xml',
  }
}
