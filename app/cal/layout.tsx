import { Metadata } from "next";

export const metadata: Metadata = {
  title: "금융 계산기 모음 | 돈워리 - 일상은 가볍게, 돈 걱정은 없게",
  description: "알바 실수령액, 프리랜서 세금환급, 청년 소득세 감면, 군인 적금 등 2030세대에게 꼭 필요한 금융 계산기를 무료로 이용하세요. 어제보다 가벼운 오늘을 만드는 당신의 솔루션, 돈워리.",
  keywords: "금융 계산기, 알바 실수령액 계산기, 프리랜서 환급 계산기, 청년 세금 계산기, 군인 적금 계산기, 주휴수당 계산기, 세금 계산기",
  alternates: {
    canonical: "https://donworry.kr/cal",
  },
  openGraph: {
    title: "금융 계산기 모음 | 돈워리",
    description: "알바 실수령액, 프리랜서 세금환급, 청년 소득세 감면, 군인 적금 등 2030세대에게 꼭 필요한 금융 계산기를 무료로 이용하세요.",
    url: "https://donworry.kr/cal",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
