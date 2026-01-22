import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { setCanonicalTag } from "@/lib/utils";
import { Calendar, Zap, Calculator, Users, PiggyBank, CreditCard, Scale } from "lucide-react";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import CalculatorWidget from "@/components/ui/CalculatorWidget";
import { Button } from "@/components/ui/button";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
const categories = [
  {
    path: "/savings",
    icon: PiggyBank,
    title: "재테크 · 절약",
    description: "티끌 모아 태산, 똑똑한 소비 습관",
    gradient: "bg-gradient-to-br from-category-life/20 to-category-life/5",
    hoverColor: "group-hover:text-category-life",
  },
  {
    path: "/finance",
    icon: CreditCard,
    title: "금융 · 대출",
    description: "나에게 딱 맞는 금리와 상품 찾기",
    gradient: "bg-gradient-to-br from-category-finance/20 to-category-finance/5",
    hoverColor: "group-hover:text-category-finance",
  },
  {
    path: "/debt",
    icon: Scale,
    title: "채무조정",
    description: "다시 시작하는 경제적 자유, 맞춤형 해결책",
    gradient: "bg-gradient-to-br from-category-debt/20 to-category-debt/5",
    hoverColor: "group-hover:text-category-debt",
  },
];

const featuredCalculators = [
  { path: "/debt/test", emoji: "🩺", title: "채무조정 자가진단", description: "나에게 맞는 해결책 찾기", tag: "채무조정", variant: "debt" as const },
  { path: "/cal/part-time", emoji: "💰", title: "알바 실수령액", description: "2026 최저임금 반영", tag: "재테크 · 절약", variant: "life" as const },
  { path: "/cal/freelancer", emoji: "💼", title: "프리랜서 환급", description: "3.3% 세금 환급 계산", tag: "금융 · 대출", variant: "finance" as const },
  { path: "/cal/youth-tax", emoji: "🎓", title: "청년 세금감면", description: "중기청 90% 감면 혜택", tag: "금융 · 대출", variant: "finance" as const },
];

// 히어로 아래 메인 계산기 카드
const heroCalculators = [
  { path: "/cal/debt-reduction", emoji: "📉", title: "개인회생 탕감액 계산기", description: "채무 탕감 예상액을 미리 확인", tag: "채무조정", variant: "debt" as const },
  { path: "/cal/interest-saving", emoji: "💵", title: "이자 절감 계산기", description: "대출 이자 절감액 시뮬레이션", tag: "금융 · 대출", variant: "finance" as const },
];

const blogPosts = [
  { emoji: "📊", title: "2026년 달라지는 개인회생 제도", excerpt: "새해부터 적용되는 개인회생 변경사항을 알아보세요.", category: "채무조정", path: "/personal-rehabilitation-2026-changes", isPlaceholder: false },
  { emoji: "💡", title: "알바생 주휴수당 완벽 가이드", excerpt: "2026년 최저임금 기준 주휴수당 계산법과 지급 조건", category: "재테크 · 절약", path: "/blog/weekly-holiday-pay-guide", isPlaceholder: false },
  { emoji: "🏦", title: "사회초년생을 위한 대출 가이드", excerpt: "신용점수 관리부터 유리한 대출 상품까지", category: "금융 · 대출", path: "/blog/first-loan-guide-2030", isPlaceholder: false },
];

const benefits = [
  { icon: Calendar, title: "최신 기준 반영", desc: "2026년 최신 정책 및 세법 반영" },
  { icon: Zap, title: "누구나 쉬운 사용", desc: "복잡한 계산도 클릭 몇 번으로 끝" },
  { icon: Calculator, title: "맞춤형 계산기", desc: "상황에 딱 맞는 계산기를 제공해요" },
  { icon: Users, title: "전문가 솔루션 연결", desc: "필요시 전문가 상담을 안내해드려요" },
];

export default function Index() {
  const location = useLocation();

  useEffect(() => {
    // Canonical Tag
    setCanonicalTag(location.pathname);

    // SEO Meta Tags
    document.title = "돈워리 - 일상은 가볍게, 돈 걱정은 없게 | 어제보다 가벼운 오늘을 만드는 당신의 솔루션";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '돈워리는 어제보다 가벼운 오늘을 만드는 당신의 금융 솔루션입니다. 알바 실수령액, 프리랜서 환급, 청년 세금감면, 군인 적금 계산부터 개인회생, 채무조정 자가진단까지. 복잡한 금융 계산과 절차를 쉽고 따뜻하게 도와드립니다.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', '돈워리, 개인회생, 채무조정, 신속채무조정, 알바 시급 계산기, 주휴수당, 프리랜서 세금, 3.3% 환급, 중기청 소득세 감면, 청년 세금, 군인 적금, 장병내일준비적금, 금융 계산기');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', '돈워리 - 일상은 가볍게, 돈 걱정은 없게 | 어제보다 가벼운 오늘을 만드는 당신의 솔루션');

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', '돈워리는 어제보다 가벼운 오늘을 만드는 당신의 금융 솔루션입니다. 알바 실수령액, 프리랜서 환급, 청년 세금감면, 군인 적금 계산부터 개인회생, 채무조정 자가진단까지. 복잡한 금융 계산과 절차를 쉽고 따뜻하게 도와드립니다.');
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <MainNavigation />

      {/* 1. 왜 돈워리일까요? (강점 소개) - 첫 번째 섹션 */}
      <section className="container py-16">
        <div className="therapy-card text-center bg-gradient-to-br from-primary/5 to-secondary/5 py-12 px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            당신의 행복을 지키는 <span className="text-secondary font-extrabold">돈워리</span>만의 특별함 ✨
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            어제보다 가벼운 오늘을 만드는 금융 솔루션
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 mx-auto flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-base">{item.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: 히어로 아래 계산기 카드 2개 */}
      <section className="container py-8">
        <div className="grid gap-4 md:grid-cols-2">
          {heroCalculators.map((calc) => (
            <Link
              key={calc.path}
              to={calc.path}
              className={`group therapy-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 ${
                calc.variant === "debt" 
                  ? "bg-gradient-to-br from-category-debt/10 to-category-debt/5 border-category-debt/20" 
                  : "bg-gradient-to-br from-category-finance/10 to-category-finance/5 border-category-finance/20"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${
                  calc.variant === "debt" ? "bg-category-debt/20" : "bg-category-finance/20"
                }`}>
                  <span className="text-3xl">{calc.emoji}</span>
                </div>
                <div className="flex-1">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    calc.variant === "debt" 
                      ? "text-category-debt bg-category-debt/20" 
                      : "text-category-finance bg-category-finance/20"
                  }`}>
                    {calc.tag}
                  </span>
                  <h3 className={`font-bold text-lg text-foreground mt-1 group-hover:${
                    calc.variant === "debt" ? "text-category-debt" : "text-category-finance"
                  } transition-colors`}>
                    {calc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{calc.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEW: 30초 채무 건강 진단 CTA 섹션 */}
      <section className="container py-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-category-debt via-category-debt/90 to-primary p-10 md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-4">
                <span className="text-2xl">⏱️</span>
                <span className="text-white font-bold text-sm">30초면 충분해요</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
                채무 건강 상태를 확인해보세요
              </h2>
              <p className="text-white/80 text-lg max-w-xl">
                간단한 질문으로 나에게 맞는 채무 해결 방법을 찾아드립니다.
              </p>
            </div>
            <Link to="/debt/test">
              <Button size="lg" className="bg-white text-category-debt hover:bg-white/90 shadow-xl px-5 py-7 rounded-2xl">
                <span className="text-2xl mr-2">🩺</span>
                <span className="text-xl font-extrabold">무료 진단 시작</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 인기 계산기 위젯 (실사용 유도) */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-2xl font-bold text-foreground">인기 계산기</h2>
            <p className="text-muted-foreground text-base mt-1 leading-relaxed">가장 많이 사용하는 계산기</p>
          </div>
          <Link to="/cal" className="text-base font-medium text-primary hover:underline">
            전체보기
          </Link>
        </div>
        <div className="grid gap-2.5 md:grid-cols-2 lg:grid-cols-4">
          {featuredCalculators.map((calc) => (
            <CalculatorWidget key={calc.path} {...calc} />
          ))}
        </div>
      </section>

      {/* 3. 무료 채무진단 배너 (CTA) */}
      <section className="container py-8">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          <div className="relative text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              지금 바로 무료 채무진단을 받아보세요
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto leading-relaxed">
              개인회생, 파산, 신속채무조정 중 나에게 맞는 해결책을 찾아드립니다.
              <br />
              전문가 상담 전 자가진단으로 방향을 잡아보세요.
            </p>
            <Link to="/debt/test">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elevated px-5 py-6">
                <span className="text-xl">🩺</span>
                <span className="text-lg font-bold ml-2">무료 진단 시작하기</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. 카테고리별 바로가기 (최신 콘텐츠 위로 이동) */}
      <section className="container py-16">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-foreground">카테고리별 바로가기</h2>
          <p className="text-muted-foreground text-base mt-1 leading-relaxed">원하는 카테고리를 선택하세요</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.path}
              to={category.path}
              className={`group therapy-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-slide-up ${category.gradient}`}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <div className="flex flex-col items-center text-center py-4">
                <div className="w-20 h-20 rounded-2xl bg-background/80 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-soft mb-4">
                  {category.icon && <category.icon className="w-10 h-10 text-foreground" strokeWidth={1.5} />}
                </div>
                <h2 className={`text-2xl font-bold text-foreground mb-2 transition-colors ${category.hoverColor}`}>
                  {category.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                <div className={`mt-4 flex items-center gap-1 font-medium text-base text-muted-foreground ${category.hoverColor}`}>
                  자세히 보기
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. 최신 콘텐츠/블로그 리스트 (SEO) */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">최신 콘텐츠</h2>
            <p className="text-muted-foreground text-base mt-1 leading-relaxed">알아두면 좋은 재테크 · 금융 정보</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>

      {/* Ad Container - 점선 빈 공간 */}
      <section className="container py-6">
        <div className="border-2 border-dashed border-border/50 rounded-2xl py-16" />
      </section>

      <Footer />
      
      {/* Mobile Floating CTA */}
      <MobileFloatingCTA />
    </div>
  );
}
