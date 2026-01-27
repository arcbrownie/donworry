import { Metadata } from "next";

export const metadata: Metadata = {
  title: "법적 고지 | 돈워리",
  description: "돈워리 서비스 이용에 관한 법적 고지사항입니다.",
  alternates: {
    canonical: "https://donworry.kr/legal/disclaimer",
  },
  openGraph: {
    title: "법적 고지 | 돈워리",
    description: "돈워리 서비스 이용에 관한 법적 고지사항입니다.",
    url: "https://donworry.kr/legal/disclaimer",
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
