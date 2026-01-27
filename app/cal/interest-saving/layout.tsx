import { Metadata } from "next";

export const metadata: Metadata = {
  title: "이자 절감 계산기 | 돈워리 - 대출 금리 인하 시 절감 이자 계산",
  description: "대출 금리 인하 시 절감되는 이자를 계산해보세요. 대환대출이나 금리 협상 전 예상 절감액을 확인하세요.",
  keywords: "이자 절감, 대출 금리, 대환대출, 금리 협상, 이자 계산기, 대출 계산기",
  alternates: {
    canonical: "https://donworry.kr/cal/interest-saving",
  },
  openGraph: {
    title: "이자 절감 계산기 | 돈워리",
    description: "대출 금리 인하 시 절감되는 이자를 계산해보세요.",
    url: "https://donworry.kr/cal/interest-saving",
  },
};

export default function InterestSavingCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
