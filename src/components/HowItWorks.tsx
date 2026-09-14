import React from 'react';
import { Language } from '../types';
import { contentData } from '../data/content';
import { Download, KeyRound, MessageSquareCode, ShieldCheck, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  lang: Language;
  onOpenDownload: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ lang, onOpenDownload }) => {
  const content = contentData[lang].howItWorks;

  const icons = [
    <Download className="w-5 h-5 text-[#f59e0b]" />,
    <KeyRound className="w-5 h-5 text-[#6366f1]" />,
    <MessageSquareCode className="w-5 h-5 text-[#0ea5e9]" />,
    <ShieldCheck className="w-5 h-5 text-[#22c55e]" />
  ];

  return (
    <section id="how-it-works" className="w-full py-20 bg-[#0d0d0e] border-t border-[#2a2a2c] relative scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-mono font-bold mb-3">
            {content.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#fafaf9]">
            {content.title}
          </h2>
          <p className="text-sm sm:text-base text-[#78716c] mt-2">
            {content.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-[#141415] border border-[#2a2a2c] hover:border-[#f59e0b]/40 rounded-2xl p-6 relative flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0d0d0e] border border-[#2a2a2c] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {icons[idx]}
                  </div>
                  <span className="font-mono text-2xl font-black text-[#2a2a2c] group-hover:text-[#f59e0b]/40 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#fafaf9] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#78716c] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-[#141415] border border-[#2a2a2c] flex items-center justify-center text-[#78716c]">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner Quote & Action */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#141415] via-[#1a1a1c] to-[#141415] border border-[#f59e0b]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-base sm:text-lg font-bold text-[#fafaf9] font-mono">
              {content.quote}
            </p>
            <p className="text-xs text-[#78716c] mt-1">
              Zero vendor lock-in. Works directly with your local workspace.
            </p>
          </div>
          <button
            onClick={onOpenDownload}
            className="px-5 py-2.5 rounded-xl bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0a0a0b] text-xs font-bold transition-all shadow-md cursor-pointer shrink-0"
          >
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
};
