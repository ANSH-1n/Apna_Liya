
///app/services/page.tsx

"use client";

import { FaRobot } from "react-icons/fa"; 
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from '@/components/Footer';

import {
  FaGlobe,
  FaMobile,
  FaChartLine,
  FaCode,
  FaChartPie,
} from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      name: "Website Development",
      href: "/services/web-development",
      description:
        "Best website development near me - Create powerful custom coded websites with cutting-edge responsive design and SEO optimization.",
      icon: FaGlobe,
      iconColor: "from-purple-500 to-pink-500",
      keywords: "Custom Websites • Business Websites • E-Commerce"
    },
    {
      name: "Mobile App Development",
      href: "/services/mobile-development",
      description:
        "Best app development agency near me in India - Build native and cross-platform mobile applications that users love.",
      icon: FaMobile,
      iconColor: "from-green-400 to-blue-500",
      keywords: "iOS Apps • Android Apps • Cross-Platform"
    },
    {
      name: "Digital Marketing Services",
      href: "/services/digital-marketing",
      description:
        "Best content creation and video editing company near me - SEO, Google Ads, Meta Ads, and social media marketing strategies.",
      icon: FaChartLine,
      iconColor: "from-pink-400 to-red-500",
      keywords: "SEO • Google Ads • Meta Ads • Social Media"
    },
    {
      name: "Custom Software Development",
      href: "/services/custom-software-development",
      description:
        "Enterprise-grade custom software solutions tailored to your business logic and growth goals by best IT company in India.",
      icon: FaCode,
      iconColor: "from-yellow-400 to-orange-500",
      keywords: "Enterprise Software • SaaS Solutions • APIs"
    },
    {
      name: "IT Consulting & Digital Transformation",
      href: "/services/it-consulting",
      description: "Strategic technology guidance and IT consulting services for complete digital transformation of your business.",
      icon: FaChartPie,
      iconColor: "from-blue-400 to-indigo-500",
      keywords: "IT Strategy • Digital Transformation • Cloud Migration"
    },
    {
      name: "AI Agents & Automation",
      href: "/agents",
      description: "Custom-built AI agents that automate tasks, engage users, and boost efficiency — from lead generation to customer support.",
      icon: FaRobot,
      iconColor: "from-cyan-400 to-blue-500",
      keywords: "AI Automation • Chatbots • Process Automation"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };


  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 mt-4 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl text-blue-300 font-semibold mb-4">
            Best Software and IT Company in India - SniperCoders
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center text-gray-300 mb-12 max-w-4xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed"
        >
          As the <span className="text-blue-400 font-semibold">best website development company near me in India</span>, we offer comprehensive technology services to power your digital transformation journey. With <span className="text-purple-400 font-semibold">30+ projects delivered</span> and <span className="text-cyan-400 font-semibold">100% customer satisfaction</span>, SniperCoders is your trusted partner for <span className="text-pink-400 font-semibold">website development</span>, <span className="text-green-400 font-semibold">mobile app development</span>, and <span className="text-yellow-400 font-semibold">digital marketing services</span> in Bangalore.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Link
                href={service.href}
                className="relative flex flex-col justify-between bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-md border-2 border-gray-700 hover:border-cyan-500 rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                {/* Icon */}
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-br ${service.iconColor} p-3 rounded-xl shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-base leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Keywords Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {service.keywords.split(' • ').map((keyword, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/30"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-cyan-400 group-hover:text-white text-sm font-semibold transition-colors duration-300">
                  Learn More 
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">30+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">5.0</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Why Choose SniperCoders?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Best Website Development Near Me",
                description: "Custom coded websites, business websites, and eCommerce solutions with SEO optimization.",
                icon: "🌐"
              },
              {
                title: "Best App Development Agency",
                description: "Native and cross-platform mobile applications for iOS and Android with stunning UI/UX.",
                icon: "📱"
              },
              {
                title: "Digital Marketing Experts",
                description: "SEO, Google Ads, Meta Ads, content creation, and social media marketing services.",
                icon: "📈"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.section
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 py-12 px-6 sm:px-8 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-500/30 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
          >
            Need Custom Solutions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-gray-200 mb-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed"
          >
            {`Let's discuss how we can combine these services to create your perfect digital ecosystem. As the `}
            <span className="text-cyan-300 font-semibold">best software and IT company in India</span>
            {`, we're here to help your business grow.`}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Schedule Free Consultation →
            </Link>
            <Link
              href="/showcase"
              className="inline-flex items-center bg-gray-800 text-cyan-300 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300 shadow-lg border border-gray-700"
            >
              View Our Portfolio
            </Link>
          </motion.div>
        </motion.section>

        {/* SEO Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>
            SniperCoders - Best Website Development Company Near Me | Best App Development Agency Near Me | 
            Best Software and IT Company in India | Digital Marketing Services in Bangalore | 
            Custom Coded Websites | Business Websites | E-Commerce Development | Mobile App Development | 
            SEO Services | Google Ads | Meta Ads | Social Media Marketing
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}