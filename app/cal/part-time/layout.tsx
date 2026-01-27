import { Metadata } from "next";

export const metadata: Metadata = {
  title: "알바 실수령액 계산기 | 돈워리 - 2026년 최저임금 반영",
  description: "2026년 최저임금(10,030원) 기준 알바 실수령액을 계산하세요. 주휴수당 포함 진짜 시급을 확인할 수 있습니다.",
  keywords: "알바 실수령액, 최저임금, 주휴수당, 알바 계산기, 2026 최저임금, 시급 계산",
  alternates: {
    canonical: "https://donworry.kr/cal/part-time",
  },
  openGraph: {
    title: "알바 실수령액 계산기 | 돈워리",
    description: "2026년 최저임금(10,030원) 기준 알바 실수령액을 계산하세요. 주휴수당 포함 진짜 시급을 확인할 수 있습니다.",
    url: "https://donworry.kr/cal/part-time",
  },
};

export default function PartTimeCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
