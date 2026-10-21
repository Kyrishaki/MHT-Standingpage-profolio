"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  AtSign,
  Copy,
  Check,
  ExternalLink,
  ArrowUp,
  Heart,
  Sparkles,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cvData } from "@/data/cv-data";
import { GithubIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface ContactFooterProps {
  isRecruiterMode: boolean;
}

export function ContactFooter({ isRecruiterMode }: ContactFooterProps) {
  const { personal } = cvData;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative pt-16 pb-12 px-4 sm:px-6 max-w-6xl mx-auto border-t border-zinc-900"
    >
      {/* Contact Spotlight Hub */}
      <SpotlightCard
        isRecruiterMode={isRecruiterMode}
        className="p-8 sm:p-12 mb-12 border-orange-500/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Message & Invitation */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Sẵn sàng kết nối & hợp tác</span>
            </div>
            <h2
              className={cn(
                "text-2xl sm:text-4xl font-extrabold tracking-tight",
                isRecruiterMode ? "text-slate-900" : "text-white"
              )}
            >
              Cùng thảo luận về cơ hội mới!
            </h2>
            <p
              className={cn(
                "text-sm leading-relaxed max-w-lg",
                isRecruiterMode ? "text-slate-600" : "text-zinc-300"
              )}
            >
              Tôi luôn cởi mở trao đổi về các vị trí Fullstack / Frontend / Backend Developer, dự án phần mềm tiềm năng hoặc các ý tưởng công nghệ đột phá.
            </p>
          </div>

          {/* Right: Contact Cards with One-Click Copy */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Phone */}
            <div
              className={cn(
                "p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between group",
                isRecruiterMode
                  ? "bg-slate-50 border-slate-200 hover:border-slate-300"
                  : "bg-zinc-900/60 border-zinc-800 hover:border-orange-500/40"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Điện thoại</span>
                </div>
                <button
                  onClick={() => handleCopy(personal.phone, "phone")}
                  title="Sao chép số điện thoại"
                  className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                >
                  {copiedField === "phone" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <a
                href={`tel:${personal.phone}`}
                className="text-base font-bold text-white group-hover:text-orange-400 transition-colors font-mono"
              >
                {personal.phone}
              </a>
              <div className="text-[11px] text-zinc-500 mt-1">
                {copiedField === "phone" ? (
                  <span className="text-emerald-400 font-semibold">Đã sao chép vào bộ nhớ đệm!</span>
                ) : (
                  "Bấm để gọi trực tiếp"
                )}
              </div>
            </div>

            {/* Email */}
            <div
              className={cn(
                "p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between group",
                isRecruiterMode
                  ? "bg-slate-50 border-slate-200 hover:border-slate-300"
                  : "bg-zinc-900/60 border-zinc-800 hover:border-orange-500/40"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Email</span>
                </div>
                <button
                  onClick={() => handleCopy(personal.email, "email")}
                  title="Sao chép email"
                  className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                >
                  {copiedField === "email" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors truncate"
              >
                {personal.email}
              </a>
              <div className="text-[11px] text-zinc-500 mt-1">
                {copiedField === "email" ? (
                  <span className="text-emerald-400 font-semibold">Đã sao chép email!</span>
                ) : (
                  "Gửi thư trao đổi công việc"
                )}
              </div>
            </div>

            {/* Social / Handle */}
            <div
              className={cn(
                "p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between group",
                isRecruiterMode
                  ? "bg-slate-50 border-slate-200 hover:border-slate-300"
                  : "bg-zinc-900/60 border-zinc-800 hover:border-orange-500/40"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <AtSign className="w-4 h-4 text-rose-400" />
                  <span>Social Handle</span>
                </div>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="text-base font-bold text-white font-mono">
                {personal.socialHandle}
              </div>
              <div className="text-[11px] text-zinc-500 mt-1">
                GitHub / Telegram / Discord
              </div>
            </div>

            {/* Location */}
            <div
              className={cn(
                "p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between",
                isRecruiterMode
                  ? "bg-slate-50 border-slate-200"
                  : "bg-zinc-900/60 border-zinc-800"
              )}
            >
              <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Khu vực sinh sống</span>
              </div>
              <div className="text-base font-bold text-white">
                {personal.location}
              </div>
              <div className="text-[11px] text-zinc-500 mt-1">
                Làm việc trực tiếp hoặc Remote
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>

      {/* Footer Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 no-print">
        <div className="flex items-center gap-2">
          <span>© 2026 {personal.fullName}.</span>
          <span>•</span>
          <span>Thiết kế phong cách ArtCraft</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-orange-400 transition-colors flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 hover:border-zinc-700"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
