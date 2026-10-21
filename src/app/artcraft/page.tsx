"use client";

import React from "react";
import { Navbar } from "@/components/artcraft/Navbar";
import { HeroSection } from "@/components/artcraft/HeroSection";
import { MarqueeTicker } from "@/components/artcraft/MarqueeTicker";
import { FeaturesSection } from "@/components/artcraft/FeaturesSection";
import { OwnershipSection } from "@/components/artcraft/OwnershipSection";
import { CommunitySection } from "@/components/artcraft/CommunitySection";
import { GetStartedSection } from "@/components/artcraft/GetStartedSection";
import { Footer } from "@/components/artcraft/Footer";
import { RightHud } from "@/components/artcraft/RightHud";

export default function ArtCraftPage() {
  return (
    <div className="relative min-h-screen bg-bg text-ink transition-colors duration-200">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <MarqueeTicker />
        <FeaturesSection />
        <OwnershipSection />
        <CommunitySection />
        <GetStartedSection />
      </main>
      <Footer />
      <RightHud />
    </div>
  );
}
