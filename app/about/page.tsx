import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회사 소개 | 엘리콘',
  description:
    '국내 제조품 엄선, 토종 유통 전문가 엘리콘. 40년 업력의 한국오지케이와 써모랩의 강력한 파트너십.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-[--color-charcoal] mb-8">
          엘리콘 소개
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          엘리콘은 국내 제조품을 엄선하여 공급하는 토종 유통 전문가입니다.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          화려한 수치보다 실질적인 가치를, 규모보다 신뢰를 우선하는 프로페셔널
          B2B 파트너입니다.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8">
          핵심 철학
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[--color-soft-gray] p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-[--color-deep-navy] mb-4">
              국내 제조품 엄선
            </h3>
            <p className="text-gray-700 leading-relaxed">
              검증된 국내 제조사의 제품만을 엄선하여 공급합니다. 품질과 신뢰를
              최우선 가치로 삼습니다.
            </p>
          </div>

          <div className="bg-[--color-soft-gray] p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-[--color-deep-navy] mb-4">
              토종 유통 전문가
            </h3>
            <p className="text-gray-700 leading-relaxed">
              오랜 경험을 바탕으로 구축한 안정적인 유통망으로 B2B 파트너에게
              신뢰할 수 있는 공급 서비스를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8">
          전문 제조사 파트너십
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-[--color-bright-teal] pl-6">
            <h3 className="text-xl font-semibold text-[--color-deep-navy] mb-3">
              40년 업력의 한국오지케이
            </h3>
            <p className="text-gray-700 leading-relaxed">
              4대째 이어온 국내 낚시용품 제조 명가와의 강력한 파트너십을 통해
              Wing 브랜드의 안정적인 공급망을 확보하고 있습니다.
            </p>
          </div>

          <div className="border-l-4 border-[--color-bright-teal] pl-6">
            <h3 className="text-xl font-semibold text-[--color-deep-navy] mb-3">
              국산 히트상품 써모랩
            </h3>
            <p className="text-gray-700 leading-relaxed">
              혁신적인 보온보냉 기술로 시장을 선도하는 써모랩과의 파트너십을
              통해 Cocolic 브랜드의 우수한 제품을 공급합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8">
          채널 전문성
        </h2>
        <div className="bg-[--color-soft-gray] p-8 rounded-lg">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            다양한 오프라인 채널에서의 풍부한 경험을 보유하고 있습니다.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[--color-bright-teal] mr-3">-</span>
              <span>낚시 전문점 유통 경험</span>
            </li>
            <li className="flex items-start">
              <span className="text-[--color-bright-teal] mr-3">-</span>
              <span>캠핑 전문점 입점 노하우</span>
            </li>
            <li className="flex items-start">
              <span className="text-[--color-bright-teal] mr-3">-</span>
              <span>스포츠 용품점 공급 실적</span>
            </li>
            <li className="flex items-start">
              <span className="text-[--color-bright-teal] mr-3">-</span>
              <span>온라인 판매 채널 운영 경험</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
