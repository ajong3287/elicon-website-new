# Deployment, CI/CD & Rollback

## 문서 정보
- **프로젝트**: [영업]01_2_elicon_homepage
- **작성일**: 2026-01-11
- **Owner**: 서종원

---

## 1. 환경 (Environments)

| 환경 | 용도 | URL | 자동 배포 |
|------|------|-----|----------|
| Development | 개발 | TODO | 매 커밋 |
| Staging | QA/테스트 | TODO | 매 PR 머지 |
| Production | 운영 | TODO | 수동 승인 |

---

## 2. CI/CD 파이프라인

### CI (Continuous Integration)
```yaml
# .github/workflows/ci.yml
on: [push, pull_request]
jobs:
  test:
    - Lint
    - Type Check
    - Unit Tests
    - Integration Tests
```

### CD (Continuous Deployment)
```yaml
# .github/workflows/deploy.yml
on:
  push:
    branches: [main]
jobs:
  deploy:
    - Build
    - Deploy to Staging
    - E2E Tests
    - [Manual Approval]
    - Deploy to Production
```

---

## 3. 배포 전략

### Blue-Green Deployment
1. Green 환경에 새 버전 배포
2. Health Check 통과 확인
3. 트래픽 Green으로 전환
4. Blue 환경 유지 (롤백용)

### Canary Deployment
1. 10% 트래픽만 신규 버전으로
2. 메트릭 모니터링 (30분)
3. 정상이면 100%로 확대
4. 이상 시 즉시 롤백

---

## 4. 롤백 절차

### 자동 롤백 조건
- Error Rate >10%
- P95 Latency >1초
- Health Check 실패

### 수동 롤백
```bash
# 1. 이전 버전으로 즉시 전환
kubectl rollout undo deployment/elicon_homepage

# 2. 검증
kubectl rollout status deployment/elicon_homepage

# 3. 로그 확인
kubectl logs -f deployment/elicon_homepage
```

**목표**: 5분 내 롤백 완료

---

## 5. 배포 체크리스트

**Pre-deploy**:
- [ ] PR 리뷰 완료
- [ ] 모든 테스트 통과
- [ ] 보안 스캔 통과
- [ ] DB 마이그레이션 준비

**Post-deploy**:
- [ ] Health Check 정상
- [ ] 메트릭 모니터링 (30분)
- [ ] 사용자 피드백 확인
- [ ] 롤백 플랜 준비

---

## 6. 장애 대응

**Incident Response Time**:
- **탐지**: <5분
- **완화**: <15분
- **복구**: <1시간
- **사후 분석**: 24시간 내