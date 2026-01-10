import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";

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

export default function FinanceCalculatorHub() {
  return (
    <CalculatorLayout
      title="🧮 금융 · 대출 계산기"
      description="세금, 환급, 대출 등 금융 · 대출에 필요한 계산기 모음"
      seoContent="프리랜서 세금환급, 청년 소득세 감면 등 금융 · 대출 관련 계산기를 무료로 이용하세요. 2026년 세율과 최신 정책이 반영되어 있습니다."
    >
      <div className="space-y-4">
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
      <div className="therapy-card text-center bg-category-finance-light border-l-4 border-category-finance">
        <span className="text-4xl mb-4 block">💳</span>
        <h2 className="text-lg font-semibold text-foreground mb-2">
          똑똑한 금융 · 대출 계산기
        </h2>
        <p className="text-muted-foreground">
          세금, 환급, 감면, 대출 등 금융 · 대출에 필요한 계산을 쉽게 해보세요.<br />
          2026년 최신 세율이 반영되어 있습니다.
        </p>
      </div>
    </CalculatorLayout>
  );
}
