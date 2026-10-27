'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface InstagramPost {
  id: number;
  img: string;
  alt: string;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 1,
    img: '/images/heart-pendant.jpg',
    alt: 'Gold Diamond Pendant on Draped Silk',
  },
  {
    id: 2,
    img: '/images/gold-kada.jpg',
    alt: 'Royal 22K Gold Bangle on Ceramic Pedestal',
  },
  {
    id: 3,
    img: '/images/silver-drops.jpg',
    alt: 'Pearl Drop Earrings on Draped Silk',
  },
  {
    id: 4,
    img: '/images/rings-stack.jpg',
    alt: 'Gold Solitaire Stackable Rings on Marble',
  },
  {
    id: 5,
    img: '/images/electro-emerald-ring.jpg',
    alt: 'Imperial Emerald Cut Gemstone Ring',
  },
  {
    id: 6,
    img: '/images/gold-payal.jpg',
    alt: '22K Gold Filigree Bridal Payal on Silk',
  },
  {
    id: 7,
    img: '/images/pendant-gift.jpg',
    alt: 'Diamond Pendant in Emerald Velvet Box',
  },
];

export const InstagramCommunity: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.firstElementChild as HTMLElement;
    const cardWidth = card ? card.offsetWidth : 240;
    const gap = 16;
    const scrollAmount = cardWidth + gap;

    if (scrollRef.current.scrollLeft <= 10) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: 'smooth',
      });
    } else {
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.firstElementChild as HTMLElement;
    const cardWidth = card ? card.offsetWidth : 240;
    const gap = 16;
    const scrollAmount = cardWidth + gap;

    const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    if (scrollRef.current.scrollLeft >= maxScroll - 10) {
      scrollRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    } else {
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-[#FBF9F5] border-t border-[#E8DAC2]/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 xl:gap-16">
          {/* Left Side: Large 3-Image Carousel with Chevrons */}
          <div className="flex items-center justify-center w-full lg:w-[68%] max-w-[820px]">
            {/* Left Chevron Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Instagram Photo"
              className="p-1 sm:p-2 text-stone-500 hover:text-stone-900 transition-colors focus:outline-none cursor-pointer shrink-0 mr-1 sm:mr-3"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </button>

            {/* 3 Visible Large Square Images with CSS Scroll Snap */}
            <div
              ref={scrollRef}
              className="flex gap-3 sm:gap-4 overflow-x-hidden scroll-smooth snap-x snap-mandatory w-full select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {INSTAGRAM_POSTS.map((post) => (
                <div
                  key={post.id}
                  className="snap-start shrink-0 relative aspect-square overflow-hidden bg-stone-100 group shadow-2xs hover:shadow-md transition-shadow"
                  style={{
                    width: 'calc((100% - 2 * 0.75rem) / 3)',
                  }}
                >
                  <Image
                    src={post.img}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 260px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    aria-label="View post on Instagram"
                  />
                </div>
              ))}
            </div>

            {/* Right Chevron Button */}
            <button
              onClick={handleNext}
              aria-label="Next Instagram Photo"
              className="p-1 sm:p-2 text-stone-500 hover:text-stone-900 transition-colors focus:outline-none cursor-pointer shrink-0 ml-1 sm:ml-3"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Right Side: Follow Our Instagram Content Block */}
          <div className="text-center flex flex-col items-center justify-center shrink-0 w-full lg:w-[32%] max-w-[340px]">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3C3228] font-normal tracking-tight leading-tight whitespace-nowrap">
              Follow Our Instagram
            </h2>
            <p className="text-stone-500 text-sm sm:text-base font-light mt-2 mb-6">
              @skjewellers.official
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#8C6D53] hover:bg-[#785C44] text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
            >
              Follow Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
