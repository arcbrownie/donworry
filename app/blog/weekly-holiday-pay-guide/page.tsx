"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "./faqs";

export default function WeeklyHolidayPayGuide() {
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-12 md:py-16" role="img" aria-label="2026년 주휴수당 가이드를 상징하는 딥블루 배경">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl" aria-hidden="true" />
        <div className="container relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              알바 주휴수당 계산기 | 2026년 최저시급 10,030원 기준 받는 조건
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              주 15시간 근무 시 받을 수 있는 금액과 지급 조건 완전 정리
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
              어제도 늦은 시간까지 카페에서, 편의점에서 땀 흘리며 일하신 여러분, 정말 고생 많으셨습니다. 월급날 통장에 찍힌 숫자를 보며 '내가 일한 만큼 제대로 들어온 게 맞나?' 하는 의구심이 든 적 없으신가요? 특히 많은 분이 헷갈려 하시는 주휴수당은 정당한 노동의 대가임에도 불구하고, 계산법이 복잡하다는 이유로 놓치기 쉽습니다.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg font-medium">
              오늘 <strong className="text-primary">돈워리(donworry.kr)</strong>에서는 2026년 인상된 최저임금을 바탕으로, 알바생이라면 반드시 알아야 할 주휴수당의 모든 것을 따뜻하고 전문적으로 풀어드립니다. 돈 걱정 없는 일상을 위한 첫걸음, 지금 시작합니다.
            </p>
          </section>

          {/* Section 1 */}
          <section id="what-is" className="scroll-mt-20 mb-10">
            <h2 id="what-is-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
              주휴수당 정의 및 개념
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              주휴수당은 근로기준법 제55조에 따라 일주일 동안 정해진 근무일을 모두 채운 근로자에게 유급 휴일을 주는 제도입니다. 즉, 쉬는 날임에도 불구하고 하루치 임금을 더 받는 것이죠.
            </p>
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-6">
              <p className="text-foreground leading-relaxed font-medium">
                많은 아르바이트생이 "나는 정직원이 아닌데 받을 수 있을까?"라고 고민하시지만, 주휴수당은 고용 형태(알바, 계약직, 정규직)와 상관없이 특정 조건만 충족하면 법적으로 보장받는 권리입니다.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="conditions" className="scroll-mt-20 mb-10">
            <h2 id="conditions-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
              2026년 주휴수당 지급 조건 (이것만 체크하세요!)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              2026년 최저시급 10,030원 기준으로 주휴수당을 받기 위해서는 다음의 세 가지 핵심 조건을 모두 충족해야 합니다.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary text-xl mt-0.5">1.</span>
                <div>
                  <strong className="text-foreground block mb-1">주 소정근로시간 15시간 이상:</strong>
                  <span className="text-muted-foreground">일주일간 일하기로 약속한 시간이 총 15시간 이상이어야 합니다.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary text-xl mt-0.5">2.</span>
                <div>
                  <strong className="text-foreground block mb-1">소정근로일 개근:</strong>
                  <span className="text-muted-foreground">사장님과 약속한 근무일에 결근 없이 모두 출근해야 합니다. (지각이나 조퇴는 결근이 아니므로 주휴수당에 영향을 주지 않습니다.)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary text-xl mt-0.5">3.</span>
                <div>
                  <strong className="text-foreground block mb-1">다음 주 근무 예정:</strong>
                  <span className="text-muted-foreground">2026년 현재 법적 해석에 따르면, 주휴수당은 해당 주의 근로를 마친 후 다음 주에도 근로가 예정되어 있을 때 발생합니다. (단, 퇴사 시 마지막 주 주휴수당 발생 여부는 최근 판례에 따라 달라질 수 있으므로 확인이 필요합니다.)</span>
                </div>
              </li>
            </ul>
            <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
              <p className="text-foreground text-sm font-medium">
                <strong className="text-warning">⚠️ 주의사항:</strong> 4인 이하 소규모 사업장이라 하더라도 주휴수당은 반드시 지급되어야 합니다. 이는 선택이 아닌 필수입니다.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="calculation" className="scroll-mt-20 mb-10">
            <h2 id="calculation-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
              2026년 기준 내 주휴수당은 얼마일까? 계산법 정리
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              2026년 최저시급은 <strong className="text-primary font-semibold">10,030원</strong>입니다. 이를 기준으로 본인의 스케줄에 맞춰 계산해 보세요.
            </p>

            {/* Subsection 1 */}
            <div className="mb-8">
              <h3 id="calculation-fulltime" className="text-xl font-semibold text-foreground mb-3 scroll-mt-20">
                1) 주 40시간 이상 근무자 (통상 근로자)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                가장 깔끔한 계산법입니다. 하루 8시간씩 주 5일 일한다면, 일주일 치 주휴수당은 하루치 일당과 같습니다.
              </p>
              <div className="bg-card border border-border rounded-lg p-4 mb-4">
                <p className="text-foreground font-semibold mb-2">계산식:</p>
                <p className="text-primary text-lg font-bold mb-2">8시간 × 10,030원 = 80,240원</p>
                <p className="text-muted-foreground text-sm">월 환산: 주 40시간 근무 시 주휴수당을 포함한 월급은 약 2,100,000원입니다.</p>
              </div>
            </div>

            {/* Subsection 2 */}
            <div className="mb-8">
              <h3 id="calculation-parttime" className="text-xl font-semibold text-foreground mb-3 scroll-mt-20">
                2) 주 40시간 미만 근무자 (단시간 근로자)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                주 15시간 이상이지만 40시간 미만인 경우, 전체 근로 시간에 비례하여 계산합니다.
              </p>
              <div className="bg-card border border-border rounded-lg p-4 mb-4">
                <p className="text-foreground font-semibold mb-2">계산식:</p>
                <p className="text-primary text-lg font-bold mb-2">(1주일 총 근로시간 / 40시간) × 8시간 × 10,030원</p>
                <p className="text-muted-foreground text-sm mb-2">예시 (주 20시간 근무 시):</p>
                <p className="text-primary font-semibold">(20 / 40) × 8 × 10,030 = 40,120원</p>
                <p className="text-muted-foreground text-sm mt-2">예시 (주 15시간 근무 시):</p>
                <p className="text-primary font-semibold">(15 / 40) × 8 × 10,030 = 30,090원</p>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-soft" role="table" aria-label="2026년 개인회생 가구원수별 최저생계비 표">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-border/50 p-4 text-left font-semibold text-foreground">근무 형태</th>
                    <th className="border border-border/50 p-4 text-left font-semibold text-foreground">주당 근로시간</th>
                    <th className="border border-border/50 p-4 text-left font-semibold text-foreground">2026년 예상 주휴수당</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="border border-border/50 p-4 text-muted-foreground">풀타임 알바</td>
                    <td className="border border-border/50 p-4 text-muted-foreground">40시간</td>
                    <td className="border border-border/50 p-4 text-foreground font-semibold">80,240원</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="border border-border/50 p-4 text-muted-foreground">파트타임 A</td>
                    <td className="border border-border/50 p-4 text-muted-foreground">30시간</td>
                    <td className="border border-border/50 p-4 text-foreground font-semibold">60,180원</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="border border-border/50 p-4 text-muted-foreground">파트타임 B</td>
                    <td className="border border-border/50 p-4 text-muted-foreground">20시간</td>
                    <td className="border border-border/50 p-4 text-foreground font-semibold">40,120원</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="border border-border/50 p-4 text-muted-foreground">미니 알바</td>
                    <td className="border border-border/50 p-4 text-muted-foreground">15시간</td>
                    <td className="border border-border/50 p-4 text-foreground font-semibold">30,090원</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section id="unpaid" className="scroll-mt-20 mb-10">
            <h2 id="unpaid-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
              주휴수당이 밀리거나 못 받았다면? 채무 관리의 시작
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              만약 사장님이 "우리 가게는 주휴수당 안 준다"라고 한다면 이는 명백한 법 위반입니다. 받지 못한 수당은 고용노동부를 통해 임금체불 진정을 제기할 수 있습니다.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              정당한 소득을 챙기는 것은 현명한 경제생활의 기초입니다. 특히 학자금 대출이나 생활비 대출로 인해 고민 중인 청년층이라면, 이러한 소득 누락이 신용점수 하락이나 채무 과다로 이어지지 않도록 주의해야 합니다.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              만약 이미 늘어난 채무로 인해 주휴수당만으로는 생활이 버겁다면, 개인회생이나 채무 통합 대출 같은 전문가의 솔루션을 고려해보는 것도 방법입니다. 낮은 금리의 대출로 갈아타거나 국가에서 지원하는 채무 조정 제도를 활용하면, 월 변제액을 획기적으로 낮춰 다시 일어설 기회를 얻을 수 있습니다.
            </p>
          </section>

          {/* Section 5 */}
          <section id="solution" className="scroll-mt-20 mb-10">
            <h2 id="solution-heading" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
              돈 걱정 없는 일상을 위한 '돈워리'의 제안
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              주휴수당 계산, 매번 직접 하기 번거로우시죠? <strong className="text-primary">돈워리(donworry.kr)</strong>에서는 여러분의 소중한 임금을 1원도 놓치지 않도록 정확한 계산기를 제공합니다. 지금 바로 확인하고 나의 정당한 권리를 찾으세요!
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
          </article>
        </div>

        {/* CTA Button */}
        <div className="max-w-4xl mx-auto mt-10 mb-10">
          <div className="flex justify-center">
            <Link href="/cal/part-time">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl shadow-elevated">
                <Calculator className="w-5 h-5 mr-2" />
                <span className="font-bold">지금 바로 주휴수당 계산해보기</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Author Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <ArticleAuthor 
            expertId="expert-savings-02"
            publishedDate="2025-12-15"
            lastUpdated="2026-01-27"
          />
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}
