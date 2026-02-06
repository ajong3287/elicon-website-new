'use client';

import ScrollReveal from '@/app/_components/animations/ScrollReveal';
import CountingNumber from '@/app/_components/animations/CountingNumber';
import Card3DTilt from '@/app/_components/ui/Card3DTilt';
import { TrendingUp, Users, Package, Award } from 'lucide-react';
import { Parallax } from 'react-scroll-parallax';

export default function StatsSection() {
  const stats = [
    {
      icon: Award,
      number: 10,
      suffix: '년',
      label: '유통 전문성',
      description: '2015년 설립, B2B 유통 노하우',
      color: 'text-[--color-bright-teal]',
      bgColor: 'bg-[--color-bright-teal]/10',
    },
    {
      icon: Package,
      number: 3,
      suffix: '개',
      label: '검증된 브랜드',
      description: 'Wing, Cocolic, Seanex',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Users,
      number: 39,
      suffix: '개',
      label: 'B2B 파트너사',
      description: '전국 유통망 구축',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: TrendingUp,
      number: 55578,
      suffix: '+',
      label: '검증 리뷰',
      description: '쪼꼬미에기 시장 1위',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[--color-charcoal] mb-4">
              숫자로 보는 <span className="text-[--color-bright-teal]">엘리콘</span>
            </h2>
            <p className="text-xl text-gray-600">
              데이터가 증명하는 신뢰와 전문성
            </p>
          </div>
        </ScrollReveal>

        <div className="@container grid @md:grid-cols-2 @lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Parallax key={stat.label} speed={-1 - index * 0.5}>
              <ScrollReveal
                direction="scale"
                delay={0.2 + index * 0.1}
                duration={0.6}
              >
                <Card3DTilt tiltAmount={10}>
                  <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[--color-bright-teal]/30">
                  {/* 배경 그라데이션 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* 아이콘 */}
                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className={`${stat.color} w-7 h-7`} />
                    </div>

                    {/* 숫자 */}
                    <div className="mb-2">
                      <CountingNumber
                        end={stat.number}
                        suffix={stat.suffix}
                        className={`text-4xl md:text-5xl font-extrabold ${stat.color}`}
                        duration={2000}
                      />
                    </div>

                    {/* 레이블 */}
                    <h3 className="text-xl font-bold text-[--color-charcoal] mb-2">
                      {stat.label}
                    </h3>

                    {/* 설명 */}
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </div>
                  </div>
                </Card3DTilt>
              </ScrollReveal>
            </Parallax>
          ))}
        </div>

        {/* 추가 신뢰 지표 - Container Query + Glassmorphism (2025) */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="@container mt-12 grid @md:grid-cols-3 gap-6 text-center">
            <div className="scroll-fade-in glass-card glass-hover p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-[--color-bright-teal] mb-2">
                100%
              </div>
              <div className="text-sm text-gray-700 font-medium">국내 제조 직영</div>
            </div>
            <div className="scroll-fade-in glass-card glass-hover p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                A급
              </div>
              <div className="text-sm text-gray-700 font-medium">검증된 제조사</div>
            </div>
            <div className="scroll-fade-in glass-card glass-hover p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                #1
              </div>
              <div className="text-sm text-gray-700 font-medium">낚시용품 시장점유율</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
