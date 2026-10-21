"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  Moon,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  Menu,
  X,
  Copy,
  Check,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { cvData } from "@/data/cv-data";

export default function PortfolioPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("mht-theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("mht-theme", nextTheme);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const { personal, education, skills, projects, hobbies } = cvData;

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-200">
      {/* ==================== 1. TOP NAVBAR ==================== */}
      <header className="sticky top-0 z-50 w-full bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--line-light)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="#top" className="flex items-center gap-2 group">
            <span className="font-display font-black text-xl tracking-tight text-[var(--text-primary)]">
              MAI HOÀNG TUẤN
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[var(--cv-red)]" />
            <span className="hidden sm:inline-block text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">
              Fullstack Developer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--text-secondary)]">
            <a href="#about" className="hover:text-[var(--cv-red)] transition-colors">
              Giới thiệu
            </a>
            <a href="#skills" className="hover:text-[var(--cv-red)] transition-colors">
              Kỹ năng
            </a>
            <a href="#experience" className="hover:text-[var(--cv-red)] transition-colors">
              Kinh nghiệm
            </a>
            <a href="#education" className="hover:text-[var(--cv-red)] transition-colors">
              Học vấn
            </a>
            <a href="#personality" className="hover:text-[var(--cv-red)] transition-colors">
              Tính cách
            </a>
            <a href="#contact" className="hover:text-[var(--cv-red)] transition-colors">
              Liên hệ
            </a>
          </nav>

          {/* Actions: Theme Toggle & Direct Contact */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Chuyển chế độ sáng/tối"
              className="w-9 h-9 rounded-lg border border-[var(--line)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)] transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-[var(--cv-red)] text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Liên hệ ngay
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-lg border border-[var(--line)] flex items-center justify-center"
              aria-label="Mở menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-[var(--line)] bg-[var(--bg-card)] px-6 py-4 flex flex-col gap-3.5 text-sm font-medium">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--cv-red)]"
            >
              Giới thiệu
            </a>
            <a
              href="#skills"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--cv-red)]"
            >
              Kỹ năng công việc
            </a>
            <a
              href="#experience"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--cv-red)]"
            >
              Kinh nghiệm làm việc
            </a>
            <a
              href="#education"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--cv-red)]"
            >
              Trình độ học vấn
            </a>
            <a
              href="#personality"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--cv-red)]"
            >
              Sở thích / Tính cách
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 text-[var(--cv-red)] font-bold"
            >
              Thông tin liên hệ
            </a>
          </div>
        )}
      </header>

      <main id="top" className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12 sm:space-y-16">
        {/* ==================== 2. HEADER & GIỚI THIỆU (TOP SECTION) ==================== */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Candidate Info & Bio */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Main Name */}
            <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-[var(--text-primary)] uppercase mb-2">
              MAI HOÀNG TUẤN
            </h1>

            {/* Subtitle */}
            <div className="font-display text-lg sm:text-xl font-bold tracking-wide text-[var(--text-secondary)] uppercase mb-6">
              LẬP TRÌNH VIÊN FULLSTACK
            </div>

            {/* GIỚI THIỆU Heading */}
            <div className="mb-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-[var(--cv-red)]">
                GIỚI THIỆU
              </h2>
            </div>

            {/* Exact CV Paragraph */}
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 text-justify">
              Là một Fullstack Developer đam mê công nghệ, tôi luôn chủ động học hỏi, thích nghi
              nhanh và không ngừng nâng cao kỹ năng chuyên môn. Tôi có khả năng làm việc nhóm,
              điều phối các dự án quy mô nhỏ và giải quyết vấn đề một cách linh hoạt. Với tinh thần trách
              nhiệm và tính kỷ luật cao, tôi chú trọng chất lượng sản phẩm, hiệu quả công việc và sự
              phát triển bền vững trong lĩnh vực công nghệ thông tin.
            </p>

            {/* Quick Contact & Coordinates Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="tel:0865846074"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[var(--bg-card)] text-xs font-semibold hover:border-[var(--cv-red)] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--cv-red)]" />
                <span>0865 846 074</span>
              </a>

              <a
                href="mailto:mhtuan.work@gmail.com"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[var(--bg-card)] text-xs font-semibold hover:border-[var(--cv-red)] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--cv-red)]" />
                <span>mhtuan.work@gmail.com</span>
              </a>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[var(--bg-card)] text-xs text-[var(--text-secondary)]">
                <MapPin className="w-3.5 h-3.5 text-[var(--cv-red)]" />
                <span>Biên Hòa, Đồng Nai</span>
              </span>

              <a
                href="https://github.com/Kyrishaki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[var(--bg-card)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>@Kyrishaki</span>
                <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
              </a>
            </div>
          </div>

          {/* Right: Portrait with the authentic CV orange/coral halo arch */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 aspect-[395/575]">
              {/* Warm Orange-Coral Circle Halo Background from CV */}
              <div
                className="absolute inset-x-2 top-4 bottom-8 rounded-full opacity-90"
                style={{
                  background: "radial-gradient(circle at 60% 40%, #f97316 0%, #ea580c 60%, #c2410c 100%)",
                }}
              />

              {/* Photo with rounded rectangular border outline */}
              <div className="relative z-10 w-full h-full rounded-3xl border-2 border-[var(--line)] bg-transparent overflow-hidden shadow-lg">
                <Image
                  src="/avatar.jpg"
                  alt="Mai Hoàng Tuấn - Fullstack Developer"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 3. KỸ NĂNG CÔNG VIỆC ==================== */}
        <section id="skills" className="rounded-2xl border-2 border-[var(--line)] bg-[var(--bg-card)] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Title column */}
            <div className="md:col-span-3">
              <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide text-[var(--cv-red)] leading-tight">
                KỸ NĂNG<br className="hidden sm:inline" /> CÔNG VIỆC
              </h2>
            </div>

            {/* 3 Categories columns */}
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* 1. Ngôn ngữ lập trình */}
              <div>
                <h3 className="font-display font-bold text-sm text-[var(--cv-coral)] uppercase tracking-wider mb-3">
                  Ngôn ngữ lập trình
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#1e40af]">
                    C++
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#2563eb]">
                    C#
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#dc2626]">
                    Java
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#ea580c]">
                    HTML
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#0284c7]">
                    CSS
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#0f172a]">
                    JS/TS
                  </span>
                </div>
              </div>

              {/* 2. Database */}
              <div>
                <h3 className="font-display font-bold text-sm text-[var(--cv-coral)] uppercase tracking-wider mb-3">
                  Database
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0891b2] shadow-sm">
                    SQL Server
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#0f172a]">
                    Supabase
                  </span>
                </div>
              </div>

              {/* 3. Công nghệ */}
              <div>
                <h3 className="font-display font-bold text-sm text-[var(--cv-coral)] uppercase tracking-wider mb-3">
                  Công nghệ
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#b91c1c]">
                    ASP.NET Core
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#c2410c]">
                    Next.js / React
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#1e3a8a]">
                    Bootstrap 4/5
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#0284c7]">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 4. MAIN 2-COLUMN BODY (AS IN PDF CV) ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT COLUMN: Học vấn, Sở thích/Tính cách, Liên hệ */}
          <div className="lg:col-span-5 space-y-8">
            {/* BOX 1: TRÌNH ĐỘ HỌC VẤN */}
            <div className="rounded-2xl border-2 border-[var(--line)] bg-[var(--bg-card)] p-6 shadow-sm">
              <h2 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider text-[var(--cv-red)] mb-4">
                TRÌNH ĐỘ HỌC VẤN
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-[var(--text-primary)]">
                    Trường Đại học Công Nghệ Đồng Nai
                  </h3>
                  <div className="text-xs text-[var(--text-muted)] font-medium mt-0.5">
                    2022 - 2026
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1 font-semibold">
                    Công nghệ thông tin
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--line-light)]">
                  <div className="font-bold text-xs uppercase tracking-wider text-[var(--text-primary)] mb-1">
                    TIẾNG ANH
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                    <span className="px-2.5 py-0.5 rounded bg-[var(--bg-raised)] font-semibold text-[var(--text-primary)] border border-[var(--line-light)]">
                      Trình độ B2
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-[var(--bg-raised)] font-semibold text-[var(--text-primary)] border border-[var(--line-light)]">
                      IELTS 5.5
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* BOX 2: SỞ THÍCH / TÍNH CÁCH */}
            <div className="rounded-2xl border-2 border-[var(--line)] bg-[var(--bg-card)] p-6 shadow-sm">
              <h2 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider text-[var(--cv-red)] mb-4">
                SỞ THÍCH / TÍNH CÁCH
              </h2>

              <div className="grid grid-cols-2 gap-3 text-xs font-bold text-[var(--text-primary)]">
                {/* Column 1: Sở thích */}
                <div className="space-y-2.5 border-r border-[var(--line-light)] pr-3">
                  <div className="text-[10px] uppercase font-semibold text-[var(--cv-coral)] tracking-wider">
                    SỞ THÍCH
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-[var(--bg-raised)] border border-[var(--line-light)]">
                    CẦU LÔNG
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-[var(--bg-raised)] border border-[var(--line-light)]">
                    LẬP TRÌNH
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-[var(--bg-raised)] border border-[var(--line-light)]">
                    CHỤP ẢNH
                  </div>
                </div>

                {/* Column 2: Tính cách */}
                <div className="space-y-2.5 pl-1">
                  <div className="text-[10px] uppercase font-semibold text-[var(--cv-coral)] tracking-wider">
                    TÍNH CÁCH
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-[var(--bg-raised)] border border-[var(--line-light)]">
                    LÀM VIỆC NHÓM
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-[var(--bg-raised)] border border-[var(--line-light)]">
                    NĂNG ĐỘNG
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-[var(--bg-raised)] border border-[var(--line-light)]">
                    TƯ DUY SÂU
                  </div>
                </div>
              </div>
            </div>

            {/* BOX 3: THÔNG TIN LIÊN HỆ */}
            <div id="contact" className="rounded-2xl border-2 border-[var(--line)] bg-[var(--bg-card)] p-6 shadow-sm">
              <h2 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider text-[var(--cv-red)] mb-4">
                THÔNG TIN LIÊN HỆ
              </h2>

              <div className="space-y-3.5 text-xs sm:text-sm">
                {/* Phone */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[var(--cv-red)] shrink-0" />
                    <a
                      href="tel:0865846074"
                      className="font-semibold text-[var(--text-primary)] hover:underline"
                    >
                      0865846074
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard("0865846074", "phone")}
                    className="text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1"
                  >
                    {copiedType === "phone" ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedType === "phone" ? "Đã chép" : "Sao chép"}</span>
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[var(--cv-red)] shrink-0" />
                    <a
                      href="mailto:mhtuan.work@gmail.com"
                      className="font-semibold text-[var(--text-primary)] hover:underline break-all"
                    >
                      mhtuan.work@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard("mhtuan.work@gmail.com", "email")}
                    className="text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1 shrink-0"
                  >
                    {copiedType === "email" ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedType === "email" ? "Đã chép" : "Sao chép"}</span>
                  </button>
                </div>

                {/* GitHub */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[var(--cv-red)] shrink-0" />
                    <a
                      href="https://github.com/Kyrishaki"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[var(--text-primary)] hover:underline flex items-center gap-1"
                    >
                      <span>@Kyrishaki</span>
                      <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
                    </a>
                  </div>
                  <span className="text-[11px] text-[var(--text-muted)]">GitHub</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2.5 pt-1">
                  <MapPin className="w-4 h-4 text-[var(--cv-red)] shrink-0" />
                  <span className="text-[var(--text-secondary)] font-medium">
                    Biên Hòa, Đồng Nai
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: KINH NGHIỆM LÀM VIỆC */}
          <div id="experience" className="lg:col-span-7">
            <div className="rounded-2xl border-2 border-[var(--line)] bg-[var(--bg-card)] p-6 sm:p-8 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wider text-[var(--cv-red)] mb-8">
                  KINH NGHIỆM LÀM VIỆC
                </h2>

                <div className="space-y-8">
                  {/* PROJECT 1: DNTU-FORUM */}
                  <div className="pb-8 border-b border-[var(--line-light)]">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-black text-xl text-[var(--text-primary)] uppercase">
                          DNTU-FORUM
                        </h3>
                        <a
                          href="https://dntu-forum.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-[var(--bg-raised)] text-[var(--cv-red)] hover:underline"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <span className="text-xs font-semibold text-[var(--text-muted)]">
                        09/2026 - 11/2026
                      </span>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-wider text-[#0891b2] mb-3">
                      Fullstack
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed text-justify mb-4">
                      Team Lead & Fullstack Developer (Nhóm 4 thành viên). Xây dựng nền tảng diễn đàn sinh
                      viên tích hợp hỏi đáp, trao đổi đồ cũ và tìm phòng trọ bằng Next.js, Supabase. Điều phối
                      phân chia task và quản lý mã nguồn qua Git.
                    </p>

                    {/* DNTU-FORUM Preview Image */}
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-[var(--line-light)] mb-3 bg-slate-100 dark:bg-slate-800 shadow-sm group">
                      <Image
                        src="/dntu-forum-preview.png"
                        alt="Giao diện thực tế diễn đàn sinh viên DNTU-FORUM"
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 650px"
                      />
                    </div>


                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Git Flow"].map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-[var(--bg-raised)] text-[var(--text-secondary)] border border-[var(--line-light)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* PROJECT 2: Veg4t */}
                  <div className="pb-8 border-b border-[var(--line-light)]">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-display font-black text-xl text-[var(--text-primary)] uppercase">
                        Veg4t
                      </h3>
                      <span className="text-xs font-semibold text-[var(--text-muted)]">
                        09/2026 - 11/2026
                      </span>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-wider text-[#0891b2] mb-3">
                      Wordpress
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed text-justify mb-3">
                      Thiết kế, tùy biến giao diện (Theme/Plugin) và quản trị nội dung website thương mại/tin tức
                      trên nền tảng WordPress, tối ưu hiển thị chuẩn SEO.
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {["WordPress", "PHP", "MySQL", "WooCommerce", "SEO Optimization"].map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-[var(--bg-raised)] text-[var(--text-secondary)] border border-[var(--line-light)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* PROJECT 3: WEB MVC */}
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-black text-xl text-[var(--text-primary)] uppercase">
                          WEB MVC
                        </h3>
                        <span className="px-2 py-0.5 rounded bg-[var(--cv-red)]/10 text-[var(--cv-red)] text-[10px] font-bold">
                          ĐIỂM 8/10
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-[var(--text-muted)]">
                        08/2025 - 11/2025
                      </span>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-wider text-[#0891b2] mb-3">
                      Fullstack
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed text-justify mb-3">
                      Phát triển ứng dụng web theo kiến trúc ASP.NET Core MVC & SQL Server. Thiết kế cơ
                      sở dữ liệu, xây dựng chức năng phân quyền và CRUD hoàn chỉnh.
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {["ASP.NET Core MVC", "C#", "SQL Server", "Entity Framework", "Bootstrap"].map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-[var(--bg-raised)] text-[var(--text-secondary)] border border-[var(--line-light)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ==================== 5. FOOTER ==================== */}
      <footer className="border-t border-[var(--line-light)] bg-[var(--bg-card)] mt-20 py-8 px-4 text-center text-xs text-[var(--text-muted)]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong className="text-[var(--text-primary)]">MAI HOÀNG TUẤN</strong> · Lập trình viên Fullstack
          </div>
          <div>
            Trường Đại học Công Nghệ Đồng Nai (2022 - 2026) · Biên Hòa, Đồng Nai
          </div>
        </div>
      </footer>
    </div>
  );
}
