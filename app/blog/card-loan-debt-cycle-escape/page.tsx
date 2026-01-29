"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleFooter } from "@/components/ui/ArticleFooter";
import { BlogShareButtons } from "@/components/ui/BlogShareButtons";
import { AlertCircle, Calculator, TrendingDown, CheckCircle, Shield, DollarSign, BarChart3, FileText, Users } from "lucide-react";

export default function CardLoanDebtCycleEscape() {
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
            <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-[1.3]">카드론 돌려막기 늪에서<br />탈출하는 채무통합 방법</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">고금리 이자를 낮추는 실제 대환대출 계산 사례</p>
          </div>
        </div>
      </section>
      <main className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0 space-y-4">
            <TableOfContents />
          </div>
          <article className="flex-1 max-w-4xl prose prose-xl prose-slate max-w-none">
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">카드론을 카드론으로 막고</strong> 있다면 매달 이자만 내다 원금은 줄지 않는 악순환에 빠져있을 가능성이 높습니다. 금융감독원 통계에 따르면, 카드론 돌려막기를 하는 사람은 평균 3-4개의 카드를 사용하며, 총 채무가 1,500만원을 넘는 경우가 많습니다.</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">이 글에서는 <strong className="text-[#1A237E]">고금리 카드론을 저금리 대출로 통합</strong>하여 이자 부담을 줄이는 방법을 한지우 채무조정 전문가가 실제 계산 사례와 함께 상세히 알려드립니다. 대환 손익은 <Link href="/cal/interest-saving" className="text-[#1A237E] hover:underline">대출 계산기</Link>로 확인하세요.</p>
            </section>
            <section className="mb-10">
              <h2 id="vicious-cycle" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><AlertCircle className="w-7 h-7 text-[#1A237E]" />카드론 돌려막기의 악순환</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">카드론 돌려막기</strong>는 다음과 같은 패턴으로 진행됩니다. 초기에는 작은 금액으로 시작하지만, 시간이 지날수록 채무가 기하급수적으로 증가합니다.</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">실제로 E씨(38세)는 처음 300만원 카드론으로 시작했지만, 1년 만에 5개 카드에 총 2,000만원의 채무를 지게 되었습니다. 월 이자만 40만원에 달해 원금 상환은 불가능한 상황이 되었습니다.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">1</span><div><strong className="text-foreground block mb-1">A카드 현금서비스 500만원:</strong><span className="text-muted-foreground">금리 20%, 월 이자 8.3만원. 초기에는 이자만 납부 가능</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">2</span><div><strong className="text-foreground block mb-1">이자 납부 어려움:</strong><span className="text-muted-foreground">B카드 현금서비스 300만원으로 A카드 이자 납부. 이때부터 악순환 시작</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">3</span><div><strong className="text-foreground block mb-1">채무 증가:</strong><span className="text-muted-foreground">총 800만원, 월 이자 13.3만원으로 증가. 원금은 전혀 줄지 않음</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">4</span><div><strong className="text-foreground block mb-1">C카드 추가:</strong><span className="text-muted-foreground">또 다른 카드로 이자 납부 반복. 총 채무 1,200만원, 월 이자 20만원</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">5</span><div><strong className="text-foreground block mb-1">결국 한도 소진:</strong><span className="text-muted-foreground">모든 카드 한도 소진, 더 이상 막을 수 없음. 연체 시작, 신용점수 급락</span></div></li>
              </ul>
              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-l-4 border-red-600 p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground"><strong className="text-red-600">⚠️ 위험:</strong> 이 패턴이 6개월 이상 지속되면 채무가 눈덩이처럼 불어나 개인회생이나 파산 외에 방법이 없어질 수 있습니다. 통계상 카드론 돌려막기를 1년 이상 지속한 경우, 평균 채무 증가율은 200%에 달합니다.</p>
              </div>
              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 카드론 돌려막기 채무 증가 추이</p>
                <p className="text-muted-foreground mb-2"><strong>초기 (1개월):</strong> 500만원, 월 이자 8.3만원</p>
                <p className="text-muted-foreground mb-2"><strong>3개월 후:</strong> 800만원, 월 이자 13.3만원 (60% 증가)</p>
                <p className="text-muted-foreground mb-2"><strong>6개월 후:</strong> 1,200만원, 월 이자 20만원 (140% 증가)</p>
                <p className="text-muted-foreground"><strong>1년 후:</strong> 1,800만원, 월 이자 30만원 (260% 증가)</p>
                <p className="text-muted-foreground mt-4 text-sm">※ 이자만 납부하고 원금은 전혀 줄지 않는 경우의 추정치입니다.</p>
              </div>
            </section>
            <section className="mb-10">
              <h2 id="consolidation-case" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><Calculator className="w-7 h-7 text-[#1A237E]" />대환대출 계산 사례</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">실제 사례</strong>로 대환대출의 이자 절감 효과를 계산해보겠습니다. F씨(42세)는 3개 카드에 총 1,500만원의 카드론 채무를 가지고 있었습니다.</p>
              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 현재 상황 (카드론 3개)</p>
                <ul className="space-y-3">
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span><span className="text-muted-foreground">A카드 현금서비스: 500만원, 금리 20%, 월 이자 8.3만원</span></li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span><span className="text-muted-foreground">B카드론: 700만원, 금리 18%, 월 이자 10.5만원</span></li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span><span className="text-muted-foreground">C카드 현금서비스: 300만원, 금리 22%, 월 이자 5.5만원</span></li>
                  <li className="flex gap-2"><span className="text-red-600 font-bold">✗</span><span className="text-red-600 font-bold">총 1,500만원, 월 이자 24.3만원, 연 이자 292만원</span></li>
                  <li className="flex gap-2"><span className="text-red-600 font-bold">✗</span><span className="text-red-600 font-bold">3년 기준 총 이자: 약 876만원 (원금 상환 불가 시)</span></li>
                </ul>
              </div>
              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 대환 후 (신용대출 1개)</p>
                <ul className="space-y-3">
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span><span className="text-muted-foreground">은행 신용대출: 1,500만원, 금리 12%, 월 이자 15만원</span></li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span><span className="text-muted-foreground">상환 기간: 3년 원리금 균등분할, 월 상환액 약 50만원</span></li>
                  <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span className="text-green-600 font-bold">월 이자 절감: 9.3만원 (연 112만원 절감)</span></li>
                  <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span className="text-green-600 font-bold">3년 기준 총 이자: 약 540만원 (336만원 절감)</span></li>
                  <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span className="text-green-600 font-bold">원금 상환 가능: 월 50만원 상환 시 3년 만에 완전 상환</span></li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground"><strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 대환대출을 통해 이자만 절감하는 것이 아니라, 원금도 함께 상환할 수 있게 됩니다. 카드론 돌려막기는 원금이 줄지 않지만, 대환대출은 원리금 균등분할 상환으로 채무를 점진적으로 줄일 수 있습니다.</p>
              </div>
            </section>
            <section className="mb-10">
              <h2 id="consolidation-methods" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><TrendingDown className="w-7 h-7 text-[#1A237E]" />채무통합 방법 3가지</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">카드론 돌려막기</strong>에서 탈출하는 3가지 방법입니다. 각 방법의 장단점을 비교하여 자신에게 맞는 방법을 선택해야 합니다.</p>
              <div className="space-y-6">
                <div className="bg-white border-2 border-[#1A237E]/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1A237E] mb-3">1. 은행 신용대출 (추천)</h3>
                  <p className="text-muted-foreground mb-3">신용점수가 600점 이상이고 재직 증명이 가능한 경우 가장 유리한 방법입니다.</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>금리: 연 8-15% (신용등급별 차등, 평균 12%)</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>한도: 최대 1억원 (소득 대비 DSR 40% 이하)</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>조건: 신용점수 600점 이상, 재직 증명, 연 소득 2,000만원 이상</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>상환 기간: 최대 5년 (원리금 균등분할)</li>
                    <li className="flex gap-2"><span className="text-green-600">✓</span>장점: 가장 낮은 금리, 장기 상환 가능, 원금 상환 가능</li>
                    <li className="flex gap-2"><span className="text-red-600">✗</span>단점: 신용점수 낮으면 승인 어려움, 소득 증빙 필수</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-[#1A237E]/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1A237E] mb-3">2. 서민금융 대환대출</h3>
                  <p className="text-muted-foreground mb-3">신용점수가 낮거나 소득이 적은 경우에도 신청 가능한 정부 지원 상품입니다.</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>금리: 연 10-18% (햇살론 기준, 평균 14%)</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>한도: 최대 3,000만원 (기존 대출 잔액 기준)</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>조건: 연 소득 4,500만원 이하, 신용점수 하위 20% (600점 이하)</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>상환 기간: 최대 5년</li>
                    <li className="flex gap-2"><span className="text-green-600">✓</span>장점: 저신용자도 가능, 정부 지원, 승인 확률 높음</li>
                    <li className="flex gap-2"><span className="text-red-600">✗</span>단점: 한도 제한, 심사 시간 오래 걸림 (평균 5-7일)</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-[#1A237E]/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1A237E] mb-3">3. 개인회생 (최후 수단)</h3>
                  <p className="text-muted-foreground mb-3">채무가 너무 많아 대환대출로 해결이 불가능한 경우의 법적 절차입니다.</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>조건: 총 채무 15억원 이하, 변제 능력 있음 (최저생계비 초과 소득)</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>기간: 5년 분할 상환 (법원 결정에 따라 3-5년)</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>효과: 원금 50-90% 감면, 이자 전액 면제, 추심 중단</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>비용: 법원 수수료 약 50-100만원, 변호사 비용 별도</li>
                    <li className="flex gap-2"><span className="text-green-600">✓</span>장점: 채무 대폭 감면, 추심 중단, 경제적 재기 가능</li>
                    <li className="flex gap-2"><span className="text-red-600">✗</span>단점: 신용등급 최하 (10등급), 금융거래 7년 제한, 직업 제한 가능</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4 mt-6">대환대출 비교는 <Link href="/blog/first-loan-guide-2030" className="text-[#1A237E] hover:underline">대출 상품 비교 가이드</Link>를 참고하세요.</p>
            </section>
            <section className="mb-10">
              <h2 id="application-process" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><CheckCircle className="w-7 h-7 text-[#1A237E]" />신청 절차</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">카드론 통합 대환대출</strong> 신청 절차는 다음과 같습니다. 서류 준비와 신청 시점이 승인에 큰 영향을 미칩니다.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">1</span><div><strong className="text-foreground block mb-1">현재 채무 정리:</strong><span className="text-muted-foreground">모든 카드론, 현금서비스 잔액과 금리 확인. 각 카드사에서 잔액증명서 발급 (최근 1개월 이내)</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">2</span><div><strong className="text-foreground block mb-1">대환 상품 비교:</strong><span className="text-muted-foreground">은행 3곳 이상 금리, 한도 비교. 온라인 대출비교 사이트 활용 (예: 대출비교닷컴, 금융감독원 대출비교)</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">3</span><div><strong className="text-foreground block mb-1">신청 및 승인:</strong><span className="text-muted-foreground">신분증, 재직증명서, 소득증빙(급여명세서 최근 3개월), 기존 대출 명세. 심사 기간 평균 3-5일</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">4</span><div><strong className="text-foreground block mb-1">기존 채무 상환:</strong><span className="text-muted-foreground">대환대출금으로 모든 카드론 일시 상환. 대출 실행일로부터 1-2일 내 자동 상환</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">5</span><div><strong className="text-foreground block mb-1">카드 한도 축소:</strong><span className="text-muted-foreground">재발 방지 위해 현금서비스 한도 0원으로 조정. 각 카드사 고객센터에 전화하여 한도 축소 요청</span></div></li>
              </ul>
              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">⏱️ 전체 소요 기간</p>
                <p className="text-muted-foreground mb-2"><strong>서류 준비:</strong> 1-2주 (각 카드사 잔액증명서 발급, 소득증빙 준비)</p>
                <p className="text-muted-foreground mb-2"><strong>대출 신청 및 심사:</strong> 3-5일</p>
                <p className="text-muted-foreground mb-2"><strong>대출 실행 및 기존 채무 상환:</strong> 1-2일</p>
                <p className="text-muted-foreground"><strong>총 소요 기간:</strong> 약 2-3주</p>
              </div>
            </section>
            <section className="mb-10">
              <h2 id="prevention" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><Shield className="w-7 h-7 text-[#1A237E]" />재발 방지 전략</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">대환대출 후 가장 중요한 것</strong>은 재발 방지입니다. 통계에 따르면 대환대출 후 1년 이내 재발률은 약 30%에 달합니다. 따라서 철저한 재발 방지 전략이 필요합니다.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">현금서비스 한도 0원:</strong><span className="text-muted-foreground">모든 카드 현금서비스 한도 없애기. 각 카드사 고객센터에 전화하여 즉시 처리 가능</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">카드론 한도 축소:</strong><span className="text-muted-foreground">카드론 한도를 최소한으로 줄이기. 필요시 카드론 기능 자체를 차단 요청</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">비상금 통장:</strong><span className="text-muted-foreground">월급의 10% 이상 자동이체로 비상금 마련. 최소 3개월 생활비(300-500만원) 목표</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">지출 관리:</strong><span className="text-muted-foreground">가계부 앱으로 매일 지출 기록. 월 예산 설정 및 초과 시 알림 설정</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">무료 상담:</strong><span className="text-muted-foreground">신용회복위원회 (1600-5500) 정기 상담. 3개월마다 채무 상태 점검</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">신용점수 모니터링:</strong><span className="text-muted-foreground">올크레딧, 크레딧포유 등에서 3개월마다 신용점수 확인. 이상 징후 조기 발견</span></div></li>
              </ul>
              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground"><strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 대환대출 후 6개월 동안은 추가 대출 신청을 절대 금지하세요. 신용조회가 많아지면 신용점수가 하락하고, 대환대출 상환에도 지장을 줄 수 있습니다.</p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">개인회생은 <Link href="/debt/personal-rehabilitation-bankruptcy" className="text-[#1A237E] hover:underline">개인회생 가이드</Link>를 참고하세요.</p>
            </section>
            <section className="mb-10">
              <h2 id="emergency-tips" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><DollarSign className="w-7 h-7 text-[#1A237E]" />긴급 자금 마련 팁</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">카드론 대신</strong> 다음 방법으로 긴급 자금을 마련하세요. 카드론은 고금리이므로 최후의 수단으로만 사용해야 합니다.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">적금 담보대출:</strong><span className="text-muted-foreground">적금 잔액의 95%, 금리 적금금리+1-2%p. 예: 적금 500만원이면 475만원 대출 가능, 금리 약 4-5%</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">회사 가불:</strong><span className="text-muted-foreground">다음 월급에서 공제, 무이자. 월급의 50% 이내, 최대 200만원 수준</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">가족 차용:</strong><span className="text-muted-foreground">이자 없이 빌리되 차용증 작성. 가족 간 신뢰 유지, 상환 계획 명확히</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">물건 판매:</strong><span className="text-muted-foreground">중고나라, 당근마켓 등 활용. 사용하지 않는 전자제품, 명품 등 즉시 현금화</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">단기 알바:</strong><span className="text-muted-foreground">주말 단기 아르바이트로 10-30만원 마련. 배달, 서빙, 물류 등 즉시 시작 가능</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">소액 대출:</strong><span className="text-muted-foreground">서민금융 햇살론 소액대출 (최대 200만원, 연 10-15%). 카드론보다 훨씬 낮은 금리</span></div></li>
              </ul>
              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">💰 긴급 자금 마련 방법 비교</p>
                <p className="text-muted-foreground mb-2"><strong>카드론:</strong> 금리 20-25%, 즉시 가능, 신용점수 하락</p>
                <p className="text-muted-foreground mb-2"><strong>적금 담보대출:</strong> 금리 4-5%, 즉시 가능, 신용점수 영향 적음</p>
                <p className="text-muted-foreground mb-2"><strong>햇살론 소액:</strong> 금리 10-15%, 2-3일 소요, 정부 지원</p>
                <p className="text-muted-foreground"><strong>회사 가불:</strong> 무이자, 즉시 가능, 가장 유리</p>
              </div>
            </section>
            <section className="mb-10">
              <h2 id="warning-signs" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><BarChart3 className="w-7 h-7 text-[#1A237E]" />돌려막기 위험 신호</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">다음 증상이 있다면</strong> 즉시 대환대출을 고려해야 합니다. 더 이상 미루면 채무가 통제 불가능한 수준에 도달할 수 있습니다.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">월 이자가 소득의 30% 이상:</strong><span className="text-muted-foreground">월급 300만원인데 이자만 90만원 이상 납부하는 경우</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">카드 3개 이상 사용:</strong><span className="text-muted-foreground">여러 카드로 이자를 막고 있는 경우</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">원금이 전혀 줄지 않음:</strong><span className="text-muted-foreground">6개월 이상 이자만 납부하고 원금은 그대로인 경우</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">총 채무가 계속 증가:</strong><span className="text-muted-foreground">매월 채무 총액이 늘어나는 경우</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">연체 경고 받음:</strong><span className="text-muted-foreground">카드사에서 연체 경고 문자나 전화를 받는 경우</span></div></li>
              </ul>
            </section>

            <div className="max-w-4xl">
              <ArticleFooter
                expertId="expert-debt-02"
                publishedDate={new Date().toISOString().split("T")[0]}
                lastUpdated={new Date().toISOString().split("T")[0]}
                shareTitle="카드론 돌려막기 탈출 방법"
                shareDescription="채무통합으로 이자 줄이기"
              />
            </div>
          </article>
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
      <div className="lg:hidden"><BlogShareButtons title="카드론 돌려막기 탈출 방법" description="채무통합으로 이자 줄이기" variant="bottom-fixed" /></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "카드론 돌려막기 늪에서 탈출하는 채무통합 방법", "description": "고금리 카드론을 돌려막고 있다면? 실제 대환대출 계산 사례로 이자를 줄이는 방법", "author": { "@type": "Person", "name": "한지우", "jobTitle": "채무조정 전문가" }, "publisher": { "@type": "Organization", "name": "돈워리", "logo": { "@type": "ImageObject", "url": "https://donworry.kr/og-image.png" } }, "datePublished": new Date().toISOString(), "dateModified": new Date().toISOString(), "image": "https://donworry.kr/og-image.png" }) }} />
    </div>
  );
}
