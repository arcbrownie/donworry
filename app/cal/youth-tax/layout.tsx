import { Metadata } from "next";

export const metadata: Metadata = {
  title: "청년 세금감면 계산기 | 돈워리 - 중소기업 취업청년 소득세 90% 감면",
  description: "90% 세금 감면 혜택으로 얼마나 절약할 수 있을까요? 만 15~34세 청년이 중소기업에 취업할 경우 5년간 근로소득세의 90%를 감면받는 제도입니다.",
  keywords: "청년 세금감면, 중소기업 취업청년, 소득세 감면, 90% 감면, 청년 혜택, 중기청",
  alternates: {
    canonical: "https://donworry.kr/cal/youth-tax",
  },
  openGraph: {
    title: "청년 세금감면 계산기 | 돈워리",
    description: "90% 세금 감면 혜택으로 얼마나 절약할 수 있을까요? 만 15~34세 청년이 중소기업에 취업할 경우 5년간 근로소득세의 90%를 감면받는 제도입니다.",
    url: "https://donworry.kr/cal/youth-tax",
  },
};

export default function YouthTaxCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
