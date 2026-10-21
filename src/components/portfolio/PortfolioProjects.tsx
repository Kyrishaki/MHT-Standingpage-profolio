"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Calendar,
  Users,
  Award,
  Layers,
  ArrowUpRight,
  X,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { cvData, ProjectDetail } from "@/data/cv-data";

export function PortfolioProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const projects = cvData.projects;

  return (
    <section id="projects" className="relative border-b border-line bg-bg py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Top Header Bar */}
        <div className="flex items-center justify-between border-b border-line pb-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono-hud text-xs uppercase tracking-widest text-muted">
              03 / KINH NGHIỆM LÀM VIỆC
            </span>
            <span className="text-line-strong">/</span>
            <span className="font-mono-hud text-xs uppercase tracking-widest text-ink">
              DỰ ÁN TRIỂN KHAI
            </span>
          </div>
          <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted hidden sm:inline">
            PRODUCTION PROOFS
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink leading-[1.1]">
            <span className="font-display font-bold">Sản phẩm thực tế chứng minh </span>
            <span className="font-editorial italic">năng lực thực thi và điều phối.</span>
          </h2>
        </div>

        {/* Project 1: DNTU-FORUM (Flagship Showcase Card) */}
        {projects[0] && (
          <div className="border border-line bg-raised mb-12 overflow-hidden hover:border-line-strong transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Visual Preview */}
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] bg-bg border-b lg:border-b-0 lg:border-r border-line overflow-hidden group">
                <Image
                  src="/dntu-forum-preview.png"
                  alt="DNTU-FORUM sinh viên"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 left-4 px-2.5 py-1 border border-line bg-bg/90 backdrop-blur-sm font-mono-hud text-[10px] uppercase tracking-wider text-ink">
                  DỰ ÁN TIÊU BIỂU · FULLSTACK & TEAM LEAD
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <a
                    href="https://dntu-forum.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bg/95 border border-line font-mono-hud text-[10px] font-bold uppercase tracking-wider text-ink hover:border-line-strong shadow-lg"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Project Metadata & Responsibilities */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-hud text-xs font-bold uppercase tracking-widest text-muted">
                      01 // FLAGSHIP
                    </span>
                    <span className="font-mono-hud text-[11px] text-muted">09/2026 — 11/2026</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-ink uppercase tracking-tight mb-2">
                    {projects[0].title}
                  </h3>
                  <div className="font-mono-hud text-xs text-muted mb-4 uppercase tracking-wider">
                    {projects[0].role}
                  </div>

                  <p className="text-sm text-ink leading-relaxed mb-6 font-sans">
                    {projects[0].description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-start gap-2 text-xs text-muted">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Hỏi đáp sinh viên, Trao đổi đồ cũ (Marketplace), Tìm nhà trọ & Bạn cùng phòng</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-muted">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Điều phối nhóm 4 thành viên, phân chia task Jira/Trello và quản lý mã nguồn Git</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-muted">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Kiến trúc Next.js App Router kết hợp Supabase Realtime & Row Level Security</span>
                    </div>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Git"].map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 border border-line bg-bg font-mono-hud text-[10px] uppercase text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-line flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(projects[0])}
                    className="inline-flex items-center gap-1.5 font-mono-hud text-xs uppercase tracking-wider font-bold text-ink hover:opacity-75 transition-opacity"
                  >
                    <span>Xem chi tiết giải pháp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="https://github.com/kyrishaki1105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-hud text-xs text-muted hover:text-ink flex items-center gap-1"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Mã nguồn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2 Smaller Project Showcases: Veg4t & WEB MVC (2-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 2: Veg4t */}
          {projects[1] && (
            <div className="border border-line bg-raised p-6 sm:p-8 flex flex-col justify-between hover:border-line-strong transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted">
                    02 // WORDPRESS CMS
                  </span>
                  <span className="font-mono-hud text-[10px] text-muted">{projects[1].period}</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink uppercase tracking-tight mb-2">
                  {projects[1].title}
                </h3>
                <div className="font-mono-hud text-xs text-muted mb-4 uppercase tracking-wider">
                  {projects[1].role}
                </div>

                <p className="text-xs sm:text-sm text-ink leading-relaxed mb-6">
                  {projects[1].description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2 text-xs text-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Tùy biến giao diện (Theme/Plugin) website thương mại & tin tức</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Tối ưu hiển thị chuẩn SEO, nén WebP và tăng tốc LiteSpeed Cache</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["WordPress", "PHP", "MySQL", "WooCommerce", "SEO"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 border border-line bg-bg font-mono-hud text-[10px] uppercase text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-line flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(projects[1])}
                  className="inline-flex items-center gap-1 font-mono-hud text-xs uppercase tracking-wider font-bold text-ink hover:opacity-75"
                >
                  <span>Xem chi tiết</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono-hud text-[10px] text-muted">CMS MASTERY</span>
              </div>
            </div>
          )}

          {/* Project 3: WEB MVC (Microsoft ASP.NET Core) */}
          {projects[2] && (
            <div className="border border-line bg-raised p-6 sm:p-8 flex flex-col justify-between hover:border-line-strong transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted">
                    03 // MICROSOFT ENTERPRISE
                  </span>
                  <span className="font-mono-hud text-[10px] text-muted">{projects[2].period}</span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink uppercase tracking-tight">
                    {projects[2].title}
                  </h3>
                  <span className="px-2 py-0.5 bg-invert-bg text-invert-fg font-mono-hud text-[10px] font-bold">
                    ĐIỂM 8/10
                  </span>
                </div>
                <div className="font-mono-hud text-xs text-muted mb-4 uppercase tracking-wider">
                  {projects[2].role}
                </div>

                <p className="text-xs sm:text-sm text-ink leading-relaxed mb-6">
                  {projects[2].description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2 text-xs text-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Phát triển theo kiến trúc ASP.NET Core MVC & Microsoft SQL Server</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Thiết kế CSDL quan hệ chuẩn hóa 3NF, phân quyền tài khoản & CRUD hoàn chỉnh</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["ASP.NET Core", "C#", "SQL Server", "Entity Framework", "Bootstrap"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 border border-line bg-bg font-mono-hud text-[10px] uppercase text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-line flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(projects[2])}
                  className="inline-flex items-center gap-1 font-mono-hud text-xs uppercase tracking-wider font-bold text-ink hover:opacity-75"
                >
                  <span>Xem chi tiết</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono-hud text-[10px] text-muted">MICROSOFT .NET</span>
              </div>
            </div>
          )}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl bg-bg border border-line shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 border border-line bg-raised text-muted hover:text-ink transition-colors"
                aria-label="Đóng cửa sổ"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="font-mono-hud text-[10px] uppercase tracking-widest text-muted mb-2">
                CHI TIẾT DỰ ÁN · {selectedProject.period}
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-ink uppercase tracking-tight mb-1">
                {selectedProject.title}
              </h3>
              <div className="font-mono-hud text-xs text-muted mb-6 uppercase">
                {selectedProject.role}
              </div>

              <div className="mb-6">
                <h4 className="font-mono-hud text-xs font-bold text-ink uppercase tracking-wider mb-2">
                  TỔNG QUAN GIẢI PHÁP
                </h4>
                <p className="text-sm text-ink leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Features list */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-mono-hud text-xs font-bold text-ink uppercase tracking-wider mb-3">
                    CÁC TÍNH NĂNG NỔI BẬT
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.features.map((f, idx) => (
                      <div key={idx} className="p-3 border border-line bg-raised">
                        <div className="font-mono-hud text-xs font-bold text-ink mb-1">
                          {f.title}
                        </div>
                        <p className="text-xs text-muted leading-relaxed">
                          {f.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stats & Actions */}
              {selectedProject.stats && (
                <div className="grid grid-cols-3 gap-3 border-t border-line pt-4 mb-6">
                  {selectedProject.stats.map((s, idx) => (
                    <div key={idx} className="text-center p-2 bg-raised border border-line">
                      <div className="font-mono-hud text-[10px] text-muted uppercase">{s.label}</div>
                      <div className="font-mono-hud text-xs font-bold text-ink mt-0.5">{s.value}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-line">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-invert-bg text-invert-fg font-mono-hud text-xs font-bold uppercase tracking-wider"
                  >
                    <span>Truy cập Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 border border-line font-mono-hud text-xs uppercase tracking-wider font-semibold text-muted hover:text-ink"
                >
                  Đóng lại
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
