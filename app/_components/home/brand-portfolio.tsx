import BrandCard from '@/app/_components/brands/brand-card';

export default function BrandPortfolio() {
  const brands = [
    {
      id: 'wing',
      name: 'Wing',
      description: '40년 광학 전문 기술력, 윙 (Wing) - 스포츠 아이웨어',
      logo: '/images/brands/wing-logo.jpg',
      link: '/brands/wing',
    },
    {
      id: 'cocolic',
      name: 'Cocolic',
      description: '안전을 최우선으로, 코코릭 (Cocolic) - 프리미엄 유아용품',
      logo: '/images/brands/cocolic-logo.jpg',
      link: '/brands/cocolic',
    },
    {
      id: 'seanex',
      name: 'Seanex',
      description:
        '국산 히트상품 쪼꼬미에기, 씨넥스 (Seanex) - 두족류 전문 낚시',
      logo: '/images/brands/seanex-logo.png',
      link: '/brands/seanex',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[--color-charcoal] mb-4">
            엘리콘이 검증하고 공급하는 프리미엄 브랜드
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <BrandCard
              key={brand.id}
              logo={brand.logo}
              brandName={brand.name}
              description={brand.description}
              link={brand.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
