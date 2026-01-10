//components/WhoAreWe.tsx

'use client';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, Sparkles,  Rocket } from 'lucide-react';

export default function WhoWeAre() {
  const coreValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision Focused',
      description: 'Every line of code, every pixel placed with purpose'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Performance-optimized solutions that load in a blink'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliable & Secure',
      description: 'Rock-solid security with 99.9% uptime guarantee'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Innovation Driven',
      description: 'Cutting-edge tech with future-proof architecture'
    }
  ];

  const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '40+', label: 'Happy Clients' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff12_1px,transparent_1px),linear-gradient(to_bottom,#00ffff12_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        </div>
      
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8"
          >
            <span className="text-white">We Are</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              SniperCoders
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Digital architects crafting precision-engineered solutions that hit the bullseye of your business goals
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              {/* Floating Code Snippet Effect */}
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl rotate-12 blur-md" />
            
              <h3 className="text-3xl font-bold text-white mb-6 relative">
                <Rocket className="inline-block w-8 h-8 text-cyan-400 mr-3" />
                Our Mission
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                At SniperCoders, we don&apos;s just build websites — we engineer digital
                experiences that transform businesses. Like snipers, we take precise aim
                at your unique challenges, delivering solutions that are perfectly
                calibrated for maximum impact.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Our Approach</h3>
              <div className="space-y-4">
                {[
                  "We listen intently to understand your vision",
                  "We strategize with data-driven precision",
                  "We execute with technical excellence",
                  "We deliver beyond expectations"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-gray-300 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right: Core Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-300">
                  <div className="mb-4">
                    <div className="inline-block p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl" />
        
          <div className="relative bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-left">
              <h4 className="text-2xl font-bold text-white mb-2">
                Ready to elevate your digital presence?
              </h4>
              <p className="text-gray-300">
                Let&apos;s build something extraordinary together
              </p>
            </div>
        <a
  href="https://wa.me/917006377796?text=Hello%20SniperCoders!%20I'd%20like%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl text-white font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
>
  Start Your Project
</a>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-10 right-10 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 hidden lg:block"
      />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}