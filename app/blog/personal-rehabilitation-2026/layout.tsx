import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026년 개인회생 제도 변경사항 완벽 가이드 | 돈워리",
  description: "2026년 새롭게 달라지는 개인회생 제도. 최저생계비 인상, 변제 기간 단축, 주택담보대출 보호 강화까지 상세 안내. 1인가구 생계비 154만원 기준 변제금 계산법.",
  keywords: "2026 개인회생, 개인회생 생계비, 1인가구 생계비 154만원, 월 변제금 11만원, 개인회생 변제금 계산, 회생법원",
  alternates: {
    canonical: "https://donworry.kr/blog/personal-rehabilitation-2026",
  },
  openGraph: {
    title: "2026년 개인회생 제도 변경사항 완벽 가이드 | 돈워리",
    description: "2026년 새롭게 달라지는 개인회생 제도. 최저생계비 인상, 변제 기간 단축, 주택담보대출 보호 강화까지 상세 안내.",
    url: "https://donworry.kr/blog/personal-rehabilitation-2026",
    type: "article",
    authors: ["윤서진 (개인회생 전문가)"],
    publishedTime: "2026-01-28T00:00:00.000Z",
    modifiedTime: "2026-01-28T00:00:00.000Z",
    section: "채무조정",
    tags: ["2026개인회생", "개인회생생계비", "변제금계산", "회생법원", "최저생계비"],
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
    title: "2026년 개인회생 제도 변경사항 완벽 가이드 | 돈워리",
    description: "최저생계비 인상, 변제 기간 단축 등 2026년 변경사항 총정리",
  },
};

export default function PersonalRehabilitation2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
