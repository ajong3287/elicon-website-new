'use client'

import { useState } from 'react'
import FadeInSection from '@/app/_components/animations/FadeInSection'
import { Calculator, TrendingDown, Clock, DollarSign, CheckCircle2 } from 'lucide-react'

/**
 * TCO (Total Cost of Ownership) 계산기 섹션
 *
 * 사용 기간별 총 비용 비교:
 * - Wing (45,000원, 3년 내구성)
 * - 프리미엄 브랜드 (220,000원, 5년 내구성)
 * - 저가 브랜드 (10,000원, 1년 내구성)
 *
 * 인터랙티브 요소:
 * - 기간 슬라이더 (1-10년)
 * - 실시간 비용 계산
 * - 절감액 시각화
 */

interface TCOData {
  brand: string
  unitPrice: number
  lifespan: number // 내구성 (년)
  color: string
}

const products: TCOData[] = [
  {
    brand: 'Wing',
    unitPrice: 45000,
    lifespan: 3,
    color: 'var(--color-wing-red)',
  },
  {
    brand: '프리미엄 브랜드',
    unitPrice: 220000,
    lifespan: 5,
    color: '#000000',
  },
  {
    brand: '저가 브랜드',
    unitPrice: 10000,
    lifespan: 1,
    color: '#999999',
  },
]

export function TCOCalculatorSection() {
  const [years, setYears] = useState<number>(3)

  // TCO 계산 함수
  const calculateTCO = (product: TCOData, years: number): number => {
    const replacements = Math.ceil(years / product.lifespan)
    return product.unitPrice * replacements
  }

  // 각 제품 TCO
  const wingTCO = calculateTCO(products[0], years)
  const oakleyTCO = calculateTCO(products[1], years)
  const chinaTCO = calculateTCO(products[2], years)

  // 절감액 계산
  const vsOakley = oakleyTCO - wingTCO
  const vsChina = chinaTCO - wingTCO

  // 최대값 (그래프 스케일용)
  const maxTCO = Math.max(wingTCO, oakleyTCO, chinaTCO)

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Effects */}
      <div className="noise-overlay" />

      <div className="container relative z-10">
        {/* Header */}
        <FadeInSection delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 mb-6">
              <Calculator className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-900">TCO 계산기</span>
            </div>

            <h2 className="playfair text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              똑똑한 소비
              <span className="block text-red-600 mt-2">장기적으로 Wing이 가장 합리적</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              초기 가격만 보지 마세요. <span className="font-semibold text-gray-900">Total Cost of Ownership</span>를 비교하세요.
              <br />
              내구성까지 고려하면 Wing이 가장 합리적입니다.
            </p>
          </div>
        </FadeInSection>

        {/* Calculator Card */}
        <FadeInSection delay={200}>
          <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto">
            {/* Period Selector */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-900">사용 기간</span>
                </div>
                <div className="text-4xl font-bold text-red-600">
                  {years}년
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="1"
                max="10"
                value={years}
                onChange={(e) => setYears(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-red"
              />

              {/* Quick Select Buttons */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[1, 3, 5, 10].map((year) => (
                  <button
                    key={year}
                    onClick={() => setYears(year)}
                    className={`
                      px-4 py-2 rounded-lg font-medium transition-all duration-300
                      ${years === year
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }
                    `}
                  >
                    {year}년
                  </button>
                ))}
              </div>
            </div>

            {/* TCO Comparison Bars */}
            <div className="space-y-8 mb-12">
              {products.map((product, index) => {
                const tco = calculateTCO(product, years)
                const replacements = Math.ceil(years / product.lifespan)
                const percentage = (tco / maxTCO) * 100

                return (
                  <div key={product.brand} className="relative">
                    {/* Product Label */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{product.brand}</h3>
                        <p className="text-sm text-gray-600">
                          {product.unitPrice.toLocaleString()}원 × {replacements}회 교체
                          <span className="ml-2 text-xs text-gray-500">
                            ({product.lifespan}년마다)
                          </span>
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold" style={{ color: product.color }}>
                          {tco.toLocaleString()}원
                        </div>
                        {product.brand === 'Wing' && (
                          <div className="text-sm text-green-600 font-semibold mt-1">
                            ✅ 최저 비용
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-12 bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                      <div
                        className="absolute inset-y-0 left-0 transition-all duration-700 ease-out flex items-center justify-end pr-4"
                        style={{
                          width: `${percentage}%`,
                          background: `linear-gradient(to right, ${product.color}dd, ${product.color})`,
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                        {percentage > 30 && (
                          <span className="relative z-10 text-sm font-bold text-white drop-shadow-lg">
                            {tco.toLocaleString()}원
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Animation */}
                    <style jsx>{`
                      @keyframes slide-tco-${index} {
                        from {
                          width: 0;
                        }
                        to {
                          width: ${percentage}%;
                        }
                      }
                    `}</style>
                  </div>
                )
              })}
            </div>

            {/* Savings Summary */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* vs 글로벌 브랜드 */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                <div className="flex items-start gap-3 mb-4">
                  <TrendingDown className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">vs 글로벌 브랜드</h4>
                    <p className="text-sm text-gray-600">프리미엄 브랜드 대비 절감액</p>
                  </div>
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {vsOakley > 0 ? `${vsOakley.toLocaleString()}원` : '0원'}
                </div>
                <p className="text-sm text-gray-700">
                  {years}년 사용 시 <span className="font-semibold text-green-600">{vsOakley > 0 ? Math.round((vsOakley / oakleyTCO) * 100) : 0}% 절감</span>
                </p>
              </div>

              {/* vs 저가 브랜드 */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200">
                <div className="flex items-start gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">vs 저가 브랜드</h4>
                    <p className="text-sm text-gray-600">저가 제품 대비 비용</p>
                  </div>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {vsChina < 0
                    ? `+${Math.abs(vsChina).toLocaleString()}원`
                    : vsChina > 0
                    ? `${vsChina.toLocaleString()}원 절감`
                    : '동일'
                  }
                </div>
                <p className="text-sm text-gray-700">
                  {years === 3 && <span className="font-semibold text-blue-600">3년 기준 동일 비용!</span>}
                  {years < 3 && <span className="text-gray-600">단기에는 저가가 저렴</span>}
                  {years > 3 && <span className="font-semibold text-blue-600">장기면 Wing이 저렴</span>}
                </p>
              </div>
            </div>

            {/* Key Insights */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                핵심 인사이트
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-green-400 font-bold mb-1">1년</div>
                  <div className="text-gray-300">초기 비용 중요 → 저가 유리</div>
                </div>
                <div>
                  <div className="text-yellow-400 font-bold mb-1">3년</div>
                  <div className="text-gray-300">Wing = 저가 (동일 비용)</div>
                </div>
                <div>
                  <div className="text-red-400 font-bold mb-1">10년</div>
                  <div className="text-gray-300">Wing이 최고 가성비 (장기 절감)</div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* CTA */}
        <FadeInSection delay={300}>
          <div className="text-center mt-12">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="text-2xl font-bold mb-1">장기적으로 Wing이 정답</div>
              <div className="text-sm opacity-90">프리미엄 성능, 합리적 가격</div>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Slider Custom Styles */}
      <style jsx global>{`
        .slider-red::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-wing-red), #ff6b6b);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(230, 57, 70, 0.4);
          transition: transform 0.2s ease;
        }

        .slider-red::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .slider-red::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-wing-red), #ff6b6b);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(230, 57, 70, 0.4);
          transition: transform 0.2s ease;
          border: none;
        }

        .slider-red::-moz-range-thumb:hover {
          transform: scale(1.2);
        }

        .slider-red::-webkit-slider-runnable-track {
          background: linear-gradient(to right, var(--color-wing-red) 0%, #e63946 var(--value), #e5e7eb var(--value), #e5e7eb 100%);
          height: 12px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  )
}
