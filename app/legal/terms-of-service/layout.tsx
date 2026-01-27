import { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | 돈워리",
  description: "돈워리 서비스 이용에 관한 약관입니다.",
  alternates: {
    canonical: "https://donworry.kr/legal/terms-of-service",
  },
  openGraph: {
    title: "이용약관 | 돈워리",
    description: "돈워리 서비스 이용에 관한 약관입니다.",
    url: "https://donworry.kr/legal/terms-of-service",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
