import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import CalculatorWidget from "@/components/ui/CalculatorWidget";

const calculators = [
  { 
    path: "/cal/freelancer", 
    emoji: "💼", 
    title: "프리랜서 3.3% 환급 계산기", 
    description: "종합소득세 환급 예상액 미리 계산",
    tag: "금융",
    variant: "finance" as const 
  },
  { 
    path: "/cal/youth-tax", 
    emoji: "🎓", 
    title: "청년 세금감면 계산기", 
    description: "중소기업 취업청년 소득세 90% 감면",
    tag: "금융",
    variant: "finance" as const 
  },
];

const blogPosts = [
  { 
    emoji: "🏦", 
    title: "2030을 위한 첫 대출 가이드", 
    excerpt: "신용점수 관리부터 유리한 대출 상품 고르는 법까지",
    category: "금융",
    isPlaceholder: true 
  },
  { 
    emoji: "💳", 
    title: "신용카드 vs 체크카드, 뭐가 유리할까?", 
    excerpt: "소비 패턴에 따른 최적의 카드 선택법",
    category: "금융",
    isPlaceholder: true 
  },
  { 
    emoji: "📈", 
    title: "사회초년생을 위한 투자 입문서", 
    excerpt: "적금만으로는 부족하다! 첫 투자를 시작하는 방법",
    category: "금융",
    isPlaceholder: true 
  },
  { 
    emoji: "💰", 
    title: "프리랜서 세금 신고 완벽 가이드", 
    excerpt: "5월 종합소득세 신고, 이것만 알면 환급받는다",
    category: "금융",
    isPlaceholder: true 
  },
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
              <span className="text-3xl">💳</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">금융</h1>
              <p className="text-muted-foreground">대출·금리·세금 정보</p>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            프리랜서 세금 환급, 청년 세금감면 등 2030 세대를 위한 실용적인 금융 정보를 제공합니다.
            똑똑한 금융 생활의 시작입니다.
          </p>
        </div>
      </section>

      {/* Calculators */}
      <section className="container py-12">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            🧮 금융 계산기
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
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            📚 금융 가이드
          </h2>
          <p className="text-sm text-muted-foreground mt-1">알아두면 돈 되는 금융 지식</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>

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