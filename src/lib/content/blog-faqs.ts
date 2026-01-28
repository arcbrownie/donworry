/**
 * 블로그 콘텐츠별 FAQ 정의
 * Next.js App Router에서 각 블로그 페이지의 FAQ를 중앙에서 관리
 * 
 * 각 블로그 페이지에서 이 파일의 FAQ를 import하여 사용하거나,
 * 블로그 페이지에서 직접 export한 FAQ를 여기에 등록합니다.
 */

import type { FAQItem } from "@/lib/faq-extractor";
import { registerBlogFAQs } from "./faq-registry";

// 채무조정 관련 블로그 FAQ
const debtBlogFAQs: Record<string, FAQItem[]> = {
  "/blog/personal-rehabilitation-2026": [
    {
      question: "2026년 개인회생 최저생계비는 얼마인가요?",
      answer: "2026년 기준 1인 가구는 약 138만원, 2인 가구는 약 227만원, 3인 가구는 약 291만원입니다. 전년 대비 약 3% 이상 인상되었습니다.",
      keywords: ["개인회생", "최저생계비"],
      sourcePath: "/blog/personal-rehabilitation-2026"
    },
    {
      question: "개인회생 변제 기간이 단축될 수 있나요?",
      answer: "네, 2026년부터 청년층이나 65세 이상 고령자, 성실하게 소득 활동을 증빙하는 직장인의 경우 변제 기간을 기존 3년에서 2년(24개월)으로 단축해주는 '단축 권고' 비중이 크게 늘어났습니다.",
      keywords: ["개인회생", "변제기간", "단축"],
      sourcePath: "/blog/personal-rehabilitation-2026"
    },
    {
      question: "최근 대출이 많아도 개인회생 신청이 가능한가요?",
      answer: "네, 2026년 가이드라인은 고물가로 인한 카드 돌려막기, 생활비 부족으로 인한 대출, 고금리 이자를 끄기 위한 대환 대출에 대해서는 법원이 매우 포용적으로 접근합니다. 대출금을 사치나 도박이 아닌 '살기 위해' 썼다는 것만 명확히 소명한다면 가능합니다.",
      keywords: ["개인회생", "최근대출", "신청자격"],
      sourcePath: "/blog/personal-rehabilitation-2026"
    },
    {
      question: "주택담보대출이 있어도 개인회생이 가능한가요?",
      answer: "네, 2026년부터는 주택담보대출을 보유한 채무자를 위해 '법원-은행 연계 프로그램'이 강화되었습니다. 집이 경매로 넘어가지 않도록 은행과 협의하여 이자는 성실히 갚으면서 나머지 신용 대출과 카드값만 회생으로 탕감받는 방식이 활성화되었습니다.",
      keywords: ["개인회생", "주택담보대출", "주거권"],
      sourcePath: "/blog/personal-rehabilitation-2026"
    }
  ],
};

// 재테크 · 절약 관련 블로그 FAQ
const savingsBlogFAQs: Record<string, FAQItem[]> = {
  "/blog/weekly-holiday-pay-guide": [
    {
      question: "주휴수당을 받을 수 있는 조건은 무엇인가요?",
      answer: "주 소정근로시간 15시간 이상, 소정근로일 개근, 그리고 다음 주 근무 예정이어야 합니다. 고용 형태(알바, 계약직, 정규직)와 상관없이 조건만 충족하면 법적으로 보장받는 권리입니다.",
      keywords: ["주휴수당", "지급조건", "알바"],
      sourcePath: "/blog/weekly-holiday-pay-guide"
    },
    {
      question: "2026년 주휴수당은 얼마인가요?",
      answer: "2026년 최저시급 10,320원 기준으로 주 40시간 근무 시 주휴수당은 82,560원입니다. 주 20시간 근무 시에는 41,280원, 주 15시간 근무 시에는 30,960원입니다.",
      keywords: ["주휴수당", "계산", "최저임금"],
      sourcePath: "/blog/weekly-holiday-pay-guide"
    },
    {
      question: "4인 이하 소규모 사업장에서도 주휴수당을 받을 수 있나요?",
      answer: "네, 4인 이하 소규모 사업장이라 하더라도 주휴수당은 반드시 지급되어야 합니다. 이는 선택이 아닌 필수입니다.",
      keywords: ["주휴수당", "소규모사업장", "4인이하"],
      sourcePath: "/blog/weekly-holiday-pay-guide"
    },
    {
      question: "주휴수당을 못 받았다면 어떻게 해야 하나요?",
      answer: "받지 못한 수당은 고용노동부를 통해 임금체불 진정을 제기할 수 있습니다. 정당한 소득을 챙기는 것은 현명한 경제생활의 기초입니다.",
      keywords: ["주휴수당", "임금체불", "고용노동부"],
      sourcePath: "/blog/weekly-holiday-pay-guide"
    }
  ],
  "/blog/one-person-household-savings": [
    {
      question: "1인 가구 생활비 절약 방법은 무엇인가요?",
      answer: "배달 앱 사용 줄이기, 알뜰폰으로 전환, 편의점 대신 대형마트 이용, OTT 구독 정리, 교통비 환급, 에너지 절약, 중고거래 활용, 냉장고 정리, 지역화폐 사용, 고금리 대출 상환 등이 있습니다.",
      keywords: ["1인가구", "생활비", "절약", "가계비"],
      sourcePath: "/blog/one-person-household-savings-detailed"
    },
    {
      question: "배달 앱을 줄이면 얼마나 절약할 수 있나요?",
      answer: "주 4회에서 주 1회로 줄이면 월 약 10만원 이상 절약할 수 있습니다. 배달비와 과잉지출을 합쳐서 계산하면 더 많은 금액을 절약할 수 있습니다.",
      keywords: ["배달앱", "절약", "생활비"],
      sourcePath: "/blog/one-person-household-savings-detailed"
    },
    {
      question: "알뜰폰으로 전환하면 통신비를 얼마나 아낄 수 있나요?",
      answer: "기존 통신비가 월 89,000원이라면 알뜰폰(월 15,000원)으로 전환 시 월 약 74,000원을 절약할 수 있습니다. 연간 약 88만원을 절약할 수 있습니다.",
      keywords: ["알뜰폰", "통신비", "절약"],
      sourcePath: "/blog/one-person-household-savings-detailed"
    }
  ],
  "/blog/social-beginner-salary-guide": [
    {
      question: "사회초년생 첫 월급 관리 방법은 무엇인가요?",
      answer: "50/30/20 법칙을 활용하여 필수지출 50%, 생활비 30%, 저축 20%로 나누는 것이 좋습니다. 급여일 자동이체를 설정하고, 예비비를 마련하는 것이 중요합니다.",
      keywords: ["사회초년생", "월급관리", "예산", "저축"],
      sourcePath: "/blog/social-beginner-salary-guide"
    },
    {
      question: "50/30/20 예산법이란 무엇인가요?",
      answer: "월급의 50%는 필수지출(주거비, 식비, 통신비 등), 30%는 생활비(취미, 외식 등), 20%는 저축과 투자에 사용하는 예산 관리 방법입니다.",
      keywords: ["50/30/20", "예산법", "월급관리"],
      sourcePath: "/blog/social-beginner-salary-guide"
    },
    {
      question: "사회초년생이 저축을 시작하는 좋은 방법은?",
      answer: "급여일 자동이체로 저축 계좌에 먼저 이체하고, 예비비 3~6개월치를 마련한 후 투자를 시작하는 것이 좋습니다. 소액이라도 꾸준히 저축하는 습관이 중요합니다.",
      keywords: ["저축", "사회초년생", "예비비"],
      sourcePath: "/blog/social-beginner-salary-guide"
    }
  ],
};

// 금융 · 대출 관련 블로그 FAQ
const financeBlogFAQs: Record<string, FAQItem[]> = {
  "/blog/first-loan-guide-2030": [
    {
      question: "신용점수를 올리는 방법은 무엇인가요?",
      answer: "체크카드를 월 30만원 이상 6개월 이상 꾸준히 사용하기, 공공요금 납부 실적 등록, 연체 없이 결제하기 등이 도움됩니다. 특히 연체는 단 하루도 금물입니다.",
      keywords: ["신용점수", "신용관리", "대출"],
      sourcePath: "/blog/first-loan-guide-2030"
    },
    {
      question: "사회초년생을 위한 추천 대출 상품은 무엇인가요?",
      answer: "햇살론 유스, 중소기업 취업청년 전월세보증금 대출, 카카오뱅크/토스뱅크 비상금 대출 등이 있습니다. 정부 지원 서민금융 상품을 먼저 살펴보는 것이 유리합니다.",
      keywords: ["대출", "사회초년생", "햇살론유스"],
      sourcePath: "/blog/first-loan-guide-2030"
    },
    {
      question: "DSR이란 무엇인가요?",
      answer: "DSR(총부채원리금상환비율)은 내 연 소득에서 매년 갚아야 하는 원금과 이자가 차지하는 비중입니다. 무리한 대출은 일상을 파괴하므로 반드시 체크해야 합니다.",
      keywords: ["DSR", "대출", "상환능력"],
      sourcePath: "/blog/first-loan-guide-2030"
    },
    {
      question: "원리금 균등상환과 원금 균등상환의 차이는?",
      answer: "원리금 균등상환은 매달 같은 금액을 내는 방식이고, 원금 균등상환은 원금을 균등하게 나눠 갚는 방식입니다. 본인의 현금 흐름에 맞는 방식을 선택하세요.",
      keywords: ["대출", "상환방식", "원리금균등", "원금균등"],
      sourcePath: "/blog/first-loan-guide-2030"
    }
  ],
};

// 모든 FAQ 등록
function registerAllFAQs() {
  // 채무조정 FAQ 등록
  Object.entries(debtBlogFAQs).forEach(([path, faqs]) => {
    // sourcePath가 없는 경우 자동 추가
    const faqsWithSource = faqs.map(faq => ({
      ...faq,
      sourcePath: faq.sourcePath || path
    }));
    registerBlogFAQs(path, faqsWithSource);
  });

  // 재테크 · 절약 FAQ 등록
  Object.entries(savingsBlogFAQs).forEach(([path, faqs]) => {
    // sourcePath가 없는 경우 자동 추가
    const faqsWithSource = faqs.map(faq => ({
      ...faq,
      sourcePath: faq.sourcePath || path
    }));
    registerBlogFAQs(path, faqsWithSource);
  });

  // 금융 · 대출 FAQ 등록
  Object.entries(financeBlogFAQs).forEach(([path, faqs]) => {
    // sourcePath가 없는 경우 자동 추가
    const faqsWithSource = faqs.map(faq => ({
      ...faq,
      sourcePath: faq.sourcePath || path
    }));
    registerBlogFAQs(path, faqsWithSource);
  });
}

// 초기화
registerAllFAQs();

// 카테고리별 FAQ 가져오기 헬퍼
export const blogFAQsByCategory = {
  "채무조정": () => {
    const paths = Object.keys(debtBlogFAQs);
    return paths.flatMap(path => debtBlogFAQs[path]);
  },
  "재테크 · 절약": () => {
    const paths = Object.keys(savingsBlogFAQs);
    return paths.flatMap(path => savingsBlogFAQs[path]);
  },
  "금융 · 대출": () => {
    const paths = Object.keys(financeBlogFAQs);
    return paths.flatMap(path => financeBlogFAQs[path]);
  },
};
