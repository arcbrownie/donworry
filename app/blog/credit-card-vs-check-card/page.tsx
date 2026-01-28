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
import { CreditCard, Wallet, TrendingUp, Shield, Calculator, ArrowRight, AlertTriangle } from "lucide-react";
import AdSenseDisplay from "@/components/adsense/AdSenseDisplay";

export default function CreditCardVsCheckCard() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight max-w-4xl mx-auto break-words line-clamp-2">
              신용카드 vs 체크카드: 사회초년생을 위한 완벽 가이드
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              결제 수단으로 보이지만, 혜택과 신용관리, 연말정산까지 큰 차이가 있어요
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
                { id: "basic-difference", text: "1. 신용카드 vs 체크카드 기본 차이", level: 2 },
                { id: "benefits-comparison", text: "2. 혜택 비교 (2026년 기준)", level: 2 },
                { id: "card-selection", text: "3. 사회초년생에게 적합한 카드 선택법", level: 2 },
                { id: "credit-management", text: "4. 신용관리 점수와 위험성", level: 2 },
                { id: "year-end-tax", text: "5. 연말정산과 소득공제 전략 (2026년 기준)", level: 2 },
                { id: "practical-advice", text: "6. 실전 조언: 사회초년생에게 맞는 전략", level: 2 },
              ]}
            />
          </div>

          {/* Article Content */}
          <article className="flex-1 max-w-4xl prose prose-xl prose-slate max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                신용카드와 체크카드는 결제 수단으로 보이지만, 혜택과 신용관리, 연말정산까지 큰 차이가 있어요. 사회초년생이라면 어떤 카드를 써야 할지, 소득공제는 어떻게 챙기고, 위험성은 어떻게 피하는지 정리해 드립니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base font-medium">
                어떤 카드를 쓰는지에 따라 연간 수십만 원 이상의 실질적 이득과 절세 혜택이 나눌 수 있으니, 지금 바로 본인의 소비 패턴과 월급 수준에 맞는 카드를 정리해 보는 게 좋습니다.
              </p>
            </section>

            {/* Section 1 */}
            <section id="basic-difference" className="mb-10 scroll-mt-20">
              <h2 id="basic-difference" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <CreditCard className="w-7 h-7 text-[#1A237E]" />
                신용카드 vs 체크카드 기본 차이
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-foreground">신용카드</strong>는 이번 달 카드로 쓰고 다음 달에 한 번에 결제금을 내는 방식이에요. 즉, '신용'을 쓰는 후불식 카드입니다. 반면 <strong className="text-foreground">체크카드</strong>는 카드로 결제하는 순간 통장에서 바로 돈이 빠져나가는 선불식 카드예요.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                결제 방식 외에도 연회비, 신용등급 영향, 소득공제율, 혜택의 깊이 등 여러 면에서 다릅니다. 이 차이점을 제대로 이해해야 내게 맞는 카드를 선택할 수 있어요.
              </p>
            </section>

            {/* Section 2 */}
            <section id="benefits-comparison" className="mb-10 scroll-mt-20">
              <h2 id="benefits-comparison" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <TrendingUp className="w-7 h-7 text-[#4A148C]" />
                혜택 비교 (2026년 기준)
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                신용카드와 체크카드의 혜택을 구체적으로 비교해보면, 선택의 기준이 명확해집니다.
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10">
                      <th className="border border-border p-4 text-left font-semibold text-foreground">항목</th>
                      <th className="border border-border p-4 text-center font-semibold text-foreground">신용카드</th>
                      <th className="border border-border p-4 text-center font-semibold text-foreground">체크카드</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4 font-medium text-foreground">기본 포인트/캐시백</td>
                      <td className="border border-border p-4 text-muted-foreground text-center">0.5~1.5% 이상, 풍부한 업종 할인</td>
                      <td className="border border-border p-4 text-muted-foreground text-center">0.2~1% 수준, 제한적</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-4 font-medium text-foreground">업종 할인</td>
                      <td className="border border-border p-4 text-muted-foreground text-center">카페·쇼핑·배달·주유·영화·항공 등 다양</td>
                      <td className="border border-border p-4 text-muted-foreground text-center">편의점·대형마트·대중교통 위주</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium text-foreground">가입 혜택</td>
                      <td className="border border-border p-4 text-muted-foreground text-center">주로 10만~15만 원 수준 캐시백/포인트 제공</td>
                      <td className="border border-border p-4 text-muted-foreground text-center">간헐적 캐시백, 규모 작음</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-4 font-medium text-foreground">할부/현금서비스</td>
                      <td className="border border-border p-4 text-muted-foreground text-center">가능 (단, 이자·수수료 있음)</td>
                      <td className="border border-border p-4 text-muted-foreground text-center">불가능 (잔액까지만 가능)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium text-foreground">결제 수단 폭</td>
                      <td className="border border-border p-4 text-muted-foreground text-center">대부분 온라인·오프라인 가맹점 가능</td>
                      <td className="border border-border p-4 text-muted-foreground text-center">POS 시점 등 일부 제한 있을 수 있음</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                신용카드는 생활비 관련 혜택(통신비, 월세, OTT, 편의점, 교통·배달앱 할인)이 풍부하고, 연간 수십만 원 이상 절약할 수 있어요. 최근에는 통신비·월세·공과금에도 5~20% 할인되는 카드가 많아서 고정비 절감에 유리합니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                체크카드는 혜택 폭이 좁지만, 대부분 무실적·무연회비 제품이 많고, 소비 자체가 통장에서 바로 빠져나가기 때문에 과소비가 덜 하죠.
              </p>
            </section>

            {/* Section 3 */}
            <section id="card-selection" className="mb-10 scroll-mt-20">
              <h2 id="card-selection" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Wallet className="w-7 h-7 text-[#1A237E]" />
                사회초년생에게 적합한 카드 선택법
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                사회초년생은 월급이 크지 않고, 신용이 짧거나 대출이 필요할 수도 있습니다. 이런 상황에서 카드를 고르는 핵심은 다음과 같아요.
              </p>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">🔹 다음과 같은 기준으로 고르세요</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                    <div>
                      <strong className="text-foreground block mb-1">전월 실적 조건이 낮을 것:</strong>
                      <span>30만 원 수준 이하로 실적을 채울 수 있는 카드가 부담이 적어요.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#4A148C] text-xl mt-0.5">•</span>
                    <div>
                      <strong className="text-foreground block mb-1">연회비에 비해 실속 있는 혜택:</strong>
                      <span>연회비 1만~2만 원인데도 교통·카페·편의점·통신비·배달·OTT 등 일상에서 자주 쓰는 항목에 할인을 주는 카드가 좋아요.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                    <div>
                      <strong className="text-foreground block mb-1">포인트·캐시백 활용이 쉬울 것:</strong>
                      <span>네이버페이, 토스페이, 카카오페이, 신용카드 앱 등에 쉽게 캐시백·포인트로 전환되는 카드가 유리해요.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                🔹 추천 유형 (예시)
              </h3>
              <ol className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-lg bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-[#1A237E]">1</span>
                  <div>
                    <strong className="text-foreground block mb-1">고정비 줄이기 위주:</strong>
                    <span className="text-muted-foreground">신한 Mr.Life, 신한 B.Big 카드처럼 월세·통신포인트·공과금을 할인해 주는 카드.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#4A148C] text-lg bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-[#4A148C]">2</span>
                  <div>
                    <strong className="text-foreground block mb-1">카페·대중교통·배달·편의점 위주:</strong>
                    <span className="text-muted-foreground">하나 NU Edition2, 국민 알뜰하게, 삼성 Taptap O처럼 카페·버스·지하철·배달앱·편의점에 할인을 주는 카드.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-lg bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-[#1A237E]">3</span>
                  <div>
                    <strong className="text-foreground block mb-1">무실적·무연회비:</strong>
                    <span className="text-muted-foreground">신한 Deep Dream, 삼성 taptap, 삼성 오픈 카드처럼 무실적·무연회비면서 기본 적립률만 괜찮은 카드.</span>
                  </div>
                </li>
              </ol>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                실제로는 연봉 3천~4천만 원 사이 사회초년생이라면, 월 20~30만 원 정도만 써도 실적이 채워지고, 연간 10~20만 원 이상 실질 할인을 받을 수 있는 카드가 대부분입니다.
              </p>
            </section>

            {/* Section 4 */}
            <section id="credit-management" className="mb-10 scroll-mt-20">
              <h2 id="credit-management" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Shield className="w-7 h-7 text-[#4A148C]" />
                신용관리 점수와 위험성
              </h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                (1) 신용카드의 장점
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">신용등급을 올리는 데 도움:</strong>
                    <span className="text-muted-foreground">꾸준히 신용카드를 쓰고 매달 정해진 금액을 제때 납부하면, 신용점수가 상승하는 데 도움이 돼요. 한국신용평가(KCB) 자료에 따르면, 올바르게 사용하면 평균 30점 이상 신용점수가 오를 수 있답니다.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#4A148C] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">향후 대출·리스·렌탈에 유리:</strong>
                    <span className="text-muted-foreground">대출(주택담보, 자동차 할부, 개인대출 등)이나 리스를 받을 때, 신용카드 사용 내역과 신용등급이 중요하게 작용하기 때문이에요.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                (2) 신용카드의 위험성
              </h3>
              <div className="bg-warning/10 border-l-4 border-warning p-6 rounded-r-lg my-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block mb-1">연체하면 신용점수가 급락:</strong>
                      <span>30일 이상 연체하면 신용점수가 평균 50점 이상 하락할 수 있어요. 한 번 연체해도 1~2년 내내 신용 회복이 어려워질 수 있습니다.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block mb-1">과소비 위험:</strong>
                      <span>돈이 통장에서 바로 빠지지 않기 때문에, 쓰는 느낌이 적어 무심코 많은 금액을 지출할 수 있어요.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block mb-1">고이자 서비스:</strong>
                      <span>카드론, 현금서비스, 리볼빙(일부결제) 등은 금리가 매우 높아서 장기적으로 부담이 커질 수 있어요.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                (3) 체크카드의 장점과 한계
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-foreground">과소비 제어:</strong> 통장 잔액이 없으면 쓰지 못하므로, 소비가 자동으로 제한됩니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-foreground">신용등급에는 영향이 작음:</strong> 체크카드 사용도 신용평가에 반영되지만, 신용카드보다는 가산점 효과가 작고, 신용활동 이력으로 보기 어렵습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                즉, 체크카드만 쓰면 신용관리 측면에서는 '안전'하지만, '신용을 쌓는 데는 약점'이에요.
              </p>
            </section>

            {/* Section 5 */}
            <section id="year-end-tax" className="mb-10 scroll-mt-20">
              <h2 id="year-end-tax" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Calculator className="w-7 h-7 text-[#1A237E]" />
                연말정산과 소득공제 전략 (2026년 기준)
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                2026년 연말정산(2025년 1~12월 사용액 기준)에서 신용카드·체크카드는 소득공제를 받는 핵심 항목이에요.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                (1) 공제율과 한도
              </h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10">
                      <th className="border border-border p-4 text-left font-semibold text-foreground">사용처</th>
                      <th className="border border-border p-4 text-center font-semibold text-foreground">공제율</th>
                      <th className="border border-border p-4 text-left font-semibold text-foreground">비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4 font-medium text-foreground">신용카드</td>
                      <td className="border border-border p-4 text-muted-foreground text-center">15%</td>
                      <td className="border border-border p-4 text-muted-foreground">가입자·배우자·직계존비속 사용액 합산</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-4 font-medium text-foreground">체크카드</td>
                      <td className="border border-border p-4 text-muted-foreground text-center">30%</td>
                      <td className="border border-border p-4 text-muted-foreground">직불카드, 현금영수증 포함</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium text-foreground">전통시장·대중교통</td>
                      <td className="border border-border p-4 text-muted-foreground text-center">40%</td>
                      <td className="border border-border p-4 text-muted-foreground">2026년 한시적 특례</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-4 font-medium text-foreground">도서·공연·박물관·미술관</td>
                      <td className="border border-border p-4 text-muted-foreground text-center">30%</td>
                      <td className="border border-border p-4 text-muted-foreground">총급여 7천만 원 이하만 해당</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-foreground">공제 조건:</strong> 총급여의 25%를 넘는 사용액부터 적용됩니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                예: 연봉 4천만 원이면 연간 1천만 원까진 공제율이 높아도 실제 소득공제는 받지 못함.
              </p>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-foreground font-semibold mb-2">공제 한도:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 총급여 ≤ 7천만 원: 기본 한도 300만 원 + 전통시장·대중교통·문화생활 각 100만 원씩 추가 가능.</li>
                  <li>• 총급여 &gt; 7천만 원: 기본 한도 200만 원 수준, 추가 한도는 제한적.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                (2) 체크카드 vs 신용카드 전략
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">25% 미만 구간:</strong>
                    <span className="text-muted-foreground">총급여 25% 이하까지는 공제가 되지 않으므로, 혜택이 좋은 신용카드로 쓰는 게 이득이에요.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#4A148C] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">25% 초과 구간:</strong>
                    <span className="text-muted-foreground">이 부분은 공제 대상이기 때문에, 공제율이 높은 체크카드·현금영수증을 집중 사용하는 게 더 유리합니다.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">전통시장·대중교통·문화비:</strong>
                    <span className="text-muted-foreground">가능하면 체크카드나 현금영수증으로 결제해서 40%, 30% 공제율을 최대한 활용하세요.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                (3) 사회초년생 실전 팁
              </h3>
              <div className="bg-gradient-to-r from-[#4A148C]/10 to-[#1A237E]/10 border-l-4 border-[#4A148C] p-6 rounded-r-lg my-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#4A148C] text-xl mt-0.5">•</span>
                    <span>예산 30~50만 원 이내의 무실적·무연회비 카드 1~2개로 생활비를 주로 쓰되, 25% 이상 구간은 체크카드 겸 사용해요.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#4A148C] text-xl mt-0.5">•</span>
                    <span>홈택스에서 2025년 신용카드·체크카드 사용 내역을 확인하고, 2026년 연말정산 예상 공제액을 미리 계산해 보세요.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section id="practical-advice" className="mb-10 scroll-mt-20">
              <h2 id="practical-advice" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Wallet className="w-7 h-7 text-[#4A148C]" />
                실전 조언: 사회초년생에게 맞는 전략
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                신용카드 1개 + 체크카드 1개 조합이 현실적이에요. 월 30~50만 원 정도 지출이 예상된다면, 혜택 좋은 신용카드 1개로 대부분 쓰고, 공제 구간에선 체크카드를 활성화하는 게 좋습니다.
              </p>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">핵심 포인트</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                    <div>
                      <strong className="text-foreground">무조건 체크카드만 쓰면 장기적으로 손해:</strong> 신용등급 상승·대출·리스 등에서 약해질 수 있으니, 적절한 수준(예: 월 20~30만 원)이라도 신용카드를 꾸준히 사용하고 제때 납부하는 습관이 중요합니다.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#4A148C] text-xl mt-0.5">•</span>
                    <div>
                      <strong className="text-foreground">무실적·무연회비 카드로 시작:</strong> 사회초년생이라 처음 카드를 만든다면, 무실적·무연회비라도 일상생활에서 자주 쓰는 카페·교통·통신·OTT·배달앱 등에 할인을 주는 카드를 선택하세요.
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                어떤 카드를 쓰는지에 따라 연간 수십만 원 이상의 실질적 이득과 절세 혜택이 나눌 수 있으니, 지금 바로 본인의 소비 패턴과 월급 수준에 맞는 1~2개 카드를 정리해 보는 게 좋습니다.
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
                <Link href="/debt/test">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-[#1A237E] text-[#1A237E] hover:bg-[#1A237E]/10 px-8 py-6 rounded-xl">
                    <Shield className="w-5 h-5 mr-2" />
                    <span className="font-bold">무료 채무 상담</span>
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
            expertId="expert-finance-02"
            publishedDate="2026-01-06"
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
