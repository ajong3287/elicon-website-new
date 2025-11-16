# Front-End Specification: 01_elicon_homepage
# (UX/UI 상세 사양)

**Version:** 1.0
**Date:** 2025-11-15
**Owner:** UX Expert (Sally)

---

## 1. Overall UX Goals & Principles (전반적 UX 목표 및 원칙)

* **Target User Personas (대상 사용자 페르소나):**
    * **주요 (B2B):** 낚시점, 캠핑샵, 아울렛, 유통사 등 신규 공급처를 찾는 **'B2B 파트너'** (PC 사용자).
    * **보조 (B2C):** Wing, Cocolic, Seanex 브랜드의 신뢰도와 정보를 확인하려는 **'일반 고객'** (모바일 사용자).
* **Usability Goals (사용성 목표):**
    * **(B2B) 전문성:** B2B 파트너가 3분 이내에 엘리콘의 전문성(국내 제조, 유통망)을 인지하고 '/partnership' 폼까지 도달할 수 있어야 합니다.
    * **(B2C) 신뢰도:** 일반 고객이 사이트를 둘러보며 '살아있는 브랜드'(인스타그램)와 '안정적인 기업'이라는 인식을 받아야 합니다.
* **Design Principles (디자인 원칙):**
    1.  **신뢰 우선 (Trust First):** 모든 시각적 요소는 화려함보다 '기업의 안정감'과 '공신력'을 우선합니다 (NFR2).
    2.  **명확성 (Clarity):** B2B 고객이 원하는 정보(제품, 파트너십)를 즉시 찾을 수 있도록 간결한 레이아웃을 사용합니다.
    3.  **세련됨 (Sophisticated):** '중국산 오퍼상' 이미지를 탈피하기 위해, 과장되지 않고 정제된 타이포그래피와 여백을 사용합니다 (NFR2).

---

## 2. Information Architecture (IA - 정보 구조)

* **Site Map / Screen Inventory (사이트 맵 / 스크린 목록):**
    ```
    / (메인 페이지)
    ├── /about (엘리콘 소개)
    ├── /brands (브랜드 포트폴리오)
    │   ├── /brands/wing (Wing 상세)
    │   ├── /brands/cocolic (Cocolic 상세)
    │   └── /brands/seanex (Seanex 상세)
    ├── /partnership (B2B 파트너십)
    ├── (외부) eliconstore.com
    ├── (외부) Blog
    └── (외부) Instagram
    ```
* **Navigation Structure (내비게이션 구조):**
    * **Primary Navigation (주요 내비게이션 - Header):**
        * Elicon 로고 (홈으로 이동)
        * **About Us** (엘리콘 소개 - /about)
        * **Brands** (브랜드 포트폴리오 - /brands)
        * **B2B 파트너십** (B2B 문의 - /partnership)
        * **B2C Shop** (외부 - eliconstore.com)
    * **Footer Navigation (하단 내비게이션):**
        * 회사 기본 정보 (주소, 대표자, 사업자등록번호)
        * 블로그 (외부 링크)
        * 인스타그램 (외부 링크)
        * B2B 파트너십 (내부 - /partnership)

---

## 3. User Flows (사용자 흐름)

**Flow 1: B2B 파트너의 유통 문의 흐름**
* **User Goal (사용자 목표):** 스포츠 매장 매니저가 Wing 선글라스의 유통 가능 여부를 문의한다.
* **Success Criteria (성공 기준):** B2B 파트너십 '최소 입력 폼'을 성공적으로 제출한다.
* **Flow Steps (흐름 단계):**
    1. (검색/방문) /brands/wing
    2. Wing 제품 신뢰도 확인 (다각적 스포츠)
    3. /partnership (B2B 파트너십) 페이지 이동
    4. 엘리콘의 강점 ('다양한 채널 입점') 확인
    5. '최소 입력 폼' 작성 (Story 3.1)
    6. 제출 완료 (목표 달성)

    **Alternative Path:**
    - / (메인 페이지) -> /brands (브랜드 포트폴리오) -> /brands/wing
    - / (메인 페이지) -> /partnership (직접 이동)

**Flow 2: B2C 고객의 쇼핑몰 이동 흐름**
* **User Goal (사용자 목표):** Cocolic 제품에 관심 있는 고객이 실제 구매처로 이동한다.
* **Success Criteria (성공 기준):** eliconstore.com으로 성공적으로 이동한다.
* **Flow Steps (흐름 단계):**
    1. / (메인 페이지) 방문
    2. Header의 'B2C Shop' 클릭
    3. (외부) eliconstore.com (목표 달성)

    **Alternative Path:**
    - (인스타/검색) /brands/cocolic
    - Cocolic 제품 정보 확인
    - 페이지 내 '구매하기' 또는 'B2C Shop' 클릭
    - (외부) eliconstore.com

---

## 4. Wireframes & Mockups (레이아웃 개념 설계)

**1. 메인 페이지 (`/`) - (신뢰 구축 및 포트폴리오 쇼케이스)**
* **Purpose:** 엘리콘의 기업 정체성(FR1)을 확립하고, 3개 브랜드(FR2)로 방문자를 안내하며, B2B 파트너십(FR4)으로 유도합니다.

| 영역 (순서) | 스토리 | 목적 |
| :--- | :--- | :--- |
| **영역 1: Hero Section** | Story 1.3 | **엘리콘 정체성 확립** (신뢰할 수 있는 유통 전문가). `/partnership` 페이지로 즉시 연결되는 CTA 버튼 포함. |
| **영역 2: Brand Portfolio** | Story 2.1 | **핵심 포트폴리오 쇼케이스.** 3개 브랜드(Wing, Cocolic, Seanex)를 소개하고 각 상세 페이지로 연결. (Wing은 '다각적 스포츠' 이미지 반영) |
| **영역 3: About Us (Teaser)** | Story 1.4 | **신뢰도 강화.** '국내 제조 엄선', '전문 제조사 파트너십' 철학을 짧게 소개하고 `/about` 상세 페이지로 연결. |
| **영역 4: Social Proof** | Story 3.2 | **"살아있는 기업" 증명.** 3개 브랜드의 인스타그램 피드를 노출하여 활발한 활동을 강조. |
| **영역 5: Final CTA** | Story 3.1 | B2B 파트너십을 다시 한번 강조하며 `/partnership` 페이지로 유도. |

**2. B2B 파트너십 페이지 (`/partnership`) - (B2B 리드 생성)**
* **Purpose:** "왜 엘리콘과 파트너가 되어야 하는가?"에 대한 답을 제시하여 B2B 문의 전환율을 극대화합니다.

| 영역 (순서) | 스토리 | 목적 |
| :--- | :--- | :--- |
| **영역 1: Value Proposition** | (신규) | **"Why Elicon?"** B2B 파트너가 얻을 수 있는 가치(예: 안정적 공급망, 맞춤형 B2B 지원)를 먼저 제시. |
| **영역 2: Social Proof** | (신규) | **"검증된 파트너."** '다양한 오프라인 채널(낚시, 캠핑, 스포츠) 입점' 등 실제 성과를 제시하여 공신력 확보. (숫자 "35" 미사용) |
| **영역 3: Our Strengths** | Story 1.4 | **"신뢰도 강화."** '국내 제조 엄선'(한국오지케이, 써모랩) 등 엘리콘만의 차별화된 강점을 요약. |
| **영역 4: Contact Form** | Story 3.1 | **리드 확보.** 위에서 신뢰를 구축한 B2B 고객이 '최소 입력 폼'(이름, 연락처 필수)을 제출. |

---

## 5. Component Library / Design System

* **Design System Approach (접근 방식):**
    * **1단계 (현재):** `_shared/design-system`의 기본 가이드(색상, 타이포)를 준수하며, 01_elicon_homepage에 필요한 커스텀 컴포넌트를 우선 개발합니다.
    * **2단계 (미래):** `01_wing` 프로젝트의 디자인 시스템이 완성되면, 해당 시스템을 `_shared` 폴더로 추출하고, 이 홈페이지에 점진적으로 적용하여 포트폴리오 전반의 시각적 통일성을 확보합니다.
* **Core Components (핵심 컴포넌트 목록):**
    1.  **`Header` (공용):** 전역 내비게이션. (`_shared/layout/` 기반)
    2.  **`Footer` (공용):** 하단 정보 및 링크. (`_shared/layout/` 기반)
    3.  **`HeroSection` (커스텀):** 엘리콘 정체성 강조. (`_shared/components/hero/` 기반)
    4.  **`BrandCard` (커스텀):** 3개 브랜드 소개 카드. (Wing은 '다각적 스포츠'로 표현)
    5.  **`PartnershipSection` (커스텀):** /partnership 페이지의 B2B 강점 소개 섹션. ('다양한 채널 입점' 강조)
    6.  **`ContactForm` (공용/재사용):** B2B '최소 입력' 문의 폼. (`_shared/components/forms/` 기반 커스터마이징)
    7.  **`InstagramFeed` (커스텀/공용화):** 3개 브랜드 인스타그램 피드 연동.

---

## 6. Branding & Style Guide

* **1. Color Palette (색상 팔레트):**
    * **Primary (주요색):** `Deep Navy` (#1A2C4B) - (신뢰, 전문성)
    * **Secondary (보조색):** `Clean White` (#FFFFFF), `Light Gray` (#F4F7F6) - (여백, 세련됨)
    * **Accent (강조색):** `Bright Teal` (#00BFA5) 또는 `Muted Gold` (#BFA16A) - (활력, 고급스러움)
    * **Text (텍스트):** `Dark Gray` (#333333) - (가독성)
* **2. Typography (타이포그래피):**
    * **Font Family (글꼴):** **Pretendard (프리텐다드)** - (모던, 전문성, 고성능)
    * **Scale (크기):** H1 (36px, Bold), H2 (28px, Semi-Bold), H3 (20px, Semi-Bold), Body (16px, Regular).
* **3. Spacing & Layout (여백 및 레이아웃):**
    * **Grid System:** 표준 12-Column Grid (PC 기준).
    * **Spacing Unit:** 8px 기반 (8, 16, 24, 32px...) - (시각적 안정감).
* **4. Iconography (아이콘):**
    * **Style:** **Line (선) 스타일** 아이콘 (예: Heroicons) - (현대적, 세련됨).

---

## 7. Accessibility Requirements (접근성)

* **Compliance Target (준수 목표):** **WCAG 2.1 AA** 수준 (글로벌 표준, 기업 공신력).
* **Key Requirements (주요 요구사항):**
    1.  **시각:** 모든 텍스트 4.5:1 이상 색상 대비, 모든 이미지에 '대체 텍스트'(alt text) 제공.
    2.  **상호작용:** 100% 키보드 탐색 가능 (메뉴, 폼 포함), 명확한 '초점(Focus)' 표시.
    3.  **콘텐츠:** 논리적인 헤딩 순서(H1->H2) 준수, 모든 폼 입력 칸에 '레이블'(label) 제공.

---

## 8. Responsiveness Strategy (반응형 전략)

* **Strategy:** **모바일 우선(Mobile-First)**, Tailwind CSS 표준 브레이크포인트 사용.
* **Breakpoints (분기점):** Mobile (<640px, B2C), Tablet (md: 768px), Desktop (lg: 1024px, B2B), Wide (xl: 1280px).
* **Adaptation (적응):**
    * **(Mobile):** 1단(Single Column) 레이아웃, 햄버거 메뉴(삼선 메뉴).
    * **(Desktop):** 3단 그리드(Brand Portfolio 등) 활용, 펼쳐진 메뉴.

---

## 9. Animation & Micro-interactions (애니메이션)

* **Principles (원칙):** **미묘함(Subtle)**, **피드백(Feedback)**, **성능(Performant)**. '기업 신뢰도'(NFR2)를 해치지 않는 절제된 모션 사용.
* **Key Animations (주요 애니메이션):**
    * **버튼/CTA:** 부드러운 색상 변경 (Hover).
    * **내비게이션:** 햄버거 메뉴 슬라이드.
    * **브랜드 카드:** 미세한 그림자 또는 확대 효과 (Hover).
    * **페이지 로드:** 부드러운 Fade-in 효과.

---

## 10. Performance Considerations (성능)

* **Goals (목표):** Core Web Vitals (LCP) '우수' 등급, 100ms 이내 상호작용 응답 (NFR1, NFR4).
* **Strategies (전략):**
    * **이미지 최적화:** **`next/image`** 컴포넌트 사용 (WebP, 자동 압축).
    * **지연 로딩 (Lazy Loading):** 스크롤 시 하단 콘텐츠(인스타그램 피드, 푸터) 로드.
    * **정적 페이지 생성 (SSG):** About, Brands 상세 페이지는 SSG로 빌드하여 CDN을 통해 최고 속도 보장 (SEO 극대화).

---

## 11. Next Steps (다음 단계)

이 `front-end-spec.md` 문서는 `prd.md`와 함께 Architect에게 전달되어, **`front-end-architecture.md`** 문서를 작성하는 데 사용됩니다.

---

**문서 작성:** UX Expert (Sally)
**최종 검토:** 서대표
**다음 문서:** Front-end Architecture
