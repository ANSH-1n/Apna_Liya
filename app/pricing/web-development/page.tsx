//app/pricing/web-development/page.tsx

import PricingExperience from '../_components/PricingExperience'
import { getPricingMetadata, pricingPages } from '../pricing-data'

const page = pricingPages['web-development']

export const metadata = getPricingMetadata(page)

export default function WebDevelopmentPricingPage() {
  return <PricingExperience page={page} />
}
