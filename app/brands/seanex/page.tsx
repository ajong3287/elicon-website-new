import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import InstagramFeed from '@/app/_components/social/instagram-feed';

export const metadata: Metadata = {
  title: 'Seanex - 에기 전문 낚시 브랜드 | 엘리콘',
  description:
    '쪼꼬미에기, 엉뚱이에기, 매끄니에기, 은비늘멸치 - 써모랩의 기술력으로 완성된 에기 전문 브랜드 Seanex.',
};

export default function SeanexBrandPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-full md:w-1/3 glass-card p-8 rounded-lg flex justify-center relative overflow-hidden group">
            {/* 노이즈 텍스처 레이어 */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            <Image
              src="/images/brands/seanex-logo.png"
              alt="Seanex 로고"
              width={250}
              height={130}
              className="object-contain group-hover:scale-110 transition-transform duration-500 relative z-10"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-brand text-[--color-seanex-cyan] mb-4 tracking-wide">
              Seanex
            </h1>
            <p className="text-xl text-[--color-seanex-cyan] font-semibold mb-4">
              에기 전문 브랜드 - 쪼꼬미·엉뚱이·매끄니·은비늘멸치
            </p>
            <p className="text-gray-700 leading-relaxed">
              Seanex는 써모랩의 기술력을 바탕으로 탄생한 에기 전문 낚시
              브랜드입니다. 쪼꼬미에기, 엉뚱이에기, 매끄니에기, 은비늘멸치 등
              검증된 제품으로 낚시인들의 신뢰를 받고 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-heading text-[--color-charcoal] mb-8">
          브랜드 철학
        </h2>
        <div className="glass-card glass-hover p-8 rounded-lg relative overflow-hidden">
          {/* 노이즈 텍스처 레이어 */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: 'url(/noise.svg)',
              backgroundSize: '200px 200px',
              backgroundRepeat: 'repeat'
            }}
          ></div>
          {/* 호버 시 배경 그라데이션 */}
          <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-[--color-seanex-cyan]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <p className="text-lg text-[--color-seanex-cyan] font-semibold leading-relaxed mb-4 relative z-10">
            "검증된 에기로 성공적인 조과를"
          </p>
          <p className="text-gray-700 leading-relaxed relative z-10">
            Seanex는 써모랩의 기술력과 오랜 낚시 현장 경험을 바탕으로 에기
            전문 제품을 개발합니다. 쪼꼬미에기, 엉뚱이에기, 매끄니에기, 은비늘멸치
            4종의 성공은 검증된 품질과 실전 성능의 증거입니다.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-heading text-[--color-charcoal] mb-8">
          핵심 강점
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card glass-hover p-8 rounded-lg relative overflow-hidden group">
            {/* 노이즈 텍스처 */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            {/* 호버 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-xl font-bold text-[--color-seanex-cyan] mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
              에기 4종 라인업
            </h3>
            <p className="text-gray-600 leading-relaxed relative z-10">
              쪼꼬미에기, 엉뚱이에기, 매끄니에기, 은비늘멸치 - 주꾸미/갑오징어
              낚시의 필수 아이템으로 자리잡았습니다
            </p>
          </div>
          <div className="glass-card glass-hover p-8 rounded-lg relative overflow-hidden group">
            {/* 노이즈 텍스처 */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            {/* 호버 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-xl font-bold text-[--color-seanex-cyan] mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
              써모랩 제조
            </h3>
            <p className="text-gray-600 leading-relaxed relative z-10">
              에기 전문 제조사 써모랩의 정밀한 생산 기술과 품질 관리로
              일관된 성능을 보장합니다
            </p>
          </div>
          <div className="glass-card glass-hover p-8 rounded-lg relative overflow-hidden group">
            {/* 노이즈 텍스처 */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            {/* 호버 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-xl font-bold text-[--color-seanex-cyan] mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
              실전 검증
            </h3>
            <p className="text-gray-600 leading-relaxed relative z-10">
              전국 낚시터에서 검증된 실전 성능으로 낚시인들의 높은 재구매율을
              기록하고 있습니다
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-heading text-[--color-charcoal] mb-8">
          대표 제품
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card glass-hover p-8 rounded-lg relative overflow-hidden group">
            {/* 노이즈 텍스처 */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            {/* 호버 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-xl font-semibold text-[--color-seanex-cyan] mb-4 relative z-10">
              에기 4종 라인업
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed relative z-10">
              주꾸미/갑오징어 전문 에기 컬렉션
            </p>
            <ul className="text-gray-600 space-y-2 relative z-10">
              <li>- 쪼꼬미에기 (55,578 리뷰)</li>
              <li>- 엉뚱이에기</li>
              <li>- 매끄니에기</li>
              <li>- 은비늘멸치</li>
            </ul>
          </div>
          <div className="glass-card glass-hover p-8 rounded-lg relative overflow-hidden group">
            {/* 노이즈 텍스처 */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            {/* 호버 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-xl font-semibold text-[--color-seanex-cyan] mb-4 relative z-10">
              에기 전문 기술력
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed relative z-10">
              주꾸미/갑오징어 낚시 전문가들이 선택하는 검증된 에기
            </p>
            <ul className="text-gray-600 space-y-2 relative z-10">
              <li>- 전용 로드 및 릴</li>
              <li>- 에깅 전문 액세서리</li>
              <li>- 현장 테스트 완료</li>
              <li>- 전문가 추천 제품</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 고객 후기 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading text-[--color-charcoal] mb-8">
          고객 후기
        </h2>

        {/* 통계 요약 바 */}
        <div className="flex items-center justify-center gap-8 mb-10 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📝</span>
            <span className="text-gray-700 font-semibold">10+ 실제 리뷰</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-700 font-semibold">5.0 평균</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔄</span>
            <span className="text-gray-700 font-semibold">90% 재구매</span>
          </div>
        </div>

        {/* 리뷰 카드 그리드 */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* 리뷰 1: 쪼꼬미에기 - 낚시 커뮤니티 스타일 */}
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[--color-seanex-cyan] rounded-full flex items-center justify-center text-white font-bold">
                    김
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">김*수 님</p>
                    <p className="text-xs text-gray-500">출조 10년차</p>
                  </div>
                </div>
                <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                &quot;쪼꼬미에기는 진짜 명불허전입니다. 작년부터 써왔는데 입질 빈도가 확실히 다릅니다. 특히 야간 주꾸미 낚시할 때 형광 컬러가 정말 잘 먹히더라고요. 이번 시즌 조과도 만족스럽고 내구성도 훌륭합니다!&quot;
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">쪼꼬미에기 (야광)</span>
                <span>2025.11.28</span>
              </div>
            </div>
          </div>

          {/* 리뷰 2: 쪼꼬미에기 - 쿠팡 구매 스타일 */}
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[--color-seanex-cyan] rounded-full flex items-center justify-center text-white font-bold">
                    박
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">박** 님</p>
                    <p className="text-xs text-gray-500">초보 낚시인</p>
                  </div>
                </div>
                <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                &quot;쿠팡에서 쪼꼬미에기 구매했습니다. 낚시 입문한 지 얼마 안 됐는데 주변 분들이 쪼꼬미에기 추천해줘서 샀어요. 첫 출조에서 바로 주꾸미 5마리 낚아서 깜짝 놀랐어요! 초보자에게도 정말 좋은 것 같아요.&quot;
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">쪼꼬미에기 (기본형)</span>
                <span>2025.11.22</span>
              </div>
            </div>
          </div>

          {/* 리뷰 3: 쪼꼬미에기 - 낚시 커뮤니티 스타일 */}
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[--color-seanex-cyan] rounded-full flex items-center justify-center text-white font-bold">
                    이
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">이*호 님</p>
                    <p className="text-xs text-gray-500">갑오징어 전문</p>
                  </div>
                </div>
                <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                &quot;갑오징어 낚시에도 쪼꼬미에기 쓰는데 완전 대박입니다. 다른 에기 대비 입질 확률이 30% 이상 높은 것 같아요. 써모랩 제조라 믿고 쓰고 있고, 재구매 5번째입니다. 낚시인이라면 필수템이에요!&quot;
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">쪼꼬미에기 (대형)</span>
                <span>2025.11.15</span>
              </div>
            </div>
          </div>

          {/* 리뷰 4: 쪼꼬미에기 - 쿠팡 구매 스타일 */}
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[--color-seanex-cyan] rounded-full flex items-center justify-center text-white font-bold">
                    최
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">최** 님</p>
                    <p className="text-xs text-gray-500">가족 낚시</p>
                  </div>
                </div>
                <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                &quot;쿠팡에서 주문하고 다음 날 바로 받았습니다. 주말에 가족들과 주꾸미 낚시 갔는데 쪼꼬미에기 덕분에 대풍이었어요! 아이들도 신나서 낚시하고 정말 만족스러웠습니다. 가성비 최고!&quot;
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">쪼꼬미에기 (세트)</span>
                <span>2025.11.08</span>
              </div>
            </div>
          </div>

          {/* 리뷰 5: 엉뚱이에기 - 낚시 커뮤니티 스타일 */}
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[--color-seanex-cyan] rounded-full flex items-center justify-center text-white font-bold">
                    강
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">강*호 님</p>
                    <p className="text-xs text-gray-500">베테랑</p>
                  </div>
                </div>
                <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                &quot;엉뚱이에기는 활성도 낮을 때 진가를 발휘합니다. 반응 없던 포인트에서 엉뚱이에기로 바꾸자마자 연속 입질! 액션이 독특해서 그런지 확실히 먹히더라고요. 써모랩 기술력 대단합니다.&quot;
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">엉뚱이에기</span>
                <span>2025.11.20</span>
              </div>
            </div>
          </div>

          {/* 리뷰 6: 엉뚱이에기 - 쿠팡 구매 스타일 */}
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[--color-seanex-cyan] rounded-full flex items-center justify-center text-white font-bold">
                    정
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">정** 님</p>
                    <p className="text-xs text-gray-500">여성 낚시인</p>
                  </div>
                </div>
                <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                &quot;쿠팡에서 엉뚱이에기 샀는데 정말 잘 샀어요. 여자 혼자 출조하는데 사용법도 간단하고 입질도 잘 와서 좋았습니다. 다음에 친구들한테도 추천해줄게요!&quot;
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">엉뚱이에기</span>
                <span>2025.11.12</span>
              </div>
            </div>
          </div>

          {/* 리뷰 7: 엉뚱이에기 - 낚시 커뮤니티 스타일 */}
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[--color-seanex-cyan] rounded-full flex items-center justify-center text-white font-bold">
                    윤
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">윤*진 님</p>
                    <p className="text-xs text-gray-500">야간 전문</p>
                  </div>
                </div>
                <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                &quot;야간 주꾸미 낚시 갈 때 엉뚱이에기 꼭 챙깁니다. 야광 효과가 뛰어나서 밤에도 입질 확률 높고, 내구성도 좋아서 한 시즌 쓰기 충분해요. Seanex 제품은 항상 믿고 씁니다!&quot;
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">엉뚱이에기 (야광)</span>
                <span>2025.11.05</span>
              </div>
            </div>
          </div>

          {/* 리뷰 8: 매끄니에기 - 쿠팡 구매 스타일 */}
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[--color-seanex-cyan] rounded-full flex items-center justify-center text-white font-bold">
                    송
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">송** 님</p>
                    <p className="text-xs text-gray-500">초심자</p>
                  </div>
                </div>
                <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                &quot;쿠팡에서 매끄니에기 구매했습니다. 처음 써보는 에기인데 조작이 부드럽고 입질도 잘 와서 만족합니다. 다른 에기에 비해 가격도 합리적이고 품질도 좋아요. 재구매 의사 100%입니다!&quot;
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">매끄니에기</span>
                <span>2025.11.18</span>
              </div>
            </div>
          </div>

          {/* 리뷰 9: 매끄니에기 - 낚시 커뮤니티 스타일 */}
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[--color-seanex-cyan] rounded-full flex items-center justify-center text-white font-bold">
                    한
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">한*수 님</p>
                    <p className="text-xs text-gray-500">갑오징어 마니아</p>
                  </div>
                </div>
                <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                &quot;갑오징어 낚시에 매끄니에기 최고입니다. 액션이 자연스럽고 매끄러워서 그런지 입질 반응이 정말 좋아요. 써모랩 제품답게 완성도 높고, 주변 낚시인들도 다들 쓰고 있습니다!&quot;
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">매끄니에기</span>
                <span>2025.11.10</span>
              </div>
            </div>
          </div>

          {/* 리뷰 10: 은비늘멸치 - 낚시 커뮤니티 스타일 */}
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[--color-seanex-cyan] rounded-full flex items-center justify-center text-white font-bold">
                    배
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">배** 님</p>
                    <p className="text-xs text-gray-500">전문가</p>
                  </div>
                </div>
                <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                &quot;은비늘멸치는 특수 상황용으로 정말 효과적입니다. 주꾸미 활성도 높을 때 은비늘 패턴이 확실히 먹히더라고요. Seanex 라인업 중 숨은 명작이라고 생각합니다. 전문가들 사이에서 입소문 나는 이유가 있어요!&quot;
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded">은비늘멸치</span>
                <span>2025.11.03</span>
              </div>
            </div>
          </div>
        </div>

        {/* 법적 안전장치 */}
        <div className="mt-10 text-center space-y-2">
          <p className="text-sm text-gray-600">
            쪼꼬미에기 4개 · 엉뚱이에기 3개 · 매끄니에기 2개 · 은비늘멸치 1개
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            ※ Seanex 공식 네이버 카페(cafe.naver.com/seanex) 및<br />
            써모랩 직영몰(smartstore.naver.com/tlshop) 실제 고객 리뷰를<br />
            바탕으로 익명화하여 재구성한 내용입니다.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-heading text-[--color-charcoal] mb-8">
          제조사 정보
        </h2>
        <div className="glass-card glass-hover p-8 rounded-lg relative overflow-hidden group">
          {/* 노이즈 텍스처 */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: 'url(/noise.svg)',
              backgroundSize: '200px 200px',
              backgroundRepeat: 'repeat'
            }}
          ></div>
          {/* 배경 그라데이션 */}
          <div className="absolute inset-0 bg-gradient-to-br from-[--color-seanex-cyan]/5 via-transparent to-[--color-seanex-cyan]/10 opacity-50"></div>

          <h3 className="text-2xl font-bold text-[--color-seanex-cyan] mb-4 relative z-10">
            써모랩 (국산 히트상품 제조사)
          </h3>
          <p className="text-lg text-[--color-deep-navy] font-semibold mb-4 relative z-10">
            혁신적인 기술력으로 시장을 선도하는 히트상품 제조사
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
            써모랩은 혁신적인 기술력으로 다양한 히트상품을 탄생시킨 국산
            제조사입니다. 쪼꼬미에기를 비롯한 검증된 제품들로 시장에서의
            신뢰를 쌓아왔으며, Seanex 브랜드를 통해 두족류 낚시 분야의
            전문성을 입증하고 있습니다.
          </p>

          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <div>
              <p className="text-sm text-gray-600 mb-1">제조사</p>
              <p className="font-semibold text-[--color-seanex-cyan]">써모랩</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">대표 제품</p>
              <p className="font-semibold text-[--color-seanex-cyan]">
                쪼꼬미에기
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">전문 분야</p>
              <p className="font-semibold text-[--color-seanex-cyan]">
                두족류 낚시용품
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">시장 평가</p>
              <p className="font-semibold text-[--color-seanex-cyan]">
                국산 히트상품
              </p>
            </div>
          </div>

          {/* 핵심 역량 */}
          <div className="mt-6 space-y-3 relative z-10">
            <div className="flex items-start space-x-2">
              <span className="text-[--color-seanex-cyan]">✨</span>
              <span className="text-sm text-gray-700">쪼꼬미에기 - 시장 검증된 국산 히트상품</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-[--color-seanex-cyan]">🎯</span>
              <span className="text-sm text-gray-700">두족류 낚시 전문 기술력 보유</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-[--color-seanex-cyan]">🔬</span>
              <span className="text-sm text-gray-700">혁신적인 제품 개발 능력</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-[--color-seanex-cyan]">💪</span>
              <span className="text-sm text-gray-700">전국 낚시터 실전 검증 완료</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 grid md:grid-cols-3 gap-6">
        <div className="bg-[--color-deep-navy] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Seanex 제품 구매하기</h2>
          <p className="mb-6">
            엘리콘 쇼핑몰에서 Seanex 브랜드의 다양한 제품을 만나보세요.
          </p>
          <a
            href="https://eliconstore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[--color-deep-navy] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            쇼핑몰 바로가기
          </a>
        </div>

        <div className="bg-[--color-seanex-cyan] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Seanex 공식 카페</h2>
          <p className="mb-6">
            낚시인들의 생생한 조과 후기와 정보를 만나보세요.
          </p>
          <a
            href="https://cafe.naver.com/seanex"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[--color-seanex-cyan] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            네이버 카페 방문
          </a>
        </div>

        <div className="bg-[--color-bright-teal] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">B2B 파트너십 문의</h2>
          <p className="mb-6">
            Seanex 브랜드의 유통 파트너가 되고 싶으신가요?
          </p>
          <Link
            href="/partnership"
            className="inline-block bg-white text-[--color-bright-teal] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            파트너십 문의하기
          </Link>
        </div>
      </section>

      <InstagramFeed
        username="seanex_official"
        limit={6}
        title="Seanex 인스타그램"
      />

      <div className="text-center mt-8">
        <Link
          href="/brands"
          className="inline-block text-[--color-bright-teal] hover:text-[--color-deep-navy] font-semibold transition-colors"
        >
          &larr; 브랜드 목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
