"use client";

import { Zap, Calculator, Users, PiggyBank, ShieldCheck, ArrowRight, Percent, Wallet, Briefcase, GraduationCap, Medal, Umbrella, Scale, Activity } from "lucide-react";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/button";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { getLatestContents } from "@/lib/content";
import { useState, useEffect } from "react";
import AdSenseDisplayBottom from "@/components/adsense/AdSenseDisplayBottom";

const mainServices = [
  {
    title: "채무조정 솔루션",
    description: "감당하기 힘든 빚, 전문가와 함께 해결책을 찾아보세요. 개인회생부터 신용회복까지 맞춤형 진단을 제공합니다.",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600",
    linkText: "진단하기",
    path: "/debt/test",
  },
  {
    title: "금융 계산기",
    description: "대출 이자, 적금 만기액, 연말정산 등 복잡한 금융 계산을 쉽고 정확하게 도와드립니다.",
    icon: Calculator,
    color: "bg-purple-100 text-purple-600",
    linkText: "계산하기",
    path: "/cal",
  },
  {
    title: "재테크 꿀팁",
    description: "사회초년생부터 은퇴 준비까지, 상황에 맞는 실전 재테크 노하우와 절약 팁을 확인하세요.",
    icon: PiggyBank,
    color: "bg-green-100 text-green-600",
    linkText: "알아보기",
    path: "/content",
  },
];

// 실제 계산기 페이지와 연결 (cal 허브·각 페이지 제목 기준)
const popularCalculators = [
  { name: "2026 알바 실수령액", icon: Wallet, path: "/cal/part-time" },
  { name: "군 장병 적금 계산기", icon: Medal, path: "/cal/soldier" },
  { name: "프리랜서 3.3% 환급", icon: Briefcase, path: "/cal/freelancer" },
  { name: "중기청 소득세 감면", icon: GraduationCap, path: "/cal/youth-tax" },
  { name: "이자 절감 계산기", icon: Percent, path: "/cal/interest-saving" },
  { name: "개인회생 탕감액 계산기", icon: Scale, path: "/cal/debt-reduction" },
  { name: "실업급여 예측 계산기", icon: Umbrella, path: "/cal/unemployment" },
];

export default function HomePage() {
  const latestContents = getLatestContents(10);
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      {/* Hero Section - 매직패턴 디자인 적용 */}
      <section className="bg-gradient-to-b from-purple-50 to-background py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
              일상은 가볍게,
              <br className="sm:hidden" />
              <span className="text-[#7C3AED]"> 돈 걱정은 없게</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              어제보다 가벼운 오늘을 만드는 당신의 금융 솔루션 -
              <br className="hidden sm:block" />
              돈워리와 함께 복잡한 금융 고민을 해결하세요!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/debt/test" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-h-[4.55rem] bg-[#7C3AED] hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-purple-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Activity className="w-5 h-5" strokeWidth={2.5} />
                  채무조정 무료 진단
                </Button>
              </Link>
              <Link href="/cal" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto min-h-[4.55rem] bg-background text-foreground border-border px-8 py-4 rounded-xl text-lg font-bold hover:bg-muted hover:border-muted-foreground/30 transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5 text-[#7C3AED]" />
                  계산기 둘러보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2단: 주요 서비스 + 계산기 (오른쪽 광고만, 무료 상담 안내 제외) */}
      <section className="container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 왼쪽: 주요 서비스 + 계산기 */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">주요 서비스</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mainServices.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 min-h-[4.5rem]">
                        {feature.description}
                      </p>
                      <Link
                        href={feature.path}
                        className="inline-flex items-center text-sm font-semibold text-[#7C3AED] hover:text-purple-700"
                      >
                        {feature.linkText} <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">인기 계산기</h2>
                <Link href="/cal" className="inline-flex items-center text-sm font-medium text-[#7C3AED] hover:text-purple-700">
                  전체보기 <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {popularCalculators.map((calc, index) => {
                  const Icon = calc.icon;
                  return (
                    <Link
                      key={index}
                      href={calc.path}
                      className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-xl hover:bg-purple-50 hover:text-[#7C3AED] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-background rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-[#7C3AED]" />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-[#7C3AED] text-center">
                        {calc.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 최신 가이드 - 계산기 아래, 2번째 이미지 레이아웃 */}
            <div className="border-t border-border pt-8">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-2xl font-bold text-foreground">최신 가이드</h2>
                <Link href="/content" className="inline-flex items-center text-sm font-medium text-[#7C3AED] hover:text-purple-700">
                  전체보기 <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                돈워리가 준비한 실용적인 금융 정보
              </p>
              {latestContents.length > 0 && (
                <div className="relative">
                  <Carousel
                    opts={{
                      align: "start",
                      slidesToScroll: 1,
                    }}
                    setApi={setApi}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {latestContents.map((content) => (
                        <CarouselItem key={content.path} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                          <BlogCard
                            title={content.title}
                            excerpt={content.excerpt}
                            emoji={content.emoji}
                            category={content.category}
                            path={content.path}
                            isPlaceholder={content.isPlaceholder}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {latestContents.length > 3 && (
                      <>
                        <CarouselPrevious className="hidden md:flex -left-12 h-10 w-10 rounded-full border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground shadow-sm" />
                        <CarouselNext className="hidden md:flex -right-12 h-10 w-10 rounded-full border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground shadow-sm" />
                      </>
                    )}
                  </Carousel>
                </div>
              )}
            </div>
          </div>

          {/* 오른쪽: 본 디스플레이 광고 (donworry_display_bottom) */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6">
            <div className="min-h-[250px]">
              <AdSenseDisplayBottom slot="8564710988" className="w-full" />
            </div>
            <div className="sticky top-24 min-h-[250px]">
              <AdSenseDisplayBottom slot="8564710988" className="w-full" />
            </div>
          </aside>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">정확한 계산</h3>
              <p className="text-muted-foreground">최신 법률과 제도를 반영한 정확한 계산기</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">자문단 기고</h3>
              <p className="text-muted-foreground">경험 많은 자문단의 신뢰할 수 있는 정보</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">빠른 진단</h3>
              <p className="text-muted-foreground">복잡한 절차 없이 간단하게 시작하세요</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - 매직패턴 디자인 */}
      <section className="bg-[#7C3AED] py-16 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">혼자 고민하지 마세요</h2>
          <p className="text-purple-100 mb-8 text-lg">
            전문가의 무료 진단으로 당신에게 딱 맞는 해결책을 찾아드립니다.
            <br />
            지금 바로 확인해보세요.
          </p>
          <Link href="/debt/test" className="inline-block w-full sm:w-auto">
            <Button className="bg-white text-[#7C3AED] hover:bg-purple-50 px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-colors w-full sm:w-auto">
              무료 진단 시작하기
            </Button>
          </Link>
          <p className="mt-4 text-xs text-purple-200 opacity-80">
            * 별도의 개인정보는 요구하지도 않으며 저장되지도 않습니다.
          </p>
        </div>
      </section>

      <MobileFloatingCTA />
      <Footer />
    </div>
  );
}
