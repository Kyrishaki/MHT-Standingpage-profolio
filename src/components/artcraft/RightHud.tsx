"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function RightHud() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState("ARTCRAFT");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(Math.round((scrollY / docHeight) * 100), 100) : 0;
      setScrollPercent(pct);

      // Determine active section
      const featuresEl = document.getElementById("features");
      const ownershipEl = document.getElementById("ownership");
      const communityEl = document.getElementById("community");
      const getStartedEl = document.getElementById("get-started");

      const threshold = window.innerHeight * 0.4;

      if (getStartedEl && getStartedEl.getBoundingClientRect().top <= threshold) {
        setActiveSection("GET STARTED");
      } else if (communityEl && communityEl.getBoundingClientRect().top <= threshold) {
        setActiveSection("COMMUNITY");
      } else if (ownershipEl && ownershipEl.getBoundingClientRect().top <= threshold) {
        setActiveSection("OWNERSHIP");
      } else if (featuresEl && featuresEl.getBoundingClientRect().top <= threshold) {
        setActiveSection("FEATURES");
      } else {
        setActiveSection("ARTCRAFT");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const formattedPercent = scrollPercent.toString().padStart(3, "0") + "%";

  return (
    <aside
      className="hidden xl:flex fixed top-12 right-0 bottom-0 w-32 pointer-events-none z-40 flex-col justify-between p-4 border-l border-line font-mono-hud text-[11px] select-none"
      aria-hidden="true"
    >
      {/* Top Brand Tag */}
      <div className="flex flex-col gap-1 text-right">
        <span
          className={cn(
            "font-black tracking-tight transition-all duration-300",
            activeSection === "ARTCRAFT"
              ? "text-ink font-display text-base"
              : "text-muted text-[11px]"
          )}
        >
          ARTCRAFT
        </span>
      </div>

      {/* Middle Interactive Section Anchors */}
      <div className="flex flex-col gap-8 text-right pointer-events-auto">
        <button
          onClick={() => scrollTo("features")}
          className={cn(
            "tracking-wider text-right transition-all duration-300",
            activeSection === "FEATURES"
              ? "font-display font-black text-ink text-xl tracking-tight scale-105"
              : "text-muted hover:text-ink text-[11px]"
          )}
        >
          FEATURES
        </button>

        <button
          onClick={() => scrollTo("ownership")}
          className={cn(
            "tracking-wider text-right transition-all duration-300",
            activeSection === "OWNERSHIP"
              ? "font-display font-black text-ink text-xl tracking-tight scale-105"
              : "text-muted hover:text-ink text-[11px]"
          )}
        >
          OWNERSHIP
        </button>

        <button
          onClick={() => scrollTo("community")}
          className={cn(
            "tracking-wider text-right transition-all duration-300",
            activeSection === "COMMUNITY"
              ? "font-display font-black text-ink text-xl tracking-tight scale-105"
              : "text-muted hover:text-ink text-[11px]"
          )}
        >
          COMMUNITY
        </button>

        <button
          onClick={() => scrollTo("get-started")}
          className={cn(
            "tracking-wider text-right transition-all duration-300",
            activeSection === "GET STARTED"
              ? "font-display font-black text-ink text-xl tracking-tight scale-105"
              : "text-muted hover:text-ink text-[11px]"
          )}
        >
          GET STARTED
        </button>
      </div>

      {/* Scroll Percentage & Tick Gauge */}
      <div className="flex items-center justify-end gap-2 text-right">
        <span className="w-4 h-0.5 bg-[#2d81ff]" />
        <span className="text-[10px] font-bold text-[#2d81ff]">
          {formattedPercent}
        </span>
      </div>
    </aside>
  );
}
