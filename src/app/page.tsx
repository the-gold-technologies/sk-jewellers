'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CategoryShowcase } from '@/components/CategoryShowcase';
import { ProductExplorer } from '@/components/ProductExplorer';
import { HeritageCraftsmanship } from '@/components/HeritageCraftsmanship';
import { Testimonials } from '@/components/Testimonials';
import { SpecialMoments } from '@/components/SpecialMoments';
import { Newsletter } from '@/components/Newsletter';
import { InstagramCommunity } from '@/components/InstagramCommunity';
import { Footer } from '@/components/Footer';
import { QuickViewModal } from '@/components/QuickViewModal';
import { Product } from '@/data/jewelleryData';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubProduct, setSelectedSubProduct] = useState<string>('All');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const currency: 'INR' | 'USD' = 'INR';

  const scrollToExplorer = () => {
    const el = document.getElementById('product-explorer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (catId: string, subProduct?: string) => {
    setSelectedCategory(catId);
    if (subProduct) {
      setSelectedSubProduct(subProduct);
    } else {
      setSelectedSubProduct('All');
    }
    scrollToExplorer();
  };

  const handleSelectSubProduct = (subId: string) => {
    setSelectedSubProduct(subId);
  };

  return (
    <main className="min-h-screen w-full bg-[#FAF5EE] text-[#1C1917] selection:bg-[#C59B27]/20 selection:text-[#8C6411]">
      {/* 1. Header with announcement bar, live rates & mega-menu */}
      <Header
        onSelectCategory={handleSelectCategory}
      />

      {/* 2. Luxury Hero Section (Exact Luxora Reference) */}
      <Hero
        onExploreClick={scrollToExplorer}
        onCategoryClick={(cat) => handleSelectCategory(cat)}
      />

      {/* 4. Shop by Category Showcase (Gold, Silver, Electroplated, Utensils, Idols) */}
      <CategoryShowcase onSelectCategory={handleSelectCategory} />

      {/* 5. Centerpiece: Categories & Sub-products Interactive Explorer */}
      <ProductExplorer
        selectedCategory={selectedCategory}
        selectedSubProduct={selectedSubProduct}
        onSelectCategory={setSelectedCategory}
        onSelectSubProduct={handleSelectSubProduct}
        onQuickView={(p) => setQuickViewProduct(p)}
        currency={currency}
      />

      {/* 6. Heritage, BIS Hallmark & Craftsmanship Story */}
      <HeritageCraftsmanship />

      {/* 8. Verified Patron Reviews */}
      <Testimonials />

      {/* 10. Curated Moments: Bridal Wedding & Eternal Gifting Banners */}
      <SpecialMoments onSelectCategory={handleSelectCategory} />

      {/* 11. Follow Our Instagram Carousel (Ditto Reference Match) */}
      <InstagramCommunity />

      {/* 12. Footer with full Category & Sub-product navigation */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Product Quick View */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        currency={currency}
      />

    </main>
  );
}
