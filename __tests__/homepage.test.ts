/**
 * 홈페이지 기본 테스트
 * 
 * Next.js 컴포넌트 및 페이지 테스트
 */

describe('Homepage Tests', () => {
  test('환경변수 확인', () => {
    // 테스트 환경 확인
    expect(process.env.NODE_ENV).toBeDefined();
  });

  test('Next.js 버전 확인', () => {
    // package.json에서 next 의존성 확인
    const pkg = require('../package.json');
    expect(pkg.dependencies.next).toBeDefined();
  });

  test('TypeScript 설정 확인', () => {
    const fs = require('fs');
    const tsconfigExists = fs.existsSync('./tsconfig.json');
    expect(tsconfigExists).toBe(true);
  });
});
