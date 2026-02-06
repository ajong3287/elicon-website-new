import ScrollReveal from '@/app/_components/animations/ScrollReveal';
import { MessageCircle, FileCheck, Truck } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      step: '01',
      icon: MessageCircle,
      title: '문의 및 상담',
      description: '전담 상담사가 귀사의 니즈를 정확히 파악합니다',
      features: ['24시간 내 답변', '맞춤형 제안', '무료 샘플 제공'],
      color: 'text-[--color-bright-teal]',
      bgColor: 'bg-[--color-bright-teal]',
    },
    {
      step: '02',
      icon: FileCheck,
      title: '계약 및 준비',
      description: '투명한 계약 조건과 안정적인 공급 계획 수립',
      features: ['명확한 단가', '재고 보증', '품질 관리'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-600',
    },
    {
      step: '03',
      icon: Truck,
      title: '배송 및 관리',
      description: '정기 배송과 지속적인 파트너십 관리',
      features: ['정기 배송', '월간 리포트', '전담 매니저'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[--color-bright-teal] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[--color-charcoal] mb-4">
              간단한 <span className="text-[--color-bright-teal]">3단계</span> 협업 프로세스
            </h2>
            <p className="text-xl text-gray-600">
              복잡한 절차 없이, 빠르고 안정적인 B2B 파트너십
            </p>
          </div>
        </ScrollReveal>

        {/* 프로세스 스텝 */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* 연결선 (데스크톱) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[--color-bright-teal] via-blue-600 to-purple-600 opacity-20"></div>

          {steps.map((step, index) => (
            <ScrollReveal
              key={step.step}
              direction="up"
              delay={0.2 + index * 0.2}
              duration={0.7}
            >
              <div className={`scroll-slide-in-${index === 0 ? 'left' : index === steps.length - 1 ? 'right' : 'left'} relative group`}>
                {/* 스텝 번호 (큰 배경) */}
                <div className="absolute -top-4 -right-4 text-9xl font-extrabold text-gray-100 group-hover:text-gray-200 transition-colors">
                  {step.step}
                </div>

                {/* 카드 */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[--color-bright-teal]/30 hover:-translate-y-2">
                  {/* 아이콘 */}
                  <div
                    className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <step.icon className="text-white w-8 h-8" />
                  </div>

                  {/* 제목 */}
                  <h3 className={`text-2xl font-bold ${step.color} mb-3`}>
                    {step.title}
                  </h3>

                  {/* 설명 */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* 특징 */}
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <span className={`${step.color} font-bold`}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.9}>
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              지금 바로 엘리콘과 함께 성장하세요
            </p>
            <a
              href="/partnership"
              className="inline-block bg-[--color-bright-teal] hover:bg-[#009688] text-white font-bold px-12 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              파트너십 문의하기 →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
