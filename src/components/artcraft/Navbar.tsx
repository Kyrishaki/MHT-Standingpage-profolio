"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("artcraft-theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("artcraft-theme", nextTheme);
  };

  return (
    <header
      id="site-nav"
      className="sticky top-0 left-0 z-50 w-full border-b border-line bg-bg/95 backdrop-blur-sm transition-colors duration-200"
    >
      <div className="flex h-12 items-stretch justify-between">
        {/* Left: Logo & Main Navigation */}
        <div className="flex min-w-0 items-stretch">
          {/* Logo link */}
          <Link
            href="/"
            className="flex items-center border-r border-line px-4 hover:opacity-75 sm:px-5 transition-opacity"
            aria-label="ArtCraft Home"
          >
            <svg
              className="h-5 w-auto text-ink fill-current"
              viewBox="0 0 116.34 97.5"
              fill="currentColor"
            >
              <path d="M104.28,49.49L81.55,0h-31.23l-3.17,4.76L14.75,53.63,0,75.85l21.55,21.55,63.79-36.94,16.99,37.04,14.01-21.74-12.06-26.27ZM32.89,65.66l32.42-48.87,10.91,23.77-43.32,25.09Z" />
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden min-w-0 items-stretch lg:flex" aria-label="Main Navigation">
            <ul className="flex h-full items-stretch font-mono-hud text-[11px] font-bold tracking-[0.12em] uppercase">
              <li className="flex items-stretch">
                <Link
                  href="/"
                  className="group flex h-full items-center px-2.5 text-ink"
                >
                  <span className="flex items-center gap-1.5 px-2 py-0.5 bg-invert-bg text-invert-fg">
                    Home
                  </span>
                </Link>
              </li>

              <li className="flex items-stretch">
                <a
                  href="https://app.getartcraft.com/create-image"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center px-2.5 text-muted hover:text-ink transition-colors"
                >
                  <span className="flex items-center gap-1.5 px-1.5 py-0.5 group-hover:bg-invert-bg group-hover:text-invert-fg transition-colors">
                    Image
                  </span>
                </a>
              </li>

              <li className="flex items-stretch">
                <a
                  href="https://app.getartcraft.com/create-video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center px-2.5 text-muted hover:text-ink transition-colors"
                >
                  <span className="flex items-center gap-1.5 px-1.5 py-0.5 group-hover:bg-invert-bg group-hover:text-invert-fg transition-colors">
                    Video
                  </span>
                </a>
              </li>

              {/* Resources dropdown */}
              <li className="relative flex items-stretch">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  onBlur={() => setTimeout(() => setIsResourcesOpen(false), 200)}
                  className="group flex h-full items-center px-2.5 text-muted hover:text-ink transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-1.5 px-1.5 py-0.5 group-hover:bg-invert-bg group-hover:text-invert-fg transition-colors">
                    Resources
                    <ChevronDown className="h-3 w-3" />
                  </span>
                </button>

                {isResourcesOpen && (
                  <div className="absolute top-full left-0 w-48 border border-line bg-bg shadow-xl p-2 z-50 text-[11px] uppercase tracking-wider">
                    <a
                      href="#features"
                      className="block px-3 py-2 text-muted hover:text-ink hover:bg-raised transition-colors"
                    >
                      Documentation
                    </a>
                    <a
                      href="#community"
                      className="block px-3 py-2 text-muted hover:text-ink hover:bg-raised transition-colors"
                    >
                      Showcase & Films
                    </a>
                    <a
                      href="#ownership"
                      className="block px-3 py-2 text-muted hover:text-ink hover:bg-raised transition-colors"
                    >
                      Open Source GitHub
                    </a>
                  </div>
                )}
              </li>

              <li className="flex items-stretch">
                <a
                  href="#get-started"
                  className="group flex h-full items-center px-2.5 text-muted hover:text-ink transition-colors"
                >
                  <span className="flex items-center gap-1.5 px-1.5 py-0.5 group-hover:bg-invert-bg group-hover:text-invert-fg transition-colors">
                    Download
                  </span>
                </a>
              </li>

              <li className="flex items-stretch">
                <a
                  href="https://discord.gg/artcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center px-2.5 text-muted hover:text-ink transition-colors"
                >
                  <span className="flex items-center gap-1.5 px-1.5 py-0.5 group-hover:bg-invert-bg group-hover:text-invert-fg transition-colors">
                    Support
                  </span>
                </a>
              </li>

              <li className="flex items-stretch ml-1.5 border-l border-line pl-1.5">
                <a
                  href="#features"
                  className="group flex h-full items-center px-2.5 text-muted hover:text-ink transition-colors"
                >
                  <span className="flex items-center gap-1.5 px-1.5 py-0.5 group-hover:bg-invert-bg group-hover:text-invert-fg transition-colors">
                    Craft Apps
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right: Pricing, Discord, Theme Switcher & Launch App CTA */}
        <div className="flex shrink-0 items-stretch">
          <div className="hidden items-stretch md:flex font-mono-hud text-[11px] font-bold tracking-[0.12em] uppercase">
            <a
              href="#get-started"
              className="group flex h-full items-center px-3.5 text-muted hover:text-ink transition-colors"
            >
              <span className="flex items-center gap-1.5 px-1.5 py-0.5 group-hover:bg-invert-bg group-hover:text-invert-fg transition-colors">
                Pricing
              </span>
            </a>

            {/* Discord icon link */}
            <a
              href="https://discord.gg/artcraft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join ArtCraft Discord"
              className="flex w-12 items-center justify-center border-l border-line text-muted hover:bg-invert-bg hover:text-invert-fg transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
              className="flex w-12 items-center justify-center border-l border-line text-muted hover:text-ink transition-colors"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>

            {/* Launch App CTA */}
            <a
              href="https://app.getartcraft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-invert-bg text-invert-fg font-mono-hud font-bold uppercase tracking-[0.12em] text-[11px] h-full border-l border-line px-5 hover:opacity-85 transition-opacity"
            >
              Launch App
            </a>
          </div>

          {/* Mobile Theme Toggle & Hamburger */}
          <div className="flex items-stretch md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex w-12 items-center justify-center border-l border-line text-muted hover:text-ink"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex w-12 items-center justify-center border-l border-line text-muted hover:bg-invert-bg hover:text-invert-fg transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-line bg-bg p-4 space-y-3 font-mono-hud text-xs uppercase tracking-wider">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-ink font-bold"
          >
            Home
          </Link>
          <a
            href="https://app.getartcraft.com/create-image"
            className="block py-2 text-muted hover:text-ink"
          >
            Image
          </a>
          <a
            href="https://app.getartcraft.com/create-video"
            className="block py-2 text-muted hover:text-ink"
          >
            Video
          </a>
          <a
            href="#features"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-muted hover:text-ink"
          >
            Features
          </a>
          <a
            href="#ownership"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-muted hover:text-ink"
          >
            Ownership
          </a>
          <a
            href="#community"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-muted hover:text-ink"
          >
            Community
          </a>
          <a
            href="#get-started"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2.5 text-center bg-invert-bg text-invert-fg font-bold"
          >
            Download Free
          </a>
        </div>
      )}
    </header>
  );
}
