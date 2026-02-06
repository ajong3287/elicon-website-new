# Information Architecture & Wireflow

## 문서 정보
- **프로젝트**: [영업]01_2_elicon_homepage
- **작성일**: 2026-01-11
- **Owner**: 서종원

---

## 1. 사이트맵 / 화면 구조

```
elicon_homepage/
├── / (홈)
│   ├── Hero Section (엘리콘 기업 정체성)
│   ├── Brands Section (Wing, Cocolic, Seanex 포트폴리오)
│   ├── Why Elicon Section (B2B 강점)
│   ├── Process Section (협력 프로세스)
│   └── Partners Section (기존 파트너사)
│
├── /brands
│   ├── /wing (윙피싱 상세)
│   │   ├── 브랜드 철학
│   │   ├── 대표 제품 라인업
│   │   ├── 제조사 정보 (한국오지케이 40년)
│   │   ├── 인스타그램 피드 (최신 5개)
│   │   └── eliconstore.com 구매하기 CTA
│   │
│   ├── /cocolic (코코릭 상세)
│   │   ├── 브랜드 철학
│   │   ├── 대표 제품 라인업
│   │   ├── 제조사 정보 (써모랩)
│   │   ├── 인스타그램 피드 (최신 5개)
│   │   └── eliconstore.com 구매하기 CTA
│   │
│   └── /seanex (씨넥스 상세)
│       ├── 브랜드 철학
│       ├── 대표 제품 라인업
│       ├── 제조사 정보
│       ├── 인스타그램 피드 (최신 5개)
│       └── eliconstore.com 구매하기 CTA
│
└── /partnership (B2B 파트너십)
    ├── Section 1: 왜 엘리콘과 협력해야 하는가
    ├── Section 2: 성공 사례 (파트너사 로고)
    └── Section 3: 문의 폼 (업체명, 연락처, 문의내용)
```

**외부 연결**:
- Header: 쇼핑몰(eliconstore.com), 블로그
- Footer: eliconstore.com, 블로그, 인스타그램

---

## 2. 주요 화면 Wireflow

### 화면 1: B2B 파트너 Journey
**목적**: B2B 파트너를 엘리콘 강점 인지 → 문의로 유도
**대상 사용자**: Primary User (B2B 파트너)
**비즈니스 목표**: 월 10건 신규 B2B 유통 문의 확보

**구성 요소**:
- Hero Section: "프로페셔널 B2B 유통 전문 기업, 엘리콘"
- Brands Section: Wing, Cocolic, Seanex 포트폴리오
- Partnership Page: 강점 제시 + 문의 폼

**플로우**:
```
[홈 Hero]
  → [엘리콘 기업 정체성 확인]
  → [Brands 포트폴리오 탐색]
  → [Partnership 페이지 이동]
  → [강점 Section 읽기: 검증된 브랜드, 안정적 공급망]
  → [성공 사례 확인]
  → [문의 폼 작성: 업체명, 연락처, 문의내용]
  → [제출 완료]
```

**성공 지표**:
- 문의 폼 도달률 > 5%
- 문의 폼 완료율 > 30%
- 월 문의 건수 ≥ 10건

---

### 화면 2: 소비자 Journey
**목적**: 브랜드 신뢰도 확인 → eliconstore.com 구매 이동
**대상 사용자**: Secondary User (소비자)
**비즈니스 목표**: Wing/Cocolic/Seanex 브랜드 인지도 향상

**구성 요소**:
- 브랜드 카드: 대표 제품 이미지 + 제조사 정보
- 브랜드 상세: 브랜드 철학, 제품 라인업
- 인스타그램 피드: 최신 5개 게시물 (활동 증거)
- 구매하기 CTA: eliconstore.com 연결

**플로우**:
```
[홈]
  → [Brands Section에서 브랜드 카드 클릭]
  → [브랜드 상세 페이지 (/brands/wing|cocolic|seanex)]
  → [브랜드 철학 읽기]
  → [대표 제품 라인업 확인]
  → [제조사 정보 확인: 한국오지케이 40년 or 써모랩]
  → [인스타그램 피드 스크롤: 최신 활동 확인]
  → [구매하기 CTA 클릭]
  → [eliconstore.com 이동]
```

**성공 지표**:
- 브랜드 상세 페이지 도달률 > 20%
- eliconstore.com 클릭률 > 15%
- 인스타그램 프로필 클릭률 > 5%

---

## 3. 네비게이션 구조

| 레벨 1 | 레벨 2 | 레벨 3 | 액세스 권한 |
|--------|--------|--------|------------|
| 홈 (/) | Hero Section | - | 전체 |
| 홈 (/) | Brands Section | - | 전체 |
| 홈 (/) | Why Elicon Section | - | 전체 |
| Brands | Wing (/brands/wing) | 브랜드 철학, 제품, 인스타그램 | 전체 |
| Brands | Cocolic (/brands/cocolic) | 브랜드 철학, 제품, 인스타그램 | 전체 |
| Brands | Seanex (/brands/seanex) | 브랜드 철학, 제품, 인스타그램 | 전체 |
| Partnership | /partnership | 강점, 사례, 문의폼 | 전체 |
| 쇼핑몰 | eliconstore.com | - | 외부 링크 |
| 블로그 | 블로그 URL | - | 외부 링크 |

**Header 네비게이션**:
- 로고 (홈으로 연결)
- Brands (드롭다운: Wing, Cocolic, Seanex)
- Partnership
- 쇼핑몰 (외부)
- 블로그 (외부)
- 다크 모드 토글

**Footer 네비게이션**:
- 회사 정보
- eliconstore.com
- 블로그
- Instagram (Wing, Cocolic, Seanex)

---

## 4. 정보 계층 (Information Hierarchy)

### Primary (핵심 정보) - B2B 파트너 대상
1. **엘리콘 기업 정체성**: "프로페셔널 B2B 유통 전문 기업"
2. **검증된 브랜드 포트폴리오**: Wing, Cocolic, Seanex + 제조사 배경 (40년 업력)
3. **B2B 강점**: 안정적 공급망, 맞춤형 지원 시스템
4. **문의 폼**: 최소 입력 (업체명, 연락처, 문의내용)

### Secondary (보조 정보) - 소비자 대상
1. **브랜드별 철학**: Wing/Cocolic/Seanex 고유 가치
2. **대표 제품 라인업**: 각 브랜드 주력 제품
3. **제조사 정보**: 한국오지케이(40년), 써모랩
4. **인스타그램 피드**: 최신 5개 게시물 (활동 증거)

### Tertiary (부가 정보) - 신뢰도 보강
1. **성공 사례**: 기존 파트너사 로고 (조이웍스, 다솔낚시마트)
2. **협력 프로세스**: B2B 협력 단계 안내
3. **Footer 링크**: eliconstore.com, 블로그, SNS