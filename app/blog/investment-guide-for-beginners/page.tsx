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
import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, AlertTriangle, Target, PiggyBank, BarChart3, Calculator, ArrowRight, Wallet } from "lucide-react";
import AdSenseDisplay from "@/components/adsense/AdSenseDisplay";

export default function InvestmentGuideForBeginners() {
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
          className="h-full bg-gradient-to-r from-[#1A237E] via-[#4A148C] to-[#1A237E] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A237E] via-[#4A148C] to-[#1A237E] py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              사회초년생을 위한 투자 입문서
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              "얼마를 벌까?"보다 "얼마까지 잃어도 되는가?"를 먼저 정하는 투자의 기초
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
                { id: "checklist", text: "1. 시작 전 체크리스트", level: 2 },
                { id: "risk-levels", text: "2. 위험도별 대표 상품 이해하기", level: 2 },
                { id: "asset-allocation", text: "3. 사회초년생 자산배분 기본 틀", level: 2 },
                { id: "product-examples", text: "4. 구체적인 상품·전략 사례", level: 2 },
                { id: "investment-mindset", text: "5. 투자 마인드와 실수 방지 팁", level: 2 },
                { id: "summary", text: "6. 한 줄로 정리하는 입문서 구조", level: 2 },
              ]}
            />
          </div>

          {/* Article Content */}
          <article className="flex-1 max-w-4xl prose prose-xl prose-slate max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                사회초년생이 투자를 시작할 때는 "얼마를 벌까?"보다 "얼마까지 잃어도 되는가?"를 먼저 정하는 것이 핵심입니다. 투자위험도에 따라 단계를 나누고, 월급에서 얼마를 어떻게 나누면 좋을지 사례와 함께 정리해 보겠습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base font-medium">
                투자는 속도보다 기초가 중요해요. 지금 바로 본인의 소득 수준과 위험 감수 능력에 맞는 투자 전략을 세워보세요.
              </p>
            </section>

            {/* Section 1 */}
            <section id="checklist" className="mb-10 scroll-mt-20">
              <h2 id="checklist" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Shield className="w-7 h-7 text-[#1A237E]" />
                시작 전 체크리스트
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                사회초년생에게 투자는 '속도'보다 기초가 중요합니다. 투자를 시작하기 전에 반드시 확인해야 할 세 가지가 있어요.
              </p>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">투자 전 필수 체크 3가지</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E] text-xl mt-0.5">1.</span>
                    <div>
                      <strong className="text-foreground block mb-1">비상금:</strong>
                      <span>최소 3개월치 생활비를 CMA·수시입출금 통장에 마련 후 투자 시작하세요.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#4A148C] text-xl mt-0.5">2.</span>
                    <div>
                      <strong className="text-foreground block mb-1">빚 상황:</strong>
                      <span>고금리 카드론·마이너스통장 등은 먼저 상환하는 것이 수익률 최고 투자입니다.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E] text-xl mt-0.5">3.</span>
                    <div>
                      <strong className="text-foreground block mb-1">투자금:</strong>
                      <span>월급에서 생활비·고정지출·저축을 뺀 "잃어도 생활이 흔들리지 않을 돈"만 투자금으로 설정하세요.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#4A148C]/10 to-[#1A237E]/10 border-l-4 border-[#4A148C] p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">실전 사례: 세후 월급 250만 원 사회초년생 B씨</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 생활비·월세·교통: 150만 원</li>
                  <li>• 저축·비상금: 50만 원</li>
                  <li>• <strong className="text-foreground">투자 가능 금액: 50만 원 (월급의 20%)</strong></li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  이렇게 나누면, 투자에서 손실이 나더라도 일상 생활에는 영향을 주지 않을 수 있어요.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="risk-levels" className="mb-10 scroll-mt-20">
              <h2 id="risk-levels" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <BarChart3 className="w-7 h-7 text-[#4A148C]" />
                위험도별 대표 상품 이해하기
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                투자 상품은 위험도에 따라 크게 5단계로 나눌 수 있어요. 각 단계의 특징을 이해하면 본인에게 맞는 투자 전략을 세울 수 있습니다.
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    ① 매우 안전 (원금 보장 위주)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <strong className="text-foreground">예금·적금·CMA, 청년 특화 적금, 청년도약계좌</strong> 등이 여기에 속해요.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong className="text-foreground">장점:</strong> 원금 보장, 예금자보호 5천만 원 한도, 마음이 편함</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">⚠</span>
                      <span><strong className="text-foreground">단점:</strong> 물가상승률(인플레이션)을 따라가기 어렵고, 장기 수익률이 낮음</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    이 단계는 투자라기보다 <strong className="text-foreground">"기초 체력"을 만드는 구간</strong>입니다.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    ② 낮은 위험 (안정형 투자)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <strong className="text-foreground">국공채, 우량 회사채, 채권형·채권 ETF, 파킹형 단기채 신탁</strong> 등이 있어요.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span><strong className="text-foreground">장점:</strong> 예적금보다 약간 높은 수익률, 주식보다 변동성이 낮아요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">⚠</span>
                      <span><strong className="text-foreground">단점:</strong> 금리·채권 가격 변동으로 손실이 날 수도 있지만, 변동폭은 비교적 제한적입니다</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    고금리–금리 인하 전환 구간에서 채권·채권ETF는 사회초년생의 <strong className="text-foreground">"첫 위험자산"</strong>으로 많이 추천됩니다.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-yellow-600" />
                    ③ 중간 위험 (중립형·균형형)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <strong className="text-foreground">국내·해외 지수형 ETF(코스피200, 코스닥150, S&P500 추종 등)</strong>가 대표적이에요.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">✓</span>
                      <span><strong className="text-foreground">장점:</strong> 개별 종목보다 분산 투자, 장기 우상향 가능성이 높고, 소액·정기 투자에 적합</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">⚠</span>
                      <span><strong className="text-foreground">단점:</strong> 단기 변동성이 크며, 몇 년 단위로 -20% 이상 하락 구간을 겪을 수 있음</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    사회초년생의 <strong className="text-foreground">"첫 진짜 투자"</strong>로 가장 많이 언급되는 영역입니다.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                    ④ 높은 위험 (공격형)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <strong className="text-foreground">개별주식, 해외 성장주, 테마형 ETF(2차전지, AI, 코인 관련 등)</strong>가 여기에 속해요.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">✓</span>
                      <span><strong className="text-foreground">장점:</strong> 성공하면 수십 %의 수익도 가능</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <span><strong className="text-foreground">단점:</strong> 기업 부도, 산업 쇠퇴, 규제 등으로 반토막 이상 손실도 흔합니다</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    ⑤ 초고위험 (투기형)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <strong className="text-foreground">레버리지·인버스 ETF, 파생상품, 코인, FX 마진</strong> 등이 있어요.
                  </p>
                  <p className="text-muted-foreground mt-3">
                    사회초년생 입문 단계에서는 <strong className="text-foreground">"공부용 소액"</strong> 외에는 사실상 피해야 할 영역으로 많이 언급됩니다.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="asset-allocation" className="mb-10 scroll-mt-20">
              <h2 id="asset-allocation" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Target className="w-7 h-7 text-[#1A237E]" />
                사회초년생 자산배분 기본 틀
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                여러 전문가·재테크 글에서 공통적으로 말하는 것은 <strong className="text-foreground">"저축과 투자 비율을 나눈 뒤, 투자 안에서도 위험도별로 나누라"</strong>는 것입니다.
              </p>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">예시 1) 월 재테크 가능금 100만 원인 20대 A씨</h3>
                <p className="text-muted-foreground mb-4">
                  토스 등에서 소개하는 한 예시는 다음과 같습니다.
                </p>
                <ul className="space-y-3 text-muted-foreground mb-4">
                  <li className="flex items-start gap-3">
                    <PiggyBank className="w-5 h-5 text-[#1A237E] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block mb-1">저축·예적금: 30만 원 (30%)</strong>
                      <span>비상금·단기 목표용</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#4A148C] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block mb-1">투자(ETF, 펀드, 주식 등): 70만 원 (70%)</strong>
                      <span>장기 자산 증식용</span>
                    </div>
                  </li>
                </ul>
                <p className="text-muted-foreground mb-3 font-semibold">이를 위험도별로 쪼개면:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 매우 안전: 30만 원 – 고금리 적금, 청년 적금</li>
                  <li>• 낮은 위험: 20만 원 – 채권형 ETF, 파킹형 단기채 신탁</li>
                  <li>• 중간 위험: 40만 원 – KODEX200, TIGER S&P500 등 지수형 ETF 적립식</li>
                  <li>• 높은 위험: 10만 원 – 개별 주식·테마 ETF 공부용 소액</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  이 구조라면, 설령 높은 위험 자산에서 -50%가 나더라도 <strong className="text-foreground">전체 투자금에서 잃는 비중은 5% 정도로 제한</strong>됩니다.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#4A148C]/10 to-[#1A237E]/10 border-l-4 border-[#4A148C] p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">예시 2) 월 투자 가능금 50만 원인 사회초년생 B씨</h3>
                <p className="text-muted-foreground mb-4">
                  재테크 초보를 위한 단계별 로드맵에서 자주 제시하는 구조를 적용해 보면:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">1단계(0~6개월):</h4>
                    <ul className="space-y-1 text-muted-foreground ml-4">
                      <li>• 비상금 만들기: 30만 원 – CMA·예금</li>
                      <li>• 금융 지식 공부: 책·유튜브·연금·세금 기본 이해</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">2단계(6~12개월):</h4>
                    <ul className="space-y-1 text-muted-foreground ml-4">
                      <li>• 저축: 20만 원 – 적금·청년상품</li>
                      <li>• 투자 입문: 30만 원 – 지수형 ETF 2개 정도에 분산</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">3단계(1년 이후):</h4>
                    <ul className="space-y-1 text-muted-foreground ml-4">
                      <li>• 채권 ETF·배당 ETF·리츠 등으로 조금씩 다변화</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  이렇게 <strong className="text-foreground">"시간"을 기준으로도 위험도를 점차 높여 가는 방식</strong>이 권장됩니다.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="product-examples" className="mb-10 scroll-mt-20">
              <h2 id="product-examples" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Wallet className="w-7 h-7 text-[#4A148C]" />
                구체적인 상품·전략 사례
              </h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                1) 예금·적금·CMA 활용 사례
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                한 재테크 입문 가이드는 <strong className="text-foreground">"최소 3개월치 생활비 비상금을 CMA나 자유입출금 계좌에"</strong> 두라고 제안합니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                예적금은 금리가 낮아도 원금 보장이 확실하고, 예금자보호법으로 1인당 5천만 원까지 보호됩니다.
              </p>
              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">사회초년생 C씨가 월 250만 원을 받는다면:</strong>
                </p>
                <ul className="space-y-2 text-muted-foreground mt-3">
                  <li>• 비상금 목표 450만 원(생활비 150만 원 × 3개월)을 CMA에 6~9개월에 걸쳐 모읍니다</li>
                  <li>• 그 이후부터 매달 10만 원은 적금, 20만 원은 투자로 전환하는 식으로 단계를 밟을 수 있어요</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                2) 채권·채권 ETF·단기채 신탁
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                고금리에서 금리가 내려가는 구간에는 채권·채권ETF가 주식보다 변동성이 작으면서도 매력적인 수단으로 소개됩니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                국고채·우량 회사채 위주의 채권 ETF는 개별 채권보다 분산이 잘 되어 있어 위험이 상대적으로 낮습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                시중은행들의 단기채 신탁(파킹형 상품)은 예·적금보다 약간 높은 이자를 주면서, 필요할 때 자유롭게 인출이 가능합니다.
              </p>
              <div className="bg-gradient-to-r from-[#4A148C]/10 to-[#1A237E]/10 border-l-4 border-[#4A148C] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">예: B씨가 투자금 50만 원 중 20만 원을 "예금보다 조금 더"를 원하는 파킹 형태로 운용하려면,</strong> 단기 국고채 ETF나 금리형 ETF를 적금처럼 매달 사는 전략도 고려할 수 있습니다.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                3) 지수형 ETF 중심의 장기 투자
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                ETF 입문 가이드는 사회초년생에게 <strong className="text-foreground">"국내·해외 지수형 ETF를 첫 투자"</strong>로 추천합니다.
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">국내:</strong>
                    <span className="text-muted-foreground">KODEX200, TIGER 코스닥150 등 – 한국 전체 시장에 분산 투자</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#4A148C] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">해외:</strong>
                    <span className="text-muted-foreground">S&P500, 나스닥100 추종 ETF – 미국 주요 지수에 분산 투자</span>
                  </div>
                </li>
              </ul>
              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong className="text-foreground">특징:</strong>
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 1주 단위, 심지어 1만 원대 금액으로도 투자 가능</li>
                  <li>• 장기 적립식으로 5년 이상 가져가면 단기 변동을 어느 정도 상쇄할 수 있습니다</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-[#4A148C]/10 to-[#1A237E]/10 border-l-4 border-[#4A148C] p-6 rounded-r-lg my-6">
                <h4 className="font-semibold text-foreground mb-3">사례: 사회초년생 D씨 – "내 집 마련 종잣돈" 목표</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 월 40만 원을 5년간 S&P500+국내 지수 ETF에 적립 투자</li>
                  <li>• 금리·시장 상황에 따라 변동은 있지만, 평균 연 5~7% 수익률을 가정하면 수천만 원 규모의 종잣돈 형성이 가능하다는 계산 시나리오가 제시됩니다</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="investment-mindset" className="mb-10 scroll-mt-20">
              <h2 id="investment-mindset" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Target className="w-7 h-7 text-[#1A237E]" />
                투자 마인드와 실수 방지 팁
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                여러 입문 가이드에서 강조하는 사회초년생 필수 원칙은 다음과 같습니다.
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">1) 목표를 먼저 정하기</h3>
                  <p className="text-muted-foreground">
                    "언제까지, 얼마를, 무엇을 위해 모을 것인지"를 먼저 적어두면, 단기 변동에 덜 흔들립니다.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#4A148C]/10 to-[#1A237E]/10 border-l-4 border-[#4A148C] p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">2) 저축이 먼저, 투자는 나중</h3>
                  <p className="text-muted-foreground">
                    "남는 돈을 저축"이 아니라, <strong className="text-foreground">"저축하고 남은 돈을 쓰는 구조"</strong>를 만들라는 조언이 많습니다.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">3) 자동이체 활용</h3>
                  <p className="text-muted-foreground">
                    급여일+1일에 저축·투자 계좌로 자동이체를 걸어두면, 멘탈에 의존하지 않아도 재테크가 지속됩니다.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#4A148C]/10 to-[#1A237E]/10 border-l-4 border-[#4A148C] p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">4) 단기 수익률 집착 금지</h3>
                  <p className="text-muted-foreground">
                    ETF·펀드·주식은 가격을 매일 보면 감정이 흔들려 잘못된 매매를 하기 쉬우니, 장기 투자라면 점검 주기를 줄이라 조언합니다.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">5) 공부 없는 고위험 상품 금지</h3>
                  <p className="text-muted-foreground">
                    코인·레버리지·ELS 등 구조가 복잡하거나 변동성이 큰 상품은, 원금의 5~10% 이하 소액으로 <strong className="text-foreground">"수업료" 정도로만 경험</strong>하는 편이 안전합니다.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="summary" className="mb-10 scroll-mt-20">
              <h2 id="summary" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Calculator className="w-7 h-7 text-[#4A148C]" />
                한 줄로 정리하는 입문서 구조
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                사회초년생 투자 입문을 단계별로 정리하면 다음과 같아요.
              </p>

              <div className="bg-gradient-to-r from-[#1A237E]/10 via-[#4A148C]/10 to-[#1A237E]/10 border-2 border-[#1A237E]/20 p-6 rounded-lg my-6">
                <ol className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E] text-lg bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-[#1A237E]">1</span>
                    <div>
                      <strong className="text-foreground block mb-1">1단계: 비상금(3개월 생활비) + 고금리 예적금으로 기초 체력</strong>
                      <span>투자를 시작하기 전 반드시 마련해야 할 안전장치입니다.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#4A148C] text-lg bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-[#4A148C]">2</span>
                    <div>
                      <strong className="text-foreground block mb-1">2단계: 채권·채권ETF·파킹형 신탁으로 예적금보다 살짝 높은 수익에 익숙해지기</strong>
                      <span>첫 위험자산으로 적합한 단계입니다.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E] text-lg bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-[#1A237E]">3</span>
                    <div>
                      <strong className="text-foreground block mb-1">3단계: 국내·해외 지수 ETF 적립식으로 장기 투자 시작</strong>
                      <span>사회초년생의 첫 진짜 투자로 가장 많이 추천되는 영역입니다.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#4A148C] text-lg bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-[#4A148C]">4</span>
                    <div>
                      <strong className="text-foreground block mb-1">4단계: 경험이 쌓이면 배당주·리츠·개별주식·테마 ETF로 천천히 확장</strong>
                      <span>기초가 탄탄해진 후 도전하는 단계입니다.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E] text-lg bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-[#1A237E]">5</span>
                    <div>
                      <strong className="text-foreground block mb-1">5단계: 레버리지·코인 등 고위험 자산은 전체 자산의 극히 일부에서만 실험</strong>
                      <span>공부용 소액으로만 경험하는 것이 안전합니다.</span>
                    </div>
                  </li>
                </ol>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                원한다면, 월 소득·지출 규모를 알려주면 여기에 맞춰 <strong className="text-foreground">"나만의 위험도별 포트폴리오 예시"</strong>도 만들어 줄 수 있습니다.
              </p>
            </section>

            <div className="text-center py-6 border-t border-border mt-10">
              <p className="text-[#1A237E] font-semibold text-lg">
                "돈 걱정 없는 내일, 돈워리가 함께하겠습니다."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 mb-10">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/cal/finance">
                  <Button size="lg" className="w-full sm:w-auto bg-[#1A237E] hover:bg-[#1A237E]/90 text-white px-8 py-6 rounded-xl shadow-elevated">
                    <Calculator className="w-5 h-5 mr-2" />
                    <span className="font-bold">금융 계산기</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/savings">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-[#1A237E] text-[#1A237E] hover:bg-[#1A237E]/10 px-8 py-6 rounded-xl">
                    <PiggyBank className="w-5 h-5 mr-2" />
                    <span className="font-bold">재테크 가이드</span>
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
            expertId="expert-savings-03"
            publishedDate="2026-01-10"
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
