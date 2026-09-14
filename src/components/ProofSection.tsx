import React, { useState } from 'react';
import { Language } from '../types';
import { contentData } from '../data/content';
import { CheckCircle2, XCircle, ShieldAlert, Sparkles, Terminal, Code2, GitCompare } from 'lucide-react';

interface ProofSectionProps {
  lang: Language;
}

export const ProofSection: React.FC<ProofSectionProps> = ({ lang }) => {
  const content = contentData[lang].proof;
  const [activeDiffTab, setActiveDiffTab] = useState<'solo' | 'parallax'>('parallax');

  return (
    <section id="proof" className="w-full py-20 bg-[#0a0a0b] relative scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-mono font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            EMPIRICAL EVIDENCE · SOCIAL PROOF
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#fafaf9]">
            The Engineering Reality: Evidence Over Vibes
          </h2>
          <p className="text-sm sm:text-base text-[#78716c] mt-2">
            Why the world's most disciplined engineers refuse to let solitary AI models commit code unchecked.
          </p>
        </div>

        {/* Founder Huihong Quote Card */}
        <div className="relative bg-gradient-to-r from-[#141415] via-[#1a1a1c] to-[#141415] border-2 border-[#f59e0b]/40 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden mb-12">
          {/* Subtle quote watermark */}
          <div className="absolute right-4 bottom-2 text-8xl font-serif text-[#f59e0b]/5 select-none pointer-events-none">
            “
          </div>

          <div className="relative z-10 max-w-3xl">
            <p className="text-lg sm:text-2xl font-medium text-[#fafaf9] leading-relaxed italic">
              {content.quote}
            </p>
            <div className="mt-6 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f59e0b] to-[#6366f1] p-0.5 shadow-md">
                <div className="w-full h-full rounded-full bg-[#0d0d0e] flex items-center justify-center font-bold text-base text-[#fafaf9]">
                  HH
                </div>
              </div>
              <div>
                <span className="text-base font-bold text-[#fafaf9] block">
                  {content.author}
                </span>
                <span className="text-xs sm:text-sm font-mono text-[#f59e0b] block">
                  {content.authorTitle}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Hard Data Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-[#141415] border border-[#2a2a2c] hover:border-[#ef4444]/40 transition-all flex flex-col justify-between">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#ef4444] font-mono tracking-tight">
                {content.stat1Number}
              </span>
              <h3 className="text-base font-bold text-[#fafaf9] mt-2">
                {content.stat1Label}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#78716c] mt-3 leading-relaxed border-t border-[#2a2a2c] pt-3">
              {content.stat1Sub}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141415] border border-[#2a2a2c] hover:border-[#f59e0b]/40 transition-all flex flex-col justify-between">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#f59e0b] font-mono tracking-tight">
                {content.stat2Number}
              </span>
              <h3 className="text-base font-bold text-[#fafaf9] mt-2">
                {content.stat2Label}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#78716c] mt-3 leading-relaxed border-t border-[#2a2a2c] pt-3">
              {content.stat2Sub}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141415] border border-[#2a2a2c] hover:border-[#22c55e]/40 transition-all flex flex-col justify-between">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#22c55e] font-mono tracking-tight">
                {content.stat3Number}
              </span>
              <h3 className="text-base font-bold text-[#fafaf9] mt-2">
                {content.stat3Label}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#78716c] mt-3 leading-relaxed border-t border-[#2a2a2c] pt-3">
              {content.stat3Sub}
            </p>
          </div>
        </div>

        {/* Real-world Audit Code Inspector */}
        <div className="bg-[#141415] border border-[#2a2a2c] rounded-2xl p-5 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2a2a2c]">
            <div className="flex items-center gap-2.5">
              <Terminal className="w-4 h-4 text-[#f59e0b]" />
              <span className="font-mono text-xs sm:text-sm font-bold text-[#fafaf9]">
                {content.comparisonTitle}
              </span>
            </div>

            {/* Toggle Between Solo & Parallax */}
            <div className="flex items-center bg-[#0d0d0e] p-1 rounded-lg border border-[#2a2a2c]">
              <button
                onClick={() => setActiveDiffTab('solo')}
                className={`px-3 py-1 rounded text-xs font-mono font-medium transition-all ${
                  activeDiffTab === 'solo'
                    ? 'bg-[#ef4444]/20 text-[#fca5a5] border border-[#ef4444]/40'
                    : 'text-[#78716c] hover:text-[#fafaf9]'
                }`}
              >
                Solo AI Output (False Pass)
              </button>
              <button
                onClick={() => setActiveDiffTab('parallax')}
                className={`px-3 py-1 rounded text-xs font-mono font-medium transition-all ${
                  activeDiffTab === 'parallax'
                    ? 'bg-[#22c55e]/20 text-[#86efac] border border-[#22c55e]/40'
                    : 'text-[#78716c] hover:text-[#fafaf9]'
                }`}
              >
                Parallax Cross-Audit (Defect Caught)
              </button>
            </div>
          </div>

          {/* Terminal Code View */}
          <div className="mt-4 font-mono text-xs sm:text-[13px] bg-[#09090b] rounded-xl p-4 sm:p-6 border border-[#2a2a2c] overflow-x-auto">
            {activeDiffTab === 'solo' ? (
              <div className="space-y-2 text-[#a8a29e]">
                <div className="text-[#ef4444] font-bold flex items-center gap-2 pb-2 border-b border-[#2a2a2c]">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>[Solo Model Vibe Coder] — Claude 3.7 writing and self-testing a concurrency cache:</span>
                </div>
                <div className="text-[#78716c]">// Solo model implementation:</div>
                <div className="text-[#fafaf9]">export async function getOrCompute(key: string, fn: () =&gt; Promise&lt;Data&gt;) &#123;</div>
                <div className="text-[#fafaf9] pl-4">if (cache.has(key)) return cache.get(key);</div>
                <div className="text-[#ef4444] pl-4 bg-[#ef4444]/10 py-1 rounded">
                  const val = await fn(); // ⚠️ BUG: Race condition! 10 concurrent requests fire 10 duplicate DB queries!
                </div>
                <div className="text-[#fafaf9] pl-4">cache.set(key, val);</div>
                <div className="text-[#fafaf9] pl-4">return val;</div>
                <div className="text-[#fafaf9]">&#125;</div>
                <div className="mt-3 pt-3 border-t border-[#2a2a2c] text-[#22c55e] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                  <span>$ npm test -- cache.test.ts</span>
                </div>
                <div className="text-[#a8a29e] pl-6">
                  ✓ test 'getOrCompute returns value' passed (12ms)<br />
                  ✓ test 'cache saves value' passed (8ms)<br />
                  <span className="text-[#f59e0b] font-bold">
                    Tests: 2 passed, 2 total (Solo AI wrote sequential tests that satisfied its own bug!)
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-2 text-[#a8a29e]">
                <div className="text-[#22c55e] font-bold flex items-center gap-2 pb-2 border-b border-[#2a2a2c]">
                  <ShieldAlert className="w-4 h-4 text-[#f59e0b] shrink-0" />
                  <span>[Parallax Cross-Vendor Audit] — Model B (DeepSeek R1) rejects Model A's PR with evidence:</span>
                </div>
                <div className="text-[#f59e0b]">
                  [AUDIT REJECTED · HASH 0x4f82] Model B to Model A:
                </div>
                <div className="text-[#cbd5e1] pl-4 border-l-2 border-[#f59e0b] py-1 bg-[#141415] rounded-r">
                  "Challenge: Your sequential tests mask a thundering herd race condition. Under Promise.all([k, k, k]),
                  'await fn()' executes 3 times instead of 1. Here is the reproduction stress test and mutex patch:"
                </div>
                <div className="text-[#78716c] mt-2">// Patched & Verified by Parallax:</div>
                <div className="text-[#fafaf9]">const inFlight = new Map&lt;string, Promise&lt;Data&gt;&gt;();</div>
                <div className="text-[#22c55e] bg-[#22c55e]/10 py-1 pl-4 rounded">
                  + if (!inFlight.has(key)) inFlight.set(key, fn().finally(() =&gt; inFlight.delete(key)));<br />
                  + return await inFlight.get(key); // ✅ Single-flight deduplication proven under 1,000 parallel workers!
                </div>
                <div className="mt-3 pt-3 border-t border-[#2a2a2c] text-[#22c55e] flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>[LEDGER RECORD SEALED] Cross-audit signed by Model A and Model B. Passed 100/100 concurrency fuzz runs.</span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716c] font-mono gap-2">
            <span>{content.dogfoodTitle}: {content.dogfoodDesc}</span>
            <span className="text-[#f59e0b] font-semibold shrink-0">100% Dogfooding Confidence</span>
          </div>
        </div>
      </div>
    </section>
  );
};
