// // components/Footer.tsx
// "use client";

// import { motion } from "framer-motion";
// import { ChevronRight } from "lucide-react";

// const textVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   },
// };

// export default function Footer() {
//   return (
//     <footer className="relative z-20 bg-gradient-to-br from-gray-950 to-blue-950 backdrop-blur-lg border-t border-blue-500/20 text-white py-16 mt-20">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           <motion.div
//             variants={textVariants}
//             initial="initial"
//             animate="animate"
//           >
//             <div className="flex items-center mb-6">
//               <div className="text-3xl font-extrabold">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient">
//                   SniperCoders
//                 </span>
//               </div>
//             </div>
//             <p className="text-gray-300 text-sm leading-relaxed mb-4">
//               Best software and IT company in India, delivering innovative digital solutions for businesses and startups. With 30+ projects delivered, we focus on customer satisfaction.
//             </p>
//             <div className="flex space-x-2 flex-wrap gap-2">
//               <div className="bg-blue-500/20 px-3 py-1 rounded-full text-xs text-blue-400">
//                 30+ Projects
//               </div>
//               <div className="bg-purple-500/20 px-3 py-1 rounded-full text-xs text-purple-400">
//                 100% Satisfaction
//               </div>
//             </div>
//           </motion.div>
          
//           {[
//             {
//               title: "Our Services",
//               items: [
//                 {
//                   label: "Custom Software Development",
//                   href: "/services/custom-software-development",
//                 },
//                 {
//                   label: "Website Development",
//                   href: "/services/web-development",
//                 },
//                 {
//                   label: "Mobile App Development",
//                   href: "/services/mobile-development",
//                 },
//                 { 
//                   label: "Digital Marketing", 
//                   href: "/services/digital-marketing" 
//                 },
//               ],
//             },
//             {
//               title: "Useful Links",
//               items: [
//                 { label: "Terms of Service", href: "/terms" },
//                 { label: "Privacy Policy", href: "/privacy" },
//                 { label: "Refund Policy", href: "/refund" },
//                 { label: "Portfolio", href: "/showcase" },
//               ],
//             },
//             {
//               title: "Get In Touch",
//               items: [
//                 { label: "About Us", href: "/about" },
//                 { label: "Contact Us", href: "/contact" },
//                 { label: "FAQs", href: "/faqs" },
//                 { label: "Testimonials", href: "/showcase" },
//               ],
//             },
//           ].map((section, idx) => (
//             <motion.div
//               key={idx}
//               variants={textVariants}
//               initial="initial"
//               animate="animate"
//             >
//               <h3 className="text-lg font-semibold mb-6 text-blue-400">
//                 {section.title}
//               </h3>
//               <ul className="space-y-3">
//                 {section.items.map((item, i) => (
//                   <motion.li
//                     key={i}
//                     whileHover={{ x: 8 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <a
//                       href={item.href}
//                       className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
//                     >
//                       <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
//                       {item.label}
//                     </a>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
        
//         <motion.div
//           className="mt-12 pt-10 border-t border-blue-500/20 text-center text-gray-400 text-sm"
//           variants={textVariants}
//           initial="initial"
//           animate="animate"
//         >
//           <p>
//             © {new Date().getFullYear()} SniperCoders - Best Software and IT Company in India. All rights reserved.
//           </p>
//           <p className="mt-2 text-xs text-gray-500">
//             Best Website Development Company Near Me | Best App Development Agency Near Me | Digital Marketing Services in Bangalore
//           </p>
//         </motion.div>
//       </div>

//       {/* CSS Animation */}
//       <style jsx>{`
//         @keyframes gradient {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//       `}</style>
//     </footer>
//   );
// }









// FILE PATH: components/Footer.tsx
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand Column */}
          <motion.div
            className="lg:col-span-1"
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
              Best software and IT company in India, delivering innovative digital solutions for businesses and startups across Bangalore, Delhi, Mumbai, Hyderabad, Pune, Chennai, Chandigarh, Jammu & Kashmir. 30+ projects delivered with 100% customer satisfaction.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-blue-500/20 px-3 py-1 rounded-full text-xs text-blue-400">
                30+ Projects
              </div>
              <div className="bg-purple-500/20 px-3 py-1 rounded-full text-xs text-purple-400">
                100% Satisfaction
              </div>
            </div>
          </motion.div>

          {/* Our Services */}
          <motion.div variants={textVariants} initial="initial" animate="animate">
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Our Services</h3>
            <ul className="space-y-3">
              {[
                { label: "Custom Software Development", href: "/services/custom-software-development" },
                { label: "Website Development", href: "/services/web-development" },
                { label: "Mobile App Development", href: "/services/mobile-development" },
                { label: "Digital Marketing", href: "/services/digital-marketing" },
                { label: "IT Consulting", href: "/services/it-consulting" },
              ].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
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

          {/* We Serve — Location Pages */}
          <motion.div variants={textVariants} initial="initial" animate="animate">
            <h3 className="text-lg font-semibold mb-6 text-blue-400">We Serve</h3>
            <ul className="space-y-3">
              {[
                { label: "Software Agency in Bangalore", href: "/services/best-software-agency-bangalore" },
                { label: "Software Agency in Delhi", href: "/services/best-software-agency-delhi" },
                { label: "Software Agency in Mumbai", href: "/services/best-software-agency-mumbai" },
                { label: "Software Agency in Hyderabad", href: "/services/best-software-agency-hyderabad" },
                { label: "Software Agency in Pune", href: "/services/best-software-agency-pune" },
                { label: "Software Agency in Chennai", href: "/services/best-software-agency-chennai" },
                { label: "Software Agency in Chandigarh", href: "/services/best-software-agency-chandigarh" },
                { label: "Software Agency in Jammu", href: "/services/best-software-agency-jammu" },
                { label: "Software Agency in Kashmir", href: "/services/best-software-agency-kashmir" },
                { label: "Software Agency in Udhampur", href: "/services/best-software-agency-udhampur" },
                { label: "Software Agency in Katra", href: "/services/best-software-agency-katra" },
              ].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
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

          {/* Useful Links */}
          <motion.div variants={textVariants} initial="initial" animate="animate">
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Useful Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Refund Policy", href: "/refund" },
                { label: "Portfolio", href: "/showcase" },
                { label: "FAQs", href: "/faqs" },
              ].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
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

          {/* Get In Touch */}
          <motion.div variants={textVariants} initial="initial" animate="animate">
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Get In Touch</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Testimonials", href: "/showcase" },
                { label: "AI Agents", href: "/agents" },
              ].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
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

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <a
                href="https://wa.me/917006377796"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <a
                href="mailto:snipercoders25@gmail.com"
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                snipercoders25@gmail.com
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-10 border-t border-blue-500/20 text-center text-gray-400 text-sm"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <p>
            © {new Date().getFullYear()} SniperCoders — Best Software and IT Company in India. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Best Software Agency in Bangalore | Delhi | Mumbai | Hyderabad | Pune | Chennai | Chandigarh | Jammu | Kashmir | Udhampur | Katra
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </footer>
  );
}