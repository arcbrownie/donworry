"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
import { BlogShareButtons } from "@/components/ui/BlogShareButtons";
import { Home, DollarSign, CheckCircle, Calculator, TrendingDown, Shield } from "lucide-react";

export default function MortgageRefinanceFeeExemption2026() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight max-w-4xl mx-auto break-words line-clamp-2">
              주택담보대출 갈아타기<br />중도상환수수료 면제 조건 2026
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              2026년 정부 지침에 따른 수수료 절감 완벽 가이드
            </p>
          </div>
        </div>
      </section>

      <main className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0 space-y-4">
            <TableOfContents />
            <div className="hidden lg:block">
              <BlogShareButtons
                title="주택담보대출 갈아타기 중도상환수수료 면제 조건 2026"
                description="2026년 정부 지침에 따른 수수료 절감 팁"
                variant="sticky"
              />
            </div>
          </div>

          <article className="flex-1 max-w-4xl prose prose-xl prose-slate max-w-none">
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">금리가 내려가면</strong> 주택담보대출을 갈아타는 것이 유리합니다. 
                하지만 중도상환수수료가 부담되어 망설이는 분들이 많습니다.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                이 글에서는 <strong className="text-[#1A237E]">2026년 정부 지침</strong>에 따른 중도상환수수료 면제 조건과 
                절감 방법을 최동현 대출 전문가가 상세히 알려드립니다. 
                갈아타기 손익은 <Link href="/cal/interest-saving" className="text-[#1A237E] hover:underline">대출 계산기</Link>로 확인하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="what-is-fee" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Home className="w-7 h-7 text-[#1A237E]" />
                중도상환수수료란?
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">중도상환수수료</strong>는 대출 약정 기간 전에 대출금을 상환할 때 
                금융기관에 지불하는 위약금입니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">수수료율:</strong>
                    <span className="text-muted-foreground">대출 잔액의 0.5~1.5% (금융기관, 대출 시기별 상이)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">부과 시점:</strong>
                    <span className="text-muted-foreground">대출 실행 후 3년 내 중도상환 시 (3년 초과 시 면제)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">예시 (대출 3억원):</strong>
                    <span className="text-muted-foreground">1% 수수료 = 300만원 부담</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 2026년부터 정부가 중도상환수수료 부담 완화 정책을 
                  시행하면서 면제 조건이 대폭 확대되었습니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="exemption-2026" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <CheckCircle className="w-7 h-7 text-[#1A237E]" />
                2026년 수수료 면제 조건
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">2026년 1월부터</strong> 다음 조건에 해당하면 중도상환수수료가 면제됩니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">1</span>
                  <div>
                    <strong className="text-foreground block mb-1">대출 실행 3년 경과:</strong>
                    <span className="text-muted-foreground">모든 주택담보대출 100% 면제 (기존 동일)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">2</span>
                  <div>
                    <strong className="text-foreground block mb-1">저금리 대환 (신규 확대):</strong>
                    <span className="text-muted-foreground">기존 대비 0.5%p 이상 금리 인하 시 수수료 면제</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">3</span>
                  <div>
                    <strong className="text-foreground block mb-1">생애최초 주택 구입자 (신규):</strong>
                    <span className="text-muted-foreground">생애최초 주택 구입 후 5년 내 대환 시 면제</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">4</span>
                  <div>
                    <strong className="text-foreground block mb-1">청년층 특례 (신규):</strong>
                    <span className="text-muted-foreground">만 34세 이하 청년, 대출 2년 경과 시 면제</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">5</span>
                  <div>
                    <strong className="text-foreground block mb-1">소득 감소 (기존):</strong>
                    <span className="text-muted-foreground">실직, 폐업 등으로 소득 30% 이상 감소 시 면제</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">6</span>
                  <div>
                    <strong className="text-foreground block mb-1">주택 매각 (기존):</strong>
                    <span className="text-muted-foreground">이사, 이혼 등 부득이한 사유로 주택 매각 시 면제</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                대출 갈아타기 전략은 
                <Link href="/blog/first-loan-guide-2030" className="text-[#1A237E] hover:underline mx-1">
                  대출 상품 비교 가이드
                </Link>
                에서 확인하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="calculation" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Calculator className="w-7 h-7 text-[#1A237E]" />
                갈아타기 손익 계산
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">중도상환수수료</strong>를 내더라도 갈아타는 것이 유리한지 계산해보겠습니다.
              </p>

              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 갈아타기 손익 계산 사례</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">대출 잔액: 3억원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">기존 금리: 연 5.0% (월 이자 125만원)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">신규 금리: 연 3.5% (월 이자 87.5만원)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">금리 절감: 월 37.5만원 (연 450만원)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">중도상환수수료: 3억 × 1% = <strong className="text-red-600">300만원</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground"><strong className="text-green-600">손익분기점: 8개월</strong> (300만 ÷ 37.5만)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">1년 후 순이익: 450만 - 300만 = <strong className="text-[#1A237E]">150만원</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 금리 차이가 1%p 이상이고 대출 잔액이 2억원 이상이라면 
                  중도상환수수료를 내고도 갈아타는 것이 유리합니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="application-process" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <DollarSign className="w-7 h-7 text-[#1A237E]" />
                대환대출 신청 절차
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">주택담보대출 갈아타기</strong> 절차는 다음과 같습니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">1</span>
                  <div>
                    <strong className="text-foreground block mb-1">현재 대출 조건 확인:</strong>
                    <span className="text-muted-foreground">금리, 잔액, 만기일, 중도상환수수료율 확인</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">2</span>
                  <div>
                    <strong className="text-foreground block mb-1">신규 대출 상품 비교:</strong>
                    <span className="text-muted-foreground">은행별 금리, 한도, 수수료 비교 (최소 3곳 이상)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">3</span>
                  <div>
                    <strong className="text-foreground block mb-1">대환 손익 계산:</strong>
                    <span className="text-muted-foreground">중도상환수수료 + 신규 대출 수수료 vs 금리 절감액</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">4</span>
                  <div>
                    <strong className="text-foreground block mb-1">신규 은행에 대환대출 신청:</strong>
                    <span className="text-muted-foreground">신분증, 등기부등본, 소득증빙, 기존 대출 잔액증명서</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">5</span>
                  <div>
                    <strong className="text-foreground block mb-1">심사 및 승인 (1주일):</strong>
                    <span className="text-muted-foreground">신규 은행에서 주택 및 신용 평가</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">6</span>
                  <div>
                    <strong className="text-foreground block mb-1">대환 실행:</strong>
                    <span className="text-muted-foreground">신규 은행이 기존 은행에 직접 상환 (본인 부담 없음)</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                대출 신청 방법은 
                <Link href="/blog/first-loan-guide-2030" className="text-[#1A237E] hover:underline">
                  첫 대출 가이드
                </Link>
                를 참고하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="cost-saving-tips" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <TrendingDown className="w-7 h-7 text-[#1A237E]" />
                수수료 절감 꿀팁
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">중도상환수수료</strong>를 최소화하는 전략입니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">3년 경과 대기:</strong>
                    <span className="text-muted-foreground">대출 실행일로부터 정확히 3년이 지날 때까지 기다리기</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">기존 은행에 금리 인하 협상:</strong>
                    <span className="text-muted-foreground">타행 이동 의사를 밝히고 금리 인하 요청 (0.2-0.5%p 가능)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">정부지원 상품 활용:</strong>
                    <span className="text-muted-foreground">안심전환대출, 적격대출 등은 수수료 면제 또는 할인</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">일부 상환 후 대환:</strong>
                    <span className="text-muted-foreground">대출 잔액을 줄인 후 갈아타면 수수료도 감소</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">연말 프로모션 활용:</strong>
                    <span className="text-muted-foreground">은행들이 12월에 수수료 할인 이벤트 진행</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 기존 은행에 타행 이동 의사를 밝히면 
                  금리 인하나 수수료 할인을 제안하는 경우가 많습니다. 반드시 협상을 시도하세요!
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="bank-comparison" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Home className="w-7 h-7 text-[#1A237E]" />
                은행별 대환대출 비교
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">주요 은행별</strong> 대환대출 조건을 비교했습니다.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-soft">
                  <thead>
                    <tr className="bg-[#1A237E]/10">
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold text-foreground">은행</th>
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold text-foreground">금리 (변동)</th>
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold text-foreground">취급수수료</th>
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold text-foreground">특징</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-foreground">KB국민은행</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">연 3.2-4.5%</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">0.2-0.3%</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">온라인 신청 가능</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors bg-slate-50">
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-foreground">신한은행</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">연 3.1-4.3%</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">0.2-0.4%</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">금리 협상 여지 있음</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-foreground">하나은행</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">연 3.0-4.2%</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">0.15-0.3%</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">수수료 할인 이벤트</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors bg-slate-50">
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-foreground">우리은행</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">연 3.2-4.4%</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">0.2-0.35%</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">고객 우대 금리</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-foreground">NH농협은행</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">연 3.3-4.6%</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">0.2-0.3%</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">농협 회원 우대</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 은행별 금리와 수수료는 시기마다 변동됩니다. 
                  최소 3곳 이상 비교 상담을 받고, 기존 은행에 타행 이동 의사를 밝혀 금리 인하를 요청하세요.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="detailed-calculation" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Calculator className="w-7 h-7 text-[#1A237E]" />
                상세 손익 계산 예시
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">실제 사례</strong>를 통해 갈아타기 손익을 더 구체적으로 계산해보겠습니다.
              </p>

              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 사례: 대출 잔액 2억원, 2년 경과</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">기존 금리: 연 4.8% (월 이자 80만원)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">신규 금리: 연 3.5% (월 이자 58.3만원)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">월 이자 절감: 80만 - 58.3만 = 21.7만원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">연 이자 절감: 21.7만 × 12 = 260.4만원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">중도상환수수료: 2억 × 1% = <strong className="text-red-600">200만원</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">신규 대출 수수료: 2억 × 0.3% = 60만원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">총 비용: 200만 + 60만 = 260만원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground"><strong className="text-green-600">손익분기점: 12개월</strong> (260만 ÷ 21.7만)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E]">•</span>
                    <span className="text-muted-foreground">3년 후 순이익: (260.4만 × 3) - 260만 = <strong className="text-[#1A237E]">521.2만원</strong></span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="caution" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Shield className="w-7 h-7 text-[#1A237E]" />
                주의사항
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">대환대출 시</strong> 다음 사항을 반드시 확인하세요.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">DSR 규제 확인:</strong>
                    <span className="text-muted-foreground">총부채원리금상환비율 40% 이하 유지 (초과 시 승인 불가)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">신규 대출 수수료:</strong>
                    <span className="text-muted-foreground">취급수수료, 인지세, 근저당 설정비 등 추가 비용 확인</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">변동금리 리스크:</strong>
                    <span className="text-muted-foreground">신규 대출이 변동금리라면 향후 금리 상승 시 부담 증가</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">세금 혜택 소멸:</strong>
                    <span className="text-muted-foreground">주담대 이자 소득공제는 신규 대출에만 적용 (중도 전환 시 혜택 소멸)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">만기 확인:</strong>
                    <span className="text-muted-foreground">신규 대출 만기가 기존보다 길어지면 총 이자 부담 증가 가능</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                DSR 계산은{" "}
                <Link href="/cal/debt-reduction" className="text-[#1A237E] hover:underline">
                  채무 계산기
                </Link>
                로 미리 확인하세요.
              </p>
            </section>
          </article>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <ArticleAuthor 
            expertId="expert-finance-01"
            publishedDate="2026-01-28"
            lastUpdated="2026-01-28"
          />

          <BlogShareButtons
            title="주택담보대출 갈아타기 중도상환수수료 면제 조건 2026"
            description="2026년 정부 지침에 따른 수수료 절감 팁"
            variant="inline"
            className="mt-8"
          />
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
      
      <div className="lg:hidden">
        <BlogShareButtons
          title="주택담보대출 갈아타기 중도상환수수료 면제 조건 2026"
          description="2026년 정부 지침에 따른 수수료 절감 팁"
          variant="bottom-fixed"
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "주택담보대출 갈아타기 중도상환수수료 면제 조건 2026",
            "description": "2026년 정부 지침에 따른 주택담보대출 갈아타기 중도상환수수료 면제 조건 완벽 정리. 수수료 절감 팁부터 대환대출 신청 방법까지 대출 전문가가 알려드립니다.",
            "author": {
              "@type": "Person",
              "name": "최동현",
              "jobTitle": "대출 전문가"
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
