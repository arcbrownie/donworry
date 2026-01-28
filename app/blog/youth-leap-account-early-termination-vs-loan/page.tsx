"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
import { BlogShareButtons } from "@/components/ui/BlogShareButtons";
import { PiggyBank, DollarSign, Calculator, TrendingUp, AlertCircle, CheckCircle, FileText, HelpCircle, Clock, BarChart3 } from "lucide-react";

export default function YouthLeapAccountEarlyTerminationVsLoan() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
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
      <div className="sticky top-[80px] z-40 w-full h-1 bg-slate-200">
        <div className="h-full bg-gradient-to-r from-[#1A237E] via-[#4A148C] to-[#1A237E] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A237E] via-[#4A148C] to-[#1A237E] py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        <div className="container relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              2026년 청년 도약계좌<br />중도해지 vs 담보대출 비교
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">급전 필요 시 해지 대신 대출이 유리한 케이스 완벽 분석</p>
          </div>
        </div>
      </section>

      <main className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0 space-y-4">
            <TableOfContents />
            <div className="hidden lg:block">
              <BlogShareButtons title="2026년 청년 도약계좌 중도해지 vs 담보대출 비교" description="급전 필요 시 최선의 선택" variant="sticky" />
            </div>
          </div>

          <article className="flex-1 max-w-4xl prose prose-xl prose-slate max-w-none">
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">청년 도약계좌</strong>는 정부 지원금과 높은 금리로 많은 청년들이 가입하고 있지만, 
                급전이 필요할 때 해지할지 담보대출을 받을지 고민이 됩니다. 
                중도해지 시 정부 기여금을 전액 반환해야 하고, 재가입도 불가능하기 때문입니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                이 글에서는 <strong className="text-[#1A237E]">중도해지 손실 vs 담보대출 이자 비용</strong>을 구체적인 숫자로 비교하여 
                케이스별 최선의 선택을 김민지 재테크 전문가가 상세히 알려드립니다. 
                손익 계산은 <Link href="/cal/part-time" className="text-[#1A237E] hover:underline">적금 계산기</Link>로도 확인할 수 있습니다.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="account-overview" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <PiggyBank className="w-7 h-7 text-[#1A237E]" />
                청년 도약계좌란? (2026년 기준)
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">청년 도약계좌</strong>는 만 19-34세 청년의 자산 형성을 돕는 정부 지원 저축 상품입니다. 
                2026년 기준으로 가입 조건, 적립 한도, 정부 기여금 등이 일부 변경되었으므로 최신 정보를 확인하는 것이 중요합니다.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                청년 도약계좌의 핵심 특징은 다음과 같습니다:
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-2">가입 조건:</strong>
                    <p className="text-muted-foreground mb-2">
                      만 19세 이상 34세 이하 청년으로, 개인소득이 연 7,500만원 이하여야 합니다. 
                      가구소득 기준은 가구원수에 따라 다르며, 1인 가구는 연 1억 2,000만원 이하입니다. 
                      재직 여부나 직업은 관계없으며, 학생, 직장인, 프리랜서 모두 가입 가능합니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">주의사항:</strong> 한 번 해지하면 평생 재가입이 불가능하므로, 
                      가입 전 충분히 검토해야 합니다.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-2">적립 금액 및 기간:</strong>
                    <p className="text-muted-foreground mb-2">
                      월 최대 70만원까지 적립 가능하며, 최대 5년간(60개월) 납입할 수 있습니다. 
                      총 적립 한도는 4,200만원이며, 이 중 정부가 최대 252만원까지 기여금을 지원합니다. 
                      납입은 매월 정해진 날짜에 자동이체로 진행되며, 중도에 납입 금액을 변경할 수 있습니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">실제 사례:</strong> 박OO씨(28세, 직장인)는 월 70만원씩 3년간 납입하여 
                      총 2,520만원을 적립했고, 정부 기여금으로 약 151만원을 추가로 받았습니다.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-2">금리 구조:</strong>
                    <p className="text-muted-foreground mb-2">
                      기본 금리는 은행별로 다르지만 보통 연 4-6% 수준입니다. 
                      여기에 정부 기여금이 추가되어 실질 수익률이 더 높아집니다. 
                      정부 기여금은 소득 수준에 따라 차등 지급되며, 저소득층일수록 더 많은 기여금을 받습니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">정부 기여금 비율:</strong> 본인 납입액의 3-6% (연 최대 50.4만원). 
                      예를 들어 월 70만원을 납입하면 정부가 월 2.1만원~4.2만원을 추가로 기여합니다.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-2">만기 및 중도해지 규정:</strong>
                    <p className="text-muted-foreground mb-2">
                      만기는 최대 5년이며, 만기 시 원금과 이자, 정부 기여금을 모두 받을 수 있습니다. 
                      하지만 중도해지 시에는 정부 기여금을 전액 반환해야 하며, 우대금리도 적용되지 않습니다. 
                      또한 한 번 해지하면 평생 재가입이 불가능하므로 신중한 결정이 필요합니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">중도해지 손실 예시:</strong> 2년간 월 70만원씩 납입한 경우, 
                      정부 기여금 약 100만원과 우대금리 손실 약 50만원, 총 150만원 이상의 손실이 발생합니다.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 청년 도약계좌는 장기 자산 형성을 위한 상품입니다. 
                  급전이 필요하다면 중도해지보다는 적금담보대출을 먼저 검토하는 것이 훨씬 유리합니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="early-termination-loss" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <AlertCircle className="w-7 h-7 text-[#1A237E]" />
                중도해지 시 발생하는 손실 상세 분석
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">청년 도약계좌를 중도해지</strong>하면 단순히 적금을 해지하는 것 이상의 큰 손실이 발생합니다. 
                이는 정부 지원 상품의 특성상 발생하는 불가피한 제재 조치입니다.
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-2">정부 기여금 전액 반환:</strong>
                    <p className="text-muted-foreground mb-2">
                      중도해지 시 지금까지 받은 정부 기여금을 전액 반환해야 합니다. 
                      예를 들어 2년간 월 70만원씩 납입했다면, 정부 기여금은 약 100만원(월 4.2만원 × 24개월)인데, 
                      이를 모두 반환해야 합니다. 이는 실제로 받은 돈이 아니라, 미래에 받을 예정이었던 돈을 포기하는 것입니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">구체적 계산:</strong> 월 70만원 × 24개월 = 1,680만원 납입 시, 
                      정부 기여금은 약 100.8만원(월 4.2만원 × 24개월)이며, 이를 전액 반환해야 합니다.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-2">우대금리 박탈:</strong>
                    <p className="text-muted-foreground mb-2">
                      중도해지 시 청년 도약계좌의 우대금리(연 4-6%)가 적용되지 않고, 
                      일반 적금 금리(연 2-3%)만 적용됩니다. 이는 만기까지 유지했을 때 받을 수 있었던 이자와의 차액만큼 손실입니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">구체적 계산:</strong> 1,680만원을 2년간 연 5%로 유지했다면 
                      이자는 약 168만원이지만, 연 2.5%로 해지하면 약 84만원만 받게 되어 약 84만원의 손실이 발생합니다.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-2">재가입 불가 (기회비용):</strong>
                    <p className="text-muted-foreground mb-2">
                      한 번 해지하면 평생 재가입이 불가능합니다. 이는 앞으로 받을 수 있었던 정부 기여금과 우대금리를 
                      영구적으로 포기하는 것을 의미합니다. 예를 들어 30세에 해지했다면, 34세까지 4년간 더 받을 수 있었던 
                      최대 201.6만원의 정부 기여금을 영구적으로 잃는 것입니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">기회비용 계산:</strong> 30세에 해지 시, 
                      남은 4년간 받을 수 있었던 정부 기여금(월 4.2만원 × 48개월 = 201.6만원)을 영구적으로 포기합니다.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-2">복리 효과 상실:</strong>
                    <p className="text-muted-foreground mb-2">
                      만기까지 유지했다면 복리 효과로 더 많은 이자를 받을 수 있었지만, 
                      중도해지 시 단리 계산만 적용되어 이자 손실이 발생합니다. 
                      특히 장기간 적립한 경우 복리 효과로 인한 손실이 더 큽니다.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 중도해지 손실 총정리 (2년 납입, 월 70만원 기준)</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-[#1A237E]/20">
                    <span className="text-muted-foreground">납입 원금</span>
                    <span className="font-semibold text-foreground">1,680만원 (월 70만원 × 24개월)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#1A237E]/20">
                    <span className="text-muted-foreground">정부 기여금 손실</span>
                    <span className="font-semibold text-red-600">-100.8만원 (반환 필요)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#1A237E]/20">
                    <span className="text-muted-foreground">우대금리 손실 (2년 기준)</span>
                    <span className="font-semibold text-red-600">-84만원 (이자 차액)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#1A237E]/20">
                    <span className="text-muted-foreground">재가입 불가 기회비용</span>
                    <span className="font-semibold text-red-600">-201.6만원 (남은 기간 포기)</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-foreground font-bold text-lg">총 손실 (현재 + 미래)</span>
                    <span className="font-bold text-red-600 text-xl">-386.4만원</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  * 재가입 불가 기회비용은 30세 해지 기준으로 계산했습니다. 나이가 어릴수록 기회비용이 더 큽니다.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">실제 사례:</strong> 최OO씨(29세, 직장인)는 2년간 적립한 청년 도약계좌를 
                급전이 필요해 중도해지했습니다. 정부 기여금 100만원을 반환하고, 우대금리 손실 50만원을 입었으며, 
                앞으로 받을 수 있었던 정부 기여금까지 포기하여 총 350만원 이상의 손실을 입었습니다.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="loan-comparison" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Calculator className="w-7 h-7 text-[#1A237E]" />
                적금담보대출의 구조 및 비용 분석
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">적금담보대출</strong>은 청년 도약계좌를 담보로 대출받는 방식으로, 
                적금을 해지하지 않고도 자금을 확보할 수 있는 현명한 방법입니다. 
                적금은 그대로 유지되므로 정부 기여금과 우대금리를 계속 받을 수 있습니다.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                적금담보대출의 핵심 특징은 다음과 같습니다:
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-2">대출 한도 및 비율:</strong>
                    <p className="text-muted-foreground mb-2">
                      적금 잔액의 90-95%까지 대출 가능합니다. 예를 들어 적금 잔액이 1,680만원이라면, 
                      최대 1,596만원(95% 기준)까지 대출받을 수 있습니다. 
                      은행마다 대출 비율이 다를 수 있으므로 가입 은행에 직접 확인하는 것이 좋습니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">실제 활용:</strong> 1,000만원이 필요하다면, 
                      적금 잔액이 약 1,050만원 이상이면 담보대출이 가능합니다.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-2">대출 금리 구조:</strong>
                    <p className="text-muted-foreground mb-2">
                      적금담보대출 금리는 적금 금리 + 1-2%p로 계산됩니다. 
                      예를 들어 적금 금리가 연 5%라면, 대출 금리는 연 6-7% 수준입니다. 
                      이는 일반 신용대출(연 10-15%)보다 훨씬 낮은 금리입니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">금리 비교:</strong> 적금담보대출 연 7% vs 일반 신용대출 연 12% = 
                      1,000만원 대출 시 연간 50만원의 이자 절감 효과
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-2">상환 방법 및 기간:</strong>
                    <p className="text-muted-foreground mb-2">
                      적금담보대출은 만기일까지 매월 이자만 납부하고, 만기일에 원금을 일시 상환하는 방식입니다. 
                      예를 들어 적금 만기가 3년 남았다면, 3년간 매월 이자만 납부하고, 
                      3년 후 적금 만기일에 적금에서 원금이 자동 상환됩니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">장점:</strong> 원금 상환 부담이 없어 월 상환액이 적고, 
                      만기일에 자동 상환되어 별도 준비가 필요 없습니다.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-2">신용점수 영향:</strong>
                    <p className="text-muted-foreground mb-2">
                      적금담보대출은 신용조회가 없으므로 신용점수에 영향을 주지 않습니다. 
                      이는 일반 신용대출과의 큰 차이점으로, 신용점수가 낮아도 담보만 있으면 대출이 가능합니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">실제 효과:</strong> 신용점수 600점 이하에서도 
                      적금담보대출은 가능하며, 신용점수 하락 없이 자금을 확보할 수 있습니다.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-2">중도상환 가능 여부:</strong>
                    <p className="text-muted-foreground mb-2">
                      적금담보대출은 중도상환 수수료 없이 언제든 상환할 수 있습니다. 
                      여유 자금이 생기면 빨리 갚을수록 이자 부담이 줄어들므로, 
                      가능하면 만기 전에 상환하는 것이 유리합니다.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 담보대출 비용 계산 (1,500만원 대출, 1년 상환 기준)</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-[#1A237E]/20">
                    <span className="text-muted-foreground">대출 금액</span>
                    <span className="font-semibold text-foreground">1,500만원</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#1A237E]/20">
                    <span className="text-muted-foreground">대출 금리 (적금금리 5% + 2%p)</span>
                    <span className="font-semibold text-foreground">연 7%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#1A237E]/20">
                    <span className="text-muted-foreground">1년 이자</span>
                    <span className="font-semibold text-foreground">105만원</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#1A237E]/20">
                    <span className="text-muted-foreground">정부 기여금 유지 (1년)</span>
                    <span className="font-semibold text-green-600">+50.4만원</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#1A237E]/20">
                    <span className="text-muted-foreground">우대금리 유지 (1년)</span>
                    <span className="font-semibold text-green-600">+42만원</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-foreground font-bold text-lg">실질 비용</span>
                    <span className="font-bold text-green-600 text-xl">12.6만원 (105만 - 92.4만)</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  * 정부 기여금과 우대금리를 고려하면 실질 비용은 매우 낮습니다. 
                  1년 이내 상환한다면 오히려 이득일 수 있습니다.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                대출 금리 계산은 
                <Link href="/blog/first-loan-guide-2030" className="text-[#1A237E] hover:underline mx-1">
                  첫 대출 가이드
                </Link>
                에서 자세히 확인하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="case-analysis" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <TrendingUp className="w-7 h-7 text-[#1A237E]" />
                케이스별 최선의 선택 가이드
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">상황에 따라</strong> 중도해지가 유리한지, 담보대출이 유리한지 달라집니다. 
                자신의 상황을 정확히 파악하여 최선의 선택을 하는 것이 중요합니다.
              </p>

              <div className="space-y-6 mb-6">
                <div className="bg-white border-2 border-green-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-600 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    담보대출이 유리한 케이스 (권장)
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <div>
                        <strong className="text-foreground block mb-1">1년 이내 상환 가능한 경우:</strong>
                        <span className="text-muted-foreground">
                          담보대출 이자가 정부 기여금보다 적거나 비슷하므로 실질 비용이 거의 없거나 오히려 이득입니다. 
                          예를 들어 1,000만원을 1년간 빌리면 이자는 70만원이지만, 정부 기여금 50만원과 우대금리 50만원을 
                          유지하면 실질 비용은 거의 없습니다.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <div>
                        <strong className="text-foreground block mb-1">소액 필요 (1,000만원 이하):</strong>
                        <span className="text-muted-foreground">
                          소액일수록 담보대출이 유리합니다. 이자 부담이 적고, 정부 기여금과 우대금리를 유지하면 
                          오히려 이득이 될 수 있습니다. 특히 500만원 이하의 소액은 담보대출이 압도적으로 유리합니다.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <div>
                        <strong className="text-foreground block mb-1">2년 이상 적립한 경우:</strong>
                        <span className="text-muted-foreground">
                          적립 기간이 길수록 정부 기여금이 많아져서 중도해지 손실이 큽니다. 
                          2년 이상 적립했다면 정부 기여금이 100만원 이상이므로, 담보대출로 유지하는 것이 훨씬 유리합니다.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <div>
                        <strong className="text-foreground block mb-1">안정적 소득이 있어 이자 납부 가능:</strong>
                        <span className="text-muted-foreground">
                          월 이자를 납부할 수 있는 안정적 소득이 있다면 담보대출이 최선의 선택입니다. 
                          월 이자는 대출 금액의 약 0.6% 수준이므로, 1,000만원 대출 시 월 약 5.8만원의 이자만 납부하면 됩니다.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-red-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6" />
                    중도해지가 불가피한 케이스
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">✗</span>
                      <div>
                        <strong className="text-foreground block mb-1">2년 이상 상환 불가능:</strong>
                        <span className="text-muted-foreground">
                          장기간 이자를 납부해야 한다면 담보대출 비용이 중도해지 손실보다 커질 수 있습니다. 
                          예를 들어 3년간 이자를 납부하면 총 210만원의 이자가 발생하는데, 
                          이는 중도해지 손실(150만원)보다 큽니다.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">✗</span>
                      <div>
                        <strong className="text-foreground block mb-1">대출 이자 납부도 어려움:</strong>
                        <span className="text-muted-foreground">
                          월 이자도 납부하기 어려운 상황이라면 담보대출을 받아도 연체 위험이 있습니다. 
                          이 경우 중도해지하여 자금을 확보하는 것이 더 현실적입니다.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">✗</span>
                      <div>
                        <strong className="text-foreground block mb-1">1년 미만 적립 (정부 기여금 적음):</strong>
                        <span className="text-muted-foreground">
                          적립 기간이 짧아 정부 기여금이 적다면(50만원 이하), 중도해지 손실이 상대적으로 작습니다. 
                          이 경우 담보대출 이자와 비교했을 때 중도해지가 더 유리할 수 있습니다.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">✗</span>
                      <div>
                        <strong className="text-foreground block mb-1">전액 필요 (담보대출 한도 부족):</strong>
                        <span className="text-muted-foreground">
                          필요한 금액이 적금 잔액의 95%를 초과한다면 담보대출로는 부족합니다. 
                          예를 들어 1,800만원이 필요한데 적금 잔액이 1,680만원이라면, 
                          담보대출 최대 한도(1,596만원)로는 부족하므로 중도해지가 불가피합니다.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 대부분의 경우 담보대출이 중도해지보다 유리합니다. 
                  특히 2년 이상 적립했고, 1년 이내 상환이 가능하다면 담보대출을 강력히 권장합니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="detailed-comparison" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <BarChart3 className="w-7 h-7 text-[#1A237E]" />
                상세 손익 비교 (실제 계산 사례)
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">구체적인 사례</strong>로 중도해지와 담보대출의 손익을 숫자로 비교해보겠습니다. 
                실제 상황에 맞춰 계산하면 더 명확한 선택을 할 수 있습니다.
              </p>

              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 케이스 A: 2년 납입, 1,000만원 필요 (1년 상환)</p>
                <p className="text-muted-foreground mb-4 text-sm">
                  <strong>상황:</strong> 28세 직장인, 월 70만원씩 2년간 적립 (총 1,680만원), 급전 1,000만원 필요, 1년 내 상환 가능
                </p>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                    <p className="font-bold text-red-600 mb-3">▶ 중도해지 선택 시:</p>
                    <ul className="space-y-2 ml-4 text-sm">
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>납입 원금:</strong> 1,680만원 (월 70만원 × 24개월)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>정부 기여금 손실:</strong> 100.8만원 (반환 필요)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>우대금리 손실:</strong> 약 84만원 (2년간 이자 차액)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>재가입 불가 기회비용:</strong> 201.6만원 (남은 2년간 포기)
                        </span>
                      </li>
                      <li className="flex gap-2 pt-2 border-t border-red-200">
                        <span className="text-red-600 font-bold">✗</span>
                        <span className="text-red-600 font-bold">
                          <strong>총 손실: 386.4만원</strong> (현재 손실 184.8만원 + 미래 기회비용 201.6만원)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                    <p className="font-bold text-green-600 mb-3">▶ 담보대출 선택 시:</p>
                    <ul className="space-y-2 ml-4 text-sm">
                      <li className="flex gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>대출 금액:</strong> 1,000만원 (잔액 1,680만원의 약 60%)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>대출 금리:</strong> 연 7% (적금금리 5% + 2%p)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>1년 이자:</strong> 70만원
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>정부 기여금 유지:</strong> +50.4만원 (1년간)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>우대금리 유지:</strong> +42만원 (1년간)
                        </span>
                      </li>
                      <li className="flex gap-2 pt-2 border-t border-green-200">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-green-600 font-bold">
                          <strong>실질 이득: 22.4만원</strong> (92.4만원 - 70만원)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mt-4">
                    <p className="font-bold text-blue-600 mb-2">💡 결론:</p>
                    <p className="text-muted-foreground text-sm">
                      담보대출 선택 시 중도해지 대비 <strong className="text-blue-600">약 408만원의 이득</strong>이 발생합니다. 
                      (중도해지 손실 386.4만원 + 담보대출 이득 22.4만원)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 케이스 B: 1년 납입, 500만원 필요 (6개월 상환)</p>
                <p className="text-muted-foreground mb-4 text-sm">
                  <strong>상황:</strong> 25세 직장인, 월 70만원씩 1년간 적립 (총 840만원), 급전 500만원 필요, 6개월 내 상환 가능
                </p>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                    <p className="font-bold text-red-600 mb-3">▶ 중도해지 선택 시:</p>
                    <ul className="space-y-2 ml-4 text-sm">
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>납입 원금:</strong> 840만원 (월 70만원 × 12개월)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>정부 기여금 손실:</strong> 50.4만원 (반환 필요)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>우대금리 손실:</strong> 약 21만원 (1년간 이자 차액)
                        </span>
                      </li>
                      <li className="flex gap-2 pt-2 border-t border-red-200">
                        <span className="text-red-600 font-bold">✗</span>
                        <span className="text-red-600 font-bold">
                          <strong>총 손실: 71.4만원</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                    <p className="font-bold text-green-600 mb-3">▶ 담보대출 선택 시:</p>
                    <ul className="space-y-2 ml-4 text-sm">
                      <li className="flex gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>대출 금액:</strong> 500만원
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>6개월 이자:</strong> 17.5만원 (연 7%)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>정부 기여금 유지:</strong> +25.2만원 (6개월간)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>우대금리 유지:</strong> +10.5만원 (6개월간)
                        </span>
                      </li>
                      <li className="flex gap-2 pt-2 border-t border-green-200">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-green-600 font-bold">
                          <strong>실질 이득: 18.2만원</strong> (35.7만원 - 17.5만원)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mt-4">
                    <p className="font-bold text-blue-600 mb-2">💡 결론:</p>
                    <p className="text-muted-foreground text-sm">
                      담보대출 선택 시 중도해지 대비 <strong className="text-blue-600">약 89.6만원의 이득</strong>이 발생합니다. 
                      (중도해지 손실 71.4만원 + 담보대출 이득 18.2만원)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 케이스 C: 3년 납입, 1,500만원 필요 (2년 상환)</p>
                <p className="text-muted-foreground mb-4 text-sm">
                  <strong>상황:</strong> 31세 직장인, 월 70만원씩 3년간 적립 (총 2,520만원), 급전 1,500만원 필요, 2년 내 상환 가능
                </p>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                    <p className="font-bold text-red-600 mb-3">▶ 중도해지 선택 시:</p>
                    <ul className="space-y-2 ml-4 text-sm">
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>납입 원금:</strong> 2,520만원 (월 70만원 × 36개월)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>정부 기여금 손실:</strong> 151.2만원 (반환 필요)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>우대금리 손실:</strong> 약 126만원 (3년간 이자 차액)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>재가입 불가 기회비용:</strong> 100.8만원 (남은 2년간 포기)
                        </span>
                      </li>
                      <li className="flex gap-2 pt-2 border-t border-red-200">
                        <span className="text-red-600 font-bold">✗</span>
                        <span className="text-red-600 font-bold">
                          <strong>총 손실: 378만원</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                    <p className="font-bold text-green-600 mb-3">▶ 담보대출 선택 시:</p>
                    <ul className="space-y-2 ml-4 text-sm">
                      <li className="flex gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>대출 금액:</strong> 1,500만원
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>2년 이자:</strong> 210만원 (연 7%)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>정부 기여금 유지:</strong> +100.8만원 (2년간)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-muted-foreground">
                          <strong>우대금리 유지:</strong> +84만원 (2년간)
                        </span>
                      </li>
                      <li className="flex gap-2 pt-2 border-t border-green-200">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-green-600 font-bold">
                          <strong>실질 비용: 25.2만원</strong> (210만 - 184.8만)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mt-4">
                    <p className="font-bold text-blue-600 mb-2">💡 결론:</p>
                    <p className="text-muted-foreground text-sm">
                      담보대출 선택 시 중도해지 대비 <strong className="text-blue-600">약 352.8만원의 이득</strong>이 발생합니다. 
                      (중도해지 손실 378만원 - 담보대출 비용 25.2만원)
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                손익 계산은 
                <Link href="/cal/interest-saving" className="text-[#1A237E] hover:underline mx-1">
                  이자 절감 계산기
                </Link>
                로 정확히 확인하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="loan-application" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <FileText className="w-7 h-7 text-[#1A237E]" />
                적금담보대출 신청 방법 및 절차
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">청년 도약계좌 담보대출</strong> 신청은 생각보다 간단합니다. 
                신용조회도 없고, 서류도 최소화되어 있어 당일 승인 및 입금이 가능합니다.
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">1</span>
                  <div>
                    <strong className="text-foreground block mb-2">가입 은행 확인 및 준비:</strong>
                    <p className="text-muted-foreground mb-2">
                      청년 도약계좌를 가입한 은행(KB국민은행, 신한은행, 우리은행, 하나은행 등)을 확인합니다. 
                      담보대출은 반드시 가입한 은행에서만 가능하며, 다른 은행에서는 신청할 수 없습니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">필요 서류:</strong> 신분증, 통장(또는 적금 계좌번호), 
                      대출 신청서(은행에서 제공)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">2</span>
                  <div>
                    <strong className="text-foreground block mb-2">모바일 앱 또는 영업점 방문:</strong>
                    <p className="text-muted-foreground mb-2">
                      대부분의 은행은 모바일 앱에서 "적금담보대출" 또는 "적금대출" 메뉴를 제공합니다. 
                      앱에서 신청하면 더 빠르고 편리하며, 영업점 방문도 가능합니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">앱 신청 장점:</strong> 24시간 가능, 즉시 승인, 
                      서류 제출 최소화, 당일 입금 가능
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">3</span>
                  <div>
                    <strong className="text-foreground block mb-2">대출 한도 확인 및 신청:</strong>
                    <p className="text-muted-foreground mb-2">
                      앱이나 영업점에서 적금 잔액을 확인하면 자동으로 대출 가능 한도가 계산됩니다. 
                      예를 들어 적금 잔액이 1,680만원이라면, 최대 1,596만원(95% 기준)까지 대출 가능합니다. 
                      필요한 금액만큼만 신청하는 것이 좋습니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">실제 사례:</strong> 이OO씨(27세)는 적금 잔액 1,680만원에서 
                      1,000만원만 담보대출로 신청하여, 나머지 680만원은 적금으로 유지했습니다.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">4</span>
                  <div>
                    <strong className="text-foreground block mb-2">신청 및 즉시 승인:</strong>
                    <p className="text-muted-foreground mb-2">
                      적금담보대출은 신용조회가 없으므로 즉시 승인됩니다. 
                      담보가 확실하기 때문에 별도의 심사 과정이 없으며, 
                      신청 후 몇 분 내에 승인 여부를 확인할 수 있습니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">승인 시간:</strong> 모바일 앱 신청 시 즉시~1시간 이내, 
                      영업점 방문 시 당일 처리
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">5</span>
                  <div>
                    <strong className="text-foreground block mb-2">입금 및 상환 설정:</strong>
                    <p className="text-muted-foreground mb-2">
                      승인 후 당일 또는 익일 입금되며, 이자 자동이체를 설정해야 합니다. 
                      월 이자는 매월 정해진 날짜에 자동으로 출금되며, 만기일에 원금이 적금에서 자동 상환됩니다.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-[#1A237E]">주의사항:</strong> 이자 자동이체 계좌에 충분한 잔액을 유지해야 하며, 
                      연체 시 신용점수 하락이 발생할 수 있습니다.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 적금담보대출은 신용조회가 없으므로 
                  신용점수에 영향을 주지 않습니다. 또한 대출 한도도 줄어들지 않으므로, 
                  나중에 일반 대출이 필요할 때 한도에 여유가 있습니다!
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="decision-framework" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <CheckCircle className="w-7 h-7 text-[#1A237E]" />
                의사결정 프레임워크: 나에게 맞는 선택은?
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">복잡한 계산 없이</strong> 빠르게 판단할 수 있는 의사결정 프레임워크를 제공합니다. 
                자신의 상황에 맞는 항목을 체크해보세요.
              </p>

              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">✅ 담보대출을 선택하세요 (다음 중 하나라도 해당되면)</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>적립 기간이 2년 이상이고, 필요한 금액이 적금 잔액의 90% 이하</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>1년 이내 상환이 가능하고, 월 이자 납부 여유가 있음</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>정부 기여금이 100만원 이상이고, 앞으로도 적금을 유지할 계획</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>신용점수를 유지하거나 올리고 싶은 경우</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg my-6 border-2 border-red-200">
                <p className="text-foreground font-bold text-xl mb-4 text-red-600">❌ 중도해지를 고려하세요 (다음 중 하나라도 해당되면)</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>2년 이상 상환이 불가능하고, 월 이자 납부도 어려움</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>필요한 금액이 적금 잔액의 95%를 초과함</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>적립 기간이 1년 미만으로 정부 기여금이 50만원 이하</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>앞으로 적금을 유지할 계획이 없고, 일시에 큰 자금이 필요함</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">실제 사례:</strong> 정OO씨(30세)는 위 프레임워크를 활용하여 
                자신의 상황(2년 적립, 800만원 필요, 1년 상환 가능)에 담보대출이 유리하다고 판단하고 선택했습니다. 
                결과적으로 약 300만원 이상의 손실을 방지할 수 있었습니다.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="faq" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <HelpCircle className="w-7 h-7 text-[#1A237E]" />
                자주 묻는 질문
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white border-l-4 border-[#1A237E] p-6 rounded-r-lg">
                  <p className="font-bold text-foreground mb-2">Q1. 담보대출 받으면 적금이 해지되나요?</p>
                  <p className="text-muted-foreground">
                    A. 아닙니다. 적금은 그대로 유지되며 만기일까지 정부 기여금과 이자를 계속 받습니다. 
                    대출은 만기일에 적금에서 자동 상환되므로, 별도로 원금을 준비할 필요가 없습니다. 
                    또한 적금 납입도 계속해야 하며, 납입을 중단하면 정부 기여금을 받을 수 없으니 주의하세요.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-[#1A237E] p-6 rounded-r-lg">
                  <p className="font-bold text-foreground mb-2">Q2. 대출 후에도 적금 납입을 계속해야 하나요?</p>
                  <p className="text-muted-foreground">
                    A. 네, 반드시 계속 납입해야 합니다. 대출과 적금은 별개의 상품이며, 
                    대출을 받았다고 해서 적금 납입이 중단되는 것은 아닙니다. 
                    납입을 중단하면 정부 기여금을 받을 수 없고, 적금 금리도 하락할 수 있으므로 
                    매월 정해진 날짜에 자동이체로 납입을 계속해야 합니다.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-[#1A237E] p-6 rounded-r-lg">
                  <p className="font-bold text-foreground mb-2">Q3. 대출 금리가 적금 금리보다 높은데 손해 아닌가요?</p>
                  <p className="text-muted-foreground">
                    A. 대출 이자를 내더라도 정부 기여금(연 최대 50.4만원)과 우대금리를 유지하면 오히려 이득입니다. 
                    예를 들어 1,000만원을 1년간 빌리면 이자는 70만원이지만, 정부 기여금 50.4만원과 우대금리 42만원을 
                    유지하면 실질 비용은 거의 없거나 오히려 플러스입니다. 1년 이내 상환한다면 담보대출이 압도적으로 유리합니다.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-[#1A237E] p-6 rounded-r-lg">
                  <p className="font-bold text-foreground mb-2">Q4. 만기 전에 대출을 상환할 수 있나요?</p>
                  <p className="text-muted-foreground">
                    A. 가능합니다. 중도상환 수수료 없이 언제든 상환할 수 있습니다. 
                    여유 자금이 생기면 빨리 갚을수록 이자 부담이 줄어들므로, 
                    가능하면 만기 전에 상환하는 것이 유리합니다. 
                    상환 후에도 적금은 그대로 유지되므로 정부 기여금과 우대금리를 계속 받을 수 있습니다.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-[#1A237E] p-6 rounded-r-lg">
                  <p className="font-bold text-foreground mb-2">Q5. 2년 이상 장기로 대출받고 싶은데 가능한가요?</p>
                  <p className="text-muted-foreground">
                    A. 적금담보대출은 적금 만기일까지만 가능합니다. 
                    예를 들어 적금 만기가 3년 남았다면, 최대 3년간만 대출받을 수 있습니다. 
                    2년 이상 장기 자금이 필요하다면 신용대출이나 다른 대출 상품을 검토하는 것이 좋습니다. 
                    다만 장기 대출 시 이자 부담이 커지므로, 가능하면 단기로 받고 빨리 상환하는 것이 유리합니다.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-[#1A237E] p-6 rounded-r-lg">
                  <p className="font-bold text-foreground mb-2">Q6. 대출받으면 신용점수가 하락하나요?</p>
                  <p className="text-muted-foreground">
                    A. 적금담보대출은 신용조회가 없으므로 신용점수에 영향을 주지 않습니다. 
                    이는 일반 신용대출과의 큰 차이점으로, 신용점수가 낮아도 담보만 있으면 대출이 가능합니다. 
                    단, 이자를 연체하면 신용점수가 하락하니 자동이체를 꼭 설정하세요.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-[#1A237E] p-6 rounded-r-lg">
                  <p className="font-bold text-foreground mb-2">Q7. 담보대출 한도가 부족한데 일부만 해지할 수 있나요?</p>
                  <p className="text-muted-foreground">
                    A. 불가능합니다. 청년 도약계좌는 부분 해지가 불가능하며, 해지 시 전액 해지됩니다. 
                    담보대출 한도가 부족하다면, 담보대출로 가능한 만큼 받고 부족한 부분은 다른 방법을 모색해야 합니다. 
                    예를 들어 신용대출이나 정부지원 서민금융 상품을 추가로 활용할 수 있습니다.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <ArticleAuthor 
            expertId="expert-savings-01"
            publishedDate={new Date().toISOString().split('T')[0]}
            lastUpdated={new Date().toISOString().split('T')[0]}
          />
          <BlogShareButtons
            title="2026년 청년 도약계좌 중도해지 vs 담보대출 비교"
            description="급전 필요 시 최선의 선택"
            variant="inline"
            className="mt-8"
          />
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
      <div className="lg:hidden">
        <BlogShareButtons
          title="2026년 청년 도약계좌 중도해지 vs 담보대출 비교"
          description="급전 필요 시 최선의 선택"
          variant="bottom-fixed"
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "2026년 청년 도약계좌 중도해지 vs 담보대출 비교 완벽 가이드",
            "description": "급전이 필요할 때 청년 도약계좌를 해지할지, 담보대출을 받을지 고민된다면? 손익 분석부터 케이스별 최선의 선택까지 재테크 전문가가 상세히 알려드립니다.",
            "author": {
              "@type": "Person",
              "name": "김민지",
              "jobTitle": "재테크 전문가"
            },
            "publisher": {
              "@type": "Organization",
              "name": "돈워리",
              "logo": {
                "@type": "ImageObject",
                "url": "https://donworry.kr/og-image.png"
              }
            },
            "datePublished": new Date().toISOString().split('T')[0],
            "dateModified": new Date().toISOString().split('T')[0],
            "image": "https://donworry.kr/og-image.png"
          })
        }}
      />
    </div>
  );
}
