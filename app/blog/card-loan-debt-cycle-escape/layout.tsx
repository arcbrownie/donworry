import { Metadata } from "next";

export const metadata: Metadata = {
  title: "카드론 돌려막기 늪에서 탈출하는 채무통합 방법 | 돈워리",
  description: "고금리 카드론을 돌려막고 있다면? 실제 대환대출 계산 사례로 이자를 줄이는 채무통합 방법을 채무조정 전문가가 알려드립니다.",
  keywords: "카드론돌려막기, 채무통합, 대환대출, 고금리이자, 채무조정, 신용회복",
  alternates: {
    canonical: "https://donworry.kr/blog/card-loan-debt-cycle-escape",
  },
  openGraph: {
    title: "카드론 돌려막기 늪에서 탈출하는 채무통합 방법 | 돈워리",
    description: "고금리 카드론을 돌려막고 있다면? 실제 대환대출 계산 사례로 이자를 줄이는 채무통합 방법을 채무조정 전문가가 알려드립니다.",
    url: "https://donworry.kr/blog/card-loan-debt-cycle-escape",
    type: "article",
    authors: ["한지우 (채무조정 전문가)"],
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    section: "채무조정",
    tags: ["카드론", "돌려막기", "채무통합", "대환대출", "고금리"],
    images: [{ url: "https://donworry.kr/og-image.png", width: 1200, height: 630, alt: "돈워리" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "카드론 돌려막기 늪에서 탈출하는 채무통합 방법",
    description: "고금리 이자를 낮추는 실제 대환대출 계산 사례",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
