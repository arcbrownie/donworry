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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "./faqs";

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
              <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-[1.3] max-w-4xl mx-auto break-words line-clamp-2">
                2026년 개인회생 생계비 11만원 인상 | 1인가구 변제금 계산 완전 정리
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                1인가구 154만원 생계비 인정으로 월 변제금 11만원 줄어드는 효과
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
                2026년 개인회생 무엇이 달라지나요?
              </h2>
              
              <h3 id="living-cost-1person" className="text-xl font-semibold text-foreground mb-3 scroll-mt-20">
                1인 가구 생계비 154만원으로 인상
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                개인회생을 망설이는 가장 큰 이유는 "빚 갚느라 생활비가 없으면 어떡하지?"라는 불안감입니다. 2026년에는 보건복지부의 기준 중위소득 인상에 따라 법원이 인정해주는 최저생계비가 역대 최고 수준으로 현실화되었습니다.
              </p>
              
              <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-soft" role="figure" aria-label="2026년 개인회생 가구원수별 최저생계비 표">
                <h3 className="font-semibold text-foreground mb-4">2026년 최저생계비 기준 (가구원수별)</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="font-semibold text-primary">1인 가구:</span>
                    <span><strong className="text-foreground">154만 8,543원</strong> (2025년 143만 5,208원 대비 <strong className="text-primary">11만 3,335원 인상</strong>)</span>
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

              <h3 id="living-cost-reduction" className="text-xl font-semibold text-foreground mb-3 scroll-mt-20">
                월 변제금 11만원 줄어드는 효과
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                2026년 개인회생 신청 시 1인 가구 기준 생계비 154만원이 인정되어, 월 변제금이 2025년 대비 약 11만원 줄어드는 효과가 있습니다. 개인회생 월 변제금은 <strong className="text-foreground">내 소득 - 최저생계비</strong>로 정해집니다. 생계비가 올라갔다는 것은 내가 매달 법원에 내야 할 돈이 줄어들고, 내가 실제로 쓸 수 있는 돈이 늘어난다는 뜻입니다. 이제 빚을 갚으면서도 최소한의 인간다운 삶을 포기하지 않아도 됩니다.
              </p>
            </section>

            {/* CTA Button 1 */}
            <div className="my-10 flex justify-center">
              <Link href="/cal/debt-reduction" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl shadow-elevated">
                  <Calculator className="w-5 h-5 mr-2" />
                  <span className="font-bold">내 예상 탕감액이 궁금하다면?</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Section 3 */}
            <section id="when-to-apply" className="scroll-mt-20 mb-10">
              <h2 id="when-to-apply-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                지금 신청 vs 2026년 신청 어떤게 유리할까?
              </h2>
              
              <h3 id="when-to-apply-3million" className="text-xl font-semibold text-foreground mb-3 scroll-mt-20">
                채무 3천만원 이상이라면 2026년 대기 추천
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                채무가 3천만원 이상인 경우, 2026년 생계비 인상 효과로 월 변제금이 크게 줄어들어 장기적으로 더 유리할 수 있습니다. 특히 1인 가구의 경우 생계비가 11만원 이상 인상되어, 연간 132만원 이상의 변제금 절감 효과가 있습니다.
              </p>
              
              <h3 id="when-to-apply-urgent" className="text-xl font-semibold text-foreground mb-3 scroll-mt-20">
                급한 독촉 받는 경우 즉시 신청 필요
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                하지만 이미 강제집행이 진행 중이거나 급한 독촉을 받고 있는 경우라면, 생계비 인상을 기다리기보다는 즉시 신청하여 강제집행을 중지시키는 것이 우선입니다. 개인회생 신청만으로도 강제집행이 즉시 중지되므로, 상황에 따라 판단이 필요합니다.
              </p>
            </section>

            {/* Section 4 */}
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

            {/* Section 5 */}
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

            {/* Section 6 */}
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

            {/* Section 7 - 2026년 3월 신설 회생법원 */}
            <section id="new-courts" className="scroll-mt-20 mb-10">
              <h2 id="new-courts-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                2026년 3월 신설되는 회생법원 3곳
              </h2>
              
              <h3 id="new-courts-locations" className="text-xl font-semibold text-foreground mb-3 scroll-mt-20">
                대전·대구·광주 회생법원 위치와 관할 지역
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                2026년 3월부터 대전, 대구, 광주에 회생법원이 신설되어 지역 채무자들의 접근성이 크게 향상됩니다. 기존에는 서울, 부산, 인천 등 일부 지역에만 회생법원이 있어 지방 거주자들이 불편을 겪었지만, 이제는 가까운 지역에서도 개인회생 신청이 가능해졌습니다.
              </p>
              
              <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-4">신설 회생법원 정보</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="font-semibold text-primary">대전지방법원 회생법원:</span>
                    <span>충청권 지역 관할</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-semibold text-primary">대구지방법원 회생법원:</span>
                    <span>경북권 지역 관할</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-semibold text-primary">광주지방법원 회생법원:</span>
                    <span>전라권 지역 관할</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8 - 부채증명서 발급 간소화 */}
            <section id="debt-certificate" className="scroll-mt-20 mb-10">
              <h2 id="debt-certificate-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                부채증명서 발급 간소화로 달라지는 점
              </h2>
              
              <h3 id="debt-certificate-unified" className="text-xl font-semibold text-foreground mb-3 scroll-mt-20">
                한 번에 통합 발급 가능해지는 시기는?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                2026년 하반기부터는 여러 금융회사에 흩어진 채무를 한 번에 통합하여 부채증명서를 발급받을 수 있게 됩니다. 기존에는 각 금융회사마다 개별적으로 발급받아야 했지만, 이제는 신용정보원을 통해 통합 발급이 가능해져 신청 절차가 크게 간소화됩니다.
              </p>
            </section>

            {/* Section 9 */}
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

            {/* FAQ Section */}
            <section id="faq" className="scroll-mt-20 mb-10">
              <h2 id="faq-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                자주 묻는 질문 (FAQ)
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <div className="text-center py-6 border-t border-border mt-10">
              <p className="text-primary font-semibold text-lg">
                "돈 걱정 없는 내일, 돈워리가 함께하겠습니다."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 mb-10">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/debt/test" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-xl">
                    <span className="font-bold">🩺 채무조정 무료 자가진단</span>
                  </Button>
                </Link>
                <Link href="/cal/debt-reduction" target="_blank" rel="noopener noreferrer">
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
        </main>

        <Footer />
        <MobileFloatingCTA />
      </div>
  );
}
