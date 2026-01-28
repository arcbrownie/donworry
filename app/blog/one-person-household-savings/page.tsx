"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import AdSenseDisplay from "@/components/adsense/AdSenseDisplay";
import { 
  Wallet, 
  Utensils, 
  Smartphone, 
  Zap, 
  Bus, 
  ArrowDownToLine, 
  ShoppingCart, 
  Home, 
  Map, 
  Receipt,
  Calculator,
  ArrowRight
} from "lucide-react";
// FAQ는 faqs.ts 파일에서 관리됩니다

// 가계비 절약 계산기 위젯
function HouseholdExpenseSavingsCalculator() {
  const [deliveryFrequency, setDeliveryFrequency] = useState<number>(4); // 주당 배달 주문 횟수
  const [phoneBill, setPhoneBill] = useState<number>(89000); // 현재 통신비
  const [interestPayment, setInterestPayment] = useState<number>(0); // 현재 이자 지불액

  const [selectedSavings, setSelectedSavings] = useState<{
    delivery: boolean;
    phone: boolean;
    convenience: boolean;
    ott: boolean;
    transport: boolean;
    energy: boolean;
    secondhand: boolean;
    fridge: boolean;
    localCard: boolean;
    interest: boolean;
  }>({
    delivery: false,
    phone: false,
    convenience: false,
    ott: false,
    transport: false,
    energy: false,
    secondhand: false,
    fridge: false,
    localCard: false,
    interest: false,
  });

  const calculateSavings = () => {
    let totalMonthly = 0;
    let savings: { name: string; amount: number }[] = [];

    if (selectedSavings.delivery) {
      // 주 4회 → 주 1회: 월 12회 절약 = 배달비 4,000원 x 12 + 과잉지출 120,000원
      const deliverySavings = (deliveryFrequency - 1) * 4 * 4000 + Math.max(0, (deliveryFrequency - 1) * 4 * 25000);
      totalMonthly += deliverySavings;
      savings.push({ name: "배달 앱 절약", amount: deliverySavings });
    }

    if (selectedSavings.phone) {
      // 월 89,000원 → 15,000원 알뜰폰
      const phoneSavings = Math.max(0, phoneBill - 15000);
      totalMonthly += phoneSavings;
      savings.push({ name: "통신비 절약", amount: phoneSavings });
    }

    if (selectedSavings.convenience) {
      // 편의점 절약: 월 30,000원 ~ 50,000원
      totalMonthly += 40000;
      savings.push({ name: "편의점 절약", amount: 40000 });
    }

    if (selectedSavings.ott) {
      // OTT 절약: 월 20,000원
      totalMonthly += 20000;
      savings.push({ name: "OTT 구독 절약", amount: 20000 });
    }

    if (selectedSavings.transport) {
      // 교통비 환급: 월 20,000원 ~ 30,000원
      totalMonthly += 25000;
      savings.push({ name: "교통비 환급", amount: 25000 });
    }

    if (selectedSavings.energy) {
      // 에너지 절약: 월 커피 한 잔 값 (5,000원)
      totalMonthly += 5000;
      savings.push({ name: "에너지 절약", amount: 5000 });
    }

    if (selectedSavings.secondhand) {
      // 중고 거래: 가구/가전 70% 절감, 월평균 30,000원
      totalMonthly += 30000;
      savings.push({ name: "중고 거래 절약", amount: 30000 });
    }

    if (selectedSavings.fridge) {
      // 냉장고 관리: 월 20,000원
      totalMonthly += 20000;
      savings.push({ name: "냉장고 관리 절약", amount: 20000 });
    }

    if (selectedSavings.localCard) {
      // 지역사랑상품권: 10% 할인, 월 10,000원 절약
      totalMonthly += 10000;
      savings.push({ name: "지역사랑상품권", amount: 10000 });
    }

    if (selectedSavings.interest && interestPayment > 0) {
      // 이자 절감: 입력된 이자 지불액의 60% 절감 (고금리 → 저금리)
      const interestSavings = Math.round(interestPayment * 0.6);
      totalMonthly += interestSavings;
      savings.push({ name: "이자 절감", amount: interestSavings });
    }

    const annualSavings = totalMonthly * 12;

    return {
      monthly: totalMonthly,
      annual: annualSavings,
      breakdown: savings,
    };
  };

  const savingsResult = calculateSavings();

  return (
    <Card className="p-6 bg-gradient-to-br from-[#1A237E]/5 via-[#4A148C]/5 to-[#1A237E]/5 border-2 border-[#1A237E]/20 shadow-lg my-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A237E] to-[#4A148C] flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#1A237E]">가계비 절약 계산기</h3>
          <p className="text-sm text-muted-foreground">나의 예상 절감액 확인하기</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* 입력 필드 */}
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <Label htmlFor="delivery" className="text-sm font-semibold text-[#1A237E] mb-2 block">
              주당 배달 주문 횟수
            </Label>
            <Input
              id="delivery"
              type="number"
              value={deliveryFrequency}
              onChange={(e) => setDeliveryFrequency(Number(e.target.value))}
              className="border-2 border-[#1A237E]/30 focus:border-[#1A237E]"
              min="0"
              max="7"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-sm font-semibold text-[#1A237E] mb-2 block">
              현재 통신비 (원/월)
            </Label>
            <Input
              id="phone"
              type="number"
              value={phoneBill}
              onChange={(e) => setPhoneBill(Number(e.target.value))}
              className="border-2 border-[#1A237E]/30 focus:border-[#1A237E]"
              min="0"
            />
          </div>
          <div>
            <Label htmlFor="interest" className="text-sm font-semibold text-[#1A237E] mb-2 block">
              현재 이자 지불액 (원/월)
            </Label>
            <Input
              id="interest"
              type="number"
              value={interestPayment}
              onChange={(e) => setInterestPayment(Number(e.target.value))}
              className="border-2 border-[#1A237E]/30 focus:border-[#1A237E]"
              min="0"
            />
          </div>
        </div>

        {/* 절약 항목 체크박스 */}
        <div className="space-y-3 pt-4 border-t border-[#1A237E]/20">
          <h4 className="font-semibold text-foreground mb-3">적용할 절약 방법 선택</h4>
          
          <div className="grid gap-3 md:grid-cols-2">
            <label className="flex items-center space-x-3 p-3 rounded-lg border border-[#1A237E]/20 hover:bg-[#1A237E]/5 cursor-pointer group">
              <Checkbox
                checked={selectedSavings.delivery}
                onCheckedChange={(checked) =>
                  setSelectedSavings({ ...selectedSavings, delivery: checked as boolean })
                }
              />
              <Utensils className="w-4 h-4 text-[#1A237E]" />
              <span className="text-sm font-medium flex-1">배달 앱 사용 줄이기</span>
              <a 
                href="#savings-1" 
                className="text-xs text-[#1A237E] opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('savings-1')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                상세보기 →
              </a>
            </label>

            <label className="flex items-center space-x-3 p-3 rounded-lg border border-[#1A237E]/20 hover:bg-[#1A237E]/5 cursor-pointer group">
              <Checkbox
                checked={selectedSavings.phone}
                onCheckedChange={(checked) =>
                  setSelectedSavings({ ...selectedSavings, phone: checked as boolean })
                }
              />
              <Smartphone className="w-4 h-4 text-[#1A237E]" />
              <span className="text-sm font-medium flex-1">알뜰폰 전환</span>
              <a 
                href="#savings-2" 
                className="text-xs text-[#1A237E] opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('savings-2')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                상세보기 →
              </a>
            </label>

            <label className="flex items-center space-x-3 p-3 rounded-lg border border-[#1A237E]/20 hover:bg-[#1A237E]/5 cursor-pointer group">
              <Checkbox
                checked={selectedSavings.convenience}
                onCheckedChange={(checked) =>
                  setSelectedSavings({ ...selectedSavings, convenience: checked as boolean })
                }
              />
              <ShoppingCart className="w-4 h-4 text-[#1A237E]" />
              <span className="text-sm font-medium flex-1">편의점 이용 줄이기</span>
              <a 
                href="#savings-3" 
                className="text-xs text-[#1A237E] opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('savings-3')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                상세보기 →
              </a>
            </label>

            <label className="flex items-center space-x-3 p-3 rounded-lg border border-[#1A237E]/20 hover:bg-[#1A237E]/5 cursor-pointer group">
              <Checkbox
                checked={selectedSavings.ott}
                onCheckedChange={(checked) =>
                  setSelectedSavings({ ...selectedSavings, ott: checked as boolean })
                }
              />
              <Zap className="w-4 h-4 text-[#1A237E]" />
              <span className="text-sm font-medium flex-1">OTT 구독 최적화</span>
              <a 
                href="#savings-4" 
                className="text-xs text-[#1A237E] opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('savings-4')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                상세보기 →
              </a>
            </label>

            <label className="flex items-center space-x-3 p-3 rounded-lg border border-[#1A237E]/20 hover:bg-[#1A237E]/5 cursor-pointer group">
              <Checkbox
                checked={selectedSavings.transport}
                onCheckedChange={(checked) =>
                  setSelectedSavings({ ...selectedSavings, transport: checked as boolean })
                }
              />
              <Bus className="w-4 h-4 text-[#1A237E]" />
              <span className="text-sm font-medium flex-1">K-패스 활용</span>
              <a 
                href="#savings-5" 
                className="text-xs text-[#1A237E] opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('savings-5')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                상세보기 →
              </a>
            </label>

            <label className="flex items-center space-x-3 p-3 rounded-lg border border-[#1A237E]/20 hover:bg-[#1A237E]/5 cursor-pointer group">
              <Checkbox
                checked={selectedSavings.energy}
                onCheckedChange={(checked) =>
                  setSelectedSavings({ ...selectedSavings, energy: checked as boolean })
                }
              />
              <Zap className="w-4 h-4 text-[#1A237E]" />
              <span className="text-sm font-medium flex-1">에너지 절약</span>
              <a 
                href="#savings-6" 
                className="text-xs text-[#1A237E] opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('savings-6')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                상세보기 →
              </a>
            </label>

            <label className="flex items-center space-x-3 p-3 rounded-lg border border-[#1A237E]/20 hover:bg-[#1A237E]/5 cursor-pointer group">
              <Checkbox
                checked={selectedSavings.secondhand}
                onCheckedChange={(checked) =>
                  setSelectedSavings({ ...selectedSavings, secondhand: checked as boolean })
                }
              />
              <Home className="w-4 h-4 text-[#1A237E]" />
              <span className="text-sm font-medium flex-1">중고 거래 활용</span>
              <a 
                href="#savings-7" 
                className="text-xs text-[#1A237E] opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('savings-7')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                상세보기 →
              </a>
            </label>

            <label className="flex items-center space-x-3 p-3 rounded-lg border border-[#1A237E]/20 hover:bg-[#1A237E]/5 cursor-pointer group">
              <Checkbox
                checked={selectedSavings.fridge}
                onCheckedChange={(checked) =>
                  setSelectedSavings({ ...selectedSavings, fridge: checked as boolean })
                }
              />
              <Receipt className="w-4 h-4 text-[#1A237E]" />
              <span className="text-sm font-medium flex-1">냉장고 관리</span>
              <a 
                href="#savings-8" 
                className="text-xs text-[#1A237E] opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('savings-8')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                상세보기 →
              </a>
            </label>

            <label className="flex items-center space-x-3 p-3 rounded-lg border border-[#1A237E]/20 hover:bg-[#1A237E]/5 cursor-pointer group">
              <Checkbox
                checked={selectedSavings.localCard}
                onCheckedChange={(checked) =>
                  setSelectedSavings({ ...selectedSavings, localCard: checked as boolean })
                }
              />
              <Map className="w-4 h-4 text-[#1A237E]" />
              <span className="text-sm font-medium flex-1">지역사랑상품권</span>
              <a 
                href="#savings-9" 
                className="text-xs text-[#1A237E] opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('savings-9')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                상세보기 →
              </a>
            </label>

            <label className="flex items-center space-x-3 p-3 rounded-lg border border-[#1A237E]/20 hover:bg-[#1A237E]/5 cursor-pointer group">
              <Checkbox
                checked={selectedSavings.interest}
                onCheckedChange={(checked) =>
                  setSelectedSavings({ ...selectedSavings, interest: checked as boolean })
                }
              />
              <ArrowDownToLine className="w-4 h-4 text-[#1A237E]" />
              <span className="text-sm font-medium flex-1">고금리 대출 갈아타기</span>
              <a 
                href="#savings-10" 
                className="text-xs text-[#1A237E] opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('savings-10')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                상세보기 →
              </a>
            </label>
          </div>
        </div>

        {/* 결과 표시 */}
        {savingsResult.annual > 0 && (
          <div className="mt-6 p-6 bg-gradient-to-br from-[#4A148C]/10 to-[#1A237E]/10 rounded-xl border-2 border-[#4A148C]/30">
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground mb-2">예상 연간 절감액</p>
              <p className="text-4xl font-extrabold text-[#4A148C] mb-1">
                {savingsResult.annual.toLocaleString()}원
              </p>
              <p className="text-lg text-muted-foreground">
                (월 {savingsResult.monthly.toLocaleString()}원)
              </p>
            </div>

            {savingsResult.breakdown.length > 0 && (
              <div className="mt-4 pt-4 border-t border-[#4A148C]/20">
                <p className="text-sm font-semibold text-foreground mb-2">절약 내역</p>
                <div className="space-y-2">
                  {savingsResult.breakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="font-semibold text-[#1A237E]">
                        +{item.amount.toLocaleString()}원/월
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}

export default function OnePersonHouseholdSavingsDetailed() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Scroll progress
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
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight max-w-4xl mx-auto break-words line-clamp-2">
              1인 가구 생활비 절약 꿀팁 10가지: 매달 최소 15만원 확정 절감 가이드
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              "숨만 쉬어도 나가는 돈?" 구체적인 실천 사례로 통장 로그아웃을 막아드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents */}
          <div className="lg:w-64 flex-shrink-0">
            <TableOfContents />
          </div>

          {/* Article Content */}
          <article className="flex-1 max-w-4xl prose prose-xl prose-slate max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                2026년 현재, 대한민국 1인 가구의 월평균 생활비는 주거비를 제외하고도 150만 원을 훌쩍 넘어섰습니다. 치솟는 외식 물가와 공공요금 인상은 혼자 사는 이들에게 더 가혹하게 다가옵니다. 돈워리에서 매달 최소 15만 원 이상의 실질적인 여유 자금을 확보할 수 있는 구체적 실천법 10가지를 전해드립니다.
              </p>
            </section>

            {/* Section 1 */}
            <section id="savings-1" className="mb-10 scroll-mt-20">
              <h2 id="delivery-savings" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Utensils className="w-7 h-7 text-[#1A237E]" />
                배달 앱 '중독'에서 '선택'으로: 월 12만 원 절약
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                주 4회 배달을 주 1회로 줄인다면? 배달비 4,000원 x 12회 = 48,000원, 과잉 지출 방어 120,000원. <strong className="text-[#1A237E]">총 16만 8천 원의 식비를 즉시 아낄 수 있습니다.</strong> 배달 앱 삭제가 어렵다면 '포장 할인'이나 밀키트 루틴을 만드세요.
              </p>
              <a 
                href="#calculator" 
                className="text-sm text-[#1A237E] hover:underline inline-flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <Calculator className="w-4 h-4" />
                이 항목의 절감액 계산하기 →
              </a>
            </section>

            {/* Section 2 */}
            <section id="savings-2" className="mb-10 scroll-mt-20">
              <h2 id="phone-bill-savings" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Smartphone className="w-7 h-7 text-[#4A148C]" />
                통신비의 대반전, 알뜰폰 e-SIM 활용: 월 5만 원 절약
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                월 89,000원 요금제 대신 15,000원 알뜰폰 요금제로 갈아타면 <strong className="text-[#1A237E]">매달 74,000원이 남습니다.</strong> 1년이면 88만 원으로, 최신 스마트폰 한 대 값입니다.
              </p>
              <a 
                href="#calculator" 
                className="text-sm text-[#1A237E] hover:underline inline-flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <Calculator className="w-4 h-4" />
                이 항목의 절감액 계산하기 →
              </a>
            </section>

            {/* Section 3 */}
            <section id="savings-3" className="mb-10 scroll-mt-20">
              <h2 id="convenience-store-savings" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <ShoppingCart className="w-7 h-7 text-[#1A237E]" />
                편의점 1+1의 심리학과 '장보기 거점' 변경
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                편의점은 편리하지만 가장 비쌉니다. 생필품은 무조건 온라인 '정기 배송'이나 마트 마감 세일을 이용하세요. 편의점 방문 횟수만 절반으로 줄여도 월 3~5만 원이 굳습니다.
              </p>
              <a 
                href="#calculator" 
                className="text-sm text-[#1A237E] hover:underline inline-flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <Calculator className="w-4 h-4" />
                이 항목의 절감액 계산하기 →
              </a>
            </section>

            {/* Section 4 */}
            <section id="savings-4" className="mb-10 scroll-mt-20">
              <h2 id="ott-savings" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Zap className="w-7 h-7 text-[#4A148C]" />
                OTT 뱀파이어 구독 다이어트: 월 2만 원 절약
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                넷플릭스 등 OTT를 공유 플랫폼(링키드 등)으로 전환하여 1/4 가격으로 낮추세요. 안 보는 서비스는 즉시 해지하고 필요할 때만 가입하는 '철새형 구독'이 1인 가구에게 유리합니다.
              </p>
              <a 
                href="#calculator" 
                className="text-sm text-[#1A237E] hover:underline inline-flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <Calculator className="w-4 h-4" />
                이 항목의 절감액 계산하기 →
              </a>
            </section>

            {/* Section 5 */}
            <section id="savings-5" className="mb-10 scroll-mt-20">
              <h2 id="transport-savings" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Bus className="w-7 h-7 text-[#1A237E]" />
                교통비 환급 제도의 끝판왕, K-패스 활용
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                월 15회 이상 이용 시 지출액의 20~53%를 환급해주는 K-패스는 필수입니다. 서울 거주자라면 기후동행카드와 혜택을 반드시 비교하여 월 2~3만 원을 확보하세요.
              </p>
              <a 
                href="#calculator" 
                className="text-sm text-[#1A237E] hover:underline inline-flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <Calculator className="w-4 h-4" />
                이 항목의 절감액 계산하기 →
              </a>
            </section>

            {/* Section 6 */}
            <section id="savings-6" className="mb-10 scroll-mt-20">
              <h2 id="energy-savings" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Zap className="w-7 h-7 text-[#4A148C]" />
                '대기 전력'과 '에너지 캐쉬백' 잡기
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                셋톱박스는 TV보다 전기를 더 많이 먹습니다. 외출 시 셋톱박스 전원만 꺼도 월 커피 한 잔 값이 절약됩니다. '에너지 캐쉬백' 가입을 통해 절감량만큼 현금으로 돌려받으세요.
              </p>
              <a 
                href="#calculator" 
                className="text-sm text-[#1A237E] hover:underline inline-flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <Calculator className="w-4 h-4" />
                이 항목의 절감액 계산하기 →
              </a>
            </section>

            {/* Section 7 */}
            <section id="savings-7" className="mb-10 scroll-mt-20">
              <h2 id="secondhand-savings" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Home className="w-7 h-7 text-[#1A237E]" />
                당근마켓: '충동구매' 방지턱으로 활용하기
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                1인 가구는 공간이 곧 돈입니다. 'One-in One-out' 원칙을 세워 물건 하나를 사면 하나를 파세요. 중고 거래를 적극 활용하면 가구/가전 구입비를 70% 이상 절감할 수 있습니다.
              </p>
              <a 
                href="#calculator" 
                className="text-sm text-[#1A237E] hover:underline inline-flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <Calculator className="w-4 h-4" />
                이 항목의 절감액 계산하기 →
              </a>
            </section>

            {/* Section 8 */}
            <section id="savings-8" className="mb-10 scroll-mt-20">
              <h2 id="fridge-savings" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Receipt className="w-7 h-7 text-[#4A148C]" />
                냉장고 지도와 '소분'의 기술
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                장을 본 후 재료를 즉시 1인분씩 소분하여 냉동 보관하세요. 냉장고 문에 '냉장고 지도'를 붙여 중복 구매를 차단하면 버려지는 식비를 월 2만 원 이상 아낄 수 있습니다.
              </p>
              <a 
                href="#calculator" 
                className="text-sm text-[#1A237E] hover:underline inline-flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <Calculator className="w-4 h-4" />
                이 항목의 절감액 계산하기 →
              </a>
            </section>

            {/* Section 9 */}
            <section id="savings-9" className="mb-10 scroll-mt-20">
              <h2 id="local-card-savings" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Map className="w-7 h-7 text-[#1A237E]" />
                지역사랑상품권 7~10% 상시 할인 받기
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                거주 지역의 '지역사랑상품권'을 미리 구매하세요. 10만 원을 9만 원에 사는 셈이며, 연말정산 시 소득공제 혜택도 신용카드보다 월등히 높습니다.
              </p>
              <a 
                href="#calculator" 
                className="text-sm text-[#1A237E] hover:underline inline-flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <Calculator className="w-4 h-4" />
                이 항목의 절감액 계산하기 →
              </a>
            </section>

            {/* Section 10 */}
            <section id="savings-10" className="mb-10 scroll-mt-20">
              <h2 id="interest-savings" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <ArrowDownToLine className="w-7 h-7 text-[#4A148C]" />
                숨은 이자 도둑 잡기: 월 5만 원 이상 절감
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                고금리 이자는 절약의 최대 적입니다. 500만 원 카드론을 저금리 대환대출로 갈아타면 앉은 자리에서 월 3만 원 이상의 이자를 아낄 수 있습니다. 돈워리의 '이자 절감 계산기'를 활용해 보세요.
              </p>
              <a 
                href="#calculator" 
                className="text-sm text-[#1A237E] hover:underline inline-flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <Calculator className="w-4 h-4" />
                이 항목의 절감액 계산하기 →
              </a>
            </section>

            {/* Budget Calculator Widget */}
            <div id="calculator" className="scroll-mt-20">
              <HouseholdExpenseSavingsCalculator />
            </div>

            {/* Closing */}
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                절약은 당신의 꿈에 자금을 재배치하는 과정입니다. <strong className="text-[#1A237E]">당신의 일상은 가볍게, 돈 걱정은 없게. 돈워리가 함께하겠습니다.</strong>
              </p>
            </section>

            <div className="text-center py-6 border-t border-border mt-10">
              <p className="text-[#1A237E] font-semibold text-lg">
                "돈 걱정 없는 내일, 돈워리가 함께하겠습니다."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 mb-10">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/cal/interest-saving">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#4A148C] to-[#6A1B9A] hover:from-[#4A148C]/90 hover:to-[#6A1B9A]/90 text-white px-8 py-6 rounded-xl shadow-elevated">
                    <Calculator className="w-5 h-5 mr-2" />
                    <span className="font-bold">나의 예상 절감액 계산해보기</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/debt/test">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#1A237E] to-[#283593] hover:from-[#1A237E]/90 hover:to-[#283593]/90 text-white px-8 py-6 rounded-xl shadow-elevated">
                    <Wallet className="w-5 h-5 mr-2" />
                    <span className="font-bold">고금리 대출 저금리로 갈아타기 상담</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* Legal Disclaimer */}
        <div className="max-w-4xl mx-auto mt-12 mb-10">
          <Card className="p-6 bg-muted/50 border border-border">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Receipt className="w-5 h-5 text-muted-foreground" />
              법적 면책 조항
            </h3>
            <div className="prose prose-base text-muted-foreground max-w-none">
              <p className="mb-2">
                본 페이지에서 제공하는 절약 정보 및 계산 결과는 일반적인 참고용 정보이며, 실제 절감액은 개인의 생활 패턴, 지역, 사용량 등에 따라 달라질 수 있습니다.
              </p>
              <p className="mb-2">
                대출 관련 상담 및 금융 상품 이용 시 반드시 전문가와 상담하시기 바라며, 본 사이트의 정보를 근거로 한 금융 결정에 대한 책임은 사용자에게 있습니다.
              </p>
              <p>
                본 사이트는 금융 투자 자문이나 법률 자문을 제공하지 않으며, 구체적인 금융 결정은 개인의 판단과 책임 하에 이루어져야 합니다.
              </p>
            </div>
          </Card>
        </div>

        {/* Author Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <ArticleAuthor 
            expertId="expert-savings-02"
            publishedDate="2025-12-25"
            lastUpdated="2026-01-27"
          />
        </div>

        {/* Ad Container */}
        <div className="max-w-4xl mx-auto mt-10">
          <AdSenseDisplay slot="8564710988" />
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}
