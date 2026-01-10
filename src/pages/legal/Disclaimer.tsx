import { useEffect } from "react";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";

export default function Disclaimer() {
  useEffect(() => {
    document.title = "법적 고지 | 돈워리";
  }, []);

  return (
    <CalculatorLayout
      title="⚖️ 법적 고지"
      description="돈워리 서비스 이용에 관한 법적 고지사항입니다."
    >
      <div className="therapy-card prose prose-sm max-w-none">
        <div className="bg-warning/10 border border-warning/30 rounded-lg p-6 mb-6">
          <p className="text-foreground font-semibold leading-relaxed">
            ⚠️ 본 사이트의 정보는 참고용이며, 법적 책임을 지지 않습니다.
          </p>
        </div>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">1. 정보의 성격</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          돈워리(이하 "본 사이트")에서 제공하는 모든 정보, 계산기, 가이드, 콘텐츠는 <strong className="text-foreground">참고용 목적</strong>으로만 제공됩니다.
          본 사이트의 정보는 일반적인 금융/채무 조정 정보에 대한 이해를 돕기 위한 것이며, 
          개인의 구체적인 상황에 대한 법적, 재무적 조언을 제공하는 것은 아닙니다.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">2. 계산기 결과의 한계</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          본 사이트에서 제공하는 모든 계산기(세금 계산기, 실수령액 계산기, 채무 탕감액 계산기 등)의 결과는 
          <strong className="text-foreground"> 예상치 및 추정치</strong>입니다. 
          실제 계산 결과와 다를 수 있으며, 실제 세액, 급여, 채무 처리 결과는 개인의 구체적인 상황, 
          관련 법령, 정책 변경 등에 따라 달라질 수 있습니다.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">3. 전문가 상담의 필요성</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          본 사이트의 정보는 전문적인 법률, 회계, 세무 상담을 대체할 수 없습니다. 
          특히 개인회생, 파산, 신속채무조정, 세금 관련 사안 등은 전문가와의 상담이 반드시 필요합니다.
          중요한 금융 결정이나 법적 절차를 진행하기 전에 반드시 해당 분야의 전문가(변호사, 회계사, 세무사 등)와 상담하시기 바랍니다.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">4. 법적 책임의 면제</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          본 사이트는 다음과 같은 경우에 대해 법적 책임을 지지 않습니다:
        </p>
        <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
          <li>본 사이트의 정보를 기반으로 한 의사결정으로 인한 모든 손해 및 손실</li>
          <li>계산기 결과와 실제 결과 간의 차이로 인한 불이익</li>
          <li>본 사이트의 정보가 변경, 폐지된 법령이나 정책을 반영하지 않아 발생한 문제</li>
          <li>본 사이트 이용 중 발생한 직접적, 간접적, 특별, 부수적 손해</li>
          <li>정보의 부정확성, 오류, 누락으로 인한 모든 손해</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">5. 법령 및 정책의 변경</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          관련 법령, 세법, 정책은 수시로 변경될 수 있습니다. 
          본 사이트의 정보는 특정 시점의 정보를 기준으로 작성되었으며, 
          최신 법령 및 정책과 일치하지 않을 수 있습니다. 
          정확한 정보는 관련 공공기관 및 전문가를 통해 확인하시기 바랍니다.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">6. 개인 상황의 차이</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          모든 금융 및 법적 사안은 개인의 구체적인 상황에 따라 결과가 달라질 수 있습니다. 
          본 사이트의 일반적인 정보나 가이드가 모든 경우에 적용 가능한 것은 아닙니다. 
          본인의 구체적인 상황을 전문가와 상담하여 최적의 해결 방안을 찾으시기 바랍니다.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">7. 의견 및 조언</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          본 사이트에서 제공하는 모든 의견, 조언, 권고사항은 일반적인 정보 제공의 범위를 벗어나지 않으며, 
          구체적인 법적, 재무적 조언으로 해석되어서는 안 됩니다. 
          본인의 상황에 맞는 구체적인 조언은 해당 분야의 전문가에게 문의하시기 바랍니다.
        </p>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-8">
          <p className="text-foreground font-semibold mb-2">✅ 권장 사항</p>
          <p className="text-muted-foreground leading-relaxed">
            본 사이트를 참고 자료로 활용하시되, 중요한 금융 결정이나 법적 절차를 진행하기 전에는 
            반드시 해당 분야의 전문가(변호사, 회계사, 세무사, 금융 전문가 등)와 상담하시기 바랍니다.
          </p>
        </div>

        <p className="text-sm text-muted-foreground mt-8 leading-relaxed">
          <strong>최종 업데이트:</strong> 2026년 1월
        </p>
      </div>
    </CalculatorLayout>
  );
}
