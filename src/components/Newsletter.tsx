'use client';

import React, { useState } from 'react';
import { Mail, Phone, User, Check, Sparkles, MapPin, ShieldCheck } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Custom Bridal & 22K Gold Jewellery',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && (formData.phone.trim() || formData.email.trim())) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact-section" className="py-20 bg-[#FBF9F5] border-t border-[#E8DAC2]/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Open, unboxed 2-column layout */}
        <div className="flex max-[1050px]:flex-col gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand & Concierge Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59B27]/10 border border-[#C59B27]/25 text-[#9E7518] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Bespoke Concierge &amp; Inquiries</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-medium tracking-tight leading-tight">
                Connect with Our Master Jewellers
              </h2>

              <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed mt-3">
                Whether you seek bespoke bridal 22K gold creations, consecrated pure silver puja
                thalis, or private boutique appointments, our master artisans are at your service.
              </p>
            </div>

            {/* Direct Boutique Contact Details */}
            <div className="pt-2 space-y-4 border-t border-stone-200/80">
              <div className="flex items-center gap-3.5 text-xs text-stone-700">
                <div className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-[#9E7518] shrink-0 shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
                    Direct Call &amp; WhatsApp
                  </p>
                  <p className="font-medium text-stone-900 text-sm">+91 98765 XXXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-xs text-stone-700">
                <div className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-[#9E7518] shrink-0 shadow-2xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
                    Concierge Email
                  </p>
                  <p className="font-medium text-stone-900 text-sm">concierge@skjewellers.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-stone-700">
                <div className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-[#9E7518] shrink-0 shadow-2xs mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
                    Flagship Boutiques
                  </p>
                  <p className="font-medium text-stone-900 text-sm leading-snug">
                    Zaveri Bazaar, Mumbai &bull; Connaught Place, New Delhi
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-stone-800 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C59B27] shrink-0" />
              <span>BIS 916 &amp; 925 Hallmarking Guarantee On Every Order</span>
            </div>
          </div>

          {/* Right Column: Clean Open Contact Form (7 cols) */}
          <div className="lg:w-[45%] w-full shrink-0">
            {submitted ? (
              <div className="py-16 text-center space-y-4 bg-white/60 rounded-3xl p-8 border border-stone-200/60">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#C59B27]/15 flex items-center justify-center text-[#9E7518]">
                  <Check className="w-7 h-7 stroke-[2.5]" />
                </div>
                <h3 className="font-serif text-2xl text-stone-900 font-medium">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto font-light leading-relaxed">
                  Thank you,{' '}
                  <strong className="font-semibold text-stone-900">{formData.name}</strong>. Our
                  senior jewelry concierge will reach out to you within 2 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      service: 'Custom Bridal & 22K Gold Jewellery',
                      message: '',
                    });
                  }}
                  className="mt-2 w-full text-xs font-bold uppercase tracking-widest text-[#9E7518] hover:text-[#1C1917] transition-colors"
                >
                  Send Another Message &rarr;
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Radhika Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-all shadow-2xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" />
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-all shadow-2xs"
                    >
                      <option>Custom Bridal &amp; 22K Gold Jewellery</option>
                      <option>925 Sterling Silver Heirlooms &amp; Payals</option>
                      <option>Sacred Pure Silver Utensils &amp; Idols</option>
                      <option>18K Micron Electroplated Collections</option>
                      <option>Book a Boutique Visit / Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Your Message or Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share your requirements (e.g. customized bridal necklace set, weight preferences, or consultation timing)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-all shadow-2xs resize-none"
                  />
                </div>

                {/* Submit Button (Identical structure to 'Find Your Perfect Piece' button) */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center px-8 sm:px-10 py-3.5 bg-[#7D806C] hover:bg-[#6B6E5A] text-white text-[11px] sm:text-[12px] font-medium tracking-[0.22em] uppercase transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
                >
                  SEND MESSAGE &amp; REQUEST CALLBACK
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
