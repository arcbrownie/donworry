"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
import { BlogShareButtons } from "@/components/ui/BlogShareButtons";
import { XCircle, CheckCircle, TrendingUp, FileText, DollarSign, Shield } from "lucide-react";

export default function FreelancerLoanAlternatives() {
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
              프리랜서 햇살론 유스<br />부결 시 대안 3가지
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              실제 부결 경험자들이 성공한 현실적인 대출 방법
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
                title="프리랜서 햇살론 유스 부결 시 대안 3가지"
                description="햇살론 유스 부결 후 시도할 수 있는 현실적인 대출 대안"
                variant="sticky"
              />
            </div>
          </div>

          <article className="flex-1 max-w-4xl prose prose-xl prose-slate max-w-none">
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">햇살론 유스</strong>는 저금리 청년 대출로 인기가 많지만, 
                프리랜서는 소득증빙이 어려워 부결되는 경우가 많습니다.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                이 글에서는 <strong className="text-[#1A237E]">햇살론 유스 부결 후</strong> 시도할 수 있는 
                현실적인 대출 대안 3가지를 최동현 대출 전문가가 알려드립니다. 
                대출 한도는 <Link href="/calculators/loan" className="text-[#1A237E] hover:underline">대출 계산기</Link>로 확인하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="why-rejected" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <XCircle className="w-7 h-7 text-[#1A237E]" />
                프리랜서가 부결되는 이유
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">햇살론 유스</strong>는 만 34세 이하 청년을 대상으로 하지만, 
                프리랜서는 소득 증빙이 까다로워 부결되기 쉽습니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">소득 증빙 부족:</strong>
                    <span className="text-muted-foreground">3개월 이상 건강보험료 납부 내역 필요 (프리랜서는 불규칙)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">재직 증명 불가:</strong>
                    <span className="text-muted-foreground">재직증명서나 급여명세서가 없음</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">신용등급 낮음:</strong>
                    <span className="text-muted-foreground">금융거래 이력이 적거나 단기 대출 많음</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">소득 기준 미달:</strong>
                    <span className="text-muted-foreground">연 소득 3,500만원 이하 증빙 어려움</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 프리랜서는 소득금액증명원을 발급받아도 
                  3개월 미만 근무 기록이면 부결될 가능성이 높습니다. 최소 6개월 이상의 안정적인 소득 이력이 필요합니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="alternative-1" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <CheckCircle className="w-7 h-7 text-[#1A237E]" />
                대안 1: 새희망홀씨 (신용회복위원회)
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">새희망홀씨</strong>는 햇살론보다 소득 증빙 조건이 완화된 서민금융 상품입니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">대출 한도:</strong>
                    <span className="text-muted-foreground">최대 3,000만원 (소득 대비 산정)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">금리:</strong>
                    <span className="text-muted-foreground">연 10.5-13.5% (햇살론보다 높지만 2금융권보다 낮음)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">자격 조건:</strong>
                    <span className="text-muted-foreground">연 소득 4,500만원 이하, 신용등급 하위 20% 이하도 가능</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">소득 증빙:</strong>
                    <span className="text-muted-foreground">소득금액증명원, 건강보험료 납부확인서, 통장 거래내역 (3개월)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">신청 방법:</strong>
                    <span className="text-muted-foreground">신용회복위원회 홈페이지 (www.ccrs.or.kr) 또는 전화 (1600-5500)</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">✅ 승인 포인트:</strong> 프리랜서 수입을 입금받는 통장의 
                  3개월 평균 입금액을 소득으로 인정받을 수 있습니다. 반드시 같은 통장을 꾸준히 사용하세요!
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                신용회복위원회 대출은 
                <Link href="/blog/credit-recovery-guide" className="text-[#1A237E] hover:underline mx-1">
                  신용 회복 가이드
                </Link>
                에서 자세히 확인하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="alternative-2" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <TrendingUp className="w-7 h-7 text-[#1A237E]" />
                대안 2: 사잇돌 대출 (은행권)
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">사잇돌 대출</strong>은 중·저신용자를 위한 은행권 대출로 
                프리랜서도 신청 가능합니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">대출 한도:</strong>
                    <span className="text-muted-foreground">최대 3,500만원</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">금리:</strong>
                    <span className="text-muted-foreground">연 8-15% (신용등급별 차등)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">자격 조건:</strong>
                    <span className="text-muted-foreground">연 소득 3,500만원 이하, 신용점수 하위 20% 이하</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">소득 증빙:</strong>
                    <span className="text-muted-foreground">건강보험료 납부확인서, 통장 거래내역 (6개월 권장)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">신청 은행:</strong>
                    <span className="text-muted-foreground">KB국민, 신한, 하나, 우리, NH농협 등 주요 시중은행</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">✅ 승인 포인트:</strong> 급여 통장이 없는 프리랜서는 
                  거래은행에서 6개월 이상 꾸준히 입출금 이력이 있으면 승인 확률이 높아집니다.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                은행별 대출 비교는 
                <Link href="/blog/loan-comparison" className="text-[#1A237E] hover:underline">
                  대출 상품 비교 가이드
                </Link>
                를 참고하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="alternative-3" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <DollarSign className="w-7 h-7 text-[#1A237E]" />
                대안 3: P2P 대출 (핀테크)
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">P2P 대출</strong>은 개인 투자자가 대출해주는 방식으로 
                소득 증빙이 유연한 편입니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">대출 한도:</strong>
                    <span className="text-muted-foreground">최대 2,000만원 (플랫폼별 상이)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">금리:</strong>
                    <span className="text-muted-foreground">연 12-20% (신용등급별 차등, 다소 높음)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">자격 조건:</strong>
                    <span className="text-muted-foreground">만 20세 이상, 신용등급 제한 완화</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">소득 증빙:</strong>
                    <span className="text-muted-foreground">통장 거래내역, 프리랜서 계약서, 세금계산서 등 유연하게 인정</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">주요 플랫폼:</strong>
                    <span className="text-muted-foreground">렌딧, 어니스트펀드, 피플펀드, 테라펀딩 등</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-l-4 border-red-600 p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-red-600">⚠️ 주의:</strong> P2P 대출은 금리가 높으므로 단기 자금에만 활용하세요. 
                  장기 대출은 이자 부담이 크므로 가능하면 1-2년 내 상환 계획을 세우세요.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="income-proof" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <FileText className="w-7 h-7 text-[#1A237E]" />
                프리랜서 소득 증빙 노하우
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">프리랜서가 대출 승인율</strong>을 높이려면 소득 증빙을 철저히 준비해야 합니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">같은 통장 사용:</strong>
                    <span className="text-muted-foreground">수입은 항상 같은 통장으로 입금받기 (최소 6개월)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">정기적인 입금:</strong>
                    <span className="text-muted-foreground">월 1-2회 정기적으로 입금되면 안정적 소득으로 인정</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">계약서 준비:</strong>
                    <span className="text-muted-foreground">클라이언트와의 업무 계약서, 세금계산서 보관</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">건강보험 지역가입:</strong>
                    <span className="text-muted-foreground">직장가입이 아니어도 꾸준히 납부하면 소득 증빙 가능</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">소득금액증명원:</strong>
                    <span className="text-muted-foreground">5월 종합소득세 신고 후 홈택스에서 발급 (전년도 소득 증빙)</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                신용점수 관리는 
                <Link href="/blog/credit-score-guide" className="text-[#1A237E] hover:underline">
                  신용점수 가이드
                </Link>
                를 참고하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="comparison-table" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <FileText className="w-7 h-7 text-[#1A237E]" />
                대안별 상세 비교표
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">3가지 대안</strong>을 한눈에 비교할 수 있도록 정리했습니다.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-soft">
                  <thead>
                    <tr className="bg-[#1A237E]/10">
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold text-foreground">항목</th>
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold text-foreground">새희망홀씨</th>
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold text-foreground">사잇돌대출</th>
                      <th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold text-foreground">P2P 대출</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-foreground">최대 한도</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">3,000만원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">3,500만원</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">2,000만원</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors bg-slate-50">
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-foreground">금리</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">연 10.5-13.5%</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">연 8-15%</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">연 12-20%</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-foreground">소득 증빙</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">통장 3개월</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">통장 6개월</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">유연함</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors bg-slate-50">
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-foreground">신용등급</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">하위 20% 가능</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">하위 20% 가능</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">완화</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-foreground">승인 속도</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">1-2주</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">3-7일</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">1-3일</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors bg-slate-50">
                      <td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-foreground">추천 대상</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">안정적 소득</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">거래은행 있음</td>
                      <td className="border border-[#1A237E]/20 px-4 py-3 text-muted-foreground">긴급 자금</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="real-case" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <TrendingUp className="w-7 h-7 text-[#1A237E]" />
                실제 성공 사례
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">햇살론 유스 부결 후</strong> 성공적으로 대출을 받은 프리랜서들의 실제 사례입니다.
              </p>

              <div className="bg-gradient-to-r from-[#1A237E]/5 to-[#4A148C]/5 p-6 rounded-lg my-6 border-l-4 border-[#1A237E]">
                <h3 className="font-bold text-foreground mb-3">사례 1: 디자이너 A씨 (30세, 연소득 2,800만원)</h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• 햇살론 유스 부결 사유: 건강보험료 납부 2개월만 기록</li>
                  <li>• 대안 선택: 새희망홀씨 (통장 6개월 이력 준비 후 신청)</li>
                  <li>• 승인 결과: 1,500만원 승인, 금리 연 11.5%</li>
                  <li>• 성공 포인트: 같은 통장에 6개월간 꾸준히 입금, 월 평균 230만원 입금 증빙</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#1A237E]/5 to-[#4A148C]/5 p-6 rounded-lg my-6 border-l-4 border-[#1A237E]">
                <h3 className="font-bold text-foreground mb-3">사례 2: 개발자 B씨 (28세, 연소득 4,200만원)</h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• 햇살론 유스 부결 사유: 신용점수 650점 (기준 미달)</li>
                  <li>• 대안 선택: 거래은행(KB) 사잇돌대출</li>
                  <li>• 승인 결과: 2,000만원 승인, 금리 연 9.5%</li>
                  <li>• 성공 포인트: 2년간 거래한 KB 통장에 수입 입금, 거래 이력 우수</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#1A237E]/5 to-[#4A148C]/5 p-6 rounded-lg my-6 border-l-4 border-[#1A237E]">
                <h3 className="font-bold text-foreground mb-3">사례 3: 작가 C씨 (32세, 연소득 1,800만원)</h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• 햇살론 유스 부결 사유: 소득 증빙 어려움 (불규칙한 수입)</li>
                  <li>• 대안 선택: P2P 대출 (렌딧)</li>
                  <li>• 승인 결과: 800만원 승인, 금리 연 15%</li>
                  <li>• 성공 포인트: 출판 계약서와 세금계산서 제출, 단기 상환 계획 명시</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="tips" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Shield className="w-7 h-7 text-[#1A237E]" />
                대출 승인율 높이는 팁
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">프리랜서 대출 승인율</strong>을 최대한 높이는 전략입니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">여러 곳 동시 신청 금지:</strong>
                    <span className="text-muted-foreground">1개월 내 3곳 이상 신청 시 다중채무자로 의심 (승인 불리)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">소액부터 시작:</strong>
                    <span className="text-muted-foreground">처음엔 500-1,000만원 소액 신청 후 한도 증액</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">거래은행 우선:</strong>
                    <span className="text-muted-foreground">급여(수입) 받는 은행에 먼저 신청 (거래 이력 유리)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">대출 용도 명확히:</strong>
                    <span className="text-muted-foreground">생활비, 사업 자금 등 구체적으로 설명</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">부결 후 6개월 대기:</strong>
                    <span className="text-muted-foreground">부결되면 6개월 후 재신청 (그 사이 신용 관리)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">신용카드 사용 관리:</strong>
                    <span className="text-muted-foreground">신용카드 한도 사용률 30% 이하 유지 (신용점수 상승)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">세금 신고 정확히:</strong>
                    <span className="text-muted-foreground">종합소득세 신고로 소득금액증명원 발급 가능 (5월 이후)</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                대출 부결 후 대처 방법은 
                <Link href="/blog/loan-rejection-solution" className="text-[#1A237E] hover:underline">
                  대출 부결 가이드
                </Link>
                를 참고하세요.
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
            title="프리랜서 햇살론 유스 부결 시 대안 3가지"
            description="햇살론 유스 부결 후 시도할 수 있는 현실적인 대출 대안"
            variant="inline"
            className="mt-8"
          />
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
      
      <div className="lg:hidden">
        <BlogShareButtons
          title="프리랜서 햇살론 유스 부결 시 대안 3가지"
          description="햇살론 유스 부결 후 시도할 수 있는 현실적인 대출 대안"
          variant="bottom-fixed"
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "프리랜서 햇살론 유스 부결 시 대안 3가지",
            "description": "프리랜서가 햇살론 유스에서 부결됐을 때 시도할 수 있는 현실적인 대출 대안 3가지. 실제 부결 경험자들이 성공한 방법을 대출 전문가가 알려드립니다.",
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
