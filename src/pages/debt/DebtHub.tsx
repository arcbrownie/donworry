import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import CalculatorWidget from "@/components/ui/CalculatorWidget";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/ui/FAQAccordion";

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
    path: "/debt/guide", 
    emoji: "📖", 
    title: "채무조정 상세 가이드", 
    description: "절차, 비용, 자격요건 안내",
    tag: "채무조정",
    variant: "debt" as const 
  },
];

const blogPosts = [
  { 
    emoji: "📊", 
    title: "2026년 달라지는 개인회생 제도", 
    excerpt: "새해부터 적용되는 개인회생 변경사항과 준비 방법",
    category: "채무",
    isPlaceholder: true 
  },
  { 
    emoji: "⚖️", 
    title: "개인회생 vs 개인파산, 어떤 게 나을까?", 
    excerpt: "두 제도의 차이점과 선택 기준을 알려드립니다",
    category: "채무",
    isPlaceholder: true 
  },
  { 
    emoji: "📝", 
    title: "신속채무조정 신청 완벽 가이드", 
    excerpt: "은행 협의 없이 가능한 신속채무조정 절차 안내",
    category: "채무",
    isPlaceholder: true 
  },
  { 
    emoji: "💡", 
    title: "채무조정 후 신용회복 로드맵", 
    excerpt: "채무조정 이후 신용점수를 회복하는 현실적인 방법",
    category: "채무",
    isPlaceholder: true 
  },
];

const debtFAQ = [
  { question: "개인회생과 개인파산의 차이점은 무엇인가요?", answer: "개인회생은 3~5년간 일정 금액을 상환하고 나머지를 탕감받는 제도이고, 개인파산은 모든 재산을 정리하고 면책받는 제도입니다. 소득 유무에 따라 선택이 달라집니다." },
  { question: "개인회생 신청 자격 조건이 어떻게 되나요?", answer: "총 채무액이 담보채무 15억원, 무담보채무 10억원 이하이고, 정기적인 수입이 있어야 합니다. 최근 5년 내 면책받은 적이 없어야 합니다." },
  { question: "채무조정 후 신용회복까지 얼마나 걸리나요?", answer: "개인회생 면책 후 약 5년, 개인파산 면책 후 약 5~7년 정도 지나면 신용정보가 삭제됩니다. 이후 신용카드 발급 등이 가능해집니다." },
  { question: "신속채무조정은 무엇인가요?", answer: "금융회사와 협의 없이 신용회복위원회를 통해 진행하는 채무조정입니다. 연체 전이라도 3개월 이상 이자만 납부 중이면 신청 가능합니다." },
];

export default function DebtHub() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-category-debt/10">
        <div className="container py-12 md:py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-category-debt/20 flex items-center justify-center">
              <span className="text-3xl">🛡️</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">채무조정</h1>
              <p className="text-muted-foreground">개인회생·파산·채무조정</p>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl mb-6">
            과도한 빚으로 힘드신가요? 개인회생, 파산, 신속채무조정 등 
            법적으로 보호받을 수 있는 다양한 해결책이 있습니다.
            돈워리가 새로운 시작을 응원합니다.
          </p>
          <Link to="/debt/test">
            <Button className="btn-premium">
              <span className="relative z-10 flex items-center gap-2">
                🩺 무료 자가진단 시작하기
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container py-12">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            🔧 채무 해결 도구
          </h2>
          <p className="text-sm text-muted-foreground mt-1">나에게 맞는 해결책을 찾아보세요</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {debtFeatures.map((feature) => (
            <CalculatorWidget key={feature.path} {...feature} />
          ))}
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
              <h3 className="font-semibold text-foreground mb-2">혼자 고민하지 마세요</h3>
              <p className="text-sm text-muted-foreground mb-4">
                채무 문제는 부끄러운 것이 아닙니다. 대한민국 법은 경제적으로 어려운 분들을 위한 
                다양한 구제 제도를 마련해두고 있습니다. 개인회생을 통해 최대 90%까지 채무를 감면받고,
                새로운 시작을 할 수 있습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">개인회생</span>
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">개인파산</span>
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">신속채무조정</span>
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">채무통합</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="container py-12">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            📚 채무조정 가이드
          </h2>
          <p className="text-sm text-muted-foreground mt-1">알아두면 도움이 되는 채무 관련 정보</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="container py-6">
        <div className="therapy-card">
          <h3 className="font-semibold text-foreground mb-3">채무조정이란?</h3>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p>
              채무조정은 과도한 빚으로 인해 정상적인 경제활동이 어려운 분들을 위한 법적 제도입니다.
              개인회생, 개인파산, 신속채무조정 등 다양한 방법 중 본인의 상황에 맞는 최적의 해결책을 찾는 것이 중요합니다.
              돈워리의 자가진단 도구를 통해 먼저 방향을 잡아보시고, 필요하다면 전문가 상담을 받아보세요.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        title="채무조정 FAQ"
        description="채무조정에 관한 자주 묻는 질문"
        items={debtFAQ}
        variant="debt"
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