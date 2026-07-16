// FILE PATH: app/services/locations/page.tsx

import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Software Agency Near You | SniperCoders Locations',
  description:
    'SniperCoders works with founders and businesses across India — from Bangalore and Delhi to Chandigarh, Chennai, Hyderabad, Mumbai, Pune, and the Jammu & Kashmir region. Find the software, web, and growth team nearest you.',
}

type LocationEntry = {
  city: string
  slug: string
  blurb: string
}

const locations: LocationEntry[] = [
  {
    city: 'Bangalore',
    slug: 'best-software-agency-bangalore',
    blurb:
      "India's startup capital moves fast — our Bangalore clients are mostly SaaS founders and early-stage teams who need a web presence and product build that keeps pace with funding rounds and investor demos.",
  },
  {
    city: 'Chandigarh',
    slug: 'best-software-agency-chandigarh',
    blurb:
      'A growing hub for regional businesses and D2C brands expanding out of Punjab and Haryana — we help Chandigarh-based teams get a professional website and digital presence without needing an in-house dev team.',
  },
  {
    city: 'Chennai',
    slug: 'best-software-agency-chennai',
    blurb:
      "Chennai's mix of manufacturing, IT services, and export businesses means our clients here usually want a site that reads as credible to international buyers — clean, fast, and built to convert enquiries.",
  },
  {
    city: 'Delhi',
    slug: 'best-software-agency-delhi',
    blurb:
      'From agencies to consultancies to retail brands, our Delhi NCR clients span nearly every industry — we typically build custom software and websites that need to scale across multiple city offices.',
  },
  {
    city: 'Hyderabad',
    slug: 'best-software-agency-hyderabad',
    blurb:
      "Hyderabad's tech and pharma corridor brings us clients who need enterprise-grade reliability — custom software development and IT consulting for teams that can't afford downtime.",
  },
  {
    city: 'Jammu',
    slug: 'best-software-agency-jammu',
    blurb:
      'We work with tourism operators, local retailers, and service businesses across Jammu who are getting online for the first time — simple, mobile-first websites built to bring in local enquiries.',
  },
  {
    city: 'Kashmir',
    slug: 'best-software-agency-kashmir',
    blurb:
      "Handicraft exporters, tourism businesses, and local brands across the Kashmir valley come to us to build a digital storefront that reaches buyers well beyond the region's borders.",
  },
  {
    city: 'Katra',
    slug: 'best-software-agency-katra',
    blurb:
      'As the base for Vaishno Devi pilgrimage traffic, Katra businesses — hotels, travel operators, local services — need booking-friendly, high-traffic-ready websites, which is where most of our work here goes.',
  },
  {
    city: 'Mumbai',
    slug: 'best-software-agency-mumbai',
    blurb:
      "Mumbai clients range from media and entertainment brands to fintech startups — fast-moving industries where our mobile app development and digital marketing work gets used the most.",
  },
  {
    city: 'Pune',
    slug: 'best-software-agency-pune',
    blurb:
      "Pune's engineering and IT services base means our clients here often come in already technical — they want a development partner for custom software, not a page-builder template.",
  },
  {
    city: 'Udhampur',
    slug: 'best-software-agency-udhampur',
    blurb:
      'A regional trade and logistics hub where we help local businesses build their first real online presence — websites and basic digital marketing to reach customers outside word-of-mouth.',
  },
]

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-400">
            SniperCoders
          </span>{' '}
          — Software &amp; Growth Agency Across India
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-14 max-w-3xl">
          We work remotely with clients across India, but our approach differs depending on the
          market. Below is where we&apos;re most active right now, and what kind of work we
          typically do in each region.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/services/${loc.slug}`}
              className="block p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-300/40 transition-all"
            >
              <h2 className="text-xl font-semibold text-cyan-300 mb-2">
                Software Agency in {loc.city}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">{loc.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}