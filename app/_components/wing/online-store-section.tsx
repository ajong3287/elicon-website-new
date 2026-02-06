'use client'

import FadeInSection from '@/app/_components/animations/FadeInSection'
import { ShoppingCart, Star, Instagram, CreditCard, Package, TrendingUp, ExternalLink } from 'lucide-react'

/**
 * 온라인 스토어 강화 섹션
 *
 * 전략 근거:
 * - ROI 4.5 (1순위 전략 #5)
 * - 옴니채널 강화: 스마트스토어 + 인스타그램
 * - 스마트스토어 리뷰 연동 (링크 방식)
 *
 * 핵심 전략:
 * - 네이버 스마트스토어: 메인 채널 (리뷰 127개)
 * - 인스타그램 쇼핑: 비주얼 중심
 * - 채널별 차별화된 혜택 제시
 */

interface OnlineChannel {
  id: number
  icon: typeof ShoppingCart
  name: string
  platform: string
  description: string
  benefits: string[]
  reviews?: number
  rating?: number
  badge?: string
  ctaText: string
  ctaUrl: string
  color: string
  highlight: string
}

const onlineChannels: OnlineChannel[] = [
  {
    id: 1,
    icon: ShoppingCart,
    name: '네이버 스마트스토어',
    platform: 'Naver Shopping',
    description: '엘리콘 공식 네이버 스마트스토어에서 안전하게 구매하세요',
    benefits: [
      '127개 실제 고객 후기 (평점 4.8/5.0)',
      '네이버페이 결제 가능',
      '당일 출고 (평일 오후 3시 이전 주문)',
      '무료 배송 (3만원 이상)',
    ],
    reviews: 127,
    rating: 4.8,
    badge: '메인 채널',
    ctaText: '스마트스토어 방문하기',
    ctaUrl: 'https://smartstore.naver.com/rockiescamping',
    color: '#03C75A',
    highlight: '실제 후기 127개',
  },
  {
    id: 2,
    icon: Instagram,
    name: '인스타그램 쇼핑',
    platform: 'Instagram Shopping',
    description: '비주얼 중심의 쇼핑 경험, 스타일링 팁과 함께',
    benefits: [
      '실제 착용 사진 및 영상',
      '스포츠별 스타일링 팁',
      'DM으로 1:1 상담',
      '인스타 전용 특가 이벤트',
    ],
    badge: '비주얼 채널',
    ctaText: '인스타그램 보기',
    ctaUrl: 'https://www.instagram.com/wing_eyewear_official/',
    color: '#E4405F',
    highlight: '스타일링 팁 제공',
  },
  {
    id: 3,
    icon: Package,
    name: 'B2B 도매 상담',
    platform: 'Business Partnership',
    description: '안경점, 스포츠샵 등 사업자 대상 도매 공급',
    benefits: [
      '39개 파트너사 운영 중',
      '사업자 전용 특별 할인',
      '디스플레이 제공',
      'POP 마케팅 자료 무료',
    ],
    badge: 'B2B 전용',
    ctaText: '도매 상담하기',
    ctaUrl: 'tel:02-XXXX-XXXX',
    color: '#1877F2',
    highlight: '사업자 특별 할인',
  },
]

export function OnlineStoreSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background Effects */}
      <div className="noise-overlay" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20" />

      <div className="container relative z-10">
        {/* Header */}
        <FadeInSection delay={100}>
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 mb-8">
              <ShoppingCart className="w-6 h-6 text-green-600" />
              <span className="font-bold text-lg text-green-900">
                옴니채널 구매 가능
              </span>
            </div>

            {/* Title */}
            <h2 className="playfair text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              편리한 온라인 쇼핑
              <span className="block text-[--color-wing-red] mt-4">
                다양한 채널에서 만나보세요
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              네이버 스마트스토어, 인스타그램 쇼핑 등<br />
              편한 채널에서 안전하게 구매하세요
            </p>
          </div>
        </FadeInSection>

        {/* Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {onlineChannels.map((channel, index) => {
            const Icon = channel.icon

            return (
              <FadeInSection key={channel.id} delay={200 + index * 100}>
                <div className="group relative glass-card p-8 rounded-2xl hover:glass-hover transition-all duration-500 hover:scale-105 h-full flex flex-col">
                  {/* Badge */}
                  {channel.badge && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${channel.color}20, ${channel.color}40)`,
                        color: channel.color,
                      }}
                    >
                      {channel.badge}
                    </div>
                  )}

                  {/* Icon Circle */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      background: `linear-gradient(135deg, ${channel.color}20, ${channel.color}40)`,
                    }}
                  >
                    <Icon className="w-10 h-10" style={{ color: channel.color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {channel.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 font-mono">
                      {channel.platform}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {channel.description}
                    </p>

                    {/* Rating (스마트스토어만) */}
                    {channel.rating && channel.reviews && (
                      <div className="mb-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-lg font-bold text-gray-900">
                            {channel.rating}/5.0
                          </span>
                          <span className="text-sm text-gray-600">
                            ({channel.reviews}개 리뷰)
                          </span>
                        </div>
                        <a
                          href={`${channel.ctaUrl}/reviews`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-700 underline flex items-center gap-1"
                        >
                          실제 후기 전체 보기
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}

                    {/* Benefits */}
                    <ul className="space-y-2 mb-6">
                      {channel.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span
                            className="text-lg leading-none"
                            style={{ color: channel.color }}
                          >
                            •
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlight Badge */}
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold mb-6"
                      style={{
                        background: `linear-gradient(135deg, ${channel.color}15, ${channel.color}25)`,
                        color: channel.color,
                      }}
                    >
                      <TrendingUp className="w-4 h-4" />
                      {channel.highlight}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={channel.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                    style={{
                      background: `linear-gradient(135deg, ${channel.color}, ${channel.color}dd)`,
                    }}
                  >
                    {channel.ctaText}
                    <ExternalLink className="w-5 h-5" />
                  </a>

                  {/* Hover Effect Border */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${channel.color}15, transparent)`,
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
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 mb-6">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">
                  안전한 결제
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                모든 채널 정품 보증
              </h3>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                엘리콘이 직접 운영하는 모든 채널에서<br />
                OGK 정품만을 취급합니다
              </p>

              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-600" />
                  <span>3년 품질 보증</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-green-600" />
                  <span>당일 출고</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span>안전 결제</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  <span>48시간 A/S</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
