export type Language = 'en' | 'zh' | 'ja';

export interface StageInfo {
  id: string;
  number: string;
  title: string;
  modelA: {
    role: string;
    action: string;
    details: string;
  };
  modelB: {
    role: string;
    action: string;
    details: string;
  };
  challenge: string;
  convergence: string;
  ledgerRecord: string;
}

export interface RSIRound {
  round: number;
  name: string;
  strategyName: string;
  mazeSize: string;
  steps: number;
  deadEnds: number;
  evolutionScore: number;
  strategyDna: {
    direction: string;
    memory: string;
    lookahead: string;
    backtrack: string;
  };
  description: string;
  variants: {
    id: string;
    name: string;
    strategy: string;
    predicted: string;
    confidence: number;
    selected: boolean;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
  tag?: string;
}
