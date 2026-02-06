'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

/**
 * Wing 브랜드 비디오 히어로 섹션
 *
 * 풀스크린 비디오 배경 + 브랜드 메시지 오버레이
 * - 자동 재생 (음소거)
 * - 스크롤 시 패럴랙스 효과
 * - 반응형 (모바일은 포스터 이미지)
 */

export default function VideoHeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // 자동재생 실패 시 (브라우저 정책)
        setIsPlaying(false)
      })
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden -mx-4 -mt-16" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
      {/* 비디오 배경 */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          src="/videos/wing/hero/brand-hero.mp4"
          poster="/images/brands/wing-logo.png"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
        />

        {/* 로딩 플레이스홀더 */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-black flex items-center justify-center">
            <div className="animate-pulse">
              <Image
                src="/images/brands/wing-logo.png"
                alt="Wing Loading"
                width={200}
                height={80}
                className="opacity-50"
              />
            </div>
          </div>
        )}

        {/* 오버레이 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* 콘텐츠 오버레이 */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          {/* 브랜드 로고 */}
          <div className="mb-6">
            <Image
              src="/images/brands/wing-logo.png"
              alt="Wing"
              width={180}
              height={72}
              className="brightness-0 invert"
              priority
            />
          </div>

          {/* 태그라인 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">눈을 지키는</span>
            <span className="block text-red-500">프로의 선택</span>
          </h1>

          {/* 서브 카피 */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            OGK 45년 광학 기술력으로 탄생한 스포츠 아이웨어.
            <br className="hidden md:block" />
            KBO 국가대표 공식 후원, 대통령 표창 수상.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#brand-story"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-600/50"
            >
              브랜드 스토리
            </a>
            <a
              href="https://www.eliconstore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/30 transition-all duration-300"
            >
              제품 보러가기
            </a>
          </div>
        </div>
      </div>

      {/* 비디오 컨트롤 */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-3">
        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white transition-all duration-300"
          aria-label={isPlaying ? '일시정지' : '재생'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white transition-all duration-300"
          aria-label={isMuted ? '소리 켜기' : '소리 끄기'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
