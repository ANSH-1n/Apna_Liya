// //app/pricing/web-development/page.tsx

// import PricingExperience from '../_components/PricingExperience'
// import { getPricingMetadata, pricingPages } from '../pricing-data'

// const page = pricingPages['web-development']

// export const metadata = getPricingMetadata(page)

// export default function WebDevelopmentPricingPage() {
//   return <PricingExperience page={page} />
// }










// app/pricing/web-development/page.tsx
import PricingExperience from '../_components/PricingExperience'
import { getPricingMetadata, pricingPages } from '../pricing-data'
import type { Metadata } from 'next'

const page = pricingPages['web-development']

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  ...getPricingMetadata(page),
  title: 'Web Development Pricing | Custom Website Development | SniperCoders',
  description: 'Transparent pricing for custom web development services including business websites, e-commerce, landing pages, and custom software. Packages start at $500.',
  keywords: [
    'web development pricing',
    'website development cost',
    'custom website pricing',
    'e-commerce development cost',
    'landing page pricing',
    'custom software development cost',
    'SniperCoders pricing',
    'web development agency India',
    'business website cost',
  ],
  openGraph: {
    title: 'Web Development Pricing | SniperCoders',
    description: 'Transparent pricing for custom web development services including business websites, e-commerce, and landing pages.',
    url: 'https://www.snipercoders.in/pricing/web-development',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.snipercoders.in/pricing/web-development',
  },
}

export default function WebDevelopmentPricingPage() {
  return <PricingExperience page={page} />
}