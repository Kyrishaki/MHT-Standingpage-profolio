"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, Mail, Phone, ExternalLink, Download, FileText, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function PortfolioHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Archimedean Spiral Radar Canvas in background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    let rotation = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height * 0.46;
      const maxR = Math.max(width, height) * 0.72;

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const strokeColor = isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(16, 16, 20, 0.05)";
      const tickColor = isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(16, 16, 20, 0.1)";

      rotation += 0.00035;

      // Draw Archimedean Spiral
      ctx.beginPath();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;

      const a = 1.6;
      for (let theta = 0; theta < 36; theta += 0.05) {
        const r = a * theta * 26;
        if (r > maxR) break;
        const x = cx + r * Math.cos(theta + rotation);
        const y = cy + r * Math.sin(theta + rotation);
        if (theta === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Concentric circles with radial ticks
      for (let r = 100; r < maxR; r += 140) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = strokeColor;
        ctx.stroke();

        // Ticks along the ring
        const count = Math.floor(r / 16);
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2 + rotation * 0.4;
          const x1 = cx + (r - 4) * Math.cos(angle);
          const y1 = cy + (r - 4) * Math.sin(angle);
          const x2 = cx + (r + 4) * Math.cos(angle);
          const y2 = cy + (r + 4) * Math.sin(angle);

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = tickColor;
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden border-b border-line pt-12 pb-20">
      {/* Background Interactive Radar Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none w-full h-full"
      />

      {/* Center Backdrop Blur Vignette */}
      <div
        className="absolute w-[800px] h-[640px] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--bg) 90%, transparent), transparent)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          maskImage: "radial-gradient(closest-side, black 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(closest-side, black 50%, transparent 100%)",
        }}
      />

      {/* Main Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Top Status & Coordinates Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-line bg-raised font-mono-hud text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-muted mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>FULLSTACK DEVELOPER</span>
          <span className="text-line-strong">/</span>
          <span>DNTU (2022 - 2026)</span>
          <span className="text-line-strong">/</span>
          <span>IELTS 5.5 · B2</span>
        </div>

        {/* Candidate Profile Photo & ArtCraft Tech Badge */}
        <div className="relative mb-6 group">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-line bg-raised shadow-xl relative transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/avatar.png"
              alt="Mai Hoàng Tuấn - Fullstack Developer"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
          {/* HUD coordinate badge */}
          <div className="absolute -bottom-2 -right-2 px-2 py-0.5 border border-line bg-bg font-mono-hud text-[9px] uppercase tracking-wider text-ink shadow-sm">
            10.95°N, 106.84°E
          </div>
        </div>

        {/* Primary Name Display */}
        <h1 className="font-display font-black tracking-[-0.04em] text-4xl sm:text-6xl md:text-7xl uppercase text-ink select-none mb-3">
          MAI HOÀNG TUẤN
        </h1>

        {/* Title & Editorial Tagline */}
        <div className="text-2xl sm:text-4xl md:text-5xl tracking-tight mb-5 text-ink">
          <span className="font-display font-bold">Lập trình viên </span>
          <span className="font-editorial text-3xl sm:text-5xl md:text-6xl italic">
            Fullstack.
          </span>
        </div>

        {/* Bio from CV */}
        <p className="max-w-2xl text-xs sm:text-sm md:text-base text-muted leading-relaxed mb-8">
          Đam mê công nghệ, chủ động học hỏi, thích nghi nhanh và không ngừng nâng cao kỹ năng chuyên môn.
          Có khả năng làm việc nhóm, điều phối dự án quy mô nhỏ và chú trọng chất lượng phần mềm bền vững.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-invert-bg text-invert-fg font-mono-hud font-bold uppercase tracking-[0.12em] text-[11px] shadow-lg hover:opacity-90 transition-opacity"
          >
            <span>Khám phá dự án</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-line bg-bg text-ink font-mono-hud font-bold uppercase tracking-[0.12em] text-[11px] hover:border-line-strong hover:bg-raised transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Liên hệ hợp tác</span>
          </a>

          <a
            href="tel:0865846074"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-3.5 border border-line bg-raised text-muted font-mono-hud font-semibold uppercase tracking-[0.1em] text-[11px] hover:text-ink hover:border-line-strong transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0865 846 074</span>
          </a>
        </div>

        {/* Orbiting Technology Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl">
          {[
            "Next.js (App Router)",
            "ASP.NET Core MVC",
            "C# / .NET",
            "TypeScript / JS",
            "SQL Server",
            "Supabase (PostgreSQL)",
            "WordPress",
            "Bootstrap 4/5",
            "Tailwind CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 border border-line bg-raised font-mono-hud text-[10px] tracking-wider text-muted hover:text-ink hover:border-line-strong transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
