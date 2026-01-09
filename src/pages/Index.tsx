import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Zap, Calculator, Users } from "lucide-react";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import CalculatorWidget from "@/components/ui/CalculatorWidget";
import { Button } from "@/components/ui/button";

const categories = [
  {
    path: "/life",
    emoji: "🏠",
    title: "생활",
    description: "알바 실수령액, 군인 적금 등 일상 재테크",
    gradient: "bg-gradient-to-br from-category-life/20 to-category-life/5",
    hoverColor: "group-hover:text-category-life",
  },
  {
    path: "/finance",
    emoji: "💰",
    title: "금융",
    description: "프리랜서 환급, 청년 세금감면 등 금융 정보",
    gradient: "bg-gradient-to-br from-category-finance/20 to-category-finance/5",
    hoverColor: "group-hover:text-category-finance",
  },
  {
    path: "/debt",
    emoji: "⚖️",
    title: "채무조정",
    description: "개인회생, 파산, 채무조정 솔루션",
    gradient: "bg-gradient-to-br from-category-debt/20 to-category-debt/5",
    hoverColor: "group-hover:text-category-debt",
  },
];

const featuredCalculators = [
  { path: "/debt/test", emoji: "🩺", title: "채무조정 자가진단", description: "나에게 맞는 해결책 찾기", tag: "채무조정", variant: "debt" as const },
  { path: "/cal/part-time", emoji: "💰", title: "알바 실수령액", description: "2026 최저임금 반영", tag: "생활", variant: "life" as const },
  { path: "/cal/freelancer", emoji: "💼", title: "프리랜서 환급", description: "3.3% 세금 환급 계산", tag: "금융", variant: "finance" as const },
  { path: "/cal/youth-tax", emoji: "🎓", title: "청년 세금감면", description: "중기청 90% 감면 혜택", tag: "금융", variant: "finance" as const },
];

// 히어로 아래 메인 계산기 카드
const heroCalculators = [
  { path: "/cal/debt-reduction", emoji: "📉", title: "개인회생 탕감액 계산기", description: "채무 탕감 예상액을 미리 확인", tag: "채무조정", variant: "debt" as const },
  { path: "/cal/interest-saving", emoji: "💵", title: "이자 절감 계산기", description: "대출 이자 절감액 시뮬레이션", tag: "금융", variant: "finance" as const },
];

const blogPosts = [
  { emoji: "📊", title: "2026년 달라지는 개인회생 제도", excerpt: "새해부터 적용되는 개인회생 변경사항을 알아보세요.", category: "채무조정", isPlaceholder: true },
  { emoji: "💡", title: "알바생을 위한 주휴수당 완벽 가이드", excerpt: "주휴수당, 정확히 얼마나 받을 수 있을까요?", category: "생활", isPlaceholder: true },
  { emoji: "🏦", title: "2030을 위한 첫 대출 가이드", excerpt: "신용점수 관리부터 유리한 대출 상품까지", category: "금융", isPlaceholder: true },
];

const benefits = [
  { icon: Calendar, title: "최신 기준 반영", desc: "2026년 세법과 정책을 실시간 업데이트합니다" },
  { icon: Zap, title: "누구나 쉬운 사용", desc: "복잡한 계산도 클릭 몇 번으로 끝" },
  { icon: Calculator, title: "맞춤형 계산기", desc: "상황에 딱 맞는 계산기를 제공해요" },
  { icon: Users, title: "전문가 솔루션 연결", desc: "필요시 전문가 상담을 안내해드려요" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />

      {/* 1. 왜 돈워리일까요? (강점 소개) - 첫 번째 섹션 */}
      <section className="container py-16">
        <div className="therapy-card text-center bg-gradient-to-br from-primary/5 to-secondary/5 py-12 px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            당신의 일상을 지키는 <span className="text-secondary">돈워리</span>만의 특별함 ✨
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed">
            어제보다 가벼운 오늘을 만드는 금융 솔루션
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 mx-auto flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-base">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
                <ArrowRight className={`w-6 h-6 ${
                  calc.variant === "debt" ? "text-category-debt" : "text-category-finance"
                } group-hover:translate-x-1 transition-transform shrink-0`} />
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
              <Button size="lg" className="bg-white text-category-debt hover:bg-white/90 shadow-xl px-10 py-7 rounded-2xl">
                <span className="text-2xl mr-2">🩺</span>
                <span className="text-xl font-extrabold">무료 진단 시작</span>
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 인기 계산기 위젯 (실사용 유도) */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">인기 계산기</h2>
            <p className="text-muted-foreground text-sm mt-1">가장 많이 사용하는 금융 계산기</p>
          </div>
          <Link to="/cal" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            전체보기 <ArrowRight className="w-4 h-4" />
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
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elevated px-10 py-6">
                <span className="text-xl">🩺</span>
                <span className="text-lg font-bold ml-2">무료 진단 시작하기</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. 카테고리별 바로가기 (최신 콘텐츠 위로 이동) */}
      <section className="container py-16">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-foreground">카테고리별 바로가기</h2>
          <p className="text-muted-foreground text-sm mt-1">원하는 카테고리를 선택하세요</p>
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
                  <span className="text-5xl">{category.emoji}</span>
                </div>
                <h2 className={`text-2xl font-bold text-foreground mb-2 transition-colors ${category.hoverColor}`}>
                  {category.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
                <div className={`mt-4 flex items-center gap-1 font-medium text-sm text-muted-foreground ${category.hoverColor}`}>
                  자세히 보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            <p className="text-muted-foreground text-sm mt-1">알아두면 좋은 금융 정보</p>
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
    </div>
  );
}
