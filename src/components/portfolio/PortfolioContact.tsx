"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, ExternalLink, Copy, Check, Download, FileText, Send } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function PortfolioContact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="relative border-b border-line bg-bg py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Top Header Bar */}
        <div className="flex items-center justify-between border-b border-line pb-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono-hud text-xs uppercase tracking-widest text-muted">
              06 / THÔNG TIN LIÊN HỆ
            </span>
            <span className="text-line-strong">/</span>
            <span className="font-mono-hud text-xs uppercase tracking-widest text-ink">
              KẾT NỐI TRỰC TIẾP
            </span>
          </div>
          <span className="font-mono-hud text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            AVAILABLE FOR HIRE
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink leading-[1.1]">
            <span className="font-display font-bold">Sẵn sàng đồng hành </span>
            <span className="font-editorial italic">cùng những dự án công nghệ đột phá.</span>
          </h2>
          <p className="mt-4 text-muted text-sm sm:text-base max-w-2xl font-sans">
            Tôi luôn hào hứng đón nhận các cơ hội việc làm Fullstack Developer, dự án phần mềm và cơ hội hợp tác kỹ thuật tại khu vực Đồng Nai, TP.HCM hoặc Remote.
          </p>
        </div>

        {/* 4 Contact Channel Cards (ArtCraft 4-Column Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {/* Card 1: Số điện thoại */}
          <div className="border border-line bg-raised p-6 flex flex-col justify-between hover:border-line-strong transition-colors group">
            <div>
              <div className="w-9 h-9 border border-line bg-bg flex items-center justify-center text-ink mb-4">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted block mb-1">
                ĐIỆN THOẠI TRỰC TIẾP
              </span>
              <a
                href="tel:0865846074"
                className="font-mono-hud text-base font-bold text-ink hover:underline block mb-2"
              >
                0865 846 074
              </a>
              <p className="text-xs text-muted">Sẵn sàng nhận cuộc gọi & Zalo trao đổi công việc</p>
            </div>

            <div className="pt-4 mt-4 border-t border-line flex items-center justify-between">
              <a
                href="tel:0865846074"
                className="font-mono-hud text-[11px] font-bold uppercase text-ink hover:opacity-80"
              >
                Gọi ngay
              </a>
              <button
                onClick={() => copyToClipboard("0865846074", "phone")}
                className="font-mono-hud text-[10px] text-muted hover:text-ink flex items-center gap-1"
              >
                {copiedType === "phone" ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span>Đã sao chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Sao chép</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="border border-line bg-raised p-6 flex flex-col justify-between hover:border-line-strong transition-colors group">
            <div>
              <div className="w-9 h-9 border border-line bg-bg flex items-center justify-center text-ink mb-4">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted block mb-1">
                HỘP THƯ ĐIỆN TỬ
              </span>
              <a
                href="mailto:mhtuan.work@gmail.com"
                className="font-mono-hud text-xs sm:text-sm font-bold text-ink hover:underline block mb-2 break-all"
              >
                mhtuan.work@gmail.com
              </a>
              <p className="text-xs text-muted">Phản hồi thư mời phỏng vấn và trao đổi trong vòng 24h</p>
            </div>

            <div className="pt-4 mt-4 border-t border-line flex items-center justify-between">
              <a
                href="mailto:mhtuan.work@gmail.com"
                className="font-mono-hud text-[11px] font-bold uppercase text-ink hover:opacity-80"
              >
                Gửi email
              </a>
              <button
                onClick={() => copyToClipboard("mhtuan.work@gmail.com", "email")}
                className="font-mono-hud text-[10px] text-muted hover:text-ink flex items-center gap-1"
              >
                {copiedType === "email" ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span>Đã sao chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Sao chép</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: GitHub & Social */}
          <div className="border border-line bg-raised p-6 flex flex-col justify-between hover:border-line-strong transition-colors group">
            <div>
              <div className="w-9 h-9 border border-line bg-bg flex items-center justify-center text-ink mb-4">
                <GithubIcon className="w-4 h-4" />
              </div>
              <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted block mb-1">
                GITHUB / SOCIAL
              </span>
              <a
                href="https://github.com/kyrishaki1105"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-hud text-base font-bold text-ink hover:underline block mb-2"
              >
                @kyrishaki1105
              </a>
              <p className="text-xs text-muted">Kho lưu trữ mã nguồn các dự án cá nhân & thực chiến</p>
            </div>

            <div className="pt-4 mt-4 border-t border-line flex items-center justify-between">
              <a
                href="https://github.com/kyrishaki1105"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-hud text-[11px] font-bold uppercase text-ink hover:opacity-80 flex items-center gap-1"
              >
                <span>Xem GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="font-mono-hud text-[10px] text-muted">PROFILE</span>
            </div>
          </div>

          {/* Card 4: Location */}
          <div className="border border-line bg-raised p-6 flex flex-col justify-between hover:border-line-strong transition-colors group">
            <div>
              <div className="w-9 h-9 border border-line bg-bg flex items-center justify-center text-ink mb-4">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted block mb-1">
                ĐỊA ĐIỂM LÀM VIỆC
              </span>
              <div className="font-mono-hud text-base font-bold text-ink mb-2">
                Biên Hòa, Đồng Nai
              </div>
              <p className="text-xs text-muted">Sẵn sàng làm Onsite tại Đồng Nai, TP.HCM hoặc Remote</p>
            </div>

            <div className="pt-4 mt-4 border-t border-line flex items-center justify-between font-mono-hud text-[10px] text-muted uppercase">
              <span>ĐỒNG NAI / TP.HCM</span>
              <span className="text-ink">10.95°N, 106.84°E</span>
            </div>
          </div>
        </div>

        {/* Big Action Banner */}
        <div className="p-8 sm:p-12 border border-line bg-raised flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="font-mono-hud text-xs font-bold uppercase tracking-widest text-muted mb-2">
              BẢN HỒ SƠ ỨNG TUYỂN
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-ink mb-2">
              Bạn cần hồ sơ CV dạng tài liệu?
            </h3>
            <p className="text-sm text-muted max-w-xl font-sans">
              Tôi có sẵn phiên bản CV tối giản, chuẩn hóa định dạng in ấn và xuất PDF phù hợp cho việc nộp hồ sơ tuyển dụng.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="/cv"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-invert-bg text-invert-fg font-mono-hud font-bold uppercase tracking-[0.12em] text-[11px] shadow-lg hover:opacity-90 transition-opacity"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Chế độ đọc & In CV</span>
            </a>

            <a
              href="mailto:mhtuan.work@gmail.com?subject=Thư%20mời%20phỏng%20vấn%20-%20Mai%20Hoàng%20Tuấn%20(Fullstack%20Developer)"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-line bg-bg text-ink font-mono-hud font-bold uppercase tracking-[0.12em] text-[11px] hover:border-line-strong hover:bg-raised transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Gửi thư mời phỏng vấn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
