'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onCategoryClick: (category: string) => void;
}

interface HeroBanner {
  id: string;
  image: string;
  alt: string;
  kicker: string;
  title: string;
  highlight: string;
  subtitle: string;
  cta: string;
  category?: string;
  tone: 'light' | 'dark';
  objectPosition: string;
}

const HERO_BANNERS: HeroBanner[] = [
  {
    id: 'made-for-you',
    image: '/images/luxora-hero.jpg',
    alt: 'Model wearing diamond chandelier earrings and teardrop pendant',
    kicker: 'Timeless Beauty,',
    title: 'Made Just',
    highlight: 'For You',
    subtitle: 'BIS hallmarked gold and sterling silver, handcrafted for every precious moment.',
    cta: 'Shop Collection',
    tone: 'light',
    objectPosition: 'object-[70%_25%] lg:object-[center_20%]',
  },
  {
    id: 'muhurat-bridal',
    image: '/images/gold-choker.jpg',
    alt: 'Kundan gold bridal choker with emerald drops',
    kicker: 'The Muhurat Bridal Edit',
    title: 'Gold for',
    highlight: 'Every Vow',
    subtitle: 'Up to 25% off on making charges across 22K bridal sets.',
    cta: 'Explore Bridal',
    category: 'Gold',
    tone: 'dark',
    objectPosition: 'object-center',
  },
  {
    id: 'devam-temple',
    image: '/images/silver-ganesha.jpg',
    alt: 'Pure silver Ganesha idol',
    kicker: 'Devam Temple Silver',
    title: 'Divinity in',
    highlight: 'Pure Silver',
    subtitle: 'Sacred idols and puja essentials, crafted to be passed down for generations.',
    cta: 'Shop Idols',
    category: 'Idols',
    tone: 'light',
    objectPosition: 'object-center',
  },
  {
    id: 'sterling-everyday',
    image: '/images/silver-chain-layer.jpg',
    alt: 'Layered sterling silver chains',
    kicker: 'Sterling Silver 925',
    title: 'Everyday',
    highlight: 'Elegance',
    subtitle: 'Lightweight chains, studs and payals made to be worn every single day.',
    cta: 'Shop Silver',
    category: 'Silver',
    tone: 'dark',
    objectPosition: 'object-center',
  },
  {
    id: 'little-luxuries',
    image: '/images/electro-emerald-ring.jpg',
    alt: 'Emerald statement cocktail ring',
    kicker: 'Little Luxuries',
    title: 'Statement',
    highlight: 'Sparkle',
    subtitle: 'Electroplated designer pieces that bring the glamour without the price.',
    cta: 'Discover Now',
    category: 'Electroplated',
    tone: 'light',
    objectPosition: 'object-center',
  },
];

const AUTOPLAY_MS = 5500;

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onCategoryClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = HERO_BANNERS.length;

  const goTo = useCallback((index: number) => setActiveIndex((index + total) % total), [total]);
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (isPaused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [activeIndex, isPaused, next]);

  const handleBannerClick = (banner: HeroBanner) => {
    if (banner.category) onCategoryClick(banner.category);
    else onExploreClick();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) (delta < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section
      id="hero"
      aria-roledescription="carousel"
      aria-label="Featured collections"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
      className="relative bg-[#FAF5EE]"
    >
      <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[560px] overflow-hidden group/hero">
        {HERO_BANNERS.map((banner, index) => {
          const isActive = index === activeIndex;
          const isDark = banner.tone === 'dark';
          const Heading = index === 0 ? 'h1' : 'h2';
          return (
            <div
              key={banner.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${total}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <div className="absolute inset-0 lg:left-[38%]">
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  fill
                  preload={index === 0}
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className={`object-cover ${banner.objectPosition} transition-transform duration-[6000ms] ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>

              {/* Tone-matched fade from the text panel into the image */}
              <div
                className={`absolute inset-0 hidden lg:block bg-gradient-to-r ${
                  isDark
                    ? 'from-[#28050B] from-35% via-[#28050B]/80 via-45% to-transparent to-70%'
                    : 'from-[#FAF5EE] from-35% via-[#FAF5EE]/85 via-45% to-transparent to-70%'
                }`}
              />
              <div
                className={`absolute inset-0 lg:hidden bg-gradient-to-t ${
                  isDark
                    ? 'from-[#28050B] via-[#28050B]/75 to-[#28050B]/10'
                    : 'from-[#FAF5EE] via-[#FAF5EE]/80 to-[#FAF5EE]/10'
                }`}
              />

              {/* Banner copy */}
              <div className="relative h-full max-w-7xl mx-auto flex items-end lg:items-center px-6 sm:px-12 pb-16 lg:pb-0">
                <div
                  className={`max-w-md text-center lg:text-left mx-auto lg:mx-0 transition-all duration-700 delay-150 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <p
                    className={`font-serif italic text-lg sm:text-xl tracking-wide ${
                      isDark ? 'text-[#E8C882]' : 'text-[#A67C1E]'
                    }`}
                  >
                    {banner.kicker}
                  </p>
                  <Heading
                    className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.05] mt-2 ${
                      isDark ? 'text-white' : 'text-[#1A1815]'
                    }`}
                  >
                    {banner.title}
                    <br />
                    <span className="font-bold">{banner.highlight}</span>
                  </Heading>
                  <p
                    className={`text-sm sm:text-base font-light leading-relaxed mt-4 ${
                      isDark ? 'text-[#F2DFBA]/90' : 'text-stone-600'
                    }`}
                  >
                    {banner.subtitle}
                  </p>
                  <button
                    type="button"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => handleBannerClick(banner)}
                    className={`mt-6 inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer ${
                      isDark
                        ? 'bg-[#C59B27] hover:bg-[#B88728] text-[#28050B]'
                        : 'bg-[#B88728] hover:bg-[#A3741E] text-white'
                    }`}
                  >
                    <span>{banner.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous banner"
          className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-stone-800 border border-[#E8DAC2] shadow-sm hidden sm:flex items-center justify-center opacity-0 group-hover/hero:opacity-100 focus-visible:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next banner"
          className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-stone-800 border border-[#E8DAC2] shadow-sm hidden sm:flex items-center justify-center opacity-0 group-hover/hero:opacity-100 focus-visible:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Pagination dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full">
          {HERO_BANNERS.map((banner, index) => (
            <button
              key={banner.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to banner ${index + 1}`}
              aria-current={index === activeIndex}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/55 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
