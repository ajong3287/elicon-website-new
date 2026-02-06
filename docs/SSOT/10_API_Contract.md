# API Contract Specification

## 문서 정보
- **프로젝트**: [영업]01_2_elicon_homepage
- **작성일**: 2026-01-11
- **Owner**: 서종원
- **API 버전**: v1.0

---

## 1. Base URL

```
Production: https://api.elicon_homepage.com/v1
Staging: https://api-staging.elicon_homepage.com/v1
```

---

## 2. Authentication

**방식**: Bearer Token / API Key

```http
Authorization: Bearer <token>
```

---

## 3. API Endpoints

### GET /users
**목적**: 사용자 목록 조회

**Request**:
```http
GET /users?page=1&limit=10
```

**Response** (200 OK):
```json
{
  "data": [
    {
      "id": "uuid",
      "email": "user@example.com"
    }
  ],
  "meta": {
    "total": 100,
    "page": 1
  }
}
```

**Error** (401 Unauthorized):
```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid token"
  }
}
```

---

### POST /users
**목적**: TODO

**Request**:
```json
{
  "email": "new@example.com"
}
```

**Response** (201 Created):
```json
{
  "id": "new-uuid",
  "email": "new@example.com"
}
```

---

## 4. Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| UNAUTHORIZED | 401 | 인증 실패 |
| FORBIDDEN | 403 | 권한 부족 |
| NOT_FOUND | 404 | 리소스 없음 |
| VALIDATION_ERROR | 400 | 입력 검증 실패 |

---

## 5. Rate Limiting

- **일반 사용자**: 100 requests / 분
- **프리미엄**: 1000 requests / 분

**Response Headers**:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1234567890
```