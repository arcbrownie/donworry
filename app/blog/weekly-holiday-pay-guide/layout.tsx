import { Metadata } from "next";

export const metadata: Metadata = {
  title: "알바 주휴수당 완벽 가이드 2026 | 돈워리",
  description: "2026년 최저임금 기준 주휴수당 계산법 및 지급 조건 완벽 가이드. 주 15시간 근무 시 받을 수 있는 금액, 지급 조건, 미지급 시 신고 방법까지 실전 가이드.",
  keywords: "주휴수당 계산기, 2026 최저시급 10,320원, 주휴수당 계산법, 알바 주휴수당, 주 15시간 근무, 주휴수당 신고",
  alternates: {
    canonical: "https://donworry.kr/blog/weekly-holiday-pay-guide",
  },
  openGraph: {
    title: "알바 주휴수당 완벽 가이드 2026 | 돈워리",
    description: "2026년 최저임금 기준 주휴수당 계산법 및 지급 조건 완벽 가이드. 주 15시간 근무 시 받을 수 있는 금액, 지급 조건, 미지급 시 신고 방법까지 실전 가이드.",
    url: "https://donworry.kr/blog/weekly-holiday-pay-guide",
    type: "article",
    authors: ["이수진 (절약 전문가)"],
    publishedTime: "2026-01-28T00:00:00.000Z",
    modifiedTime: "2026-01-28T00:00:00.000Z",
    section: "재테크 · 절약",
    tags: ["주휴수당", "2026최저시급", "주휴수당계산법", "알바주휴수당", "주15시간근무"],
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
    title: "알바 주휴수당 완벽 가이드 2026 | 돈워리",
    description: "2026년 최저임금 기준 주휴수당 계산법 및 지급 조건 가이드",
  },
};

export default function WeeklyHolidayPayGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
