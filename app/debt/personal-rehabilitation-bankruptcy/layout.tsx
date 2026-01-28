import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인회생 vs 개인파산 차이점 5가지 | 2026년 신청 조건과 비용 총정리 | 돈워리",
  description: "개인회생 vs 개인파산 차이점 5가지 완전 비교. 2026년 신청 조건, 비용, 절차, 탕감률까지 정기 수입 유무에 따른 선택 기준을 한 번에 정리.",
  keywords: "개인회생, 개인파산, 채무조정, 빚 탕감, 법원 채무조정, 면책, 채무자 회생",
  alternates: {
    canonical: "https://donworry.kr/debt/personal-rehabilitation-bankruptcy",
  },
  openGraph: {
    title: "개인회생 · 개인파산 완벽 가이드 | 돈워리",
    description: "개인회생과 개인파산 제도 상세 안내. 신청 절차부터 자격 조건까지 한 번에 정리. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.",
    url: "https://donworry.kr/debt/personal-rehabilitation-bankruptcy",
    type: "article",
  },
};

export default function PersonalRehabilitationBankruptcyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
