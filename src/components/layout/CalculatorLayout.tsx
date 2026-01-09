import { ReactNode } from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";

interface CalculatorLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  seoContent?: string;
}

export function CalculatorLayout({ children, title, description, seoContent }: CalculatorLayoutProps) {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <MainNavigation />

      {/* Main Content */}
      <main className="container py-8">
        {/* Page Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {title}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {description}
          </p>
        </div>

        {/* AD Container - 결과 위 광고 영역 */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="h-[250px] border-2 border-dashed border-border/50 rounded-2xl flex items-center justify-center bg-muted/20">
            <span className="text-muted-foreground font-medium">AD</span>
          </div>
        </div>

        {/* Calculator Content */}
        <div className="max-w-2xl mx-auto space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          {children}
        </div>

        {/* Ad Container */}
        <div className="max-w-2xl mx-auto mt-10">
          <div className="ad-container py-8">
            <span>광고 영역 (AdSense)</span>
          </div>
        </div>

        {/* SEO Content */}
        {seoContent && (
          <section className="max-w-2xl mx-auto mt-10 p-6 bg-therapy-soft rounded-2xl">
            <h2 className="text-lg font-semibold text-foreground mb-4">관련 정보</h2>
            <div className="prose prose-sm text-muted-foreground leading-relaxed">
              {seoContent}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}
