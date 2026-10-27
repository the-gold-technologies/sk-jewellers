'use client';

import React from 'react';
import { TrendingUp, RefreshCw, Clock } from 'lucide-react';
import { LIVE_BULLION_RATES } from '@/data/jewelleryData';

export const LiveRateBar: React.FC = () => {
  return (
    <section id="live-rates" className="bg-[#0B2319] text-white py-4 border-y border-[#C59B27]/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Label */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E5C378]">
              Today&apos;s Live Bullion Benchmark Rates
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-stone-300">
              <Clock className="w-3 h-3 text-[#C59B27]" />
              {LIVE_BULLION_RATES.lastUpdated}
            </span>
          </div>

          {/* Rates Grid */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs">
            <div className="flex items-center gap-2 bg-[#13392A] px-3.5 py-1.5 rounded-lg border border-[#C59B27]/25">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-stone-300">Gold 24K Pure:</span>
              <strong className="text-amber-300 font-semibold">{LIVE_BULLION_RATES.gold24K}</strong>
            </div>

            <div className="flex items-center gap-2 bg-[#13392A] px-3.5 py-1.5 rounded-lg border border-[#C59B27]/25">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-stone-300">Gold 22K (Hallmark):</span>
              <strong className="text-amber-300 font-semibold">{LIVE_BULLION_RATES.gold22K}</strong>
            </div>

            <div className="flex items-center gap-2 bg-[#13392A] px-3.5 py-1.5 rounded-lg border border-[#C59B27]/25">
              <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-stone-300">Silver 999 Fine:</span>
              <strong className="text-cyan-200 font-semibold">
                {LIVE_BULLION_RATES.silver999}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
