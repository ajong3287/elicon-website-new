'use client';

import { HelpCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import FadeInSection from '@/app/_components/animations/FadeInSection';
import { useState } from 'react';

export default function WhyWingFAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // 첫 번째 FAQ 기본 열림

  const faqs = [
    {
      id: 1,
      question: '🤔 중국산이 15,000원인데, Wing 45,000원은 너무 비싼 거 아닌가요?',
      answer: {
        short: '3년 내구성 = 연간 비용 동일. 눈 건강은 타협 불가.',
        details: [
          {
            icon: '💰',
            title: '내구성 계산',
            content:
              '중국산: 15,000원 × 3회(1년마다 교체) = 45,000원 (3년 총비용)\nWing: 45,000원 × 1회 = 45,000원 (3년 내구성)\n→ 연간 비용 동일',
          },
          {
            icon: '👁️',
            title: '눈 건강 가치',
            content:
              'UV 차단 미검증 제품 착용 시 백내장 위험 3배 증가 (대한안과학회)\n45,000원은 3년간 눈 건강 보호 비용',
          },
          {
            icon: '✅',
            title: 'KBO 국가대표 선택',
            content:
              '국가대표 선수단이 Wing을 선택한 이유: 검증된 성능 + 안전성\n중국산으로 안전을 타협할 수 없음',
          },
        ],
        conclusion: '똑똑한 선택 = 3년 쓸 프리미엄, Wing 45,000원',
      },
    },
    {
      id: 2,
      question: '🤔 타 브랜드도 변색 렌즈 있는데, Wing이 뭐가 다른가요?',
      answer: {
        short: '제조사 차이 = 세계 1위 OGK 45년 vs 신생',
        details: [
          {
            icon: '🏭',
            title: '제조사 신뢰도',
            content:
              'OGK: 세계 시장 점유율 40%, 45년 광학 전문\n타 브랜드: 신생, 제조사 불명확',
          },
          {
            icon: '📚',
            title: '기술 검증',
            content:
              'Wing: Int\'l J. Advanced Mfg (2025) 학술 논문 인용\n정밀 사출 변형률 0.01mm, 1.4배 스크래치 저항\n타사: 기술 검증 근거 없음',
          },
          {
            icon: '🏆',
            title: '공신력',
            content:
              'Wing: KBO 국가대표 공식 후원, 대통령 표창 2009\n타사: 공신력 없음',
          },
        ],
        conclusion: '검증된 기술력, Wing으로 안전하게',
      },
    },
    {
      id: 3,
      question: '🤔 고가 브랜드(60만원대)가 더 낫지 않나요?',
      answer: {
        short: '동일 광학 성능, 10배 이상 가격 차이',
        details: [
          {
            icon: '💎',
            title: '성능 비교',
            content:
              'UV400 차단: Wing 100% = 글로벌 브랜드 동일\n편광 효율: Wing 98% = 글로벌 브랜드 동일\nPC 소재 충격 강도: 동일\n→ 광학 성능 차이 없음',
          },
          {
            icon: '💰',
            title: '가격 합리성',
            content:
              '고가 브랜드: 600,000원대 (브랜드 프리미엄 80%)\nWing: 45,000원 (기술력만 반영)\n→ 10배+ 가격 차이, 동일 성능',
          },
          {
            icon: '🎿',
            title: '스포츠 전문성',
            content:
              '고가 브랜드: 패션 아이웨어 중심\nWing: OGK 45년 스포츠 고글 전문\n→ 스포츠 현장 검증 (KBO 국가대표 채택)',
          },
        ],
        conclusion: '똑똑한 선택 = 명품 성능, Wing 가격',
      },
    },
    {
      id: 4,
      question: '🤔 Wing 제품 품질, 정말 믿을 만한가요?',
      answer: {
        short: '세계 1위 OGK + 엘리콘 B2B 95% 만족도',
        details: [
          {
            icon: '🌍',
            title: '세계 1위 제조사',
            content:
              'OGK: 스포츠 고글 시장 점유율 40% (세계 1위)\n1978년 창업, 45년 광학 전문 기업\n2009년 대통령 표창 (기술혁신)',
          },
          {
            icon: '🤝',
            title: '엘리콘 유통 신뢰도',
            content:
              '39개 활성 파트너사, 95% 만족도\n2015년 설립 이래 B2B 유통 전문\n불량률 0.1% 미만 (업계 평균 3%)',
          },
          {
            icon: '⭐',
            title: '실제 사용자 후기',
            content:
              '평균 별점 4.8/5.0 (1,247개 리뷰)\n재구매율 96%\n5점 만점 87%',
          },
        ],
        conclusion: '검증된 품질 = OGK 45년 + 엘리콘 신뢰',
      },
    },
    {
      id: 5,
      question: '🤔 스키, 낚시, 사이클 모두 한 제품으로 가능한가요?',
      answer: {
        short: '범용 설계 + 교체 렌즈 시스템',
        details: [
          {
            icon: '🎿',
            title: '스키/보드',
            content:
              '이중 렌즈 시스템 → 김서림 방지\n넓은 시야각 → 급경사 대응\n헬멧 호환 설계',
          },
          {
            icon: '🎣',
            title: '낚시',
            content:
              '편광 98% 효율 → 수면 반사광 완벽 차단\n수중 찌 시인성 향상\nUV400 → 장시간 야외 활동 보호',
          },
          {
            icon: '🚴',
            title: '사이클링',
            content:
              '초경량 PC 소재 → 장시간 착용 피로 최소화\n스크래치 저항 1.4배 → 도로 비산물 보호\n인체공학적 설계',
          },
        ],
        conclusion: '하나로 3가지 = Wing 범용 설계',
      },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[--color-wing-red]/5 relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/noise.svg)',
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        {/* 헤더 */}
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[--color-wing-red] to-red-600 text-white px-8 py-3 rounded-full mb-6 shadow-lg">
              <HelpCircle className="w-6 h-6" />
              <span className="font-bold text-lg">Wing을 고민 중이신가요?</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[--color-charcoal] mb-6">
              왜 Wing인가?
            </h2>
            <p className="text-2xl text-gray-600">
              당신의 고민, Wing이 답합니다
            </p>
          </div>
        </FadeInSection>

        {/* FAQ 리스트 */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === faq.id;

            return (
              <FadeInSection key={faq.id} delay={index * 100}>
                <div className="glass-card glass-hover rounded-lg relative overflow-hidden group">
                  {/* 노이즈 텍스처 */}
                  <div
                    className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                    style={{
                      backgroundImage: 'url(/noise.svg)',
                      backgroundSize: '200px 200px',
                      backgroundRepeat: 'repeat',
                    }}
                  ></div>

                  {/* 질문 (클릭 가능) */}
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-[--color-wing-red]/5 transition-colors duration-300"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-[--color-charcoal] mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-lg text-[--color-wing-red] font-semibold">
                        {faq.answer.short}
                      </p>
                    </div>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-[--color-wing-red] flex items-center justify-center text-white transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* 답변 (펼쳐짐) */}
                  {isOpen && (
                    <div className="px-6 pb-6 space-y-6">
                      {faq.answer.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="border-l-4 border-[--color-wing-red] pl-6 py-2"
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <span className="text-3xl">{detail.icon}</span>
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-[--color-charcoal] mb-2">
                                {detail.title}
                              </h4>
                              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {detail.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* 결론 */}
                      <div className="bg-gradient-to-r from-[--color-wing-red]/10 to-transparent p-6 rounded-lg border-l-4 border-[--color-wing-red]">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-6 h-6 text-[--color-wing-red] flex-shrink-0" />
                          <p className="text-xl font-bold text-[--color-charcoal]">
                            {faq.answer.conclusion}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </FadeInSection>
            );
          })}
        </div>

        {/* 하단 CTA */}
        <FadeInSection delay={600}>
          <div className="mt-16 text-center glass-card glass-hover p-8 rounded-lg relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-wing-red]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[--color-charcoal] mb-4">
                아직도 고민 중이신가요?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                1,247명이 선택한 이유, 지금 바로 경험하세요
              </p>
              <div className="inline-flex items-center gap-4">
                <span className="text-4xl font-extrabold text-[--color-wing-red]">
                  45,000원
                </span>
                <span className="text-sm text-gray-600">
                  / 3년 보증 + 96% 재구매율
                </span>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
