import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import CalculatorWidget from "@/components/ui/CalculatorWidget";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { CreditCard } from "lucide-react";

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
    title: "2030을 위한 첫 대출 가이드", 
    excerpt: "신용점수 관리부터 유리한 대출 상품 고르는 법까지",
    category: "금융 · 대출",
    isPlaceholder: true 
  },
  { 
    emoji: "💳", 
    title: "신용카드 vs 체크카드 비교", 
    excerpt: "소비 패턴에 따른 최적의 카드 선택법",
    category: "금융 · 대출",
    isPlaceholder: true 
  },
  { 
    emoji: "📈", 
    title: "사회초년생을 위한 투자 입문서", 
    excerpt: "적금만으로는 부족하다! 첫 투자를 시작하는 방법",
    category: "금융 · 대출",
    isPlaceholder: true 
  },
  { 
    emoji: "💰", 
    title: "프리랜서 세금 신고 완벽 가이드", 
    excerpt: "5월 종합소득세 신고, 이것만 알면 환급받는다",
    category: "금융 · 대출",
    isPlaceholder: true 
  },
];

const financeFAQ = [
  { question: "프리랜서 3.3% 원천징수", answer: "프리랜서가 용역비를 받을 때 미리 떼는 세금(소득세 3% + 지방소득세 0.3%)입니다. 5월 종합소득세 신고 시 환급받을 수 있습니다." },
  { question: "청년 소득세 감면 혜택 대상", answer: "만 15~34세 청년이 중소기업에 취업하면 5년간 소득세의 90%를 감면받을 수 있습니다. 군 복무기간은 연령 계산에서 제외됩니다." },
  { question: "신용점수 향상 방법", answer: "연체 없이 결제하기, 신용카드 적정 사용, 다양한 금융거래 이력 쌓기 등이 도움됩니다. 특히 연체는 신용점수에 치명적입니다." },
  { question: "적금 vs 투자 선택 기준", answer: "단기 자금은 적금, 장기 목표는 투자가 유리합니다. 안전성과 수익성의 밸런스를 고려해 분산하는 것이 좋습니다." },
];

export default function FinanceHub() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-category-finance/10">
        <div className="container py-12 md:py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-category-finance/20 flex items-center justify-center">
              <CreditCard className="w-7 h-7 text-category-finance" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">금융 · 대출</h1>
              <p className="text-muted-foreground">나에게 딱 맞는 금리와 상품 찾기</p>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            프리랜서 세금 환급, 청년 세금감면 등 2030 세대를 위한 실용적인 금융 · 대출 정보를 제공합니다.
            나에게 딱 맞는 금리와 상품을 찾아보세요.
          </p>
        </div>
      </section>

      {/* Calculators */}
      <section className="container py-12">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-3">
            <span>🧮</span>
            <span>금융 · 대출 계산기</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1">세금과 금리를 쉽게 계산하세요</p>
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
            <span>금융 · 대출 가이드</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1">알아두면 돈 되는 금융 · 대출 지식</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        title="금융 · 대출 FAQ"
        description="금융 · 대출에 관한 자주 묻는 질문"
        items={financeFAQ}
        variant="finance"
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