import { Metadata } from "next";

export const metadata: Metadata = {
  title: "소액 대출 연체 5일 전 긴급 해결 방법 | 돈워리",
  description: "소액 대출 연체 기록이 남기 전 5일 골든타임 안에 해결하는 방법. 단기 연체 대처법, 신용점수 영향, 긴급 자금 마련 방법을 금융 전문가가 알려드립니다.",
  keywords: "소액대출연체, 5일골든타임, 단기연체, 연체기록, 신용점수하락, 긴급대출",
  alternates: {
    canonical: "https://donworry.kr/blog/loan-overdue-5day-solution",
  },
  openGraph: {
    title: "소액 대출 연체 5일 전 긴급 해결 방법 | 돈워리",
    description: "소액 대출 연체 기록이 남기 전 5일 골든타임 안에 해결하는 방법. 단기 연체 대처법, 신용점수 영향, 긴급 자금 마련 방법을 금융 전문가가 알려드립니다.",
    url: "https://donworry.kr/blog/loan-overdue-5day-solution",
    type: "article",
    authors: ["최동현 (대출 전문가)"],
    publishedTime: "2026-01-28T00:00:00.000Z",
    modifiedTime: "2026-01-28T00:00:00.000Z",
    section: "대출",
    tags: ["소액대출연체", "5일골든타임", "단기연체", "연체기록", "신용점수"],
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
    title: "소액 대출 연체 5일 전 긴급 해결 방법 | 돈워리",
    description: "연체 기록이 남기 전 5일 골든타임 안에 해결하는 방법",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
