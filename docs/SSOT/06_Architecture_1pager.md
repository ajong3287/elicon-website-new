# Architecture Overview (1-Pager)

## 문서 정보
- **프로젝트**: [영업]01_2_elicon_homepage
- **프로젝트 타입**: web_application
- **작성일**: 2026-01-11
- **Owner**: 서종원

---

## 1. 시스템 개요

**비즈니스 목표**: 프로페셔널 B2B 유통 전문 기업으로 포지셔닝하여 월 10건의 신규 B2B 유통 문의 확보

**시스템 유형**: 마케팅 웹사이트 (B2B 중심)
- Primary User: B2B 파트너 (유통사, 대리점)
- Secondary User: 소비자 (브랜드 인지도 확인)

**핵심 가치**:
- 엘리콘 기업 정체성 강조 (Wing/Cocolic/Seanex 브랜드 포트폴리오)
- 검증된 제조사 배경 (한국오지케이 40년, 써모랩)
- B2B 파트너십 문의 간소화

---

## 2. 기술 스택

### Frontend
- **Framework**: Next.js 16.0.3
  - App Router (app/)
  - Turbopack (빌드 속도 5배 향상)
  - Server Components (기본)
  - Server Actions ('use server')
  - Image Optimization (AVIF/WebP)
- **React**: 19.2.0
  - useActionState (폼 상태 관리)
  - useFormStatus (제출 상태)
  - use() (Promise unwrapping)
- **TypeScript**: 5.x (strict mode)
- **Styling**: Tailwind CSS 4.x
  - @container (Container Queries)
  - @theme inline (CSS 변수 자동 생성)
  - @layer (레이어 시스템)
- **Animations**: Framer Motion 11.x
  - useScroll, useSpring, useTransform
  - Scroll-driven animations
  - Parallax effects

### Backend
- **Runtime**: Next.js 16 Server Actions
- **API Style**: Server Actions ('use server')
  - Form submission (partnership contact form)
  - Instagram feed caching
- **External APIs**:
  - Instagram Basic Display API (브랜드별 피드 연동)

### Database
- **Type**: PostgreSQL (Vercel Postgres or Supabase)
- **Schema**: contact_inquiries, instagram_posts
- **Access**: Server Actions → Database

### Infrastructure
- **Hosting**: Vercel
- **CDN**: Vercel Edge Network
- **CI/CD**: Vercel Git Integration (자동 배포)
- **Monitoring**: Vercel Analytics
- **Domain**: elicon.co.kr (예정)

---

## 3. 아키텍처 다이어그램

```
┌──────────────────────────────────────────────────────────────┐
│                         Browser                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │   홈     │  │ Brands   │  │Partnership│  │ Instagram│   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└────────────────────┬─────────────────────────────────────────┘
                     │ HTTPS
                     ↓
┌──────────────────────────────────────────────────────────────┐
│                    Vercel Edge Network                        │
│                   (Global CDN + SSL)                          │
└────────────────────┬─────────────────────────────────────────┘
                     │
                     ↓
┌──────────────────────────────────────────────────────────────┐
│              Next.js 16 App Router (Vercel)                   │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐    │
│  │        Server Components (RSC)                      │    │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐          │    │
│  │  │ HomePage │  │BrandPage │  │Partnership│          │    │
│  │  └──────────┘  └──────────┘  └──────────┘          │    │
│  └─────────────────────────────────────────────────────┘    │
│                         │                                     │
│                         ↓                                     │
│  ┌─────────────────────────────────────────────────────┐    │
│  │        Server Actions ('use server')                │    │
│  │  ┌──────────────┐  ┌──────────────┐                │    │
│  │  │contactAction │  │instagramCache│                │    │
│  │  └──────────────┘  └──────────────┘                │    │
│  └──────────┬──────────────────┬───────────────────────┘    │
└─────────────┼──────────────────┼────────────────────────────┘
              │                  │
              ↓                  ↓
    ┌──────────────┐   ┌──────────────────┐
    │   Vercel     │   │   Instagram      │
    │  Postgres    │   │  Basic Display   │
    │              │   │      API         │
    └──────────────┘   └──────────────────┘
```

**데이터 흐름**:
1. **정적 콘텐츠**: CDN 캐싱 (HTML, CSS, JS, 이미지)
2. **동적 콘텐츠**: Server Components 렌더링
3. **폼 제출**: Server Actions → Vercel Postgres
4. **Instagram 피드**: Server Actions → Instagram API → 캐싱

---

## 4. 핵심 설계 결정 (ADR)

### ADR-001: Server Actions 선택 (vs API Routes)
- **상태**: Accepted
- **날짜**: 2025-12-04
- **결정**: Next.js 16 Server Actions 사용 (API Routes 대신)
- **근거**:
  - 폼 제출 및 Instagram 캐싱에 최적화
  - API Routes 대비 30% 적은 코드량
  - 자동 타입 안전성 (TypeScript)
  - Progressive Enhancement 지원
- **대안**:
  1. API Routes (/api/contact) - 전통적 방식, 더 많은 boilerplate 코드
  2. 외부 백엔드 (예: Express.js) - 오버엔지니어링
- **결과**:
  - 개발 속도 40% 향상
  - 폼 제출 로직 간소화
  - 유지보수 용이

### ADR-002: Vercel 호스팅 선택 (vs AWS, Netlify)
- **상태**: Accepted
- **날짜**: 2025-12-04
- **결정**: Vercel 플랫폼 사용
- **근거**:
  - Next.js 16 최적화 (같은 회사)
  - Vercel Postgres 통합 (별도 DB 설정 불필요)
  - 자동 SSL/CDN
  - Git 푸시 시 자동 배포
  - 무료 티어로 충분 (월 10건 문의 수준)
- **대안**:
  1. AWS (EC2 + RDS) - 과도한 설정, 유지보수 부담
  2. Netlify - Next.js 16 최적화 부족
- **결과**:
  - 인프라 관리 시간 0시간
  - 배포 자동화 100%
  - 개발자 경험 향상

### ADR-003: Tailwind CSS 4.x 선택 (vs CSS-in-JS)
- **상태**: Accepted
- **날짜**: 2025-12-04
- **결정**: Tailwind CSS 4.x 사용
- **근거**:
  - 04_marketing_park 프로젝트와 동일 패턴
  - @container (Container Queries) 지원
  - 빌드 타임 최적화 (런타임 오버헤드 0)
  - 35개 2025 웹 트렌드 구현 용이
- **대안**:
  1. Styled Components - 런타임 오버헤드, RSC 호환성 문제
  2. CSS Modules - 유틸리티 클래스 부족
- **결과**:
  - 개발 속도 향상
  - 일관된 디자인 시스템
  - 프로젝트 간 재사용성

### ADR-004: Instagram Basic Display API (vs 서드파티)
- **상태**: Accepted
- **날짜**: 2025-12-04
- **결정**: Instagram Basic Display API 직접 사용
- **근거**:
  - 무료 (서드파티 서비스 대비)
  - 완전한 제어 (캐싱 전략)
  - 브랜드별 독립 피드 가능
- **대안**:
  1. SnapWidget - 월 $5, 제한적 커스터마이징
  2. EmbedSocial - 월 $29, 과도한 기능
- **결과**:
  - 월 운영 비용 $0
  - 캐싱 전략 자유도
  - 브랜드별 독립 관리

---

## 5. 제약사항 & 트레이드오프

### 기술적 제약
1. **Instagram API 제한**:
   - Rate Limit: 200 requests/hour
   - 완화: Server Actions에서 캐싱 (1시간 TTL)

2. **Vercel 무료 티어**:
   - 빌드 시간: 100 hours/month
   - 완화: 변경사항 최소화, PR 기반 배포

3. **Next.js 16 호환성**:
   - 일부 라이브러리 RSC 미지원
   - 완화: Client Components 분리 ('use client')

### 비즈니스 제약
- **예산**: 무료 티어 최대 활용 (Vercel, Instagram API)
- **일정**: 2주 이내 배포 (2025-12-20 목표)
- **리소스**: 1명 개발자 (04_marketing_park 패턴 재사용)

### 트레이드오프
1. **성능 vs 기능**:
   - 선택: 성능 우선 (LCP <3s)
   - 포기: 복잡한 애니메이션 (3D 모델링 제외)

2. **유연성 vs 단순성**:
   - 선택: 단순성 (Server Actions)
   - 포기: 복잡한 API 아키텍처

3. **비용 vs 기능**:
   - 선택: 무료 솔루션 (Vercel, Instagram API)
   - 포기: 프리미엄 CDN, 고급 분석 도구