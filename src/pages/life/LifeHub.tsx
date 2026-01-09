import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import CalculatorWidget from "@/components/ui/CalculatorWidget";

const calculators = [
  { 
    path: "/cal/part-time", 
    emoji: "💰", 
    title: "알바 실수령액 계산기", 
    description: "2026년 최저임금 반영, 주휴수당 포함 실수령액",
    tag: "2026",
    variant: "life" as const 
  },
  { 
    path: "/cal/soldier", 
    emoji: "🎖️", 
    title: "군인 적금 계산기", 
    description: "장병내일준비적금 만기금액 & 전역일",
    tag: "인기",
    variant: "life" as const 
  },
];

const blogPosts = [
  { 
    emoji: "💡", 
    title: "알바생을 위한 주휴수당 완벽 가이드", 
    excerpt: "주휴수당, 정확히 얼마나 받을 수 있을까요? 조건과 계산법을 알려드립니다.",
    category: "생활",
    isPlaceholder: true 
  },
  { 
    emoji: "🎖️", 
    title: "2026년 군인 월급 인상, 얼마나 오를까?", 
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

export default function LifeHub() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500/10 to-emerald-600/5">
        <div className="container py-12 md:py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
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
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            🧮 생활 계산기
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
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            📚 생활 재테크 가이드
          </h2>
          <p className="text-sm text-muted-foreground mt-1">일상에서 바로 적용할 수 있는 재테크 팁</p>
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