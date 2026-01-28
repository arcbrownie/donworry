import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인회생 변제금 미납 시 긴급생계비 대출 가이드 | 돈워리",
  description: "개인회생 변제금을 낼 수 없을 때, 긴급생계비 대출로 해결하는 방법. 신청 자격, 한도, 금리, 신청 절차를 채무조정 전문가가 상세히 알려드립니다.",
  keywords: "개인회생, 변제금미납, 긴급생계비대출, 채무조정, 변제금연체, 개인회생대출, 긴급생활비",
  alternates: {
    canonical: "https://donworry.kr/blog/rehabilitation-late-payment-emergency-loan",
  },
  openGraph: {
    title: "개인회생 변제금 미납 시 긴급생계비 대출 가이드 | 돈워리",
    description: "개인회생 변제금을 낼 수 없을 때, 긴급생계비 대출로 해결하는 방법. 신청 자격, 한도, 금리, 신청 절차를 채무조정 전문가가 상세히 알려드립니다.",
    url: "https://donworry.kr/blog/rehabilitation-late-payment-emergency-loan",
    type: "article",
    authors: ["한지우 (채무조정 전문가)"],
    publishedTime: "2026-01-28T00:00:00.000Z",
    modifiedTime: "2026-01-28T00:00:00.000Z",
    section: "채무조정",
    tags: ["개인회생", "변제금미납", "긴급생계비대출", "채무조정", "변제금연체"],
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
    title: "개인회생 변제금 미납 시 긴급생계비 대출 가이드 | 돈워리",
    description: "개인회생 변제금을 낼 수 없을 때 긴급생계비 대출로 해결하는 방법",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
