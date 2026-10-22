'use client';

import React from 'react';
import Image from 'next/image';

interface SpecialMomentsProps {
  onSelectCategory?: (category: string) => void;
}

export const SpecialMoments: React.FC<SpecialMomentsProps> = ({ onSelectCategory }) => {
  const handleWeddingClick = () => {
    onSelectCategory?.('Gold');
    document.getElementById('explorer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGiftsClick = () => {
    onSelectCategory?.('Silver');
    document.getElementById('explorer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* 
        Full-Width Edge-to-Edge 2-Card Banner:
        - 50% left screen width + 50% right screen width on desktop
        - Zero outer box, zero rounded borders, zero margins
      */}
      <section className="w-full overflow-hidden">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          {/* Card 1 (Left): Crafted for Life's Special Moments (Wedding) */}
          <div className="group relative w-full h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[500px] bg-[#EBE5DC] overflow-hidden flex items-center">
            {/* Background image of stacked diamond rings on travertine stone */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/rings-stack.jpg"
                alt="Stacked Diamond Wedding Rings"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-left sm:object-[-40px_center] lg:object-left group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Natural gradient fade to blend image into warm travertine cream background on the right */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EBE5DC]/60 to-[#EBE5DC] sm:via-[#EBE5DC]/80 sm:to-[#EBE5DC]" />
            </div>

            {/* Typography & CTA Button (Right aligned layout, left aligned text) */}
            <div className="relative z-10 w-full flex justify-end px-6 sm:px-12 lg:px-16 xl:px-24">
              <div className="max-w-xs sm:max-w-sm space-y-5 text-left">
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal text-[#1C1814] leading-[1.15] tracking-tight">
                  Crafted
                  <br />
                  for Life&apos;s
                  <br />
                  Special Moments
                </h3>
                <div>
                  <button
                    onClick={handleWeddingClick}
                    className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 bg-[#72604D] hover:bg-[#5E4E3D] text-white text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer"
                  >
                    <span>EXPLORE WEDDING</span>
                    <span className="text-sm font-sans transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 (Right): A Gift That Lasts Forever (Gifts) - Ultra High-Res Sharp Presentation Image */}
          <div className="group relative w-full h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[500px] bg-[#16120E] overflow-hidden flex items-center">
            {/* Crystal-clear, un-pixelated high resolution jewellery presentation image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/pendant-gift.jpg"
                alt="A Gift That Lasts Forever - Fine Jewellery Presentation Gift Box"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Luxury dark vignette on the left to make white serif typography stand out crisply */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent w-full sm:w-[70%]" />
            </div>

            {/* Typography & CTA Button (Left aligned layout) */}
            <div className="relative z-10 w-full flex justify-start px-6 sm:px-12 lg:px-16 xl:px-24">
              <div className="max-w-xs sm:max-w-sm space-y-5 text-left">
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal text-white leading-[1.15] tracking-tight drop-shadow-xs">
                  A Gift
                  <br />
                  That Lasts
                  <br />
                  Forever
                </h3>
                <div>
                  <button
                    onClick={handleGiftsClick}
                    className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 bg-[#FAF5EE] hover:bg-white text-[#1C1814] text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
                  >
                    <span>SHOP GIFTS</span>
                    <span className="text-sm font-sans text-stone-600 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        Trust Badges Section (Directly underneath the full-width banners):
        - Increased icon size
        - Refined, smaller text size
        - Minimalist clean icons matching the reference
      */}
      <section className="w-full bg-[#FAF5EE] border-b border-[#E8DAC2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-stone-200/90 text-center">
            {/* 1. Ethically Sourced */}
            <div className="px-3 sm:px-6 flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center text-[#1C1814] mb-2.5">
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.25]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <polygon points="6,3 18,3 22,9 12,21 2,9" strokeLinejoin="round" />
                  <line x1="2" y1="9" x2="22" y2="9" />
                  <polyline points="6,3 12,9 18,3" strokeLinejoin="round" />
                  <line x1="12" y1="9" x2="12" y2="21" />
                </svg>
              </div>
              <h4 className="font-serif text-xs sm:text-[13px] font-bold text-[#1C1814] tracking-tight">
                Ethically Sourced
              </h4>
              <p className="text-stone-500 text-[10px] sm:text-[11px] font-light mt-0.5">
                Conflict-free diamonds
              </p>
            </div>

            {/* 2. Certified Quality */}
            <div className="px-3 sm:px-6 flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center text-[#1C1814] mb-2.5">
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.25]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5a2.5 2.5 0 0 0-2.5 2.5c0 1.5 2.5 4.5 2.5 4.5s2.5-3 2.5-4.5a2.5 2.5 0 0 0-2.5-2.5z"
                  />
                </svg>
              </div>
              <h4 className="font-serif text-xs sm:text-[13px] font-bold text-[#1C1814] tracking-tight">
                Certified Quality
              </h4>
              <p className="text-stone-500 text-[10px] sm:text-[11px] font-light mt-0.5">
                Authenticity guaranteed
              </p>
            </div>

            {/* 3. Sustainable Practices */}
            <div className="px-3 sm:px-6 flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center text-[#1C1814] mb-2.5">
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.25]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="7" r="3.2" />
                  <circle cx="8" cy="15" r="3.2" />
                  <circle cx="16" cy="15" r="3.2" />
                </svg>
              </div>
              <h4 className="font-serif text-xs sm:text-[13px] font-bold text-[#1C1814] tracking-tight">
                Sustainable Practices
              </h4>
              <p className="text-stone-500 text-[10px] sm:text-[11px] font-light mt-0.5">
                A brighter tomorrow
              </p>
            </div>

            {/* 4. Trusted by 50K+ */}
            <div className="px-3 sm:px-6 flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center text-[#1C1814] mb-2.5">
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.25]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12c-2.5-3.5-6-3.5-6 0s3.5 3.5 6 0zm0 0c2.5-3.5 6-3.5 6 0s-3.5 3.5-6 0zm0 0c-3.5 2.5-3.5 6 0 6s3.5-3.5 0-6zm0 0c-3.5-2.5-3.5-6 0-6s3.5 3.5 0 6z"
                  />
                </svg>
              </div>
              <h4 className="font-serif text-xs sm:text-[13px] font-bold text-[#1C1814] tracking-tight">
                Trusted by 50K+
              </h4>
              <p className="text-stone-500 text-[10px] sm:text-[11px] font-light mt-0.5">
                Happy customers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
