import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인파산 면책 후 신용카드 발급까지 걸리는 기간 | 돈워리",
  description: "개인파산 면책 결정 후 언제부터 신용카드를 발급받을 수 있을까? 경제적 재기를 준비하는 분들을 위한 신용회복 타임라인과 카드 발급 전략을 전문가가 알려드립니다.",
  keywords: "개인파산, 면책, 신용카드발급, 파산후신용회복, 경제적재기, 신용회복",
  alternates: {
    canonical: "https://donworry.kr/blog/bankruptcy-discharge-credit-card-timeline",
  },
  openGraph: {
    title: "개인파산 면책 후 신용카드 발급까지 걸리는 기간 | 돈워리",
    description: "개인파산 면책 결정 후 언제부터 신용카드를 발급받을 수 있을까? 경제적 재기를 준비하는 분들을 위한 신용회복 타임라인을 알려드립니다.",
    url: "https://donworry.kr/blog/bankruptcy-discharge-credit-card-timeline",
    type: "article",
    authors: ["서준호 (신용회복 전문가)"],
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    section: "신용회복",
    tags: ["개인파산", "면책", "신용카드", "신용회복", "경제적재기"],
    images: [{ url: "https://donworry.kr/og-image.png", width: 1200, height: 630, alt: "돈워리" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "개인파산 면책 후 신용카드 발급까지 걸리는 기간",
    description: "파산 이후 경제적 재기를 위한 신용회복 타임라인",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
