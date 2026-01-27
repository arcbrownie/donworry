// 전문가 페르소나 데이터 타입 정의
export interface Expert {
  id: string;
  name: string;
  title: string; // 직함 (예: "재테크 전문가")
  category: 'savings' | 'finance' | 'debt';
  bio: string; // 짧은 소개 (1-2줄)
  specialty: string; // 전문 분야
  intro: string; // 간단한 소개 문구 (ExpertDetail용)
}

// 전문가 페르소나 데이터
export const experts: Expert[] = [
  // 재테크 · 절약 전문가 (3명)
  {
    id: 'expert-savings-01',
    name: '김민지',
    title: '재테크 전문가',
    category: 'savings',
    bio: '10년 차 공인재무설계사(CFP). 직장인들의 첫 월급 관리부터 노후 준비까지, 현실적인 자산 형성 로드맵을 제시합니다.',
    specialty: '개인 재무 설계, 스마트 예산 관리, 복리 저축 전략',
    intro: '당신의 월급이 의미 있는 자산이 되도록, 1:1 맞춤형 재무 설계를 약속합니다.',
  },
  {
    id: 'expert-savings-02',
    name: '이수진',
    title: '절약 전문가',
    category: 'savings',
    bio: "'생활비 다이어트' 전문가. 고물가 시대에 숨은 지출을 찾아내고, 똑똑한 소비 습관을 통해 가벼운 일상을 만드는 법을 전파합니다.",
    specialty: '생활비 절감 솔루션, 가계부 컨설팅, 짠테크 노하우',
    intro: '무조건 참는 절약이 아닌, 삶의 질을 높이는 전략적 소비의 기술을 공유합니다.',
  },
  {
    id: 'expert-savings-03',
    name: '박지훈',
    title: '투자 전문가',
    category: 'savings',
    bio: '자산운용사 출신의 투자 전략가. 투자가 처음인 초보자들이 시장의 파도에 휩쓸리지 않도록 리스크 관리 중심의 포트폴리오를 제안합니다.',
    specialty: '초보자 맞춤형 투자, 글로벌 자산 배분, 리스크 관리',
    intro: '잃지 않는 투자가 최고의 투자입니다. 안정적인 성장을 위한 정석 투자를 가이드합니다.',
  },
  
  // 금융 · 대출 전문가 (3명)
  {
    id: 'expert-finance-01',
    name: '최동현',
    title: '대출 전문가',
    category: 'finance',
    bio: '전직 은행원 출신의 대출 상담사. 복잡한 대출 규정과 상품 속에서 사용자에게 가장 유리한 최저 금리 상품을 찾아내는 데 탁월합니다.',
    specialty: '대출 상품 비교, 저금리 대환 대출, 담보 대출 전략',
    intro: '수많은 대출 상품 중 당신에게 꼭 맞는 최적의 금리를 찾아 드립니다.',
  },
  {
    id: 'expert-finance-02',
    name: '정서연',
    title: '금리 전문가',
    category: 'finance',
    bio: '금융 데이터 분석가. 실시간 시장 금리 동향을 분석하여 최적의 금융상품 가입 시점과 효율적인 신용 점수 관리법을 안내합니다.',
    specialty: '금융상품 수익률 분석, 신용점수 향상 전략, 시장 금리 전망',
    intro: '숫자 뒤에 숨은 금융의 흐름을 읽어, 당신의 이익을 극대화합니다.',
  },
  {
    id: 'expert-finance-03',
    name: '강민수',
    title: '세무 전문가',
    category: 'finance',
    bio: '청년 및 소상공인 전문 세무사. 놓치기 쉬운 세금 환급금과 정부의 세액 감면 혜택을 꼼꼼하게 챙겨 드립니다.',
    specialty: '연말정산 및 세금 환급, 청년 세제 혜택, 소상공인 절세',
    intro: '몰라서 못 받은 당신의 소중한 세금, 1원까지 찾아 드립니다.',
  },
  
  // 채무조정 전문가 (3명)
  {
    id: 'expert-debt-01',
    name: '윤서진',
    title: '개인회생 전문가',
    category: 'debt',
    bio: '채무자 회생 전담 법률 전문가. 과도한 빚으로 고통받는 이들이 법적 절차를 통해 합법적으로 새 출발을 할 수 있도록 전 과정을 조력합니다.',
    specialty: '개인회생 신청 및 인가, 파산 절차 안내, 면책 전략',
    intro: '막막한 빚의 터널, 끝이 보일 때까지 법률적 방패가 되어 드립니다.',
  },
  {
    id: 'expert-debt-02',
    name: '한지우',
    title: '채무조정 전문가',
    category: 'debt',
    bio: '신용회복 지원 상담가. 워크아웃 등 공적·사적 채무조정 제도를 비교 분석하여 사용자 상황에 가장 적합한 채무 해결책을 제시합니다.',
    specialty: '채무 조정 프로그램 설계, 신용회복위원회 연계, 연체 방지 상담',
    intro: '더 이상 독촉에 시달리지 마세요. 현실 가능한 채무 상환 계획을 함께 세웁니다.',
  },
  {
    id: 'expert-debt-03',
    name: '서준호',
    title: '신용회복 전문가',
    category: 'debt',
    bio: '금융 재기 컨설턴트. 채무 해결 이후의 삶을 준비할 수 있도록 신용 회복 이후의 금융 거래 재개와 경제적 자립을 돕습니다.',
    specialty: '신용 회복 후 자산 관리, 금융 재기 로드맵, 서민금융 지원',
    intro: '채무 해결은 시작일 뿐입니다. 다시 당당하게 일어설 수 있도록 돕겠습니다.',
  },
];

// 카테고리별 전문가 조회
export function getExpertsByCategory(category: 'savings' | 'finance' | 'debt'): Expert[] {
  return experts.filter(expert => expert.category === category);
}

// ID로 전문가 조회
export function getExpertById(id: string): Expert | undefined {
  return experts.find(expert => expert.id === id);
}

// 전문가별 관련 글 매핑 (나중에 확장 가능)
export const expertArticles: Record<string, string[]> = {
  'expert-savings-01': ['/content/social-beginner-salary-guide', '/content/one-person-household-savings'],
  'expert-savings-02': ['/content/one-person-household-savings'],
  'expert-savings-03': ['/content/investment-guide-for-beginners'],
  'expert-finance-01': ['/content/first-loan-guide-2030'],
  'expert-finance-02': ['/content/credit-card-vs-check-card'],
  'expert-finance-03': ['/cal/freelancer', '/cal/youth-tax'],
  'expert-debt-01': ['/content/personal-rehabilitation-2026', '/debt/personal-rehabilitation-bankruptcy'],
  'expert-debt-02': ['/debt/credit-recovery-committee'],
  'expert-debt-03': ['/debt/guide'],
};
