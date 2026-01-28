import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026년 개인회생 변제금 산정 기준 변경 완벽 가이드 | 돈워리",
  description: "2026년부터 달라진 개인회생 변제금 산정 기준을 숫자로 비교 분석. 법원 기준 변경사항, 최저생계비 인상률, 변제금 계산 방법을 개인회생 전문가가 알려드립니다.",
  keywords: "개인회생, 변제금산정, 2026년기준, 법원기준변경, 최저생계비인상, 변제금계산",
  alternates: {
    canonical: "https://donworry.kr/blog/rehabilitation-repayment-2026-changes",
  },
  openGraph: {
    title: "2026년 개인회생 변제금 산정 기준 변경 완벽 가이드 | 돈워리",
    description: "2026년부터 달라진 개인회생 변제금 산정 기준을 숫자로 비교 분석. 법원 기준 변경사항, 최저생계비 인상률, 변제금 계산 방법을 개인회생 전문가가 알려드립니다.",
    url: "https://donworry.kr/blog/rehabilitation-repayment-2026-changes",
    type: "article",
    authors: ["윤서진 (개인회생 전문가)"],
    publishedTime: "2026-01-28T00:00:00.000Z",
    modifiedTime: "2026-01-28T00:00:00.000Z",
    section: "채무조정",
    tags: ["개인회생", "변제금산정", "2026년기준", "법원기준변경", "최저생계비"],
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
    title: "2026년 개인회생 변제금 산정 기준 변경 완벽 가이드 | 돈워리",
    description: "2026년부터 달라진 개인회생 변제금 산정 기준 비교 분석",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
