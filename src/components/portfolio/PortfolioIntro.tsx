"use client";

import React from "react";
import { GraduationCap, Languages, Users, Layers, Award, Compass, Check } from "lucide-react";

export function PortfolioIntro() {
  return (
    <section id="intro" className="relative border-b border-line bg-bg py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Top Header Bar */}
        <div className="flex items-center justify-between border-b border-line pb-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono-hud text-xs uppercase tracking-widest text-muted">
              01 / GIỚI THIỆU
            </span>
            <span className="text-line-strong">/</span>
            <span className="font-mono-hud text-xs uppercase tracking-widest text-ink">
              TRIẾT LÝ PHÁT TRIỂN
            </span>
          </div>
          <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted hidden sm:inline">
            CORE PHILOSOPHY
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink leading-[1.1]">
            <span className="font-display font-bold">Tư duy kỷ luật </span>
            <span className="font-editorial italic">và trách nhiệm bền vững.</span>
          </h2>
        </div>

        {/* Asymmetric Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Full CV Bio & Commitments */}
          <div className="lg:col-span-7 flex flex-col justify-between border border-line bg-raised p-6 sm:p-8">
            <div>
              <div className="font-mono-hud text-[11px] uppercase tracking-widest text-muted mb-4 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-ink" />
                <span>MỤC TIÊU & ĐỊNH HƯỚNG NGHỀ NGHIỆP</span>
              </div>

              <p className="text-base sm:text-lg text-ink font-sans leading-relaxed mb-6">
                Là một <strong className="font-semibold text-ink">Fullstack Developer</strong> đam mê công nghệ,
                tôi luôn chủ động học hỏi, thích nghi nhanh và không ngừng nâng cao kỹ năng chuyên môn.
                Tôi có khả năng làm việc nhóm, điều phối các dự án quy mô nhỏ và giải quyết vấn đề một cách linh hoạt.
              </p>

              <p className="text-sm sm:text-base text-muted font-sans leading-relaxed mb-8">
                Với tinh thần trách nhiệm và tính kỷ luật cao, tôi chú trọng chất lượng sản phẩm,
                hiệu quả công việc và sự phát triển bền vững trong lĩnh vực công nghệ thông tin.
                Mục tiêu của tôi là áp dụng các mô hình kiến trúc chuẩn mực để xây dựng những hệ thống web ổn định,
                bảo mật và có giá trị sử dụng lâu dài cho doanh nghiệp.
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="border-t border-line pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full border border-line flex items-center justify-center shrink-0 mt-0.5 bg-bg">
                  <Check className="w-3 h-3 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-mono-hud text-xs font-bold text-ink uppercase">Học hỏi chủ động</h4>
                  <p className="text-[11px] text-muted leading-tight mt-0.5">Tiếp thu công nghệ mới trong thời gian ngắn</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full border border-line flex items-center justify-center shrink-0 mt-0.5 bg-bg">
                  <Check className="w-3 h-3 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-mono-hud text-xs font-bold text-ink uppercase">Làm việc nhóm</h4>
                  <p className="text-[11px] text-muted leading-tight mt-0.5">Điều phối phân công Git Flow bài bản</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full border border-line flex items-center justify-center shrink-0 mt-0.5 bg-bg">
                  <Check className="w-3 h-3 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-mono-hud text-xs font-bold text-ink uppercase">Tính kỷ luật</h4>
                  <p className="text-[11px] text-muted leading-tight mt-0.5">Cam kết tiến độ và chất lượng mã nguồn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Bento Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Education */}
            <div className="border border-line bg-raised p-5 flex flex-col justify-between hover:border-line-strong transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <GraduationCap className="w-5 h-5 text-ink" />
                  <span className="font-mono-hud text-[10px] text-muted uppercase">2022 — 2026</span>
                </div>
                <h4 className="font-mono-hud text-xs font-bold text-ink uppercase tracking-wider mb-1">
                  ĐH CÔNG NGHỆ ĐỒNG NAI
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Chuyên ngành Công nghệ thông tin (DNTU). Nắm chắc cấu trúc dữ liệu, giải thuật và kiến trúc ứng dụng web.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/60 font-mono-hud text-[10px] text-muted uppercase">
                Khóa 2022 - 2026
              </div>
            </div>

            {/* Card 2: English Language */}
            <div className="border border-line bg-raised p-5 flex flex-col justify-between hover:border-line-strong transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Languages className="w-5 h-5 text-ink" />
                  <span className="font-mono-hud text-[10px] text-muted uppercase">B2 / IELTS 5.5</span>
                </div>
                <h4 className="font-mono-hud text-xs font-bold text-ink uppercase tracking-wider mb-1">
                  TIẾNG ANH CHUYÊN NGÀNH
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Trình độ B2 & IELTS 5.5. Đọc hiểu tài liệu kỹ thuật, API specs quốc tế và giao tiếp công việc linh hoạt.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/60 font-mono-hud text-[10px] text-muted uppercase">
                B2 Level Certified
              </div>
            </div>

            {/* Card 3: Team Lead */}
            <div className="border border-line bg-raised p-5 flex flex-col justify-between hover:border-line-strong transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Users className="w-5 h-5 text-ink" />
                  <span className="font-mono-hud text-[10px] text-muted uppercase">TEAM LEADER</span>
                </div>
                <h4 className="font-mono-hud text-xs font-bold text-ink uppercase tracking-wider mb-1">
                  ĐIỀU PHỐI DỰ ÁN
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Trưởng nhóm dự án DNTU-FORUM (4 thành viên). Phân rã task, review mã nguồn và chuẩn hóa Git workflow.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/60 font-mono-hud text-[10px] text-muted uppercase">
                Team 4 Members
              </div>
            </div>

            {/* Card 4: Multi-Stack */}
            <div className="border border-line bg-raised p-5 flex flex-col justify-between hover:border-line-strong transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Layers className="w-5 h-5 text-ink" />
                  <span className="font-mono-hud text-[10px] text-muted uppercase">DUAL STACK</span>
                </div>
                <h4 className="font-mono-hud text-xs font-bold text-ink uppercase tracking-wider mb-1">
                  .NET & NEXT.JS
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Làm chủ ASP.NET Core MVC (SQL Server) lẫn Fullstack JavaScript (Next.js, TypeScript, Supabase).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/60 font-mono-hud text-[10px] text-muted uppercase">
                Full Lifecycle Dev
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
