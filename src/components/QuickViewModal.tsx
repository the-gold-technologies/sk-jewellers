'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Star } from 'lucide-react';
import { Product } from '@/data/jewelleryData';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  currency: 'INR' | 'USD';
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  currency,
}) => {
  const [activeImage, setActiveImage] = useState<string>('');
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);

  if (!product) return null;

  const currentImg = activeImage || product.image;

  const formatPrice = (val: number) => {
    if (currency === 'USD') {
      return `$${Math.round(val / 84).toLocaleString('en-US')}`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length === 6) {
      setPincodeStatus('Available for 48-Hour Insured Express Delivery to your area!');
    } else {
      setPincodeStatus('Please enter a valid 6-digit pin code.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative bg-[#FAF7F2] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#C59B27]/40 max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-stone-700 shadow-md transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image & Thumbnails */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between bg-white border-r border-[#C59B27]/20">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
            <Image src={currentImg} alt={product.name} fill className="object-cover" />
            {product.tag && (
              <span className="absolute top-3 left-3 bg-[#0B2319] text-[#E5C378] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#C59B27]/30">
                {product.tag}
              </span>
            )}
          </div>

          {/* Thumbnail switcher */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setActiveImage(product.image)}
              className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                currentImg === product.image
                  ? 'border-[#C59B27] scale-105'
                  : 'border-stone-200 opacity-70'
              }`}
            >
              <Image src={product.image} alt="View 1" fill className="object-cover" />
            </button>
            <button
              onClick={() => setActiveImage(product.secondaryImage)}
              className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                currentImg === product.secondaryImage
                  ? 'border-[#C59B27] scale-105'
                  : 'border-stone-200 opacity-70'
              }`}
            >
              <Image src={product.secondaryImage} alt="View 2" fill className="object-cover" />
            </button>
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6411]">
              {/* <Sparkles className="w-3.5 h-3.5" /> */}
              <span>
                {product.category} Jewellery • {product.subProduct}
              </span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#0B2319] mt-1 leading-snug">
              {product.name}
            </h2>

            {/* Ratings */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-500 text-amber-500'
                        : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-stone-800">{product.rating}</span>
              <span className="text-xs text-stone-500">
                ({product.reviewsCount} verified reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 pt-2 border-t border-stone-200">
            <span className="text-2xl font-bold text-[#0B2319]">{formatPrice(product.price)}</span>
            <span className="text-sm text-stone-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
            <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              Save{' '}
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Specifications Table */}
          <div className="bg-white p-3.5 rounded-xl border border-stone-200 space-y-2 text-xs">
            <div className="flex justify-between text-stone-600">
              <span className="font-medium text-stone-500">Purity Certification:</span>
              <span className="font-semibold text-[#0B2319]">{product.purity}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span className="font-medium text-stone-500">Approx. Weight:</span>
              <span className="font-semibold text-[#0B2319]">{product.weight}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span className="font-medium text-stone-500">Making &amp; Hallmarking:</span>
              <span className="font-semibold text-emerald-700">
                BIS HUID Certified 100% Genuine
              </span>
            </div>
          </div>

          {/* Pincode checker */}
          <form onSubmit={handlePincodeCheck} className="space-y-1">
            <label className="text-[11px] font-medium text-stone-500 uppercase tracking-wider block">
              Check Insured Delivery Pincode:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                maxLength={6}
                placeholder="Enter 6-digit pin..."
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-40 px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#C59B27]"
              />
              <button
                type="submit"
                className="bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs px-3 py-1.5 rounded-lg font-medium transition-colors"
              >
                Check
              </button>
            </div>
            {pincodeStatus && (
              <p className="text-[11px] text-emerald-700 font-medium mt-1">{pincodeStatus}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
