import { Metadata } from "next";

export const metadata: Metadata = {
  title: "사회초년생 투자 입문 완벽 가이드 2026 | 돈워리",
  description: "사회초년생을 위한 투자 입문 완벽 가이드. 투자위험도별 상품 이해, 자산배분 전략, 구체적인 사례와 실전 팁까지. 매달 30만원으로 시작하는 ETF 투자 전략.",
  keywords: "사회초년생 투자, 투자 입문, 투자 위험도, ETF 투자, 자산배분, 주식 투자, 채권 투자, 적금 투자, 투자 전략",
  alternates: {
    canonical: "https://donworry.kr/blog/investment-guide-for-beginners",
  },
  openGraph: {
    title: "사회초년생 투자 입문 완벽 가이드 2026 | 돈워리",
    description: "사회초년생을 위한 투자 입문 완벽 가이드. 투자위험도별 상품 이해, 자산배분 전략, 구체적인 사례와 실전 팁까지",
    url: "https://donworry.kr/blog/investment-guide-for-beginners",
    type: "article",
    authors: ["박지훈 (투자 전문가)"],
    publishedTime: "2026-01-28T00:00:00.000Z",
    modifiedTime: "2026-01-28T00:00:00.000Z",
    section: "재테크 · 절약",
    tags: ["사회초년생투자", "투자입문", "ETF투자", "자산배분", "투자전략"],
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
    title: "사회초년생 투자 입문 완벽 가이드 2026 | 돈워리",
    description: "투자위험도별 상품 이해, 자산배분 전략, 실전 팁까지",
  },
};

export default function InvestmentGuideForBeginnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
