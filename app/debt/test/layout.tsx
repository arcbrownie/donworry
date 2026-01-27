import { Metadata } from "next";

export const metadata: Metadata = {
  title: "맞춤형 금융 회복 처방전 | 돈워리 - 채무조정 자가진단",
  description: "나의 상황에 맞는 채무조정 방법을 찾아드릴게요. 개인회생과 신속채무조정 중 나에게 적합한 방법을 진단해보세요.",
  alternates: {
    canonical: "https://donworry.kr/debt/test",
  },
  openGraph: {
    title: "맞춤형 금융 회복 처방전 | 돈워리",
    description: "나의 상황에 맞는 채무조정 방법을 찾아드릴게요",
    url: "https://donworry.kr/debt/test",
  },
};

export default function DebtTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
