'use client';

import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onSelectCategory?: (category: string, subProduct?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="contact-footer"
      className="bg-[#181D1A] text-stone-200 pt-16 pb-12 border-t-2 border-[#C59B27]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Clean 3-Column Luxury Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Column 1: Brand & Heritage (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Brand Logo matching Navbar exactly */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 28 28" fill="none" className="w-9 h-9 text-[#E5B842]">
                  <polygon
                    points="7,4 21,4 26,12 14,26 2,12"
                    fill="#242C26"
                    stroke="#E5B842"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <line x1="2" y1="12" x2="26" y2="12" stroke="#F3C853" strokeWidth="1.2" />
                  <line x1="7" y1="4" x2="14" y2="12" stroke="#F3C853" strokeWidth="1.2" />
                  <line x1="21" y1="4" x2="14" y2="12" stroke="#F3C853" strokeWidth="1.2" />
                  <line x1="14" y1="12" x2="14" y2="26" stroke="#F3C853" strokeWidth="1.2" />
                  <line x1="8" y1="12" x2="14" y2="26" stroke="#F3C853" strokeWidth="1.2" />
                  <line x1="20" y1="12" x2="14" y2="26" stroke="#F3C853" strokeWidth="1.2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white leading-none">
                  SK
                </span>
                <span className="text-[9px] uppercase tracking-[0.28em] text-[#E5B842] font-bold mt-1">
                  JEWELLERS
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-sm font-normal">
              Crafting certified 22K hallmarked gold, 925 sterling silver heirlooms, and consecrated
              puja silverware since 1984.
            </p>

            <div className="pt-2 flex items-center gap-2.5 text-xs text-white font-medium">
              <ShieldCheck className="w-4 h-4 text-[#E5B842] shrink-0" />
              <span>Govt. Registered BIS Hallmarked Jewellery House</span>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:border-[#E5B842] hover:bg-[#E5B842]/20 hover:text-[#F3C853] text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:border-[#E5B842] hover:bg-[#E5B842]/20 hover:text-[#F3C853] text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:border-[#E5B842] hover:bg-[#E5B842]/20 hover:text-[#F3C853] text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Essential Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-[0.18em]">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-sm text-stone-200">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-[#F3C853] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory?.('All');
                    scrollTo('categories');
                  }}
                  className="hover:text-[#F3C853] transition-colors cursor-pointer"
                >
                  Shop
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory?.('All');
                    scrollTo('product-explorer');
                  }}
                  className="hover:text-[#F3C853] transition-colors cursor-pointer"
                >
                  Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('heritage')}
                  className="hover:text-[#F3C853] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact-section')}
                  className="hover:text-[#F3C853] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Concierge & Flagship (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-[0.18em]">
              Client Concierge
            </h4>
            <ul className="space-y-3 text-sm text-stone-200">
              <li className="flex items-center gap-2.5 text-white font-semibold">
                <Phone className="w-4 h-4 text-[#E5B842] shrink-0" />
                <span>+91 98765 XXXXX</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E5B842] shrink-0" />
                <a
                  href="mailto:concierge@skjewellers.com"
                  className="hover:text-white transition-colors"
                >
                  concierge@skjewellers.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-0.5">
                <MapPin className="w-4 h-4 text-[#E5B842] shrink-0 mt-0.5" />
                <span className="text-stone-300 leading-snug">
                  Flagship Boutiques: Zaveri Bazaar, Mumbai &bull; Connaught Place, New Delhi
                </span>
              </li>
              <li className="pt-1 text-xs text-stone-400 font-medium">
                Mon &ndash; Sat: 10:30 AM to 8:00 PM IST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle Payment Safe Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300 text-center sm:text-left">
          <div className="font-normal">&copy; 2026 SK JEWELLERS. All Rights Reserved.</div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-400 font-medium">Secure Payments:</span>
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <span className="bg-white/10 px-3 py-1 rounded-md border border-white/20 shadow-xs">
                UPI
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-md border border-white/20 shadow-xs">
                VISA
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-md border border-white/20 shadow-xs">
                MASTERCARD
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-md border border-white/20 shadow-xs">
                NET BANKING
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
