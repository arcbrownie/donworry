"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
import { BlogShareButtons } from "@/components/ui/BlogShareButtons";
import { Calendar, CreditCard, TrendingUp, CheckCircle, Shield, AlertCircle, FileText, Users, BarChart3 } from "lucide-react";

export default function BankruptcyDischargeCreditCardTimeline() {
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
            <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-[1.3]">개인파산 면책 후<br />신용카드 발급까지 걸리는 기간</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">파산 이후 경제적 재기를 위한 신용회복 타임라인</p>
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
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">개인파산 면책</strong> 결정을 받으면 모든 채무에서 해방되지만, 신용카드는 언제부터 발급받을 수 있을까요? 많은 분들이 면책 후에도 금융거래가 완전히 차단되는 것으로 오해하고 있습니다.</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">실제로는 면책 후에도 단계적인 신용회복이 가능하며, 적절한 전략을 따르면 평균 <strong className="text-[#1A237E]">1년 후부터 소액 한도 신용카드</strong>를 발급받을 수 있습니다. 이 글에서는 <strong className="text-[#1A237E]">면책 후 신용카드 발급 타임라인</strong>과 경제적 재기 전략을 서준호 신용회복 전문가가 실제 사례와 함께 상세히 알려드립니다.</p>
            </section>
            <section className="mb-10">
              <h2 id="timeline" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><Calendar className="w-7 h-7 text-[#1A237E]" />신용회복 타임라인</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">면책 결정 후</strong> 신용카드 발급까지는 다음 일정이 소요됩니다. 법원에서 면책 결정이 내려지면 채무는 모두 소멸되지만, 신용정보원(KCB)과 나이스신용평가정보(NICE)에는 파산 기록이 5년간 남아있어 금융기관의 신용평가에 영향을 줍니다.</p>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead><tr className="bg-[#1A237E]/10"><th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold">시기</th><th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold">상태</th><th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold">가능 여부</th><th className="border border-[#1A237E]/20 px-4 py-3 text-left font-bold">구체적 조치</th></tr></thead>
                  <tbody>
                    <tr><td className="border border-[#1A237E]/20 px-4 py-3">면책 직후</td><td className="border border-[#1A237E]/20 px-4 py-3">신용등급 10등급 (최하)</td><td className="border border-[#1A237E]/20 px-4 py-3 text-red-600">발급 불가</td><td className="border border-[#1A237E]/20 px-4 py-3 text-sm">체크카드 발급, 통신비 자동이체 시작</td></tr>
                    <tr className="bg-slate-50"><td className="border border-[#1A237E]/20 px-4 py-3">3개월 후</td><td className="border border-[#1A237E]/20 px-4 py-3">신용 이력 회복 시작</td><td className="border border-[#1A237E]/20 px-4 py-3 text-red-600">발급 불가</td><td className="border border-[#1A237E]/20 px-4 py-3 text-sm">소액 적금 가입, 공과금 정상 납부</td></tr>
                    <tr><td className="border border-[#1A237E]/20 px-4 py-3 font-semibold text-[#1A237E]">6개월 후</td><td className="border border-[#1A237E]/20 px-4 py-3">체크카드 이용 실적 누적</td><td className="border border-[#1A237E]/20 px-4 py-3 text-orange-600">일부 가능 (소액한도)</td><td className="border border-[#1A237E]/20 px-4 py-3 text-sm">후불 체크카드로 신용 이력 쌓기</td></tr>
                    <tr className="bg-slate-50"><td className="border border-[#1A237E]/20 px-4 py-3 font-bold text-green-600">1년 후</td><td className="border border-[#1A237E]/20 px-4 py-3 font-bold">신용 회복 진행</td><td className="border border-[#1A237E]/20 px-4 py-3 font-bold text-green-600">발급 가능 (30-50만원)</td><td className="border border-[#1A237E]/20 px-4 py-3 text-sm font-bold">저신용자 전용 카드 신청</td></tr>
                    <tr><td className="border border-[#1A237E]/20 px-4 py-3">2년 후</td><td className="border border-[#1A237E]/20 px-4 py-3">신용 이력 누적</td><td className="border border-[#1A237E]/20 px-4 py-3 text-green-600">한도 증액 가능</td><td className="border border-[#1A237E]/20 px-4 py-3 text-sm">50만원 → 100만원 증액 신청</td></tr>
                    <tr className="bg-slate-50"><td className="border border-[#1A237E]/20 px-4 py-3">5년 후</td><td className="border border-[#1A237E]/20 px-4 py-3">파산 기록 삭제</td><td className="border border-[#1A237E]/20 px-4 py-3 text-green-600">일반 카드 발급 가능</td><td className="border border-[#1A237E]/20 px-4 py-3 text-sm">파산 기록 완전 삭제, 일반 금융거래 가능</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground"><strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 평균적으로 면책 후 <strong>1년</strong> 정도 지나면 소액 한도(30-50만원) 신용카드를 발급받을 수 있습니다. 다만 개인차가 있어 6개월 만에 발급받는 경우도 있고, 2년이 지나야 가능한 경우도 있습니다. 핵심은 <strong>체크카드와 적금으로 꾸준히 신용 이력을 쌓는 것</strong>입니다.</p>
              </div>
            </section>
            <section className="mb-10">
              <h2 id="first-6months" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><CreditCard className="w-7 h-7 text-[#1A237E]" />면책 후 6개월: 체크카드 활용</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">면책 후 6개월</strong>은 신용카드 발급이 어렵지만, 체크카드로 신용 이력을 쌓을 수 있는 중요한 시기입니다. 많은 분들이 체크카드는 신용 이력에 도움이 안 된다고 생각하지만, 후불 체크카드는 신용카드와 동일하게 신용정보원에 기록됩니다.</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">실제로 면책 후 6개월 동안 체크카드를 성실히 사용한 A씨(35세)는 1년 만에 신한 딥드림카드 30만원 한도를 발급받았습니다. 반면 체크카드도 사용하지 않은 B씨(42세)는 2년이 지나도 신용카드 발급이 거절되었습니다.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">후불 체크카드:</strong><span className="text-muted-foreground">신용카드처럼 사용 후 결제, 신용 이력 누적. 월 30만원 이상 사용 권장</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">통신비 자동이체:</strong><span className="text-muted-foreground">휴대폰, 인터넷 요금 연체 없이 납부. 매월 정상 납부 기록이 신용점수에 반영됨</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">공과금 납부:</strong><span className="text-muted-foreground">전기, 가스, 수도 요금 정상 납부. 공과금 연체는 신용점수에 큰 타격</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">소액 적금:</strong><span className="text-muted-foreground">월 10-30만원 적금 가입하여 금융거래 이력 쌓기. 6개월 이상 유지하면 신용점수 상승 효과</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">직장 통장 활용:</strong><span className="text-muted-foreground">급여 통장으로 사용하면 금융기관이 소득 안정성을 인정</span></div></li>
              </ul>
              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📊 실제 사례: 체크카드 활용 효과</p>
                <p className="text-muted-foreground mb-2">C씨(38세)는 면책 후 즉시 후불 체크카드를 발급받아 매월 50만원 이상 사용했습니다. 통신비, 공과금도 모두 자동이체로 설정하고, 월 20만원 적금도 꾸준히 가입했습니다.</p>
                <p className="text-muted-foreground mb-2">6개월 후 신용점수는 300점에서 450점으로 상승했고, 1년 후 신한 딥드림카드 50만원 한도를 발급받을 수 있었습니다. 반면 체크카드를 사용하지 않은 경우 평균 2년 이상 소요됩니다.</p>
              </div>
            </section>
            <section className="mb-10">
              <h2 id="first-card" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><CheckCircle className="w-7 h-7 text-[#1A237E]" />첫 신용카드 발급 전략</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">1년 후</strong> 첫 신용카드를 발급받는 전략입니다. 면책 후 1년이 지났다고 해서 모든 카드가 발급되는 것은 아닙니다. 저신용자 전용 카드나 특수 상품을 신청해야 승인 확률이 높습니다.</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">금융감독원 자료에 따르면, 면책 후 1년 이내 신용카드 발급 승인률은 약 15%에 불과합니다. 하지만 체크카드와 적금으로 신용 이력을 쌓은 경우 승인률이 35%로 증가합니다.</p>
              <div className="space-y-6">
                <div className="bg-white border-2 border-[#1A237E]/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1A237E] mb-3">1단계: 저신용자 전용 카드 신청</h3>
                  <p className="text-muted-foreground mb-3">면책 후 1년이 지났다면 저신용자 전용 카드를 신청해야 합니다. 일반 카드는 승인 확률이 거의 없습니다.</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>대상: 신한 딥드림카드, 우리 희망드림카드, 하나 1Q 보통카드, KB 신용회복카드</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>한도: 30-50만원 (초기 한도는 낮지만 꾸준히 사용하면 증액 가능)</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>조건: 면책 1년 이상 경과, 최근 6개월 연체 없음, 체크카드 사용 실적 있음</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>금리: 연 15-20% (일반 카드보다 높지만 신용회복을 위해 필요)</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>신청 방법: 각 은행 영업점 방문 또는 온라인 신청 (단, 면책 이력이 있어 온라인 승인률 낮음)</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-[#1A237E]/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1A237E] mb-3">2단계: 6개월 성실 사용</h3>
                  <p className="text-muted-foreground mb-3">카드를 발급받았다면 6개월 동안 절대 연체 없이 성실히 사용해야 합니다. 한 번의 연체도 신용점수에 큰 타격을 줍니다.</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>월 한도의 30% 이하 사용: 50만원 한도면 월 15만원 이하 사용 권장</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>결제일 전 전액 상환: 연체 절대 금지. 자동이체 설정 필수</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>현금서비스, 카드론 절대 사용 금지: 고금리 상품은 신용회복에 역효과</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>다양한 가맹점 이용: 식당, 마트, 주유소 등 다양한 곳에서 사용</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>정기적 사용: 월 1회 이상 사용하여 활성 카드로 인식되도록</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-[#1A237E]/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1A237E] mb-3">3단계: 한도 증액 신청</h3>
                  <p className="text-muted-foreground mb-3">6개월 성실 사용 후 한도 증액을 신청할 수 있습니다. 증액이 승인되면 신용점수도 함께 상승합니다.</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>6개월 성실 사용 후: 50만원 → 100만원 증액 요청 (승인률 약 60%)</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>1년 후: 100만원 → 200만원 추가 증액 (승인률 약 40%)</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>증액 조건: 연체 없음, 월 사용액이 한도의 30-70% 수준, 소득 증빙 가능</li>
                    <li className="flex gap-2"><span className="text-[#1A237E]">•</span>증액 신청 방법: 인터넷뱅킹, 모바일앱, 또는 영업점 방문</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4 mt-6">신용점수 관리는 <Link href="/blog/credit-score-guide" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline">신용점수 가이드</Link>를 참고하세요.</p>
            </section>
            <section className="mb-10">
              <h2 id="credit-recovery" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><TrendingUp className="w-7 h-7 text-[#1A237E]" />신용점수 회복 과정</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">면책 후</strong> 신용점수는 다음과 같이 회복됩니다. 신용정보원(KCB) 기준으로 면책 직후 신용점수는 평균 200-300점 수준이며, 이는 10등급에 해당합니다.</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">신용점수는 신용거래 이력, 연체 이력, 금융거래 다양성, 신용거래 기간 등을 종합적으로 평가합니다. 면책 후에는 연체 이력이 사라지지만, 신용거래 이력이 없어 점수가 낮습니다. 따라서 체크카드와 적금으로 새로운 신용 이력을 쌓아야 합니다.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">면책 직후:</strong><span className="text-muted-foreground">신용등급 10등급 (200-300점), 모든 금융거래 제한. 체크카드 발급 가능하지만 신용카드 불가</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">6개월 후:</strong><span className="text-muted-foreground">9등급 (350-450점), 체크카드, 적금 실적 누적. 신용카드 발급은 여전히 어려움</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">1년 후:</strong><span className="text-muted-foreground">7-8등급 (450-550점), 신용카드 발급 가능 (소액 한도). 저신용자 전용 카드 신청 시 승인 확률 높음</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">2년 후:</strong><span className="text-muted-foreground">6-7등급 (550-650점), 소액 대출 가능. 신용카드 한도 증액 가능</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">5년 후:</strong><span className="text-muted-foreground">4-5등급 (650-750점), 파산 기록 삭제. 일반 금융거래 가능, 주택담보대출도 가능</span></div></li>
              </ul>
              <div className="bg-[#1A237E]/5 p-6 rounded-lg my-6 border-2 border-[#1A237E]/20">
                <p className="text-foreground font-bold text-xl mb-4">📈 신용점수 상승 속도 비교</p>
                <p className="text-muted-foreground mb-2"><strong>적극적 회복 그룹:</strong> 체크카드 사용 + 적금 가입 + 공과금 정상 납부 → 평균 1년 만에 450점 달성</p>
                <p className="text-muted-foreground mb-2"><strong>소극적 회복 그룹:</strong> 금융거래 최소화 → 평균 2-3년 만에 450점 달성</p>
                <p className="text-muted-foreground">따라서 면책 후 즉시 체크카드와 적금을 시작하는 것이 신용회복의 핵심입니다.</p>
              </div>
            </section>
            <section className="mb-10">
              <h2 id="tips" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><Shield className="w-7 h-7 text-[#1A237E]" />경제적 재기 팁</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">면책 후 경제적 재기</strong>를 위해서는 신용회복뿐만 아니라 재발 방지와 자산 형성도 중요합니다. 많은 분들이 면책 후 다시 같은 실수를 반복하는 경우가 많습니다.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">재발 방지:</strong><span className="text-muted-foreground">가계부 작성, 지출 관리 철저히. 면책 전 채무 원인 분석 후 재발 방지 계획 수립</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">비상금 마련:</strong><span className="text-muted-foreground">월급의 10-20% 자동이체로 비상금 통장. 최소 3개월 생활비 목표 (300-500만원)</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">소득 증대:</strong><span className="text-muted-foreground">부업, 자격증 취득 등으로 수입 늘리기. 월 50만원 이상 추가 소득 목표</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">신용 교육:</strong><span className="text-muted-foreground">신용회복위원회 무료 신용교육 이수. 온라인 강의 또는 오프라인 상담 활용</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">정기 점검:</strong><span className="text-muted-foreground">3개월마다 신용점수 확인 (올크레딧, 크레딧포유). 이상 징후 조기 발견</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">금융 상담:</strong><span className="text-muted-foreground">신용회복위원회(1600-5500) 정기 상담. 전문가의 조언으로 신용회복 속도 향상</span></div></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">신용회복은 <Link href="/blog/credit-recovery-guide" target="_blank" rel="noopener noreferrer" className="text-[#1A237E] hover:underline">신용 회복 가이드</Link>를 참고하세요.</p>
            </section>
            <section className="mb-10">
              <h2 id="caution" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><AlertCircle className="w-7 h-7 text-[#1A237E]" />주의사항</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4"><strong className="text-[#1A237E]">면책 후 신용회복 과정</strong>에서 주의해야 할 사항들이 있습니다. 한 번의 실수도 신용회복에 큰 타격을 줄 수 있으므로 각별히 주의해야 합니다.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">불법 대출 주의:</strong><span className="text-muted-foreground">면책 직후 접근하는 불법 사금융 절대 이용 금지. 연 100% 이상 고금리, 폭력 추심 위험</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">과소비 경계:</strong><span className="text-muted-foreground">카드 발급 후 과소비로 다시 채무 늪 빠지지 않도록. 월 한도 30% 이하 사용 원칙</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">연체 절대 금지:</strong><span className="text-muted-foreground">단 한 번의 연체도 신용점수 큰 폭 하락 (50-100점 하락). 자동이체 필수 설정</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">카드론 금지:</strong><span className="text-muted-foreground">현금서비스, 카드론은 재발의 지름길. 연 20% 이상 고금리로 채무 재누적</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">다중 신청 금지:</strong><span className="text-muted-foreground">여러 카드 동시 신청 시 신용조회 과다로 점수 하락. 1개씩 순차적 신청</span></div></li>
                <li className="flex items-start gap-3"><span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span><div><strong className="text-foreground block mb-1">파산 기록 확인:</strong><span className="text-muted-foreground">면책 후 5년간 파산 기록 유지. 이 기간 동안 일반 대출 어려움</span></div></li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 id="faq" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20"><FileText className="w-7 h-7 text-[#1A237E]" />자주 묻는 질문</h2>
              <div className="space-y-6">
                <div className="bg-white border-2 border-[#1A237E]/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1A237E] mb-3">Q1. 면책 후 바로 신용카드를 발급받을 수 있나요?</h3>
                  <p className="text-muted-foreground">아니요. 면책 직후에는 신용등급이 10등급(최하)이어서 신용카드 발급이 불가능합니다. 평균 1년 정도 지나야 소액 한도 카드를 발급받을 수 있습니다.</p>
                </div>
                <div className="bg-white border-2 border-[#1A237E]/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1A237E] mb-3">Q2. 체크카드도 신용 이력에 도움이 되나요?</h3>
                  <p className="text-muted-foreground">네, 후불 체크카드는 신용카드와 동일하게 신용정보원에 기록됩니다. 면책 후 6개월 동안 체크카드를 성실히 사용하면 신용점수 상승에 큰 도움이 됩니다.</p>
                </div>
                <div className="bg-white border-2 border-[#1A237E]/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1A237E] mb-3">Q3. 파산 기록은 언제 삭제되나요?</h3>
                  <p className="text-muted-foreground">면책 결정일로부터 5년 후 신용정보원에서 파산 기록이 삭제됩니다. 이 기간 동안은 일반 금융거래에 제약이 있지만, 5년 후에는 완전히 해제됩니다.</p>
                </div>
                <div className="bg-white border-2 border-[#1A237E]/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1A237E] mb-3">Q4. 면책 후 대출도 가능한가요?</h3>
                  <p className="text-muted-foreground">면책 후 2년 정도 지나면 소액 신용대출이 가능합니다. 다만 주택담보대출은 파산 기록이 삭제되는 5년 후부터 가능합니다.</p>
                </div>
              </div>
            </section>
          </article>
        </div>
        <div className="max-w-4xl mx-auto mt-12">
          <ArticleAuthor expertId="expert-debt-03" publishedDate={new Date().toISOString().split('T')[0]} lastUpdated={new Date().toISOString().split('T')[0]} />
          <BlogShareButtons title="개인파산 면책 후 신용카드 발급 기간" description="파산 후 신용회복 타임라인" variant="inline" className="mt-8" />
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
      <div className="lg:hidden"><BlogShareButtons title="개인파산 면책 후 신용카드 발급 기간" description="파산 후 신용회복 타임라인" variant="bottom-fixed" /></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "개인파산 면책 후 신용카드 발급까지 걸리는 기간", "description": "개인파산 면책 결정 후 언제부터 신용카드를 발급받을 수 있을까? 경제적 재기를 위한 신용회복 타임라인", "author": { "@type": "Person", "name": "서준호", "jobTitle": "신용회복 전문가" }, "publisher": { "@type": "Organization", "name": "돈워리", "logo": { "@type": "ImageObject", "url": "https://donworry.kr/og-image.png" } }, "datePublished": new Date().toISOString(), "dateModified": new Date().toISOString(), "image": "https://donworry.kr/og-image.png" }) }} />
    </div>
  );
}
