import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dntu-forum.vercel.app"),
  title: "MAI HOÀNG TUẤN — Fullstack Developer | Portfolio & Interactive CV",
  description:
    "Portfolio kiêm CV tương tác cao của Mai Hoàng Tuấn - Lập trình viên Fullstack. Dự án trọng điểm DNTU-FORUM, kỹ năng Next.js, ASP.NET Core, React Native, Supabase, Tailwind CSS.",
  keywords: [
    "Mai Hoàng Tuấn",
    "Fullstack Developer",
    "DNTU-FORUM",
    "Lập trình viên",
    "Next.js",
    "ASP.NET Core",
    "Đồng Nai",
    "Portfolio",
    "Interactive CV",
  ],
  authors: [{ name: "Mai Hoàng Tuấn", url: "https://dntu-forum.vercel.app" }],
  creator: "Mai Hoàng Tuấn",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    title: "MAI HOÀNG TUẤN — Fullstack Developer | Portfolio & Interactive CV",
    description:
      "Khám phá trang portfolio tương tác nghệ thuật lấy cảm hứng từ ArtCraft, trình bày dự án DNTU-FORUM và hệ sinh thái kỹ năng của Mai Hoàng Tuấn.",
    siteName: "Mai Hoàng Tuấn Portfolio",
    images: [
      {
        url: "/dntu-forum-preview.png",
        width: 1200,
        height: 630,
        alt: "Mai Hoàng Tuấn - Fullstack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAI HOÀNG TUẤN — Fullstack Developer",
    description:
      "Interactive CV & Portfolio phong cách ArtCraft của Fullstack Developer Mai Hoàng Tuấn.",
    images: ["/dntu-forum-preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#070709] text-zinc-100 selection:bg-orange-500/30 selection:text-orange-200">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
