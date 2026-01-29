"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
import { ShareButtons } from "@/components/ShareButtons";
import { BlogShareButtons } from "@/components/ui/BlogShareButtons";
import { Users, FileText, CheckCircle, Building2, AlertCircle, Shield, Calculator, TrendingDown, Phone } from "lucide-react";

export default function UnemployedGovernmentRefinanceLoan() {
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
            <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-[1.3]">무직자 정부지원 대환대출<br />서민금융진흥원 신청법</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">공신력 있는 기관 통한 무직자 대환대출 완벽 가이드</p>
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
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">무직 상태</strong>에서도 고금리 대출을 저금리로 갈아탈 수 있을까요? 많은 분들이 무직자는 대환대출이 불가능하다고 생각하지만, 정부지원 대환대출을 활용하면 가능합니다.</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">실제로 서민금융진흥원 자료에 따르면, 무직자 대환대출 승인 건수는 연간 약 3만 건에 달합니다. 이 글에서는 <strong className="text-[#1A237E]">서민금융진흥원</strong> 등 공신력 있는 기관의 무직자 대환대출 신청 방법을 최동현 대출 전문가가 실제 사례와 함께 상세히 알려드립니다. 대출 한도는 <Link href="/calculators/loan" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline">대출 계산기</Link>로 확인하세요.</p>
            </section>
            <section className="mb-10">
              <h2 id="possibility" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><Users className="w-7 h-7 text-[#1A237E]" />무직자도 대환대출 가능한가?</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">결론부터 말하면 가능</strong>합니다. 단, 일반 은행이 아닌 정부지원 서민금융 상품을 활용해야 합니다. 일반 은행은 소득 증빙이 필수이므로 무직자는 승인이 어렵습니다.</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">하지만 서민금융진흥원 햇살론이나 신용회복위원회 새희망홀씨는 무직자도 배우자 소득, 퇴직금, 실업급여, 재산 등을 상환능력 증빙으로 인정합니다. 금융감독원 통계에 따르면, 무직자 대환대출 승인률은 약 35% 수준입니다.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">가능한 경우:</strong><span className="text-muted-foreground">실직 전 대출이 있고, 퇴직금·실업급여 등 일시 소득 있음. 배우자 소득이 월 200만원 이상인 경우 승인 확률 높음</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">핵심 요건:</strong><span className="text-muted-foreground">상환 능력 증명 (배우자 소득, 재산, 일시 소득). 월 상환액의 2배 이상 소득 필요</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">대상 대출:</strong><span className="text-muted-foreground">고금리(15% 이상) 기존 대출을 저금리로 전환. 카드론, 현금서비스, 사금융 대출 포함</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">주의:</strong><span className="text-muted-foreground">완전 무소득·무재산자는 승인 어려움. 최소한 배우자 소득이나 재산 중 하나는 필요</span></div></li>
              </ul>
              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 실제 사례: 무직자 대환대출 성공</p>
                <p className="text-muted-foreground mb-2">D씨(45세)는 실직 후 기존 카드론 1,500만원(연 22%)을 상환하기 어려워했습니다. 배우자 월급 350만원과 퇴직금 500만원을 증빙하여 햇살론 대환대출(연 12%)을 신청했고, 승인되었습니다.</p>
                <p className="text-muted-foreground">월 이자는 27.5만원에서 15만원으로 줄어 연 150만원을 절감할 수 있었습니다. 대환 후 6개월 만에 재취업하여 정상 상환 중입니다.</p>
              </div>
            </section>
            <section className="mb-10">
              <h2 id="shinhan-loan" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><Building2 className="w-7 h-7 text-[#1A237E]" />서민금융진흥원 대환대출</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">서민금융진흥원 햇살론</strong>은 무직자도 신청 가능한 대표 상품입니다. 2026년 기준 햇살론은 전국 18개 은행을 통해 운영되며, 연간 약 50만 건의 대출이 실행됩니다.</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">햇살론의 가장 큰 장점은 일반 대출과 달리 소득 증빙이 유연하다는 점입니다. 배우자 소득, 퇴직금, 실업급여, 부동산 등을 상환능력으로 인정하므로 무직자도 신청할 수 있습니다.</p>
              <div className="bg-white border-2 border-[#1A237E]/20 rounded-lg p-6 my-6">
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">햇살론 대환대출</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>한도: 최대 2,000만원 (기존 대출 잔액 기준)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>금리: 연 10-20% (신용등급별 차등, 기존 대출보다 평균 5-10%p 낮음)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>조건: 연 소득 4,500만원 이하, 신용점수 하위 20% (600점 이하)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>무직자 특례: 배우자 소득(월 200만원 이상), 퇴직금, 실업급여로 상환능력 인정</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>상환 기간: 최대 5년 (원리금 균등분할 상환)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>신청: 전국 은행 영업점 또는 서민금융통합지원센터 (1397)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>심사 기간: 서류 제출 후 평균 3-5일</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground"><strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 햇살론은 기존 20% 이상 고금리 대출을 10-15%로 낮춰줍니다. 예를 들어 1,000만원 대출의 경우, 월 이자만 줄여도 연 100만원 이상 절감 가능합니다. 다만 대환 수수료(대출금의 0.5-1%)가 있으므로 이를 고려해 계산해야 합니다.</p>
              </div>
              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">💰 이자 절감 계산 예시</p>
                <p className="text-muted-foreground mb-2"><strong>기존 대출:</strong> 1,000만원, 연 22%, 월 이자 18.3만원</p>
                <p className="text-muted-foreground mb-2"><strong>대환 후:</strong> 1,000만원, 연 12%, 월 이자 10만원</p>
                <p className="text-muted-foreground mb-2"><strong>월 절감액:</strong> 8.3만원</p>
                <p className="text-muted-foreground"><strong>연 절감액:</strong> 약 100만원 (대환 수수료 10만원 제외 시 90만원 순 절감)</p>
              </div>
            </section>
            <section className="mb-10">
              <h2 id="credit-recovery" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><CheckCircle className="w-7 h-7 text-[#1A237E]" />신용회복위원회 새희망홀씨</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">신용회복위원회</strong>도 무직자 대환을 지원합니다. 새희망홀씨는 채무조정 이력이 있거나 저신용자인 경우 신청할 수 있는 상품으로, 햇살론보다 한도가 높고 금리가 낮습니다.</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">다만 신용회복위원회에 채무조정 신청을 했거나, 과거 채무조정 이력이 있는 경우에만 신청 가능합니다. 무직자도 배우자 연대보증으로 신청할 수 있으며, 승인률은 약 40% 수준입니다.</p>
              <div className="bg-white border-2 border-[#1A237E]/20 rounded-lg p-6 my-6">
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">새희망홀씨</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>한도: 최대 3,000만원 (햇살론보다 높음)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>금리: 연 9-12% (햇살론보다 낮음)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>조건: 채무조정 이력자, 저신용자, 연 소득 5,000만원 이하</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>무직자: 배우자 연대보증으로 가능 (배우자 소득 월 250만원 이상 권장)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>상환 기간: 최대 7년 (햇살론보다 길어 월 상환액 부담 적음)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>신청: 신용회복위원회 (1600-5500) 또는 온라인 신청</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>심사 기간: 서류 제출 후 평균 5-7일</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground"><strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 새희망홀씨는 햇살론보다 금리가 낮고 한도가 높지만, 채무조정 이력이 있어야 신청 가능합니다. 과거 채무조정 경험이 있다면 새희망홀씨를 우선 고려하세요.</p>
              </div>
            </section>
            <section className="mb-10">
              <h2 id="application" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><FileText className="w-7 h-7 text-[#1A237E]" />신청 절차 및 필요 서류</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">무직자 대환대출</strong> 신청은 다음 단계로 진행됩니다. 일반 대출과 달리 상환능력 증빙이 복잡하므로 서류 준비에 시간이 걸릴 수 있습니다.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">1</span><div><strong className="text-foreground block mb-1">상담 신청:</strong><span className="text-muted-foreground">서민금융통합지원센터 (1397) 전화 상담 또는 은행 영업점 방문. 무직자 대환 가능 여부 사전 확인</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">2</span><div><strong className="text-foreground block mb-1">필요 서류 준비:</strong><span className="text-muted-foreground">신분증, 기존 대출 명세, 상환능력 증빙 (배우자 소득, 퇴직금, 실업급여 등). 서류 준비 기간 평균 1-2주</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">3</span><div><strong className="text-foreground block mb-1">서류 제출 및 심사:</strong><span className="text-muted-foreground">은행 또는 신용회복위원회 방문/온라인 제출. 심사 기간 평균 3-7일</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">4</span><div><strong className="text-foreground block mb-1">승인 및 실행:</strong><span className="text-muted-foreground">승인 시 기존 대출 자동 상환, 새 대출 실행. 실행일로부터 다음 달부터 상환 시작</span></div></li>
              </ul>
              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📋 필수 서류 (무직자)</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-[#1A237E]">1.</span>신분증 (주민등록증 또는 운전면허증)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">2.</span>기존 대출 잔액증명서 (모든 금융기관에서 발급, 최근 1개월 이내)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">3.</span>퇴직금 증명 또는 실업급여 수급 확인서 (퇴직 후 6개월 이내 권장)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">4.</span>배우자 소득증빙 (재직증명서, 급여명세서 최근 3개월, 건강보험 자격득실확인서)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">5.</span>재산 증명 (부동산 등기부등본, 예금 잔액증명서, 주식 잔고증명서 등)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">6.</span>가족관계증명서 (배우자 연대보증 시, 최근 1개월 이내)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">7.</span>구직활동 증명 (고용센터 구직신청 확인서, 면접 확인서 등, 선택사항)</li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">대출 비교는 <Link href="/blog/loan-comparison" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline">대출 상품 비교 가이드</Link>를 참고하세요.</p>
            </section>
            <section className="mb-10">
              <h2 id="approval-tips" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><Shield className="w-7 h-7 text-[#1A237E]" />승인율 높이는 팁</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">무직자 대환대출 승인률</strong>을 높이기 위한 실전 팁입니다. 서류 준비와 신청 시점이 승인에 큰 영향을 미칩니다.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">배우자 소득 활용:</strong><span className="text-muted-foreground">배우자 소득으로 상환능력 증명. 월 200만원 이상이면 승인 확률 높음. 배우자 재직증명서와 급여명세서 필수</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">퇴직금 활용:</strong><span className="text-muted-foreground">최근 퇴직금 수령했다면 증명서 제출. 퇴직금 500만원 이상이면 상환능력으로 인정</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">실업급여:</strong><span className="text-muted-foreground">실업급여 수급 중이면 수급확인서 제출. 월 150만원 이상 수급 시 상환능력 인정</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">부동산:</strong><span className="text-muted-foreground">주택이나 토지 소유 시 등기부등본 제출. 부동산 가액의 30%까지 담보로 인정</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">재취업 계획:</strong><span className="text-muted-foreground">구직활동 증명, 면접 확인서 등 제출. 재취업 예정 시 상환능력으로 추가 고려</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">신청 시점:</strong><span className="text-muted-foreground">퇴직 후 3개월 이내 신청 권장. 실업급여 수급 중일 때 신청하면 승인 확률 높음</span></div></li>
              </ul>
              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 승인 확률 높이는 조합</p>
                <p className="text-muted-foreground mb-2"><strong>최적 조합:</strong> 배우자 소득(월 300만원 이상) + 퇴직금(500만원 이상) → 승인 확률 70% 이상</p>
                <p className="text-muted-foreground mb-2"><strong>보통 조합:</strong> 배우자 소득(월 200만원 이상) 또는 실업급여(월 150만원 이상) → 승인 확률 40-50%</p>
                <p className="text-muted-foreground"><strong>어려운 조합:</strong> 재산만 있고 소득 없음 → 승인 확률 20% 이하</p>
              </div>
            </section>
            <section className="mb-10">
              <h2 id="calculation" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><Calculator className="w-7 h-7 text-[#1A237E]" />대환대출 손익 계산</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">대환대출을 결정</strong>하기 전에 반드시 손익을 계산해야 합니다. 대환 수수료와 기존 대출 중도상환수수료를 고려해야 합니다.</p>
              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">💰 대환 손익 계산 예시</p>
                <p className="text-muted-foreground mb-2"><strong>기존 대출:</strong> 1,500만원, 연 20%, 잔여 기간 3년, 중도상환수수료 1%</p>
                <p className="text-muted-foreground mb-2"><strong>대환대출:</strong> 1,500만원, 연 12%, 대환 수수료 0.8%</p>
                <p className="text-muted-foreground mb-2"><strong>기존 대출 남은 이자:</strong> 약 450만원 (3년 기준)</p>
                <p className="text-muted-foreground mb-2"><strong>대환대출 총 이자:</strong> 약 270만원 (3년 기준)</p>
                <p className="text-muted-foreground mb-2"><strong>이자 절감액:</strong> 180만원</p>
                <p className="text-muted-foreground mb-2"><strong>수수료 합계:</strong> 중도상환수수료 15만원 + 대환 수수료 12만원 = 27만원</p>
                <p className="text-muted-foreground font-bold"><strong>순 절감액:</strong> 180만원 - 27만원 = 153만원</p>
                <p className="text-muted-foreground mt-4 text-sm">※ 대환 수수료는 대출금의 0.5-1% 수준이며, 기존 대출 중도상환수수료는 금융기관별로 상이합니다.</p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">대출 계산은 <Link href="/calculators/loan" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline">대출 계산기</Link>를 활용하세요.</p>
            </section>
            <section className="mb-10">
              <h2 id="caution" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><AlertCircle className="w-7 h-7 text-[#1A237E]" />주의사항</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">무직자 대환대출</strong> 신청 시 주의해야 할 사항들입니다. 한 번의 실수도 승인에 큰 영향을 미칠 수 있습니다.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">대출 브로커 주의:</strong><span className="text-muted-foreground">정부 상품은 직접 신청 가능, 고액 수수료 요구 시 사기. 서민금융통합지원센터(1397)는 무료 상담 제공</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">상환 계획:</strong><span className="text-muted-foreground">재취업 전까지 배우자 소득이나 일시금으로 상환 가능한지 계산. 월 상환액이 소득의 30% 이하 권장</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">연체 금지:</strong><span className="text-muted-foreground">대환 후 연체 시 재지원 불가, 신용등급 추락. 자동이체 필수 설정</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">추가 대출 자제:</strong><span className="text-muted-foreground">대환 후 6개월은 추가 대출 신청 자제. 신용조회 과다로 점수 하락</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">서류 정확성:</strong><span className="text-muted-foreground">모든 서류는 최근 1-3개월 이내 발급분만 유효. 오래된 서류는 재발급 필요</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">재취업 후:</strong><span className="text-muted-foreground">재취업 후 소득증빙 제출 시 한도 증액 가능. 정상 상환 시 신용점수도 상승</span></div></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">채무 관리는 <Link href="/blog/debt-consolidation-guide" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline">채무통합 가이드</Link>를 참고하세요.</p>
            </section>
            <section className="mb-10">
              <h2 id="contact" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><Phone className="w-7 h-7 text-[#1A237E]" />상담 및 신청 문의</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">무직자 대환대출</strong> 상담은 다음 기관에서 받을 수 있습니다. 모든 상담은 무료이며, 사전 준비사항을 안내받을 수 있습니다.</p>
              <div className="bg-white border-2 border-[#1A237E]/20 rounded-lg p-6 my-6">
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">상담 기관</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>서민금융통합지원센터: 1397 (무료, 평일 09:00-18:00)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>신용회복위원회: 1600-5500 (무료, 평일 09:00-18:00)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>각 은행 영업점: 햇살론 신청 가능 (은행별 상이)</li>
                  <li className="flex gap-2"><span className="text-[#1A237E]">•</span>온라인 신청: 서민금융통합지원센터 홈페이지 (www.smfc.or.kr)</li>
                </ul>
              </div>
            </section>
            <ArticleAuthor expertId="expert-finance-01" publishedDate={new Date().toISOString().split('T')[0]} lastUpdated={new Date().toISOString().split('T')[0]} />
          </article>
        </div>
        <div className="max-w-4xl mx-auto mt-8 flex justify-end">
          <ShareButtons className="py-4 border-t border-border/30" />
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
      <div className="lg:hidden"><BlogShareButtons title="무직자 정부지원 대환대출 신청법" description="서민금융진흥원 대환대출 가이드" variant="bottom-fixed" /></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "무직자 정부지원 대환대출 서민금융진흥원 신청법", "description": "무직자도 대환대출이 가능할까? 서민금융진흥원 등 공신력 있는 기관의 무직자 대환대출 신청 방법", "author": { "@type": "Person", "name": "최동현", "jobTitle": "대출 전문가" }, "publisher": { "@type": "Organization", "name": "돈워리", "logo": { "@type": "ImageObject", "url": "https://donworry.kr/og-image.png" } }, "datePublished": new Date().toISOString(), "dateModified": new Date().toISOString(), "image": "https://donworry.kr/og-image.png" }) }} />
    </div>
  );
}
