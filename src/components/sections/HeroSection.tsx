"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowDownRight,
  Printer,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  Code2,
} from "lucide-react";
import { AvatarHero } from "@/components/ui/AvatarHero";
import { cvData } from "@/data/cv-data";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  isRecruiterMode: boolean;
  onOpenProjectDrawer: () => void;
  onToggleRecruiterMode: (val: boolean) => void;
}

export function HeroSection({
  isRecruiterMode,
  onOpenProjectDrawer,
  onToggleRecruiterMode,
}: HeroSectionProps) {
  const { personal, quickStats } = cvData;

  const handlePrint = () => {
    if (!isRecruiterMode) {
      onToggleRecruiterMode(true);
      setTimeout(() => window.print(), 150);
    } else {
      window.print();
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Introduction & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6">
          {/* Status Badge */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <div
              className={cn(
                "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border backdrop-blur-md transition-all duration-300",
                isRecruiterMode
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : "bg-zinc-900/90 border-orange-500/30 text-zinc-300"
              )}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personal.status}</span>
            </div>

            <div
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs border transition-colors",
                isRecruiterMode
                  ? "bg-slate-100 border-slate-200 text-slate-700"
                  : "bg-zinc-900/60 border-zinc-800 text-zinc-400"
              )}
            >
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
              <span className={cn(isRecruiterMode ? "text-slate-900" : "text-white")}>
                {personal.fullName}
              </span>
            </h1>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent tracking-wide">
                {personal.title}
              </span>
              <span
                className={cn(
                  "text-xs sm:text-sm font-medium px-2.5 py-0.5 rounded-md border",
                  isRecruiterMode
                    ? "bg-slate-200 text-slate-800 border-slate-300"
                    : "bg-zinc-800/80 text-zinc-300 border-zinc-700"
                )}
              >
                {personal.englishTitle}
              </span>
            </div>
          </div>

          {/* Bio statement */}
          <p
            className={cn(
              "text-sm sm:text-base leading-relaxed max-w-2xl font-normal",
              isRecruiterMode ? "text-slate-600" : "text-zinc-300"
            )}
          >
            {personal.bio}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {quickStats.map((stat, i) => (
              <div
                key={i}
                className={cn(
                  "p-3 rounded-2xl border text-left transition-all duration-300",
                  isRecruiterMode
                    ? "bg-white border-slate-200 shadow-sm"
                    : "bg-zinc-900/60 border-zinc-800/80 hover:border-orange-500/30"
                )}
              >
                <div className="text-xs text-zinc-500 font-medium">
                  {stat.label}
                </div>
                <div
                  className={cn(
                    "text-sm sm:text-base font-bold truncate mt-0.5",
                    isRecruiterMode
                      ? "text-slate-900"
                      : "bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent"
                  )}
                >
                  {stat.value}
                </div>
                <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Call to actions */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2 no-print">
            {/* Primary CTA: DNTU-FORUM Showcase */}
            <button
              onClick={onOpenProjectDrawer}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Dự án trọng điểm: DNTU-FORUM</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>

            {/* Print CV / PDF CTA */}
            <button
              onClick={handlePrint}
              className={cn(
                "inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-105 active:scale-95",
                isRecruiterMode
                  ? "bg-slate-900 text-white border-slate-900 hover:bg-slate-800"
                  : "bg-zinc-900/80 border-zinc-700 text-zinc-200 hover:text-white hover:border-zinc-500"
              )}
            >
              <Printer className="w-4 h-4 text-orange-400" />
              <span>Tải / In Bản CV PDF</span>
            </button>

            {/* Quick Contact Link */}
            <a
              href="#contact"
              className={cn(
                "inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium transition-colors",
                isRecruiterMode
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              <Mail className="w-4 h-4 text-orange-400" />
              <span>Liên hệ ngay</span>
            </a>
          </div>
        </div>

        {/* Right Column: 3D Tilt Mesh Gradient Avatar Frame */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <AvatarHero
            avatarUrl={personal.avatarUrl}
            isRecruiterMode={isRecruiterMode}
          />
        </div>
      </div>
    </section>
  );
}
