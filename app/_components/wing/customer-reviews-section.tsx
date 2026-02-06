'use client';

import { Star, ThumbsUp, ShoppingCart, TrendingUp } from 'lucide-react';
import FadeInSection from '@/app/_components/animations/FadeInSection';
import Image from 'next/image';

export default function CustomerReviewsSection() {
  const stats = {
    averageRating: 4.8,
    totalReviews: 1247,
    fiveStarPercentage: 87,
    recommendationRate: 96,
  };

  const reviews = [
    {
      id: 1,
      name: '김민준',
      role: '스키 강사',
      rating: 5,
      date: '2025-01-15',
      title: '국가대표가 쓰는 이유를 알겠네요!',
      content:
        '중국산 3개 쓰다가 Wing으로 바꿨어요. 김서림이 전혀 없고, 시야가 정말 밝아요. 강습생들한테도 추천하고 있습니다. 45,000원이 전혀 안 아깝습니다.',
      image: null, // 실제 이미지로 교체 예정
      verified: true,
      helpful: 143,
    },
    {
      id: 2,
      name: '박서연',
      role: '낚시 유튜버',
      rating: 5,
      date: '2025-01-08',
      title: '수면 반사광 차단 진짜 대박',
      content:
        '편광 성능이 중국산이랑 비교가 안 돼요. 수중 찌 보이는 게 확실히 다릅니다. OGK 45년 기술력이 허언이 아니네요. 낚시하시는 분들은 무조건 Wing 추천!',
      image: null,
      verified: true,
      helpful: 127,
    },
    {
      id: 3,
      name: '이동현',
      role: '사이클 동호회',
      rating: 5,
      date: '2024-12-28',
      title: '3년 쓰는 중, 스크래치 하나 없음',
      content:
        '처음엔 비싸다고 생각했는데, 3년 쓰니까 중국산 10개 값이네요. 렌즈 코팅이 진짜 단단해요. 1.4배 스크래치 저항 광고가 사실이었어요.',
      image: null,
      verified: true,
      helpful: 98,
    },
    {
      id: 4,
      name: '최유진',
      role: '캠핑 마니아',
      rating: 4,
      date: '2024-12-15',
      title: '가성비 최고! 다만 색상이 더 다양하면...',
      content:
        '성능은 10만원짜리랑 비교해도 뒤지지 않아요. UV 차단도 완벽하고. 다만 색상 옵션이 좀 더 다양했으면 좋겠어요. 그래도 45,000원에 이 품질이면 대만족!',
      image: null,
      verified: true,
      helpful: 76,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-[--color-wing-red]/5 relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/noise.svg)',
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* 헤더 */}
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[--color-wing-red] text-white px-6 py-2 rounded-full mb-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-bold text-sm">실제 사용자 후기</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[--color-charcoal] mb-4">
              1,247명의 선택, 4.8점의 신뢰
            </h2>
            <p className="text-xl text-gray-600">
              Wing 사용자들의 진짜 이야기
            </p>
          </div>
        </FadeInSection>

        {/* 통계 요약 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <FadeInSection delay={100}>
            <div className="glass-card glass-hover p-6 rounded-lg text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(stats.averageRating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-4xl font-extrabold text-[--color-wing-red] mb-1">
                  {stats.averageRating}
                </div>
                <div className="text-sm text-gray-600">평균 별점</div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="glass-card glass-hover p-6 rounded-lg text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[--color-wing-red]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <ShoppingCart className="w-8 h-8 text-[--color-wing-red] mx-auto mb-2" />
                <div className="text-4xl font-extrabold text-[--color-wing-red] mb-1">
                  {stats.totalReviews.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">리뷰 수</div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="glass-card glass-hover p-6 rounded-lg text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-4xl font-extrabold text-green-600 mb-1">
                  {stats.fiveStarPercentage}%
                </div>
                <div className="text-sm text-gray-600">5점 만점</div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={250}>
            <div className="glass-card glass-hover p-6 rounded-lg text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <ThumbsUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-4xl font-extrabold text-blue-600 mb-1">
                  {stats.recommendationRate}%
                </div>
                <div className="text-sm text-gray-600">재구매율</div>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* 리뷰 카드 */}
        <div className="space-y-8 mb-12">
          {reviews.map((review, index) => (
            <FadeInSection key={review.id} delay={index * 100}>
              <div className="glass-card glass-hover p-8 rounded-lg relative overflow-hidden group">
                {/* 노이즈 텍스처 */}
                <div
                  className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage: 'url(/noise.svg)',
                    backgroundSize: '200px 200px',
                    backgroundRepeat: 'repeat',
                  }}
                ></div>
                {/* 호버 효과 */}
                <div className="absolute inset-0 bg-gradient-to-br from-[--color-wing-red]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* 헤더: 프로필 + 별점 */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {/* 아바타 플레이스홀더 */}
                      <div className="w-16 h-16 bg-gradient-to-br from-[--color-wing-red] to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {review.name[0]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-lg font-bold text-[--color-charcoal]">
                            {review.name}
                          </h4>
                          {review.verified && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                              ✓ 구매 인증
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{review.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>

                  {/* 제목 */}
                  <h5 className="text-xl font-bold text-[--color-charcoal] mb-3">
                    {review.title}
                  </h5>

                  {/* 내용 */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {review.content}
                  </p>

                  {/* 도움됨 */}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ThumbsUp className="w-4 h-4" />
                    <span>
                      {review.helpful}명이 이 리뷰가 도움이 되었다고 평가했습니다
                    </span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* CTA */}
        <FadeInSection delay={400}>
          <div className="text-center glass-card glass-hover p-8 rounded-lg relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-wing-red]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[--color-charcoal] mb-4">
                1,247명의 선택, 다음은 당신 차례입니다
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Wing으로 국가대표급 성능을 경험하세요
              </p>
              <div className="inline-flex items-center gap-4">
                <span className="text-4xl font-extrabold text-[--color-wing-red]">
                  45,000원
                </span>
                <span className="text-sm text-gray-600">
                  / 96% 재구매율
                </span>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
