# Database Schema & Row-Level Security

## 문서 정보
- **프로젝트**: [영업]01_2_elicon_homepage
- **작성일**: 2026-01-11
- **Owner**: 서종원

---

## 1. Schema 정의

### Table: contact_inquiries (파트너십 문의)
```sql
CREATE TABLE contact_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name VARCHAR(200) NOT NULL,
  contact_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  source VARCHAR(50) DEFAULT 'partnership_page', -- 문의 출처
  status VARCHAR(20) DEFAULT 'new', -- new, contacted, closed
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

COMMENT ON TABLE contact_inquiries IS 'B2B 파트너십 문의 데이터 (FR4)';
COMMENT ON COLUMN contact_inquiries.source IS '문의 출처: partnership_page, brand_wing, brand_cocolic, brand_seanex';
COMMENT ON COLUMN contact_inquiries.status IS '문의 상태: new(신규), contacted(연락완료), closed(종료)';
```

### Table: instagram_posts (Instagram 피드 캐시)
```sql
CREATE TABLE instagram_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  brand VARCHAR(20) NOT NULL, -- 'wing', 'cocolic', 'seanex'
  post_id VARCHAR(100) UNIQUE NOT NULL, -- Instagram 게시물 ID
  image_url TEXT NOT NULL,
  caption TEXT,
  permalink TEXT NOT NULL, -- Instagram 게시물 링크
  timestamp TIMESTAMP NOT NULL, -- Instagram 게시 시간
  cached_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP DEFAULT (NOW() + INTERVAL '1 hour')
);

COMMENT ON TABLE instagram_posts IS 'Instagram 피드 캐싱 (FR6, 1시간 TTL)';
COMMENT ON COLUMN instagram_posts.brand IS '브랜드: wing, cocolic, seanex';
COMMENT ON COLUMN instagram_posts.expires_at IS '캐시 만료 시간 (1시간 후)';
```

### Table: analytics_events (향후 확장용)
```sql
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type VARCHAR(50) NOT NULL, -- page_view, button_click, form_submit
  page_url TEXT,
  user_agent TEXT,
  referrer TEXT,
  metadata JSONB, -- 추가 데이터
  created_at TIMESTAMP DEFAULT NOW()
);

COMMENT ON TABLE analytics_events IS '향후 Google Analytics 연동 전 기본 이벤트 추적 (NFR6)';
COMMENT ON COLUMN analytics_events.event_type IS 'page_view, button_click, form_submit, external_link_click';
```

---

## 2. Indexes

```sql
-- contact_inquiries 인덱스
CREATE INDEX idx_contact_inquiries_status ON contact_inquiries(status);
CREATE INDEX idx_contact_inquiries_created ON contact_inquiries(created_at DESC);
CREATE INDEX idx_contact_inquiries_email ON contact_inquiries(email);
CREATE INDEX idx_contact_inquiries_source ON contact_inquiries(source);

-- instagram_posts 인덱스
CREATE INDEX idx_instagram_posts_brand ON instagram_posts(brand);
CREATE INDEX idx_instagram_posts_cached_at ON instagram_posts(cached_at DESC);
CREATE INDEX idx_instagram_posts_expires_at ON instagram_posts(expires_at);
CREATE UNIQUE INDEX idx_instagram_posts_post_id ON instagram_posts(post_id);

-- analytics_events 인덱스
CREATE INDEX idx_analytics_events_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_events_created ON analytics_events(created_at DESC);
```

**인덱스 전략**:
- **contact_inquiries**: status 및 created_at 기준 조회 최적화 (관리자 대시보드)
- **instagram_posts**: brand 및 expires_at 기준 캐시 조회 최적화
- **analytics_events**: event_type 및 created_at 기준 분석 쿼리 최적화

---

## 3. Row-Level Security (RLS) Policies

### Table: contact_inquiries
```sql
-- RLS 활성화
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- 관리자만 모든 문의 조회 가능
CREATE POLICY "Admin can view all inquiries"
  ON contact_inquiries FOR SELECT
  USING (auth.role() = 'admin');

-- 관리자만 상태 변경 가능
CREATE POLICY "Admin can update inquiries"
  ON contact_inquiries FOR UPDATE
  USING (auth.role() = 'admin');

-- Server Actions만 새 문의 삽입 가능 (서버 측 인증)
CREATE POLICY "Server actions can insert inquiries"
  ON contact_inquiries FOR INSERT
  WITH CHECK (true);
```

### Table: instagram_posts
```sql
-- RLS 활성화
ALTER TABLE instagram_posts ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 캐시된 게시물 조회 가능 (공개 데이터)
CREATE POLICY "Anyone can view cached posts"
  ON instagram_posts FOR SELECT
  USING (expires_at > NOW());

-- Server Actions만 캐시 업데이트 가능
CREATE POLICY "Server actions can manage cache"
  ON instagram_posts FOR ALL
  USING (auth.role() = 'service_role');
```

### Table: analytics_events
```sql
-- RLS 활성화
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- 관리자만 이벤트 조회 가능
CREATE POLICY "Admin can view events"
  ON analytics_events FOR SELECT
  USING (auth.role() = 'admin');

-- Server Actions만 이벤트 삽입 가능
CREATE POLICY "Server actions can log events"
  ON analytics_events FOR INSERT
  WITH CHECK (true);
```

---

## 4. 데이터 마이그레이션 전략

### Migration v1.0.0 (초기 스키마)
```sql
-- 001_initial_schema.sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- contact_inquiries 테이블 생성
-- instagram_posts 테이블 생성
-- analytics_events 테이블 생성
-- 인덱스 생성
-- RLS 정책 설정
```

### Migration v1.1.0 (필드 추가 예시)
```sql
-- 002_add_source_to_inquiries.sql
ALTER TABLE contact_inquiries
ADD COLUMN source VARCHAR(50) DEFAULT 'partnership_page';

-- Rollback
ALTER TABLE contact_inquiries
DROP COLUMN source;
```

**마이그레이션 도구**: Vercel Postgres CLI 또는 Supabase Migrations

---

## 5. 백업 & 복구 계획

### 백업 전략 (Vercel Postgres 기준)
- **백업 주기**: 자동 백업 (Vercel 관리)
  - Daily: 매일 자정 (UTC)
  - Point-in-time: 7일 이내 복구 가능
- **보관 기간**: 7일 (Vercel 무료 티어)
- **수동 백업**: pg_dump 주간 실행 (로컬 저장)

```bash
# 수동 백업 스크립트 (주간)
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d).sql
```

### 복구 계획
- **복구 시간 목표 (RTO)**: 1시간
  - Vercel 대시보드에서 Point-in-time 복구
  - 또는 수동 백업 파일 복원
- **복구 시점 목표 (RPO)**: 1일
  - 최악의 경우 전날 자정 상태로 복구

### 재해 복구 (Disaster Recovery)
**시나리오 1: Vercel Postgres 장애**
1. Supabase로 긴급 마이그레이션 (30분)
2. 환경변수 DATABASE_URL 변경
3. 수동 백업 파일 복원

**시나리오 2: 데이터 손상**
1. Point-in-time 복구 (손상 이전 시점)
2. contact_inquiries 중요 데이터 수동 검증
3. Instagram 캐시는 재수집 (1시간 내 복구)