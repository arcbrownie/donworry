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
import { Award, DollarSign, FileCheck, TrendingUp, Calculator, Shield } from "lucide-react";
import { faqs } from "./faqs";

export default function Rehabilitation12MonthAdditionalLoan() {
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
              개인회생 12개월 성실상환 후<br />추가대출 완벽 가이드
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              성실 변제로 신용을 회복하고, 추가 자금을 확보하는 방법
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
                title="개인회생 12개월 성실상환 후 추가대출 가이드"
                description="성실 변제로 신용을 회복하고 추가 자금을 확보하는 방법"
                variant="sticky"
              />
            </div>
          </div>

          <article className="flex-1 max-w-4xl prose prose-xl prose-slate max-w-none">
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">개인회생 인가</strong>를 받고 12개월 동안 성실하게 변제금을 납부했다면, 
                이제 추가대출을 받을 수 있는 자격이 생깁니다. 긴급 생활비나 사업 자금이 필요할 때 활용할 수 있습니다.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                이 글에서는 <strong className="text-[#1A237E]">12개월 성실상환자 추가대출</strong>의 자격, 한도, 금리, 
                신청 방법을 서준호 신용회복 전문가가 상세히 알려드립니다. 
                대출 가능 금액은 <Link href="/cal/interest-saving" className="text-[#1A237E] hover:underline">대출 계산기</Link>로 
                확인해보세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="why-12months" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Award className="w-7 h-7 text-[#1A237E]" />
                12개월 성실상환의 의미
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">12개월 성실상환</strong>이란 개인회생 인가 결정 후 1년 동안 
                변제금을 한 번도 연체하지 않고 납부한 것을 의미합니다. 이는 금융기관에 신용 회복의 의지를 증명하는 중요한 지표입니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">성실상환 기준:</strong>
                    <span className="text-muted-foreground">인가 후 12개월 연속 변제금 정상 납부 (연체 0회)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">신용 회복 효과:</strong>
                    <span className="text-muted-foreground">성실 변제 이력으로 신용점수 점진적 상승</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">대출 자격 획득:</strong>
                    <span className="text-muted-foreground">서민금융 상품 및 저금리 대출 신청 가능</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> 12개월 성실 변제는 신용 회복의 첫 관문입니다. 
                  이후 24개월, 36개월을 채우면 더 좋은 조건의 대출 상품을 이용할 수 있습니다.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="loan-products" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <DollarSign className="w-7 h-7 text-[#1A237E]" />
                추가대출 가능 상품
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">12개월 성실상환자</strong>가 신청할 수 있는 대표적인 대출 상품은 다음과 같습니다. 
                각 상품마다 조건과 한도가 다르므로 자신에게 맞는 상품을 선택하세요.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">햇살론 (서민금융진흥원):</strong>
                    <span className="text-muted-foreground">한도 최대 2,000만원, 금리 연 10-20%, 상환기간 최대 7년</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">새희망홀씨 (신용회복위원회):</strong>
                    <span className="text-muted-foreground">한도 최대 3,000만원, 금리 연 9-12%, 12개월 성실 변제 필수</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">사잇돌대출 (은행권):</strong>
                    <span className="text-muted-foreground">한도 최대 3,500만원, 금리 연 8-15%, 연소득 3,500만원 이하</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">지자체 소상공인 대출:</strong>
                    <span className="text-muted-foreground">자영업자 대상, 한도 및 금리는 지역별 상이</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                대출 상품 비교는 
                <Link href="/blog/first-loan-guide-2030" className="text-[#1A237E] hover:underline mx-1">
                  대출 가이드
                </Link>
                에서 자세히 확인할 수 있습니다.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="eligibility" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <FileCheck className="w-7 h-7 text-[#1A237E]" />
                신청 자격 및 조건
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">추가대출</strong>을 받기 위해서는 성실 변제 외에도 몇 가지 조건을 충족해야 합니다. 
                금융기관마다 다를 수 있지만 일반적인 조건은 다음과 같습니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">변제 이력:</strong>
                    <span className="text-muted-foreground">개인회생 인가 후 12개월 이상 연체 없이 정상 납부</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">소득 증빙:</strong>
                    <span className="text-muted-foreground">재직증명서, 소득금액증명원 등 안정적 소득 증빙 필요</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">DSR (총부채원리금상환비율):</strong>
                    <span className="text-muted-foreground">연소득 대비 부채 상환 비율 40% 이하 (상품별 상이)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">법원 허가:</strong>
                    <span className="text-muted-foreground">일부 금액 이상은 법원의 추가 차입 허가 필요 (보통 300-500만원 초과 시)</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">⚠️ 주의:</strong> 법원 허가 없이 임의로 대출을 받으면 
                  개인회생 인가가 취소될 수 있습니다. 반드시 법원에 추가 차입 허가를 신청하세요.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="application-process" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <TrendingUp className="w-7 h-7 text-[#1A237E]" />
                신청 절차 단계별 가이드
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">추가대출 신청</strong>은 법원 허가와 금융기관 심사를 거쳐야 합니다. 
                일반적인 절차는 다음과 같습니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">1단계 - 법원 허가 신청:</strong>
                    <span className="text-muted-foreground">관할 법원에 추가 차입 허가 신청서 제출 (대출 금액, 용도, 상환 계획 포함)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">2단계 - 법원 허가 대기:</strong>
                    <span className="text-muted-foreground">약 2-4주 소요, 법원이 상환 능력을 심사</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">3단계 - 금융기관 신청:</strong>
                    <span className="text-muted-foreground">법원 허가서를 받은 후 서민금융진흥원, 신용회복위원회 등에 대출 신청</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">4단계 - 서류 제출 및 심사:</strong>
                    <span className="text-muted-foreground">신분증, 소득증빙, 개인회생 인가결정문, 변제 이행 증명서, 법원 허가서</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">5단계 - 대출 실행:</strong>
                    <span className="text-muted-foreground">승인 후 3-7 영업일 내 입금</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                법원 허가 절차가 복잡하다면 
                <Link href="/debt/personal-rehabilitation-bankruptcy" className="text-[#1A237E] hover:underline">
                  개인회생 가이드
                </Link>
                도 함께 참고하세요.
              </p>
            </section>

            <section className="mb-10">
              <h2 id="calculation" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Calculator className="w-7 h-7 text-[#1A237E]" />
                대출 한도 및 금리 계산
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">대출 한도</strong>는 소득, 신용점수, 변제 이력에 따라 달라집니다. 
                일반적으로 연소득의 30-50% 범위 내에서 승인됩니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">예시 1 - 연소득 3,000만원:</strong>
                    <span className="text-muted-foreground">햇살론 약 1,500만원, 새희망홀씨 약 1,200만원</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">예시 2 - 연소득 2,000만원:</strong>
                    <span className="text-muted-foreground">햇살론 약 800만원, 새희망홀씨 약 600만원</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">금리 결정 요소:</strong>
                    <span className="text-muted-foreground">신용점수, 변제 기간 (12/24/36개월), 소득 수준, 담보 유무</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <p className="text-muted-foreground">
                  <strong className="text-[#1A237E]">💡 전문가 TIP:</strong> DSR 40%를 초과하면 승인이 어렵습니다. 
                  현재 변제금과 추가 대출 상환액을 합쳐서 연소득의 40% 이내인지 미리 계산해보세요.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 id="tips" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Shield className="w-7 h-7 text-[#1A237E]" />
                주의사항 및 성공 팁
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                <strong className="text-[#1A237E]">추가대출</strong>을 받을 때는 다음 사항을 반드시 주의하세요. 
                무리한 대출은 오히려 개인회생 완수를 어렵게 만들 수 있습니다.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">필요한 만큼만 대출:</strong>
                    <span className="text-muted-foreground">한도가 크다고 최대 금액을 받지 말고, 실제 필요 금액만 신청</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">상환 계획 수립:</strong>
                    <span className="text-muted-foreground">변제금 + 대출 상환금을 합쳐서 월 소득의 40% 이하로 유지</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">법원 보고 의무:</strong>
                    <span className="text-muted-foreground">대출 실행 후 법원에 보고 (일부 법원 필수)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">24개월 목표:</strong>
                    <span className="text-muted-foreground">24개월 성실 변제 시 더 좋은 조건의 대출 이용 가능</span>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                개인회생 완수 후 신용 회복에 대한 자세한 정보는 
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
            expertId="expert-debt-03"
            publishedDate="2026-01-28"
            lastUpdated="2026-01-28"
          />

          <BlogShareButtons
            title="개인회생 12개월 성실상환 후 추가대출 가이드"
            description="성실 변제로 신용을 회복하고 추가 자금을 확보하는 방법"
            variant="inline"
            className="mt-8"
          />
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
      
      <div className="lg:hidden">
        <BlogShareButtons
          title="개인회생 12개월 성실상환 후 추가대출 가이드"
          description="성실 변제로 신용을 회복하고 추가 자금을 확보하는 방법"
          variant="bottom-fixed"
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "개인회생 12개월 성실상환 후 추가대출 가이드",
            "description": "개인회생 인가 후 12개월 성실 변제 시 받을 수 있는 추가대출 완벽 가이드. 자격 조건, 한도, 금리, 신청 방법을 채무조정 전문가가 알려드립니다.",
            "author": {
              "@type": "Person",
              "name": "서준호",
              "jobTitle": "신용회복 전문가"
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
