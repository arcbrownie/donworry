"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";
import { ResultCard, ResultItem } from "@/components/ui/ResultCard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Shield, AlertCircle, CheckCircle2, HelpCircle } from "lucide-react";

// 2026년 기준 최저생계비 (4인 가구 기준, 실제 값으로 수정 필요)
const MINIMUM_LIVING_COST = {
  1: 713102,
  2: 1178435,
  3: 1512447,
  4: 1833572,
  5: 2142635,
  6: 2440000,
};

export default function DebtTest() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    debtAmount: 50000000,
    overdueMonths: 6,
    monthlyIncome: 2500000,
    familyCount: 1,
  });
  const [result, setResult] = useState<{
    recommendation: "recovery" | "rapid" | "both";
    availableIncome: number;
    estimatedCost: number;
    repaymentPeriod: number;
  } | null>(null);

  const calculateResult = () => {
    const minimumLiving = MINIMUM_LIVING_COST[formData.familyCount as keyof typeof MINIMUM_LIVING_COST] || MINIMUM_LIVING_COST[1];
    const availableIncome = Math.max(0, formData.monthlyIncome - minimumLiving);
    
    // 간단한 판단 로직 (실제 로직으로 수정 필요)
    let recommendation: "recovery" | "rapid" | "both";
    let estimatedCost = 0;
    let repaymentPeriod = 0;

    if (formData.debtAmount >= 100000000 || formData.overdueMonths >= 12) {
      recommendation = "recovery";
      estimatedCost = 500000; // 인지대 + 송달료 추정
      repaymentPeriod = 36;
    } else if (formData.debtAmount < 50000000 && formData.overdueMonths < 6) {
      recommendation = "rapid";
      estimatedCost = 50000;
      repaymentPeriod = 24;
    } else {
      recommendation = "both";
      estimatedCost = 300000;
      repaymentPeriod = 36;
    }

    setResult({
      recommendation,
      availableIncome,
      estimatedCost,
      repaymentPeriod,
    });
    setStep(3);
  };

  const getRecommendationText = (rec: string) => {
    switch (rec) {
      case "recovery":
        return { title: "개인회생", desc: "법원을 통한 채무조정으로, 채무의 일부를 탕감받을 수 있어요.", icon: Shield };
      case "rapid":
        return { title: "신속채무조정", desc: "신용회복위원회를 통한 빠른 채무조정이 가능해요.", icon: CheckCircle2 };
      default:
        return { title: "개인회생 또는 신속채무조정", desc: "두 가지 방법 모두 검토해보시는 것을 추천드려요.", icon: HelpCircle };
    }
  };

  return (
    <CalculatorLayout
      title="맞춤형 금융 회복 처방전"
      description="나의 상황에 맞는 채무조정 방법을 찾아드릴게요"
      seoContent="개인회생과 신속채무조정은 채무로 어려움을 겪는 분들을 위한 법적 제도입니다. 개인회생은 법원을 통해 채무의 일부를 탕감받는 제도이며, 신속채무조정은 신용회복위원회를 통해 빠르게 채무를 조정받을 수 있는 제도입니다. 본인의 채무 규모, 연체 기간, 소득 수준에 따라 적합한 방법이 달라질 수 있으니, 정확한 상담은 전문가와 진행하시기 바랍니다."
    >
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`w-3 h-3 rounded-full transition-colors ${
              s <= step ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>

      {step === 1 && (
        <div className="therapy-card space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">채무 정보 입력</h2>
              <p className="text-sm text-muted-foreground">현재 상황을 알려주세요</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label className="therapy-label">총 채무액</Label>
              <div className="text-2xl font-bold text-primary mb-2">
                {formData.debtAmount.toLocaleString()}원
              </div>
              <Slider
                value={[formData.debtAmount]}
                onValueChange={(v) => setFormData({ ...formData, debtAmount: v[0] })}
                min={10000000}
                max={500000000}
                step={5000000}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1천만원</span>
                <span>5억원</span>
              </div>
            </div>

            <div>
              <Label className="therapy-label">연체 기간</Label>
              <div className="text-2xl font-bold text-primary mb-2">
                {formData.overdueMonths}개월
              </div>
              <Slider
                value={[formData.overdueMonths]}
                onValueChange={(v) => setFormData({ ...formData, overdueMonths: v[0] })}
                min={1}
                max={36}
                step={1}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1개월</span>
                <span>36개월</span>
              </div>
            </div>
          </div>

          <Button onClick={() => setStep(2)} className="w-full" size="lg">
            다음 단계로
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="therapy-card space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-therapy-trust flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">소득 및 가족 정보</h2>
              <p className="text-sm text-muted-foreground">가용소득을 계산할게요</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label className="therapy-label">월 소득 (세전)</Label>
              <Input
                type="number"
                value={formData.monthlyIncome}
                onChange={(e) => setFormData({ ...formData, monthlyIncome: Number(e.target.value) })}
                className="therapy-input"
                placeholder="월 소득을 입력하세요"
              />
            </div>

            <div>
              <Label className="therapy-label">부양가족 수 (본인 포함)</Label>
              <div className="grid grid-cols-6 gap-2 mt-2">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <button
                    key={n}
                    onClick={() => setFormData({ ...formData, familyCount: n })}
                    className={`py-3 rounded-xl font-medium transition-colors ${
                      formData.familyCount === n
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {n}명
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setStep(1)} className="flex-1" size="lg">
              이전
            </Button>
            <Button onClick={calculateResult} className="flex-1" size="lg">
              진단 결과 보기
            </Button>
          </div>
        </div>
      )}

      {step === 3 && result && (
        <div className="space-y-4">
          <ResultCard title="진단 결과" variant="success">
            {(() => {
              const rec = getRecommendationText(result.recommendation);
              const Icon = rec.icon;
              return (
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-success flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-success-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{rec.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{rec.desc}</p>
                  </div>
                </div>
              );
            })()}
            <div className="space-y-1 pt-4 border-t border-border/50">
              <ResultItem label="총 채무액" value={`${formData.debtAmount.toLocaleString()}원`} />
              <ResultItem label="연체 기간" value={`${formData.overdueMonths}개월`} />
              <ResultItem label="월 가용소득" value={`${result.availableIncome.toLocaleString()}원`} highlight />
              <ResultItem label="예상 비용" value={`약 ${result.estimatedCost.toLocaleString()}원`} />
              <ResultItem label="예상 상환기간" value={`${result.repaymentPeriod}개월`} />
            </div>
          </ResultCard>

          <div className="therapy-card bg-therapy-warm">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">전문 상담을 추천드려요</p>
                <p className="text-sm text-muted-foreground mt-1">
                  본 진단은 참고용이며, 정확한 채무조정 가능 여부는 법률 전문가와 상담하시기 바랍니다.
                </p>
              </div>
            </div>
          </div>

          <Button variant="outline" onClick={() => { setStep(1); setResult(null); }} className="w-full" size="lg">
            다시 진단하기
          </Button>
        </div>
      )}
    </CalculatorLayout>
  );
}
