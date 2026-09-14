import React from 'react';
import {
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  Compass,
  Zap,
  FastForward,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';

interface RoundControlsProps {
  currentRound: number;
  onSelectRound: (roundNum: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onStepForward: () => void;
  onReset: () => void;
  speed: number;
  onChangeSpeed: (newSpeed: number) => void;
  isTourActive: boolean;
  onToggleTour: () => void;
  onReseed: () => void;
  stepIndex: number;
  totalSteps: number;
  deadEnds: number;
  lang: Language;
}

export const RoundControls: React.FC<RoundControlsProps> = ({
  currentRound,
  onSelectRound,
  isPlaying,
  onTogglePlay,
  onStepForward,
  onReset,
  speed,
  onChangeSpeed,
  isTourActive,
  onToggleTour,
  onReseed,
  stepIndex,
  totalSteps,
  deadEnds,
  lang
}) => {
  const t = {
    zh: {
      play: '运行',
      pause: '暂停',
      step: '单步',
      reset: '重置',
      tour: '5轮巡礼演进',
      tourActive: '巡礼进行中...',
      reseed: '新地图',
      stepLabel: '步数',
      deadEndsLabel: '死胡同'
    },
    en: {
      play: 'Play',
      pause: 'Pause',
      step: 'Step',
      reset: 'Reset',
      tour: '5-Round Tour',
      tourActive: 'Tour Active...',
      reseed: 'New Maze',
      stepLabel: 'Steps',
      deadEndsLabel: 'Dead Ends'
    },
    ja: {
      play: '再生',
      pause: '一時停止',
      step: '1歩進む',
      reset: 'リセット',
      tour: '5世代ツアー',
      tourActive: 'ツアー実行中...',
      reseed: '新マップ',
      stepLabel: '歩数',
      deadEndsLabel: '袋小路'
    }
  }[lang];

  return (
    <div className="w-full bg-[#141415] border border-[#2a2a2c] rounded-2xl p-4 sm:p-5 flex flex-col gap-4">
      {/* Top Row: Round Switcher & Live Step Metrics */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#2a2a2c]/60">
        {/* Round Switcher Pills */}
        <div className="flex items-center gap-1.5 bg-[#0d0d0e] p-1 rounded-xl border border-[#2a2a2c]">
          {[1, 2, 3, 4, 5].map((r) => (
            <button
              key={r}
              onClick={() => onSelectRound(r)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                currentRound === r
                  ? 'bg-[#f59e0b] text-[#0a0a0b] shadow-md shadow-[#f59e0b]/20'
                  : 'text-[#78716c] hover:text-[#fafaf9]'
              }`}
            >
              R{r}
            </button>
          ))}
        </div>

        {/* Live Counters */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <div className="px-2.5 py-1 rounded-lg bg-[#0d0d0e] border border-[#2a2a2c] text-[#a8a29e]">
            {t.stepLabel}:{' '}
            <strong className="text-[#38bdf8]">
              {stepIndex + 1}/{totalSteps}
            </strong>
          </div>
          <div className="px-2.5 py-1 rounded-lg bg-[#0d0d0e] border border-[#2a2a2c] text-[#a8a29e]">
            {t.deadEndsLabel}:{' '}
            <strong className={deadEnds > 0 ? 'text-[#ef4444]' : 'text-[#22c55e]'}>
              {deadEnds}
            </strong>
          </div>
        </div>
      </div>

      {/* Bottom Row: Control Buttons, Speed, Auto-Tour */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Playback action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onTogglePlay}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
              isPlaying
                ? 'bg-[#ef4444] text-[#fafaf9] shadow-md shadow-[#ef4444]/20'
                : 'bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0a0a0b] shadow-md shadow-[#f59e0b]/20'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>{t.pause}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t.play}</span>
              </>
            )}
          </button>

          <button
            onClick={onStepForward}
            disabled={isPlaying}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0d0d0e] hover:bg-[#1a1a1c] border border-[#2a2a2c] text-xs font-mono font-medium text-[#fafaf9] transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <SkipForward className="w-3.5 h-3.5" />
            <span>{t.step}</span>
          </button>

          <button
            onClick={onReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0d0d0e] hover:bg-[#1a1a1c] border border-[#2a2a2c] text-xs font-mono font-medium text-[#78716c] hover:text-[#fafaf9] transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.reset}</span>
          </button>

          <button
            onClick={onReseed}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0d0d0e] hover:bg-[#1a1a1c] border border-[#2a2a2c] text-xs font-mono font-medium text-[#a8a29e] transition-all cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>{t.reseed}</span>
          </button>
        </div>

        {/* Speed Selector & Tour Button */}
        <div className="flex items-center gap-2.5">
          {/* Speed Buttons */}
          <div className="flex items-center gap-1 bg-[#0d0d0e] p-1 rounded-xl border border-[#2a2a2c]">
            {[1, 2, 4, 8].map((s) => (
              <button
                key={s}
                onClick={() => onChangeSpeed(s)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
                  speed === s
                    ? 'bg-[#38bdf8] text-[#0a0a0b]'
                    : 'text-[#78716c] hover:text-[#fafaf9]'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>

          {/* 5-Round Tour Button */}
          <button
            onClick={onToggleTour}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              isTourActive
                ? 'bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-[#fafaf9] ring-2 ring-[#8b5cf6]/50 shadow-lg shadow-[#8b5cf6]/25 animate-pulse'
                : 'bg-[#1a1a1e] hover:bg-[#25252b] border border-[#8b5cf6]/40 text-[#c4b5fd]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isTourActive ? t.tourActive : t.tour}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
