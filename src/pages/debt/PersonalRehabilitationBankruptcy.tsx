import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { setCanonicalTag } from "@/lib/utils";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight, FileText, Scale, AlertCircle, CheckCircle2, Shield, Home, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function PersonalRehabilitationBankruptcy() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Canonical Tag
    setCanonicalTag(location.pathname);

    // SEO Meta Tags
    document.title = "개인회생 · 개인파산 완벽 가이드: 신청 절차부터 차이점까지 | 돈워리";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '개인회생과 개인파산 제도 상세 안내. 신청 자격, 절차, 비용, 차이점까지 법원을 통한 채무 해결 방법의 모든 것을 알려드립니다. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', '개인회생, 개인파산, 채무조정, 빚 탕감, 법원 채무조정, 면책, 채무자 회생');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', '개인회생 · 개인파산 완벽 가이드 | 돈워리');

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', '개인회생과 개인파산 제도 상세 안내. 신청 절차부터 자격 조건까지 한 번에 정리. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.');

    // Scroll progress
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <MainNavigation />

      {/* Sticky Progress Bar */}
      <div className="sticky top-[80px] z-40 w-full h-1 bg-slate-200">
        <div 
          className="h-full bg-gradient-to-r from-indigo-600 to-blue-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl" aria-hidden="true" />
        <div className="container relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              개인회생 · 개인파산 완벽 가이드
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              법원을 통한 채무 해결, 새로운 시작을 위한 선택
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents */}
          <div className="lg:w-64 flex-shrink-0">
            <TableOfContents />
          </div>

          {/* Article Content */}
          <article className="flex-1 max-w-4xl prose prose-xl prose-slate max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                매일 아침 독촉 전화에 눈뜨는 기분, 누구보다 잘 알고 있습니다. 고물가와 고금리가 겹친 현실 속에서 "조금만 더 버티면 되겠지" 했던 희망이 절망으로 바뀌었을지도 모릅니다. 하지만 <strong className="text-primary">개인회생과 개인파산</strong>은 성실한 채무자들이 다시 일어설 수 있도록 도와주는 법적 제도입니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                오늘 돈워리에서는 개인회생과 개인파산 제도의 모든 것을 상세히 알려드립니다. 두 제도의 차이점부터 신청 자격, 절차, 비용까지, 법원을 통한 채무 해결 방법을 완벽하게 정리했습니다.
              </p>
            </section>

            {/* Section 1 */}
            <section id="overview" className="scroll-mt-20 mb-10">
              <h2 id="overview-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <FileText className="w-6 h-6 text-primary" />
                개인회생과 개인파산이란?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-foreground">개인회생</strong>과 <strong className="text-foreground">개인파산</strong>은 모두 법원을 통한 채무 해결 제도이지만, 대상과 절차, 결과가 다릅니다. 자신의 상황에 맞는 제도를 선택하는 것이 중요합니다.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-6">
                <p className="text-foreground leading-relaxed font-medium mb-4">
                  <strong className="text-primary">개인회생:</strong> 정기적인 수입이 있는 채무자가 3~5년간 일정 금액을 상환하고 나머지 채무를 면책받는 제도입니다.
                </p>
                <p className="text-foreground leading-relaxed font-medium">
                  <strong className="text-primary">개인파산:</strong> 수입이 없거나 극히 적은 채무자가 모든 재산을 정리하고 모든 채무를 면책받는 제도입니다.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="rehabilitation" className="scroll-mt-20 mb-10">
              <h2 id="rehabilitation-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Shield className="w-6 h-6 text-primary" />
                개인회생 제도 상세 안내
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                개인회생은 정기적인 수입이 있는 개인 채무자가 법원의 감독 하에 3~5년간 채무의 일부를 변제하고, 나머지 채무를 면책받는 제도입니다.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  신청 자격
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground block mb-1">정기적인 수입:</strong>
                      <span>직장인, 자영업자, 프리랜서 등 최저생계비 이상의 정기 수입이 있어야 합니다.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground block mb-1">총 채무액:</strong>
                      <span>무담보 채무 10억원, 담보 채무 15억원 이하</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground block mb-1">변제 의지:</strong>
                      <span>채무를 갚겠다는 의지와 능력이 있어야 합니다.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground block mb-1">면책 이력:</strong>
                      <span>최근 5년 이내 면책받은 적이 없어야 합니다.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-5 bg-green-50 border-green-200">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    장점
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• 채무의 최대 90%까지 탕감 가능</li>
                    <li>• 변제 기간 동안 강제집행 중지</li>
                    <li>• 신용 회복 가능 (면책 후 5년)</li>
                    <li>• 주거권 보장 (조건부)</li>
                  </ul>
                </Card>
                <Card className="p-5 bg-orange-50 border-orange-200">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    주의사항
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• 3~5년간 성실한 변제 필요</li>
                    <li>• 인지대, 송달료 등 비용 발생 (약 30~50만원)</li>
                    <li>• 신용정보 기록 (면책 후 5년)</li>
                    <li>• 법원 감독 하에 생활</li>
                  </ul>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-lg my-6">
                <h3 className="font-semibold text-foreground mb-3">변제 기간 및 금액</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  개인회생 변제금은 <strong className="text-foreground">(소득 - 최저생계비) × 36개월</strong> 또는 <strong className="text-foreground">(소득 - 최저생계비) × 60개월</strong>로 계산됩니다. 2026년 기준 최저생계비가 인상되어 변제 부담이 줄어들었습니다.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-3">
                  <li>• 1인 가구: 약 138만원 (전년 대비 3% 이상 인상)</li>
                  <li>• 2인 가구: 약 227만원</li>
                  <li>• 3인 가구: 약 291만원</li>
                </ul>
                <div className="bg-primary/20 border border-primary/30 rounded-lg p-4 mt-4">
                  <p className="text-foreground text-sm font-medium">
                    <strong className="text-primary">💡 2026년 개선사항:</strong> 디지털 사법 시스템 전면 도입으로 처리 속도가 빨라졌고, 청년층·고령자·직장인의 경우 변제 기간이 3년에서 2년(24개월)으로 단축될 수 있습니다.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="bankruptcy" className="scroll-mt-20 mb-10">
              <h2 id="bankruptcy-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Scale className="w-6 h-6 text-primary" />
                개인파산 제도 상세 안내
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                개인파산은 채무자가 자신의 재산으로 모든 채무를 변제할 수 없는 상태에서 법원에 파산을 신청하여 채무를 면책받는 제도입니다.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  신청 자격
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground block mb-1">지급불능 상태:</strong>
                      <span>현재 채무를 상환할 수 없는 상태여야 합니다.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground block mb-1">수입 부족:</strong>
                      <span>정기 수입이 없거나 최저생계비 이하인 경우</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground block mb-1">재산 정리 의지:</strong>
                      <span>모든 재산을 정리하고 채무를 청산하려는 의지가 있어야 합니다.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-5 bg-green-50 border-green-200">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    장점
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• 모든 채무 면책 가능</li>
                    <li>• 빠른 절차 진행 (약 6개월~1년)</li>
                    <li>• 변제 부담 없음</li>
                    <li>• 신속한 재기 가능</li>
                  </ul>
                </Card>
                <Card className="p-5 bg-orange-50 border-orange-200">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    주의사항
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• 모든 재산 정리 필요</li>
                    <li>• 면책 후 5~7년간 신용정보 기록</li>
                    <li>• 일정 기간 자격 제한 가능</li>
                    <li>• 직업에 따른 제약 가능</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Section 4 */}
            <section id="comparison" className="scroll-mt-20 mb-10">
              <h2 id="comparison-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Scale className="w-6 h-6 text-primary" />
                개인회생 vs 개인파산 비교
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-soft">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border/50 p-4 text-left font-semibold text-foreground">구분</th>
                      <th className="border border-border/50 p-4 text-left font-semibold text-foreground">개인회생</th>
                      <th className="border border-border/50 p-4 text-left font-semibold text-foreground">개인파산</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-border/50 p-4 text-foreground font-medium">대상</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">정기 수입이 있는 채무자</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">수입이 없거나 극히 적은 채무자</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-border/50 p-4 text-foreground font-medium">변제 기간</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">3~5년간 변제</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">변제 없음 (즉시 면책)</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-border/50 p-4 text-foreground font-medium">채무 탕감</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">최대 90% 탕감</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">100% 면책</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-border/50 p-4 text-foreground font-medium">처리 기간</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">약 6개월~1년</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">약 6개월~1년</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-border/50 p-4 text-foreground font-medium">비용</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">인지대, 송달료 등 약 30~50만원</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">인지대, 송달료 등 약 30~50만원</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-border/50 p-4 text-foreground font-medium">신용정보</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">면책 후 5년간 기록</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">면책 후 5~7년간 기록</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-border/50 p-4 text-foreground font-medium">재산 정리</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">최저생계비 보유 가능</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">모든 재산 정리 필요</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5 */}
            <section id="procedure" className="scroll-mt-20 mb-10">
              <h2 id="procedure-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Clock className="w-6 h-6 text-primary" />
                신청 절차 및 진행 과정
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                개인회생과 개인파산 신청 절차는 유사합니다. 법원에 신청서를 제출하고 심리를 거쳐 결정을 받게 됩니다.
              </p>

              <div className="space-y-6 mb-6">
                <Card className="p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">신청서 작성 및 제출</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        관할 법원에 개인회생(또는 개인파산) 신청서를 제출합니다. 채무 목록, 재산 목록, 소득 증빙, 가족 관계 증명서 등을 첨부해야 합니다.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">법원 심리</h3>
                      <p className="text-muted-foreground text-sm">
                        법원에서 채무자의 소득, 재산, 채무 상황을 심리합니다. 채권자 회의가 열리거나 관리인이 선임될 수 있습니다.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">개시 결정 또는 면책 결정</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        <strong className="text-foreground">개인회생:</strong> 개시 결정 후 변제 계획이 확정되고, 3~5년간 변제를 진행합니다.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong className="text-foreground">개인파산:</strong> 면책 결정을 받으면 모든 채무가 면책됩니다.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">변제 또는 면책 완료</h3>
                      <p className="text-muted-foreground text-sm">
                        <strong className="text-foreground">개인회생:</strong> 약정된 기간 동안 변제를 완료하면 나머지 채무가 면책됩니다.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong className="text-foreground">개인파산:</strong> 면책 결정 시 즉시 모든 채무가 면책됩니다.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 6 */}
            <section id="costs" className="scroll-mt-20 mb-10">
              <h2 id="costs-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <FileText className="w-6 h-6 text-primary" />
                비용 및 준비사항
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                개인회생과 개인파산 신청 시 필요한 비용과 준비해야 할 서류를 정리했습니다.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-4">신청 비용</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary text-lg mt-0.5">•</span>
                    <div>
                      <strong className="text-foreground block mb-1">인지대:</strong>
                      <span>약 20~30만원 (채무액에 따라 상이)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary text-lg mt-0.5">•</span>
                    <div>
                      <strong className="text-foreground block mb-1">송달료:</strong>
                      <span>채권자 수에 따라 약 10~20만원</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary text-lg mt-0.5">•</span>
                    <div>
                      <strong className="text-foreground block mb-1">법률 대리인 비용:</strong>
                      <span>별도 (변호사 선임 시) 또는 법률구조공단 무료 지원 가능</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-4">준비 서류</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>채무 목록 (각 금융회사별 대출 약정서, 카드 이용 내역서 등)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>재산 목록 (부동산 등기부등본, 예금 통장 사본, 주식 보유 증명 등)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>소득 증빙 자료 (급여명세서, 사업자등록증, 소득금액증명원 등)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>가족 관계 증명서 (최저생계비 계산용)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>주민등록등본, 기본증명서 등</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section id="conclusion" className="scroll-mt-20 mb-10">
              <h2 id="conclusion-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                마치며: 나에게 맞는 제도 선택하기
              </h2>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-lg my-6">
                <p className="text-foreground leading-relaxed font-medium mb-4">
                  개인회생과 개인파산 중 어떤 제도를 선택해야 할까요?
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">정기 수입이 있고</strong> 일부 채무를 갚을 수 있다면 → <strong className="text-primary">개인회생</strong> 추천</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">수입이 없거나 극히 적고</strong> 채무를 갚을 수 없다면 → <strong className="text-primary">개인파산</strong> 추천</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">주택이나 재산을 보유</strong>하고 있다면 → <strong className="text-primary">개인회생</strong>이 유리할 수 있음</span>
                  </li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                정확한 판단은 전문가 상담을 통해 받으시는 것이 좋습니다. 돈워리의 채무조정 자가진단을 통해 나에게 맞는 해결책을 찾아보세요.
              </p>
            </section>
          </article>
        </div>

        {/* CTA Buttons */}
        <div className="max-w-4xl mx-auto mt-10 mb-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/debt/test">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl shadow-elevated w-full sm:w-auto">
                <Calculator className="w-5 h-5 mr-2" />
                <span className="font-bold">채무조정 자가진단 시작하기</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/cal/debt-reduction">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-xl w-full sm:w-auto">
                <Calculator className="w-5 h-5 mr-2" />
                <span className="font-bold">개인회생 탕감액 계산하기</span>
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}
