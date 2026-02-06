'use client'

import FadeInSection from '@/app/_components/animations/FadeInSection'
import { CheckCircle, Award, Clock, Shield, Users, Star, Zap } from 'lucide-react'

/**
 * 엘리콘 총판 신뢰도 섹션
 *
 * 목적:
 * - OGK 기술력 다음에 엘리콘 유통 신뢰도 강조
 * - 총판으로서의 전문성과 책임감 전달
 * - 고객 안심 구매 유도 (정품 보증, 빠른 A/S)
 */

interface TrustFeature {
  id: number
  icon: typeof CheckCircle
  title: string
  subtitle: string
  description: string
  highlight: string
  color: string
}

const trustFeatures: TrustFeature[] = [
  {
    id: 1,
    icon: Users,
    title: '39개 파트너사',
    subtitle: 'B2B 전문 유통',
    description: '2015년 설립 이래 안경점, 스포츠샵 등 39개 활성 파트너사 운영',
    highlight: '95% 만족도',
    color: '#3B82F6',
  },
  {
    id: 2,
    icon: Shield,
    title: '정품 보증',
    subtitle: 'OGK 한국총판 직접 공급',
    description: 'OGK 정품 인증서 제공, 불량률 0.1% 미만 (업계 평균 3%)',
    highlight: '3년 품질 보증',
    color: '#10B981',
  },
  {
    id: 3,
    icon: Zap,
    title: '빠른 A/S',
    subtitle: '48시간 내 응대',
    description: '전국 택배 무료, 교환/환불 간편 프로세스, 전담 고객센터 운영',
    highlight: '당일 출고',
    color: '#F59E0B',
  },
]

export function EliconTrustSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Effects */}
      <div className="noise-overlay" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-20" />

      <div className="container relative z-10">
        {/* Header */}
        <FadeInSection delay={100}>
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 mb-8">
              <Award className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-lg text-blue-900">엘리콘 한국총판 신뢰도</span>
            </div>

            {/* Title */}
            <h2 className="playfair text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              엘리콘의 약속
              <span className="block text-blue-600 mt-4">
                10년 유통 전문성 + 완벽한 품질 관리
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              OGK 한국총판 엘리콘은 정품만을 취급하며,<br />
              빠르고 확실한 A/S로 고객 만족을 최우선으로 합니다
            </p>
          </div>
        </FadeInSection>

        {/* Trust Features - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon

            return (
              <FadeInSection key={feature.id} delay={200 + index * 100}>
                <div className="group relative glass-card p-8 rounded-2xl hover:glass-hover transition-all duration-500 hover:scale-105 h-full">
                  {/* Icon Circle */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                    }}
                  >
                    <Icon className="w-10 h-10" style={{ color: feature.color }} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 font-mono">
                      {feature.subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    {/* Highlight Badge */}
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}25)`,
                        color: feature.color,
                      }}
                    >
                      <CheckCircle className="w-4 h-4" />
                      {feature.highlight}
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}15, transparent)`,
                    }}
                  />
                </div>
              </FadeInSection>
            )
          })}
        </div>

        {/* Bottom Stats & Trust Signals */}
        <FadeInSection delay={600}>
          <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="noise-overlay" />

            <div className="relative z-10">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">10년</div>
                  <div className="text-gray-600">유통 전문성</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-green-600 mb-2">39개</div>
                  <div className="text-gray-600">활성 파트너사</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-orange-600 mb-2">0.1%</div>
                  <div className="text-gray-600">불량률 (업계 3%)</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-gray-600">파트너 만족도</div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8" />

              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>OGK 정품 인증서</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span>48시간 A/S 응대</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-600" />
                  <span>전국 택배 무료</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>간편 교환/환불</span>
                </div>
              </div>

              {/* CTA Message */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border-2 border-blue-200">
                <p className="text-xl font-bold text-gray-900 mb-2">
                  🎯 안심하고 구매하세요
                </p>
                <p className="text-gray-700">
                  엘리콘은 OGK 한국총판으로서 정품만을 취급하며,<br className="hidden md:block" />
                  10년 유통 경험을 바탕으로 완벽한 고객 만족을 보장합니다
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Bottom Mini CTA */}
        <FadeInSection delay={800}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              문의사항이 있으신가요?
            </p>
            <div className="inline-flex items-center gap-4">
              <a
                href="tel:02-XXXX-XXXX"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                📞 고객센터: 02-XXXX-XXXX
              </a>
              <a
                href="mailto:support@elicon.co.kr"
                className="px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                📧 이메일 문의
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
