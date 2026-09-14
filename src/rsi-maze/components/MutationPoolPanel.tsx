import React from 'react';
import { MutationVariant, Language } from '../types';
import { CheckCircle2, GitBranch, Sparkles } from 'lucide-react';

interface MutationPoolPanelProps {
  variants: MutationVariant[];
  selectedVariantId: string;
  onSelectVariant: (id: string) => void;
  lang: Language;
}

export const MutationPoolPanel: React.FC<MutationPoolPanelProps> = ({
  variants,
  selectedVariantId,
  onSelectVariant,
  lang
}) => {
  const labels = {
    zh: {
      title: '变异候选池 (MUTATION POOL)',
      subtitle: '选择下一个演化世代的基因重组候选方案',
      fitness: '适应度预测',
      activeTag: '当前选用'
    },
    en: {
      title: 'MUTATION POOL CANDIDATES',
      subtitle: 'Select genetic candidate for next generational synthesis',
      fitness: 'Fitness Score',
      activeTag: 'Active'
    },
    ja: {
      title: '変異候補プール (MUTATION POOL)',
      subtitle: '次世代の適応度評価候補を選択',
      fitness: '適応度予測',
      activeTag: '選択中'
    }
  }[lang];

  return (
    <div className="w-full bg-[#0d0d0e] border border-[#2a2a2c] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#2a2a2c]/60">
        <div className="flex items-center gap-2">
          <GitBranch className="w-3.5 h-3.5 text-[#22c55e]" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#a8a29e] uppercase">
            {labels.title}
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#78716c]">
          3 Variants Generated
        </span>
      </div>

      <p className="text-xs text-[#78716c] mb-3">
        {labels.subtitle}
      </p>

      <div className="space-y-2.5">
        {variants.map((variant) => {
          const isSelected = variant.id === selectedVariantId;
          return (
            <div
              key={variant.id}
              onClick={() => onSelectVariant(variant.id)}
              className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isSelected
                  ? 'bg-[#141415] border-[#22c55e] shadow-md shadow-[#22c55e]/5'
                  : 'bg-[#111113] border-[#222227] hover:border-[#78716c] text-[#78716c]'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center border mt-0.5 shrink-0 transition-colors ${
                    isSelected
                      ? 'border-[#22c55e] bg-[#22c55e]'
                      : 'border-[#78716c]'
                  }`}
                >
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#0a0a0b]" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold ${isSelected ? 'text-[#fafaf9]' : 'text-[#d6d3d1]'}`}>
                      {variant.name}
                    </span>
                    {variant.tag && (
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#1c1917] text-[#f59e0b] border border-[#f59e0b]/20">
                        {variant.tag}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-[#78716c] block mt-0.5">
                    {variant.strategy}
                  </span>
                  {variant.description && (
                    <p className="text-[11px] text-[#a8a29e] mt-1 leading-snug">
                      {variant.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between shrink-0 font-mono text-xs pt-1 sm:pt-0 border-t sm:border-t-0 border-[#2a2a2c]/40">
                <span className="text-[#22c55e] font-bold text-xs">
                  {variant.confidence}% {labels.fitness}
                </span>
                <span className="text-[10px] text-[#78716c]">
                  Pred: {variant.predicted}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
