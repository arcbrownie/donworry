import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import { setCanonicalTag } from "@/lib/utils";

export default function FinanceGuide() {
  const location = useLocation();

  useEffect(() => {
    // Canonical Tag
    setCanonicalTag(location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <section className="bg-category-finance-light py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">💰 금융 · 대출 가이드</h1>
          <p className="text-muted-foreground">대출·금리·투자 정보 총정리</p>
        </div>
      </section>
      <section className="container py-16">
        <p className="text-muted-foreground text-center">콘텐츠 준비 중입니다.</p>
      </section>
      <Footer />
    </div>
  );
}
