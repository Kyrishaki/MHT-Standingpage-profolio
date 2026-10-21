"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

interface AvatarHeroProps {
  avatarUrl?: string;
  isRecruiterMode?: boolean;
}

export function AvatarHero({
  avatarUrl = "/avatar.png",
  isRecruiterMode = false,
}: AvatarHeroProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isRecruiterMode) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (isRecruiterMode) {
    return (
      <div className="relative mx-auto w-44 h-44 sm:w-48 sm:h-48 rounded-full border-4 border-slate-200 overflow-hidden shadow-md bg-slate-100 flex items-center justify-center">
        {!imageError ? (
          <Image
            src={avatarUrl}
            alt="Mai Hoàng Tuấn - Fullstack Developer"
            fill
            sizes="(max-width: 768px) 192px, 220px"
            priority
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-slate-200 flex flex-col items-center justify-center text-slate-600 font-semibold text-2xl">
            MHT
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center cursor-pointer select-none group perspective-[1000px]"
    >
      {/* Background ambient mesh glow */}
      <div className="absolute inset-2 -z-10 rounded-full bg-gradient-to-tr from-orange-600/35 via-rose-600/25 to-amber-500/30 blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 opacity-70 animate-subtle-pulse" />

      {/* 3D Tilt Wrapper */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Outer Rotating Conical / Mesh Gradient Ring */}
        <div className="absolute -inset-1.5 rounded-full p-[3px] overflow-hidden transition-all duration-300 group-hover:scale-105">
          <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#ea580c,#f97316,#fbbf24,#ef4444,#ea580c)] animate-spin-slow opacity-85 group-hover:opacity-100" />
          <div className="relative w-full h-full rounded-full bg-[#070709]" />
        </div>

        {/* Inner Avatar Frame */}
        <div className="relative w-[92%] h-[92%] rounded-full overflow-hidden border-2 border-zinc-800/90 shadow-2xl bg-gradient-to-b from-zinc-800 via-zinc-900 to-orange-950/40">
          {!imageError ? (
            <Image
              src={avatarUrl}
              alt="Mai Hoàng Tuấn - Fullstack Developer"
              fill
              sizes="(max-width: 768px) 256px, 288px"
              priority
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-tr from-zinc-900 to-zinc-800 flex flex-col items-center justify-center text-zinc-300">
              <span className="text-4xl font-bold tracking-tight bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                MHT
              </span>
              <span className="text-xs text-zinc-500 mt-1 font-mono">
                Fullstack Dev
              </span>
            </div>
          )}

          {/* Glare overlay on hover */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
        </div>

        {/* Floating Pro Badge */}
        <motion.div
          style={{ transform: "translateZ(30px)" }}
          className="absolute -bottom-2 sm:bottom-0 bg-zinc-950/90 border border-orange-500/40 text-orange-400 text-xs font-medium px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5 transition-all duration-300 group-hover:border-orange-400 group-hover:scale-105"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="font-semibold tracking-wide">Fullstack Dev</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block ml-1" />
        </motion.div>
      </motion.div>
    </div>
  );
}
