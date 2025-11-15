import Link from 'next/link';
import Image from 'next/image';

export default function BrandPortfolio() {
  const brands = [
    {
      id: 'wing',
      name: 'Wing',
      tagline: '40년 업력의 프리미엄 낚시용품',
      manufacturer: '한국오지케이 (40년 업력)',
      description: '검증된 품질과 혁신적인 기술로 낚시인들의 신뢰를 받는 프리미엄 낚시용품 브랜드입니다.',
      logo: '/images/brands/wing-logo.jpg',
      link: '/brands/wing',
    },
    {
      id: 'cocolic',
      name: 'Cocolic',
      tagline: '혁신적인 보온보냉 솔루션',
      manufacturer: '써모랩 (국산 히트상품 제조사)',
      description: '써모랩의 기술력으로 탄생한 혁신적인 보온보냉 제품으로 일상의 편리함을 제공합니다.',
      logo: '/images/brands/cocolic-logo.jpg',
      link: '/brands/cocolic',
    },
    {
      id: 'seanex',
      name: 'Seanex',
      tagline: '전문 해양 레저 장비',
      manufacturer: 'A급 제조사 파트너십',
      description: '전문가들이 신뢰하는 고품질 해양 레저 장비로 안전하고 즐거운 해양 활동을 지원합니다.',
      logo: '/images/brands/seanex-logo.png',
      link: '/brands/seanex',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            검증된 브랜드 포트폴리오
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            엘리콘은 A급 제조사와의 파트너십을 통해
            검증된 품질의 제품을 공급합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6 border-b bg-gray-50">
                <div className="flex justify-center mb-4">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} 로고`}
                    width={150}
                    height={80}
                    className="object-contain h-20"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {brand.name}
                </h3>
                <p className="text-sm text-blue-600 text-center font-semibold">
                  {brand.tagline}
                </p>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    제조사
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    {brand.manufacturer}
                  </p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {brand.description}
                </p>

                <Link
                  href={brand.link}
                  className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  자세히 보기
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
