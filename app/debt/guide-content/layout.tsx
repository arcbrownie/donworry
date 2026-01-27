import { Metadata } from "next";

export const metadata: Metadata = {
  title: "채무조정 가이드 | 돈워리 - 개인회생·파산·신속채무조정 상세 안내",
  description: "개인회생·파산·신속채무조정 상세 안내",
  alternates: {
    canonical: "https://donworry.kr/debt/guide-content",
  },
};

export default function DebtGuideContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
