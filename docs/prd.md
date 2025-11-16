# Product Requirements Document (PRD): 01_elicon_homepage
# (제품 요구사항 명세서)

**Version:** 1.0
**Date:** 2025-11-15
**Owner:** 서대표
**Facilitator:** Analyst (Mary)
**Related Documents:** [Project Brief](./project-brief.md)

---

## 1. Goals (목표)

**Business Goal (비즈니스 목표):**
- 엘리콘을 '프로페셔널 B2B 유통 전문 기업'으로 포지셔닝하여, 월 10건의 신규 B2B 유통 문의를 확보한다.

**User Goals (사용자 목표):**
- **Primary (B2B 파트너):** 엘리콘을 '정직하고 안정적인' 장기 공급 파트너로 인지하고, 파트너십 문의를 한다.
- **Secondary (소비자):** Wing/Cocolic/Seanex 브랜드의 신뢰도를 확인하고, 구매 채널(eliconstore.com)로 이동한다.

**Product Goals (제품 목표):**
- 엘리콘의 핵심 역량(검증된 브랜드 포트폴리오, B2B 지원)을 명확하게 전달하는 웹사이트 구축
- SEO 최적화를 통한 자연 유입 증가
- 브랜드별 활동 증거(인스타그램 피드)를 실시간으로 제공

---

## 2. Requirements (요구사항)

### 2.1 Functional Requirements (기능 요구사항)

**FR1: 엘리콘 기업 정체성 강조 (Hero Section)**
- **Description:** 메인 페이지 Hero Section은 Wing/Cocolic/Seanex 개별 브랜드보다 **'엘리콘(Elicon)'의 기업 정체성**을 최우선으로 강조해야 한다.
- **Acceptance Criteria:**
  - Hero Section 헤드라인: "프로페셔널 B2B 유통 전문 기업, 엘리콘"
  - 서브 헤드라인: 국내 제조 엄선 브랜드(Wing, Cocolic, Seanex) 소개 문구
  - 시각적 계층: 엘리콘 로고 > 브랜드 로고

**FR2: 브랜드 포트폴리오 쇼케이스 (Brands Section)**
- **Description:** Wing, Cocolic, Seanex 3개 브랜드를 소개하며, 각 브랜드의 **A급 제조사 배경**을 명시적으로 강조해야 한다.
- **Acceptance Criteria:**
  - 각 브랜드 카드에 "한국오지케이(40년 업력)" 또는 "써모랩(국산 히트상품 제조사)" 명시
  - 브랜드별 대표 제품 이미지와 간단한 설명
  - 각 브랜드 상세 페이지로 연결되는 CTA (Call-to-Action)

**FR3: 브랜드별 상세 페이지 (Brand Detail Pages)**
- **Description:** Wing, Cocolic, Seanex 각 브랜드를 소개하는 독립 페이지.
- **Acceptance Criteria:**
  - 브랜드 철학 및 핵심 가치
  - 대표 제품 라인업
  - 제조사 정보 (예: 한국오지케이, 써모랩)
  - 인스타그램 피드 연동 (최신 5개 게시물)
  - eliconstore.com으로 연결되는 '구매하기' CTA

**FR4: B2B 파트너십 페이지 (/partnership)**
- **Description:** 잠재적 B2B 파트너를 위한 전용 페이지. 단순 문의 폼이 아닌, **엘리콘의 강점을 먼저 제시**하여 신뢰를 구축한 후, 문의 폼으로 연결.
- **Acceptance Criteria:**
  - **Section 1:** "왜 엘리콘과 협력해야 하는가?" (검증된 브랜드, 안정적 공급망, 맞춤형 지원 시스템)
  - **Section 2:** 성공 사례 또는 기존 파트너사 로고 (예: 조이웍스, 다솔낚시마트)
  - **Section 3:** '최소 입력' 문의 폼 (업체명, 연락처, 간단한 문의 내용)

**FR5: 외부 연결 (eliconstore.com, 블로그)**
- **Description:** B2C 쇼핑몰(eliconstore.com) 및 블로그로 연결되는 명확한 링크 제공.
- **Acceptance Criteria:**
  - 헤더 네비게이션에 "쇼핑몰", "블로그" 링크
  - Footer에 eliconstore.com, 블로그 링크

**FR6: 인스타그램 피드 연동**
- **Description:** Wing, Cocolic, Seanex 각 브랜드의 인스타그램 피드를 메인 페이지 또는 브랜드 상세 페이지에 연동.
- **Acceptance Criteria:**
  - 각 브랜드별 최신 5개 게시물 표시 (이미지, 간단한 설명)
  - 인스타그램 프로필로 연결되는 링크

### 2.2 Non-Functional Requirements (비기능 요구사항)

**NFR1: 성능 (Performance)**
- **Description:** PC 환경(Primary User)에서 빠른 로딩 속도 제공.
- **Acceptance Criteria:**
  - 메인 페이지 First Contentful Paint (FCP) < 2초
  - Largest Contentful Paint (LCP) < 3초
  - 모바일 환경(Secondary User) Lighthouse Performance 점수 ≥ 80

**NFR2: SEO 최적화**
- **Description:** '엘리콘', '윙피싱', '코코릭', '씨넥스' 등 주요 키워드에 대한 검색 엔진 노출 최적화.
- **Acceptance Criteria:**
  - 각 페이지별 적절한 메타 태그 (`<title>`, `<meta description>`, Open Graph)
  - 시맨틱 HTML5 마크업
  - Google Search Console 연동

**NFR3: 반응형 디자인 (Responsive Design)**
- **Description:** PC(Primary) 및 모바일(Secondary) 환경 모두 지원.
- **Acceptance Criteria:**
  - PC(≥1024px), 태블릿(768px~1023px), 모바일(<768px) 각 해상도에서 UI 깨짐 없음
  - 모바일 환경에서 터치 인터랙션 최적화

**NFR4: 유지보수성 (Maintainability)**
- **Description:** 04_marketing_park 프로젝트와 동일한 구조 및 패턴 적용.
- **Acceptance Criteria:**
  - Next.js 14 App Router 구조
  - Tailwind CSS 유틸리티 클래스 사용
  - 컴포넌트 기반 아키텍처 (재사용 가능한 UI 컴포넌트)

**NFR5: 디자인 시스템 통합 (향후)**
- **Description:** `_shared/design-system`의 기본 가이드를 따르며, `01_wing` 프로젝트 완료 시 해당 디자인 시스템을 통합 적용.
- **Acceptance Criteria:**
  - 색상, 타이포그래피, 간격 등 기본 디자인 토큰 적용
  - 향후 Wing 디자인 시스템 통합 시 UI 일관성 유지

**NFR6: 분석 확장성**
- **Description:** 향후 Google Analytics (Firebase) 연동을 고려한 아키텍처 설계.
- **Acceptance Criteria:**
  - 이벤트 추적을 위한 기본 구조 설계 (예: 클릭 이벤트, 페이지 뷰)
  - GA 스크립트 추가 시 최소한의 코드 수정으로 연동 가능

---

## 3. UI Design Goals (UI 디자인 목표)

**Primary Design Principles (핵심 디자인 원칙):**
1. **신뢰 중심 (Trust-Centered):** 깔끔하고 전문적인 디자인으로 '정직하고 안정적인' 파트너의 이미지 전달
2. **브랜드 우선 (Brand-First):** Wing, Cocolic, Seanex 브랜드의 고유 색상 및 아이덴티티를 존중하며, 엘리콘의 통합 디자인 시스템 내에서 조화롭게 표현
3. **접근성 (Accessibility):** WCAG 2.1 AA 수준 준수, 색상 대비, 키보드 네비게이션 지원

**Visual Tone:**
- **Primary User (B2B):** 프로페셔널, 신뢰감, 안정감 (블루 계열, 화이트 스페이스)
- **Secondary User (소비자):** 활발함, 접근성, 친근함 (브랜드 고유 색상 활용)

---

## 4. Technical Assumptions (기술 가정)

**Stack:**
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (또는 동일 환경)
- **CMS (향후):** Markdown 기반 콘텐츠 관리 또는 Headless CMS 연동 고려

**Dependencies:**
- 인스타그램 피드 연동: Instagram Basic Display API 또는 third-party 서비스 (예: SnapWidget)
- Form 제출: Netlify Forms, Formspree, 또는 자체 백엔드 API

---

## 5. Epic List (에픽 목록)

| Epic ID | Epic Name | Priority | Estimated Story Points | Dependencies |
|---------|-----------|----------|------------------------|--------------|
| **Epic 1** | 엘리콘 기업 정체성 및 핵심 페이지 구축 | P0 (Critical) | 13 | None |
| **Epic 2** | 브랜드 포트폴리오 쇼케이스 및 상세 페이지 | P0 (Critical) | 21 | Epic 1 완료 |
| **Epic 3** | B2B 파트너십 및 외부 연결 | P1 (High) | 13 | Epic 1, 2 완료 |
| **Epic 4** | 성능 최적화 및 SEO | P1 (High) | 8 | Epic 1, 2, 3 완료 |
| **Epic 5** | 분석 연동 (향후) | P2 (Medium) | 5 | Epic 4 완료 |

**Total Estimated Story Points:** 60

---

## 6. Epic 1: 엘리콘 기업 정체성 및 핵심 페이지 구축

**Epic Goal:** 메인 페이지 Hero Section 및 About Us 페이지를 통해 엘리콘의 기업 정체성을 명확하게 전달하고, 외부 연결(쇼핑몰, 블로그)을 제공한다.

**Priority:** P0 (Critical)

**Estimated Story Points:** 13

**Stories:**

**Story 1.1: 메인 페이지 레이아웃 및 헤더/푸터 구축**
- **As a** 잠재적 B2B 파트너
- **I want** 메인 페이지의 헤더에서 엘리콘의 주요 메뉴(About, Brands, Partnership, 쇼핑몰, 블로그)를 명확하게 확인하고,
- **So that** 내가 원하는 정보를 빠르게 탐색할 수 있다.
- **Acceptance Criteria:**
  - 헤더: 엘리콘 로고, 메인 네비게이션(About, Brands, Partnership, 쇼핑몰, 블로그)
  - 푸터: 회사 정보, 외부 링크(eliconstore.com, 블로그), 저작권 표시
- **Estimated Effort:** 3 Story Points

**Story 1.2: 헤더/푸터 외부 링크 연동**
- **As a** 최종 소비자
- **I want** 헤더 또는 푸터에서 "쇼핑몰" 링크를 클릭하여 eliconstore.com으로 이동하고,
- **So that** 제품을 구매할 수 있다.
- **Acceptance Criteria:**
  - 헤더 "쇼핑몰" 링크 → eliconstore.com (새 탭)
  - 푸터 "블로그" 링크 → 블로그 URL (새 탭)
- **Estimated Effort:** 1 Story Point

**Story 1.3: 메인 페이지 Hero Section 구축 (FR1)**
- **As a** 잠재적 B2B 파트너
- **I want** 메인 페이지 Hero Section에서 엘리콘의 기업 정체성("프로페셔널 B2B 유통 전문 기업")을 명확하게 확인하고,
- **So that** 엘리콘이 신뢰할 수 있는 파트너임을 인지할 수 있다.
- **Acceptance Criteria:**
  - Hero Section 헤드라인: "프로페셔널 B2B 유통 전문 기업, 엘리콘"
  - 서브 헤드라인: "국내 제조 엄선 브랜드(Wing, Cocolic, Seanex)를 통해 검증된 제품을 공급합니다."
  - 시각적 계층: 엘리콘 로고 > 브랜드 로고
  - CTA: "더 알아보기" 버튼 → /about 페이지
- **Estimated Effort:** 3 Story Points

**Story 1.4: About Us 페이지 (FR1, 엘리콘 철학)**
- **As a** 잠재적 B2B 파트너
- **I want** About Us 페이지에서 엘리콘의 철학("국내 제조 엄선", "전문 유통사")을 이해하고,
- **So that** 엘리콘과의 파트너십이 왜 유익한지 판단할 수 있다.
- **Acceptance Criteria:**
  - Section 1: 엘리콘 소개 (회사 철학, 비전)
  - Section 2: 핵심 가치 ("국내 제조 엄선", "프로페셔널 유통")
  - Section 3: 연혁 (선택 사항, 간단히)
- **Estimated Effort:** 3 Story Points

**Story 1.5: 반응형 디자인 적용 (NFR3)**
- **As a** 모바일 사용자 (Secondary User)
- **I want** 메인 페이지가 모바일 환경에서도 깨짐 없이 표시되고,
- **So that** 편리하게 브랜드 정보를 확인할 수 있다.
- **Acceptance Criteria:**
  - PC(≥1024px), 태블릿(768px~1023px), 모바일(<768px) 반응형 레이아웃
  - 모바일 환경에서 햄버거 메뉴 제공
- **Estimated Effort:** 3 Story Points

---

## 7. Epic 2: 브랜드 포트폴리오 쇼케이스 및 상세 페이지

**Epic Goal:** Wing, Cocolic, Seanex 3개 브랜드를 메인 페이지 Brands Section 및 각 브랜드 상세 페이지를 통해 소개하고, 브랜드별 인스타그램 피드를 연동한다.

**Priority:** P0 (Critical)

**Estimated Story Points:** 21

**Stories:**

**Story 2.1: 메인 페이지 Brands Section (FR2)**
- **As a** 잠재적 B2B 파트너
- **I want** 메인 페이지 Brands Section에서 Wing, Cocolic, Seanex 브랜드를 한눈에 확인하고,
- **So that** 엘리콘이 어떤 브랜드를 취급하는지 빠르게 이해할 수 있다.
- **Acceptance Criteria:**
  - 각 브랜드 카드: 브랜드 로고, 간단한 설명, 제조사 정보 ("한국오지케이(40년 업력)" 또는 "써모랩(국산 히트상품 제조사)")
  - 각 브랜드 카드 클릭 → 브랜드 상세 페이지(/brands/wing, /brands/cocolic, /brands/seanex)
- **Estimated Effort:** 5 Story Points

**Story 2.2: Wing 브랜드 상세 페이지 (FR3)**
- **As a** 잠재적 B2B 파트너 또는 최종 소비자
- **I want** Wing 브랜드 상세 페이지에서 브랜드 철학, 대표 제품, 제조사 정보를 확인하고,
- **So that** Wing 브랜드의 가치와 신뢰도를 평가할 수 있다.
- **Acceptance Criteria:**
  - Section 1: Wing 브랜드 철학 및 핵심 가치
  - Section 2: 대표 제품 라인업 (이미지, 간단한 설명)
  - Section 3: 제조사 정보 (한국오지케이, 40년 업력 강조)
  - Section 4: 인스타그램 피드 연동 (최신 5개 게시물)
  - CTA: "구매하기" → eliconstore.com
- **Estimated Effort:** 5 Story Points

**Story 2.3: Cocolic 브랜드 상세 페이지 (FR3)**
- **As a** 잠재적 B2B 파트너 또는 최종 소비자
- **I want** Cocolic 브랜드 상세 페이지에서 브랜드 철학, 대표 제품, 제조사 정보를 확인하고,
- **So that** Cocolic 브랜드의 가치와 신뢰도를 평가할 수 있다.
- **Acceptance Criteria:**
  - Wing과 동일한 구조 (브랜드 철학, 대표 제품, 제조사 정보, 인스타그램 피드)
  - 제조사 정보: 써모랩(국산 히트상품 제조사) 강조
- **Estimated Effort:** 5 Story Points

**Story 2.4: Seanex 브랜드 상세 페이지 (FR3)**
- **As a** 잠재적 B2B 파트너 또는 최종 소비자
- **I want** Seanex 브랜드 상세 페이지에서 브랜드 철학, 대표 제품, 제조사 정보를 확인하고,
- **So that** Seanex 브랜드의 가치와 신뢰도를 평가할 수 있다.
- **Acceptance Criteria:**
  - Wing/Cocolic과 동일한 구조
  - 제조사 정보 강조
- **Estimated Effort:** 5 Story Points

**Story 2.5: 인스타그램 피드 연동 설정 (FR6)**
- **As a** 개발자
- **I want** Instagram Basic Display API 또는 third-party 서비스를 통해 각 브랜드의 인스타그램 피드를 가져오고,
- **So that** 브랜드 상세 페이지에 최신 5개 게시물을 표시할 수 있다.
- **Acceptance Criteria:**
  - Instagram API 연동 또는 SnapWidget 같은 서비스 활용
  - 각 브랜드별 최신 5개 게시물 표시 (이미지, 간단한 설명, 인스타그램 프로필 링크)
- **Estimated Effort:** 1 Story Point

---

## 8. Epic 3: B2B 파트너십 및 외부 연결

**Epic Goal:** B2B 파트너십 페이지(/partnership)를 통해 잠재적 파트너의 문의를 유도하고, 외부 연결(쇼핑몰, 블로그)을 제공하여 사용자 경험을 완성한다.

**Priority:** P1 (High)

**Estimated Story Points:** 13

**Stories:**

**Story 3.1: Partnership 페이지 (FR4)**
- **As a** 잠재적 B2B 파트너
- **I want** Partnership 페이지에서 엘리콘의 강점을 먼저 확인하고, '최소 입력' 문의 폼을 통해 간편하게 문의하고,
- **So that** 엘리콘과의 파트너십을 고려할 수 있다.
- **Acceptance Criteria:**
  - Section 1: "왜 엘리콘과 협력해야 하는가?" (검증된 브랜드, 안정적 공급망, 맞춤형 지원 시스템)
  - Section 2: 성공 사례 또는 기존 파트너사 로고 (예: 조이웍스, 다솔낚시마트)
  - Section 3: '최소 입력' 문의 폼 (업체명, 연락처, 간단한 문의 내용)
  - 문의 폼 제출 시 이메일 알림 또는 CRM 연동
- **Estimated Effort:** 8 Story Points

**Story 3.2: 메인 페이지 인스타그램 피드 섹션 (선택, FR6)**
- **As a** 최종 소비자
- **I want** 메인 페이지에서 Wing, Cocolic, Seanex 브랜드의 최신 인스타그램 게시물을 확인하고,
- **So that** 브랜드의 활발한 활동을 확인할 수 있다.
- **Acceptance Criteria:**
  - 메인 페이지 하단에 인스타그램 피드 섹션 추가 (각 브랜드별 최신 2개 게시물)
  - 각 게시물 클릭 → 인스타그램 프로필
- **Estimated Effort:** 5 Story Points

---

**다음 Epic (Epic 4: 성능 최적화 및 SEO, Epic 5: 분석 연동)은 MVP 완료 후 진행 예정.**

---

**문서 작성:** Gemini (Mary)
**최종 검토:** 서대표
**다음 문서:** Front-end Specification
