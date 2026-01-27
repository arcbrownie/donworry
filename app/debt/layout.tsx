import { Metadata } from "next";

export const metadata: Metadata = {
  title: "채무조정 | 돈워리 - 일상은 가볍게, 돈 걱정은 없게",
  description: "다시 시작하는 경제적 자유, 맞춤형 해결책. 개인회생, 개인파산, 신용회복위원회 채무조정 등 채무 해결 방법을 안내합니다. 어제보다 가벼운 오늘을 만드는 당신의 솔루션, 돈워리.",
  keywords: "채무조정, 개인회생, 개인파산, 신용회복위원회, 채무 해결, 빚 탕감, 채무 조정, 신속채무조정, 채무 자가진단",
  alternates: {
    canonical: "https://donworry.kr/debt",
  },
  openGraph: {
    title: "채무조정 | 돈워리",
    description: "다시 시작하는 경제적 자유, 맞춤형 해결책. 개인회생, 개인파산, 신용회복위원회 채무조정 등 채무 해결 방법을 안내합니다. 어제보다 가벼운 오늘을 만드는 당신의 솔루션, 돈워리.",
    url: "https://donworry.kr/debt",
  },
};

export default function DebtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
