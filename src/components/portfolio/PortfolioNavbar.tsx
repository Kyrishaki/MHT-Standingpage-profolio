"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Download, FileText, ExternalLink, Menu, X, ArrowUpRight } from "lucide-react";

export function PortfolioNavbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const currentTheme =
      (document.documentElement.getAttribute("data-theme") as "light" | "dark") ||
      "light";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("artcraft-theme", nextTheme);
  };

  const navLinks = [
    { label: "GIỚI THIỆU", href: "#intro" },
    { label: "KỸ NĂNG", href: "#skills" },
    { label: "DỰ ÁN", href: "#projects" },
    { label: "HỌC VẤN", href: "#education" },
    { label: "TÍNH CÁCH", href: "#personality" },
    { label: "LIÊN HỆ", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full h-12 bg-bg/90 backdrop-blur-md border-b border-line transition-colors duration-200">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Brand Monogram & Status */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 group font-display font-extrabold tracking-tight text-ink text-sm sm:text-base"
          >
            <div className="w-6 h-6 border border-line bg-raised flex items-center justify-center font-mono-hud text-[11px] font-bold group-hover:border-line-strong transition-colors">
              MHT
            </div>
            <span>MAI HOÀNG TUẤN</span>
          </Link>

          <span className="hidden lg:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono-hud text-[9px] uppercase tracking-wider font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open for work
          </span>
        </div>

        {/* Center: Desktop Navigation Anchors */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono-hud text-[11px] uppercase tracking-[0.12em] text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle, CV Download & Print CV */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Chuyển chế độ sáng tối"
            className="w-8 h-8 flex items-center justify-center border border-line rounded-none bg-raised text-muted hover:text-ink hover:border-line-strong transition-colors"
          >
            {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* Quick Print/CV Link */}
          <Link
            href="/cv"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-line bg-raised font-mono-hud text-[10px] uppercase tracking-wider font-semibold text-muted hover:text-ink hover:border-line-strong transition-colors"
            title="Chế độ đọc CV tuyển dụng / In ấn"
          >
            <FileText className="w-3 h-3" />
            <span>Bản in (CV)</span>
          </Link>

          {/* Download CV Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-invert-bg text-invert-fg font-mono-hud font-bold uppercase tracking-[0.12em] text-[10px] hover:opacity-90 transition-opacity"
          >
            <Download className="w-3 h-3" />
            <span className="hidden sm:inline">TẢI</span>
            <span>CV</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center border border-line text-ink"
            aria-label="Mở menu di động"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-line bg-bg/95 backdrop-blur-md px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono-hud text-xs uppercase tracking-widest text-ink py-1.5 border-b border-line/40 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <Link
              href="/cv"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono-hud text-xs text-muted flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Chế độ đọc CV</span>
            </Link>
            <Link
              href="/artcraft"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono-hud text-xs text-muted flex items-center gap-1.5"
            >
              <span>ArtCraft Replica</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
