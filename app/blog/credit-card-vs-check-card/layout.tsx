import { Metadata } from "next";

export const metadata: Metadata = {
  title: "신용카드 vs 체크카드 완벽 가이드: 사회초년생을 위한 선택법과 연말정산 전략 | 돈워리",
  description: "신용카드와 체크카드의 차이점부터 혜택 비교, 사회초년생 선택법, 신용관리, 연말정산 소득공제 전략까지 완벽 정리. 어떤 카드를 써야 할지 고민이라면 지금 확인하세요. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.",
  keywords: "신용카드, 체크카드, 카드 선택, 사회초년생 카드, 연말정산 소득공제, 신용점수 관리, 카드 혜택 비교",
  alternates: {
    canonical: "https://donworry.kr/blog/credit-card-vs-check-card",
  },
  openGraph: {
    title: "신용카드 vs 체크카드 완벽 가이드 | 돈워리",
    description: "신용카드와 체크카드의 차이점부터 혜택 비교, 사회초년생 선택법, 신용관리, 연말정산 소득공제 전략까지 완벽 정리",
    url: "https://donworry.kr/blog/credit-card-vs-check-card",
    type: "article",
    publishedTime: "2026-01-06",
    modifiedTime: "2026-01-06",
  },
};

export default function CreditCardVsCheckCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
