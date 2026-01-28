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
import { AlertCircle, DollarSign, FileText, CheckCircle, TrendingDown, Shield } from "lucide-react";
import { faqs } from "./faqs";

export default function RehabilitationLatePaymentLoan() {
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
              개인회생 변제금 미납 시<br />긴급생계비 대출 완벽 가이드
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              변제금을 낼 수 없을 때, 긴급생계비 대출로 위기를 극복하는 방법
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
                title="개인회생 변제금 미납 시 긴급생계비 대출 가이드"
                description="변제금을 낼 수 없을 때 긴급생계비 대출로 해결하는 방법"
                variant="sticky"
              />
            </div>
          </div>

          <article className="flex-1 max-w-4xl prose prose-xl prose-slate max-w-none">
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">개인회생 변제금</strong>을 납부해야 하는데 갑작스러운 실직이나 질병으로 
                돈이 없다면 어떻게 해야 할까요? 변제금 미납이 계속되면 개인회생 인가가 취소될 수 있어 큰 걱정이 됩니다.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                이럴 때 활용할 수 있는 것이 바로 <strong className="text-[#1A237E]">긴급생계비 대출</strong>입니다. 
                이 글에서는 개인회생 중에도 받을 수 있는 긴급생계비 대출의 자격, 한도, 신청 방법을 
                한지우 채무조정 전문가가 상세히 알려드립니다. 관련 계산은 
                <Link href="/cal/debt-reduction" className="text-[#1A237E] hover:underline">채무 계산기</Link>를 활용하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="why-emergency-loan" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <AlertCircle className="w-7 h-7 text-[#1A237E]" />
                변제금 미납의 위험성
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">개인회생 변제금을 2회 이상 연체</strong>하면 법원에서 인가를 취소할 수 있습니다. 
                인가가 취소되면 다시 원래의 채무 상태로 돌아가게 되어, 그동안의 노력이 물거품이 됩니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">2회 이상 연체:</strong>
                    <span className="text-muted-foreground">법원이 개인회생 인가를 취소할 수 있음</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">인가 취소 시:</strong>
                    <span className="text-muted-foreground">원래 채무 금액으로 복구, 강제집행 재개 가능</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">신용도 악화:</strong>
                    <span className="text-muted-foreground">추가 연체 기록으로 신용점수 하락</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 변제금 납부가 어려울 것 같다면 
                  미리 법원에 사정 변경 신청을 하는 것이 좋습니다. 하지만 법원 승인까지 시간이 걸리므로, 
                  긴급생계비 대출을 활용해 일단 변제금을 납부하고 안정을 찾는 것이 현명합니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="emergency-loan-types" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <DollarSign className="w-7 h-7 text-[#1A237E]" />
                긴급생계비 대출 종류
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">긴급생계비 대출</strong>은 저소득층과 채무조정 중인 사람들을 위한 
                서민금융 상품입니다. 개인회생 중에도 신청 가능한 대표적인 상품은 다음과 같습니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">신용회복위원회 긴급생계비:</strong>
                    <span className="text-muted-foreground">한도 최대 300만원, 금리 연 10% 내외, 상환기간 최대 5년</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">서민금융진흥원 햇살론:</strong>
                    <span className="text-muted-foreground">한도 최대 1,500만원, 금리 연 10-20%, 개인회생 진행 중에도 가능</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">사회복지공동모금회 긴급지원:</strong>
                    <span className="text-muted-foreground">무이자 또는 저금리, 한도 300만원 이내, 실제 생계비 용도만 가능</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                더 자세한 대출 상품 비교는 
                <Link href="/debt/personal-rehabilitation-bankruptcy" className="text-[#1A237E] hover:underline mx-1">
                  개인회생 가이드
                </Link>
                에서 확인할 수 있습니다.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="eligibility" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <FileText className="w-7 h-7 text-[#1A237E]" />
                신청 자격 및 조건
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">긴급생계비 대출</strong>을 받기 위해서는 몇 가지 조건을 충족해야 합니다. 
                기관마다 조금씩 다르지만 공통적으로 요구하는 조건은 다음과 같습니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">소득 기준:</strong>
                    <span className="text-muted-foreground">연소득 3,500만원 이하 (기관별 상이)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">신용등급:</strong>
                    <span className="text-muted-foreground">개인회생 중이라도 최소 6개월 이상 성실 변제 이력 필요</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">용도 증빙:</strong>
                    <span className="text-muted-foreground">변제금 납부, 의료비, 생활비 등 실제 긴급 용도 증빙 필요</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">담당 변호사 확인:</strong>
                    <span className="text-muted-foreground">일부 기관은 개인회생 담당 변호사나 법원의 확인서 필요</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">⚠️ 주의:</strong> 개인회생 인가 전에는 대출이 어렵습니다. 
                  인가 결정 후 최소 6개월 이상 성실하게 변제금을 납부한 이력이 있어야 승인 가능성이 높아집니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="application-process" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <CheckCircle className="w-7 h-7 text-[#1A237E]" />
                신청 절차 및 필요 서류
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">긴급생계비 대출 신청</strong>은 온라인 또는 방문 신청 모두 가능합니다. 
                일반적인 절차는 다음과 같습니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">1단계 - 상담 신청:</strong>
                    <span className="text-muted-foreground">신용회복위원회(1600-5500) 또는 서민금융진흥원 홈페이지에서 상담 신청</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">2단계 - 서류 제출:</strong>
                    <span className="text-muted-foreground">신분증, 소득증빙, 개인회생 인가결정문, 변제 이행 증명서, 긴급 사유 증빙</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">3단계 - 심사:</strong>
                    <span className="text-muted-foreground">약 1-2주 소요, 소득 및 변제 이력 확인</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">4단계 - 대출 실행:</strong>
                    <span className="text-muted-foreground">승인 후 3-5 영업일 내 입금</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                신청 과정이 복잡하다면 
                <Link href="/debt/guide" className="text-[#1A237E] hover:underline">
                  채무조정 절차 가이드
                </Link>
                도 함께 참고하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="repayment-tips" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <TrendingDown className="w-7 h-7 text-[#1A237E]" />
                상환 계획 및 주의사항
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                긴급생계비 대출을 받았다면, <strong className="text-[#1A237E]">상환 계획</strong>을 반드시 세워야 합니다. 
                개인회생 변제금과 긴급대출 상환을 동시에 해야 하므로 계획적인 관리가 필수입니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">자동이체 설정:</strong>
                    <span className="text-muted-foreground">변제금과 대출 상환일을 급여일 다음날로 설정</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">추가 소득 확보:</strong>
                    <span className="text-muted-foreground">부업이나 아르바이트로 상환 여력 확보</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">법원 통보:</strong>
                    <span className="text-muted-foreground">긴급대출을 받았다면 법원에 보고 (일부 법원은 의무)</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 긴급대출은 일시적인 해결책일 뿐입니다. 
                  근본적으로는 소득을 늘리거나 지출을 줄여 변제금을 안정적으로 납부할 수 있는 구조를 만들어야 합니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="alternatives" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Shield className="w-7 h-7 text-[#1A237E]" />
                대안 및 장기 전략
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                긴급대출 외에도 <strong className="text-[#1A237E]">변제금 부담을 줄일 수 있는 방법</strong>이 있습니다. 
                장기적으로는 이런 방법들을 고려하는 것이 좋습니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">변제계획 변경 신청:</strong>
                    <span className="text-muted-foreground">소득 감소 시 법원에 변제금 감액 신청 가능</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">연장 신청:</strong>
                    <span className="text-muted-foreground">최대 2년까지 변제 기간 연장 가능 (법원 승인 필요)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">지자체 지원:</strong>
                    <span className="text-muted-foreground">일부 지자체에서 저소득층 긴급생계비 지원 (무이자)</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                개인회생 후 신용 회복에 대한 자세한 정보는 
                <Link href="/blog/personal-rehabilitation-2026" className="text-[#1A237E] hover:underline">
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
            expertId="expert-debt-02"
            publishedDate="2026-01-28"
            lastUpdated="2026-01-28"
          />

          <BlogShareButtons
            title="개인회생 변제금 미납 시 긴급생계비 대출 가이드"
            description="변제금을 낼 수 없을 때 긴급생계비 대출로 해결하는 방법"
            variant="inline"
            className="mt-8"
          />
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
      
      <div className="lg:hidden">
        <BlogShareButtons
          title="개인회생 변제금 미납 시 긴급생계비 대출 가이드"
          description="변제금을 낼 수 없을 때 긴급생계비 대출로 해결하는 방법"
          variant="bottom-fixed"
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "개인회생 변제금 미납 시 긴급생계비 대출 가이드",
            "description": "개인회생 변제금을 낼 수 없을 때, 긴급생계비 대출로 해결하는 방법. 신청 자격, 한도, 금리, 신청 절차를 채무조정 전문가가 상세히 알려드립니다.",
            "author": {
              "@type": "Person",
              "name": "한지우",
              "jobTitle": "채무조정 전문가"
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
