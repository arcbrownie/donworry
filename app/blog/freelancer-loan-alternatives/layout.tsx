import { Metadata } from "next";

export const metadata: Metadata = {
  title: "프리랜서 햇살론 유스 부결 시 대안 3가지 | 돈워리",
  description: "프리랜서가 햇살론 유스에서 부결됐을 때 시도할 수 있는 현실적인 대출 대안 3가지. 실제 부결 경험자들이 성공한 방법을 대출 전문가가 알려드립니다.",
  keywords: "프리랜서대출, 햇살론유스, 대출부결, 대안대출, 서민금융, 소득증빙",
  alternates: {
    canonical: "https://donworry.kr/blog/freelancer-loan-alternatives",
  },
  openGraph: {
    title: "프리랜서 햇살론 유스 부결 시 대안 3가지 | 돈워리",
    description: "프리랜서가 햇살론 유스에서 부결됐을 때 시도할 수 있는 현실적인 대출 대안 3가지. 실제 부결 경험자들이 성공한 방법을 대출 전문가가 알려드립니다.",
    url: "https://donworry.kr/blog/freelancer-loan-alternatives",
    type: "article",
    authors: ["최동현 (대출 전문가)"],
    publishedTime: "2026-01-28T00:00:00.000Z",
    modifiedTime: "2026-01-28T00:00:00.000Z",
    section: "대출",
    tags: ["프리랜서대출", "햇살론유스", "대출부결", "대안대출", "서민금융"],
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
    title: "프리랜서 햇살론 유스 부결 시 대안 3가지 | 돈워리",
    description: "햇살론 유스 부결 후 시도할 수 있는 현실적인 대출 대안",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
