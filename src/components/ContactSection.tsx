/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle2, ChevronDown, ExternalLink } from 'lucide-react';
import { CHAPTER_INFO, FAQS } from '../data/gdgData';
import { BlurText } from './BlurText';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Workshop Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#86868B] mb-3">
            Connect & Visit
          </div>
          <BlurText
            text="Connect with the chapter."
            delay={60}
            direction="bottom"
            stepDuration={0.3}
            as="h2"
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-tight mb-4"
          />
          <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#A1A1A6] font-normal leading-relaxed">
            Have questions about workshops, want to mentor students, or collaborate as an industry partner? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Campus Info & FAQ */}
          <div className="lg:col-span-7 space-y-8">
            {/* Campus Location Card */}
            <div className="bg-[#F5F5F7] dark:bg-[#121214] rounded-3xl p-7 sm:p-8 border border-black/[0.05] dark:border-white/[0.08] space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white dark:bg-[#252528] shadow-xs text-[#EA4335] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1D1D1F] dark:text-white tracking-tight">
                    Chapter Campus Address
                  </h3>
                  <p className="text-sm text-[#515154] dark:text-[#A1A1A6] mt-1 leading-relaxed">
                    {CHAPTER_INFO.campusAddress}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#86868B] mt-2 font-mono">
                    <span>Coordinates: {CHAPTER_INFO.coordinates}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#515154] dark:text-[#A1A1A6]">
                  <Mail className="w-4 h-4 text-[#4285F4]" />
                  <span>{CHAPTER_INFO.email}</span>
                </div>

                <a
                  href={CHAPTER_INFO.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#1D1D1F] dark:text-white hover:underline"
                >
                  <span>Official GDG Community Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-2">
                Frequently Answered Questions
              </h3>
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-black/[0.06] dark:border-white/[0.08] rounded-2xl overflow-hidden bg-white dark:bg-[#18181A] transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-[15px] text-[#1D1D1F] dark:text-white"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#86868B] transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed border-t border-black/[0.04] dark:border-white/[0.06]">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Clean Apple Form */}
          <div className="lg:col-span-5 bg-[#FAFAFC] dark:bg-[#18181A] rounded-3xl p-7 sm:p-9 border border-black/[0.06] dark:border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F] dark:text-white mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] mb-6">
              Our organizing committee responds within 24 to 48 hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#EBF5EE] dark:bg-[#122A1A] border border-[#34A853]/20 dark:border-[#34A853]/30 text-center space-y-2 py-12">
                <div className="w-10 h-10 rounded-full bg-[#34A853] text-white flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#1D1D1F] dark:text-white">
                  Message Dispatched!
                </h4>
                <p className="text-xs text-[#515154] dark:text-[#A1A1A6]">
                  Thank you for reaching out. The TIU GDG core team will get in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-[#1D1D1F] dark:text-white underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white dark:bg-[#252528] rounded-xl border border-black/[0.08] dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 dark:focus:ring-white/20 text-[#1D1D1F] dark:text-white placeholder:text-[#86868B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white dark:bg-[#252528] rounded-xl border border-black/[0.08] dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 dark:focus:ring-white/20 text-[#1D1D1F] dark:text-white placeholder:text-[#86868B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mb-1.5">
                    Topic
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-white dark:bg-[#252528] rounded-xl border border-black/[0.08] dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 dark:focus:ring-white/20 text-[#1D1D1F] dark:text-white"
                  >
                    <option value="Workshop Inquiry">Attending / Hosting Workshops</option>
                    <option value="DEVX Summit Sponsor">DEVX Summit 2026 Sponsorship</option>
                    <option value="Speaker Proposal">Tech Speaker / Mentorship Proposal</option>
                    <option value="Core Team Inquiry">Join the Organizing Council</option>
                    <option value="General Query">Other Campus Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help or collaborate?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white dark:bg-[#252528] rounded-xl border border-black/[0.08] dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 dark:focus:ring-white/20 text-[#1D1D1F] dark:text-white resize-none placeholder:text-[#86868B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold text-white dark:text-black bg-[#1D1D1F] dark:bg-white hover:bg-black dark:hover:bg-[#E5E5E7] rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Chapter Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Newsletter Subscription Strip with Apple-style border and subtle hover-glow */}
        <div className="mt-16 pt-12 border-t border-black/[0.06] dark:border-white/[0.08]">
          <div className="relative rounded-3xl bg-[#F5F5F7] dark:bg-[#121214] border border-black/[0.06] dark:border-white/[0.08] p-8 sm:p-10 md:p-12 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)] group hover:shadow-[0_12px_40px_rgba(66,133,244,0.08)] dark:hover:shadow-[0_12px_40px_rgba(66,133,244,0.18)] transition-all duration-500">
            {/* Subtle Google Accent Glow on Card Hover */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#4285F4]/08 dark:bg-[#4285F4]/15 blur-3xl pointer-events-none group-hover:bg-[#4285F4]/15 dark:group-hover:bg-[#4285F4]/25 transition-all duration-700" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#34A853]/06 dark:bg-[#34A853]/12 blur-3xl pointer-events-none group-hover:bg-[#34A853]/12 dark:group-hover:bg-[#34A853]/20 transition-all duration-700" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#A1A1A6]">
                <Mail className="w-3.5 h-3.5 text-[#4285F4]" />
                <span>The TIU Developer Dispatch</span>
              </div>

              <BlurText
                text="Stay in sync with GDG on Campus."
                delay={60}
                direction="bottom"
                stepDuration={0.3}
                as="h3"
                className="justify-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-white"
              />

              <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] max-w-xl mx-auto leading-relaxed">
                Receive curated bi-weekly digests on upcoming hackathons, hands-on speaker labs, Google Cloud credits, and open-source project drops.
              </p>

              {/* Apple-style Newsletter Input Form with hover-glow transition */}
              <div className="pt-3 max-w-md mx-auto">
                {newsletterSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-[#34A853]/25 dark:border-[#34A853]/40 shadow-xs flex items-center justify-center gap-2 text-xs text-[#1D1D1F] dark:text-white font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#34A853]" />
                    <span>You&apos;re subscribed to the Dispatch! We will keep you updated.</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                    <div className="relative flex items-center bg-white dark:bg-[#1C1C1E] rounded-full p-1.5 border border-black/[0.08] dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-black/20 dark:hover:border-white/20 hover:shadow-[0_6px_24px_rgba(66,133,244,0.12)] dark:hover:shadow-[0_6px_24px_rgba(66,133,244,0.25)] focus-within:border-[#4285F4]/60 focus-within:ring-4 focus-within:ring-[#4285F4]/10 dark:focus-within:ring-[#4285F4]/20 focus-within:shadow-[0_8px_30px_rgba(66,133,244,0.16)] transition-all duration-300">
                      <div className="pl-3.5 pr-2 text-[#86868B]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="Enter your student email..."
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        className="w-full py-2 text-xs text-[#1D1D1F] dark:text-white placeholder:text-[#86868B] bg-transparent focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="px-5 py-2.5 text-xs font-semibold text-white dark:text-black bg-[#1D1D1F] dark:bg-white hover:bg-black dark:hover:bg-[#E5E5E7] rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm whitespace-nowrap shrink-0 flex items-center gap-1.5"
                      >
                        <span>Subscribe</span>
                        <Send className="w-3 h-3 opacity-80" />
                      </button>
                    </div>
                    <div className="text-[11px] text-[#86868B] text-center">
                      Zero spam. Unsubscribe anytime with a single click.
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
