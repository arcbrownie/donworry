import { useState, useMemo } from "react";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";
import { ResultCard, ResultItem } from "@/components/ui/ResultCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Users, Calendar, TrendingUp, CheckCircle2 } from "lucide-react";

// 근로소득세 간이세액표 (월급 기준, 단순화)
const calculateMonthlyTax = (monthlyIncome: number) => {
  // 간이세액표 기반 추정 (실제 세액표와 다를 수 있음)
  if (monthlyIncome <= 1060000) return 0;
  if (monthlyIncome <= 1500000) return (monthlyIncome - 1060000) * 0.06;
  if (monthlyIncome <= 3000000) return 26400 + (monthlyIncome - 1500000) * 0.15;
  if (monthlyIncome <= 4500000) return 251400 + (monthlyIncome - 3000000) * 0.24;
  return 611400 + (monthlyIncome - 4500000) * 0.35;
};

export default function YouthTaxCalculator() {
  const [birthYear, setBirthYear] = useState(2000);
  const [employmentYear, setEmploymentYear] = useState(2025);
  const [monthlyIncome, setMonthlyIncome] = useState(3000000);

  const result = useMemo(() => {
    const currentYear = 2026;
    const age = currentYear - birthYear;
    
    // 자격 요건 체크 (만 15세 이상 34세 이하)
    const isEligible = age >= 15 && age <= 34;
    
    // 감면 기간 체크 (취업일로부터 5년간)
    const yearsEmployed = currentYear - employmentYear;
    const remainingYears = Math.max(0, 5 - yearsEmployed);
    const isInBenefitPeriod = yearsEmployed < 5;
    
    // 월 소득세 계산
    const monthlyTax = calculateMonthlyTax(monthlyIncome);
    
    // 90% 감면 적용
    const reducedTax = monthlyTax * 0.1; // 10%만 납부
    const taxSaved = monthlyTax * 0.9; // 90% 절감
    
    // 연간 절감액
    const annualTaxSaved = taxSaved * 12;
    const remainingBenefit = annualTaxSaved * remainingYears;

    return {
      age,
      isEligible,
      isInBenefitPeriod,
      remainingYears,
      monthlyTax: Math.round(monthlyTax),
      reducedTax: Math.round(reducedTax),
      taxSaved: Math.round(taxSaved),
      annualTaxSaved: Math.round(annualTaxSaved),
      remainingBenefit: Math.round(remainingBenefit),
    };
  }, [birthYear, employmentYear, monthlyIncome]);

  return (
    <CalculatorLayout
      title="🎓 중소기업 취업청년 소득세 감면 계산기"
      description="90% 세금 감면 혜택으로 얼마나 절약할 수 있을까요?"
      seoContent="중소기업 취업청년 소득세 감면제도는 만 15세 이상 34세 이하 청년이 중소기업에 취업할 경우, 취업일로부터 5년간 근로소득세의 90%를 감면받는 제도입니다. 병역복무기간은 나이 계산에서 제외됩니다. 연간 200만원 한도 내에서 감면받을 수 있으며, 정확한 혜택 적용은 회사 인사팀이나 세무사와 상담하시기 바랍니다."
    >
      {/* 입력 폼 */}
      <div className="therapy-card space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-warning flex items-center justify-center">
            <Users className="w-5 h-5 text-warning-foreground" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">기본 정보 입력</h2>
            <p className="text-sm text-muted-foreground">자격 요건을 확인해드릴게요</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="therapy-label">출생년도</Label>
              <Input
                type="number"
                value={birthYear}
                onChange={(e) => setBirthYear(Number(e.target.value))}
                className="therapy-input"
                min={1970}
                max={2010}
              />
            </div>
            <div>
              <Label className="therapy-label">취업년도</Label>
              <Input
                type="number"
                value={employmentYear}
                onChange={(e) => setEmploymentYear(Number(e.target.value))}
                className="therapy-input"
                min={2015}
                max={2026}
              />
            </div>
          </div>

          <div>
            <Label className="therapy-label">월 급여 (세전)</Label>
            <Input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="therapy-input"
              placeholder="월 급여를 입력하세요"
            />
          </div>
        </div>
      </div>

      {/* 자격 확인 */}
      <ResultCard 
        title="자격 요건 확인" 
        variant={result.isEligible && result.isInBenefitPeriod ? "success" : "warning"}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">현재 나이</span>
            </div>
            <span className={`font-medium ${result.age <= 34 ? "text-success" : "text-destructive"}`}>
              만 {result.age}세 {result.age <= 34 ? "✓" : "✗"}
            </span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">연령 요건 (15~34세)</span>
            </div>
            <span className={`font-medium ${result.isEligible ? "text-success" : "text-destructive"}`}>
              {result.isEligible ? "충족" : "미충족"}
            </span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">혜택 기간 (5년)</span>
            </div>
            <span className={`font-medium ${result.isInBenefitPeriod ? "text-success" : "text-muted-foreground"}`}>
              {result.isInBenefitPeriod ? `${result.remainingYears}년 남음` : "종료됨"}
            </span>
          </div>
        </div>
      </ResultCard>

      {/* 세금 감면 계산 */}
      {result.isEligible && result.isInBenefitPeriod && (
        <>
          <ResultCard title="월 소득세 비교" variant="info">
            <div className="space-y-1">
              <ResultItem label="일반 소득세" value={`${result.monthlyTax.toLocaleString()}원`} />
              <ResultItem label="감면 후 소득세" value={`${result.reducedTax.toLocaleString()}원`} highlight />
              <div className="border-t border-border/50 my-3" />
              <ResultItem label="월 절감액" value={`${result.taxSaved.toLocaleString()}원`} />
            </div>
          </ResultCard>

          <ResultCard title="예상 총 절감액" variant="success">
            <div className="text-center py-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-success" />
                <p className="text-sm text-muted-foreground">남은 기간 동안 절약할 금액</p>
              </div>
              <p className="text-4xl font-bold text-success">
                {result.remainingBenefit.toLocaleString()}
                <span className="text-lg font-normal text-muted-foreground ml-1">원</span>
              </p>
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">연간 절감액</span>
                  <span className="font-medium text-foreground">{result.annualTaxSaved.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-muted-foreground">남은 혜택 기간</span>
                  <span className="font-medium text-foreground">{result.remainingYears}년</span>
                </div>
              </div>
            </div>
          </ResultCard>
        </>
      )}

      {(!result.isEligible || !result.isInBenefitPeriod) && (
        <div className="therapy-card bg-therapy-warm">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-warning shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">
                {!result.isEligible 
                  ? "연령 요건을 충족하지 않습니다" 
                  : "혜택 기간이 종료되었습니다"}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {!result.isEligible 
                  ? "만 15세 이상 34세 이하인 경우에만 해당 혜택을 받을 수 있습니다. 병역복무기간은 나이 계산에서 제외될 수 있으니 확인해보세요." 
                  : "취업일로부터 5년간만 혜택을 받을 수 있습니다."}
              </p>
            </div>
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
}
