export default function PartnershipSection() {
  const partners = [
    '조이웍스',
    '다솔낚시마트',
    '피싱플러스',
    '캠핑온',
    '아웃도어프로',
    '스포츠마트',
  ];

  return (
    <div className="space-y-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[--color-charcoal] mb-6">
          귀사의 비즈니스를 완성할 프로페셔널 유통 파트너
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          엘리콘은 검증된 제조사 파트너십과 전국 유통망을 통해 귀사의 성공적인
          비즈니스를 지원합니다.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8 text-center">
          엘리콘의 유통망은 전국을 커버합니다
        </h2>
        <div className="bg-[--color-soft-gray] p-12 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <svg
                viewBox="0 0 400 500"
                className="w-full h-auto max-w-md mx-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M200 50 L250 100 L240 200 L280 280 L260 350 L200 450 L140 350 L120 280 L160 200 L150 100 Z"
                  fill="#1A2C4B"
                  opacity="0.1"
                  stroke="#1A2C4B"
                  strokeWidth="2"
                />
                <circle cx="200" cy="150" r="8" fill="#00BFA5" />
                <circle cx="180" cy="220" r="8" fill="#00BFA5" />
                <circle cx="220" cy="220" r="8" fill="#00BFA5" />
                <circle cx="200" cy="280" r="8" fill="#00BFA5" />
                <circle cx="160" cy="310" r="8" fill="#00BFA5" />
                <circle cx="240" cy="310" r="8" fill="#00BFA5" />
                <text
                  x="200"
                  y="480"
                  textAnchor="middle"
                  fill="#333333"
                  fontSize="14"
                  fontWeight="bold"
                >
                  전국 주요 도시 유통망
                </text>
              </svg>
            </div>
            <p className="text-gray-700 text-lg">
              서울, 경기, 부산, 대구, 광주 등 전국 주요 도시에 파트너사가
              위치하여 안정적인 공급망을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8 text-center">
          업계를 선도하는 파트너사들이 엘리콘을 신뢰합니다
        </h2>
        <div className="bg-white p-12 rounded-lg border-2 border-[--color-soft-gray]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center p-6 bg-[--color-soft-gray] rounded-lg"
              >
                <p className="text-xl font-bold text-[--color-deep-navy]">
                  {partner}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            그 외 다수의 낚시, 캠핑, 스포츠 전문점과 파트너십을 맺고 있습니다.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8 text-center">
          숫자가 아닌, 품질과 전문성으로 증명합니다
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[--color-deep-navy] to-[#2A3C5B] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              40년 업력 제조사 파트너십
            </h3>
            <p className="text-gray-200 leading-relaxed">
              한국오지케이(40년 업력)와 써모랩 등 검증된 A급 제조사와의 강력한
              파트너십을 통해 안정적인 공급망을 확보하고 있습니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[--color-bright-teal] to-[#00A893] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              시장 1위 브랜드 유통 노하우
            </h3>
            <p className="text-gray-100 leading-relaxed">
              국산 히트상품 쪼꼬미에기 등 시장에서 검증된 브랜드의 유통 경험을
              바탕으로 귀사의 성공적인 비즈니스를 지원합니다.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-[--color-soft-gray]">
            <h3 className="text-2xl font-bold text-[--color-deep-navy] mb-4">
              다양한 채널 전문성
            </h3>
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
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-[--color-soft-gray]">
            <h3 className="text-2xl font-bold text-[--color-deep-navy] mb-4">
              맞춤형 B2B 지원
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              귀사의 비즈니스 특성에 맞춘 맞춤형 지원 시스템을 제공합니다.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>- 유연한 주문 및 배송 시스템</li>
              <li>- 전문 매니저 1:1 상담</li>
              <li>- 안정적인 공급 보증</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
