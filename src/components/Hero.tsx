'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onCategoryClick: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onCategoryClick }) => {
  return (
    <section
      id="hero"
      className="relative bg-[#FAF5EE] overflow-hidden min-h-[540px] lg:min-h-[620px] flex flex-col justify-center"
    >
      {/* Background Model Image Bleeding From Top to Bottom on Right */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[62%] h-full pointer-events-none select-none z-0">
        <Image
          src="/images/luxora-hero.jpg"
          alt="SK Jewellers Model Wearing Diamond Chandelier Earrings and Teardrop Pendant"
          fill
          priority
          className="object-cover object-[70%_25%] lg:object-[center_20%]"
        />

        {/* Seamless Soft Fade & Blurriness from Right Image into Left Cream Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5EE] via-[#FAF5EE]/90 via-30% sm:via-25% to-transparent hidden lg:block" />
        {/* Mobile / Tablet vertical overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5EE]/80 via-[#FAF5EE]/95 to-[#FAF5EE] lg:hidden" />
      </div>

      {/* Main Hero Content Area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full py-16 sm:py-24 relative z-10">
        <div className="max-w-xl xl:max-w-2xl text-center lg:text-left space-y-5">
          {/* 1. Italic Kicker: Timeless Beauty, */}
          <p className="font-serif italic text-xl sm:text-2xl text-[#A67C1E] font-normal tracking-wide">
            Timeless Beauty,
          </p>

          {/* 2. Main Headline: Made Just ✦ For You */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-[68px] lg:text-[74px] xl:text-[80px] font-normal text-[#1A1815] tracking-tight leading-[1.05]">
            Made Just
            <span className="inline-block text-[#C59B27] text-2xl sm:text-3xl lg:text-4xl ml-2 align-super select-none animate-pulse">
              ✦
            </span>
            <br />
            <span className="font-serif font-bold text-[#1A1815]">For You</span>
          </h1>

          {/* 3. Dainty Vintage Gold Divider Motif */}
          <div className="flex items-center justify-center lg:justify-start py-1">
            <svg
              className="w-48 sm:w-56 h-5 text-[#C59B27]"
              viewBox="0 0 220 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left flourish line */}
              <path
                d="M12 11 C 45 11, 65 7, 95 11"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <circle cx="12" cy="11" r="2.2" fill="currentColor" />
              <path d="M26 9 Q 31 5 36 9" stroke="currentColor" strokeWidth="1" fill="none" />

              {/* Diamond Center 4-Point Star */}
              <path
                d="M110 2 L 113.5 9 L 120 11 L 113.5 13 L 110 20 L 106.5 13 L 100 11 L 106.5 9 Z"
                fill="currentColor"
              />

              {/* Right flourish line */}
              <path
                d="M125 11 C 155 7, 175 11, 208 11"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <circle cx="208" cy="11" r="2.2" fill="currentColor" />
              <path d="M184 9 Q 189 5 194 9" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>

          {/* 4. Subtitle with 2 Lines of Rich Description */}
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
            Discover exquisite jewelry crafted to celebrate every precious moment of your life,
            handcrafted in pure BIS hallmarked gold and sterling silver.
          </p>

          {/* 5. Shop Collection Button (Square Styled) */}
          <div className="flex items-center justify-center lg:justify-start pt-2">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#B88728] hover:bg-[#A3741E] text-white px-8 py-3.5 rounded-full font-medium text-sm sm:text-base tracking-wide transition-all shadow-md hover:shadow-lg duration-200"
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Category Quick Badges */}
          <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-stone-500">
            <span className="font-serif italic text-sm mr-1 text-stone-400">Collections:</span>
            {[
              { id: 'Gold', label: 'Gold Jewellery' },
              { id: 'Silver', label: 'Sterling Silver' },
              { id: 'Electroplated', label: 'Electroplated' },
              { id: 'Utensils', label: 'Puja Utensils' },
              { id: 'Idols', label: 'Divine Idols' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onCategoryClick(item.id)}
                className="bg-white/90 hover:bg-[#F3E5AB]/60 text-stone-700 hover:text-black px-3.5 py-1 rounded-full border border-[#E8DAC2] text-xs font-medium transition-all shadow-2xs"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
