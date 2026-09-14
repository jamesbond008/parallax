import React, { useState } from 'react';
import { Language, StageInfo } from '../types';
import { contentData } from '../data/content';
import { ShieldCheck, ArrowRightLeft, FileCheck, Layers, GitFork, Sparkles, Check } from 'lucide-react';

interface SixStagesProps {
  lang: Language;
}

export const SixStages: React.FC<SixStagesProps> = ({ lang }) => {
  const content = contentData[lang].stages;
  const [selectedStageId, setSelectedStageId] = useState<string>("01");
  const selectedStage = content.items.find((s) => s.id === selectedStageId) || content.items[0];

  return (
    <section id="process" className="w-full py-20 bg-[#0d0d0e] border-t border-[#2a2a2c] relative scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#818cf8] text-xs font-mono font-bold mb-3">
            <Layers className="w-3.5 h-3.5" />
            ILLUSTRATION 2 · SIX STAGES COORDINATION
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#fafaf9]">
            {content.title}
          </h2>
          <p className="text-sm sm:text-base text-[#78716c] mt-2">
            {content.subtitle}
          </p>
        </div>

        {/* Stage Navigation Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
          {content.items.map((stage) => {
            const isSelected = stage.id === selectedStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#141415] border-[#f59e0b] shadow-lg shadow-[#f59e0b]/10'
                    : 'bg-[#141415]/60 border-[#2a2a2c] hover:border-[#78716c] text-[#78716c]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#f59e0b]' : 'text-[#78716c]'}`}>
                    {stage.number}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />}
                </div>
                <span className={`text-xs font-bold mt-2 truncate ${isSelected ? 'text-[#fafaf9]' : 'text-[#a8a29e]'}`}>
                  {stage.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Dual-Agent Architecture Canvas / Visual Box */}
        <div className="bg-[#141415] border border-[#2a2a2c] rounded-2xl p-6 sm:p-8 shadow-xl">
          {/* Active Stage Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#2a2a2c] gap-3">
            <div>
              <span className="text-xs font-mono text-[#f59e0b] font-bold tracking-wider">
                STAGE {selectedStage.number} DEEP DIVE
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#fafaf9] mt-0.5">
                {selectedStage.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono bg-[#0d0d0e] px-3 py-1.5 rounded-lg border border-[#2a2a2c]">
              <span className="text-[#818cf8] font-bold">Model A (Indigo)</span>
              <span className="text-[#f59e0b]">⚡ Challenge ⚡</span>
              <span className="text-[#fdba74] font-bold">Model B (Rust)</span>
            </div>
          </div>

          {/* Model A vs Model B Blind Parallel Tracks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            {/* Model A Box */}
            <div className="bg-[#0d0d0e] border border-[#6366f1]/30 rounded-xl p-5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6366f1]" />
                  <span className="text-xs font-bold font-mono text-[#818cf8]">
                    {content.modelALabel}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#78716c]">Role: Lead Drafter</span>
              </div>
              <p className="text-sm font-semibold text-[#fafaf9]">
                {selectedStage.modelA.action}
              </p>
              <div className="mt-3 p-3 rounded-lg bg-[#141415] border border-[#6366f1]/20 text-xs font-mono text-[#c7d2fe] leading-relaxed">
                "{selectedStage.modelA.details}"
              </div>
            </div>

            {/* Model B Box */}
            <div className="bg-[#0d0d0e] border border-[#b84a1c]/40 rounded-xl p-5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b84a1c]" />
                  <span className="text-xs font-bold font-mono text-[#fdba74]">
                    {content.modelBLabel}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#78716c]">Role: Blind Auditor</span>
              </div>
              <p className="text-sm font-semibold text-[#fafaf9]">
                {selectedStage.modelB.action}
              </p>
              <div className="mt-3 p-3 rounded-lg bg-[#141415] border border-[#b84a1c]/20 text-xs font-mono text-[#fed7aa] leading-relaxed">
                "{selectedStage.modelB.details}"
              </div>
            </div>
          </div>

          {/* Bidirectional Challenge Callout */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#6366f1]/10 via-[#f59e0b]/10 to-[#b84a1c]/10 border border-[#f59e0b]/30 flex items-start sm:items-center gap-3">
            <ArrowRightLeft className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <span className="text-xs font-mono font-bold text-[#f59e0b] uppercase mr-2">
                {content.challengeLabel}:
              </span>
              <span className="text-xs sm:text-sm text-[#fafaf9] font-medium">
                {selectedStage.challenge}
              </span>
            </div>
          </div>

          {/* Convergence Zone for current stage */}
          <div className="mt-4 p-4 rounded-xl bg-[#0d0d0e] border border-[#2a2a2c] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-bold text-[#22c55e] uppercase flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                Convergence Resolution:
              </span>
              <p className="text-xs sm:text-sm text-[#a8a29e] mt-1">
                {selectedStage.convergence}
              </p>
            </div>
            <div className="shrink-0 font-mono text-[11px] bg-[#141415] text-[#22c55e] px-3 py-1.5 rounded-lg border border-[#22c55e]/30">
              {selectedStage.ledgerRecord}
            </div>
          </div>
        </div>

        {/* Ownership Transfer & Append-Only Ledger Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Ownership Transfer Card */}
          <div className="bg-[#141415] border border-[#f59e0b]/30 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-[#f59e0b]/10 text-[#f59e0b] font-bold">
                  ⚡
                </span>
                <h4 className="text-base font-bold text-[#f59e0b]">
                  {content.ownershipTitle}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#a8a29e] leading-relaxed mt-2">
                {content.ownershipDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2a2a2c] text-xs font-mono text-[#f59e0b] italic">
              {content.ownershipQuote}
            </div>
          </div>

          {/* Append-Only Ledger Card */}
          <div className="bg-[#141415] border border-[#22c55e]/30 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-[#22c55e]/10 text-[#22c55e] font-bold">
                  📋
                </span>
                <h4 className="text-base font-bold text-[#22c55e]">
                  {content.ledgerTitle}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#a8a29e] leading-relaxed mt-2">
                {content.ledgerDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2a2a2c] text-xs font-mono text-[#22c55e] italic">
              {content.ledgerQuote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
