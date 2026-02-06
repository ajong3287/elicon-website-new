'use client';

import ScrollReveal from '@/app/_components/animations/ScrollReveal';
import MagneticButton from '@/app/_components/ui/MagneticButton';
import { Sparkles, Shield, TrendingUp } from 'lucide-react';
import { Parallax } from 'react-scroll-parallax';

export default function WhyEliconSection() {
  const features = [
    {
      icon: Sparkles,
      title: '10년 유통 전문성',
      description: '2015년 설립 이래 검증된 B2B 유통 파트너십과 브랜드 운영',
      color: 'text-[--color-bright-teal]',
      bgColor: 'bg-[--color-bright-teal]/10',
    },
    {
      icon: Shield,
      title: '시장 1위 브랜드',
      description: '55,578개 리뷰 쪼꼬미에기 낚시용품 시장 점유율 1위',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: TrendingUp,
      title: '39개 파트너사',
      description: '검증된 B2B 파트너십으로 안정적인 공급망 보장',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[--color-charcoal] mb-4">
              왜 <span className="text-[--color-bright-teal]">엘리콘</span>인가?
            </h2>
            <p className="text-xl text-gray-600">
              10년 유통 노하우와 검증된 브랜드를 보유한 B2B 파트너
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Parallax key={feature.title} speed={-2 - index}>
              <ScrollReveal
                direction="scale"
                delay={0.2 + index * 0.15}
                duration={0.7}
              >
                <div className="scroll-scale-in group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[--color-bright-teal]/30 hover:-translate-y-2">
                {/* 아이콘 */}
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`${feature.color} w-8 h-8`} />
                </div>

                {/* 제목 */}
                <h3 className="text-2xl font-bold text-[--color-charcoal] mb-4 group-hover:text-[--color-bright-teal] transition-colors">
                  {feature.title}
                </h3>

                {/* 설명 */}
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            </Parallax>
          ))}
        </div>

        {/* CTA with Magnetic Effect (2025 트렌드) */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="text-center mt-16">
            <MagneticButton href="/partnership" magneticStrength={0.4}>
              <span className="inline-block bg-[--color-bright-teal] hover:bg-[#009688] text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-2xl">
                B2B 파트너십 시작하기 →
              </span>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
