export type Language = 'zh' | 'en' | 'ja';

export interface Point {
  x: number;
  y: number;
}

export type MazeGrid = number[][]; // 0 = path, 1 = wall

export interface StrategyDNA {
  direction: string;
  memory: string;
  lookahead: string;
  backtrack: string;
}

export interface MutationVariant {
  id: string;
  name: string;
  strategy: string;
  predicted: string;
  confidence: number;
  selected?: boolean;
  tag?: string;
  description?: string;
}

export interface RoundData {
  round: number; // 1 ~ 5
  name: string;
  title: Record<Language, string>;
  strategyName: Record<Language, string>;
  mazeDimension: number; // 7, 9, 11, 13, 15
  mazeSizeLabel: string;
  description: Record<Language, string>;
  strategyDna: StrategyDNA;
  variants: MutationVariant[];
  baselineSteps: number;
  baselineDeadEnds: number;
  evolutionScore: number;
  insight: {
    core: Record<Language, string>;
    parallaxContrast: Record<Language, string>;
  };
  quote: Record<Language, string>;
}

export interface SolverStep {
  current: Point;
  visited: Point[];
  path: Point[];
  deadEnds: Point[];
  isBacktracking?: boolean;
  explanation?: string;
  scanProgress?: number; // 0 to 1 for topological scan
}

export interface SolverResult {
  steps: SolverStep[];
  totalSteps: number;
  deadEndCount: number;
  completed: boolean;
  finalPath: Point[];
}

export interface RsiMazeExperienceProps {
  initialLang?: Language;
  initialRound?: number;
  initialSeed?: number;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
}
