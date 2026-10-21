"use client";

import React from "react";

const TICKER_ITEMS = [
  "NEXT.JS (APP ROUTER)",
  "ASP.NET CORE MVC",
  "C# & .NET",
  "TYPESCRIPT / JAVASCRIPT",
  "MICROSOFT SQL SERVER",
  "SUPABASE (POSTGRESQL)",
  "WORDPRESS CMS (SEO / THEME)",
  "BOOTSTRAP 4/5 & TAILWIND CSS",
  "DNTU-FORUM TEAM LEADER",
  "IELTS 5.5 (TRÌNH ĐỘ B2)",
  "ĐH CÔNG NGHỆ ĐỒNG NAI (2022 - 2026)",
  "C++ & JAVA OOP",
  "BIÊN HÒA, ĐỒNG NAI",
];

export function PortfolioTicker() {
  return (
    <div className="relative w-full border-b border-line bg-bg overflow-hidden py-3 select-none">
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {/* First set */}
        <div className="flex items-center shrink-0">
          {TICKER_ITEMS.map((item, i) => (
            <div key={`a-${i}`} className="flex items-center">
              <span className="font-mono-hud text-[11px] font-bold tracking-[0.16em] uppercase text-muted hover:text-ink transition-colors px-4">
                {item}
              </span>
              <span className="w-1.5 h-1.5 bg-line-strong shrink-0" />
            </div>
          ))}
        </div>

        {/* Second set for infinite loop */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {TICKER_ITEMS.map((item, i) => (
            <div key={`b-${i}`} className="flex items-center">
              <span className="font-mono-hud text-[11px] font-bold tracking-[0.16em] uppercase text-muted hover:text-ink transition-colors px-4">
                {item}
              </span>
              <span className="w-1.5 h-1.5 bg-line-strong shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
