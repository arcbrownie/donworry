import { Metadata } from "next";

export const metadata: Metadata = {
  title: "전문가 소개 | 돈워리",
  description: "돈워리의 금융 전문가들을 소개합니다. 재테크, 대출, 채무조정 분야의 전문가들이 신뢰할 수 있는 정보를 제공합니다.",
  alternates: {
    canonical: "https://donworry.kr/experts",
  },
  openGraph: {
    title: "전문가 소개 | 돈워리",
    description: "돈워리의 금융 전문가들을 소개합니다. 재테크, 대출, 채무조정 분야의 전문가들이 신뢰할 수 있는 정보를 제공합니다.",
    url: "https://donworry.kr/experts",
  },
};

export default function ExpertsHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
