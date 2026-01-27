import { Metadata } from "next";

export const metadata: Metadata = {
  title: "금융 · 대출 계산기 | 돈워리 - 세금, 환급, 대출 계산기 모음",
  description: "세금, 환급, 대출 등 금융 · 대출에 필요한 계산기 모음. 프리랜서 세금환급, 청년 소득세 감면 등 2026년 세율과 최신 정책이 반영되어 있습니다.",
  keywords: "금융 계산기, 대출 계산기, 세금 계산기, 프리랜서 환급, 청년 세금감면",
  alternates: {
    canonical: "https://donworry.kr/cal/finance",
  },
  openGraph: {
    title: "금융 · 대출 계산기 | 돈워리",
    description: "세금, 환급, 대출 등 금융 · 대출에 필요한 계산기 모음",
    url: "https://donworry.kr/cal/finance",
  },
};

export default function FinanceCalculatorHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
