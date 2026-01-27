import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setCanonicalTag } from "@/lib/utils";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import CalculatorWidget from "@/components/ui/CalculatorWidget";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { CreditCard, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import AdSenseMultiplex from "@/components/adsense/AdSenseMultiplex";
import { mergeFAQs } from "@/lib/faq-extractor";
import type { FAQItem } from "@/lib/faq-extractor";

// 블로그 콘텐츠에서 FAQ import
import { faqs as firstLoanGuideFAQs } from "@/pages/content/FirstLoanGuide2030";

const calculators = [
  { 
    path: "/cal/freelancer", 
    emoji: "💼", 
    title: "프리랜서 3.3% 환급 계산기", 
    description: "종합소득세 환급 예상액 미리 계산",
    tag: "금융 · 대출",
    variant: "finance" as const 
  },
  { 
    path: "/cal/youth-tax", 
    emoji: "🎓", 
    title: "청년 세금감면 계산기", 
    description: "중소기업 취업청년 소득세 90% 감면",
    tag: "금융 · 대출",
    variant: "finance" as const 
  },
];

const blogPosts = [
  { 
    emoji: "🏦", 
    title: "사회초년생을 위한 대출 가이드", 
    excerpt: "신용점수 관리부터 유리한 대출 상품 고르는 법까지",
    category: "금융 · 대출",
    path: "/blog/first-loan-guide-2030",
    isPlaceholder: false 
  },
  { 
    emoji: "💳", 
    title: "신용카드 vs 체크카드 비교", 
    excerpt: "소비 패턴에 따른 최적의 카드 선택법",
    category: "금융 · 대출",
    path: "/blog/credit-card-vs-check-card",
    isPlaceholder: false 
  },
  { 
    emoji: "📈", 
    title: "사회초년생을 위한 투자 입문서", 
    excerpt: "적금만으로는 부족하다! 첫 투자를 시작하는 방법",
    category: "금융 · 대출",
    path: "/blog/investment-guide-for-beginners",
    isPlaceholder: false 
  },
  { 
    emoji: "💰", 
    title: "프리랜서 세금 신고 완벽 가이드", 
    excerpt: "5월 종합소득세 신고, 이것만 알면 환급받는다",
    category: "금융 · 대출",
    isPlaceholder: true 
  },
].sort((a, b) => {
  // 콘텐츠가 있는 것(isPlaceholder: false) 우선 정렬
  if (a.isPlaceholder === b.isPlaceholder) return 0;
  return a.isPlaceholder ? 1 : -1;
});

// 기본 FAQ (블로그에 없는 경우를 위한 fallback)
const defaultFinanceFAQ: FAQItem[] = [
  { 
    question: "프리랜서 3.3% 원천징수", 
    answer: "프리랜서가 용역비를 받을 때 미리 떼는 세금(소득세 3% + 지방소득세 0.3%)입니다. 5월 종합소득세 신고 시 환급받을 수 있습니다.",
    keywords: ["프리랜서", "세금", "환급"]
  },
  { 
    question: "청년 소득세 감면 혜택 대상", 
    answer: "만 15~34세 청년이 중소기업에 취업하면 5년간 소득세의 90%를 감면받을 수 있습니다. 군 복무기간은 연령 계산에서 제외됩니다.",
    keywords: ["청년", "세금", "혜택"]
  },
  { 
    question: "적금 vs 투자 선택 기준", 
    answer: "단기 자금은 적금, 장기 목표는 투자가 유리합니다. 안전성과 수익성의 밸런스를 고려해 분산하는 것이 좋습니다.",
    keywords: ["적금", "투자", "저축"]
  },
];

// 블로그 콘텐츠에서 FAQ 자동 수집
const blogContentFAQs = [
  { faqs: firstLoanGuideFAQs }
];

// FAQ 병합 (블로그 FAQ + 기본 FAQ)
const financeFAQ = mergeFAQs(
  ...blogContentFAQs.map(content => content.faqs),
  defaultFinanceFAQ
);

export default function FinanceHub() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Canonical Tag
    setCanonicalTag(location.pathname);

    // SEO Meta Tags
    document.title = "금융 · 대출 | 돈워리 - 일상은 가볍게, 돈 걱정은 없게";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '나에게 딱 맞는 금리와 상품 찾기. 대출 가이드, 프리랜서 세금 환급, 청년 세금감면 등 금융 정보를 제공합니다. 어제보다 가벼운 오늘을 만드는 당신의 솔루션, 돈워리.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', '금융, 대출, 대출 가이드, 프리랜서 세금, 3.3% 환급, 청년 세금감면, 중기청 소득세 감면, 저금리 대출, 신용점수, DSR');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', '금융 · 대출 | 돈워리');

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', '나에게 딱 맞는 금리와 상품 찾기. 대출 가이드, 프리랜서 세금 환급, 청년 세금감면 등 금융 정보를 제공합니다. 어제보다 가벼운 오늘을 만드는 당신의 솔루션, 돈워리.');
  }, [location.pathname]);

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
      <section className="relative overflow-hidden bg-gradient-to-br from-category-finance via-category-finance/90 to-category-finance/80">
        <div className="container py-16 md:py-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <CreditCard className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">금융 · 대출</h1>
              <p className="text-white/90 text-lg">나에게 딱 맞는 금리와 상품 찾기</p>
            </div>
          </div>
          <p className="text-white/90 max-w-2xl text-lg">
            프리랜서 세금 환급, 청년 세금감면 등 2030 세대를 위한 실용적인 금융 · 대출 정보를 제공합니다.
            나에게 딱 맞는 금리와 상품을 찾아보세요.
          </p>
        </div>
      </section>

      {/* Calculators */}
      <section className="container py-12 mt-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <span>🧮</span>
            <span>금융 · 대출 계산기</span>
          </h2>
          <p className="text-base text-muted-foreground mt-1">세금과 금리를 쉽게 계산하세요</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {calculators.map((calc) => (
            <CalculatorWidget key={calc.path} {...calc} />
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="container py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <span>📚</span>
            <span>금융 · 대출 가이드</span>
          </h2>
          <p className="text-base text-muted-foreground mt-1">알아두면 돈 되는 금융 · 대출 지식</p>
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
            <CarouselPrevious className="hidden md:flex -left-12 border-category-finance text-category-finance hover:bg-category-finance/10 hover:text-category-finance" />
            <CarouselNext className="hidden md:flex -right-12 border-category-finance text-category-finance hover:bg-category-finance/10 hover:text-category-finance" />
            {/* Mobile Navigation */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-category-finance text-category-finance hover:bg-category-finance/10"
                disabled={!canScrollPrev}
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-category-finance text-category-finance hover:bg-category-finance/10"
                disabled={!canScrollNext}
                onClick={() => api?.scrollNext()}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Carousel>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        title="금융 · 대출 FAQ"
        description="금융 · 대출에 관한 자주 묻는 질문"
        items={financeFAQ}
        variant="finance"
        storageKey="finance-faq-keyword-clicks"
      />

      {/* Ad Container */}
      <section className="container py-6">
        <AdSenseMultiplex slot="8118714776" />
      </section>

      <Footer />
    </div>
  );
}