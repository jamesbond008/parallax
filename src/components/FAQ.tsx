import React, { useState } from 'react';
import { Language } from '../types';
import { contentData } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQProps {
  lang: Language;
}

export const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const content = contentData[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-20 bg-[#0d0d0e] border-t border-[#2a2a2c] relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-mono font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            {content.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#fafaf9]">
            {content.title}
          </h2>
          <p className="text-sm sm:text-base text-[#78716c] mt-2">
            {content.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {content.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#141415] border-[#f59e0b]/50 shadow-md shadow-[#f59e0b]/5'
                    : 'bg-[#141415]/60 border-[#2a2a2c] hover:border-[#78716c]'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {item.tag && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0d0d0e] text-[#f59e0b] border border-[#2a2a2c] shrink-0">
                        {item.tag}
                      </span>
                    )}
                    <span className="text-sm sm:text-base font-bold text-[#fafaf9]">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#78716c] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#f59e0b]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#2a2a2c]/60">
                    <p className="text-xs sm:text-sm text-[#a8a29e] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
