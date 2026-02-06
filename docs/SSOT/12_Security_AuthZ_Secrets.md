# Security, Authorization & Secrets Management

## 문서 정보
- **프로젝트**: [영업]01_2_elicon_homepage
- **작성일**: 2026-01-11
- **Owner**: 서종원

---

## 1. 인증 (Authentication)

### 방식
- TODO: OAuth 2.0 / JWT / Session

### 토큰 관리
- **Access Token 유효기간**: TODO: 1시간
- **Refresh Token 유효기간**: TODO: 7일
- **토큰 저장**: TODO: httpOnly cookie / localStorage

---

## 2. 인가 (Authorization)

### 역할 기반 접근 제어 (RBAC)

| Role | Permissions | Scope |
|------|-------------|-------|
| admin | ALL | 전체 |
| user | READ, WRITE | 본인 데이터 |
| guest | READ | 공개 데이터 |

### 리소스별 권한

```
/users
  - admin: CRUD
  - user: R (본인만)

/projects
  - admin: CRUD
  - user: CRUD (본인 프로젝트)
```

---

## 3. Secrets 관리

### 환경변수
```bash
# .env.example
DATABASE_URL=postgresql://...
API_KEY=xxx
JWT_SECRET=xxx
```

### Secrets Manager
- **도구**: TODO: AWS Secrets Manager / Vault
- **로테이션**: TODO: 90일마다 자동 교체
- **접근 제어**: TODO: IAM Role 기반

---

## 4. 보안 헤더

```http
Strict-Transport-Security: max-age=31536000
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Content-Security-Policy: default-src 'self'
```

---

## 5. 입력 검증 & Sanitization

- **SQL Injection 방지**: Prepared Statements
- **XSS 방지**: Output Encoding
- **CSRF 방지**: CSRF Token

---

## 6. 보안 체크리스트

- [ ] TODO: HTTPS 강제
- [ ] TODO: Rate Limiting
- [ ] TODO: 취약점 스캔 자동화
- [ ] TODO: 정기 보안 감사