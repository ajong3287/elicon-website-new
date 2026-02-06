import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import InstagramFeed from '@/app/_components/social/instagram-feed';

export const metadata: Metadata = {
  title: 'Cocolic - 우리 아이 눈 건강, 안전이 먼저입니다 | 엘리콘',
  description:
    '영유아기는 눈이 자라는 소중한 시기. KC 인증을 받은 안전한 아이웨어로 건강하게 지켜주세요. 45년 광학 노하우, 국내 제조.',
  keywords: '코코릭, Cocolic, 아동 선글라스, 유아 선글라스, 물안경, 수경, 블루라이트 차단, 스키고글, UV 차단, KC 인증, 국내 제조',
  openGraph: {
    title: 'Cocolic - 우리 아이 눈 건강, 안전이 먼저입니다',
    description: 'KC 인증을 받은 안전한 아이웨어. 45년 광학 노하우, 국내 제조.',
    images: ['/images/brands/cocolic-logo.jpg'],
  },
};

export default function CocolicBrandPage() {
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Cocolic",
    "alternateName": "코코릭",
    "description": "KC 인증을 받은 안전한 아동용 아이웨어 브랜드. 45년 광학 제조 노하우로 만든 신뢰할 수 있는 품질.",
    "logo": "https://elicon.co.kr/images/brands/cocolic-logo.jpg",
    "slogan": "우리 아이 눈 건강, 안전이 먼저입니다",
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 0,
      "suggestedMaxAge": 13
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Image
              src="/images/brands/cocolic-logo.jpg"
              alt="Cocolic 로고"
              width={300}
              height={156}
              className="mx-auto mb-8"
            />
            <h1 className="text-5xl font-brand text-[--color-cocolic-blue] mb-6 tracking-wide">
              Cocolic
            </h1>
            <p className="text-3xl text-[--color-cocolic-blue] leading-relaxed mb-6 font-semibold">
              우리 아이 눈 건강,<br />
              안전이 먼저입니다
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              영유아기는 눈이 자라는 소중한 시기.<br />
              KC 인증을 받은 안전한 제품으로 건강하게 지켜주세요.
            </p>
          </div>
        </section>

        {/* 왜 코코릭인가? */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-[--color-charcoal] mb-4 text-center">
            왜 코코릭인가?
          </h2>
          <p className="text-center text-gray-600 mb-10">
            세 가지 안심으로 우리 아이를 지킵니다
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* KC 인증 */}
            <div className="glass-card glass-hover p-8 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[--color-cocolic-blue] mb-3">
                  KC 인증 완료
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  모든 제품이 안전 기준을 통과한<br />
                  검증된 제품입니다
                </p>
                <div className="inline-block bg-green-50 px-3 py-1 rounded-full">
                  <span className="text-xs text-green-700 font-semibold">법적 필수 인증</span>
                </div>
              </div>
            </div>

            {/* 국내 제조 */}
            <div className="glass-card glass-hover p-8 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4">🇰🇷</div>
                <h3 className="text-xl font-bold text-[--color-cocolic-blue] mb-3">
                  국내 제조
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  45년 광학 제조 노하우로 만든<br />
                  신뢰할 수 있는 품질
                </p>
                <div className="inline-block bg-blue-50 px-3 py-1 rounded-full">
                  <span className="text-xs text-blue-700 font-semibold">1978년 설립</span>
                </div>
              </div>
            </div>

            {/* 검증된 유통 */}
            <div className="glass-card glass-hover p-8 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4">🏬</div>
                <h3 className="text-xl font-bold text-[--color-cocolic-blue] mb-3">
                  검증된 유통
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  신세계, 현대, 신라면세점에서<br />
                  만나보세요
                </p>
                <div className="inline-block bg-purple-50 px-3 py-1 rounded-full">
                  <span className="text-xs text-purple-700 font-semibold">주요 백화점 입점</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 엄마들의 선택 - 사회적 증거 강화 */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-[--color-charcoal] mb-4 text-center">
            전국 10,000+ 가정의 선택
          </h2>
          <p className="text-center text-gray-600 mb-10">
            숫자가 증명하는 신뢰
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 백화점 입점 */}
            <div className="glass-card glass-hover p-8 rounded-2xl text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4">🏬</div>
                <p className="text-4xl font-bold text-[--color-cocolic-blue] mb-2">3곳</p>
                <p className="text-lg font-semibold text-gray-700 mb-2">주요 백화점 입점</p>
                <p className="text-sm text-gray-500">신세계·현대·신라면세점</p>
              </div>
            </div>

            {/* 평균 만족도 */}
            <div className="glass-card glass-hover p-8 rounded-2xl text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4">⭐</div>
                <p className="text-4xl font-bold text-[--color-cocolic-blue] mb-2">4.9/5.0</p>
                <p className="text-lg font-semibold text-gray-700 mb-2">평균 만족도</p>
                <p className="text-sm text-gray-500">실제 구매 고객 리뷰</p>
              </div>
            </div>

            {/* 재구매율 */}
            <div className="glass-card glass-hover p-8 rounded-2xl text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4">🔄</div>
                <p className="text-4xl font-bold text-[--color-cocolic-blue] mb-2">87%</p>
                <p className="text-lg font-semibold text-gray-700 mb-2">재구매율</p>
                <p className="text-sm text-gray-500">두 번째 아이도 코코릭</p>
              </div>
            </div>
          </div>
        </section>

        {/* 부모의 여정 - 감성 스토리텔링 */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-[--color-charcoal] mb-4 text-center">
            코코릭과 함께하는 우리 아이의 첫 여름
          </h2>
          <p className="text-center text-gray-600 mb-10">
            엄마들의 진짜 이야기
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            {/* 1단계: 고민 */}
            <div className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-3">😟</div>
                <h3 className="text-lg font-bold text-[--color-cocolic-blue] mb-2">엄마의 고민</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  "첫 바캉스,<br />아이 눈은 안전할까?"
                </p>
              </div>
            </div>

            {/* 2단계: 선택 */}
            <div className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-3">🔍</div>
                <h3 className="text-lg font-bold text-[--color-cocolic-blue] mb-2">까다로운 선택</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  "예쁘지만 불안한 제품,<br />안전하지만 투박한 디자인"
                </p>
              </div>
            </div>

            {/* 3단계: 발견 */}
            <div className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-3">✨</div>
                <h3 className="text-lg font-bold text-[--color-cocolic-blue] mb-2">코코릭 발견</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  "KC 인증 + 국내 제조<br />+ 귀여운 디자인"
                </p>
              </div>
            </div>

            {/* 4단계: 만족 */}
            <div className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-3">💙</div>
                <h3 className="text-lg font-bold text-[--color-cocolic-blue] mb-2">행복한 여름</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  "아이가 스스로 착용하는<br />첫 선글라스"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 코코릭만의 3가지 약속 - 차별점 명확화 */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-[--color-charcoal] mb-4 text-center">
            코코릭만의 3가지 약속
          </h2>
          <p className="text-center text-gray-600 mb-10">
            우리가 다른 이유
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Only 1: 국내 유일 */}
            <div className="glass-card glass-hover p-8 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                  ONLY in Korea
                </div>
                <h3 className="text-2xl font-bold text-[--color-cocolic-blue] mb-4">
                  국내 유일
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  45년 광학 노하우 + KC 인증<br />
                  + 백화점 입점 브랜드
                </p>
                <p className="text-sm text-gray-500">
                  ※ 주요 3사 백화점 입점 유일
                </p>
              </div>
            </div>

            {/* Only 2: 전 연령 커버 */}
            <div className="glass-card glass-hover p-8 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                  0-12세 All Cover
                </div>
                <h3 className="text-2xl font-bold text-[--color-cocolic-blue] mb-4">
                  성장과 함께
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  신생아부터 초등학생까지<br />
                  한 브랜드로 해결
                </p>
                <p className="text-sm text-gray-500">
                  Baby → Toddler → Junior
                </p>
              </div>
            </div>

            {/* Only 3: 4계절 솔루션 */}
            <div className="glass-card glass-hover p-8 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                  365 Days
                </div>
                <h3 className="text-2xl font-bold text-[--color-cocolic-blue] mb-4">
                  사계절 보호
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  여름 선글라스부터 겨울 고글까지<br />
                  1년 내내 우리 아이 눈 건강
                </p>
                <p className="text-sm text-gray-500">
                  선글라스·물안경·블루라이트·고글
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 사이즈 가이드 */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-[--color-charcoal] mb-4 text-center">
            우리 아이에게 딱 맞는 사이즈
          </h2>
          <p className="text-center text-gray-600 mb-10">
            나이만 알면 끝! 간편한 사이즈 가이드
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="text-xl font-bold text-[--color-cocolic-blue] mb-2">
                Baby
              </h3>
              <p className="text-2xl font-semibold text-gray-700 mb-2">0-2세</p>
              <p className="text-sm text-gray-600">신생아부터 걸음마기까지</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-4xl mb-3">👧</div>
              <h3 className="text-xl font-bold text-[--color-cocolic-blue] mb-2">
                Toddler
              </h3>
              <p className="text-2xl font-semibold text-gray-700 mb-2">3-5세</p>
              <p className="text-sm text-gray-600">유치원 입학 전후</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-4xl mb-3">🧒</div>
              <h3 className="text-xl font-bold text-[--color-cocolic-blue] mb-2">
                Junior
              </h3>
              <p className="text-2xl font-semibold text-gray-700 mb-2">6-12세</p>
              <p className="text-sm text-gray-600">초등학생</p>
            </div>
          </div>
        </section>

        {/* 제품 라인업 - 사용 시나리오 */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-[--color-charcoal] mb-4 text-center">
            사계절 우리 아이와 함께
          </h2>
          <p className="text-center text-gray-600 mb-10">
            계절마다 필요한 아이웨어가 있습니다
          </p>

          <div className="space-y-6">
            {/* 여름 - 선글라스 */}
            <div className="glass-card glass-hover p-8 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">☀️</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-[--color-cocolic-blue]">
                      여름 바캉스
                    </h3>
                    <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">
                      선글라스
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    뜨거운 햇살도, 눈부신 빛도 걱정없어요.<br />
                    UV 차단 99.9%의 안전함으로 우리 아이의 여름을 지켜줍니다.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-[--color-cocolic-blue]">•</span>
                      <span>UV 차단 99.9% (UVA + UVB)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[--color-cocolic-blue]">•</span>
                      <span>김서림 방지 코팅</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[--color-cocolic-blue]">•</span>
                      <span>부드러운 실리콘 코패드</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 물놀이 - 물안경 */}
            <div className="glass-card glass-hover p-8 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">🏊</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-[--color-cocolic-blue]">
                      신나는 물놀이
                    </h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                      물안경
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    첫 물놀이, 세상을 또렷하게 볼 수 있어요.<br />
                    빅렌즈 광각 시야로 수중 세계를 안전하게 탐험합니다.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-[--color-cocolic-blue]">•</span>
                      <span>빅렌즈 광각 시야</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[--color-cocolic-blue]">•</span>
                      <span>안전 고글 타입 (3-8세 아동용)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[--color-cocolic-blue]">•</span>
                      <span>부드러운 실리콘 밴드</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 디지털 - 블루라이트 */}
            <div className="glass-card glass-hover p-8 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">💻</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-[--color-cocolic-blue]">
                      디지털 시대
                    </h3>
                    <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">
                      블루라이트 차단
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    스마트폰, 태블릿 사용이 늘어나는 시대.<br />
                    블루라이트로부터 우리 아이 눈 건강을 지켜줍니다.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-[--color-cocolic-blue]">•</span>
                      <span>블루라이트 차단 렌즈</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[--color-cocolic-blue]">•</span>
                      <span>눈의 피로 감소</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[--color-cocolic-blue]">•</span>
                      <span>가벼운 프레임</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 겨울 - 스키고글 */}
            <div className="glass-card glass-hover p-8 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">⛷️</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-[--color-cocolic-blue]">
                      겨울 스포츠
                    </h3>
                    <span className="text-sm bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full font-semibold">
                      스키고글
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    첫 스키장, 첫 눈썰매.<br />
                    바람과 눈으로부터 시야를 확보하고 안전하게 즐깁니다.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-[--color-cocolic-blue]">•</span>
                      <span>김서림 방지 이중 렌즈</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[--color-cocolic-blue]">•</span>
                      <span>넓은 시야각</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[--color-cocolic-blue]">•</span>
                      <span>헬멧 호환 가능</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 부모의 마음 */}
        <section className="mb-20">
          <div className="glass-card p-12 rounded-2xl text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-cocolic-blue]/10 to-transparent"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="text-5xl mb-6">💙</div>
              <p className="text-2xl text-[--color-cocolic-blue] font-semibold leading-relaxed mb-6">
                "내 아이에게는<br />
                안전을 우선 먼저 생각해요"
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                코코릭은 안전을 최우선으로 생각하고,<br />
                합리적인 가격으로 품질을 지켜냅니다.
              </p>
              <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="text-gray-700 font-semibold">4.9/5.0</span>
              </div>
            </div>
          </div>
        </section>

        {/* 엄마들의 진짜 후기 */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-[--color-charcoal] mb-4 text-center">
            엄마들의 진짜 후기
          </h2>
          <p className="text-center text-gray-600 mb-6">
            실제 구매 고객들의 생생한 이야기
          </p>

          {/* 통계 요약 */}
          <div className="flex items-center justify-center gap-8 mb-10 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📝</span>
              <span className="text-gray-700 font-semibold">10+ 실제 리뷰</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-700 font-semibold">5.0 평균</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔄</span>
              <span className="text-gray-700 font-semibold">87% 재구매</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 리뷰 1 - 김*영 */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[--color-cocolic-blue] rounded-full flex items-center justify-center text-white font-bold">
                      김
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">김*영 님</p>
                      <p className="text-xs text-gray-500">3세 남아 엄마</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  "KC 인증 받은 제품이라 안심하고 샀어요.
                  처음엔 선글라스 쓰기 싫어하던 아이가
                  이젠 스스로 찾아 써요!"
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">선글라스</span>
                  <span>2024.08</span>
                </div>
              </div>
            </div>

            {/* 리뷰 2 - 박*현 */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[--color-cocolic-blue] rounded-full flex items-center justify-center text-white font-bold">
                      박
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">박*현 님</p>
                      <p className="text-xs text-gray-500">5세 여아 엄마</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  "물놀이 갈 때마다 필수템이에요.
                  김서림도 안 생기고,
                  렌즈가 넓어서 시야가 좋대요!"
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">물안경</span>
                  <span>2024.07</span>
                </div>
              </div>
            </div>

            {/* 리뷰 3 - 이*주 */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[--color-cocolic-blue] rounded-full flex items-center justify-center text-white font-bold">
                      이
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">이*주 님</p>
                      <p className="text-xs text-gray-500">7세 남아 엄마</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  "온라인 수업 많아서 걱정이었는데,
                  코코릭 쓰고 나서 눈 피로 덜하다고 해요.
                  디자인도 예뻐서 아이가 좋아해요."
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">블루라이트</span>
                  <span>2024.09</span>
                </div>
              </div>
            </div>

            {/* 리뷰 4 - 최*민 */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[--color-cocolic-blue] rounded-full flex items-center justify-center text-white font-bold">
                      최
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">최*민 님</p>
                      <p className="text-xs text-gray-500">4세 여아 엄마</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  "신세계백화점에서 봤는데
                  너무 예뻐서 바로 샀어요.
                  가격도 합리적이고 품질도 좋아요!"
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">선글라스</span>
                  <span>2024.06</span>
                </div>
              </div>
            </div>

            {/* 리뷰 5 - 정*아 */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[--color-cocolic-blue] rounded-full flex items-center justify-center text-white font-bold">
                      정
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">정*아 님</p>
                      <p className="text-xs text-gray-500">6세 남아 엄마</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  "여름 내내 수영장 다녔는데
                  한 번도 물 안 샀어요.
                  코코·코리·릭 캐릭터도 귀여워요!"
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">물안경</span>
                  <span>2024.08</span>
                </div>
              </div>
            </div>

            {/* 리뷰 6 - 강*우 */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[--color-cocolic-blue] rounded-full flex items-center justify-center text-white font-bold">
                      강
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">강*우 님</p>
                      <p className="text-xs text-gray-500">쿠팡 구매</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  "UV 차단 99.9%라고 해서 샀는데,
                  여름 내내 뜨거운 햇살 아래에서도
                  눈 건강 걱정 없었어요. 추천합니다!"
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">선글라스</span>
                  <span>2024.07</span>
                </div>
              </div>
            </div>

            {/* 리뷰 7 - 윤*서 */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[--color-cocolic-blue] rounded-full flex items-center justify-center text-white font-bold">
                      윤
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">윤*서 님</p>
                      <p className="text-xs text-gray-500">쿠팡 구매</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  "3세 아이 처음 물안경인데,
                  빅렌즈라서 시야가 넓고
                  착용감도 편하대요. 재구매 예정!"
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">물안경</span>
                  <span>2024.06</span>
                </div>
              </div>
            </div>

            {/* 리뷰 8 - 조*희 */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[--color-cocolic-blue] rounded-full flex items-center justify-center text-white font-bold">
                      조
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">조*희 님</p>
                      <p className="text-xs text-gray-500">쿠팡 구매</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  "가격이 부담 없어서 좋아요.
                  디자인도 예쁘고,
                  아이가 캐릭터 너무 좋아해요."
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">선글라스</span>
                  <span>2024.08</span>
                </div>
              </div>
            </div>

            {/* 리뷰 9 - 임*진 */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[--color-cocolic-blue] rounded-full flex items-center justify-center text-white font-bold">
                      임
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">임*진 님</p>
                      <p className="text-xs text-gray-500">쿠팡 구매</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  "디지털 기기 사용 많은 요즘,
                  눈 건강 지키려고 샀어요.
                  무독성 소재라서 안심하고 써요."
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">블루라이트</span>
                  <span>2024.09</span>
                </div>
              </div>
            </div>

            {/* 리뷰 10 - 한*민 */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[--color-cocolic-blue] rounded-full flex items-center justify-center text-white font-bold">
                      한
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">한*민 님</p>
                      <p className="text-xs text-gray-500">쿠팡 구매</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  "김서림 방지 기능 정말 좋아요.
                  수영 배우는 아이 수경 벗을 일이 없어서
                  연습에 집중할 수 있어요!"
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">물안경</span>
                  <span>2024.07</span>
                </div>
              </div>
            </div>
          </div>

          {/* 제품 분포 및 안내 */}
          <div className="mt-10 text-center space-y-2">
            <p className="text-sm text-gray-600">
              선글라스 5개 · 물안경 4개 · 블루라이트 차단 안경 2개
            </p>
            <p className="text-xs text-gray-500">
              ※ 실제 고객 리뷰를 바탕으로 재구성한 내용입니다.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-[--color-charcoal] mb-4 text-center">
            자주 묻는 질문
          </h2>
          <p className="text-center text-gray-600 mb-10">
            궁금한 점을 빠르게 해결해드려요
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-[--color-cocolic-blue] mb-3 flex items-center gap-2">
                <span className="text-xl">💡</span>
                <span>KC 인증이 왜 중요한가요?</span>
              </h3>
              <p className="text-gray-700 leading-relaxed pl-8">
                KC 인증은 어린이제품 안전 특별법에 따라 의무적으로 받아야 하는
                국가 안전 인증입니다. 유해 물질, 물리적 안전성, 내구성 등을
                엄격하게 검사하기 때문에 아이들이 안심하고 사용할 수 있습니다.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-[--color-cocolic-blue] mb-3 flex items-center gap-2">
                <span className="text-xl">👶</span>
                <span>신생아도 사용할 수 있나요?</span>
              </h3>
              <p className="text-gray-700 leading-relaxed pl-8">
                Baby 라인(0-2세)은 신생아부터 사용 가능합니다.
                부드러운 실리콘 소재와 가볍운 프레임으로 아이의 연약한 피부와
                두개골에 무리가 가지 않도록 설계되었습니다.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-[--color-cocolic-blue] mb-3 flex items-center gap-2">
                <span className="text-xl">📏</span>
                <span>사이즈를 잘못 선택하면 어떻게 하나요?</span>
              </h3>
              <p className="text-gray-700 leading-relaxed pl-8">
                구매처별 교환/반품 정책에 따라 사이즈 교환이 가능합니다.
                신세계, 현대, 신라면세점 등 오프라인 매장에서는 직접 착용해보고
                구매하실 수 있어 더욱 안심입니다.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-[--color-cocolic-blue] mb-3 flex items-center gap-2">
                <span className="text-xl">🧼</span>
                <span>세척 및 관리는 어떻게 하나요?</span>
              </h3>
              <p className="text-gray-700 leading-relaxed pl-8">
                미지근한 물에 중성 세제를 소량 풀어 부드럽게 세척한 후
                깨끗한 물로 헹궈주세요. 직사광선을 피해 그늘에서 자연 건조하시면
                됩니다. 뜨거운 물이나 화학 세제는 렌즈 코팅을 손상시킬 수 있어
                주의가 필요합니다.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-[--color-cocolic-blue] mb-3 flex items-center gap-2">
                <span className="text-xl">🛒</span>
                <span>어디서 구매할 수 있나요?</span>
              </h3>
              <p className="text-gray-700 leading-relaxed pl-8">
                오프라인: 신세계백화점, 현대백화점, 신라면세점<br />
                온라인: 무신사, 신세계몰, W Concept, 엘리콘 공식 쇼핑몰<br />
                다양한 채널에서 만나보실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 안심 보장 - 품질 관리 프로세스 시각화 */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-[--color-charcoal] mb-4 text-center">
            코코릭의 안심 보장
          </h2>
          <p className="text-center text-gray-600 mb-10">
            KC 인증부터 배송까지, 철저한 품질 관리 시스템
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {/* Step 1: 원자재 검수 */}
            <div className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                  STEP 1
                </div>
                <div className="text-4xl mb-3">🔬</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">원자재 검수</h3>
                <p className="text-sm text-gray-600">
                  무독성 소재 선별<br />
                  유해물질 사전 차단
                </p>
              </div>
            </div>

            {/* Step 2: KC 인증 획득 */}
            <div className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                  STEP 2
                </div>
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">KC 인증</h3>
                <p className="text-sm text-gray-600">
                  국가 안전 검사<br />
                  어린이제품 특별법 준수
                </p>
              </div>
            </div>

            {/* Step 3: 품질 검사 */}
            <div className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                  STEP 3
                </div>
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">품질 검사</h3>
                <p className="text-sm text-gray-600">
                  전수 검사 실시<br />
                  불량품 0% 목표
                </p>
              </div>
            </div>

            {/* Step 4: 안전 포장 */}
            <div className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                  STEP 4
                </div>
                <div className="text-4xl mb-3">📦</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">안전 포장</h3>
                <p className="text-sm text-gray-600">
                  파손 방지 포장<br />
                  깨끗한 상태로 배송
                </p>
              </div>
            </div>
          </div>

          {/* 45년 노하우 강조 */}
          <div className="glass-card p-8 rounded-2xl text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-cocolic-blue]/5 to-transparent"></div>

            <div className="relative z-10">
              <p className="text-2xl font-bold text-[--color-cocolic-blue] mb-3">
                1978년부터 45년간 축적된 광학 기술
              </p>
              <p className="text-gray-700 leading-relaxed">
                한국오지케이의 45년 광학 제조 노하우가 코코릭의 모든 제품에 녹아있습니다.<br />
                대통령 표창(2009), 삼성 스마트공장 인증(2022)으로 검증된 기술력을 믿으세요.
              </p>
            </div>
          </div>
        </section>

        {/* 비교표 - 코코릭 vs 일반 브랜드 */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-[--color-charcoal] mb-4 text-center">
            왜 코코릭일까요?
          </h2>
          <p className="text-center text-gray-600 mb-10">
            일반 브랜드와 확실히 다릅니다
          </p>

          <div className="glass-card p-8 rounded-2xl overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="pb-4 pr-4 text-gray-700 font-bold text-lg">비교 항목</th>
                  <th className="pb-4 px-4 text-[--color-cocolic-blue] font-bold text-lg text-center">
                    코코릭 ✅
                  </th>
                  <th className="pb-4 pl-4 text-gray-500 font-bold text-lg text-center">
                    일반 브랜드
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* KC 인증 */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-4 font-semibold text-gray-800">
                    KC 인증<br />
                    <span className="text-sm text-gray-500 font-normal">
                      (국가 안전 검사)
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold">
                      ✅ 인증 완료
                    </div>
                  </td>
                  <td className="py-4 pl-4 text-center">
                    <div className="inline-block bg-gray-100 text-gray-500 px-4 py-2 rounded-lg">
                      ❓ 미확인
                    </div>
                  </td>
                </tr>

                {/* 백화점 입점 */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-4 font-semibold text-gray-800">
                    백화점 입점<br />
                    <span className="text-sm text-gray-500 font-normal">
                      (신세계·현대·신라)
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-bold">
                      ✅ 3곳 입점
                    </div>
                  </td>
                  <td className="py-4 pl-4 text-center">
                    <div className="inline-block bg-gray-100 text-gray-500 px-4 py-2 rounded-lg">
                      ❌ 온라인만
                    </div>
                  </td>
                </tr>

                {/* 제조 노하우 */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-4 font-semibold text-gray-800">
                    제조 노하우<br />
                    <span className="text-sm text-gray-500 font-normal">
                      (광학 전문성)
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-bold">
                      ✅ 45년
                    </div>
                  </td>
                  <td className="py-4 pl-4 text-center">
                    <div className="inline-block bg-gray-100 text-gray-500 px-4 py-2 rounded-lg">
                      ❓ 미공개
                    </div>
                  </td>
                </tr>

                {/* 품질 보증 */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-4 font-semibold text-gray-800">
                    품질 보증<br />
                    <span className="text-sm text-gray-500 font-normal">
                      (전수 검사)
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold">
                      ✅ 100% 검사
                    </div>
                  </td>
                  <td className="py-4 pl-4 text-center">
                    <div className="inline-block bg-gray-100 text-gray-500 px-4 py-2 rounded-lg">
                      ❓ 샘플링
                    </div>
                  </td>
                </tr>

                {/* 디자인 차별화 */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-4 font-semibold text-gray-800">
                    디자인<br />
                    <span className="text-sm text-gray-500 font-normal">
                      (캐릭터 브랜딩)
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg font-bold">
                      ✅ 코코·코리·릭
                    </div>
                  </td>
                  <td className="py-4 pl-4 text-center">
                    <div className="inline-block bg-gray-100 text-gray-500 px-4 py-2 rounded-lg">
                      ❌ 없음
                    </div>
                  </td>
                </tr>

                {/* A/S 지원 */}
                <tr>
                  <td className="py-4 pr-4 font-semibold text-gray-800">
                    A/S 지원<br />
                    <span className="text-sm text-gray-500 font-normal">
                      (고객 센터)
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold">
                      ✅ 365일
                    </div>
                  </td>
                  <td className="py-4 pl-4 text-center">
                    <div className="inline-block bg-gray-100 text-gray-500 px-4 py-2 rounded-lg">
                      ❓ 제한적
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 결론 메시지 */}
          <div className="mt-6 text-center">
            <p className="text-lg text-gray-700">
              <span className="font-bold text-[--color-cocolic-blue]">코코릭</span>은
              단순히 예쁘기만 한 브랜드가 아닙니다.<br />
              <span className="font-bold">안전, 품질, 디자인</span> 모두를 갖춘
              <span className="font-bold text-[--color-cocolic-blue]"> 프리미엄 키즈 아이웨어</span>입니다.
            </p>
          </div>
        </section>

        {/* 구매처 안내 */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-[--color-charcoal] mb-4 text-center">
            코코릭을 만날 수 있는 곳
          </h2>
          <p className="text-center text-gray-600 mb-10">
            신뢰할 수 있는 유통 채널에서 만나보세요
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 오프라인 */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-[--color-cocolic-blue] mb-4 flex items-center gap-2">
                <span>🏬</span>
                <span>오프라인</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-[--color-cocolic-blue] font-bold">•</span>
                  <span>신세계백화점</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[--color-cocolic-blue] font-bold">•</span>
                  <span>현대백화점</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[--color-cocolic-blue] font-bold">•</span>
                  <span>신라면세점</span>
                </li>
              </ul>
            </div>

            {/* 온라인 */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-[--color-cocolic-blue] mb-4 flex items-center gap-2">
                <span>💻</span>
                <span>온라인</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-[--color-cocolic-blue] font-bold">•</span>
                  <span>무신사(Musinsa)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[--color-cocolic-blue] font-bold">•</span>
                  <span>신세계몰(SSG.com)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[--color-cocolic-blue] font-bold">•</span>
                  <span>W Concept</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-[--color-cocolic-blue] to-blue-600 text-white p-12 rounded-2xl text-center shadow-xl hover:shadow-2xl transition-shadow">
            <h2 className="text-3xl font-bold mb-4">코코릭 제품 만나기</h2>
            <p className="text-lg mb-8 text-blue-100">
              안전하고 예쁜 아이웨어,<br />
              지금 엘리콘 쇼핑몰에서 만나보세요!
            </p>
            <a
              href="https://eliconstore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[--color-cocolic-blue] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              쇼핑몰 바로가기 →
            </a>
          </div>
        </section>

        {/* 인스타그램 피드 */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-[--color-charcoal] mb-4 text-center">
            코코릭 일상
          </h2>
          <p className="text-center text-gray-600 mb-10">
            인스타그램에서 더 많은 이야기를 만나보세요
          </p>
          <InstagramFeed username="cocolic.official" />
        </section>
      </div>
    </>
  );
}
