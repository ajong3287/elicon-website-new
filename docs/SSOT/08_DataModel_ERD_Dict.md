# Data Model, ERD & Data Dictionary

## 문서 정보
- **프로젝트**: [영업]01_2_elicon_homepage
- **작성일**: 2026-01-11
- **Owner**: 서종원

---

## 1. Entity-Relationship Diagram (ERD)

```
[User] 1---N [Project] 1---N [Task]
```

TODO: 실제 ERD 다이어그램

---

## 2. 주요 엔티티

### Entity 1: User
| 필드 | 타입 | 제약 | 설명 |
|------|------|------|------|
| id | UUID | PK | 사용자 ID |
| email | String | Unique, NOT NULL | 이메일 |
| created_at | Timestamp | NOT NULL | 생성일시 |

### Entity 2: TODO
| 필드 | 타입 | 제약 | 설명 |
|------|------|------|------|
| TODO | TODO | TODO | TODO |

---

## 3. 관계 (Relationships)

- **User ↔ Project**: 1:N (한 사용자 여러 프로젝트)
- TODO: 다른 관계

---

## 4. 데이터 딕셔너리

### Enum: UserRole
- `admin`: 관리자
- `user`: 일반 사용자
- `guest`: 게스트

### Constants
- `MAX_FILE_SIZE`: 10MB
- TODO: 다른 상수

---

## 5. 데이터 흐름

```
[Client] → [Validation] → [Business Logic] → [Database]
                                   ↓
                            [Audit Log]
```