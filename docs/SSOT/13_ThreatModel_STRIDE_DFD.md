# Threat Model (STRIDE) & Data Flow Diagram

## 문서 정보
- **프로젝트**: [영업]01_2_elicon_homepage
- **작성일**: 2026-01-11
- **Owner**: 서종원

---

## 1. Data Flow Diagram (DFD)

```
[User] → [Web App] → [API Server] → [Database]
              ↓
        [Auth Service]
```

**Trust Boundaries**:
- TODO: 경계 1 - 인터넷 ↔ Web App
- TODO: 경계 2 - Web App ↔ API Server

---

## 2. STRIDE 위협 분석

### S - Spoofing (스푸핑)
| 위협 | 영향 | 완화 방안 | 우선순위 |
|------|------|----------|---------|
| TODO: 사용자 신원 도용 | High | JWT + 2FA | High |

### T - Tampering (변조)
| 위협 | 영향 | 완화 방안 | 우선순위 |
|------|------|----------|---------|
| TODO | TODO | TODO | TODO |

### R - Repudiation (부인)
| 위협 | 영향 | 완화 방안 | 우선순위 |
|------|------|----------|---------|
| TODO | TODO | Audit Log | TODO |

### I - Information Disclosure (정보 노출)
| 위협 | 영향 | 완화 방안 | 우선순위 |
|------|------|----------|---------|
| TODO | TODO | 암호화 | TODO |

### D - Denial of Service (서비스 거부)
| 위협 | 영향 | 완화 방안 | 우선순위 |
|------|------|----------|---------|
| TODO | TODO | Rate Limiting | TODO |

### E - Elevation of Privilege (권한 상승)
| 위협 | 영향 | 완화 방안 | 우선순위 |
|------|------|----------|---------|
| TODO | TODO | RBAC | TODO |

---

## 3. 위협 우선순위

1. **Critical**: TODO
2. **High**: TODO
3. **Medium**: TODO
4. **Low**: TODO

---

## 4. 완화 로드맵

| 분기 | 완화 조치 | 담당자 | 상태 |
|------|----------|--------|------|
| Q1 | TODO | TODO | TODO |