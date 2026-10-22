"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, Truck, ShieldCheck, Award, X } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
  onCategoryClick: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onCategoryClick,
}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section
      id="hero"
      className="relative bg-[#FAF5EE] overflow-hidden min-h-[580px] lg:min-h-[660px] flex flex-col justify-between"
    >
      {/* Background Model Image Bleeding From Top to Bottom on Right */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[62%] h-full pointer-events-none select-none z-0">
        <Image
          src="/images/luxora-hero.jpg"
          alt="Luxora Model Wearing Diamond Chandelier Earrings and Teardrop Pendant"
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
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full pt-14 sm:pt-20 pb-28 sm:pb-36 relative z-10">
        <div className="max-w-xl xl:max-w-2xl text-center lg:text-left space-y-5">
          {/* 1. Italic Kicker: Timeless Beauty, (Restored to previous size) */}
          <p className="font-serif italic text-xl sm:text-2xl text-[#A67C1E] font-normal tracking-wide">
            Timeless Beauty,
          </p>

          {/* 2. Main Headline: Made Just ✦ For You (Reduced 3-4px) */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-[68px] lg:text-[74px] xl:text-[80px] font-normal text-[#1A1815] tracking-tight leading-[1.05]">
            Made Just
            <span className="inline-block text-[#C59B27] text-2xl sm:text-3xl lg:text-4xl ml-2 align-super select-none animate-pulse">
              ✦
            </span>
            <br />
            <span className="font-serif font-bold text-[#1A1815]">For You</span>
          </h1>

          {/* 3. Dainty Vintage Gold Divider Motif (Exact Luxora Reference) */}
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
              <path
                d="M26 9 Q 31 5 36 9"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />

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
              <path
                d="M184 9 Q 189 5 194 9"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          {/* 4. Subtitle with Extra 2 Lines of Rich Description */}
          <p className="text-stone-600 text-sm sm:text-[17px] font-light leading-relaxed max-w-[485px] mx-auto lg:mx-0">
            Discover exquisite jewelry crafted to celebrate every precious
            moment of your life. Handcrafted in pure 22K BIS Hallmarked Gold,
            925 Sterling Silver, anti-tarnish electroplated luxury, and sacred
            puja silverware.
          </p>

          {/* 5. Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
            {/* Shop Collection -> Gold Pill Button */}
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#B88728] hover:bg-[#A3741E] text-white px-8 py-3.5 rounded-full font-medium text-sm sm:text-base tracking-wide transition-all shadow-md hover:shadow-lg duration-200"
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            {/* (Play) Watch Our Story Button */}
            <button
              onClick={() => setShowVideoModal(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-stone-800 hover:text-[#B88728] px-4 py-3 rounded-full font-medium text-sm sm:text-base tracking-wide transition-colors group"
            >
              <div className="w-9 h-9 rounded-full border border-stone-800 group-hover:border-[#B88728] flex items-center justify-center transition-colors">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span>Watch Our Story</span>
            </button>
          </div>

          {/* Category Quick Badges */}
          <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-stone-500">
            <span className="font-serif italic text-sm mr-1 text-stone-400">
              Collections:
            </span>
            {[
              { id: "Gold", label: "Gold Jewellery" },
              { id: "Silver", label: "Sterling Silver" },
              { id: "Electroplated", label: "Electroplated" },
              { id: "Utensils", label: "Puja Utensils" },
              { id: "Idols", label: "Divine Idols" },
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

      {/* Floating Trust Bar (Capsule Pill Positioned Below Model Neckline) */}
      <div className="relative z-20 px-6 sm:px-12 -mt-12 sm:-mt-16 pb-8 max-w-7xl mx-auto w-full">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full border border-[#E8DAC2] shadow-xl py-4 sm:py-5 px-6 sm:px-10 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          {/* 1. Premium Quality */}
          <div className="flex items-center gap-3.5 sm:px-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF5EE] flex items-center justify-center shrink-0 text-[#C59B27]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 stroke-current"
                strokeWidth="1.8"
              >
                <path d="M6 3h12l4 7-10 11L2 10l4-7z" />
                <path d="M12 21L8 10h8l-4 11z" />
                <path d="M2 10h20" />
                <path d="M12 3v7" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-serif font-bold text-[#1C1814]">
                Premium Quality
              </h4>
              <p className="text-[11px] text-stone-500 font-light leading-tight">
                Handpicked &amp; crafted with perfection
              </p>
            </div>
          </div>

          {/* 2. Free Shipping */}
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF5EE] flex items-center justify-center shrink-0 text-[#C59B27]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-serif font-bold text-[#1C1814]">
                Free Shipping
              </h4>
              <p className="text-[11px] text-stone-500 font-light leading-tight">
                Free &amp; fast delivery on all orders
              </p>
            </div>
          </div>

          {/* 3. Secure Payment */}
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF5EE] flex items-center justify-center shrink-0 text-[#C59B27]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-serif font-bold text-[#1C1814]">
                Secure Payment
              </h4>
              <p className="text-[11px] text-stone-500 font-light leading-tight">
                100% secure payment guarantee
              </p>
            </div>
          </div>

          {/* 4. Easy Returns */}
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF5EE] flex items-center justify-center shrink-0 text-[#C59B27]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-serif font-bold text-[#1C1814]">
                Easy Returns
              </h4>
              <p className="text-[11px] text-stone-500 font-light leading-tight">
                30 days easy return policy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Watch Our Story Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#FAF5EE] rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#C59B27]/40 shadow-2xl relative">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-stone-700"
            >
              <X className="w-5 h-5" />
            </button>
            <p className="text-xs uppercase font-bold tracking-widest text-[#A67C1E]">
              Behind the Karigars
            </p>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1 mb-3">
              Crafting Heirloom Jewelry Since 1984
            </h3>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-900 mb-4 border border-[#C59B27]/30 flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&w=800&q=80"
                alt="Jewelry making artisan"
                fill
                className="object-cover opacity-70"
              />
              <div className="relative z-10 text-center text-white space-y-2 p-4">
                <div className="w-12 h-12 rounded-full bg-[#C59B27] flex items-center justify-center mx-auto shadow-lg">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
                <p className="font-serif text-sm">
                  Watch the master artisans shaping pure gold and silver.
                </p>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Every curve, prong, and finish is inspected by certified
              gemologists to ensure BIS Hallmark authenticity and enduring
              heirloom brilliance.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
