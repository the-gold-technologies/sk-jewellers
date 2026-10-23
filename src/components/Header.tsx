'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Menu, X, ChevronDown } from 'lucide-react';
import { CATEGORIES_DATA } from '@/data/jewelleryData';

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

  return (
    <>
      {/* Luxora Clean Navbar: Completely seamless at top, sticky only on scroll */}
      <header
        className={`sticky top-0 z-50 px-6 sm:px-12 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF5EE]/95 backdrop-blur-md border-b border-[#E8DAC2]/80 shadow-xs py-3.5'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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

            {/* Shop with Category Dropdown (Gold, Silver, Electroplated, Utensils) */}
            <div
              className="relative group"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <button
                onClick={() => handleCategorySelect('All')}
                className="flex items-center gap-1 hover:text-[#C59B27] transition-colors py-2"
              >
                <span>Shop</span>
                <ChevronDown className="w-3 h-3 text-stone-400 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Mega Dropdown */}
              {shopDropdownOpen && (
                <div className="absolute top-full -left-20 w-80 bg-white border border-[#E8DAC2] rounded-2xl shadow-xl p-5 space-y-4 animate-fadeIn z-50">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-[#9E7518]">
                      Precious Categories
                    </p>
                    <span className="text-[10px] text-stone-400 font-sans">All BIS Hallmarked</span>
                  </div>
                  <div className="space-y-3">
                    {CATEGORIES_DATA.map((cat) => (
                      <div key={cat.id} className="space-y-1">
                        <button
                          onClick={() => handleCategorySelect(cat.id)}
                          className="w-full text-left font-serif font-bold text-sm text-stone-800 hover:text-[#C59B27] transition-colors flex items-center justify-between"
                        >
                          <span>{cat.name}</span>
                          <span className="text-[10px] text-[#A67C1E] bg-[#FAF5EE] px-2 py-0.5 rounded-full font-sans font-medium">
                            {cat.subProducts.length} items
                          </span>
                        </button>
                        <div className="flex flex-wrap gap-1 text-[11px] text-stone-500">
                          {cat.subProducts.slice(0, 4).map((sub) => (
                            <button
                              key={sub}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCategorySelect(cat.id, sub);
                              }}
                              className="hover:text-[#C59B27] hover:underline"
                            >
                              {sub} •
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#categories" className="hover:text-[#C59B27] transition-colors">
              Collections
            </a>

            <a href="#heritage" className="hover:text-[#C59B27] transition-colors">
              About Us
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
