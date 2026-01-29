import { Metadata } from "next";

export const metadata: Metadata = {
  title: "무직자 정부지원 대환대출 서민금융진흥원 신청법 | 돈워리",
  description: "무직자도 대환대출이 가능할까? 서민금융진흥원 등 공신력 있는 기관의 무직자 대환대출 신청 자격, 절차, 필요 서류를 금융 전문가가 알려드립니다.",
  keywords: "무직자대출, 대환대출, 서민금융진흥원, 정부지원대출, 햇살론, 무소득자대출",
  alternates: {
    canonical: "https://donworry.kr/blog/unemployed-government-refinance-loan",
  },
  openGraph: {
    title: "무직자 정부지원 대환대출 서민금융진흥원 신청법 | 돈워리",
    description: "무직자도 대환대출이 가능할까? 서민금융진흥원 등 공신력 있는 기관의 무직자 대환대출 신청 방법을 알려드립니다.",
    url: "https://donworry.kr/blog/unemployed-government-refinance-loan",
    type: "article",
    authors: ["최동현 (대출 전문가)"],
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    section: "대출",
    tags: ["무직자대출", "대환대출", "서민금융진흥원", "정부지원", "햇살론"],
    images: [{ url: "https://donworry.kr/og-image.png", width: 1200, height: 630, alt: "돈워리" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "무직자 정부지원 대환대출 서민금융진흥원 신청법",
    description: "무직자 대환대출 신청 자격 및 절차",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
