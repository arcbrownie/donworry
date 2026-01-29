"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
import { BlogShareButtons } from "@/components/ui/BlogShareButtons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calculator, Users, DollarSign, TrendingUp, FileText, Shield } from "lucide-react";
import { faqs } from "./faqs";

export default function MinimumLivingCostCalculator2026() {
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
        <div 
          className="h-full bg-gradient-to-r from-[#1A237E] via-[#4A148C] to-[#1A237E] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A237E] via-[#4A148C] to-[#1A237E] py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        <div className="container relative z-10">
          <div className="text-center text-white">
            <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-[1.3] max-w-4xl mx-auto break-words line-clamp-2">
              2026년 가구원수별 최저생계비<br />및 변제금 계산 완벽 가이드
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              내 가구에 맞는 최저생계비와 개인회생 변제금을 정확히 계산하는 방법
            </p>
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
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">개인회생 변제금</strong>을 계산할 때 가장 중요한 것이 바로 최저생계비입니다. 
                법원은 채무자가 최소한의 생활을 유지할 수 있도록 가구원수별 최저생계비를 보장하고, 
                남은 소득으로 변제금을 산정합니다.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                이 글에서는 <strong className="text-[#1A237E]">2026년 기준 가구원수별 최저생계비</strong>와 
                변제금 계산 방법을 윤서진 개인회생 전문가가 상세히 알려드립니다. 
                정확한 변제금은 <Link href="/cal/debt-reduction" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline">채무 계산기</Link>로 
                확인해보세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="what-is-minimum-cost" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Calculator className="w-7 h-7 text-[#1A237E]" />
                최저생계비란?
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">최저생계비</strong>는 개인회생 절차에서 채무자와 가족이 
                기본적인 생활을 유지하는 데 필요한 최소 비용입니다. 법원은 이 금액을 보장하고, 
                남은 소득으로 변제금을 산정합니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">법적 근거:</strong>
                    <span className="text-muted-foreground">채무자 회생 및 파산에 관한 법률 제579조</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">기준 산정:</strong>
                    <span className="text-muted-foreground">보건복지부 발표 중위소득의 일정 비율 (약 60-70%)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">포함 항목:</strong>
                    <span className="text-muted-foreground">식비, 주거비, 광열비, 교통비, 통신비, 의료비, 교육비 등</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 최저생계비는 매년 조정됩니다. 
                  2026년 기준은 2025년 대비 약 3-5% 인상되었으며, 가구원수가 많을수록 1인당 비용은 감소하는 구조입니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="cost-table-2026" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Users className="w-7 h-7 text-[#1A237E]" />
                2026년 가구원수별 최저생계비 기준표
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">2026년 기준</strong> 가구원수별 최저생계비는 다음과 같습니다. 
                이 금액은 법원마다 약간씩 다를 수 있으나, 대부분 이 기준을 따릅니다.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-soft">
                  <thead>
                    <tr className="bg-[#1A237E]/10">
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold text-foreground">가구원수</th>
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold text-foreground">월 최저생계비</th>
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold text-foreground">연 최저생계비</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">1인 가구</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-[#1A237E]">1,450,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">17,400,000원</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors bg-slate-50">
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">2인 가구</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-[#1A237E]">2,350,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">28,200,000원</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">3인 가구</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-[#1A237E]">3,050,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">36,600,000원</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors bg-slate-50">
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">4인 가구</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-[#1A237E]">3,750,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">45,000,000원</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">5인 가구</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-[#1A237E]">4,450,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">53,400,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                6인 이상 가구는 5인 가구 기준에 1인당 약 700,000원씩 추가됩니다.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="repayment-calculation" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <DollarSign className="w-7 h-7 text-[#1A237E]" />
                변제금 계산 공식
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">개인회생 변제금</strong>은 다음 공식으로 계산됩니다. 
                기본 원칙은 "가용소득 = 총소득 - 최저생계비"입니다.
              </p>

              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📐 변제금 계산 공식</p>
                <p className="text-muted-foreground mb-2">
                  <strong>월 변제금 = (월 소득 - 최저생계비) × 100%</strong>
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>총 변제금 = 월 변제금 × 변제 기간 (36개월 or 60개월)</strong>
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                예를 들어, 3인 가구에서 월 소득이 400만원이라면:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">월 소득:</strong>
                    <span className="text-muted-foreground">4,000,000원</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">최저생계비 (3인):</strong>
                    <span className="text-muted-foreground">3,050,000원</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">월 변제금:</strong>
                    <span className="text-muted-foreground">4,000,000원 - 3,050,000원 = 950,000원</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">총 변제금 (5년):</strong>
                    <span className="text-muted-foreground">950,000원 × 60개월 = 57,000,000원</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                변제 계획 수립은 
                <Link href="/debt/personal-rehabilitation-bankruptcy" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline mx-1">
                  개인회생 가이드
                </Link>
                에서 자세히 확인할 수 있습니다.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="special-cases" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <FileText className="w-7 h-7 text-[#1A237E]" />
                특수 상황별 최저생계비 조정
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">특수한 상황</strong>에서는 법원이 최저생계비를 조정할 수 있습니다. 
                다음과 같은 경우 추가 비용이 인정될 수 있습니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">중증 질환 치료비:</strong>
                    <span className="text-muted-foreground">암, 희귀병 등 고액 의료비가 필요한 경우 월 50-100만원 추가 인정</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">장애인 부양:</strong>
                    <span className="text-muted-foreground">중증 장애인 가족 부양 시 월 30-50만원 추가 인정</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">대학생 자녀 교육비:</strong>
                    <span className="text-muted-foreground">1인당 월 40-60만원 한도 내 추가 인정 가능</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">고령 부모 부양:</strong>
                    <span className="text-muted-foreground">70세 이상 부모 부양 시 월 20-30만원 추가 인정</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">⚠️ 주의:</strong> 추가 비용 인정을 받으려면 
                  진단서, 장애인증명서, 재학증명서 등 증빙 서류를 반드시 제출해야 합니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="income-calculation" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <TrendingUp className="w-7 h-7 text-[#1A237E]" />
                소득 인정 범위
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                변제금을 계산할 때 <strong className="text-[#1A237E]">소득 인정 범위</strong>도 중요합니다. 
                법원은 다음과 같은 소득을 합산하여 총소득을 산정합니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">근로소득:</strong>
                    <span className="text-muted-foreground">급여, 상여금, 수당 등 (세전 기준)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">사업소득:</strong>
                    <span className="text-muted-foreground">자영업, 프리랜서 수입 (필요경비 제외 후)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">재산소득:</strong>
                    <span className="text-muted-foreground">임대료, 이자, 배당금 등</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">배우자 소득:</strong>
                    <span className="text-muted-foreground">배우자가 있는 경우 배우자 소득도 합산 (100%)</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                소득 증빙 방법은 
                <Link href="/debt/guide" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline">
                  채무조정 절차 가이드
                </Link>
                를 참고하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="detailed-examples" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Calculator className="w-7 h-7 text-[#1A237E]" />
                상세 계산 예시
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">실제 사례</strong>를 통해 변제금 계산 방법을 더 자세히 알아보겠습니다.
              </p>

              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 사례 1: 2인 가구 (부부, 월 소득 350만원)</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">월 소득: 3,500,000원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">최저생계비 (2인): 2,350,000원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">월 변제금: 3,500,000 - 2,350,000 = <strong className="text-[#1A237E]">1,150,000원</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">5년 총 변제금: 1,150,000 × 60개월 = <strong className="text-[#1A237E]">69,000,000원</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 사례 2: 4인 가구 (부부 + 자녀 2명, 월 소득 500만원)</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">월 소득: 5,000,000원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">최저생계비 (4인): 3,750,000원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">대학생 자녀 교육비 추가: +500,000원 (1인당)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">인정 최저생계비: 3,750,000 + 500,000 = 4,250,000원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">월 변제금: 5,000,000 - 4,250,000 = <strong className="text-[#1A237E]">750,000원</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">5년 총 변제금: 750,000 × 60개월 = <strong className="text-[#1A237E]">45,000,000원</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 사례 3: 1인 가구 (중증 질환자, 월 소득 250만원)</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">월 소득: 2,500,000원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">최저생계비 (1인): 1,450,000원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">의료비 추가 인정: +800,000원 (진단서 증빙)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">인정 최저생계비: 1,450,000 + 800,000 = 2,250,000원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">월 변제금: 2,500,000 - 2,250,000 = <strong className="text-[#1A237E]">250,000원</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">5년 총 변제금: 250,000 × 60개월 = <strong className="text-[#1A237E]">15,000,000원</strong></span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="regional-differences" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Users className="w-7 h-7 text-[#1A237E]" />
                지역별 최저생계비 차이
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">법원마다</strong> 최저생계비 기준이 약간씩 다를 수 있습니다. 
                수도권과 지방, 대도시와 중소도시 간 차이가 있습니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">서울/경기:</strong>
                    <span className="text-muted-foreground">표준 최저생계비 + 주거비 10-15% 추가 인정 (월 20-30만원)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">광역시:</strong>
                    <span className="text-muted-foreground">표준 최저생계비 적용 (부산, 대구, 인천 등)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">중소도시:</strong>
                    <span className="text-muted-foreground">표준 최저생계비 적용 (일부 법원은 5% 감액 가능)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">법원별 차이:</strong>
                    <span className="text-muted-foreground">같은 지역이라도 관할 법원에 따라 5-10% 차이 가능</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 개인회생 신청 전 관할 법원의 최저생계비 기준을 
                  변호사나 법원에 문의하여 확인하세요. 지역별 차이가 있어 변제금이 달라질 수 있습니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="tips" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Shield className="w-7 h-7 text-[#1A237E]" />
                변제금 부담 줄이는 팁
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">변제금 부담</strong>을 줄이기 위해 다음 전략을 활용하세요. 
                합법적인 범위 내에서 최저생계비를 최대한 인정받는 것이 중요합니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">가구원 증명:</strong>
                    <span className="text-muted-foreground">주민등록등본에 모든 가구원이 등재되어 있는지 확인</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">추가 비용 증빙:</strong>
                    <span className="text-muted-foreground">의료비, 교육비 등 특수 상황 증빙 서류 철저히 준비</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">소득 조정:</strong>
                    <span className="text-muted-foreground">배우자가 일시적으로 실직 상태라면 이를 증명하여 소득 합산 제외</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">변호사 상담:</strong>
                    <span className="text-muted-foreground">복잡한 경우 개인회생 전문 변호사의 도움 받기</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">주거비 증빙:</strong>
                    <span className="text-muted-foreground">월세 계약서, 관리비 고지서 등으로 주거비 추가 인정 요청</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                개인회생 완수 후 신용 회복에 대한 자세한 정보는 
                <Link href="/blog/personal-rehabilitation-2026" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline">
                  개인회생 가이드
                </Link>
                를 참고하세요.
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

        <div className="max-w-4xl mx-auto mt-12">
          <ArticleAuthor 
            expertId="expert-debt-01"
            publishedDate="2026-01-28"
            lastUpdated="2026-01-28"
          />

          <BlogShareButtons
            title="2026년 가구원수별 최저생계비 및 변제금 계산 가이드"
            description="내 가구에 맞는 최저생계비와 개인회생 변제금 계산 방법"
            variant="inline"
            className="mt-8"
          />
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
      
      <div className="lg:hidden">
        <BlogShareButtons
          title="2026년 가구원수별 최저생계비 및 변제금 계산 가이드"
          description="내 가구에 맞는 최저생계비와 개인회생 변제금 계산 방법"
          variant="bottom-fixed"
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "2026년 가구원수별 최저생계비 및 변제금 계산 가이드",
            "description": "2026년 기준 가구원수별 최저생계비와 개인회생 변제금 계산 방법. 1인~5인 가구 최저생계비 기준표와 변제금 산정 공식을 상세히 알려드립니다.",
            "author": {
              "@type": "Person",
              "name": "윤서진",
              "jobTitle": "개인회생 전문가"
            },
            "publisher": {
              "@type": "Organization",
              "name": "돈워리",
              "logo": {
                "@type": "ImageObject",
                "url": "https://donworry.kr/og-image.png"
              }
            },
            "datePublished": "2026-01-28",
            "dateModified": "2026-01-28",
            "image": "https://donworry.kr/og-image.png"
          })
        }}
      />
    </div>
  );
}
