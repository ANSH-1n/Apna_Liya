// FILE PATH: app/services/best-software-agency-chandigarh/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Software Agency in Chandigarh | SniperCoders',
  description: 'SniperCoders is the best software agency in Chandigarh Tricity. Website development, mobile apps & Punjabi SEO digital marketing for Chandigarh, Mohali & Panchkula businesses.',
  keywords: [
    'best software agency in chandigarh',
    'best IT company in chandigarh',
    'web development company chandigarh',
    'mobile app development chandigarh',
    'digital marketing agency chandigarh mohali',
    'software company chandigarh tricity',
    'real estate website chandigarh',
    'punjabi seo digital marketing chandigarh',
    'website development panchkula mohali zirakpur',
  ],
  alternates: {
    canonical: 'https://snipercoders.com/services/best-software-agency-chandigarh',
  },
  openGraph: {
    title: 'Best Software Agency in Chandigarh | SniperCoders',
    description: 'Websites, apps & Punjabi SEO for Chandigarh, Mohali & Panchkula businesses. Real estate, hospitality, education & all Tricity industries.',
    url: 'https://snipercoders.com/services/best-software-agency-chandigarh',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Agency in Chandigarh | SniperCoders',
    description: 'Websites, apps & digital marketing for Chandigarh Tricity businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}