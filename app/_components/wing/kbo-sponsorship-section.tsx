'use client';

import { Trophy, Award, CheckCircle2 } from 'lucide-react';
import FadeInSection from '@/app/_components/animations/FadeInSection';
import Image from 'next/image';

export default function KBOSponsorshipSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[--color-wing-red]/5 via-white to-gray-50 relative overflow-hidden">
      {/* 배경 장식 */}
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
              <Trophy className="w-5 h-5" />
              <span className="font-bold text-sm">공식 후원</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[--color-charcoal] mb-4">
              국가대표가 선택한 기술력
            </h2>
            <p className="text-xl text-gray-600">
              KBO 국가대표 공식 선글라스 파트너
            </p>
          </div>
        </FadeInSection>

        {/* 메인 콘텐츠 */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* 왼쪽: 이미지 영역 (예시 플레이스홀더) */}
          <FadeInSection delay={100}>
            <div className="glass-card glass-hover p-8 rounded-lg relative overflow-hidden group h-full flex items-center justify-center min-h-[400px]">
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

              {/* 플레이스홀더 (실제 이미지로 교체 예정) */}
              <div className="relative z-10 text-center">
                <Award className="w-32 h-32 text-[--color-wing-red] mx-auto mb-6 opacity-20" />
                <p className="text-sm text-gray-500">
                  KBO 국가대표 공식 제품 이미지
                  <br />
                  (Wing 선글라스 착용 사진 준비 중)
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* 오른쪽: 설명 영역 */}
          <FadeInSection delay={200}>
            <div className="flex flex-col justify-center space-y-6">
              <div className="glass-card glass-hover p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-[--color-wing-red] mb-4">
                  공식 후원 배경
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Wing은 한국OGK의 45년 광학 기술력을 바탕으로 KBO 국가대표
                  선수단에 공식 선글라스를 제공하고 있습니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  OGK의 정밀 렌즈 기술과 다층 코팅 시스템은 국가대표 선수들이
                  경기 중 최상의 시야를 확보할 수 있도록 지원합니다.
                </p>
              </div>

              <div className="glass-card glass-hover p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[--color-charcoal] mb-4">
                  국가대표급 성능
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[--color-wing-red] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>UV400 100% 차단</strong> - 장시간 야외 활동 시
                      눈 보호
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[--color-wing-red] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>편광 98% 효율</strong> - 수면/도로 반사광 완벽
                      차단
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[--color-wing-red] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>초경량 PC 소재</strong> - 장시간 착용 피로감 최소화
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[--color-wing-red] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>프리미엄 내구성</strong> - 스크래치 저항 1.4배
                      향상
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* 언론 보도 */}
        <FadeInSection delay={300}>
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
              <div className="flex items-start gap-4 mb-6">
                <Award className="w-10 h-10 text-[--color-wing-red] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[--color-charcoal] mb-2">
                    언론 보도
                  </h3>
                  <p className="text-sm text-gray-600">중부시사신문</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-[--color-wing-red] pl-6 py-2 mb-6">
                <p className="text-lg text-gray-800 leading-relaxed italic mb-3">
                  "Wing은 한국OGK의 프리미엄 스포츠 아이웨어 브랜드로, OGK의
                  자체 기술로 제작된 렌즈는 UV 차단과 눈부심 감소 효과를
                  극대화하며, 초경량 프레임과 인체공학적 디자인으로 편안한
                  착용감을 제공합니다."
                </p>
                <p className="text-sm text-gray-600">
                  국가대표에게 제공되는 제품은 KBO 공식 굿즈로 출시되어 팬들도
                  선수들과 동일한 선글라스를 구매할 수 있습니다.
                </p>
              </blockquote>

              <a
                href="https://www.gninews.co.kr/news/article.html?no=736688"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[--color-wing-red] font-semibold hover:underline transition-all duration-300 group-hover:translate-x-2"
              >
                <span>보도 원문 보기</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </FadeInSection>

        {/* 팬 메시지 */}
        <FadeInSection delay={400}>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              국가대표와 같은 제품을 지금 경험하세요
            </p>
            <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg">
              <Trophy className="w-6 h-6 text-[--color-wing-red]" />
              <span className="text-2xl font-bold text-[--color-charcoal]">
                45,000원
              </span>
              <span className="text-sm text-gray-600">
                / 국가대표급 성능
              </span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
