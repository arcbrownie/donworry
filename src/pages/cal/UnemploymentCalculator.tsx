import { useState, useMemo } from "react";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ResultCard, ResultItem } from "@/components/ui/ResultCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 2026년 기준 실업급여 상한액/하한액
const DAILY_MAX = 66000;
const DAILY_MIN = 63104; // 최저임금 80% 기준

// 연령 및 고용보험 가입기간에 따른 급여일수
const BENEFIT_DAYS: Record<string, Record<string, number>> = {
  "under50": {
    "under1": 120,
    "1to3": 150,
    "3to5": 180,
    "5to10": 210,
    "over10": 240,
  },
  "50plus": {
    "under1": 120,
    "1to3": 180,
    "3to5": 210,
    "5to10": 240,
    "over10": 270,
  },
};

export default function UnemploymentCalculator() {
  const [monthlyWage, setMonthlyWage] = useState<number>(3000000);
  const [ageGroup, setAgeGroup] = useState<string>("under50");
  const [insurancePeriod, setInsurancePeriod] = useState<string>("1to3");

  const result = useMemo(() => {
    // 일 평균임금 = 월급 / 30일
    const dailyWage = monthlyWage / 30;
    
    // 실업급여 일액 = 일 평균임금 × 60%
    let dailyBenefit = dailyWage * 0.6;
    
    // 상한/하한 적용
    if (dailyBenefit > DAILY_MAX) dailyBenefit = DAILY_MAX;
    if (dailyBenefit < DAILY_MIN) dailyBenefit = DAILY_MIN;
    
    // 급여일수
    const benefitDays = BENEFIT_DAYS[ageGroup][insurancePeriod];
    
    // 총 예상 수령액
    const totalBenefit = Math.round(dailyBenefit * benefitDays);
    
    // 월 환산 (30일 기준)
    const monthlyBenefit = Math.round(dailyBenefit * 30);
    
    return {
      dailyWage: Math.round(dailyWage),
      dailyBenefit: Math.round(dailyBenefit),
      benefitDays,
      totalBenefit,
      monthlyBenefit,
    };
  }, [monthlyWage, ageGroup, insurancePeriod]);

  return (
    <CalculatorLayout
      title="🏥 실업급여 예측 계산기"
      description="퇴직 전 월급과 고용보험 가입기간을 입력하면 예상 실업급여를 계산해드립니다."
      seoContent="2026년 기준 실업급여(구직급여) 예상 수령액을 미리 계산해보세요. 연령과 고용보험 가입기간에 따른 급여일수와 일일 수령액을 확인할 수 있습니다."
    >
      {/* 입력 섹션 */}
      <div className="therapy-card space-y-6">
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          📝 기본 정보 입력
        </h2>
        
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="monthlyWage">퇴직 전 월 평균임금</Label>
            <div className="relative">
              <Input
                id="monthlyWage"
                type="number"
                value={monthlyWage}
                onChange={(e) => setMonthlyWage(Number(e.target.value))}
                className="therapy-input pr-8"
                placeholder="3,000,000"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">원</span>
            </div>
            <p className="text-xs text-muted-foreground">세전 금액 기준 (보너스, 수당 포함)</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ageGroup">연령대</Label>
            <Select value={ageGroup} onValueChange={setAgeGroup}>
              <SelectTrigger className="therapy-input">
                <SelectValue placeholder="연령대 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under50">50세 미만</SelectItem>
                <SelectItem value="50plus">50세 이상 또는 장애인</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="insurancePeriod">고용보험 가입기간</Label>
            <Select value={insurancePeriod} onValueChange={setInsurancePeriod}>
              <SelectTrigger className="therapy-input">
                <SelectValue placeholder="가입기간 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under1">1년 미만</SelectItem>
                <SelectItem value="1to3">1년 이상 ~ 3년 미만</SelectItem>
                <SelectItem value="3to5">3년 이상 ~ 5년 미만</SelectItem>
                <SelectItem value="5to10">5년 이상 ~ 10년 미만</SelectItem>
                <SelectItem value="over10">10년 이상</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* 결과 섹션 */}
      <ResultCard title="💰 실업급여 예상 수령액">
        <ResultItem label="일 평균임금" value={`${result.dailyWage.toLocaleString()}원`} />
        <ResultItem label="실업급여 일액 (60%)" value={`${result.dailyBenefit.toLocaleString()}원`} />
        <ResultItem label="급여일수" value={`${result.benefitDays}일`} />
        <ResultItem label="월 환산 수령액" value={`${result.monthlyBenefit.toLocaleString()}원`} highlight />
      </ResultCard>

      <ResultCard title="🎯 총 예상 수령액">
        <ResultItem label="총 수령 예상액" value={`${result.totalBenefit.toLocaleString()}원`} highlight size="lg" />
        <ResultItem label="수령 기간" value={`약 ${Math.round(result.benefitDays / 30)}개월`} />
      </ResultCard>

      {/* 안내 */}
      <div className="therapy-card bg-category-life/5 border-category-life/20">
        <h3 className="font-semibold text-foreground mb-2">📌 참고사항</h3>
        <ul className="text-sm text-muted-foreground space-y-1.5">
          <li>• 2026년 기준 일 상한액: {DAILY_MAX.toLocaleString()}원</li>
          <li>• 2026년 기준 일 하한액: {DAILY_MIN.toLocaleString()}원 (최저임금 80%)</li>
          <li>• 실제 수령액은 고용센터 심사 후 결정됩니다</li>
          <li>• 자발적 퇴직 시 수급 제한이 있을 수 있습니다</li>
        </ul>
      </div>
    </CalculatorLayout>
  );
}
