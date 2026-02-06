'use client';

import { TrendingUp, Award, Factory, Globe } from 'lucide-react';
import FadeInSection from '@/app/_components/animations/FadeInSection';

export default function WorldNo1Section() {
  const milestones = [
    {
      year: '1978',
      title: '한국OGK 창업',
      description: '광학 기술 전문 기업으로 시작',
      icon: Factory,
    },
    {
      year: '2009',
      title: '대통령 표창',
      description: '중소기업 기술혁신대전 수상',
      icon: Award,
    },
    {
      year: '2019',
      title: '세계 1위 달성',
      description: '스포츠 고글 시장 점유율 40%',
      icon: Globe,
    },
    {
      year: '2025',
      title: '지속적 혁신',
      description: '엘리콘 파트너십, Wing 브랜드 확장',
      icon: TrendingUp,
    },
  ];

  const achievements = [
    {
      number: '40%',
      label: '세계 시장 점유율',
      sublabel: '스포츠 고글 부문',
    },
    {
      number: '45년',
      label: '광학 전문 업력',
      sublabel: '1978년 창업',
    },
    {
      number: '95%',
      label: '파트너 만족도',
      sublabel: '엘리콘 B2B 신뢰도',
    },
    {
      number: '1위',
      label: '세계 시장 1위',
      sublabel: '브랜드타임즈 2019',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[--color-wing-red]/5 relative overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[--color-wing-red] to-red-600 text-white px-8 py-3 rounded-full mb-6 shadow-lg">
              <Globe className="w-6 h-6" />
              <span className="font-bold text-lg">세계 1위 기술력</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[--color-charcoal] mb-6">
              시장 점유율 40%, 세계 1위
            </h2>
            <p className="text-2xl text-gray-600 mb-4">
              한국OGK 45년 광학 기술의 결정체
            </p>
            <a
              href="http://www.brandtimes.co.kr/news/articleView.html?idxno=780"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[--color-wing-red] font-semibold hover:underline"
            >
              <span className="text-sm">브랜드타임즈 2019 보도</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </FadeInSection>

        {/* 성과 통계 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <FadeInSection key={achievement.label} delay={index * 100}>
              <div className="glass-card glass-hover p-6 rounded-lg text-center relative overflow-hidden group">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[--color-wing-red]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-extrabold text-[--color-wing-red] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-sm font-semibold text-[--color-charcoal] mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-gray-600">
                    {achievement.sublabel}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* 타임라인 */}
        <FadeInSection delay={200}>
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[--color-charcoal] mb-8 text-center">
              45년 혁신의 여정
            </h3>
          </div>
        </FadeInSection>

        <div className="relative">
          {/* 타임라인 선 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[--color-wing-red] via-red-400 to-[--color-wing-red] opacity-20 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;

              return (
                <FadeInSection key={milestone.year} delay={index * 150}>
                  <div
                    className={`flex items-center gap-8 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* 콘텐츠 */}
                    <div
                      className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                    >
                      <div
                        className={`glass-card glass-hover p-6 rounded-lg inline-block ${
                          isLeft ? 'md:ml-auto' : 'md:mr-auto'
                        } max-w-md relative overflow-hidden group`}
                      >
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
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${
                            isLeft
                              ? 'from-[--color-wing-red]/5 to-transparent'
                              : 'from-transparent to-[--color-wing-red]/5'
                          } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        ></div>

                        <div className="relative z-10">
                          <div className="text-3xl font-bold text-[--color-wing-red] mb-2">
                            {milestone.year}
                          </div>
                          <h4 className="text-xl font-semibold text-[--color-charcoal] mb-2">
                            {milestone.title}
                          </h4>
                          <p className="text-gray-700">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 아이콘 (중앙) */}
                    <div className="hidden md:flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-[--color-wing-red] z-10 flex-shrink-0">
                      <Icon className="w-8 h-8 text-[--color-wing-red]" />
                    </div>

                    {/* 빈 공간 (레이아웃용) */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>

        {/* 하단 CTA */}
        <FadeInSection delay={600}>
          <div className="mt-16 text-center glass-card glass-hover p-8 rounded-lg relative overflow-hidden group">
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
              <h3 className="text-3xl font-bold text-[--color-charcoal] mb-4">
                세계 1위 기술력, Wing으로 경험하세요
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                45년 광학 전문성 + 합리적 가격 = 진짜 프리미엄
              </p>
              <div className="inline-flex items-center gap-4">
                <span className="text-4xl font-extrabold text-[--color-wing-red]">
                  45,000원
                </span>
                <span className="text-sm text-gray-600">
                  / 세계 1위 성능
                </span>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
