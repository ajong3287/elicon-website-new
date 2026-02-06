'use client';

import { Heart, Sparkles, Target, Users } from 'lucide-react';
import FadeInSection from '@/app/_components/animations/FadeInSection';

export default function BrandStorySection() {
  const storyBeats = [
    {
      year: '1978',
      icon: Sparkles,
      title: '한 장인의 꿈',
      story:
        '1978년, 한 광학 기술자가 작은 공방에서 꿈을 꿨습니다.\n"세계 최고의 광학 기술을 한국에서 만들겠다."\n\n첫 제품은 단 10개. 하지만 품질은 타협하지 않았습니다.',
      emotion: '열정',
    },
    {
      year: '1990s',
      icon: Target,
      title: '장인 정신의 계승',
      story:
        '단순히 제품을 만드는 것이 아니라,\n사람의 눈을 보호하는 사명으로 승화했습니다.\n\n0.01mm의 정밀도를 위해 금형을 100번 조정하고,\n1.4배 스크래치 저항을 위해 7-11층 코팅을 연구했습니다.',
      emotion: '장인정신',
    },
    {
      year: '2009',
      icon: Heart,
      title: '대한민국이 인정한 기술',
      story:
        '2009년, 중소기업기술혁신대전에서 대통령 표창을 수상했습니다.\n\n45년간 한 길만 걸어온 OGK의 집념과 기술력,\n대한민국이 인정한 순간이었습니다.',
      emotion: '자부심',
    },
    {
      year: '2019',
      icon: Users,
      title: '세계가 선택한 브랜드',
      story:
        '스포츠 고글 시장 점유율 40%, 세계 1위.\n\n중국, 일본, 미국 등 전 세계 선수들이\nOGK의 광학 기술을 신뢰합니다.\n\nKBO 국가대표 선수단도 Wing을 선택했습니다.',
      emotion: '글로벌',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[--color-charcoal] via-gray-900 to-[--color-wing-red]/20 text-white relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/noise.svg)',
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
          }}
        ></div>
      </div>

      {/* 빛 효과 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-radial from-[--color-wing-red]/20 via-transparent to-transparent opacity-30 blur-3xl"></div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* 헤더 */}
        <FadeInSection>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full mb-6 border border-white/20">
              <Heart className="w-6 h-6 fill-current" />
              <span className="font-bold text-lg">Brand Story</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              45년, 한 길만 걸어온 이유
            </h2>
            <p className="text-2xl text-gray-300 mb-8">
              Wing은 단순한 제품이 아닙니다.
              <br />
              45년 장인 정신이 담긴 약속입니다.
            </p>
          </div>
        </FadeInSection>

        {/* 스토리 비트 */}
        <div className="space-y-20">
          {storyBeats.map((beat, index) => {
            const Icon = beat.icon;
            const isLeft = index % 2 === 0;

            return (
              <FadeInSection key={beat.year} delay={index * 200}>
                <div
                  className={`flex flex-col md:flex-row items-center gap-12 ${
                    isLeft ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* 아이콘 & 연도 */}
                  <div className="flex-shrink-0 w-full md:w-1/3 text-center md:text-left">
                    <div className="inline-flex flex-col items-center gap-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-[--color-wing-red] to-red-600 rounded-full flex items-center justify-center shadow-2xl">
                        <Icon className="w-12 h-12" />
                      </div>
                      <div className="text-6xl font-extrabold text-[--color-wing-red]">
                        {beat.year}
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-widest">
                        {beat.emotion}
                      </div>
                    </div>
                  </div>

                  {/* 스토리 */}
                  <div
                    className={`flex-1 bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 ${
                      isLeft ? 'md:text-left' : 'md:text-right'
                    }`}
                  >
                    <h3 className="text-3xl font-bold mb-4">{beat.title}</h3>
                    <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                      {beat.story}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>

        {/* 하단 메시지 */}
        <FadeInSection delay={800}>
          <div className="mt-24 text-center">
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-lg border border-white/10">
              <blockquote className="text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
                "세계 최고의 광학 기술을 한국에서."
              </blockquote>
              <p className="text-xl text-gray-300 mb-8">
                1978년, 한 장인이 꿨던 그 꿈이
                <br />
                지금, Wing입니다.
              </p>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[--color-wing-red] to-transparent mx-auto mb-8"></div>
              <p className="text-2xl font-bold text-[--color-wing-red]">
                45년 장인 정신 × 합리적 가격 = Wing
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* CTA */}
        <FadeInSection delay={1000}>
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-300 mb-6">
              45년 장인 정신을 45,000원에 경험하세요
            </p>
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20">
              <Heart className="w-6 h-6 text-[--color-wing-red] fill-current" />
              <span className="text-3xl font-extrabold">45,000원</span>
              <span className="text-sm text-gray-400">
                / 45년 장인 정신
              </span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
