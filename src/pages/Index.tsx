import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle, TrendingUp, Users, Award } from "lucide-react";
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
    color: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "border-emerald-500",
  },
  {
    path: "/finance",
    emoji: "💳",
    title: "금융",
    description: "프리랜서 환급, 청년 세금감면 등 금융 정보",
    color: "from-primary/20 to-primary/10",
    borderColor: "border-primary",
  },
  {
    path: "/debt",
    emoji: "🛡️",
    title: "채무",
    description: "개인회생, 파산, 채무조정 솔루션",
    color: "from-secondary/20 to-secondary/10",
    borderColor: "border-secondary",
  },
];

const featuredCalculators = [
  { path: "/debt/test", emoji: "🩺", title: "채무조정 자가진단", description: "나에게 맞는 해결책 찾기", tag: "인기", variant: "debt" as const },
  { path: "/cal/part-time", emoji: "💰", title: "알바 실수령액", description: "2026 최저임금 반영", tag: "2026", variant: "life" as const },
  { path: "/cal/freelancer", emoji: "💼", title: "프리랜서 환급", description: "3.3% 세금 환급 계산", variant: "finance" as const },
  { path: "/cal/youth-tax", emoji: "🎓", title: "청년 세금감면", description: "중기청 90% 감면 혜택", variant: "finance" as const },
];

const blogPosts = [
  { emoji: "📊", title: "2026년 달라지는 개인회생 제도", excerpt: "새해부터 적용되는 개인회생 변경사항을 알아보세요.", category: "채무", isPlaceholder: true },
  { emoji: "💡", title: "알바생을 위한 주휴수당 완벽 가이드", excerpt: "주휴수당, 정확히 얼마나 받을 수 있을까요?", category: "생활", isPlaceholder: true },
  { emoji: "🏦", title: "2030을 위한 첫 대출 가이드", excerpt: "신용점수 관리부터 유리한 대출 상품까지", category: "금융", isPlaceholder: true },
];

const stats = [
  { icon: Users, value: "10만+", label: "이용자 수" },
  { icon: Award, value: "98%", label: "만족도" },
  { icon: TrendingUp, value: "2026", label: "최신 기준" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(128,90,213,0.2)_0%,transparent_50%)]" />
        
        <div className="relative container py-16 md:py-24 lg:py-32">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Logo Badge */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center shadow-glow">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Donworry
            </h1>
            
            {/* Slogan */}
            <p className="text-lg md:text-xl text-white/90 mb-6 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
              당신의 일상과 경제적 자유를 지키는<br className="md:hidden" />
              <span className="font-semibold">든든한 파트너, 돈워리</span>
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 md:gap-10 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex items-center gap-1.5 text-white/90">
                    <stat.icon className="w-4 h-4" />
                    <span className="text-xl md:text-2xl font-bold">{stat.value}</span>
                  </div>
                  <span className="text-xs text-white/60">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/debt/test">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elevated px-8">
                  🩺 무료 채무진단
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/cal">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8">
                  🧮 금융 계산기
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Categories Section */}
      <section className="container py-12 -mt-8">
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.path}
              to={category.path}
              className={`group therapy-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-slide-up bg-gradient-to-br ${category.color}`}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-background/80 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-soft">
                  <span className="text-3xl">{category.emoji}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {category.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">인기 계산기</h2>
            <p className="text-muted-foreground text-sm mt-1">가장 많이 사용하는 금융 계산기</p>
          </div>
          <Link to="/cal" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            전체보기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {featuredCalculators.map((calc, index) => (
            <CalculatorWidget key={calc.path} {...calc} />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="container py-12">
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

      {/* Trust Section */}
      <section className="container py-12">
        <div className="therapy-card text-center bg-gradient-to-br from-primary/5 to-secondary/5">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            왜 돈워리일까요? ✨
          </h2>
          <p className="text-muted-foreground mb-8">
            신뢰할 수 있는 금융 파트너가 되겠습니다
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: "🎯", title: "정확한 계산", desc: "2026년 최신 세법과 정책을\n실시간으로 반영합니다" },
              { emoji: "💜", title: "쉬운 설명", desc: "어려운 금융 용어를\n누구나 이해할 수 있게 풀어드려요" },
              { emoji: "🛡️", title: "믿을 수 있는 정보", desc: "공신력 있는 자료를 바탕으로\n신뢰할 수 있는 결과를 제공해요" },
            ].map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 mx-auto flex items-center justify-center">
                  <span className="text-3xl">{item.emoji}</span>
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          <div className="relative text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              지금 바로 무료 채무진단을 받아보세요
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              개인회생, 파산, 신속채무조정 중 나에게 맞는 해결책을 찾아드립니다.
              전문가 상담 전 자가진단으로 방향을 잡아보세요.
            </p>
            <Link to="/debt/test">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elevated px-8">
                🩺 무료 진단 시작하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
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