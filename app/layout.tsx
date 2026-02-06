import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/layout/header";
import Footer from "@/app/_components/layout/footer";
import SlideInCTA from "@/app/_components/ui/SlideInCTA";
import ScrollProgressBar from "@/app/_components/ui/ScrollProgressBar";
import ThemeProvider from "@/app/_components/theme/ThemeProvider";
import ParallaxProviderWrapper from "@/app/_components/animations/ParallaxProviderWrapper";
import DynamicIsland from "@/app/_components/ui/DynamicIsland";

// 4축 디자인 Typography
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "엘리콘 | 프로페셔널 B2B 유통 전문 기업",
  description: "검증된 브랜드(Wing, Cocolic, Seanex)를 통해 신뢰할 수 있는 제품을 공급합니다.",

  // PWA Manifest (Trend #24)
  manifest: "/manifest.json",

  // PWA Meta Tags
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "엘리콘",
  },

  // Theme Color
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#00BFA5" },
    { media: "(prefers-color-scheme: dark)", color: "#1A2C4B" },
  ],

  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} font-inter antialiased flex flex-col min-h-screen`}
      >
        {/* Skip-to-content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-[--color-bright-teal] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:ring-offset-2"
        >
          본문으로 건너뛰기
        </a>
        <ThemeProvider>
          <ParallaxProviderWrapper>
            <ScrollProgressBar height={3} position="top" />
            {/* Dynamic Island Toaster (iOS 16 스타일, 2025 트렌드) */}
            <DynamicIsland />
            <Header />
            <main id="main-content" className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
            <SlideInCTA />
          </ParallaxProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
