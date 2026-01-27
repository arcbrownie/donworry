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

/**
 * 전문가 정보를 포함한 Article 구조화된 데이터를 생성하는 함수
 */
export function createExpertArticleSchema(data: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  expert: {
    id: string;
    name: string;
    title: string;
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
      "name": data.expert.name,
      "jobTitle": data.expert.title,
      "url": data.expert.url || `https://donworry.kr/experts/${data.expert.id}`
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
 * SEO 메타 태그를 동적으로 설정하는 함수
 * @param data - SEO 메타 태그 데이터
 */
export function setSEOMetaTags(data: {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}) {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://donworry.kr";
  const currentUrl = data.url || (typeof window !== "undefined" ? window.location.href : baseUrl);
  const ogImage = data.image || `${baseUrl}/og-image.png`;
  const description = data.description.length > 150 
    ? data.description.substring(0, 147) + "..." 
    : data.description;

  // Title
  document.title = data.title;

  // Meta Description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);

  // Meta Keywords
  if (data.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', data.keywords);
  }

  // OpenGraph Tags
  const ogTags = [
    { property: 'og:title', content: data.title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage },
    { property: 'og:url', content: currentUrl },
    { property: 'og:type', content: data.type || 'article' },
    { property: 'og:site_name', content: '돈워리' },
  ];

  ogTags.forEach(tag => {
    let meta = document.querySelector(`meta[property="${tag.property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', tag.property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', tag.content);
  });

  // Twitter Card Tags
  const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: data.title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ];

  twitterTags.forEach(tag => {
    let meta = document.querySelector(`meta[name="${tag.name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', tag.name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', tag.content);
  });

  // Author
  if (data.author) {
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', data.author);
  }
}
