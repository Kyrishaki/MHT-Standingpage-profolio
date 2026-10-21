"use client";

import React from "react";
import { PortfolioNavbar } from "@/components/portfolio/PortfolioNavbar";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioTicker } from "@/components/portfolio/PortfolioTicker";
import { PortfolioIntro } from "@/components/portfolio/PortfolioIntro";
import { PortfolioSkills } from "@/components/portfolio/PortfolioSkills";
import { PortfolioProjects } from "@/components/portfolio/PortfolioProjects";
import { PortfolioEducation } from "@/components/portfolio/PortfolioEducation";
import { PortfolioPersonality } from "@/components/portfolio/PortfolioPersonality";
import { PortfolioContact } from "@/components/portfolio/PortfolioContact";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import { PortfolioRightHud } from "@/components/portfolio/PortfolioRightHud";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-bg text-ink transition-colors duration-200">
      <PortfolioNavbar />
      <main className="relative">
        <PortfolioHero />
        <PortfolioTicker />
        <PortfolioIntro />
        <PortfolioSkills />
        <PortfolioProjects />
        <PortfolioEducation />
        <PortfolioPersonality />
        <PortfolioContact />
      </main>
      <PortfolioFooter />
      <PortfolioRightHud />
    </div>
  );
}
