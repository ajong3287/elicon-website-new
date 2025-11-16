import HeroSection from '@/app/_components/home/hero-section';
import BrandPortfolio from '@/app/_components/home/brand-portfolio';
import InstagramFeed from '@/app/_components/social/instagram-feed';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BrandPortfolio />
      <InstagramFeed
        username="elicon_official"
        limit={6}
        title="엘리콘 인스타그램에서 만나보세요"
      />
    </div>
  );
}
