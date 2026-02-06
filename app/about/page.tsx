import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회사 소개 | 엘리콘',
  description:
    '국내 제조품 엄선, 토종 유통 전문가 엘리콘. 40년 업력의 한국오지케이와 써모랩의 강력한 파트너십.',
};

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "엘리콘",
    "alternateName": "Elicon",
    "url": "https://elicon.co.kr",
    "logo": "https://elicon.co.kr/logo.png",
    "description": "국내 제조품 엄선, 토종 유통 전문가. 한국오지케이(OGK)와 써모랩의 브랜드를 운영하며 B2B 유통 전문성을 바탕으로 신뢰할 수 있는 제품을 공급합니다.",
    "foundingDate": "2015",
    "knowsAbout": ["B2B 유통", "제조사 파트너십", "생활용품", "주방용품", "보온병"],
    "areaServed": {
      "@type": "Country",
      "name": "대한민국"
    },
    "brand": [
      {
        "@type": "Brand",
        "name": "윙(WING)",
        "description": "스포츠고글, 스키고글, 수경 전문 브랜드"
      },
      {
        "@type": "Brand",
        "name": "코코릭(Cocolic)",
        "description": "아동용 아이웨어 전문 브랜드"
      },
      {
        "@type": "Brand",
        "name": "씨넥스(Seanex)",
        "description": "에기 전문 브랜드 (쪼꼬미에기, 엉뚱이에기, 매끄니에기, 은비늘멸치)"
      }
    ],
    "member": [
      {
        "@type": "Organization",
        "name": "한국오지케이",
        "alternateName": "OGK",
        "foundingDate": "1978",
        "description": "45년 업력의 광학 제조사. Wing 브랜드 제조 파트너. 대통령 표창(2009), 삼성 스마트공장 인증, ESG 경영 선언"
      },
      {
        "@type": "Organization",
        "name": "써모랩",
        "description": "에기 전문 제조사. Seanex 브랜드 제조 파트너"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-heading text-[--color-charcoal] mb-8">
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
        <h2 className="text-3xl font-heading text-[--color-charcoal] mb-8">
          핵심 철학
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
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

            <h3 className="text-xl font-semibold text-[--color-deep-navy] mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
              국내 제조품 엄선
            </h3>
            <p className="text-gray-700 leading-relaxed relative z-10">
              검증된 국내 제조사의 제품만을 엄선하여 공급합니다. 품질과 신뢰를
              최우선 가치로 삼습니다.
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

            <h3 className="text-xl font-semibold text-[--color-deep-navy] mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
              토종 유통 전문가
            </h3>
            <p className="text-gray-700 leading-relaxed relative z-10">
              오랜 경험을 바탕으로 구축한 안정적인 유통망으로 B2B 파트너에게
              신뢰할 수 있는 공급 서비스를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-heading text-[--color-charcoal] mb-8">
          A급 제조사 파트너십
        </h2>
        <div className="space-y-8">
          {/* 한국오지케이 */}
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
            {/* 배경 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-wing-red]/5 via-transparent to-[--color-wing-red]/10 opacity-50"></div>

            <h3 className="text-2xl font-bold text-[--color-wing-red] mb-4 relative z-10">
              주식회사 한국오지케이 (45년 업력)
            </h3>
            <p className="text-lg text-[--color-deep-navy] font-semibold mb-4 relative z-10">
              1978년 설립 | 4대째 이어온 광학 제조 명가 | Wing 브랜드 제조 파트너
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
              1978년 설립 이래 45년 이상 광학 제품 제조 분야에서 독보적인 기술력과
              품질을 인정받아온 A급 제조사입니다. 4대째 이어온 장인 정신과
              최신 광학 기술의 결합으로 스포츠고글, 스키고글, 수경 분야에서
              국내외 시장에서 신뢰받는 Wing 브랜드를 생산하고 있습니다.
            </p>

            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div>
                <p className="text-sm text-gray-600 mb-1">설립</p>
                <p className="font-semibold text-[--color-wing-red]">1978년</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">업력</p>
                <p className="font-semibold text-[--color-wing-red]">45년 이상</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">생산 거점</p>
                <p className="font-semibold text-[--color-wing-red]">
                  한국/중국/베트남
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">전문 분야</p>
                <p className="font-semibold text-[--color-wing-red]">
                  광학 제품 제조
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">제조 방식</p>
                <p className="font-semibold text-[--color-wing-red]">
                  ODM/OEM/OBM
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">등급</p>
                <p className="font-semibold text-[--color-wing-red]">
                  A급 제조사
                </p>
              </div>
            </div>

            {/* ESG 경영 */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg relative z-10">
              <p className="text-sm font-semibold text-green-700 mb-2">
                🌱 ESG 경영 선언 (2023년 7월)
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                "환경을 위한 노력. 나부터, 우리부터, 작은 것부터 시작하겠습니다." - 박수안 회장
              </p>
            </div>

            {/* 인증 및 수상 */}
            <div className="mt-6 grid md:grid-cols-2 gap-4 relative z-10">
              <div className="flex items-start space-x-2">
                <span className="text-[--color-wing-red]">🏆</span>
                <span className="text-sm text-gray-700">대통령 표창 (2009)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[--color-wing-red]">🏭</span>
                <span className="text-sm text-gray-700">삼성 스마트공장 (2022)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[--color-wing-red]">🔬</span>
                <span className="text-sm text-gray-700">기업부설연구소 운영</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[--color-wing-red]">🌍</span>
                <span className="text-sm text-gray-700">북미 수출 40년+ 경험</span>
              </div>
            </div>
          </div>

          {/* 써모랩 */}
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
            {/* 배경 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 via-transparent to-[--color-seanex-cyan]/10 opacity-50"></div>

            <h3 className="text-2xl font-bold text-[--color-seanex-cyan] mb-4 relative z-10">
              써모랩 (에기 전문 제조사)
            </h3>
            <p className="text-lg text-[--color-deep-navy] font-semibold mb-4 relative z-10">
              쪼꼬미에기 시장 1위, Seanex 브랜드 제조 파트너
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
              써모랩은 혁신적인 기술력으로 에기 전문 제조사로 자리매김한 국산
              제조사입니다. 쪼꼬미에기를 비롯해 엉뚱이에기, 매끄니에기, 은비늘멸치 등
              검증된 제품들로 낚시 시장에서의 신뢰를 쌓아왔으며, Seanex 브랜드를 통해
              에기 분야의 전문성을 입증하고 있습니다.
            </p>

            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <div>
                <p className="text-sm text-gray-600 mb-1">대표 제품</p>
                <p className="font-semibold text-[--color-seanex-cyan]">
                  쪼꼬미에기 (55,578 리뷰)
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">제품 라인업</p>
                <p className="font-semibold text-[--color-seanex-cyan] text-sm">
                  엉뚱이, 매끄니, 은비늘멸치
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">전문 분야</p>
                <p className="font-semibold text-[--color-seanex-cyan]">
                  에기 (주꾸미/갑오징어 전용)
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">시장 평가</p>
                <p className="font-semibold text-[--color-seanex-cyan]">
                  국내 시장점유율 1위
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-heading text-[--color-charcoal] mb-8">
          채널 전문성
        </h2>
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

          <p className="text-lg text-gray-700 leading-relaxed mb-4 relative z-10">
            다양한 오프라인 채널에서의 풍부한 경험을 보유하고 있습니다.
          </p>
          <ul className="space-y-3 text-gray-700 relative z-10">
            <li className="flex items-start">
              <span className="text-[--color-bright-teal] mr-3 font-bold">•</span>
              <span>낚시 전문점 유통 경험</span>
            </li>
            <li className="flex items-start">
              <span className="text-[--color-bright-teal] mr-3 font-bold">•</span>
              <span>캠핑 전문점 입점 노하우</span>
            </li>
            <li className="flex items-start">
              <span className="text-[--color-bright-teal] mr-3 font-bold">•</span>
              <span>스포츠 용품점 공급 실적</span>
            </li>
            <li className="flex items-start">
              <span className="text-[--color-bright-teal] mr-3 font-bold">•</span>
              <span>온라인 판매 채널 운영 경험</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
    </>
  );
}
