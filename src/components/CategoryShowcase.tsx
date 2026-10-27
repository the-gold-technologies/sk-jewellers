'use client';

import React from 'react';
import Image from 'next/image';
import { CATEGORIES_DATA } from '@/data/jewelleryData';

interface CategoryShowcaseProps {
  onSelectCategory: (categoryId: string, subProduct?: string) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-14 sm:py-18 bg-[#FBF9F5] border-b border-[#C59B27]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Aurelia reference */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-[#9E7518] block mb-2">
            Shop By Category
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-tight">
            Find Your Perfect Piece
          </h2>
          <p className="mt-2 text-stone-500 text-xs sm:text-sm font-light">
            Explore our curated precious metal collections for every occasion.
          </p>
        </div>

        {/* Circular Discs Category Row (Aurelia Reference style) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center mb-12">
          {CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group flex flex-col items-center text-center cursor-pointer transition-all duration-300 focus:outline-none"
            >
              {/* Clean Borderless Circular Disc with Rich Photography Background */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-[135px] lg:h-[135px] rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-2xs group-hover:shadow-md">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 128px, 156px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Title & Badge */}
              <h3 className="font-serif text-sm sm:text-base font-bold text-[#1A1A1A] group-hover:text-[#9E7518] transition-colors mt-3">
                {cat.name.replace(' Jewellery', '')}
              </h3>
              <span className="text-[10px] text-stone-400 uppercase tracking-wider mt-0.5 font-medium">
                {cat.subProducts.length} Sub-products
              </span>
            </button>
          ))}
        </div>

        {/* Centered 'VIEW FULL COLLECTION' Button (Exact Reference Match) */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <a
            href="#bestsellers"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('All');
              document.getElementById('bestsellers')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 bg-[#7D806C] hover:bg-[#6B6E5A] text-white text-[11px] sm:text-[12px] font-medium tracking-[0.22em] uppercase transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
          >
            VIEW FULL COLLECTION
          </a>
        </div>
      </div>
    </section>
  );
};
