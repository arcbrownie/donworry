import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인회생 · 개인파산 완벽 가이드: 신청 절차부터 차이점까지 | 돈워리",
  description: "개인회생과 개인파산 제도 상세 안내. 신청 자격, 절차, 비용, 차이점까지 법원을 통한 채무 해결 방법의 모든 것을 알려드립니다. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.",
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
