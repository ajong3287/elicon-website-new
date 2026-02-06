/**
 * Lighthouse 자동 분석 스크립트
 * TestSprite MCP 개념 적용 - 자동 테스트 + 문제 감지 + 수정 제안
 *
 * 작성일: 2025-12-06
 * 참고: MCP 서버 바이브 코딩 인사이트 (82/100점)
 */

const fs = require('fs');
const path = require('path');

// 색상 코드 (터미널)
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// 품질 임계값 (TestSprite 개념)
const QUALITY_THRESHOLDS = {
  performance: 0.8,    // 80점
  accessibility: 0.9,  // 90점
  seo: 0.85,          // 85점
  'best-practices': 0.85,  // 85점
};

/**
 * Lighthouse 리포트 분석
 */
function analyzeLighthouseReport() {
  console.log(`${colors.bright}${colors.cyan}===========================================${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}  Lighthouse 자동 분석 (TestSprite 개념)${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}===========================================${colors.reset}\n`);

  // 리포트 파일 확인
  const reportPath = path.join(__dirname, '..', 'lighthouse-report.json');

  if (!fs.existsSync(reportPath)) {
    console.error(`${colors.red}❌ Lighthouse 리포트를 찾을 수 없습니다: ${reportPath}${colors.reset}`);
    console.log(`\n💡 먼저 다음 명령어를 실행하세요:`);
    console.log(`   ${colors.cyan}npm run test:lighthouse${colors.reset}\n`);
    process.exit(1);
  }

  // 리포트 로드
  const report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));

  // 카테고리별 점수 분석
  console.log(`${colors.bright}📊 카테고리별 점수${colors.reset}`);
  console.log(`${'='.repeat(50)}\n`);

  const categories = report.categories;
  const results = {};
  let allPassed = true;

  for (const [key, category] of Object.entries(categories)) {
    const score = category.score;
    const threshold = QUALITY_THRESHOLDS[key] || 0.8;
    const passed = score >= threshold;

    results[key] = {
      score,
      threshold,
      passed,
      title: category.title,
    };

    // 출력
    const emoji = passed ? '✅' : '❌';
    const color = passed ? colors.green : colors.red;
    const percentage = Math.round(score * 100);

    console.log(`${emoji} ${color}${category.title}${colors.reset}`);
    console.log(`   점수: ${percentage}/100 (기준: ${threshold * 100}점)`);
    console.log(`   상태: ${passed ? `${colors.green}통과${colors.reset}` : `${colors.red}미달${colors.reset}`}\n`);

    if (!passed) {
      allPassed = false;
    }
  }

  // 실패한 audits 분석
  if (!allPassed) {
    console.log(`\n${colors.bright}${colors.yellow}⚠️  개선 필요 항목${colors.reset}`);
    console.log(`${'='.repeat(50)}\n`);

    for (const [key, result] of Object.entries(results)) {
      if (!result.passed) {
        console.log(`${colors.bright}${result.title}${colors.reset}`);

        // 해당 카테고리의 실패한 audits 찾기
        const auditRefs = report.categories[key].auditRefs;
        const audits = report.audits;

        const failedAudits = auditRefs
          .filter(ref => {
            const audit = audits[ref.id];
            return audit && audit.score !== null && audit.score < 1;
          })
          .slice(0, 5); // 상위 5개만

        failedAudits.forEach(ref => {
          const audit = audits[ref.id];
          console.log(`  ❌ ${audit.title}`);
          if (audit.description) {
            console.log(`     ${audit.description.substring(0, 100)}...`);
          }
        });

        console.log('');
      }
    }

    // 자동 수정 제안 (TestSprite 개념)
    console.log(`${colors.bright}${colors.cyan}💡 자동 수정 제안${colors.reset}`);
    console.log(`${'='.repeat(50)}\n`);

    generateFixSuggestions(results, report);
  }

  // 최종 결과
  console.log(`\n${colors.bright}${colors.cyan}===========================================${colors.reset}`);
  if (allPassed) {
    console.log(`${colors.green}${colors.bright}✅ 모든 품질 기준 통과!${colors.reset}`);
  } else {
    console.log(`${colors.red}${colors.bright}❌ 일부 품질 기준 미달${colors.reset}`);
    console.log(`\n📝 위의 개선 제안을 참고하여 수정하세요.`);
  }
  console.log(`${colors.bright}${colors.cyan}===========================================${colors.reset}\n`);

  // 종료 코드
  process.exit(allPassed ? 0 : 1);
}

/**
 * 자동 수정 제안 생성
 */
function generateFixSuggestions(results, report) {
  const suggestions = [];

  // Performance 개선
  if (!results.performance?.passed) {
    suggestions.push({
      category: 'Performance',
      items: [
        '🔹 이미지 최적화: Next.js Image 컴포넌트 사용',
        '🔹 코드 스플리팅: dynamic import 활용',
        '🔹 폰트 최적화: next/font 사용',
        '🔹 불필요한 JavaScript 제거',
      ],
    });
  }

  // Accessibility 개선
  if (!results.accessibility?.passed) {
    suggestions.push({
      category: 'Accessibility',
      items: [
        '🔹 alt 속성 추가: 모든 이미지에 대체 텍스트',
        '🔹 ARIA 레이블: 인터랙티브 요소에 aria-label',
        '🔹 색상 대비: WCAG 기준 4.5:1 이상',
        '🔹 키보드 탐색: tabindex와 focus 관리',
      ],
    });
  }

  // SEO 개선
  if (!results.seo?.passed) {
    suggestions.push({
      category: 'SEO',
      items: [
        '🔹 메타 태그: description, keywords 추가',
        '🔹 구조화 데이터: JSON-LD 스키마',
        '🔹 robots.txt: 크롤링 최적화',
        '🔹 sitemap.xml: 자동 생성 설정',
      ],
    });
  }

  // 출력
  suggestions.forEach(suggestion => {
    console.log(`${colors.bright}${suggestion.category}${colors.reset}`);
    suggestion.items.forEach(item => {
      console.log(`  ${item}`);
    });
    console.log('');
  });

  // 추가 자동화 제안
  console.log(`${colors.bright}🤖 추가 자동화 제안${colors.reset}`);
  console.log(`  🔹 CI/CD에 Lighthouse 통합 (GitHub Actions)`);
  console.log(`  🔹 매 빌드마다 자동 테스트 실행`);
  console.log(`  🔹 성능 저하 시 자동 경고 발송`);
  console.log('');
}

// 실행
analyzeLighthouseReport();
