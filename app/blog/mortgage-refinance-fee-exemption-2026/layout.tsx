import { Metadata } from "next";

export const metadata: Metadata = {
  title: "주택담보대출 갈아타기 중도상환수수료 면제 조건 2026 | 돈워리",
  description: "2026년 정부 지침에 따른 주택담보대출 갈아타기 중도상환수수료 면제 조건 완벽 정리. 수수료 절감 팁부터 대환대출 신청 방법까지 대출 전문가가 알려드립니다.",
  keywords: "주택담보대출, 갈아타기, 중도상환수수료, 수수료면제, 대환대출, 2026년기준",
  alternates: {
    canonical: "https://donworry.kr/blog/mortgage-refinance-fee-exemption-2026",
  },
  openGraph: {
    title: "주택담보대출 갈아타기 중도상환수수료 면제 조건 2026 | 돈워리",
    description: "2026년 정부 지침에 따른 주택담보대출 갈아타기 중도상환수수료 면제 조건 완벽 정리. 수수료 절감 팁부터 대환대출 신청 방법까지 대출 전문가가 알려드립니다.",
    url: "https://donworry.kr/blog/mortgage-refinance-fee-exemption-2026",
    type: "article",
    authors: ["최동현 (대출 전문가)"],
    publishedTime: "2026-01-28T00:00:00.000Z",
    modifiedTime: "2026-01-28T00:00:00.000Z",
    section: "대출",
    tags: ["주택담보대출", "갈아타기", "중도상환수수료", "대환대출", "2026"],
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
    title: "주택담보대출 갈아타기 중도상환수수료 면제 조건 2026 | 돈워리",
    description: "2026년 정부 지침에 따른 수수료 면제 조건과 절감 팁",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
