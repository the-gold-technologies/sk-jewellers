'use client';

import React from 'react';
import { Sparkles, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (category: string, subProduct?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <footer className="bg-[#071711] text-stone-300 pt-16 pb-12 border-t border-[#C59B27]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#9E7518] via-[#C59B27] to-[#E5C378] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#E5C378]">
                AURELIA
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-medium">
              Fine Jewels &amp; Sacred Silver
            </p>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm font-light">
              Crafting sacred heirlooms, 22K certified hallmarked gold, 925 sterling silver, micron electroplated jewelry, and pure consecrated puja utensils since 1984.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-stone-900 hover:bg-[#C59B27] text-stone-300 hover:text-black flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-stone-900 hover:bg-[#C59B27] text-stone-300 hover:text-black flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-stone-900 hover:bg-[#C59B27] text-stone-300 hover:text-black flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Govt. Registered BIS Hallmarked Jewellery House</span>
            </div>
          </div>

          {/* Col 2: Categories (Gold, Silver, Electroplated, Utensils) */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E5C378] uppercase tracking-wider">
              Precious Categories
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onSelectCategory('Gold')}
                  className="hover:text-[#E5C378] transition-colors"
                >
                  22K &amp; 18K Gold Jewellery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Silver')}
                  className="hover:text-[#E5C378] transition-colors"
                >
                  925 Sterling Silver
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Electroplated')}
                  className="hover:text-[#E5C378] transition-colors"
                >
                  Electroplated Micron Luxury
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Utensils')}
                  className="hover:text-[#E5C378] transition-colors"
                >
                  Pure Silver Puja Utensils
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Idols')}
                  className="hover:text-[#E5C378] transition-colors"
                >
                  Sacred Idols &amp; Murti
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Sub-products (Ring, Anklet, Idols, Earrings, etc.) */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E5C378] uppercase tracking-wider">
              Sub-Products
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onSelectCategory('All', 'Ring')}
                  className="hover:text-[#E5C378] transition-colors"
                >
                  Solitaires &amp; Gold Rings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('All', 'Anklet')}
                  className="hover:text-[#E5C378] transition-colors"
                >
                  Silver Payal &amp; Anklets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('All', 'Idols')}
                  className="hover:text-[#E5C378] transition-colors"
                >
                  Ganesha &amp; Lakshmi Idols
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('All', 'Earrings')}
                  className="hover:text-[#E5C378] transition-colors"
                >
                  Royal Jhumkas &amp; Hoops
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('All', 'Necklaces')}
                  className="hover:text-[#E5C378] transition-colors"
                >
                  Chokers &amp; Polki Necklaces
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('All', 'Utensils')}
                  className="hover:text-[#E5C378] transition-colors"
                >
                  Silver Puja Thalis &amp; Kalash
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Care & Concierge */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E5C378] uppercase tracking-wider">
              Customer Concierge
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="flex items-center gap-2 text-white">
                <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>concierge@aureliajewels.com</span>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                <span>Zaveri Bazaar &amp; Connaught Place Flagship Boutiques</span>
              </li>
              <li className="pt-2 text-[11px] text-stone-400">
                Mon - Sat: 10:30 AM to 8:00 PM IST
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2026 AURELIA FINE JEWELS &amp; SACRED SILVERWARE. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-stone-400">Accepted Safe Payments:</span>
            <div className="flex items-center gap-2 text-[11px] font-mono text-stone-300">
              <span className="bg-stone-800 px-2 py-0.5 rounded border border-stone-700">UPI</span>
              <span className="bg-stone-800 px-2 py-0.5 rounded border border-stone-700">VISA</span>
              <span className="bg-stone-800 px-2 py-0.5 rounded border border-stone-700">MASTERCARD</span>
              <span className="bg-stone-800 px-2 py-0.5 rounded border border-stone-700">NET BANKING</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
