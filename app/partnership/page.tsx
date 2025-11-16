import type { Metadata } from 'next';
import PartnershipSection from '../_components/partnership/partnership-section';
import ContactForm from '../_components/partnership/contact-form';

export const metadata: Metadata = {
  title: 'B2B 파트너십 | 엘리콘',
  description:
    '엘리콘과 함께 성장할 유통 파트너를 찾습니다. 검증된 제조사 파트너십과 전국 유통망으로 귀사의 비즈니스를 지원합니다.',
};

export default function PartnershipPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <PartnershipSection />
      <div className="mt-16">
        <ContactForm />
      </div>
    </div>
  );
}
