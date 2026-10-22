'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SpecialMomentsProps {
  onSelectCategory: (category: string) => void;
}

export const SpecialMoments: React.FC<SpecialMomentsProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-16 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Bridal & Solitaires */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[380px] sm:min-h-[420px] flex items-end group">
            <Image
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80"
              alt="Bridal and Special Moments Fine Jewelry"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="relative z-10 p-8 sm:p-10 space-y-3 text-white max-w-md">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#E5C378] text-[10px] uppercase font-bold tracking-widest">
                <Sparkles className="w-3 h-3" />
                <span>Everlasting Bonds</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Crafted for Life&apos;s Special Moments
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 font-light">
                Discover bespoke 22K gold bridal necklaces, solitaire diamond rings, and precious heirloom jewels.
              </p>
              <button
                onClick={() => onSelectCategory('Gold')}
                className="pt-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5C378] hover:text-white transition-colors"
              >
                <span>Explore Bridal &amp; Gold</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Sacred Silverware & Divine Gifts */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[380px] sm:min-h-[420px] flex items-end group">
            <Image
              src="https://images.unsplash.com/photo-1610444583713-33924f0c4ee7?auto=format&fit=crop&w=1000&q=80"
              alt="Pure Silver Utensils and Divine Gifts"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="relative z-10 p-8 sm:p-10 space-y-3 text-white max-w-md">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#E5C378] text-[10px] uppercase font-bold tracking-widest">
                <Sparkles className="w-3 h-3" />
                <span>Sacred Blessings</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                A Sacred Gift That Lasts Forever
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 font-light">
                Pure silver puja thalis, consecrated divine idols, and electroplated treasures for weddings and housewarmings.
              </p>
              <button
                onClick={() => onSelectCategory('Utensils')}
                className="pt-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5C378] hover:text-white transition-colors"
              >
                <span>Explore Sacred Silverware</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
