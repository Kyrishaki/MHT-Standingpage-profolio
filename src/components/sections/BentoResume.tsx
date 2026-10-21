"use client";

import React from "react";
import {
  GraduationCap,
  Award,
  Globe,
  Code2,
  Cpu,
  Layers,
  Heart,
  Activity,
  Camera,
  CheckCircle2,
  Sparkles,
  Terminal,
  ShieldCheck,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cvData } from "@/data/cv-data";
import { cn } from "@/lib/utils";

interface BentoResumeProps {
  isRecruiterMode: boolean;
}

const hobbyIcons: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5 text-orange-400" />,
  Code2: <Code2 className="w-5 h-5 text-amber-400" />,
  Camera: <Camera className="w-5 h-5 text-rose-400" />,
};

export function BentoResume({ isRecruiterMode }: BentoResumeProps) {
  const { education, skills, hobbies } = cvData;

  return (
    <section
      id="bento"
      className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto space-y-8"
    >
      {/* Section Header */}
      <div className="text-center sm:text-left max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-2">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span>Hồ sơ năng lực tổng thể</span>
        </div>
        <h2
          className={cn(
            "text-3xl sm:text-4xl font-extrabold tracking-tight",
            isRecruiterMode ? "text-slate-900" : "text-white"
          )}
        >
          Học Vấn, Kỹ Năng & Sở Thích
        </h2>
        <p
          className={cn(
            "text-sm mt-1",
            isRecruiterMode ? "text-slate-600" : "text-zinc-400"
          )}
        >
          Cấu trúc năng lực chuẩn hóa kết hợp giữa nền tảng học thuật đại học và khả năng áp dụng công nghệ thực tế.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Card 1: Trình độ học vấn (Span 7 cols) */}
        <SpotlightCard
          isRecruiterMode={isRecruiterMode}
          className="md:col-span-7 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                    Trình độ học vấn
                  </div>
                  <h3
                    className={cn(
                      "text-lg sm:text-xl font-bold",
                      isRecruiterMode ? "text-slate-900" : "text-white"
                    )}
                  >
                    {education.institution}
                  </h3>
                </div>
              </div>

              <span
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-mono font-medium border",
                  isRecruiterMode
                    ? "bg-slate-100 border-slate-200 text-slate-700"
                    : "bg-zinc-900 border-zinc-800 text-zinc-300"
                )}
              >
                {education.period}
              </span>
            </div>

            {/* Degree & Major */}
            <div className="space-y-3 mt-4">
              <div
                className={cn(
                  "p-3.5 rounded-2xl border flex items-center justify-between",
                  isRecruiterMode
                    ? "bg-slate-50 border-slate-200"
                    : "bg-zinc-900/60 border-zinc-800/80"
                )}
              >
                <div>
                  <div className="text-xs text-zinc-500">Chuyên ngành đào tạo</div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {education.major}
                  </div>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  {education.degree}
                </span>
              </div>

              {/* Language Proficiency B2 */}
              <div
                className={cn(
                  "p-3.5 rounded-2xl border flex items-center gap-3",
                  isRecruiterMode
                    ? "bg-slate-50 border-slate-200"
                    : "bg-zinc-900/60 border-zinc-800/80"
                )}
              >
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500">Ngoại ngữ chuyên môn</div>
                  <div className="text-sm font-semibold text-amber-300">
                    {education.languageProficiency}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "mt-5 pt-3 border-t text-xs flex items-center gap-2",
              isRecruiterMode
                ? "border-slate-200 text-slate-500"
                : "border-zinc-800/80 text-zinc-400"
            )}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{education.notes}</span>
          </div>
        </SpotlightCard>

        {/* Card 2: Giá trị nghề nghiệp & Tác phong làm việc (Span 5 cols) */}
        <SpotlightCard
          isRecruiterMode={isRecruiterMode}
          className="md:col-span-5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Tác phong & Văn hoá
                </div>
                <h3
                  className={cn(
                    "text-lg font-bold",
                    isRecruiterMode ? "text-slate-900" : "text-white"
                  )}
                >
                  Kỷ Luật & Trách Nhiệm
                </h3>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                <span className={cn(isRecruiterMode ? "text-slate-700" : "text-zinc-300")}>
                  Khả năng <strong>làm việc nhóm</strong> và <strong>điều phối dự án quy mô nhỏ</strong> hiệu quả.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <span className={cn(isRecruiterMode ? "text-slate-700" : "text-zinc-300")}>
                  Chủ động học hỏi công nghệ mới, thích nghi nhanh với các ngăn xếp công nghệ đa dạng.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                <span className={cn(isRecruiterMode ? "text-slate-700" : "text-zinc-300")}>
                  Tư duy giải quyết vấn đề linh hoạt, tập trung vào sự phát triển bền vững của sản phẩm.
                </span>
              </li>
            </ul>
          </div>

          <div
            className={cn(
              "mt-5 p-3 rounded-xl border text-xs font-medium",
              isRecruiterMode
                ? "bg-slate-100 border-slate-200 text-slate-800"
                : "bg-orange-500/10 border-orange-500/20 text-orange-300"
            )}
          >
            "Chú trọng chất lượng sản phẩm & cam kết hiệu quả công việc cao nhất."
          </div>
        </SpotlightCard>

        {/* Card 3: Ngôn ngữ lập trình (Span 6 cols) */}
        <SpotlightCard
          isRecruiterMode={isRecruiterMode}
          className="md:col-span-6"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                Kỹ năng chuyên môn
              </div>
              <h3
                className={cn(
                  "text-lg font-bold",
                  isRecruiterMode ? "text-slate-900" : "text-white"
                )}
              >
                Ngôn ngữ lập trình
              </h3>
            </div>
          </div>

          <p
            className={cn(
              "text-xs mb-4 leading-relaxed",
              isRecruiterMode ? "text-slate-600" : "text-zinc-400"
            )}
          >
            Được đào tạo bài bản từ các ngôn ngữ lập trình hướng đối tượng, quản lý bộ nhớ đến các ngôn ngữ web hiện đại:
          </p>

          <div className="flex flex-wrap gap-2">
            {skills.languages.map((lang, idx) => (
              <div
                key={idx}
                className={cn(
                  "px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 flex items-center gap-2",
                  isRecruiterMode
                    ? "bg-white border-slate-300 text-slate-800 shadow-sm"
                    : "bg-zinc-900/80 border-zinc-700/80 text-zinc-200 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-300"
                )}
              >
                <Code2 className="w-3.5 h-3.5 text-orange-400" />
                <span>{lang}</span>
              </div>
            ))}
          </div>
        </SpotlightCard>

        {/* Card 4: Frameworks & Công nghệ (Span 6 cols) */}
        <SpotlightCard
          isRecruiterMode={isRecruiterMode}
          className="md:col-span-6"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Kỹ năng chuyên môn
              </div>
              <h3
                className={cn(
                  "text-lg font-bold",
                  isRecruiterMode ? "text-slate-900" : "text-white"
                )}
              >
                Frameworks & Công nghệ
              </h3>
            </div>
          </div>

          <p
            className={cn(
              "text-xs mb-4 leading-relaxed",
              isRecruiterMode ? "text-slate-600" : "text-zinc-400"
            )}
          >
            Kinh nghiệm thực chiến triển khai ứng dụng web phân tán, di động đa nền tảng và kiến trúc Backend hiện đại:
          </p>

          <div className="flex flex-wrap gap-2">
            {skills.frameworksAndTools.map((framework, idx) => (
              <div
                key={idx}
                className={cn(
                  "px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 flex items-center gap-2",
                  isRecruiterMode
                    ? "bg-white border-slate-300 text-slate-800 shadow-sm"
                    : "bg-zinc-900/80 border-zinc-700/80 text-zinc-200 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-300"
                )}
              >
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>{framework}</span>
              </div>
            ))}
          </div>
        </SpotlightCard>

        {/* Card 5: Sở thích cá nhân (Span 12 cols, 3 interactive sub-cards) */}
        <div className="md:col-span-12">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                Đời sống & Cân bằng
              </div>
              <h3
                className={cn(
                  "text-lg font-bold",
                  isRecruiterMode ? "text-slate-900" : "text-white"
                )}
              >
                Sở Thích Cá Nhân
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {hobbies.map((hobby, idx) => (
              <SpotlightCard
                key={idx}
                isRecruiterMode={isRecruiterMode}
                className="p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={cn(
                        "text-base font-bold",
                        isRecruiterMode ? "text-slate-900" : "text-white"
                      )}
                    >
                      {hobby.name}
                    </span>
                    <div className="p-2 rounded-xl bg-zinc-900/90 border border-zinc-800">
                      {hobbyIcons[hobby.iconName]}
                    </div>
                  </div>
                  <p
                    className={cn(
                      "text-xs leading-relaxed",
                      isRecruiterMode ? "text-slate-600" : "text-zinc-400"
                    )}
                  >
                    {hobby.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center gap-1.5 text-[11px] text-zinc-500 font-mono">
                  <Sparkles className="w-3 h-3 text-orange-400" />
                  <span>Cân bằng công việc & đam mê</span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
