# Runbook, Incident Response & Disaster Recovery

## 문서 정보
- **프로젝트**: [영업]01_2_elicon_homepage
- **작성일**: 2026-01-11
- **Owner**: 서종원

---

## 1. 운영 Runbook

### 시스템 시작
```bash
# TODO: 시작 명령어
docker-compose up -d
```

### 시스템 종료
```bash
# TODO: 종료 명령어
docker-compose down
```

### Health Check
```bash
# TODO: 헬스 체크 명령어
curl https://elicon_homepage.com/health
```

---

## 2. 일반적인 문제 해결

### 문제: API 응답 느림
**증상**: P95 >500ms

**진단**:
```bash
# 1. 로그 확인
tail -f /var/log/elicon_homepage.log

# 2. 데이터베이스 쿼리 확인
TODO: Slow query log

# 3. 리소스 사용률 확인
top
```

**해결 방안**:
1. TODO: 캐시 확인
2. TODO: 인덱스 확인
3. TODO: 스케일 업/아웃

---

### 문제: 데이터베이스 연결 실패
**증상**: "Connection refused"

**진단**:
```bash
# TODO: DB 상태 확인
pg_isready -h localhost -p 5432
```

**해결 방안**:
1. TODO: DB 재시작
2. TODO: 연결 풀 설정 확인

---

## 3. Incident Response

### Severity Levels
- **P0 (Critical)**: 서비스 전체 중단 - 즉시 대응
- **P1 (High)**: 핵심 기능 장애 - 1시간 내 대응
- **P2 (Medium)**: 부분 기능 장애 - 4시간 내 대응
- **P3 (Low)**: 경미한 문제 - 1일 내 대응

### Incident Workflow
```
[탐지] → [알림] → [담당자 배정] → [조사] → [완화] → [복구] → [사후 분석]
```

### On-call Rotation
| Week | Primary | Secondary | Escalation |
|------|---------|-----------|------------|
| TODO | TODO | TODO | TODO |

---

## 4. Disaster Recovery (DR)

### 재해 시나리오
1. **데이터센터 장애**: TODO: 대응 절차
2. **데이터 손실**: TODO: 백업 복구
3. **보안 침해**: TODO: 격리 및 복구

### Recovery Time Objective (RTO)
- **Critical Services**: TODO: 1시간
- **Important Services**: TODO: 4시간
- **Normal Services**: TODO: 24시간

### Recovery Point Objective (RPO)
- **Database**: TODO: 1시간 (백업 주기)
- **Files**: TODO: 24시간

### 백업 & 복구 절차

**백업**:
```bash
# TODO: 백업 명령어
pg_dump elicon_homepage > backup.sql
```

**복구**:
```bash
# TODO: 복구 명령어
psql elicon_homepage < backup.sql
```

---

## 5. 비상 연락망

| 역할 | 이름 | 연락처 | 가용 시간 |
|------|------|--------|----------|
| Team Lead | TODO | TODO | 24/7 |
| SRE | TODO | TODO | 업무 시간 |
| Security | TODO | TODO | 24/7 |

---

## 6. 사후 분석 (Postmortem)

**템플릿**:
1. **요약**: 무엇이 잘못되었는가
2. **타임라인**: 시간순 이벤트
3. **근본 원인**: 왜 발생했는가
4. **영향 범위**: 얼마나 영향 있었는가
5. **학습 사항**: 무엇을 배웠는가
6. **액션 아이템**: 재발 방지 조치