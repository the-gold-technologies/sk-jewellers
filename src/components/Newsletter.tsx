'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Sparkles, Check, Gift, Copy } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText('ROYAL10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-14 sm:py-16 bg-[#0B2319] text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 rounded-full bg-[#E5C378]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-[#16402F]/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#13392A]/60 p-8 sm:p-12 rounded-3xl border border-[#C59B27]/30 shadow-2xl">
          
          {/* Left Column: Heading & Value */}
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5C378]/20 text-[#E5C378] text-xs font-semibold uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5" />
              <span>Royal Privileges Club</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-white">
              Get Exclusive Offers &amp; Festive Previews
            </h2>

            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
              Subscribe to receive private invitations to heritage bullion launches, Diwali &amp; Akshay Tritiya discounts, and an instant 10% voucher code.
            </p>

            {submitted ? (
              <div className="pt-2">
                <div className="bg-[#0B2319] border border-[#C59B27] rounded-xl p-4 flex items-center justify-between gap-4 max-w-md">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-xs text-stone-200">Welcome to the Club! Use voucher:</p>
                      <strong className="text-sm font-mono tracking-wider text-[#E5C378]">ROYAL10</strong>
                    </div>
                  </div>
                  <button
                    onClick={copyCode}
                    className="bg-[#C59B27] hover:bg-[#9E7518] text-[#0B2319] text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-2 flex flex-col sm:flex-row gap-2 max-w-md">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-[#C59B27]/40 rounded-xl text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#C59B27] hover:bg-[#9E7518] text-[#0B2319] hover:text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Luxury Gift Box Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#C59B27]/40 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80"
                alt="Luxury Jewellery Gift Packaging"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="text-[11px] text-[#E5C378] font-serif italic">
                  Royal velvet gift box with certificate with every order
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
