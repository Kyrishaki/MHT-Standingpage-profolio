"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, FileText, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function PortfolioFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-line bg-bg py-16 px-4 sm:px-6 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-line">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 border border-line bg-raised flex items-center justify-center font-mono-hud text-[11px] font-bold">
                  MHT
                </div>
                <span className="font-display font-extrabold tracking-tight text-ink text-base">
                  MAI HOÀNG TUẤN
                </span>
              </div>
              <div className="font-mono-hud text-xs text-muted uppercase tracking-widest mb-4">
                LẬP TRÌNH VIÊN FULLSTACK · ĐỒNG NAI (DNTU)
              </div>
              <p className="text-xs text-muted max-w-sm font-sans leading-relaxed">
                Tập trung xây dựng các hệ thống web tin cậy, tối ưu trải nghiệm người dùng và kiên định với các tiêu chuẩn kỹ thuật bền vững.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono-hud text-[10px] uppercase tracking-wider text-muted">
                HỒ SƠ ĐÃ SẴN SÀNG CHO CƠ HỘI VIỆC LÀM MỚI
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2">
            <div className="font-mono-hud text-[10px] uppercase tracking-widest text-muted mb-4 font-bold">
              MỤC LỤC
            </div>
            <ul className="space-y-2.5 font-mono-hud text-xs uppercase">
              <li>
                <a href="#intro" className="text-muted hover:text-ink transition-colors">
                  01 / Giới thiệu
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted hover:text-ink transition-colors">
                  02 / Kỹ năng
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted hover:text-ink transition-colors">
                  03 / Dự án
                </a>
              </li>
              <li>
                <a href="#education" className="text-muted hover:text-ink transition-colors">
                  04 / Học vấn
                </a>
              </li>
              <li>
                <a href="#personality" className="text-muted hover:text-ink transition-colors">
                  05 / Sở thích
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted hover:text-ink transition-colors">
                  06 / Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Projects Column */}
          <div className="md:col-span-2">
            <div className="font-mono-hud text-[10px] uppercase tracking-widest text-muted mb-4 font-bold">
              DỰ ÁN TIÊU BIỂU
            </div>
            <ul className="space-y-2.5 font-mono-hud text-xs uppercase">
              <li>
                <a href="#projects" className="text-muted hover:text-ink transition-colors">
                  DNTU-FORUM
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted hover:text-ink transition-colors">
                  Veg4t WordPress
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted hover:text-ink transition-colors">
                  WEB MVC (.NET)
                </a>
              </li>
            </ul>
          </div>

          {/* Views & Resources */}
          <div className="md:col-span-3">
            <div className="font-mono-hud text-[10px] uppercase tracking-widest text-muted mb-4 font-bold">
              CÁC GÓC NHÌN KHÁC
            </div>
            <ul className="space-y-3 font-mono-hud text-xs">
              <li>
                <Link
                  href="/cv"
                  className="inline-flex items-center gap-1.5 text-ink hover:underline font-bold"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Chế độ đọc CV & In ấn (PDF)</span>
                </Link>
                <p className="text-[10px] text-muted font-sans mt-0.5">
                  Bản rút gọn chuẩn hóa định dạng CV tuyển dụng
                </p>
              </li>
              <li className="pt-2">
                <Link
                  href="/artcraft"
                  className="inline-flex items-center gap-1.5 text-muted hover:text-ink"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>ArtCraft Landing Page Replica</span>
                </Link>
                <p className="text-[10px] text-muted font-sans mt-0.5">
                  Bản phục dựng nguyên mẫu getartcraft.com
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-hud text-[11px] text-muted">
          <div className="flex items-center gap-3">
            <span>© 2026 MAI HOÀNG TUẤN</span>
            <span className="text-line-strong">/</span>
            <span>BIÊN HÒA, ĐỒNG NAI</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              <span>LÊN ĐẦU TRANG</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
