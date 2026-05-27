import Settings from "@/components/Settings";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
});

const digitalKhatt = localFont({
  src: "./fonts/DigitalKhattIndoPak.otf",
  variable: "--font-digital-khatt",
});

const indoPak = localFont({
  src: "./fonts/IndoPak.ttf",
  variable: "--font-indopak",
});

const surahName = localFont({
  src: "./fonts/surah-name-v2.ttf",
  variable: "--font-surah-name",
  display: "swap",
});

const kitabFont = localFont({
  src: [
    {
      path: "./fonts/Kitab-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/Kitab-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-kitab",
});

export const metadata: Metadata = {
  title: "Hifz Al-Kitab",
  description: "Quran memorization with translation in multiple languages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoArabic.variable} ${digitalKhatt.variable} ${indoPak.variable} ${surahName.variable} ${kitabFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="flex justify-between p-5 md:px-10">
          <Settings />
          <Link href="/" className="font-kitab text-3xl font-bold">
            حفظ
          </Link>
        </div>
        <main className="px-1 md:px-10">{children}</main>
      </body>
    </html>
  );
}
