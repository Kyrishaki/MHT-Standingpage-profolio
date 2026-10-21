"use client";

import React, { useState, useEffect } from "react";
import { ControllableBackground } from "@/components/canvas/ControllableBackground";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { ProjectDrawer } from "@/components/ui/ProjectDrawer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceShowcase } from "@/components/sections/ExperienceShowcase";
import { BentoResume } from "@/components/sections/BentoResume";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { cvData, ProjectDetail } from "@/data/cv-data";
import { Printer, Sparkles } from "lucide-react";

export default function HomePage() {
  const [isRecruiterMode, setIsRecruiterMode] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    cvData.projects[0]
  );

  // Sync mode with html class for global styling and print triggers
  useEffect(() => {
    if (isRecruiterMode) {
      document.documentElement.classList.add("recruiter-mode-active");
    } else {
      document.documentElement.classList.remove("recruiter-mode-active");
    }
  }, [isRecruiterMode]);

  // Listen for Ctrl+P / Cmd+P to switch to clean print view automatically
  useEffect(() => {
    const handleBeforePrint = () => {
      setIsRecruiterMode(true);
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
    };
  }, []);

  const handleOpenProjectDrawer = (project?: ProjectDetail) => {
    setSelectedProject(project || cvData.projects[0]);
    setIsDrawerOpen(true);
  };

  const handleCloseProjectDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <main className="relative min-h-screen selection:bg-orange-500/30 selection:text-orange-200">
      {/* Controllable Canvas Background (ArtCraft Mode: Canvas 2D + Glow; Recruiter Mode: Clean Slate) */}
      <ControllableBackground isRecruiterMode={isRecruiterMode} />

      {/* Mode Toggle Header Bar */}
      <ModeToggle
        isRecruiterMode={isRecruiterMode}
        onToggleMode={setIsRecruiterMode}
      />

      {/* Recruiter Quick Banner (Visible when Recruiter Mode is active) */}
      {isRecruiterMode && (
        <div className="pt-24 max-w-6xl mx-auto px-4 no-print">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 text-white">
                <Printer className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Chế độ Đọc & In Tuyển Dụng (Recruiter Mode)
                </h3>
                <p className="text-xs text-slate-600">
                  Giao diện đã được tối giản hóa đồ họa, tối ưu cho việc đọc lướt, xuất PDF hoặc in ấn trực tiếp (Ctrl + P).
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>In trang này (PDF)</span>
              </button>
              <button
                onClick={() => setIsRecruiterMode(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quay lại ArtCraft</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Sections */}
      <HeroSection
        isRecruiterMode={isRecruiterMode}
        onOpenProjectDrawer={handleOpenProjectDrawer}
        onToggleRecruiterMode={setIsRecruiterMode}
      />

      <ExperienceShowcase
        isRecruiterMode={isRecruiterMode}
        onOpenProjectDrawer={handleOpenProjectDrawer}
      />

      <BentoResume isRecruiterMode={isRecruiterMode} />

      <ContactFooter isRecruiterMode={isRecruiterMode} />

      {/* Deep-Dive Project Modal / Drawer */}
      <ProjectDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseProjectDrawer}
        isRecruiterMode={isRecruiterMode}
      />
    </main>
  );
}
