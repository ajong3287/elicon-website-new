import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회사 소개 | 엘리콘',
  description: '프로페셔널 B2B 유통 전문 기업 엘리콘. 국내 제조 엄선 브랜드를 통해 검증된 제품을 공급합니다.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          엘리콘 소개
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          엘리콘은 프로페셔널 B2B 유통 전문 기업으로, 국내 제조 엄선 브랜드를 통해
          검증된 제품을 공급하는 전문 유통사입니다.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          우리의 철학
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              국내 제조 엄선
            </h3>
            <p className="text-gray-700">
              40년 업력의 한국오지케이, 국산 히트상품 제조사 써모랩 등
              검증된 A급 제조사의 브랜드만을 엄선하여 공급합니다.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              전문 유통사
            </h3>
            <p className="text-gray-700">
              정직하고 안정적인 장기 공급 파트너로서,
              B2B 파트너에게 신뢰할 수 있는 맞춤형 지원 시스템을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          핵심 가치
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              검증된 브랜드 포트폴리오
            </h3>
            <p className="text-gray-700">
              Wing, Cocolic, Seanex - 각 분야에서 검증된 3개의 브랜드를 통해
              고품질 제품을 안정적으로 공급합니다.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              안정적인 공급망
            </h3>
            <p className="text-gray-700">
              오랜 경험을 바탕으로 구축한 안정적인 공급망을 통해
              지속 가능한 파트너십을 제공합니다.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              맞춤형 지원 시스템
            </h3>
            <p className="text-gray-700">
              각 파트너의 특성과 요구사항을 반영한 맞춤형 지원으로
              함께 성장하는 파트너십을 구축합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          우리의 브랜드
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/images/brands/wing-logo.jpg"
                alt="Wing 로고"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Wing</h3>
            <p className="text-gray-600 text-sm">
              한국오지케이 40년 업력의 프리미엄 낚시용품 브랜드
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/images/brands/cocolic-logo.jpg"
                alt="Cocolic 로고"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cocolic</h3>
            <p className="text-gray-600 text-sm">
              써모랩의 혁신적인 보온보냉 솔루션 브랜드
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/images/brands/seanex-logo.png"
                alt="Seanex 로고"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Seanex</h3>
            <p className="text-gray-600 text-sm">
              전문 해양 레저 장비 브랜드
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          엘리콘과 함께 성장하세요
        </h2>
        <p className="mb-6">
          검증된 브랜드와 안정적인 공급망으로 여러분의 비즈니스를 지원합니다.
        </p>
        <Link
          href="/partnership"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          파트너십 문의하기
        </Link>
      </section>
    </div>
  );
}
