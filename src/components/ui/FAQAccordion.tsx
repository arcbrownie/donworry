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

interface FAQAccordionProps {
  title?: string;
  description?: string;
  items: FAQItem[];
  variant?: "life" | "finance" | "debt";
}

const variantStyles = {
  life: {
    border: "border-category-life/20",
    bg: "bg-category-life/5",
    text: "text-category-life",
  },
  finance: {
    border: "border-category-finance/20",
    bg: "bg-category-finance/5",
    text: "text-category-finance",
  },
  debt: {
    border: "border-category-debt/20",
    bg: "bg-category-debt/5",
    text: "text-category-debt",
  },
};

export default function FAQAccordion({ 
  title = "자주 묻는 질문", 
  description,
  items, 
  variant = "life" 
}: FAQAccordionProps) {
  const styles = variantStyles[variant];

  return (
    <section className="container py-12">
      <div className={`therapy-card ${styles.bg} ${styles.border}`}>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            ❓ {title}
          </h2>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-lg border border-border px-4"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
