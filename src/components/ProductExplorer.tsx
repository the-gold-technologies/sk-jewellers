'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  Heart,
  Eye,
  ShoppingBag,
  Search,
  Check,
  RotateCcw,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  X,
} from 'lucide-react';
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
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  // Filtered and Sorted list
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      const matchCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchSub =
        selectedSubProduct === 'All' || item.subProduct === selectedSubProduct;

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
    <section id="product-explorer" className="py-16 sm:py-24 bg-[#FAF7F2] scroll-mt-20 border-b border-[#C59B27]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-[#9E7518] block mb-2">
            Collections &amp; Catalogue
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-tight">
            Our Most Loved Pieces
          </h2>
          <p className="mt-2 text-stone-500 text-xs sm:text-sm font-light">
            Handcrafted with devotion in 22K pure gold, sterling silver, and consecrated sacred metal.
          </p>
        </div>

        {/* Minimalist Luxury Filter Navigation */}
        <div className="mb-10 sm:mb-12">
          
          {/* Tier 1: Clean Category Pills / Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap">
            {CATEGORY_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectCategory(tab.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] tracking-wider uppercase font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#1C1917] text-[#FAF7F2] shadow-sm'
                      : 'bg-white/90 text-stone-600 hover:text-[#1C1917] hover:bg-white border border-stone-200/80 hover:border-stone-400'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tier 2: Compact Sub-Products Chips Strip */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mt-4 pt-3 border-t border-stone-200/40">
            {SUB_PRODUCTS_LIST.map((sub) => {
              const isActive = selectedSubProduct === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => onSelectSubProduct(sub.id)}
                  className={`px-3 sm:px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#9E7518]/15 text-[#8C6411] border border-[#C59B27] font-semibold'
                      : 'text-stone-500 hover:text-stone-900 hover:bg-stone-200/60'
                  }`}
                >
                  {sub.label}
                </button>
              );
            })}
          </div>

          {/* Tier 3: Sleek Toolbar (Count, Search, Sort, Reset) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 pt-4 border-t border-stone-200/60">
            
            {/* Left: Creations Count & Clear Tag */}
            <div className="flex items-center gap-2.5 text-xs text-stone-500 font-light">
              <span>
                Showing <strong className="text-stone-900 font-medium">{filteredProducts.length}</strong> creations
              </span>
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-[11px] text-[#9E7518] hover:text-[#7A5A0F] font-medium underline underline-offset-2 ml-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset filters</span>
                </button>
              )}
            </div>

            {/* Right: Search & Sort Dropdown */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <div className="relative flex-1 sm:w-56">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search pieces..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-white border border-stone-200/90 rounded-full text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#9E7518] focus:ring-1 focus:ring-[#9E7518] transition-all"
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

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-stone-200/90 text-xs rounded-full px-3.5 py-1.5 text-stone-700 focus:outline-none focus:border-[#9E7518] cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

          </div>

        </div>

        {/* Product Grid - Matching Reference Card UI */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-stone-300 p-8">
            <p className="font-serif text-lg text-stone-700">No pieces found matching your selection.</p>
            <p className="text-xs text-stone-400 mt-1">Try switching to &quot;All Items&quot; or resetting your search filter.</p>
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
                  <div className="p-3 sm:p-4 pb-0">
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
                          className={`w-4 h-4 ${
                            isWishlisted ? 'fill-rose-600 text-rose-600' : ''
                          }`}
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
                        {product.name}
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
                        <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
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
