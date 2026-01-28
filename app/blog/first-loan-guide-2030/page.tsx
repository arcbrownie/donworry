"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Calculator, ArrowRight, CreditCard, TrendingUp, Shield } from "lucide-react";
// FAQ는 blog-faqs.ts에서 관리됩니다

// 대출 이자 계산기 컴포넌트
function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(10000000);
  const [interestRate, setInterestRate] = useState<number>(5.0);
  const [loanTerm, setLoanTerm] = useState<number>(3);
  const [repaymentType, setRepaymentType] = useState<"equal" | "principal">("equal");

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    if (repaymentType === "equal") {
      // 원리금 균등상환
      if (monthlyRate === 0) {
        return loanAmount / numPayments;
      }
      const payment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                      (Math.pow(1 + monthlyRate, numPayments) - 1);
      return payment;
    } else {
      // 원금 균등상환
      const principalPayment = loanAmount / numPayments;
      const firstInterest = loanAmount * monthlyRate;
      return principalPayment + firstInterest;
    }
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * loanTerm * 12;
  const totalInterest = totalPayment - loanAmount;

  return (
    <Card className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-bold text-slate-900">대출 이자 계산기</h3>
      </div>
      <div className="space-y-4">
        <div>
          <Label htmlFor="loan-amount" className="text-sm font-medium text-slate-700">
            대출 금액 (원)
          </Label>
          <Input
            id="loan-amount"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="mt-1"
            min="1000000"
            step="100000"
          />
        </div>
        <div>
          <Label htmlFor="interest-rate" className="text-sm font-medium text-slate-700">
            연 이자율 (%)
          </Label>
          <Input
            id="interest-rate"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="mt-1"
            min="1"
            max="20"
            step="0.1"
          />
        </div>
        <div>
          <Label htmlFor="loan-term" className="text-sm font-medium text-slate-700">
            대출 기간 (년)
          </Label>
          <Input
            id="loan-term"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="mt-1"
            min="1"
            max="10"
          />
        </div>
        <div>
          <Label className="text-sm font-medium text-slate-700 mb-2 block">
            상환 방식
          </Label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="repayment"
                value="equal"
                checked={repaymentType === "equal"}
                onChange={() => setRepaymentType("equal")}
                className="text-indigo-600"
              />
              <span className="text-sm text-slate-700">원리금 균등상환</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="repayment"
                value="principal"
                checked={repaymentType === "principal"}
                onChange={() => setRepaymentType("principal")}
                className="text-indigo-600"
              />
              <span className="text-sm text-slate-700">원금 균등상환</span>
            </label>
          </div>
        </div>
        <div className="pt-4 border-t border-indigo-200">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">월 상환액</span>
              <span className="text-xl font-bold text-indigo-600">
                {Math.round(monthlyPayment).toLocaleString()}원
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">총 상환액</span>
              <span className="text-lg font-semibold text-slate-900">
                {Math.round(totalPayment).toLocaleString()}원
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">총 이자</span>
              <span className="text-lg font-semibold text-slate-700">
                {Math.round(totalInterest).toLocaleString()}원
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function FirstLoanGuide2030() {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-600 py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        <div className="container relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              사회초년생을 위한 대출 가이드
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              신용점수 관리부터 저금리 상품 찾는 법까지
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
                { id: "credit-score", text: "1. 대출의 시작과 끝, '신용점수' 관리의 기술", level: 2 },
                { id: "loan-products-heading", text: "2. 나에게 맞는 대출 상품 찾기: 정부지원 vs 시중은행", level: 2 },
                { id: "checklist-heading", text: "3. 대출 전 반드시 체크해야 할 3요소 (DSR, 상환 방식)", level: 2 },
                { id: "calculator-heading", text: "4. 대출 이자 계산기: 내가 매달 내야 할 금액은?", level: 2 },
                { id: "solution-heading", text: "5. 돈 걱정 없는 내일을 위한 솔루션", level: 2 },
              ]}
            />
          </div>

          {/* Article Content */}
          <article className="flex-1 max-w-4xl prose prose-xl prose-slate max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-600 p-6 rounded-r-lg mb-6">
                <p className="text-slate-900 font-medium text-lg italic mb-0">
                  "내 집 마련, 학자금, 혹은 예상치 못한 생활비까지... 첫 대출 앞에서 막막하신가요?"
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                사회에 첫발을 내디딘 사회초년생에게 '대출'이라는 단어는 막연한 두려움으로 다가오곤 합니다. "이자가 너무 비싸면 어쩌지?", "신용점수가 떨어지면 어떡하지?"라는 걱정은 당연합니다. 하지만 대출은 단순히 '빚'이 아니라, 적절히 활용하면 인생의 기회를 열어주는 '금융 도구'가 될 수 있습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base font-medium">
                오늘은 <strong className="text-primary">donworry.kr</strong>과 함께, 사회초년생이 반드시 알아야 할 대출의 정석과 이자를 한 푼이라도 아끼는 실전 팁을 알아보겠습니다. <strong className="text-primary">"일상은 가볍게, 돈 걱정은 없게"</strong> 만드는 첫걸음, 지금 시작합니다.
              </p>
            </section>

            {/* Section 1 */}
            <section id="credit-score" className="mb-10 scroll-mt-20">
              <h2 id="credit-score" className="text-2xl font-bold text-slate-900 mb-4 scroll-mt-20">
                대출의 시작과 끝, '신용점수' 관리의 기술
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                대출을 받을 때 은행이 가장 먼저 보는 것은 여러분의 '상환 능력'이며, 이를 수치화한 것이 바로 <strong className="text-foreground">신용점수</strong>입니다. 신용점수가 높을수록 대출 한도는 늘어나고 금리는 낮아집니다.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                신용점수와 금리의 관계
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                은행은 리스크를 관리합니다. 신용점수가 높은 사람은 빌린 돈을 제때 갚을 확률이 높다고 판단하여 낮은 이자(우대금리)를 적용합니다. 반면, 점수가 낮으면 위험 수당(가산금리)이 붙어 매달 내야 하는 이자 부담이 커집니다.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                일상에서 신용점수 올리는 3가지 꿀팁
              </h3>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600 text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">체크카드 꾸준히 사용하기:</strong>
                    <span className="text-muted-foreground">월 30만 원 이상, 6개월 이상 꾸준히 사용하면 가점이 부여됩니다.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600 text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">공공요금 납부 실적 등록:</strong>
                    <span className="text-muted-foreground">통신비, 건강보험료 납부 내역을 신용평가사에 제출하세요. 비금융 정보 반영으로 점수가 즉시 상승할 수 있습니다.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600 text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">연체는 단 하루도 금물:</strong>
                    <span className="text-muted-foreground">10만 원 미만의 소액이라도 연체가 발생하면 신용점수에 치명적입니다. 자동이체를 적극 활용하세요.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="loan-products" className="mb-10 scroll-mt-20">
              <h2 id="loan-products-heading" className="text-2xl font-bold text-slate-900 mb-4 scroll-mt-20">
                나에게 맞는 대출 상품 찾기: 정부지원 vs 시중은행
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                첫 대출일수록 <strong className="text-foreground">정부 지원 서민금융 상품</strong>을 먼저 살펴보는 것이 유리합니다. 시중은행보다 조건이 완만하고 금리가 저렴하기 때문입니다.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                사회초년생을 위한 추천 대출 리스트
              </h3>
              <ol className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600 text-lg bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                  <div>
                    <strong className="text-foreground block mb-1">햇살론 유스(Youth):</strong>
                    <span className="text-muted-foreground">대학생, 취업준비생, 사회초년생을 위한 대표적인 저금리 상품입니다.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600 text-lg bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                  <div>
                    <strong className="text-foreground block mb-1">중소기업 취업청년 전월세보증금 대출:</strong>
                    <span className="text-muted-foreground">연 1.5%대의 파격적인 저금리로 주거 비용을 획기적으로 줄일 수 있습니다.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600 text-lg bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                  <div>
                    <strong className="text-foreground block mb-1">카카오뱅크/토스뱅크 비상금 대출:</strong>
                    <span className="text-muted-foreground">소액이 급하게 필요할 때 1금융권에서 간편하게 이용 가능합니다.</span>
                  </div>
                </li>
              </ol>

              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg my-6">
                <p className="text-slate-900 leading-relaxed font-medium">
                  <strong className="text-indigo-700">💡 전문가 팁:</strong> 대출 상담을 받기 전, 본인의 정확한 소득과 재직 기간을 파악하세요. <strong className="text-indigo-700">채무 통합</strong>이나 <strong className="text-indigo-700">저금리 대환 대출</strong>이 필요한 상황이라면 전문가와의 상담을 통해 이자 부담을 낮추는 전략이 필요합니다.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="checklist" className="mb-10 scroll-mt-20">
              <h2 id="checklist-heading" className="text-2xl font-bold text-slate-900 mb-4 scroll-mt-20">
                대출 전 반드시 체크해야 할 3요소 (DSR, 상환 방식)
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                대출 실행 버튼을 누르기 전, 다음 세 가지는 반드시 확인해야 합니다.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block mb-1">DSR (총부채원리금상환비율):</strong>
                    <span className="text-muted-foreground">내 연 소득에서 매년 갚아야 하는 원금과 이자가 차지하는 비중입니다. 무리한 대출은 일상을 파괴합니다.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CreditCard className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block mb-1">상환 방식 선택:</strong>
                    <span className="text-muted-foreground">원리금 균등상환 vs 원금 균등상환. 본인의 현금 흐름에 맞는 방식을 선택하세요.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block mb-1">중도상환수수료:</strong>
                    <span className="text-muted-foreground">여유 자금이 생겨 대출을 미리 갚을 때 내야 하는 벌금입니다. 수수료가 없는 상품을 고르는 것이 유리합니다.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 4 - Calculator */}
            <section id="calculator" className="mb-10 scroll-mt-20">
              <h2 id="calculator-heading" className="text-2xl font-bold text-slate-900 mb-4 scroll-mt-20">
                대출 이자 계산기: 내가 매달 내야 할 금액은?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                대출 금액, 이자율, 상환 기간을 입력하면 정확한 월 상환액과 총 이자를 확인할 수 있습니다. 
                여러 상품을 비교하여 가장 유리한 조건을 선택하세요.
              </p>
              <LoanCalculator />
            </section>

            {/* Section 5 */}
            <section id="solution" className="mb-10 scroll-mt-20">
              <h2 id="solution-heading" className="text-2xl font-bold text-slate-900 mb-4 scroll-mt-20">
                돈 걱정 없는 내일을 위한 솔루션
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                이미 여러 곳에서 대출을 받아 관리가 어렵거나, 고금리 채무로 인해 고민 중이신가요? 혼자 고민하지 마세요. <strong className="text-foreground">개인회생</strong>이나 <strong className="text-foreground">채무 통합</strong> 같은 법적 제도나 금융 솔루션이 여러분의 재기를 도울 수 있습니다. 신용점수가 낮아 고민이라면 지금 바로 <strong className="text-primary">신용점수 관리 서비스</strong>를 시작하고, 나에게 가장 유리한 대출 금리를 비교해 보세요.
              </p>
            </section>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center my-10">
              <Link href="/debt/test">
                <Button size="lg" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-xl shadow-elevated">
                  <Shield className="w-5 h-5 mr-2" />
                  <span className="font-bold">무료 채무 상담 신청하기</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/cal/interest-saving">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-6 rounded-xl">
                  <Calculator className="w-5 h-5 mr-2" />
                  <span className="font-bold">나의 한도 조회하기</span>
                </Button>
              </Link>
            </div>

            <div className="text-center py-6 border-t border-border mt-10">
              <p className="text-primary font-semibold text-lg">
                "일상은 가볍게, 돈 걱정은 없게. 돈워리가 함께하겠습니다."
              </p>
            </div>
          </article>
        </div>

        {/* Author Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <ArticleAuthor 
            expertId="expert-finance-01"
            publishedDate="2025-12-20"
            lastUpdated="2026-01-27"
          />
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}
