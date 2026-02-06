'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, TrendingUp, Award, Shield } from 'lucide-react';
import FadeInSection from '@/app/_components/animations/FadeInSection';

export default function LensTechnologySection() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const comparisonData = [
    {
      category: '소재',
      lowEnd: '일반 플라스틱',
      wing: 'PC (폴리카보네이트)',
      detail: '충격 강도 200배, 광학 투명도 92% 이상',
      icon: Shield,
    },
    {
      category: '제조 방식',
      lowEnd: '단순 사출',
      wing: '정밀 금형 사출',
      detail: '변형률 0.01mm 이하, 광학 정밀도 ±0.05 디옵터',
      icon: Award,
    },
    {
      category: '코팅',
      lowEnd: '단순 착색',
      wing: '7-11회 다층 코팅',
      detail: '하드코팅 + 반사방지 + 발수 + UV차단 + 편광',
      icon: TrendingUp,
    },
    {
      category: 'UV 차단',
      lowEnd: '불명확',
      wing: 'UV400 100% 검증',
      detail: 'UVA/UVB/UVC 전 대역 보호',
      icon: Shield,
    },
    {
      category: '편광 효율',
      lowEnd: '미검증',
      wing: '98% 이상 검증',
      detail: '수면/도로 반사광 차단, 대비 감도 향상',
      icon: TrendingUp,
    },
    {
      category: '스크래치 저항',
      lowEnd: '기본',
      wing: '1.4배 향상',
      detail: '국제 steel wool 테스트 통과 (2025)',
      icon: Award,
    },
    {
      category: '품질 관리',
      lowEnd: '일관성 낮음',
      wing: '삼성 스마트공장 인증',
      detail: 'OGK 45년 제조 노하우 + ESG 경영',
      icon: Award,
    },
    {
      category: '가격',
      lowEnd: '저렴',
      wing: '29,900원 (적정가)',
      detail: '프리미엄 품질 대비 합리적 가격',
      icon: TrendingUp,
    },
  ];

  const technologies = [
    {
      title: '정밀 사출 성형',
      subtitle: 'Precision Injection Molding',
      features: [
        'PC(폴리카보네이트) 소재',
        '변형률 0.01mm 이하',
        '광학 정밀도 검증',
        '대량 생산 최적화',
      ],
      source: "Int'l J. Advanced Mfg. (2025)",
      color: 'wing-red',
    },
    {
      title: '다층 코팅 시스템',
      subtitle: 'Multi-Layer Coating',
      features: [
        '7-11회 레이어 구성',
        '스크래치 저항 1.4배↑',
        '반사방지 + 발수 코팅',
        '하드코팅 내구성',
      ],
      source: '케미렌즈 기술 보도 (2025)',
      color: 'wing-red',
    },
    {
      title: 'UV400 + 편광 98%',
      subtitle: 'UV Protection & Polarization',
      features: [
        '자외선 100% 차단',
        '편광 효율 98% 이상',
        '청색광 선택적 차단',
        '눈부심 차단 + 선명도',
      ],
      source: 'HOYA Vision Care',
      color: 'wing-red',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* 헤더 */}
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[--color-charcoal] mb-4">
              OGK 45년 광학 기술이 만든 차이
            </h2>
            <p className="text-xl text-gray-600">
              저가 중국산과 확실히 다른 이유
            </p>
          </div>
        </FadeInSection>

        {/* 핵심 기술 3가지 */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <FadeInSection key={tech.title} delay={index * 200}>
              <div className="glass-card glass-hover p-8 rounded-lg relative overflow-hidden group h-full">
                {/* 노이즈 텍스처 */}
                <div
                  className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage: 'url(/noise.svg)',
                    backgroundSize: '200px 200px',
                    backgroundRepeat: 'repeat',
                  }}
                ></div>
                {/* 호버 효과 */}
                <div className="absolute inset-0 bg-gradient-to-br from-[--color-wing-red]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <h3 className="text-2xl font-bold text-[--color-wing-red] mb-2 relative z-10 group-hover:scale-105 transition-transform duration-300">
                  {tech.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6 relative z-10">
                  {tech.subtitle}
                </p>

                <ul className="space-y-3 mb-6 relative z-10">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[--color-wing-red] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-gray-500 italic relative z-10 border-t border-gray-200 pt-4">
                  출처: {tech.source}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* 비교표 */}
        <FadeInSection>
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[--color-charcoal] mb-2 text-center">
              비교표: 저가 중국산 vs Wing
            </h3>
            <p className="text-center text-gray-600 mb-8">
              각 항목에 마우스를 올려 상세 정보를 확인하세요
            </p>
          </div>

          <div className="glass-card p-4 md:p-8 rounded-lg relative overflow-hidden">
            {/* 노이즈 텍스처 */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat',
              }}
            ></div>

            <div className="overflow-x-auto relative z-10">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[--color-wing-red]">
                    <th className="text-left py-4 px-4 text-[--color-charcoal] font-bold">
                      항목
                    </th>
                    <th className="text-left py-4 px-4 text-gray-600">
                      저가 중국산
                    </th>
                    <th className="text-left py-4 px-4 text-[--color-wing-red] font-bold">
                      Wing (OGK 기술)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => {
                    const Icon = row.icon;
                    const isHovered = hoveredRow === index;

                    return (
                      <tr
                        key={row.category}
                        className={`border-b border-gray-200 transition-all duration-300 cursor-pointer ${
                          isHovered
                            ? 'bg-[--color-wing-red]/5 scale-[1.02]'
                            : 'hover:bg-gray-50'
                        }`}
                        onMouseEnter={() => setHoveredRow(index)}
                        onMouseLeave={() => setHoveredRow(null)}
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <Icon
                              className={`w-5 h-5 transition-colors duration-300 ${
                                isHovered
                                  ? 'text-[--color-wing-red]'
                                  : 'text-gray-400'
                              }`}
                            />
                            <span className="font-semibold text-[--color-charcoal]">
                              {row.category}
                            </span>
                          </div>
                          {isHovered && (
                            <p className="text-sm text-gray-600 mt-2 pl-7 animate-fade-in">
                              {row.detail}
                            </p>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <XCircle className="w-4 h-4 text-gray-400" />
                            <span>{row.lowEnd}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2 text-[--color-wing-red] font-semibold">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>{row.wing}</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </FadeInSection>

        {/* 기술 인증 */}
        <FadeInSection delay={200}>
          <div className="mt-16 glass-card glass-hover p-8 rounded-lg relative overflow-hidden group">
            {/* 노이즈 텍스처 */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat',
              }}
            ></div>
            {/* 호버 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-wing-red]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-2xl font-bold text-[--color-charcoal] mb-6 relative z-10">
              기술 인증 및 검증
            </h3>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div>
                <h4 className="font-semibold text-[--color-wing-red] mb-3">
                  OGK 업적
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-[--color-wing-red] flex-shrink-0 mt-1" />
                    <span>대통령 표창 (2009)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-[--color-wing-red] flex-shrink-0 mt-1" />
                    <span>삼성 스마트공장 인증</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-[--color-wing-red] flex-shrink-0 mt-1" />
                    <span>ESG 경영 선언</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[--color-wing-red] mb-3">
                  학술 검증
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Int'l J. Advanced Mfg. (2025)</li>
                  <li>• Applied Optics (2024)</li>
                  <li>• Polymers (2024)</li>
                  <li>• HOYA Vision Care</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[--color-wing-red] mb-3">
                  Wing의 역할
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  엘리콘은 OGK의 공식 유통 파트너로서 이러한 프리미엄 기술력을
                  B2B 시장에 안정적으로 공급하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
