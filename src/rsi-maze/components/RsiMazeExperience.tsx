import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { RsiMazeExperienceProps, Language, SolverResult } from '../types';
import { roundsData } from '../data/roundsData';
import { generateMaze } from '../utils/mazeGenerator';
import { solveRsiRound } from '../utils/mazeSolvers';
import { ErrorBoundary } from './ErrorBoundary';
import { MazeCanvas } from './MazeCanvas';
import { StrategyDNABar } from './StrategyDNABar';
import { MutationPoolPanel } from './MutationPoolPanel';
import { EvolutionStatsTable } from './EvolutionStatsTable';
import { InsightBox } from './InsightBox';
import { RoundControls } from './RoundControls';
import { Dna, Sparkles, ShieldCheck, Zap, Info } from 'lucide-react';

export const RsiMazeExperience: React.FC<RsiMazeExperienceProps> = ({
  initialLang = 'zh',
  initialRound = 3,
  initialSeed = 42,
  showHeader = true,
  showFooter = true,
  className = ''
}) => {
  const [lang, setLang] = useState<Language>(initialLang);
  const [currentRound, setCurrentRound] = useState<number>(initialRound);
  const [seed, setSeed] = useState<number>(initialSeed);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(2); // 1x, 2x, 4x, 8x
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [isTourActive, setIsTourActive] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'canvas' | 'stats'>('canvas');

  // Selected mutation variant map (per round)
  const [selectedVariants, setSelectedVariants] = useState<Record<number, string>>({
    1: 'v1',
    2: 'v4',
    3: 'v7',
    4: 'v10',
    5: 'v13'
  });

  // Sync lang if prop changes
  useEffect(() => {
    if (initialLang) setLang(initialLang);
  }, [initialLang]);

  // Active round data
  const currentRoundData = useMemo(() => {
    return roundsData.find((r) => r.round === currentRound) || roundsData[2];
  }, [currentRound]);

  // Generate Maze for active round dimension & seed
  const mazeState = useMemo(() => {
    return generateMaze(currentRoundData.mazeDimension, seed + currentRound * 17);
  }, [currentRoundData.mazeDimension, seed, currentRound]);

  // Solve Maze for current round strategy
  const solverResult: SolverResult = useMemo(() => {
    return solveRsiRound(
      currentRound,
      mazeState.grid,
      mazeState.start,
      mazeState.goal,
      seed + currentRound * 31
    );
  }, [currentRound, mazeState, seed]);

  // Reset stepIndex whenever round or seed changes
  useEffect(() => {
    setStepIndex(0);
    setIsPlaying(true);
  }, [currentRound, seed]);

  // Animation playback interval
  useEffect(() => {
    if (!isPlaying) return;

    // Tick delay inversely proportional to speed:
    // 1x = 320ms, 2x = 160ms, 4x = 80ms, 8x = 40ms
    const delay = Math.max(30, Math.floor(320 / speed));

    const timer = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < solverResult.steps.length - 1) {
          return prev + 1;
        } else {
          // Reached end of current round
          if (isTourActive) {
            // Tour mode: advance to next round
            setTimeout(() => {
              setCurrentRound((r) => (r < 5 ? r + 1 : 1));
            }, 600);
          } else {
            setIsPlaying(false);
          }
          return prev;
        }
      });
    }, delay);

    return () => clearInterval(timer);
  }, [isPlaying, speed, solverResult.steps.length, isTourActive]);

  // Current step state
  const currentStep = solverResult.steps[stepIndex] || solverResult.steps[0] || null;
  const isGoalReached = stepIndex >= solverResult.steps.length - 1;

  // Handlers
  const handleTogglePlay = useCallback(() => {
    if (stepIndex >= solverResult.steps.length - 1) {
      setStepIndex(0);
      setIsPlaying(true);
    } else {
      setIsPlaying((prev) => !prev);
    }
  }, [stepIndex, solverResult.steps.length]);

  const handleStepForward = useCallback(() => {
    setIsPlaying(false);
    setStepIndex((prev) => Math.min(prev + 1, solverResult.steps.length - 1));
  }, [solverResult.steps.length]);

  const handleReset = useCallback(() => {
    setStepIndex(0);
    setIsPlaying(false);
  }, []);

  const handleReseed = useCallback(() => {
    setSeed((prev) => Math.floor(Math.random() * 10000) + 1);
  }, []);

  const handleToggleTour = useCallback(() => {
    setIsTourActive((prev) => {
      const next = !prev;
      if (next && !isPlaying) {
        setIsPlaying(true);
      }
      return next;
    });
  }, [isPlaying]);

  const handleSelectVariant = useCallback((variantId: string) => {
    setSelectedVariants((prev) => ({ ...prev, [currentRound]: variantId }));
  }, [currentRound]);

  const t = {
    zh: {
      badge: 'RSI 递归自我改进演进实验舱',
      title: '5 轮认知跃迁：从盲目撞墙到全局测地线',
      subtitle: '当迷宫难度倍增，Agent 解决步数却指数级衰减 —— 剪刀差效应的具象化呈现',
      liveExplanation: '当前智能体状态感知',
      tabCanvas: '迷宫演进视口',
      tabStats: '剪刀差数据矩阵',
      footerQuote: '“协同解决的是广度，进化突破的是上限。Parallax 的终点是让 AI 具备自进化的确定性闭环。”'
    },
    en: {
      badge: 'RSI RECURSIVE SELF-IMPROVEMENT EXPERIMENT',
      title: '5 Cognitive Paradigms: From Blind Chaos to Optimal Geodesics',
      subtitle: 'As maze complexity doubles, execution steps collapse exponentially — the Scissors Effect visualized.',
      liveExplanation: 'Live Cognitive Telemetry',
      tabCanvas: 'Maze Canvas Viewport',
      tabStats: 'Scissors Matrix & Curves',
      footerQuote: '"Collaboration solves breadth; evolution breaks ceilings. Parallax bridges code to true self-improvement."'
    },
    ja: {
      badge: 'RSI 再帰的自己改善・進化実験サンドボックス',
      title: '5世代の認知跳躍：盲目探索から全局測地線へ',
      subtitle: '迷路の難易度が倍増する一方、探索歩数は指数関数的に減少する「ハサミ効果」の可視化',
      liveExplanation: 'エージェント認知テレメトリ',
      tabCanvas: '迷路キャンバス',
      tabStats: 'ハサミ効果データ行列',
      footerQuote: '「協調は広がりを解決し、進化は上限を突破する。Parallaxは再帰的自己改善への架け橋です。」'
    }
  }[lang];

  return (
    <ErrorBoundary>
      <div className={`w-full bg-[#0a0a0b] text-[#fafaf9] rounded-2xl border border-[#2a2a2c] overflow-hidden shadow-2xl relative ${className}`}>
        {/* Glow backdrop */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#f59e0b]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#6366f1]/5 blur-3xl pointer-events-none" />

        {/* 1. Optional Top Header */}
        {showHeader && (
          <div className="p-5 sm:p-7 border-b border-[#2a2a2c] bg-[#111113]/90 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-mono font-bold mb-2">
                  <Dna className="w-3.5 h-3.5" />
                  {t.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#fafaf9] tracking-tight">
                  {t.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#78716c] mt-1 max-w-3xl">
                  {t.subtitle}
                </p>
              </div>

              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-[#09090b] p-1 rounded-xl border border-[#2a2a2c] self-start sm:self-auto font-mono text-xs">
                {(['zh', 'en', 'ja'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2.5 py-1 rounded-lg uppercase font-semibold transition-colors cursor-pointer ${
                      lang === l
                        ? 'bg-[#f59e0b] text-[#0a0a0b]'
                        : 'text-[#78716c] hover:text-[#fafaf9]'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. Interactive Control Bar */}
        <div className="p-4 sm:p-6 pb-0 relative z-10">
          <RoundControls
            currentRound={currentRound}
            onSelectRound={(r) => setCurrentRound(r)}
            isPlaying={isPlaying}
            onTogglePlay={handleTogglePlay}
            onStepForward={handleStepForward}
            onReset={handleReset}
            speed={speed}
            onChangeSpeed={(s) => setSpeed(s)}
            isTourActive={isTourActive}
            onToggleTour={handleToggleTour}
            onReseed={handleReseed}
            stepIndex={stepIndex}
            totalSteps={solverResult.steps.length}
            deadEnds={currentStep?.deadEnds ? currentStep.deadEnds.length : 0}
            lang={lang}
          />
        </div>

        {/* 3. Main Stage: Two Columns */}
        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
          {/* Left Column (7 cols): Canvas + Telemetry Bubble + Strategy DNA */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Active Round Headline Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-1">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold text-[#fafaf9]">
                  <strong className="text-[#f59e0b]">Round {currentRound}:</strong>{' '}
                  {currentRoundData.strategyName[lang]}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1c1917] border border-[#f59e0b]/25 text-[#f59e0b]">
                  {currentRoundData.mazeSizeLabel}
                </span>
              </div>
              <span className="text-xs font-mono text-[#22c55e]">
                Evolution Fitness: {currentRoundData.evolutionScore}/100
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#a8a29e] leading-relaxed px-1">
              {currentRoundData.description[lang]}
            </p>

            {/* Canvas Viewport */}
            <MazeCanvas
              grid={mazeState.grid}
              start={mazeState.start}
              goal={mazeState.goal}
              currentStep={currentStep}
              round={currentRound}
              isGoalReached={isGoalReached}
            />

            {/* Live Cognitive Telemetry Bubble */}
            <div className="p-3.5 rounded-xl bg-[#141415] border border-[#2a2a2c] flex items-start gap-3">
              <div className="w-6 h-6 rounded-lg bg-[#f59e0b]/15 text-[#f59e0b] flex items-center justify-center shrink-0 mt-0.5">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#78716c] uppercase">
                    {t.liveExplanation}
                  </span>
                  {currentStep?.isBacktracking && (
                    <span className="text-[9px] font-mono text-[#ef4444] animate-pulse">
                      [LIFO BACKTRACKING]
                    </span>
                  )}
                </div>
                <p className="text-xs font-mono text-[#fafaf9] mt-0.5 break-words">
                  {currentStep?.explanation || 'Computing next step along heuristic manifold...'}
                </p>
              </div>
            </div>

            {/* Strategy DNA Codon Bar */}
            <StrategyDNABar
              dna={currentRoundData.strategyDna}
              round={currentRound}
              lang={lang}
            />
          </div>

          {/* Right Column (5 cols): Mutation Pool, Evolution Stats & Insight */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Mutation Pool Candidates */}
            <MutationPoolPanel
              variants={currentRoundData.variants}
              selectedVariantId={selectedVariants[currentRound] || currentRoundData.variants[0].id}
              onSelectVariant={handleSelectVariant}
              lang={lang}
            />

            {/* Evolution Stats Table with Scissors Curve */}
            <EvolutionStatsTable
              rounds={roundsData}
              currentRound={currentRound}
              onSelectRound={(r) => setCurrentRound(r)}
              lang={lang}
            />

            {/* Deep Cognitive Insight & Parallax Parallel */}
            <InsightBox
              roundData={currentRoundData}
              lang={lang}
            />
          </div>
        </div>

        {/* 4. Optional Footer Quote */}
        {showFooter && (
          <div className="p-4 sm:p-5 border-t border-[#2a2a2c] bg-[#111113]/80 text-center relative z-10">
            <p className="text-xs font-mono text-[#78716c] italic max-w-2xl mx-auto">
              {t.footerQuote}
            </p>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};
