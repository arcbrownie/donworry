import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import { setCanonicalTag } from "@/lib/utils";

export default function ContentHub() {
  const location = useLocation();

  useEffect(() => {
    // Canonical Tag
    setCanonicalTag(location.pathname);
  }, [location.pathname]);
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">최신 콘텐츠</h1>
          <p className="text-muted-foreground">알아두면 좋은 금융 정보</p>
        </div>
      </section>
      <section className="container py-16">
        <p className="text-muted-foreground text-center">콘텐츠 준비 중입니다.</p>
      </section>
      <Footer />
    </div>
  );
}
