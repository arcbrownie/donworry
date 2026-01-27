import { Metadata } from "next";

export const metadata: Metadata = {
  title: "군 장병 적금 & 전역일 계산기 | 돈워리 - 2026년 월급 반영",
  description: "전역 시 받을 목돈을 미리 계산해보세요. 2026년 병사 월급과 장병내일준비적금 정부 매칭 지원금을 반영한 계산기입니다.",
  keywords: "군인 적금, 장병내일준비적금, 전역일 계산, 군인 월급, 2026년 병사 월급, 정부 매칭 지원금",
  alternates: {
    canonical: "https://donworry.kr/cal/soldier",
  },
  openGraph: {
    title: "군 장병 적금 & 전역일 계산기 | 돈워리",
    description: "전역 시 받을 목돈을 미리 계산해보세요. 2026년 병사 월급과 장병내일준비적금 정부 매칭 지원금을 반영한 계산기입니다.",
    url: "https://donworry.kr/cal/soldier",
  },
};

export default function SoldierCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
