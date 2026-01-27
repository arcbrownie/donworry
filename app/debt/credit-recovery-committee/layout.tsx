import { Metadata } from "next";

export const metadata: Metadata = {
  title: "신용회복위원회 채무조정 완벽 가이드: 신청 절차부터 자격 조건까지 | 돈워리",
  description: "신용회복위원회 채무조정 제도 상세 안내. 신청 자격, 절차, 비용, 장단점까지 신용회복위원회를 통한 채무조정의 모든 것을 알려드립니다. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.",
  keywords: "신용회복위원회, 채무조정, 신용회복위원회 채무조정, 신속채무조정, 채무조정 신청, 신용회복위원회 신청",
  alternates: {
    canonical: "https://donworry.kr/debt/credit-recovery-committee",
  },
  openGraph: {
    title: "신용회복위원회 채무조정 완벽 가이드 | 돈워리",
    description: "신용회복위원회 채무조정 제도 상세 안내. 신청 절차부터 자격 조건까지 한 번에 정리. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.",
    url: "https://donworry.kr/debt/credit-recovery-committee",
    type: "article",
  },
};

export default function CreditRecoveryCommitteeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
