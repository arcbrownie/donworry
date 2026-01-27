"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings?: TocItem[];
  className?: string;
}

export default function TableOfContents({ headings, className = "" }: TableOfContentsProps) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // headings가 제공되지 않으면 자동으로 추출
    if (headings && headings.length > 0) {
      setItems(headings);
    } else {
      // DOM에서 자동으로 H2만 추출
      const headingElements = document.querySelectorAll('article h2, main h2');
      const extractedHeadings: TocItem[] = [];
      
      headingElements.forEach((heading, index) => {
        const id = heading.id || `heading-${index}`;
        if (!heading.id) {
          heading.id = id;
        }
        
        const text = heading.textContent?.trim() || "";
        const level = 2; // H2만 추출
        
        extractedHeadings.push({ id, text, level });
      });
      
      setItems(extractedHeadings);
    }
  }, [headings]);

  useEffect(() => {
    if (items.length === 0) return;

    // Intersection Observer로 현재 활성 섹션 추적
    const observerOptions = {
      rootMargin: "-80px 0px -80% 0px",
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    // 모든 헤딩 관찰
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [items]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      
      setMobileOpen(false);
    }
  };

  if (items.length === 0) {
    return null;
  }

  const TocContent = () => {
    // H2만 필터링 (명시적 headings prop이 있을 경우에도)
    const h2Items = items.filter(item => item.level === 2);
    let h2Counter = 0;
    
    return (
      <nav className="space-y-1">
        {h2Items.map((item) => {
          h2Counter++;
          
          // 텍스트에서 기존 번호 패턴 제거 (예: "1. ", "2. ", "10. " 등)
          const cleanText = item.text.replace(/^\d+\.\s*/, "");
          const displayText = `${h2Counter}. ${cleanText}`;
          
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToHeading(item.id);
              }}
              className={`block text-base transition-colors rounded-md px-2 py-1.5 pl-2 ${
                activeId === item.id
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-muted"
              }`}
            >
              {displayText}
            </a>
          );
        })}
      </nav>
    );
  };

  return (
    <div className={className}>
      {/* Desktop: Sticky Sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-[100px]">
          <div className="bg-card border border-border rounded-xl p-4 shadow-soft">
            <h3 className="font-semibold text-foreground mb-3 text-lg">목차</h3>
            <TocContent />
          </div>
        </div>
      </aside>

      {/* Mobile: Collapsible Box */}
      <div className="lg:hidden">
        <Collapsible open={mobileOpen} onOpenChange={setMobileOpen}>
          <CollapsibleTrigger className="w-full">
            <div className="bg-card border border-border rounded-xl p-4 shadow-soft flex items-center justify-between">
              <h3 className="font-semibold text-foreground text-lg">목차</h3>
              {mobileOpen ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="bg-card border border-border border-t-0 rounded-b-xl p-4 shadow-soft mt-0">
              <TocContent />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}
