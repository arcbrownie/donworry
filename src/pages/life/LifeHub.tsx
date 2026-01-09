import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import CalculatorWidget from "@/components/ui/CalculatorWidget";
import FAQAccordion from "@/components/ui/FAQAccordion";

const calculators = [
  { 
    path: "/cal/part-time", 
    emoji: "💰", 
    title: "알바 실수령액 계산기", 
    description: "2026년 최저임금 반영, 주휴수당 포함 실수령액",
    tag: "생활",
    variant: "life" as const 
  },
  { 
    path: "/cal/soldier", 
    emoji: "🎖️", 
    title: "군인 적금 계산기", 
    description: "장병내일준비적금 만기금액 & 전역일",
    tag: "생활",
    variant: "life" as const 
  },
  { 
    path: "/cal/unemployment", 
    emoji: "🏥", 
    title: "실업급여 예측 계산기", 
    description: "실업급여 예상 수령액 계산",
    tag: "생활",
    variant: "life" as const 
  },
];

const blogPosts = [
  { 
    emoji: "💡", 
    title: "알바생 주휴수당 완벽 가이드", 
    excerpt: "2026년 최저임금 기준 주휴수당 계산법과 지급 조건",
    category: "생활",
    isPlaceholder: true 
  },
  { 
    emoji: "🎖️", 
    title: "2026년 군인 월급 인상 정보", 
    excerpt: "병장 기준 월급 변화와 적금 활용 전략을 알아보세요.",
    category: "생활",
    isPlaceholder: true 
  },
  { 
    emoji: "📊", 
    title: "사회초년생 첫 월급 관리법", 
    excerpt: "월급날만 기다리지 말고, 똑똑하게 관리하는 방법을 알려드립니다.",
    category: "생활",
    isPlaceholder: true 
  },
  { 
    emoji: "🏠", 
    title: "1인 가구 생활비 절약 꿀팁 10가지", 
    excerpt: "매달 10만원 이상 아끼는 실천 가능한 방법들",
    category: "생활",
    isPlaceholder: true 
  },
];

const lifeFAQ = [
  { question: "주휴수당 계산 방법", answer: "주 15시간 이상 근무하면 1일분의 유급휴일수당이 발생합니다. 주휴수당 = 1일 소정근로시간 × 시급으로 계산됩니다." },
  { question: "2026년 최저임금", answer: "2026년 최저임금은 시간당 10,030원입니다. 월급으로 환산하면 주 40시간 기준 약 209만원입니다." },
  { question: "군인 적금 가입 조건", answer: "현역 병사라면 누구나 장병내일준비적금에 가입할 수 있습니다. 월 40만원까지 저축 가능하며, 정부 매칭지원금이 추가됩니다." },
  { question: "실업급여 수급 자격", answer: "고용보험에 180일 이상 가입하고, 비자발적 사유로 퇴직한 경우 실업급여를 받을 수 있습니다. 자발적 퇴직 시에도 일정 조건 충족 시 가능합니다." },
];

export default function LifeHub() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-category-life/10">
        <div className="container py-12 md:py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-category-life/20 flex items-center justify-center">
              <span className="text-3xl">🏠</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">생활</h1>
              <p className="text-muted-foreground">일상 재테크 팁 & 계산기</p>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            알바 실수령액, 군인 적금 등 2030 세대를 위한 생활 밀착형 금융 정보를 제공합니다.
            매일의 작은 선택이 큰 차이를 만듭니다.
          </p>
        </div>
      </section>

      {/* Calculators */}
      <section className="container py-12">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-3">
            <span>🔢</span>
            <span>생활 계산기</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1">생활에 필요한 필수 금융 계산기</p>
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
            <span>생활 재테크 가이드</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1">일상에서 바로 적용할 수 있는 재테크 팁</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        title="생활 재테크 FAQ"
        description="자주 묻는 질문을 확인해보세요"
        items={lifeFAQ}
        variant="life"
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