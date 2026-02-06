'use client';

import { Mountain, Fish, Bike, CheckCircle2, AlertCircle, Compass, Tent, TreePine, Sun, Car, Eye, LucideIcon } from 'lucide-react';
import FadeInSection from '@/app/_components/animations/FadeInSection';
import { useState } from 'react';

interface UseCase {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
  video?: string;
  scenario: {
    situation: string;
    problem: string;
    solution: string;
  };
  features: Array<{
    title: string;
    desc: string;
    icon: string;
  }>;
  testimonial: {
    quote: string;
    author: string;
    rating: number;
  };
}

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState('ski');

  const useCases: Record<string, UseCase> = {
    ski: {
      icon: Mountain,
      title: '스키/보드',
      subtitle: '김서림 Zero, 시야 100%',
      color: 'from-blue-500 to-cyan-500',
      scenario: {
        situation: '새벽 6시, 영하 15도 스키장. 첫 리프트를 기다리는 당신.',
        problem: '중국산 고글은 이미 김서림으로 뿌옇게...',
        solution: 'Wing 이중 렌즈는 김서림 Zero. 급경사도 안전하게.',
      },
      features: [
        {
          title: '이중 렌즈 시스템',
          desc: '내부 공기층 → 결로 방지 → 김서림 Zero',
          icon: '❄️',
        },
        {
          title: '넓은 시야각',
          desc: '170도 광각 → 급경사 대응 → 안전 확보',
          icon: '👁️',
        },
        {
          title: '헬멧 호환',
          desc: 'OGK 인체공학 설계 → 압박감 없음 → 장시간 착용',
          icon: '⛑️',
        },
        {
          title: 'UV400 차단',
          desc: '설면 반사 UV 100% 차단 → 눈 보호',
          icon: '☀️',
        },
      ],
      testimonial: {
        quote: '3시간 활강해도 김서림 하나 없었어요. 중국산 3개 쓰다가 왜 진작 안 샀나 후회했어요.',
        author: '김민준 (스키 강사)',
        rating: 5,
      },
    },
    fishing: {
      icon: Fish,
      title: '낚시터에서',
      subtitle: '수면 반사광 완벽 차단',
      color: 'from-teal-500 to-green-500',
      video: '/videos/wing/sports/fishing-4k.mp4',
      scenario: {
        situation: '오전 10시, 햇빛 쨍쨍한 저수지. 찌를 주시하는 당신.',
        problem: '수면 반사로 찌가 보이지 않아...',
        solution: 'Wing 편광 98% 효율. 수중 찌가 선명하게.',
      },
      features: [
        {
          title: '편광 98% 효율',
          desc: '수면 반사광 완벽 차단 → 수중 찌 시인성 향상',
          icon: '🎣',
        },
        {
          title: 'UV400 차단',
          desc: '장시간 야외 활동 → 눈 건강 보호',
          icon: '☀️',
        },
        {
          title: '스크래치 저항',
          desc: '낚싯대/바늘 접촉 → 1.4배 스크래치 저항',
          icon: '🛡️',
        },
        {
          title: '경량 설계',
          desc: '초경량 PC 소재 → 장시간 착용 피로 최소화',
          icon: '⚖️',
        },
      ],
      testimonial: {
        quote: '편광 성능이 중국산이랑 비교가 안 돼요. 수중 찌 보이는 게 확실히 다릅니다.',
        author: '박서연 (낚시 유튜버)',
        rating: 5,
      },
    },
    cycling: {
      icon: Bike,
      title: '사이클링',
      subtitle: '도로 비산물 완벽 보호',
      color: 'from-orange-500 to-red-500',
      video: '/videos/wing/sports/roadbike-4k-60s.mp4',
      scenario: {
        situation: '오후 3시, 시속 40km로 도로 주행 중. 갑자기 앞차에서 돌멩이가.',
        problem: '일반 선글라스는 파손 위험...',
        solution: 'Wing PC 소재 200배 충격 강도. 스크래치 1.4배 저항.',
      },
      features: [
        {
          title: 'PC 충격 강도',
          desc: '플라스틱 대비 200배 → 비산물 완벽 보호',
          icon: '💪',
        },
        {
          title: '스크래치 저항',
          desc: '케미렌즈 1.4배 저항 → 도로 먼지 방어',
          icon: '🛡️',
        },
        {
          title: '초경량 설계',
          desc: '장시간 라이딩 → 코/귀 압박 최소화',
          icon: '⚖️',
        },
        {
          title: 'UV400 차단',
          desc: '장시간 라이딩 → 눈 건강 보호',
          icon: '☀️',
        },
      ],
      testimonial: {
        quote: '3년 쓰는 중인데 스크래치 하나 없어요. 1.4배 저항 광고가 사실이었어요.',
        author: '이동현 (사이클 동호회)',
        rating: 5,
      },
    },
    hiking: {
      icon: Compass,
      title: '등산',
      subtitle: '험로에서도 안전하게',
      color: 'from-green-600 to-emerald-500',
      scenario: {
        situation: '오전 9시, 바위 구간 등반 중. 땀과 햇빛에 눈을 제대로 뜨기 힘들어.',
        problem: '일반 선글라스는 미끄러지고, UV 차단 불확실...',
        solution: 'Wing 안정적 착용감 + UV400 완벽 차단.',
      },
      features: [
        {
          title: '논슬립 설계',
          desc: '땀 흘러도 미끄러지지 않는 그립 → 안정적 착용',
          icon: '🎯',
        },
        {
          title: 'UV400 차단',
          desc: '고도 상승 시 강해지는 UV → 100% 차단',
          icon: '☀️',
        },
        {
          title: '내구성',
          desc: '바위/나뭇가지 충돌 → PC 소재 200배 강도',
          icon: '🪨',
        },
        {
          title: '편광 기능',
          desc: '계곡 반사광 차단 → 발밑 시야 확보',
          icon: '💧',
        },
      ],
      testimonial: {
        quote: '지리산 종주 3박4일 내내 착용했는데 전혀 불편 없었어요. UV 차단 덕분에 눈도 안 아팠고요.',
        author: '정민석 (등산 가이드)',
        rating: 5,
      },
    },
    camping: {
      icon: Tent,
      title: '캠핑',
      subtitle: '모닥불부터 아침 햇살까지',
      color: 'from-amber-600 to-yellow-500',
      scenario: {
        situation: '저녁 8시, 모닥불 앞. 연기와 불빛이 눈을 자극해.',
        problem: '연기로 눈물 나고, 다음 날 아침 햇빛에 눈부셔...',
        solution: 'Wing 하나로 낮/밤 모두 대응. 다용도 범용 설계.',
      },
      features: [
        {
          title: '스크래치 저항',
          desc: '캠핑장 먼지/모래 → 1.4배 저항으로 보호',
          icon: '🏕️',
        },
        {
          title: 'UV400 차단',
          desc: '아침 강한 햇빛 → 눈부심 완벽 차단',
          icon: '🌅',
        },
        {
          title: '경량 설계',
          desc: '장시간 착용 → 피로감 Zero',
          icon: '⚖️',
        },
        {
          title: '다용도 활용',
          desc: '낮 야외활동 + 저녁 모닥불 → 하나로 해결',
          icon: '🔥',
        },
      ],
      testimonial: {
        quote: '캠핑 갈 때마다 챙겨요. 모닥불 연기도 막아주고, 다음 날 아침 햇빛도 완벽 차단!',
        author: '김하늘 (캠핑 크리에이터)',
        rating: 5,
      },
    },
    running: {
      icon: TreePine,
      title: '런닝',
      subtitle: '땀에도 미끄러지지 않는',
      color: 'from-purple-500 to-pink-500',
      scenario: {
        situation: '오후 5시, 한강 러닝 중. 땀이 흘러내려 선글라스가 자꾸 미끄러져.',
        problem: '일반 선글라스는 땀 + 움직임에 흘러내려...',
        solution: 'Wing 논슬립 설계 + 초경량 → 10km 달려도 안정적.',
      },
      features: [
        {
          title: '논슬립 그립',
          desc: '땀 흘러도 고정 → 흔들림 Zero',
          icon: '💦',
        },
        {
          title: '초경량 PC',
          desc: '장거리 러닝 → 코/귀 압박 최소화',
          icon: '⚖️',
        },
        {
          title: 'UV400 차단',
          desc: '장시간 야외 러닝 → 눈 건강 보호',
          icon: '☀️',
        },
        {
          title: '인체공학 설계',
          desc: '귀걸이 피팅 → 격한 움직임에도 탈락 방지',
          icon: '🏃',
        },
      ],
      testimonial: {
        quote: '마라톤 풀코스 뛸 때도 한 번도 안 미끄러졌어요. 초경량이라 착용감도 최고!',
        author: '박준혁 (마라톤 동호회)',
        rating: 5,
      },
    },
    outdoor: {
      icon: Sun,
      title: '야외활동',
      subtitle: '피크닉부터 페스티벌까지',
      color: 'from-rose-400 to-orange-400',
      scenario: {
        situation: '오후 2시, 한강 공원 피크닉. 돗자리 위에서 햇빛이 너무 강해.',
        problem: '저가 선글라스는 UV 차단 의심스럽고...',
        solution: 'Wing UV400 검증 완료 → 안심하고 야외 즐기기.',
      },
      features: [
        {
          title: 'UV400 검증',
          desc: 'OGK 45년 기술력 → 100% UV 차단 보장',
          icon: '☀️',
        },
        {
          title: '스타일리시',
          desc: '패션 아이템으로도 활용 → 사진 찍기 좋은',
          icon: '📸',
        },
        {
          title: '다용도',
          desc: '피크닉/페스티벌/공원/해변 → 어디든 착용',
          icon: '🎪',
        },
        {
          title: '합리적 가격',
          desc: '명품 성능 45,000원 → 부담 없이 구매',
          icon: '💰',
        },
      ],
      testimonial: {
        quote: '한강 공원 갈 때마다 착용해요. UV 차단 확실하고 사진도 잘 나와요!',
        author: '이서윤 (인플루언서)',
        rating: 5,
      },
    },
    driving: {
      icon: Car,
      title: '운전',
      subtitle: '눈부심 없는 안전 주행',
      color: 'from-slate-600 to-gray-500',
      scenario: {
        situation: '오후 4시, 서쪽 방향 주행. 낮은 태양이 정면으로 비춰.',
        problem: '선바이저로도 부족, 눈부심에 앞차 브레이크 늦게 인식...',
        solution: 'Wing 편광 98% 효율 → 눈부심 완벽 차단, 안전 확보.',
      },
      features: [
        {
          title: '편광 98% 효율',
          desc: '전방 유리 반사광 차단 → 시야 확보',
          icon: '🚗',
        },
        {
          title: 'UV400 차단',
          desc: '장거리 운전 → 눈 피로 감소',
          icon: '☀️',
        },
        {
          title: '색상 왜곡 Zero',
          desc: 'OGK 정밀 렌즈 → 신호등 색 정확 인식',
          icon: '🚦',
        },
        {
          title: '안정적 착용',
          desc: '운전 중 흔들림 없는 고정력',
          icon: '🎯',
        },
      ],
      testimonial: {
        quote: '택시 기사인데 하루 10시간 운전해도 눈 안 피곤해요. 편광 성능 진짜 좋아요.',
        author: '최영수 (택시 기사)',
        rating: 5,
      },
    },
    eyecare: {
      icon: Eye,
      title: '눈보호',
      subtitle: '백내장 예방, 눈 건강 지킴이',
      color: 'from-cyan-500 to-blue-600',
      scenario: {
        situation: '매일 아침, 출퇴근길. 자외선 누적으로 눈 건강 걱정.',
        problem: 'UV 차단 검증 안 된 선글라스는 오히려 위험...',
        solution: 'Wing UV400 100% 차단 검증 → 백내장 예방 효과.',
      },
      features: [
        {
          title: 'UV400 100% 차단',
          desc: 'OGK 검증 완료 → 백내장 위험 3배 감소',
          icon: '🛡️',
        },
        {
          title: '블루라이트 차단',
          desc: '400-500nm 차단 → 눈 피로 감소',
          icon: '💙',
        },
        {
          title: '장시간 착용',
          desc: '초경량 설계 → 하루 종일 착용 가능',
          icon: '⏰',
        },
        {
          title: '안과 권장',
          desc: '대한안과학회 UV 차단 기준 충족',
          icon: '⚕️',
        },
      ],
      testimonial: {
        quote: '안과 의사 추천으로 샀어요. UV 차단 검증된 제품이라 안심하고 착용합니다.',
        author: '한민주 (40대 직장인)',
        rating: 5,
      },
    },
  };

  const currentUseCase = useCases[activeTab as keyof typeof useCases];
  const Icon = currentUseCase.icon;

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-[--color-wing-red]/5 relative overflow-hidden">
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

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* 헤더 */}
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[--color-charcoal] mb-4">
              Wing이 필요한 순간
            </h2>
            <p className="text-xl text-gray-600">
              스키장, 낚시터, 도로 위. Wing이 함께합니다.
            </p>
          </div>
        </FadeInSection>

        {/* 탭 메뉴 - 2줄 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12 max-w-5xl mx-auto">
          {Object.entries(useCases).map(([key, useCase]) => {
            const TabIcon = useCase.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-3 rounded-lg font-bold text-sm transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r ' +
                      useCase.color +
                      ' text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <TabIcon className="w-5 h-5" />
                  <span className="text-xs md:text-sm">{useCase.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* 시나리오 카드 */}
        <FadeInSection key={activeTab}>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* 왼쪽: 시나리오 */}
            <div className="space-y-6">
              {/* 영상 (있는 경우만 표시) */}
              {currentUseCase.video && (
                <div className="aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={currentUseCase.video} type="video/mp4" />
                    브라우저가 video 태그를 지원하지 않습니다.
                  </video>
                </div>
              )}

              {/* 상황 */}
              <div className="glass-card glass-hover p-6 rounded-lg relative overflow-hidden group">
                <div
                  className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage: 'url(/noise.svg)',
                    backgroundSize: '200px 200px',
                    backgroundRepeat: 'repeat',
                  }}
                ></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${currentUseCase.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon
                      className={`w-12 h-12 bg-gradient-to-br ${currentUseCase.color} text-white p-2 rounded-lg`}
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-[--color-charcoal]">
                        {currentUseCase.title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {currentUseCase.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border-l-4 border-gray-400 pl-4">
                      <p className="text-sm text-gray-600 font-semibold mb-1">
                        상황
                      </p>
                      <p className="text-gray-800">
                        {currentUseCase.scenario.situation}
                      </p>
                    </div>
                    <div className="border-l-4 border-red-400 pl-4">
                      <p className="text-sm text-red-600 font-semibold mb-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        문제
                      </p>
                      <p className="text-gray-800">
                        {currentUseCase.scenario.problem}
                      </p>
                    </div>
                    <div
                      className={`border-l-4 border-gradient-to-b ${currentUseCase.color} pl-4`}
                    >
                      <p className="text-sm text-[--color-wing-red] font-semibold mb-1 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        Wing 해결책
                      </p>
                      <p className="text-gray-800 font-bold">
                        {currentUseCase.scenario.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 사용자 후기 */}
              <div className="glass-card glass-hover p-6 rounded-lg relative overflow-hidden group">
                <div
                  className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage: 'url(/noise.svg)',
                    backgroundSize: '200px 200px',
                    backgroundRepeat: 'repeat',
                  }}
                ></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-800 italic mb-3">
                    "{currentUseCase.testimonial.quote}"
                  </blockquote>
                  <p className="text-sm text-gray-600">
                    - {currentUseCase.testimonial.author}
                  </p>
                </div>
              </div>
            </div>

            {/* 오른쪽: 주요 기능 */}
            <div className="space-y-4">
              {currentUseCase.features.map((feature, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <div className="glass-card glass-hover p-6 rounded-lg relative overflow-hidden group">
                    <div
                      className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                      style={{
                        backgroundImage: 'url(/noise.svg)',
                        backgroundSize: '200px 200px',
                        backgroundRepeat: 'repeat',
                      }}
                    ></div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${currentUseCase.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    <div className="relative z-10 flex items-start gap-4">
                      <span className="text-4xl">{feature.icon}</span>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-[--color-charcoal] mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-700">{feature.desc}</p>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* CTA */}
        <FadeInSection delay={400}>
          <div className="text-center glass-card glass-hover p-8 rounded-lg relative overflow-hidden group">
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
              <h3 className="text-2xl font-bold text-[--color-charcoal] mb-4">
                하나로 9가지, Wing 범용 설계
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                스키/보드, 낚시, 등산, 캠핑, 사이클, 런닝, 야외활동, 운전, 눈보호
                <br />
                어디서든 Wing과 함께하세요.
              </p>
              <div className="inline-flex items-center gap-4">
                <span className="text-4xl font-extrabold text-[--color-wing-red]">
                  45,000원
                </span>
                <span className="text-sm text-gray-600">
                  / 9가지 용도, 1개 제품
                </span>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
