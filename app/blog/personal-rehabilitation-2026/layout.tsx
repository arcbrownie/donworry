import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026년 달라지는 개인회생 제도 총정리 (최신 업데이트) | 돈워리",
  description: "2026년 새롭게 달라지는 개인회생 제도를 확인하세요. 인상된 최저생계비와 단축된 변제 기간, 주택담보대출 보호 강화까지 빚 탕감을 위한 최신 정보를 상세히 알려드립니다. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.",
  keywords: "2026 개인회생, 최저생계비, 빚 탕감, 채무 조정, 개인회생 제도, 채무자 회생",
  alternates: {
    canonical: "https://donworry.kr/blog/personal-rehabilitation-2026",
  },
  openGraph: {
    title: "2026년 달라지는 개인회생 제도 총정리 | 돈워리",
    description: "2026년 새롭게 달라지는 개인회생 제도. 최저생계비 인상, 변제 기간 단축, 주택담보대출 보호 강화까지 상세 안내. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.",
    url: "https://donworry.kr/blog/personal-rehabilitation-2026",
    type: "article",
  },
};

export default function PersonalRehabilitation2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
