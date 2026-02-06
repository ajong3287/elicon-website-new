import Link from 'next/link';
import type { Metadata } from 'next';

// Wing 컴포넌트
import VideoHeroSection from '@/app/_components/wing/video-hero-section';
import LensTechnologySection from '@/app/_components/wing/lens-technology-section';
import KBOSponsorshipSection from '@/app/_components/wing/kbo-sponsorship-section';
import WorldNo1Section from '@/app/_components/wing/world-no1-section';
import BrandStorySection from '@/app/_components/wing/brand-story-section';
import WhyWingFAQSection from '@/app/_components/wing/why-wing-faq-section';
import UseCasesSection from '@/app/_components/wing/use-cases-section';
import CustomerReviewsSection from '@/app/_components/wing/customer-reviews-section';
// import CompetitorComparisonSection from '@/app/_components/wing/competitor-comparison-section';
// import TCOCalculatorSection from '@/app/_components/wing/tco-calculator-section';

export const metadata: Metadata = {
  title: 'Wing - 스포츠고글·스키고글·수경 | 엘리콘',
  description: 'OGK 45년 광학 전문 기술력의 Wing. KBO 국가대표 공식 후원, 대통령 표창 수상.',
};

export default function WingBrandPage() {
  return (
    <div className="min-h-screen">
      {/* 비디오 히어로 섹션 */}
      <VideoHeroSection />

      {/* 메인 콘텐츠 */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div id="brand-story">
          <BrandStorySection />
        </div>
        <KBOSponsorshipSection />
        <WorldNo1Section />
        <LensTechnologySection />
        <UseCasesSection />
        <WhyWingFAQSection />
        <CustomerReviewsSection />

        <div className="text-center mt-8">
          <Link href="/brands" className="text-teal-600 hover:underline">
            &larr; 브랜드 목록으로
          </Link>
        </div>
      </div>
    </div>
  );
}
