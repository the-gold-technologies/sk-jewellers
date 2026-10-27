'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { ShoppingBag, Heart, Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { CATEGORIES_DATA, SUB_PRODUCTS_LIST, PRODUCTS_DATA } from '@/data/jewelleryData';

const MEGA_COLLECTIONS = [
  { id: 'All', label: 'All Collections' },
  { id: 'Gold', label: 'Gold Jewellery (22K / 916)' },
  { id: 'Silver', label: 'Sterling Silver (925)' },
  { id: 'Electroplated', label: 'Electroplated Luxury' },
  { id: 'Utensils', label: 'Sacred Silver Utensils' },
  { id: 'Idols', label: 'Divine Temple Idols' },
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string>('Gold');
  const [hoveredSubProduct, setHoveredSubProduct] = useState<string>('Ring');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleOpenShopMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShopDropdownOpen(true);
  };

  const handleCloseShopMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setShopDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategorySelect = (catId: string, subProduct?: string) => {
    onSelectCategory(catId, subProduct);
    setShopDropdownOpen(false);
    setMobileMenuOpen(false);
    const el = document.getElementById('product-explorer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Dynamically compute the product previewed in the spotlight based on hovered category or jewellery type
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
    <>
      {/* Luxora Clean Navbar: Rock-solid sticky navbar without height reflow or fluctuation */}
      <header
        className={`sticky top-0 z-50 px-6 sm:px-12 bg-[#FAF5EE]/95 backdrop-blur-md border-b border-[#E8DAC2]/80 py-3.5 sm:py-4 transition-shadow duration-200 ${
          isScrolled ? 'shadow-xs' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Left: Luxora Diamond Monogram & Brand Typography */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            {/* Geometric Diamond Wireframe Icon matching Luxora exactly */}
            <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
              <svg
                viewBox="0 0 28 28"
                fill="none"
                className="w-8 h-8 text-[#C59B27] group-hover:scale-105 transition-transform"
              >
                <polygon
                  points="7,4 21,4 26,12 14,26 2,12"
                  fill="#F7EEDF"
                  stroke="#C59B27"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <line x1="2" y1="12" x2="26" y2="12" stroke="#A67C1E" strokeWidth="1.2" />
                <line x1="7" y1="4" x2="14" y2="12" stroke="#A67C1E" strokeWidth="1.2" />
                <line x1="21" y1="4" x2="14" y2="12" stroke="#A67C1E" strokeWidth="1.2" />
                <line x1="14" y1="12" x2="14" y2="26" stroke="#A67C1E" strokeWidth="1.2" />
                <line x1="8" y1="12" x2="14" y2="26" stroke="#A67C1E" strokeWidth="1.2" />
                <line x1="20" y1="12" x2="14" y2="26" stroke="#A67C1E" strokeWidth="1.2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#1C1814] leading-none">
                SK
              </span>
              <span className="text-[8.5px] uppercase tracking-[0.26em] text-[#9E7518] font-semibold mt-1">
                JEWELLERS
              </span>
            </div>
          </a>

          {/* Center: Clean Nav Links (Home, Shop, Collections, About Us, Contact) */}
          <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-[#4A453F]">
            {/* Home Link with subtle active indicator bar underneath */}
            <a
              href="#hero"
              className="relative text-[#C59B27] font-semibold transition-colors pb-1"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C59B27] rounded-full" />
            </a>

            <a href="#heritage" className="hover:text-[#C59B27] transition-colors">
              About Us
            </a>
            {/* Shop with 3-Column Luxury Mega Menu */}
            <div className="" onMouseEnter={handleOpenShopMenu} onMouseLeave={handleCloseShopMenu}>
              <button
                onClick={() => handleCategorySelect('All')}
                className="flex items-center gap-1 hover:text-[#C59B27] transition-colors py-2 cursor-pointer font-medium"
              >
                <span>Shop</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${
                    shopDropdownOpen ? 'rotate-180 text-[#C59B27]' : ''
                  }`}
                />
              </button>

              {/* Mega Dropdown Popover - Centered Horizontally */}
              {shopDropdownOpen && (
                <div
                  onMouseEnter={handleOpenShopMenu}
                  onMouseLeave={handleCloseShopMenu}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 pointer-events-auto"
                >
                  <div className="w-[960px] max-w-[94vw] bg-white/98 backdrop-blur-xl border border-[#E8DAC2] rounded-3xl shadow-2xl p-6 sm:p-7 animate-in fade-in zoom-in-95 duration-150">
                    <div className="grid grid-cols-12 gap-6 items-stretch">
                      {/* Column 1: Collections / Metals (3 cols) */}
                      <div className="col-span-3 border-r border-stone-100 pr-3">
                        <h4 className="text-[11px] uppercase tracking-[0.22em] text-stone-400 font-bold mb-3 pb-2 border-b border-stone-100 flex items-center justify-between">
                          <span>Collection</span>
                          <span className="text-[10px] text-[#C59B27] font-serif lowercase tracking-normal">
                            fine metal
                          </span>
                        </h4>
                        <ul className="space-y-1">
                          {MEGA_COLLECTIONS.map((cat) => {
                            const isActive = hoveredCategory === cat.id;
                            return (
                              <li key={cat.id}>
                                <button
                                  type="button"
                                  onMouseEnter={() => setHoveredCategory(cat.id)}
                                  onClick={() => handleCategorySelect(cat.id, 'All')}
                                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                                    isActive
                                      ? 'bg-[#FAF5EE] text-[#9E7518] font-semibold pl-4'
                                      : 'text-stone-700 hover:text-stone-900 hover:bg-stone-50'
                                  }`}
                                >
                                  <span>{cat.label}</span>
                                  <ArrowRight
                                    className={`w-3.5 h-3.5 transition-opacity ${
                                      isActive ? 'opacity-100 text-[#9E7518]' : 'opacity-0'
                                    }`}
                                  />
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Column 2: Jewellery Type (Title in Burgundy Red, matching reference!) (4 cols) */}
                      <div className="col-span-4 border-r border-stone-100 pr-3">
                        <h4 className="font-serif text-base font-semibold text-[#8B263E] mb-3 pb-2 border-b border-stone-100 tracking-wide flex items-center justify-between">
                          <span>Jewellery Type</span>
                          <span className="text-[10px] text-stone-400 font-sans font-normal uppercase tracking-wider">
                            Catalogue
                          </span>
                        </h4>
                        <ul className="space-y-0.5">
                          {SUB_PRODUCTS_LIST.map((sub) => {
                            const isActive = hoveredSubProduct === sub.id;
                            return (
                              <li key={sub.id}>
                                <button
                                  type="button"
                                  onMouseEnter={() => setHoveredSubProduct(sub.id)}
                                  onClick={() =>
                                    handleCategorySelect(hoveredCategory || 'All', sub.id)
                                  }
                                  className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                                    isActive
                                      ? 'bg-[#FDF2F4] text-[#8B263E] font-semibold pl-4'
                                      : 'text-stone-700 hover:text-stone-900 hover:bg-stone-50'
                                  }`}
                                >
                                  <span>{sub.label}</span>
                                  <ArrowRight
                                    className={`w-3.5 h-3.5 transition-opacity ${
                                      isActive ? 'opacity-100 text-[#8B263E]' : 'opacity-0'
                                    }`}
                                  />
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Column 3: Dynamic Live Product Spotlight & Cartier-style Promo Banner (5 cols) */}
                      <div className="col-span-5 flex flex-col justify-between gap-3.5 pl-1">
                        {/* Live Product Spotlight (Displays Complete Product with discreet corner name/price) */}
                        <div>
                          <div className="text-[10px] uppercase tracking-widest text-[#9E7518] font-bold mb-2 flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-[#C59B27]" />
                            <span>Featured Creation</span>
                          </div>
                          {previewProduct && (
                            <div
                              onClick={() =>
                                handleCategorySelect(
                                  previewProduct.category,
                                  previewProduct.subProduct
                                )
                              }
                              className="relative w-full h-44 rounded-2xl overflow-hidden border border-[#E8DAC2] bg-white group/spotlight cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
                            >
                              <Image
                                src={previewProduct.image}
                                alt={previewProduct.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 360px"
                                className="object-cover group-hover/spotlight:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                              {/* Subtle, compact corner badge with name and price (No bulky border or arrow icon) */}
                              <div className="absolute bottom-2.5 left-2.5 pointer-events-none">
                                <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-white shadow-xs inline-flex items-center gap-2 border border-white/10">
                                  <span className="font-serif text-[11px] font-medium tracking-wide text-stone-100 truncate max-w-[180px]">
                                    {previewProduct.shortName || previewProduct.name}
                                  </span>
                                  <span className="text-[10px] text-[#E8C882] font-semibold shrink-0">
                                    ₹{previewProduct.price.toLocaleString('en-IN')}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Cartier-Style Luxury Banner (Matches reference photo) */}
                        <div
                          onClick={() => handleCategorySelect('All')}
                          className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#3B0E17] via-[#5C1625] to-[#2E0B12] p-3.5 text-white cursor-pointer group/banner shadow-md hover:shadow-lg transition-all"
                        >
                          <div className="relative flex items-center justify-between gap-2.5">
                            <div>
                              <span className="text-[9px] uppercase tracking-[0.25em] text-[#E8C882] font-semibold block mb-0.5">
                                Little Luxuries
                              </span>
                              <h6 className="font-serif text-sm sm:text-base font-normal tracking-wide text-white leading-tight">
                                ON SALE
                              </h6>
                              <p className="text-[10.5px] text-[#F2DFBA] font-light mt-0.5">
                                Up to{' '}
                                <strong className="text-white font-medium">₹25,000 Off</strong> On
                                Making Charges
                              </p>
                            </div>
                            <button
                              type="button"
                              className="bg-[#8B1E2F] hover:bg-[#A82639] border border-[#E8C882]/50 text-white text-[9.5px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full shadow-sm group-hover/banner:scale-105 transition-all shrink-0 cursor-pointer"
                            >
                              Shop Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#categories" className="hover:text-[#C59B27] transition-colors">
              Collections
            </a>

            <a href="#contact-footer" className="hover:text-[#C59B27] transition-colors">
              Contact
            </a>
          </nav>

          {/* Right: Wishlist, Shopping Bag & Mobile Menu */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Wishlist Heart Icon */}
            <button
              onClick={onOpenWishlist}
              className="relative p-1 text-stone-800 hover:text-rose-600 transition-colors hidden sm:block"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.8]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag with Gold Badge '2' (Exact match to reference) */}
            <button
              onClick={onOpenCart}
              className="relative p-1 text-stone-800 hover:text-[#C59B27] transition-colors"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              <span className="absolute -top-1.5 -right-2 bg-[#C59B27] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1 text-stone-800 hover:text-[#C59B27]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-2xl p-5 space-y-4 shadow-xl border border-stone-200">
            <div className="space-y-3 font-medium">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#C59B27] font-semibold"
              >
                Home
              </a>
              <a
                href="#categories"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-stone-700"
              >
                Collections
              </a>
              <a
                href="#product-explorer"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-stone-700"
              >
                Shop All Jewelry
              </a>
              <a
                href="#heritage"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-stone-700"
              >
                About Us &amp; Craftsmanship
              </a>
              <a
                href="#contact-footer"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-stone-700"
              >
                Contact
              </a>
            </div>

            <div className="pt-3 border-t border-stone-100">
              <p className="text-[10px] uppercase font-bold tracking-wider text-[#9E7518] mb-2">
                Categories:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {CATEGORIES_DATA.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className="text-xs bg-[#FAF5EE] border border-stone-200 px-3 py-1 rounded-full text-stone-700"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
