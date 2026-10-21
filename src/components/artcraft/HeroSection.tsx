"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Monitor, Apple } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

interface OrbitCard {
  id: number;
  r: number; // distance from center
  angle: number; // angle in radians
  speed: number;
  width: number;
  height: number;
  title: string;
  image: string;
  tilt: number;
}

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Radar / Spiral interactive canvas in background
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
      const cy = height / 2;
      const maxR = Math.max(width, height) * 0.75;

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const strokeColor = isDark ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.06)";
      const tickColor = isDark ? "rgba(255, 255, 255, 0.14)" : "rgba(0, 0, 0, 0.12)";

      rotation += 0.0004;

      // Draw Archimedean Spiral
      ctx.beginPath();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;

      const a = 1.8;
      for (let theta = 0; theta < 35; theta += 0.05) {
        const r = a * theta * 28;
        if (r > maxR) break;
        const x = cx + r * Math.cos(theta + rotation);
        const y = cy + r * Math.sin(theta + rotation);
        if (theta === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Concentric circles with radial ticks
      for (let r = 120; r < maxR; r += 160) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = strokeColor;
        ctx.stroke();

        // Ticks along the ring
        const count = Math.floor(r / 18);
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2 + rotation * 0.5;
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

  // Curated showcase cards arranged along orbital paths around the hero
  const cards: OrbitCard[] = [
    {
      id: 1,
      r: 340,
      angle: 0.35,
      speed: 0.0002,
      width: 140,
      height: 95,
      title: "Otter in Water",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80",
      tilt: -4,
    },
    {
      id: 2,
      r: 460,
      angle: 1.1,
      speed: 0.0002,
      width: 155,
      height: 100,
      title: "Samurai in Autumn",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=400&q=80",
      tilt: 6,
    },
    {
      id: 3,
      r: 380,
      angle: 1.85,
      speed: 0.0002,
      width: 145,
      height: 90,
      title: "Fluid Drop Splash",
      image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&q=80",
      tilt: -2,
    },
    {
      id: 4,
      r: 520,
      angle: 2.65,
      speed: 0.0002,
      width: 165,
      height: 110,
      title: "Cyberpunk Anime Eye",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
      tilt: 3,
    },
    {
      id: 5,
      r: 490,
      angle: 3.55,
      speed: 0.0002,
      width: 150,
      height: 105,
      title: "Dog in Autumn Dress",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80",
      tilt: -5,
    },
    {
      id: 6,
      r: 430,
      angle: 4.4,
      speed: 0.0002,
      width: 160,
      height: 100,
      title: "Motorcycle Explosion",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80",
      tilt: 7,
    },
    {
      id: 7,
      r: 540,
      angle: 5.1,
      speed: 0.0002,
      width: 170,
      height: 110,
      title: "Cinema Colosseum",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80",
      tilt: -3,
    },
    {
      id: 8,
      r: 390,
      angle: 5.9,
      speed: 0.0002,
      width: 145,
      height: 95,
      title: "Neon Alley Walker",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=400&q=80",
      tilt: 5,
    },
  ];

  return (
    <section id="hero" className="relative min-h-[calc(100vh-3rem)] flex items-center justify-center overflow-hidden border-b border-line">
      {/* Background Interactive Radar Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none w-full h-full"
      />

      {/* Orbiting Visual Cards */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {cards.map((card) => {
          const x = Math.cos(card.angle) * card.r;
          const y = Math.sin(card.angle) * (card.r * 0.75); // slight perspective flattening
          return (
            <div
              key={card.id}
              className="absolute hidden md:block rounded-xl overflow-hidden border border-line shadow-2xl bg-bg transition-transform duration-700 hover:scale-110 pointer-events-auto cursor-pointer"
              style={{
                width: `${card.width}px`,
                height: `${card.height}px`,
                transform: `translate(${x}px, ${y}px) rotate(${card.tilt}deg)`,
              }}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 hover:opacity-10 transition-opacity" />
            </div>
          );
        })}
      </div>

      {/* Center Backdrop Blur Vignette */}
      <div
        className="absolute w-[680px] h-[520px] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--bg) 88%, transparent), transparent)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          maskImage: "radial-gradient(closest-side, black 55%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(closest-side, black 55%, transparent 100%)",
        }}
      />

      {/* Center Hero Content */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        {/* Main ARTCRAFT Brand Typography */}
        <h1 className="font-display font-black tracking-[-0.04em] text-5xl sm:text-7xl md:text-8xl uppercase text-ink select-none mb-6">
          ARTCRAFT
        </h1>

        {/* Tagline: Capable tools for artists. */}
        <div className="text-2xl sm:text-4xl md:text-5xl tracking-tight mb-4 text-ink">
          <span className="font-display font-bold">Capable tools </span>
          <span className="font-editorial text-3xl sm:text-5xl md:text-6xl">
            for artists.
          </span>
        </div>

        {/* Subtitle */}
        <p className="max-w-xl text-sm sm:text-base text-muted leading-relaxed mb-8">
          ArtCraft builds open source tools for artists. We pride ourselves on freedom of control and expression.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-invert-bg text-invert-fg font-mono-hud font-bold uppercase tracking-[0.12em] text-[11px] shadow-lg hover:opacity-90 transition-opacity"
          >
            <Apple className="w-4 h-4" />
            <Monitor className="w-4 h-4" />
            <span>Download Free</span>
          </a>

          <a
            href="https://app.getartcraft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3.5 border border-line bg-bg text-ink font-mono-hud font-bold uppercase tracking-[0.12em] text-[11px] hover:border-line-strong hover:bg-raised transition-colors"
          >
            <span>Use On Web</span>
          </a>
        </div>

        {/* Footnote Badge */}
        <div className="flex items-center gap-2 font-mono-hud text-[10px] tracking-[0.14em] uppercase text-muted">
          <GithubIcon className="w-3.5 h-3.5 text-ink" />
          <span>Open source on GitHub · macOS · Windows · Web · No subscription required</span>
        </div>
      </div>
    </section>
  );
}
