import { Link } from "react-router-dom";
import { Heart, Calculator, Shield, FileText, Coins, Users, ArrowRight, Sparkles } from "lucide-react";

const calculators = [
  {
    path: "/debt/test",
    title: "맞춤형 채무조정 진단",
    description: "나에게 맞는 회생/신속채무조정을 찾아드려요",
    icon: Shield,
    color: "bg-primary",
    tag: "핵심 진단",
  },
  {
    path: "/cal/part-time",
    title: "2026 알바 실수령액",
    description: "주휴수당 포함 진짜 시급을 계산해보세요",
    icon: Calculator,
    color: "bg-therapy-trust",
    tag: "최저임금 반영",
  },
  {
    path: "/cal/freelancer",
    title: "프리랜서 3.3% 환급",
    description: "매달 떼인 세금, 얼마나 돌려받을 수 있을까요?",
    icon: FileText,
    color: "bg-therapy-hope",
    tag: "종소세 시뮬레이션",
  },
  {
    path: "/cal/youth-tax",
    title: "중기청 소득세 감면",
    description: "청년 취업자 90% 감면 혜택을 확인하세요",
    icon: Users,
    color: "bg-warning",
    tag: "청년 혜택",
  },
  {
    path: "/cal/soldier",
    title: "군 장병 적금 계산기",
    description: "전역 시 받을 목돈을 미리 계산해보세요",
    icon: Coins,
    color: "bg-success",
    tag: "2026년 월급 반영",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="relative container py-16 md:py-24">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-6 animate-fade-in">
              <div className="w-12 h-12 rounded-2xl bg-primary-foreground/20 backdrop-blur flex items-center justify-center">
                <Heart className="w-7 h-7 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">돈워리</h1>
            </div>
            
            <p className="text-xl md:text-2xl font-medium text-primary-foreground/90 mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              마음까지 챙기는 금융 처방전
            </p>
            
            <p className="text-primary-foreground/70 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              복잡한 세금 계산과 채무조정, 혼자 고민하지 마세요.<br className="hidden md:block" />
              돈워리가 쉽고 따뜻하게 도와드릴게요.
            </p>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Sparkles className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm text-primary-foreground/80">2026년 최신 기준 적용</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Calculator Grid */}
      <section className="container py-12 -mt-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc, index) => {
            const Icon = calc.icon;
            return (
              <Link
                key={calc.path}
                to={calc.path}
                className="group therapy-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${calc.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-primary bg-accent px-2 py-0.5 rounded-full">
                        {calc.tag}
                      </span>
                    </div>
                    <h2 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {calc.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {calc.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Trust Section */}
      <section className="container py-12">
        <div className="therapy-card text-center">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            왜 돈워리일까요?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-accent mx-auto flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground">정확한 계산</h3>
              <p className="text-sm text-muted-foreground">
                2026년 최신 세법과 정책을<br />실시간으로 반영해요
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-accent mx-auto flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground">쉬운 이해</h3>
              <p className="text-sm text-muted-foreground">
                어려운 용어 없이<br />누구나 이해할 수 있게 설명해요
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-accent mx-auto flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground">믿을 수 있는 정보</h3>
              <p className="text-sm text-muted-foreground">
                공신력 있는 자료를 바탕으로<br />신뢰할 수 있는 결과를 제공해요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Container */}
      <section className="container py-6">
        <div className="ad-container py-10">
          <span>광고 영역 (AdSense)</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card mt-8">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">돈워리</span>
              <span className="text-muted-foreground text-sm">- 마음까지 챙기는 금융 처방전</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 돈워리. 본 계산기는 참고용이며, 정확한 상담은 전문가와 진행하세요.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
