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
import { CartDrawer, CartItem } from '@/components/CartDrawer';
import { WishlistDrawer } from '@/components/WishlistDrawer';
import { Product, PRODUCTS_DATA } from '@/data/jewelleryData';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubProduct, setSelectedSubProduct] = useState<string>('All');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS_DATA[0], // Royal Solitaire Ring
      quantity: 1,
    },
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['gold-necklace-1', 'utensil-thali-1']);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
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

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const handleMoveFromWishlistToCart = (product: Product) => {
    handleAddToCart(product, 1);
    handleToggleWishlist(product);
  };

  const wishlistProducts = PRODUCTS_DATA.filter((p) => wishlistIds.includes(p.id));

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main className="min-h-screen w-full bg-[#FAF5EE] text-[#1C1917] selection:bg-[#C59B27]/20 selection:text-[#8C6411]">
      {/* 1. Header with announcement bar, live rates & mega-menu */}
      <Header
        cartCount={cartTotalCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
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
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        wishlistIds={wishlistIds}
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

      {/* Interactive Drawers & Modals */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        currency={currency}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        currency={currency}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveWishlist={(id) => setWishlistIds((prev) => prev.filter((item) => item !== id))}
        onMoveToCart={handleMoveFromWishlistToCart}
        currency={currency}
      />
    </main>
  );
}
