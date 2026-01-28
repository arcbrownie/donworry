import { Metadata } from "next";

export const metadata: Metadata = {
  title: "국세 체납자 금융기관 이용 제한 해제 시기 완벽 가이드 | 돈워리",
  description: "국세 체납으로 금융거래가 제한됐다면? 연체 기록 삭제부터 정상화 과정까지 전문가가 단계별로 알려드립니다. 체납 해소 후 언제부터 대출이 가능한지 확인하세요.",
  keywords: "국세체납, 금융거래제한, 체납해제, 연체기록삭제, 신용회복, 세금체납, 금융거래정상화",
  alternates: {
    canonical: "https://donworry.kr/blog/tax-delinquency-restriction-release",
  },
  openGraph: {
    title: "국세 체납자 금융기관 이용 제한 해제 시기 완벽 가이드 | 돈워리",
    description: "국세 체납으로 금융거래가 제한됐다면? 연체 기록 삭제부터 정상화 과정까지 전문가가 단계별로 알려드립니다.",
    url: "https://donworry.kr/blog/tax-delinquency-restriction-release",
    type: "article",
    authors: ["강민수 (세무 전문가)"],
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    section: "금융 · 대출",
    tags: ["국세체납", "금융거래제한", "체납해제", "연체기록삭제", "신용회복"],
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
    title: "국세 체납자 금융기관 이용 제한 해제 시기 완벽 가이드 | 돈워리",
    description: "체납 해소 후 금융거래 정상화 과정",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
