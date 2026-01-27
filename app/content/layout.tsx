import { Metadata } from "next";

export const metadata: Metadata = {
  title: "최신 콘텐츠 | 돈워리 - 알아두면 좋은 금융 정보",
  description: "알아두면 좋은 금융 정보를 제공하는 돈워리의 최신 콘텐츠를 확인하세요.",
  alternates: {
    canonical: "https://donworry.kr/content",
  },
};

export default function ContentHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
