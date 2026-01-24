import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Canonical 태그를 동적으로 설정하는 함수
 * @param path - 현재 페이지의 경로 (예: "/blog/article" 또는 "/cal/part-time")
 * @param baseUrl - 기본 URL (기본값: window.location.origin)
 */
export function setCanonicalTag(path: string, baseUrl?: string) {
  const base = baseUrl || window.location.origin;
  // path가 "/"로 시작하지 않으면 추가
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${base}${normalizedPath}`;

  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);
}

/**
 * 구조화된 데이터 (JSON-LD)를 추가하는 함수
 * @param schema - 구조화된 데이터 객체
 */
export function addStructuredData(schema: object) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  script.id = `structured-data-${Date.now()}`;
  document.head.appendChild(script);
}

/**
 * Article 구조화된 데이터를 생성하는 함수
 */
export function createArticleSchema(data: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.headline,
    "description": data.description,
    "image": data.image || "https://donworry.kr/og-image.png",
    "datePublished": data.datePublished,
    "dateModified": data.dateModified || data.datePublished,
    "author": {
      "@type": "Person",
      "name": data.author?.name || "돈워리",
      "url": data.author?.url || "https://donworry.kr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "돈워리",
      "logo": {
        "@type": "ImageObject",
        "url": "https://donworry.kr/favicon.svg"
      }
    }
  };
}

/**
 * FAQPage 구조화된 데이터를 생성하는 함수
 */
export function createFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
