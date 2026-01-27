import { Metadata } from "next";

export const metadata: Metadata = {
  title: "금융 · 대출 | 돈워리 - 일상은 가볍게, 돈 걱정은 없게",
  description: "나에게 딱 맞는 금리와 상품 찾기. 대출 가이드, 프리랜서 세금 환급, 청년 세금감면 등 금융 정보를 제공합니다. 어제보다 가벼운 오늘을 만드는 당신의 솔루션, 돈워리.",
  keywords: "금융, 대출, 대출 가이드, 프리랜서 세금, 3.3% 환급, 청년 세금감면, 중기청 소득세 감면, 저금리 대출, 신용점수, DSR",
  alternates: {
    canonical: "https://donworry.kr/finance",
  },
  openGraph: {
    title: "금융 · 대출 | 돈워리",
    description: "나에게 딱 맞는 금리와 상품 찾기. 대출 가이드, 프리랜서 세금 환급, 청년 세금감면 등 금융 정보를 제공합니다. 어제보다 가벼운 오늘을 만드는 당신의 솔루션, 돈워리.",
    url: "https://donworry.kr/finance",
  },
};

export default function FinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
