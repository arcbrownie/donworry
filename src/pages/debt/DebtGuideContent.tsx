import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";

export default function DebtGuideContent() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <section className="bg-category-debt-light py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">⚖️ 채무조정 가이드</h1>
          <p className="text-muted-foreground">개인회생·파산·신속채무조정 상세 안내</p>
        </div>
      </section>
      <section className="container py-16">
        <p className="text-muted-foreground text-center">콘텐츠 준비 중입니다.</p>
      </section>
      <Footer />
    </div>
  );
}
