import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";
import { setCanonicalTag } from "@/lib/utils";

export default function PrivacyPolicy() {
  const location = useLocation();

  useEffect(() => {
    // Canonical Tag
    setCanonicalTag(location.pathname);

    document.title = "개인정보처리방침 | 돈워리";
  }, [location.pathname]);

  return (
    <CalculatorLayout
      title="🔒 개인정보처리방침"
      description="돈워리의 개인정보 처리에 관한 안내입니다."
    >
      <div className="therapy-card prose prose-sm max-w-none">
        <p className="text-muted-foreground leading-relaxed">
          본 개인정보처리방침은 돈워리(이하 "서비스")가 수집하는 개인정보의 항목, 수집 및 이용 목적, 보유 기간 등을 안내합니다.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">1. 수집하는 개인정보 항목</h2>
        <p className="text-muted-foreground leading-relaxed">
          현재 서비스는 회원가입 없이 이용 가능하며, 별도의 개인정보를 수집하지 않습니다.
          다만, 서비스 이용 과정에서 아래의 정보가 자동으로 생성되어 수집될 수 있습니다:
        </p>
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          <li>접속 IP 주소</li>
          <li>브라우저 종류 및 버전</li>
          <li>서비스 이용 기록 (페이지 조회 등)</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">2. 개인정보의 수집 및 이용 목적</h2>
        <p className="text-muted-foreground leading-relaxed">
          수집된 정보는 다음의 목적으로만 이용됩니다:
        </p>
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          <li>서비스 제공 및 운영</li>
          <li>서비스 개선 및 통계 분석</li>
          <li>부정 이용 방지</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">3. 개인정보의 보유 및 이용 기간</h2>
        <p className="text-muted-foreground leading-relaxed">
          자동 수집되는 정보는 수집일로부터 1년간 보관 후 파기됩니다.
          법령에 따라 보관이 필요한 경우 해당 기간 동안 보관합니다.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">4. 개인정보의 제3자 제공</h2>
        <p className="text-muted-foreground leading-relaxed">
          서비스는 이용자의 개인정보를 제3자에게 제공하지 않습니다.
          다만, 법률에 의해 요구되는 경우는 예외로 합니다.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">5. 쿠키(Cookie)의 사용</h2>
        <p className="text-muted-foreground leading-relaxed">
          서비스는 이용자의 편의를 위해 쿠키를 사용할 수 있습니다.
          쿠키는 브라우저 설정을 통해 거부할 수 있으며, 거부 시 일부 기능 이용에 제한이 있을 수 있습니다.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">6. 광고 및 제휴</h2>
        <p className="text-muted-foreground leading-relaxed">
          서비스는 Google AdSense 등의 광고 서비스를 이용할 수 있으며,
          이러한 광고 서비스는 자체적인 쿠키를 사용하여 맞춤형 광고를 제공할 수 있습니다.
          광고 쿠키에 대한 자세한 내용은 Google 개인정보처리방침을 참조하세요.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">7. 개인정보 보호책임자</h2>
        <p className="text-muted-foreground leading-relaxed">
          개인정보 관련 문의사항은 아래로 연락해주세요:
        </p>
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          <li>담당자: 돈워리 운영팀</li>
          <li>이메일: contact@donworry.kr</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">8. 개인정보처리방침 변경</h2>
        <p className="text-muted-foreground leading-relaxed">
          본 개인정보처리방침은 법령, 정책, 서비스 변경에 따라 수정될 수 있으며,
          변경 시 서비스 내 공지를 통해 안내됩니다.
        </p>

        <p className="text-sm text-muted-foreground mt-8 pt-4 border-t border-border">
          시행일: 2026년 1월 1일
        </p>
      </div>
    </CalculatorLayout>
  );
}
