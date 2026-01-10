//components/Creative.tsx
  

'use client';
import { motion } from 'framer-motion';
import { Code2, Zap, ShieldCheck, Sparkles, Video, Image, Calendar, Target } from 'lucide-react';

export default function Creative() {
  const websiteFeatures = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: 'Custom Coded',
      desc: 'No templates, pure custom development'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Lightning Fast',
      desc: '90+ PageSpeed scores guaranteed'
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'SEO Optimized',
      desc: 'Rank higher on Google search'
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Premium Design',
      desc: 'Award-winning UI/UX'
    }
  ];
  
  const contentFeatures = [
    {
      icon: <Video className="w-5 h-5" />,
      title: '10 Reels',
      desc: 'High-quality video content'
    },
    {
      icon: <Image className="w-5 h-5" />,
      title: '4 Image Posts',
      desc: 'Visually stunning graphics'
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: 'Complete Package',
      desc: 'Shooting + Editing included'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Strategy Based',
      desc: 'Designed for engagement'
    }
  ];
  
  const testimonials = [
    { name: 'URBANCRAFT', quote: '300% ROI in first month', service: 'Website' },
    { name: 'TravelQuench', quote: '2x faster loading time', service: 'Website' },
    { name: 'TorkeHub', quote: '150+ leads monthly', service: 'Website' }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
      
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Boost Your</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-cyan-400 to-purple-400">
              Digital Presence
            </span>
          </h1>
        
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Premium web development and content creation services designed to drive results
          </p>
        </motion.div>
        
        {/* Main Cards Container */}
        <div className="max-w-7xl mx-auto relative">
          {/* Floating Cards */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {/* Website Development Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              animate={{
                y: [0, -8, 0],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: [0.45, 0.05, 0.55, 0.95]
                }
              }}
              whileHover={{
                scale: 0.97,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
              <div className="relative h-full bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -skew-x-12 animate-shimmer" />
                <div className="relative p-8 lg:p-10">
                  {/* Card Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <Code2 className="w-8 h-8 text-blue-400" />
                      <h2 className="text-3xl font-bold text-white">CODED WEBSITE</h2>
                    </div>
                  
                    <div className="flex items-center justify-center gap-4 mb-8">
                      <span className="text-2xl text-gray-400 line-through">₹30,000</span>
                      <span className="px-4 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full animate-pulse">
                        SAVE ₹5,000
                      </span>
                    </div>
                  
                    <div className="mb-8">
                      <div className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500">
                        ₹25,000
                      </div>
                      <p className="text-gray-400 text-lg mt-2">One-time payment</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {websiteFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur rounded-xl p-4 border border-gray-700/50 group-hover:border-blue-500/30 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-blue-400">{feature.icon}</div>
                          <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                        </div>
                        <p className="text-gray-400 text-xs">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Content Creation Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 7,
                  repeat: Infinity,
                  ease: [0.45, 0.05, 0.55, 0.95],
                  delay: 1
                }
              }}
              whileHover={{
                scale: 0.97,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
              <div className="relative h-full bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent -skew-x-12 animate-shimmer delay-2000" />
                <div className="relative p-8 lg:p-10">
                  {/* Card Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <Video className="w-8 h-8 text-orange-400" />
                      <h2 className="text-3xl font-bold text-white">CONTENT CREATION</h2>
                    </div>
                  
                    <div className="flex items-center justify-center gap-4 mb-8">
                      <span className="text-2xl text-gray-400 line-through">₹25,000</span>
                      <span className="px-4 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-full animate-pulse">
                        SAVE ₹5,000
                      </span>
                    </div>
                  
                    <div className="mb-8">
                      <div className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
                        ₹20,000
                      </div>
                      <p className="text-gray-400 text-lg mt-2">Complete package</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {contentFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur rounded-xl p-4 border border-gray-700/50 group-hover:border-orange-500/30 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-orange-400">{feature.icon}</div>
                          <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                        </div>
                        <p className="text-gray-400 text-xs">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 pt-16 border-t border-gray-800/50"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Trusted by Brands</h3>
              <p className="text-gray-400">See what our clients are saying</p>
            </div>
          
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`bg-gradient-to-br ${
                    testimonial.service === 'Website'
                      ? 'from-blue-500/20 to-blue-500/10'
                      : 'from-orange-500/20 to-orange-500/10'
                  } backdrop-blur rounded-2xl p-6 border border-gray-700/50 hover:shadow-xl transition-all`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-2xl font-bold text-white">{testimonial.name}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      testimonial.service === 'Website'
                        ? 'bg-blue-500/30 text-blue-300'
                        : 'bg-orange-500/30 text-orange-300'
                    }`}>
                      {testimonial.service}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} filled={true} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-gray-900/50 backdrop-blur rounded-2xl px-8 py-6 border border-gray-700/50">
              <div className="text-left">
                <span className="text-gray-400 text-sm">Ready to transform your business?</span>
                <div className="text-white font-bold text-lg">Contact us today</div>
              </div>
              <a
                href="mailto:snipercoders25@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold hover:shadow-lg transition-shadow"
              >
                snipercoders25@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute bottom-20 left-1/4 hidden lg:block">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
          />
        </div>
        <div className="absolute top-20 right-1/4 hidden lg:block">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-400"
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 8s infinite;
        }
        .animate-shimmer.delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

// Star component for ratings
function Star({ filled }: { filled: boolean }) {
  return (
    <svg className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}