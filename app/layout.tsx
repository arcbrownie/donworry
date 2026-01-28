import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "돈워리 - 일상은 가볍게, 돈 걱정은 없게 | 금융 계산기",
  description: "알바 실수령액, 청년 세금감면, 채무조정 자가진단까지. 돈워리에서 복잡한 금융 계산을 쉽고 빠르게 해결하세요.",
  keywords: "돈워리, 개인회생, 채무조정, 신속채무조정, 알바 시급 계산기, 주휴수당, 프리랜서 세금, 3.3% 환급, 중기청 소득세 감면, 청년 세금, 군인 적금, 장병내일준비적금, 금융 계산기",
  authors: [{ name: "돈워리" }],
  openGraph: {
    type: "website",
    url: "https://donworry.kr",
    siteName: "돈워리",
    title: "돈 걱정 끝, 일상은 가볍게! 금융 계산기 '돈워리'",
    description: "나만 몰랐던 정부지원금부터 개인회생 자가진단까지, 지금 바로 확인해보세요.",
    images: [
      {
        url: "https://donworry.kr/og-image.png",
        width: 1200,
        height: 630,
        alt: "돈워리 - 일상은 가볍게, 돈 걱정은 없게",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "돈 걱정 끝, 일상은 가볍게! 금융 계산기 '돈워리'",
    description: "나만 몰랐던 정부지원금부터 개인회생 자가진단까지, 지금 바로 확인해보세요.",
    images: ["https://donworry.kr/og-image.png"],
  },
  alternates: {
    canonical: "https://donworry.kr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "돈워리",
              alternateName: "Don't Worry",
              url: "https://donworry.kr",
              description: "일상은 가볍게, 돈 걱정은 없게. 어제보다 가벼운 오늘을 만드는 당신의 금융 솔루션 - 개인회생, 채무조정 진단부터 다양한 세금 계산기까지",
              slogan: "일상은 가볍게, 돈 걱정은 없게",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://donworry.kr/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "돈워리",
              url: "https://donworry.kr",
              logo: "https://donworry.kr/favicon.svg",
              description: "일상은 가볍게, 돈 걱정은 없게. 어제보다 가벼운 오늘을 만드는 당신의 금융 솔루션",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
        {/* 애드센스 스크립트를 가장 마지막에, React 로드 후에 실행 */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8888557569927473"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
