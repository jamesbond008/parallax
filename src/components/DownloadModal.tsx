import React, { useState } from 'react';
import { X, Download, Copy, Check, Terminal, Apple, ShieldAlert, Cpu } from 'lucide-react';
import { Language } from '../types';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);
  const [activePlatform, setActivePlatform] = useState<'mac' | 'linux' | 'win'>('mac');
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const brewCmd = "brew install --cask parallaxhq/tap/parallax";

  const handleCopy = () => {
    navigator.clipboard.writeText(brewCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulatedDownload = (fileName: string) => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      // Create a mock download trigger
      const blob = new Blob([
        `Parallax v1.4.0 (Build 2026.09)\n\nThank you for downloading Parallax!\n1. Drag Parallax to /Applications\n2. Open Parallax and enter your local API keys (Claude, DeepSeek, OpenAI, etc.)\n3. Start your 3-day free trial immediately.\n\nDocs: https://parallaxhq.io/docs\nSupport: support@parallaxhq.io`
      ], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName.endsWith('.dmg') ? fileName : `${fileName}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#141415] border border-[#2a2a2c] w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-[#fafaf9]">
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
              //
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-[#fafaf9]">
              Download Parallax Client
            </h3>
            <span className="text-xs font-mono text-[#f59e0b]">
              Release v1.4.0 · 3-Day Free Trial Included
            </span>
          </div>
        </div>

        {/* Platform Tabs */}
        <div className="grid grid-cols-3 gap-2 bg-[#0d0d0e] p-1 rounded-xl border border-[#2a2a2c] mb-6 font-mono text-xs">
          <button
            onClick={() => setActivePlatform('mac')}
            className={`py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activePlatform === 'mac'
                ? 'bg-[#2a2a2c] text-[#fafaf9]'
                : 'text-[#78716c] hover:text-[#fafaf9]'
            }`}
          >
            <Apple className="w-3.5 h-3.5" />
            macOS
          </button>
          <button
            onClick={() => setActivePlatform('linux')}
            className={`py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activePlatform === 'linux'
                ? 'bg-[#2a2a2c] text-[#fafaf9]'
                : 'text-[#78716c] hover:text-[#fafaf9]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            Linux
          </button>
          <button
            onClick={() => setActivePlatform('win')}
            className={`py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activePlatform === 'win'
                ? 'bg-[#2a2a2c] text-[#fafaf9]'
                : 'text-[#78716c] hover:text-[#fafaf9]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            Windows
          </button>
        </div>

        {/* Mac Options */}
        {activePlatform === 'mac' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => handleSimulatedDownload('Parallax-v1.4.0-arm64.dmg')}
                disabled={downloading}
                className="p-4 rounded-xl bg-[#0d0d0e] hover:bg-[#1a1a1c] border border-[#2a2a2c] hover:border-[#f59e0b] text-left transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#f59e0b]">
                    Apple Silicon
                  </span>
                  <span className="text-sm font-bold text-[#fafaf9] block mt-1">
                    M1, M2, M3, M4
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-[#a8a29e] group-hover:text-[#fafaf9]">
                  <Download className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>.dmg installer (84 MB)</span>
                </div>
              </button>

              <button
                onClick={() => handleSimulatedDownload('Parallax-v1.4.0-x64.dmg')}
                disabled={downloading}
                className="p-4 rounded-xl bg-[#0d0d0e] hover:bg-[#1a1a1c] border border-[#2a2a2c] hover:border-[#f59e0b] text-left transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#a8a29e]">
                    Intel Mac
                  </span>
                  <span className="text-sm font-bold text-[#fafaf9] block mt-1">
                    x86_64 Architecture
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-[#a8a29e] group-hover:text-[#fafaf9]">
                  <Download className="w-3.5 h-3.5" />
                  <span>.dmg installer (91 MB)</span>
                </div>
              </button>
            </div>

            {/* Homebrew command copy */}
            <div className="p-3.5 rounded-xl bg-[#0d0d0e] border border-[#2a2a2c]">
              <span className="text-[10px] font-mono text-[#78716c] uppercase block mb-1.5">
                Install via Terminal (Homebrew)
              </span>
              <div className="flex items-center justify-between font-mono text-xs bg-[#141415] p-2 rounded-lg border border-[#2a2a2c]">
                <code className="text-[#38bdf8] truncate mr-2">{brewCmd}</code>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded hover:bg-[#2a2a2c] text-[#a8a29e] hover:text-[#fafaf9] transition-colors shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#22c55e]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Linux Option */}
        {activePlatform === 'linux' && (
          <div className="space-y-4">
            <button
              onClick={() => handleSimulatedDownload('Parallax-v1.4.0.AppImage')}
              disabled={downloading}
              className="w-full p-4 rounded-xl bg-[#0d0d0e] hover:bg-[#1a1a1c] border border-[#2a2a2c] hover:border-[#f59e0b] text-left transition-all cursor-pointer flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#f59e0b]">
                  Linux AppImage (Universal)
                </span>
                <span className="text-xs text-[#78716c] block mt-0.5">
                  Ubuntu, Fedora, Debian, Arch (x86_64 / arm64)
                </span>
              </div>
              <Download className="w-4 h-4 text-[#f59e0b]" />
            </button>
            <div className="p-3 rounded-xl bg-[#0d0d0e] border border-[#2a2a2c] font-mono text-xs text-[#38bdf8]">
              curl -fsSL https://parallaxhq.io/install.sh | bash
            </div>
          </div>
        )}

        {/* Windows Option */}
        {activePlatform === 'win' && (
          <div className="space-y-4">
            <button
              onClick={() => handleSimulatedDownload('Parallax-Setup-v1.4.0.exe')}
              disabled={downloading}
              className="w-full p-4 rounded-xl bg-[#0d0d0e] hover:bg-[#1a1a1c] border border-[#2a2a2c] hover:border-[#f59e0b] text-left transition-all cursor-pointer flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#f59e0b]">
                  Windows 10 / 11 (64-bit)
                </span>
                <span className="text-xs text-[#78716c] block mt-0.5">
                  Standalone installer with auto-update
                </span>
              </div>
              <Download className="w-4 h-4 text-[#f59e0b]" />
            </button>
            <div className="p-3 rounded-xl bg-[#0d0d0e] border border-[#2a2a2c] font-mono text-xs text-[#38bdf8]">
              winget install ParallaxHQ.Parallax
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-6 pt-4 border-t border-[#2a2a2c] flex items-center justify-between text-xs font-mono text-[#78716c]">
          <span>Requires macOS 12.0+</span>
          <span className="text-[#22c55e] font-semibold">No Credit Card Required</span>
        </div>
      </div>
    </div>
  );
};
