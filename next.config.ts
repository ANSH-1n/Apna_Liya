//app/next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },

  async redirects() {
    return [
      // ✅ Redirect non-www → www (fixes canonical issues in GSC)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'snipercoders.in' }],
        destination: 'https://www.snipercoders.in/:path*',
        permanent: true,
      },
      // ✅ Fix 404 FAILED error in GSC
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      // ✅ Fix old Testimonials.html 404
      {
        source: '/Testimonials.html',
        destination: '/showcase',
        permanent: true,
      },
      // ✅ Consolidate thin/low-volume location pages into the
      // locations hub page instead of leaving them as standalone
      // near-duplicate pages (avoids doorway-page pattern in GSC)
      {
        source: '/services/best-software-agency-jammu',
        destination: '/services/locations',
        permanent: true,
      },
      {
        source: '/services/best-software-agency-kashmir',
        destination: '/services/locations',
        permanent: true,
      },
      {
        source: '/services/best-software-agency-katra',
        destination: '/services/locations',
        permanent: true,
      },
      {
        source: '/services/best-software-agency-udhampur',
        destination: '/services/locations',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;