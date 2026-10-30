// app/pricing/social-media-marketing/page.tsx
import PricingExperience from '../_components/PricingExperience'
import { getPricingMetadata, pricingPages } from '../pricing-data'
import type { Metadata } from 'next'

const page = pricingPages['social-media-marketing']

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  ...getPricingMetadata(page),
  title: { absolute: 'Social Media Marketing Pricing | SniperCoders' },
  description: 'Compare social media management plans with monthly deliverables, content support, campaign options, and India or international pricing. Ad spend is separate.',
  keywords: [
    'social media marketing pricing',
    'social media management cost',
    'Instagram marketing packages',
    'LinkedIn growth services',
    'social media agency pricing',
    'SniperCoders pricing',
    'social media management pricing in India',
    'social media marketing packages for small businesses',
    'what is included in social media management',
    'does social media marketing include ad spend',
    'social media marketing cost in Bangalore',
    'social media marketing packages in Bangalore',
  ],
  openGraph: {
    title: 'Social Media Marketing Pricing | SniperCoders',
    description: 'Compare monthly social media management and paid ads plans with India and international pricing. Ad spend is separate.',
    url: 'https://www.snipercoders.in/pricing/social-media-marketing',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function SocialMediaMarketingPricingPage() {
  return <PricingExperience page={page} />
}
