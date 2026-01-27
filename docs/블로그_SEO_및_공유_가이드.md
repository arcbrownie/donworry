# 블로그 SEO 및 소셜 공유 가이드

모든 블로그 포스트에 SEO 메타 태그와 소셜 공유 기능을 추가하는 방법입니다.

## 📋 구현 완료 사항

### 1. SEO 메타 태그 유틸리티 함수
- `setSEOMetaTags()` 함수가 OpenGraph, Twitter Card 태그를 자동으로 설정합니다
- 위치: `src/lib/utils.ts`

### 2. 소셜 공유 컴포넌트
- `BlogShareButtons` 컴포넌트 생성
- 위치: `src/components/ui/BlogShareButtons.tsx`
- 기능:
  - 카카오톡 공유
  - 링크 복사
  - Twitter/X 공유
  - 모바일 네이티브 공유 (지원 시)

### 3. Schema Markup
- `createExpertArticleSchema()` 함수로 Article 스키마 생성
- FAQ가 있는 경우 `createFAQPageSchema()` 사용

## 🚀 블로그 포스트에 적용하기

### Step 1: Import 추가

```tsx
import { setCanonicalTag, addStructuredData, createExpertArticleSchema, setSEOMetaTags } from "@/lib/utils";
import { BlogShareButtons } from "@/components/ui/BlogShareButtons";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
```

### Step 2: SEO 메타 태그 설정

기존의 수동 메타 태그 설정을 `setSEOMetaTags()` 함수로 교체:

```tsx
useEffect(() => {
  // Canonical Tag
  setCanonicalTag(location.pathname);

  // SEO Meta Tags (OpenGraph, Twitter 포함)
  const title = "블로그 포스트 제목 | 돈워리";
  const description = '블로그 포스트 설명 (150자 내외)';
  const keywords = '키워드1, 키워드2, 키워드3';
  
  setSEOMetaTags({
    title,
    description,
    keywords,
    image: 'https://donworry.kr/og-image.png',
    url: typeof window !== "undefined" ? window.location.href : `https://donworry.kr${location.pathname}`,
    type: 'article',
    author: '전문가 이름 (전문가 직함)'
  });

  // Schema Markup
  const expert = {
    id: 'expert-savings-01', // 전문가 ID
    name: '김민지',
    title: '재테크 전문가',
    url: 'https://donworry.kr/experts/expert-savings-01'
  };
  
  const articleSchema = createExpertArticleSchema({
    headline: title,
    description: description,
    datePublished: '2026-01-15',
    dateModified: '2026-01-27',
    expert: expert
  });
  
  addStructuredData(articleSchema);
}, [location.pathname]);
```

### Step 3: ShareButtons 추가

#### 데스크톱: 목차 옆에 Sticky 버튼

```tsx
{/* Table of Contents & Share Buttons */}
<div className="lg:w-64 flex-shrink-0 space-y-4">
  <TableOfContents />
  {/* Desktop: Sticky Share Buttons */}
  <div className="hidden lg:block">
    <BlogShareButtons
      title="블로그 포스트 제목"
      description="블로그 포스트 설명"
      variant="sticky"
    />
  </div>
</div>
```

#### 본문 하단: Inline 버튼

```tsx
<ArticleAuthor 
  expertId="expert-savings-01"
  publishedDate="2026-01-15"
  lastUpdated="2026-01-27"
/>

{/* Share Buttons */}
<BlogShareButtons
  title="블로그 포스트 제목"
  description="블로그 포스트 설명"
  variant="inline"
  className="mt-8"
/>
```

#### 모바일: Bottom Fixed 버튼

```tsx
{/* Mobile: Bottom Fixed Share Buttons */}
<div className="lg:hidden">
  <BlogShareButtons
    title="블로그 포스트 제목"
    description="블로그 포스트 설명"
    variant="bottom-fixed"
  />
</div>
```

## 🎨 BlogShareButtons Variants

### `sticky`
- 데스크톱에서 목차 옆에 고정 표시
- 스크롤 시 함께 이동

### `bottom-fixed`
- 모바일에서 화면 하단에 고정
- 항상 보이는 공유 버튼

### `inline`
- 본문 내 일반적인 위치에 표시
- ArticleAuthor 아래에 배치 권장

## 📝 완전한 예시

```tsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { setCanonicalTag, addStructuredData, createExpertArticleSchema, setSEOMetaTags } from "@/lib/utils";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import TableOfContents from "@/components/ui/TableOfContents";
import { ArticleAuthor } from "@/components/ui/ArticleAuthor";
import { BlogShareButtons } from "@/components/ui/BlogShareButtons";

export default function YourBlogPost() {
  const location = useLocation();

  useEffect(() => {
    setCanonicalTag(location.pathname);

    const title = "블로그 포스트 제목 | 돈워리";
    const description = '블로그 포스트 설명 (150자 내외)';
    const keywords = '키워드1, 키워드2, 키워드3';
    
    setSEOMetaTags({
      title,
      description,
      keywords,
      image: 'https://donworry.kr/og-image.png',
      url: typeof window !== "undefined" ? window.location.href : `https://donworry.kr${location.pathname}`,
      type: 'article',
      author: '김민지 (재테크 전문가)'
    });

    const expert = {
      id: 'expert-savings-01',
      name: '김민지',
      title: '재테크 전문가',
      url: 'https://donworry.kr/experts/expert-savings-01'
    };
    
    const articleSchema = createExpertArticleSchema({
      headline: title,
      description: description,
      datePublished: '2026-01-15',
      dateModified: '2026-01-27',
      expert: expert
    });
    
    addStructuredData(articleSchema);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="...">
        {/* Hero content */}
      </section>

      {/* Main Content */}
      <main className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents & Share Buttons */}
          <div className="lg:w-64 flex-shrink-0 space-y-4">
            <TableOfContents />
            <div className="hidden lg:block">
              <BlogShareButtons
                title="블로그 포스트 제목"
                description="블로그 포스트 설명"
                variant="sticky"
              />
            </div>
          </div>

          {/* Article Content */}
          <article className="flex-1 max-w-4xl prose prose-lg prose-slate max-w-none">
            {/* Article content */}
            
            <ArticleAuthor 
              expertId="expert-savings-01"
              publishedDate="2026-01-15"
              lastUpdated="2026-01-27"
            />

            <BlogShareButtons
              title="블로그 포스트 제목"
              description="블로그 포스트 설명"
              variant="inline"
              className="mt-8"
            />
          </article>
        </div>
      </main>

      <Footer />
      
      {/* Mobile: Bottom Fixed Share Buttons */}
      <div className="lg:hidden">
        <BlogShareButtons
          title="블로그 포스트 제목"
          description="블로그 포스트 설명"
          variant="bottom-fixed"
        />
      </div>
    </div>
  );
}
```

## ✅ 체크리스트

각 블로그 포스트에 적용할 때 확인:

- [ ] `setSEOMetaTags()` 함수 사용
- [ ] OpenGraph 태그 자동 생성 확인
- [ ] Twitter Card 태그 자동 생성 확인
- [ ] Schema Markup (Article) 추가
- [ ] 데스크톱 sticky ShareButtons 추가
- [ ] 본문 하단 inline ShareButtons 추가
- [ ] 모바일 bottom-fixed ShareButtons 추가
- [ ] 전문가 정보 정확히 입력
- [ ] 날짜 정보 정확히 입력

## 🎨 브랜딩 색상

ShareButtons는 자동으로 다음 브랜딩 색상을 사용합니다:

- **링크 복사 버튼**: Deep Blue (#1A237E) → Deep Purple (#4A148C) 그라데이션
- **카카오톡 버튼**: 카카오 브랜드 색상 (#FEE500)
- **Twitter 버튼**: 검은색 (#000000)
- **네이티브 공유**: Deep Blue/Purple 테마

## 📱 모바일 최적화

- 모바일에서는 `navigator.share` API를 우선 사용
- 지원하지 않는 경우 URL 복사로 대체
- 하단 고정 버튼으로 항상 접근 가능

## 🔍 SEO 최적화 포인트

1. **제목**: 60자 이내 권장
2. **설명**: 150-160자 권장 (자동으로 잘림)
3. **이미지**: OG 이미지 URL (기본값: `/og-image.png`)
4. **URL**: 현재 페이지 URL 자동 감지
5. **타입**: `article` (기본값)

---

**마지막 업데이트**: 2026-01-27
