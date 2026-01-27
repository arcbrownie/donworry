import { Metadata } from "next";

export const metadata: Metadata = {
  title: "1인 가구 생활비 절약 꿀팁 10가지: 매달 최소 15만원 확정 절감 가이드 | 돈워리",
  description: "1인 가구를 위한 생활비 절약 완벽 가이드. 배달 앱, 통신비, 편의점, OTT 등 10가지 절약 방법으로 매달 최소 15만원 이상 확실히 절감하세요. 실질적인 절감액을 계산해보세요. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.",
  keywords: "1인 가구 절약, 생활비 절약, 배달 앱 절약, 알뜰폰, 통신비 절약, 가계비 절약, 절약 팁",
  alternates: {
    canonical: "https://donworry.kr/blog/one-person-household-savings",
  },
  openGraph: {
    title: "1인 가구 생활비 절약 꿀팁 10가지 | 돈워리",
    description: "1인 가구를 위한 생활비 절약 완벽 가이드. 매달 최소 15만원 이상 확실히 절감하세요.",
    url: "https://donworry.kr/blog/one-person-household-savings",
    type: "article",
  },
};

export default function OnePersonHouseholdSavingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
