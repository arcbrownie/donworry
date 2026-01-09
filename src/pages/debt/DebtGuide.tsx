import { CalculatorLayout } from "@/components/layout/CalculatorLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const guides = [
  {
    emoji: "🏛️",
    title: "개인회생 제도",
    content: `개인회생은 정기적인 수입이 있는 개인 채무자가 법원의 감독 하에 3~5년간 채무의 일부를 변제하고, 나머지 채무를 면책받는 제도입니다.

**신청 자격**
- 정기적인 수입이 있는 개인
- 총 채무가 무담보 10억원, 담보 15억원 이하
- 변제 의지가 있는 자

**장점**
- 채무의 최대 90%까지 탕감 가능
- 변제 기간 동안 강제집행 중지
- 면책 후 신용 회복 가능`,
  },
  {
    emoji: "📉",
    title: "개인파산 제도",
    content: `개인파산은 채무자가 자신의 재산으로 모든 채무를 변제할 수 없는 상태에서 법원에 파산을 신청하여 채무를 면책받는 제도입니다.

**신청 자격**
- 지급불능 상태인 개인
- 채무를 감당할 수 없는 상황

**장점**
- 모든 채무 면책 가능
- 빠른 절차 진행 (약 6개월~1년)

**주의사항**
- 일정 기간 자격 제한 가능
- 신용 회복에 시간 필요`,
  },
  {
    emoji: "⚡",
    title: "신속채무조정 제도",
    content: `신속채무조정은 연체 기간이 짧은 채무자가 신용회복위원회를 통해 빠르게 채무조정을 받을 수 있는 제도입니다.

**신청 자격**
- 연체 기간 30일~89일 이내
- 총 채무 15억원 이하
- 최저생계비 이상의 수입

**장점**
- 빠른 심사 (약 2주)
- 이자율 인하 및 상환 기간 연장
- 신용등급 영향 최소화`,
  },
  {
    emoji: "🔄",
    title: "나에게 맞는 채무조정 제도 선택",
    content: `**연체 90일 미만 + 안정적 수입**
→ 신속채무조정 추천

**연체 90일 이상 + 정기 수입**
→ 개인회생 추천

**수입이 없거나 극히 적음**
→ 개인파산 검토

정확한 판단은 전문가 상담을 통해 받으시는 것이 좋습니다.`,
  },
];

const faq = [
  {
    question: "채무조정 시 신용등급 변화",
    answer: "채무조정 진행 중에는 신용등급이 하락하지만, 성실히 변제를 완료하면 점차 회복됩니다. 특히 신속채무조정의 경우 영향이 비교적 적습니다.",
  },
  {
    question: "채무조정의 가족 영향",
    answer: "본인만 신청하는 것이므로 가족의 재산이나 신용에는 직접적인 영향이 없습니다. 다만, 연대보증인이 있다면 해당 보증인에게 청구가 갈 수 있습니다.",
  },
  {
    question: "채무조정 비용",
    answer: "개인회생의 경우 인지대, 송달료 등 약 30~50만원의 비용이 들며, 법률 대리인 비용은 별도입니다. 신속채무조정은 무료로 신청 가능합니다.",
  },
  {
    question: "직장 알림 여부",
    answer: "개인회생이나 파산 사실이 직장에 직접 통보되지는 않습니다. 다만, 급여 압류 해제 등의 절차에서 알려질 수 있습니다.",
  },
];

export default function DebtGuide() {
  return (
    <CalculatorLayout
      title="📖 채무조정 완벽 가이드"
      description="개인회생, 개인파산, 신속채무조정의 모든 것"
      seoContent="개인회생, 개인파산, 신속채무조정 제도를 상세히 비교하고 나에게 맞는 채무조정 방법을 찾아보세요. 신청 자격, 절차, 비용, 장단점을 쉽게 설명합니다."
    >
      {/* Guide Cards */}
      <div className="space-y-4">
        {guides.map((guide, index) => (
          <div key={index} className="therapy-card">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="text-2xl">{guide.emoji}</span>
              {guide.title}
            </h2>
            <div className="prose prose-sm text-muted-foreground whitespace-pre-line leading-relaxed">
              {guide.content}
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="therapy-card">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
          <span className="text-2xl">❓</span>
          자주 묻는 질문
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </CalculatorLayout>
  );
}
