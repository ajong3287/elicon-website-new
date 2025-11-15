import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wing 브랜드 | 엘리콘',
  description: '한국오지케이 40년 업력의 프리미엄 낚시용품 브랜드 Wing. 검증된 품질과 혁신적인 기술.',
};

export default function WingBrandPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-full md:w-1/3 bg-gray-50 p-8 rounded-lg flex justify-center">
            <Image
              src="/images/brands/wing-logo.jpg"
              alt="Wing 로고"
              width={250}
              height={130}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Wing</h1>
            <p className="text-xl text-blue-600 font-semibold mb-4">
              40년 업력의 프리미엄 낚시용품
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wing은 한국오지케이의 40년 업력과 기술력을 바탕으로 탄생한
              프리미엄 낚시용품 브랜드입니다. 검증된 품질과 혁신적인 기술로
              낚시인들의 신뢰를 받고 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">브랜드 철학</h2>
        <div className="bg-blue-50 p-8 rounded-lg">
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            "모든 낚시인에게 최고의 경험을 제공한다"
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wing은 낚시를 사랑하는 모든 이들에게 최고의 장비와 경험을 제공하기 위해
            끊임없이 연구하고 개발합니다. 40년간 축적된 노하우와 혁신적인 기술력으로
            낚시의 즐거움을 극대화합니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">핵심 가치</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border-2 border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">검증된 품질</h3>
            <p className="text-gray-600">
              40년 업력의 한국오지케이가 보증하는 최상의 품질
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">혁신 기술</h3>
            <p className="text-gray-600">
              지속적인 연구개발을 통한 혁신적인 제품 개발
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">고객 신뢰</h3>
            <p className="text-gray-600">
              낚시인들의 신뢰와 만족을 최우선 가치로 추구
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">대표 제품 라인업</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              프리미엄 낚싯대
            </h3>
            <p className="text-gray-600 mb-2">
              고강도 카본 소재와 정밀한 제작 공정으로 완성된 프리미엄 낚싯대
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>- 경량 설계로 장시간 사용에도 피로감 최소화</li>
              <li>- 다양한 어종과 낚시 환경에 최적화</li>
              <li>- 내구성과 감도를 동시에 만족</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              릴 및 액세서리
            </h3>
            <p className="text-gray-600 mb-2">
              정밀한 기어비와 부드러운 작동감을 자랑하는 고급 릴 시리즈
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>- 내구성이 뛰어난 금속 재질</li>
              <li>- 정밀한 드래그 시스템</li>
              <li>- 다양한 낚시 기법에 대응</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">제조사 정보</h2>
        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            한국오지케이 (40년 업력)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            1984년 설립 이래 40년간 낚시용품 제조 분야에서 독보적인 기술력과
            품질을 인정받아온 A급 제조사입니다. 국내외 낚시 시장에서 신뢰받는
            브랜드로 자리매김하고 있습니다.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">설립</p>
              <p className="font-semibold">1984년</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">업력</p>
              <p className="font-semibold">40년</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">전문 분야</p>
              <p className="font-semibold">낚시용품 제조</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">등급</p>
              <p className="font-semibold">A급 제조사</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Wing 제품 구매하기</h2>
        <p className="mb-6">
          엘리콘 쇼핑몰에서 Wing 브랜드의 다양한 제품을 만나보세요.
        </p>
        <a
          href="https://eliconstore.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          쇼핑몰 바로가기
        </a>
      </section>

      <div className="mt-8 text-center">
        <Link
          href="/brands"
          className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
        >
          ← 브랜드 목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
