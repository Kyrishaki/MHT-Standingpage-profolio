"use client";

import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
  isRecruiterMode?: boolean;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(249, 115, 22, 0.18)",
  spotlightSize = 350,
  isRecruiterMode = false,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isRecruiterMode) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, [isRecruiterMode]);

  const handleMouseEnter = useCallback(() => {
    if (!isRecruiterMode) {
      setOpacity(1);
    }
  }, [isRecruiterMode]);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
  }, []);

  if (isRecruiterMode) {
    return (
      <div
        ref={divRef}
        className={cn(
          "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 text-slate-800 hover:border-slate-300",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-3xl border border-zinc-800/80 bg-zinc-950/70 p-6 backdrop-blur-xl transition-all duration-300 overflow-hidden group shadow-2xl hover:border-orange-500/40 hover:shadow-orange-500/10",
        className
      )}
      {...props}
    >
      {/* Spotlight glowing border overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, rgba(249, 115, 22, 0.35), transparent 70%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Internal ambient spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 -z-10"
        style={{
          opacity,
          background: `radial-gradient(${spotlightSize * 1.2}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Subtle corner light sheen */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none rounded-tr-3xl" />

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
