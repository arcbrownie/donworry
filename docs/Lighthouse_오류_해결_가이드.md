# Lighthouse 오류 해결 가이드

## 발견된 문제점

### 1. Browser errors were logged to the console

#### 문제 1: Google Tag Manager 404 오류
- **오류**: `Failed to load resource: the server responded with a status of 404 (Not Found)`
- **URL**: `/gtm.js?id=GTM-MC3G2FBF`
- **원인**: 
  - GTM 컨테이너가 생성되지 않았거나
  - GTM ID가 잘못되었거나
  - 컨테이너가 비활성화되었을 수 있음

**해결 방법**:
1. Google Tag Manager에서 컨테이너 확인
   - https://tagmanager.google.com/ 접속
   - GTM-MC3G2FBF 컨테이너가 존재하는지 확인
   - 컨테이너가 없으면 새로 생성

2. GTM ID 확인
   - 올바른 GTM ID인지 확인
   - 형식: `GTM-XXXXXXX`

3. 임시 해결 (GTM이 필요 없는 경우)
   - GTM 스크립트를 주석 처리
   - 또는 조건부 로드

#### 문제 2: Google AdSense 403 오류
- **오류**: `Failed to load resource: the server responded with a status of 403 (Forbidden)`
- **원인**: 
  - 애드센스 승인 전 상태
  - 광고가 표시되지 않을 때 정상적인 응답
  - 특정 지역/브라우저에서 차단될 수 있음

**해결 방법**:
- 이 오류는 **정상적인 경우**일 수 있습니다
- 애드센스 승인 후 자동으로 해결됩니다
- 오류 처리를 추가하여 콘솔 경고를 방지했습니다

### 2. Missing source maps for large first-party JavaScript

#### 문제
- **파일**: `/assets/index-CcZBT9Q0.js`
- **원인**: 프로덕션 빌드에서 소스맵이 비활성화되어 있음

**해결 방법**:

**옵션 1: 프로덕션에서 소스맵 비활성화 유지 (권장)**
- 보안상 프로덕션에서는 소스맵을 비활성화하는 것이 일반적
- 소스 코드가 노출되지 않음
- Lighthouse 경고는 무시해도 됨 (Unscored)

**옵션 2: 소스맵 활성화 (디버깅 필요 시)**
```typescript
// vite.config.ts
build: {
  sourcemap: true, // 또는 'hidden' (서버에만 저장)
}
```

**옵션 3: Hidden source maps (권장)**
- 소스맵을 생성하지만 사용자에게 노출하지 않음
- 디버깅은 가능하지만 보안 유지

```typescript
// vite.config.ts
build: {
  sourcemap: 'hidden', // 소스맵 생성하지만 .map 파일은 서버에만 저장
}
```

## 적용된 수정 사항

### 1. GTM 오류 처리 추가 ✅
- `onerror` 핸들러 추가
- 오류 발생 시 콘솔 경고만 표시 (페이지 로딩 차단 방지)

### 2. AdSense 오류 처리 추가 ✅
- `onerror` 핸들러 추가
- 오류 발생 시 콘솔 경고만 표시

### 3. 소스맵 설정 개선 ✅
- 개발 환경: 소스맵 활성화
- 프로덕션 환경: 소스맵 비활성화 (보안)

## 추가 권장 사항

### GTM 컨테이너 확인
1. Google Tag Manager 접속
2. 컨테이너 ID 확인
3. 컨테이너가 없으면 생성하거나 GTM 스크립트 제거

### 애드센스 승인 대기
- 403 오류는 승인 전 정상적인 응답일 수 있음
- 승인 후 자동으로 해결됨

### 소스맵 정책 결정
- **보안 우선**: 소스맵 비활성화 (현재 설정)
- **디버깅 우선**: Hidden source maps 사용
- **완전 공개**: 소스맵 활성화 (비권장)

## 확인 방법

1. **브라우저 콘솔 확인**
   - F12 → Console 탭
   - 오류 메시지 확인

2. **Network 탭 확인**
   - F12 → Network 탭
   - GTM, AdSense 요청 상태 확인

3. **Lighthouse 재실행**
   - Chrome DevTools → Lighthouse
   - 오류가 해결되었는지 확인

## 참고

- GTM 404 오류는 GTM 컨테이너가 없을 때 발생
- AdSense 403 오류는 승인 전 정상적인 응답
- 소스맵은 프로덕션에서 비활성화하는 것이 일반적
