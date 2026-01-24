
// // // //components/Creative.tsx


// 'use client';
// import { useState, useRef, useEffect, useCallback } from 'react';
// import Image from 'next/image';

// interface Offer {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   originalPrice: string;
//   discountedPrice: string;
//   discount: string;
//   features: string[];
// }




// const offers: Offer[] = [
//   {
//     id: 1,
//     title: 'Full Social Media Marketing',
//     description:
//       'Targeted ads & expert social media management to grow your brand with better reach, engagement and performance tracking. (Without content creation)',
//     image: '/images/ad_1.jpeg',
//     originalPrice: '₹20,000',
//     discountedPrice: '₹10,000',
//     discount: 'SAVE ₹10,000',
//     features: [
//       'Targeted Ad Campaigns',
//       'Increased Engagement',
//       'Detailed Reporting',
//       'Dedicated Management'
//     ]
//   },
//   {
//     id: 2,
//     title: 'Coded Website',
//     description:
//       'Limited time offer for a professionally coded business website with modern design, fast performance and SEO-ready structure. Also available: social media content creation (reels, posts, etc.).',
//     image: '/images/ad_2.jpeg',
//     originalPrice: '₹30,000',
//     discountedPrice: '₹25,000',
//     discount: 'LIMITED TIME OFFER',
//     features: [
//       'Custom Coded Website',
//       'Mobile Responsive Design',
//       'SEO Ready Structure',
//       'Fast Loading Speed'
//     ]
//   },
//   {
//     id: 3,
//     title: 'Premium Content Package',
//     description:
//       'Professional social media content creation including custom reels, graphics, and stories tailored to your brand identity and marketing goals.',
//     image: '/images/ad_3.jpeg',
//     originalPrice: '₹35,000',
//     discountedPrice: '₹28,000',
//     discount: 'SAVE ₹7,000',
//     features: [
//       'Custom Reels',
//       'Professional Graphics',
//       'Brand Stories',
//       'Content Calendar'
//     ]
//   },
//   {
//     id: 4,
//     title: 'E-Commerce Website',
//     description:
//       'Get a fully functional e-commerce website with a modern design, mobile-friendly UI, payment integration and SEO optimized setup to start selling online.',
//     image: '/images/ad_4.jpeg',
//     originalPrice: '₹89,999',
//     discountedPrice: '₹59,999',
//     discount: 'LIMITED OFFER',
//     features: ['Mobile-Friendly', 'Payment Integrations', 'SEO Optimized', 'Product Store Setup']
//   },
//   {
//     id: 5,
//     title: 'Full Social Media Marketing',
//     description:
//       'Complete social media marketing package including content creation, 20 reels, 20 graphics, daily stories and Meta Ads management to boost your brand growth.',
//     image: '/images/ad_5.jpeg',
//     originalPrice: '₹55,000',
//     discountedPrice: '₹40,000',
//     discount: 'SAVE ₹15,000',
//     features: ['20 Reels', '20 Graphics', 'Daily 4 Stories', 'Meta Ads']
//   },
//   {
//     id: 6,
//     title: 'Business Website',
//     description:
//       'Get a professional business website with custom design, responsive layout, fast performance and SEO optimized setup to grow your business online.',
//     image: '/images/ad_6.jpeg',
//     originalPrice: '₹30,000',
//     discountedPrice: '₹25,000',
//     discount: 'SAVE ₹5,000',
//     features: ['Custom Design', 'Responsive & Fast', 'SEO Optimized', 'Mobile Friendly']
//   }
// ];


// export default function Creative() {
//   const [isPaused, setIsPaused] = useState(false);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const animationFrameRef = useRef<number | null>(null);
//   const [scrollSpeed, setScrollSpeed] = useState(1.2);
  
//   // Adjust scroll speed based on screen size
//   useEffect(() => {
//     const checkScreenSize = () => {
//       if (window.innerWidth < 640) {
//         setScrollSpeed(0.6);
//       } else if (window.innerWidth < 1024) {
//         setScrollSpeed(0.9);
//       } else {
//         setScrollSpeed(1.2);
//       }
//     };
    
//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);
  
//   const animateScroll = useCallback(() => {
//     if (!scrollRef.current || isPaused) return;
//     const scroller = scrollRef.current;
//     const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    
//     if (scroller.scrollLeft >= maxScrollLeft - 1) {
//       scroller.scrollLeft = 0;
//     } else {
//       scroller.scrollLeft += scrollSpeed;
//     }
//     animationFrameRef.current = requestAnimationFrame(animateScroll);
//   }, [isPaused, scrollSpeed]);

//   useEffect(() => {
//     if (!scrollRef.current) return;
    
//     animationFrameRef.current = requestAnimationFrame(animateScroll);
    
//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [animateScroll]);

//   const duplicatedOffers = [...offers, ...offers];

//   return (
//     <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         {/* Grid Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px]" />
//         </div>
      
//         {/* Glowing Orbs - Responsive sizing */}
//         <div className="absolute top-1/4 left-5 sm:left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-1/4 right-5 sm:right-10 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }} />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '500ms' }} />
//       </div>
      
//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-8 sm:mb-12 md:mb-16">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
//             <span className="text-white">Exclusive</span>
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-cyan-400 to-purple-400">
//               Offers & Services
//             </span>
//           </h1>
        
//           <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
//             Premium web development and content creation services designed to drive results
//           </p>
//         </div>
        
//         {/* Offers Carousel Section */}
//         <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative z-10">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400 px-4">
//             Hot Deals & Packages
//           </h2>
          
//           {/* Offers Carousel Container */}
//           <div
//             ref={scrollRef}
//             className="flex overflow-x-hidden scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 py-4 px-2 sm:px-4 md:px-0"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//             onTouchStart={() => setIsPaused(true)}
//             onTouchEnd={() => setTimeout(() => setIsPaused(false), 1000)}
//           >
//             {duplicatedOffers.map((offer, index) => (
//               <div
//                 key={`${offer.id}-${index}`}
//                 className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg border border-orange-500/20 rounded-xl md:rounded-2xl overflow-hidden shadow-xl hover:shadow-orange-500/60 transition-all duration-300 snap-start relative z-20 hover:scale-105 hover:-translate-y-2"
//               >
//                 <div className="relative h-36 sm:h-44 md:h-52 lg:h-56 overflow-hidden bg-gray-800">
//                   <Image
//                     src={offer.image}
//                     alt={offer.title}
//                     fill
//                     className="object-contain transition-transform duration-700 hover:scale-105 p-2"
//                     priority={index < 3}
//                     sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 380px"
//                   />
//                   <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
//                     <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full animate-pulse shadow-lg">
//                       {offer.discount}
//                     </span>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
//                 </div>
                
//                 <div className="p-4 sm:p-5 md:p-6 lg:p-7">
//                   <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 line-clamp-1">
//                     {offer.title}
//                   </h3>
//                   <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed line-clamp-2">
//                     {offer.description}
//                   </p>
                  
//                   <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
//                     <span className="text-gray-400 text-xs sm:text-sm md:text-base line-through">
//                       {offer.originalPrice}
//                     </span>
//                     <span className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">
//                       {offer.discountedPrice}
//                     </span>
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
//                     {offer.features.slice(0, 4).map((feature, idx) => (
//                       <div key={idx} className="flex items-center gap-1">
//                         <div className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
//                         <span className="text-xs sm:text-sm text-gray-300 truncate">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <button className="inline-flex items-center justify-center w-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-orange-600 to-purple-700 text-white font-medium rounded-full hover:from-orange-500 hover:to-purple-600 transition-all shadow-md hover:shadow-lg cursor-pointer text-xs sm:text-sm md:text-base active:scale-95">
//                     Get This Offer
//                     <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Manual navigation buttons */}
//           <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 space-x-3 sm:space-x-4 md:space-x-6">
//             <button
//               onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
//               className="p-2 sm:p-3 md:p-4 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur transition-all active:scale-95 cursor-pointer"
//               aria-label="Scroll left"
//             >
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <button
//               onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
//               className="p-2 sm:p-3 md:p-4 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur transition-all active:scale-95 cursor-pointer"
//               aria-label="Scroll right"
//             >
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Floating Elements - Hidden on mobile */}
//         <div className="absolute bottom-20 left-1/4 hidden lg:block">
//           <div
//             className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
//             style={{
//               animation: 'float1 4s ease-in-out infinite'
//             }}
//           />
//         </div>
//         <div className="absolute top-20 right-1/4 hidden lg:block">
//           <div
//             className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-400"
//             style={{
//               animation: 'float2 3s ease-in-out infinite'
//             }}
//           />
//         </div>
//       </div>
      
//       <style jsx>{`
//         @keyframes float1 {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-20px); }
//         }
        
//         @keyframes float2 {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(20px); }
//         }
        
//         /* Custom scrollbar styling */
//         .scrollbar-thin::-webkit-scrollbar {
//           height: 4px;
//         }
        
//         @media (min-width: 640px) {
//           .scrollbar-thin::-webkit-scrollbar {
//             height: 6px;
//           }
//         }
        
//         .scrollbar-thin::-webkit-scrollbar-track {
//           background: transparent;
//         }
        
//         .scrollbar-thin::-webkit-scrollbar-thumb {
//           background-color: rgba(6, 182, 212, 0.3);
//           border-radius: 3px;
//         }
        
//         .scrollbar-thin::-webkit-scrollbar-thumb:hover {
//           background-color: rgba(6, 182, 212, 0.5);
//         }
        
//         /* Line clamping for text */
//         .line-clamp-1 {
//           overflow: hidden;
//           display: -webkit-box;
//           -webkit-box-orient: vertical;
//           -webkit-line-clamp: 1;
//         }
        
//         .line-clamp-2 {
//           overflow: hidden;
//           display: -webkit-box;
//           -webkit-box-orient: vertical;
//           -webkit-line-clamp: 2;
//         }
        
//         /* Hide scrollbar for mobile touch */
//         @media (max-width: 768px) {
//           .overflow-x-hidden {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
          
//           .overflow-x-hidden::-webkit-scrollbar {
//             display: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


















'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  features: string[];
}

const offers: Offer[] = [
  {
    id: 1,
    title: 'Full Social Media Marketing',
    description:
      'Targeted ads & expert social media management to grow your brand with better reach, engagement and performance tracking. (Without content creation)',
    image: '/images/ad_1.jpeg',
    originalPrice: '₹20,000',
    discountedPrice: '₹10,000',
    discount: 'SAVE ₹10,000',
    features: [
      'Targeted Ad Campaigns',
      'Increased Engagement',
      'Detailed Reporting',
      'Dedicated Management'
    ]
  },
  {
    id: 2,
    title: 'Coded Website',
    description:
      'Limited time offer for a professionally coded business website with modern design, fast performance and SEO-ready structure. Also available: social media content creation (reels, posts, etc.).',
    image: '/images/ad_2.jpeg',
    originalPrice: '₹30,000',
    discountedPrice: '₹25,000',
    discount: 'LIMITED TIME OFFER',
    features: [
      'Custom Coded Website',
      'Mobile Responsive Design',
      'SEO Ready Structure',
      'Fast Loading Speed'
    ]
  },
  {
    id: 3,
    title: 'Premium Content Package',
    description:
      'Professional social media content creation including custom reels, graphics, and stories tailored to your brand identity and marketing goals.',
    image: '/images/ad_3.jpeg',
    originalPrice: '₹35,000',
    discountedPrice: '₹28,000',
    discount: 'SAVE ₹7,000',
    features: [
      'Custom Reels',
      'Professional Graphics',
      'Brand Stories',
      'Content Calendar'
    ]
  },
  {
    id: 4,
    title: 'E-Commerce Website',
    description:
      'Get a fully functional e-commerce website with a modern design, mobile-friendly UI, payment integration and SEO optimized setup to start selling online.',
    image: '/images/ad_4.jpeg',
    originalPrice: '₹89,999',
    discountedPrice: '₹59,999',
    discount: 'LIMITED OFFER',
    features: ['Mobile-Friendly', 'Payment Integrations', 'SEO Optimized', 'Product Store Setup']
  },
  {
    id: 5,
    title: 'Full Social Media Marketing',
    description:
      'Complete social media marketing package including content creation, 20 reels, 20 graphics, daily stories and Meta Ads management to boost your brand growth.',
    image: '/images/ad_5.jpeg',
    originalPrice: '₹55,000',
    discountedPrice: '₹40,000',
    discount: 'SAVE ₹15,000',
    features: ['20 Reels', '20 Graphics', 'Daily 4 Stories', 'Meta Ads']
  },
  {
    id: 6,
    title: 'Business Website',
    description:
      'Get a professional business website with custom design, responsive layout, fast performance and SEO optimized setup to grow your business online.',
    image: '/images/ad_6.jpeg',
    originalPrice: '₹30,000',
    discountedPrice: '₹25,000',
    discount: 'SAVE ₹5,000',
    features: ['Custom Design', 'Responsive & Fast', 'SEO Optimized', 'Mobile Friendly']
  }
];

export default function Creative() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [scrollSpeed, setScrollSpeed] = useState(1.2);
  
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 640) {
        setScrollSpeed(0.6);
      } else if (window.innerWidth < 1024) {
        setScrollSpeed(0.9);
      } else {
        setScrollSpeed(1.2);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const animateScroll = useCallback(() => {
    if (!scrollRef.current || isPaused) return;
    const scroller = scrollRef.current;
    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    
    if (scroller.scrollLeft >= maxScrollLeft - 1) {
      scroller.scrollLeft = 0;
    } else {
      scroller.scrollLeft += scrollSpeed;
    }
    animationFrameRef.current = requestAnimationFrame(animateScroll);
  }, [isPaused, scrollSpeed]);

  useEffect(() => {
    if (!scrollRef.current) return;
    
    animationFrameRef.current = requestAnimationFrame(animateScroll);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animateScroll]);

  const duplicatedOffers = [...offers, ...offers];

  return (
    <section id="offers" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden scroll-mt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
      
        <div className="absolute top-1/4 left-5 sm:left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-5 sm:right-10 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '500ms' }} />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Exclusive</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-cyan-400 to-purple-400">
              Offers & Services
            </span>
          </h1>
        
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Premium web development and content creation services designed to drive results
          </p>
        </div>
        
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400 px-4">
            Hot Deals & Packages
          </h2>
          
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 py-4 px-2 sm:px-4 md:px-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 1000)}
          >
            {duplicatedOffers.map((offer, index) => (
              <div
                key={`${offer.id}-${index}`}
                className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg border border-orange-500/20 rounded-xl md:rounded-2xl overflow-hidden shadow-xl hover:shadow-orange-500/60 transition-all duration-300 snap-start relative z-20 hover:scale-105 hover:-translate-y-2"
              >
                <div className="relative h-36 sm:h-44 md:h-52 lg:h-56 overflow-hidden bg-gray-800">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-contain transition-transform duration-700 hover:scale-105 p-2"
                    priority={index < 3}
                    sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 380px"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                    <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full animate-pulse shadow-lg">
                      {offer.discount}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                </div>
                
                <div className="p-4 sm:p-5 md:p-6 lg:p-7">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 line-clamp-1">
                    {offer.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed line-clamp-2">
                    {offer.description}
                  </p>
                  
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                    <span className="text-gray-400 text-xs sm:text-sm md:text-base line-through">
                      {offer.originalPrice}
                    </span>
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">
                      {offer.discountedPrice}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                    {offer.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-300 truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center justify-center w-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-orange-600 to-purple-700 text-white font-medium rounded-full hover:from-orange-500 hover:to-purple-600 transition-all shadow-md hover:shadow-lg cursor-pointer text-xs sm:text-sm md:text-base active:scale-95">
                    Get This Offer
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 space-x-3 sm:space-x-4 md:space-x-6">
            <button
              onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
              className="p-2 sm:p-3 md:p-4 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
              className="p-2 sm:p-3 md:p-4 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/4 hidden lg:block">
          <div
            className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
            style={{
              animation: 'float1 4s ease-in-out infinite'
            }}
          />
        </div>
        <div className="absolute top-20 right-1/4 hidden lg:block">
          <div
            className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-400"
            style={{
              animation: 'float2 3s ease-in-out infinite'
            }}
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          height: 4px;
        }
        
        @media (min-width: 640px) {
          .scrollbar-thin::-webkit-scrollbar {
            height: 6px;
          }
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(6, 182, 212, 0.3);
          border-radius: 3px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: rgba(6, 182, 212, 0.5);
        }
        
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        
        @media (max-width: 768px) {
          .overflow-x-hidden {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          .overflow-x-hidden::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}