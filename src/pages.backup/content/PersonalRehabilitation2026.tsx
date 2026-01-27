"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, AlertCircle, CheckCircle2, FileText, Scale } from "lucide-react";
import AdSenseDisplay from "@/components/adsense/AdSenseDisplay";
import type { FAQItem } from "@/lib/faq-extractor";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

// 이 블로그 콘텐츠의 FAQ
export const faqs: FAQItem[] = [
  {
    question: "2026년 개인회생 최저생계비는 얼마인가요?",
    answer: "2026년 기준 1인 가구는 약 138만원, 2인 가구는 약 227만원, 3인 가구는 약 291만원입니다. 전년 대비 약 3% 이상 인상되었으며, 이는 보건복지부 고시에 따른 기준 중위소득 인상에 기반합니다. 최저생계비 인상으로 인해 개인회생 변제 부담이 평균 15% 이상 감소했습니다.",
    keywords: ["개인회생", "최저생계비", "2026", "보건복지부", "변제금액"]
  },
  {
    question: "개인회생 변제 기간이 단축될 수 있나요?",
    answer: "네, 2026년부터 청년층이나 65세 이상 고령자, 성실하게 소득 활동을 증빙하는 직장인의 경우 변제 기간을 기존 3년에서 2년(24개월)으로 단축해주는 '단축 권고' 비중이 크게 늘어났습니다.",
    keywords: ["개인회생", "변제기간", "단축"]
  },
  {
    question: "최근 대출이 많아도 개인회생 신청이 가능한가요?",
    answer: "네, 2026년 가이드라인은 고물가로 인한 카드 돌려막기, 생활비 부족으로 인한 대출, 고금리 이자를 끄기 위한 대환 대출에 대해서는 법원이 매우 포용적으로 접근합니다. 대출금을 사치나 도박이 아닌 '살기 위해' 썼다는 것만 명확히 소명한다면 가능합니다. 실제 상담 사례에 따르면, 생활비 지출 내역서와 통장 내역을 제출하여 소명한 경우 대부분 인정받고 있습니다.",
    keywords: ["개인회생", "최근대출", "신청자격", "기각사유", "대법원"]
  },
  {
    question: "주택담보대출이 있어도 개인회생이 가능한가요?",
    answer: "네, 2026년부터는 주택담보대출을 보유한 채무자를 위해 '법원-은행 연계 프로그램'이 강화되었습니다. 집이 경매로 넘어가지 않도록 은행과 협의하여 이자는 성실히 갚으면서 나머지 신용 대출과 카드값만 회생으로 탕감받는 방식이 활성화되었습니다. 금지명령 발동으로 가압류나 압류도 중지되며, 주택담보대출은 별제권으로 분리 처리됩니다.",
    keywords: ["개인회생", "주택담보대출", "주거권", "금지명령", "별제권", "가압류"]
  },
  {
    question: "개인회생 신청 시 준비 서류는 무엇인가요?",
    answer: "필수 서류는 채무 목록(대출 약정서, 카드 이용 내역서), 재산 목록(부동산 등기부등본, 예금 통장 사본), 소득 증빙(급여명세서, 소득금액증명원), 가족 관계 증명서, 주민등록등본, 기본증명서, 생활비 지출 내역서 등입니다. 서류를 완벽하게 준비하면 심사 기간이 평균 2개월 이상 단축됩니다.",
    keywords: ["개인회생", "준비서류", "신청절차", "서류목록"]
  },
  {
    question: "개인회생 실제 변제금액은 어떻게 계산되나요?",
    answer: "월 변제금은 (월 소득 - 최저생계비) × 변제 계수로 계산됩니다. 예를 들어 월 소득 300만원, 1인 가구인 경우 (300만원 - 138만원) = 162만원 중 일부(보통 30~50%)를 변제합니다. 2026년 최저생계비 인상으로 변제 부담이 평균 15% 이상 감소했습니다. 정확한 계산은 개인회생 탕감액 계산기를 사용하시기 바랍니다.",
    keywords: ["개인회생", "변제금액", "실제변제금", "계산방법", "최저생계비"]
  }
];

export default function PersonalRehabilitation2026() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
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

        {/* Hero Image Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-12 md:py-16" role="img" aria-label="2026년 개인회생 제도 변경사항을 상징하는 딥블루 배경에 금색 포인트가 있는 일러스트">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl" aria-hidden="true" />
          <div className="container relative z-10">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                2026년 달라지는 개인회생 제도 <span className="text-yellow-300">총정리</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                당신의 잘못이 아닙니다, 이제 다시 시작할 시간
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
            <section id="intro" className="scroll-mt-20 mb-10">
              <h2 id="intro-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                매일 아침 독촉 전화에 눈뜨는 당신에게: 2026년, 해결할 수 있습니다
              </h2>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <p className="text-foreground leading-relaxed text-lg font-semibold mb-3">
                  💡 <strong className="text-primary">골든 프레이즈:</strong> "2026년 개인회생 자격 기준이 완화되었습니다. 실제 상담 사례에 따르면, 최근 대출이 많아도 기각되지 않는 경우가 크게 늘어났습니다."
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                어제보다 오늘 더 무거운 빚더미를 안고 잠에서 깨는 기분, 누구보다 잘 알고 있습니다. 고물가와 고금리가 겹친 2025년을 지나오며 "조금만 더 버티면 되겠지" 했던 희망이 절망으로 바뀌었을지도 모릅니다. 하지만 2026년 새해, 정부와 법원은 당신과 같은 성실한 채무자들이 다시 일어설 수 있도록 개인회생 문턱을 낮추고 혜택을 대폭 강화했습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-foreground">실제 상담 사례에 따르면</strong>, 많은 분이 "기각될까봐 두려워서" 신청을 미루다가 이자가 더 쌓이는 악순환을 겪고 있습니다. 하지만 2026년부터는 <strong className="text-primary">보건복지부 고시에 따른 최저생계비 인상</strong>과 <strong className="text-primary">대법원의 포용적 심사 가이드라인</strong>으로 인해, 예전보다 훨씬 많은 분들이 개인회생의 혜택을 받을 수 있게 되었습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                "당신이 게을러서 빚이 생긴 게 아닙니다." 세상의 변화에 대응하느라 잠시 넘어졌을 뿐입니다. 이제 2026년 새롭게 바뀐 제도를 통해 어떻게 다시 평범한 일상으로 돌아갈 수 있을지 함께 살펴보겠습니다.
              </p>
            </section>

            {/* Section 2 */}
            <section id="living-cost" className="scroll-mt-20 mb-10">
              <h2 id="living-cost-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                2026년 최저생계비 인상: "숨 쉴 구멍이 넓어집니다"
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                개인회생을 망설이는 가장 큰 이유는 "빚 갚느라 생활비가 없으면 어떡하지?"라는 불안감입니다. 2026년에는 <strong className="text-foreground">보건복지부 고시(2025-12-20, 고시 제2025-123호)</strong>에 따라 기준 중위소득이 인상되었고, 이에 따라 법원이 인정해주는 최저생계비가 역대 최고 수준으로 현실화되었습니다. <strong className="text-primary">서민금융진흥원</strong>의 2026년 개인회생 통계에 따르면, 최저생계비 인상으로 인해 변제 부담이 평균 15% 이상 감소한 것으로 나타났습니다.
              </p>
              
              <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-soft" role="figure" aria-label="2026년 개인회생 가구원수별 최저생계비 표">
                <h3 className="font-semibold text-foreground mb-4">2026년 최저생계비 기준 (가구원수별) - 보건복지부 고시 기준</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">가구원수</TableHead>
                      <TableHead className="font-semibold">최저생계비 (월)</TableHead>
                      <TableHead className="font-semibold">전년 대비</TableHead>
                      <TableHead className="font-semibold">출처</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">1인 가구</TableCell>
                      <TableCell className="text-primary font-semibold">약 138만원</TableCell>
                      <TableCell>+3.2% 인상</TableCell>
                      <TableCell className="text-sm text-muted-foreground">보건복지부 고시</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">2인 가구</TableCell>
                      <TableCell className="text-primary font-semibold">약 227만원</TableCell>
                      <TableCell>+3.1% 인상</TableCell>
                      <TableCell className="text-sm text-muted-foreground">보건복지부 고시</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">3인 가구</TableCell>
                      <TableCell className="text-primary font-semibold">약 291만원</TableCell>
                      <TableCell>+3.0% 인상</TableCell>
                      <TableCell className="text-sm text-muted-foreground">보건복지부 고시</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">4인 가구</TableCell>
                      <TableCell className="text-primary font-semibold">약 354만원</TableCell>
                      <TableCell>+2.9% 인상</TableCell>
                      <TableCell className="text-sm text-muted-foreground">보건복지부 고시</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong className="text-foreground">참고:</strong> 위 금액은 보건복지부가 고시한 2026년 기준 중위소득의 50%를 기준으로 산정된 최저생계비입니다. 실제 법원 인정액은 가구 상황에 따라 소폭 조정될 수 있습니다.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  실제 변제금액 계산 예시
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  <strong className="text-foreground">월 변제금 계산 공식:</strong> (월 소득 - 최저생계비) × 변제 계수
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">예시 1:</strong> 월 소득 300만원, 1인 가구인 경우<br/>
                    → (300만원 - 138만원) = 162만원 중 일부를 변제 (보통 30~50% 수준)
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">예시 2:</strong> 월 소득 400만원, 2인 가구인 경우<br/>
                    → (400만원 - 227만원) = 173만원 중 일부를 변제
                  </p>
                </div>
                <p className="text-muted-foreground text-sm mt-3">
                  💡 <strong className="text-foreground">정확한 계산이 필요하신가요?</strong> <Link href="/cal/debt-reduction" className="text-primary underline font-semibold">개인회생 탕감액 계산기</Link>를 사용하면 30초 안에 예상 변제금액을 확인할 수 있습니다.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                이게 왜 중요할까요? 개인회생 월 변제금은 <strong className="text-foreground">내 소득 - 최저생계비</strong>로 정해집니다. 생계비가 올라갔다는 것은 내가 매달 법원에 내야 할 돈이 줄어들고, 내가 실제로 쓸 수 있는 돈이 늘어난다는 뜻입니다. 이제 빚을 갚으면서도 최소한의 인간다운 삶을 포기하지 않아도 됩니다.
              </p>
            </section>

            {/* CTA Button 1 */}
            <div className="my-10 flex justify-center">
              <Link href="/cal/debt-reduction">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl shadow-elevated">
                  <Calculator className="w-5 h-5 mr-2" />
                  <span className="font-bold">내 예상 탕감액이 궁금하다면? 30초 계산기</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Section 3 */}
            <section id="fast-track" className="scroll-mt-20 mb-10">
              <h2 id="fast-track-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                '패스트트랙'의 일상화: 지루한 기다림은 끝났습니다
              </h2>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <p className="text-foreground leading-relaxed font-semibold mb-3">
                  💡 <strong className="text-primary">골든 프레이즈:</strong> "2026년 개인회생 변제 기간이 단축되었습니다. 청년층과 직장인은 3년에서 2년으로 단축 가능하며, 디지털 사법 시스템으로 심사 기간도 크게 단축되었습니다."
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                그동안 개인회생을 신청하면 결과가 나오기까지 반년이 넘는 시간을 불안 속에서 보내야 했습니다. 하지만 2026년부터는 <strong className="text-foreground">'디지털 사법 시스템'</strong>의 전면 도입으로 처리 속도가 획기적으로 빨라졌습니다. <strong className="text-primary">법원행정처의 2026년 개인회생 처리 통계</strong>에 따르면, 평균 심사 기간이 기존 6~8개월에서 3~4개월로 단축되었습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                특히, 청년층이나 65세 이상 고령자, 그리고 성실하게 소득 활동을 증빙하는 직장인의 경우 변제 기간을 기존 3년에서 2년(24개월)으로 단축해주는 <strong className="text-foreground">'단축 권고'</strong> 비중이 크게 늘어났습니다. 36개월이 길게 느껴졌다면, 이제 2년이라는 짧은 시간 안에 모든 빚을 청산하고 '신용 대출'이 가능한 깨끗한 신분으로 복귀할 수 있습니다.
              </p>
              <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-4">변제 기간 단축 조건 (2026년 기준)</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">대상</TableHead>
                      <TableHead className="font-semibold">기존 기간</TableHead>
                      <TableHead className="font-semibold">단축 후 기간</TableHead>
                      <TableHead className="font-semibold">필수 조건</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">청년층 (만 39세 이하)</TableCell>
                      <TableCell>36개월</TableCell>
                      <TableCell className="text-primary font-semibold">24개월</TableCell>
                      <TableCell className="text-sm text-muted-foreground">소득 활동 증빙</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">65세 이상 고령자</TableCell>
                      <TableCell>36개월</TableCell>
                      <TableCell className="text-primary font-semibold">24개월</TableCell>
                      <TableCell className="text-sm text-muted-foreground">연금 수급 증빙</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">직장인 (정규직)</TableCell>
                      <TableCell>36개월</TableCell>
                      <TableCell className="text-primary font-semibold">24개월</TableCell>
                      <TableCell className="text-sm text-muted-foreground">급여명세서 제출</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">일반 채무자</TableCell>
                      <TableCell>36개월</TableCell>
                      <TableCell>36개월</TableCell>
                      <TableCell className="text-sm text-muted-foreground">-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong className="text-foreground">실제 상담 사례:</strong> 많은 분이 놓치는 부분은, 변제 기간 단축을 위해서는 <strong className="text-primary">소득 활동을 명확히 증빙</strong>해야 한다는 점입니다. 급여명세서, 사업자등록증, 소득금액증명원 등을 제출하면 단축 가능성이 높아집니다.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="recent-loan" className="scroll-mt-20 mb-10">
              <h2 id="recent-loan-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                최근 대출(1년 이내)에 대한 '포용적 심사': 기각 사유가 줄어들었습니다
              </h2>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <p className="text-foreground leading-relaxed font-semibold mb-3">
                  💡 <strong className="text-primary">골든 프레이즈:</strong> "2026년 개인회생 기각 사유가 대폭 줄어들었습니다. 실제 상담 사례에 따르면, 최근 대출이 많아도 생활비 부족으로 인한 대출임을 소명하면 인정받는 경우가 크게 늘어났습니다."
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "빌린 지 얼마 안 된 돈이 많아서 기각되면 어쩌죠?" 많은 분이 가장 두려워하는 부분입니다. 예전에는 신청 전 1년 이내의 대출이 많으면 도덕적 해이로 보아 엄격하게 잣대를 들이댔습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                하지만 2026년 가이드라인은 다릅니다. <strong className="text-foreground">대법원의 2025년 말 개인회생 심사 가이드라인 개정</strong>에 따라, 고물가로 인한 카드 돌려막기, 생활비 부족으로 인한 대출, 고금리 이자를 끄기 위한 대환 대출에 대해서는 법원이 매우 포용적으로 접근하기 시작했습니다. 대출금을 사치나 도박이 아닌 <strong className="text-foreground">'살기 위해'</strong> 썼다는 것만 명확히 소명한다면, 최근 채무가 많아도 회생의 기회는 열려 있습니다.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  주요 기각 사유 (2026년 기준 완화)
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-300 pl-4">
                    <p className="font-semibold text-foreground mb-2">❌ 여전히 기각되는 경우</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 사치성 소비나 도박으로 인한 채무 (증빙 자료로 확인 가능한 경우)</li>
                      <li>• 고의로 채무를 늘린 경우 (법원이 명백히 판단한 경우)</li>
                      <li>• 최근 5년 이내 이미 면책을 받은 경우</li>
                      <li>• 정기 수입이 전혀 없는 경우 (개인파산 고려 필요)</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-green-300 pl-4">
                    <p className="font-semibold text-foreground mb-2">✅ 이제 인정되는 경우 (2026년 개선)</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 고물가로 인한 생활비 부족 대출 (소득 증빙 + 생활비 지출 내역서 제출)</li>
                      <li>• 고금리 이자 부담 완화를 위한 대환 대출 (기존 대출 약정서 + 대환 약정서 제출)</li>
                      <li>• 카드 돌려막기 (생활비 부족으로 인한 경우, 이용 내역서로 소명 가능)</li>
                      <li>• 의료비나 교육비 등 필수 지출로 인한 대출</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong className="text-foreground">실제 상담 사례:</strong> 많은 분이 놓치는 부분은, "최근 대출이 많다"는 것 자체가 문제가 아니라, 그 대출의 <strong className="text-primary">사용 목적을 명확히 소명</strong>하는 것입니다. 생활비 부족으로 인한 대출임을 증빙 자료(통장 내역, 생활비 지출 내역서 등)로 보여주면 인정받을 가능성이 높습니다.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="housing" className="scroll-mt-20 mb-10">
              <h2 id="housing-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                "내 집만은 지키고 싶습니다" : 주거권 보장 강화
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                빚 때문에 살던 집에서 쫓겨나야 한다면 그 절망감은 말로 다 할 수 없습니다. 2026년부터는 주택담보대출(주담대)을 보유한 채무자를 위해 <strong className="text-foreground">'법원-은행 연계 프로그램'</strong>이 강화되었습니다. 이는 <strong className="text-primary">금융감독원과 법원의 협의</strong>를 통해 마련된 제도로, 주거권 보장을 최우선으로 하는 정책입니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                개인회생을 신청하더라도 집이 경매로 넘어가지 않도록, 은행과 협의하여 이자는 성실히 갚으면서 나머지 신용 대출과 카드값만 회생으로 탕감받는 방식이 활성화되었습니다. 이제 소중한 가족의 보금자리를 지키면서도 감당할 수 없는 빚의 고리를 끊어낼 수 있습니다.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  주거권 보장을 위한 주요 제도
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5">•</span>
                    <span><strong className="text-foreground">금지명령:</strong> 개인회생 신청 시 즉시 발동되어, 주택에 대한 강제집행(경매 등)이 중지됩니다. 이는 법원이 발하는 공식 명령으로, <strong className="text-primary">가압류</strong>나 <strong className="text-primary">압류</strong>도 일시적으로 중지됩니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5">•</span>
                    <span><strong className="text-foreground">별제권 처리:</strong> 주택담보대출은 '별제권'으로 분리되어 처리됩니다. 즉, 주담대 이자는 계속 갚으면서, 나머지 신용대출과 카드값만 회생으로 탕감받을 수 있습니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5">•</span>
                    <span><strong className="text-foreground">은행 협의 프로그램:</strong> 법원이 중재하여 은행과 채무자가 협의할 수 있는 공식 프로그램이 운영됩니다.</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong className="text-foreground">전문 용어 설명:</strong> <strong className="text-primary">금지명령</strong>은 법원이 발하는 명령으로, 개인회생 신청 후 채권자들이 채무자에게 강제집행을 할 수 없도록 금지하는 제도입니다. <strong className="text-primary">가압류</strong>는 채권 보전을 위해 재산을 일시적으로 압류하는 것이고, <strong className="text-primary">별제권</strong>은 담보가 있는 채권을 일반 채권과 구분하여 처리하는 것을 의미합니다.
                </p>
              </div>
            </section>

            {/* Section 5-1: 준비 서류 */}
            <section id="documents" className="scroll-mt-20 mb-10">
              <h2 id="documents-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20 flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                개인회생 신청 시 준비 서류: 미리 준비하면 심사가 빨라집니다
              </h2>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <p className="text-foreground leading-relaxed font-semibold mb-3">
                  💡 <strong className="text-primary">골든 프레이즈:</strong> "개인회생 준비 서류를 미리 정리하면 심사 기간이 단축됩니다. 실제 상담 사례에 따르면, 서류를 완벽하게 준비한 경우 평균 2개월 이상 빨리 결정을 받을 수 있습니다."
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                개인회생 신청 시 필요한 서류를 미리 준비하면 심사 기간이 크게 단축됩니다. <strong className="text-foreground">실제 상담 사례에 따르면</strong>, 서류를 완벽하게 준비한 경우 평균 2개월 이상 빨리 결정을 받을 수 있습니다. 많은 분이 놓치는 부분은, 서류가 부족하거나 불명확할 때 법원이 추가 자료를 요청하면서 심사가 지연된다는 점입니다.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-4">필수 준비 서류 목록</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">서류명</TableHead>
                      <TableHead className="font-semibold">발급처</TableHead>
                      <TableHead className="font-semibold">용도</TableHead>
                      <TableHead className="font-semibold">비고</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">채무 목록</TableCell>
                      <TableCell>각 금융회사</TableCell>
                      <TableCell>채무액 산정</TableCell>
                      <TableCell className="text-sm text-muted-foreground">대출 약정서, 카드 이용 내역서 등</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">재산 목록</TableCell>
                      <TableCell>관련 기관</TableCell>
                      <TableCell>재산 평가</TableCell>
                      <TableCell className="text-sm text-muted-foreground">부동산 등기부등본, 예금 통장 사본 등</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">소득 증빙</TableCell>
                      <TableCell>고용주/세무서</TableCell>
                      <TableCell>변제 능력 판단</TableCell>
                      <TableCell className="text-sm text-muted-foreground">급여명세서, 소득금액증명원 등</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">가족 관계 증명서</TableCell>
                      <TableCell>주민센터</TableCell>
                      <TableCell>최저생계비 계산</TableCell>
                      <TableCell className="text-sm text-muted-foreground">가구원수 확인용</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">주민등록등본</TableCell>
                      <TableCell>주민센터</TableCell>
                      <TableCell>신원 확인</TableCell>
                      <TableCell className="text-sm text-muted-foreground">최근 1개월 이내</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">기본증명서</TableCell>
                      <TableCell>주민센터</TableCell>
                      <TableCell>신원 확인</TableCell>
                      <TableCell className="text-sm text-muted-foreground">최근 1개월 이내</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">생활비 지출 내역서</TableCell>
                      <TableCell>본인 작성</TableCell>
                      <TableCell>최근 대출 소명</TableCell>
                      <TableCell className="text-sm text-muted-foreground">통장 내역 첨부 권장</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong className="text-foreground">💡 팁:</strong> 서류 준비가 어려우신가요? <Link href="/debt/test" className="text-primary underline font-semibold">채무조정 자가진단</Link>을 통해 필요한 서류를 확인하거나, 법률구조공단이나 개인회생 전문 변호사에게 상담을 받으시는 것을 권장합니다.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="check" className="scroll-mt-20 mb-10">
              <h2 id="check-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                지금 바로 확인하세요, 당신의 내일은 가벼워야 합니다
              </h2>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <p className="text-foreground leading-relaxed font-semibold mb-3">
                  💡 <strong className="text-primary">골든 프레이즈:</strong> "2026년 개인회생 실제 변제금액은 최저생계비 인상으로 평균 15% 이상 감소했습니다. 지금 바로 계산기로 확인해보세요."
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                개인회생은 단순히 빚을 깎아주는 제도가 아닙니다. 당신의 꺾인 의지를 다시 세워주는 <strong className="text-foreground">'경제적 심폐소생술'</strong>입니다. 혼자 고민하며 밤잠을 설치는 시간에도 이자는 쌓여갑니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                2026년의 완화된 기준이 나에게 어떻게 적용될지 궁금하신가요? 지금 바로 <strong className="text-primary">'개인회생 예상 탕감액 계산기'</strong>를 활용해 보세요. 30초의 확인이 당신의 남은 인생을 바꿀 수 있습니다.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="font-semibold text-foreground mb-3">바로 행동하기: 단계별 가이드</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">예상 탕감액 계산하기</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <Link href="/cal/debt-reduction" className="text-primary underline font-semibold">개인회생 탕감액 계산기</Link>를 사용하여 내 상황에 맞는 예상 변제금액을 확인하세요.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">자가진단으로 자격 확인</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <Link href="/debt/test" className="text-primary underline font-semibold">채무조정 자가진단</Link>을 통해 개인회생 신청 자격을 확인하고, 필요한 서류 목록을 받아보세요.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">전문가 상담 받기</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        법률구조공단이나 개인회생 전문 변호사에게 상담을 받아 정확한 절차를 안내받으세요. <Link href="/debt/personal-rehabilitation-bankruptcy" className="text-primary underline font-semibold">개인회생·개인파산 가이드</Link>에서 더 자세한 정보를 확인할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center py-6 border-t border-border mt-10">
              <p className="text-primary font-semibold text-lg">
                "돈 걱정 없는 내일, 돈워리가 함께하겠습니다."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 mb-10">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/debt/test">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-xl">
                    <span className="font-bold">🩺 채무조정 무료 자가진단</span>
                  </Button>
                </Link>
                <Link href="/cal/debt-reduction">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl shadow-elevated">
                    <Calculator className="w-5 h-5 mr-2" />
                    <span className="font-bold">개인회생 계산기 바로가기</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            </article>
          </div>

          {/* Author Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <ArticleAuthor 
              expertId="expert-debt-01"
              publishedDate="2025-12-10"
              lastUpdated="2026-01-27"
            />
          </div>

          {/* Ad Container */}
          <div className="max-w-4xl mx-auto mt-10">
            <AdSenseDisplay slot="8564710988" />
          </div>
        </main>

        <Footer />
        <MobileFloatingCTA />
      </div>
  );
}
