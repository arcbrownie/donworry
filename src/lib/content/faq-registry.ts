/**
 * Next.js App Router용 FAQ 중앙 관리 시스템
 * 블로그 콘텐츠에서 FAQ를 자동으로 수집하고 관리
 */

import type { FAQItem } from "@/lib/faq-extractor";

/**
 * 블로그 콘텐츠별 FAQ 등록
 * 각 블로그 페이지에서 이 함수를 사용하여 FAQ를 등록합니다.
 */
class FAQRegistry {
  private faqs: Map<string, FAQItem[]> = new Map();

  /**
   * 블로그 콘텐츠의 FAQ를 등록
   * @param blogPath - 블로그 경로 (예: "/blog/weekly-holiday-pay-guide")
   * @param faqs - FAQ 배열
   */
  register(blogPath: string, faqs: FAQItem[]): void {
    this.faqs.set(blogPath, faqs);
  }

  /**
   * 특정 블로그 경로의 FAQ 가져오기
   */
  get(blogPath: string): FAQItem[] {
    return this.faqs.get(blogPath) || [];
  }

  /**
   * 여러 블로그 경로의 FAQ 수집
   */
  collect(blogPaths: string[]): FAQItem[] {
    const allFAQs: FAQItem[] = [];
    for (const path of blogPaths) {
      const faqs = this.get(path);
      allFAQs.push(...faqs);
    }
    return allFAQs;
  }

  /**
   * 모든 FAQ 가져오기
   */
  getAll(): FAQItem[] {
    const allFAQs: FAQItem[] = [];
    for (const faqs of this.faqs.values()) {
      allFAQs.push(...faqs);
    }
    return allFAQs;
  }

  /**
   * 카테고리별 FAQ 수집
   */
  getByCategory(category: string): FAQItem[] {
    // 카테고리별 블로그 경로 매핑
    const categoryBlogMap: Record<string, string[]> = {
      "채무조정": [
        "/personal-rehabilitation-2026-changes",
        "/blog/personal-rehabilitation-2026",
      ],
      "재테크 · 절약": [
        "/blog/weekly-holiday-pay-guide",
        "/blog/social-beginner-salary-guide",
        "/blog/one-person-household-savings-detailed",
      ],
      "금융 · 대출": [
        "/blog/first-loan-guide-2030",
        "/blog/credit-card-vs-check-card",
        "/blog/investment-guide-for-beginners",
      ],
    };

    const blogPaths = categoryBlogMap[category] || [];
    return this.collect(blogPaths);
  }
}

// 싱글톤 인스턴스
export const faqRegistry = new FAQRegistry();

/**
 * 블로그 콘텐츠에서 FAQ를 등록하는 헬퍼 함수
 * 각 블로그 페이지에서 사용:
 * 
 * @example
 * ```tsx
 * // app/blog/weekly-holiday-pay-guide/page.tsx
 * import { registerBlogFAQs } from "@/lib/content/faq-registry";
 * 
 * export const faqs = [
 *   { question: "...", answer: "...", keywords: [...] }
 * ];
 * 
 * // 페이지 컴포넌트에서
 * registerBlogFAQs("/blog/weekly-holiday-pay-guide", faqs);
 * ```
 */
export function registerBlogFAQs(blogPath: string, faqs: FAQItem[]): void {
  faqRegistry.register(blogPath, faqs);
}

/**
 * 섹션별 FAQ 수집 함수
 * Hub 페이지에서 사용:
 * 
 * @example
 * ```tsx
 * // app/savings/page.tsx
 * import { getFAQsByCategory } from "@/lib/content/faq-registry";
 * 
 * const savingsFAQ = getFAQsByCategory("재테크 · 절약");
 * ```
 */
export function getFAQsByCategory(category: string): FAQItem[] {
  return faqRegistry.getByCategory(category);
}

/**
 * 특정 블로그 경로들의 FAQ 수집
 */
export function getFAQsByPaths(blogPaths: string[]): FAQItem[] {
  return faqRegistry.collect(blogPaths);
}
