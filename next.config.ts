
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   eslint: {
//     ignoreDuringBuilds: false,
//   },
//   typescript: {
//     ignoreBuildErrors: false,
//   },
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'placehold.co',
//       },
//     ],
//   },
// };

// export default nextConfig;






// FILE PATH: next.config.ts

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

  // ✅ www → non-www redirect
  // Ensures Google only ever indexes one version of your site
  // Prevents duplicate content penalty
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.snipercoders.com' }],
        destination: 'https://snipercoders.com/:path*',
        permanent: true, // 301 redirect — tells Google non-www is the canonical
      },
    ]
  },
};

export default nextConfig;