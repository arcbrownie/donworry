import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { FloatingContactBar } from "@/components/FloatingContactBar";
import { AdContainer } from "@/components/AdContainer";

interface CalculatorLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  seoContent?: string;
  showFloatingBar?: boolean;
}

const navItems = [
  { path: "/", label: "홈", emoji: "🏠" },
  { path: "/debt", label: "채무조정", emoji: "💙" },
  { path: "/cal", label: "계산기", emoji: "🧮" },
  { path: "/about", label: "소개", emoji: "ℹ️" },
];

const mobileNavItems = [
  { path: "/", label: "홈", emoji: "🏠" },
  { path: "/debt", label: "채무조정", emoji: "💙" },
  { path: "/debt/test", label: "진단", emoji: "🩺" },
  { path: "/cal", label: "계산기", emoji: "🧮" },
];

export function CalculatorLayout({ 
  children, 
  title, 
  description, 
  seoContent,
  showFloatingBar = true 
}: CalculatorLayoutProps) {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl gradient-hero flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow">
              <span className="text-lg">💙</span>
            </div>
            <span className="font-bold text-lg text-foreground">돈워리</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname.startsWith(item.path) && item.path !== "/"
                    ? "bg-accent text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Nav - Hidden when floating bar is shown */}
      <nav className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border/50 ${showFloatingBar ? 'hidden' : ''}`}>
        <div className="flex justify-around py-2">
          {mobileNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-8 pb-32 md:pb-8">
        {/* Top Ad Container */}
        <div className="max-w-2xl mx-auto mb-6">
          <AdContainer size="rectangle" />
        </div>

        {/* Page Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {title}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {description}
          </p>
        </div>

        {/* Calculator Content */}
        <div className="max-w-2xl mx-auto space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          {children}
        </div>

        {/* Bottom Ad Container */}
        <div className="max-w-2xl mx-auto mt-10">
          <AdContainer size="rectangle" />
        </div>

        {/* SEO Content */}
        {seoContent && (
          <section className="max-w-2xl mx-auto mt-10 p-6 bg-therapy-soft rounded-2xl">
            <h2 className="text-lg font-semibold text-foreground mb-4">📚 관련 정보</h2>
            <div className="prose prose-sm text-muted-foreground leading-relaxed">
              {seoContent}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card mt-auto">
        <div className="container py-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg gradient-hero flex items-center justify-center">
                  <span className="text-xs">💙</span>
                </div>
                <span className="font-semibold text-foreground">돈워리</span>
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

      {/* Floating Contact Bar */}
      {showFloatingBar && <FloatingContactBar />}
    </div>
  );
}