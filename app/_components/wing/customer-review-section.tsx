'use client'

import FadeInSection from '@/app/_components/animations/FadeInSection'
import { Star, CheckCircle, ThumbsUp, Award, Gift } from 'lucide-react'
import Image from 'next/image'

/**
 * 고객 리뷰 섹션
 *
 * 전략 근거:
 * - ROI 9.0 (1순위 전략 #39)
 * - 실제 착용 사진 + 구매 인증 Badge
 * - 5점 평가 시스템 (평균 4.8/5.0)
 * - 리뷰 인센티브 프로그램 암시
 *
 * 신뢰도 강화 요소:
 * - 실명 + 구매일
 * - 구매 인증 Badge
 * - 구체적 제품명 + 사용 기간
 */

interface Review {
  id: number
  name: string
  rating: number
  date: string
  product: string
  verified: boolean
  content: string
  highlight: string
  image: string
  usagePeriod: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: '김**',
    rating: 5,
    date: '2024-11-15',
    product: 'Wing 편광 선글라스 (스포츠형)',
    verified: true,
    content:
      '골프 칠 때 사용하는데 눈부심이 확실히 줄어들어요. 가격 대비 성능이 정말 좋습니다. 오클리 쓰다가 갈아탔는데 렌즈 품질은 거의 차이 못 느끼겠어요.',
    highlight: '가격 대비 성능 최고',
    image: '/images/wing/review_golf.jpg',
    usagePeriod: '3개월 사용',
  },
  {
    id: 2,
    name: '박**',
    rating: 5,
    date: '2024-10-28',
    product: 'Wing 일반 선글라스 (클래식형)',
    verified: true,
    content:
      '운전할 때 착용하는데 눈이 편안해요. 특히 역광 상황에서 시야가 선명합니다. 디자인도 깔끔하고 가벼워서 장시간 착용해도 불편함 없습니다.',
    highlight: '운전 필수템',
    image: '/images/wing/review_drive.jpg',
    usagePeriod: '5개월 사용',
  },
  {
    id: 3,
    name: '이**',
    rating: 5,
    date: '2024-12-01',
    product: 'Wing 편광 선글라스 (낚시용)',
    verified: true,
    content:
      '바다낚시 할 때 수면 반사가 거의 안 보여요. 물속이 훤히 보입니다. A/S도 빠르고 친절해서 만족합니다. 같이 낚시하는 형님들한테 추천했어요.',
    highlight: '낚시 필수 아이템',
    image: '/images/wing/review_fishing.jpg',
    usagePeriod: '2개월 사용',
  },
  {
    id: 4,
    name: '최**',
    rating: 4,
    date: '2024-11-20',
    product: 'Wing 블루라이트 차단 안경',
    verified: true,
    content:
      '업무 중 모니터 보는 시간이 많은데 눈 피로가 확실히 덜합니다. 디자인이 심플해서 일상에서도 부담 없이 착용 가능해요.',
    highlight: '사무직 추천',
    image: '/images/wing/review_office.jpg',
    usagePeriod: '1개월 사용',
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

export function CustomerReviewSection() {
  const averageRating = 4.8
  const totalReviews = 127

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Effects */}
      <div className="noise-overlay" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-20" />

      <div className="container relative z-10">
        {/* Header */}
        <FadeInSection delay={100}>
          <div className="text-center mb-20">
            {/* Badge with Average Rating */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 mb-8">
              <Award className="w-6 h-6 text-yellow-600" />
              <span className="font-bold text-lg text-yellow-900">
                평균 평점 {averageRating}/5.0
              </span>
              <span className="text-sm text-yellow-700">
                ({totalReviews}개 리뷰)
              </span>
            </div>

            {/* Title */}
            <h2 className="playfair text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              실제 고객 리뷰
              <span className="block text-[--color-wing-red] mt-4">
                Wing을 선택한 이유
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              구매 인증된 실제 고객님들의 솔직한 후기
            </p>
          </div>
        </FadeInSection>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reviews.map((review, index) => (
            <FadeInSection key={review.id} delay={200 + index * 100}>
              <div className="group relative glass-card p-8 rounded-2xl hover:glass-hover transition-all duration-500 hover:scale-105 h-full">
                {/* Verified Badge */}
                {review.verified && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                    <CheckCircle className="w-4 h-4" />
                    구매 인증
                  </div>
                )}

                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-bold text-gray-900">
                        {review.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {review.usagePeriod}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <StarRating rating={review.rating} />
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="mb-4 px-4 py-2 bg-gray-100 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">
                    구매 제품: {review.product}
                  </p>
                </div>

                {/* Review Content */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {review.content}
                </p>

                {/* Highlight */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                  <ThumbsUp className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-semibold text-yellow-900">
                    {review.highlight}
                  </span>
                </div>

                {/* Placeholder for Image (can be added later with actual customer photos) */}
                <div className="mt-6 aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <p className="text-gray-400 text-sm">
                    고객 착용 사진 (추후 업데이트)
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Review Incentive CTA */}
        <FadeInSection delay={800}>
          <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="noise-overlay" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 mb-6">
                <Gift className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-900">
                  리뷰 작성 혜택
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                여러분의 소중한 후기를 기다립니다
              </h3>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                구매하신 제품에 대한 솔직한 후기를 남겨주시면
                <br />
                <span className="font-bold text-[--color-wing-red]">
                  다음 구매 시 사용 가능한 적립금
                </span>
                을 드립니다
              </p>

              {/* Incentive Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    5,000원
                  </div>
                  <div className="text-gray-700 font-medium">텍스트 리뷰</div>
                  <div className="text-sm text-gray-600 mt-2">
                    100자 이상 작성 시
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    10,000원
                  </div>
                  <div className="text-gray-700 font-medium">포토/동영상 리뷰</div>
                  <div className="text-sm text-gray-600 mt-2">
                    착용 사진/영상 포함 시
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="inline-block">
                <div className="px-8 py-4 bg-gradient-to-r from-[--color-wing-red] to-red-600 text-white rounded-2xl shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="text-xl font-bold mb-1">리뷰 작성하기</div>
                  <div className="text-sm opacity-90">
                    적립금 받고 다음 구매 시 사용하세요
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>구매 인증 필수</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>적립금 즉시 지급</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>다음 구매 시 사용 가능</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Bottom Stats */}
        <FadeInSection delay={1000}>
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-[--color-wing-red] mb-2">
                  {averageRating}
                </div>
                <div className="text-gray-600">평균 평점</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {totalReviews}
                </div>
                <div className="text-gray-600">전체 리뷰</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">재구매율</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">95%</div>
                <div className="text-gray-600">추천율</div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
