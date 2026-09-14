import React from 'react';
import { StrategyDNA, Language } from '../types';
import { Dna, Compass, Database, Eye, RotateCcw } from 'lucide-react';

interface StrategyDNABarProps {
  dna: StrategyDNA;
  round: number;
  lang: Language;
}

export const StrategyDNABar: React.FC<StrategyDNABarProps> = ({ dna, round, lang }) => {
  const titles = {
    zh: { header: '策略基因序列 (STRATEGY DNA)', codons: ['朝向偏好', '空间记忆', '前瞻视野', '回溯机制'] },
    en: { header: 'STRATEGY GENOME SEQUENCE', codons: ['Direction Bias', 'Spatial Memory', 'Lookahead Horizon', 'Backtrack Logic'] },
    ja: { header: '戦略遺伝子配列 (STRATEGY DNA)', codons: ['方向性バイアス', '空間記憶', '先読み視野', 'バックトラック'] }
  }[lang];

  return (
    <div className="w-full bg-[#0d0d0e] border border-[#2a2a2c] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#2a2a2c]/60">
        <div className="flex items-center gap-2">
          <Dna className="w-3.5 h-3.5 text-[#f59e0b]" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#a8a29e] uppercase">
            {titles.header} · R{round} CODON
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#78716c]">
          Gene Mutations Active
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
        {/* Codon 1: Direction */}
        <div className="bg-[#141415] p-2.5 rounded-lg border border-[#2a2a2c] flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-[#78716c] uppercase mb-1">
            <Compass className="w-3 h-3 text-[#38bdf8]" />
            <span>{titles.codons[0]}</span>
          </div>
          <span className="text-[#38bdf8] font-bold truncate text-[11px]">
            {dna.direction}
          </span>
        </div>

        {/* Codon 2: Memory */}
        <div className="bg-[#141415] p-2.5 rounded-lg border border-[#2a2a2c] flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-[#78716c] uppercase mb-1">
            <Database className="w-3 h-3 text-[#4ade80]" />
            <span>{titles.codons[1]}</span>
          </div>
          <span className="text-[#4ade80] font-bold truncate text-[11px]">
            {dna.memory}
          </span>
        </div>

        {/* Codon 3: Lookahead */}
        <div className="bg-[#141415] p-2.5 rounded-lg border border-[#2a2a2c] flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-[#78716c] uppercase mb-1">
            <Eye className="w-3 h-3 text-[#f59e0b]" />
            <span>{titles.codons[2]}</span>
          </div>
          <span className="text-[#f59e0b] font-bold truncate text-[11px]">
            {dna.lookahead}
          </span>
        </div>

        {/* Codon 4: Backtrack */}
        <div className="bg-[#141415] p-2.5 rounded-lg border border-[#2a2a2c] flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-[#78716c] uppercase mb-1">
            <RotateCcw className="w-3 h-3 text-[#c084fc]" />
            <span>{titles.codons[3]}</span>
          </div>
          <span className="text-[#c084fc] font-bold truncate text-[11px]">
            {dna.backtrack}
          </span>
        </div>
      </div>
    </div>
  );
};
