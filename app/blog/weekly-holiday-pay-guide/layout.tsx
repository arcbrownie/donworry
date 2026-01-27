import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026년 최신 알바생 주휴수당 완벽 가이드: 계산법부터 조건까지 한 번에 정리 | 돈워리",
  description: "2026년 최저임금 기준 주휴수당 계산법 및 지급 조건 완벽 가이드. 주휴수당이란 무엇인지, 받을 수 있는 조건과 계산 방법을 자세히 알려드립니다. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.",
  keywords: "주휴수당 계산법, 2026 최저임금, 주휴수당 조건, 알바 주휴수당, 주휴수당 계산기, 근로기준법 주휴수당",
  alternates: {
    canonical: "https://donworry.kr/blog/weekly-holiday-pay-guide",
  },
  openGraph: {
    title: "2026년 최신 알바생 주휴수당 완벽 가이드 | 돈워리",
    description: "2026년 최저임금 기준 주휴수당 계산법 및 지급 조건 완벽 가이드. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.",
    url: "https://donworry.kr/blog/weekly-holiday-pay-guide",
    type: "article",
  },
};

export default function WeeklyHolidayPayGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
