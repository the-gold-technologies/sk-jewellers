'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Eye, ShoppingBag, Search, Check, RotateCcw, X, ChevronDown } from 'lucide-react';
import { Product, PRODUCTS_DATA, SUB_PRODUCTS_LIST } from '@/data/jewelleryData';

interface ProductExplorerProps {
  selectedCategory: string;
  selectedSubProduct: string;
  onSelectCategory: (cat: string) => void;
  onSelectSubProduct: (sub: string) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onQuickView: (product: Product) => void;
  currency: 'INR' | 'USD';
}

const CATEGORY_TABS = [
  { id: 'All', label: 'All Collections' },
  { id: 'Gold', label: 'Gold' },
  { id: 'Silver', label: 'Silver' },
  { id: 'Electroplated', label: 'Electroplated' },
  { id: 'Utensils', label: 'Sacred Utensils' },
  { id: 'Idols', label: 'Divine Idols' },
];

const SORT_OPTIONS: { id: 'featured' | 'price-asc' | 'price-desc' | 'rating'; label: string }[] = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

export const ProductExplorer: React.FC<ProductExplorerProps> = ({
  selectedCategory,
  selectedSubProduct,
  onSelectCategory,
  onSelectSubProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onQuickView,
  currency,
}) => {
  const [searchFilter, setSearchFilter] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>(
    'featured'
  );
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSubProductOpen, setIsSubProductOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const categoryRef = useRef<HTMLDivElement>(null);
  const subProductRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) {
        setIsCategoryOpen(false);
      }
      if (subProductRef.current && !subProductRef.current.contains(e.target as Node)) {
        setIsSubProductOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered and Sorted list
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;

      const matchSub = selectedSubProduct === 'All' || item.subProduct === selectedSubProduct;

      const matchSearch =
        searchFilter.trim() === '' ||
        item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.category.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.subProduct.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.purity.toLowerCase().includes(searchFilter.toLowerCase());

      return matchCategory && matchSub && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, selectedSubProduct, searchFilter, sortBy]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedAnimationId(product.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1500);
  };

  const formatPrice = (priceInINR: number) => {
    if (currency === 'USD') {
      const usdPrice = Math.round(priceInINR / 84);
      return `$${usdPrice.toLocaleString('en-US')}`;
    }
    return `₹${priceInINR.toLocaleString('en-IN')}`;
  };

  const hasActiveFilters =
    selectedCategory !== 'All' || selectedSubProduct !== 'All' || searchFilter.trim() !== '';

  const handleResetFilters = () => {
    onSelectCategory('All');
    onSelectSubProduct('All');
    setSearchFilter('');
  };

  return (
    <section
      id="product-explorer"
      className="py-16 sm:py-24 bg-[#FAF7F2] scroll-mt-20 border-b border-[#C59B27]/15"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-[#9E7518] block mb-2">
            Collections &amp; Catalogue
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-tight">
            Our Most Loved Pieces
          </h2>
          <p className="mt-2 text-stone-500 text-xs sm:text-sm font-light">
            Handcrafted with devotion in 22K pure gold, sterling silver, and consecrated sacred
            metal.
          </p>
        </div>

        {/* Minimalist Luxury Filter & Control Bar (No enclosing box) */}
        <div className="mb-8 sm:mb-10">
          {/* Top: Showing Creations Count */}
          <div className="mb-3.5 text-xs text-stone-500 font-light">
            Showing{' '}
            <strong className="text-stone-900 font-medium">{filteredProducts.length}</strong>{' '}
            creations
          </div>

          {/* Controls Row: Unboxed Dropdowns, Search & Sort */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Left: Filter Dropdowns (Collection & Jewellery Type) */}
            <div className="flex items-center gap-2.5 flex-wrap w-full lg:w-auto">
              {/* Collection Dropdown */}
              <div ref={categoryRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsCategoryOpen((prev) => !prev);
                    setIsSubProductOpen(false);
                    setIsSortOpen(false);
                  }}
                  className="bg-white border border-[#C59B27]/30 hover:border-[#9E7518] text-xs rounded-full px-4 py-2 text-stone-700 hover:text-stone-900 focus:outline-none flex items-center gap-2 cursor-pointer transition-all duration-200 shadow-2xs hover:shadow-xs"
                >
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                    Collection:
                  </span>
                  <span className="font-medium text-stone-800">
                    {CATEGORY_TABS.find((c) => c.id === selectedCategory)?.label ||
                      'All Collections'}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#9E7518] transition-transform duration-200 ${
                      isCategoryOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isCategoryOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white/98 backdrop-blur-md rounded-2xl border border-[#C59B27]/30 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-b border-stone-100">
                      Select Collection
                    </div>
                    {CATEGORY_TABS.map((tab) => {
                      const isSelected = selectedCategory === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => {
                            onSelectCategory(tab.id);
                            setIsCategoryOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-[#FAF5EE] text-[#9E7518] font-semibold'
                              : 'text-stone-700 hover:bg-[#FAF5EE]/70 hover:text-[#9E7518]'
                          }`}
                        >
                          <span>{tab.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#9E7518] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Jewellery Type Dropdown */}
              <div ref={subProductRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubProductOpen((prev) => !prev);
                    setIsCategoryOpen(false);
                    setIsSortOpen(false);
                  }}
                  className="bg-white border border-[#C59B27]/30 hover:border-[#9E7518] text-xs rounded-full px-4 py-2 text-stone-700 hover:text-stone-900 focus:outline-none flex items-center gap-2 cursor-pointer transition-all duration-200 shadow-2xs hover:shadow-xs"
                >
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                    Type:
                  </span>
                  <span className="font-medium text-stone-800">
                    {SUB_PRODUCTS_LIST.find((s) => s.id === selectedSubProduct)?.label ||
                      'All Items'}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#9E7518] transition-transform duration-200 ${
                      isSubProductOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isSubProductOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white/98 backdrop-blur-md rounded-2xl border border-[#C59B27]/30 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-b border-stone-100">
                      Jewellery Category
                    </div>
                    {SUB_PRODUCTS_LIST.map((sub) => {
                      const isSelected = selectedSubProduct === sub.id;
                      return (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => {
                            onSelectSubProduct(sub.id);
                            setIsSubProductOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-[#FAF5EE] text-[#9E7518] font-semibold'
                              : 'text-stone-700 hover:bg-[#FAF5EE]/70 hover:text-[#9E7518]'
                          }`}
                        >
                          <span>{sub.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#9E7518] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Reset Filters button if any filter is active */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#9E7518] hover:text-[#7A5A0F] bg-[#FAF5EE] hover:bg-[#F3EAD8] rounded-full border border-[#C59B27]/30 transition-colors font-medium cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            {/* Right: Search & Sort Dropdown */}
            <div className="flex items-center gap-2.5 flex-wrap w-full lg:w-auto justify-between lg:justify-end">
              <div className="relative flex-1 sm:w-56">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search pieces..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-8 pr-7 py-2 bg-white border border-stone-200/90 rounded-full text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#9E7518] focus:ring-1 focus:ring-[#9E7518] transition-all"
                />
                {searchFilter && (
                  <button
                    onClick={() => setSearchFilter('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Custom Luxury Sort Dropdown */}
              <div ref={sortRef} className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setIsSortOpen((prev) => !prev);
                    setIsCategoryOpen(false);
                    setIsSubProductOpen(false);
                  }}
                  className="bg-white border border-[#C59B27]/30 hover:border-[#9E7518] text-xs rounded-full px-4 py-2 text-stone-700 hover:text-stone-900 focus:outline-none flex items-center gap-2 cursor-pointer transition-all duration-200 shadow-2xs hover:shadow-xs"
                >
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                    Sort:
                  </span>
                  <span className="font-medium text-stone-800">
                    {SORT_OPTIONS.find((opt) => opt.id === sortBy)?.label || 'Featured'}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#9E7518] transition-transform duration-200 ${
                      isSortOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white/98 backdrop-blur-md rounded-2xl border border-[#C59B27]/30 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-b border-stone-100">
                      Sort By
                    </div>
                    {SORT_OPTIONS.map((opt) => {
                      const isSelected = sortBy === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setSortBy(opt.id);
                            setIsSortOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-[#FAF5EE] text-[#9E7518] font-semibold'
                              : 'text-stone-700 hover:bg-[#FAF5EE]/70 hover:text-[#9E7518]'
                          }`}
                        >
                          <span>{opt.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#9E7518] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid - Matching Reference Card UI */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-stone-300 p-8">
            <p className="font-serif text-lg text-stone-700">
              No pieces found matching your selection.
            </p>
            <p className="text-xs text-stone-400 mt-1">
              Try switching to &quot;All Items&quot; or resetting your search filter.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 bg-[#1C1917] text-white text-xs px-5 py-2.5 rounded-full font-medium hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl sm:rounded-3xl border border-stone-200/80 hover:border-[#C59B27]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                  onClick={() => onQuickView(product)}
                >
                  {/* Top Image Container */}
                  <div className="p-3 sm:px-4 sm:pt-4 pb-0 ">
                    <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#FAF7F2]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                      {/* Tag Badge */}
                      {product.tag && (
                        <span className="absolute top-3 left-3 bg-black/75 text-[#E5C378] text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                          {product.tag}
                        </span>
                      )}

                      {/* Floating Wishlist Heart */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(product);
                        }}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-stone-600 hover:text-rose-600 shadow-xs flex items-center justify-center transition-all backdrop-blur-xs hover:scale-110 cursor-pointer"
                        aria-label="Wishlist toggle"
                      >
                        <Heart
                          className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`}
                        />
                      </button>

                      {/* Floating Quick View Eye Icon on Hover */}
                      <div
                        className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-black shadow-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
                        title="Quick View"
                      >
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content (Centered Luxury Aesthetic matching reference) */}
                  <div className="p-5 pt-4 text-center flex-1 flex flex-col items-center justify-between">
                    <div className="w-full">
                      {/* Serif Heading */}
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1A1A1A] group-hover:text-[#9E7518] transition-colors line-clamp-1">
                        {product.shortName || product.name}
                      </h3>

                      {/* Price & Purity */}
                      <div className="flex items-center justify-center gap-2 mt-1.5">
                        <span className="text-sm sm:text-base font-semibold text-[#1A1A1A]">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-xs text-stone-400 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>

                      <span className="text-[10px] text-stone-400 uppercase tracking-widest font-medium block mt-1">
                        {product.purity}
                      </span>
                    </div>

                    {/* Centered 'Explore Now →' with Discreet Quick-Add Button */}
                    <div className="w-full pt-3 mt-3 border-t border-stone-100 flex items-center justify-center relative">
                      <span className="group/link text-xs sm:text-[13px] font-medium tracking-wide text-stone-800 group-hover:text-[#9E7518] inline-flex items-center gap-1.5 transition-colors">
                        <span>Explore Now</span>
                        <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                          →
                        </span>
                      </span>

                      {/* Discreet 1-Click Quick Add to Cart Button */}
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className={`absolute right-0 p-1.5 rounded-full transition-all duration-300 flex items-center gap-1 text-xs cursor-pointer ${
                          addedAnimationId === product.id
                            ? 'bg-emerald-600 text-white px-2'
                            : 'bg-stone-100 hover:bg-[#9E7518] text-stone-700 hover:text-white'
                        }`}
                        aria-label="Add to cart"
                        title="Add to cart"
                      >
                        {addedAnimationId === product.id ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-semibold">Added</span>
                          </>
                        ) : (
                          <ShoppingBag className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
