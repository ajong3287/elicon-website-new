# Lighthouse 성능 테스트 가이드

**프로젝트**: 01_2_elicon_homepage
**작성일**: 2025-12-02
**목적**: Lighthouse 성능 테스트 실행 가이드

---

## 🎯 목표 점수

| 항목 | 목표 | 기준 |
|-----|------|------|
| **Performance** | 95점 | 빠른 로딩, 최적화된 리소스 |
| **SEO** | 100점 | 검색엔진 최적화 완벽 |
| **Accessibility** | 95점 | 웹 접근성 표준 준수 |
| **Best Practices** | 95점 | 최신 웹 표준 준수 |

---

## 📋 사전 준비

### 1. Lighthouse CLI 설치

```bash
# npm으로 전역 설치
npm install -g lighthouse

# 설치 확인
lighthouse --version
```

### 2. 프로젝트 빌드 및 실행

```bash
cd /Users/elicon_mark/Developer/01_2_elicon_homepage

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

**기본 포트**: http://localhost:3000

---

## 🚀 Lighthouse 테스트 실행

### 방법 1: 기본 테스트

```bash
lighthouse http://localhost:3000 \
  --output html \
  --output-path ./lighthouse-report.html \
  --view
```

**결과**: 브라우저에서 자동으로 리포트 열림

### 방법 2: CI/CD용 JSON 출력

```bash
lighthouse http://localhost:3000 \
  --output json \
  --output-path ./lighthouse-report.json
```

**결과**: JSON 파일로 저장 (자동화에 유용)

### 방법 3: 다중 출력 형식

```bash
lighthouse http://localhost:3000 \
  --output html \
  --output json \
  --output-path ./reports/lighthouse
```

**결과**:
- `reports/lighthouse.report.html`
- `reports/lighthouse.report.json`

---

## 🎨 SuperClaude 통합 테스트

### /sc:test 명령어 사용

```bash
cd /Users/elicon_mark/Developer/01_2_elicon_homepage

# Lighthouse + 자동 분석
/sc:test --lighthouse --target production

# 성능 문제 자동 분석 및 개선 제안
/sc:improve --perf --based-on lighthouse-report.json
```

**자동 수행**:
1. ✅ Lighthouse 실행
2. ✅ 점수 분석
3. ✅ 문제 식별
4. ✅ 개선 제안 생성
5. ✅ 우선순위 정렬

---

## 📊 점수 해석

### Performance (성능)

| 점수 | 등급 | 의미 |
|------|------|------|
| 90-100 | 🟢 Excellent | 최적화 완료 |
| 50-89 | 🟡 Needs Work | 개선 필요 |
| 0-49 | 🔴 Poor | 심각한 문제 |

**주요 지표**:
- **FCP** (First Contentful Paint): < 1.8초
- **LCP** (Largest Contentful Paint): < 2.5초
- **TTI** (Time to Interactive): < 3.8초
- **TBT** (Total Blocking Time): < 200ms
- **CLS** (Cumulative Layout Shift): < 0.1

### SEO

**100점 달성 조건**:
- ✅ meta 태그 완비
- ✅ 구조화된 데이터 (JSON-LD)
- ✅ robots.txt 존재
- ✅ sitemap.xml 존재
- ✅ 모바일 친화적
- ✅ HTTPS 사용

### Accessibility

**95점 이상 달성 조건**:
- ✅ 명확한 HTML 구조
- ✅ alt 속성 모든 이미지
- ✅ 적절한 색상 대비 (4.5:1 이상)
- ✅ 키보드 내비게이션 지원
- ✅ ARIA 속성 적절히 사용
- ✅ 폼 라벨 명확

---

## 🔧 자동 개선 워크플로우

### 1단계: 현재 상태 측정

```bash
# Lighthouse 실행
npm run build && npm run start &
sleep 5  # 서버 시작 대기

lighthouse http://localhost:3000 \
  --output json \
  --output-path ./baseline-report.json

pkill -f "next start"  # 서버 종료
```

### 2단계: SuperClaude로 분석

```bash
/sc:analyze ./baseline-report.json --focus performance
```

**출력 예시**:
```
📊 Lighthouse 분석 결과

Performance: 82점 (목표: 95점)
❌ 개선 필요: -13점

주요 문제:
1. 🔴 이미지 최적화 부족 (-5점)
2. 🟡 JavaScript 번들 크기 (-4점)
3. 🟡 CSS 미사용 규칙 (-2점)
4. 🟡 폰트 로딩 최적화 (-2점)
```

### 3단계: 자동 개선 적용

```bash
/sc:improve --perf --auto-apply
```

**자동 적용**:
- ✅ next/image로 이미지 최적화
- ✅ 동적 import로 코드 스플리팅
- ✅ CSS 정리 (PurgeCSS)
- ✅ 폰트 preload 추가

### 4단계: 재측정

```bash
npm run build && npm run start &
sleep 5

lighthouse http://localhost:3000 \
  --output json \
  --output-path ./improved-report.json

pkill -f "next start"
```

### 5단계: 비교 분석

```bash
/sc:analyze ./baseline-report.json ./improved-report.json --compare
```

**출력 예시**:
```
📈 개선 효과

Performance: 82점 → 96점 (+14점) ✅
SEO: 98점 → 100점 (+2점) ✅
Accessibility: 93점 → 96점 (+3점) ✅

총 개선: +19점
목표 달성: ✅ 모든 항목 95점 이상
```

---

## 🎯 최적화 체크리스트

### Performance

- [ ] **이미지 최적화**
  ```tsx
  import Image from 'next/image'
  <Image src="/hero.jpg" width={800} height={600} alt="Hero" />
  ```

- [ ] **코드 스플리팅**
  ```tsx
  const DynamicComponent = dynamic(() => import('./Heavy'))
  ```

- [ ] **폰트 최적화**
  ```tsx
  import { Inter } from 'next/font/google'
  const inter = Inter({ subsets: ['latin'], display: 'swap' })
  ```

- [ ] **CSS 최적화**
  - Tailwind CSS purge 설정
  - Critical CSS 인라인화

### SEO

- [ ] **메타 태그**
  ```tsx
  export const metadata = {
    title: '엘리콘',
    description: 'AI 기술 전문 기업',
  }
  ```

- [ ] **구조화 데이터**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "엘리콘"
  }
  ```

- [ ] **Sitemap**
  - `public/sitemap.xml` 생성
  - `robots.txt` 설정

### Accessibility

- [ ] **시맨틱 HTML**
  ```tsx
  <header>, <nav>, <main>, <footer>, <article>
  ```

- [ ] **ARIA 속성**
  ```tsx
  <button aria-label="메뉴 열기">
  ```

- [ ] **색상 대비**
  - 4.5:1 이상 (일반 텍스트)
  - 3:1 이상 (대형 텍스트)

---

## 📦 CI/CD 통합

### GitHub Actions 예시

`.github/workflows/lighthouse.yml`:

```yaml
name: Lighthouse CI

on:
  pull_request:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - run: npm run start &
      - name: Lighthouse
        run: |
          npm install -g lighthouse
          lighthouse http://localhost:3000 \
            --output json \
            --output-path ./lighthouse.json
      - name: Check Scores
        run: |
          PERF=$(cat lighthouse.json | jq '.categories.performance.score * 100')
          if [ "$PERF" -lt 95 ]; then
            echo "❌ Performance: $PERF < 95"
            exit 1
          fi
```

---

## 🚨 문제 해결

### Q1. "lighthouse: command not found"

```bash
npm install -g lighthouse
# 또는
brew install lighthouse
```

### Q2. "Connection refused"

```bash
# 서버가 실행 중인지 확인
lsof -i :3000

# 없으면 실행
npm run start
```

### Q3. 점수가 낮게 나옴

```bash
# 프로덕션 빌드 확인
npm run build
npm run start  # dev 아님!

# 개발 모드는 점수가 낮음
# npm run dev (X)
```

---

## 📚 참고 자료

- **Lighthouse 공식 문서**: https://developers.google.com/web/tools/lighthouse
- **Next.js 성능 최적화**: https://nextjs.org/docs/pages/building-your-application/optimizing
- **Web Vitals**: https://web.dev/vitals/
- **SuperClaude 성능 가이드**: `/Users/elicon_mark/Developer/01_2_elicon_homepage/docs/superclaude_integration.md`

---

**다음 단계**:
1. 프로덕션 빌드 실행
2. Lighthouse 테스트
3. SuperClaude로 자동 개선
4. 목표 점수 달성 (95/100/95)
