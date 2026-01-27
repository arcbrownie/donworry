/**
 * FAQ 추출 및 키워드 처리 유틸리티
 */

export interface FAQItem {
  question: string;
  answer: string;
  keywords?: string[];
}

/**
 * 복합 키워드 목록 (분절되지 않아야 하는 키워드들)
 * 예: "채무조정" -> "채무, 조정"으로 분절되지 않도록
 */
const COMPOUND_KEYWORDS = [
  // 채무 관련
  "채무조정", "개인회생", "개인파산", "신용회복", "신속채무조정", "신용회복위원회",
  "채무자", "채무액", "채무해결",
  
  // 금융 관련
  "신용점수", "신용카드", "체크카드", "대출금액", "대출이자", "대출기간",
  "원리금", "원금균등", "원리금균등", "DSR", "LTV", "DTI",
  "프리랜서", "종합소득세", "원천징수", "소득세", "지방소득세",
  
  // 절약 관련
  "주휴수당", "최저임금", "실업급여", "고용보험", "장병내일준비적금",
  "가계비", "생활비", "절약", "재테크",
  
  // 기타
  "신청자격", "수급자격", "가입조건", "계산방법", "환급", "감면",
];

/**
 * 텍스트에서 키워드를 추출하되, 복합 키워드를 우선적으로 보존
 * @param text - 키워드를 추출할 텍스트
 * @returns 추출된 키워드 배열
 */
export function extractKeywords(text: string): string[] {
  if (!text) return [];
  
  const keywords: string[] = [];
  let remainingText = text;
  
  // 1. 먼저 복합 키워드를 찾아서 제거
  const foundCompoundKeywords: string[] = [];
  
  // 길이 순으로 정렬 (긴 키워드부터 매칭)
  const sortedCompoundKeywords = [...COMPOUND_KEYWORDS].sort((a, b) => b.length - a.length);
  
  for (const compoundKeyword of sortedCompoundKeywords) {
    if (remainingText.includes(compoundKeyword)) {
      foundCompoundKeywords.push(compoundKeyword);
      // 키워드가 포함된 부분을 제거 (중복 방지)
      remainingText = remainingText.replace(new RegExp(compoundKeyword, 'g'), '');
    }
  }
  
  // 2. 남은 텍스트에서 일반 키워드 추출 (2글자 이상)
  const words = remainingText
    .replace(/[^\uAC00-\uD7A3a-zA-Z0-9\s]/g, ' ') // 한글, 영문, 숫자만 남기고 나머지는 공백으로
    .split(/\s+/)
    .filter(word => word.length >= 2 && word.length <= 10)
    .filter(word => !foundCompoundKeywords.some(ck => ck.includes(word))); // 복합 키워드에 포함된 단어 제외
  
  // 3. 복합 키워드와 일반 키워드 결합
  const allKeywords = [...foundCompoundKeywords, ...words];
  
  // 4. 중복 제거 및 정렬
  return Array.from(new Set(allKeywords))
    .filter(k => k.trim().length > 0)
    .sort((a, b) => {
      // 복합 키워드 우선 정렬
      const aIsCompound = COMPOUND_KEYWORDS.includes(a);
      const bIsCompound = COMPOUND_KEYWORDS.includes(b);
      if (aIsCompound && !bIsCompound) return -1;
      if (!aIsCompound && bIsCompound) return 1;
      return a.localeCompare(b);
    });
}

/**
 * 여러 FAQ 배열을 병합하고 중복 제거
 * @param faqArrays - 병합할 FAQ 배열들
 * @returns 병합된 FAQ 배열
 */
export function mergeFAQs(...faqArrays: FAQItem[][]): FAQItem[] {
  const merged: FAQItem[] = [];
  const seenQuestions = new Set<string>();
  
  for (const faqArray of faqArrays) {
    for (const faq of faqArray) {
      // 질문이 동일한 경우 중복 제거
      const normalizedQuestion = faq.question.trim().toLowerCase();
      if (!seenQuestions.has(normalizedQuestion)) {
        seenQuestions.add(normalizedQuestion);
        
        // 키워드가 없는 경우 자동 추출
        if (!faq.keywords || faq.keywords.length === 0) {
          const extractedKeywords = extractKeywords(`${faq.question} ${faq.answer}`);
          faq.keywords = extractedKeywords;
        }
        
        merged.push(faq);
      }
    }
  }
  
  return merged;
}

/**
 * 블로그 콘텐츠에서 FAQ를 추출
 * @param content - 블로그 콘텐츠 객체 (FAQ 속성을 가진 객체)
 * @returns FAQ 배열
 */
export function extractFAQsFromContent(content: { faqs?: FAQItem[] }): FAQItem[] {
  if (!content || !content.faqs) {
    return [];
  }
  
  // 키워드가 없는 FAQ에 대해 자동으로 키워드 추출
  return content.faqs.map(faq => {
    if (!faq.keywords || faq.keywords.length === 0) {
      const extractedKeywords = extractKeywords(`${faq.question} ${faq.answer}`);
      return {
        ...faq,
        keywords: extractedKeywords
      };
    }
    return faq;
  });
}

/**
 * 여러 블로그 콘텐츠에서 FAQ를 수집
 * @param contents - 블로그 콘텐츠 배열
 * @returns 수집된 FAQ 배열
 */
export function collectFAQsFromContents(contents: Array<{ faqs?: FAQItem[] }>): FAQItem[] {
  const allFAQs: FAQItem[] = [];
  
  for (const content of contents) {
    const faqs = extractFAQsFromContent(content);
    allFAQs.push(...faqs);
  }
  
  // 중복 제거 및 병합
  return mergeFAQs(allFAQs);
}
