"use client";
import React from "react";

import { useState, useMemo } from "react";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";
import { ResultCard, ResultItem } from "@/components/ui/ResultCard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Calculator, Clock } from "lucide-react";

// 2026년 최저시급
const MINIMUM_WAGE_2026 = 10320;

export default function PartTimeCalculator() {
  const [hourlyWage, setHourlyWage] = useState(MINIMUM_WAGE_2026);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [includeWeeklyHoliday, setIncludeWeeklyHoliday] = useState(true);

  const result = useMemo(() => {
    const weeklyHours = hoursPerDay * daysPerWeek;
    const weeklyWage = hourlyWage * weeklyHours;
    
    // 주휴수당 계산 (주 15시간 이상 근무 시)
    const weeklyHolidayHours = weeklyHours >= 15 ? (weeklyHours / 5) : 0;
    const weeklyHolidayPay = includeWeeklyHoliday ? hourlyWage * weeklyHolidayHours : 0;
    
    const totalWeeklyWage = weeklyWage + weeklyHolidayPay;
    const monthlyWage = totalWeeklyWage * 4.345; // 월 평균 주수
    
    // 알바생은 근로소득이므로 3.3% 원천징수는 적용되지 않음
    // 근로소득은 일용직/상용직에 따라 별도 세율 구조 적용
    const netMonthlyWage = monthlyWage;
    
    // 실질 시급 계산
    const totalMonthlyHours = weeklyHours * 4.345;
    const effectiveHourlyWage = netMonthlyWage / totalMonthlyHours;

    return {
      weeklyHours,
      weeklyWage,
      weeklyHolidayHours: Math.round(weeklyHolidayHours * 10) / 10,
      weeklyHolidayPay: Math.round(weeklyHolidayPay),
      monthlyWage: Math.round(monthlyWage),
      netMonthlyWage: Math.round(netMonthlyWage),
      effectiveHourlyWage: Math.round(effectiveHourlyWage),
    };
  }, [hourlyWage, hoursPerDay, daysPerWeek, includeWeeklyHoliday]);

  return (
    <CalculatorLayout
      title="알바 실수령액 계산기"
      description="2026년 최저임금 반영, 주휴수당 포함 실수령액을 계산해보세요"
      seoContent={
        <div>
          <h3 className="text-lg font-semibold mb-3">주휴수당이란?</h3>
          <p className="mb-3">
            주휴수당은 주 15시간 이상 근무하는 근로자에게 주 1일분의 유급휴일을 주는 제도입니다.
            2026년 최저임금(10,320원) 기준으로 계산되며, 실수령액에 큰 영향을 미칩니다.
          </p>
          <h3 className="text-lg font-semibold mb-3">계산 방법</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>주휴수당 = 1일 소정근로시간 × 시급</li>
            <li>월 실수령액 = (주급 + 주휴수당) × 4.345주</li>
            <li>실질 시급 = 월 실수령액 ÷ 월 총 근로시간</li>
          </ul>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Input Section */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="hourlyWage" className="text-base">
              시급 (원)
            </Label>
            <Input
              id="hourlyWage"
              type="number"
              value={hourlyWage}
              onChange={(e) => setHourlyWage(Number(e.target.value))}
              className="text-lg"
              min={0}
            />
            <p className="text-sm text-muted-foreground">
              2026년 최저임금: {MINIMUM_WAGE_2026.toLocaleString()}원
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hoursPerDay" className="text-base">
              일 근무시간
            </Label>
            <Input
              id="hoursPerDay"
              type="number"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(Number(e.target.value))}
              className="text-lg"
              min={0}
              max={24}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="daysPerWeek" className="text-base">
              주 근무일수
            </Label>
            <Input
              id="daysPerWeek"
              type="number"
              value={daysPerWeek}
              onChange={(e) => setDaysPerWeek(Number(e.target.value))}
              className="text-lg"
              min={0}
              max={7}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="includeWeeklyHoliday" className="text-base flex items-center gap-2">
              <Switch
                id="includeWeeklyHoliday"
                checked={includeWeeklyHoliday}
                onCheckedChange={setIncludeWeeklyHoliday}
              />
              주휴수당 포함
            </Label>
            <p className="text-sm text-muted-foreground">
              주 15시간 이상 근무 시 주휴수당 지급
            </p>
          </div>
        </div>

        {/* Result Section */}
        <ResultCard
          title="계산 결과"
        >
          <ResultItem
            label="주 근무시간"
            value={`${result.weeklyHours}시간`}
          />
          {includeWeeklyHoliday && result.weeklyHolidayHours > 0 && (
            <ResultItem
              label="주휴수당 시간"
              value={`${result.weeklyHolidayHours}시간`}
              highlight
            />
          )}
          {includeWeeklyHoliday && result.weeklyHolidayPay > 0 && (
            <ResultItem
              label="주휴수당"
              value={`${result.weeklyHolidayPay.toLocaleString()}원`}
              highlight
            />
          )}
          <ResultItem
            label="월 예상 급여"
            value={`${result.monthlyWage.toLocaleString()}원`}
            highlight
          />
          <ResultItem
            label="실질 시급"
            value={`${result.effectiveHourlyWage.toLocaleString()}원`}
            highlight
          />
        </ResultCard>
      </div>
    </CalculatorLayout>
  );
}
