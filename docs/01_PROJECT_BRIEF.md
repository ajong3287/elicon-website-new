# Project Brief (1 pager)

> 이 문서는 프로젝트 방향을 고정합니다. 변경 시 ADR 필수.

## 목적(Why)

- **무엇을 해결하는가**: B2B 유통 전문 기업으로서 신규 파트너사 발굴 채널 부재 및 브랜드 인지도 부족 문제 해결
- **성공 기준(정량 KPI)**:
  - 월 10건 이상 신규 B2B 유통 문의 확보
  - LCP (Largest Contentful Paint) < 3초
  - Lighthouse 성능 점수 80점 이상

## 범위(What)

### In Scope (이번 릴리즈에 포함)
- [x] Next.js 15 기반 반응형 홈페이지 구축
- [x] 파트너십 문의 폼 (B2B 파트너용)
- [x] 브랜드 페이지 (소비자용 eliconstore.com 연결)
- [x] Vercel 자동 배포 (GitHub 연동)
- [x] SEO 최적화 (메타태그, OG 이미지)

### Out of Scope (명시적으로 제외)
- [ ] 결제 시스템 (eliconstore.com에서 처리)
- [ ] 인스타그램 API 연동 (정적 이미지 사용)

## 사용자(Who)

- **Primary Persona**: B2B 유통 파트너 (바이어, 유통사 담당자)
- **Secondary Persona**: 소비자 (브랜드 확인 후 eliconstore.com으로 이동)
- **JTBD 한 줄**: 엘리콘과 파트너십을 맺어 해외 브랜드를 국내에 유통하고 싶다

## 일정(When)

- **시작일**: 2024-11-17
- **목표 배포일**: 2024-12-31 (Phase 1 완료)

## 리스크(Top 3)

1. 문의 폼 스팸 → reCAPTCHA 또는 Honeypot 적용 검토
2. Vercel 무료 플랜 제한 → 트래픽 모니터링 및 유료 전환 검토
3. 브랜드 페이지 콘텐츠 부족 → 기존 eliconstore.com 자산 활용

---

**최종 업데이트**: 2026-01-11
**작성자**: 클로드코드
