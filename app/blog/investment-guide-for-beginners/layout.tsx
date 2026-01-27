import { Metadata } from "next";

export const metadata: Metadata = {
  title: "사회초년생을 위한 투자 입문서: 위험도별 투자 전략과 실전 가이드 | 돈워리",
  description: "사회초년생을 위한 투자 입문 완벽 가이드. 투자위험도별 상품 이해, 자산배분 전략, 구체적인 사례와 실전 팁까지. 얼마를 벌까보다 얼마까지 잃어도 되는가를 먼저 정하는 투자의 기초를 알려드립니다. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.",
  keywords: "사회초년생 투자, 투자 입문, 투자 위험도, ETF 투자, 자산배분, 주식 투자, 채권 투자, 적금 투자, 투자 전략",
  alternates: {
    canonical: "https://donworry.kr/blog/investment-guide-for-beginners",
  },
  openGraph: {
    title: "사회초년생을 위한 투자 입문서 | 돈워리",
    description: "사회초년생을 위한 투자 입문 완벽 가이드. 투자위험도별 상품 이해, 자산배분 전략, 구체적인 사례와 실전 팁까지",
    url: "https://donworry.kr/blog/investment-guide-for-beginners",
    type: "article",
  },
};

export default function InvestmentGuideForBeginnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
