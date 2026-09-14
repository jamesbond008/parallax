import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Sparkles, CheckCircle2, AlertTriangle, ArrowRightLeft } from 'lucide-react';
import { Language } from '../types';
import { contentData } from '../data/content';

interface MazeSimulationProps {
  lang: Language;
}

interface Point {
  x: number;
  y: number;
}

export const MazeSimulation: React.FC<MazeSimulationProps> = ({ lang }) => {
  const content = contentData[lang].mazeDemo;

  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState<number>(2); // 1x, 2x, 4x, 8x
  const [activeTab, setActiveTab] = useState<'canvas' | 'diagram'>('canvas');

  // Solo Stats
  const [soloSavedStats, setSoloStats] = useState({
    steps: 0,
    deadEnds: 0,
    retries: 0,
    finished: false,
    bubble: "Let's vibe code this in one prompt! 🚀",
  });

  // Parallax Stats
  const [parallaxSavedStats, setParallaxStats] = useState({
    steps: 0,
    deadEnds: 0,
    handoffs: 0,
    currentAgent: 'A' as 'A' | 'B',
    finished: false,
    bubble: "Model A: Formulating problem space & invariants...",
  });

  const soloCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const parallaxCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Simulation loop references
  const animFrameRef = useRef<number | null>(null);
  const lastTickRef = useRef<number>(0);

  // Maze dimensions (grid of cells: 13x13)
  const rows = 13;
  const cols = 13;

  // Internal state tracking for animation
  const simState = useRef({
    // Shared maze layout (0 = path, 1 = wall)
    grid: [] as number[][],
    start: { x: 1, y: 1 },
    goal: { x: 11, y: 11 },

    // Solo agent
    soloPos: { x: 1, y: 1 },
    soloVisited: [] as Point[],
    soloDeadEnds: [] as Point[],
    soloRetries: [] as Point[],
    soloPathStack: [] as Point[],
    soloStuckCount: 0,
    soloSteps: 0,
    soloDeadCount: 0,
    soloRetryCount: 0,
    soloFinished: false,
    soloBubble: "Let's vibe code this in one prompt! 🚀",

    // Parallax agent
    paraPos: { x: 1, y: 1 },
    paraAgent: 'A' as 'A' | 'B',
    paraVisitedA: [] as Point[],
    paraVisitedB: [] as Point[],
    paraHandoffs: [] as Point[],
    paraDeadEnds: [] as Point[],
    paraPathStack: [] as Point[],
    paraSteps: 0,
    paraDeadCount: 0,
    paraHandoffCount: 0,
    paraProgressTimer: 0,
    paraFinished: false,
    paraBubble: "Model A: Formulating problem space & invariants...",
  });

  // Generate Maze Layout with realistic branches and traps
  const generateMaze = () => {
    const grid: number[][] = Array(rows)
      .fill(0)
      .map(() => Array(cols).fill(1));

    // Carve structured maze with dead-end branches
    const carve = (cx: number, cy: number) => {
      grid[cy][cx] = 0;
      const dirs = [
        [0, -2],
        [2, 0],
        [0, 2],
        [-2, 0],
      ].sort(() => Math.random() - 0.5);

      for (const [dx, dy] of dirs) {
        const nx = cx + dx;
        const ny = cy + dy;
        if (nx > 0 && nx < cols - 1 && ny > 0 && ny < rows - 1 && grid[ny][nx] === 1) {
          grid[cy + dy / 2][cx + dx / 2] = 0;
          carve(nx, ny);
        }
      }
    };

    carve(1, 1);
    // Ensure goal is open
    grid[11][11] = 0;
    grid[11][10] = 0;
    grid[10][11] = 0;

    // Reset simulation state
    simState.current.grid = grid;
    simState.current.soloPos = { x: 1, y: 1 };
    simState.current.soloVisited = [{ x: 1, y: 1 }];
    simState.current.soloDeadEnds = [];
    simState.current.soloRetries = [];
    simState.current.soloPathStack = [{ x: 1, y: 1 }];
    simState.current.soloStuckCount = 0;
    simState.current.soloSteps = 0;
    simState.current.soloDeadCount = 0;
    simState.current.soloRetryCount = 0;
    simState.current.soloFinished = false;
    simState.current.soloBubble = "Let's vibe code this in one prompt! 🚀";

    simState.current.paraPos = { x: 1, y: 1 };
    simState.current.paraAgent = 'A';
    simState.current.paraVisitedA = [{ x: 1, y: 1 }];
    simState.current.paraVisitedB = [];
    simState.current.paraHandoffs = [];
    simState.current.paraDeadEnds = [];
    simState.current.paraPathStack = [{ x: 1, y: 1 }];
    simState.current.paraSteps = 0;
    simState.current.paraDeadCount = 0;
    simState.current.paraHandoffCount = 0;
    simState.current.paraProgressTimer = 0;
    simState.current.paraFinished = false;
    simState.current.paraBubble = "Model A: Formulating problem space & invariants...";

    setSoloStats({
      steps: 0,
      deadEnds: 0,
      retries: 0,
      finished: false,
      bubble: "Let's vibe code this in one prompt! 🚀",
    });

    setParallaxStats({
      steps: 0,
      deadEnds: 0,
      handoffs: 0,
      currentAgent: 'A',
      finished: false,
      bubble: "Model A: Formulating problem space & invariants...",
    });

    renderCanvases();
  };

  // Solo Step Logic (prone to traps, bias, retries)
  const stepSolo = () => {
    const s = simState.current;
    if (s.soloFinished) return;

    if (s.soloPos.x === s.goal.x && s.soloPos.y === s.goal.y) {
      s.soloFinished = true;
      s.soloBubble = "Finally stumbled upon goal... but tests pass blindly. 😰";
      setSoloStats((prev) => ({ ...prev, finished: true, bubble: s.soloBubble }));
      return;
    }

    const { x, y } = s.soloPos;
    const neighbors: Point[] = [
      { x: x + 1, y },
      { x, y: y + 1 },
      { x: x - 1, y },
      { x, y: y - 1 },
    ].filter(
      (p) =>
        p.x >= 0 &&
        p.x < cols &&
        p.y >= 0 &&
        p.y < rows &&
        s.grid[p.y][p.x] === 0
    );

    // Unvisited neighbors
    const unvisited = neighbors.filter(
      (n) => !s.soloVisited.some((v) => v.x === n.x && v.y === n.y)
    );

    s.soloSteps += 1;

    // Solo vibe coder behavior: 40% bias toward same mistaken loop
    const randomRetryRoll = Math.random();

    if (unvisited.length > 0 && !(randomRetryRoll < 0.25 && s.soloRetries.length < 12 && s.soloSteps > 15)) {
      // Pick next step, sometimes picking wrong direction
      const next = unvisited[Math.floor(Math.random() * unvisited.length)];
      s.soloPos = next;
      s.soloVisited.push(next);
      s.soloPathStack.push(next);

      if (s.soloSteps % 10 === 0) {
        const bubbles = [
          "Wait, why did my unit test pass if this path is blocked?",
          "Let me tweak the prompt again...",
          "Maybe if I ask it to think harder...",
          "Tests pass! But something feels deeply wrong...",
        ];
        s.soloBubble = bubbles[Math.floor(Math.random() * bubbles.length)];
      }
    } else {
      // Hit a dead end or fallen into retry loop!
      if (!s.soloDeadEnds.some((d) => d.x === x && d.y === y)) {
        s.soloDeadEnds.push({ x, y });
        s.soloDeadCount += 1;
      }

      // Retry mechanism: solo dev replays same path
      if (Math.random() < 0.45 && s.soloRetryCount < 14) {
        s.soloRetries.push({ x, y });
        s.soloRetryCount += 1;
        s.soloBubble = "↻ Dead end! Trying the same prompt approach again...";
      } else if (s.soloPathStack.length > 1) {
        s.soloPathStack.pop();
        s.soloPos = s.soloPathStack[s.soloPathStack.length - 1];
        s.soloBubble = "Backtracking... burned 1,400 tokens on this branch.";
      }
    }

    setSoloStats({
      steps: s.soloSteps,
      deadEnds: s.soloDeadCount,
      retries: s.soloRetryCount,
      finished: s.soloFinished,
      bubble: s.soloBubble,
    });
  };

  // Parallax Step Logic (Model A + Model B with Ownership Transfer)
  const stepParallax = () => {
    const s = simState.current;
    if (s.paraFinished) return;

    if (s.paraPos.x === s.goal.x && s.paraPos.y === s.goal.y) {
      s.paraFinished = true;
      s.paraBubble = "🎯 Verified by Model B audit! Signed into ledger. ✅";
      setParallaxStats((prev) => ({ ...prev, finished: true, bubble: s.paraBubble }));
      return;
    }

    const { x, y } = s.paraPos;
    const neighbors: Point[] = [
      { x: x + 1, y },
      { x, y: y + 1 },
      { x: x - 1, y },
      { x, y: y - 1 },
    ].filter(
      (p) =>
        p.x >= 0 &&
        p.x < cols &&
        p.y >= 0 &&
        p.y < rows &&
        s.grid[p.y][p.x] === 0
    );

    const visitedPool = s.paraAgent === 'A' ? s.paraVisitedA : s.paraVisitedB;
    const unvisited = neighbors.filter(
      (n) => !visitedPool.some((v) => v.x === n.x && v.y === n.y)
    );

    s.paraSteps += 1;
    s.paraProgressTimer += 1;

    // Trigger OWNERSHIP TRANSFER condition:
    // If agent is stuck or after 10-12 steps without reaching a new frontier
    const triggerHandoff =
      unvisited.length === 0 ||
      (s.paraProgressTimer > 11 && s.paraHandoffCount === 0);

    if (triggerHandoff && !s.paraFinished) {
      // Handoff to other model!
      s.paraHandoffCount += 1;
      s.paraHandoffs.push({ x, y });
      s.paraProgressTimer = 0;

      if (s.paraAgent === 'A') {
        s.paraAgent = 'B';
        s.paraBubble = "A: 'I'm stuck on this assumption. B, take over.' ↔";
      } else {
        s.paraAgent = 'A';
        s.paraBubble = "B: 'Found assumption flaw! Handoff with proof.' ↔";
      }
    } else if (unvisited.length > 0) {
      // Smart path selection guided by goal heuristic (Manhattan distance)
      unvisited.sort((a, b) => {
        const distA = Math.abs(a.x - s.goal.x) + Math.abs(a.y - s.goal.y);
        const distB = Math.abs(b.x - s.goal.x) + Math.abs(b.y - s.goal.y);
        return distA - distB;
      });

      const next = unvisited[0];
      s.paraPos = next;
      if (s.paraAgent === 'A') {
        s.paraVisitedA.push(next);
      } else {
        s.paraVisitedB.push(next);
      }
      s.paraPathStack.push(next);

      if (s.paraSteps % 8 === 0) {
        s.paraBubble =
          s.paraAgent === 'A'
            ? "Model A: Independent reasoning, testing boundary conditions..."
            : "Model B: Cross-auditing Model A's path against ground truth...";
      }
    } else {
      // Dead end handled cleanly via backtrack without repeat loops
      if (!s.paraDeadEnds.some((d) => d.x === x && d.y === y)) {
        s.paraDeadEnds.push({ x, y });
        s.paraDeadCount += 1;
      }
      if (s.paraPathStack.length > 1) {
        s.paraPathStack.pop();
        s.paraPos = s.paraPathStack[s.paraPathStack.length - 1];
      }
    }

    setParallaxStats({
      steps: s.paraSteps,
      deadEnds: s.paraDeadCount,
      handoffs: s.paraHandoffCount,
      currentAgent: s.paraAgent,
      finished: s.paraFinished,
      bubble: s.paraBubble,
    });
  };

  // Canvas Renderer
  const renderCanvases = () => {
    const s = simState.current;
    const soloCanvas = soloCanvasRef.current;
    const paraCanvas = parallaxCanvasRef.current;

    if (!soloCanvas || !paraCanvas || s.grid.length === 0) return;

    const cellW = soloCanvas.width / cols;
    const cellH = soloCanvas.height / rows;

    // --- Draw Solo Canvas ---
    const ctxSolo = soloCanvas.getContext('2d');
    if (ctxSolo) {
      ctxSolo.fillStyle = '#0d0d0e';
      ctxSolo.fillRect(0, 0, soloCanvas.width, soloCanvas.height);

      // Draw Walls
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (s.grid[r][c] === 1) {
            ctxSolo.fillStyle = '#1a2a25';
            ctxSolo.fillRect(c * cellW, r * cellH, cellW, cellH);
            ctxSolo.strokeStyle = '#12201c';
            ctxSolo.strokeRect(c * cellW, r * cellH, cellW, cellH);
          } else {
            ctxSolo.strokeStyle = '#18181b';
            ctxSolo.strokeRect(c * cellW, r * cellH, cellW, cellH);
          }
        }
      }

      // Draw Solo Visited Trail
      ctxSolo.fillStyle = 'rgba(239, 68, 68, 0.25)';
      for (const p of s.soloVisited) {
        ctxSolo.beginPath();
        ctxSolo.arc(p.x * cellW + cellW / 2, p.y * cellH + cellH / 2, cellW * 0.22, 0, Math.PI * 2);
        ctxSolo.fill();
      }

      // Draw Solo Retries (Yellow ↻)
      ctxSolo.fillStyle = '#eab308';
      ctxSolo.font = 'bold 12px monospace';
      ctxSolo.textAlign = 'center';
      ctxSolo.textBaseline = 'middle';
      for (const r of s.soloRetries) {
        ctxSolo.beginPath();
        ctxSolo.arc(r.x * cellW + cellW / 2, r.y * cellH + cellH / 2, cellW * 0.35, 0, Math.PI * 2);
        ctxSolo.strokeStyle = '#eab308';
        ctxSolo.lineWidth = 1.5;
        ctxSolo.stroke();
        ctxSolo.fillText('↻', r.x * cellW + cellW / 2, r.y * cellH + cellH / 2);
      }

      // Draw Solo Dead Ends (Red ✗)
      ctxSolo.fillStyle = '#ef4444';
      for (const d of s.soloDeadEnds) {
        ctxSolo.fillText('✗', d.x * cellW + cellW / 2, d.y * cellH + cellH / 2);
      }

      // Draw Goal (🎯)
      ctxSolo.font = '16px system-ui';
      ctxSolo.fillText('🎯', s.goal.x * cellW + cellW / 2, s.goal.y * cellH + cellH / 2);

      // Draw Solo Agent Character (🧑‍💻)
      ctxSolo.beginPath();
      ctxSolo.arc(s.soloPos.x * cellW + cellW / 2, s.soloPos.y * cellH + cellH / 2, cellW * 0.45, 0, Math.PI * 2);
      ctxSolo.fillStyle = 'rgba(239, 68, 68, 0.3)';
      ctxSolo.fill();
      ctxSolo.font = '16px system-ui';
      ctxSolo.fillText(s.soloFinished ? '😰' : '🧑‍💻', s.soloPos.x * cellW + cellW / 2, s.soloPos.y * cellH + cellH / 2 + 1);
    }

    // --- Draw Parallax Canvas ---
    const ctxPara = paraCanvas.getContext('2d');
    if (ctxPara) {
      ctxPara.fillStyle = '#0d0d0e';
      ctxPara.fillRect(0, 0, paraCanvas.width, paraCanvas.height);

      // Walls
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (s.grid[r][c] === 1) {
            ctxPara.fillStyle = '#1a2a25';
            ctxPara.fillRect(c * cellW, r * cellH, cellW, cellH);
            ctxPara.strokeStyle = '#12201c';
            ctxPara.strokeRect(c * cellW, r * cellH, cellW, cellH);
          } else {
            ctxPara.strokeStyle = '#18181b';
            ctxPara.strokeRect(c * cellW, r * cellH, cellW, cellH);
          }
        }
      }

      // Draw Model A Visited Trail (Indigo)
      ctxPara.fillStyle = 'rgba(99, 102, 241, 0.4)';
      for (const p of s.paraVisitedA) {
        ctxPara.beginPath();
        ctxPara.arc(p.x * cellW + cellW / 2, p.y * cellH + cellH / 2, cellW * 0.22, 0, Math.PI * 2);
        ctxPara.fill();
      }

      // Draw Model B Visited Trail (Rust)
      ctxPara.fillStyle = 'rgba(184, 74, 28, 0.5)';
      for (const p of s.paraVisitedB) {
        ctxPara.beginPath();
        ctxPara.arc(p.x * cellW + cellW / 2, p.y * cellH + cellH / 2, cellW * 0.22, 0, Math.PI * 2);
        ctxPara.fill();
      }

      // Draw Ownership Transfer Handoff Points (Amber ↔)
      ctxPara.font = 'bold 11px system-ui';
      ctxPara.textAlign = 'center';
      ctxPara.textBaseline = 'middle';
      for (const h of s.paraHandoffs) {
        ctxPara.beginPath();
        ctxPara.arc(h.x * cellW + cellW / 2, h.y * cellH + cellH / 2, cellW * 0.38, 0, Math.PI * 2);
        ctxPara.strokeStyle = '#f59e0b';
        ctxPara.lineWidth = 2;
        ctxPara.stroke();
        ctxPara.fillStyle = '#f59e0b';
        ctxPara.fillText('↔', h.x * cellW + cellW / 2, h.y * cellH + cellH / 2);
      }

      // Draw Goal (🎯)
      ctxPara.font = '16px system-ui';
      ctxPara.fillText('🎯', s.goal.x * cellW + cellW / 2, s.goal.y * cellH + cellH / 2);

      // If finished, draw verified check badge
      if (s.paraFinished) {
        ctxPara.beginPath();
        ctxPara.arc(s.goal.x * cellW + cellW / 2, s.goal.y * cellH + cellH / 2 - 12, 7, 0, Math.PI * 2);
        ctxPara.fillStyle = '#22c55e';
        ctxPara.fill();
        ctxPara.fillStyle = '#ffffff';
        ctxPara.font = 'bold 9px system-ui';
        ctxPara.fillText('✓', s.goal.x * cellW + cellW / 2, s.goal.y * cellH + cellH / 2 - 12);
      }

      // Draw Active Agent Character
      ctxPara.beginPath();
      ctxPara.arc(s.paraPos.x * cellW + cellW / 2, s.paraPos.y * cellH + cellH / 2, cellW * 0.45, 0, Math.PI * 2);
      ctxPara.fillStyle = s.paraAgent === 'A' ? 'rgba(99, 102, 241, 0.35)' : 'rgba(184, 74, 28, 0.35)';
      ctxPara.fill();

      ctxPara.font = '16px system-ui';
      const char = s.paraAgent === 'A' ? '🧑' : '🤖';
      ctxPara.fillText(char, s.paraPos.x * cellW + cellW / 2, s.paraPos.y * cellH + cellH / 2 + 1);
    }
  };

  // Initialize maze on mount
  useEffect(() => {
    generateMaze();
  }, []);

  // Animation Loop
  useEffect(() => {
    if (!isRunning) return;

    const intervalMs = Math.max(25, 200 / speed);

    const runLoop = (timestamp: number) => {
      if (timestamp - lastTickRef.current >= intervalMs) {
        lastTickRef.current = timestamp;
        stepSolo();
        stepParallax();
        renderCanvases();

        // If both finished, pause
        if (simState.current.soloFinished && simState.current.paraFinished) {
          setIsRunning(false);
          return;
        }
      }
      animFrameRef.current = requestAnimationFrame(runLoop);
    };

    animFrameRef.current = requestAnimationFrame(runLoop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isRunning, speed]);

  return (
    <div className="w-full bg-[#141415] border border-[#2a2a2c] rounded-2xl p-4 sm:p-7 shadow-2xl relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#2a2a2c] relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-[11px] font-mono font-semibold mb-2">
            <Sparkles className="w-3 h-3" />
            ILLUSTRATION 1 · INTERACTIVE BENCHMARK
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#fafaf9]">
            {content.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#78716c] mt-1">
            {content.subtitle}
          </p>
        </div>

        {/* View Switcher: Live Simulation vs Diagram */}
        <div className="flex items-center bg-[#0d0d0e] p-1 rounded-xl border border-[#2a2a2c] self-start md:self-auto">
          <button
            onClick={() => setActiveTab('canvas')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'canvas'
                ? 'bg-[#2a2a2c] text-[#fafaf9] shadow-sm'
                : 'text-[#78716c] hover:text-[#fafaf9]'
            }`}
          >
            Live Simulation
          </button>
          <button
            onClick={() => setActiveTab('diagram')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'diagram'
                ? 'bg-[#2a2a2c] text-[#fafaf9] shadow-sm'
                : 'text-[#78716c] hover:text-[#fafaf9]'
            }`}
          >
            System SVG Diagram
          </button>
        </div>
      </div>

      {/* Story Bar: Emoji flow from the PRD */}
      <div className="mt-4 p-3 bg-[#0d0d0e] border border-[#2a2a2c]/80 rounded-xl flex flex-wrap items-center justify-between gap-2 text-xs font-mono relative z-10">
        <div className="flex items-center gap-1.5 text-[#ef4444]">
          <span className="font-bold">SOLO:</span>
          <span>{content.flowSolo}</span>
        </div>
        <div className="hidden xl:block text-[#2a2a2c]">|</div>
        <div className="flex items-center gap-1.5 text-[#22c55e]">
          <span className="font-bold">PARALLAX:</span>
          <span>{content.flowParallax}</span>
        </div>
      </div>

      {activeTab === 'canvas' ? (
        <>
          {/* Side-by-Side Dual Canvases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 relative z-10">
            {/* Left Panel: Solo Vibe Coder */}
            <div className="flex flex-col bg-[#0d0d0e] border border-[#ef4444]/30 rounded-xl p-4 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-[#2a2a2c]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444] animate-pulse" />
                  <span className="text-xs font-bold font-mono tracking-wider text-[#ef4444] uppercase">
                    {content.soloTitle}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#78716c] bg-[#141415] px-2 py-0.5 rounded border border-[#2a2a2c]">
                  Model: Solo Agent
                </span>
              </div>

              <p className="text-xs text-[#a8a29e] my-2 h-8">
                {content.soloSub}
              </p>

              {/* Speech Bubble Container */}
              <div className="min-h-[44px] bg-[#141415] border border-[#ef4444]/25 rounded-lg p-2.5 my-2 flex items-center gap-2">
                <span className="text-base">🧑‍💻</span>
                <span className="text-xs text-[#fca5a5] italic leading-tight">
                  {soloSavedStats.bubble}
                </span>
              </div>

              {/* Canvas element */}
              <div className="flex justify-center items-center my-2 bg-[#09090b] rounded-lg p-2 border border-[#2a2a2c]">
                <canvas
                  ref={soloCanvasRef}
                  width={340}
                  height={340}
                  className="w-full max-w-[340px] aspect-square rounded"
                />
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 mt-2 pt-3 border-t border-[#2a2a2c] text-center font-mono text-xs">
                <div className="bg-[#141415] p-2 rounded border border-[#2a2a2c]">
                  <span className="text-[10px] text-[#78716c] block uppercase">{content.steps}</span>
                  <span className="font-bold text-[#ef4444] text-sm">{soloSavedStats.steps}</span>
                </div>
                <div className="bg-[#141415] p-2 rounded border border-[#2a2a2c]">
                  <span className="text-[10px] text-[#78716c] block uppercase">{content.deadEnds}</span>
                  <span className="font-bold text-[#ef4444] text-sm">{soloSavedStats.deadEnds}</span>
                </div>
                <div className="bg-[#141415] p-2 rounded border border-[#2a2a2c]">
                  <span className="text-[10px] text-[#78716c] block uppercase">{content.retries}</span>
                  <span className="font-bold text-[#eab308] text-sm">{soloSavedStats.retries}</span>
                </div>
              </div>

              {/* Status Outcome */}
              <div className="mt-3 text-center text-xs text-[#78716c] italic">
                {soloSavedStats.finished ? (
                  <span className="text-[#eab308] flex items-center justify-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {content.statusStruggled}
                  </span>
                ) : (
                  content.soloQuote
                )}
              </div>
            </div>

            {/* Right Panel: With Parallax */}
            <div className="flex flex-col bg-[#0d0d0e] border border-[#22c55e]/40 rounded-xl p-4 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-[#2a2a2c]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
                  <span className="text-xs font-bold font-mono tracking-wider text-[#22c55e] uppercase">
                    {content.parallaxTitle}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono">
                  <span className="px-1.5 py-0.5 rounded bg-[#6366f1]/20 text-[#818cf8] border border-[#6366f1]/30">
                    🧑 Model A
                  </span>
                  <span className="text-[#78716c]">↔</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#b84a1c]/20 text-[#fdba74] border border-[#b84a1c]/30">
                    🤖 Model B
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#a8a29e] my-2 h-8">
                {content.parallaxSub}
              </p>

              {/* Speech Bubble Container */}
              <div className="min-h-[44px] bg-[#141415] border border-[#22c55e]/25 rounded-lg p-2.5 my-2 flex items-center gap-2">
                <span className="text-base">
                  {parallaxSavedStats.currentAgent === 'A' ? '🧑' : '🤖'}
                </span>
                <span className="text-xs text-[#86efac] italic leading-tight">
                  {parallaxSavedStats.bubble}
                </span>
              </div>

              {/* Canvas element */}
              <div className="flex justify-center items-center my-2 bg-[#09090b] rounded-lg p-2 border border-[#2a2a2c]">
                <canvas
                  ref={parallaxCanvasRef}
                  width={340}
                  height={340}
                  className="w-full max-w-[340px] aspect-square rounded"
                />
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 mt-2 pt-3 border-t border-[#2a2a2c] text-center font-mono text-xs">
                <div className="bg-[#141415] p-2 rounded border border-[#2a2a2c]">
                  <span className="text-[10px] text-[#78716c] block uppercase">{content.steps}</span>
                  <span className="font-bold text-[#22c55e] text-sm">{parallaxSavedStats.steps}</span>
                </div>
                <div className="bg-[#141415] p-2 rounded border border-[#2a2a2c]">
                  <span className="text-[10px] text-[#78716c] block uppercase">{content.deadEnds}</span>
                  <span className="font-bold text-[#22c55e] text-sm">{parallaxSavedStats.deadEnds}</span>
                </div>
                <div className="bg-[#141415] p-2 rounded border border-[#2a2a2c]">
                  <span className="text-[10px] text-[#78716c] block uppercase">{content.handoffs}</span>
                  <span className="font-bold text-[#f59e0b] text-sm">{parallaxSavedStats.handoffs}</span>
                </div>
              </div>

              {/* Status Outcome */}
              <div className="mt-3 text-center text-xs text-[#78716c] italic">
                {parallaxSavedStats.finished ? (
                  <span className="text-[#22c55e] font-semibold flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {content.statusVerified}
                  </span>
                ) : (
                  content.parallaxQuote
                )}
              </div>
            </div>
          </div>

          {/* Interactive Simulation Controls */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 bg-[#0d0d0e] border border-[#2a2a2c] rounded-xl relative z-10">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-md ${
                  isRunning
                    ? 'bg-[#ef4444] text-[#fafaf9] hover:bg-[#dc2626]'
                    : 'bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-[#0a0a0b] hover:brightness-110'
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    {content.pauseBtn}
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    {content.startBtn}
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setIsRunning(false);
                  generateMaze();
                }}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#141415] hover:bg-[#2a2a2c] border border-[#2a2a2c] text-xs font-semibold text-[#fafaf9] transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#78716c]" />
                {content.resetBtn}
              </button>

              <button
                onClick={() => {
                  setIsRunning(false);
                  generateMaze();
                }}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#141415] hover:bg-[#2a2a2c] border border-[#2a2a2c] text-xs font-medium text-[#a8a29e] transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
                {content.regenerateBtn}
              </button>
            </div>

            {/* Speed Toggle */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#78716c]">
              <span>{content.speed}:</span>
              {[1, 2, 4, 8].map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  className={`px-2 py-1 rounded transition-all font-semibold ${
                    speed === s
                      ? 'bg-[#f59e0b] text-[#0a0a0b]'
                      : 'bg-[#141415] text-[#a8a29e] hover:text-[#fafaf9] border border-[#2a2a2c]'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Static SVG Architectural Comparison (Illustration 1 from Design Doc) */
        <div className="mt-6 bg-[#0d0d0e] border border-[#2a2a2c] rounded-xl p-4 sm:p-6 overflow-x-auto">
          <div className="min-w-[700px]">
            <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" fontFamily="system-ui, sans-serif">
              <rect width="900" height="420" fill="#0d0d0e" rx="8" />
              <line x1="450" y1="40" x2="450" y2="380" stroke="#2a2a2c" strokeWidth="1" strokeDasharray="4,4" />

              {/* LEFT: Solo Vibe Coding */}
              <text x="225" y="35" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="700" letterSpacing="0.1em">
                SOLO VIBE CODING
              </text>

              <g transform="translate(70, 55)">
                <rect x="0" y="0" width="310" height="280" fill="none" stroke="#1a2a25" strokeWidth="2" rx="4" />
                <line x1="50" y1="0" x2="50" y2="180" stroke="#1a2a25" strokeWidth="3" />
                <line x1="100" y1="100" x2="100" y2="280" stroke="#1a2a25" strokeWidth="3" />
                <line x1="150" y1="0" x2="150" y2="140" stroke="#1a2a25" strokeWidth="3" />
                <line x1="200" y1="60" x2="200" y2="220" stroke="#1a2a25" strokeWidth="3" />
                <line x1="250" y1="120" x2="250" y2="280" stroke="#1a2a25" strokeWidth="3" />
                <line x1="50" y1="180" x2="150" y2="180" stroke="#1a2a25" strokeWidth="3" />
                <line x1="150" y1="140" x2="250" y2="140" stroke="#1a2a25" strokeWidth="3" />

                {/* Confused erratic path */}
                <path
                  d="M20,260 L20,200 L70,200 L70,260 L70,200 L20,200 L20,140 L70,140 L70,200 L20,200 L20,80 L70,80 L70,140 L20,140 L20,200 L70,200 L120,200 L120,140 L170,140 L170,80 L220,80 L220,200 L170,200 L170,140 L120,140 L120,200 L170,200 L220,200 L220,260 L270,260 L270,200 L220,200"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="1.8"
                  opacity="0.6"
                  strokeLinecap="round"
                />

                {/* Dead ends */}
                <g fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="38" y1="8" x2="62" y2="32" /><line x1="62" y1="8" x2="38" y2="32" />
                  <line x1="138" y1="68" x2="162" y2="92" /><line x1="162" y1="68" x2="138" y2="92" />
                  <line x1="238" y1="128" x2="262" y2="152" /><line x1="262" y1="128" x2="238" y2="152" />
                </g>

                {/* Retry symbols */}
                <circle cx="70" cy="200" r="10" fill="none" stroke="#eab308" strokeWidth="2" />
                <text x="70" y="204" textAnchor="middle" fill="#eab308" fontSize="10" fontWeight="700">↻</text>
                <circle cx="20" cy="140" r="10" fill="none" stroke="#eab308" strokeWidth="2" />
                <text x="20" y="144" textAnchor="middle" fill="#eab308" fontSize="10" fontWeight="700">↻</text>

                <circle cx="220" cy="260" r="14" fill="#6366f1" opacity="0.3" />
                <text x="220" y="266" textAnchor="middle" fontSize="16">🧑‍💻</text>
                <circle cx="290" cy="20" r="12" fill="#22c55e" opacity="0.2" />
                <text x="290" y="26" textAnchor="middle" fontSize="14">🎯</text>
              </g>

              {/* Stats (left) */}
              <g transform="translate(70, 350)">
                <text x="0" y="0" fill="#ef4444" fontSize="11" fontWeight="600">Steps: 147</text>
                <text x="110" y="0" fill="#ef4444" fontSize="11" fontWeight="600">Dead ends: 7</text>
                <text x="240" y="0" fill="#eab308" fontSize="11" fontWeight="600">Retries: 12</text>
              </g>
              <text x="225" y="390" textAnchor="middle" fill="#78716c" fontSize="11" fontStyle="italic">
                "Tests pass! But something feels wrong..."
              </text>

              {/* RIGHT: With Parallax */}
              <text x="675" y="35" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="700" letterSpacing="0.1em">
                WITH PARALLAX
              </text>

              <g transform="translate(520, 55)">
                <rect x="0" y="0" width="310" height="280" fill="none" stroke="#1a2a25" strokeWidth="2" rx="4" />
                <line x1="50" y1="0" x2="50" y2="180" stroke="#1a2a25" strokeWidth="3" />
                <line x1="100" y1="100" x2="100" y2="280" stroke="#1a2a25" strokeWidth="3" />
                <line x1="150" y1="0" x2="150" y2="140" stroke="#1a2a25" strokeWidth="3" />
                <line x1="200" y1="60" x2="200" y2="220" stroke="#1a2a25" strokeWidth="3" />
                <line x1="250" y1="120" x2="250" y2="280" stroke="#1a2a25" strokeWidth="3" />
                <line x1="50" y1="180" x2="150" y2="180" stroke="#1a2a25" strokeWidth="3" />
                <line x1="150" y1="140" x2="250" y2="140" stroke="#1a2a25" strokeWidth="3" />

                {/* Model A clean path */}
                <path
                  d="M20,260 L20,200 L20,140 L20,80 L70,80 L120,80 L120,140 L170,140 L170,200 L220,200 L220,260 L270,260"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="2.5"
                  opacity="0.75"
                  strokeLinecap="round"
                />

                {/* Handoff point */}
                <circle cx="120" cy="140" r="14" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,3" />
                <text x="120" y="144" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">↔</text>

                {/* Model B takes over path */}
                <path
                  d="M120,140 L120,80 L170,80 L220,80 L270,80 L270,20 L290,20"
                  fill="none"
                  stroke="#b84a1c"
                  strokeWidth="2.5"
                  opacity="0.8"
                  strokeLinecap="round"
                />

                {/* Agent A */}
                <circle cx="120" cy="140" r="14" fill="#6366f1" opacity="0.3" />
                <text x="120" y="115" textAnchor="middle" fill="#6366f1" fontSize="9" fontWeight="600">Model A</text>
                <text x="120" y="146" textAnchor="middle" fontSize="16">🧑</text>

                {/* Agent B */}
                <circle cx="270" cy="20" r="14" fill="#b84a1c" opacity="0.3" />
                <text x="270" y="50" textAnchor="middle" fill="#b84a1c" fontSize="9" fontWeight="600">Model B</text>
                <text x="270" y="26" textAnchor="middle" fontSize="16">🤖</text>

                {/* Goal reached */}
                <circle cx="290" cy="20" r="16" fill="#22c55e" opacity="0.2" />
                <text x="290" y="26" textAnchor="middle" fontSize="14">🎯</text>
                <g transform="translate(290, -10)">
                  <circle cx="0" cy="0" r="8" fill="#22c55e" />
                  <path d="M-3,0 L-1,3 L4,-2" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              </g>

              {/* Stats (right) */}
              <g transform="translate(520, 350)">
                <text x="0" y="0" fill="#22c55e" fontSize="11" fontWeight="600">Steps: 48</text>
                <text x="100" y="0" fill="#22c55e" fontSize="11" fontWeight="600">Dead ends: 1</text>
                <text x="220" y="0" fill="#f59e0b" fontSize="11" fontWeight="600">Handoff: 1</text>
              </g>
              <text x="675" y="390" textAnchor="middle" fill="#78716c" fontSize="11" fontStyle="italic">
                "I'm stuck. B, take over." → Verified. ✅
              </text>

              {/* Bottom tagline */}
              <text x="450" y="415" textAnchor="middle" fill="#fafaf9" fontSize="12" fontWeight="600">
                {content.bottomTagline}
              </text>
            </svg>
          </div>
        </div>
      )}

      {/* Bottom Tagline Banner */}
      <div className="mt-6 pt-4 border-t border-[#2a2a2c] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#a8a29e] relative z-10">
        <span className="font-medium text-[#fafaf9]">
          ⚡ {content.bottomTagline}
        </span>
        <span className="text-[#f59e0b] font-semibold">
          Ownership Transfer: 12 rounds → 2 rounds
        </span>
      </div>
    </div>
  );
};
