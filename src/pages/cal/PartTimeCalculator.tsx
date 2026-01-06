import { useState, useMemo } from "react";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";
import { ResultCard, ResultItem } from "@/components/ui/ResultCard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Calculator, Clock, Coins } from "lucide-react";

// 2026년 최저시급 (예상치 - 실제 발표 시 수정 필요)
const MINIMUM_WAGE_2026 = 10030;
const INCOME_TAX_RATE = 0.033; // 3.3% 원천징수

export default function PartTimeCalculator() {
  const [hourlyWage, setHourlyWage] = useState(MINIMUM_WAGE_2026);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [includeWeeklyHoliday, setIncludeWeeklyHoliday] = useState(true);
  const [apply33Tax, setApply33Tax] = useState(true);

  const result = useMemo(() => {
    const weeklyHours = hoursPerDay * daysPerWeek;
    const weeklyWage = hourlyWage * weeklyHours;
    
    // 주휴수당 계산 (주 15시간 이상 근무 시)
    const weeklyHolidayHours = weeklyHours >= 15 ? (weeklyHours / 5) : 0;
    const weeklyHolidayPay = includeWeeklyHoliday ? hourlyWage * weeklyHolidayHours : 0;
    
    const totalWeeklyWage = weeklyWage + weeklyHolidayPay;
    const monthlyWage = totalWeeklyWage * 4.345; // 월 평균 주수
    
    const taxAmount = apply33Tax ? monthlyWage * INCOME_TAX_RATE : 0;
    const netMonthlyWage = monthlyWage - taxAmount;
    
    // 실질 시급 계산
    const totalMonthlyHours = weeklyHours * 4.345;
    const effectiveHourlyWage = netMonthlyWage / totalMonthlyHours;

    return {
      weeklyHours,
      weeklyWage,
      weeklyHolidayHours: Math.round(weeklyHolidayHours * 10) / 10,
      weeklyHolidayPay: Math.round(weeklyHolidayPay),
      monthlyWage: Math.round(monthlyWage),
      taxAmount: Math.round(taxAmount),
      netMonthlyWage: Math.round(netMonthlyWage),
      effectiveHourlyWage: Math.round(effectiveHourlyWage),
    };
  }, [hourlyWage, hoursPerDay, daysPerWeek, includeWeeklyHoliday, apply33Tax]);

  return (
    <CalculatorLayout
      title="2026 알바 실수령액 계산기"
      description="주휴수당과 3.3% 세금을 반영한 진짜 시급을 확인하세요"
      seoContent="2026년 최저임금은 시간당 10,030원(예상)입니다. 주 15시간 이상 근무하면 주휴수당을 받을 수 있으며, 이는 1주일 동안 개근한 근로자에게 유급 휴일을 주는 제도입니다. 아르바이트생도 4대보험 미가입 시 3.3% 원천징수 대상이 될 수 있으니, 실수령액을 미리 계산해보는 것이 좋습니다."
    >
      {/* 입력 폼 */}
      <div className="therapy-card space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-therapy-trust flex items-center justify-center">
            <Calculator className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">근무 정보 입력</h2>
            <p className="text-sm text-muted-foreground">시급과 근무시간을 입력하세요</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label className="therapy-label">시급 (원)</Label>
            <Input
              type="number"
              value={hourlyWage}
              onChange={(e) => setHourlyWage(Number(e.target.value))}
              className="therapy-input"
              min={MINIMUM_WAGE_2026}
            />
            <p className="text-xs text-muted-foreground mt-1">
              2026년 최저시급: {MINIMUM_WAGE_2026.toLocaleString()}원
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="therapy-label">하루 근무시간</Label>
              <div className="flex items-center gap-2 mt-1">
                <Input
                  type="number"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  className="therapy-input"
                  min={1}
                  max={24}
                />
                <span className="text-muted-foreground">시간</span>
              </div>
            </div>
            <div>
              <Label className="therapy-label">주 근무일수</Label>
              <div className="flex items-center gap-2 mt-1">
                <Input
                  type="number"
                  value={daysPerWeek}
                  onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                  className="therapy-input"
                  min={1}
                  max={7}
                />
                <span className="text-muted-foreground">일</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 px-4 bg-secondary rounded-xl">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">주휴수당 포함</span>
            </div>
            <Switch
              checked={includeWeeklyHoliday}
              onCheckedChange={setIncludeWeeklyHoliday}
            />
          </div>

          <div className="flex items-center justify-between py-3 px-4 bg-secondary rounded-xl">
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">3.3% 원천징수 적용</span>
            </div>
            <Switch
              checked={apply33Tax}
              onCheckedChange={setApply33Tax}
            />
          </div>
        </div>
      </div>

      {/* 결과 카드 */}
      <ResultCard title="계산 결과" variant="info">
        <div className="space-y-1">
          <ResultItem label="주간 근무시간" value={`${result.weeklyHours}시간`} />
          <ResultItem label="주간 급여 (기본)" value={`${result.weeklyWage.toLocaleString()}원`} />
          {includeWeeklyHoliday && result.weeklyHolidayHours > 0 && (
            <>
              <ResultItem label="주휴시간" value={`${result.weeklyHolidayHours}시간`} />
              <ResultItem label="주휴수당" value={`+${result.weeklyHolidayPay.toLocaleString()}원`} />
            </>
          )}
          <div className="border-t border-border/50 my-3" />
          <ResultItem label="월 급여 (세전)" value={`${result.monthlyWage.toLocaleString()}원`} />
          {apply33Tax && (
            <ResultItem label="3.3% 원천징수" value={`-${result.taxAmount.toLocaleString()}원`} />
          )}
        </div>
      </ResultCard>

      <ResultCard title="실수령액" variant="success">
        <div className="text-center py-4">
          <p className="text-sm text-muted-foreground mb-2">예상 월 실수령액</p>
          <p className="text-4xl font-bold text-success">
            {result.netMonthlyWage.toLocaleString()}
            <span className="text-lg font-normal text-muted-foreground ml-1">원</span>
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            실질 시급: <span className="font-semibold text-foreground">{result.effectiveHourlyWage.toLocaleString()}원</span>
          </p>
        </div>
      </ResultCard>
    </CalculatorLayout>
  );
}
