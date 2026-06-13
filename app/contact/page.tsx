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
        <section className="relative isolate px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />

          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Contact
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Tell us what you want your content and ads to do next.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Share your niche, current content, offer, and growth goal. We will reply with the
              clearest next step for video editing, social media, ad creatives, or a full creative sprint.
            </p>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
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
                      placeholder="+91 XXXXX XXXXX"
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
      </main>
      <Footer />
    </>
  );
}
