'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const INSTAGRAM_POSTS = [
  {
    id: 1,
    img: '/images/rings-stack.jpg',
    handle: '@luxorajewelry',
    title: '#LuxoraBrides 22K Gold Diamond Rings',
  },
  {
    id: 2,
    img: '/images/gold-choker.jpg',
    handle: '@luxorajewelry',
    title: 'Heritage Temple Polki Choker in Pure Gold',
  },
  {
    id: 3,
    img: '/images/gold-jhumkas.jpg',
    handle: '@luxorajewelry',
    title: 'Padmavati Royal Gold Dome Jhumkas',
  },
  {
    id: 4,
    img: '/images/silver-puja-thali.jpg',
    handle: '@luxorajewelry',
    title: 'Pure Silver Puja Thali Setup for Festive Blessings',
  },
  {
    id: 5,
    img: '/images/silver-payal.jpg',
    handle: '@luxorajewelry',
    title: 'Handcrafted Chandrika 925 Silver Ghungroo Payal',
  },
  {
    id: 6,
    img: '/images/electro-emerald-ring.jpg',
    handle: '@luxorajewelry',
    title: 'Imperial Emerald 18K Micron Plated Cocktail Ring',
  },
  {
    id: 7,
    img: '/images/heart-pendant.jpg',
    handle: '@luxorajewelry',
    title: 'Heart Luminary Diamond Pavé Pendant',
  },
  {
    id: 8,
    img: '/images/silver-tumbler.jpg',
    handle: '@luxorajewelry',
    title: 'Ayurvedic 999 Pure Silver Health Tumbler',
  },
  {
    id: 9,
    img: '/images/electro-anklet.jpg',
    handle: '@luxorajewelry',
    title: 'Dainty Starburst Electroplated Summer Anklet',
  },
  {
    id: 10,
    img: '/images/silver-kalash.jpg',
    handle: '@luxorajewelry',
    title: 'Sacred Silver Mangal Kalash & Nariyal',
  },
];

export const InstagramCommunity: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  // Duplicated array for seamless loop
  const displayPosts = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS];

  // Guaranteed JavaScript requestAnimationFrame smooth right-to-left auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    // Auto-scroll speed: ~1.2px per frame (~70px/sec)
    const speed = 1.2;

    const autoScroll = () => {
      if (el && !isHoveredRef.current) {
        el.scrollLeft += speed;
        // When we've scrolled past one-third of the total scroll width, seamlessly reset
        const oneThird = el.scrollWidth / 3;
        if (el.scrollLeft >= oneThird) {
          el.scrollLeft = el.scrollLeft - oneThird;
        }
      }
      animId = requestAnimationFrame(autoScroll);
    };

    animId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="py-16 bg-[#FAF7F2] border-t border-[#C59B27]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#8C6411]">
              Follow Us @aureliajewels
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#0B2319] mt-1">
              Join Our Shining Community
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2319] hover:text-[#C59B27] transition-colors"
          >
            <InstagramIcon className="w-4 h-4 text-[#C59B27]" />
            <span>View on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Auto-scrolling Slider Container (Right to Left) */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
        onTouchStart={() => {
          isHoveredRef.current = true;
        }}
        onTouchEnd={() => {
          isHoveredRef.current = false;
        }}
      >
        {/* Soft edge fade masks for luxury vignette look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10" />

        <div
          ref={scrollRef}
          className="flex flex-row flex-nowrap gap-4 sm:gap-5 px-6 overflow-x-auto scrollbar-none scroll-smooth select-none py-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayPosts.map((post, idx) => (
            <div
              key={`${post.id}-${idx}`}
              className="group relative w-48 h-48 sm:w-60 sm:h-60 flex-shrink-0 rounded-2xl overflow-hidden bg-stone-100 shadow-xs hover:shadow-xl border border-stone-200/90 cursor-pointer transition-all duration-300"
            >
              <Image
                src={post.img}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 192px, 240px"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Luxury Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white backdrop-blur-[2px]">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 text-[#E5C378] group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <p className="text-[11px] font-medium text-stone-200 line-clamp-2 px-1">
                  {post.title}
                </p>
                <span className="text-[10px] text-[#E5C378] font-bold uppercase tracking-wider mt-2">
                  {post.handle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
