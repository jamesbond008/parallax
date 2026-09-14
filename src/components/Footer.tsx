import React from 'react';
import { Language } from '../types';
import { contentData } from '../data/content';
import { Terminal, Github, Twitter, ShieldCheck } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenDownload }) => {
  const content = contentData[lang].footer;

  return (
    <footer className="w-full bg-[#0a0a0b] border-t border-[#2a2a2c] py-14">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#f59e0b] via-[#b84a1c] to-[#6366f1] p-[1.5px]">
                <div className="w-full h-full bg-[#0d0d0e] rounded-[7px] flex items-center justify-center font-bold text-xs text-[#fafaf9]">
                  //
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-[#fafaf9]">
                Parallax
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#78716c] max-w-md leading-relaxed">
              {content.desc}
            </p>
            <div className="pt-2 flex items-center gap-3 text-[#78716c]">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#fafaf9] transition-colors p-2 rounded-lg bg-[#141415] border border-[#2a2a2c]"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#fafaf9] transition-colors p-2 rounded-lg bg-[#141415] border border-[#2a2a2c]"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-[#22c55e] flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#141415] border border-[#2a2a2c]">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                Local Orchestrator: All Systems Operational
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <span className="text-xs font-mono font-bold text-[#fafaf9] uppercase tracking-wider block mb-4">
              Architecture
            </span>
            <ul className="space-y-2.5 text-xs text-[#78716c]">
              <li><a href="#demo" className="hover:text-[#fafaf9] transition-colors">Same Maze, Two Approaches</a></li>
              <li><a href="#proof" className="hover:text-[#fafaf9] transition-colors">Cross-Vendor Audit Proof</a></li>
              <li><a href="#process" className="hover:text-[#fafaf9] transition-colors">Six Stages Coordination</a></li>
              <li><a href="#vision" className="hover:text-[#fafaf9] transition-colors">RSI Evolution Endgame</a></li>
              <li><a href="#pricing" className="hover:text-[#fafaf9] transition-colors">Pricing & License</a></li>
            </ul>
          </div>

          {/* Col 3: Resources & Trust */}
          <div>
            <span className="text-xs font-mono font-bold text-[#fafaf9] uppercase tracking-wider block mb-4">
              Security & Downloads
            </span>
            <ul className="space-y-2.5 text-xs text-[#78716c]">
              <li>
                <button onClick={onOpenDownload} className="hover:text-[#f59e0b] transition-colors text-left">
                  macOS Universal DMG (v1.4)
                </button>
              </li>
              <li>
                <button onClick={onOpenDownload} className="hover:text-[#fafaf9] transition-colors text-left">
                  Homebrew Tap Package
                </button>
              </li>
              <li><span className="text-[#a8a29e]">{content.privacy}</span></li>
              <li><span className="text-[#a8a29e]">{content.terms}</span></li>
              <li><span className="text-[#a8a29e]">{content.documentation}</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#2a2a2c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#78716c]">
          <span>{content.allRightsReserved}</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
            {content.macOS} · {content.license}
          </span>
        </div>
      </div>
    </footer>
  );
};
