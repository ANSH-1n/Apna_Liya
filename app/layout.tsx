

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
//   subsets: ['latin'],
//   weight: ['400', '600', '700'],
//   display: 'swap',
// });

// export const metadata: Metadata = {
//   metadataBase: new URL(
//     process.env.NODE_ENV === 'production'
//       ? 'https://snipercoders.com'
//       : 'http://localhost:3000'
//   ),
//   title: {
//     default: 'SniperCoders - Best Software and IT Company in India | Website Development & App Development',
//     template: '%s | SniperCoders - Best IT Company in India'
//   },
//   description: 'SniperCoders is the best software and IT company in India, delivering best website development near me, mobile app development, eCommerce solutions, and digital marketing services in Bangalore. 30+ projects delivered with 100% customer satisfaction.',
//   keywords: [
//     'best software company in India',
//     'best IT company in India',
//     'best website development company near me',
//     'best website development company in India',
//     'website development near me',
//     'custom coded websites',
//     'business websites near me',
//     'eCommerce website development near me',
//     'best app development agency near me',
//     'best app development agency in India',
//     'mobile app development',
//     'digital marketing services',
//     'SEO services',
//     'Google Ads',
//     'Meta Ads',
//     'social media marketing',
//     'best content creation company near me',
//     'video editing company near me',
//     'IT company Bangalore',
//     'software development Bangalore',
//     'custom software development',
//     'SniperCoders',
//     'web design company',
//     'IT consulting services'
//   ],
//   authors: [{ name: 'SniperCoders', url: 'https://snipercoders.com' }],
//   creator: 'SniperCoders',
//   publisher: 'SniperCoders',
  
//   // Open Graph metadata for social sharing
//   openGraph: {
//     type: 'website',
//     locale: 'en_IN',
//     url: 'https://snipercoders.com',
//     title: 'SniperCoders - Best Website Development Company Near Me in India',
//     description: 'Best software and IT company in India offering custom coded websites, business websites, mobile app development, and digital marketing services. 30+ projects delivered.',
//     siteName: 'SniperCoders',
//     images: [
//       {
//         url: '/images/logo.png',
//         width: 1200,
//         height: 630,
//         alt: 'SniperCoders - Best Software Company in India',
//       },
//     ],
//   },

//   // Twitter Card metadata
//   twitter: {
//     card: 'summary_large_image',
//     title: 'SniperCoders - Best IT Company in India',
//     description: 'Best website development, app development, and digital marketing services in Bangalore',
//     images: ['/images/logo.png'],
//     creator: '@snipercoders',
//   },

//   // Additional metadata
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },

//   // Verification codes
//   verification: {
//     google: 'your-google-verification-code', // Replace with actual code
//     // yandex: 'your-yandex-verification-code',
//     // bing: 'your-bing-verification-code',
//   },

//   // Geographic targeting
//   category: 'technology',
  
//   // Alternates for language versions
//   alternates: {
//     canonical: 'https://snipercoders.com',
//   },

//   // Other metadata
//   other: {
//     'geo.region': 'IN-KA',
//     'geo.placename': 'Bangalore',
//     'geo.position': '12.9716;77.5946',
//     'ICBM': '12.9716, 77.5946',
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Favicon */}
//         <link rel="icon" href="/images/logo_sniper.ico?v=2" sizes="any" />
//         <link rel="shortcut icon" href="/images/logo_sniper.ico?v=2" />
//         <link rel="apple-touch-icon" href="/images/logo_sniper.ico?v=2" />
        
//         {/* Preconnect to external domains for performance */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
//         {/* Additional meta tags */}
//         <meta name="theme-color" content="#0a0a2a" />
//         <meta name="mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
//         {/* Structured Data for Local Business */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               '@context': 'https://schema.org',
//               '@type': 'LocalBusiness',
//               '@id': 'https://snipercoders.com',
//               name: 'SniperCoders',
//               alternateName: 'SniperCoders Global Technologies',
//               description: 'Best Software and IT Company in India - Website Development, App Development, and Digital Marketing Services',
//               url: 'https://snipercoders.com',
//               telephone: '+91-60062-54188',
//               email: 'info@snipercoders.com',
//               priceRange: '₹₹',
//               image: 'https://snipercoders.com/images/logo.png',
//               logo: 'https://snipercoders.com/images/logo.png',
//               address: {
//                 '@type': 'PostalAddress',
//                 addressLocality: 'Bangalore',
//                 addressRegion: 'Karnataka',
//                 postalCode: '560001',
//                 addressCountry: 'IN',
//               },
//               geo: {
//                 '@type': 'GeoCoordinates',
//                 latitude: '12.9716',
//                 longitude: '77.5946',
//               },
//               openingHoursSpecification: {
//                 '@type': 'OpeningHoursSpecification',
//                 dayOfWeek: [
//                   'Monday',
//                   'Tuesday',
//                   'Wednesday',
//                   'Thursday',
//                   'Friday',
//                   'Saturday',
//                 ],
//                 opens: '09:00',
//                 closes: '18:00',
//               },
//               sameAs: [
//                 'https://facebook.com/snipercoders',
//                 'https://twitter.com/snipercoders',
//                 'https://linkedin.com/company/snipercoders',
//                 'https://instagram.com/snipercoders',
//               ],
//               aggregateRating: {
//                 '@type': 'AggregateRating',
//                 ratingValue: '5.0',
//                 reviewCount: '30',
//                 bestRating: '5',
//                 worstRating: '1',
//               },
//               areaServed: {
//                 '@type': 'Country',
//                 name: 'India',
//               },
//               hasOfferCatalog: {
//                 '@type': 'OfferCatalog',
//                 name: 'IT Services',
//                 itemListElement: [
//                   {
//                     '@type': 'Offer',
//                     itemOffered: {
//                       '@type': 'Service',
//                       name: 'Website Development',
//                       description: 'Custom coded websites, business websites, and eCommerce solutions',
//                     },
//                   },
//                   {
//                     '@type': 'Offer',
//                     itemOffered: {
//                       '@type': 'Service',
//                       name: 'Mobile App Development',
//                       description: 'iOS and Android application development',
//                     },
//                   },
//                   {
//                     '@type': 'Offer',
//                     itemOffered: {
//                       '@type': 'Service',
//                       name: 'Digital Marketing',
//                       description: 'SEO, Google Ads, Meta Ads, and social media marketing',
//                     },
//                   },
//                   {
//                     '@type': 'Offer',
//                     itemOffered: {
//                       '@type': 'Service',
//                       name: 'Custom Software Development',
//                       description: 'Enterprise software and SaaS solutions',
//                     },
//                   },
//                 ],
//               },
//             }),
//           }}
//         />

//         {/* Breadcrumb Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               '@context': 'https://schema.org',
//               '@type': 'BreadcrumbList',
//               itemListElement: [
//                 {
//                   '@type': 'ListItem',
//                   position: 1,
//                   name: 'Home',
//                   item: 'https://snipercoders.com',
//                 },
//                 {
//                   '@type': 'ListItem',
//                   position: 2,
//                   name: 'Services',
//                   item: 'https://snipercoders.com/services',
//                 },
//                 {
//                   '@type': 'ListItem',
//                   position: 3,
//                   name: 'Portfolio',
//                   item: 'https://snipercoders.com/showcase',
//                 },
//                 {
//                   '@type': 'ListItem',
//                   position: 4,
//                   name: 'Contact',
//                   item: 'https://snipercoders.com/contact',
//                 },
//               ],
//             }),
//           }}
//         />
//       </head>

//       <body className={poppins.className}>
//         {/* ================= META PIXEL ================= */}
//         <Script id="meta-pixel" strategy="afterInteractive">
//           {`
//             !function(f,b,e,v,n,t,s)
//             {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//             n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//             if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//             n.queue=[];t=b.createElement(e);t.async=!0;
//             t.src=v;s=b.getElementsByTagName(e)[0];
//             s.parentNode.insertBefore(t,s)}(window, document,'script',
//             'https://connect.facebook.net/en_US/fbevents.js');

//             fbq('init', '1401332194988106');
//             fbq('track', 'PageView');
//           `}
//         </Script>
//         {/* ================= END META PIXEL ================= */}

//         {/* Google Analytics (Optional - Add your GA4 ID) */}
//         {/* <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
//           strategy="afterInteractive"
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-XXXXXXXXXX');
//           `}
//         </Script> */}

//         {/* Contentsquare */}
//         <Script
//           src="https://t.contentsquare.net/uxa/3a02599aa7215.js"
//           strategy="afterInteractive"
//         />

//         <ThemeProvider>
//           <Navbar />

//           <main className="pt-20">
//             {children}
//           </main>

//           {/* WhatsApp Floating Button */}
//           <a
//             href="https://wa.me/916006254188"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Chat with us on WhatsApp"
//             className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
//             </svg>
//             <span className="hidden md:inline">WhatsApp</span>
//           </a>

//           <ToastContainer
//             position="top-right"
//             autoClose={3000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }















// app/layout.tsx
import './globals.css';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from "next";
import Script from 'next/script';

// Load the Poppins font
const poppins = Poppins({
subsets: ['latin'],
weight: ['400', '600', '700'],
display: 'swap',
});

export const metadata: Metadata = {
metadataBase: new URL(
process.env.NODE_ENV === 'production'
? 'https://www.snipercoders.com' // ✅ IMPORTANT SEO FIX (www consistency)
: 'http://localhost:3000'
),

title: {
default: 'SniperCoders - Best Software and IT Company in India | Website Development & App Development',
template: '%s | SniperCoders - Best IT Company in India'
},

description:
'SniperCoders is the best software and IT company in India, delivering best website development near me, mobile app development, eCommerce solutions, and digital marketing services in Bangalore. 30+ projects delivered with 100% customer satisfaction.',

keywords: [
'best software company in India',
'best IT company in India',
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
title: 'SniperCoders - Best Website Development Company Near Me in India',
description:
'Best software and IT company in India offering custom coded websites, business websites, mobile app development, and digital marketing services.',
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
'Best website development, app development, and digital marketing services in Bangalore',
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

// 🔴 VERY IMPORTANT — PUT YOUR REAL GOOGLE CODE HERE
verification: {
google: 'PASTE_YOUR_REAL_GOOGLE_CODE_HERE',
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
return ( <html lang="en"> <head> <link rel="icon" href="/images/logo_sniper.ico?v=2" sizes="any" /> <link rel="shortcut icon" href="/images/logo_sniper.ico?v=2" /> <link rel="apple-touch-icon" href="/images/logo_sniper.ico?v=2" />

```
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

    <meta name="theme-color" content="#0a0a2a" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

    {/* ================= LOCAL BUSINESS SCHEMA ================= */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.snipercoders.com',
          name: 'SniperCoders',
          alternateName: 'SniperCoders Global Technologies',
          url: 'https://www.snipercoders.com',
          telephone: '+91-60062-54188',
          email: 'info@snipercoders.com',
          priceRange: '₹₹',
          image: 'https://www.snipercoders.com/images/logo.png',
          logo: 'https://www.snipercoders.com/images/logo.png',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bangalore',
            addressRegion: 'Karnataka',
            postalCode: '560001',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '12.9716',
            longitude: '77.5946',
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

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/916006254188"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      >
        WhatsApp
      </a>

      <ToastContainer theme="dark" />
    </ThemeProvider>
  </body>
</html>

);
}