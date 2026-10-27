'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Award, Sparkles, Scale, RefreshCw } from 'lucide-react';

export const HeritageCraftsmanship: React.FC = () => {
  return (
    <section id="heritage" className="py-20 bg-[#FAF7F2] border-t border-[#C59B27]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Workshop Artisan & Wax Seal Arch */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Arch Shaped Photo */}
              <div className="relative h-[460px] w-full rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
                <Image
                  src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&w=800&q=80"
                  alt="Jewellery Craftsmanship Artisan Workshop"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Wax Seal Monogram Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#0B2319] text-[#E5C378] p-5 rounded-2xl shadow-xl border border-[#C59B27]/40 flex flex-col items-center justify-center text-center w-36">
                <Award className="w-8 h-8 text-[#C59B27] mb-1" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5C378]">
                  EST. 1984
                </span>
                <span className="text-xs font-serif font-bold text-white mt-0.5">
                  Handcrafted With Devotion
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & 4 Commitments */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5C378]/25 text-[#8C6411] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Generations of Trust</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B2319] leading-tight">
              A Legacy of Grace, Purity <br className="hidden sm:inline" />
              &amp; Timeless Craftsmanship
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              For over four decades, our master karigars (artisans) have merged ancient Shilpa
              Shastra precision with modern jewelry design. Every piece — whether an everyday 925
              silver payal, an imperial 22K gold bridal necklace, or an auspicious consecrated
              silver puja thali — is an enduring emblem of pride.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#C59B27]/20 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#E5C378]/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#8C6411]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B2319]">100% BIS Hallmarked</h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Laser-engraved BIS HUID mark verifying 22K/18K purity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#C59B27]/20 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#E5C378]/20 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5 text-[#8C6411]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B2319]">
                    Certified 925 &amp; 999 Silver
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Guaranteed fineness certificate accompanying all silverware.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#C59B27]/20 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#E5C378]/20 flex items-center justify-center shrink-0">
                  <RefreshCw className="w-5 h-5 text-[#8C6411]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B2319]">Lifetime Buyback</h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Transparent valuation and exchange at prevailing bullion market rates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#C59B27]/20 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#E5C378]/20 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#8C6411]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B2319]">Ethically Sourced</h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Conflict-free diamonds, certified gemstones, and green refining.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
