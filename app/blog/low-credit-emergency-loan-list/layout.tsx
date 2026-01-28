import { Metadata } from "next";

export const metadata: Metadata = {
  title: "신용점수 600점 이하 1금융권 비상금대출 가능 리스트 완벽 가이드 | 돈워리",
  description: "저신용자도 승인 가능한 1금융권 비상금대출 상품 완벽 정리. 신용점수 600점 이하에서도 신청 가능한 은행별 대출 리스트와 승인율 높이는 방법을 금리 전문가가 상세히 알려드립니다.",
  keywords: "저신용자대출, 신용점수600점이하, 1금융권대출, 비상금대출, 저신용대출, 신용점수낮은대출",
  alternates: {
    canonical: "https://donworry.kr/blog/low-credit-emergency-loan-list",
  },
  openGraph: {
    title: "신용점수 600점 이하 1금융권 비상금대출 가능 리스트 완벽 가이드 | 돈워리",
    description: "저신용자도 승인 가능한 1금융권 비상금대출 상품 완벽 정리. 신용점수 600점 이하에서도 신청 가능한 은행별 대출 리스트를 금리 전문가가 알려드립니다.",
    url: "https://donworry.kr/blog/low-credit-emergency-loan-list",
    type: "article",
    authors: ["정서연 (금리 전문가)"],
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    section: "금융 · 대출",
    tags: ["저신용자대출", "신용점수600점이하", "1금융권대출", "비상금대출", "저신용대출"],
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
    title: "신용점수 600점 이하 1금융권 비상금대출 가능 리스트 완벽 가이드 | 돈워리",
    description: "저신용자도 승인 가능한 은행별 대출 상품 리스트",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
