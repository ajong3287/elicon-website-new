'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import CountingNumber from '@/app/_components/animations/CountingNumber';
import FadeInSection from '@/app/_components/animations/FadeInSection';

// Dynamic imports for performance optimization (LCP improvement)
const WingLogo3D = dynamic(() => import('@/app/_components/3d/WingLogo3D'), {
  loading: () => <div className="w-full h-full min-h-[400px] animate-pulse bg-white/10 rounded-lg" />,
  ssr: false
});

const MagneticButton = dynamic(() => import('@/app/_components/ui/MagneticButton'), {
  loading: () => <div className="inline-block animate-pulse bg-white/10 rounded-lg h-12 w-32" />,
  ssr: false
});

const Parallax = dynamic(
  () => import('react-scroll-parallax').then(mod => mod.Parallax),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="relative gradient-elicon noise-bg text-white py-12 md:py-20 px-4 overflow-hidden">
      {/* 배경 애니메이션 효과 + Parallax (2025 트렌드) */}
      <div className="absolute inset-0 opacity-30">
        <Parallax speed={-5}>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-[--color-bright-teal] rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        </Parallax>
        <Parallax speed={-3}>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </Parallax>
        <Parallax speed={-7}>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </Parallax>
      </div>

      {/* 노이즈 텍스처 레이어 (2025 트렌드) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'url(/noise.svg)',
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}
      ></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 왼쪽: 텍스트 콘텐츠 */}
          <div className="text-center lg:text-left">
            {/* 신뢰 배지 */}
            <div className="mb-4 flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="inline-block bg-[--color-bright-teal]/20 text-[--color-bright-teal] text-xs font-semibold px-3 py-1 rounded-full border border-[--color-bright-teal]/30">
                1978년 창업 · 45년 제조 노하우
              </span>
              <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/30">
                한국OGK 직영 유통
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading mb-8 leading-tight">
              제조부터 유통까지,<br />
              <span className="text-[--color-bright-teal]">검증된</span> B2B 파트너
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed font-medium">
              <span className="text-[--color-bright-teal] font-bold text-3xl">40년</span> 제조 노하우 ×{' '}
              <span className="text-[--color-bright-teal] font-bold text-3xl">55K+</span> 검증 리뷰
            </p>

            <p className="text-base md:text-lg mb-6 text-gray-300 leading-relaxed">
              한국OGK 직영 유통으로 안정적인 공급망을 제공합니다
            </p>

            {/* 3개 브랜드 카테고리 간략 소개 */}
            <div className="mb-8 bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-[--color-bright-teal] mb-1">Wing</div>
                  <div className="text-gray-300 text-xs">스포츠 아이웨어 · 45년 전통</div>
                </div>
                <div>
                  <div className="font-semibold text-[--color-bright-teal] mb-1">Cocolic</div>
                  <div className="text-gray-300 text-xs">유아동 전문 · KC 인증</div>
                </div>
                <div>
                  <div className="font-semibold text-[--color-bright-teal] mb-1">Seanex</div>
                  <div className="text-gray-300 text-xs">낚시용품 · 일본 대비 절반가</div>
                </div>
              </div>
            </div>

            {/* 브랜드 요약 통계 - 카운팅 애니메이션 */}
            <div className="mb-8 grid grid-cols-3 gap-4 text-center">
              <FadeInSection delay={200}>
                <div className="group hover:scale-110 transition-transform duration-300">
                  <CountingNumber
                    end={3}
                    className="text-3xl font-bold text-[--color-bright-teal] group-hover:text-white transition-colors"
                  />
                  <div className="text-sm text-gray-300 mt-1">전문 브랜드</div>
                </div>
              </FadeInSection>
              <FadeInSection delay={400}>
                <div className="group hover:scale-110 transition-transform duration-300">
                  <CountingNumber
                    end={45}
                    suffix="년"
                    className="text-3xl font-bold text-[--color-bright-teal] group-hover:text-white transition-colors"
                  />
                  <div className="text-sm text-gray-300 mt-1">제조 노하우</div>
                </div>
              </FadeInSection>
              <FadeInSection delay={600}>
                <div className="group hover:scale-110 transition-transform duration-300">
                  <CountingNumber
                    end={39}
                    className="text-3xl font-bold text-[--color-bright-teal] group-hover:text-white transition-colors"
                  />
                  <div className="text-sm text-gray-300 mt-1">B2B 파트너사</div>
                </div>
              </FadeInSection>
            </div>

            {/* B2B 핵심 혜택 */}
            <div className="mb-8 space-y-2 text-left">
              <div className="flex items-start gap-2">
                <span className="text-[--color-bright-teal] mt-1">✓</span>
                <span className="text-sm text-gray-200">재고 관리 및 정기 배송 시스템</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[--color-bright-teal] mt-1">✓</span>
                <span className="text-sm text-gray-200">전담 상담사 배정 및 월간 판매 리포트</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[--color-bright-teal] mt-1">✓</span>
                <span className="text-sm text-gray-200">제조사 직영으로 중간 마진 없는 경쟁력 있는 가격</span>
              </div>
            </div>

            <MagneticButton href="/partnership" magneticStrength={0.35}>
              <span className="inline-block bg-[--color-bright-teal] hover:bg-[#009688] text-white font-semibold px-8 py-3 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl">
                B2B 파트너십 문의하기
              </span>
            </MagneticButton>
          </div>

          {/* 우측: 3D Wing 로고 */}
          <div className="relative">
            <WingLogo3D />
          </div>
        </div>
      </div>
    </section>
  );
}
