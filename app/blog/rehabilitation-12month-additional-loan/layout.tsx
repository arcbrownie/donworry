import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인회생 12개월 성실상환 후 추가대출 가이드 | 돈워리",
  description: "개인회생 인가 후 12개월 성실 변제 시 받을 수 있는 추가대출 완벽 가이드. 자격 조건, 한도, 금리, 신청 방법을 채무조정 전문가가 알려드립니다.",
  keywords: "개인회생추가대출, 성실상환자대출, 12개월변제, 개인회생대출, 햇살론, 신용회복위원회대출",
  alternates: {
    canonical: "https://donworry.kr/blog/rehabilitation-12month-additional-loan",
  },
  openGraph: {
    title: "개인회생 12개월 성실상환 후 추가대출 가이드 | 돈워리",
    description: "개인회생 인가 후 12개월 성실 변제 시 받을 수 있는 추가대출 완벽 가이드. 자격 조건, 한도, 금리, 신청 방법을 채무조정 전문가가 알려드립니다.",
    url: "https://donworry.kr/blog/rehabilitation-12month-additional-loan",
    type: "article",
    authors: ["서준호 (신용회복 전문가)"],
    publishedTime: "2026-01-28T00:00:00.000Z",
    modifiedTime: "2026-01-28T00:00:00.000Z",
    section: "채무조정",
    tags: ["개인회생추가대출", "성실상환자대출", "12개월변제", "개인회생", "햇살론"],
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
    title: "개인회생 12개월 성실상환 후 추가대출 가이드 | 돈워리",
    description: "개인회생 인가 후 12개월 성실 변제 시 받을 수 있는 추가대출",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
