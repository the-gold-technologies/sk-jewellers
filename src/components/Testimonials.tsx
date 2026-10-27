'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/data/jewelleryData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#FBF9F5] border-t border-[#C59B27]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E5C378]/25 text-[#8C6411] text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#C59B27] text-[#C59B27]" />
            <span>Patron Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B2319] tracking-tight">
            Loved By Thousands
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base font-light">
            Real stories from our patrons celebrating engagements, festive pujas, and heirloom
            milestones.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#C59B27]/20 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-stone-700 text-sm italic font-serif leading-relaxed">
                  &ldquo;{t.review}&rdquo;
                </p>

                {/* Item tag */}
                <div className="text-[11px] bg-[#FAF7F2] text-[#8C6411] px-2.5 py-1 rounded-md border border-[#C59B27]/20 font-medium inline-block">
                  Purchased: {t.itemPurchased}
                </div>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-5 mt-5 border-t border-stone-100 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#C59B27]/30 shrink-0">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B2319] leading-snug">{t.name}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified Buyer • {t.city}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
