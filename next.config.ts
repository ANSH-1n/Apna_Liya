

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

//   // ✅ FIX: Redirect non-www → www to resolve canonical issues in GSC
//   async redirects() {
//     return [
//       {
//         source: '/:path*',
//         has: [{ type: 'host', value: 'snipercoders.com' }],
//         destination: 'https://www.snipercoders.com/:path*',
//         permanent: true, // 301 redirect — best for SEO
//       },
//     ];
//   },
// };

// export default nextConfig;









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
        has: [{ type: 'host', value: 'snipercoders.com' }],
        destination: 'https://www.snipercoders.com/:path*',
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