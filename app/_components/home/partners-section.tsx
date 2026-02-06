import ScrollReveal from '@/app/_components/animations/ScrollReveal';

export default function PartnersSection() {
  // 실제 파트너사 로고 경로로 교체 필요
  const partners = [
    { name: '조이웍스', logo: '' },
    { name: '다솔낚시마트', logo: '' },
    { name: '한국OGK', logo: '' },
    { name: '써모랩', logo: '' },
    // ... 총 39개 파트너사
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[--color-charcoal] mb-4">
              <span className="text-[--color-bright-teal]">39개</span> 파트너사와 함께 성장합니다
            </h2>
            <p className="text-xl text-gray-600">
              전국 유통망을 통한 안정적인 공급 체계
            </p>
          </div>
        </ScrollReveal>

        {/* 신뢰 배지 */}
        <ScrollReveal direction="scale" delay={0.3}>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="scroll-fade-in bg-gradient-to-br from-[--color-bright-teal]/10 to-blue-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-[--color-bright-teal] mb-2">
                39+
              </div>
              <div className="text-sm text-gray-700 font-medium">
                전국 유통 파트너
              </div>
            </div>
            <div className="scroll-fade-in bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                100%
              </div>
              <div className="text-sm text-gray-700 font-medium">
                계약 유지율
              </div>
            </div>
            <div className="scroll-fade-in bg-gradient-to-br from-purple-50 to-orange-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                5년+
              </div>
              <div className="text-sm text-gray-700 font-medium">
                평균 파트너십 기간
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 주요 파트너사 */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-200">
            <h3 className="text-2xl font-bold text-[--color-charcoal] mb-8 text-center">
              주요 파트너사
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                '조이웍스',
                '다솔낚시마트',
                '한국OGK',
                '써모랩',
                '온라인 유통사',
                '오프라인 매장',
                'B2B 도매',
                '+ 32개사',
              ].map((partner, index) => (
                <div
                  key={partner}
                  className="scroll-scale-in group flex items-center justify-center h-24 bg-white rounded-xl border-2 border-gray-100 hover:border-[--color-bright-teal]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-center px-4">
                    {/* 실제 로고가 있으면 이미지로 교체 */}
                    <div className="text-lg font-bold text-gray-400 group-hover:text-[--color-bright-teal] transition-colors">
                      {partner}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
              * 로고 이미지는 별도 제공 시 업데이트 예정
            </p>
          </div>
        </ScrollReveal>

        {/* 파트너 혜택 */}
        <ScrollReveal direction="up" delay={0.7}>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[--color-bright-teal]/5 to-blue-50 rounded-xl p-8">
              <h4 className="text-xl font-bold text-[--color-charcoal] mb-4">
                🎯 파트너 전용 혜택
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[--color-bright-teal] mt-1">✓</span>
                  <span className="text-gray-700">전담 매니저 배정 및 24시간 지원</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[--color-bright-teal] mt-1">✓</span>
                  <span className="text-gray-700">월간 판매 데이터 및 트렌드 리포트</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[--color-bright-teal] mt-1">✓</span>
                  <span className="text-gray-700">신제품 우선 공급 및 마케팅 지원</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
              <h4 className="text-xl font-bold text-[--color-charcoal] mb-4">
                💼 파트너 유형
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span className="text-gray-700">온라인 쇼핑몰 (B2C/B2B)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span className="text-gray-700">오프라인 매장 (스포츠/아웃도어)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span className="text-gray-700">도매/유통 업체</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
