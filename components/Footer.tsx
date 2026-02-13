// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative z-20 bg-gradient-to-br from-gray-950 to-blue-950 backdrop-blur-lg border-t border-blue-500/20 text-white py-16 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <div className="flex items-center mb-6">
              <div className="text-3xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient">
                  SniperCoders
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Best software and IT company in India, delivering innovative digital solutions for businesses and startups. With 30+ projects delivered, we focus on customer satisfaction.
            </p>
            <div className="flex space-x-2 flex-wrap gap-2">
              <div className="bg-blue-500/20 px-3 py-1 rounded-full text-xs text-blue-400">
                30+ Projects
              </div>
              <div className="bg-purple-500/20 px-3 py-1 rounded-full text-xs text-purple-400">
                100% Satisfaction
              </div>
            </div>
          </motion.div>
          
          {[
            {
              title: "Our Services",
              items: [
                {
                  label: "Custom Software Development",
                  href: "/services/custom-software-development",
                },
                {
                  label: "Website Development",
                  href: "/services/web-development",
                },
                {
                  label: "Mobile App Development",
                  href: "/services/mobile-development",
                },
                { 
                  label: "Digital Marketing", 
                  href: "/services/digital-marketing" 
                },
              ],
            },
            {
              title: "Useful Links",
              items: [
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Refund Policy", href: "/refund" },
                { label: "Portfolio", href: "/showcase" },
              ],
            },
            {
              title: "Get In Touch",
              items: [
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "FAQs", href: "/faqs" },
                { label: "Testimonials", href: "/showcase" },
              ],
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <h3 className="text-lg font-semibold mb-6 text-blue-400">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-12 pt-10 border-t border-blue-500/20 text-center text-gray-400 text-sm"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <p>
            © {new Date().getFullYear()} SniperCoders - Best Software and IT Company in India. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Best Website Development Company Near Me | Best App Development Agency Near Me | Digital Marketing Services in Bangalore
          </p>
        </motion.div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </footer>
  );
}