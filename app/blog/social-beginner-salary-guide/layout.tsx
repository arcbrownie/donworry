import { Metadata } from "next";

export const metadata: Metadata = {
  title: "사회초년생 첫 월급 관리법: 돈 걱정 없는 미래를 위한 첫 단추 | 돈워리",
  description: "사회초년생을 위한 첫 월급 관리 완벽 가이드. 50/30/20 예산 배분법, 비상금 구축, 신용점수 관리, 필수 금융상품까지 실전 월급 관리 노하우를 알려드립니다. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.",
  keywords: "사회초년생 월급 관리, 첫 월급, 예산 관리, 50/30/20 법칙, 월급 저축, 신용점수 관리, 비상금",
  alternates: {
    canonical: "https://donworry.kr/blog/social-beginner-salary-guide",
  },
  openGraph: {
    title: "사회초년생 첫 월급 관리법: 돈 걱정 없는 미래를 위한 첫 단추 | 돈워리",
    description: "사회초년생을 위한 첫 월급 관리 완벽 가이드. 50/30/20 예산 배분법, 비상금 구축, 신용점수 관리, 필수 금융상품까지 실전 월급 관리 노하우를 알려드립니다.",
    url: "https://donworry.kr/blog/social-beginner-salary-guide",
    type: "article",
    authors: ["김민지 (재테크 전문가)"],
  },
};

export default function SocialBeginnerSalaryGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
