# Non-Functional Requirements (NFR)

## 문서 정보
- **프로젝트**: [영업]01_2_elicon_homepage
- **작성일**: 2026-01-11
- **Owner**: 서종원

---

## 1. 성능 요구사항 (Performance)

### 응답 시간
- **API 응답**: < 200ms (P95)
- **페이지 로드**: < 2초 (3G 네트워크)
- **검색 쿼리**: < 500ms

### 처리량 (Throughput)
- **동시 사용자**: TODO: 1,000명
- **TPS (Transactions Per Second)**: TODO: 100 TPS

---

## 2. 확장성 (Scalability)

- **수평 확장**: Auto-scaling 지원
- **데이터 증가**: 연간 TODO: 10배 증가 대응
- **트래픽 급증**: TODO: 5배 급증 처리 가능

---

## 3. 가용성 (Availability)

- **목표 Uptime**: TODO: 99.9% (월 43분 다운타임)
- **계획된 유지보수**: TODO: 월 1회, 새벽 시간대
- **장애 복구 시간 (MTTR)**: TODO: 30분

---

## 4. 보안 (Security)

- **인증**: OAuth 2.0 / JWT
- **암호화**: TLS 1.3, AES-256
- **취약점 스캔**: TODO: 주 1회
- **침투 테스트**: TODO: 분기 1회

---

## 5. 사용성 (Usability)

- **학습 시간**: TODO: 신규 사용자 30분 내 핵심 기능 숙지
- **접근성**: WCAG 2.1 Level AA 준수
- **브라우저 지원**: Chrome, Firefox, Safari, Edge (최신 2개 버전)

---

## 6. 유지보수성 (Maintainability)

- **코드 커버리지**: TODO: >80%
- **기술 부채 관리**: TODO: 매 스프린트 20% 시간 할당
- **문서화**: 모든 API, 주요 로직 문서화 필수

---

## 7. 모니터링 & 로깅

- **로그 보관**: TODO: 90일
- **메트릭 수집**: TODO: 실시간
- **알림 임계치**: TODO: 에러율 >1%, 응답시간 >500ms