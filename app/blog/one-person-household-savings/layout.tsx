import { Metadata } from "next";

export const metadata: Metadata = {
  title: "1인 가구 생활비 절약 완벽 가이드 2026 | 돈워리",
  description: "1인 가구를 위한 생활비 절약 완벽 가이드. 매달 최소 15만원 이상 확실히 절감하세요. 배달 앱, 통신비, 편의점, OTT 등에서 실전 절약 루틴 10가지.",
  keywords: "1인 가구 절약, 생활비 절약, 배달 앱 절약, 알뜰폰, 통신비 절약, 가계비 절약, 절약 팁",
  alternates: {
    canonical: "https://donworry.kr/blog/one-person-household-savings",
  },
  openGraph: {
    title: "1인 가구 생활비 절약 완벽 가이드 2026 | 돈워리",
    description: "1인 가구를 위한 생활비 절약 완벽 가이드. 매달 최소 15만원 이상 확실히 절감하세요.",
    url: "https://donworry.kr/blog/one-person-household-savings",
    type: "article",
    authors: ["이수진 (절약 전문가)"],
    publishedTime: "2026-01-28T00:00:00.000Z",
    modifiedTime: "2026-01-28T00:00:00.000Z",
    section: "재테크 · 절약",
    tags: ["1인가구절약", "생활비절약", "배달앱절약", "통신비절약", "절약팁"],
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
    title: "1인 가구 생활비 절약 완벽 가이드 2026 | 돈워리",
    description: "매달 최소 15만원 이상 확실히 절감하는 실전 절약 루틴",
  },
};

export default function OnePersonHouseholdSavingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
