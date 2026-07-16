// app/pricing/social-media-marketing/page.tsx
import PricingExperience from '../_components/PricingExperience'
import { getPricingMetadata, pricingPages } from '../pricing-data'
import type { Metadata } from 'next'

const page = pricingPages['social-media-marketing']

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  ...getPricingMetadata(page),
  title: 'Social Media Marketing Pricing | SniperCoders',
  description: 'Transparent pricing for social media marketing services including content creation, posting, engagement, and analytics. Packages start at $500/month.',
  keywords: [
    'social media marketing pricing',
    'social media management cost',
    'Instagram marketing packages',
    'LinkedIn growth services',
    'social media agency pricing',
    'SniperCoders pricing',
  ],
  openGraph: {
    title: 'Social Media Marketing Pricing | SniperCoders',
    description: 'Transparent pricing for social media marketing services including content creation, posting, engagement, and analytics.',
    url: 'https://www.snipercoders.in/pricing/social-media-marketing',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function SocialMediaMarketingPricingPage() {
  return <PricingExperience page={page} />
}