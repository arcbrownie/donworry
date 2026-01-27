import { Metadata } from "next";

export const metadata: Metadata = {
  title: "프리랜서 3.3% 환급 계산기 | 돈워리 - 종합소득세 환급 예상액",
  description: "매달 떼인 세금, 내년 5월에 얼마나 돌려받을 수 있을까요? 프리랜서 원천징수 3.3% 환급 예상액을 계산해보세요.",
  keywords: "프리랜서 환급, 3.3% 환급, 종합소득세 환급, 원천징수 환급, 프리랜서 세금, 단순경비율",
  alternates: {
    canonical: "https://donworry.kr/cal/freelancer",
  },
  openGraph: {
    title: "프리랜서 3.3% 환급 계산기 | 돈워리",
    description: "매달 떼인 세금, 내년 5월에 얼마나 돌려받을 수 있을까요? 프리랜서 원천징수 3.3% 환급 예상액을 계산해보세요.",
    url: "https://donworry.kr/cal/freelancer",
  },
};

export default function FreelancerCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
