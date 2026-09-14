import React from 'react';
import { RoundData, Language } from '../types';
import { Sparkles, ArrowRightLeft, Quote } from 'lucide-react';

interface InsightBoxProps {
  roundData: RoundData;
  lang: Language;
}

export const InsightBox: React.FC<InsightBoxProps> = ({ roundData, lang }) => {
  const t = {
    zh: {
      coreLabel: '核心认知跃迁 (COGNITIVE BREAKTHROUGH)',
      parallaxLabel: 'PARALLAX 映射与工程对照',
      quoteLabel: '演化箴言'
    },
    en: {
      coreLabel: 'COGNITIVE BREAKTHROUGH',
      parallaxLabel: 'PARALLAX SYSTEM PARALLEL',
      quoteLabel: 'EVOLUTIONARY AXIOM'
    },
    ja: {
      coreLabel: '核心的認知跳躍 (COGNITIVE BREAKTHROUGH)',
      parallaxLabel: 'PARALLAX 対比と工学写像',
      quoteLabel: '進化の格言'
    }
  }[lang];

  return (
    <div className="w-full bg-[#0d0d0e] border border-[#2a2a2c] rounded-xl p-4 sm:p-5 space-y-4">
      {/* 1. Core Breakthrough */}
      <div className="bg-[#141415] border border-[#f59e0b]/30 rounded-xl p-4 relative">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#f59e0b]" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#f59e0b] uppercase">
            {t.coreLabel} · ROUND {roundData.round}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#fafaf9] leading-relaxed">
          {roundData.insight.core[lang]}
        </p>
      </div>

      {/* 2. Parallax System Contrast */}
      <div className="bg-[#141415] border border-[#6366f1]/30 rounded-xl p-4 relative">
        <div className="flex items-center gap-2 mb-2">
          <ArrowRightLeft className="w-4 h-4 text-[#818cf8]" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#818cf8] uppercase">
            {t.parallaxLabel}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#a8a29e] leading-relaxed">
          {roundData.insight.parallaxContrast[lang]}
        </p>
      </div>

      {/* 3. Quote */}
      <div className="pt-2 border-t border-[#2a2a2c]/60 flex items-start gap-2 text-xs font-mono text-[#78716c] italic">
        <Quote className="w-3.5 h-3.5 text-[#f59e0b] shrink-0 mt-0.5 opacity-60" />
        <span>{roundData.quote[lang]}</span>
      </div>
    </div>
  );
};
