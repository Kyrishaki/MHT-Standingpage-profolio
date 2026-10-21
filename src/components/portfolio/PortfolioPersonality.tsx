"use client";

import React from "react";
import { Users, Zap, Brain, Activity, Code2, Camera, Heart, Sparkles } from "lucide-react";

export function PortfolioPersonality() {
  return (
    <section id="personality" className="relative border-b border-line bg-bg py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Top Header Bar */}
        <div className="flex items-center justify-between border-b border-line pb-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono-hud text-xs uppercase tracking-widest text-muted">
              05 / SỞ THÍCH & TÍNH CÁCH
            </span>
            <span className="text-line-strong">/</span>
            <span className="font-mono-hud text-xs uppercase tracking-widest text-ink">
              TỐ CHẤT & LỐI SỐNG
            </span>
          </div>
          <span className="font-mono-hud text-[10px] uppercase tracking-widest text-muted hidden sm:inline">
            PERSONAL ATTRIBUTES
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink leading-[1.1]">
            <span className="font-display font-bold">Cân bằng giữa tư duy chiều sâu </span>
            <span className="font-editorial italic">và năng lượng tích cực.</span>
          </h2>
        </div>

        {/* 2 Main Blocks: Personality (Tính cách) and Hobbies (Sở thích) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Block 1: Tính cách (Soft Skills & Persona) */}
          <div className="border border-line bg-raised p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-hud text-xs font-bold uppercase tracking-widest text-ink flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  <span>TÍNH CÁCH ĐẶC TRƯNG</span>
                </span>
                <span className="font-mono-hud text-[10px] text-muted uppercase">3 PHẨM CHẤT LÕI</span>
              </div>

              <div className="space-y-4">
                {/* 1. Làm việc nhóm */}
                <div className="p-4 border border-line bg-bg hover:border-line-strong transition-colors">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-full border border-line flex items-center justify-center bg-raised text-ink">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-mono-hud text-sm font-bold text-ink uppercase tracking-wide">
                        LÀM VIỆC NHÓM (TEAM PLAYER)
                      </h4>
                      <span className="font-mono-hud text-[10px] text-emerald-600 dark:text-emerald-400">
                        ĐÃ THỰC CHIẾN QUA DỰ ÁN DNTU-FORUM
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pl-11">
                    Lắng nghe tích cực, hòa đồng và sẵn sàng hỗ trợ các thành viên khác. Biết cách điều phối công việc linh hoạt để nhóm đạt được tiến độ và mục tiêu chung.
                  </p>
                </div>

                {/* 2. Năng động */}
                <div className="p-4 border border-line bg-bg hover:border-line-strong transition-colors">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-full border border-line flex items-center justify-center bg-raised text-ink">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-mono-hud text-sm font-bold text-ink uppercase tracking-wide">
                        NĂNG ĐỘNG (PROACTIVE)
                      </h4>
                      <span className="font-mono-hud text-[10px] text-emerald-600 dark:text-emerald-400">
                        CHỦ ĐỘNG HỌC HỎI CÔNG NGHỆ MỚI
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pl-11">
                    Nhiệt huyết, sẵn sàng đón nhận thử thách và không ngại tiếp cận các giải pháp công nghệ chưa từng làm qua để tìm ra hướng đi tối ưu nhất.
                  </p>
                </div>

                {/* 3. Tư duy sâu */}
                <div className="p-4 border border-line bg-bg hover:border-line-strong transition-colors">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-full border border-line flex items-center justify-center bg-raised text-ink">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-mono-hud text-sm font-bold text-ink uppercase tracking-wide">
                        TƯ DUY SÂU (ANALYTICAL THINKING)
                      </h4>
                      <span className="font-mono-hud text-[10px] text-emerald-600 dark:text-emerald-400">
                        PHÂN TÍCH BẢN CHẤT HỆ THỐNG
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pl-11">
                    Nhìn nhận vấn đề ở chiều sâu bản chất, chú trọng cấu trúc dữ liệu, tính bền vững của mã nguồn và tính khả mở của kiến trúc hệ thống.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line font-mono-hud text-[10px] text-muted uppercase flex items-center justify-between">
              <span>ĐẠO ĐỨC NGHỀ NGHIỆP</span>
              <span className="text-ink">TRÁCH NHIỆM & KỶ LUẬT</span>
            </div>
          </div>

          {/* Block 2: Sở thích (Hobbies & Passions) */}
          <div className="border border-line bg-raised p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-hud text-xs font-bold uppercase tracking-widest text-ink flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>SỞ THÍCH CÁ NHÂN</span>
                </span>
                <span className="font-mono-hud text-[10px] text-muted uppercase">3 NIỀM ĐAM MÊ</span>
              </div>

              <div className="space-y-4">
                {/* 1. Cầu lông */}
                <div className="p-4 border border-line bg-bg hover:border-line-strong transition-colors">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-full border border-line flex items-center justify-center bg-raised text-ink">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-mono-hud text-sm font-bold text-ink uppercase tracking-wide">
                        CẦU LÔNG (BADMINTON)
                      </h4>
                      <span className="font-mono-hud text-[10px] text-muted">
                        THỂ LỰC & PHẢN XẠ NHANH
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pl-11">
                    Rèn luyện thể lực bền bỉ, phản xạ tình huống chớp nhoáng và duy trì tinh thần sảng khoái sau những giờ làm việc tập trung cao độ.
                  </p>
                </div>

                {/* 2. Lập trình */}
                <div className="p-4 border border-line bg-bg hover:border-line-strong transition-colors">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-full border border-line flex items-center justify-center bg-raised text-ink">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-mono-hud text-sm font-bold text-ink uppercase tracking-wide">
                        LẬP TRÌNH (CODING)
                      </h4>
                      <span className="font-mono-hud text-[10px] text-muted">
                        SÁNG TẠO SẢN PHẨM SỐ
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pl-11">
                    Thích tìm tòi các kỹ thuật mới, viết những dòng code sạch sẽ và biến các ý tưởng trên giấy thành sản phẩm chạy mượt mà trên môi trường thực.
                  </p>
                </div>

                {/* 3. Chụp ảnh */}
                <div className="p-4 border border-line bg-bg hover:border-line-strong transition-colors">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-full border border-line flex items-center justify-center bg-raised text-ink">
                      <Camera className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-mono-hud text-sm font-bold text-ink uppercase tracking-wide">
                        CHỤP ẢNH (PHOTOGRAPHY)
                      </h4>
                      <span className="font-mono-hud text-[10px] text-muted">
                        GÓC NHÌN BỐ CỤC & ÁNH SÁNG
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pl-11">
                    Quan sát tỉ mỉ, trau dồi cảm nhận về thị giác, sự hài hòa của màu sắc và trật tự bố cục — hỗ trợ rất lớn cho tư duy thiết kế giao diện (UI/UX).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line font-mono-hud text-[10px] text-muted uppercase flex items-center justify-between">
              <span>LỐI SỐNG LÀNH MẠNH</span>
              <span className="text-ink">WORK - LIFE BALANCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
