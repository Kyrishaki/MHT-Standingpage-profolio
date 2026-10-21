"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-bg border-t border-line font-mono-hud text-xs">
      <div className="grid grid-cols-1 md:grid-cols-5 border-b border-line">
        {/* Brand Column */}
        <div className="p-8 sm:p-10 border-b md:border-b-0 border-line flex flex-col justify-between space-y-8 bg-bg">
          <div>
            <svg
              className="h-7 w-auto text-ink fill-current mb-6"
              viewBox="0 0 116.34 97.5"
              fill="currentColor"
            >
              <path d="M104.28,49.49L81.55,0h-31.23l-3.17,4.76L14.75,53.63,0,75.85l21.55,21.55,63.79-36.94,16.99,37.04,14.01-21.74-12.06-26.27ZM32.89,65.66l32.42-48.87,10.91,23.77-43.32,25.09Z" />
            </svg>
            <p className="font-body text-xs sm:text-sm text-muted leading-relaxed max-w-xs">
              The open-source studio for controllable AI image and video.
            </p>
          </div>

          <a
            href="mailto:hello@storyteller.ai"
            className="text-[11px] font-bold tracking-[0.14em] uppercase text-muted hover:text-ink transition-colors"
          >
            HELLO@STORYTELLER.AI
          </a>
        </div>

        {/* Product Column */}
        <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-l border-line bg-bg space-y-4">
          <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-faint mb-6">
            PRODUCT
          </div>
          <ul className="space-y-3 text-xs tracking-wider uppercase font-medium">
            <li>
              <a href="#get-started" className="text-muted hover:text-ink transition-colors">
                Download
              </a>
            </li>
            <li>
              <a href="#get-started" className="text-muted hover:text-ink transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a
                href="https://app.getartcraft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-ink transition-colors"
              >
                Launch App
              </a>
            </li>
          </ul>
        </div>

        {/* Craft Apps Column */}
        <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-l border-line bg-bg space-y-4">
          <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-faint mb-6">
            CRAFT APPS
          </div>
          <ul className="space-y-2.5 text-xs tracking-wider uppercase font-medium">
            {[
              "All Craft Apps",
              "PhotoCraft",
              "VectorCraft",
              "FilmCraft",
              "LightCraft",
              "PdfCraft",
              "EffectCraft",
              "DesignCraft",
              "FigCraft",
            ].map((app, i) => (
              <li key={i}>
                <a href="#features" className="text-muted hover:text-ink transition-colors">
                  {app}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Column */}
        <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-l border-line bg-bg space-y-4">
          <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-faint mb-6">
            RESOURCES
          </div>
          <ul className="space-y-3 text-xs tracking-wider uppercase font-medium">
            {["Tutorials", "News", "FAQ", "Press Kit", "Support"].map((item, i) => (
              <li key={i}>
                <a
                  href="https://discord.gg/artcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-ink transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community Column */}
        <div className="p-8 sm:p-10 md:border-l border-line bg-bg space-y-4">
          <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-faint mb-6">
            COMMUNITY
          </div>
          <ul className="space-y-3 text-xs tracking-wider uppercase font-medium">
            {["Discord", "GitHub", "YouTube", "Instagram", "TikTok"].map((item, i) => (
              <li key={i}>
                <a
                  href="https://discord.gg/artcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-ink transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 py-4 text-[11px] text-faint tracking-widest uppercase">
        <div>© 2026 ARTCRAFT · STORYTELLER.AI</div>
        <div className="flex items-center gap-6 mt-2 sm:mt-0">
          <Link href="/cv" className="hover:text-ink text-accent underline underline-offset-4">
            View Developer Portfolio & CV
          </Link>
          <a href="#" className="hover:text-ink transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-ink transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
