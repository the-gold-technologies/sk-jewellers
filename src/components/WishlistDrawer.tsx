'use client';

import React from 'react';
import Image from 'next/image';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '@/data/jewelleryData';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveWishlist: (productId: string) => void;
  onMoveToCart: (product: Product) => void;
  currency: 'INR' | 'USD';
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveWishlist,
  onMoveToCart,
  currency,
}) => {
  if (!isOpen) return null;

  const formatPrice = (val: number) => {
    if (currency === 'USD') {
      return `$${Math.round(val / 84).toLocaleString('en-US')}`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between border-l border-[#C59B27]/30">
          {/* Header */}
          <div className="p-5 border-b border-[#C59B27]/20 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 fill-rose-600 text-rose-600" />
              <h3 className="font-serif text-lg font-bold text-[#0B2319]">
                My Saved Wishlist ({wishlistProducts.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <Heart className="w-12 h-12 text-stone-300 mx-auto" />
                <p className="font-serif text-base text-stone-600">Your wishlist is empty.</p>
                <p className="text-xs text-stone-400">
                  Tap the heart icon on any jewelry piece to save it for later.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 bg-[#0B2319] text-[#FAF7F2] text-xs font-medium px-5 py-2.5 rounded-lg hover:bg-[#16402F]"
                >
                  Explore Jewelry
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-xs flex gap-3.5 items-center"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-bold text-[#8C6411] tracking-wider block">
                      {product.category} • {product.subProduct}
                    </span>
                    <h4 className="text-xs font-serif font-bold text-[#0B2319] truncate">
                      {product.shortName || product.name}
                    </h4>
                    <p className="text-[11px] text-[#0B2319] font-bold">
                      {formatPrice(product.price)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onMoveToCart(product)}
                        className="bg-[#0B2319] hover:bg-[#16402F] text-white text-[11px] px-3 py-1.5 rounded-md font-medium inline-flex items-center gap-1 shadow-xs"
                      >
                        <ShoppingBag className="w-3 h-3 text-[#E5C378]" />
                        <span>Move to Bag</span>
                      </button>

                      <button
                        onClick={() => onRemoveWishlist(product.id)}
                        className="text-stone-400 hover:text-rose-600 p-1.5 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="p-4 bg-white border-t border-stone-200">
              <button
                onClick={() => {
                  wishlistProducts.forEach((p) => onMoveToCart(p));
                }}
                className="w-full bg-[#C59B27] hover:bg-[#9E7518] text-[#0B2319] hover:text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Move All To Bag
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
