"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Scale, ChevronLeft, ChevronRight } from "lucide-react";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import CalculatorWidget from "@/components/ui/CalculatorWidget";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import AdSenseMultiplex from "@/components/adsense/AdSenseMultiplex";
import { mergeFAQs } from "@/lib/faq-extractor";
import type { FAQItem } from "@/lib/faq-extractor";
import { blogFAQsByCategory } from "@/lib/content/blog-faqs";

const debtFeatures = [
  { 
    path: "/debt/test", 
    emoji: "🩺", 
    title: "채무조정 자가진단", 
    description: "나에게 맞는 해결책 찾기",
    tag: "채무조정",
    variant: "debt" as const 
  },
  { 
    path: "/debt/credit-recovery-committee", 
    emoji: "🏛️", 
    title: "신용회복위원회 채무조정", 
    description: "신용회복위원회를 통한 채무조정 안내",
    tag: "채무조정",
    variant: "debt" as const 
  },
  { 
    path: "/debt/personal-rehabilitation-bankruptcy", 
    emoji: "⚖️", 
    title: "개인회생 · 개인파산", 
    description: "법원을 통한 채무 해결 방법",
    tag: "채무조정",
    variant: "debt" as const 
  },
];

const blogPosts = [
  { 
    emoji: "📋", 
    title: "2026년 개인회생 변제금 산정 기준 변경 완벽 가이드", 
    excerpt: "달라진 법원 기준을 숫자로 비교 분석. 최저생계비 인상률, 변제금 계산 방법",
    category: "채무조정",
    path: "/blog/rehabilitation-repayment-2026-changes",
    isPlaceholder: false 
  },
  { 
    emoji: "📊", 
    title: "2026년 가구원수별 최저생계비 및 변제금 계산 가이드", 
    excerpt: "내 가구에 맞는 최저생계비와 개인회생 변제금 계산 방법",
    category: "채무조정",
    path: "/blog/minimum-living-cost-calculator-2026",
    isPlaceholder: false 
  },
  { 
    emoji: "🚨", 
    title: "개인회생 변제금 미납 시 긴급생계비 대출 가이드", 
    excerpt: "변제금을 낼 수 없을 때 긴급생계비 대출로 해결하는 방법",
    category: "채무조정",
    path: "/blog/rehabilitation-late-payment-emergency-loan",
    isPlaceholder: false 
  },
  { 
    emoji: "💪", 
    title: "개인회생 12개월 성실상환 후 추가대출 가이드", 
    excerpt: "성실 변제로 신용을 회복하고 추가 자금을 확보하는 방법",
    category: "채무조정",
    path: "/blog/rehabilitation-12month-additional-loan",
    isPlaceholder: false 
  },
  { 
    emoji: "📊", 
    title: "2026년 개인회생 제도 변경사항 완벽 가이드", 
    excerpt: "새해부터 적용되는 개인회생 변경사항과 준비 방법",
    category: "채무조정",
    path: "/blog/personal-rehabilitation-2026",
    isPlaceholder: false 
  },
  { 
    emoji: "⚖️", 
    title: "개인회생 vs 개인파산 비교", 
    excerpt: "두 제도의 차이점과 선택 기준을 알려드립니다",
    category: "채무조정",
    path: "/debt/personal-rehabilitation-bankruptcy",
    isPlaceholder: false 
  },
  { 
    emoji: "🏛️", 
    title: "신용회복위원회 채무조정 완벽 가이드", 
    excerpt: "신용회복위원회를 통한 채무조정 절차와 혜택 안내",
    category: "채무조정",
    path: "/debt/credit-recovery-committee",
    isPlaceholder: false 
  },
  { 
    emoji: "💡", 
    title: "채무조정 후 신용회복 로드맵", 
    excerpt: "채무조정 이후 신용점수를 회복하는 현실적인 방법",
    category: "채무조정",
    isPlaceholder: true 
  },
];

// 기본 FAQ (블로그에 없는 경우를 위한 fallback)
const defaultDebtFAQ: FAQItem[] = [
  { 
    question: "개인회생과 개인파산의 차이점", 
    answer: "개인회생은 3~5년간 일정 금액을 상환하고 나머지를 탕감받는 제도이고, 개인파산은 모든 재산을 정리하고 면책받는 제도입니다. 소득 유무에 따라 선택이 달라집니다.",
    keywords: ["개인회생", "개인파산"]
  },
  { 
    question: "개인회생 신청 자격 조건", 
    answer: "총 채무액이 담보채무 15억원, 무담보채무 10억원 이하이고, 정기적인 수입이 있어야 합니다. 최근 5년 내 면책받은 적이 없어야 합니다.",
    keywords: ["개인회생", "신청자격"]
  },
  { 
    question: "채무조정 후 신용회복 기간", 
    answer: "개인회생 면책 후 약 5년, 개인파산 면책 후 약 5~7년 정도 지나면 신용정보가 삭제됩니다. 이후 신용카드 발급 등이 가능해집니다.",
    keywords: ["신용회복"]
  },
  { 
    question: "신속채무조정 제도", 
    answer: "금융회사와 협의 없이 신용회복위원회를 통해 진행하는 채무조정입니다. 연체 전이라도 3개월 이상 이자만 납부 중이면 신청 가능합니다.",
    keywords: ["신용회복", "채무조정"]
  },
];

// 블로그 콘텐츠에서 FAQ 자동 수집
const blogFAQs = blogFAQsByCategory["채무조정"]();

// FAQ 병합 (블로그 FAQ + 기본 FAQ)
const debtFAQ = mergeFAQs(blogFAQs, defaultDebtFAQ);

export default function DebtHub() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on("select", () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-category-debt via-category-debt/90 to-category-debt/80">
        <div className="container py-16 md:py-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Scale className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">채무조정</h1>
              <p className="text-white/90 text-lg">다시 시작하는 경제적 자유, 맞춤형 해결책</p>
            </div>
          </div>
          <p className="text-white/90 max-w-2xl mb-6 text-lg">
            과도한 빚으로 힘드신가요? 개인회생, 파산, 신속채무조정 등 
            법적으로 보호받을 수 있는 다양한 해결책이 있습니다.
            돈워리가 새로운 시작을 응원합니다.
          </p>
          <Link href="/debt/test">
            <Button className="bg-white text-category-debt hover:bg-white/90 shadow-xl px-6 py-6 rounded-xl font-semibold">
              <span className="relative z-10 flex items-center gap-2">
                🩺  무료 자가진단 시작하기
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <section className="container py-6 mt-8">
        <div className="therapy-card">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-3">
            <Scale className="w-5 h-5 text-category-debt" strokeWidth={1.5} />
            채무조정이란?
          </h3>
          <div className="prose prose-base max-w-none text-muted-foreground">
            <p>
              채무조정은 과도한 빚으로 인해 정상적인 경제활동이 어려운 분들을 위한 법적 제도입니다.
              개인회생, 개인파산, 신속채무조정 등 다양한 방법 중 본인의 상황에 맞는 최적의 해결책을 찾는 것이 중요합니다.
              돈워리의 자가진단 도구를 통해 먼저 방향을 잡아보시고, 필요하다면 전문가 상담을 받아보세요.
            </p>
          </div>
        </div>
      </section>

      {/* Info Card */}
      <section className="container py-6">
        <div className="therapy-card bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
              <span className="text-2xl">💬</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">혼자 고민하지 마세요</h3>
              <p className="text-base text-muted-foreground mb-4">
                채무 문제는 부끄러운 것이 아닙니다. 대한민국 법은 경제적으로 어려운 분들을 위한 
                다양한 구제 제도를 마련해두고 있습니다. 개인회생을 통해 최대 90%까지 채무를 감면받고,
                새로운 시작을 할 수 있습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/debt/personal-rehabilitation-bankruptcy" className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full hover:bg-secondary/20 transition-colors">개인회생 · 개인파산</Link>
                <Link href="/debt/credit-recovery-committee" className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full hover:bg-secondary/20 transition-colors">신용회복위원회 채무조정</Link>
                <Link href="/debt/test" className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full hover:bg-secondary/20 transition-colors">자가진단</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="container py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <span>📚</span>
            <span>채무조정 가이드</span>
          </h2>
          <p className="text-base text-muted-foreground mt-1">알아두면 도움이 되는 채무 관련 정보</p>
        </div>
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
              {blogPosts.slice(0, Math.min(blogPosts.length, 3)).map((post, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 h-full">
                  <div className="h-full">
                    <BlogCard {...post} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-category-debt text-category-debt hover:bg-category-debt/10 hover:text-category-debt" />
            <CarouselNext className="hidden md:flex -right-12 border-category-debt text-category-debt hover:bg-category-debt/10 hover:text-category-debt" />
            {/* Mobile Navigation */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-category-debt text-category-debt hover:bg-category-debt/10"
                disabled={!canScrollPrev}
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-category-debt text-category-debt hover:bg-category-debt/10"
                disabled={!canScrollNext}
                onClick={() => api?.scrollNext()}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Features */}
      <section className="container py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <span>🔧</span>
            <span>채무 해결 도구</span>
          </h2>
          <p className="text-base text-muted-foreground mt-1">나에게 맞는 해결책을 찾아보세요</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {debtFeatures.map((feature) => (
            <CalculatorWidget key={feature.path} {...feature} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        title="채무조정 FAQ"
        description="채무조정에 관한 자주 묻는 질문"
        items={debtFAQ}
        variant="debt"
        storageKey="debt-faq-keyword-clicks"
      />

      {/* Ad Container */}
      <section className="container py-6">
        <AdSenseMultiplex slot="8118714776" />
      </section>

      <Footer />
    </div>
  );
}
