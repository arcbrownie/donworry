"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import AdSenseDisplay from "@/components/adsense/AdSenseDisplay";
// FAQ는 faqs.ts 파일에서 관리됩니다

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
                매일 아침 독촉 전화에 눈뜨는 당신에게
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                어제보다 오늘 더 무거운 빚더미를 안고 잠에서 깨는 기분, 누구보다 잘 알고 있습니다. 고물가와 고금리가 겹친 2025년을 지나오며 "조금만 더 버티면 되겠지" 했던 희망이 절망으로 바뀌었을지도 모릅니다. 하지만 2026년 새해, 정부와 법원은 당신과 같은 성실한 채무자들이 다시 일어설 수 있도록 개인회생 문턱을 낮추고 혜택을 대폭 강화했습니다.
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
                개인회생을 망설이는 가장 큰 이유는 "빚 갚느라 생활비가 없으면 어떡하지?"라는 불안감입니다. 2026년에는 보건복지부의 기준 중위소득 인상에 따라 법원이 인정해주는 최저생계비가 역대 최고 수준으로 현실화되었습니다.
              </p>
              
              <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-soft" role="figure" aria-label="2026년 개인회생 가구원수별 최저생계비 표">
                <h3 className="font-semibold text-foreground mb-4">2026년 최저생계비 기준 (가구원수별)</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="font-semibold text-primary">1인 가구:</span>
                    <span>약 138만 원 확정 (전년 대비 약 3% 이상 인상)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-semibold text-primary">2인 가구:</span>
                    <span>약 227만 원</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-semibold text-primary">3인 가구:</span>
                    <span>약 291만 원</span>
                  </li>
                </ul>
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
                  <span className="font-bold">내 예상 탕감액이 궁금하다면?</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Section 3 */}
            <section id="fast-track" className="scroll-mt-20 mb-10">
              <h2 id="fast-track-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                '패스트트랙'의 일상화: 지루한 기다림은 끝났습니다
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                그동안 개인회생을 신청하면 결과가 나오기까지 반년이 넘는 시간을 불안 속에서 보내야 했습니다. 하지만 2026년부터는 <strong className="text-foreground">'디지털 사법 시스템'</strong>의 전면 도입으로 처리 속도가 획기적으로 빨라졌습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                특히, 청년층이나 65세 이상 고령자, 그리고 성실하게 소득 활동을 증빙하는 직장인의 경우 변제 기간을 기존 3년에서 2년(24개월)으로 단축해주는 <strong className="text-foreground">'단축 권고'</strong> 비중이 크게 늘어났습니다. 36개월이 길게 느껴졌다면, 이제 2년이라는 짧은 시간 안에 모든 빚을 청산하고 '신용 대출'이 가능한 깨끗한 신분으로 복귀할 수 있습니다.
              </p>
            </section>

            {/* Section 4 */}
            <section id="recent-loan" className="scroll-mt-20 mb-10">
              <h2 id="recent-loan-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                최근 대출(1년 이내)에 대한 '포용적 심사'
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "빌린 지 얼마 안 된 돈이 많아서 기각되면 어쩌죠?" 많은 분이 가장 두려워하는 부분입니다. 예전에는 신청 전 1년 이내의 대출이 많으면 도덕적 해이로 보아 엄격하게 잣대를 들이댔습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                하지만 2026년 가이드라인은 다릅니다. 고물가로 인한 카드 돌려막기, 생활비 부족으로 인한 대출, 고금리 이자를 끄기 위한 대환 대출에 대해서는 법원이 매우 포용적으로 접근하기 시작했습니다. 대출금을 사치나 도박이 아닌 <strong className="text-foreground">'살기 위해'</strong> 썼다는 것만 명확히 소명한다면, 최근 채무가 많아도 회생의 기회는 열려 있습니다.
              </p>
            </section>

            {/* Section 5 */}
            <section id="housing" className="scroll-mt-20 mb-10">
              <h2 id="housing-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                "내 집만은 지키고 싶습니다" : 주거권 보장 강화
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                빚 때문에 살던 집에서 쫓겨나야 한다면 그 절망감은 말로 다 할 수 없습니다. 2026년부터는 주택담보대출(주담대)을 보유한 채무자를 위해 <strong className="text-foreground">'법원-은행 연계 프로그램'</strong>이 강화되었습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                개인회생을 신청하더라도 집이 경매로 넘어가지 않도록, 은행과 협의하여 이자는 성실히 갚으면서 나머지 신용 대출과 카드값만 회생으로 탕감받는 방식이 활성화되었습니다. 이제 소중한 가족의 보금자리를 지키면서도 감당할 수 없는 빚의 고리를 끊어낼 수 있습니다.
              </p>
            </section>

            {/* Section 6 */}
            <section id="check" className="scroll-mt-20 mb-10">
              <h2 id="check-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                지금 바로 확인하세요, 당신의 내일은 가벼워야 합니다
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                개인회생은 단순히 빚을 깎아주는 제도가 아닙니다. 당신의 꺾인 의지를 다시 세워주는 <strong className="text-foreground">'경제적 심폐소생술'</strong>입니다. 혼자 고민하며 밤잠을 설치는 시간에도 이자는 쌓여갑니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                2026년의 완화된 기준이 나에게 어떻게 적용될지 궁금하신가요? 지금 바로 <strong className="text-primary">'개인회생 예상 탕감액 계산기'</strong>를 활용해 보세요. 30초의 확인이 당신의 남은 인생을 바꿀 수 있습니다.
              </p>
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
