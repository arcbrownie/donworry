import { Metadata } from "next";

export const metadata: Metadata = {
  title: "사회초년생 첫 대출 완벽 가이드 2026 | 돈워리",
  description: "사회초년생을 위한 대출 완벽 가이드. 신용점수 관리부터 저금리 상품 찾는 법, DSR 체크, 상환 방식 선택까지 대출의 모든 것을 알려드립니다.",
  keywords: "첫 대출, 사회초년생 대출, 신용점수 관리, 저금리 대출, DSR, 대출 계산기, 햇살론 유스",
  alternates: {
    canonical: "https://donworry.kr/blog/first-loan-guide-2030",
  },
  openGraph: {
    title: "사회초년생 첫 대출 완벽 가이드 2026 | 돈워리",
    description: "사회초년생을 위한 대출 완벽 가이드. 신용점수 관리부터 저금리 상품 찾는 법, DSR 체크, 상환 방식 선택까지 대출의 모든 것을 알려드립니다.",
    url: "https://donworry.kr/blog/first-loan-guide-2030",
    type: "article",
    authors: ["최동현 (대출 전문가)"],
    publishedTime: "2026-01-28T00:00:00.000Z",
    modifiedTime: "2026-01-28T00:00:00.000Z",
    section: "금융 · 대출",
    tags: ["첫대출", "사회초년생대출", "신용점수관리", "저금리대출", "DSR"],
    images: [
      {
        url: "https://donworry.kr/og-image.png",
        width: 1200,
        height: 630,
        alt: "돈워리 - 일상은 가볍게, 돈 걱정은 없게",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "사회초년생 첫 대출 완벽 가이드 2026 | 돈워리",
    description: "신용점수 관리부터 저금리 상품 찾는 법까지 대출의 모든 것",
  },
};

export default function FirstLoanGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
