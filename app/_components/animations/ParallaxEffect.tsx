'use client';

import { useEffect, useRef, ReactNode } from 'react';

/**
 * Parallax Effects (Trend #35)
 * 스크롤에 따른 깊이감 있는 시각 효과
 * - 배경 요소의 차별적 속도 이동
 * - 입체감 및 몰입감 향상
 * - 성능 최적화 (transform 사용)
 */

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // 0.1 ~ 2.0 (낮을수록 느림)
  direction?: 'vertical' | 'horizontal';
  className?: string;
}

/**
 * 기본 Parallax 컴포넌트
 * 스크롤 시 요소가 다른 속도로 이동
 */
export default function ParallaxEffect({
  children,
  speed = 0.5,
  direction = 'vertical',
  className = '',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;

      // 요소가 뷰포트에 있을 때만 계산
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + rect.height) {
        const offset = (scrolled - elementTop) * speed;

        if (direction === 'vertical') {
          element.style.transform = `translateY(${offset}px)`;
        } else {
          element.style.transform = `translateX(${offset}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 초기 위치 설정

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/**
 * 배경 Parallax 레이어
 * 여러 레이어를 겹쳐서 깊이감 표현
 */
interface ParallaxLayerProps {
  children: ReactNode;
  depth?: number; // 1 (가장 빠름) ~ 5 (가장 느림)
  className?: string;
}

export function ParallaxLayer({
  children,
  depth = 3,
  className = '',
}: ParallaxLayerProps) {
  const speedMap = {
    1: 0.9, // 전경 (가장 빠름)
    2: 0.7,
    3: 0.5, // 중간
    4: 0.3,
    5: 0.1, // 배경 (가장 느림)
  };

  const speed = speedMap[depth as keyof typeof speedMap] || 0.5;

  return (
    <ParallaxEffect speed={speed} className={className}>
      {children}
    </ParallaxEffect>
  );
}

/**
 * 마우스 기반 Parallax
 * 마우스 움직임에 반응하는 3D 효과
 */
interface MouseParallaxProps {
  children: ReactNode;
  intensity?: number; // 0.1 ~ 1.0
  className?: string;
}

export function MouseParallax({
  children,
  intensity = 0.3,
  className = '',
}: MouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;

      const moveX = deltaX * intensity * 50;
      const moveY = deltaY * intensity * 50;

      element.style.transform = `
        perspective(1000px)
        rotateY(${deltaX * intensity * 10}deg)
        rotateX(${-deltaY * intensity * 10}deg)
        translateX(${moveX}px)
        translateY(${moveY}px)
      `;
    };

    const handleMouseLeave = () => {
      if (element) {
        element.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateX(0px) translateY(0px)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity]);

  return (
    <div
      ref={ref}
      className={`will-change-transform transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

/**
 * 스크롤 기반 Scale Parallax
 * 스크롤 시 크기 변화
 */
interface ScaleParallaxProps {
  children: ReactNode;
  scaleFrom?: number;
  scaleTo?: number;
  className?: string;
}

export function ScaleParallax({
  children,
  scaleFrom = 1,
  scaleTo = 1.2,
  className = '',
}: ScaleParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 요소가 뷰포트에 진입하는 비율 계산 (0 ~ 1)
      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
      );

      const scale = scaleFrom + (scaleTo - scaleFrom) * progress;
      element.style.transform = `scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scaleFrom, scaleTo]);

  return (
    <div
      ref={ref}
      className={`will-change-transform transition-transform duration-100 ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * 사용 예시:
 *
 * // 기본 Parallax
 * <ParallaxEffect speed={0.5}>
 *   <img src="/background.jpg" alt="배경" />
 * </ParallaxEffect>
 *
 * // 다중 레이어 깊이감
 * <div className="relative">
 *   <ParallaxLayer depth={5}>배경 이미지</ParallaxLayer>
 *   <ParallaxLayer depth={3}>중간 콘텐츠</ParallaxLayer>
 *   <ParallaxLayer depth={1}>전경 콘텐츠</ParallaxLayer>
 * </div>
 *
 * // 마우스 반응형 3D 효과
 * <MouseParallax intensity={0.5}>
 *   <div className="card">브랜드 카드</div>
 * </MouseParallax>
 *
 * // 스크롤 시 확대
 * <ScaleParallax scaleFrom={0.8} scaleTo={1.2}>
 *   <h1>히어로 타이틀</h1>
 * </ScaleParallax>
 */
