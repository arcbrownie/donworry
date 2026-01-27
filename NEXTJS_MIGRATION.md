# Next.js 마이그레이션 진행 상황

## 완료된 작업

### 1. 기본 설정
- ✅ Next.js 의존성 설치 (package.json 업데이트)
- ✅ next.config.js 생성 (Cloudflare Pages용 static export 설정)
- ✅ tsconfig.json 업데이트
- ✅ app/layout.tsx 생성 (루트 레이아웃)
- ✅ app/providers.tsx 생성 (클라이언트 프로바이더)
- ✅ app/globals.css 생성 (기존 index.css 복사)

### 2. 공통 컴포넌트 변환
- ✅ MainNavigation.tsx (React Router → Next.js Link)
- ✅ Footer.tsx (React Router → Next.js Link)
- ✅ BlogCard.tsx (React Router → Next.js Link)
- ✅ CalculatorWidget.tsx (React Router → Next.js Link)
- ✅ MobileFloatingCTA.tsx (React Router → Next.js Link)
- ✅ AuthorCard.tsx (React Router → Next.js Link)
- ✅ CalculatorLayout.tsx (useLocation 제거)
- ✅ NavLink.tsx (Next.js용으로 재작성)

### 3. 페이지 변환 완료
- ✅ app/page.tsx (메인 페이지)
- ✅ app/not-found.tsx (404 페이지)
- ✅ app/savings/page.tsx + layout.tsx
- ✅ app/finance/page.tsx + layout.tsx
- ✅ app/debt/page.tsx + layout.tsx
- ✅ app/cal/page.tsx + layout.tsx
- ✅ app/cal/part-time/page.tsx + layout.tsx
- ✅ app/blog/first-loan-guide-2030/page.tsx + layout.tsx

## 남은 작업

### 1. 계산기 페이지들 (9개)
- [ ] app/cal/soldier/page.tsx
- [ ] app/cal/freelancer/page.tsx
- [ ] app/cal/youth-tax/page.tsx
- [ ] app/cal/unemployment/page.tsx
- [ ] app/cal/debt-reduction/page.tsx
- [ ] app/cal/interest-saving/page.tsx
- [ ] app/cal/life/page.tsx (SavingsCalculatorHub)
- [ ] app/cal/finance/page.tsx (FinanceCalculatorHub)

### 2. 블로그/콘텐츠 페이지들 (7개)
- [ ] app/blog/weekly-holiday-pay-guide/page.tsx
- [ ] app/blog/social-beginner-salary-guide/page.tsx
- [ ] app/blog/one-person-household-savings-detailed/page.tsx
- [ ] app/blog/credit-card-vs-check-card/page.tsx
- [ ] app/blog/investment-guide-for-beginners/page.tsx
- [ ] app/personal-rehabilitation-2026-changes/page.tsx
- [ ] app/content/page.tsx (ContentHub)

### 3. 전문가 페이지들 (2개)
- [ ] app/experts/page.tsx (ExpertsHub)
- [ ] app/experts/[id]/page.tsx (ExpertDetail - 동적 라우트)

### 4. 채무 관련 페이지들 (5개)
- [ ] app/debt/test/page.tsx
- [ ] app/debt/guide/page.tsx
- [ ] app/debt/guide-content/page.tsx
- [ ] app/debt/personal-rehabilitation-bankruptcy/page.tsx
- [ ] app/debt/credit-recovery-committee/page.tsx

### 5. 법적 페이지들 (4개)
- [ ] app/privacy/page.tsx
- [ ] app/terms/page.tsx
- [ ] app/about/page.tsx
- [ ] app/disclaimer/page.tsx

### 6. 기타 페이지들
- [ ] app/savings/guide/page.tsx
- [ ] app/finance/guide/page.tsx

## 변환 패턴

### 페이지 변환 예시

**기존 (src/pages/.../Page.tsx):**
```tsx
import { useLocation } from "react-router-dom";
import { setCanonicalTag } from "@/lib/utils";

export default function Page() {
  const location = useLocation();
  
  useEffect(() => {
    setCanonicalTag(location.pathname);
    document.title = "...";
  }, [location.pathname]);
  
  return <div>...</div>;
}
```

**변환 후 (app/.../page.tsx + layout.tsx):**
```tsx
// app/.../page.tsx
"use client"; // 클라이언트 컴포넌트인 경우

export default function Page() {
  return <div>...</div>;
}

// app/.../layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "...",
  description: "...",
  alternates: {
    canonical: "https://donworry.kr/...",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

## 다음 단계

1. 나머지 페이지들을 위 패턴으로 변환
2. React Router 의존성 제거
3. Vite 관련 파일 제거 (vite.config.ts는 나중에)
4. 테스트 및 검증
5. Cloudflare Pages 배포 설정 업데이트
