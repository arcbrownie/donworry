import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";

const lifeCalculators = [
  {
    path: "/cal/part-time",
    emoji: "💰",
    title: "2026 알바 실수령액",
    description: "주휴수당 포함 진짜 시급을 계산해보세요",
    tag: "최저임금 반영",
  },
  {
    path: "/cal/soldier",
    emoji: "🎖️",
    title: "군 장병 적금 계산기",
    description: "전역 시 받을 목돈을 미리 계산해보세요",
    tag: "2026년 월급 반영",
  },
];

const financeCalculators = [
  {
    path: "/cal/freelancer",
    emoji: "💼",
    title: "프리랜서 3.3% 환급",
    description: "매달 떼인 세금, 얼마나 돌려받을 수 있을까요?",
    tag: "종소세 시뮬레이션",
  },
  {
    path: "/cal/youth-tax",
    emoji: "🎓",
    title: "중기청 소득세 감면",
    description: "청년 취업자 90% 감면 혜택을 확인하세요",
    tag: "청년 혜택",
  },
];

export default function CalculatorHub() {
  return (
    <CalculatorLayout
      title="📊 계산기 모음"
      description="2030세대를 위한 실용 금융 계산기 모음"
      seoContent="알바 실수령액, 프리랜서 세금환급, 청년 소득세 감면, 군인 적금 등 2030세대에게 꼭 필요한 금융 계산기를 무료로 이용하세요."
    >
      {/* 재테크 · 절약 계산기 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🔢</span>
          <h2 className="text-xl font-bold text-foreground">재테크 · 절약 계산기</h2>
        </div>
        {lifeCalculators.map((calc) => (
          <Link
            key={calc.path}
            to={calc.path}
            className="group therapy-card category-card-life hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 block"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-category-life/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-2xl">{calc.emoji}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-category-life bg-category-life/10 px-2 py-0.5 rounded-full">
                    {calc.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-category-life transition-colors">
                  {calc.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {calc.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-category-life group-hover:translate-x-1 transition-all shrink-0 mt-4" />
            </div>
          </Link>
        ))}
      </div>

      {/* 금융 · 대출 계산기 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🧮</span>
          <h2 className="text-xl font-bold text-foreground">금융 · 대출 계산기</h2>
        </div>
        {financeCalculators.map((calc) => (
          <Link
            key={calc.path}
            to={calc.path}
            className="group therapy-card category-card-finance hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 block"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-category-finance/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-2xl">{calc.emoji}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-category-finance bg-category-finance/10 px-2 py-0.5 rounded-full">
                    {calc.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-category-finance transition-colors">
                  {calc.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {calc.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-category-finance group-hover:translate-x-1 transition-all shrink-0 mt-4" />
            </div>
          </Link>
        ))}
      </div>

      {/* Info Card */}
      <div className="therapy-card text-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <span className="text-4xl mb-4 block">📊</span>
        <h2 className="text-lg font-semibold text-foreground mb-2">
          2026년 최신 기준 적용
        </h2>
        <p className="text-muted-foreground">
          모든 계산기는 2026년 최저임금, 세율, 정책을 반영하고 있어요.<br />
          변경사항이 있으면 바로 업데이트됩니다.
        </p>
      </div>
    </CalculatorLayout>
  );
}
