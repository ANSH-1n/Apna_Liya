


//app/page.tsx

'use client';

import { useState, useEffect } from 'react';

import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import Creative from '../components/Creative';
import Showcase from '../components/Showcase';
import TrendService from '../components/TrendService';
import Agent from '../components/Agent';
import WhoAreWe from '../components/WhoAreWe';
import Footer from '@/components/Footer';

// SEO Metadata for Home Page


export default function Home() {
  const [, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SniperCoders',
            description: 'Best Software and IT Company in India offering website development, mobile app development, and digital marketing services',
            url: 'https://www.snipercoders.com',
            logo: 'https://www.snipercoders.com/images/logo.png',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Bangalore',
              addressRegion: 'Karnataka',
              addressCountry: 'IN',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              telephone: '+91-7006377796',
            },
            sameAs: [
              'https://www.facebook.com/snipercoders',
              'https://www.twitter.com/snipercoders',
              'https://www.linkedin.com/company/snipercoders',
            ],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '30',
            },
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'INR',
              lowPrice: '20000',
              highPrice: '59999',
              offerCount: '5',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'IT Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Website Development',
                    description: 'Custom coded websites and business websites',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Mobile App Development',
                    description: 'Native and cross-platform mobile applications',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Digital Marketing',
                    description: 'SEO, Google Ads, Meta Ads, and social media marketing',
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Main Page Content */}
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0a0a2a] via-[#0d1b3a] to-[#0a0a2a] text-white overflow-hidden pt-12">
        {/* SEO-friendly hidden heading */}
        <h1 className="sr-only">
          SniperCoders - Best Software and IT Company in India | Best Website Development Company Near Me in Bangalore | Mobile App Development | Digital Marketing Services
        </h1>

        {/* Background Effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="animated-orb orb-primary"></div>
          <div className="animated-orb orb-secondary"></div>
          <div className="animated-orb orb-tertiary"></div>
          <div className="particles-container">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 15 + 10}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="relative z-10">
          {/* Hero Section - Best Software Company in India */}
          <section aria-label="Hero - Best Software and IT Company in India">
            <Hero />
          </section>

          {/* Video Introduction */}
          <section aria-label="Company Introduction Video">
            <VideoSection />
          </section>

          {/* Creative Services Showcase */}
          <section aria-label="Creative Digital Solutions">
            <Creative />
          </section>

          {/* Portfolio and Case Studies */}
          <section aria-label="Portfolio - 30+ Projects Delivered">
            <Showcase />
          </section>

          {/* Trending Services */}
          <section aria-label="IT Services - Website Development, App Development, Digital Marketing">
            <TrendService />
          </section>

          {/* AI Agents and Automation */}
          <section 
            className="py-20 px-4 sm:px-8 bg-gradient-to-b from-[#0a0a2a] to-[#0d1b3a] text-white relative z-10"
            aria-label="AI Automation Services"
          >
            <Agent />
          </section>

          {/* About SniperCoders */}
          <section aria-label="About SniperCoders - Best IT Company in Bangalore">
            <WhoAreWe />
          </section>

          {/* SEO Content Section - Hidden but crawlable */}
          <section className="sr-only" aria-label="SEO Information">
            <div>
              <h2>Best Software and IT Company in India - SniperCoders</h2>
              <p>
                SniperCoders is recognized as the best software and IT company in India, 
                delivering innovative digital solutions for businesses and startups. With 30+ 
                projects successfully delivered across India, we focus on customer satisfaction 
                and excellence.
              </p>
              
              <h3>Best Website Development Company Near Me in Bangalore</h3>
              <p>
                We specialize in best website development near me, including custom coded websites, 
                business websites, eCommerce website development, and best web design. We are 
                known as one of the best website development companies near me in India.
              </p>

              <h3>Best App Development Agency Near Me</h3>
              <p>
                Our services include best app development and we are recognized as a best app 
                development agency near me in India, creating native and cross-platform mobile 
                applications.
              </p>

              <h3>Digital Marketing Services in Bangalore</h3>
              <p>
                We are the best content creation and video editing company near me, offering 
                comprehensive digital marketing services including SEO, Google Ads, Meta Ads, 
                and social media marketing.
              </p>

              <h3>Why Choose SniperCoders?</h3>
              <ul>
                <li>30+ successful projects delivered</li>
                <li>100% customer satisfaction rate</li>
                <li>Expert team with 3+ years experience</li>
                <li>Custom software development solutions</li>
                <li>Affordable pricing with premium quality</li>
                <li>24/7 customer support</li>
                <li>Best IT company in Bangalore, Karnataka, India</li>
              </ul>

              <h3>Our Service Areas</h3>
              <p>
                Serving clients across Bangalore, Karnataka, and all of India with:
                Website Development, Mobile App Development, E-Commerce Solutions, 
                Digital Marketing, SEO Services, Content Creation, Social Media Marketing, 
                Custom Software Development, AI Automation, and IT Consulting.
              </p>
            </div>
          </section>
        </div>

        {/* Footer with SEO Keywords */}
        <Footer />

        {/* Additional SEO Meta for Local Search */}
        <div className="sr-only">
          <address>
            SniperCoders - Best Software Company in India
            <br />
            Bangalore, Karnataka, India
            <br />
            Phone: +91-7006377796
            <br />
            Email: contact@snipercoders.com
          </address>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .animated-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }

        .orb-primary {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0) 70%);
          top: 10%;
          left: -10%;
          animation-delay: 0s;
        }

        .orb-secondary {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(168, 85, 247, 0) 70%);
          top: 50%;
          right: -10%;
          animation-delay: 5s;
        }

        .orb-tertiary {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, rgba(20, 184, 166, 0) 70%);
          bottom: 10%;
          left: 30%;
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(30px, 10px) scale(1.05);
          }
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
          border-radius: 50%;
          animation: particleFloat linear infinite;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </>
  );
}


