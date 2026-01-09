import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, Calculator, Shield, Sparkles } from "lucide-react";
import { DebtHealthQuiz } from "@/components/DebtHealthQuiz";
import { FAQSection, debtFAQs } from "@/components/FAQSection";
import { AdContainer } from "@/components/AdContainer";

const mainCategories = [
  {
    path: "/debt",
    emoji: "💙",
    icon: Shield,
    title: "채무조정 솔루션",
    description: "개인회생, 파산, 신속채무조정 등 빚 문제 해결의 모든 것",
    tag: "핵심 서비스",
    gradient: "from-primary/15 to-secondary/10",
  },
  {
    path: "/cal",
    emoji: "🧮",
    icon: Calculator,
    title: "금융생활 계산기",
    description: "알바 실수령액, 세금 환급, 대출 이자 등 2030 필수 계산기",
    tag: "2026년 반영",
    gradient: "from-therapy-hope/20 to-therapy-hope/5",
  },
];

const quickLinks = [
  { path: "/debt/test", emoji: "🩺", label: "채무 진단", highlight: true },
  { path: "/cal/part-time", emoji: "💰", label: "알바 계산기" },
  { path: "/cal/freelancer", emoji: "💼", label: "프리랜서 환급" },
  { path: "/cal/youth-tax", emoji: "🎓", label: "청년 감면" },
  { path: "/cal/soldier", emoji: "🎖️", label: "군인 적금" },
];

const trustFeatures = [
  {
    emoji: "📊",
    title: "정확한 계산",
    description: "2026년 최신 세법과 정책을\n실시간으로 반영해요",
  },
  {
    emoji: "💚",
    title: "쉬운 이해",
    description: "어려운 용어 없이\n누구나 이해할 수 있게 설명해요",
  },
  {
    emoji: "🛡️",
    title: "믿을 수 있는 정보",
    description: "공신력 있는 자료를 바탕으로\n신뢰할 수 있는 결과를 제공해요",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(139,92,246,0.2)_0%,transparent_40%)]" />
        
        <div className="relative container py-16 md:py-20">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <span className="text-3xl">💙</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">돈워리</h1>
            </div>
            
            <p className="text-xl md:text-2xl font-medium text-white/95 mb-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              마음까지 챙기는 <span className="text-purple-200">금융 솔루션</span>
            </p>
            
            <p className="text-white/70 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              복잡한 세금 계산과 채무조정, 혼자 고민하지 마세요.<br className="hidden md:block" />
              돈워리가 쉽고 따뜻하게 도와드릴게요.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span className="text-sm text-white/90">무료 진단</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <TrendingDown className="w-4 h-4 text-green-300" />
                <span className="text-sm text-white/90">2026년 기준 반영</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* 30초 채무 건강 진단 퀴즈 - 최상단 배치 */}
      <section className="container py-8 -mt-10">
        <DebtHealthQuiz />
      </section>

      {/* Main Categories */}
      <section className="container py-8">
        <h2 className="text-xl font-bold text-foreground mb-4 text-center">
          핵심 서비스
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {mainCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.path}
                to={category.path}
                className={`group therapy-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-slide-up bg-gradient-to-br ${category.gradient}`}
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-card">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-white bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-full">
                        {category.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section className="container py-6">
        <h2 className="text-lg font-semibold text-foreground mb-4 text-center">
          빠른 이동 🚀
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 px-4 py-3 rounded-full border transition-all duration-200 ${
                link.highlight 
                  ? "bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-soft hover:shadow-card" 
                  : "bg-card border-border/50 hover:border-primary/50 hover:bg-accent"
              }`}
            >
              <span className="text-lg">{link.emoji}</span>
              <span className="text-sm font-medium">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Ad Container */}
      <section className="container py-6">
        <AdContainer size="rectangle" />
      </section>

      {/* Trust Section */}
      <section className="container py-8">
        <div className="therapy-card text-center">
          <h2 className="text-xl font-bold text-foreground mb-2">
            왜 <span className="gradient-text">돈워리</span>일까요? 🤔
          </h2>
          <p className="text-muted-foreground mb-8">
            10만+ 사용자가 선택한 금융 솔루션 플랫폼
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="space-y-3 p-4 rounded-xl hover:bg-accent/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto flex items-center justify-center">
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-8">
        <FAQSection title="채무조정 FAQ" items={debtFAQs} />
      </section>

      {/* Bottom Ad Container */}
      <section className="container py-6">
        <AdContainer size="rectangle" />
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card mt-8">
        <div className="container py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
                  <span className="text-sm">💙</span>
                </div>
                <span className="font-bold text-foreground">돈워리</span>
                <span className="text-muted-foreground text-sm">- 마음까지 챙기는 금융 솔루션</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  서비스 소개
                </Link>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  개인정보처리방침
                </Link>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  이용약관
                </Link>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2025 돈워리. 본 계산기는 참고용이며, 정확한 상담은 전문가와 진행하세요.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}