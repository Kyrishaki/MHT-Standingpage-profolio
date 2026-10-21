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

export default function ArtCraftLandingPage() {
  return (
    <div className="relative min-h-screen bg-bg text-ink selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Sticky Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main" className="xl:pr-32">
        {/* Section 00: Hero with Radar Spiral & Floating Cards */}
        <HeroSection />

        {/* Technical Marquee Feature Ticker */}
        <MarqueeTicker />

        {/* Section 01: Crafting Features (8 Modules) */}
        <FeaturesSection />

        {/* Section 02: Ownership & Open Source (3 Columns) */}
        <OwnershipSection />

        {/* Section 03: Community Proof Films */}
        <CommunitySection />

        {/* Section 04: Bottom CTA */}
        <GetStartedSection />

        {/* 5-Column Editorial Footer */}
        <Footer />
      </main>

      {/* Right HUD Scroll Progress & Section Spy */}
      <RightHud />
    </div>
  );
}
