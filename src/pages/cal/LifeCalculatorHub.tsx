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

export default function LifeCalculatorHub() {
  return (
    <CalculatorLayout
      title="🔢 재테크 · 절약 계산기"
      description="일상에 필요한 재테크 · 절약 계산기 모음"
      seoContent="알바 실수령액, 군인 적금 등 2030세대 일상에 꼭 필요한 재테크 · 절약 계산기를 무료로 이용하세요. 2026년 최저임금과 최신 정책이 반영되어 있습니다."
    >
      <div className="space-y-4">
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

      {/* Info Card */}
      <div className="therapy-card text-center bg-category-life-light border-l-4 border-category-life">
        <span className="text-4xl mb-4 block">🏠</span>
        <h2 className="text-lg font-semibold text-foreground mb-2">
          재테크 · 절약 계산기
        </h2>
        <p className="text-muted-foreground">
          알바, 군인 적금 등 일상에서 바로 활용할 수 있는 계산기입니다.<br />
          2026년 최신 기준이 반영되어 있습니다.
        </p>
      </div>
    </CalculatorLayout>
  );
}
