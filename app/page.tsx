import HeroSection from '@/app/_components/home/hero-section-with-3d';
import StatsSection from '@/app/_components/home/stats-section';
import WhyEliconSection from '@/app/_components/home/why-elicon-section';
import ProcessSection from '@/app/_components/home/process-section';
import PartnersSection from '@/app/_components/home/partners-section';
import BrandPortfolio from '@/app/_components/home/brand-portfolio';
import InstagramFeed from '@/app/_components/social/instagram-feed';

export default function Home() {
  return (
    <div>
      {/* 1. 엘리콘 정체성 */}
      <HeroSection />

      {/* 2. 숫자로 보는 엘리콘 (신뢰도 강화) */}
      <StatsSection />

      {/* 3. 핵심 강점 */}
      <WhyEliconSection />

      {/* 4. B2B 협업 프로세스 */}
      <ProcessSection />

      {/* 5. 파트너사 (사회적 증명) */}
      <PartnersSection />

      {/* 6. 브랜드 포트폴리오 (간략화) */}
      <BrandPortfolio />

      {/* 7. 엘리콘 공식 인스타그램 (강화) */}
      <InstagramFeed
        username="elicon_official"
        limit={9}
        title="엘리콘 공식 인스타그램"
      />
    </div>
  );
}
