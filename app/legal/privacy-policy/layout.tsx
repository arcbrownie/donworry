import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 돈워리",
  description: "돈워리의 개인정보 처리에 관한 안내입니다.",
  alternates: {
    canonical: "https://donworry.kr/legal/privacy-policy",
  },
  openGraph: {
    title: "개인정보처리방침 | 돈워리",
    description: "돈워리의 개인정보 처리에 관한 안내입니다.",
    url: "https://donworry.kr/legal/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
