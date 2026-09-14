import React, { useState, useEffect } from 'react';
import { X, Play, RotateCcw, CheckCircle2, ShieldAlert, ArrowRightLeft, Terminal, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, lang }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      time: "00:04",
      title: "1. Goal Dispatch & Blind Ideation",
      badge: "UNDERSTAND",
      agent: "Model A (Claude 3.7)",
      desc: "User prompts: 'Build high-concurrency LRU cache with async write-back.' Model A drafts initial mutex and assumptions blindly.",
      code: "const cache = new Map();\nexport async function get(k) { ... }",
      status: "Model A proposing...",
      color: "text-[#818cf8]"
    },
    {
      time: "00:11",
      title: "2. Adversarial Challenge",
      badge: "VERIFY",
      agent: "Model B (DeepSeek R1)",
      desc: "Model B executes blind fuzz audit: 'Challenge rejected: In-flight requests for same key produce duplicated database queries.'",
      code: "[AUDIT FAILED] 4 concurrent calls fired 4 queries instead of 1.",
      status: "Defect Exposed!",
      color: "text-[#ef4444]"
    },
    {
      time: "00:19",
      title: "3. Ownership Transfer (⚡)",
      badge: "TRANSFER",
      agent: "Parallax Coordination Layer",
      desc: "Model A retries once but gets stuck in assumption. Parallax auto-strips ownership and transfers task to Model B with fresh context.",
      code: "⚡ Ownership transferred from Model A -> Model B.",
      status: "Loop Interrupted (12 rounds -> 2)",
      color: "text-[#f59e0b]"
    },
    {
      time: "00:26",
      title: "4. Single-Flight Mutex Patched",
      badge: "CONVERGE",
      agent: "Model B (DeepSeek R1)",
      desc: "Model B introduces promise-deduping map. Zero lock contention, 100/100 concurrency tests pass instantly.",
      code: "+ const inFlight = new Map();\n+ if (!inFlight.has(k)) inFlight.set(k, fn().finally(...));",
      status: "100% Passed",
      color: "text-[#22c55e]"
    },
    {
      time: "00:30",
      title: "5. Append-Only Ledger Signed",
      badge: "DELIVER",
      agent: "Parallax Cryptographic Ledger",
      desc: "Both models sign commit. Cryptographic hash sealed in local Git log. Release artifact ready with zero hallucination.",
      code: "Hash: 0x9f4e2... · [COMMITTED] · Ledger entry sealed.",
      status: "Verified ✅",
      color: "text-[#22c55e]"
    }
  ];

  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
      setActiveStep(0);
      return;
    }
    setIsPlaying(true);
  }, [isOpen]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying]);

  if (!isOpen) return null;

  const current = steps[activeStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#141415] border border-[#2a2a2c] w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-[#fafaf9]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#0d0d0e] border border-[#2a2a2c] text-[#78716c] hover:text-[#fafaf9] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#6366f1] p-[1.5px]">
            <div className="w-full h-full bg-[#0d0d0e] rounded-[10px] flex items-center justify-center font-bold text-sm text-[#fafaf9]">
              ▶
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-[#fafaf9]">
              Parallax in 30 Seconds
            </h3>
            <span className="text-xs font-mono text-[#f59e0b]">
              Interactive Product Walkthrough Simulation
            </span>
          </div>
        </div>

        {/* Timeline Progress Track */}
        <div className="grid grid-cols-5 gap-1.5 mb-6">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveStep(idx);
                setIsPlaying(false);
              }}
              className={`p-2 rounded-lg text-left border transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-[#2a2a2c] border-[#f59e0b] text-[#fafaf9]'
                  : 'bg-[#0d0d0e] border-[#2a2a2c] text-[#78716c] hover:text-[#fafaf9]'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span>{s.time}</span>
                {activeStep === idx && <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />}
              </div>
              <span className="text-[11px] font-bold truncate block mt-0.5">
                {s.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Simulation Console */}
        <div className="bg-[#09090b] border border-[#2a2a2c] rounded-2xl p-5 sm:p-6 mb-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#2a2a2c]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] animate-pulse" />
              <span className={`text-xs font-mono font-bold ${current.color}`}>
                {current.agent}
              </span>
            </div>
            <span className="text-xs font-mono bg-[#141415] text-[#fafaf9] px-2 py-0.5 rounded border border-[#2a2a2c]">
              {current.status}
            </span>
          </div>

          <h4 className="text-base font-bold text-[#fafaf9] mt-3">
            {current.title}
          </h4>
          <p className="text-xs sm:text-sm text-[#a8a29e] mt-1 leading-relaxed">
            {current.desc}
          </p>

          <div className="mt-4 p-3.5 rounded-xl bg-[#141415] border border-[#2a2a2c] font-mono text-xs text-[#38bdf8] whitespace-pre-wrap">
            {current.code}
          </div>
        </div>

        {/* Video Player Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 rounded-xl bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0a0a0b] text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              {isPlaying ? 'Pause Walkthrough' : 'Play Walkthrough'}
            </button>
            <button
              onClick={() => {
                setActiveStep(0);
                setIsPlaying(true);
              }}
              className="p-2 rounded-xl bg-[#0d0d0e] hover:bg-[#1a1a1c] border border-[#2a2a2c] text-[#78716c] hover:text-[#fafaf9] transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <span className="text-xs font-mono text-[#78716c]">
            Step {activeStep + 1} of {steps.length}
          </span>
        </div>
      </div>
    </div>
  );
};
