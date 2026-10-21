"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Calendar,
  Layers,
  Sparkles,
  MessageSquare,
  ShoppingBag,
  Home,
  Bus,
  Users,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { ProjectDetail } from "@/data/cv-data";
import { GithubIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface ProjectDrawerProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
  isRecruiterMode?: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-5 h-5 text-orange-400" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-amber-400" />,
  Home: <Home className="w-5 h-5 text-rose-400" />,
  Bus: <Bus className="w-5 h-5 text-blue-400" />,
  Users: <Users className="w-5 h-5 text-emerald-400" />,
};

export function ProjectDrawer({
  project,
  isOpen,
  onClose,
  isRecruiterMode = false,
}: ProjectDrawerProps) {
  // Close on ESC key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto no-print">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal / Drawer Container */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className={cn(
              "relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-auto",
              isRecruiterMode
                ? "bg-white text-slate-900 border border-slate-200"
                : "bg-zinc-950/95 text-zinc-100 border border-zinc-800 backdrop-blur-2xl"
            )}
          >
            {/* Header / Banner */}
            <div className="relative w-full h-48 sm:h-64 overflow-hidden border-b border-zinc-800/80 bg-zinc-900 flex-shrink-0">
              <Image
                src="/dntu-forum-preview.png"
                alt={project.title}
                fill
                priority
                className="object-cover object-top opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Đóng chi tiết dự án"
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 border border-white/10 z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Badge on top of image */}
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/40 backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    {project.highlight}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 backdrop-blur-md">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.period}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
                  {project.title}
                  <span className="text-sm font-normal text-orange-300 bg-orange-950/60 px-3 py-0.5 rounded-full border border-orange-500/30">
                    {project.role}
                  </span>
                </h2>
              </div>
            </div>

            {/* Scrollable Body Content */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
              {/* Actions Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-orange-500/10 border border-orange-500/25">
                <div>
                  <h4 className="text-sm font-semibold text-orange-400">
                    Sản phẩm thực tế đã triển khai
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Hệ thống đang hoạt động trên nền tảng Vercel Cloud
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-zinc-700 bg-zinc-900/80 text-zinc-200 hover:bg-zinc-800 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      GitHub Profile
                    </a>
                  )}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-amber-600 transition-all hover:scale-105"
                  >
                    <span>Truy cập DNTU-FORUM</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Stats overview */}
              {project.stats && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.stats.map((stat, i) => (
                    <div
                      key={i}
                      className={cn(
                        "p-4 rounded-2xl border text-center transition-all",
                        isRecruiterMode
                          ? "bg-slate-50 border-slate-200"
                          : "bg-zinc-900/50 border-zinc-800/80"
                      )}
                    >
                      <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-zinc-400 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Detailed Description */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-400" />
                  Tổng quan kiến trúc & Mục tiêu giải pháp
                </h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed",
                    isRecruiterMode ? "text-slate-600" : "text-zinc-300"
                  )}
                >
                  {project.description}
                </p>
              </div>

              {/* 5 Core Feature Modules */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-400" />
                  5 Phân hệ tính năng cốt lõi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "p-4 rounded-2xl border transition-all duration-200",
                        isRecruiterMode
                          ? "bg-slate-50/80 border-slate-200 hover:border-slate-300"
                          : "bg-zinc-900/60 border-zinc-800 hover:border-orange-500/40 hover:bg-zinc-900/90"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 flex-shrink-0 mt-0.5">
                          {iconMap[feature.icon] || (
                            <CheckCircle2 className="w-5 h-5 text-orange-400" />
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-1">
                            {feature.title}
                          </h4>
                          <p
                            className={cn(
                              "text-xs leading-relaxed",
                              isRecruiterMode
                                ? "text-slate-600"
                                : "text-zinc-400"
                            )}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Detailed */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  Công nghệ sử dụng (Tech Stack)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.techStack.map((stack, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "p-4 rounded-2xl border",
                        isRecruiterMode
                          ? "bg-slate-50 border-slate-200"
                          : "bg-zinc-900/40 border-zinc-800"
                      )}
                    >
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-orange-400 mb-2">
                        {stack.category}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {stack.items.map((tech, tidx) => (
                          <span
                            key={tidx}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-800/80 border border-zinc-700/60 text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Modal Footer */}
            <div
              className={cn(
                "p-4 sm:p-5 border-t flex items-center justify-between flex-shrink-0",
                isRecruiterMode
                  ? "bg-slate-50 border-slate-200"
                  : "bg-zinc-950 border-zinc-800"
              )}
            >
              <div className="text-xs text-zinc-400">
                Demo trực tiếp:{" "}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:underline font-medium"
                >
                  {project.demoUrl}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs font-medium border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-colors"
                >
                  Đóng
                </button>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white transition-colors"
                >
                  <span>Mở Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
