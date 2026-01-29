import type { Metadata } from "next";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import { ReportForm } from "@/components/report/ReportForm";

export const metadata: Metadata = {
  title: "오류 제보 및 서비스 개선 | 돈워리",
  description: "돈워리(donworry.kr)의 정확한 정보를 위해 오류를 제보해 주세요. 매달 3분을 선정해 스타벅스 기프티콘을 드립니다.",
};

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />

      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            오류 제보 및 서비스 개선
          </h1>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 md:p-6 shadow-sm max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              돈워리(donworry.kr)의 정확한 정보를 위해 도움을 주세요!
            </p>
            <p className="text-muted-foreground leading-relaxed mt-1">
              소중한 의견을 남겨주신 분들 중 매달 3분을 선정하여 스타벅스 기프티콘을 보내드립니다. ☕
            </p>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <div className="mx-auto w-full max-w-2xl">
          <ReportForm />
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          제보해주신 내용은 서비스 개선을 위해서만 사용되며, 매달 말일 당첨자에게 개별 연락 드립니다.
        </p>
      </section>

      <Footer />
    </div>
  );
}
