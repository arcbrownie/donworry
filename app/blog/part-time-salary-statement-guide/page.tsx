"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleFooter } from "@/components/ui/ArticleFooter";
import { BlogShareButtons } from "@/components/ui/BlogShareButtons";
import { FileText, Calculator, Scale, AlertTriangle, RefreshCw, Archive } from "lucide-react";

export default function PartTimeSalaryStatementGuide() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <div className="container relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              알바비 급여명세서 확인법 완벽 가이드
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              처음 알바하는 당신을 위한 급여명세서 A to Z
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents & Share Buttons */}
          <div className="lg:w-64 flex-shrink-0 space-y-4">
            <TableOfContents />
            <div className="hidden lg:block">
              <BlogShareButtons
                title="알바비 급여명세서 확인법 완벽 가이드"
                description="처음 알바하는 청소년과 대학생을 위한 급여명세서 보는 법"
                variant="sticky"
              />
            </div>
          </div>

          {/* Article Content */}
          <article className="flex-1 max-w-4xl prose prose-xl prose-slate max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                &quot;드디어 첫 알바비가 입금됐다!&quot; 설레는 마음으로 통장을 확인했는데,
                <strong className="text-[#1A237E]"> 약속한 금액보다 적게 들어와 있다면?</strong> 많은 아르바이트생들이 겪는 혼란입니다.
                시급 10,000원에 80시간 일했으니 80만원을 받아야 하는데, 실제로는 70만원대만 입금되어 있죠.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                이것은 사기가 아닙니다. <strong className="text-[#1A237E]">4대보험과 세금이 공제</strong>되기 때문인데요,
                문제는 많은 아르바이트생들이 급여명세서를 제대로 받지 못하거나, 받아도 어떻게 읽어야 할지 몰라
                부당한 급여를 받고도 그냥 넘어가는 경우가 많다는 것입니다.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                강민수 세무 전문가는 <strong className="text-[#1A237E]">&quot;급여명세서를 정확히 이해하는 것이
                아르바이트생의 권리를 지키는 첫걸음&quot;</strong>이라며 &quot;특히 주휴수당이나 야간수당을 받지 못하는 경우가 많아
                주의가 필요하다&quot;고 강조합니다. 이 글에서는 급여명세서의 모든 것을 A부터 Z까지 자세히 알려드리겠습니다.
              </p>
            </section>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 id="salary-statement-basics" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <FileText className="w-7 h-7 text-[#1A237E]" />
                급여명세서란? 꼭 받아야 하나요?
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">급여명세서(임금명세서)</strong>는 근로자가 받는 급여의
                구성 내역을 상세히 보여주는 문서입니다. 2021년 11월 19일부터 <strong className="text-[#1A237E]">근로기준법 제48조</strong>에
                따라 모든 사업주는 근로자에게 급여명세서를 의무적으로 교부해야 합니다.
              </p>

              <div className="bg-blue-50 border-l-4 border-[#1A237E] p-6 my-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-[#1A237E] mb-3">📌 근로기준법 제48조 (임금대장 및 임금명세서)</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  사용자는 근로자에게 <strong>임금을 지급하는 때에는</strong> 다음 각 호의 사항을 적은
                  <strong className="text-[#1A237E]"> 임금명세서를 서면 또는 전자문서로 교부</strong>하여야 한다.
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>성명, 생년월일, 사원번호 등 근로자를 특정할 수 있는 정보</li>
                  <li>임금 지급일</li>
                  <li>총 임금액</li>
                  <li>근로시간, 연장근로·야간근로·휴일근로 시간수와 이에 대한 임금</li>
                  <li>각종 수당의 내역과 금액</li>
                  <li>공제 항목별 금액과 총액</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">급여명세서를 못 받았다면?</h3>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                사업주가 급여명세서를 교부하지 않으면 <strong className="text-[#1A237E]">500만원 이하의 과태료</strong>가 부과됩니다.
                만약 급여를 받았는데 명세서를 받지 못했다면 다음과 같이 대처하세요:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">1.</span>
                  <div>
                    <strong className="text-foreground block mb-1">먼저 요청하기:</strong>
                    <span className="text-muted-foreground">&quot;급여명세서 좀 주실 수 있나요?&quot;라고 정중히 요청합니다. 많은 사업주들이 의무인 줄 모르고 있어요.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">2.</span>
                  <div>
                    <strong className="text-foreground block mb-1">문자로 증거 남기기:</strong>
                    <span className="text-muted-foreground">카카오톡이나 문자로 요청해서 거절 또는 무응답 기록을 남깁니다.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">3.</span>
                  <div>
                    <strong className="text-foreground block mb-1">관련 기관 상담:</strong>
                    <span className="text-muted-foreground">고용노동부 상담센터(☎ 1350) 또는 청소년근로권익센터(☎ 1644-3119)에 신고합니다.</span>
                  </div>
                </li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-amber-700 mb-3">⚠️ 알바생도 무조건 받아야 합니다!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  &quot;하루만 일하는 단기 알바&quot;도, &quot;주말만 나오는 알바&quot;도, &quot;현금으로 급여 받는 알바&quot;도 모두 해당됩니다.
                  <strong className="text-[#1A237E]">근로 형태와 관계없이 모든 근로자</strong>는 급여명세서를 받을 권리가 있습니다.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">종이 vs 전자 명세서</h3>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                급여명세서는 <strong className="text-[#1A237E]">종이(서면)</strong> 또는 <strong className="text-[#1A237E]">전자문서</strong>
                (이메일, 카카오톡, 문자 등) 형태로 받을 수 있습니다. 요즘은 대부분 이메일이나 카카오톡으로 보내주는데,
                어떤 방식이든 상관없으니 꼭 확인하고 <strong className="text-[#1A237E]">캡처 또는 다운로드해서 보관</strong>하세요.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 id="salary-breakdown" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Calculator className="w-7 h-7 text-[#1A237E]" />
                급여명세서 항목 뜯어보기
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                급여명세서는 크게 <strong className="text-[#1A237E]">&apos;지급 항목&apos;</strong>과 <strong className="text-[#1A237E]">&apos;공제 항목&apos;</strong>으로
                나뉩니다. 지급 항목에서 공제 항목을 빼면 <strong className="text-[#1A237E]">실수령액</strong>이 됩니다.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-[#1A237E] text-white">
                    <tr>
                      <th className="p-4 text-left font-semibold">구분</th>
                      <th className="p-4 text-left font-semibold">항목</th>
                      <th className="p-4 text-left font-semibold">설명</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-semibold text-[#1A237E]" rowSpan={5}>지급 항목<br />(+)</td>
                      <td className="p-4 font-medium">기본급</td>
                      <td className="p-4 text-muted-foreground">시급 × 근무시간</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">주휴수당</td>
                      <td className="p-4 text-muted-foreground">주 15시간 이상 근무 시</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">연장수당</td>
                      <td className="p-4 text-muted-foreground">주 40시간 초과 근무 (50% 가산)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">야간수당</td>
                      <td className="p-4 text-muted-foreground">22시~06시 근무 (50% 가산)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">휴일수당</td>
                      <td className="p-4 text-muted-foreground">법정 휴일 근무 (100% 가산)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-semibold text-red-600" rowSpan={3}>공제 항목<br />(-)</td>
                      <td className="p-4 font-medium">소득세/지방소득세</td>
                      <td className="p-4 text-muted-foreground">3.3% 원천징수 (프리랜서)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">4대보험</td>
                      <td className="p-4 text-muted-foreground">월 60시간 이상 근무 시</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">기타 공제</td>
                      <td className="p-4 text-muted-foreground">식대, 기숙사비 등 (합의된 경우만)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">1. 기본급: 시급 계산의 기본</h3>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                기본급은 <strong className="text-[#1A237E]">시급 × 실제 근무시간</strong>으로 계산됩니다.
                2026년 최저시급은 <strong className="text-[#1A237E]">10,030원</strong>입니다. (2025년 기준 9,860원에서 인상)
              </p>

              <div className="bg-slate-100 p-6 rounded-lg my-4">
                <h4 className="font-bold text-lg mb-3">💡 계산 예시</h4>
                <p className="text-muted-foreground mb-2">
                  • 시급: 10,030원<br />
                  • 주 5일 근무, 하루 4시간 (월~금)<br />
                  • 한 달 근무일: 20일<br />
                  • <strong className="text-[#1A237E]">기본급 = 10,030원 × 4시간 × 20일 = 802,400원</strong>
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-600 mb-3">🚨 최저시급 미달 체크!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  만약 시급이 10,030원보다 낮다면 <strong className="text-red-600">불법</strong>입니다.
                  &quot;수습 기간이라서&quot;, &quot;경력이 없어서&quot;라는 이유로도 최저시급보다 낮게 줄 수 없습니다.
                  (단, 1년 미만 사업장의 수습 기간 중 3개월은 10% 감액 가능)
                </p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">2. 주휴수당: 알바생이 가장 많이 못 받는 수당</h3>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">주휴수당</strong>은 일주일 동안 성실히 근무한 근로자에게
                주는 유급 휴일수당입니다. <strong className="text-[#1A237E]">주 15시간 이상 근무</strong>하면
                무조건 받을 수 있는데, 많은 사업주들이 이를 지급하지 않아 문제가 됩니다.
              </p>

              <h4 className="font-semibold text-lg mb-3">주휴수당 계산법</h4>

              <div className="bg-slate-100 p-6 rounded-lg my-4">
                <p className="text-muted-foreground mb-4">
                  <strong className="text-[#1A237E]">주휴수당 = (일주일 총 근무시간 ÷ 40시간) × 8시간 × 시급</strong>
                </p>
                <h4 className="font-bold text-lg mb-3">💡 계산 예시</h4>
                <p className="text-muted-foreground mb-2">
                  • 시급: 10,030원<br />
                  • 일주일 근무: 20시간 (월~금, 하루 4시간)<br />
                  • 주휴수당 = (20 ÷ 40) × 8 × 10,030원 = <strong className="text-[#1A237E]">40,120원</strong><br />
                  • 한 달 4주 기준 = 40,120원 × 4 = <strong className="text-[#1A237E]">160,480원</strong>
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                위 예시에서 기본급 802,400원에 주휴수당 160,480원을 더하면
                <strong className="text-[#1A237E]"> 총 급여는 962,880원</strong>이 됩니다.
                만약 주휴수당을 받지 못했다면 <strong className="text-red-600">16만원 이상 손해</strong>를 본 것입니다!
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">3. 야간수당 & 연장수당</h3>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">야간수당</strong>은 밤 22시부터 다음날 오전 6시까지 일한 시간에 대해
                <strong className="text-[#1A237E]"> 50%를 추가</strong>로 받는 수당입니다. 편의점, 주유소, 배달 알바를 하는 분들은 꼭 확인하세요!
              </p>

              <div className="bg-slate-100 p-6 rounded-lg my-4">
                <h4 className="font-bold text-lg mb-3">💡 야간수당 계산 예시</h4>
                <p className="text-muted-foreground mb-2">
                  • 시급: 10,030원<br />
                  • 저녁 8시~새벽 2시 근무 (6시간)<br />
                  • 야간 근무: 22시~02시 (4시간)<br />
                  • <strong className="text-[#1A237E]">일반 시간 2시간:</strong> 10,030원 × 2 = 20,060원<br />
                  • <strong className="text-[#1A237E]">야간 시간 4시간:</strong> 10,030원 × 1.5 × 4 = 60,180원<br />
                  • <strong className="text-[#1A237E]">총 급여:</strong> 20,060 + 60,180 = <strong className="text-red-600">80,240원</strong>
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">연장수당</strong>은 1주 40시간을 초과해서 일한 경우
                초과 시간에 대해 <strong className="text-[#1A237E]">50%를 추가</strong>로 받는 수당입니다.
                (5인 이상 사업장만 해당)
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">4. 공제 항목: 왜 돈이 빠져나가나요?</h3>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                급여에서 빠져나가는 돈은 크게 <strong className="text-[#1A237E]">세금</strong>과 <strong className="text-[#1A237E]">4대보험</strong>입니다.
                어떤 방식으로 공제되는지는 근무 시간에 따라 달라집니다.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-[#1A237E] text-white">
                    <tr>
                      <th className="p-4 text-left font-semibold">근무 형태</th>
                      <th className="p-4 text-left font-semibold">공제 방식</th>
                      <th className="p-4 text-left font-semibold">공제율</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">단기/프리랜서<br />(월 60시간 미만)</td>
                      <td className="p-4 text-muted-foreground">3.3% 원천징수</td>
                      <td className="p-4 text-muted-foreground">소득세 3% + 지방소득세 0.3%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">장기 알바<br />(월 60시간 이상)</td>
                      <td className="p-4 text-muted-foreground">4대보험 + 소득세</td>
                      <td className="p-4 text-muted-foreground">약 9-10% (소득에 따라 차이)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 id="tax-vs-insurance" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Scale className="w-7 h-7 text-[#1A237E]" />
                3.3% vs 4대보험, 뭐가 더 유리할까?
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                &quot;3.3% 원천징수로 할까요, 4대보험 가입할까요?&quot; 알바를 시작할 때 사장님이 물어보는 질문입니다.
                <strong className="text-[#1A237E]"> 두 방식의 차이</strong>를 정확히 알아야 손해 보지 않습니다.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.3% 원천징수란?</h3>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">3.3% 원천징수</strong>는 프리랜서처럼 일하는 형태로,
                급여의 3.3%만 세금으로 공제됩니다. 4대보험에는 가입하지 않아서 당장 실수령액은 많지만,
                국민연금이나 건강보험 혜택은 받을 수 없습니다.
              </p>

              <div className="bg-slate-100 p-6 rounded-lg my-4">
                <h4 className="font-bold text-lg mb-3">💡 3.3% 원천징수 계산 예시</h4>
                <p className="text-muted-foreground mb-2">
                  • 총 급여: 1,000,000원<br />
                  • 원천징수 (3.3%): 33,000원<br />
                  • <strong className="text-[#1A237E]">실수령액: 967,000원</strong>
                </p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4대보험 가입이란?</h3>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">4대보험 가입</strong>은 정규직처럼 일하는 형태로,
                <strong className="text-[#1A237E]"> 월 60시간 이상 근무</strong> (주 15시간 이상)하면 의무적으로 가입해야 합니다.
                급여의 약 9-10%가 공제되지만, 국민연금·건강보험·고용보험 혜택을 받을 수 있습니다.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-[#1A237E] text-white">
                    <tr>
                      <th className="p-4 text-left font-semibold">보험 종류</th>
                      <th className="p-4 text-left font-semibold">근로자 부담률</th>
                      <th className="p-4 text-left font-semibold">비고</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">국민연금</td>
                      <td className="p-4 text-muted-foreground">4.5%</td>
                      <td className="p-4 text-muted-foreground">나머지 4.5%는 회사 부담</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">건강보험</td>
                      <td className="p-4 text-muted-foreground">3.545%</td>
                      <td className="p-4 text-muted-foreground">나머지 3.545%는 회사 부담</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">장기요양보험</td>
                      <td className="p-4 text-muted-foreground">건강보험의 12.95%</td>
                      <td className="p-4 text-muted-foreground">건강보험료에 포함</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">고용보험</td>
                      <td className="p-4 text-muted-foreground">0.9%</td>
                      <td className="p-4 text-muted-foreground">실업급여 등 혜택</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">산재보험</td>
                      <td className="p-4 text-muted-foreground">0% (회사 전액 부담)</td>
                      <td className="p-4 text-muted-foreground">업무상 재해 보상</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-100 p-6 rounded-lg my-4">
                <h4 className="font-bold text-lg mb-3">💡 4대보험 가입 계산 예시</h4>
                <p className="text-muted-foreground mb-2">
                  • 총 급여: 1,000,000원<br />
                  • 국민연금 (4.5%): 45,000원<br />
                  • 건강보험 (3.545%): 35,450원<br />
                  • 장기요양보험 (3.545% × 12.95%): 4,591원<br />
                  • 고용보험 (0.9%): 9,000원<br />
                  • 소득세 + 지방소득세: 약 10,000원<br />
                  • <strong className="text-[#1A237E]">총 공제액: 104,041원</strong><br />
                  • <strong className="text-[#1A237E]">실수령액: 895,959원</strong>
                </p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">비교표: 어떤 게 유리할까?</h3>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-[#1A237E] text-white">
                    <tr>
                      <th className="p-4 text-left font-semibold">구분</th>
                      <th className="p-4 text-left font-semibold">3.3% 원천징수</th>
                      <th className="p-4 text-left font-semibold">4대보험 가입</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">공제율</td>
                      <td className="p-4 text-green-600 font-semibold">3.3%</td>
                      <td className="p-4 text-muted-foreground">약 9-10%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">실수령액 (100만원 기준)</td>
                      <td className="p-4 text-green-600 font-semibold">967,000원</td>
                      <td className="p-4 text-muted-foreground">896,000원</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">국민연금 혜택</td>
                      <td className="p-4 text-red-600">✗</td>
                      <td className="p-4 text-green-600">✓</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">건강보험 혜택</td>
                      <td className="p-4 text-red-600">✗</td>
                      <td className="p-4 text-green-600">✓</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">실업급여</td>
                      <td className="p-4 text-red-600">✗</td>
                      <td className="p-4 text-green-600">✓</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">연말정산 환급</td>
                      <td className="p-4 text-green-600">✓ (가능)</td>
                      <td className="p-4 text-green-600">✓ (가능)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">추천 대상</td>
                      <td className="p-4 text-muted-foreground">단기 알바, 월 60시간 미만</td>
                      <td className="p-4 text-muted-foreground">장기 알바, 월 60시간 이상</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#1A237E] p-6 my-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-[#1A237E] mb-3">💡 전문가 조언</h3>
                <p className="text-muted-foreground leading-relaxed">
                  강민수 세무 전문가는 &quot;3개월 이상 장기로 일할 계획이라면 4대보험 가입이 유리하다&quot;며
                  &quot;특히 만 20대의 경우 국민연금 가입 기간이 쌓여 나중에 연금을 더 많이 받을 수 있다&quot;고 조언합니다.
                  반대로 방학 동안만 하는 단기 알바라면 3.3% 원천징수로 하고
                  다음 해 5월에 종합소득세 신고로 환급받는 것이 유리합니다.
                </p>
              </div>
            </section>

            {/* Section 4 - Illegal cases - abbreviated for length, will add in next edit if needed */}
            <section className="mb-10">
              <h2 id="illegal-cases" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <AlertTriangle className="w-7 h-7 text-[#1A237E]" />
                이런 경우는 불법! 체크리스트
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                많은 아르바이트생들이 &quot;이게 원래 그런가 보다&quot; 하고 넘어가는 경우들이 있습니다.
                하지만 <strong className="text-[#1A237E]">명백한 불법</strong>인 경우가 많아요.
                아래 체크리스트를 확인하고, 해당되면 반드시 대처하세요.
              </p>

              <div className="space-y-4 my-6">
                <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg text-red-600 mb-2 flex items-center gap-2">
                    <span className="text-2xl">🚨</span> 1. 최저시급 미달 지급
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>상황:</strong> &quot;수습 기간이라서 시급 8,000원만 줄게요.&quot;
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-red-600">불법입니다!</strong> 2026년 최저시급은 10,030원입니다.
                    수습 기간이라도 최저시급의 90% (9,027원) 이상 지급해야 하며,
                    이마저도 1년 미만 사업장에서 3개월 이내로만 가능합니다.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>대처법:</strong> 증거 자료(근로계약서, 문자)를 확보하고 고용노동부(1350)에 신고하세요.
                    미지급 임금을 전액 받을 수 있고, 사업주는 3년 이하 징역 또는 2천만원 이하 벌금을 받습니다.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg text-red-600 mb-2 flex items-center gap-2">
                    <span className="text-2xl">🚨</span> 2. 급여 지연 또는 미지급
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>상황:</strong> &quot;이번 달은 장사가 안 돼서 다음 달에 몰아서 줄게.&quot;
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-red-600">불법입니다!</strong> 급여는 <strong className="text-[#1A237E]">매월 1회 이상
                    일정한 날짜에 전액</strong> 지급해야 합니다. 장사가 안 됐든, 돈이 없든 상관없이 지급 의무가 있습니다.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>대처법:</strong> 근무일지, 출퇴근 기록을 모두 보관하세요.
                    고용노동부에 진정을 제기하면 임금채권보장법에 따라 정부가 대신 지급한 후 사업주에게 구상권을 행사합니다.
                    사업주는 3년 이하 징역 또는 2천만원 이하 벌금에 처해집니다.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg text-red-600 mb-2 flex items-center gap-2">
                    <span className="text-2xl">🚨</span> 3. 주휴수당 미지급
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>상황:</strong> 주 15시간 이상 일했는데 주휴수당을 안 준다.
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-red-600">불법입니다!</strong> 주 15시간 이상 근무하면
                    <strong className="text-[#1A237E]"> 주휴수당은 의무</strong>입니다. &quot;알바생은 안 준다&quot;는 말은 거짓입니다.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>대처법:</strong> 일주일 근무 시간을 계산해서 15시간 이상인지 확인하세요.
                    그리고 사업주에게 &quot;주휴수당 지급 부탁드립니다&quot;라고 요청하세요.
                    거절하면 고용노동부에 신고하면 됩니다.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg text-red-600 mb-2 flex items-center gap-2">
                    <span className="text-2xl">🚨</span> 4. 급여명세서 미교부
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>상황:</strong> 급여는 입금됐는데 명세서를 안 준다.
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-red-600">불법입니다!</strong> 2021년 11월 19일부터
                    모든 사업주는 근로자에게 급여명세서를 교부할 의무가 있습니다.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>대처법:</strong> 카카오톡이나 문자로 요청하세요.
                    &quot;급여명세서 부탁드립니다. 근로기준법 제48조에 따라 교부 의무가 있습니다.&quot;
                    이렇게 보내면 대부분 바로 보내줍니다. 안 보내주면 500만원 이하 과태료가 부과됩니다.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg text-red-600 mb-2 flex items-center gap-2">
                    <span className="text-2xl">🚨</span> 5. 부당한 공제
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>상황:</strong> &quot;유니폼 값 3만원, 교육비 5만원 급여에서 뺄게.&quot;
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-red-600">불법입니다!</strong> 근로계약서에 명시되지 않은
                    임의의 항목을 급여에서 공제할 수 없습니다. 유니폼, 교육비, 물품 손상 등을
                    사전 동의 없이 공제하는 것은 불법입니다.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>대처법:</strong> &quot;근로계약서에 없는 항목은 공제할 수 없습니다&quot;라고 말하세요.
                    이미 공제됐다면 반환 요청하고, 거절 시 고용노동부에 신고하세요.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg text-red-600 mb-2 flex items-center gap-2">
                    <span className="text-2xl">🚨</span> 6. 근로계약서 미작성
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>상황:</strong> &quot;그냥 일하고 돈 받으면 되지, 계약서까지 필요해?&quot;
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-red-600">불법입니다!</strong> 근로기준법 제17조에 따라
                    모든 근로자는 <strong className="text-[#1A237E]">근로계약서를 작성하고 1부를 받을 권리</strong>가 있습니다.
                    하루만 일하는 알바도 해당됩니다.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>대처법:</strong> 일 시작 전에 반드시 근로계약서를 작성하고 사본을 받으세요.
                    이미 일하고 있다면 지금이라도 요청하세요. 작성하지 않으면 사업주에게 500만원 이하 과태료가 부과됩니다.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">신고 및 상담 연락처</h3>

              <div className="bg-slate-100 p-6 rounded-lg my-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E] text-xl mt-0.5">📞</span>
                    <div>
                      <strong className="text-foreground block mb-1">고용노동부 상담센터</strong>
                      <span className="text-muted-foreground">☎ 1350 (평일 09:00-18:00)</span><br />
                      <span className="text-sm text-muted-foreground">임금 체불, 부당 해고, 4대보험 등 모든 노동 문제 상담</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E] text-xl mt-0.5">📞</span>
                    <div>
                      <strong className="text-foreground block mb-1">청소년근로권익센터</strong>
                      <span className="text-muted-foreground">☎ 1644-3119 (평일 09:00-22:00, 토요일 09:00-18:00)</span><br />
                      <span className="text-sm text-muted-foreground">만 24세 이하 청소년 알바 전문 상담</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E] text-xl mt-0.5">🌐</span>
                    <div>
                      <strong className="text-foreground block mb-1">알바노동자권리 앱</strong>
                      <span className="text-muted-foreground">앱스토어/플레이스토어에서 다운로드</span><br />
                      <span className="text-sm text-muted-foreground">급여 계산기, 근로계약서 작성, 신고 방법 등 제공</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-amber-700 mb-3">⚠️ 신고 시 주의사항</h3>
                <p className="text-muted-foreground leading-relaxed">
                  신고하기 전에 <strong className="text-amber-700">증거 자료를 최대한 많이 확보</strong>하세요.
                  근로계약서, 급여명세서, 문자/카톡 대화, 근무일지, 출퇴근 기록 등이 있으면 유리합니다.
                  또한 신고자 신분은 보호되므로 걱정하지 마세요.
                </p>
              </div>
            </section>

            {/* Section 5 - Tax refund */}
            <section className="mb-10">
              <h2 id="tax-refund" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <RefreshCw className="w-7 h-7 text-[#1A237E]" />
                연말정산으로 세금 환급받기
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                3.3% 원천징수로 일한 알바생들에게 좋은 소식! <strong className="text-[#1A237E]">연말정산 또는 종합소득세 신고</strong>를 하면
                낸 세금을 돌려받을 수 있습니다. 특히 연간 총 급여가 500만원 이하라면
                <strong className="text-[#1A237E]"> 전액 환급</strong>받을 수 있어요.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">누가 환급받을 수 있나요?</h3>

              <div className="bg-blue-50 border-l-4 border-[#1A237E] p-6 my-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-[#1A237E] mb-3">✅ 환급 대상</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>3.3% 원천징수</strong>로 급여를 받은 프리랜서/단기 알바</li>
                  <li>• 연간 총 급여가 <strong>500만원 이하</strong>인 경우 (전액 환급)</li>
                  <li>• 연간 총 급여가 500만원 초과여도 <strong>일부 환급 가능</strong></li>
                  <li>• 4대보험 가입자도 공제 항목이 많으면 환급 가능</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">환급 금액은 얼마나 될까?</h3>

              <div className="bg-slate-100 p-6 rounded-lg my-4">
                <h4 className="font-bold text-lg mb-3">💡 계산 예시</h4>
                <p className="text-muted-foreground mb-4">
                  <strong>김대학(20세, 대학생)</strong>씨는 2025년 한 해 동안 편의점과 카페에서 알바를 했습니다.
                </p>
                <p className="text-muted-foreground mb-2">
                  • 편의점 (3개월): 총 급여 2,500,000원 → 원천징수 82,500원<br />
                  • 카페 (2개월): 총 급여 1,800,000원 → 원천징수 59,400원<br />
                  • <strong className="text-[#1A237E]">연간 총 급여: 4,300,000원</strong><br />
                  • <strong className="text-[#1A237E]">납부한 세금: 141,900원</strong>
                </p>
                <p className="text-muted-foreground mb-2 mt-4">
                  김대학씨의 연간 총 급여는 500만원 이하이므로
                  <strong className="text-green-600 text-xl"> 141,900원 전액 환급</strong> 받을 수 있습니다!
                </p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">홈택스에서 환급 신청하는 방법</h3>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                환급은 <strong className="text-[#1A237E]">국세청 홈택스</strong>에서 직접 신청할 수 있습니다.
                생각보다 어렵지 않으니 아래 단계를 따라해보세요.
              </p>

              <div className="space-y-4 my-6">
                <div className="border-l-4 border-[#1A237E] bg-slate-50 p-6 rounded-r-lg">
                  <h4 className="font-bold text-lg text-[#1A237E] mb-3">STEP 1: 홈택스 접속 및 로그인</h4>
                  <p className="text-muted-foreground mb-2">
                    • 홈택스 웹사이트 접속: <a href="https://www.hometax.go.kr" className="text-[#1A237E] hover:underline" target="_blank" rel="noopener noreferrer">www.hometax.go.kr</a><br />
                    • 공인인증서 또는 간편인증(카카오톡, 네이버 등)으로 로그인<br />
                    • 처음이라면 회원가입 먼저 (주민등록번호 필요)
                  </p>
                </div>

                <div className="border-l-4 border-[#1A237E] bg-slate-50 p-6 rounded-r-lg">
                  <h4 className="font-bold text-lg text-[#1A237E] mb-3">STEP 2: 종합소득세 신고 메뉴 찾기</h4>
                  <p className="text-muted-foreground mb-2">
                    • 상단 메뉴에서 <strong>[신고/납부]</strong> 클릭<br />
                    • <strong>[종합소득세]</strong> 선택<br />
                    • <strong>[정기신고]</strong> 또는 <strong>[단순경비율 신고]</strong> 클릭<br />
                    • 신고 기간: 매년 <strong className="text-[#1A237E]">5월 1일 ~ 5월 31일</strong>
                  </p>
                </div>

                <div className="border-l-4 border-[#1A237E] bg-slate-50 p-6 rounded-r-lg">
                  <h4 className="font-bold text-lg text-[#1A237E] mb-3">STEP 3: 소득 자료 불러오기</h4>
                  <p className="text-muted-foreground mb-2">
                    • <strong>[불러오기]</strong> 버튼 클릭<br />
                    • 지난 해 근로소득 및 사업소득이 자동으로 조회됩니다<br />
                    • 원천징수영수증이 자동으로 연동되어 있어요<br />
                    • 혹시 누락된 소득이 있다면 직접 입력
                  </p>
                </div>

                <div className="border-l-4 border-[#1A237E] bg-slate-50 p-6 rounded-r-lg">
                  <h4 className="font-bold text-lg text-[#1A237E] mb-3">STEP 4: 환급 계좌 등록</h4>
                  <p className="text-muted-foreground mb-2">
                    • 환급받을 은행 계좌번호 입력<br />
                    • <strong className="text-red-600">본인 명의 계좌</strong>만 가능 (부모님 계좌 불가)<br />
                    • 계좌번호 확인 후 <strong>[신고하기]</strong> 클릭
                  </p>
                </div>

                <div className="border-l-4 border-[#1A237E] bg-slate-50 p-6 rounded-r-lg">
                  <h4 className="font-bold text-lg text-[#1A237E] mb-3">STEP 5: 신고 완료 및 환급 대기</h4>
                  <p className="text-muted-foreground mb-2">
                    • 신고가 완료되면 <strong>[신고 접수증]</strong> 출력 가능<br />
                    • 환급 예상 금액 확인<br />
                    • 환급 시기: 신고 후 약 <strong className="text-[#1A237E]">30일 이내</strong> (통상 6월 말)<br />
                    • 계좌로 자동 입금됩니다
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-amber-700 mb-3">⚠️ 주의사항</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 신고 기한을 놓치면 환급을 못 받을 수 있으니 꼭 5월 중에 신고하세요</li>
                  <li>• 부모님 피부양자로 등록되어 있다면 부모님 세금에 영향을 줄 수 있으니 상담 권장</li>
                  <li>• 연간 총 급여가 500만원을 초과하면 일부만 환급되거나 추가 세금을 낼 수도 있습니다</li>
                  <li>• 모르겠으면 홈택스 상담센터(☎ 126)에 전화해서 물어보세요</li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                더 자세한 세금 환급 방법은
                <Link href="/blog/tax-refund-guide" className="text-[#1A237E] hover:underline mx-1">
                  세금 환급 완벽 가이드
                </Link>
                에서 확인할 수 있습니다.
              </p>
            </section>

            {/* Section 6 - Storage tips */}
            <section className="mb-10">
              <h2 id="storage-tips" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Archive className="w-7 h-7 text-[#1A237E]" />
                급여명세서 보관 및 활용법
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                급여명세서는 단순히 확인하고 버리는 서류가 아닙니다.
                <strong className="text-[#1A237E]"> 나중에 꼭 필요한 중요한 증빙 자료</strong>이므로
                반드시 보관해야 합니다.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">왜 보관해야 할까?</h3>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">1.</span>
                  <div>
                    <strong className="text-foreground block mb-1">분쟁 발생 시 증거:</strong>
                    <span className="text-muted-foreground">
                      &quot;주휴수당 안 줬어요&quot;, &quot;시급이 계약과 다릅니다&quot; 같은 문제가 생겼을 때
                      급여명세서가 있으면 명확한 증거가 됩니다.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">2.</span>
                  <div>
                    <strong className="text-foreground block mb-1">연말정산/종합소득세 신고:</strong>
                    <span className="text-muted-foreground">
                      세금 환급을 받으려면 원천징수영수증이 필요한데,
                      급여명세서를 보관해두면 소득을 증명할 수 있습니다.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">3.</span>
                  <div>
                    <strong className="text-foreground block mb-1">경력 증명:</strong>
                    <span className="text-muted-foreground">
                      대학생이나 사회초년생의 경우, 급여명세서가 경력 증명서 역할을 합니다.
                      특히 프리랜서 활동은 4대보험 이력이 없어서 급여명세서가 유일한 증명 자료예요.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">4.</span>
                  <div>
                    <strong className="text-foreground block mb-1">대출 심사 자료:</strong>
                    <span className="text-muted-foreground">
                      나중에 학자금대출, 전세대출 등을 받을 때 소득을 증명하는 자료로 사용됩니다.
                    </span>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">보관 기간은?</h3>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                법적으로 사업주는 급여대장을 <strong className="text-[#1A237E]">3년</strong> 보관해야 하지만,
                근로자 입장에서는 <strong className="text-[#1A237E]">최소 5년</strong> 보관하는 것을 권장합니다.
                이유는 국세청의 소득 확인 기간이 5년이고, 체불 임금 청구 시효도 3년이기 때문입니다.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">보관 방법</h3>

              <div className="space-y-4 my-6">
                <div className="border-l-4 border-[#1A237E] bg-slate-50 p-6 rounded-r-lg">
                  <h4 className="font-bold text-lg text-[#1A237E] mb-3">📄 종이 명세서</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>파일철 정리:</strong> 연도별, 사업장별로 분류해서 보관</li>
                    <li>• <strong>스캔 백업:</strong> 스마트폰 스캔 앱(어도비 스캔, CamScanner)으로 PDF 저장</li>
                    <li>• <strong>사진 촬영:</strong> 화질 좋게 사진 찍어서 앨범에 저장</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#1A237E] bg-slate-50 p-6 rounded-r-lg">
                  <h4 className="font-bold text-lg text-[#1A237E] mb-3">💾 전자 명세서 (이메일, 카톡 등)</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>클라우드 저장:</strong> 구글 드라이브, 네이버 클라우드, 드롭박스에 업로드</li>
                    <li>• <strong>폴더 정리:</strong> &quot;급여명세서_2025_편의점&quot;, &quot;급여명세서_2026_카페&quot; 식으로 명명</li>
                    <li>• <strong>스크린샷:</strong> 카톡으로 받았다면 스크린샷 저장 후 클라우드 백업</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#1A237E] bg-slate-50 p-6 rounded-r-lg">
                  <h4 className="font-bold text-lg text-[#1A237E] mb-3">📱 추천 앱</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>어도비 스캔 (Adobe Scan):</strong> 무료, PDF 변환 및 OCR 지원</li>
                    <li>• <strong>구글 드라이브:</strong> 무료 15GB, 자동 동기화</li>
                    <li>• <strong>네이버 클라우드:</strong> 무료 30GB (MYBOX)</li>
                    <li>• <strong>에버노트 (Evernote):</strong> 문서 관리에 특화</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#1A237E] p-6 my-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-[#1A237E] mb-3">💡 보관 팁</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 클라우드에 저장하면 스마트폰을 잃어버려도 안전합니다</li>
                  <li>• 급여 받은 날짜에 바로 정리하는 습관을 들이세요 (나중에 하려면 귀찮아져요)</li>
                  <li>• 연말정산 시즌(1~2월)에 한 번 정리하면서 확인하세요</li>
                  <li>• 알바를 그만둘 때 마지막 급여명세서까지 받았는지 꼭 확인하세요</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">급여 계산 앱 활용하기</h3>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                급여명세서를 받았을 때 금액이 맞는지 확인하려면 직접 계산하기 번거롭죠.
                아래 앱들을 활용하면 쉽게 확인할 수 있습니다.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-[#1A237E] text-white">
                    <tr>
                      <th className="p-4 text-left font-semibold">앱 이름</th>
                      <th className="p-4 text-left font-semibold">주요 기능</th>
                      <th className="p-4 text-left font-semibold">추천 대상</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">알바노동자권리</td>
                      <td className="p-4 text-muted-foreground">급여 계산기, 주휴수당 계산, 근로계약서 작성</td>
                      <td className="p-4 text-muted-foreground">모든 알바생</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">알바체크</td>
                      <td className="p-4 text-muted-foreground">출퇴근 기록, 급여 자동 계산, 명세서 저장</td>
                      <td className="p-4 text-muted-foreground">장기 알바생</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">알바천국</td>
                      <td className="p-4 text-muted-foreground">급여 계산기, 최저시급 정보</td>
                      <td className="p-4 text-muted-foreground">알바 구직자</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-medium">토스</td>
                      <td className="p-4 text-muted-foreground">급여 입금 알림, 자동 분류</td>
                      <td className="p-4 text-muted-foreground">급여 관리</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Closing */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">마치며</h2>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                급여명세서는 단순한 종이가 아니라 <strong className="text-[#1A237E]">여러분의 권리를 지키는 무기</strong>입니다.
                처음에는 복잡해 보여도, 한두 번 확인하다 보면 금방 익숙해집니다.
              </p>

              <div className="bg-gradient-to-r from-[#1A237E] to-[#4A148C] text-white p-8 rounded-xl my-6">
                <h3 className="text-xl font-bold mb-4">✨ 핵심 정리</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-xl">1️⃣</span>
                    <span><strong>급여명세서는 의무</strong> - 모든 근로자는 받을 권리가 있습니다</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">2️⃣</span>
                    <span><strong>주휴수당 확인</strong> - 주 15시간 이상이면 무조건 받아야 합니다</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">3️⃣</span>
                    <span><strong>3.3% vs 4대보험</strong> - 근무 기간에 따라 선택하세요</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">4️⃣</span>
                    <span><strong>불법은 신고</strong> - 증거 확보 후 1350 전화하세요</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">5️⃣</span>
                    <span><strong>세금 환급</strong> - 5월에 종합소득세 신고로 돌려받으세요</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">6️⃣</span>
                    <span><strong>명세서 보관</strong> - 최소 5년간 클라우드에 저장하세요</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                &quot;알바니까 참아야지&quot;라는 생각은 이제 버리세요.
                <strong className="text-[#1A237E]"> 여러분은 당당한 근로자</strong>이고,
                정당한 권리를 요구할 수 있습니다. 이 글이 여러분의 권리를 지키는 데
                조금이나마 도움이 되었기를 바랍니다.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                급여 관리에 대해 더 알고 싶다면
                <Link href="/blog/social-beginner-salary-guide" className="text-[#1A237E] hover:underline mx-1">
                  사회초년생 월급 관리 가이드
                </Link>
                도 함께 읽어보세요. 돈워리의
                <Link href="/cal/part-time" className="text-[#1A237E] hover:underline mx-1">
                  알바 실수령액 계산기
                </Link>
                를 활용하면 실수령액을 쉽게 계산할 수 있습니다.
              </p>
            </section>

            <div className="max-w-4xl">
              <ArticleFooter
                expertId="expert-finance-03"
                publishedDate={new Date().toISOString().split("T")[0]}
                lastUpdated={new Date().toISOString().split("T")[0]}
                shareTitle="알바비 급여명세서 확인법 완벽 가이드"
                shareDescription="처음 알바하는 청소년과 대학생을 위한 급여명세서 보는 법"
              />
            </div>
          </article>
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />

      <div className="lg:hidden">
        <BlogShareButtons
          title="알바비 급여명세서 확인법 완벽 가이드"
          description="처음 알바하는 청소년과 대학생을 위한 급여명세서 보는 법"
          variant="bottom-fixed"
        />
      </div>
    </div>
  );
}
