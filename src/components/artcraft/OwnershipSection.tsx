"use client";

import React from "react";
import { GithubIcon } from "@/components/ui/icons";

export function OwnershipSection() {
  return (
    <section id="ownership" className="relative border-b border-line bg-bg">
      {/* Top Metadata Header */}
      <div className="flex items-center justify-between px-6 sm:px-10 py-3.5 border-b border-line font-mono-hud text-[11px] font-bold tracking-[0.14em] uppercase text-muted">
        <div>02 / OWNERSHIP</div>
        <div>FREE & OPEN SOURCE</div>
      </div>

      {/* Main Editorial Headline */}
      <div className="px-6 sm:px-10 py-16 sm:py-24 max-w-4xl">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-[-0.03em] leading-[1.08] text-ink mb-6">
          Stop{" "}
          <span className="font-editorial text-5xl sm:text-7xl md:text-8xl lowercase">
            renting
          </span>{" "}
          from
          <br />
          websites.
        </h2>
        <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
          ArtCraft is yours to own and keep, forever. No subscriptions needed, no aggregator middleman, no rent payments.
        </p>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line">
        {/* Column A: Open source */}
        <div className="p-8 sm:p-10 border-b md:border-b-0 border-line flex flex-col justify-between space-y-8 bg-bg">
          <div>
            <div className="font-mono-hud text-xs text-muted mb-6">A</div>
            <h3 className="text-2xl font-display font-bold text-ink tracking-tight mb-3">
              Open source
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              The whole studio is on GitHub. Read it, fork it, make it yours.
            </p>
          </div>

          <div>
            <a
              href="https://github.com/artcraft-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-line font-mono-hud text-[11px] font-bold uppercase tracking-[0.12em] text-ink hover:bg-invert-bg hover:text-invert-fg transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View Source</span>
            </a>
          </div>
        </div>

        {/* Column B: Yours forever */}
        <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-l border-line flex flex-col justify-between space-y-8 bg-bg">
          <div>
            <div className="font-mono-hud text-xs text-muted mb-6">B</div>
            <h3 className="text-2xl font-display font-bold text-ink tracking-tight mb-3">
              Yours forever
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              ArtCraft is yours to own and keep, forever. No rent payments.
            </p>
          </div>
          <div className="font-mono-hud text-[11px] text-faint uppercase tracking-wider">
            Self-Hosted & Local First
          </div>
        </div>

        {/* Column C: No middleman */}
        <div className="p-8 sm:p-10 md:border-l border-line flex flex-col justify-between space-y-8 bg-bg">
          <div>
            <div className="font-mono-hud text-xs text-muted mb-6">C</div>
            <h3 className="text-2xl font-display font-bold text-ink tracking-tight mb-3">
              No middleman
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              No aggregator between you and the models. Your work stays yours.
            </p>
          </div>
          <div className="font-mono-hud text-[11px] text-faint uppercase tracking-wider">
            Zero Telemetry Lock-In
          </div>
        </div>
      </div>
    </section>
  );
}
