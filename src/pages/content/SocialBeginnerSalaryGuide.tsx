import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/ui/MobileFloatingCTA";
import TableOfContents from "@/components/ui/TableOfContents";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Wallet, ShieldCheck, TrendingUp, Calculator, ArrowRight } from "lucide-react";

// 50/30/20 예산 계산기 위젯
function BudgetCalculator() {
  const [monthlySalary, setMonthlySalary] = useState<number>(2500000);
  const [recommendedSavings, setRecommendedSavings] = useState<number>(40);

  const calculations = {
    essential: Math.round(monthlySalary * 0.5),
    lifestyle: Math.round(monthlySalary * 0.3),
    savings: Math.round(monthlySalary * (recommendedSavings / 100)),
    remaining: monthlySalary - Math.round(monthlySalary * 0.5) - Math.round(monthlySalary * 0.3) - Math.round(monthlySalary * (recommendedSavings / 100)),
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-[#1A237E]/5 via-[#4A148C]/5 to-[#1A237E]/5 border-2 border-[#1A237E]/20 shadow-lg my-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A237E] to-[#4A148C] flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#1A237E]">50/30/20 예산 계산기</h3>
          <p className="text-sm text-muted-foreground">나만의 황금 비율 찾기</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="salary" className="text-sm font-semibold text-[#1A237E] mb-2 block">
            월 급여 (원)
          </Label>
          <Input
            id="salary"
            type="number"
            value={monthlySalary}
            onChange={(e) => setMonthlySalary(Number(e.target.value))}
            className="text-lg font-semibold border-2 border-[#1A237E]/30 focus:border-[#1A237E]"
            min="1000000"
            step="100000"
          />
        </div>

        <div>
          <Label htmlFor="savings" className="text-sm font-semibold text-[#1A237E] mb-2 block">
            권장 저축률: {recommendedSavings}%
          </Label>
          <input
            id="savings"
            type="range"
            min="20"
            max="50"
            value={recommendedSavings}
            onChange={(e) => setRecommendedSavings(Number(e.target.value))}
            className="w-full h-2 bg-[#1A237E]/20 rounded-lg appearance-none cursor-pointer accent-[#4A148C]"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>최소 20%</span>
            <span>권장 40-50%</span>
          </div>
        </div>

        <div className="grid gap-4 pt-4 border-t border-[#1A237E]/20">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white font-bold">50%</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">필수 지출</p>
                <p className="text-xs text-muted-foreground">주거비, 통신비, 식비 등</p>
              </div>
            </div>
            <p className="text-lg font-bold text-blue-700">
              {calculations.essential.toLocaleString()}원
            </p>
          </div>

          <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                <span className="text-white font-bold">30%</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">나를 위한 투자</p>
                <p className="text-xs text-muted-foreground">자기계발, 취미, 외식</p>
              </div>
            </div>
            <p className="text-lg font-bold text-purple-700">
              {calculations.lifestyle.toLocaleString()}원
            </p>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#1A237E]/10 rounded-lg border-2 border-[#1A237E]/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A237E] to-[#4A148C] flex items-center justify-center">
                <span className="text-white font-bold">{recommendedSavings}%</span>
              </div>
              <div>
                <p className="font-semibold text-[#1A237E]">저축 및 채무 상환</p>
                <p className="text-xs text-muted-foreground">적금, 투자, 대출 상환</p>
              </div>
            </div>
            <p className="text-xl font-bold text-[#1A237E]">
              {calculations.savings.toLocaleString()}원
            </p>
          </div>

          {calculations.remaining !== 0 && (
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                {calculations.remaining > 0 ? (
                  <>+ {calculations.remaining.toLocaleString()}원 여유 자금</>
                ) : (
                  <>- {Math.abs(calculations.remaining).toLocaleString()}원 부족 (비율 조정 필요)</>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function SocialBeginnerSalaryGuide() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // SEO Meta Tags
    document.title = "사회초년생 첫 월급 관리법: 돈 걱정 없는 미래를 위한 첫 단추 | 돈워리";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '사회초년생을 위한 첫 월급 관리 완벽 가이드. 50/30/20 예산 배분법, 비상금 구축, 신용점수 관리, 필수 금융상품까지 실전 월급 관리 노하우를 알려드립니다.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', '사회초년생 월급 관리, 첫 월급, 예산 관리, 50/30/20 법칙, 월급 저축, 신용점수 관리, 비상금');

    // Scroll progress
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 뉴스레터 구독 로직
    alert(`뉴스레터 구독이 완료되었습니다! ${email}`);
    setEmail("");
  };

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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
              사회초년생 첫 월급 관리법: 돈 걱정 없는 미래를 위한 첫 단추
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              월급날만 기다리지 말고, 똑똑하게 관리하는 방법을 알려드립니다.
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
          <article className="flex-1 max-w-4xl prose prose-lg prose-slate max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                첫 출근의 설렘이 채 가시기도 전에 통장에 찍힌 '첫 월급'. 부모님 선물도 사드리고 싶고, 그동안 고생한 나를 위해 근사한 곳에서 식사도 하고 싶으실 겁니다. 하지만 기억하세요. 첫 월급은 단순한 보상이 아니라, 앞으로 수십 년간 이어질 당신의 경제적 독립을 결정짓는 가장 중요한 '씨앗'입니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base font-medium">
                오늘 돈워리에서는 사회초년생이 월급날만 기다리는 '월급 고개'를 넘지 않고, 똑똑하게 자산을 불려 나갈 수 있는 실전 가이드를 전해드립니다.
              </p>
            </section>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 id="first-salary-temptation" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <Wallet className="w-7 h-7 text-[#1A237E]" />
                첫 월급의 유혹과 현실: "로그아웃"을 막아라
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "월급이 통장을 스쳐 지나간다"는 말은 농담이 아닙니다. 카드값, 통신비, 월세, 보험료... 하나둘 빠져나가다 보면 어느새 잔고는 바닥을 보이죠. 사회초년생들이 가장 많이 범하는 실수는 '일단 쓰고 남은 돈을 저축하는 것'입니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                하지만 자산 관리의 제1원칙은 <strong className="text-[#1A237E]">'먼저 저축하고 남은 돈을 쓰는 것'</strong>입니다. 첫 월급부터 강제 저축 습관을 들이지 않으면, 연봉이 올라도 소비 수준이 함께 올라가며 자산은 제자리걸음을 반복하게 됩니다.
              </p>
            </section>

            {/* Section 2 - Budget Calculator */}
            <section className="mb-10">
              <h2 id="budget-rule" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <TrendingUp className="w-7 h-7 text-[#4A148C]" />
                50/30/20 법칙: 황금 비율로 나누는 예산 관리
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                전문가들이 추천하는 사회초년생의 가장 이상적인 월급 배분 공식은 '50/30/20' 법칙입니다.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">필수 지출(50%):</strong>
                    <span className="text-muted-foreground">주거비(월세/대출이자), 통신비, 교통비, 식비 등 생존에 필요한 비용입니다.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#4A148C] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">나를 위한 투자(30%):</strong>
                    <span className="text-muted-foreground">자기계발비, 취미 생활, 외식비 등 삶의 질을 높이는 비용입니다.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">저축 및 채무 상환(20%):</strong>
                    <span className="text-muted-foreground">적금, 청약, 주식 투자 혹은 학자금 대출 상환에 할당합니다. 사회초년생이라면 이 비중을 최소 40~50%까지 끌어올리는 것을 권장합니다.</span>
                  </div>
                </li>
              </ul>

              {/* 50/30/20 Budget Calculator Widget */}
              <BudgetCalculator />
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 id="emergency-fund" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3 scroll-mt-20">
                <ShieldCheck className="w-7 h-7 text-[#1A237E]" />
                비상금 파이프라인 구축: 3개월의 방어막
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                삶은 예상치 못한 변수의 연속입니다. 갑작스러운 경조사, 병원비, 혹은 이직 기간의 공백 등 돈이 급히 필요한 순간이 옵니다. 이때 비상금이 없다면 결국 고금리 카드론이나 서비스 대출에 손을 대게 되고, 이는 곧 채무의 늪으로 빠지는 지름길이 됩니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                월급의 10% 정도를 따로 떼어 <strong className="text-[#1A237E]">월급의 3~6배 정도 되는 금액을 '비상금 통장(CMA 등)'에 먼저 채우세요.</strong> 이 방어막이 있어야 투자를 할 때도, 일상을 살 때도 심리적 안정을 얻을 수 있습니다.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 id="credit-score" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                신용점수 관리: 미래의 나에게 주는 선물
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                지금 당장은 대출받을 일이 없다고 신용점수를 방치해서는 안 됩니다. 나중에 전세자금대출이나 주택담보대출을 받을 때, 사회초년생 시절의 신용 관리 습관이 수천만 원의 이자 차이를 만듭니다.
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">신용카드 사용:</strong>
                    <span className="text-muted-foreground">한도의 30~50% 내외로 사용하고 결코 연체하지 마세요.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">체크카드 병행:</strong>
                    <span className="text-muted-foreground">체크카드 사용 실적도 신용점수 가점에 도움이 됩니다.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#1A237E] text-xl mt-0.5">•</span>
                  <div>
                    <strong className="text-foreground block mb-1">통신비 납부 실적:</strong>
                    <span className="text-muted-foreground">성실 납부 실적을 신용평가사에 등록하는 것만으로도 점수를 올릴 수 있습니다.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 id="debt-management" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                채무가 있다면? '눈덩이'가 되기 전에 해결하라
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                학자금 대출이나 소액 대출이 있는 상태에서 사회생활을 시작하는 분들이 많습니다. "천천히 갚으면 되겠지"라는 생각은 위험합니다. 특히 2금융권이나 고금리 대출이 있다면, 저축보다 '대출 상환'이 먼저입니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                만약 여러 곳에 흩어진 대출로 관리가 어렵거나 이자 부담이 크다면, 정부지원 대환대출이나 채무조정 제도를 적극적으로 알아봐야 합니다. 돈워리의 '대출 이자 계산기'를 활용해 내가 내는 이자가 적정한지 지금 바로 점검해 보세요.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 id="essential-products" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                사회초년생을 위한 필수 금융상품 3가지
              </h2>
              <div className="bg-gradient-to-r from-[#1A237E]/10 to-[#4A148C]/10 border-l-4 border-[#1A237E] p-6 rounded-r-lg my-6">
                <ol className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E] text-lg bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                    <span><strong className="text-foreground">주택청약종합저축:</strong> 내 집 마련의 기본이자 소득공제 혜택까지 챙길 수 있는 필수템입니다.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E] text-lg bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                    <span><strong className="text-foreground">청년도약계좌/청년희망적금:</strong> 정부 지원금이 더해지는 상품은 무조건 가입하는 것이 이득입니다.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1A237E] text-lg bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                    <span><strong className="text-foreground">실손의료보험:</strong> 큰 병원비 지출을 막아주는 최소한의 안전장치입니다.</span>
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 id="conclusion" className="text-2xl font-bold text-foreground mb-4 scroll-mt-20">
                마치며: 당신의 일상은 가볍게, 돈 걱정은 없게
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                첫 월급은 경제적 자유라는 긴 여정의 첫걸음입니다. 지금 당장 큰돈을 벌 수는 없지만, 지금 만드는 '돈을 대하는 습관'은 10년 뒤 당신의 자산 가치를 결정합니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                돈워리는 당신의 소중한 첫 월급이 헛되이 사라지지 않도록, 그리고 혹시 모를 금융 고민이 생겼을 때 가장 먼저 기댈 수 있는 든든한 파트너가 되어 드리겠습니다. <strong className="text-[#1A237E]">지금 바로 돈워리의 '월급 관리 시뮬레이터'를 통해 나만의 황금 비율을 찾아보세요!</strong>
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
                <Link to="/debt/test">
                  <Button size="lg" className="w-full sm:w-auto bg-[#1A237E] hover:bg-[#1A237E]/90 text-white px-8 py-6 rounded-xl shadow-elevated">
                    <ShieldCheck className="w-5 h-5 mr-2" />
                    <span className="font-bold">무료 채무 상담 신청</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/cal/interest-saving">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-[#1A237E] text-[#1A237E] hover:bg-[#1A237E]/10 px-8 py-6 rounded-xl">
                    <Calculator className="w-5 h-5 mr-2" />
                    <span className="font-bold">대출 이자 계산기</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* Newsletter Subscribe Section */}
        <div className="max-w-4xl mx-auto mt-16 mb-10">
          <Card className="p-8 bg-gradient-to-br from-[#1A237E]/5 via-[#4A148C]/5 to-[#1A237E]/5 border-2 border-[#1A237E]/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#1A237E] mb-2">
                💌 금융 정보를 받아보세요
              </h3>
              <p className="text-muted-foreground">
                사회초년생을 위한 실용적인 금융 팁과 최신 정보를 뉴스레터로 받아보세요
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-2 border-[#1A237E]/30 focus:border-[#1A237E]"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-[#1A237E] to-[#4A148C] hover:from-[#1A237E]/90 hover:to-[#4A148C]/90 text-white px-6"
                >
                  구독하기
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">
                개인정보 보호 정책에 따라 이메일은 안전하게 보관됩니다
              </p>
            </form>
          </Card>
        </div>

        {/* Ad Container */}
        <div className="max-w-4xl mx-auto mt-10">
          <div className="ad-container py-8">
            <span>광고 영역 (AdSense)</span>
          </div>
        </div>
      </main>

      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}
