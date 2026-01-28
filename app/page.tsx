import { Metadata } from "next";
import { Calendar, Zap, Calculator, Users, PiggyBank, CreditCard, Scale } from "lucide-react";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import CalculatorWidget from "@/components/ui/CalculatorWidget";
import { Button } from "@/components/ui/button";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "돈워리 - 일상은 가볍게, 돈 걱정은 없게 | 어제보다 가벼운 오늘을 만드는 당신의 솔루션",
  description: "돈워리는 어제보다 가벼운 오늘을 만드는 당신의 금융 솔루션입니다. 알바 실수령액, 프리랜서 환급, 청년 세금감면, 군인 적금 계산부터 개인회생, 채무조정 자가진단까지. 복잡한 금융 계산과 절차를 쉽고 따뜻하게 도와드립니다.",
  alternates: {
    canonical: "https://donworry.kr",
  },
};

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

const blogPosts = [
  { emoji: "📊", title: "2026년 달라지는 개인회생 제도", excerpt: "새해부터 적용되는 개인회생 변경사항을 알아보세요.", category: "채무조정", path: "/personal-rehabilitation-2026-changes", isPlaceholder: false },
  { emoji: "💡", title: "알바생 주휴수당 완벽 가이드", excerpt: "2026년 최저임금 기준 주휴수당 계산법과 지급 조건", category: "재테크 · 절약", path: "/blog/weekly-holiday-pay-guide", isPlaceholder: false },
  { emoji: "🏦", title: "사회초년생을 위한 대출 가이드", excerpt: "신용점수 관리부터 유리한 대출 상품까지", category: "금융 · 대출", path: "/blog/first-loan-guide-2030", isPlaceholder: false },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              일상은 가볍게,<br />
              돈 걱정은 없게
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              어제보다 가벼운 오늘을 만드는<br />
              당신의 금융 솔루션
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/debt/test">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  🩺 채무조정 무료 진단
                </Button>
              </Link>
              <Link href="/cal">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  💰 계산기 둘러보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.path}
                href={category.path}
                className={`group relative overflow-hidden rounded-2xl p-8 ${category.gradient} border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-xl ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${category.hoverColor} transition-colors`} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">{category.title}</h2>
                  <p className="text-muted-foreground text-lg">{category.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">자세히 보기</span>
                    <Zap className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              인기 계산기
            </h2>
            <p className="text-muted-foreground text-lg">
              자주 사용하는 계산기를 빠르게 시작하세요
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCalculators.map((calc) => (
              <CalculatorWidget key={calc.path} {...calc} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            최신 가이드
          </h2>
          <p className="text-muted-foreground text-lg">
            돈워리가 준비한 실용적인 금융 정보
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.path} {...post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/content">
            <Button variant="outline" size="lg" className="text-lg px-8">
              더 많은 가이드 보기
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">정확한 계산</h3>
              <p className="text-muted-foreground">최신 법률과 제도를 반영한 정확한 계산기</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">자문단 상담</h3>
              <p className="text-muted-foreground">경험 많은 자문단의 신뢰할 수 있는 정보</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">빠른 진단</h3>
              <p className="text-muted-foreground">복잡한 절차 없이 간단하게 시작하세요</p>
            </div>
          </div>
        </div>
      </section>

      <MobileFloatingCTA />
      <Footer />
    </div>
  );
}
