import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          프로페셔널 B2B 유통 전문 기업, 엘리콘
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto">
          국내 제조 엄선 브랜드(Wing, Cocolic, Seanex)를 통해 검증된 제품을 공급합니다.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
          <Image
            src="/images/brands/wing-logo.jpg"
            alt="Wing 로고"
            width={100}
            height={50}
            className="object-contain w-20 sm:w-24 md:w-28 lg:w-32"
          />
          <Image
            src="/images/brands/cocolic-logo.jpg"
            alt="Cocolic 로고"
            width={100}
            height={50}
            className="object-contain w-20 sm:w-24 md:w-28 lg:w-32"
          />
          <Image
            src="/images/brands/seanex-logo.png"
            alt="Seanex 로고"
            width={100}
            height={50}
            className="object-contain w-20 sm:w-24 md:w-28 lg:w-32"
          />
        </div>

        <Link
          href="/about"
          className="inline-block bg-blue-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          더 알아보기
        </Link>
      </div>
    </section>
  );
}
