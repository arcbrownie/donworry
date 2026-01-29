"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
import { BlogShareButtons } from "@/components/ui/BlogShareButtons";
import { TrendingUp, Calculator, Users, FileText, AlertCircle, CheckCircle } from "lucide-react";

export default function Rehabilitation2026Changes() {
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
              2026년 개인회생 변제금 산정<br />기준 변경 완벽 가이드
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              달라진 법원 기준을 숫자로 비교하여 정확히 알려드립니다
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
                <strong className="text-[#1A237E]">2026년 1월부터</strong> 개인회생 변제금 산정 기준이 대폭 변경되었습니다. 
                최저생계비 인상과 법원 기준 조정으로 인해 실제 변제금이 달라질 수 있습니다.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                이 글에서는 <strong className="text-[#1A237E]">2025년과 2026년 기준을 숫자로 비교</strong>하여 
                무엇이 어떻게 달라졌는지 윤서진 개인회생 전문가가 상세히 알려드립니다. 
                변제금 계산은 <Link href="/cal/debt-reduction" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline">채무 계산기</Link>로 확인하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="main-changes" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <TrendingUp className="w-7 h-7 text-[#1A237E]" />
                2026년 주요 변경 사항
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">2026년 개인회생 제도</strong>에서 가장 크게 변경된 3가지 핵심 사항입니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">최저생계비 4.2% 인상:</strong>
                    <span className="text-muted-foreground">1인 가구 기준 139만원 → 145만원 (6만원 인상)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">추가 차입 허가 기준 완화:</strong>
                    <span className="text-muted-foreground">300만원 → 500만원 (법원 허가 없이 가능)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">청산가치 산정 방식 변경:</strong>
                    <span className="text-muted-foreground">부동산 시가 반영률 80% → 70% (채무자 유리)</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 2025년 말에 개인회생을 신청한 경우, 
                  2026년 인가 결정 시 새로운 기준이 적용됩니다. 변제금이 줄어들 수 있으니 재계산을 요청하세요.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="cost-comparison" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Calculator className="w-7 h-7 text-[#1A237E]" />
                최저생계비 비교표 (2025 vs 2026)
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">가구원수별 최저생계비</strong>가 평균 4.2% 인상되었습니다. 
                다음은 2025년과 2026년 기준을 비교한 표입니다.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#1A237E]/10">
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold">가구원수</th>
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold">2025년</th>
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold">2026년</th>
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold">인상액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#1A237E]/20 px-4 py-3">1인</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3">1,390,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-[#1A237E]">1,450,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-green-600">+60,000원</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-[#1A237E]/20 px-4 py-3">2인</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3">2,250,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-[#1A237E]">2,350,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-green-600">+100,000원</td>
                    </tr>
                    <tr>
                      <td className="border border-[#1A237E]/20 px-4 py-3">3인</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3">2,920,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-[#1A237E]">3,050,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-green-600">+130,000원</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-[#1A237E]/20 px-4 py-3">4인</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3">3,590,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-[#1A237E]">3,750,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-green-600">+160,000원</td>
                    </tr>
                    <tr>
                      <td className="border border-[#1A237E]/20 px-4 py-3">5인</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3">4,260,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-[#1A237E]">4,450,000원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-green-600">+190,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                더 자세한 계산은{" "}
                <Link href="/blog/minimum-living-cost-calculator-2026" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline mx-1">
                  2026년 최저생계비 가이드
                </Link>
                에서 확인하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="repayment-impact" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Users className="w-7 h-7 text-[#1A237E]" />
                변제금에 미치는 영향
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                최저생계비가 인상되면 <strong className="text-[#1A237E]">가용소득이 줄어들어</strong> 
                월 변제금도 함께 감소합니다. 실제 사례로 비교해보겠습니다.
              </p>

              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 변제금 비교 사례 (3인 가구)</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">월 소득: 400만원 (변동 없음)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">2025년 변제금: 400만 - 292만 = <strong className="text-red-600">108만원</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">2026년 변제금: 400만 - 305만 = <strong className="text-green-600">95만원</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground"><strong className="text-[#1A237E]">월 13만원 감소</strong> (5년 기준 780만원 절감)</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                변제 계획 수립은 
                <Link href="/debt/personal-rehabilitation-bankruptcy" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline">
                  개인회생 가이드
                </Link>
                를 참고하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="clearance-value" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <FileText className="w-7 h-7 text-[#1A237E]" />
                청산가치 산정 변경
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">청산가치</strong>는 채무자가 파산할 경우 채권자들이 받을 수 있는 금액입니다. 
                2026년부터 부동산 평가 방식이 변경되어 채무자에게 유리해졌습니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">2025년 기준:</strong>
                    <span className="text-muted-foreground">부동산 시가 × 80% - 담보대출 = 청산가치</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">2026년 기준:</strong>
                    <span className="text-muted-foreground">부동산 시가 × 70% - 담보대출 = 청산가치</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">예시 (시가 5억 아파트):</strong>
                    <span className="text-muted-foreground">2025년 4억 → 2026년 3.5억 (5천만원 감소)</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 청산가치가 낮아지면 변제금 총액도 줄어듭니다. 
                  부동산 소유자는 2026년 기준이 더 유리하므로 신청 시기를 고려하세요.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="additional-loan" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <AlertCircle className="w-7 h-7 text-[#1A237E]" />
                추가 차입 허가 기준 완화
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">2026년부터</strong> 개인회생 진행 중 추가 차입 허가 기준이 대폭 완화되었습니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">2025년:</strong>
                    <span className="text-muted-foreground">300만원 초과 시 법원 허가 필요</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">2026년:</strong>
                    <span className="text-muted-foreground">500만원 초과 시 법원 허가 필요</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">의미:</strong>
                    <span className="text-muted-foreground">500만원 이하는 법원 허가 없이 긴급생계비 대출 가능</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                추가대출에 대한 자세한 정보는 
                <Link href="/blog/rehabilitation-12month-additional-loan" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline">
                  성실상환자 추가대출 가이드
                </Link>
                를 참고하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="detailed-impact" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Users className="w-7 h-7 text-[#1A237E]" />
                변경사항의 실제 영향 분석
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">2026년 변경사항</strong>이 실제 변제금에 미치는 영향을 구체적으로 분석했습니다.
              </p>

              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 영향 분석: 3인 가구, 월 소득 400만원</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#1A237E]/10">
                        <th className="border border-[#1A237E]/20 px-4 py-2 text-left font-bold">항목</th>
                        <th className="border border-[#1A237E]/20 px-4 py-2 text-left font-bold">2025년</th>
                        <th className="border border-[#1A237E]/20 px-4 py-2 text-left font-bold">2026년</th>
                        <th className="border border-[#1A237E]/20 px-4 py-2 text-left font-bold">차이</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-[#1A237E]/20 px-4 py-2">최저생계비</td>
                        <td className="border border-[#1A237E]/20 px-4 py-2">2,920,000원</td>
                        <td className="border border-[#1A237E]/20 px-4 py-2">3,050,000원</td>
                        <td className="border border-[#1A237E]/20 px-4 py-2 text-green-600">+130,000원</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-[#1A237E]/20 px-4 py-2">월 변제금</td>
                        <td className="border border-[#1A237E]/20 px-4 py-2">1,080,000원</td>
                        <td className="border border-[#1A237E]/20 px-4 py-2">950,000원</td>
                        <td className="border border-[#1A237E]/20 px-4 py-2 text-green-600">-130,000원</td>
                      </tr>
                      <tr>
                        <td className="border border-[#1A237E]/20 px-4 py-2">5년 총 변제금</td>
                        <td className="border border-[#1A237E]/20 px-4 py-2">64,800,000원</td>
                        <td className="border border-[#1A237E]/20 px-4 py-2">57,000,000원</td>
                        <td className="border border-[#1A237E]/20 px-4 py-2 text-green-600">-7,800,000원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 2026년 기준으로 변제금이 평균 10-15% 감소합니다. 
                  특히 가구원수가 많을수록 절감 효과가 큽니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="real-case-comparison" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <TrendingUp className="w-7 h-7 text-[#1A237E]" />
                실제 사례 비교
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">동일한 조건</strong>에서 2025년과 2026년 기준을 비교한 실제 사례입니다.
              </p>

              <div className="bg-gradient-to-r from-[#1A237E]/5 to-[#4A148C]/5 p-6 rounded-lg my-6 border-l-4 border-[#1A237E]">
                <h3 className="font-bold text-foreground mb-3">사례: 2인 가구, 월 소득 300만원, 채무 1억원</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">2025년 기준</p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 최저생계비: 225만원</li>
                      <li>• 월 변제금: 75만원</li>
                      <li>• 5년 총액: 4,500만원</li>
                      <li>• 채무 변제율: 45%</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A237E] mb-2">2026년 기준</p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 최저생계비: 235만원</li>
                      <li>• 월 변제금: 65만원</li>
                      <li>• 5년 총액: 3,900만원</li>
                      <li>• 채무 변제율: 39%</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-sm">
                  <strong className="text-[#1A237E]">절감 효과:</strong> 월 10만원 감소, 5년간 총 600만원 절감
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#1A237E]/5 to-[#4A148C]/5 p-6 rounded-lg my-6 border-l-4 border-[#1A237E]">
                <h3 className="font-bold text-foreground mb-3">사례: 4인 가구, 월 소득 500만원, 부동산 보유 (시가 3억)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">2025년 기준</p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 청산가치: 2.4억 (80%)</li>
                      <li>• 최저생계비: 359만원</li>
                      <li>• 월 변제금: 141만원</li>
                      <li>• 5년 총액: 8,460만원</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A237E] mb-2">2026년 기준</p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 청산가치: 2.1억 (70%)</li>
                      <li>• 최저생계비: 375만원</li>
                      <li>• 월 변제금: 125만원</li>
                      <li>• 5년 총액: 7,500만원</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-sm">
                  <strong className="text-[#1A237E]">절감 효과:</strong> 월 16만원 감소, 5년간 총 960만원 절감 (청산가치 감소 효과 포함)
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="action-plan" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <CheckCircle className="w-7 h-7 text-[#1A237E]" />
                상황별 대응 방법
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">2026년 기준 변경</strong>에 따라 상황별로 어떻게 대응해야 하는지 알려드립니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">개인회생 신청 예정:</strong>
                    <span className="text-muted-foreground">2026년 기준으로 변제금이 줄어드니 지금 신청하는 것이 유리</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">2025년 인가 후 변제 중:</strong>
                    <span className="text-muted-foreground">소득 감소 시 법원에 변제계획 변경 신청 (새 기준 적용 요청)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">부동산 보유자:</strong>
                    <span className="text-muted-foreground">청산가치 70% 적용으로 변제금 감소, 재평가 요청 가능</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">긴급 자금 필요:</strong>
                    <span className="text-muted-foreground">500만원 이하는 간편하게 대출 가능 (법원 허가 불필요)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">변제계획 변경 신청:</strong>
                    <span className="text-muted-foreground">2025년 기준으로 인가받았어도 소득 감소 시 새 기준 적용 가능</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                개인회생 완수 후 신용 회복은 
                <Link href="/debt/credit-recovery-committee" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline">
                  신용 회복 가이드
                </Link>
                를 참고하세요.
              </p>
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
            title="2026년 개인회생 변제금 산정 기준 변경 가이드"
            description="달라진 법원 기준을 숫자로 비교 분석"
            variant="inline"
            className="mt-8"
          />
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
      
      <div className="lg:hidden">
        <BlogShareButtons
          title="2026년 개인회생 변제금 산정 기준 변경 가이드"
          description="달라진 법원 기준을 숫자로 비교 분석"
          variant="bottom-fixed"
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "2026년 개인회생 변제금 산정 기준 변경 완벽 가이드",
            "description": "2026년부터 달라진 개인회생 변제금 산정 기준을 숫자로 비교 분석. 법원 기준 변경사항, 최저생계비 인상률, 변제금 계산 방법을 개인회생 전문가가 알려드립니다.",
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
