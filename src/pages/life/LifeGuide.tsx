import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";

export default function LifeGuide() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <section className="bg-category-life-light py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">🏠 재테크 · 절약 가이드</h1>
          <p className="text-muted-foreground">일상 속 재테크 팁과 노하우</p>
        </div>
      </section>
      <section className="container py-16">
        <p className="text-muted-foreground text-center">콘텐츠 준비 중입니다.</p>
      </section>
      <Footer />
    </div>
  );
}
