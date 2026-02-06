# Claude 개발 워크플로우 (Gemini 방식 참고)

**작성일**: 2025-11-15
**프로젝트**: 01_elicon_homepage
**참고**: 02_jselectron 제미나이 작업 방식

---

## 핵심 원칙

### 1. 순서 엄수
- Story 1.1 → 완전 완료 및 검증 → Story 1.2 시작
- 절대 여러 Story를 동시 진행하지 않음
- 각 Story 내부에서도 Task 순서대로 진행

### 2. 단계별 검증
- 각 Task 완료 후 즉시 검증
- 빌드 검증 (npm run build)
- 개발 서버 검증 (npm run dev)
- 브라우저 확인 (HTTP 200 응답)

### 3. 로그 필수 작성
- 각 Story 완료 시 logs/ 폴더에 로그 생성
- 파일명: `YYMMDD_Story[번호]완료[클로드].md` (예: 251115_Story1.1완료[클로드].md)
- 포함 내용: 작업 개요, 완료 작업, 검증 결과, Git 커밋, 다음 작업
- 로그 작성 시점: Git 커밋 직후 또는 Story 완료 직후
- 코드 변경이 없는 Story도 검증 로그 작성 필수

---

## Story 1.1 작업 프로세스 (Foundation Setup)

### Task 1: Next.js 프로젝트 생성
```bash
cd ~/Gemini_Projects/01_elicon_homepage
npx create-next-app@latest elicon-website \
  --typescript --tailwind --app \
  --no-src-dir --import-alias "@/*" --eslint
```

**검증**:
- package.json 확인
- app/ 디렉토리 구조 확인
- Git 초기화 확인

### Task 2: 필수 라이브러리 설치
```bash
cd elicon-website
npm install react-hook-form zod @hookform/resolvers \
  framer-motion lucide-react resend
npm install --save-dev @playwright/test playwright
```

**검증**:
- package.json dependencies 확인
- node_modules 설치 확인

### Task 3: 프로젝트 구조 생성
```bash
mkdir -p app/_components/layout
mkdir -p app/_components/home
mkdir -p public/images/brands
```

**검증**:
- 폴더 구조 확인 (ls -la)

### Task 4: Header 컴포넌트 생성
**파일**: `app/_components/layout/header.tsx`

**내용**:
- 엘리콘 로고 (Link to /)
- 메인 네비게이션: About Us, Brands, Partnership, 쇼핑몰, 블로그
- Tailwind CSS 스타일링

**검증**:
- 파일 생성 확인
- 문법 오류 없는지 확인

### Task 5: Footer 컴포넌트 생성
**파일**: `app/_components/layout/footer.tsx`

**내용**:
- 회사 정보 (주소, 대표자, 사업자등록번호)
- 외부 링크 (eliconstore.com, 블로그)
- 저작권 표시

**검증**:
- 파일 생성 확인

### Task 6: Layout 통합
**파일**: `app/layout.tsx`

**수정 내용**:
```typescript
import Header from '@/app/_components/layout/header';
import Footer from '@/app/_components/layout/footer';

export const metadata: Metadata = {
  title: '엘리콘 | 프로페셔널 B2B 유통 전문 기업',
  description: '검증된 브랜드(Wing, Cocolic, Seanex)를 통해 신뢰할 수 있는 제품을 공급합니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

### Task 7: 메인 페이지 플레이스홀더
**파일**: `app/page.tsx`

```typescript
export default function Home() {
  return (
    <main>
      <h1>엘리콘 홈페이지 (Story 1.1)</h1>
      <p>메인 페이지 콘텐츠는 Story 1.3에서 구현됩니다.</p>
    </main>
  );
}
```

### Task 8: Git 커밋
```bash
git add .
git commit -m "Story 1.1: Foundation setup - Next.js 14 with Header/Footer"
```

### Task 9: 최종 검증
```bash
# 빌드 검증
npm run build

# 개발 서버 검증
npm run dev
# → http://localhost:3000 접속 확인
# → Header/Footer 렌더링 확인
```

### Task 10: 로그 작성
**파일**: `logs/251115_Story1.1완료[클로드].md`

**내용**:
```markdown
# Story 1.1 Foundation Setup 완료 로그

작업일시: 2025-11-15
작성자: Claude Code
프로젝트: 01_elicon_homepage

## 작업 개요
Story 1.1 "Foundation Setup" 완료
- Next.js 14 프로젝트 초기 설정
- Header/Footer 컴포넌트 구축
- 필수 라이브러리 설치

## 완료 작업
1. ✅ Next.js 14 프로젝트 생성
2. ✅ 필수 라이브러리 설치 (react-hook-form, zod, framer-motion 등)
3. ✅ 프로젝트 구조 생성 (app/_components/)
4. ✅ Header 컴포넌트 구현
5. ✅ Footer 컴포넌트 구현
6. ✅ layout.tsx 통합
7. ✅ Git 커밋

## 검증 결과
- 빌드: 성공 (npm run build)
- 개발 서버: 정상 작동 (http://localhost:3000)
- Header/Footer: 정상 렌더링
- HTTP 응답: 200 OK

## Git 커밋
- 커밋 메시지: "Story 1.1: Foundation setup - Next.js 14 with Header/Footer"
- 변경 파일: 33개
- 추가 라인: 25,391줄

## 다음 작업
Story 1.2: 헤더/푸터 외부 링크 연동
```

---

## Story 1.2 작업 프로세스 (외부 링크 연동)

### Task 1: Header 외부 링크 추가
**파일**: `app/_components/layout/header.tsx`

**수정**:
- "쇼핑몰" 링크 → `https://eliconstore.com` (target="_blank")
- "블로그" 링크 → 블로그 URL (target="_blank")

### Task 2: Footer 외부 링크 추가
**파일**: `app/_components/layout/footer.tsx`

**수정**:
- eliconstore.com 링크 추가
- 블로그 링크 추가

### Task 3: Git 커밋
```bash
git add .
git commit -m "Story 1.2: 헤더/푸터 외부 링크 연동"
```

### Task 4: 검증 및 로그 작성
- 빌드 검증
- 개발 서버에서 링크 클릭 테스트
- logs/251115_Story1.2완료[클로드].md 작성

---

## 작업 시 주의사항

### DO (반드시 할 것)
1. ✅ Story 순서대로 진행 (1.1 → 1.2 → 1.3...)
2. ✅ 각 Task 완료 후 즉시 검증
3. ✅ npm run build 성공 확인
4. ✅ npm run dev 정상 작동 확인
5. ✅ Git 커밋 (의미 있는 메시지)
6. ✅ 로그 파일 작성 (logs/ 폴더)
7. ✅ CLAUDE.md 규칙 준수 (이모지 금지)

### DON'T (절대 하지 말 것)
1. ❌ 여러 Story 동시 진행
2. ❌ 검증 없이 다음 Task 진행
3. ❌ 빌드 실패 상태로 커밋
4. ❌ 로그 작성 생략
5. ❌ 이모지 사용 (마크다운 문서)
6. ❌ 사용자 승인 없이 자동 진행
7. ❌ 계획서 없이 임의 개발

---

## 체크리스트 템플릿

각 Story 시작 전 확인:

```
[ ] PRD에서 Story 요구사항 확인
[ ] Acceptance Criteria 숙지
[ ] 필요한 파일/폴더 경로 확인
[ ] 이전 Story 완료 및 검증 완료
```

각 Story 완료 후 확인:

```
[ ] 모든 Task 완료
[ ] npm run build 성공
[ ] npm run dev 정상 작동
[ ] 브라우저 확인 (200 OK)
[ ] Git 커밋 완료
[ ] 로그 파일 작성
[ ] 사용자에게 완료 보고
```

---

## 로그 파일 템플릿

**파일명**: `logs/YYMMDD_Story[번호]완료[클로드].md`

```markdown
# Story [번호] [제목] 완료 로그

작업일시: YYYY-MM-DD
작성자: Claude Code
프로젝트: 01_elicon_homepage

## 작업 개요
Story [번호] "[제목]" 완료
- [주요 작업 1]
- [주요 작업 2]

## 완료 작업
1. ✅ [작업 1]
2. ✅ [작업 2]
3. ✅ [작업 3]

## 검증 결과
- 빌드: [성공/실패]
- 개발 서버: [정상/오류]
- 렌더링: [정상/오류]
- HTTP 응답: [200/500]

## Git 커밋
- 커밋 메시지: "[메시지]"
- 변경 파일: [개수]개
- 추가/삭제 라인: [숫자]줄

## 다음 작업
Story [다음 번호]: [다음 제목]
```

---

**최종 업데이트**: 2025-11-15
**작성자**: Claude Code
