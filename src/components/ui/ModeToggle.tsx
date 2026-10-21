"use client";

import React from "react";
import { Sparkles, FileText, Printer, Compass, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModeToggleProps {
  isRecruiterMode: boolean;
  onToggleMode: (recruiter: boolean) => void;
}

export function ModeToggle({
  isRecruiterMode,
  onToggleMode,
}: ModeToggleProps) {
  const handlePrint = () => {
    if (!isRecruiterMode) {
      onToggleMode(true);
      // Give a tiny moment for layout to switch to clean print view
      setTimeout(() => {
        window.print();
      }, 150);
    } else {
      window.print();
    }
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex items-center justify-between max-w-6xl mx-auto px-4 pointer-events-none no-print">
      {/* Brand logo / badge */}
      <div className="pointer-events-auto flex items-center gap-3">
        <div
          className={cn(
            "flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-medium backdrop-blur-xl transition-all duration-300",
            isRecruiterMode
              ? "bg-white/95 border-slate-300 text-slate-800 shadow-sm"
              : "bg-zinc-950/80 border-zinc-800/90 text-zinc-300 shadow-xl"
          )}
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="font-semibold tracking-wide">MAI HOÀNG TUẤN</span>
          <span
            className={cn(
              "hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px]",
              isRecruiterMode
                ? "bg-slate-100 text-slate-600"
                : "bg-zinc-800/90 text-orange-400"
            )}
          >
            Fullstack
          </span>
        </div>
      </div>

      {/* Navigation & Mode Switch */}
      <div className="pointer-events-auto flex items-center gap-2">
        {/* Quick jump navigation for Desktop */}
        <nav
          className={cn(
            "hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border text-xs backdrop-blur-xl transition-all duration-300",
            isRecruiterMode
              ? "bg-white/90 border-slate-200 text-slate-600"
              : "bg-zinc-950/70 border-zinc-800/80 text-zinc-400"
          )}
        >
          <a
            href="#hero"
            className={cn(
              "px-2.5 py-1 rounded-full transition-colors",
              isRecruiterMode
                ? "hover:text-slate-900 hover:bg-slate-100"
                : "hover:text-zinc-100 hover:bg-zinc-800/60"
            )}
          >
            Giới thiệu
          </a>
          <a
            href="#experience"
            className={cn(
              "px-2.5 py-1 rounded-full transition-colors flex items-center gap-1",
              isRecruiterMode
                ? "hover:text-slate-900 hover:bg-slate-100"
                : "hover:text-zinc-100 hover:bg-zinc-800/60 text-orange-400"
            )}
          >
            <span>Dự án</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          </a>
          <a
            href="#bento"
            className={cn(
              "px-2.5 py-1 rounded-full transition-colors",
              isRecruiterMode
                ? "hover:text-slate-900 hover:bg-slate-100"
                : "hover:text-zinc-100 hover:bg-zinc-800/60"
            )}
          >
            Kỹ năng & Học vấn
          </a>
          <a
            href="#contact"
            className={cn(
              "px-2.5 py-1 rounded-full transition-colors",
              isRecruiterMode
                ? "hover:text-slate-900 hover:bg-slate-100"
                : "hover:text-zinc-100 hover:bg-zinc-800/60"
            )}
          >
            Liên hệ
          </a>
        </nav>

        {/* Print CV quick action button */}
        <button
          onClick={handlePrint}
          title="In hoặc Lưu PDF (Ctrl + P)"
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-200 backdrop-blur-xl shadow-sm",
            isRecruiterMode
              ? "bg-slate-900 text-white border-slate-900 hover:bg-slate-800"
              : "bg-zinc-900/80 border-zinc-700/80 text-zinc-300 hover:text-white hover:border-zinc-500"
          )}
        >
          <Printer className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">In / PDF</span>
        </button>

        {/* Dual Mode Toggle Switcher */}
        <div
          className={cn(
            "flex items-center p-1 rounded-full border backdrop-blur-xl shadow-xl transition-all duration-300",
            isRecruiterMode
              ? "bg-white border-slate-300"
              : "bg-zinc-950/90 border-zinc-800"
          )}
        >
          <button
            onClick={() => onToggleMode(false)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300",
              !isRecruiterMode
                ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-500/25"
                : "text-slate-500 hover:text-slate-800"
            )}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">ArtCraft</span>
          </button>

          <button
            onClick={() => onToggleMode(true)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300",
              isRecruiterMode
                ? "bg-slate-900 text-white shadow-md"
                : "text-zinc-400 hover:text-zinc-200"
            )}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Recruiter CV</span>
          </button>
        </div>
      </div>
    </header>
  );
}
