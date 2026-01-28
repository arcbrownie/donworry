import { Metadata } from "next";

export const metadata: Metadata = {
  title: "자문단 소개 | 돈워리",
  description: "돈워리의 금융 자문단을 소개합니다. 재테크, 대출, 채무조정 분야의 자문단이 신뢰할 수 있는 정보를 제공합니다.",
  alternates: {
    canonical: "https://donworry.kr/experts",
  },
  openGraph: {
    title: "자문단 소개 | 돈워리",
    description: "돈워리의 금융 자문단을 소개합니다. 재테크, 대출, 채무조정 분야의 자문단이 신뢰할 수 있는 정보를 제공합니다.",
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
