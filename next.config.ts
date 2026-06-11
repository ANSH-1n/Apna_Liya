

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
    ];
  },
};

export default nextConfig;