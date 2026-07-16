'use client';

import Footer from '@/components/Footer';
import { ArrowRight, Clock, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

const services = [
  'Short-Form Video Editing',
  'Social Media Marketing',
  'Meta Ads Creatives',
  'Google Ads Creatives',
  'Content Strategy',
  'Brand Storytelling',
  'Website or Landing Page',
  'Monthly Creative Retainer',
  'Other',
];

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    value: 'snipercoders25@gmail.com',
    copy: 'Best for briefs, references, and project details.',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 7006377796',
    copy: 'For quick questions and discovery calls.',
  },
  {
    icon: Clock,
    title: 'Response',
    value: '1-2 business hours',
    copy: 'Send your niche, goal, and current content.',
  },
];

// ✅ FAQ data for AI discovery
const faqs = [
  {
    question: 'How can I contact SniperCoders?',
    answer: 'You can contact SniperCoders via the contact form on this page, by email at snipercoders25@gmail.com, or by phone at +91 7006377796. We typically respond within 1-2 business hours.'
  },
  {
    question: 'What information should I include in my contact message?',
    answer: 'For the best response, include your brand name, target audience, current challenge, content goals, and whether you need one-off edits or a recurring content system. Also include any links to your current website or social media.'
  },
  {
    question: 'How quickly does SniperCoders respond to inquiries?',
    answer: 'We typically respond to all inquiries within 1-2 business hours during working hours. For urgent matters, WhatsApp is the fastest way to reach us.'
  },
  {
    question: 'Do you work with clients outside India?',
    answer: 'Yes! SniperCoders works with clients globally. We serve founders, creators, coaches, startups, and agencies worldwide.'
  },
  {
    question: 'What happens after I submit the contact form?',
    answer: 'After you submit the form, we will review your message and respond via your preferred contact method. We may schedule a discovery call to discuss your project in more detail.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes, we offer a free initial consultation to discuss your project requirements, goals, and how we can help. This helps us understand your needs and provide an accurate proposal.'
  },
];

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-base leading-8 text-slate-300">{copy}</p> : null}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const whatsappNumber = '917006377796';
    const whatsappMessage =
      `*New Growth Lead From SniperCoders Website*%0A%0A` +
      `Name: ${encodeURIComponent(formData.fullName)}%0A` +
      `Email: ${encodeURIComponent(formData.email)}%0A` +
      `Phone: ${encodeURIComponent(formData.phone)}%0A` +
      `Service Interested: ${encodeURIComponent(formData.service)}%0A%0A` +
      `Message:%0A${encodeURIComponent(formData.message)}`;

    try {
      await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          whatsappNumber: formData.phone,
          serviceRequired: formData.service,
          selectedPackage: 'Contact Form',
          selectedPlan: 'General Inquiry',
          selectedPrice: 'Not selected',
          projectDescription: formData.message,
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/contact',
          currentUrl: typeof window !== 'undefined' ? window.location.href : '/contact',
          pricingPageUrl: '',
        }),
      });
    } catch (error) {
      console.error('Lead save failed before WhatsApp open', error);
    }

    if (typeof window !== 'undefined') {
      const fbq = (window as { fbq?: (action: string, event: string) => void }).fbq;
      if (fbq) {
        fbq('track', 'Lead');
      }
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    }

    setSubmitStatus('success');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
      service: '',
    });
    setLoading(false);
  };

  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        {/* ✅ AI-FRIENDLY HERO SECTION */}
        <section className="relative isolate px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />

          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Contact
            </p>
            {/* ✅ H1: Added keywords */}
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Contact SniperCoders — Video Editing and Social Media Marketing Agency
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              <strong>SniperCoders</strong> is a creative growth agency based in Bangalore, India. 
              Share your niche, current content, offer, and growth goal. We will reply with the
              clearest next step for video editing, social media, ad creatives, or a full creative sprint.
            </p>
          </div>
        </section>

        {/* ✅ CONTACT FORM AND INFO SECTION */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold">Start with a simple brief.</h2>
                <p className="mt-4 leading-7 text-slate-300">
                  The best message includes your brand link, target audience, current challenge,
                  and whether you need one-off edits or a recurring content system.
                </p>
              </div>

              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                          {card.title}
                        </p>
                        <p className="mt-2 font-semibold text-white">{card.value}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{card.copy}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </aside>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/20 sm:p-8 lg:p-10">
              {submitStatus ? (
                <div className="mb-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm font-medium text-emerald-100">
                  Redirecting to WhatsApp. Your form has been cleared.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-300">
                      Full name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="Your name"
                      onChange={handleChange}
                      value={formData.fullName}
                      className="w-full rounded-xl border border-white/10 bg-slate-950/70 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@brand.com"
                      onChange={handleChange}
                      value={formData.email}
                      className="w-full rounded-xl border border-white/10 bg-slate-950/70 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">
                      Phone or WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 7006377796"
                      onChange={handleChange}
                      value={formData.phone}
                      className="w-full rounded-xl border border-white/10 bg-slate-950/70 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-300">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      onChange={handleChange}
                      value={formData.service}
                      className="w-full rounded-xl border border-white/10 bg-slate-950/70 p-4 text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-slate-950">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your brand, audience, offer, content goals, and timeline."
                    onChange={handleChange}
                    value={formData.message}
                    rows={6}
                    className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/70 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                  {loading ? <ArrowRight className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ✅ FAQ SECTION - Critical for AI discovery */}
        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions About Contacting SniperCoders"
              copy="Find answers to common questions about reaching out, response times, and our consultation process."
            />
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:border-cyan-300/30 transition"
                >
                  <h3 className="text-lg font-semibold text-cyan-300">{faq.question}</h3>
                  <p className="mt-2 text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ FINAL CTA SECTION */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Ready to Start?
                </p>
                <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
                  Let SniperCoders Help You Create Content That Converts
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-200">
                  Reach out today and let&apos;s discuss how we can help you with video editing, 
                  social media marketing, and ad creative production.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/917006377796?text=Hello%20SniperCoders%2C%20I%20want%20to%20discuss%20a%20creative%20growth%20sprint%20for%20my%20brand."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                >
                  <MessageCircle className="h-4 w-4" />
                  Start on WhatsApp
                </a>
                <a
                  href="mailto:snipercoders25@gmail.com"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                >
                  <Mail className="h-4 w-4" />
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}