import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProofSection } from './components/ProofSection';
import { SixStages } from './components/SixStages';
import { VisionRSI } from './components/VisionRSI';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#fafaf9] flex flex-col font-sans selection:bg-[#f59e0b]/20 selection:text-[#f59e0b]">
      {/* Sticky Navigation Bar with Language Switcher */}
      <Navbar
        currentLang={lang}
        onLanguageChange={setLang}
        onOpenDownload={() => setIsDownloadModalOpen(true)}
        onOpenDemo={() => setIsVideoModalOpen(true)}
      />

      <main className="flex-1 w-full">
        {/* HERO Section with Illustration 1 (Same Problem. Two Approaches. Maze Demo) */}
        <Hero
          lang={lang}
          onOpenDownload={() => setIsDownloadModalOpen(true)}
          onOpenDemo={() => setIsVideoModalOpen(true)}
        />

        {/* TRUST BAR (Claude, DeepSeek, OpenAI, Gemini, MiniMax) */}
        <TrustBar lang={lang} />

        {/* PROOF SECTION (Huihong quote, 16 exchanges 5 bugs, dogfooding, diff inspector) */}
        <ProofSection lang={lang} />

        {/* SIX STAGES WORKFLOW (Illustration 2: Understand to Deliver, Convergence & Ownership Transfer) */}
        <SixStages lang={lang} />

        {/* VISION SECTION (Illustration 3: Today -> Tomorrow -> Endgame & RSI Interactive Sandbox) */}
        <VisionRSI lang={lang} />

        {/* HOW IT WORKS (4 simple steps) */}
        <HowItWorks
          lang={lang}
          onOpenDownload={() => setIsDownloadModalOpen(true)}
        />

        {/* PRICING ($19/mo | $199/yr, 3-day trial) */}
        <Pricing
          lang={lang}
          onOpenDownload={() => setIsDownloadModalOpen(true)}
        />

        {/* FAQ (Accordion) */}
        <FAQ lang={lang} />
      </main>

      {/* FOOTER */}
      <Footer
        lang={lang}
        onOpenDownload={() => setIsDownloadModalOpen(true)}
      />

      {/* Download Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        lang={lang}
      />

      {/* 30s Walkthrough Video / Demo Simulation Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
