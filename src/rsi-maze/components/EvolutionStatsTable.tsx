import React from 'react';
import { RoundData, Language } from '../types';
import { TrendingUp, BarChart3, Scissors } from 'lucide-react';

interface EvolutionStatsTableProps {
  rounds: RoundData[];
  currentRound: number;
  onSelectRound: (roundNum: number) => void;
  lang: Language;
}

export const EvolutionStatsTable: React.FC<EvolutionStatsTableProps> = ({
  rounds,
  currentRound,
  onSelectRound,
  lang
}) => {
  const t = {
    zh: {
      title: '5 轮演化剪刀差数据看板',
      tableHeaders: ['轮次', '迷宫规模', '核心认知范式', '行动步数', '死胡同', '演化评分'],
      scissorsTitle: '剪刀差效应 (SCISSORS CURVE)',
      scissorsDesc: '迷宫难度递增 114% (7×7 → 15×15)，而步数成本骤降 87% (86 → 11 步)',
      crossover: '认知相变跃迁点 (Round 3)',
      difficultyLabel: '环境难度 (Difficulty ↑)',
      performanceLabel: '求解步数 (Steps ↓)'
    },
    en: {
      title: '5-ROUND EVOLUTIONARY SCISSORS MATRIX',
      tableHeaders: ['Round', 'Grid Size', 'Cognitive Paradigm', 'Steps', 'Dead Ends', 'Score'],
      scissorsTitle: 'SCISSORS PHENOMENON CURVE',
      scissorsDesc: 'Environment complexity rises 114% (7×7 → 15×15), while step cost collapses 87% (86 → 11 steps)',
      crossover: 'Cognitive Phase Transition (Round 3)',
      difficultyLabel: 'Environment Hardness (Difficulty ↑)',
      performanceLabel: 'Steps Consumed (Steps ↓)'
    },
    ja: {
      title: '5世代進化ハサミ効果データダッシュボード',
      tableHeaders: ['ラウンド', '規模', '認知パラダイム', '歩数', '袋小路', '進化スコア'],
      scissorsTitle: 'ハサミ効果曲線 (SCISSORS CURVE)',
      scissorsDesc: '環境難易度は+114%上昇、しかし消費歩数は-87%減少',
      crossover: '認知相転移点 (Round 3)',
      difficultyLabel: '環境難易度 (Difficulty ↑)',
      performanceLabel: '実行歩数 (Steps ↓)'
    }
  }[lang];

  return (
    <div className="w-full bg-[#0d0d0e] border border-[#2a2a2c] rounded-xl p-4 sm:p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#2a2a2c]/60">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#fafaf9] uppercase">
              {t.title}
            </span>
          </div>
          <span className="text-xs font-mono text-[#f59e0b] font-bold">
            Active: R{currentRound}
          </span>
        </div>

        {/* 5-Round Stats Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-[#2a2a2c] text-[#78716c]">
                {t.tableHeaders.map((header, i) => (
                  <th key={i} className="pb-2 font-medium">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2a2c]/40">
              {rounds.map((r) => {
                const isActive = r.round === currentRound;
                return (
                  <tr
                    key={r.round}
                    onClick={() => onSelectRound(r.round)}
                    className={`cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-[#141415] text-[#fafaf9] font-bold'
                        : 'hover:bg-[#141415]/60 text-[#a8a29e]'
                    }`}
                  >
                    <td className="py-2.5">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] ${
                        isActive ? 'bg-[#f59e0b] text-[#0a0a0b]' : 'bg-[#1a1a1d] text-[#78716c]'
                      }`}>
                        R{r.round}
                      </span>
                    </td>
                    <td className="py-2.5 text-[#ef4444] font-semibold">{r.mazeSizeLabel}</td>
                    <td className="py-2.5 truncate max-w-[140px] text-[#fafaf9]">
                      {r.strategyName[lang]}
                    </td>
                    <td className="py-2.5 text-[#38bdf8] font-semibold">{r.baselineSteps}</td>
                    <td className="py-2.5 text-[#fb7185]">{r.baselineDeadEnds}</td>
                    <td className="py-2.5 text-[#22c55e] font-semibold">{r.evolutionScore}/100</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Scissors Curve Visualization */}
      <div className="mt-6 pt-4 border-t border-[#2a2a2c] bg-[#141415] p-4 rounded-xl border border-[#222226]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Scissors className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span className="text-[11px] font-mono font-bold text-[#fafaf9] uppercase">
              {t.scissorsTitle}
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#78716c]">
            Logarithmic Divergence
          </span>
        </div>

        <p className="text-[11px] text-[#a8a29e] mb-3 leading-relaxed">
          {t.scissorsDesc}
        </p>

        {/* SVG Curve */}
        <div className="h-28 w-full">
          <svg viewBox="0 0 280 100" className="w-full h-full">
            {/* Grid axis */}
            <line x1="15" y1="85" x2="270" y2="85" stroke="#2a2a2c" strokeWidth="1" />
            <line x1="15" y1="15" x2="15" y2="85" stroke="#2a2a2c" strokeWidth="1" />

            {/* Difficulty Line (Red - going UP) */}
            {/* Points: R1(15, 75), R2(75, 60), R3(135, 45), R4(195, 30), R5(255, 18) */}
            <path
              d="M 20 75 L 80 62 L 140 48 L 200 32 L 260 18"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="4,3"
            />
            <text x="210" y="24" fill="#ef4444" fontSize="8" fontFamily="monospace">
              {t.difficultyLabel}
            </text>

            {/* Performance/Steps Line (Green - dropping exponentially) */}
            {/* Steps: R1(86) -> y=20, R2(52) -> y=45, R3(31) -> y=65, R4(18) -> y=76, R5(11) -> y=82 */}
            <path
              d="M 20 20 L 80 44 L 140 64 L 200 75 L 260 82"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
            />
            <text x="145" y="80" fill="#22c55e" fontSize="8" fontFamily="monospace">
              {t.performanceLabel}
            </text>

            {/* Crossover point */}
            <circle cx="95" cy="58" r="4.5" fill="#f59e0b" />
            <line x1="95" y1="58" x2="95" y2="92" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2,2" />
            <text x="100" y="93" fill="#f59e0b" fontSize="7.5" fontFamily="monospace">
              {t.crossover}
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};
