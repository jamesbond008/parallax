import React, { useRef, useEffect } from 'react';
import { MazeGrid, Point, SolverStep } from '../types';

interface MazeCanvasProps {
  grid: MazeGrid;
  start: Point;
  goal: Point;
  currentStep: SolverStep | null;
  round: number;
  isGoalReached: boolean;
  className?: string;
}

export const MazeCanvas: React.FC<MazeCanvasProps> = ({
  grid,
  start,
  goal,
  currentStep,
  round,
  isGoalReached,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const ripplePhaseRef = useRef<number>(0);
  const scanSweepRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);

  // Ghost trail buffer (stores last 8 positions with timestamp)
  const ghostTrailRef = useRef<{ x: number; y: number; time: number }[]>([]);

  // Update ghost trail when current position changes
  useEffect(() => {
    if (currentStep?.current) {
      const now = performance.now();
      const trail = ghostTrailRef.current;
      trail.push({ x: currentStep.current.x, y: currentStep.current.y, time: now });
      // Keep at most 10 recent points
      if (trail.length > 10) {
        trail.shift();
      }
    }
  }, [currentStep?.current?.x, currentStep?.current?.y]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let isMounted = true;

    const render = () => {
      if (!isMounted) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = container.getBoundingClientRect();
      const width = Math.floor(rect.width);
      // Keep canvas approximately square or height matched
      const height = Math.min(width, 460);

      const dpr = window.devicePixelRatio || 1;
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // Background clear
      ctx.fillStyle = '#09090b';
      ctx.fillRect(0, 0, width, height);

      const rows = grid.length;
      const cols = grid[0].length;

      // Padding and cell size calculation
      const padding = 16;
      const availableW = width - padding * 2;
      const availableH = height - padding * 2;
      const cellSize = Math.floor(Math.min(availableW / cols, availableH / rows));

      const offsetX = Math.floor((width - cols * cellSize) / 2);
      const offsetY = Math.floor((height - rows * cellSize) / 2);

      // 1. Draw Grid Cells
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offsetX + c * cellSize;
          const y = offsetY + r * cellSize;
          const isWall = grid[r][c] === 1;

          if (isWall) {
            // Wall styling: metallic dark slate with subtle beveled borders
            ctx.fillStyle = '#141417';
            ctx.fillRect(x, y, cellSize, cellSize);

            ctx.strokeStyle = '#222227';
            ctx.lineWidth = 1;
            ctx.strokeRect(x + 0.5, y + 0.5, cellSize - 1, cellSize - 1);
          } else {
            // Passable floor
            ctx.fillStyle = '#0c0c0e';
            ctx.fillRect(x, y, cellSize, cellSize);

            // Subtle floor grid dot
            ctx.fillStyle = '#1e1e24';
            ctx.beginPath();
            ctx.arc(x + cellSize / 2, y + cellSize / 2, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 2. Draw Visited Footprints
      if (currentStep?.visited) {
        ctx.fillStyle = round === 5 ? 'rgba(34, 197, 94, 0.08)' : 'rgba(99, 102, 241, 0.12)';
        for (const pt of currentStep.visited) {
          const x = offsetX + pt.x * cellSize;
          const y = offsetY + pt.y * cellSize;
          ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
        }
      }

      // 3. Draw Dead Ends (✕ markers)
      if (currentStep?.deadEnds) {
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1.5;
        const markPad = Math.max(3, cellSize * 0.28);

        for (const de of currentStep.deadEnds) {
          const cx = offsetX + de.x * cellSize;
          const cy = offsetY + de.y * cellSize;

          ctx.beginPath();
          ctx.moveTo(cx + markPad, cy + markPad);
          ctx.lineTo(cx + cellSize - markPad, cy + cellSize - markPad);
          ctx.moveTo(cx + cellSize - markPad, cy + markPad);
          ctx.lineTo(cx + markPad, cy + cellSize - markPad);
          ctx.stroke();
        }
      }

      // 4. Draw Current Path Line (Trail)
      if (currentStep?.path && currentStep.path.length > 1) {
        ctx.beginPath();
        for (let i = 0; i < currentStep.path.length; i++) {
          const pt = currentStep.path[i];
          const px = offsetX + pt.x * cellSize + cellSize / 2;
          const py = offsetY + pt.y * cellSize + cellSize / 2;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }

        // Color coding by round maturity
        let strokeColor = '#f59e0b';
        if (round === 1) strokeColor = '#818cf8';
        else if (round === 2) strokeColor = '#38bdf8';
        else if (round === 3) strokeColor = '#f59e0b';
        else if (round === 4) strokeColor = '#a855f7';
        else if (round === 5) strokeColor = '#22c55e';

        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = Math.max(2, cellSize * 0.22);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = strokeColor;
        ctx.shadowBlur = 6;
        ctx.stroke();
        ctx.shadowBlur = 0; // reset
      }

      // 5. Draw Start Node (Amber Halo)
      const startX = offsetX + start.x * cellSize + cellSize / 2;
      const startY = offsetY + start.y * cellSize + cellSize / 2;
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(startX, startY, cellSize * 0.3, 0, Math.PI * 2);
      ctx.fill();

      // 6. Draw Goal Node (Emerald Radiating Portal with Ripple)
      const goalX = offsetX + goal.x * cellSize + cellSize / 2;
      const goalY = offsetY + goal.y * cellSize + cellSize / 2;

      // Ripple around goal
      ripplePhaseRef.current += 0.04;
      const rippleRadius = (cellSize * 0.3) + ((Math.sin(ripplePhaseRef.current) + 1) / 2) * (cellSize * 0.35);
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(goalX, goalY, rippleRadius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#22c55e';
      ctx.shadowColor = '#22c55e';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(goalX, goalY, cellSize * 0.32, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Goal Icon 'G' or Diamond
      ctx.fillStyle = '#052e16';
      ctx.font = `bold ${Math.max(9, Math.floor(cellSize * 0.45))}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('★', goalX, goalY);

      // 7. Topological Radar Scan Line for Round 5 or active scan
      if (round === 5 || (currentStep?.scanProgress && currentStep.scanProgress < 1.0)) {
        scanSweepRef.current = (scanSweepRef.current + 2) % height;
        const scanY = scanSweepRef.current;

        const scanGrad = ctx.createLinearGradient(0, scanY - 20, 0, scanY);
        scanGrad.addColorStop(0, 'rgba(34, 197, 94, 0)');
        scanGrad.addColorStop(1, 'rgba(34, 197, 94, 0.25)');
        ctx.fillStyle = scanGrad;
        ctx.fillRect(offsetX, Math.max(offsetY, scanY - 20), cols * cellSize, 20);

        ctx.strokeStyle = 'rgba(74, 222, 128, 0.8)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(offsetX, scanY);
        ctx.lineTo(offsetX + cols * cellSize, scanY);
        ctx.stroke();
      }

      // 8. Draw Ghost Trails (残影效果)
      const now = performance.now();
      const trail = ghostTrailRef.current;
      for (let i = 0; i < trail.length - 1; i++) {
        const p = trail[i];
        const age = (now - p.time) / 1000;
        const alpha = Math.max(0, 0.6 - age * 0.8);
        if (alpha > 0.05) {
          const gx = offsetX + p.x * cellSize + cellSize / 2;
          const gy = offsetY + p.y * cellSize + cellSize / 2;
          ctx.fillStyle = round === 5
            ? `rgba(34, 197, 94, ${alpha * 0.5})`
            : `rgba(245, 158, 11, ${alpha * 0.5})`;
          ctx.beginPath();
          ctx.arc(gx, gy, cellSize * 0.2 * (1 - age * 0.3), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 9. Draw Current Agent
      if (currentStep?.current) {
        const agentX = offsetX + currentStep.current.x * cellSize + cellSize / 2;
        const agentY = offsetY + currentStep.current.y * cellSize + cellSize / 2;

        // Glowing outer circle
        const agentColor = round === 5 ? '#4ade80' : '#f59e0b';
        ctx.fillStyle = agentColor;
        ctx.shadowColor = agentColor;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(agentX, agentY, cellSize * 0.34, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Core white dot
        ctx.fillStyle = '#fafaf9';
        ctx.beginPath();
        ctx.arc(agentX, agentY, cellSize * 0.14, 0, Math.PI * 2);
        ctx.fill();
      }

      // 10. Victory Ripple Effect if reached
      if (isGoalReached) {
        const pulse = (Math.sin(ripplePhaseRef.current * 1.5) + 1) / 2;
        ctx.strokeStyle = `rgba(34, 197, 94, ${0.3 + pulse * 0.4})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(goalX, goalY, cellSize * 0.8 + pulse * (cellSize * 0.8), 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      isMounted = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [grid, start, goal, currentStep, round, isGoalReached]);

  return (
    <div
      ref={containerRef}
      className={`w-full flex items-center justify-center bg-[#09090b] rounded-2xl border border-[#2a2a2c] overflow-hidden p-2 sm:p-4 relative shadow-inner ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-auto max-h-[440px] block"
      />

      {/* Overlaid Corner Badges */}
      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#141415]/85 backdrop-blur-sm border border-[#2a2a2c] text-[10px] font-mono text-[#a8a29e]">
        <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
        <span>R{round} GRID: {grid.length}×{grid[0].length}</span>
      </div>

      {isGoalReached && (
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#22c55e]/15 backdrop-blur-sm border border-[#22c55e]/40 text-xs font-mono font-bold text-[#4ade80]">
          <span>GOAL CONVERGED ✅</span>
        </div>
      )}
    </div>
  );
};
