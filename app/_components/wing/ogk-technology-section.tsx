'use client'

import FadeInSection from '@/app/_components/animations/FadeInSection'
import { Microscope, Eye, Shield, Sun, Sparkles, Award, TrendingUp } from 'lucide-react'

/**
 * OGK 5대 렌즈 기술 섹션
 *
 * 엘리나이 보고서 기반:
 * - "오클리도 믿고 쓰는 OGK 렌즈, 이제 WING에서 경험하세요!"
 * - 세계 1위 OGK의 45년 광학 기술력
 * - 5대 핵심 기술: 고굴절/비구면/UV400/블루라이트/멀티코팅
 */

interface Technology {
  id: number
  icon: typeof Microscope
  title: string
  subtitle: string
  description: string
  benefit: string
  color: string
  badge?: string
}

const technologies: Technology[] = [
  {
    id: 1,
    icon: Microscope,
    title: '고굴절률 렌즈',
    subtitle: 'High Refractive Index',
    description: '얇고 가벼운 렌즈로 장시간 착용 시 피로도 최소화',
    benefit: '시야 왜곡 0.01mm 이하',
    color: '#3B82F6',
  },
  {
    id: 2,
    icon: Eye,
    title: '비구면 렌즈',
    subtitle: 'Aspherical Lens',
    description: '주변부 선명도 향상으로 넓은 시야각 확보',
    benefit: '왜곡률 85% 감소',
    color: '#8B5CF6',
  },
  {
    id: 3,
    icon: Shield,
    title: 'UV400 차단',
    subtitle: 'UV Protection',
    description: '100% 자외선 차단으로 백내장 예방',
    benefit: '장시간 야외 활동 보호',
    color: '#EF4444',
  },
  {
    id: 4,
    icon: Sun,
    title: '블루라이트 차단',
    subtitle: 'Blue Light Filter',
    description: '디지털 기기 사용 시 눈 피로 감소',
    benefit: '눈 건강 장기 보호',
    color: '#F59E0B',
  },
  {
    id: 5,
    icon: Sparkles,
    title: '멀티코팅',
    subtitle: 'Multi-Coating',
    description: '반사 방지 + 스크래치 저항 1.4배 향상',
    benefit: '3년 내구성 보증',
    color: '#10B981',
    badge: '특허 기술',
  },
]

export function OGKTechnologySection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background Effects */}
      <div className="noise-overlay" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[--color-wing-red]/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20" />

      <div className="container relative z-10">
        {/* Header */}
        <FadeInSection delay={100}>
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[--color-wing-red] to-red-600 text-white mb-8 shadow-xl">
              <Award className="w-6 h-6" />
              <span className="font-bold text-lg">오클리 생산 파트너 OGK 기술력</span>
            </div>

            {/* Title */}
            <h2 className="playfair text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              세계가 인정한 렌즈 기술
              <span className="block text-[--color-wing-red] mt-4">
                45년 광학 전문 OGK의 5대 핵심 기술
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              글로벌 브랜드도 믿고 쓰는 OGK 렌즈, 이제 WING에서 경험하세요
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-[--color-wing-red] mb-2">45년</div>
                <div className="text-gray-600">광학 기술 전문</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[--color-wing-red] mb-2">40%</div>
                <div className="text-gray-600">세계 시장 점유율</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[--color-wing-red] mb-2">100%</div>
                <div className="text-gray-600">글로벌 브랜드 공급</div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.icon

            return (
              <FadeInSection key={tech.id} delay={200 + index * 100}>
                <div className="group relative glass-card p-8 rounded-2xl hover:glass-hover transition-all duration-500 hover:scale-105 h-full">
                  {/* Badge */}
                  {tech.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                      {tech.badge}
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}40)`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: tech.color }} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 font-mono">
                      {tech.subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {tech.description}
                    </p>
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
                      style={{
                        background: `linear-gradient(135deg, ${tech.color}10, ${tech.color}20)`,
                        color: tech.color,
                      }}
                    >
                      <TrendingUp className="w-4 h-4" />
                      {tech.benefit}
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${tech.color}20, transparent)`,
                    }}
                  />
                </div>
              </FadeInSection>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <FadeInSection delay={800}>
          <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="noise-overlay" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 mb-6">
                <Microscope className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">OGK 독점 기술력</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                글로벌 브랜드와 동일한 렌즈 기술
              </h3>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                오클리 스키 고글 전량 생산 파트너 OGK의 45년 노하우가<br />
                Wing 45,000원에 담겼습니다
              </p>

              <div className="inline-block px-8 py-4 bg-gradient-to-r from-[--color-wing-red] to-red-600 text-white rounded-2xl shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="text-2xl font-bold mb-1">Wing 45,000원</div>
                <div className="text-sm opacity-90">세계 1위 기술력 + 합리적 가격</div>
              </div>

              {/* Additional Trust Signals */}
              <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>3년 품질 보증</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-600" />
                  <span>2009 대통령 표창</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>세계 시장 점유율 40%</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
