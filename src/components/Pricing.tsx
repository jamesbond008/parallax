import React, { useState } from 'react';
import { Language } from '../types';
import { contentData } from '../data/content';
import { Check, Download, ShieldCheck, Zap } from 'lucide-react';

interface PricingProps {
  lang: Language;
  onOpenDownload: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ lang, onOpenDownload }) => {
  const content = contentData[lang].pricing;
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="w-full py-20 bg-[#0a0a0b] border-t border-[#2a2a2c] relative scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#4ade80] text-xs font-mono font-bold mb-3">
            <Zap className="w-3.5 h-3.5" />
            {content.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#fafaf9]">
            {content.title}
          </h2>
          <p className="text-sm sm:text-base text-[#78716c] mt-2">
            {content.subtitle}
          </p>

          {/* Billing Interval Switch */}
          <div className="mt-8 flex items-center bg-[#141415] border border-[#2a2a2c] p-1 rounded-xl">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                !isAnnual
                  ? 'bg-[#2a2a2c] text-[#fafaf9] shadow-sm'
                  : 'text-[#78716c] hover:text-[#fafaf9]'
              }`}
            >
              {content.monthly}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                isAnnual
                  ? 'bg-[#f59e0b] text-[#0a0a0b] shadow-md shadow-[#f59e0b]/20 font-bold'
                  : 'text-[#78716c] hover:text-[#fafaf9]'
              }`}
            >
              <span>{content.annual}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${isAnnual ? 'bg-[#0a0a0b]/20 text-[#0a0a0b]' : 'bg-[#f59e0b]/10 text-[#f59e0b]'}`}>
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Card (Max Width Container) */}
        <div className="max-w-xl mx-auto bg-[#141415] border-2 border-[#f59e0b]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#f59e0b] to-[#d97706] text-[#0a0a0b] text-[10px] font-mono font-black uppercase px-4 py-1 rounded-bl-xl tracking-wider">
            {isAnnual ? content.saveBadge : "Simple Fixed Price"}
          </div>

          <div className="mb-6">
            <span className="text-xs font-mono text-[#78716c] uppercase tracking-wider block">
              Parallax Pro License
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl sm:text-6xl font-black text-[#fafaf9] tracking-tight font-mono">
                {isAnnual ? content.annualPrice : content.monthlyPrice}
              </span>
              <span className="text-sm font-mono text-[#a8a29e]">
                {isAnnual ? "/ year ($16.50/mo equivalent)" : content.perMonth}
              </span>
            </div>
            <p className="text-xs text-[#78716c] mt-2 font-mono">
              {isAnnual ? content.billedAnnually : "Cancel anytime from your local client settings."}
            </p>
          </div>

          {/* Features checklist */}
          <div className="space-y-3 py-6 border-y border-[#2a2a2c] my-6">
            {content.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#fafaf9]">
                <div className="w-5 h-5 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#22c55e]" />
                </div>
                <span>{f}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={onOpenDownload}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#f59e0b] via-[#f59e0b] to-[#d97706] hover:brightness-110 text-[#0a0a0b] text-sm font-extrabold transition-all shadow-lg shadow-[#f59e0b]/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{content.cta}</span>
          </button>

          {/* Trust Guarantee */}
          <div className="mt-4 text-center">
            <p className="text-xs text-[#78716c] font-mono flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#22c55e]" />
              {content.trialNote}
            </p>
            <p className="text-xs text-[#f59e0b] font-mono font-medium mt-2 italic">
              {content.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
