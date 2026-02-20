

// // app/layout.tsx
// import './globals.css';
// import { Poppins } from 'next/font/google';
// import { ThemeProvider } from '../context/ThemeContext';
// import Navbar from '../components/Navbar';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import type { Metadata } from "next";
// import Script from 'next/script';

// // Load the Poppins font
// const poppins = Poppins({
// subsets: ['latin'],
// weight: ['400', '600', '700'],
// display: 'swap',
// });

// export const metadata: Metadata = {
// metadataBase: new URL(
// process.env.NODE_ENV === 'production'
// ? 'https://www.snipercoders.com' // ✅ IMPORTANT SEO FIX (www consistency)
// : 'http://localhost:3000'
// ),

// title: {
// default: 'SniperCoders - Best Software and IT Company in India | Website Development & App Development',
// template: '%s | SniperCoders - Best IT Company in India'
// },

// description:
// 'SniperCoders is the best software and IT company in India, delivering best website development near me, mobile app development, eCommerce solutions, and digital marketing services in Bangalore. 30+ projects delivered with 100% customer satisfaction.',

// keywords: [
// 'best software company in India',
// 'best IT company in India',
// 'best website development company near me',
// 'best website development company in India',
// 'website development near me',
// 'custom coded websites',
// 'business websites near me',
// 'eCommerce website development near me',
// 'best app development agency near me',
// 'mobile app development',
// 'digital marketing services',
// 'SEO services',
// 'Google Ads',
// 'Meta Ads',
// 'SniperCoders',
// 'IT company Bangalore',
// ],

// authors: [{ name: 'SniperCoders', url: 'https://www.snipercoders.com' }],
// creator: 'SniperCoders',
// publisher: 'SniperCoders',

// openGraph: {
// type: 'website',
// locale: 'en_IN',
// url: 'https://www.snipercoders.com',
// title: 'SniperCoders - Best Website Development Company Near Me in India',
// description:
// 'Best software and IT company in India offering custom coded websites, business websites, mobile app development, and digital marketing services.',
// siteName: 'SniperCoders',
// images: [
// {
// url: '/images/logo.png',
// width: 1200,
// height: 630,
// alt: 'SniperCoders - Best Software Company in India',
// },
// ],
// },

// twitter: {
// card: 'summary_large_image',
// title: 'SniperCoders - Best IT Company in India',
// description:
// 'Best website development, app development, and digital marketing services in Bangalore',
// images: ['/images/logo.png'],
// creator: '@snipercoders',
// },

// robots: {
// index: true,
// follow: true,
// googleBot: {
// index: true,
// follow: true,
// 'max-video-preview': -1,
// 'max-image-preview': 'large',
// 'max-snippet': -1,
// },
// },

// // 🔴 VERY IMPORTANT — PUT YOUR REAL GOOGLE CODE HERE
// verification: {
// google: 'PASTE_YOUR_REAL_GOOGLE_CODE_HERE',
// },

// category: 'technology',

// alternates: {
// canonical: 'https://www.snipercoders.com',
// },

// other: {
// 'geo.region': 'IN-KA',
// 'geo.placename': 'Bangalore',
// 'geo.position': '12.9716;77.5946',
// ICBM: '12.9716, 77.5946',
// },
// };

// export default function RootLayout({
// children,
// }: {
// children: React.ReactNode;
// }) {
// return ( <html lang="en"> <head> <link rel="icon" href="/images/logo_sniper.ico?v=2" sizes="any" /> <link rel="shortcut icon" href="/images/logo_sniper.ico?v=2" /> <link rel="apple-touch-icon" href="/images/logo_sniper.ico?v=2" />

// ```
//     <link rel="preconnect" href="https://fonts.googleapis.com" />
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

//     <meta name="theme-color" content="#0a0a2a" />
//     <meta name="mobile-web-app-capable" content="yes" />
//     <meta name="apple-mobile-web-app-capable" content="yes" />
//     <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

//     {/* ================= LOCAL BUSINESS SCHEMA ================= */}
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify({
//           '@context': 'https://schema.org',
//           '@type': 'LocalBusiness',
//           '@id': 'https://www.snipercoders.com',
//           name: 'SniperCoders',
//           alternateName: 'SniperCoders Global Technologies',
//           url: 'https://www.snipercoders.com',
//           telephone: '+91-60062-54188',
//           email: 'info@snipercoders.com',
//           priceRange: '₹₹',
//           image: 'https://www.snipercoders.com/images/logo.png',
//           logo: 'https://www.snipercoders.com/images/logo.png',
//           address: {
//             '@type': 'PostalAddress',
//             addressLocality: 'Bangalore',
//             addressRegion: 'Karnataka',
//             postalCode: '560001',
//             addressCountry: 'IN',
//           },
//           geo: {
//             '@type': 'GeoCoordinates',
//             latitude: '12.9716',
//             longitude: '77.5946',
//           },
//         }),
//       }}
//     />
//   </head>

//   <body className={poppins.className}>
//     {/* META PIXEL */}
//     <Script id="meta-pixel" strategy="afterInteractive">
//       {`
//         !function(f,b,e,v,n,t,s)
//         {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//         n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//         if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//         n.queue=[];t=b.createElement(e);t.async=!0;
//         t.src=v;s=b.getElementsByTagName(e)[0];
//         s.parentNode.insertBefore(t,s)}
//         (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
//         fbq('init', '1401332194988106');
//         fbq('track', 'PageView');
//       `}
//     </Script>

//     <Script
//       src="https://t.contentsquare.net/uxa/3a02599aa7215.js"
//       strategy="afterInteractive"
//     />

//     <ThemeProvider>
//       <Navbar />
//       <main className="pt-20">{children}</main>

//       {/* WhatsApp Button */}
//       <a
//         href="https://wa.me/916006254188"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
//       >
//         WhatsApp
//       </a>

//       <ToastContainer theme="dark" />
//     </ThemeProvider>
//   </body>
// </html>

// );
// }









// FILE PATH: app/layout.tsx

import './globals.css';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from "next";
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://www.snipercoders.com'
      : 'http://localhost:3000'
  ),

  title: {
    default: 'SniperCoders - Best Software and IT Company in India | Website Development & App Development',
    template: '%s | SniperCoders - Best IT Company in India',
  },

  description:
    'SniperCoders is the best software and IT company in India, delivering website development, mobile app development, eCommerce solutions, and digital marketing services across Bangalore, Delhi, Mumbai, Hyderabad, Pune, Chennai, Jammu, Kashmir and Chandigarh. 30+ projects delivered with 100% customer satisfaction.',

  keywords: [
    'best software company in India',
    'best IT company in India',
    'best software agency in Bangalore',
    'best software agency in Delhi',
    'best software agency in Mumbai',
    'best software agency in Hyderabad',
    'best software agency in Pune',
    'best software agency in Chennai',
    'best software agency in Chandigarh',
    'best software agency in Jammu',
    'best software agency in Kashmir',
    'best software agency in Udhampur',
    'best website development company near me',
    'best website development company in India',
    'website development near me',
    'custom coded websites',
    'business websites near me',
    'eCommerce website development near me',
    'best app development agency near me',
    'mobile app development',
    'digital marketing services',
    'SEO services',
    'Google Ads',
    'Meta Ads',
    'SniperCoders',
    'IT company Bangalore',
  ],

  authors: [{ name: 'SniperCoders', url: 'https://www.snipercoders.com' }],
  creator: 'SniperCoders',
  publisher: 'SniperCoders',

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.snipercoders.com',
    title: 'SniperCoders - Best Software Agency in India | Website, App & Digital Marketing',
    description:
      'Best software and IT company in India — custom websites, mobile apps, and digital marketing across Bangalore, Delhi, Mumbai, Hyderabad, Pune, Chennai, Jammu & Kashmir.',
    siteName: 'SniperCoders',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'SniperCoders - Best Software Company in India',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SniperCoders - Best IT Company in India',
    description:
      'Best website development, app development, and digital marketing services across India',
    images: ['/images/logo.png'],
    creator: '@snipercoders',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ✅ FIXED — real verification code extracted from your HTML file
  verification: {
    google: '9844f48440cf8bec',
  },

  category: 'technology',

  alternates: {
    canonical: 'https://www.snipercoders.com',
  },

  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bangalore',
    'geo.position': '12.9716;77.5946',
    ICBM: '12.9716, 77.5946',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ⚠️  IMPORTANT — Replace BOTH instances of YOUR_PRIMARY_PHONE below
  // with your ONE real primary number in format: 91XXXXXXXXXX
  // Your GBP shows 07006377796 → international format = 917006377796
  // Decide which number is primary and use it EVERYWHERE

  const PRIMARY_PHONE_DISPLAY = '+91-70063-77796'       // shown in schema
  const PRIMARY_PHONE_WA      = '917006377796'           // used in WhatsApp URL

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo_sniper.ico?v=2" sizes="any" />
        <link rel="shortcut icon" href="/images/logo_sniper.ico?v=2" />
        <link rel="apple-touch-icon" href="/images/logo_sniper.ico?v=2" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <meta name="theme-color" content="#0a0a2a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* ── LOCAL BUSINESS SCHEMA ─────────────────────────────
            Tells Google exactly what your business is.
            ⚠️  Once your office address is confirmed, add:
                streetAddress, postalCode fields below.
        ──────────────────────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': 'https://www.snipercoders.com',
              name: 'SniperCoders',
              alternateName: 'SniperCoders Global Technologies',
              url: 'https://www.snipercoders.com',
              telephone: PRIMARY_PHONE_DISPLAY,
              email: 'info@snipercoders.com',
              priceRange: '₹₹',
              image: 'https://www.snipercoders.com/images/logo.png',
              logo: 'https://www.snipercoders.com/images/logo.png',
              description: 'Best software agency in India offering website development, mobile app development, custom software and digital marketing services.',
              foundingDate: '2025',
              areaServed: [
                'Bangalore', 'Delhi', 'Mumbai', 'Hyderabad',
                'Pune', 'Chennai', 'Chandigarh', 'Jammu',
                'Kashmir', 'Udhampur', 'India'
              ],
              serviceType: [
                'Website Development',
                'Mobile App Development',
                'Custom Software Development',
                'Digital Marketing',
                'SEO Services',
                'IT Consulting',
                'UI/UX Design',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bangalore',
                addressRegion: 'Karnataka',
                addressCountry: 'IN',
                // ⚠️ Add postalCode and streetAddress once office confirmed
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '12.9716',
                longitude: '77.5946',
              },
              sameAs: [
                'https://www.linkedin.com/company/snipercoders',
                'https://www.instagram.com/snipercoders',
                'https://www.facebook.com/snipercoders',
                'https://twitter.com/snipercoders',
              ],
              hasMap: 'https://maps.google.com/?q=SniperCoders+Bangalore',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: PRIMARY_PHONE_DISPLAY,
                contactType: 'customer service',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi', 'Kannada'],
              },
            }),
          }}
        />

        {/* ── WEBSITE SCHEMA — enables Google Sitelinks search ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://www.snipercoders.com',
              name: 'SniperCoders',
              description: 'Best Software Agency in India',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.snipercoders.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>

      <body className={poppins.className}>
        {/* META PIXEL */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1401332194988106');
            fbq('track', 'PageView');
          `}
        </Script>

        <Script
          src="https://t.contentsquare.net/uxa/3a02599aa7215.js"
          strategy="afterInteractive"
        />

        <ThemeProvider>
          <Navbar />
          <main className="pt-20">{children}</main>

          {/* ✅ FIXED WhatsApp button — phone matches GBP number */}
          <a
            href={`https://wa.me/${PRIMARY_PHONE_WA}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          >
            WhatsApp Chat
          </a>

          <ToastContainer theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}