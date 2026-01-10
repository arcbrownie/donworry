import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight, Building2, FileText, CheckCircle2, AlertCircle, Users, Clock, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function CreditRecoveryCommittee() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // SEO Meta Tags
    document.title = "신용회복위원회 채무조정 완벽 가이드: 신청 절차부터 자격 조건까지 | 돈워리";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '신용회복위원회 채무조정 제도 상세 안내. 신청 자격, 절차, 비용, 장단점까지 신용회복위원회를 통한 채무조정의 모든 것을 알려드립니다. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', '신용회복위원회, 채무조정, 신용회복위원회 채무조정, 신속채무조정, 채무조정 신청, 신용회복위원회 신청');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', '신용회복위원회 채무조정 완벽 가이드 | 돈워리');

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', '신용회복위원회 채무조정 제도 상세 안내. 신청 절차부터 자격 조건까지 한 번에 정리. 일상은 가볍게, 돈 걱정은 없게 - 돈워리.');

    // Scroll progress
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
              신용회복위원회 채무조정 완벽 가이드
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              신청 절차부터 자격 조건까지 한 번에 정리
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents */}
          <div className="lg:w-64 flex-shrink-0">
            <TableOfContents 
              headings={[
                { id: "what-is-heading", text: "1. 신용회복위원회란 무엇인가?", level: 2 },
                { id: "qualification-heading", text: "2. 신청 자격 및 조건", level: 2 },
                { id: "procedure-heading", text: "3. 신청 절차 및 진행 과정", level: 2 },
                { id: "benefits-heading", text: "4. 신용회복위원회 채무조정의 장점", level: 2 },
                { id: "comparison-heading", text: "5. 개인회생 vs 신용회복위원회 채무조정 비교", level: 2 },
              ]}
            />
          </div>

          {/* Article Content */}
          <article className="flex-1 max-w-4xl prose prose-lg prose-slate max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                여러 은행과 카드사에 흩어진 채무로 인해 매달 이자를 갚기만 하느라 원금이 줄어들지 않는 상황이신가요? 법원을 통한 개인회생이 부담스럽거나 신청 자격이 안 되는 분들을 위해, <strong className="text-primary">신용회복위원회</strong>에서 제공하는 채무조정 제도가 있습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base font-medium">
                오늘 돈워리에서는 신용회복위원회 채무조정 제도의 모든 것을 상세히 알려드립니다. 신청 자격부터 절차, 비용, 개인회생과의 차이점까지, 채무 문제 해결을 위한 실질적인 정보를 전해드립니다.
              </p>
            </section>

            {/* Section 1 */}
            <section id="what-is" className="scroll-mt-20 mb-10">
              <h2 id="what-is-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Building2 className="w-6 h-6 text-primary" />
                신용회복위원회란 무엇인가?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">신용회복위원회</strong>는 1997년 외환위기 이후 개인 채무자들의 경제적 재기를 돕기 위해 설립된 공공기관입니다. 금융감독원 산하 기관으로, 개인 채무자들의 채무조정을 중재하고 지원하는 역할을 합니다.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-6">
                <p className="text-foreground leading-relaxed font-medium">
                  신용회복위원회의 주요 역할은 <strong className="text-primary">금융회사와 채무자 간의 채무조정을 중재</strong>하는 것입니다. 법원을 통하지 않고도 비교적 간단한 절차로 이자율 인하, 상환 기간 연장 등의 혜택을 받을 수 있습니다.
                </p>
              </div>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground block mb-1">공공기관의 중립성:</strong>
                    <span className="text-muted-foreground">금융회사에 유리하지 않고 채무자와 금융회사 간 공정한 중재를 진행합니다.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground block mb-1">무료 서비스:</strong>
                    <span className="text-muted-foreground">신용회복위원회 채무조정은 원칙적으로 무료로 제공됩니다. (단, 채권추심비 등 일부 비용 발생 가능)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground block mb-1">비법정 절차:</strong>
                    <span className="text-muted-foreground">법원을 거치지 않아 절차가 간단하고 신속하며, 신용정보 영향이 비교적 적습니다.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="qualification" className="scroll-mt-20 mb-10">
              <h2 id="qualification-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Users className="w-6 h-6 text-primary" />
                신청 자격 및 조건
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                신용회복위원회 채무조정을 신청하기 위해서는 다음 조건을 충족해야 합니다.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  필수 신청 자격
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary text-lg mt-0.5">1.</span>
                    <div>
                      <strong className="text-foreground block mb-1">총 채무액:</strong>
                      <span>무담보 채무 기준 <strong className="text-foreground">15억원 이하</strong></span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary text-lg mt-0.5">2.</span>
                    <div>
                      <strong className="text-foreground block mb-1">정기 수입:</strong>
                      <span>최저생계비 이상의 정기적인 수입이 있어야 합니다. (직장인, 자영업자, 프리랜서 등)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary text-lg mt-0.5">3.</span>
                    <div>
                      <strong className="text-foreground block mb-1">채무 상환 의지:</strong>
                      <span>변제 능력이 있고 채무 상환 의지가 있는 자</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary text-lg mt-0.5">4.</span>
                    <div>
                      <strong className="text-foreground block mb-1">신청 가능 채무:</strong>
                      <span>은행 대출, 신용카드, 할부금융, 소액대출 등 금융회사 채무 (개인 간 채무 제외)</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 mb-4">
                <p className="text-foreground text-sm font-medium flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-warning">⚠️ 주의사항:</strong> 이미 개인회생이나 파산 절차가 진행 중이거나, 최근 5년 이내 면책받은 이력이 있는 경우 신청이 제한될 수 있습니다. 또한 신용불량자로 등록된 경우도 신청 조건을 충족하기 어려울 수 있습니다.
                  </span>
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="procedure" className="scroll-mt-20 mb-10">
              <h2 id="procedure-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Clock className="w-6 h-6 text-primary" />
                신청 절차 및 진행 과정
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                신용회복위원회 채무조정 신청 절차는 다음과 같습니다. 법원을 통한 개인회생보다 훨씬 간단하고 신속합니다.
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
                        신용회복위원회 홈페이지나 지점 방문을 통해 채무조정 신청서를 작성합니다. 소득 증빙 자료, 채무 증빙 자료, 가족 관계 증명서 등을 준비해야 합니다.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                        <li>• 소득 증명서 (급여명세서, 사업자 등록증 등)</li>
                        <li>• 채무 증명서 (대출 약정서, 카드 이용 내역서 등)</li>
                        <li>• 가족 관계 증명서 (최저생계비 계산용)</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">심사 및 조정안 작성</h3>
                      <p className="text-muted-foreground text-sm">
                        신용회복위원회에서 제출된 서류를 검토하고, 채무자의 소득과 가족 구성원 수를 기준으로 상환 가능 금액을 산정합니다. 이후 각 금융회사와 협의하여 조정안을 작성합니다.
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
                      <h3 className="font-semibold text-foreground mb-2">조정안 통보 및 승인</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        작성된 조정안을 채무자에게 통보합니다. 이자율 인하, 상환 기간 연장, 일부 원금 탕감 등의 조건이 포함됩니다. 채무자가 조정안을 승인하면 조정이 확정됩니다.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        ⏱️ <strong className="text-foreground">처리 기간:</strong> 약 2~4주 소요 (법원 개인회생보다 훨씬 빠름)
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
                      <h3 className="font-semibold text-foreground mb-2">상환 시작</h3>
                      <p className="text-muted-foreground text-sm">
                        조정안 승인 후 약정된 금액을 매달 납부합니다. 신용회복위원회가 각 금융회사에 대신 상환금을 분배해주는 방식입니다.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 4 */}
            <section id="benefits" className="scroll-mt-20 mb-10">
              <h2 id="benefits-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                신용회복위원회 채무조정의 장점
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-5 bg-green-50 border-green-200">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    이자율 인하
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    연체 이자율이 법정 최고 금리(20%)로 인하되거나, 경우에 따라 원금 보호를 위한 이자율 조정이 가능합니다.
                  </p>
                </Card>
                <Card className="p-5 bg-blue-50 border-blue-200">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    상환 기간 연장
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    채무자의 상환 능력을 고려하여 상환 기간을 5~10년까지 연장할 수 있어 월 상환액 부담이 줄어듭니다.
                  </p>
                </Card>
                <Card className="p-5 bg-purple-50 border-purple-200">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-purple-600" />
                    원금 일부 탕감
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    일부 금융회사는 원금의 일부를 탕감해주는 경우도 있습니다. (금융회사 정책에 따라 상이)
                  </p>
                </Card>
                <Card className="p-5 bg-orange-50 border-orange-200">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-orange-600" />
                    신속한 처리
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    법원 절차 없이 2~4주 내에 조정안을 받을 수 있어 빠른 채무 해결이 가능합니다.
                  </p>
                </Card>
              </div>
            </section>

            {/* Section 5 */}
            <section id="comparison" className="scroll-mt-20 mb-10">
              <h2 id="comparison-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Scale className="w-6 h-6 text-primary" />
                개인회생 vs 신용회복위원회 채무조정 비교
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-soft">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border/50 p-4 text-left font-semibold text-foreground">구분</th>
                      <th className="border border-border/50 p-4 text-left font-semibold text-foreground">신용회복위원회 채무조정</th>
                      <th className="border border-border/50 p-4 text-left font-semibold text-foreground">개인회생</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-border/50 p-4 text-foreground font-medium">처리 기간</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">약 2~4주</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">약 6개월~1년</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-border/50 p-4 text-foreground font-medium">비용</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">무료</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">인지대, 송달료 등 약 30~50만원</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-border/50 p-4 text-foreground font-medium">법원 개입</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">없음 (비법정 절차)</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">있음 (법정 절차)</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-border/50 p-4 text-foreground font-medium">채무 탕감</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">이자율 인하, 기간 연장 중심 (원금 탕감 제한적)</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">최대 90%까지 원금 탕감 가능</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-border/50 p-4 text-foreground font-medium">신용정보 영향</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">상대적으로 적음</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">면책 완료 후 5년간 기록</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-border/50 p-4 text-foreground font-medium">강제집행 중지</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">조정 진행 중 일시 중지 가능</td>
                      <td className="border border-border/50 p-4 text-muted-foreground">신청 시 즉시 중지</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 */}
            <section id="disadvantages" className="scroll-mt-20 mb-10">
              <h2 id="disadvantages-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <AlertCircle className="w-6 h-6 text-warning" />
                주의사항 및 단점
              </h2>
              <div className="bg-warning/10 border border-warning/30 rounded-lg p-6 mb-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground block mb-1">원금 탕감이 제한적:</strong>
                      <span>개인회생처럼 큰 폭의 원금 탕감은 어렵고, 주로 이자율 인하와 상환 기간 연장이 중심입니다.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground block mb-1">금융회사 동의 필요:</strong>
                      <span>모든 금융회사가 조정안에 동의하지 않을 수 있으며, 일부 금융회사만 조정에 참여하는 경우도 있습니다.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground block mb-1">신용정보 기록:</strong>
                      <span>채무조정 사실이 신용정보에 기록되며, 이는 신용평가에 부정적인 영향을 줄 수 있습니다.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground block mb-1">상환 미이행 시:</strong>
                      <span>약정된 상환을 계속 미이행하면 조정이 취소될 수 있으며, 이후 더 불리한 조건이 될 수 있습니다.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section id="when-to-use" className="scroll-mt-20 mb-10">
              <h2 id="when-to-use-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                언제 신용회복위원회 채무조정을 선택해야 할까?
              </h2>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-lg my-6">
                <p className="text-foreground leading-relaxed font-medium mb-4">
                  신용회복위원회 채무조정은 다음과 같은 경우에 적합합니다:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">연체 기간이 짧고</strong> 아직 법원 절차까지 가기에는 이른 경우</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">이자 부담이 크지만</strong> 원금은 대부분 갚을 수 있는 상황</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">빠른 해결이 필요</strong>하고 법원 절차를 피하고 싶은 경우</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">신용정보 영향</strong>을 최소화하면서 채무를 조정하고 싶은 경우</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section id="conclusion" className="scroll-mt-20 mb-10">
              <h2 id="conclusion-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                마치며: 나에게 맞는 채무 해결책 선택하기
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                신용회복위원회 채무조정은 법원을 통한 개인회생보다 간단하고 빠르지만, 원금 탕감 측면에서는 제한적입니다. 자신의 상황을 정확히 파악하고, 전문가 상담을 통해 최적의 해결책을 선택하는 것이 중요합니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                돈워리는 여러분의 채무 문제 해결을 위한 첫걸음을 응원합니다. <strong className="text-primary">지금 바로 채무조정 자가진단을 통해 나에게 맞는 해결책을 찾아보세요!</strong>
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
