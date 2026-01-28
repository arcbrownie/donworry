import { Metadata } from "next";

export const metadata: Metadata = {
  title: "사회초년생 첫 월급 관리 완벽 가이드 2026 | 돈워리",
  description: "사회초년생을 위한 첫 월급 관리 완벽 가이드. 50/30/20 예산 배분법, 비상금 구축, 신용점수 관리, 필수 금융상품까지 실전 월급 관리 노하우를 알려드립니다.",
  keywords: "사회초년생 월급 관리, 첫 월급, 예산 관리, 50/30/20 법칙, 월급 저축, 신용점수 관리, 비상금",
  alternates: {
    canonical: "https://donworry.kr/blog/social-beginner-salary-guide",
  },
  openGraph: {
    title: "사회초년생 첫 월급 관리 완벽 가이드 2026 | 돈워리",
    description: "사회초년생을 위한 첫 월급 관리 완벽 가이드. 50/30/20 예산 배분법, 비상금 구축, 신용점수 관리, 필수 금융상품까지 실전 월급 관리 노하우를 알려드립니다.",
    url: "https://donworry.kr/blog/social-beginner-salary-guide",
    type: "article",
    authors: ["김민지 (재테크 전문가)"],
    publishedTime: "2026-01-28T00:00:00.000Z",
    modifiedTime: "2026-01-28T00:00:00.000Z",
    section: "재테크 · 절약",
    tags: ["사회초년생월급관리", "첫월급", "예산관리", "50/30/20법칙", "신용점수관리"],
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
    title: "사회초년생 첫 월급 관리 완벽 가이드 2026 | 돈워리",
    description: "50/30/20 예산 배분법부터 비상금 구축까지 실전 노하우",
  },
};

export default function SocialBeginnerSalaryGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
