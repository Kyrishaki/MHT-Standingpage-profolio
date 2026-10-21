"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface CommunityFilm {
  id: string;
  index: string;
  title: string;
  thumbnail: string;
  creator: string;
}

const communityFilms: CommunityFilm[] = [
  {
    id: "alien-desert",
    index: "01",
    title: "Cosmic Contact",
    thumbnail:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    creator: "@alien_studios",
  },
  {
    id: "grinch-anime",
    index: "02",
    title: "Neo Grinch Tokyo",
    thumbnail:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    creator: "@anime_motion",
  },
  {
    id: "thunderbolts",
    index: "03",
    title: "Cyborg Operative",
    thumbnail:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    creator: "@cinema_craft",
  },
];

export function CommunitySection() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section id="community" className="relative border-b border-line bg-bg">
      {/* Top Metadata Header */}
      <div className="flex items-center justify-between px-6 sm:px-10 py-3.5 border-b border-line font-mono-hud text-[11px] font-bold tracking-[0.14em] uppercase text-muted">
        <div>03 / PROOF</div>
        <div>FROM THE COMMUNITY</div>
      </div>

      {/* Main Editorial Headline */}
      <div className="px-6 sm:px-10 py-16 sm:py-24 max-w-4xl">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-[-0.03em] leading-[1.08] text-ink">
          Made{" "}
          <span className="font-editorial text-5xl sm:text-7xl md:text-8xl lowercase">
            with
          </span>{" "}
          ArtCraft.
        </h2>
      </div>

      {/* 3-Column Video Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line">
        {communityFilms.map((film, idx) => {
          const isRightCol = idx > 0;
          return (
            <div
              key={film.id}
              className={`border-b md:border-b-0 border-line ${
                isRightCol ? "md:border-l border-line" : ""
              } flex flex-col justify-between group cursor-pointer bg-bg`}
              onClick={() => setPlayingId(film.id)}
            >
              {/* Meta header */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-line font-mono-hud text-[11px] font-bold tracking-[0.12em] uppercase text-muted">
                <span>COMMUNITY FILM</span>
                <span>{film.index}</span>
              </div>

              {/* Video Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-sunken">
                <Image
                  src={film.thumbnail}
                  alt={film.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                {/* Play Button Pill */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-md text-white font-mono-hud text-[10px] font-bold uppercase tracking-wider rounded-none border border-white/20 group-hover:bg-white group-hover:text-black transition-colors">
                  <Play className="w-3 h-3 fill-current" />
                  <span>PLAY</span>
                </div>

                {/* Subtitle / watermark */}
                <div className="absolute bottom-4 right-4 font-mono-hud text-[10px] text-white/70 tracking-wider">
                  [artcraft]
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
