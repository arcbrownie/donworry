import { CalculatorLayout } from "@/components/layout/CalculatorLayout";

export default function About() {
  return (
    <CalculatorLayout
      title="💙 돈워리 소개"
      description="마음까지 챙기는 금융 처방전"
    >
      <div className="therapy-card">
        <div className="text-center mb-8">
          <span className="text-6xl mb-4 block">💙</span>
          <h2 className="text-2xl font-bold text-foreground mb-2">돈워리 (Don't Worry)</h2>
          <p className="text-muted-foreground">마음까지 챙기는 금융 처방전</p>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">돈워리</strong>는 복잡하고 어려운 금융 정보를 
            누구나 쉽게 이해하고 활용할 수 있도록 도와주는 서비스입니다.
          </p>

          <p>
            채무로 힘들어하시는 분들께는 희망의 길을 안내해드리고,
            사회 초년생과 청년들에게는 꼭 필요한 금융 정보를 제공합니다.
          </p>

          <div className="bg-therapy-soft rounded-xl p-6 my-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span>🎯</span> 돈워리가 하는 일
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-xl">🩺</span>
                <div>
                  <strong className="text-foreground">채무조정 안내</strong>
                  <p className="text-sm">개인회생, 파산, 신속채무조정 등 나에게 맞는 방법을 찾아드려요.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🧮</span>
                <div>
                  <strong className="text-foreground">금융 계산기</strong>
                  <p className="text-sm">알바 실수령액, 세금 환급, 청년 감면 혜택 등을 쉽게 계산해요.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📖</span>
                <div>
                  <strong className="text-foreground">금융 가이드</strong>
                  <p className="text-sm">어려운 금융 용어와 제도를 쉽고 친절하게 설명해요.</p>
                </div>
              </li>
            </ul>
          </div>

          <p>
            돈 때문에 걱정하지 마세요. <strong className="text-primary">돈워리</strong>가 함께할게요. 💙
          </p>
        </div>
      </div>

      <div className="therapy-card">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <span>📧</span> 문의하기
        </h3>
        <p className="text-muted-foreground">
          서비스 관련 문의, 제안, 오류 신고 등은 아래 이메일로 연락해주세요.
        </p>
        <p className="text-primary font-medium mt-2">
          contact@donworry.kr
        </p>
      </div>
    </CalculatorLayout>
  );
}
