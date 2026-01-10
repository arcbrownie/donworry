import { useEffect } from "react";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "이용약관 | 돈워리";
  }, []);

  return (
    <CalculatorLayout
      title="📜 이용약관"
      description="돈워리 서비스 이용에 관한 약관입니다."
    >
      <div className="therapy-card prose prose-sm max-w-none">
        <h2 className="text-lg font-semibold text-foreground mt-2 mb-3">제1조 (목적)</h2>
        <p className="text-muted-foreground leading-relaxed">
          본 약관은 돈워리(이하 "서비스")가 제공하는 금융 계산기 및 정보 서비스의 이용에 관한 기본적인 사항을 규정함을 목적으로 합니다.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">제2조 (정의)</h2>
        <p className="text-muted-foreground leading-relaxed">
          ① "서비스"란 돈워리가 제공하는 웹사이트 및 관련 서비스를 말합니다.<br />
          ② "이용자"란 본 약관에 따라 서비스를 이용하는 모든 사용자를 말합니다.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">제3조 (약관의 효력과 변경)</h2>
        <p className="text-muted-foreground leading-relaxed">
          ① 본 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.<br />
          ② 약관의 변경이 있는 경우 서비스 내 공지를 통해 안내합니다.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">제4조 (서비스의 제공)</h2>
        <p className="text-muted-foreground leading-relaxed">
          서비스는 다음과 같은 기능을 제공합니다:
        </p>
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          <li>채무조정 자가진단 및 정보 제공</li>
          <li>금융 관련 계산기 (알바 실수령액, 세금 환급, 청년 감면, 군인 적금 등)</li>
          <li>금융 정보 콘텐츠 제공</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">제5조 (면책조항)</h2>
        <p className="text-muted-foreground leading-relaxed">
          ① 서비스에서 제공하는 계산 결과 및 정보는 참고용이며, 법적 효력이 없습니다.<br />
          ② 실제 세금, 환급액, 채무조정 결과 등은 개인 상황에 따라 다를 수 있으며,
          정확한 내용은 전문가 상담을 통해 확인하시기 바랍니다.<br />
          ③ 서비스 이용으로 인해 발생하는 손해에 대해 서비스는 책임을 지지 않습니다.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">제6조 (저작권)</h2>
        <p className="text-muted-foreground leading-relaxed">
          ① 서비스에서 제공하는 콘텐츠의 저작권은 서비스에 귀속됩니다.<br />
          ② 이용자는 서비스의 콘텐츠를 개인적, 비상업적 용도로만 이용할 수 있습니다.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">제7조 (이용자의 의무)</h2>
        <p className="text-muted-foreground leading-relaxed">
          이용자는 다음 행위를 하여서는 안 됩니다:
        </p>
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          <li>서비스의 운영을 방해하는 행위</li>
          <li>타인의 정보를 도용하는 행위</li>
          <li>서비스를 상업적 목적으로 무단 이용하는 행위</li>
          <li>기타 법령 또는 본 약관에 위반되는 행위</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">제8조 (분쟁 해결)</h2>
        <p className="text-muted-foreground leading-relaxed">
          본 약관과 관련된 분쟁은 대한민국 법률에 따르며,
          관할법원은 서비스 제공자의 주소지를 관할하는 법원으로 합니다.
        </p>

        <p className="text-sm text-muted-foreground mt-8 pt-4 border-t border-border">
          시행일: 2026년 1월 1일
        </p>
      </div>
    </CalculatorLayout>
  );
}
