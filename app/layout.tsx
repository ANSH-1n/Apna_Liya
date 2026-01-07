

// // app/layout.tsx

// import './globals.css';
// import { Poppins } from 'next/font/google';
// import { ThemeProvider } from '../context/ThemeContext';
// import Navbar from '../components/Navbar';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Load the Poppins font
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '600', '700'],
// });


// export const metadata = {
//   title: 'SniperCoders - Software Services',
//   description: 'Innovative web development and digital solutions',
//   icons: {
//     icon: '/images/logo.ico',

//   },
// };






// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={`${poppins.className} transition-all duration-300`}>
//         <ThemeProvider>
//           <Navbar />

//           {/* Main page content with top padding for fixed navbar */}
//           <main className="pt-20">
//             {children}
//           </main>

//           {/* Toast notifications */}
//           <ToastContainer
//             position="top-right"
//             autoClose={3000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="colored"
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

// Load the Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production' 
      ? 'https://snipercoders.com' // Replace with your actual domain
      : 'http://localhost:3000'
  ),
  title: {
    default: 'SniperCoders - Software Services',
    template: '%s | SniperCoders'
  },
  description: 'Innovative web development and digital solutions',
  keywords: ['web development', 'software services', 'digital solutions', 'SniperCoders'],
  authors: [{ name: 'SniperCoders' }],
  creator: 'SniperCoders',
  publisher: 'SniperCoders',
  icons: {
    icon: [
      { url: '/images/logo_sniper.ico?v=1', sizes: 'any' },
      { url: '/images/logo_sniper.ico?v=1', sizes: '16x16', type: 'image/x-icon' },
      { url: '/images/logo_sniper.ico?v=1', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/images/logo_sniper.ico?v=1',
    apple: '/images/logo_sniper.ico?v=1',
  },
  openGraph: {
    title: 'SniperCoders - Software Services',
    description: 'Innovative web development and digital solutions',
    type: 'website',
    locale: 'en_US',
    siteName: 'SniperCoders',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Cache-busting favicon links with ?v=1 query parameter */}
        <link rel="icon" type="image/x-icon" href="/images/logo_sniper.ico?v=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/logo_sniper.ico?v=1" />
        <link rel="apple-touch-icon" href="/images/logo_sniper.ico?v=1" />
        
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={poppins.className}>
        <ThemeProvider>
          <Navbar />

          {/* Main page content with top padding for fixed navbar */}
          <main className="pt-16">
            {children}
          </main>

          {/* Toast notifications */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </ThemeProvider>
      </body>
    </html>
  );
}