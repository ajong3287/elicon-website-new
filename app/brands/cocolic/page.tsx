import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cocolic - 프리미엄 유아용품 | 엘리콘',
  description:
    '안전을 최우선으로, 코코릭 (Cocolic). 한국오지케이가 엄선한 안전하고 편안한 프리미엄 유아용품.',
};

export default function CocolicBrandPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-full md:w-1/3 bg-[--color-soft-gray] p-8 rounded-lg flex justify-center">
            <Image
              src="/images/brands/cocolic-logo.jpg"
              alt="Cocolic 로고"
              width={250}
              height={130}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-[--color-charcoal] mb-4">
              Cocolic
            </h1>
            <p className="text-xl font-semibold mb-4" style={{ color: '#FF69B4' }}>
              안전을 최우선으로 - 프리미엄 유아용품
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cocolic은 한국오지케이가 엄선한 프리미엄 유아용품 브랜드입니다.
              아이들의 안전한 놀이와 편안한 일상을 위한 검증된 제품을
              제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8">
          브랜드 철학
        </h2>
        <div className="bg-[--color-soft-gray] p-8 rounded-lg">
          <p className="text-lg font-semibold leading-relaxed mb-4" style={{ color: '#FF69B4' }}>
            "안전한 놀이, 행복한 성장"
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cocolic은 아이들의 안전을 최우선으로 생각합니다. 모든 제품은
            엄격한 안전 기준을 통과하며, 한국오지케이의 검증 절차를 거쳐
            부모님께 신뢰를 드립니다. 안전한 놀이 제품으로 아이들의 행복한
            성장을 응원합니다.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8">
          핵심 가치
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg border-2 border-[--color-soft-gray]">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#FF69B4' }}>
              안전성
            </h3>
            <p className="text-gray-600 leading-relaxed">
              KC 인증 등 엄격한 안전 기준 통과, 무독성 소재 사용으로 아이들에게
              안전한 제품만 제공합니다
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border-2 border-[--color-soft-gray]">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#FF69B4' }}>
              한국오지케이 검증
            </h3>
            <p className="text-gray-600 leading-relaxed">
              40년 업력의 한국오지케이가 엄선하고 검증한 프리미엄 유아용품
              브랜드입니다
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border-2 border-[--color-soft-gray]">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#FF69B4' }}>
              편안함
            </h3>
            <p className="text-gray-600 leading-relaxed">
              아이들의 성장에 맞춘 인체공학적 설계로 편안한 사용감을
              제공합니다
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
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#FF69B4' }}>
              안전 놀이 제품
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              아이들의 안전한 놀이를 위한 검증된 제품 라인업
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>- KC 인증 완료 제품</li>
              <li>- 무독성 소재 사용</li>
              <li>- 인체공학적 설계</li>
              <li>- 내구성 테스트 통과</li>
            </ul>
          </div>
          <div className="bg-[--color-soft-gray] p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#FF69B4' }}>
              일상 편의 용품
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              부모와 아이 모두 편안한 일상 생활용품
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>- 사용 편의성 최적화</li>
              <li>- 세척 및 관리 용이</li>
              <li>- 아이 성장 단계별 제품</li>
              <li>- 안전한 소재 사용</li>
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
            1984년 설립 이래 40년간 품질 관리의 노하우를 쌓아온 A급 제조사
            한국오지케이가 Cocolic 브랜드를 엄선하고 검증합니다. 아이들의
            안전을 최우선으로 생각하는 엄격한 품질 기준을 적용합니다.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">검증 기관</p>
              <p className="font-semibold text-[--color-deep-navy]">
                한국오지케이
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">업력</p>
              <p className="font-semibold text-[--color-deep-navy]">40년</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">안전 인증</p>
              <p className="font-semibold text-[--color-deep-navy]">
                KC 인증 완료
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
          <h2 className="text-2xl font-bold mb-4">Cocolic 제품 구매하기</h2>
          <p className="mb-6">
            엘리콘 쇼핑몰에서 Cocolic 브랜드의 다양한 제품을 만나보세요.
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

        <div className="text-white p-8 rounded-lg text-center" style={{ backgroundColor: '#FF69B4' }}>
          <h2 className="text-2xl font-bold mb-4">B2B 파트너십 문의</h2>
          <p className="mb-6">
            Cocolic 브랜드의 유통 파트너가 되고 싶으신가요?
          </p>
          <Link
            href="/partnership"
            className="inline-block bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            style={{ color: '#FF69B4' }}
          >
            파트너십 문의하기
          </Link>
        </div>
      </section>

      <div className="text-center">
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
