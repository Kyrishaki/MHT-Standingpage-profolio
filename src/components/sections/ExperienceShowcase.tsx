"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Sparkles,
  Layers,
  ArrowRight,
  MessageSquare,
  ShoppingBag,
  Home,
  Bus,
  Users,
  CheckCircle2,
  Calendar,
  Code2,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cvData } from "@/data/cv-data";
import { cn } from "@/lib/utils";

interface ExperienceShowcaseProps {
  isRecruiterMode: boolean;
  onOpenProjectDrawer: () => void;
}

export function ExperienceShowcase({
  isRecruiterMode,
  onOpenProjectDrawer,
}: ExperienceShowcaseProps) {
  const project = cvData.projects[0]; // DNTU-FORUM
  const [activeTab, setActiveTab] = useState(0);

  const moduleTabs = [
    {
      title: "Hỏi đáp Q&A",
      icon: MessageSquare,
      summary: "Thảo luận học thuật, tài liệu ôn thi và bình chọn đáp án hữu ích theo thời gian thực.",
      tag: "Realtime Chat",
    },
    {
      title: "Chợ Sinh Viên",
      icon: ShoppingBag,
      summary: "Marketplace trao đổi sách giáo trình, phụ kiện máy tính và đồ dùng sinh hoạt tiết kiệm.",
      tag: "P2P Marketplace",
    },
    {
      title: "Bạn Trọ & Nhà Trọ",
      icon: Home,
      summary: "Ghép bạn ở ghép phù hợp và hệ thống đánh giá phòng trọ minh bạch quanh khu vực trường.",
      tag: "Community Review",
    },
    {
      title: "Lịch Xe Buýt",
      icon: Bus,
      summary: "Tra cứu tuyến xe buýt nhanh chóng kết nối Biên Hòa và các trục đường chính đến trường.",
      tag: "Smart Transit",
    },
    {
      title: "Danh Bạ CLB",
      icon: Users,
      summary: "Cổng thông tin tuyển quân và sự kiện của các câu lạc bộ ngoại khóa toàn trường.",
      tag: "Club Network",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Kinh nghiệm & Dự án trọng điểm</span>
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-extrabold tracking-tight",
              isRecruiterMode ? "text-slate-900" : "text-white"
            )}
          >
            {project.title}
          </h2>
          <p
            className={cn(
              "text-sm mt-1",
              isRecruiterMode ? "text-slate-600" : "text-zinc-400"
            )}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Timeline & Role badge */}
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "px-3.5 py-1.5 rounded-full border text-xs font-medium flex items-center gap-1.5",
              isRecruiterMode
                ? "bg-slate-100 border-slate-200 text-slate-800"
                : "bg-zinc-900 border-zinc-800 text-zinc-300"
            )}
          >
            <Calendar className="w-3.5 h-3.5 text-orange-400" />
            <span>{project.period}</span>
          </div>

          <div className="px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold">
            {project.role}
          </div>
        </div>
      </div>

      {/* Flagship Bento Card */}
      <SpotlightCard
        isRecruiterMode={isRecruiterMode}
        className="p-6 sm:p-10 border-orange-500/20 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Story, Highlights & Feature Tabs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Highlight Banner */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              <span>{project.highlight}</span>
            </div>

            {/* Narrative Summary */}
            <p
              className={cn(
                "text-sm sm:text-base leading-relaxed",
                isRecruiterMode ? "text-slate-700" : "text-zinc-300"
              )}
            >
              {project.summary}
            </p>

            {/* Interactive Module Tabs */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Các phân hệ chức năng tương tác:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {moduleTabs.map((tab, idx) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={cn(
                        "p-2.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between gap-1",
                        isActive
                          ? isRecruiterMode
                            ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                            : "bg-orange-500/20 text-orange-300 border-orange-500/50 shadow-md shadow-orange-500/10"
                          : isRecruiterMode
                          ? "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
                      )}
                    >
                      <div className="flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-xs font-semibold truncate">
                          {tab.title}
                        </span>
                      </div>
                      <span className="text-[10px] opacity-75">{tab.tag}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Explanation */}
              <div
                className={cn(
                  "p-3.5 rounded-2xl border transition-all duration-300",
                  isRecruiterMode
                    ? "bg-slate-100 border-slate-200 text-slate-700"
                    : "bg-zinc-900/80 border-zinc-800 text-zinc-300"
                )}
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs leading-relaxed">
                    {moduleTabs[activeTab].summary}
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                Công nghệ cốt lõi:
              </div>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Vercel"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium border",
                        isRecruiterMode
                          ? "bg-white border-slate-300 text-slate-800"
                          : "bg-zinc-900 border-zinc-700/80 text-zinc-300"
                      )}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4 no-print">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-amber-600 transition-all duration-200 hover:scale-105"
              >
                <span>Trải nghiệm trực tiếp</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenProjectDrawer}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all duration-200 hover:scale-105",
                  isRecruiterMode
                    ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-50"
                    : "bg-zinc-900 border-zinc-700 text-zinc-200 hover:bg-zinc-800"
                )}
              >
                <span>Xem kiến trúc sâu</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Mockup / Interactive Presentation */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div
              onClick={onOpenProjectDrawer}
              className="relative rounded-2xl overflow-hidden border border-zinc-800/80 group cursor-pointer shadow-2xl transition-all duration-500 hover:border-orange-500/50 hover:shadow-orange-500/20"
            >
              <div className="relative aspect-[16/10] w-full bg-zinc-950">
                <Image
                  src="/dntu-forum-preview.png"
                  alt="DNTU-FORUM UI Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Overlay pill on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                <div className="px-5 py-2.5 rounded-full bg-orange-500 text-white font-semibold text-xs shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Sparkles className="w-4 h-4" />
                  <span>Click để mở Drawer chi tiết</span>
                </div>
              </div>

              {/* Bottom Caption Bar */}
              <div
                className={cn(
                  "p-3.5 border-t flex items-center justify-between text-xs",
                  isRecruiterMode
                    ? "bg-slate-100 border-slate-200 text-slate-700"
                    : "bg-zinc-950/90 border-zinc-800 text-zinc-400"
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-mono">{project.demoUrl}</span>
                </div>
                <span className="text-orange-400 font-medium">98/100 Lighthouse</span>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
