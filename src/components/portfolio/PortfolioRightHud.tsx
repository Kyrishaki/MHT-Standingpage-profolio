"use client";

import React, { useState, useEffect } from "react";

interface SectionMarker {
  id: string;
  label: string;
}

const SECTIONS: SectionMarker[] = [
  { id: "hero", label: "HERO" },
  { id: "intro", label: "INTRO" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "education", label: "ACADEMICS" },
  { id: "personality", label: "PERSONA" },
  { id: "contact", label: "CONTACT" },
];

export function PortfolioRightHud() {
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const percent = Math.min(100, Math.max(0, Math.round((window.scrollY / docHeight) * 100)));
        setScrollPercent(percent);
      }

      // Check which section is in view
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatPercent = (n: number) => {
    return n.toString().padStart(3, "0") + "%";
  };

  return (
    <aside
      aria-label="Chỉ số cuộn trang"
      className="fixed right-6 bottom-10 z-40 hidden xl:flex flex-col items-end gap-3 pointer-events-auto select-none"
    >
      {/* Scroll percentage readout */}
      <div className="font-mono-hud text-[11px] font-bold tracking-[0.2em] text-muted px-2 py-1 border border-line bg-bg/90 backdrop-blur-sm">
        {formatPercent(scrollPercent)}
      </div>

      {/* Vertical Navigation Spy Tracker */}
      <div className="flex flex-col items-end gap-1.5 border-r border-line pr-2.5 py-1">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={`font-mono-hud text-[10px] tracking-[0.14em] uppercase transition-all duration-200 ${
                isActive
                  ? "font-black text-ink translate-x-0"
                  : "text-muted/60 hover:text-muted translate-x-1"
              }`}
            >
              {sec.label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
