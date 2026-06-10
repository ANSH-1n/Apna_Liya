import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'SniperCoders - Creative Growth Agency for Modern Brands',
    template: '%s | SniperCoders',
  },
  description:
    'SniperCoders is a creative growth agency for modern brands, creators, startups, coaches, SaaS founders, and agencies. We deliver social media growth, short-form video editing, viral reels, content strategy, performance creatives, and brand storytelling.',
  alternates: {
    canonical: 'https://www.snipercoders.in',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    'creative growth agency',
    'social media growth agency',
    'short form video editing agency',
    'viral reels editing',
    'content strategy agency',
    'performance creative agency',
    'ad creative agency',
    'brand storytelling agency',
    'white label video editing',
    'SniperCoders',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.snipercoders.in',
    title: 'SniperCoders - Creative Growth Agency for Modern Brands',
    description:
      'Premium social media growth, short-form video editing, content strategy, performance creatives, and brand storytelling for international brands and creators.',
    siteName: 'SniperCoders',
    images: [
      {
        url: 'https://www.snipercoders.in/images/logo_sniper.ico',
        width: 800,
        height: 600,
        alt: 'SniperCoders creative growth agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SniperCoders - Creative Growth Agency',
    description:
      'Social media growth, reels editing, content strategy, performance creatives, and brand storytelling for modern brands.',
  },
  icons: {
    icon: [{ url: '/images/logo_sniper.ico', type: 'image/x-icon' }],
    shortcut: '/images/logo_sniper.ico',
    apple: '/images/logo_sniper.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const whatsappNumber = '917006377796';
  const whatsappMessage = encodeURIComponent(
    'Hello SniperCoders! I want to discuss social media growth and video editing for my brand.'
  );

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo_sniper.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/images/logo_sniper.ico" type="image/x-icon" />
      </head>

      <body className={`${poppins.className} transition-all duration-300`}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-20">{children}</main>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with SniperCoders on WhatsApp"
            style={{
              position: 'fixed',
              bottom: '28px',
              right: '28px',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)',
              cursor: 'pointer',
              textDecoration: 'none',
              animation: 'whatsapp-pulse 2.5s ease-in-out infinite',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="32"
              height="32"
              fill="white"
            >
              <path d="M24 4C12.954 4 4 12.954 4 24c0 3.552.924 6.889 2.538 9.788L4 44l10.478-2.495A19.9 19.9 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4zm0 36c-3.12 0-6.04-.832-8.56-2.284l-.612-.364-6.212 1.48 1.508-6.04-.4-.636A15.94 15.94 0 0 1 8 24c0-8.822 7.178-16 16-16s16 7.178 16 16-7.178 16-16 16zm8.406-11.846c-.46-.23-2.718-1.34-3.138-1.494-.42-.152-.726-.228-1.032.23-.306.458-1.184 1.494-1.452 1.8-.268.306-.536.344-.996.114-.46-.23-1.942-.716-3.7-2.284-1.368-1.22-2.292-2.726-2.56-3.186-.268-.46-.028-.708.2-.936.206-.204.46-.536.69-.804.23-.268.306-.46.46-.766.152-.306.076-.574-.038-.804-.114-.23-1.032-2.488-1.414-3.408-.372-.894-.75-.772-1.032-.786l-.88-.016c-.306 0-.804.114-1.224.574-.42.46-1.608 1.572-1.608 3.832s1.646 4.446 1.876 4.752c.23.306 3.24 4.946 7.848 6.938 1.096.474 1.952.756 2.618.968 1.1.35 2.102.3 2.894.182.882-.132 2.718-1.112 3.102-2.186.384-1.074.384-1.994.268-2.186-.114-.19-.42-.306-.88-.536z" />
            </svg>
          </a>

          <style>{`
            @keyframes whatsapp-pulse {
              0% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
              }
              50% {
                box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
              }
              100% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
              }
            }
          `}</style>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </ThemeProvider>

        <GoogleTagManager gtmId="GTM-TQHG3HB2" />
      </body>
    </html>
  );
}
