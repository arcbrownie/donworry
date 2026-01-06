import { useState, useMemo } from "react";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";
import { ResultCard, ResultItem } from "@/components/ui/ResultCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { FileText, TrendingUp, Wallet, Info } from "lucide-react";

// 간이세액표 기반 추정 (실제 종합소득세 계산은 더 복잡함)
const TAX_BRACKETS = [
  { limit: 14000000, rate: 0.06, deduction: 0 },
  { limit: 50000000, rate: 0.15, deduction: 1260000 },
  { limit: 88000000, rate: 0.24, deduction: 5760000 },
  { limit: 150000000, rate: 0.35, deduction: 15440000 },
  { limit: 300000000, rate: 0.38, deduction: 19940000 },
  { limit: 500000000, rate: 0.40, deduction: 25940000 },
  { limit: Infinity, rate: 0.45, deduction: 65940000 },
];

export default function FreelancerCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(3000000);
  const [expenseRate, setExpenseRate] = useState(60); // 단순경비율 (%)

  const result = useMemo(() => {
    const annualIncome = monthlyIncome * 12;
    const withheldTax = annualIncome * 0.033; // 1년간 원천징수된 3.3%
    
    // 필요경비 공제
    const expenses = annualIncome * (expenseRate / 100);
    const taxableIncome = annualIncome - expenses;
    
    // 종합소득세 계산
    let incomeTax = 0;
    for (const bracket of TAX_BRACKETS) {
      if (taxableIncome <= bracket.limit) {
        incomeTax = taxableIncome * bracket.rate - bracket.deduction;
        break;
      }
    }
    incomeTax = Math.max(0, incomeTax);
    
    // 지방소득세 (소득세의 10%)
    const localTax = incomeTax * 0.1;
    const totalTax = incomeTax + localTax;
    
    // 환급액 또는 추가 납부액
    const refundAmount = withheldTax - totalTax;

    return {
      annualIncome,
      withheldTax: Math.round(withheldTax),
      expenses: Math.round(expenses),
      taxableIncome: Math.round(taxableIncome),
      incomeTax: Math.round(incomeTax),
      localTax: Math.round(localTax),
      totalTax: Math.round(totalTax),
      refundAmount: Math.round(refundAmount),
      isRefund: refundAmount >= 0,
    };
  }, [monthlyIncome, expenseRate]);

  return (
    <CalculatorLayout
      title="프리랜서 3.3% 환급 계산기"
      description="매달 떼인 세금, 내년 5월에 얼마나 돌려받을 수 있을까요?"
      seoContent="프리랜서로 일하면 소득의 3.3%(소득세 3% + 지방세 0.3%)가 원천징수됩니다. 이 금액은 다음 해 5월 종합소득세 신고 시 정산되며, 실제 납부해야 할 세금보다 많이 낸 경우 환급받을 수 있습니다. 단순경비율은 업종에 따라 다르며, 일반적으로 60~80% 수준입니다. 정확한 세금 계산은 세무사와 상담하시기 바랍니다."
    >
      {/* 입력 폼 */}
      <div className="therapy-card space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-therapy-hope flex items-center justify-center">
            <FileText className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">소득 정보 입력</h2>
            <p className="text-sm text-muted-foreground">월 평균 수입을 입력하세요</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Label className="therapy-label">월 평균 수입 (세전)</Label>
            <Input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="therapy-input"
              placeholder="월 수입을 입력하세요"
            />
            <p className="text-xs text-muted-foreground mt-1">
              연간 수입: {(monthlyIncome * 12).toLocaleString()}원
            </p>
          </div>

          <div>
            <Label className="therapy-label">
              단순경비율: {expenseRate}%
            </Label>
            <Slider
              value={[expenseRate]}
              onValueChange={(v) => setExpenseRate(v[0])}
              min={40}
              max={90}
              step={5}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>40%</span>
              <span>90%</span>
            </div>
            <div className="flex items-start gap-2 mt-2 p-3 bg-secondary rounded-lg">
              <Info className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">
                단순경비율은 업종에 따라 다릅니다. IT/개발은 약 64.1%, 
                디자인/영상은 약 60%, 작가/강사는 약 72.5% 정도입니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 세금 계산 과정 */}
      <ResultCard title="세금 계산 내역" variant="default">
        <div className="space-y-1">
          <ResultItem label="연간 총 수입" value={`${result.annualIncome.toLocaleString()}원`} />
          <ResultItem label="원천징수 세금 (3.3%)" value={`${result.withheldTax.toLocaleString()}원`} />
          <div className="border-t border-border/50 my-3" />
          <ResultItem label={`필요경비 (${expenseRate}%)`} value={`-${result.expenses.toLocaleString()}원`} />
          <ResultItem label="과세표준" value={`${result.taxableIncome.toLocaleString()}원`} highlight />
          <div className="border-t border-border/50 my-3" />
          <ResultItem label="소득세" value={`${result.incomeTax.toLocaleString()}원`} />
          <ResultItem label="지방소득세 (10%)" value={`${result.localTax.toLocaleString()}원`} />
          <ResultItem label="실제 납부할 세금" value={`${result.totalTax.toLocaleString()}원`} />
        </div>
      </ResultCard>

      {/* 환급 결과 */}
      <ResultCard 
        title={result.isRefund ? "예상 환급액" : "추가 납부액"} 
        variant={result.isRefund ? "success" : "warning"}
      >
        <div className="text-center py-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            {result.isRefund ? (
              <TrendingUp className="w-6 h-6 text-success" />
            ) : (
              <Wallet className="w-6 h-6 text-warning" />
            )}
            <p className="text-sm text-muted-foreground">
              {result.isRefund ? "내년 5월 예상 환급" : "내년 5월 추가 납부"}
            </p>
          </div>
          <p className={`text-4xl font-bold ${result.isRefund ? "text-success" : "text-warning"}`}>
            {result.isRefund ? "+" : "-"}
            {Math.abs(result.refundAmount).toLocaleString()}
            <span className="text-lg font-normal text-muted-foreground ml-1">원</span>
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            {result.isRefund 
              ? "원천징수된 세금보다 실제 세금이 적어 환급받습니다" 
              : "원천징수된 세금보다 실제 세금이 많아 추가 납부합니다"}
          </p>
        </div>
      </ResultCard>
    </CalculatorLayout>
  );
}
