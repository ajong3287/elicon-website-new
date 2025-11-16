import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-[--color-deep-navy] text-white py-20 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          귀사의 비즈니스를 완성할 프로페셔널 유통 파트너
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
          엘리콘은 40년 업력의 전문 제조사(한국오지케이)와 시장 1위
          브랜드(쪼꼬미에기)의 검증된 포트폴리오로 귀사의 비즈니스에 안정적인
          공급망을 제공합니다.
        </p>
        <Link
          href="/partnership"
          className="inline-block bg-[--color-bright-teal] hover:bg-[#009688] text-white font-semibold px-8 py-3 rounded-md transition-colors"
        >
          B2B 파트너십 문의하기
        </Link>
      </div>
    </section>
  );
}
