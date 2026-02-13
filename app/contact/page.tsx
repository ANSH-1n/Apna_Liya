// //app/contact/page.tsx
// "use client";
// import React, { useState } from "react";
// import { AiOutlineWhatsApp } from "react-icons/ai";
// import Footer from "@/components/Footer";
// interface FormData {
//   fullName: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// const ContactPage: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<string | null>(null);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     const whatsappNumber = "916006254188"; // Replace with your WhatsApp number

//     const whatsappMessage =
//       `*New Lead From Website*%0A%0A` +
//       `Name: ${formData.fullName}%0A` +
//       `Email: ${formData.email}%0A` +
//       `Phone: ${formData.phone}%0A%0A` +
//       `Message:%0A${formData.message}`;

//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

//     // ================= META LEAD EVENT =================
//     if (typeof window !== "undefined") {
//       const fbq = (window as { fbq?: (action: string, event: string) => void }).fbq;
//       if (fbq) {
//         fbq("track", "Lead");
//       }
//     }
//     // ==================================================

//     window.open(whatsappUrl, "_blank");

//     setSubmitStatus("success");

//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       message: "",
//     });

//     setLoading(false);
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen p-10">
//       <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

//       {submitStatus && (
//         <div className="text-green-400 text-center mb-4">
//           Redirecting to WhatsApp...
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
//         <input
//           name="fullName"
//           required
//           placeholder="Full Name"
//           onChange={handleChange}
//           value={formData.fullName}
//           className="w-full p-3 mb-4 rounded bg-gray-700"
//         />

//         <input
//           name="email"
//           type="email"
//           required
//           placeholder="Email"
//           onChange={handleChange}
//           value={formData.email}
//           className="w-full p-3 mb-4 rounded bg-gray-700"
//         />

//         <input
//           name="phone"
//           type="tel"
//           placeholder="Phone"
//           onChange={handleChange}
//           value={formData.phone}
//           className="w-full p-3 mb-4 rounded bg-gray-700"
//         />

//         <textarea
//           name="message"
//           required
//           placeholder="Message"
//           onChange={handleChange}
//           value={formData.message}
//           className="w-full p-3 mb-4 rounded bg-gray-700"
//           rows={5}
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-green-500 p-4 rounded font-bold flex justify-center items-center gap-2 hover:bg-green-600 transition-colors disabled:opacity-50"
//         >
//           <AiOutlineWhatsApp size={22} />
//           {loading ? "Sending..." : "Send via WhatsApp"}
//         </button>
//       </form>

// <Footer />
//     </div>
//   );
// };

// export default ContactPage;











//app/contact/page.tsx
"use client";
import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Footer from "@/components/Footer";


interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}


const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const services = [
    "Website Development",
    "Custom Coded Website",
    "Business Website",
    "eCommerce Website Development",
    "App Development",
    "SEO Services",
    "Google Ads",
    "Meta Ads",
    "Social Media Marketing",
    "Content Creation",
    "Video Editing",
    "Other"
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const whatsappNumber = "916006254188"; // Replace with your WhatsApp number

    const whatsappMessage =
      `*New Lead From SniperCoders Website*%0A%0A` +
      `Name: ${formData.fullName}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Service Interested: ${formData.service}%0A%0A` +
      `Message:%0A${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // ================= META LEAD EVENT =================
    if (typeof window !== "undefined") {
      const fbq = (window as { fbq?: (action: string, event: string) => void }).fbq;
      if (fbq) {
        fbq("track", "Lead");
      }
    }
    // ==================================================

    window.open(whatsappUrl, "_blank");

    setSubmitStatus("success");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
      service: "",
    });

    setLoading(false);
  };

  return (
    <>
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h1>Contact SniperCoders - Best Website Development Company Near Me in India</h1>
        <p>
          Contact SniperCoders, the best software and IT company in India specializing in custom coded websites, 
          business website development, eCommerce website development, and app development. We are the best 
          website development company near me offering web design, app development agency services, content creation, 
          video editing, SEO services, Google Ads, Meta Ads, and social media marketing in India.
        </p>
      </div>

      <div className="bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white min-h-screen p-6 md:p-10">
        {/* Header Section with SEO Keywords */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with <span className="text-cyan-400 font-semibold">India&apos;s best IT company</span> for 
              <span className="text-purple-400 font-semibold"> custom website development</span>, 
              <span className="text-cyan-400 font-semibold"> app development</span>, and 
              <span className="text-purple-400 font-semibold"> digital marketing solutions</span>
            </p>
          </div>

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            {[
              "Website Development Near Me",
              "Custom Coded Websites",
              "Business Websites",
              "eCommerce Development",
              "App Development Agency",
              "SEO Services",
              "Digital Marketing"
            ].map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-xs md:text-sm text-gray-200 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {submitStatus && (
          <div className="text-green-400 text-center mb-4 text-lg animate-pulse">
            ✓ Redirecting to WhatsApp...
          </div>
        )}

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 md:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6" itemScope itemType="https://schema.org/ContactPage">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Enter your full name"
                    onChange={handleChange}
                    value={formData.fullName}
                    className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                    itemProp="name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                    itemProp="email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    onChange={handleChange}
                    value={formData.phone}
                    className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                    itemProp="telephone"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interested In <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    onChange={handleChange}
                    value={formData.service}
                    className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-gray-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project requirements..."
                  onChange={handleChange}
                  value={formData.message}
                  className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500 resize-none"
                  rows={6}
                  itemProp="description"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 p-4 md:p-5 rounded-lg font-bold flex justify-center items-center gap-3 hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-green-500/50 text-lg group"
                aria-label="Send message via WhatsApp"
              >
                <AiOutlineWhatsApp size={26} className="group-hover:scale-110 transition-transform" />
                {loading ? "Sending..." : "Send via WhatsApp"}
              </button>

              <p className="text-center text-gray-400 text-sm mt-4">
                We typically respond within 1-2 business hours
              </p>
            </form>
          </div>
        </div>

        {/* Additional Contact Information */}
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-black/40 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all">
            <div className="text-cyan-400 text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-300">info@snipercoders.com</p>
            <p className="text-sm text-gray-400 mt-2">Best IT company in India</p>
          </div>

          <div className="bg-black/40 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-all">
            <div className="text-purple-400 text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-300">+91 600 625 4188</p>
            <p className="text-sm text-gray-400 mt-2">Website development near me</p>
          </div>

          <div className="bg-black/40 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all">
            <div className="text-cyan-400 text-4xl mb-4">🕐</div>
            <h3 className="text-xl font-bold mb-2">Business Hours</h3>
            <p className="text-gray-300">Mon - Sat: 9AM - 6PM</p>
            <p className="text-sm text-gray-400 mt-2">App development agency</p>
          </div>
        </div>

        {/* SEO Rich Footer Section */}
        <div className="max-w-6xl mx-auto mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Why Choose SniperCoders?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Best Website Development Company
              </h3>
              <p className="leading-relaxed">
                As the <span className="text-cyan-400 font-semibold">best website development company near me in India</span>, 
                we deliver <span className="text-purple-400 font-semibold">custom coded websites</span>, 
                <span className="text-cyan-400 font-semibold"> business websites</span>, and 
                <span className="text-purple-400 font-semibold"> eCommerce website development</span> solutions 
                tailored to your business needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-purple-400">✓</span> Complete Digital Solutions
              </h3>
              <p className="leading-relaxed">
                Beyond being the <span className="text-cyan-400 font-semibold">best app development agency near me</span>, 
                we offer comprehensive services including <span className="text-purple-400 font-semibold">SEO</span>, 
                <span className="text-cyan-400 font-semibold"> Google Ads</span>, 
                <span className="text-purple-400 font-semibold"> Meta Ads</span>, 
                <span className="text-cyan-400 font-semibold"> social media marketing</span>, 
                content creation, and video editing.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-300">
              <span className="text-cyan-400 font-bold">30+ Projects Delivered</span> • 
              <span className="text-purple-400 font-bold"> 100% Customer Satisfaction</span> • 
              <span className="text-cyan-400 font-bold"> Best IT Company in India</span>
            </p>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
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

        select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236ee7b7'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.5rem;
          padding-right: 3rem;
        }
      `}</style>
    </>
  );
};

export default ContactPage;