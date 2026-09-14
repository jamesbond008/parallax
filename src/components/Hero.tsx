import React from 'react';
import { Download, PlayCircle, ShieldCheck, Cpu, Terminal, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { contentData } from '../data/content';
import { MazeSimulation } from './MazeSimulation';

interface HeroProps {
  lang: Language;
  onOpenDownload: () => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenDownload, onOpenDemo }) => {
  const content = contentData[lang].hero;

  return (
    <section className="relative w-full pt-12 sm:pt-20 pb-16 overflow-hidden bg-[#0a0a0b]">
      {/* Glow Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#f59e0b]/10 via-[#6366f1]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141415] border border-[#2a2a2c] text-xs font-mono text-[#a8a29e] shadow-inner mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
            <span className="text-[#fafaf9] font-medium">{content.badge}</span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#fafaf9] leading-[1.15] sm:leading-[1.12]">
            <span className="text-[#fafaf9] block">{content.titleLine1}</span>
            <span className="bg-gradient-to-r from-[#f59e0b] via-[#fdba74] to-[#f59e0b] bg-clip-text text-transparent block mt-1">
              {content.titleLine2}
            </span>
            <span className="text-[#a8a29e] font-bold text-2xl sm:text-4xl md:text-5xl block mt-2 sm:mt-3">
              {content.titleLine3}
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#78716c] leading-relaxed max-w-2xl mx-auto font-normal">
            {content.subtitle}
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenDownload}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f59e0b] via-[#f59e0b] to-[#d97706] hover:brightness-110 text-[#0a0a0b] text-sm font-bold shadow-lg shadow-[#f59e0b]/20 hover:shadow-[#f59e0b]/35 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{content.downloadBtn}</span>
            </button>

            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#141415] hover:bg-[#1a1a1c] border border-[#2a2a2c] hover:border-[#f59e0b]/40 text-sm font-semibold text-[#fafaf9] transition-all cursor-pointer shadow-sm"
            >
              <PlayCircle className="w-4 h-4 text-[#f59e0b]" />
              <span>{content.watchDemo}</span>
            </button>
          </div>

          {/* Trust Guarantee Micro-copy */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#78716c]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#22c55e]" />
              {content.trialBadge}
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-[#6366f1]" />
              Local-First Zero Telemetry
            </span>
          </div>
        </div>

        {/* Hero Interactive Illustration 1 */}
        <div id="demo" className="mt-12 sm:mt-16 scroll-mt-24">
          <MazeSimulation lang={lang} />
        </div>
      </div>
    </section>
  );
};
