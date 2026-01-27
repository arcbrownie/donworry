import { Metadata } from "next";

export const metadata: Metadata = {
  title: "실업급여 예측 계산기 | 돈워리 - 2026년 기준 실업급여 예상 수령액",
  description: "퇴직 전 월급과 고용보험 가입기간을 입력하면 예상 실업급여를 계산해드립니다. 2026년 일 최대 지급액 68,100원, 일 최소 지급액 66,048원 기준입니다.",
  keywords: "실업급여, 구직급여, 실업급여 계산, 고용보험, 실업급여 예상액, 2026년 실업급여",
  alternates: {
    canonical: "https://donworry.kr/cal/unemployment",
  },
  openGraph: {
    title: "실업급여 예측 계산기 | 돈워리",
    description: "퇴직 전 월급과 고용보험 가입기간을 입력하면 예상 실업급여를 계산해드립니다.",
    url: "https://donworry.kr/cal/unemployment",
  },
};

export default function UnemploymentCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
