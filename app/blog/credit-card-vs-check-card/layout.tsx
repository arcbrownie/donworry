import { Metadata } from "next";

export const metadata: Metadata = {
  title: "신용카드 vs 체크카드 완벽 비교 가이드 2026 | 돈워리",
  description: "신용카드와 체크카드의 차이점부터 혜택 비교, 사회초년생 선택법, 신용관리, 연말정산 소득공제 전략까지 완벽 정리. 월 100만원 기준 실제 혜택 비교 분석.",
  keywords: "신용카드, 체크카드, 카드 선택, 사회초년생 카드, 연말정산 소득공제, 신용점수 관리, 카드 혜택 비교",
  alternates: {
    canonical: "https://donworry.kr/blog/credit-card-vs-check-card",
  },
  openGraph: {
    title: "신용카드 vs 체크카드 완벽 비교 가이드 2026 | 돈워리",
    description: "신용카드와 체크카드의 차이점부터 혜택 비교, 사회초년생 선택법, 신용관리, 연말정산 소득공제 전략까지 완벽 정리.",
    url: "https://donworry.kr/blog/credit-card-vs-check-card",
    type: "article",
    authors: ["정서연 (금리 전문가)"],
    publishedTime: "2026-01-28T00:00:00.000Z",
    modifiedTime: "2026-01-28T00:00:00.000Z",
    section: "금융 · 대출",
    tags: ["신용카드", "체크카드", "카드선택", "연말정산", "신용점수관리"],
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
    title: "신용카드 vs 체크카드 완벽 비교 가이드 2026 | 돈워리",
    description: "신용카드와 체크카드의 차이점부터 혜택 비교까지 완벽 정리",
  },
};

export default function CreditCardVsCheckCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
