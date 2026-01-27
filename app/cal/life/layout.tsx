import { Metadata } from "next";

export const metadata: Metadata = {
  title: "재테크 · 절약 계산기 | 돈워리 - 알바 실수령액, 군인 적금 계산기",
  description: "일상에 필요한 재테크 · 절약 계산기 모음. 알바 실수령액, 군인 적금 등 2030세대 일상에 꼭 필요한 계산기를 무료로 이용하세요.",
  keywords: "재테크 계산기, 절약 계산기, 알바 실수령액, 군인 적금, 주휴수당 계산기",
  alternates: {
    canonical: "https://donworry.kr/cal/life",
  },
  openGraph: {
    title: "재테크 · 절약 계산기 | 돈워리",
    description: "일상에 필요한 재테크 · 절약 계산기 모음",
    url: "https://donworry.kr/cal/life",
  },
};

export default function SavingsCalculatorHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
