import React from 'react';
import { Language } from '../types';
import { contentData } from '../data/content';
import { Shield, KeyRound, Cpu, HardDrive } from 'lucide-react';

interface TrustBarProps {
  lang: Language;
}

export const TrustBar: React.FC<TrustBarProps> = ({ lang }) => {
  const content = contentData[lang].trust;

  const models = [
    {
      name: "Claude 3.7",
      provider: "Anthropic",
      highlight: "Extended Thinking & Code",
      color: "from-[#d97706]/20 to-[#b45309]/10",
      border: "border-[#f59e0b]/30",
      textColor: "text-[#f59e0b]",
    },
    {
      name: "DeepSeek R1 / V3",
      provider: "DeepSeek",
      highlight: "Adversarial Reasoning",
      color: "from-[#0ea5e9]/20 to-[#0284c7]/10",
      border: "border-[#0ea5e9]/30",
      textColor: "text-[#38bdf8]",
    },
    {
      name: "OpenAI o3 / GPT-4.5",
      provider: "OpenAI",
      highlight: "Rigid Architectural Logic",
      color: "from-[#22c55e]/20 to-[#16a34a]/10",
      border: "border-[#22c55e]/30",
      textColor: "text-[#4ade80]",
    },
    {
      name: "Gemini 2.0 Flash / Pro",
      provider: "Google",
      highlight: "Deep Context & Multimodal",
      color: "from-[#6366f1]/20 to-[#4f46e5]/10",
      border: "border-[#6366f1]/30",
      textColor: "text-[#818cf8]",
    },
    {
      name: "MiniMax & Ollama",
      provider: "Open Weights / BYOK",
      highlight: "Local & Specialized LLMs",
      color: "from-[#ec4899]/20 to-[#db2777]/10",
      border: "border-[#ec4899]/30",
      textColor: "text-[#f472b6]",
    }
  ];

  return (
    <section className="w-full bg-[#0d0d0e] border-y border-[#2a2a2c]/80 py-10 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-7">
          <p className="text-xs font-mono font-bold tracking-widest text-[#a8a29e] uppercase">
            {content.label}
          </p>
          <p className="text-xs text-[#78716c] mt-1">
            {content.sublabel}
          </p>
        </div>

        {/* Frontier Models Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {models.map((m) => (
            <div
              key={m.name}
              className={`p-3.5 rounded-xl bg-gradient-to-b ${m.color} bg-[#141415] border ${m.border} flex flex-col justify-between transition-all hover:scale-[1.02]`}
            >
              <div>
                <span className="text-[10px] font-mono text-[#78716c] uppercase block">
                  {m.provider}
                </span>
                <span className={`text-sm font-bold tracking-tight ${m.textColor} block mt-0.5`}>
                  {m.name}
                </span>
              </div>
              <span className="text-[11px] text-[#a8a29e] font-mono mt-3 block leading-tight">
                {m.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Security & Privacy Pillars */}
        <div className="mt-8 pt-6 border-t border-[#2a2a2c]/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs text-[#a8a29e] font-mono">
            <KeyRound className="w-4 h-4 text-[#f59e0b] shrink-0" />
            <span>BYO API Keys directly on device</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs text-[#a8a29e] font-mono">
            <HardDrive className="w-4 h-4 text-[#22c55e] shrink-0" />
            <span>100% Local Git & Diff execution</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs text-[#a8a29e] font-mono">
            <Shield className="w-4 h-4 text-[#6366f1] shrink-0" />
            <span>Zero cloud code storage or telemetry</span>
          </div>
        </div>
      </div>
    </section>
  );
};
