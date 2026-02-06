import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "낚시점 전용 전단지 | 엘리콘",
  description:
    "Wing 편광 선글라스 + Seanex 에기. 핵심 제품 + 입점 혜택 요약.",
};

export default function FlyerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-8">
        <span className="text-xs font-medium tracking-widest text-[#00BFA5] uppercase">
          A4 Flyer · Digital Version
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1A2C4B] mt-2 font-[family-name:var(--font-pretendard)]">
          낚시점 전용 전단지
        </h1>
      </div>

      {/* 앞면 */}
      <div className="border-2 border-gray-200 rounded-2xl overflow-hidden mb-10">
        <div className="bg-[#1A2C4B] text-white px-4 py-2 text-xs font-medium tracking-widest text-center uppercase">
          Front
        </div>

        <div className="bg-gradient-to-b from-[#1A2C4B] to-[#2A3C5B] text-white p-8 sm:p-10 text-center">
          <p className="text-sm text-[#00BFA5] font-medium mb-2">
            45년 전통 국내 제조
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
            낚시인의 눈을 지키는
            <br />
            편광 선글라스 + 국산 1위 에기
          </h2>
          <p className="text-sm text-gray-300">
            B2B 도매 파트너 모집 중 · 제조사 직영
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-[#e63946]">Wing</span>
              <span className="text-xs text-gray-400">편광 선글라스</span>
            </div>
            <ul className="space-y-2 text-sm">
              {[
                "편광 렌즈 — 수면 반사 99% 차단",
                "UV400 — 자외선 99.9% 차단",
                "경량 25-30g — 하루 종일 편안",
                "한국인 핏 — 흘러내림 없음",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#00BFA5] mt-0.5">✓</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              소비자가: 44,000 ~ 99,000원
            </p>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-[#06b6d4]">Seanex</span>
              <span className="text-xs text-gray-400">국산 1위 에기</span>
            </div>
            <ul className="space-y-2 text-sm">
              {[
                "리뷰 55,578개 — 압도적 검증",
                "평점 4.90/5.0 — 최상 품질",
                "일본 대비 1/2 가격 — 가성비",
                "재구매율 높음 — 회전율 보장",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#00BFA5] mt-0.5">✓</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              소비자가: 20,000원 (5개 세트)
            </p>
          </div>
        </div>

        <div className="bg-[#FF6B00] text-white p-5 text-center">
          <p className="text-sm font-bold">
            Oakley 195,000원 vs Wing 65,000원 · DUEL 10,000원/개 vs Seanex
            4,000원/개
          </p>
          <p className="text-xs mt-1 text-orange-100">
            고객 만족 + 높은 마진 = 매출 UP
          </p>
        </div>

        <div className="bg-gray-50 p-4 text-center text-sm text-gray-500">
          제조사 직영 도매 · eliconstore.com · 담당: 서종원 대표
        </div>
      </div>

      {/* 뒷면 */}
      <div className="border-2 border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-[#1A2C4B] text-white px-4 py-2 text-xs font-medium tracking-widest text-center uppercase">
          Back
        </div>

        <div className="p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-[#1A2C4B] text-center mb-8">
            왜 전국 42개 매장이 엘리콘을 선택했을까?
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              {
                title: "제조사 직영",
                desc: "중간 유통 없음 = 최저가 보장",
                sub: "45년 품질 보증",
              },
              {
                title: "빠른 출고",
                desc: "주문 후 48시간 출고",
                sub: "전국 택배 배송",
              },
              {
                title: "높은 마진",
                desc: "Wing 30-40% · Seanex 25-35%",
                sub: "수익성 확보",
              },
              {
                title: "마케팅 지원",
                desc: "진열대 무료 제공",
                sub: "POP/이미지 지원",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#F0F9FF] rounded-xl p-4"
              >
                <h3 className="font-bold text-[#1A2C4B] text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#00BFA5]/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-[#1A2C4B] mb-3 text-center">
              신규 입점 특별 혜택{" "}
              <span className="text-xs font-normal text-[#00BFA5]">한정</span>
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                "첫 주문 특별가 적용",
                "POP 진열대 무료 설치",
                "렌즈클리너 50개 증정",
                "무료 샘플 (Wing 2개 + 에기 1세트)",
              ].map((b) => (
                <p key={b} className="flex items-start gap-1.5 text-gray-600">
                  <span className="text-[#00BFA5]">✓</span>
                  {b}
                </p>
              ))}
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 mb-3">주문 방법 (3단계)</p>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <span className="px-3 py-1.5 bg-[#1A2C4B] text-white rounded-full text-xs">
                1
              </span>
              <span>전화/카톡</span>
              <span className="text-gray-300">→</span>
              <span className="px-3 py-1.5 bg-[#1A2C4B] text-white rounded-full text-xs">
                2
              </span>
              <span>샘플 확인</span>
              <span className="text-gray-300">→</span>
              <span className="px-3 py-1.5 bg-[#1A2C4B] text-white rounded-full text-xs">
                3
              </span>
              <span>주문/입점</span>
            </div>
          </div>

          <div className="bg-[#1A2C4B] rounded-xl p-6 text-white text-center">
            <h3 className="font-bold text-lg mb-2">B2B 도매 문의</h3>
            <p className="text-sm text-gray-300">담당: 서종원 대표</p>
            <p className="text-sm text-[#00BFA5] mt-1">eliconstore.com</p>
            <div className="mt-4 pt-3 border-t border-gray-600 text-xs text-gray-400">
              (주)한국오지케이 · 강원 원주시 문막읍 · 사업자: 224-81-23769
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-6">
        인쇄 규격: A4 양면 (210mm × 297mm) · 아트지 180g · 무광 코팅
      </p>
    </div>
  );
}
