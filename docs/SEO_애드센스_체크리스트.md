# 구글 SEO 및 애드센스 승인 체크리스트

## ✅ 완료된 항목

### 기본 SEO 설정
- [x] 모든 페이지에 canonical 태그 적용
- [x] Sitemap.xml 생성 및 모든 페이지 포함
- [x] robots.txt에 sitemap 위치 명시
- [x] OG 이미지 메타 태그 추가
- [x] 구조화된 데이터 (WebSite, Organization) 추가
- [x] Article 스키마 추가 (블로그 글)
- [x] FAQPage 스키마 추가 (FAQ 섹션)

### 메타 태그
- [x] 모든 페이지에 title, description, keywords 설정
- [x] Open Graph 태그 (og:title, og:description, og:image)
- [x] Twitter Card 태그
- [x] 동적 canonical 태그

### 애드센스 준비
- [x] ads.txt 파일 설정
- [x] Google AdSense 스크립트 추가
- [x] 개인정보처리방침 페이지 존재
- [x] 이용약관 페이지 존재

## 🔧 추가로 해야 할 사항

### 1. OG 이미지 생성 (필수)
**현재 상태**: 메타 태그는 추가했지만 실제 이미지 파일이 없음

**작업 필요**:
- `public/og-image.png` 파일 생성 (1200x630px 권장)
- 브랜드 로고와 사이트명이 포함된 이미지
- 각 주요 페이지별 OG 이미지 생성 고려

**도구 추천**:
- Canva (무료 템플릿)
- Figma
- 온라인 OG 이미지 생성기

### 2. 구조화된 데이터 확장
**현재 상태**: WebSite, Organization, Article, FAQPage만 추가됨

**추가 권장**:
- [ ] HowTo 스키마 (계산기 페이지에 추가)
- [ ] BreadcrumbList 스키마 (네비게이션 경로)
- [ ] 더 많은 Article 스키마 (다른 블로그 글들)

### 3. 페이지 성능 최적화
**체크 필요**:
- [ ] 이미지 최적화 (WebP 포맷 사용)
- [ ] Lazy loading 적용
- [ ] Core Web Vitals 점수 확인
  - LCP (Largest Contentful Paint) < 2.5초
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1

**도구**:
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse (Chrome DevTools)

### 4. 모바일 최적화
- [x] 반응형 디자인 적용됨
- [ ] 모바일 사용성 테스트
- [ ] 터치 타겟 크기 확인 (최소 44x44px)

### 5. 접근성 (A11y)
**체크 필요**:
- [ ] 모든 이미지에 alt 텍스트 추가
- [ ] ARIA 레이블 확인
- [ ] 키보드 네비게이션 가능 여부
- [ ] 색상 대비 비율 (WCAG AA 기준)

**도구**:
- WAVE (웹 접근성 평가 도구)
- axe DevTools

### 6. 콘텐츠 품질
**애드센스 승인을 위한 최소 요구사항**:
- [x] 충분한 콘텐츠 (최소 10개 이상의 고품질 페이지)
- [x] 고유한 콘텐츠 (복사본 아님)
- [x] 정기적인 업데이트
- [ ] 최소 18개월 이상 운영된 도메인 (신규 도메인은 시간 필요)

### 7. 기술적 요구사항
- [x] HTTPS 적용
- [x] 도메인 소유권 확인 가능
- [x] 개인정보처리방침 페이지
- [x] 이용약관 페이지
- [ ] 사이트맵이 Google Search Console에 제출됨
- [ ] robots.txt가 올바르게 설정됨

### 8. Google Search Console 설정
**필수 작업**:
1. Google Search Console에 사이트 등록
   - https://search.google.com/search-console
2. 사이트맵 제출
   - `https://donworry.kr/sitemap.xml`
3. URL 검사 도구로 주요 페이지 인덱싱 확인
4. 모바일 사용성 테스트 실행

### 9. 애드센스 승인 전 체크리스트
- [x] 고품질 콘텐츠 (최소 10-15개 페이지)
- [x] 개인정보처리방침 페이지
- [x] 이용약관 페이지
- [x] ads.txt 파일
- [ ] 사이트가 6개월 이상 운영 (신규 사이트의 경우)
- [ ] 충분한 트래픽 (월 1000+ 방문자 권장)
- [ ] 사용자 경험 최적화
- [ ] 저작권 준수
- [ ] 성인 콘텐츠 없음

### 10. 추가 SEO 최적화
- [ ] 내부 링크 구조 개선
- [ ] 외부 링크 (백링크) 확보 전략
- [ ] 콘텐츠 키워드 최적화
- [ ] 메타 설명 최적화 (150-160자)
- [ ] 제목 태그 최적화 (50-60자)

## 📊 모니터링 도구

### 필수 설정
1. **Google Analytics 4 (GA4)**
   - 현재: Google Tag Manager 설정됨
   - GA4 연결 확인 필요

2. **Google Search Console**
   - 사이트 등록 및 사이트맵 제출
   - 인덱싱 상태 모니터링

3. **Google PageSpeed Insights**
   - 정기적인 성능 점검

## 🚨 애드센스 승인 거부 시 확인 사항

1. **콘텐츠 부족**
   - 최소 10-15개 이상의 고품질 페이지 필요
   - 각 페이지 최소 300-500자 이상

2. **트래픽 부족**
   - 월 1000+ 방문자 권장
   - 유기적 트래픽 확보

3. **사이트 연령**
   - 신규 도메인은 6개월 이상 운영 권장

4. **정책 위반**
   - 저작권 침해 콘텐츠 없음
   - 성인 콘텐츠 없음
   - 클릭 유도 문구 없음

5. **기술적 문제**
   - 페이지 로딩 속도
   - 모바일 최적화
   - HTTPS 적용

## 📝 다음 단계

1. **즉시 작업**:
   - [ ] OG 이미지 생성 및 업로드
   - [ ] Google Search Console 등록 및 사이트맵 제출
   - [ ] PageSpeed Insights로 성능 점검

2. **단기 작업 (1주일 내)**:
   - [ ] 나머지 블로그 글에 Article 스키마 추가
   - [ ] 계산기 페이지에 HowTo 스키마 추가
   - [ ] 이미지 최적화

3. **중기 작업 (1개월 내)**:
   - [ ] 콘텐츠 추가 (최소 5-10개 페이지)
   - [ ] 백링크 확보 전략 수립
   - [ ] 정기적인 콘텐츠 업데이트

4. **장기 작업 (3개월 이상)**:
   - [ ] 트래픽 증가 전략
   - [ ] 사용자 참여도 향상
   - [ ] SEO 순위 모니터링 및 개선

## 🔗 유용한 링크

- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org 문서](https://schema.org/)
- [Google AdSense 정책](https://support.google.com/adsense/answer/48182)
- [Web.dev SEO 가이드](https://web.dev/learn-seo/)
