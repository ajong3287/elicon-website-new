# 엘리콘 폴더 구조 개선 계획

## 현재 상황
- 엘리콘은 자사 프로젝트로 자료가 방대함
- 다른 고객사 대비 10배 이상의 문서와 자료 보유
- 체계적인 구조 없이는 관리 어려움

## 개선된 엘리콘 폴더 구조

```
1_elicon/
├── elicon-nextjs/          # 메인 웹사이트 프로젝트
│   ├── src/
│   ├── public/
│   └── [개발 파일들]
│
├── docs/                   # 문서 중앙화
│   ├── strategy/          # 전략 및 기획
│   │   ├── homepage/      # 홈페이지 전략
│   │   ├── b2b/          # B2B 전략
│   │   └── marketing/     # 마케팅 전략
│   │
│   ├── brands/            # 브랜드별 문서
│   │   ├── wing/         # Wing 브랜드
│   │   ├── cocolic/      # Cocolic 브랜드
│   │   └── seanex/       # Seanex 브랜드
│   │
│   ├── technical/         # 기술 문서
│   │   ├── architecture/  # 시스템 설계
│   │   ├── api/          # API 문서
│   │   └── deployment/    # 배포 관련
│   │
│   ├── history/          # 회사 역사
│   │   ├── timeline/     # 연도별 정리
│   │   └── milestones/   # 주요 이정표
│   │
│   └── operations/       # 운영 문서
│       ├── processes/    # 업무 프로세스
│       └── guidelines/   # 가이드라인
│
├── assets/               # 디자인/미디어 자산
│   ├── images/
│   ├── videos/
│   └── brand-assets/
│
├── logs/                 # 작업 로그
│   ├── 2025/
│   │   ├── 01-january/
│   │   └── 07-july/
│   └── archive/
│
├── research/             # 리서치 자료
│   ├── competitors/      # 경쟁사 분석
│   ├── market/          # 시장 조사
│   └── trends/          # 트렌드 분석
│
└── CLAUDE.md            # 프로젝트 지침서

## 다른 고객사와의 차이점

### 일반 고객사 (2_js-electronics 등)
```
2_js-electronics/
├── src/              # 소스 코드
├── docs/             # 간단한 문서
├── logs/             # 작업 로그
└── CLAUDE.md
```

### 엘리콘 (자사)
- 5배 이상의 폴더 깊이
- 체계적인 문서 분류
- 브랜드별 관리
- 연도별 로그 관리
- 리서치 자료 별도 관리

## 이점
1. **확장성**: 자료가 늘어나도 체계적 관리 가능
2. **검색성**: 카테고리별로 빠른 검색
3. **협업**: 팀원들이 쉽게 찾을 수 있음
4. **버전관리**: 시간순 정리로 히스토리 추적 용이