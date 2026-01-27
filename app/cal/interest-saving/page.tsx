"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ResultCard, ResultItem } from "@/components/ui/ResultCard";

export default function InterestSavingCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [currentRate, setCurrentRate] = useState("");
  const [newRate, setNewRate] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("12");
  const [result, setResult] = useState<{
    currentTotalInterest: number;
    newTotalInterest: number;
    interestSaving: number;
    monthlySaving: number;
  } | null>(null);

  const handleCalculate = () => {
    const principal = Number(loanAmount.replace(/,/g, "")) || 0;
    const oldRate = Number(currentRate) || 0;
    const newRateVal = Number(newRate) || 0;
    const months = Number(loanPeriod) || 12;

    if (principal === 0 || oldRate === 0 || newRateVal === 0) {
      return;
    }

    // 월 이자율
    const oldMonthlyRate = oldRate / 100 / 12;
    const newMonthlyRate = newRateVal / 100 / 12;

    // 원리금균등상환 방식 총 이자 계산
    const calculateTotalInterest = (monthlyRate: number) => {
      if (monthlyRate === 0) return 0;
      
      // 월 납입금 계산
      const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
        (Math.pow(1 + monthlyRate, months) - 1);
      
      // 총 상환액
      const totalPayment = monthlyPayment * months;
      
      // 총 이자
      return totalPayment - principal;
    };

    const currentTotalInterest = calculateTotalInterest(oldMonthlyRate);
    const newTotalInterest = calculateTotalInterest(newMonthlyRate);
    const interestSaving = currentTotalInterest - newTotalInterest;
    const monthlySaving = interestSaving / months;

    setResult({
      currentTotalInterest: Math.round(currentTotalInterest),
      newTotalInterest: Math.round(newTotalInterest),
      interestSaving: Math.round(interestSaving),
      monthlySaving: Math.round(monthlySaving),
    });
  };

  const formatNumber = (value: string) => {
    const num = value.replace(/[^\d]/g, "");
    return num ? Number(num).toLocaleString() : "";
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoanAmount(formatNumber(e.target.value));
  };

  const handleRateChange = (setter: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, "");
    // 소수점 한 개만 허용
    const parts = value.split(".");
    if (parts.length > 2) return;
    if (parts[1]?.length > 2) return;
    setter(value);
  };

  return (
    <CalculatorLayout
      title="이자 절감 계산기"
      description="대출 금리 인하 시 절감되는 이자를 계산해보세요. 대환대출이나 금리 협상 전 예상 절감액을 확인하세요."
    >
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="loanAmount">대출 원금 (원)</Label>
            <Input
              id="loanAmount"
              placeholder="예: 30,000,000"
              value={loanAmount}
              onChange={handleAmountChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="loanPeriod">대출 기간</Label>
            <Select value={loanPeriod} onValueChange={setLoanPeriod}>
              <SelectTrigger id="loanPeriod">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6">6개월</SelectItem>
                <SelectItem value="12">12개월 (1년)</SelectItem>
                <SelectItem value="24">24개월 (2년)</SelectItem>
                <SelectItem value="36">36개월 (3년)</SelectItem>
                <SelectItem value="48">48개월 (4년)</SelectItem>
                <SelectItem value="60">60개월 (5년)</SelectItem>
                <SelectItem value="120">120개월 (10년)</SelectItem>
                <SelectItem value="240">240개월 (20년)</SelectItem>
                <SelectItem value="360">360개월 (30년)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="currentRate">현재 금리 (%)</Label>
            <Input
              id="currentRate"
              placeholder="예: 7.5"
              value={currentRate}
              onChange={handleRateChange(setCurrentRate)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newRate">변경 후 금리 (%)</Label>
            <Input
              id="newRate"
              placeholder="예: 5.0"
              value={newRate}
              onChange={handleRateChange(setNewRate)}
            />
          </div>
        </div>

        <Button onClick={handleCalculate} className="w-full" size="lg">
          이자 절감액 계산하기
        </Button>

        {result && (
          <ResultCard
            title="이자 절감 결과"
            showShare
            shareTitle="이자 절감 계산 결과"
            shareDescription={`총 이자 절감액 ${result.interestSaving.toLocaleString()}원`}
          >
            <ResultItem
              label="현재 금리 총 이자"
              value={`${result.currentTotalInterest.toLocaleString()}원`}
            />
            <ResultItem
              label="변경 후 총 이자"
              value={`${result.newTotalInterest.toLocaleString()}원`}
            />
            <ResultItem
              label="총 이자 절감액"
              value={`${result.interestSaving.toLocaleString()}원`}
              highlight
            />
            <ResultItem
              label="월평균 절감액"
              value={`${result.monthlySaving.toLocaleString()}원`}
            />
          </ResultCard>
        )}

        <div className="therapy-card bg-muted/50">
          <h3 className="font-semibold mb-2">💡 활용 팁</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• 원리금균등상환 방식 기준 계산</li>
            <li>• 대환대출 검토 시 중도상환수수료도 확인하세요</li>
            <li>• 금리인하요구권(연 1회)을 활용해보세요</li>
            <li>• 신용점수 상승 시 금리 협상이 가능합니다</li>
          </ul>
        </div>
      </div>
    </CalculatorLayout>
  );
}
