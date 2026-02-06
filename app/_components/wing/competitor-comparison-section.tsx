'use client'

import { useState } from 'react'
import FadeInSection from '@/app/_components/animations/FadeInSection'
import { Target, TrendingUp, Award, Shield, Palette, CheckCircle2, XCircle, Sparkles } from 'lucide-react'

/**
 * Wing vs 경쟁사 비교 섹션
 *
 * 10개 항목 점수 비교:
 * - Wing (45,000원)
 * - 프리미엄 브랜드 (220,000원)
 * - 럭셔리 브랜드 (400,000원)
 * - 중가 브랜드 (25,000원)
 * - 저가 브랜드 (10,000원)
 *
 * 인터랙티브 요소:
 * - 브랜드별 점수 시각화
 * - Hover 시 상세 설명
 * - 총점 자동 계산
 */

interface CompetitorScore {
  brand: string
  price: string
  scores: {
    가격경쟁력: number
    기술력검증: number
    브랜드인지도: number
    품질보증: number
    디자인다양성: number
    공신력: number
    내구성: number
    AS: number
    범용성: number
    가성비: number
  }
  color: string
  badge?: string
}

const competitors: CompetitorScore[] = [
  {
    brand: 'Wing',
    price: '45,000원',
    scores: {
      가격경쟁력: 100,
      기술력검증: 95,
      브랜드인지도: 40,
      품질보증: 90,
      디자인다양성: 60,
      공신력: 100,
      내구성: 95,
      AS: 70,
      범용성: 100,
      가성비: 100,
    },
    color: 'var(--color-wing-red)',
    badge: '가성비 1위',
  },
  {
    brand: '프리미엄 브랜드',
    price: '220,000원',
    scores: {
      가격경쟁력: 30,
      기술력검증: 100,
      브랜드인지도: 100,
      품질보증: 100,
      디자인다양성: 100,
      공신력: 80,
      내구성: 100,
      AS: 90,
      범용성: 70,
      가성비: 50,
    },
    color: '#000000',
    badge: '글로벌',
  },
  {
    brand: '럭셔리 브랜드',
    price: '400,000원',
    scores: {
      가격경쟁력: 20,
      기술력검증: 70,
      브랜드인지도: 100,
      품질보증: 90,
      디자인다양성: 100,
      공신력: 60,
      내구성: 85,
      AS: 80,
      범용성: 50,
      가성비: 30,
    },
    color: '#8B4513',
  },
  {
    brand: '중가 브랜드',
    price: '25,000원',
    scores: {
      가격경쟁력: 80,
      기술력검증: 30,
      브랜드인지도: 50,
      품질보증: 50,
      디자인다양성: 70,
      공신력: 20,
      내구성: 60,
      AS: 50,
      범용성: 60,
      가성비: 70,
    },
    color: '#666666',
  },
  {
    brand: '저가 브랜드',
    price: '10,000원',
    scores: {
      가격경쟁력: 100,
      기술력검증: 0,
      브랜드인지도: 10,
      품질보증: 20,
      디자인다양성: 50,
      공신력: 0,
      내구성: 30,
      AS: 10,
      범용성: 40,
      가성비: 50,
    },
    color: '#999999',
  },
]

const categories = [
  { key: '가격경쟁력' as const, icon: Target, description: '구매 부담 적음' },
  { key: '기술력검증' as const, icon: Award, description: '학술/업계 검증' },
  { key: '브랜드인지도' as const, icon: TrendingUp, description: '소비자 인지도' },
  { key: '품질보증' as const, icon: Shield, description: '보증 기간/AS' },
  { key: '디자인다양성' as const, icon: Palette, description: '선택의 폭' },
  { key: '공신력' as const, icon: Award, description: 'KBO/대통령표창' },
  { key: '내구성' as const, icon: Shield, description: '3년 이상 사용' },
  { key: 'AS' as const, icon: CheckCircle2, description: '고객 지원' },
  { key: '범용성' as const, icon: Sparkles, description: '9가지 용도' },
  { key: '가성비' as const, icon: TrendingUp, description: '가격 대비 성능' },
]

export function CompetitorComparisonSection() {
  const [selectedBrand, setSelectedBrand] = useState<string>('Wing')
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const selectedCompetitor = competitors.find(c => c.brand === selectedBrand)!
  const totalScore = Object.values(selectedCompetitor.scores).reduce((sum, score) => sum + score, 0)

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="noise-overlay" />

      <div className="container relative z-10">
        {/* Header */}
        <FadeInSection delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 mb-6">
              <Target className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-900">경쟁사 비교 분석</span>
            </div>

            <h2 className="playfair text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              글로벌 브랜드 vs Wing
              <span className="block text-red-600 mt-2">성능은 동일, 가격은 1/5</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              글로벌 브랜드와 Wing 10개 항목 비교
              <br />
              <span className="font-semibold text-gray-900">똑똑한 선택 = Wing 45,000원</span>
            </p>
          </div>
        </FadeInSection>

        {/* Brand Selector */}
        <FadeInSection delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {competitors.map((competitor) => (
              <button
                key={competitor.brand}
                onClick={() => setSelectedBrand(competitor.brand)}
                className={`
                  px-6 py-3 rounded-xl font-semibold transition-all duration-300
                  ${selectedBrand === competitor.brand
                    ? 'bg-red-600 text-white shadow-xl scale-105'
                    : 'glass-card hover:glass-hover text-gray-700'
                  }
                `}
                style={{
                  borderColor: selectedBrand === competitor.brand ? competitor.color : undefined,
                }}
              >
                <div className="flex items-center gap-2">
                  <span>{competitor.brand}</span>
                  <span className="text-sm opacity-80">{competitor.price}</span>
                  {competitor.badge && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-yellow-400 text-yellow-900 rounded-full">
                      {competitor.badge}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </FadeInSection>

        {/* Comparison Chart */}
        <FadeInSection delay={300}>
          <div className="glass-card p-8 md:p-12 max-w-6xl mx-auto">
            {/* Total Score */}
            <div className="text-center mb-12 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl">
              <div className="text-6xl font-bold mb-2" style={{ color: selectedCompetitor.color }}>
                {totalScore}점
              </div>
              <div className="text-gray-600 text-lg">
                총점 (1000점 만점)
              </div>
            </div>

            {/* Score Bars */}
            <div className="space-y-6">
              {categories.map((category, index) => {
                const score = selectedCompetitor.scores[category.key]
                const Icon = category.icon

                return (
                  <div
                    key={category.key}
                    className="relative"
                    onMouseEnter={() => setHoveredCategory(category.key)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {/* Category Label */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-gray-600" />
                        <span className="font-semibold text-gray-900">{category.key}</span>
                        {hoveredCategory === category.key && (
                          <span className="text-sm text-gray-500 animate-fade-in">
                            {category.description}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold" style={{ color: selectedCompetitor.color }}>
                          {score}점
                        </span>
                        {score >= 90 && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                        {score < 50 && <XCircle className="w-5 h-5 text-red-400" />}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 transition-all duration-700 ease-out"
                        style={{
                          width: `${score}%`,
                          background: `linear-gradient(to right, ${selectedCompetitor.color}dd, ${selectedCompetitor.color})`,
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                      </div>

                      {/* Score Label Inside Bar */}
                      {score > 20 && (
                        <div className="absolute inset-0 flex items-center justify-end pr-4">
                          <span className="text-xs font-bold text-white drop-shadow-lg">
                            {score}/100
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Animation Delay */}
                    <style jsx>{`
                      @keyframes slide-in-${index} {
                        from {
                          width: 0;
                        }
                        to {
                          width: ${score}%;
                        }
                      }
                    `}</style>
                  </div>
                )
              })}
            </div>

            {/* Comparison Summary */}
            <div className="mt-12 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {selectedBrand === 'Wing' ? '🏆 Wing의 압도적 우위' : `${selectedBrand} vs Wing 비교`}
              </h3>

              {selectedBrand === 'Wing' && (
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-red-600 mb-2">100점</div>
                    <div className="text-sm text-gray-600">가격 경쟁력 + 가성비</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-red-600 mb-2">100점</div>
                    <div className="text-sm text-gray-600">공신력 + 범용성</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-red-600 mb-2">95점</div>
                    <div className="text-sm text-gray-600">기술력 + 내구성</div>
                  </div>
                </div>
              )}

              {selectedBrand === '프리미엄 브랜드' && (
                <div className="space-y-3 text-gray-700">
                  <p>• <span className="font-semibold">가격 차이</span>: 글로벌 브랜드 220,000원 vs Wing 45,000원 = <span className="text-red-600 font-bold">175,000원 절감</span></p>
                  <p>• <span className="font-semibold">동일 성능</span>: UV400, 편광 98%, PC 소재 충격 강도 동일</p>
                  <p>• <span className="font-semibold">Wing 우위</span>: KBO 국가대표 후원, 대통령 표창 (글로벌 브랜드에 없음)</p>
                </div>
              )}

              {selectedBrand === '럭셔리 브랜드' && (
                <div className="space-y-3 text-gray-700">
                  <p>• <span className="font-semibold">가격 차이</span>: 럭셔리 브랜드 400,000원 vs Wing 45,000원 = <span className="text-red-600 font-bold">355,000원 절감</span></p>
                  <p>• <span className="font-semibold">럭셔리 브랜드</span>: 패션 선글라스 (스포츠 성능 미흡)</p>
                  <p>• <span className="font-semibold">Wing</span>: 스포츠 전문 + 9가지 범용성</p>
                </div>
              )}

              {selectedBrand === '중가 브랜드' && (
                <div className="space-y-3 text-gray-700">
                  <p>• <span className="font-semibold">가격 차이</span>: 중가 브랜드 25,000원 vs Wing 45,000원 = <span className="text-blue-600 font-bold">20,000원 추가</span></p>
                  <p>• <span className="font-semibold">기술력 격차</span>: Wing 95점 vs 중가 브랜드 30점 (3배 차이)</p>
                  <p>• <span className="font-semibold">공신력 격차</span>: Wing 100점 vs 중가 브랜드 20점 (5배 차이)</p>
                </div>
              )}

              {selectedBrand === '저가 브랜드' && (
                <div className="space-y-3 text-gray-700">
                  <p>• <span className="font-semibold">TCO (3년 기준)</span>: 저가 브랜드 45,000원 (3회 교체) = Wing 45,000원 (1회) → <span className="text-red-600 font-bold">동일 비용</span></p>
                  <p>• <span className="font-semibold">기술력 검증</span>: 저가 브랜드 0점 vs Wing 95점</p>
                  <p>• <span className="font-semibold">품질 보증</span>: 저가 브랜드 20점 vs Wing 90점</p>
                </div>
              )}
            </div>
          </div>
        </FadeInSection>

        {/* CTA */}
        <FadeInSection delay={400}>
          <div className="text-center mt-12">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="text-2xl font-bold mb-1">Wing 45,000원</div>
              <div className="text-sm opacity-90">명품 성능, 합리적 가격</div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
