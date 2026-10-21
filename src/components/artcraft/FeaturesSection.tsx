"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  category: string;
  index: string;
  title: string;
  description: string;
  image?: string;
  isCta?: boolean;
}

const featuresData = [
  {
    category: "WORLDS",
    index: "01",
    title: "Image to Location",
    description:
      "Place virtual actors into physical environments. Establish single-location consistency and film multiple shots in a room without things disappearing.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "3D COMPOSITING",
    index: "02",
    title: "Build scenes with depth",
    description:
      "Use images, backdrops, foreground elements, and props in scenes with real depth. A couple of images blends naturally into a finished composition.",
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "2D COMPOSITING",
    index: "03",
    title: "Precise layered control",
    description:
      "Combine images, background removal, layers, and simple drawing tools to compose a scene exactly the way you imagined it.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "3D MESH",
    index: "04",
    title: "Image to 3D Mesh",
    description:
      "Turning images into 3D helps position elements exactingly. Block complex scenes with intentional geometry instead of fighting prompts.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "MIXED ASSETS",
    index: "05",
    title: "Mix every kind of asset",
    description:
      "Combine image cutouts, worlds, and 3D meshes in one canvas to lay out scenes with precision and intention.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "POSING",
    index: "06",
    title: "Character Posing",
    description:
      "Dynamically pose your characters to nail the precise character, scene, and camera blocking before calling \"action\".",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "CUTOUTS",
    index: "07",
    title: "Background Removal",
    description:
      "Instantly remove backgrounds from images to create assets for your scenes. Clean, precise, and ready for compositing.",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "MORE IN THE APP",
    index: "08",
    title: "Launch the studio",
    description:
      "Generate, edit, and compose with every model — right in your browser, no install needed.",
    isCta: true,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative border-b border-line bg-bg">
      {/* Top Metadata Header */}
      <div className="flex items-center justify-between px-6 sm:px-10 py-3.5 border-b border-line font-mono-hud text-[11px] font-bold tracking-[0.14em] uppercase text-muted">
        <div>01 / CRAFTING FEATURES</div>
        <div className="hidden sm:block">REAL FOOTAGE — CAPTURED IN ARTCRAFT</div>
      </div>

      {/* Main Editorial Headline */}
      <div className="px-6 sm:px-10 py-16 sm:py-24 max-w-4xl">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-[-0.03em] leading-[1.08] text-ink mb-6">
          The control that mere
          <br />
          <span className="font-editorial text-5xl sm:text-7xl md:text-8xl lowercase">
            words
          </span>{" "}
          cannot buy.
        </h2>
        <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
          Text prompting is neat, but artists crave control. Compose the shot yourself — then let the model render it.
        </p>
      </div>

      {/* 2-Column Grid (8 Feature Showcases) */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-line">
        {featuresData.map((feature, idx) => {
          const isRightCol = idx % 2 === 1;
          return (
            <div
              key={idx}
              className={cn(
                "border-b border-line flex flex-col justify-between group",
                isRightCol ? "md:border-l border-line" : ""
              )}
            >
              {/* Card Meta Bar */}
              <div className="flex items-center justify-between px-6 sm:px-8 py-3 border-b border-line font-mono-hud text-[11px] font-bold tracking-[0.12em] uppercase text-muted">
                <span>{feature.category}</span>
                <span>{feature.index}</span>
              </div>

              {/* Card Media Preview */}
              {feature.isCta ? (
                <div className="relative aspect-[16/10] w-full flex flex-col items-center justify-center p-8 bg-raised">
                  <span className="font-mono-hud text-xs text-muted mb-4 uppercase tracking-[0.16em]">
                    APP.GETARTCRAFT.COM
                  </span>
                  <a
                    href="https://app.getartcraft.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 border border-line bg-bg hover:bg-invert-bg hover:text-invert-fg transition-all duration-200 shadow-sm"
                    aria-label="Launch ArtCraft Studio App"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </a>
                </div>
              ) : (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-sunken">
                  {feature.image && (
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              )}

              {/* Card Content Footer */}
              <div className="p-6 sm:p-8 space-y-2 border-t border-line bg-bg">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-ink tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
