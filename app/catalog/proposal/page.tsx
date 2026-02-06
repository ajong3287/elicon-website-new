import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "낚시점 B2B 입점 제안서 | 엘리콘",
  description:
    "Wing 편광 선글라스 + Seanex 에기 도매 파트너십 제안서. 45년 전통 제조사 직영.",
};

function SectionDivider() {
  return <div className="w-full h-px bg-gray-200 my-12" />;
}

function PageBadge({ number, total }: { number: number; total: number }) {
  return (
    <span className="inline-block text-xs text-gray-400 font-mono">
      {number}/{total}
    </span>
  );
}

const wingModels = [
  { name: "ANKER", use: "스포츠 전용", price: "99,000원", feature: "경량, 논슬립" },
  { name: "KNOX", use: "아웃도어", price: "65,000원", feature: "편광 렌즈 강화" },
  { name: "VENTUS", use: "고글형", price: "82,000원", feature: "밀착형 디자인" },
  { name: "ROBBIN", use: "캠핑/낚시", price: "44,000원", feature: "다목적 활용" },
];

const seanexProducts = [
  { name: "쪼꼬미 에기 (5개 세트)", price: "20,000원", reviews: "44,104", rating: "4.90" },
  { name: "쪼꼬미 500 (신형)", price: "20,000원", reviews: "2,083", rating: "4.91" },
  { name: "엉뚱이 500", price: "5,800원", reviews: "167", rating: "4.81" },
  { name: "매끄니 에기", price: "3,500원", reviews: "213", rating: "4.85" },
];

const competitors = [
  { brand: "Oakley", range: "20~36만원", vs: "3~8배 비쌈" },
  { brand: "TALEX (일본)", range: "15~25만원", vs: "2~5배 비쌈" },
  { brand: "쿠로시오", range: "5~9만원", vs: "유사~1.5배" },
  { brand: "Wing", range: "4.4~9.9만원", vs: "기준가" },
];

const benefits = [
  {
    title: "첫 주문 특별가",
    desc: "초도 물량 특별 할인 적용",
    icon: "💰",
  },
  {
    title: "POP 디스플레이 무료",
    desc: "Wing 선글라스 전용 진열대 + Seanex 에기 걸이대",
    icon: "🏪",
  },
  {
    title: "렌즈클리너 50개 증정",
    desc: "Wing 선글라스 구매 고객 사은품 활용",
    icon: "🎁",
  },
  {
    title: "마케팅 지원",
    desc: "고해상도 이미지, 상세 페이지 템플릿, SNS 콘텐츠",
    icon: "📸",
  },
  {
    title: "재고 보장",
    desc: "인기 SKU 상시 재고, 품절 시 48시간 긴급 출고",
    icon: "📦",
  },
];

export default function ProposalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* PAGE 1: 표지 */}
      <section className="text-center py-16 sm:py-24">
        <PageBadge number={1} total={6} />
        <div className="mt-8 mb-6">
          <span className="text-sm font-medium tracking-widest text-[#00BFA5] uppercase">
            B2B Partnership Proposal
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1A2C4B] leading-tight mb-6 font-[family-name:var(--font-pretendard)]">
          낚시점 전용
          <br />
          B2B 입점 제안서
        </h1>
        <p className="text-xl text-gray-500 mb-8 max-w-lg mx-auto">
          &ldquo;일본 브랜드 품질, 국산 가격&rdquo;
          <br />
          편광 선글라스 + 국산 1위 에기
        </p>
        <div className="inline-block border border-gray-200 rounded-xl px-8 py-5 text-left text-sm text-gray-500">
          <p>
            <strong className="text-[#1A2C4B]">제안사:</strong>{" "}
            (주)한국오지케이 · 엘리콘 사업부
          </p>
          <p className="mt-1">
            <strong className="text-[#1A2C4B]">담당:</strong> 서종원 대표
          </p>
          <p className="mt-1">
            <strong className="text-[#1A2C4B]">도매몰:</strong>{" "}
            eliconstore.com
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* PAGE 2: 회사 소개 */}
      <section>
        <PageBadge number={2} total={6} />
        <h2 className="text-3xl font-bold text-[#1A2C4B] mt-4 mb-8">
          왜 엘리콘인가
        </h2>

        <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 mb-8">
          <h3 className="text-lg font-bold text-[#1A2C4B] mb-4">
            45년 전통 국내 제조 기업
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-400">설립</p>
              <p className="font-semibold">1978년 (45년)</p>
            </div>
            <div>
              <p className="text-gray-400">소재</p>
              <p className="font-semibold">강원 원주시 문막읍</p>
            </div>
            <div>
              <p className="text-gray-400">제조</p>
              <p className="font-semibold">아이웨어 + 낚시용품</p>
            </div>
            <div>
              <p className="text-gray-400">누적 생산</p>
              <p className="font-semibold">250만+ 제품</p>
            </div>
            <div>
              <p className="text-gray-400">사업자</p>
              <p className="font-semibold">224-81-23769</p>
            </div>
            <div>
              <p className="text-gray-400">거래처</p>
              <p className="font-semibold">42곳 운영 중</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              n: "01",
              title: "제조사 직영",
              desc: "중간 마진 없음 → 귀사 마진율 극대화",
            },
            {
              n: "02",
              title: "45년 품질",
              desc: "반품/클레임 최소 → 관리 비용 절감",
            },
            {
              n: "03",
              title: "2개 브랜드 동시 입점",
              desc: "Wing + Seanex 교차 판매 시너지",
            },
            {
              n: "04",
              title: "빠른 출고",
              desc: "주문 후 48시간 출고 → 재고 걱정 없음",
            },
          ].map((item) => (
            <div
              key={item.n}
              className="border border-gray-200 rounded-xl p-5"
            >
              <span className="text-xs font-mono text-[#00BFA5]">
                {item.n}
              </span>
              <h4 className="font-bold text-[#1A2C4B] mt-1">{item.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* PAGE 3: Wing 편광 선글라스 */}
      <section>
        <PageBadge number={3} total={6} />
        <div className="flex items-center gap-3 mt-4 mb-2">
          <span className="text-2xl font-bold text-[#e63946]">Wing</span>
          <span className="text-sm text-gray-400">편광 선글라스</span>
        </div>
        <h2 className="text-3xl font-bold text-[#1A2C4B] mb-4">
          수면 반사 차단, 낚시인 필수템
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: "편광 렌즈", value: "수면 반사 99% 차단" },
            { label: "UV400", value: "자외선 99.9% 차단" },
            { label: "경량", value: "25-30g" },
            { label: "핏", value: "한국인 얼굴형 최적화" },
          ].map((spec) => (
            <div
              key={spec.label}
              className="bg-[#F8FAFC] rounded-lg p-4 text-center"
            >
              <p className="text-xs text-[#00BFA5] font-medium">
                {spec.label}
              </p>
              <p className="text-sm font-semibold mt-1">{spec.value}</p>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-[#1A2C4B] mb-3">
          낚시점 추천 모델 TOP 4
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 text-gray-400 font-medium">
                  모델명
                </th>
                <th className="text-left py-3 text-gray-400 font-medium">
                  용도
                </th>
                <th className="text-left py-3 text-gray-400 font-medium">
                  소비자가
                </th>
                <th className="text-left py-3 text-gray-400 font-medium">
                  특징
                </th>
              </tr>
            </thead>
            <tbody>
              {wingModels.map((m) => (
                <tr key={m.name} className="border-b border-gray-100">
                  <td className="py-3 font-semibold">{m.name}</td>
                  <td className="py-3 text-gray-500">{m.use}</td>
                  <td className="py-3 font-medium">{m.price}</td>
                  <td className="py-3 text-gray-500">{m.feature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          ※ B2B 도매가 별도 협의
        </p>

        <h3 className="font-bold text-[#1A2C4B] mt-8 mb-3">
          경쟁사 대비 가격 경쟁력
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 text-gray-400 font-medium">
                  브랜드
                </th>
                <th className="text-left py-3 text-gray-400 font-medium">
                  가격대
                </th>
                <th className="text-left py-3 text-gray-400 font-medium">
                  Wing 대비
                </th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c) => (
                <tr
                  key={c.brand}
                  className={`border-b border-gray-100 ${c.brand === "Wing" ? "bg-[#00BFA5]/5 font-semibold" : ""}`}
                >
                  <td className="py-3">{c.brand}</td>
                  <td className="py-3">{c.range}</td>
                  <td className="py-3">{c.vs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <SectionDivider />

      {/* PAGE 4: Seanex 에기 */}
      <section>
        <PageBadge number={4} total={6} />
        <div className="flex items-center gap-3 mt-4 mb-2">
          <span className="text-2xl font-bold text-[#06b6d4]">Seanex</span>
          <span className="text-sm text-gray-400">쪼꼬미 에기</span>
        </div>
        <h2 className="text-3xl font-bold text-[#1A2C4B] mb-4">
          55,578개 리뷰가 증명하는 국산 1위
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-[#06b6d4]/10 to-transparent rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-[#06b6d4]">55,578</p>
            <p className="text-xs text-gray-500 mt-1">리뷰 수</p>
          </div>
          <div className="bg-gradient-to-br from-[#06b6d4]/10 to-transparent rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-[#06b6d4]">4.90</p>
            <p className="text-xs text-gray-500 mt-1">평점 / 5.0</p>
          </div>
          <div className="bg-gradient-to-br from-[#06b6d4]/10 to-transparent rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-[#06b6d4]">1/2</p>
            <p className="text-xs text-gray-500 mt-1">일본 대비 가격</p>
          </div>
        </div>

        <h3 className="font-bold text-[#1A2C4B] mb-3">제품 라인업</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 text-gray-400 font-medium">
                  제품명
                </th>
                <th className="text-left py-3 text-gray-400 font-medium">
                  소비자가
                </th>
                <th className="text-left py-3 text-gray-400 font-medium">
                  리뷰
                </th>
                <th className="text-left py-3 text-gray-400 font-medium">
                  평점
                </th>
              </tr>
            </thead>
            <tbody>
              {seanexProducts.map((p) => (
                <tr key={p.name} className="border-b border-gray-100">
                  <td className="py-3 font-semibold">{p.name}</td>
                  <td className="py-3">{p.price}</td>
                  <td className="py-3 text-[#06b6d4] font-medium">
                    {p.reviews}개
                  </td>
                  <td className="py-3">{p.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          ※ B2B 도매가 별도 협의
        </p>

        <div className="mt-8 bg-[#F8FAFC] rounded-xl p-6">
          <h3 className="font-bold text-[#1A2C4B] mb-3">
            일본 브랜드 대비 경쟁력
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Seanex</p>
              <p className="font-semibold">~4,000원/개</p>
              <p className="text-[#06b6d4] text-xs mt-1">리뷰 55,578개</p>
            </div>
            <div>
              <p className="text-gray-400">DUEL / Yo-Zuri (일본)</p>
              <p className="font-semibold">7,000~11,000원/개</p>
              <p className="text-xs text-gray-400 mt-1">리뷰 소수</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* PAGE 5: 거래 조건 + 입점 혜택 */}
      <section>
        <PageBadge number={5} total={6} />
        <h2 className="text-3xl font-bold text-[#1A2C4B] mt-4 mb-8">
          거래 조건 및 입점 혜택
        </h2>

        <div className="border border-gray-200 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-[#1A2C4B] mb-4">기본 거래 조건</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-400">최소 주문</p>
              <p className="font-semibold">각 브랜드 10개 이상</p>
            </div>
            <div>
              <p className="text-gray-400">결제</p>
              <p className="font-semibold">선입금 (계좌이체)</p>
            </div>
            <div>
              <p className="text-gray-400">정기 거래</p>
              <p className="font-semibold">월말 결제 (심사 후)</p>
            </div>
            <div>
              <p className="text-gray-400">배송</p>
              <p className="font-semibold">5만원↑ 무료</p>
            </div>
            <div>
              <p className="text-gray-400">출고</p>
              <p className="font-semibold">주문 후 48시간</p>
            </div>
            <div>
              <p className="text-gray-400">반품/교환</p>
              <p className="font-semibold">수령 7일 이내</p>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-[#1A2C4B] mb-4">
          신규 입점 특별 혜택{" "}
          <span className="text-xs font-normal text-[#00BFA5]">
            2026 상반기 한정
          </span>
        </h3>
        <div className="space-y-3 mb-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-4 border border-gray-100 rounded-lg p-4"
            >
              <span className="text-2xl">{b.icon}</span>
              <div>
                <p className="font-semibold text-[#1A2C4B]">{b.title}</p>
                <p className="text-sm text-gray-500">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#00BFA5]/10 to-[#00BFA5]/5 rounded-xl p-6">
          <h3 className="font-bold text-[#1A2C4B] mb-4">
            귀사의 예상 수익 시뮬레이션
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-gray-500">Wing 선글라스 (월 10개 판매)</p>
              <p className="text-xs text-gray-400 mt-1">
                소비자가 평균 65,000원 · 마진율 30-40%
              </p>
              <p className="text-lg font-bold text-[#1A2C4B] mt-2">
                월 195,000 ~ 260,000원
              </p>
            </div>
            <div>
              <p className="text-gray-500">Seanex 에기 (월 20세트 판매)</p>
              <p className="text-xs text-gray-400 mt-1">
                소비자가 20,000원/세트 · 마진율 25-35%
              </p>
              <p className="text-lg font-bold text-[#1A2C4B] mt-2">
                월 100,000 ~ 140,000원
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#00BFA5]/20 text-center">
            <p className="text-sm text-gray-500">합계 예상 추가 이익</p>
            <p className="text-2xl font-bold text-[#00BFA5]">
              월 295,000 ~ 400,000원
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* PAGE 6: 연락처 + CTA */}
      <section className="text-center">
        <PageBadge number={6} total={6} />
        <h2 className="text-3xl font-bold text-[#1A2C4B] mt-4 mb-8">
          지금 바로 시작하세요
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          {[
            { step: "1", label: "전화/카톡 문의" },
            { step: "2", label: "무료 샘플 확인" },
            { step: "3", label: "입점 완료" },
          ].map((s, i) => (
            <div key={s.step} className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-[#1A2C4B] text-white flex items-center justify-center text-lg font-bold">
                {s.step}
              </div>
              <span className="text-sm font-medium">{s.label}</span>
              {i < 2 && (
                <span className="hidden sm:inline text-gray-300 mx-2">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#1A2C4B] rounded-2xl p-8 sm:p-10 text-white max-w-lg mx-auto">
          <h3 className="text-xl font-bold mb-4">B2B 문의</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>
              <span className="text-gray-400">담당:</span> 서종원 대표
            </p>
            <p>
              <span className="text-gray-400">도매몰:</span>{" "}
              <a
                href="https://eliconstore.com"
                className="text-[#00BFA5] hover:underline"
              >
                eliconstore.com
              </a>
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-600 text-xs text-gray-400">
            <p>(주)한국오지케이 · 강원 원주시 문막읍 동화공단로 101-3</p>
            <p>사업자: 224-81-23769</p>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          기존 거래처 42곳이 증명하는 신뢰
        </p>
      </section>
    </div>
  );
}
