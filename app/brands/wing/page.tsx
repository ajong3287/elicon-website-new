import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import InstagramFeed from '@/app/_components/social/instagram-feed';

export const metadata: Metadata = {
  title: 'Wing - 스포츠 아이웨어 | 엘리콘',
  description:
    '40년 광학 전문 기술력의 Wing. 캠핑, 런닝, 스키/보드 등 다각적 스포츠를 위한 편광 렌즈 아이웨어.',
};

export default function WingBrandPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-full md:w-1/3 bg-[--color-soft-gray] p-8 rounded-lg flex justify-center">
            <Image
              src="/images/brands/wing-logo.jpg"
              alt="Wing 로고"
              width={250}
              height={130}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-[--color-charcoal] mb-4">
              Wing
            </h1>
            <p className="text-xl text-[--color-bright-teal] font-semibold mb-4">
              40년 광학 전문 기술력 - 스포츠 아이웨어
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wing은 한국오지케이의 40년 광학 전문 기술력을 바탕으로 탄생한
              프리미엄 스포츠 아이웨어 브랜드입니다. 캠핑, 런닝, 스키/보드 등
              다양한 스포츠 활동을 위한 최적의 시야를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8">
          브랜드 철학
        </h2>
        <div className="bg-[--color-soft-gray] p-8 rounded-lg">
          <p className="text-lg text-[--color-deep-navy] font-semibold leading-relaxed mb-4">
            "모든 스포츠 활동에 최적의 시야를 제공한다"
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wing은 다양한 아웃도어 스포츠를 즐기는 모든 이들에게 최고의 시야와
            보호를 제공하기 위해 끊임없이 연구하고 개발합니다. 40년간 축적된
            광학 기술 노하우로 캠핑, 런닝, 스키/보드 등 다각적 스포츠 환경에
            최적화된 아이웨어를 선보입니다.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8">
          핵심 강점
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg border-2 border-[--color-soft-gray]">
            <h3 className="text-xl font-bold text-[--color-deep-navy] mb-4">
              편광 렌즈 기술
            </h3>
            <p className="text-gray-600 leading-relaxed">
              40년 광학 전문 기술력으로 완성된 고품질 편광 렌즈가 눈부심을
              차단하고 선명한 시야를 제공합니다
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border-2 border-[--color-soft-gray]">
            <h3 className="text-xl font-bold text-[--color-deep-navy] mb-4">
              한국오지케이 제조
            </h3>
            <p className="text-gray-600 leading-relaxed">
              40년 업력의 검증된 A급 제조사 한국오지케이의 정밀한 제작 공정으로
              최상의 품질을 보증합니다
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border-2 border-[--color-soft-gray]">
            <h3 className="text-xl font-bold text-[--color-deep-navy] mb-4">
              다각적 스포츠 대응
            </h3>
            <p className="text-gray-600 leading-relaxed">
              캠핑, 런닝, 스키/보드 고글 등 다양한 아웃도어 활동에 최적화된
              라인업을 제공합니다
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8">
          제품 라인업
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[--color-soft-gray] p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-[--color-deep-navy] mb-4">
              스포츠 선글라스
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              캠핑, 런닝, 등산 등 다양한 아웃도어 활동을 위한 편광 스포츠 선글라스
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>- 경량 프레임으로 장시간 착용 편안</li>
              <li>- UV400 차단으로 눈 건강 보호</li>
              <li>- 충격 방지 렌즈로 안전성 확보</li>
              <li>- 다양한 스포츠 환경 최적화</li>
            </ul>
          </div>
          <div className="bg-[--color-soft-gray] p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-[--color-deep-navy] mb-4">
              스키/보드 고글
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              설산 환경에 최적화된 프리미엄 스키/보드 고글 라인업
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>- 이중 렌즈 시스템으로 김서림 방지</li>
              <li>- 넓은 시야각 확보</li>
              <li>- 헬멧 호환 설계</li>
              <li>- 교체 가능한 다양한 렌즈 옵션</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8">
          제조사 정보
        </h2>
        <div className="bg-gradient-to-r from-[--color-soft-gray] to-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-[--color-deep-navy] mb-4">
            한국오지케이 (40년 업력)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            1984년 설립 이래 40년간 광학 제품 제조 분야에서 독보적인 기술력과
            품질을 인정받아온 A급 제조사입니다. 4대째 이어온 장인 정신과
            최신 광학 기술의 결합으로 국내외 시장에서 신뢰받는 브랜드로
            자리매김하고 있습니다.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">설립</p>
              <p className="font-semibold text-[--color-deep-navy]">1984년</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">업력</p>
              <p className="font-semibold text-[--color-deep-navy]">40년</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">전문 분야</p>
              <p className="font-semibold text-[--color-deep-navy]">
                광학 제품 제조
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">등급</p>
              <p className="font-semibold text-[--color-deep-navy]">
                A급 제조사
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 grid md:grid-cols-2 gap-6">
        <div className="bg-[--color-deep-navy] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Wing 제품 구매하기</h2>
          <p className="mb-6">
            엘리콘 쇼핑몰에서 Wing 브랜드의 다양한 제품을 만나보세요.
          </p>
          <a
            href="https://eliconstore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[--color-deep-navy] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            쇼핑몰 바로가기
          </a>
        </div>

        <div className="bg-[--color-bright-teal] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">B2B 파트너십 문의</h2>
          <p className="mb-6">
            Wing 브랜드의 유통 파트너가 되고 싶으신가요?
          </p>
          <Link
            href="/partnership"
            className="inline-block bg-white text-[--color-bright-teal] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            파트너십 문의하기
          </Link>
        </div>
      </section>

      <InstagramFeed
        username="wing_eyewear_official"
        limit={6}
        title="Wing 인스타그램"
      />

      <div className="text-center mt-8">
        <Link
          href="/brands"
          className="inline-block text-[--color-bright-teal] hover:text-[--color-deep-navy] font-semibold transition-colors"
        >
          &larr; 브랜드 목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
