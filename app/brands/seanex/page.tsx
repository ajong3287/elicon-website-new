import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import InstagramFeed from '@/app/_components/social/instagram-feed';

export const metadata: Metadata = {
  title: 'Seanex - 두족류 전문 낚시 | 엘리콘',
  description:
    '국산 히트상품 쪼꼬미에기, 씨넥스 (Seanex). 써모랩의 기술력으로 완성된 두족류 전문 낚시 브랜드.',
};

export default function SeanexBrandPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-full md:w-1/3 bg-[--color-soft-gray] p-8 rounded-lg flex justify-center">
            <Image
              src="/images/brands/seanex-logo.png"
              alt="Seanex 로고"
              width={250}
              height={130}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-[--color-charcoal] mb-4">
              Seanex
            </h1>
            <p className="text-xl text-[--color-bright-teal] font-semibold mb-4">
              국산 히트상품 쪼꼬미에기 - 두족류 전문 낚시
            </p>
            <p className="text-gray-700 leading-relaxed">
              Seanex는 써모랩의 기술력을 바탕으로 탄생한 두족류 전문 낚시
              브랜드입니다. 국산 히트상품 쪼꼬미에기를 비롯한 검증된 제품으로
              낚시인들의 신뢰를 받고 있습니다.
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
            "검증된 품질로 성공적인 조과를"
          </p>
          <p className="text-gray-700 leading-relaxed">
            Seanex는 써모랩의 기술력과 오랜 낚시 현장 경험을 바탕으로 두족류
            낚시에 최적화된 제품을 개발합니다. 국산 히트상품 쪼꼬미에기의
            성공은 검증된 품질과 실전 성능의 증거입니다.
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
              쪼꼬미에기
            </h3>
            <p className="text-gray-600 leading-relaxed">
              시장에서 검증된 국산 히트상품 쪼꼬미에기. 두족류 낚시의 필수
              아이템으로 자리잡았습니다
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border-2 border-[--color-soft-gray]">
            <h3 className="text-xl font-bold text-[--color-deep-navy] mb-4">
              써모랩 제조
            </h3>
            <p className="text-gray-600 leading-relaxed">
              국산 히트상품 제조사 써모랩의 정밀한 생산 기술과 품질 관리로
              일관된 성능을 보장합니다
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border-2 border-[--color-soft-gray]">
            <h3 className="text-xl font-bold text-[--color-deep-navy] mb-4">
              실전 검증
            </h3>
            <p className="text-gray-600 leading-relaxed">
              전국 낚시터에서 검증된 실전 성능으로 낚시인들의 높은 재구매율을
              기록하고 있습니다
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8">
          대표 제품
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[--color-soft-gray] p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-[--color-deep-navy] mb-4">
              쪼꼬미에기 시리즈
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              국산 히트상품 쪼꼬미에기의 다양한 라인업
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>- 다양한 컬러 옵션</li>
              <li>- 상황별 최적화 모델</li>
              <li>- 내구성 강화 소재</li>
              <li>- 실전 검증 완료</li>
            </ul>
          </div>
          <div className="bg-[--color-soft-gray] p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-[--color-deep-navy] mb-4">
              두족류 전문 장비
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              에깅 전문가들이 선택하는 검증된 장비
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>- 전용 로드 및 릴</li>
              <li>- 에깅 전문 액세서리</li>
              <li>- 현장 테스트 완료</li>
              <li>- 전문가 추천 제품</li>
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
            써모랩 (국산 히트상품 제조사)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            써모랩은 혁신적인 기술력으로 다양한 히트상품을 탄생시킨 국산
            제조사입니다. 쪼꼬미에기를 비롯한 검증된 제품들로 시장에서의
            신뢰를 쌓아왔으며, Seanex 브랜드를 통해 두족류 낚시 분야의
            전문성을 입증하고 있습니다.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">제조사</p>
              <p className="font-semibold text-[--color-deep-navy]">써모랩</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">대표 제품</p>
              <p className="font-semibold text-[--color-deep-navy]">
                쪼꼬미에기
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">전문 분야</p>
              <p className="font-semibold text-[--color-deep-navy]">
                두족류 낚시용품
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">등급</p>
              <p className="font-semibold text-[--color-deep-navy]">
                히트상품 제조사
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 grid md:grid-cols-2 gap-6">
        <div className="bg-[--color-deep-navy] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Seanex 제품 구매하기</h2>
          <p className="mb-6">
            엘리콘 쇼핑몰에서 Seanex 브랜드의 다양한 제품을 만나보세요.
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
            Seanex 브랜드의 유통 파트너가 되고 싶으신가요?
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
        username="seanex_official"
        limit={6}
        title="Seanex 인스타그램"
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
