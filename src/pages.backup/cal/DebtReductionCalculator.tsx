import { useState } from "react";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ResultCard, ResultItem } from "@/components/ui/ResultCard";

export default function DebtReductionCalculator() {
  const [totalDebt, setTotalDebt] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [familyCount, setFamilyCount] = useState("1");
  const [assetValue, setAssetValue] = useState("");
  const [result, setResult] = useState<{
    reductionRate: number;
    reducedAmount: number;
    remainingDebt: number;
    monthlyPayment: number;
  } | null>(null);

  const handleCalculate = () => {
    const debt = Number(totalDebt.replace(/,/g, "")) || 0;
    const income = Number(monthlyIncome.replace(/,/g, "")) || 0;
    const family = Number(familyCount) || 1;
    const assets = Number(assetValue.replace(/,/g, "")) || 0;

    if (debt === 0 || income === 0) {
      return;
    }

    // 개인회생 탕감률 계산 로직
    // 1. 가용소득 계산 (소득 - 최저생계비)
    const minLivingCost = getMinLivingCost(family);
    const availableIncome = Math.max(income - minLivingCost, 0);

    // 2. 3년간 변제 가능액 (36개월)
    const totalPayable = availableIncome * 36;

    // 3. 청산가치 (자산) 고려 - 최소 청산가치 이상 변제해야 함
    const minPayment = Math.max(totalPayable, assets);

    // 4. 탕감률 계산
    let reductionRate = debt > 0 ? ((debt - minPayment) / debt) * 100 : 0;
    reductionRate = Math.max(0, Math.min(reductionRate, 90)); // 최대 90%까지 탕감 가능

    const reducedAmount = debt * (reductionRate / 100);
    const remainingDebt = debt - reducedAmount;
    const monthlyPayment = Math.ceil(remainingDebt / 36);

    setResult({
      reductionRate: Math.round(reductionRate),
      reducedAmount: Math.round(reducedAmount),
      remainingDebt: Math.round(remainingDebt),
      monthlyPayment,
    });
  };

  // 2024년 기준 최저생계비 (4인 가족 기준 점증)
  const getMinLivingCost = (familyCount: number): number => {
    const baseCosts: { [key: number]: number } = {
      1: 1337067,
      2: 2209243,
      3: 2837088,
      4: 3456155,
      5: 4047878,
      6: 4614592,
    };
    return baseCosts[Math.min(familyCount, 6)] || baseCosts[6];
  };

  const formatNumber = (value: string) => {
    const num = value.replace(/[^\d]/g, "");
    return num ? Number(num).toLocaleString() : "";
  };

  const handleInputChange = (setter: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(formatNumber(e.target.value));
  };

  return (
    <CalculatorLayout
      title="개인회생 탕감액 계산기"
      description="개인회생 신청 시 예상 채무 탕감액을 계산해보세요. 실제 탕감률은 법원 심사에 따라 달라질 수 있습니다."
    >
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="totalDebt">총 채무액 (원)</Label>
            <Input
              id="totalDebt"
              placeholder="예: 50,000,000"
              value={totalDebt}
              onChange={handleInputChange(setTotalDebt)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="monthlyIncome">월 소득 (원)</Label>
            <Input
              id="monthlyIncome"
              placeholder="예: 2,500,000"
              value={monthlyIncome}
              onChange={handleInputChange(setMonthlyIncome)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="familyCount">부양가족 수 (본인 포함)</Label>
            <Select value={familyCount} onValueChange={setFamilyCount}>
              <SelectTrigger id="familyCount">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <SelectItem key={num} value={String(num)}>
                    {num}명
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="assetValue">보유 자산 가치 (원)</Label>
            <Input
              id="assetValue"
              placeholder="예: 5,000,000"
              value={assetValue}
              onChange={handleInputChange(setAssetValue)}
            />
            <p className="text-xs text-muted-foreground">부동산, 차량, 예금 등 청산가치</p>
          </div>
        </div>

        <Button onClick={handleCalculate} className="w-full" size="lg">
          탕감액 계산하기
        </Button>

        {result && (
          <ResultCard
            title="예상 탕감 결과"
            showShare
            shareTitle="개인회생 탕감액 계산 결과"
            shareDescription={`탕감률 ${result.reductionRate}%, 탕감액 ${result.reducedAmount.toLocaleString()}원`}
          >
            <ResultItem
              label="예상 탕감률"
              value={`${result.reductionRate}%`}
              highlight
            />
            <ResultItem
              label="예상 탕감액"
              value={`${result.reducedAmount.toLocaleString()}원`}
            />
            <ResultItem
              label="변제해야 할 금액"
              value={`${result.remainingDebt.toLocaleString()}원`}
            />
            <ResultItem
              label="월 변제금 (36개월)"
              value={`${result.monthlyPayment.toLocaleString()}원`}
            />
          </ResultCard>
        )}

        <div className="therapy-card bg-muted/50">
          <h3 className="font-semibold mb-2">💡 계산 기준 안내</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• 2024년 기준 최저생계비 적용</li>
            <li>• 개인회생 변제기간 3년(36개월) 기준</li>
            <li>• 최대 탕감률 90% 적용</li>
            <li>• 실제 결과는 법원 심사에 따라 달라질 수 있습니다</li>
          </ul>
        </div>
      </div>
    </CalculatorLayout>
  );
}
