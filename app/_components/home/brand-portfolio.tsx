import BrandCard from '@/app/_components/brands/brand-card';
import FadeInSection from '@/app/_components/animations/FadeInSection';
import { BrandCarousel, ScrollSnapItem } from '@/app/_components/ui/ScrollSnapContainer';

export default function BrandPortfolio() {
  const brands = [
    {
      id: 'wing',
      name: 'Wing',
      description: 'OGK 제조 파트너십 · 광학 전문 브랜드',
      subtitle: '스포츠고글·스키고글·수경 전문',
      logo: '/images/brands/wing-logo.jpg',
      link: '/brands/wing',
      badges: [
        { text: '한국OGK 제조', color: 'blue' as const },
        { text: '통일가 29,900원', color: 'teal' as const },
      ],
      highlights: [
        '스포츠고글·스키고글·수경 8종 라인업',
        '사이클링/스키/수영 전문 광학 설계',
        '국내 제조로 A/S 및 품질 관리 우수',
      ],
    },
    {
      id: 'cocolic',
      name: 'Cocolic',
      description: '안전을 최우선으로 설계된 유아동 아이웨어',
      subtitle: '프리미엄 유아용품 브랜드',
      logo: '/images/brands/cocolic-logo.jpg',
      link: '/brands/cocolic',
      badges: [
        { text: 'KC 인증', color: 'green' as const },
        { text: '유해물질 무검출', color: 'teal' as const },
      ],
      highlights: [
        '3-12세 연령별 맞춤 설계',
        '안과 전문의 추천 브랜드',
        '내구성 테스트 통과 (낙하/충격)',
      ],
    },
    {
      id: 'seanex',
      name: 'Seanex',
      description: '쪼꼬미에기 55,578개 리뷰 · 시장 1위',
      subtitle: '에기 전문 낚시 브랜드',
      logo: '/images/brands/seanex-logo.png',
      link: '/brands/seanex',
      badges: [
        { text: '네이버 스마트스토어 88점', color: 'orange' as const },
        { text: '일본 대비 절반가', color: 'teal' as const },
      ],
      highlights: [
        '쪼꼬미·엉뚱이·매끄니·은비늘멸치 에기',
        '주꾸미/갑오징어 전문 라인업',
        '온라인 판매 1위 (55,578 리뷰)',
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-charcoal] mb-4">
              엘리콘이 검증하고 공급하는 프리미엄 브랜드
            </h2>
          </div>
        </FadeInSection>

        {/* CSS Scroll Snap Carousel (Trend #36) - 모바일 최적화 */}
        <BrandCarousel className="pb-8">
          {brands.map((brand, index) => (
            <ScrollSnapItem key={brand.id}>
              <FadeInSection delay={index * 200}>
                <BrandCard
                  logo={brand.logo}
                  brandName={brand.name}
                  description={brand.description}
                  subtitle={brand.subtitle}
                  badges={brand.badges}
                  highlights={brand.highlights}
                  link={brand.link}
                />
              </FadeInSection>
            </ScrollSnapItem>
          ))}
        </BrandCarousel>
      </div>
    </section>
  );
}
