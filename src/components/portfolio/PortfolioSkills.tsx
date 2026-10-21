"use client";

import React, { useState } from "react";
import { Code2, Database, Cpu, Terminal, CheckCircle2, ChevronRight, Layers } from "lucide-react";

export function PortfolioSkills() {
  const [activeTab, setActiveTab] = useState<"languages" | "database" | "frameworks">("languages");

  return (
    <section id="skills" className="relative border-b border-line bg-bg py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Top Header Bar */}
        <div className="flex items-center justify-between border-b border-line pb-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono-hud text-xs uppercase tracking-widest text-muted">
              02 / KỸ NĂNG CÔNG VIỆC
            </span>
            <span className="text-line-strong">/</span>
            <span className="font-mono-hud text-xs uppercase tracking-widest text-ink">
              MA TRẬN CÔNG NGHỆ
            </span>
          </div>
          <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted hidden sm:inline">
            TECHNICAL MATRIX
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink leading-[1.1]">
            <span className="font-display font-bold">Làm chủ từ nền tảng hướng đối tượng </span>
            <span className="font-editorial italic">đến kiến trúc web đám mây.</span>
          </h2>
        </div>

        {/* 3 Modular Feature Showcases (ArtCraft 3-Block Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Ngôn ngữ lập trình */}
          <div className="border border-line bg-raised flex flex-col justify-between hover:border-line-strong transition-all duration-300 group">
            <div className="p-6 border-b border-line">
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 border border-line bg-bg flex items-center justify-center text-ink">
                  <Code2 className="w-4 h-4" />
                </div>
                <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted">
                  01 // LANGUAGES
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-ink uppercase tracking-tight mb-2">
                Ngôn ngữ lập trình
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Nắm vững tư duy hướng đối tượng (OOP), kiểu dữ liệu tĩnh (C#, Java, C++) và phát triển web hiện đại (JavaScript / TypeScript).
              </p>
            </div>

            {/* Language badges */}
            <div className="p-6 bg-bg/50">
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { name: "C#", note: ".NET Core / LINQ", primary: true },
                  { name: "JS / TS", note: "ESNext / TypeScript", primary: true },
                  { name: "Java", note: "OOP Fundamentals", primary: false },
                  { name: "C++", note: "Data Structures", primary: false },
                  { name: "HTML5", note: "Semantic Markup", primary: false },
                  { name: "CSS3", note: "Responsive Layouts", primary: false },
                ].map((item) => (
                  <div
                    key={item.name}
                    className={`p-2.5 border ${
                      item.primary ? "border-line-strong bg-raised" : "border-line bg-bg"
                    } flex flex-col justify-between`}
                  >
                    <span className="font-mono-hud text-xs font-bold text-ink">{item.name}</span>
                    <span className="font-mono-hud text-[9px] text-muted">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-line font-mono-hud text-[10px] text-muted uppercase flex items-center justify-between">
              <span>NỀN TẢNG THUẬT TOÁN</span>
              <span className="text-ink">OOP & STRICT TYPING</span>
            </div>
          </div>

          {/* Card 2: Cơ sở dữ liệu (Database) */}
          <div className="border border-line bg-raised flex flex-col justify-between hover:border-line-strong transition-all duration-300 group">
            <div className="p-6 border-b border-line">
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 border border-line bg-bg flex items-center justify-center text-ink">
                  <Database className="w-4 h-4" />
                </div>
                <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted">
                  02 // DATABASE
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-ink uppercase tracking-tight mb-2">
                Cơ sở dữ liệu
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Thiết kế mô hình quan hệ dữ liệu chuẩn hóa (3NF), tối ưu hóa câu lệnh truy vấn T-SQL và tích hợp dịch vụ cơ sở dữ liệu thời gian thực.
              </p>
            </div>

            {/* Database details */}
            <div className="p-6 bg-bg/50 flex flex-col gap-3">
              <div className="p-3 border border-line-strong bg-raised">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono-hud text-xs font-bold text-ink">Microsoft SQL Server</span>
                  <span className="font-mono-hud text-[9px] px-1.5 py-0.5 bg-invert-bg text-invert-fg">CHÍNH KHÓA</span>
                </div>
                <p className="text-[11px] text-muted leading-relaxed">
                  Thiết kế quan hệ bảng, Stored Procedures, Functions, Indexing, ràng buộc toàn vẹn và Entity Framework Core ORM.
                </p>
              </div>

              <div className="p-3 border border-line bg-bg">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono-hud text-xs font-bold text-ink">Supabase (PostgreSQL)</span>
                  <span className="font-mono-hud text-[9px] text-muted">REALTIME CLOUD</span>
                </div>
                <p className="text-[11px] text-muted leading-relaxed">
                  Row Level Security (RLS) policies, Realtime Pub/Sub Channels, Edge Storage và RESTful/GraphQL APIs.
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-line font-mono-hud text-[10px] text-muted uppercase flex items-center justify-between">
              <span>CHUẨN HÓA DỮ LIỆU</span>
              <span className="text-ink">3NF & REALTIME SYNC</span>
            </div>
          </div>

          {/* Card 3: Frameworks & Công nghệ */}
          <div className="border border-line bg-raised flex flex-col justify-between hover:border-line-strong transition-all duration-300 group">
            <div className="p-6 border-b border-line">
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 border border-line bg-bg flex items-center justify-center text-ink">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted">
                  03 // FRAMEWORKS
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-ink uppercase tracking-tight mb-2">
                Công nghệ & Frameworks
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Ứng dụng kiến trúc phân tầng chuyên nghiệp, tối ưu hóa tốc độ tải trang (SEO/Lighthouse) và xây dựng giao diện tương tác cao.
              </p>
            </div>

            {/* Frameworks List */}
            <div className="p-6 bg-bg/50 flex flex-col gap-2.5">
              {[
                { name: "ASP.NET Core (MVC)", role: "Enterprise Backend & Architecture", highlight: true },
                { name: "Next.js / React", role: "App Router, SSR, Server Components", highlight: true },
                { name: "Bootstrap 4/5", role: "Responsive UI Grid System", highlight: false },
                { name: "Tailwind CSS", role: "Utility-first Modern Styling", highlight: false },
                { name: "WordPress CMS", role: "Custom Themes, Plugins, SEO & Cache", highlight: false },
              ].map((fw) => (
                <div
                  key={fw.name}
                  className={`p-2 border ${
                    fw.highlight ? "border-line-strong bg-raised" : "border-line bg-bg"
                  } flex items-center justify-between`}
                >
                  <span className="font-mono-hud text-xs font-bold text-ink">{fw.name}</span>
                  <span className="font-mono-hud text-[9px] text-muted text-right">{fw.role}</span>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-line font-mono-hud text-[10px] text-muted uppercase flex items-center justify-between">
              <span>KIẾN TRÚC MÃ NGUỒN</span>
              <span className="text-ink">CLEAN & MODULAR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
