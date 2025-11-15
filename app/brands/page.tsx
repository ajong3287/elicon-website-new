import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '브랜드 | 엘리콘',
  description: 'Wing, Cocolic, Seanex - 엘리콘이 공급하는 검증된 브랜드 포트폴리오',
};

export default function BrandsPage() {
  const brands = [
    {
      id: 'wing',
      name: 'Wing',
      tagline: '40년 업력의 프리미엄 낚시용품',
      logo: '/images/brands/wing-logo.jpg',
      link: '/brands/wing',
    },
    {
      id: 'cocolic',
      name: 'Cocolic',
      tagline: '혁신적인 보온보냉 솔루션',
      logo: '/images/brands/cocolic-logo.jpg',
      link: '/brands/cocolic',
    },
    {
      id: 'seanex',
      name: 'Seanex',
      tagline: '전문 해양 레저 장비',
      logo: '/images/brands/seanex-logo.png',
      link: '/brands/seanex',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          우리의 브랜드
        </h1>
        <p className="text-xl text-gray-600">
          엘리콘이 공급하는 검증된 A급 제조사 브랜드를 만나보세요.
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={brand.link}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-8 bg-gray-50 flex justify-center items-center h-48">
              <Image
                src={brand.logo}
                alt={`${brand.name} 로고`}
                width={180}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {brand.name}
              </h2>
              <p className="text-gray-600">{brand.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
