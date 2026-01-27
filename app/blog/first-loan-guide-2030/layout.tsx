import { Metadata } from "next";

export const metadata: Metadata = {
  title: "사회초년생을 위한 대출 가이드: 신용점수 관리부터 저금리 상품 찾는 법까지 | 돈워리",
  description: "사회초년생을 위한 대출 완벽 가이드. 신용점수 관리부터 저금리 상품 찾는 법, DSR 체크, 상환 방식 선택까지 대출의 모든 것을 알려드립니다. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.",
  keywords: "첫 대출, 사회초년생 대출, 신용점수 관리, 저금리 대출, DSR, 대출 계산기, 햇살론 유스",
  alternates: {
    canonical: "https://donworry.kr/blog/first-loan-guide-2030",
  },
  openGraph: {
    title: "사회초년생을 위한 대출 가이드 | 돈워리",
    description: "사회초년생을 위한 대출 완벽 가이드. 신용점수 관리부터 저금리 상품 찾는 법, DSR 체크, 상환 방식 선택까지 대출의 모든 것을 알려드립니다.",
    url: "https://donworry.kr/blog/first-loan-guide-2030",
    type: "article",
  },
};

export default function FirstLoanGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
