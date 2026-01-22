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
