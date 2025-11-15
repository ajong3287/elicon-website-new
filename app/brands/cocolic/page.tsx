import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cocolic 브랜드 | 엘리콘',
  description: '써모랩의 기술력으로 탄생한 혁신적인 보온보냉 솔루션 브랜드 Cocolic. 국산 히트상품 제조사의 신뢰.',
};

export default function CocolicBrandPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-full md:w-1/3 bg-gray-50 p-8 rounded-lg flex justify-center">
            <Image
              src="/images/brands/cocolic-logo.jpg"
              alt="Cocolic 로고"
              width={250}
              height={130}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cocolic</h1>
            <p className="text-xl text-blue-600 font-semibold mb-4">
              혁신적인 보온보냉 솔루션
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cocolic은 국산 히트상품 제조사인 써모랩의 기술력과 노하우를 바탕으로
              탄생한 프리미엄 보온보냉 브랜드입니다. 일상과 레저 생활에 최적화된
              혁신적인 솔루션을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">브랜드 철학</h2>
        <div className="bg-blue-50 p-8 rounded-lg">
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            "일상의 온도를 지키는 혁신"
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cocolic은 써모랩의 선진 보온보냉 기술을 활용하여 일상생활부터 아웃도어
            활동까지 모든 순간에 최적의 온도 유지 솔루션을 제공합니다. 국산 제조사의
            자부심으로 품질과 혁신을 동시에 추구합니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">핵심 가치</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border-2 border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">혁신 기술</h3>
            <p className="text-gray-600">
              써모랩의 선진 보온보냉 기술로 탁월한 성능 구현
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">국산 품질</h3>
            <p className="text-gray-600">
              국산 히트상품 제조사의 까다로운 품질 관리
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">실용성</h3>
            <p className="text-gray-600">
              일상과 레저에 모두 적합한 실용적인 디자인
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">대표 제품 라인업</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              프리미엄 보온병
            </h3>
            <p className="text-gray-600 mb-2">
              이중 진공 단열 구조로 뛰어난 보온보냉 성능을 자랑하는 프리미엄 제품
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>- 24시간 이상 온도 유지 가능</li>
              <li>- 스테인리스 스틸 소재로 내구성 탁월</li>
              <li>- 다양한 용량과 디자인 선택 가능</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              아웃도어 쿨러
            </h3>
            <p className="text-gray-600 mb-2">
              캠핑과 낚시 등 야외 활동에 최적화된 고성능 휴대용 쿨러
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>- 고밀도 단열재로 장시간 냉기 유지</li>
              <li>- 견고한 구조로 험한 환경에서도 안정적</li>
              <li>- 편리한 휴대 손잡이와 배수 기능</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              일상용 텀블러
            </h3>
            <p className="text-gray-600 mb-2">
              출퇴근, 운동, 일상 생활에 편리하게 사용할 수 있는 휴대용 텀블러
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>- 슬림한 디자인으로 휴대성 우수</li>
              <li>- 누수 방지 설계</li>
              <li>- 세척이 간편한 구조</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              보냉백
            </h3>
            <p className="text-gray-600 mb-2">
              장보기, 피크닉, 배달 등 다양한 용도로 활용 가능한 보냉백
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>- 접이식 구조로 보관 용이</li>
              <li>- 방수 처리로 내구성 강화</li>
              <li>- 다양한 크기 옵션 제공</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">제조사 정보</h2>
        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            써모랩 (국산 히트상품 제조사)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            써모랩은 대한민국을 대표하는 보온보냉 제품 전문 제조사로, 오랜 기간
            축적된 기술력과 품질 관리 노하우를 바탕으로 국내외에서 인정받는
            히트상품을 생산하고 있습니다. 엄격한 품질 기준과 지속적인 기술 혁신으로
            고객 만족을 실현합니다.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">전문 분야</p>
              <p className="font-semibold">보온보냉 제품 제조</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">제조 국가</p>
              <p className="font-semibold">대한민국</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">특징</p>
              <p className="font-semibold">국산 히트상품 제조사</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">등급</p>
              <p className="font-semibold">A급 제조사</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Cocolic 제품 구매하기</h2>
        <p className="mb-6">
          엘리콘 쇼핑몰에서 Cocolic 브랜드의 다양한 제품을 만나보세요.
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
