import { Metadata } from "next";

export const metadata: Metadata = {
  title: "재테크 · 절약 | 돈워리 - 일상은 가볍게, 돈 걱정은 없게",
  description: "티끌 모아 태산, 똑똑한 소비 습관. 재테크와 절약을 위한 실용적인 정보와 계산기를 제공합니다. 어제보다 가벼운 오늘을 만드는 당신의 솔루션, 돈워리.",
  keywords: "재테크, 절약, 생활비 절약, 알바 실수령액, 주휴수당, 가계비 절약, 1인 가구 절약, 절약 팁, 금융 절약",
  alternates: {
    canonical: "https://donworry.kr/savings",
  },
  openGraph: {
    title: "재테크 · 절약 | 돈워리",
    description: "티끌 모아 태산, 똑똑한 소비 습관. 재테크와 절약을 위한 실용적인 정보와 계산기를 제공합니다. 어제보다 가벼운 오늘을 만드는 당신의 솔루션, 돈워리.",
    url: "https://donworry.kr/savings",
  },
};

export default function SavingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
