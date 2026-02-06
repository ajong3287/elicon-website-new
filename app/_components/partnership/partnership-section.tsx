import FadeInSection from '@/app/_components/animations/FadeInSection';
import CountingNumber from '@/app/_components/animations/CountingNumber';

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
          <div className="bg-gradient-to-br from-[--color-deep-navy] to-[#2A3C5B] text-white p-8 rounded-lg relative overflow-hidden">
            {/* 노이즈 텍스처 */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>

            <h3 className="text-2xl font-bold mb-4 relative z-10">
              40년 업력 제조사 파트너십
            </h3>
            <p className="text-gray-200 leading-relaxed mb-6 relative z-10">
              한국오지케이(1981년 설립, 40년 업력)와 써모랩 등 검증된 A급 제조사와의 강력한
              파트너십을 통해 안정적인 공급망을 확보하고 있습니다.
            </p>

            {/* 핵심 강점 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              <div className="flex items-start space-x-2">
                <span className="text-[--color-bright-teal] text-lg">🏆</span>
                <div>
                  <p className="text-sm font-semibold">대통령 표창</p>
                  <p className="text-xs text-gray-300">2009년 수상</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[--color-bright-teal] text-lg">🏭</span>
                <div>
                  <p className="text-sm font-semibold">삼성 스마트공장</p>
                  <p className="text-xs text-gray-300">2022년 인증</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[--color-bright-teal] text-lg">🌱</span>
                <div>
                  <p className="text-sm font-semibold">ESG 경영 선언</p>
                  <p className="text-xs text-gray-300">2023년 7월</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[--color-bright-teal] text-lg">🌍</span>
                <div>
                  <p className="text-sm font-semibold">글로벌 생산</p>
                  <p className="text-xs text-gray-300">한국/중국/베트남</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[--color-bright-teal] to-[#00A893] text-white p-8 rounded-lg relative overflow-hidden">
            {/* 노이즈 텍스처 */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>

            <h3 className="text-2xl font-bold mb-4 relative z-10">
              시장 1위 브랜드 유통 노하우
            </h3>
            <p className="text-gray-100 leading-relaxed relative z-10">
              국산 히트상품 쪼꼬미에기 등 시장에서 검증된 브랜드의 유통 경험을
              바탕으로 귀사의 성공적인 비즈니스를 지원합니다.
            </p>
          </div>

          <div className="glass-card glass-hover p-8 rounded-lg relative overflow-hidden group">
            {/* 노이즈 텍스처 */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            {/* 호버 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-bright-teal]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-2xl font-bold text-[--color-deep-navy] mb-4 relative z-10">
              다양한 채널 전문성
            </h3>
            <ul className="space-y-3 text-gray-700 relative z-10">
              <li className="flex items-start">
                <span className="text-[--color-bright-teal] mr-3">✓</span>
                <span>낚시 전문점 유통 경험</span>
              </li>
              <li className="flex items-start">
                <span className="text-[--color-bright-teal] mr-3">✓</span>
                <span>캠핑 전문점 입점 노하우</span>
              </li>
              <li className="flex items-start">
                <span className="text-[--color-bright-teal] mr-3">✓</span>
                <span>스포츠 용품점 공급 실적</span>
              </li>
            </ul>
          </div>

          <div className="glass-card glass-hover p-8 rounded-lg relative overflow-hidden group">
            {/* 노이즈 텍스처 */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            {/* 호버 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-bright-teal]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-2xl font-bold text-[--color-deep-navy] mb-4 relative z-10">
              맞춤형 B2B 지원
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
              귀사의 비즈니스 특성에 맞춘 맞춤형 지원 시스템을 제공합니다.
            </p>
            <ul className="space-y-2 text-gray-600 relative z-10">
              <li>✓ 유연한 주문 및 배송 시스템</li>
              <li>✓ 전문 매니저 1:1 상담</li>
              <li>✓ 안정적인 공급 보증</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 새 섹션: B2B 핵심 혜택 (88낚시 방식) */}
      <FadeInSection>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8 text-center">
            엘리콘 파트너사만의 특별한 혜택
          </h2>
          <div className="bg-gradient-to-br from-[--color-soft-gray] to-white p-10 rounded-lg border-2 border-[--color-deep-navy]/10">
            <div className="grid md:grid-cols-3 gap-8">
              <FadeInSection delay={100}>
                <div className="text-center group">
                  <div className="bg-[--color-bright-teal] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
                  <h3 className="text-xl font-bold text-[--color-deep-navy] mb-3">재고 관리 지원</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    정기 배송 시스템으로 재고 부담 최소화. 예측 판매량 기반 자동 발주 시스템 제공.
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={300}>
                <div className="text-center group">
                  <div className="bg-[--color-bright-teal] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[--color-deep-navy] mb-3">월간 판매 리포트</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    품목별 판매 데이터 분석 및 트렌드 리포트 제공. 데이터 기반 재고 최적화 컨설팅.
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={500}>
                <div className="text-center group">
                  <div className="bg-[--color-bright-teal] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
                  <h3 className="text-xl font-bold text-[--color-deep-navy] mb-3">경쟁력 있는 가격</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    제조사 직영으로 중간 마진 제거. 대량 구매 시 추가 할인 혜택 제공.
                  </p>
                </div>
              </FadeInSection>
            </div>

          <div className="mt-10 pt-8 border-t border-gray-300">
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-[--color-deep-navy] mb-3">✓ 마케팅 지원</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 브랜드 홍보 자료 무료 제공</li>
                  <li>• SNS 마케팅 콘텐츠 공유</li>
                  <li>• 계절별 프로모션 기획 지원</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[--color-deep-navy] mb-3">✓ 교육 프로그램</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 제품 교육 및 판매 노하우 공유</li>
                  <li>• 온라인 교육 자료 제공</li>
                  <li>• 신제품 런칭 시 사전 교육</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </section>
      </FadeInSection>

      {/* 새 섹션: 파트너 성공 사례 (Tomato Glasses 방식) */}
      <FadeInSection>
        <section className="mb-16">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8 text-center">
          파트너사의 성공 사례
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <FadeInSection delay={200}>
            <div className="group bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-2xl hover:border-[--color-bright-teal]/50 hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-start mb-4">
              <div className="bg-[--color-bright-teal]/10 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-[--color-bright-teal]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[--color-deep-navy] mb-2">다솔낚시마트 (부산)</h3>
                <p className="text-sm text-gray-500 mb-3">파트너십 기간: 2년</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              "쪼꼬미에기 입점 후 두족류 루어 매출이 <strong>전년 대비 180% 증가</strong>했습니다.
              엘리콘의 재고 관리 시스템 덕분에 품절 걱정 없이 안정적으로 판매하고 있습니다."
            </p>
            <div className="flex items-center text-sm text-[--color-bright-teal] font-semibold group-hover:scale-105 transition-transform">
              <span className="mr-2">↑</span>
              <span>매출 180% 증가 · 재고 회전율 개선</span>
            </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="group bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-2xl hover:border-[--color-bright-teal]/50 hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-start mb-4">
              <div className="bg-[--color-bright-teal]/10 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-[--color-bright-teal]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[--color-deep-navy] mb-2">캠핑온 (서울)</h3>
                <p className="text-sm text-gray-500 mb-3">파트너십 기간: 3년</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Wing 브랜드 입점 후 아웃도어 고객층이 확대되었고,
              <strong> 전담 매니저의 신제품 정보 공유</strong>로 시즌 대응이 빨라졌습니다.
              월간 리포트로 인기 제품을 파악해 재고를 최적화하고 있습니다."
            </p>
            <div className="flex items-center text-sm text-[--color-bright-teal] font-semibold group-hover:scale-105 transition-transform">
              <span className="mr-2">↑</span>
              <span>신규 고객 30% 증가 · 재고 최적화 달성</span>
            </div>
            </div>
          </FadeInSection>
        </div>
        </section>
      </FadeInSection>
    </div>
  );
}
