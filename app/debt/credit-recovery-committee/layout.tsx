import { Metadata } from "next";

export const metadata: Metadata = {
  title: "신용회복위원회 채무조정 신청 방법 | 1397 전화 상담부터 서류 준비까지 | 돈워리",
  description: "신용회복위원회 채무조정 신청 완벽 가이드. 1397 전화 상담부터 서류 준비, 신청 절차, 자격 조건까지 한 번에 정리. 2~4주 내 빠른 채무 해결 방법.",
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
