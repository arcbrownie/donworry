"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
import { BlogShareButtons } from "@/components/ui/BlogShareButtons";
import { Clock, AlertTriangle, DollarSign, Shield, CheckCircle, TrendingDown } from "lucide-react";

export default function LoanOverdue5DaySolution() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              소액 대출 연체 5일 전<br />긴급 해결 방법
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              단기 연체 기록이 남기 전 5일 골든타임을 사수하세요
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
                title="소액 대출 연체 5일 전 긴급 해결 방법"
                description="연체 기록이 남기 전 5일 골든타임 안에 해결하는 방법"
                variant="sticky"
              />
            </div>
          </div>

          <article className="flex-1 max-w-4xl prose prose-xl prose-slate max-w-none">
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">대출 상환일을 깜빡했다면</strong> 지금 당장 행동해야 합니다. 
                연체 5일이 지나면 신용평가기관에 연체 기록이 등록되어 신용점수가 큰 폭으로 하락합니다.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                이 글에서는 <strong className="text-[#1A237E]">5일 골든타임</strong> 안에 연체를 해결하는 방법을 
                최동현 대출 전문가가 단계별로 알려드립니다. 
                긴급 자금 계산은 <Link href="/cal/interest-saving" className="text-[#1A237E] hover:underline">대출 계산기</Link>로 확인하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="why-5days" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Clock className="w-7 h-7 text-[#1A237E]" />
                왜 5일이 골든타임인가?
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">연체 5일</strong>은 금융권에서 매우 중요한 기준점입니다. 
                대부분의 금융기관은 연체 5일차에 신용평가기관(NICE, KCB)에 연체 정보를 전송합니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">D-0~4일:</strong>
                    <span className="text-muted-foreground">연체이지만 신용평가기관 미등록 (신용점수 영향 없음)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">D-5일:</strong>
                    <span className="text-muted-foreground">신용평가기관 등록 시작 (신용점수 15-30점 하락)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">D-30일:</strong>
                    <span className="text-muted-foreground">단기 연체자로 분류 (신용점수 50-80점 하락)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">D-90일:</strong>
                    <span className="text-muted-foreground">장기 연체자로 분류 (신용점수 100점 이상 하락, 금융거래 제한)</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-l-4 border-red-600 p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-red-600">⚠️ 긴급:</strong> 오늘이 연체 4일차라면 내일까지 반드시 상환해야 합니다! 
                  5일차가 되면 신용점수 회복에 최소 6개월이 걸립니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="immediate-actions" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <AlertTriangle className="w-7 h-7 text-[#1A237E]" />
                즉시 취해야 할 행동 (1시간 내)
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">연체를 발견한 즉시</strong> 다음 행동을 순서대로 실행하세요. 
                시간이 생명입니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">1</span>
                  <div>
                    <strong className="text-foreground block mb-1">대출 기관에 즉시 전화:</strong>
                    <span className="text-muted-foreground">콜센터에 연체 사실을 알리고 상환 의사 표명 (기록 남김)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">2</span>
                  <div>
                    <strong className="text-foreground block mb-1">연체 일수 정확히 확인:</strong>
                    <span className="text-muted-foreground">상환일 기준으로 며칠이 지났는지 정확히 파악</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">3</span>
                  <div>
                    <strong className="text-foreground block mb-1">연체금 정확히 계산:</strong>
                    <span className="text-muted-foreground">원금 + 이자 + 연체이자 + 지연배상금 합계 확인</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">4</span>
                  <div>
                    <strong className="text-foreground block mb-1">긴급 자금 마련 계획 수립:</strong>
                    <span className="text-muted-foreground">5일 내 마련 가능한 모든 방법 검토 (아래 섹션 참고)</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 대출 기관에 전화할 때 "5일 내 상환 예정"이라고 
                  명확히 말하세요. 일부 금융기관은 상환 의사가 있으면 신용평가 등록을 1-2일 유예해주기도 합니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="fund-raising" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <DollarSign className="w-7 h-7 text-[#1A237E]" />
                5일 내 자금 마련 방법 (우선순위)
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">긴급 자금</strong>을 마련하는 방법을 빠른 순서대로 정리했습니다. 
                위에서부터 순서대로 시도하세요.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">1</span>
                  <div>
                    <strong className="text-foreground block mb-1">가족/지인 차용 (즉시~1일):</strong>
                    <span className="text-muted-foreground">가장 빠른 방법. 며칠 내 갚을 수 있다고 설명하고 차용</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">2</span>
                  <div>
                    <strong className="text-foreground block mb-1">신용카드 현금서비스 (즉시~1일):</strong>
                    <span className="text-muted-foreground">수수료 3-5%, 금리 높지만 즉시 출금 가능</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">3</span>
                  <div>
                    <strong className="text-foreground block mb-1">카드론 (1-2일):</strong>
                    <span className="text-muted-foreground">신용카드 한도 내에서 대출, 당일~익일 입금</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">4</span>
                  <div>
                    <strong className="text-foreground block mb-1">마이너스 통장 개설 (1-2일):</strong>
                    <span className="text-muted-foreground">급여 통장 있는 은행에서 간편 심사로 개설</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">5</span>
                  <div>
                    <strong className="text-foreground block mb-1">비상금대출 (2-3일):</strong>
                    <span className="text-muted-foreground">카카오뱅크, 토스 등 인터넷은행 긴급대출 (한도 300만원)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">6</span>
                  <div>
                    <strong className="text-foreground block mb-1">직장 가불 (2-3일):</strong>
                    <span className="text-muted-foreground">회사 복지 제도 활용, 다음 월급에서 공제</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                다양한 대출 상품 비교는 
                <Link href="/blog/first-loan-guide-2030" className="text-[#1A237E] hover:underline mx-1">
                  대출 상품 비교 가이드
                </Link>
                에서 확인하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="negotiation" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Shield className="w-7 h-7 text-[#1A237E]" />
                금융기관과 협상하는 방법
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">자금 마련이 어렵다면</strong> 금융기관과 적극적으로 협상하세요. 
                5일 내 상환 의지를 보이면 도움을 받을 수 있습니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">일부 상환 제안:</strong>
                    <span className="text-muted-foreground">"오늘 50만원 입금하고, 3일 내 나머지 50만원 입금하겠습니다"</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">신용평가 등록 유예 요청:</strong>
                    <span className="text-muted-foreground">"5일 내 전액 상환 예정이니 신용평가 등록을 며칠만 유예해달라"</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">이자만 납부 요청:</strong>
                    <span className="text-muted-foreground">원금은 나중에, 이자만 먼저 납부하여 연체 상태 해소</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">상환 계획서 제출:</strong>
                    <span className="text-muted-foreground">구체적인 상환 일정을 문서로 작성하여 이메일 발송</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 통화 내용을 녹음하거나 메모하세요. 
                  나중에 분쟁이 생길 경우 증거 자료로 활용할 수 있습니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="after-repayment" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <CheckCircle className="w-7 h-7 text-[#1A237E]" />
                상환 후 후속 조치
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">5일 내 상환했다면</strong> 다음 조치를 통해 재발을 방지하세요.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">자동이체 설정:</strong>
                    <span className="text-muted-foreground">상환일 전날 자동이체되도록 설정 (잔액 부족 방지)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">알림 설정:</strong>
                    <span className="text-muted-foreground">상환일 3일 전, 1일 전에 카카오톡/문자 알림 설정</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">비상금 마련:</strong>
                    <span className="text-muted-foreground">월급의 10% 이상을 비상금 통장에 자동이체</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">대출 통합 검토:</strong>
                    <span className="text-muted-foreground">여러 대출이 있다면 하나로 통합하여 관리 간소화</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                대출 통합에 대한 정보는 
                <Link href="/debt/guide" className="text-[#1A237E] hover:underline">
                  채무통합 가이드
                </Link>
                를 참고하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="prevention" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <TrendingDown className="w-7 h-7 text-[#1A237E]" />
                연체 예방을 위한 장기 전략
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">근본적인 해결</strong>을 위해서는 재무 구조를 개선해야 합니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">소득 대비 부채 비율 확인:</strong>
                    <span className="text-muted-foreground">DSR 40% 이하로 유지 (초과 시 대환대출 검토)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">저금리 전환:</strong>
                    <span className="text-muted-foreground">20% 이상 고금리 대출은 10-15% 저금리로 갈아타기</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">추가 소득 확보:</strong>
                    <span className="text-muted-foreground">부업, 프리랜서 등으로 월 30-50만원 추가 소득</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">재무 상담:</strong>
                    <span className="text-muted-foreground">신용회복위원회 무료 상담 활용 (1600-5500)</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                신용점수 관리는 
                <Link href="/blog/first-loan-guide-2030" className="text-[#1A237E] hover:underline">
                  신용점수 가이드
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
            title="소액 대출 연체 5일 전 긴급 해결 방법"
            description="연체 기록이 남기 전 5일 골든타임 안에 해결하는 방법"
            variant="inline"
            className="mt-8"
          />
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
      
      <div className="lg:hidden">
        <BlogShareButtons
          title="소액 대출 연체 5일 전 긴급 해결 방법"
          description="연체 기록이 남기 전 5일 골든타임 안에 해결하는 방법"
          variant="bottom-fixed"
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "소액 대출 연체 5일 전 긴급 해결 방법",
            "description": "소액 대출 연체 기록이 남기 전 5일 골든타임 안에 해결하는 방법. 단기 연체 대처법, 신용점수 영향, 긴급 자금 마련 방법을 금융 전문가가 알려드립니다.",
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
