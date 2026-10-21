"use client";

import React from "react";

const tickerItems = [
  "IMAGE TO LOCATION",
  "3D COMPOSITING",
  "CHARACTER POSING",
  "IMAGE TO 3D MESH",
  "BACKGROUND REMOVAL",
  "2D COMPOSITING",
  "MIXED ASSETS",
  "SEEDANCE 2.5",
  "NANO BANANA 2",
];

export function MarqueeTicker() {
  return (
    <div className="w-full border-b border-line bg-bg overflow-hidden py-3 font-mono-hud text-[11px] font-bold tracking-[0.18em] uppercase text-muted select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Repeated twice for seamless loop */}
        {[...Array(2)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center">
            {tickerItems.map((item, idx) => (
              <span key={idx} className="flex items-center">
                <span className="hover:text-ink transition-colors px-6">{item}</span>
                <span className="w-1.5 h-1.5 bg-[#2d81ff] inline-block" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
