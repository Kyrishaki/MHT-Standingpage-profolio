"use client";

import React from "react";
import { GraduationCap, Award, BookOpen, CheckCircle2, Languages, Compass } from "lucide-react";

export function PortfolioEducation() {
  return (
    <section id="education" className="relative border-b border-line bg-bg py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Top Header Bar */}
        <div className="flex items-center justify-between border-b border-line pb-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono-hud text-xs uppercase tracking-widest text-muted">
              04 / TRÌNH ĐỘ HỌC VẤN
            </span>
            <span className="text-line-strong">/</span>
            <span className="font-mono-hud text-xs uppercase tracking-widest text-ink">
              BẰNG CẤP & NGOẠI NGỮ
            </span>
          </div>
          <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted hidden sm:inline">
            ACADEMIC QUALIFICATIONS
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink leading-[1.1]">
            <span className="font-display font-bold">Nền tảng đào tạo chính quy </span>
            <span className="font-editorial italic">và năng lực hội nhập.</span>
          </h2>
        </div>

        {/* 2-Column Academic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: University Degree */}
          <div className="border border-line bg-raised p-6 sm:p-8 flex flex-col justify-between hover:border-line-strong transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 border border-line bg-bg flex items-center justify-center text-ink">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-mono-hud text-xs text-muted uppercase">NIÊN KHÓA 2022 — 2026</span>
              </div>

              <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted block mb-1">
                TRƯỜNG ĐẠI HỌC
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-black text-ink uppercase tracking-tight mb-2">
                Trường Đại học Công Nghệ Đồng Nai
              </h3>
              <div className="font-mono-hud text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-6">
                CHUYÊN NGÀNH: CÔNG NGHỆ THÔNG TIN
              </div>

              <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed mb-6">
                Chương trình đào tạo kỹ sư công nghệ thông tin chú trọng thực hành, trang bị kiến thức chuyên sâu về:
              </p>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-ink">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Giải thuật, cấu trúc dữ liệu và lập trình hướng đối tượng (OOP C++, Java, C#)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-ink">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Hệ quản trị cơ sở dữ liệu quan hệ (RDBMS), tối ưu hóa SQL Server</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-ink">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Quy trình phát triển phần mềm (Agile/Scrum), quản lý dự án và kiểm thử</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-line flex items-center justify-between font-mono-hud text-[10px] text-muted uppercase">
              <span>ĐỒNG NAI (DNTU)</span>
              <span className="text-ink">CHÍNH QUY TẬP TRUNG</span>
            </div>
          </div>

          {/* Card 2: Foreign Language & Certifications */}
          <div className="border border-line bg-raised p-6 sm:p-8 flex flex-col justify-between hover:border-line-strong transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 border border-line bg-bg flex items-center justify-center text-ink">
                  <Languages className="w-5 h-5" />
                </div>
                <span className="font-mono-hud text-xs text-muted uppercase">ENGLISH PROFICIENCY</span>
              </div>

              <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted block mb-1">
                NGOẠI NGỮ
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-black text-ink uppercase tracking-tight mb-2">
                Tiếng Anh Kỹ Thuật
              </h3>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-2 py-0.5 bg-invert-bg text-invert-fg font-mono-hud text-[10px] font-bold">
                  TRÌNH ĐỘ B2
                </span>
                <span className="px-2 py-0.5 border border-line bg-bg font-mono-hud text-[10px] font-bold text-ink">
                  IELTS 5.5
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed mb-6">
                Khả năng ứng dụng tiếng Anh thực tế trong môi trường công nghệ quốc tế:
              </p>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-ink">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Đọc hiểu trôi chảy tài liệu kỹ thuật, API Documentation, RFC và whitepapers</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-ink">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Nghiên cứu các công nghệ web mới, thư viện mã nguồn mở và GitHub issues</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-ink">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Giao tiếp trao đổi chuyên môn, viết tài liệu kỹ thuật và báo cáo công việc</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-line flex items-center justify-between font-mono-hud text-[10px] text-muted uppercase">
              <span>NĂNG LỰC HỘI NHẬP</span>
              <span className="text-ink">B2 / IELTS 5.5 VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
