# Runbook (프로젝트 운영서)

> 운영 관점 "마지막 방어선" - 장애 대응 및 운영 가이드

## 1. 서비스/스크립트 실행 방법

### 로컬 실행

```bash
# 개발 서버 실행
npm run dev

# 또는
npx next dev
```

### 프로덕션 빌드 & 테스트

```bash
# 린트 검사
npm run lint

# 프로덕션 빌드
npm run build

# 프로덕션 모드 실행
npm run start
```

### 프로덕션 배포

```bash
# GitHub Push → Vercel 자동 배포
git add .
git commit -m "feat: 기능 업데이트"
git push origin main

# 수동 배포 (필요 시)
vercel --prod
```

---

## 2. 장애 1차 대응 (필수)

### 증상별 대응

| 증상 | 확인 사항 | 즉시 조치 |
|------|----------|----------|
| 사이트 접속 불가 | Vercel Status 페이지 | Vercel 재배포 |
| 빌드 실패 | GitHub Actions 로그 | 코드 수정 후 재푸시 |
| 페이지 404 | 라우팅 설정 확인 | next.config.ts 검토 |
| 이미지 깨짐 | public/ 경로 확인 | 이미지 재업로드 |
| 문의 폼 작동 안함 | 이메일 서비스 상태 | API 키 및 설정 확인 |

### 로그 경로

```
프로젝트 루트/
├── logs/                         # 프로젝트 작업 로그
│   └── YYMMDD_이슈[작성자].md    # 일별 작업 기록
├── .next/                        # Next.js 빌드 캐시
│   ├── cache/                    # 빌드 캐시 (삭제 가능)
│   └── server/                   # SSR 관련 파일
├── .vercel/                      # Vercel 로컬 설정
│   └── project.json              # 프로젝트 연결 정보
├── node_modules/.cache/          # npm 캐시 (삭제 가능)
├── reports/                      # Lighthouse 리포트
│   └── lighthouse-*.html         # 성능 측정 결과
└── test_results/                 # 테스트 결과 기록

# Vercel 배포 로그 (웹)
https://vercel.com/elicon/elicon-homepage/deployments
```

### 즉시 조치

```bash
# 1. 빌드 캐시 삭제
rm -rf .next node_modules/.cache

# 2. 의존성 재설치
rm -rf node_modules package-lock.json
npm install

# 3. 로컬 빌드 테스트
npm run build

# 4. 재배포
git push origin main
```

### 롤백 방법

```bash
# 방법 1: 이전 커밋으로 롤백
git log --oneline -10                    # 최근 커밋 확인
git revert HEAD                          # 최신 커밋 되돌리기
git push origin main                     # 재배포

# 방법 2: 특정 커밋으로 롤백
git checkout [이전_커밋_해시]
git checkout -b rollback-[날짜]
git push origin rollback-[날짜]
# Vercel에서 해당 브랜치 배포

# 방법 3: Vercel 대시보드에서 롤백
# https://vercel.com/elicon/elicon-homepage/deployments
# → 이전 성공 배포 선택 → "Promote to Production"
```

---

## 3. 모니터링

### 대시보드

- **Vercel Analytics**: `https://vercel.com/elicon/elicon-homepage/analytics`
- **갱신 주기**: 실시간

### 알림 (Phase 2 예정)

- **Slack**: #elicon-homepage-alerts (예정)
- **Email**: elicon@eliconstore.com (예정)

### 주요 메트릭

| 메트릭 | 정상 범위 | 경고 임계값 |
|--------|----------|------------|
| 빌드 시간 | <2분 | >5분 |
| LCP | <3초 | >5초 |
| Lighthouse 성능 | >80점 | <70점 |
| 에러율 | 0% | >1% |
| 월 문의 건수 | ≥10건 | <5건 |

---

## 4. 정기 운영 작업

### 일간

- [ ] Vercel 배포 상태 확인
- [ ] GitHub Actions 에러 확인

### 주간

- [ ] 문의 폼 접수 현황 확인
- [ ] 의존성 보안 취약점 확인 (`npm audit`)
- [ ] Lighthouse 성능 점검

### 월간

- [ ] Next.js/Vercel 버전 업데이트 검토
- [ ] 사용량 리뷰 (Vercel Analytics)
- [ ] B2B 문의 KPI 달성률 검토 (목표: 월 10건)
- [ ] 브랜드 페이지 콘텐츠 업데이트

---

## 5. 연락처

| 역할 | 담당자 | 연락처 |
|------|--------|--------|
| 1차 대응 | 클로드코드 | Claude Code CLI |
| 에스컬레이션 | 서종원 대표 | - |

---

**최종 업데이트**: 2026-01-11
**작성자**: 클로드코드
