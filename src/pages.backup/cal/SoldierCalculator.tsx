import { useState, useMemo } from "react";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";
import { ResultCard, ResultItem } from "@/components/ui/ResultCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Coins, Calendar, Award, TrendingUp } from "lucide-react";

// 2026년 병사 월급 (예상치 - 실제 발표 시 수정 필요)
const MONTHLY_SALARY_2026 = {
  private2: 750000,    // 이등병
  private1: 850000,    // 일등병
  corporal: 1000000,   // 상병
  sergeant: 1250000,   // 병장
};

// 장병내일준비적금 정부 지원금 매칭비율
const GOVERNMENT_MATCH_RATE = 1; // 100% 매칭

// 2026년 장병내일준비적금 한도
const MAX_MONTHLY_DEPOSIT = 550000; // 월 최대 55만원
const BANK_LIMIT = 300000; // 은행당 30만원

// 복무기간 (개월)
const SERVICE_PERIOD = {
  army: 18,      // 육군
  navy: 20,      // 해군
  airforce: 21,  // 공군
  marine: 18,    // 해병대
};

// 군별 색상
const BRANCH_COLORS: Record<ServiceBranch, { bg: string; text: string; hover: string; selected: string }> = {
  army: {
    bg: "bg-green-50 dark:bg-green-950/30",
    text: "text-green-700 dark:text-green-400",
    hover: "hover:bg-green-100 dark:hover:bg-green-950/50",
    selected: "bg-green-600 text-white hover:bg-green-700",
  },
  navy: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-700 dark:text-blue-400",
    hover: "hover:bg-blue-100 dark:hover:bg-blue-950/50",
    selected: "bg-blue-600 text-white hover:bg-blue-700",
  },
  airforce: {
    bg: "bg-sky-50 dark:bg-sky-950/30",
    text: "text-sky-700 dark:text-sky-400",
    hover: "hover:bg-sky-100 dark:hover:bg-sky-950/50",
    selected: "bg-sky-600 text-white hover:bg-sky-700",
  },
  marine: {
    bg: "bg-red-50 dark:bg-red-950/30",
    text: "text-red-700 dark:text-red-400",
    hover: "hover:bg-red-100 dark:hover:bg-red-950/50",
    selected: "bg-red-600 text-white hover:bg-red-700",
  },
};

type ServiceBranch = keyof typeof SERVICE_PERIOD;

export default function SoldierCalculator() {
  const [enlistmentDate, setEnlistmentDate] = useState("2025-06-01");
  const [serviceBranch, setServiceBranch] = useState<ServiceBranch>("army");
  const [monthlySaving, setMonthlySaving] = useState(550000);

  const result = useMemo(() => {
    const period = SERVICE_PERIOD[serviceBranch];
    const enlistment = new Date(enlistmentDate);
    const discharge = new Date(enlistment);
    discharge.setMonth(discharge.getMonth() + period);

    // 월급 계산 (각 계급별 개월 수)
    const salaryByRank = [
      { months: 2, salary: MONTHLY_SALARY_2026.private2 },  // 이등병 2개월
      { months: 6, salary: MONTHLY_SALARY_2026.private1 },  // 일등병 6개월
      { months: 6, salary: MONTHLY_SALARY_2026.corporal },  // 상병 6개월
      { months: period - 14, salary: MONTHLY_SALARY_2026.sergeant }, // 병장 나머지
    ];

    let totalSalary = 0;
    salaryByRank.forEach(rank => {
      totalSalary += rank.salary * rank.months;
    });

    // 적금 계산
    const totalDeposit = monthlySaving * period;
    const governmentMatch = totalDeposit * GOVERNMENT_MATCH_RATE;
    
    // 이자 계산 (연 5% 가정, 단순 이자 - 기본 4%대, 우대 포함 최고 7%대)
    const interestRate = 0.05; // 기본 5% 가정
    const averageMonths = period / 2;
    const interest = totalDeposit * interestRate * (averageMonths / 12);
    
    const totalSavings = totalDeposit + governmentMatch + interest;

    // 전역일 포맷
    const formatDate = (date: Date) => {
      return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    };

    // D-Day 계산
    const today = new Date();
    const daysUntilDischarge = Math.ceil((discharge.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    return {
      period,
      dischargeDate: formatDate(discharge),
      daysUntilDischarge: Math.max(0, daysUntilDischarge),
      totalSalary: Math.round(totalSalary),
      totalDeposit: Math.round(totalDeposit),
      governmentMatch: Math.round(governmentMatch),
      interest: Math.round(interest),
      totalSavings: Math.round(totalSavings),
      totalMoney: Math.round(totalSalary + totalSavings),
    };
  }, [enlistmentDate, serviceBranch, monthlySaving]);

  return (
    <CalculatorLayout
      title="🎖️ 군 장병 적금 & 전역일 계산기"
      description="전역 시 받을 목돈을 미리 계산해보세요"
      seoContent="장병내일준비적금은 병역 의무를 이행하는 장병들이 전역 후 사회에 안정적으로 복귀할 수 있도록 지원하는 제도입니다. 2026년 월 최대 55만원까지 저축할 수 있으며(은행당 30만원), 정부가 1:1 매칭 지원금을 제공합니다. 잔여 복무 1개월 이상이면 가입 가능하며, 기본금리 4%대, 우대 포함 시 최고 7%대까지 가능합니다. 2026년 병사 월급은 병장 기준 약 125만원으로 인상될 예정이며, 적금과 월급을 합하면 전역 시 상당한 목돈을 마련할 수 있습니다."
    >
      {/* 입력 폼 */}
      <div className="therapy-card space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-success flex items-center justify-center">
            <Award className="w-5 h-5 text-success-foreground" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">복무 정보 입력</h2>
            <p className="text-sm text-muted-foreground">입대일과 군별을 선택하세요</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label className="therapy-label">입대일</Label>
            <Input
              type="date"
              value={enlistmentDate}
              onChange={(e) => setEnlistmentDate(e.target.value)}
              className="therapy-input"
            />
          </div>

          <div>
            <Label className="therapy-label">군별</Label>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {(Object.keys(SERVICE_PERIOD) as ServiceBranch[]).map((branch) => {
                const labels: Record<ServiceBranch, string> = {
                  army: "육군",
                  navy: "해군",
                  airforce: "공군",
                  marine: "해병",
                };
                const colors = BRANCH_COLORS[branch];
                return (
                  <button
                    key={branch}
                    onClick={() => setServiceBranch(branch)}
                    className={`py-3 rounded-xl font-medium transition-colors ${
                      serviceBranch === branch
                        ? colors.selected
                        : `${colors.bg} ${colors.text} ${colors.hover}`
                    }`}
                  >
                    {labels[branch]}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              복무기간: {SERVICE_PERIOD[serviceBranch]}개월 (최대 가입 가능 기간)
            </p>
          </div>

          <div>
            <Label className="therapy-label">월 적금액 (장병내일준비적금)</Label>
            <Input
              type="number"
              value={monthlySaving}
              onChange={(e) => setMonthlySaving(Math.min(MAX_MONTHLY_DEPOSIT, Number(e.target.value)))}
              className="therapy-input"
              max={MAX_MONTHLY_DEPOSIT}
            />
            <p className="text-xs text-muted-foreground mt-1">
              2026년 월 최대 55만원까지 가능 (은행당 30만원, 2개 은행 분산 가입 시 최대 55만원)
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              정부 1:1 매칭 지원 (본인 납입액과 동일한 금액 추가 적립)
            </p>
          </div>
        </div>
      </div>

      {/* 전역일 카드 */}
      <ResultCard title="전역 정보" variant="info">
        <div className="text-center py-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calendar className="w-6 h-6 text-primary" />
            <p className="text-sm text-muted-foreground">예상 전역일</p>
          </div>
          <p className="text-2xl font-bold text-foreground mb-2">
            {result.dischargeDate}
          </p>
          {result.daysUntilDischarge > 0 && (
            <p className="text-lg text-primary font-medium">
              D-{result.daysUntilDischarge}
            </p>
          )}
        </div>
      </ResultCard>

      {/* 월급 및 적금 계산 */}
      <ResultCard title="예상 수령액 상세" variant="default">
        <div className="space-y-1">
          <div className="flex items-center gap-2 py-2">
            <Coins className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium text-foreground">복무 중 총 월급</span>
          </div>
          <ResultItem label="이등병 (2개월)" value={`${MONTHLY_SALARY_2026.private2.toLocaleString()}원/월`} />
          <ResultItem label="일등병 (6개월)" value={`${MONTHLY_SALARY_2026.private1.toLocaleString()}원/월`} />
          <ResultItem label="상병 (6개월)" value={`${MONTHLY_SALARY_2026.corporal.toLocaleString()}원/월`} />
          <ResultItem label={`병장 (${result.period - 14}개월)`} value={`${MONTHLY_SALARY_2026.sergeant.toLocaleString()}원/월`} />
          <ResultItem label="월급 합계" value={`${result.totalSalary.toLocaleString()}원`} highlight />
          
          <div className="border-t border-border/50 my-4" />
          
          <div className="flex items-center gap-2 py-2">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium text-foreground">장병내일준비적금</span>
          </div>
          <ResultItem label={`내 적금 (${result.period}개월)`} value={`${result.totalDeposit.toLocaleString()}원`} />
          <ResultItem label="정부 매칭 지원금 (1:1)" value={`+${result.governmentMatch.toLocaleString()}원`} />
          <ResultItem label="예상 이자 (연 5% 기준)" value={`+${result.interest.toLocaleString()}원`} />
          <ResultItem label="적금 합계" value={`${result.totalSavings.toLocaleString()}원`} highlight />
          <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border/30">
            ※ 금리는 은행·가입 기간별로 다르며, 기본 4%대, 우대 포함 시 최고 7%대까지 가능합니다.
            <br />
            ※ 잔여 복무 1개월 이상이면 가입 가능합니다.
          </p>
        </div>
      </ResultCard>

      {/* 총 목돈 */}
      <ResultCard title="전역 시 총 목돈" variant="success">
        <div className="text-center py-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award className="w-8 h-8 text-success" />
          </div>
          <p className="text-sm text-muted-foreground mb-2">월급 + 적금 합계</p>
          <p className="text-5xl font-bold text-success">
            {result.totalMoney.toLocaleString()}
            <span className="text-xl font-normal text-muted-foreground ml-2">원</span>
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            * 월급에서 적금 납입액을 제외한 실수령액은 별도입니다
          </p>
        </div>
      </ResultCard>
    </CalculatorLayout>
  );
}
