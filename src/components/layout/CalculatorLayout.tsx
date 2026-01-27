import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import { setCanonicalTag } from "@/lib/utils";
import AdSenseDisplay from "@/components/adsense/AdSenseDisplay";

interface CalculatorLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  seoContent?: string;
}

export function CalculatorLayout({ children, title, description, seoContent }: CalculatorLayoutProps) {
  const location = useLocation();

  useEffect(() => {
    // Canonical Tag
    setCanonicalTag(location.pathname);
  }, [location.pathname]);

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

        {/* Calculator Content */}
        <div className="max-w-2xl mx-auto space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          {children}
        </div>

        {/* Ad Container */}
        <div className="max-w-2xl mx-auto mt-10">
          <AdSenseDisplay slot="8564710988" />
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
