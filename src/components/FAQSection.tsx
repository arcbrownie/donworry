import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

export function FAQSection({ title = "자주 묻는 질문", items }: FAQSectionProps) {
  return (
    <section className="therapy-card">
      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <span>❓</span>
        {title}
      </h2>
      <Accordion type="single" collapsible className="space-y-2">
        {items.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border border-border/50 rounded-xl px-4 data-[state=open]:bg-accent/30"
          >
            <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

// 기본 FAQ 데이터
export const debtFAQs: FAQItem[] = [
  {
    question: "개인회생과 파산의 차이점은 무엇인가요?",
    answer: "개인회생은 채무의 일부를 3~5년간 분할 상환하고 나머지를 탕감받는 제도입니다. 파산은 모든 재산을 정리하여 채무 전액을 면책받는 제도로, 재산이 거의 없는 경우에 유리합니다. 본인의 소득과 재산 상황에 따라 적합한 방법이 달라집니다.",
  },
  {
    question: "신속채무조정은 누가 신청할 수 있나요?",
    answer: "신속채무조정은 연체 기간이 90일 이하이고, 총 채무액이 15억원 이하인 경우 신청 가능합니다. 신용회복위원회를 통해 진행되며, 개인회생보다 빠르고 간편하게 채무를 조정받을 수 있습니다.",
  },
  {
    question: "채무조정을 받으면 신용에 어떤 영향이 있나요?",
    answer: "채무조정 후에는 일정 기간 신용등급에 영향이 있습니다. 하지만 채무를 성실히 상환하면 점차 신용이 회복됩니다. 연체를 지속하는 것보다 적극적으로 채무조정을 받는 것이 장기적으로 더 유리합니다.",
  },
  {
    question: "개인회생 신청 비용은 얼마인가요?",
    answer: "개인회생 신청 시 인지대(약 3만원)와 송달료(약 50만원)가 필요합니다. 법무사나 변호사 비용은 별도이며, 경제적으로 어려운 경우 법률구조공단의 무료 지원을 받을 수 있습니다.",
  },
];

export const loanFAQs: FAQItem[] = [
  {
    question: "대출 금리를 낮추는 방법이 있나요?",
    answer: "신용점수 개선, 담보 제공, 여러 금융기관 비교, 정부 지원 대환대출 등을 통해 금리를 낮출 수 있습니다. 또한 기존 대출의 중도상환수수료가 없다면 더 낮은 금리의 대출로 갈아타는 것도 방법입니다.",
  },
  {
    question: "대출 이자 계산은 어떻게 하나요?",
    answer: "대출 이자는 원리금균등상환, 원금균등상환, 만기일시상환 등 상환 방식에 따라 달라집니다. 일반적으로 원금균등상환이 총 이자 부담이 가장 적고, 만기일시상환이 가장 큽니다.",
  },
  {
    question: "여러 대출을 하나로 합칠 수 있나요?",
    answer: "네, 대환대출(빚 갈아타기)을 통해 여러 대출을 하나로 통합할 수 있습니다. 이를 통해 관리가 편해지고, 더 낮은 금리로 갈아탈 경우 이자 부담도 줄일 수 있습니다.",
  },
];