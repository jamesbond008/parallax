import React from 'react';
import { Language } from '../types';
import { contentData } from '../data/content';
import { Download, Globe, PlayCircle } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenDownload: () => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenDownload,
  onOpenDemo,
}) => {
  const content = contentData[currentLang];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0a0a0b]/85 border-b border-[#2a2a2c]/80 transition-all">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f59e0b] via-[#b84a1c] to-[#6366f1] p-[1.5px] shadow-sm shadow-[#f59e0b]/20">
            <div className="w-full h-full bg-[#0d0d0e] rounded-[7px] flex items-center justify-center font-bold text-sm tracking-tighter text-[#fafaf9] group-hover:text-[#f59e0b] transition-colors">
              //
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-[#fafaf9] flex items-center gap-1.5">
              Parallax
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/25 font-semibold">
                v1.4
              </span>
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#a8a29e]">
          <a href="#demo" className="hover:text-[#fafaf9] transition-colors flex items-center gap-1">
            {content.nav.demo}
          </a>
          <a href="#proof" className="hover:text-[#fafaf9] transition-colors">
            {content.nav.proof}
          </a>
          <a href="#process" className="hover:text-[#fafaf9] transition-colors">
            {content.nav.process}
          </a>
          <a href="#vision" className="hover:text-[#fafaf9] transition-colors flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse"></span>
            {content.nav.vision}
          </a>
          <a href="#how-it-works" className="hover:text-[#fafaf9] transition-colors">
            {content.nav.howItWorks}
          </a>
          <a href="#pricing" className="hover:text-[#fafaf9] transition-colors">
            {content.nav.pricing}
          </a>
          <a href="#faq" className="hover:text-[#fafaf9] transition-colors">
            {content.nav.faq}
          </a>
        </nav>

        {/* Actions & Language Selector */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center rounded-lg bg-[#141415] border border-[#2a2a2c] p-0.5 text-xs font-mono text-[#a8a29e]">
            <Globe className="w-3.5 h-3.5 ml-2 mr-1 text-[#78716c] hidden sm:block" />
            {(['zh', 'en', 'ja'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`px-2 py-1 rounded transition-all font-medium ${
                  currentLang === lang
                    ? 'bg-[#2a2a2c] text-[#fafaf9] shadow-xs'
                    : 'hover:text-[#fafaf9]'
                }`}
              >
                {lang === 'zh' ? '中' : lang === 'en' ? 'EN' : '日'}
              </button>
            ))}
          </div>

          {/* Watch 30s Demo */}
          <button
            onClick={onOpenDemo}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#2a2a2c] hover:border-[#f59e0b]/50 bg-[#141415] text-xs font-medium text-[#fafaf9] hover:text-[#f59e0b] transition-all"
          >
            <PlayCircle className="w-3.5 h-3.5 text-[#f59e0b]" />
            Demo
          </button>

          {/* Download for Mac CTA */}
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#fbbf24] hover:to-[#f59e0b] text-[#0a0a0b] text-xs font-bold shadow-md shadow-[#f59e0b]/20 hover:shadow-[#f59e0b]/30 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{content.nav.downloadMac}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
