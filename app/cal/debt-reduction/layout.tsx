import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인회생 탕감액 계산기 | 돈워리 - 채무 탕감 예상액 계산",
  description: "개인회생 신청 시 예상 채무 탕감액을 계산해보세요. 실제 탕감률은 법원 심사에 따라 달라질 수 있습니다.",
  keywords: "개인회생, 탕감액, 채무 탕감, 개인회생 계산기, 채무 조정, 빚 탕감",
  alternates: {
    canonical: "https://donworry.kr/cal/debt-reduction",
  },
  openGraph: {
    title: "개인회생 탕감액 계산기 | 돈워리",
    description: "개인회생 신청 시 예상 채무 탕감액을 계산해보세요.",
    url: "https://donworry.kr/cal/debt-reduction",
  },
};

export default function DebtReductionCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
