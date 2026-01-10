import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowRight, PiggyBank, ChevronLeft, ChevronRight } from "lucide-react";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import CalculatorWidget from "@/components/ui/CalculatorWidget";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const calculators = [
  { 
    path: "/cal/part-time", 
    emoji: "💰", 
    title: "알바 실수령액 계산기", 
    description: "2026년 최저임금 반영, 주휴수당 포함 실수령액",
    tag: "재테크 · 절약",
    variant: "life" as const 
  },
  { 
    path: "/cal/soldier", 
    emoji: "🎖️", 
    title: "군인 적금 계산기", 
    description: "장병내일준비적금 만기금액 & 전역일",
    tag: "재테크 · 절약",
    variant: "life" as const 
  },
  { 
    path: "/cal/unemployment", 
    emoji: "🏥", 
    title: "실업급여 예측 계산기", 
    description: "실업급여 예상 수령액 계산",
    tag: "재테크 · 절약",
    variant: "life" as const 
  },
];

const blogPosts = [
  { 
    emoji: "💡", 
    title: "알바생 주휴수당 완벽 가이드", 
    excerpt: "2026년 최저임금 기준 주휴수당 계산법과 지급 조건",
    category: "재테크 · 절약",
    path: "/blog/weekly-holiday-pay-guide",
    isPlaceholder: false 
  },
  { 
    emoji: "📊", 
    title: "사회초년생 첫 월급 관리법", 
    excerpt: "월급날만 기다리지 말고, 똑똑하게 관리하는 방법을 알려드립니다.",
    category: "재테크 · 절약",
    path: "/blog/social-beginner-salary-guide",
    isPlaceholder: false 
  },
  { 
    emoji: "🏠", 
    title: "1인 가구 생활비 절약 꿀팁 10가지", 
    excerpt: "매달 10만원 이상 아끼는 실천 가능한 방법들",
    category: "재테크 · 절약",
    path: "/blog/one-person-household-savings-detailed",
    isPlaceholder: false 
  },
  { 
    emoji: "🎖️", 
    title: "2026년 군인 월급 인상 정보", 
    excerpt: "병장 기준 월급 변화와 적금 활용 전략을 알아보세요.",
    category: "재테크 · 절약",
    isPlaceholder: true 
  },
].sort((a, b) => {
  // 콘텐츠가 있는 것(isPlaceholder: false) 우선 정렬
  if (a.isPlaceholder === b.isPlaceholder) return 0;
  return a.isPlaceholder ? 1 : -1;
});

const savingsFAQ = [
  { 
    question: "주휴수당 계산 방법", 
    answer: "주 15시간 이상 근무하면 1일분의 유급휴일수당이 발생합니다. 주휴수당 = 1일 소정근로시간 × 시급으로 계산됩니다.",
    keywords: ["주휴수당", "알바", "계산"]
  },
  { 
    question: "2026년 최저임금", 
    answer: "2026년 최저임금은 시간당 10,030원입니다. 월급으로 환산하면 주 40시간 기준 약 209만원입니다.",
    keywords: ["최저임금", "알바"]
  },
  { 
    question: "군인 적금 가입 조건", 
    answer: "현역 병사라면 누구나 장병내일준비적금에 가입할 수 있습니다. 월 40만원까지 저축 가능하며, 정부 매칭지원금이 추가됩니다.",
    keywords: ["군인", "적금", "저축"]
  },
  { 
    question: "실업급여 수급 자격", 
    answer: "고용보험에 180일 이상 가입하고, 비자발적 사유로 퇴직한 경우 실업급여를 받을 수 있습니다. 자발적 퇴직 시에도 일정 조건 충족 시 가능합니다.",
    keywords: ["실업급여", "고용보험"]
  },
];

export default function SavingsHub() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    // SEO Meta Tags
    document.title = "재테크 · 절약 | 돈워리 - 일상은 가볍게, 돈 걱정은 없게";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '티끌 모아 태산, 똑똑한 소비 습관. 재테크와 절약을 위한 실용적인 정보와 계산기를 제공합니다. 어제보다 가벼운 오늘을 만드는 당신의 솔루션, 돈워리.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', '재테크, 절약, 생활비 절약, 알바 실수령액, 주휴수당, 가계비 절약, 1인 가구 절약, 절약 팁, 금융 절약');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', '재테크 · 절약 | 돈워리');

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', '티끌 모아 태산, 똑똑한 소비 습관. 재테크와 절약을 위한 실용적인 정보와 계산기를 제공합니다. 어제보다 가벼운 오늘을 만드는 당신의 솔루션, 돈워리.');
  }, []);

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
      <section className="relative overflow-hidden bg-category-life/10">
        <div className="container py-12 md:py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-category-life/20 flex items-center justify-center">
              <PiggyBank className="w-7 h-7 text-category-life" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">재테크 · 절약</h1>
              <p className="text-muted-foreground">티끌 모아 태산, 똑똑한 소비 습관</p>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            알바 실수령액, 군인 적금 등 2030 세대를 위한 재테크 · 절약 정보를 제공합니다.
            티끌 모아 태산, 똑똑한 소비 습관을 만들어보세요.
          </p>
        </div>
      </section>

      {/* Calculators */}
      <section className="container py-12">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-3">
            <span>🔢</span>
            <span>재테크 · 절약 계산기</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1">재테크 · 절약에 필요한 필수 계산기</p>
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
          <h2 className="text-xl font-bold text-foreground flex items-center gap-3">
            <span>📚</span>
            <span>재테크 · 절약 가이드</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1">일상에서 바로 적용할 수 있는 재테크 · 절약 팁</p>
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
            <CarouselPrevious className="hidden md:flex -left-12 border-category-life text-category-life hover:bg-category-life/10 hover:text-category-life" />
            <CarouselNext className="hidden md:flex -right-12 border-category-life text-category-life hover:bg-category-life/10 hover:text-category-life" />
            {/* Mobile Navigation */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-category-life text-category-life hover:bg-category-life/10"
                disabled={!canScrollPrev}
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-category-life text-category-life hover:bg-category-life/10"
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
        title="재테크 · 절약 FAQ"
        description="자주 묻는 질문을 확인해보세요"
        items={savingsFAQ}
        variant="life"
        storageKey="savings-faq-keyword-clicks"
      />

      {/* Ad Container */}
      <section className="container py-6">
        <div className="ad-container py-10">
          <span>광고 영역 (AdSense)</span>
        </div>
      </section>

      <Footer />
    </div>
  );
}
