import { Metadata } from "next";

export const metadata: Metadata = {
  title: "알바비 급여명세서 확인법 완벽 가이드 | 돈워리",
  description: "처음 알바하는 청소년과 대학생을 위한 급여명세서 보는 법. 4대보험, 세금 공제, 실수령액 계산까지 세무 전문가가 알려드립니다. 주휴수당, 야간수당 계산법과 불법 사례 대처법도 함께 확인하세요.",
  keywords: "알바비, 급여명세서, 아르바이트, 4대보험, 세금공제, 최저시급, 실수령액, 주휴수당, 야간수당, 연말정산",
  alternates: {
    canonical: "https://donworry.kr/blog/part-time-salary-statement-guide",
  },
  openGraph: {
    title: "알바비 급여명세서 확인법 완벽 가이드 | 돈워리",
    description: "처음 알바하는 청소년과 대학생을 위한 급여명세서 보는 법. 4대보험, 세금 공제, 실수령액 계산까지 세무 전문가가 알려드립니다.",
    url: "https://donworry.kr/blog/part-time-salary-statement-guide",
    type: "article",
    authors: ["강민수 (세무 전문가)"],
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    section: "재테크",
    tags: ["알바비", "급여명세서", "아르바이트", "세금", "4대보험"],
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
    title: "알바비 급여명세서 확인법 완벽 가이드 | 돈워리",
    description: "처음 알바하는 청소년과 대학생을 위한 급여명세서 보는 법.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
