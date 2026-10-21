import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f1ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://getartcraft.com"),
  title: "ArtCraft — Controllable AI for Artists",
  description:
    "ArtCraft is the open-source desktop app for generating AI video and images — built for artists who want real control.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getartcraft.com",
    title: "ArtCraft — Controllable AI for Artists",
    description:
      "ArtCraft is the open-source desktop app for generating AI video and images — built for artists who want real control.",
    siteName: "ArtCraft",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArtCraft — Controllable AI for Artists",
    description:
      "ArtCraft is the open-source desktop app for generating AI video and images — built for artists who want real control.",
  },
  icons: {
    icon: "/artcraft-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrumentSerif.variable} ${inter.variable} ${geistMono.variable}`}
      data-theme="light"
    >
      <body className="bg-[var(--bg)] text-[var(--ink)] antialiased transition-colors duration-200">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
