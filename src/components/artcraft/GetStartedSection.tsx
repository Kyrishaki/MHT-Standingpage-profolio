"use client";

import React from "react";

export function GetStartedSection() {
  return (
    <section id="get-started" className="relative py-24 sm:py-32 px-6 sm:px-10 border-b border-line bg-bg text-center flex flex-col items-center justify-center">
      {/* Small uppercase tag */}
      <div className="font-mono-hud text-[11px] font-bold tracking-[0.16em] uppercase text-muted mb-4">
        FREE TO START · NO SUBSCRIPTION
      </div>

      {/* Main Headline */}
      <h2 className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-[-0.03em] leading-tight text-ink mb-6">
        Start{" "}
        <span className="font-editorial text-6xl sm:text-8xl md:text-9xl lowercase">
          crafting.
        </span>
      </h2>

      {/* Subtitle */}
      <p className="max-w-xl text-base sm:text-lg text-muted leading-relaxed mb-10">
        Download the studio, or run it in your browser. Your first renders are minutes away.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://app.getartcraft.com/"
          className="inline-flex items-center justify-center px-8 py-4 bg-invert-bg text-invert-fg font-mono-hud font-bold uppercase tracking-[0.12em] text-[11px] hover:opacity-90 transition-opacity shadow-md"
        >
          Download for Desktop
        </a>

        <a
          href="https://app.getartcraft.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 border border-line bg-bg text-ink font-mono-hud font-bold uppercase tracking-[0.12em] text-[11px] hover:border-line-strong hover:bg-raised transition-colors"
        >
          Launch in Browser
        </a>
      </div>
    </section>
  );
}
