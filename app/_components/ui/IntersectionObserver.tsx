'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

/**
 * Intersection Observer V2 (Trend #31)
 * - trackVisibility: 실제 가시성 추적 (광고 뷰 카운팅)
 * - delay: 지연 시간 설정 (광고 노출 시간 측정)
 * - 브라우저 지원: 88%+ (2025)
 */

interface IntersectionObserverV2Props {
  children: ReactNode;
  onVisible?: () => void;
  onHidden?: () => void;
  threshold?: number | number[];
  rootMargin?: string;
  trackVisibility?: boolean; // V2 기능
  delay?: number; // V2 기능 (ms)
  className?: string;
}

export default function IntersectionObserverV2({
  children,
  onVisible,
  onHidden,
  threshold = 0.1,
  rootMargin = '0px',
  trackVisibility = false,
  delay = 100,
  className = '',
}: IntersectionObserverV2Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isActuallyVisible, setIsActuallyVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const options: IntersectionObserverInit & {
      trackVisibility?: boolean;
      delay?: number;
    } = {
      threshold,
      rootMargin,
      // V2 기능: 실제 가시성 추적
      trackVisibility,
      delay,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);

        // V2 기능: isVisible 속성 (실제로 보이는지)
        if ('isVisible' in entry) {
          const actuallyVisible = (entry as any).isVisible;
          setIsActuallyVisible(actuallyVisible);

          if (actuallyVisible) {
            onVisible?.();
          } else {
            onHidden?.();
          }
        } else {
          // V2 미지원 브라우저는 기본 동작
          if (visible) {
            onVisible?.();
          } else {
            onHidden?.();
          }
        }
      });
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, trackVisibility, delay, onVisible, onHidden]);

  return (
    <div
      ref={ref}
      className={`
        ${className}
        ${isVisible ? 'is-intersecting' : ''}
        ${isActuallyVisible ? 'is-actually-visible' : ''}
      `}
      data-visible={isVisible}
      data-actually-visible={isActuallyVisible}
    >
      {children}
    </div>
  );
}

/**
 * 사용 예시:
 *
 * <IntersectionObserverV2
 *   trackVisibility={true}
 *   delay={100}
 *   onVisible={() => console.log('광고가 실제로 보임')}
 *   onHidden={() => console.log('광고가 숨겨짐')}
 * >
 *   <div className="ad-banner">광고 배너</div>
 * </IntersectionObserverV2>
 */
