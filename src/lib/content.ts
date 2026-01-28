// 모든 콘텐츠 정보 타입
export interface ContentItem {
  path: string;
  title: string;
  excerpt: string;
  emoji: string;
  category: '재테크 · 절약' | '금융 · 대출' | '채무조정';
  isPlaceholder?: boolean;
  date?: string; // YYYY-MM-DD 형식, 최신순 정렬용
}

// 모든 콘텐츠 목록 (최신순으로 정렬)
export const allContents: ContentItem[] = [
  // 재테크 · 절약
  {
    path: '/blog/weekly-holiday-pay-guide',
    title: '알바생 주휴수당 완벽 가이드',
    excerpt: '2026년 최저임금 기준 주휴수당 계산법과 지급 조건',
    emoji: '💡',
    category: '재테크 · 절약',
    date: '2026-01-15',
  },
  {
    path: '/blog/social-beginner-salary-guide',
    title: '사회초년생 첫 월급 관리법',
    excerpt: '월급날만 기다리지 말고, 똑똑하게 관리하는 방법을 알려드립니다.',
    emoji: '📊',
    category: '재테크 · 절약',
    date: '2026-01-10',
  },
  {
    path: '/blog/one-person-household-savings-detailed',
    title: '1인 가구 생활비 절약 꿀팁 10가지',
    excerpt: '매달 10만원 이상 아끼는 실천 가능한 방법들',
    emoji: '🏠',
    category: '재테크 · 절약',
    date: '2026-01-05',
  },
  
  // 금융 · 대출
  {
    path: '/blog/first-loan-guide-2030',
    title: '사회초년생을 위한 대출 가이드',
    excerpt: '신용점수 관리부터 유리한 대출 상품까지',
    emoji: '🏦',
    category: '금융 · 대출',
    date: '2026-01-20',
  },
  {
    path: '/blog/credit-card-vs-check-card',
    title: '신용카드 vs 체크카드 비교',
    excerpt: '소비 패턴에 따른 최적의 카드 선택법',
    emoji: '💳',
    category: '금융 · 대출',
    date: '2026-01-18',
  },
  {
    path: '/blog/investment-guide-for-beginners',
    title: '사회초년생을 위한 투자 입문서',
    excerpt: '적금만으로는 부족하다! 첫 투자를 시작하는 방법',
    emoji: '📈',
    category: '금융 · 대출',
    date: '2026-01-12',
  },
  
  // 채무조정
  {
    path: '/personal-rehabilitation-2026-changes',
    title: '2026년 달라지는 개인회생 제도',
    excerpt: '새해부터 적용되는 개인회생 변경사항을 알아보세요.',
    emoji: '📊',
    category: '채무조정',
    date: '2026-01-25',
  },
  {
    path: '/debt/personal-rehabilitation-bankruptcy',
    title: '개인회생 · 개인파산 완벽 가이드',
    excerpt: '법원을 통한 채무 해결, 새로운 시작을 위한 선택',
    emoji: '⚖️',
    category: '채무조정',
    date: '2026-01-22',
  },
  {
    path: '/debt/credit-recovery-committee',
    title: '신용회복위원회 채무조정 완벽 가이드',
    excerpt: '신용회복위원회를 통한 채무조정 절차와 혜택 안내',
    emoji: '🏛️',
    category: '채무조정',
    date: '2026-01-20',
  },
  {
    path: '/debt/guide',
    title: '채무조정 가이드',
    excerpt: '채무 해결을 위한 종합 가이드',
    emoji: '📖',
    category: '채무조정',
    date: '2026-01-15',
  },
].sort((a, b) => {
  // 최신순 정렬 (날짜가 없으면 뒤로)
  if (!a.date && !b.date) return 0;
  if (!a.date) return 1;
  if (!b.date) return -1;
  return b.date.localeCompare(a.date);
});

// 카테고리별 콘텐츠 가져오기
export function getContentsByCategory(category: '재테크 · 절약' | '금융 · 대출' | '채무조정'): ContentItem[] {
  return allContents
    .filter(content => content.category === category && !content.isPlaceholder)
    .slice(0, 10); // 최대 10개
}

// 최신 콘텐츠 가져오기 (전체)
export function getLatestContents(limit: number = 10): ContentItem[] {
  return allContents
    .filter(content => !content.isPlaceholder)
    .slice(0, limit);
}
