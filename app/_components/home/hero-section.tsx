import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          프로페셔널 B2B 유통 전문 기업, 엘리콘
        </h1>

        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          국내 제조 엄선 브랜드(Wing, Cocolic, Seanex)를 통해 검증된 제품을 공급합니다.
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <div className="flex items-center gap-4">
            <Image
              src="/images/brands/wing-logo.jpg"
              alt="Wing 로고"
              width={120}
              height={60}
              className="object-contain"
            />
            <Image
              src="/images/brands/cocolic-logo.jpg"
              alt="Cocolic 로고"
              width={120}
              height={60}
              className="object-contain"
            />
            <Image
              src="/images/brands/seanex-logo.png"
              alt="Seanex 로고"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        </div>

        <Link
          href="/about"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          더 알아보기
        </Link>
      </div>
    </section>
  );
}
