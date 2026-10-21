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
  Cpu,
  Database,
  Award,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cvData, ProjectDetail } from "@/data/cv-data";
import { cn } from "@/lib/utils";

interface ExperienceShowcaseProps {
  isRecruiterMode: boolean;
  onOpenProjectDrawer: (project?: ProjectDetail) => void;
}

export function ExperienceShowcase({
  isRecruiterMode,
  onOpenProjectDrawer,
}: ExperienceShowcaseProps) {
  const [activeTab, setActiveTab] = useState(0);
  const dntuProject = cvData.projects[0];
  const veg4tProject = cvData.projects[1];
  const webMvcProject = cvData.projects[2];

  const moduleTabs = [
    {
      title: "Hỏi đáp Q&A",
      icon: MessageSquare,
      summary: "Thảo luận học thuật, bài giảng, tài liệu ôn thi với cơ chế bình chọn và thông báo thời gian thực.",
      tag: "Realtime Q&A",
    },
    {
      title: "Chợ Sinh Viên",
      icon: ShoppingBag,
      summary: "Marketplace trao đổi sách giáo trình, phụ kiện máy tính và đồ dùng sinh hoạt tiết kiệm giữa sinh viên.",
      tag: "P2P Marketplace",
    },
    {
      title: "Bạn Trọ & Nhà Trọ",
      icon: Home,
      summary: "Ghép bạn ở ghép phù hợp lối sống và hệ thống đánh giá phòng trọ minh bạch quanh khu vực trường.",
      tag: "Room & Reviews",
    },
    {
      title: "Lịch Xe Buýt",
      icon: Bus,
      summary: "Tra cứu tuyến xe buýt nhanh chóng kết nối Biên Hòa và các trục đường chính đến trường Đại học.",
      tag: "Transit Guide",
    },
    {
      title: "Danh Bạ CLB",
      icon: Users,
      summary: "Cổng thông tin tuyển quân và lịch sự kiện của các câu lạc bộ ngoại khóa toàn trường.",
      tag: "Club Network",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto space-y-8"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Kinh nghiệm làm việc & Dự án thực tế</span>
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-extrabold tracking-tight",
              isRecruiterMode ? "text-slate-900" : "text-white"
            )}
          >
            Dự Án Trọng Điểm & Thực Chiến
          </h2>
          <p
            className={cn(
              "text-sm mt-1",
              isRecruiterMode ? "text-slate-600" : "text-zinc-400"
            )}
          >
            Từ nền tảng web cộng đồng quy mô lớn DNTU-FORUM đến các hệ thống Web MVC Microsoft và giải pháp WordPress.
          </p>
        </div>

        {/* Highlight counter */}
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold">
            3 Dự án hoàn thiện
          </span>
        </div>
      </div>

      {/* Flagship Card: DNTU-FORUM */}
      <SpotlightCard
        isRecruiterMode={isRecruiterMode}
        className="p-6 sm:p-10 border-orange-500/20 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Story, Highlights & Feature Tabs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/40">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                {dntuProject.highlight}
              </span>
              <span
                className={cn(
                  "px-3 py-1 rounded-full border text-xs font-medium flex items-center gap-1.5",
                  isRecruiterMode
                    ? "bg-slate-100 border-slate-200 text-slate-800"
                    : "bg-zinc-900 border-zinc-800 text-zinc-300"
                )}
              >
                <Calendar className="w-3.5 h-3.5 text-orange-400" />
                <span>{dntuProject.period}</span>
              </span>
            </div>

            <div>
              <h3
                className={cn(
                  "text-2xl sm:text-3xl font-extrabold tracking-tight",
                  isRecruiterMode ? "text-slate-900" : "text-white"
                )}
              >
                {dntuProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-orange-400 mt-1">
                {dntuProject.role}
              </p>
            </div>

            {/* Narrative Summary */}
            <p
              className={cn(
                "text-sm sm:text-base leading-relaxed",
                isRecruiterMode ? "text-slate-700" : "text-zinc-300"
              )}
            >
              {dntuProject.summary}
            </p>

            {/* Interactive Module Tabs */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Khám phá 5 phân hệ tính năng:
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

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3 no-print">
              <a
                href={dntuProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-amber-600 transition-all duration-200 hover:scale-105"
              >
                <span>Trải nghiệm DNTU-FORUM</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenProjectDrawer(dntuProject)}
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

          {/* Right Column: Visual Mockup */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div
              onClick={() => onOpenProjectDrawer(dntuProject)}
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
                  <span>Click để mở chi tiết dự án</span>
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
                  <span className="font-mono">https://dntu-forum.vercel.app</span>
                </div>
                <span className="text-orange-400 font-medium">Lighthouse 98/100</span>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>

      {/* Row 2: Companion Projects from CV (Veg4t & WEB MVC) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Project 2: Veg4t */}
        <SpotlightCard
          isRecruiterMode={isRecruiterMode}
          className="p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Layers className="w-3.5 h-3.5" />
                <span>{veg4tProject.role}</span>
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                {veg4tProject.period}
              </span>
            </div>

            <h3
              className={cn(
                "text-xl font-bold mb-2",
                isRecruiterMode ? "text-slate-900" : "text-white"
              )}
            >
              {veg4tProject.title}
            </h3>

            <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-semibold mb-3">
              {veg4tProject.highlight}
            </div>

            <p
              className={cn(
                "text-xs leading-relaxed mb-4",
                isRecruiterMode ? "text-slate-600" : "text-zinc-400"
              )}
            >
              {veg4tProject.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {["WordPress", "PHP", "MySQL", "WooCommerce", "LiteSpeed Cache"].map(
                (tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-zinc-800/70 border border-zinc-700/60 text-zinc-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-xs text-zinc-500">CMS & E-Commerce</span>
            <button
              onClick={() => onOpenProjectDrawer(veg4tProject)}
              className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
            >
              <span>Xem chi tiết</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </SpotlightCard>

        {/* Project 3: WEB MVC (Microsoft Tech) */}
        <SpotlightCard
          isRecruiterMode={isRecruiterMode}
          className="p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Cpu className="w-3.5 h-3.5" />
                <span>{webMvcProject.role}</span>
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                {webMvcProject.period}
              </span>
            </div>

            <h3
              className={cn(
                "text-xl font-bold mb-2",
                isRecruiterMode ? "text-slate-900" : "text-white"
              )}
            >
              {webMvcProject.title}
            </h3>

            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-3 flex items-center justify-between">
              <span>{webMvcProject.highlight}</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-200 font-bold text-xs">
                Điểm 8
              </span>
            </div>

            <p
              className={cn(
                "text-xs leading-relaxed mb-4",
                isRecruiterMode ? "text-slate-600" : "text-zinc-400"
              )}
            >
              {webMvcProject.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {["C#", "ASP.NET Core MVC", "SQL Server", "Entity Framework"].map(
                (tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-zinc-800/70 border border-zinc-700/60 text-zinc-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-xs text-zinc-500">Microsoft Stack</span>
            <button
              onClick={() => onOpenProjectDrawer(webMvcProject)}
              className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
            >
              <span>Xem chi tiết</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
