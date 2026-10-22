'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ShoppingBag, Trash2, ArrowRight, ShieldCheck, Tag, Truck } from 'lucide-react';
import { Product } from '@/data/jewelleryData';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  currency: 'INR' | 'USD';
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  currency,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const total = subtotal - discountAmount;
  const freeShippingThreshold = 2999;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const formatPrice = (val: number) => {
    if (currency === 'USD') {
      return `$${Math.round(val / 84).toLocaleString('en-US')}`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'ROYAL10') {
      setAppliedDiscount(10);
      setPromoMessage('ROYAL10 Applied: 10% Festive Discount granted!');
    } else {
      setPromoMessage('Invalid voucher. Try ROYAL10 for 10% off.');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert(
        'Order simulated successfully! In a live environment, this connects to Razorpay / Stripe gateway.'
      );
      setIsCheckingOut(false);
      onClose();
    }, 1200);
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
              <ShoppingBag className="w-5 h-5 text-[#C59B27]" />
              <h3 className="font-serif text-lg font-bold text-[#0B2319]">
                Your Shopping Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-[#FAF7F2] p-4 border-b border-stone-200">
            <div className="flex items-center justify-between text-xs font-medium text-stone-700 mb-1.5">
              <span className="flex items-center gap-1.5 text-[#0B2319]">
                <Truck className="w-3.5 h-3.5 text-[#C59B27]" />
                {subtotal >= freeShippingThreshold
                  ? 'Congratulations! You unlocked FREE Insured Express Delivery!'
                  : `Add ${formatPrice(freeShippingThreshold - subtotal)} more for FREE Insured Express Delivery`}
              </span>
            </div>
            <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#9E7518] to-[#C59B27] transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto" />
                <p className="font-serif text-base text-stone-600">Your bag is currently empty.</p>
                <p className="text-xs text-stone-400">
                  Explore Gold, Silver, or Utensil collections to add items.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 bg-[#0B2319] text-[#FAF7F2] text-xs font-medium px-5 py-2.5 rounded-lg hover:bg-[#16402F]"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-xs flex gap-3.5 items-center"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-bold text-[#8C6411] tracking-wider block">
                      {item.product.category} • {item.product.subProduct}
                    </span>
                    <h4 className="text-xs font-serif font-bold text-[#0B2319] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-stone-500 font-medium">
                      {formatPrice(item.product.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-1.5">
                      <div className="flex items-center border border-stone-200 rounded-md bg-stone-50">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-200"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-200"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-stone-400 hover:text-rose-600 p-1 transition-colors"
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

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-[#C59B27]/20 space-y-4">
              {/* Promo code input */}
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Promo Code (Try ROYAL10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-[#FAF7F2] border border-stone-200 rounded-lg text-xs uppercase focus:outline-none focus:ring-1 focus:ring-[#C59B27]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-stone-800 hover:bg-black text-white text-xs px-3.5 py-2 rounded-lg font-medium transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p className="text-[11px] text-emerald-700 font-medium">{promoMessage}</p>
                )}
              </form>

              {/* Bill Details */}
              <div className="space-y-1.5 text-xs text-stone-600 border-t border-stone-100 pt-3">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-medium text-stone-900">{formatPrice(subtotal)}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount (10%):</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Insured Express Shipping:</span>
                  <span className="text-emerald-700 font-medium">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#0B2319] border-t border-stone-200 pt-2">
                  <span>Total Amount:</span>
                  <span className="text-base text-[#0B2319]">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-[#0B2319] hover:bg-[#16402F] text-[#FAF7F2] py-3.5 rounded-xl font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                {isCheckingOut ? (
                  <span>Securing Order Gateway...</span>
                ) : (
                  <>
                    <span>Proceed To Secure Checkout</span>
                    <ArrowRight className="w-4 h-4 text-[#E5C378]" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Encrypted &amp; Insured Pan-India Delivery</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
