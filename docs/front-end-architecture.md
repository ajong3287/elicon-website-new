# Fullstack Architecture: 01_elicon_homepage
# (풀스택 아키텍처)

**Version:** 1.0
**Date:** 2025-11-15
**Owner:** Architect (Winston)

---

## 1. Introduction (소개)

이 문서는 **01_elicon_homepage** 프로젝트의 전체 풀스택 아키텍처를 정의합니다. PRD에서 정의한 '기업 신뢰도'(NFR2) 및 'SEO 최적화'(NFR1), '향후 분석 확장성'(NFR6) 목표를 달성하기 위해, **Next.js 14**와 **Tailwind CSS**를 핵심 스택으로 사용합니다 (NFR3).

본 아키텍처는 백엔드(서버리스)와 프론트엔드를 통합 관리하며, 04_marketing_park의 성공 패턴과 `_shared/` 폴더의 재사용 가능한 컴포넌트(NFR5)를 기반으로 설계되었습니다.

* **프로젝트 유형:** Greenfield (신규 구축)
* **기반:** `04_marketing_park`의 성공 패턴(Elicon Standard v1.0)을 따릅니다. 이는 `docs/` 폴더 4개 구조를 포함하며, `Next.js 14 + Tailwind` 조합을 기반으로 합니다.
* **템플릿 사용:** 별도의 외부 스타터 템플릿을 사용하지 않고, 04_marketing_park의 검증된 표준 구조(Story 1.1)를 따릅니다.

---

## 2. High Level Architecture (고수준 아키텍처)

**1. Technical Summary (기술 요약)**

본 아키텍처는 **Jamstack (JavaScript, APIs, Markup)** 접근 방식을 채택합니다. 프론트엔드는 **Next.js 14**를 사용하여 정적(SSG) 및 서버사이드(SSR) 렌더링을 혼합, 'SEO 최적화'(NFR1)와 '최고 성능'(NFR4)을 달성합니다. B2B 문의 폼(Story 3.1) 및 인스타그램 피드(Story 3.2)와 같은 동적 기능은 Next.js의 서버리스 API Routes (Functions)를 통해 처리됩니다. 이 구조는 '기업 신뢰도'(NFR2)를 주는 빠르고 안정적인 사용자 경험을 제공합니다.

**2. Platform and Infrastructure Choice (플랫폼 및 인프라)**

* **Platform:** **Vercel (추천)**
* **Key Services:** Vercel App Hosting, Vercel Functions (서버리스 API용), Vercel Edge Network (CDN).
* **Rationale (근거):**
    * PRD에서 확정된 **Next.js 14 스택(NFR3)과의 완벽한 호환성**을 제공합니다.
    * Jamstack 배포에 최적화되어 있어 'SEO 최적화'(NFR1) 및 '고성능'(NFR4) 요구사항을 달성하는 데 가장 유리합니다.
    * B2B 문의 폼(Story 3.1)의 백엔드 로직을 별도 서버 없이 Vercel Functions로 간단히 구현할 수 있습니다.

**3. Repository Structure (레포지토리 구조)**

* **Structure:** **단일 레포지토리 (Single Repository)**
* **Rationale (근거):** PRD(Story 1.1)에서 정의한 'Elicon Standard v1.0' 패턴을 따릅니다. 현재 프로젝트는 단일 Next.js 애플리케이션이므로, Monorepo는 오버헤드입니다.

**4. High Level Architecture Diagram (고수준 아키텍처 다이어그램)**

```
┌─────────────────────────────────────────────────────────────┐
│                         Users                                │
│  ┌──────────────────┐              ┌──────────────────┐     │
│  │ B2B 파트너 (PC)  │              │ B2C 고객 (모바일) │     │
│  └──────────────────┘              └──────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    Vercel Platform                           │
│  ┌────────────────────────────────────────────────────┐     │
│  │           Edge Network (CDN)                       │     │
│  └────────────────────────────────────────────────────┘     │
│                           │                                  │
│                           ▼                                  │
│  ┌────────────────────────────────────────────────────┐     │
│  │        Next.js App (SSG/SSR)                       │     │
│  │  - 메인 페이지 (/)                                  │     │
│  │  - About (/about)                                  │     │
│  │  - Brands (/brands/wing, cocolic, seanex)         │     │
│  │  - Partnership (/partnership)                      │     │
│  └────────────────────────────────────────────────────┘     │
│                           │                                  │
│                           ▼                                  │
│  ┌────────────────────────────────────────────────────┐     │
│  │    Serverless Functions (API Routes)               │     │
│  │  - /api/contact (Story 3.1)                        │     │
│  │  - /api/instagram (Story 3.2)                      │     │
│  └────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                   Backend Services                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Email API   │  │   SMS API    │  │ Instagram API│      │
│  │  (Resend)    │  │  (Aligo)     │  │ (Basic       │      │
│  │              │  │              │  │  Display)    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Frontend Tech Stack (프론트엔드 기술 스택)

| 카테고리 | 기술 | 버전 | 목적 | 추천 사유 |
| :--- | :--- | :--- | :--- | :--- |
| **프레임워크** | **Next.js** (App Router) | 14.x | SEO, 성능 | SEO 최적화(NFR1) 및 Vercel 배포에 최적화 |
| **스타일링** | **Tailwind CSS** | 3.x | UI 스타일링 | 신뢰감 있는 B2B 디자인을 빠르고 일관되게 구축. 성능(NFR4)에도 유리 |
| **컴포넌트** | **shadcn/ui** | 최신 | UI 컴포넌트 | Tailwind CSS와 완벽 호환. 전문적인 디자인 기반(버튼, 폼) 제공 |
| **폼 관리** | **React Hook Form** + **Zod** | 7.x / 3.x | B2B 문의 폼 | 최소 입력 폼(Story 3.1) 성능 최적화 및 데이터 유효성 검사 |
| **애니메이션** | **Framer Motion** | 11.x | 미세한 상호작용 | 절제된 애니메이션으로 기업 신뢰도(NFR2) 유지 |
| **E2E 테스트** | **Playwright** | 1.x | 폼 제출 테스트 | B2B 문의 폼 기능의 E2E 테스트 실행 |
| **개발 도구** | **TypeScript, ESLint, Prettier** | 최신 | 코드 품질 | `create-next-app` 기본 포함. 전문적이고 유지보수하기 쉬운 코드 보장 |
| **인스타그램 연동** | **Instagram Basic Display API** | - | 소셜 피드 | 브랜드별 인스타그램 피드 연동(Story 3.2) |

---

## 4. Project Structure (프로젝트 구조)

```
/elicon-website
├── /app/
│   ├── /_components/           # 1. 페이지 내부 컴포넌트
│   │   ├── layout/
│   │   │   ├── header.tsx      # (Story 1.1) 공통 헤더
│   │   │   └── footer.tsx      # (Story 1.1) 공통 푸터
│   │   ├── home/
│   │   │   ├── hero-section.tsx     # (Story 1.3) 엘리콘 정체성 Hero
│   │   │   ├── brand-portfolio.tsx  # (Story 2.1) 3개 브랜드 쇼케이스
│   │   │   └── instagram-feed.tsx   # (Story 3.2) 인스타그램 피드
│   │   ├── brands/
│   │   │   ├── brand-card.tsx       # (Story 2.1) 브랜드 카드 컴포넌트
│   │   │   └── brand-detail.tsx     # (Story 2.2-2.4) 브랜드 상세 공통
│   │   └── partnership/
│   │       └── contact-form.tsx     # (Story 3.1) B2B 최소 입력 폼
│   │
│   ├── /about/
│   │   └── page.tsx              # (Story 1.4) 엘리콘 소개
│   ├── /brands/
│   │   ├── page.tsx              # (Story 2.1) 브랜드 포트폴리오
│   │   ├── /wing/
│   │   │   └── page.tsx          # (Story 2.2) Wing 상세
│   │   ├── /cocolic/
│   │   │   └── page.tsx          # (Story 2.3) Cocolic 상세
│   │   └── /seanex/
│   │       └── page.tsx          # (Story 2.4) Seanex 상세
│   ├── /partnership/
│   │   ├── page.tsx              # (Story 3.1) B2B 파트너십
│   │   └── /api/
│   │       └── submit/
│   │           └── route.ts      # (Story 3.1) 폼 제출 API
│   ├── /api/
│   │   └── instagram/
│   │       └── route.ts          # (Story 3.2) 인스타그램 피드 API
│   │
│   ├── layout.tsx                # 2. 루트 레이아웃
│   ├── page.tsx                  # (Story 1.3) 메인 페이지
│   └── globals.css               # Tailwind CSS 기본 설정
│
├── /components/                # 3. 재사용 가능 컴포넌트
│   └── /ui/                    # shadcn/ui 컴포넌트
│       ├── button.tsx
│       ├── input.tsx
│       └── form.tsx
│
├── /lib/                       # 4. 유틸리티 및 헬퍼 함수
│   ├── zod-schemas.ts          # Zod 스키마 정의
│   └── instagram-api.ts        # Instagram API 헬퍼
│
├── /public/                    # 5. 정적 에셋
│   └── /images/
│       ├── brands/
│       │   ├── wing-logo.jpg
│       │   ├── cocolic-logo.jpg
│       │   └── seanex-logo.png
│       └── elicon-logo.png
│
├── /tests/                     # 6. E2E 테스트
│   ├── contact-form.spec.ts    # (Story 3.1) 문의 폼 테스트
│   └── brand-pages.spec.ts     # (Story 2.2-2.4) 브랜드 페이지 테스트
│
├── tailwind.config.ts          # Tailwind CSS 설정
├── next.config.mjs             # Next.js 설정
└── tsconfig.json               # TypeScript 설정
```

---

## 5. Data Flow & API Integration (데이터 흐름 및 API 연동)

### 5.1 B2B 문의 폼 데이터 흐름 (Story 3.1)

```
1. 사용자 입력
   └─> /partnership 페이지
       └─> ContactForm 컴포넌트
           └─> React Hook Form + Zod 유효성 검사

2. 폼 제출
   └─> /api/partnership/submit (POST)
       └─> Vercel Serverless Function
           ├─> Email API (Resend)
           │   └─> 관리자 이메일 전송
           └─> SMS API (Aligo, 선택)
               └─> 관리자 SMS 알림

3. 응답
   └─> 사용자에게 성공/실패 메시지
```

### 5.2 인스타그램 피드 연동 (Story 3.2)

```
1. 페이지 로드
   └─> 메인 페이지 또는 브랜드 상세 페이지
       └─> InstagramFeed 컴포넌트

2. API 호출
   └─> /api/instagram?brand=wing (GET)
       └─> Vercel Serverless Function
           └─> Instagram Basic Display API
               └─> 최신 5개 게시물 조회

3. 캐싱
   └─> Vercel Edge Functions에서 1시간 캐싱
       └─> API 호출 최소화

4. 렌더링
   └─> 이미지, 캡션, 링크 표시
```

---

## 6. Rendering Strategy (렌더링 전략)

| 페이지 | 렌더링 방식 | 이유 |
| :--- | :--- | :--- |
| `/` (메인) | **SSG** (Static Site Generation) | SEO 최적화(NFR1), 빠른 로딩(NFR4) |
| `/about` | **SSG** | SEO 최적화, 정적 콘텐츠 |
| `/brands` | **SSG** | SEO 최적화, 정적 콘텐츠 |
| `/brands/wing` | **SSG** | SEO 최적화, 정적 콘텐츠 |
| `/brands/cocolic` | **SSG** | SEO 최적화, 정적 콘텐츠 |
| `/brands/seanex` | **SSG** | SEO 최적화, 정적 콘텐츠 |
| `/partnership` | **SSG** + Client-Side Form | SEO + 동적 폼 처리 |
| `/api/partnership/submit` | **Serverless Function** | B2B 문의 폼 제출 처리 |
| `/api/instagram` | **Serverless Function** | 인스타그램 피드 동적 조회 |

**Rationale (근거):**
- **SSG**: 대부분의 페이지는 정적 콘텐츠이므로 빌드 시 생성하여 CDN에서 제공. SEO(NFR1) 및 성능(NFR4) 극대화.
- **Serverless Functions**: B2B 문의 폼 제출 및 인스타그램 피드 조회는 서버리스 함수로 처리하여 백엔드 인프라 불필요.

---

## 7. SEO & Performance Optimization (SEO 및 성능 최적화)

### 7.1 SEO 최적화 (NFR1)

**구현 사항:**
1. **메타 태그**: 모든 페이지에 `<title>`, `<meta description>`, Open Graph 태그 포함
2. **시맨틱 HTML**: `<header>`, `<main>`, `<article>`, `<section>` 등 시맨틱 태그 사용
3. **구조화된 데이터 (JSON-LD)**:
   - Organization schema (엘리콘 회사 정보)
   - Product schema (브랜드별 제품 정보)
4. **Sitemap.xml & Robots.txt**: 자동 생성
5. **이미지 Alt Text**: 모든 이미지에 대체 텍스트 포함

### 7.2 성능 최적화 (NFR4)

**구현 사항:**
1. **이미지 최적화**:
   - `next/image` 컴포넌트 사용
   - WebP 포맷 자동 변환
   - Lazy Loading 적용
2. **코드 분할 (Code Splitting)**:
   - 페이지별 자동 분할
   - 동적 import로 필요 시 로드
3. **CSS 최적화**:
   - Tailwind CSS purge로 미사용 스타일 제거
   - Critical CSS 인라인
4. **폰트 최적화**:
   - `next/font`로 Pretendard 폰트 최적화
   - FOUT (Flash of Unstyled Text) 방지

**목표 지표:**
- First Contentful Paint (FCP): < 2초
- Largest Contentful Paint (LCP): < 3초
- Lighthouse Performance Score: >= 90

---

## 8. Security & Privacy (보안 및 개인정보 보호)

### 8.1 보안 조치

1. **환경 변수 관리**:
   - API 키는 `.env.local`에 저장
   - Vercel 환경 변수로 프로덕션 배포
2. **폼 유효성 검사**:
   - 클라이언트: React Hook Form + Zod
   - 서버: Zod 스키마 재검증
3. **Rate Limiting**:
   - Vercel Edge Middleware로 API 호출 제한
   - 문의 폼: IP당 10회/시간 제한
4. **HTTPS**: Vercel 자동 SSL 인증서

### 8.2 개인정보 보호

1. **데이터 최소화**:
   - B2B 문의 폼: 업체명, 연락처만 수집
2. **데이터 저장**:
   - 이메일/SMS 전송 후 서버에 저장하지 않음
   - 필요 시 외부 CRM 연동 검토

---

## 9. Deployment & CI/CD (배포 및 지속적 통합/배포)

### 9.1 배포 전략

**플랫폼**: Vercel

**배포 흐름**:
```
1. Git Push (main 브랜치)
   └─> Vercel 자동 감지
       └─> 빌드 시작
           ├─> Next.js 빌드
           ├─> Tailwind CSS 처리
           └─> 이미지 최적화

2. 빌드 완료
   └─> Vercel Edge Network에 배포
       └─> 전 세계 CDN으로 전파

3. 배포 완료
   └─> 고유 URL 생성
   └─> 프로덕션 도메인 자동 업데이트
```

### 9.2 환경 분리

- **Development**: 로컬 개발 환경 (`npm run dev`)
- **Preview**: PR별 자동 생성 (Vercel Preview Deployments)
- **Production**: main 브랜치 배포 (elicon.com)

### 9.3 모니터링

- **Vercel Analytics**: 페이지 성능 모니터링
- **Vercel Logs**: 서버리스 함수 로그
- **향후 확장 (NFR6)**: Google Analytics (Firebase) 연동 고려

---

## 10. Testing Strategy (테스트 전략)

### 10.1 테스트 레벨

1. **Unit Tests**: (선택 사항)
   - 유틸리티 함수 테스트
2. **Component Tests**: (선택 사항)
   - React Testing Library로 컴포넌트 테스트
3. **E2E Tests**: (필수)
   - Playwright로 주요 사용자 흐름 테스트
   - B2B 문의 폼 제출 (Story 3.1)
   - 브랜드 페이지 네비게이션 (Story 2.2-2.4)

### 10.2 테스트 자동화

- **Git Pre-commit Hook**: ESLint, Prettier 자동 실행
- **CI Pipeline**: Vercel 빌드 시 E2E 테스트 자동 실행 (선택)

---

## 11. Future Enhancements (향후 개선 사항)

### 11.1 분석 연동 (Epic 5)

- **Google Analytics (Firebase)**: 페이지뷰, 이벤트 추적
- **Hotjar**: 사용자 행동 분석 (히트맵, 세션 녹화)

### 11.2 디자인 시스템 통합 (NFR5)

- **1단계**: `_shared/design-system` 기본 가이드 준수
- **2단계**: `01_wing` 디자인 시스템 완성 후 통합
- **3단계**: `_shared/components/` 폴더로 재사용 컴포넌트 이동

### 11.3 CMS 연동 (선택)

- **Markdown 기반**: 간단한 콘텐츠 관리
- **Headless CMS**: Contentful, Sanity 등 고려

---

## 12. Appendix (부록)

### 12.1 변경 이력 (Change Log)

| 날짜 | 버전 | 변경 내용 | 작성자 |
| :--- | :--- | :--- | :--- |
| 2025-11-15 | v1.0 | 아키텍처 초기 설계 | Architect (Winston) |

### 12.2 참고 문서

- [Project Brief](./project-brief.md)
- [PRD](./prd.md)
- [Front-end Spec](./front-end-spec.md)
- [04_marketing_park Architecture](../../04_marketing_park/docs/front-end-architecture.md)

---

**문서 작성:** Architect (Winston)
**최종 검토:** 서대표
**다음 단계:** Next.js 프로젝트 생성 및 Epic 1 개발 시작
