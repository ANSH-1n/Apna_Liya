// FILE PATH: app/robots.ts
// Next.js auto-generates /robots.txt from this file

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all search engines
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/images/',
          '/videos/',
          '/api/',
          '/snipercoders/admin/',
          '/_next/',
        ],
      },
      // ⭐ CRITICAL: Explicitly allow AI crawlers
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
    ],
    sitemap: 'https://www.snipercoders.in/sitemap.xml',
  }
}