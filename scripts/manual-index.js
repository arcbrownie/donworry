#!/usr/bin/env node

const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

// ANSI 색상 코드
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
};

// 이모지
const emoji = {
  success: '✅',
  error: '❌',
  info: 'ℹ️',
  rocket: '🚀',
  hourglass: '⏳',
};

/**
 * 예쁜 로그 출력 함수
 */
function log(message, color = 'reset', emojiIcon = '') {
  const icon = emojiIcon ? `${emojiIcon} ` : '';
  console.log(`${colors[color]}${icon}${message}${colors.reset}`);
}

/**
 * 구분선 출력
 */
function printSeparator() {
  console.log(`${colors.gray}${'─'.repeat(60)}${colors.reset}`);
}

/**
 * Google Indexing API 클라이언트 초기화
 */
async function initializeIndexingClient() {
  try {
    const keyPath = path.join(__dirname, '..', 'gsc-key.json');
    
    if (!fs.existsSync(keyPath)) {
      throw new Error(`gsc-key.json 파일을 찾을 수 없습니다: ${keyPath}`);
    }

    const keyFile = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
    
    const auth = new google.auth.GoogleAuth({
      credentials: keyFile,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const authClient = await auth.getClient();
    const indexing = google.indexing({ version: 'v3', auth: authClient });

    return indexing;
  } catch (error) {
    throw new Error(`인증 초기화 실패: ${error.message}`);
  }
}

/**
 * URL 색인 요청
 */
async function requestIndexing(indexing, url, type = 'URL_UPDATED') {
  try {
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: type,
      },
    });

    return { success: true, response };
  } catch (error) {
    const errorMessage = error.message || '';
    const errorDetails = error.response?.data || null;
    
    // Permission denied 오류 감지
    const isPermissionError = 
      errorMessage.includes('Permission denied') ||
      errorMessage.includes('Failed to verify') ||
      errorMessage.includes('URL ownership') ||
      (errorDetails && (
        errorDetails.error?.message?.includes('Permission denied') ||
        errorDetails.error?.message?.includes('Failed to verify')
      ));

    return { 
      success: false, 
      error: errorMessage,
      details: errorDetails,
      isPermissionError: isPermissionError,
    };
  }
}

/**
 * 메인 실행 함수
 */
async function main() {
  console.log('\n');
  log(`${emoji.rocket} Google Indexing API 수동 색인 스크립트 시작`, 'bright', '');
  printSeparator();

  // 대상 URL 리스트
  const urls = [
    'https://donworry.kr/blog/freelancer-loan-alternatives',
    'https://donworry.kr/blog/loan-overdue-5day-solution',
    'https://donworry.kr/blog/minimum-living-cost-calculator-2026',
    'https://donworry.kr/blog/mortgage-refinance-fee-exemption-2026',
    'https://donworry.kr/blog/rehabilitation-12month-additional-loan',
    'https://donworry.kr/blog/rehabilitation-late-payment-emergency-loan',
    'https://donworry.kr/blog/rehabilitation-repayment-2026-changes',
  ];

  log(`대상 URL: ${urls.length}개`, 'cyan', emoji.info);
  urls.forEach((url, index) => {
    log(`  ${index + 1}. ${url}`, 'gray', '');
  });
  printSeparator();

  // Google Indexing API 클라이언트 초기화
  let indexing;
  try {
    log('Google Indexing API 클라이언트 초기화 중...', 'cyan', emoji.hourglass);
    indexing = await initializeIndexingClient();
    log('클라이언트 초기화 완료!', 'green', emoji.success);
    printSeparator();
  } catch (error) {
    log(`초기화 실패: ${error.message}`, 'red', emoji.error);
    process.exit(1);
  }

  // URL들을 Google Indexing API에 전송
  const results = {
    success: [],
    failed: [],
    permissionErrors: [],
  };

  log(`총 ${urls.length}개의 URL 색인 요청 시작 (타입: URL_UPDATED)`, 'blue', emoji.info);
  printSeparator();

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const progress = `[${i + 1}/${urls.length}]`;
    
    log(`${progress} 색인 요청 중: ${url}`, 'cyan', emoji.hourglass);
    
    const result = await requestIndexing(indexing, url, 'URL_UPDATED');
    
    if (result.success) {
      log(`${progress} 색인 요청 성공: ${url}`, 'green', emoji.success);
      results.success.push(url);
    } else {
      log(`${progress} 색인 요청 실패: ${url}`, 'red', emoji.error);
      log(`  오류: ${result.error}`, 'red', '');
      if (result.details) {
        const errorMsg = result.details.error?.message || JSON.stringify(result.details);
        log(`  상세: ${errorMsg}`, 'yellow', '');
      }
      results.failed.push({ url, error: result.error, isPermissionError: result.isPermissionError });
      
      if (result.isPermissionError) {
        results.permissionErrors.push(url);
      }
    }
    
    // API 호출 제한을 고려한 짧은 딜레이
    if (i < urls.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  // 결과 요약
  printSeparator();
  log('색인 요청 결과 요약', 'bright', '');
  printSeparator();
  log(`성공: ${results.success.length}개`, 'green', emoji.success);
  
  if (results.success.length > 0) {
    log('성공적으로 전송된 URL 목록:', 'bright', emoji.success);
    results.success.forEach((url) => {
      log(`  ${emoji.success} ${url}`, 'green', '');
    });
    printSeparator();
  }
  
  log(`실패: ${results.failed.length}개`, results.failed.length > 0 ? 'red' : 'green', results.failed.length > 0 ? emoji.error : emoji.success);
  
  if (results.failed.length > 0) {
    printSeparator();
    log('실패한 URL 목록:', 'yellow', emoji.error);
    results.failed.forEach(({ url, error }) => {
      log(`  - ${url}`, 'red', '');
      log(`    ${error}`, 'gray', '');
    });
  }
  
  // Permission denied 오류가 있는 경우 해결 방법 안내
  if (results.permissionErrors.length > 0) {
    printSeparator();
    log('⚠️  도메인 소유권 검증 오류가 발생했습니다!', 'yellow', emoji.error);
    printSeparator();
    log('해결 방법:', 'bright', emoji.info);
    log('1. Google Search Console에 접속하세요:', 'cyan', '');
    log('   https://search.google.com/search-console', 'blue', '');
    log('2. donworry.kr 속성을 선택하세요', 'cyan', '');
    log('3. 설정 > 사용자 및 권한으로 이동하세요', 'cyan', '');
    log('4. 다음 서비스 계정 이메일을 "소유자"로 추가하세요:', 'cyan', '');
    const keyPath = path.join(__dirname, '..', 'gsc-key.json');
    const keyFile = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
    const serviceAccountEmail = keyFile.client_email;
    log(`   ${serviceAccountEmail}`, 'bright', '');
    printSeparator();
    log('💡 참고:', 'yellow', emoji.info);
    log('- 서비스 계정을 추가한 후 몇 분 정도 기다려야 권한이 적용됩니다', 'gray', '');
    log('- 소유자 권한이 있어야 Indexing API를 사용할 수 있습니다', 'gray', '');
    printSeparator();
  }
  
  printSeparator();
  log('스크립트 실행 완료!', 'bright', emoji.success);
  console.log('\n');
  
  // 실패가 있으면 exit code 1 반환
  process.exit(results.failed.length > 0 ? 1 : 0);
}

// 스크립트 실행
main().catch((error) => {
  log(`예상치 못한 오류 발생: ${error.message}`, 'red', emoji.error);
  console.error(error);
  process.exit(1);
});
