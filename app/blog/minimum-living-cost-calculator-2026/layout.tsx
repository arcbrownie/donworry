import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026년 가구원수별 최저생계비 및 변제금 계산 가이드 | 돈워리",
  description: "2026년 기준 가구원수별 최저생계비와 개인회생 변제금 계산 방법. 1인~5인 가구 최저생계비 기준표와 변제금 산정 공식을 상세히 알려드립니다.",
  keywords: "최저생계비, 변제금계산, 가구원수별생계비, 개인회생변제금, 2026최저생계비, 생계비기준",
  alternates: {
    canonical: "https://donworry.kr/blog/minimum-living-cost-calculator-2026",
  },
  openGraph: {
    title: "2026년 가구원수별 최저생계비 및 변제금 계산 가이드 | 돈워리",
    description: "2026년 기준 가구원수별 최저생계비와 개인회생 변제금 계산 방법. 1인~5인 가구 최저생계비 기준표와 변제금 산정 공식을 상세히 알려드립니다.",
    url: "https://donworry.kr/blog/minimum-living-cost-calculator-2026",
    type: "article",
    authors: ["윤서진 (개인회생 전문가)"],
    publishedTime: "2026-01-28T00:00:00.000Z",
    modifiedTime: "2026-01-28T00:00:00.000Z",
    section: "채무조정",
    tags: ["최저생계비", "변제금계산", "가구원수별생계비", "개인회생", "2026기준"],
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
    title: "2026년 가구원수별 최저생계비 및 변제금 계산 가이드 | 돈워리",
    description: "2026년 기준 가구원수별 최저생계비와 개인회생 변제금 계산 방법",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
