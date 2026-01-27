import { Metadata } from "next";

export const metadata: Metadata = {
  title: "돈워리 소개 | 일상은 가볍게, 돈 걱정은 없게",
  description: "돈워리는 어제보다 가벼운 오늘을 만드는 당신의 금융 솔루션입니다. 채무조정 안내, 금융 계산기, 금융 가이드를 제공합니다. 일상은 가볍게, 돈 걱정은 없게.",
  alternates: {
    canonical: "https://donworry.kr/legal/about",
  },
  openGraph: {
    title: "돈워리 소개 | 일상은 가볍게, 돈 걱정은 없게",
    description: "돈워리는 어제보다 가벼운 오늘을 만드는 당신의 금융 솔루션입니다. 채무조정 안내, 금융 계산기, 금융 가이드를 제공합니다. 일상은 가볍게, 돈 걱정은 없게.",
    url: "https://donworry.kr/legal/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
