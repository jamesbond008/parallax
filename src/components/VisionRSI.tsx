import React from 'react';
import { Language } from '../types';
import { contentData } from '../data/content';
import { Dna } from 'lucide-react';
import { RsiMazeExperience } from '../rsi-maze';

interface VisionRSIProps {
  lang: Language;
}

export const VisionRSI: React.FC<VisionRSIProps> = ({ lang }) => {
  const content = contentData[lang].vision;

  return (
    <section id="vision" className="w-full py-20 bg-[#0a0a0b] relative scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-mono font-bold mb-3">
            <Dna className="w-3.5 h-3.5" />
            {content.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#fafaf9]">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-[#f59e0b] font-medium mt-1 font-mono">
            {content.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-[#78716c] mt-3 italic max-w-2xl">
            {content.quoteTop}
          </p>
        </div>

        {/* 3-Phase Architectural Journey (Illustration 3 from Design Spec) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phase 1: Today */}
          <div className="bg-[#141415] border border-[#6366f1]/40 rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#6366f1] transition-all">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#818cf8] uppercase">
                  {content.todayTitle}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#6366f1]/20 text-[#c7d2fe] border border-[#6366f1]/30">
                  {content.todayPrice}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#fafaf9] mt-2">
                Dual-Agent Collaboration
              </h3>
              <p className="text-xs text-[#78716c] mt-1 mb-4">
                {content.todaySub}
              </p>
              <ul className="space-y-2 text-xs text-[#a8a29e]">
                <li className="flex items-start gap-2">
                  <span className="text-[#6366f1] mt-0.5">•</span>
                  <span>{content.todayBullet1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6366f1] mt-0.5">•</span>
                  <span>{content.todayBullet2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6366f1] mt-0.5">•</span>
                  <span>{content.todayBullet3}</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2a2a2c] text-xs font-mono text-[#818cf8] italic">
              "Two heads are better than one."
            </div>
          </div>

          {/* Phase 2: Tomorrow */}
          <div className="bg-[#141415] border border-[#f59e0b]/50 rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#f59e0b] transition-all shadow-lg shadow-[#f59e0b]/5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#f59e0b] uppercase">
                  {content.tomorrowTitle}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f59e0b]/20 text-[#fde68a] border border-[#f59e0b]/30">
                  {content.tomorrowTime}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#fafaf9] mt-2">
                Recursive Self-Improvement
              </h3>
              <p className="text-xs text-[#78716c] mt-1 mb-4">
                {content.tomorrowSub}
              </p>
              <ul className="space-y-2 text-xs text-[#a8a29e]">
                <li className="flex items-start gap-2">
                  <span className="text-[#f59e0b] mt-0.5">•</span>
                  <span>{content.tomorrowBullet1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f59e0b] mt-0.5">•</span>
                  <span>{content.tomorrowBullet2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f59e0b] mt-0.5">•</span>
                  <span>{content.tomorrowBullet3}</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2a2a2c] text-xs font-mono text-[#f59e0b] italic">
              "The maze gets harder. The agent gets smarter faster."
            </div>
          </div>

          {/* Phase 3: Endgame */}
          <div className="bg-[#141415] border border-[#22c55e]/40 rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#22c55e] transition-all">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#22c55e] uppercase">
                  {content.endgameTitle}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#22c55e]/20 text-[#bbf7d0] border border-[#22c55e]/30">
                  Recursive Loop (∞)
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#fafaf9] mt-2">
                Self-Synthesizing Intelligence
              </h3>
              <p className="text-xs text-[#78716c] mt-1 mb-4">
                {content.endgameSub}
              </p>
              <p className="text-xs text-[#a8a29e] leading-relaxed">
                {content.endgameQuote}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2a2a2c] text-xs font-mono text-[#22c55e] italic">
              "The ceiling isn't collaboration — it's evolution."
            </div>
          </div>
        </div>

        {/* RSI Evolution Sandbox — Dynamic 5-Round Cognitive Maze Experience */}
        <RsiMazeExperience
          initialLang={lang}
          initialRound={3}
          initialSeed={42}
          showHeader={true}
          showFooter={true}
        />
      </div>
    </section>
  );
};
