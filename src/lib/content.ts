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
    category: '재테크 · 절약' as const,
    date: '2026-01-15',
  },
  {
    path: '/blog/social-beginner-salary-guide',
    title: '사회초년생 첫 월급 관리법',
    excerpt: '월급날만 기다리지 말고, 똑똑하게 관리하는 방법을 알려드립니다.',
    emoji: '📊',
    category: '재테크 · 절약' as const,
    date: '2026-01-10',
  },
  {
    path: '/blog/one-person-household-savings-detailed',
    title: '1인 가구 생활비 절약 꿀팁 10가지',
    excerpt: '매달 10만원 이상 아끼는 실천 가능한 방법들',
    emoji: '🏠',
    category: '재테크 · 절약' as const,
    date: '2026-01-05',
  },
  
  // 금융 · 대출
  {
    path: '/blog/tax-delinquency-restriction-release',
    title: '국세 체납자 금융기관 이용 제한 해제 시기 완벽 가이드',
    excerpt: '체납 해소 후 언제부터 대출이 가능한지, 연체 기록은 언제 삭제되는지 상세히 알려드립니다',
    emoji: '📋',
    category: '금융 · 대출' as const,
    date: new Date().toISOString().split('T')[0],
  },
  {
    path: '/blog/youth-leap-account-early-termination-vs-loan',
    title: '2026년 청년 도약계좌 중도해지 vs 담보대출 비교',
    excerpt: '급전 필요 시 해지 대신 대출이 유리한 케이스 완벽 분석',
    emoji: '💰',
    category: '재테크 · 절약' as const,
    date: new Date().toISOString().split('T')[0],
  },
  {
    path: '/blog/low-credit-emergency-loan-list',
    title: '신용점수 600점 이하 1금융권 비상금대출 가능 리스트',
    excerpt: '저신용자도 승인 확률 높은 은행별 대출 상품 총정리',
    emoji: '🏦',
    category: '금융 · 대출' as const,
    date: new Date().toISOString().split('T')[0],
  },
  {
    path: '/blog/mortgage-refinance-fee-exemption-2026',
    title: '주택담보대출 갈아타기 중도상환수수료 면제 조건 2026',
    excerpt: '2026년 정부 지침에 따른 수수료 절감 팁부터 대환대출 신청 방법까지',
    emoji: '🏠',
    category: '금융 · 대출' as const,
    date: '2026-01-28',
  },
  {
    path: '/blog/loan-overdue-5day-solution',
    title: '소액 대출 연체 5일 전 긴급 해결 방법',
    excerpt: '연체 기록이 남기 전 5일 골든타임 안에 해결하는 방법',
    emoji: '⏰',
    category: '금융 · 대출' as const,
    date: '2026-01-28',
  },
  {
    path: '/blog/first-loan-guide-2030',
    title: '사회초년생을 위한 대출 가이드',
    excerpt: '신용점수 관리부터 유리한 대출 상품까지',
    emoji: '🏦',
    category: '금융 · 대출' as const,
    date: '2026-01-20',
  },
  {
    path: '/blog/credit-card-vs-check-card',
    title: '신용카드 vs 체크카드 비교',
    excerpt: '소비 패턴에 따른 최적의 카드 선택법',
    emoji: '💳',
    category: '금융 · 대출' as const,
    date: '2026-01-18',
  },
  {
    path: '/blog/investment-guide-for-beginners',
    title: '사회초년생을 위한 투자 입문서',
    excerpt: '적금만으로는 부족하다! 첫 투자를 시작하는 방법',
    emoji: '📈',
    category: '금융 · 대출' as const,
    date: '2026-01-12',
  },
  {
    path: '/blog/unemployed-government-refinance-loan',
    title: '무직자 정부지원 대환대출 서민금융진흥원 신청법',
    excerpt: '무직자도 대환대출 가능? 햇살론·새희망홀씨 신청 자격·절차·서류',
    emoji: '🏛️',
    category: '금융 · 대출' as const,
    date: '2026-01-28',
  },
  
  // 채무조정
  {
    path: '/personal-rehabilitation-2026-changes',
    title: '2026년 달라지는 개인회생 제도',
    excerpt: '새해부터 적용되는 개인회생 변경사항을 알아보세요.',
    emoji: '📊',
    category: '채무조정' as const,
    date: '2026-01-25',
  },
  {
    path: '/debt/personal-rehabilitation-bankruptcy',
    title: '개인회생 · 개인파산 완벽 가이드',
    excerpt: '법원을 통한 채무 해결, 새로운 시작을 위한 선택',
    emoji: '⚖️',
    category: '채무조정' as const,
    date: '2026-01-22',
  },
  {
    path: '/debt/credit-recovery-committee',
    title: '신용회복위원회 채무조정 완벽 가이드',
    excerpt: '신용회복위원회를 통한 채무조정 절차와 혜택 안내',
    emoji: '🏛️',
    category: '채무조정' as const,
    date: '2026-01-20',
  },
  {
    path: '/debt/guide',
    title: '채무조정 가이드',
    excerpt: '채무 해결을 위한 종합 가이드',
    emoji: '📖',
    category: '채무조정' as const,
    date: '2026-01-15',
  },
  {
    path: '/blog/rehabilitation-late-payment-emergency-loan',
    title: '개인회생 변제금 미납 시 긴급생계비 대출 가이드',
    excerpt: '변제금을 낼 수 없을 때 긴급생계비 대출로 해결하는 방법',
    emoji: '🚨',
    category: '채무조정' as const,
    date: '2026-01-28',
  },
  {
    path: '/blog/rehabilitation-12month-additional-loan',
    title: '개인회생 12개월 성실상환 후 추가대출 가이드',
    excerpt: '성실 변제로 신용을 회복하고 추가 자금을 확보하는 방법',
    emoji: '💪',
    category: '채무조정' as const,
    date: '2026-01-28',
  },
  {
    path: '/blog/rehabilitation-repayment-2026-changes',
    title: '2026년 개인회생 변제금 산정 기준 변경 완벽 가이드',
    excerpt: '달라진 법원 기준을 숫자로 비교 분석. 최저생계비 인상률, 변제금 계산 방법',
    emoji: '📋',
    category: '채무조정' as const,
    date: '2026-01-28',
  },
  {
    path: '/blog/minimum-living-cost-calculator-2026',
    title: '2026년 가구원수별 최저생계비 및 변제금 계산 가이드',
    excerpt: '내 가구에 맞는 최저생계비와 개인회생 변제금 계산 방법',
    emoji: '📊',
    category: '채무조정' as const,
    date: '2026-01-28',
  },
  {
    path: '/blog/bankruptcy-discharge-credit-card-timeline',
    title: '개인파산 면책 후 신용카드 발급까지 걸리는 기간',
    excerpt: '면책 후 신용회복 타임라인과 첫 카드 발급 전략',
    emoji: '💳',
    category: '채무조정' as const,
    date: '2026-01-28',
  },
  {
    path: '/blog/card-loan-debt-cycle-escape',
    title: '카드론 돌려막기 늪에서 탈출하는 채무통합 방법',
    excerpt: '고금리 카드론을 저금리로 통합, 실제 대환 계산 사례',
    emoji: '📉',
    category: '채무조정' as const,
    date: '2026-01-28',
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
