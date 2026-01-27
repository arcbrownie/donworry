import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  keywords?: string[];
}

interface FAQAccordionProps {
  title?: string;
  description?: string;
  items: FAQItem[];
  variant?: "life" | "finance" | "debt";
  storageKey?: string; // 로컬 스토리지 키 (각 메뉴별로 구분)
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
  variant = "life",
  storageKey = "faq-keyword-clicks"
}: FAQAccordionProps) {
  const styles = variantStyles[variant];
  
  // 모든 키워드 추출 (중복 제거)
  const allKeywords = Array.from(
    new Set(
      items.flatMap(item => item.keywords || [])
    )
  );

  // 로컬 스토리지에서 클릭 수 로드
  const [keywordClicks, setKeywordClicks] = useState<{ [key: string]: number }>(() => {
    if (typeof window === 'undefined') return {};
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  // 가장 많이 클릭된 키워드 찾기
  const getDefaultKeyword = (): string | null => {
    if (allKeywords.length === 0) return null;
    if (Object.keys(keywordClicks).length === 0) return null; // 처음 방문자는 전체 표시
    
    const sorted = allKeywords
      .map(keyword => ({
        keyword,
        clicks: keywordClicks[keyword] || 0
      }))
      .sort((a, b) => b.clicks - a.clicks);
    
    // 클릭 수가 0이면 전체를 기본값으로
    return sorted[0]?.clicks > 0 ? sorted[0].keyword : null;
  };

  // 가장 많이 클릭된 키워드 계산
  const getDefaultKeywordValue = (): string | null => {
    if (allKeywords.length === 0) return null;
    if (Object.keys(keywordClicks).length === 0) return null; // 처음 방문자는 전체 표시
    
    const sorted = allKeywords
      .map(keyword => ({
        keyword,
        clicks: keywordClicks[keyword] || 0
      }))
      .sort((a, b) => b.clicks - a.clicks);
    
    // 클릭 수가 0이면 전체를 기본값으로
    return sorted[0]?.clicks > 0 ? sorted[0].keyword : null;
  };

  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(getDefaultKeywordValue);

  // 키워드 클릭 시 클릭 수 업데이트
  const handleKeywordClick = (keyword: string) => {
    setSelectedKeyword(keyword);
    const newClicks = {
      ...keywordClicks,
      [keyword]: (keywordClicks[keyword] || 0) + 1
    };
    setKeywordClicks(newClicks);
    
    try {
      localStorage.setItem(storageKey, JSON.stringify(newClicks));
    } catch (e) {
      console.warn('Failed to save keyword clicks to localStorage', e);
    }
  };

  // 키워드별 FAQ 필터링
  const filteredItems = selectedKeyword
    ? items.filter(item => !item.keywords || item.keywords.length === 0 || item.keywords.includes(selectedKeyword))
    : items;

  // 클릭 수에 따라 키워드 정렬
  const sortedKeywords = [...allKeywords].sort((a, b) => {
    const clicksA = keywordClicks[a] || 0;
    const clicksB = keywordClicks[b] || 0;
    if (clicksB !== clicksA) return clicksB - clicksA;
    return a.localeCompare(b); // 클릭 수가 같으면 알파벳 순
  });

  // 초기 마운트 시 기본 키워드 설정
  useEffect(() => {
    if (allKeywords.length > 0 && selectedKeyword === null) {
      const defaultKeyword = getDefaultKeywordValue();
      if (defaultKeyword !== null) {
        setSelectedKeyword(defaultKeyword);
      }
    }
  }, []);

  return (
    <section className="container py-12">
      <div className={`therapy-card ${styles.bg} ${styles.border}`}>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            ❓ {title}
          </h2>
          {description && (
            <p className="text-base text-muted-foreground mt-1">{description}</p>
          )}
        </div>

        {/* Keyword Filter Bubbles */}
        {allKeywords.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            <button
              onClick={() => {
                setSelectedKeyword(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedKeyword === null
                  ? `${styles.bg} ${styles.text} border-2 ${styles.border} shadow-sm`
                  : 'bg-background text-muted-foreground border border-border hover:bg-muted'
              }`}
            >
              전체
            </button>
            {sortedKeywords.map((keyword) => (
              <button
                key={keyword}
                onClick={() => handleKeywordClick(keyword)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedKeyword === keyword
                    ? `${styles.bg} ${styles.text} border-2 ${styles.border} shadow-sm`
                    : 'bg-background text-muted-foreground border border-border hover:bg-muted'
                }`}
              >
                {keyword}
              </button>
            ))}
          </div>
        )}

        <Accordion type="single" collapsible className="space-y-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
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
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              선택한 키워드에 해당하는 FAQ가 없습니다.
            </div>
          )}
        </Accordion>
      </div>
    </section>
  );
}
