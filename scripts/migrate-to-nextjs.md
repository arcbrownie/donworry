# Next.js 마이그레이션 가이드

## 변환 패턴

### 1. 페이지 변환 패턴

**기존 (React Router):**
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

**변환 후 (Next.js):**
```tsx
// app/[path]/page.tsx
"use client"; // 클라이언트 컴포넌트인 경우

export default function Page() {
  return <div>...</div>;
}

// app/[path]/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "...",
  description: "...",
  alternates: {
    canonical: "https://donworry.kr/[path]",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

### 2. Link 변환

**기존:**
```tsx
import { Link } from "react-router-dom";
<Link to="/path">...</Link>
```

**변환 후:**
```tsx
import Link from "next/link";
<Link href="/path">...</Link>
```

### 3. useLocation → usePathname

**기존:**
```tsx
import { useLocation } from "react-router-dom";
const location = useLocation();
const pathname = location.pathname;
```

**변환 후:**
```tsx
import { usePathname } from "next/navigation";
const pathname = usePathname();
```

### 4. useNavigate → useRouter

**기존:**
```tsx
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
navigate("/path");
```

**변환 후:**
```tsx
import { useRouter } from "next/navigation";
const router = useRouter();
router.push("/path");
```

## 남은 작업

1. 모든 페이지를 app 디렉토리로 이동
2. 각 페이지에 layout.tsx 추가 (metadata 포함)
3. React Router 제거
4. 테스트 및 검증
