import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026년 청년 도약계좌 중도해지 vs 담보대출 비교 완벽 가이드 | 돈워리",
  description: "급전이 필요할 때 청년 도약계좌를 해지할지, 담보대출을 받을지 고민된다면? 손익 분석부터 케이스별 최선의 선택까지 재테크 전문가가 상세히 알려드립니다.",
  keywords: "청년도약계좌, 중도해지, 적금담보대출, 정부기여금, 우대금리, 손익비교, 청년저축",
  alternates: {
    canonical: "https://donworry.kr/blog/youth-leap-account-early-termination-vs-loan",
  },
  openGraph: {
    title: "2026년 청년 도약계좌 중도해지 vs 담보대출 비교 완벽 가이드 | 돈워리",
    description: "급전이 필요할 때 청년 도약계좌를 해지할지, 담보대출을 받을지 고민된다면? 손익 분석부터 케이스별 최선의 선택까지 재테크 전문가가 상세히 알려드립니다.",
    url: "https://donworry.kr/blog/youth-leap-account-early-termination-vs-loan",
    type: "article",
    authors: ["김민지 (재테크 전문가)"],
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    section: "재테크 · 절약",
    tags: ["청년도약계좌", "중도해지", "적금담보대출", "정부기여금", "손익비교"],
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
    title: "2026년 청년 도약계좌 중도해지 vs 담보대출 비교 완벽 가이드 | 돈워리",
    description: "급전 필요 시 해지 대신 대출이 유리한 케이스 분석",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
