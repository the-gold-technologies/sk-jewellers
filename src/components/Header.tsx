'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Phone,
  MapPin,
  Flame,
} from 'lucide-react';
import { CATEGORIES_DATA, SUB_PRODUCTS_LIST, PRODUCTS_DATA } from '@/data/jewelleryData';

const MEGA_COLLECTIONS = [
  { id: 'All', label: 'All Collections' },
  { id: 'Gold', label: 'Gold Jewellery (22K / 916)' },
  { id: 'Silver', label: 'Sterling Silver (925)' },
  { id: 'Electroplated', label: 'Electroplated Luxury' },
  { id: 'Utensils', label: 'Sacred Silver Utensils' },
  { id: 'Idols', label: 'Divine Temple Idols' },
];

const SIGNATURE_COLLECTIONS = [
  {
    id: 'muhurat-bridal',
    title: 'Muhurat Bridal',
    category: 'Gold',
    subProduct: 'Necklaces',
    image: '/images/gold-choker.jpg',
  },
  {
    id: 'devam-temple',
    title: 'Devam Temple Silver',
    category: 'Idols',
    subProduct: 'Idols',
    image: '/images/silver-ganesha.jpg',
  },
  {
    id: 'aura-solitaire',
    title: 'Aura Diamond Solitaire',
    category: 'Gold',
    subProduct: 'Ring',
    image: '/images/rings-stack.jpg',
  },
  {
    id: 'tarangini-payal',
    title: 'Tarangini Royal Payal',
    category: 'Gold',
    subProduct: 'Anklet',
    image: '/images/gold-payal.jpg',
  },
  {
    id: 'rajwada-kada',
    title: 'Rajwada Antique Kadas',
    category: 'Gold',
    subProduct: 'Bangles',
    image: '/images/gold-kada.jpg',
  },
  {
    id: 'amara-pendants',
    title: 'Amara Fine Silver',
    category: 'Silver',
    subProduct: 'Necklaces',
    image: '/images/heart-pendant.jpg',
  },
];

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSelectCategory: (category: string, subProduct?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onSelectCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string>('Gold');
  const [hoveredSubProduct, setHoveredSubProduct] = useState<string>('Anklet');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const collectionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleOpenShopMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (collectionsTimeoutRef.current) clearTimeout(collectionsTimeoutRef.current);
    setCollectionsDropdownOpen(false);
    setShopDropdownOpen(true);
  };

  const handleCloseShopMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setShopDropdownOpen(false);
    }, 180);
  };

  const handleOpenCollectionsMenu = () => {
    if (collectionsTimeoutRef.current) clearTimeout(collectionsTimeoutRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShopDropdownOpen(false);
    setCollectionsDropdownOpen(true);
  };

  const handleCloseCollectionsMenu = () => {
    collectionsTimeoutRef.current = setTimeout(() => {
      setCollectionsDropdownOpen(false);
    }, 180);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategorySelect = (catId: string, subProduct?: string) => {
    onSelectCategory(catId, subProduct);
    setShopDropdownOpen(false);
    setCollectionsDropdownOpen(false);
    setMobileMenuOpen(false);
    const el = document.getElementById('product-explorer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const el = document.getElementById('product-explorer');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setSearchOpen(false);
    }
  };

  // Preview spotlight product for dropdown
  const previewProduct = useMemo(() => {
    if (hoveredSubProduct && hoveredSubProduct !== 'All') {
      if (hoveredCategory && hoveredCategory !== 'All') {
        const exact = PRODUCTS_DATA.find(
          (p) => p.category === hoveredCategory && p.subProduct === hoveredSubProduct
        );
        if (exact) return exact;
      }
      const subMatch = PRODUCTS_DATA.find((p) => p.subProduct === hoveredSubProduct);
      if (subMatch) return subMatch;
    }
    if (hoveredCategory && hoveredCategory !== 'All') {
      const catMatch = PRODUCTS_DATA.find((p) => p.category === hoveredCategory);
      if (catMatch) return catMatch;
    }
    return PRODUCTS_DATA[0];
  }, [hoveredCategory, hoveredSubProduct]);

  return (
    <div className="w-full bg-white border-b border-[#E8DAC2]/80 sticky top-0 z-50">
      {/* 1. TOP UTILITY BAR (Kalyan Jewellers Reference Style) */}
      {/* 1. TOP UTILITY BAR (Kalyan Jewellers Reference Style) */}
      <div className="bg-[#FAF5EE] border-b border-[#E8DAC2]/60 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between text-[11px] font-medium tracking-wide text-stone-600">
          {/* Left: Only Live Gold Rate Display */}
          <div className="flex items-center">
            <div className="inline-flex items-center gap-2 text-[#8C6411] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Gold Rates: 22K ₹7,140/g</span>
            </div>
          </div>

          {/* Right: Store Locator, Contact & Red Circular Social Media Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#contact-section"
              className="hover:text-[#9A1E2E] transition-colors uppercase tracking-wider flex items-center gap-1"
            >
              <MapPin className="w-3 h-3 text-[#9A1E2E]" />
              <span>Store Locator</span>
            </a>
            {/* Signature Kalyan-style Red Circular Social Icons */}
            <div className="flex items-center gap-1.5 ml-1">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-[#B81D24] hover:bg-[#8F141A] text-white flex items-center justify-center transition-colors shadow-2xs"
                title="Facebook"
              >
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7v-3h3V9.5C10 6.57 11.76 5 14.42 5c1.27 0 2.6.23 2.6.23v2.85h-1.46c-1.45 0-1.9.9-1.9 1.83V12h3.2l-.51 3h-2.69v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-[#B81D24] hover:bg-[#8F141A] text-white flex items-center justify-center transition-colors shadow-2xs"
                title="Twitter / X"
              >
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-[#B81D24] hover:bg-[#8F141A] text-white flex items-center justify-center transition-colors shadow-2xs"
                title="YouTube"
              >
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-[#B81D24] hover:bg-[#8F141A] text-white flex items-center justify-center transition-colors shadow-2xs"
                title="Instagram"
              >
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER NAVIGATION BAR (12-Column Grid Layout: 5 cols Left Nav, 2 cols Center Logo, 5 cols Right Nav & Icons) */}
      <header className="py-3 sm:py-4 bg-white/98 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative flex lg:grid lg:grid-cols-12 items-center justify-between">
          {/* LEFT NAVIGATION LINKS (5 cols) */}
          <nav className="col-span-5 hidden lg:flex items-center gap-7 xl:gap-11 text-xs xl:text-[13px] font-bold text-[#1C1814] tracking-[0.14em] uppercase">
            <a
              href="#categories"
              onClick={(e) => {
                e.preventDefault();
                handleCategorySelect('All');
              }}
              className="hover:text-[#9A1E2E] transition-colors py-2 shrink-0"
            >
              Our Brands
            </a>

            {/* Shop Online Mega Menu Trigger */}
            <div
              className="static"
              onMouseEnter={handleOpenShopMenu}
              onMouseLeave={handleCloseShopMenu}
            >
              <button
                type="button"
                onClick={() => handleCategorySelect('All')}
                className={`flex items-center gap-1.5 transition-colors py-2 cursor-pointer font-bold uppercase tracking-[0.14em] shrink-0 ${
                  shopDropdownOpen ? 'text-[#9A1E2E]' : 'hover:text-[#9A1E2E]'
                }`}
              >
                <span>All Jewellery</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${
                    shopDropdownOpen ? 'rotate-180 text-[#9A1E2E]' : ''
                  }`}
                />
              </button>
            </div>

            {/* Collections Mega Menu Trigger */}
            <div
              className="static"
              onMouseEnter={handleOpenCollectionsMenu}
              onMouseLeave={handleCloseCollectionsMenu}
            >
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('categories');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  setCollectionsDropdownOpen(false);
                }}
                className={`flex items-center gap-1.5 transition-colors py-2 cursor-pointer font-bold uppercase tracking-[0.14em] shrink-0 ${
                  collectionsDropdownOpen ? 'text-[#9A1E2E]' : 'hover:text-[#9A1E2E]'
                }`}
              >
                <span>Collections</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${
                    collectionsDropdownOpen ? 'rotate-180 text-[#9A1E2E]' : ''
                  }`}
                />
              </button>
            </div>
          </nav>

          {/* CENTER BRAND LOGO (2 cols in 12-col grid, dedicated space) */}
          <div className="col-span-2 hidden lg:flex justify-center">
            <a
              href="#hero"
              className="flex flex-col items-center justify-center text-center group py-0.5"
            >
              {/* Brand Title: SK in Prestigious Red Serif Typography */}
              <span className="font-serif text-3xl xl:text-4xl font-extrabold tracking-[0.22em] text-[#9A1E2E] leading-none group-hover:opacity-90 transition-opacity">
                SK
              </span>
              {/* Subtitle: JEWELLERS in elegant spaced gold lettering */}
              <span className="text-[9.5px] uppercase tracking-[0.38em] text-[#8C6411] font-bold mt-1.5 leading-none">
                JEWELLERS
              </span>
            </a>
          </div>

          {/* MOBILE LOGO (Shown only on < lg) */}
          <div className="lg:hidden flex items-center">
            <a href="#hero" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-extrabold tracking-[0.2em] text-[#9A1E2E]">
                SK
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#8C6411] font-bold">
                JEWELLERS
              </span>
            </a>
          </div>

          {/* RIGHT NAVIGATION LINKS (5 cols) & UTILITY ICONS */}
          <div className="col-span-5 flex items-center justify-end gap-6 xl:gap-10">
            <nav className="hidden lg:flex items-center gap-7 xl:gap-11 text-xs xl:text-[13px] font-bold text-[#1C1814] tracking-[0.14em] uppercase">
              <a href="#heritage" className="hover:text-[#9A1E2E] transition-colors py-2 shrink-0">
                About Us
              </a>

              <a
                href="#special-moments"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategorySelect('Silver');
                }}
                className="hover:text-[#9A1E2E] transition-colors py-2 shrink-0"
              >
                Contact Us
              </a>
            </nav>

            {/* Utility Actions Cluster: Search, Wishlist, Cart, Mobile Toggle */}
            <div className="flex items-center gap-3 sm:gap-4 pl-4 sm:pl-6 border-l border-stone-200 shrink-0">
              {/* Search Trigger */}
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-1.5 text-stone-700 hover:text-[#9A1E2E] transition-colors cursor-pointer"
                aria-label="Search"
                title="Search Jewelry"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
              </button>

              {/* Wishlist Heart Icon */}
              <button
                type="button"
                onClick={onOpenWishlist}
                className="relative p-1.5 text-stone-700 hover:text-[#9A1E2E] transition-colors cursor-pointer"
                aria-label="Wishlist"
                title="Your Wishlist"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#B81D24] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Icon with Badge */}
              <button
                type="button"
                onClick={onOpenCart}
                className="relative p-1.5 text-stone-700 hover:text-[#9A1E2E] transition-colors cursor-pointer"
                aria-label="Shopping bag"
                title="Your Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                <span className="absolute -top-0.5 -right-0.5 bg-[#B81D24] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 text-stone-800 hover:text-[#9A1E2E] cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* 3. FULL-WIDTH MEGA MENU DROPDOWN (Matches exact same width and boundaries as navbar container) */}
          {shopDropdownOpen && (
            <div
              onMouseEnter={handleOpenShopMenu}
              onMouseLeave={handleCloseShopMenu}
              className="absolute top-full left-0 right-0 w-full pt-3 z-50 pointer-events-auto"
            >
              <div className="w-full bg-white/98 backdrop-blur-2xl border border-[#E8DAC2] rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-98 duration-150">
                <div className="grid grid-cols-12 gap-6 items-stretch">
                  {/* Column 1: Collections & Precious Metals (3 cols) */}
                  <div className="col-span-3 border-r border-stone-100 pr-5">
                    <h4 className="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-serif font-semibold mb-3.5 pb-2 border-b border-stone-100 flex items-center justify-between">
                      <span>Collection</span>
                      <span className="text-[11px] text-[#C59B27] font-serif lowercase italic tracking-normal">
                        fine metal
                      </span>
                    </h4>
                    <ul className="space-y-1.5">
                      {MEGA_COLLECTIONS.map((cat) => {
                        const isActive = hoveredCategory === cat.id;
                        return (
                          <li key={cat.id}>
                            <button
                              type="button"
                              onMouseEnter={() => setHoveredCategory(cat.id)}
                              onClick={() => handleCategorySelect(cat.id, 'All')}
                              className={`w-full text-left px-3.5 py-2 rounded-full text-xs transition-all flex items-center justify-between cursor-pointer ${
                                isActive
                                  ? 'bg-[#FAF5EE] text-[#9A1E2E] font-bold shadow-2xs'
                                  : 'text-stone-700 hover:text-[#9A1E2E] hover:bg-stone-50 font-medium'
                              }`}
                            >
                              <span>{cat.label}</span>
                              <ArrowRight
                                className={`w-3.5 h-3.5 transition-opacity ${
                                  isActive ? 'opacity-100 text-[#9A1E2E]' : 'opacity-0'
                                }`}
                              />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Column 2: Jewellery Category Types (3 cols) */}
                  <div className="col-span-3 border-r border-stone-100 pr-5">
                    <h4 className="text-[14px] font-serif font-semibold text-[#8B1419] mb-3.5 pb-2 border-b border-stone-100 flex items-center justify-between">
                      <span>Jewellery Type</span>
                      <span className="text-[10px] text-stone-400 font-sans font-normal uppercase tracking-[0.2em]">
                        Catalogue
                      </span>
                    </h4>
                    <ul className="space-y-1">
                      {SUB_PRODUCTS_LIST.map((sub) => {
                        const isActive = hoveredSubProduct === sub.id;
                        return (
                          <li key={sub.id}>
                            <button
                              type="button"
                              onMouseEnter={() => setHoveredSubProduct(sub.id)}
                              onClick={() => handleCategorySelect(hoveredCategory || 'All', sub.id)}
                              className={`w-full text-left px-3.5 py-1.5 rounded-full text-xs transition-all flex items-center justify-between cursor-pointer ${
                                isActive
                                  ? 'bg-[#FAF0F2] text-[#9A1E2E] font-bold shadow-2xs'
                                  : 'text-stone-700 hover:text-[#9A1E2E] hover:bg-stone-50 font-medium'
                              }`}
                            >
                              <span>{sub.label}</span>
                              <ArrowRight
                                className={`w-3.5 h-3.5 transition-opacity ${
                                  isActive ? 'opacity-100 text-[#9A1E2E]' : 'opacity-0'
                                }`}
                              />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Column 3 (Right Side): Featured Creation & Little Luxuries On Sale Banner (6 cols) */}
                  <div className="col-span-6 flex flex-col justify-between pl-2">
                    <div>
                      {/* Featured Product Landscape Image Card */}
                      {previewProduct && (
                        <div
                          onClick={() =>
                            handleCategorySelect(previewProduct.category, previewProduct.subProduct)
                          }
                          className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-[#E8DAC2]/80 bg-[#FBF8F3] group/spotlight cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
                        >
                          <Image
                            src={previewProduct.image}
                            alt={previewProduct.name}
                            fill
                            sizes="(max-width: 1280px) 100vw, 600px"
                            className="object-cover group-hover/spotlight:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                          {/* Floating Pill on Bottom Left */}
                          <div className="absolute bottom-3 left-3 pointer-events-none">
                            <div className="bg-[#1C1814]/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-white shadow-sm flex items-center gap-2.5 border border-white/10">
                              <span className="font-serif text-xs font-medium tracking-wide text-stone-100">
                                {previewProduct.shortName || previewProduct.name}
                              </span>
                              <span className="text-xs text-[#E8C882] font-semibold shrink-0">
                                ₹{previewProduct.price.toLocaleString('en-IN')}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Little Luxuries On Sale Banner (Directly below image) */}
                    <div
                      onClick={() => handleCategorySelect('Gold')}
                      className="mt-3.5 bg-gradient-to-r from-[#28050B] via-[#3D0A13] to-[#28050B] rounded-2xl p-4 sm:p-5 text-white flex items-center justify-between shadow-sm cursor-pointer group/sale hover:brightness-105 transition-all"
                    >
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#C59B27] font-semibold">
                          Little Luxuries
                        </p>
                        <h6 className="font-serif text-xl sm:text-2xl tracking-[0.16em] text-white font-normal uppercase leading-tight mt-0.5">
                          On Sale
                        </h6>
                        <p className="text-xs text-[#F2DFBA]/90 font-light mt-1">
                          Up to <strong className="text-white font-medium">₹25,000 Off</strong> On
                          Making Charges
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategorySelect('Gold');
                        }}
                        className="bg-[#8A1623] hover:bg-[#A81B2B] text-white text-[11px] font-bold tracking-[0.18em] uppercase px-6 py-2.5 rounded-full transition-colors shrink-0 shadow-sm border border-white/10 cursor-pointer"
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. FULL-WIDTH SIGNATURE COLLECTIONS DROPDOWN (Image-led grid) */}
          {collectionsDropdownOpen && (
            <div
              onMouseEnter={handleOpenCollectionsMenu}
              onMouseLeave={handleCloseCollectionsMenu}
              className="absolute top-full left-0 right-0 w-full pt-3 z-50 pointer-events-auto"
            >
              <div className="w-full bg-white/98 backdrop-blur-2xl border border-[#E8DAC2] rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-98 duration-150">
                <div className="flex items-center justify-between mb-5">
                  <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#8C6411] font-bold">
                    Signature Collections
                  </h4>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('All', 'All')}
                    className="text-[11px] uppercase tracking-[0.18em] font-semibold text-stone-500 hover:text-[#9A1E2E] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-3 xl:grid-cols-6 gap-4">
                  {SIGNATURE_COLLECTIONS.map((col) => (
                    <button
                      key={col.id}
                      type="button"
                      onClick={() => handleCategorySelect(col.category, col.subProduct)}
                      className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#E8DAC2]/80 bg-[#FAF8F5] group cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
                    >
                      <Image
                        src={col.image}
                        alt={col.title}
                        fill
                        sizes="(max-width: 1280px) 33vw, 220px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent pointer-events-none" />
                      <span className="absolute bottom-3 left-3 right-3 text-left font-serif text-sm font-medium tracking-wide text-white leading-snug pointer-events-none">
                        {col.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Search Slideout Bar */}
        {searchOpen && (
          <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-3 pt-3 border-t border-stone-100 animate-in fade-in duration-150">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <Search className="absolute left-3.5 w-4 h-4 text-stone-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search gold necklaces, diamond rings, puja silver thalis, temple idols..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-24 py-2.5 bg-stone-50 border border-[#E8DAC2] rounded-xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#9A1E2E] focus:ring-1 focus:ring-[#9A1E2E]"
              />
              <button
                type="submit"
                className="absolute right-2 px-3 py-1 bg-[#9A1E2E] hover:bg-[#801420] text-white text-xs font-medium uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 bg-white rounded-2xl p-5 space-y-4 shadow-xl border border-stone-200">
            <div className="space-y-3 font-semibold text-xs tracking-wider uppercase">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#9A1E2E]"
              >
                Home
              </a>
              <a
                href="#categories"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCategorySelect('All');
                }}
                className="block text-stone-700 hover:text-[#9A1E2E]"
              >
                Our Brands &amp; Collections
              </a>
              <a
                href="#product-explorer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCategorySelect('All');
                }}
                className="block text-stone-700 hover:text-[#9A1E2E]"
              >
                Shop Online &amp; All Jewellery
              </a>
              <a
                href="#heritage"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-stone-700 hover:text-[#9A1E2E]"
              >
                About Us &amp; Craftsmanship
              </a>
              <a
                href="#contact-section"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-stone-700 hover:text-[#9A1E2E]"
              >
                Store Locator &amp; Contact
              </a>
            </div>

            <div className="pt-3 border-t border-stone-100">
              <p className="text-[10px] uppercase font-bold tracking-wider text-[#9A1E2E] mb-2">
                Quick Category Switcher:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {CATEGORIES_DATA.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className="text-xs bg-[#FAF5EE] border border-stone-200 px-3 py-1 rounded-full text-stone-700 hover:border-[#9A1E2E]"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Top Bar Info */}
            <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-1">
              <div className="flex items-center gap-1.5 text-[#8C6411] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Gold Rate Today: 22K ₹7,140/g</span>
              </div>
              <p>Store Locator &bull; Call &amp; WhatsApp: +91 98765 XXXXX</p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
