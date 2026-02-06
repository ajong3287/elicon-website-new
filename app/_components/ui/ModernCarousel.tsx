import { ReactNode } from 'react';

/**
 * Modern Carousel with Native CSS Primitives (Trends #38-40)
 * Chrome 135+ 실험적 기능
 * - ::scroll-button() - 자동 생성 prev/next 버튼
 * - ::scroll-marker - 자동 네비게이션 마커
 * - scroll-state() - 스냅 상태 쿼리
 *
 * 브라우저 지원: Chrome 135+ (Canary, 실험적)
 * Fallback: CSS Scroll Snap (Trend #36)
 */

interface ModernCarouselProps {
  children: ReactNode;
  showButtons?: boolean;
  showMarkers?: boolean;
  className?: string;
}

/**
 * Modern Carousel Component
 * 실험적 CSS Carousel Primitives 사용
 */
export default function ModernCarousel({
  children,
  showButtons = true,
  showMarkers = true,
  className = '',
}: ModernCarouselProps) {
  return (
    <div className={`modern-carousel-wrapper ${className}`}>
      {/* Carousel Container */}
      <div className="modern-carousel">
        {children}
      </div>

      {/* 브라우저 지원 안내 */}
      <noscript className="carousel-fallback-notice">
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-4">
          이 캐러셀은 Chrome 135+ Canary에서 최적화되어 있습니다.
          현재 브라우저에서는 기본 스크롤 스냅을 사용합니다.
        </p>
      </noscript>
    </div>
  );
}

/**
 * Carousel Item
 * 캐러셀 아이템 (스냅 포인트)
 */
interface CarouselItemProps {
  children: ReactNode;
  className?: string;
}

export function CarouselItem({ children, className = '' }: CarouselItemProps) {
  return (
    <div className={`carousel-item ${className}`}>
      {children}
    </div>
  );
}

/**
 * Interactive Carousel
 * scroll-state() 쿼리를 사용한 인터랙티브 캐러셀
 */
interface InteractiveCarouselProps {
  children: ReactNode;
  className?: string;
}

export function InteractiveCarousel({ children, className = '' }: InteractiveCarouselProps) {
  return (
    <div className={`interactive-carousel-wrapper ${className}`}>
      <div className="interactive-carousel">
        {children}
      </div>
    </div>
  );
}

/**
 * 사용 예시:
 *
 * // 기본 Modern Carousel
 * <ModernCarousel>
 *   <CarouselItem>
 *     <BrandCard brand={wing} />
 *   </CarouselItem>
 *   <CarouselItem>
 *     <BrandCard brand={cocolic} />
 *   </CarouselItem>
 *   <CarouselItem>
 *     <BrandCard brand={seanex} />
 *   </CarouselItem>
 * </ModernCarousel>
 *
 * // 버튼/마커 숨김
 * <ModernCarousel showButtons={false} showMarkers={false}>
 *   {items}
 * </ModernCarousel>
 *
 * // 인터랙티브 캐러셀 (scroll-state 사용)
 * <InteractiveCarousel>
 *   {items}
 * </InteractiveCarousel>
 *
 * // Fallback 동작
 * 지원하지 않는 브라우저에서는 자동으로 CSS Scroll Snap (Trend #36) 사용
 */
