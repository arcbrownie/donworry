import { Metadata } from "next";

export const metadata: Metadata = {
  title: "채무조정 완벽 가이드 | 돈워리 - 개인회생, 개인파산, 신용회복위원회 채무조정",
  description: "개인회생, 개인파산, 신용회복위원회 채무조정 제도를 상세히 비교하고 나에게 맞는 채무조정 방법을 찾아보세요. 신청 자격, 절차, 비용, 장단점을 쉽게 설명합니다.",
  keywords: "채무조정, 개인회생, 개인파산, 신용회복위원회, 채무조정 가이드, 빚 탕감",
  alternates: {
    canonical: "https://donworry.kr/debt/guide",
  },
  openGraph: {
    title: "채무조정 완벽 가이드 | 돈워리",
    description: "개인회생, 개인파산, 신용회복위원회 채무조정의 모든 것",
    url: "https://donworry.kr/debt/guide",
  },
};

export default function DebtGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
