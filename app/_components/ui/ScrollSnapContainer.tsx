import { ReactNode } from 'react';

/**
 * CSS Scroll Snap (Trend #36)
 * JavaScript 없이 네이티브 슬라이드쇼/캐러셀 구현
 * - GPU 가속 (60fps 보장)
 * - 터치 제스처 자동 지원
 * - 브라우저 지원: 95%+ (Chrome 69+, Safari 11+, Firefox 68+)
 */

interface ScrollSnapContainerProps {
  children: ReactNode;
  direction?: 'horizontal' | 'vertical' | 'both';
  type?: 'mandatory' | 'proximity';
  align?: 'start' | 'center' | 'end';
  padding?: string;
  className?: string;
}

/**
 * Scroll Snap Container
 * 부드러운 스크롤 스냅 컨테이너
 */
export default function ScrollSnapContainer({
  children,
  direction = 'horizontal',
  type = 'mandatory',
  align = 'center',
  padding = '0',
  className = '',
}: ScrollSnapContainerProps) {
  const directionMap = {
    horizontal: 'x',
    vertical: 'y',
    both: 'both',
  };

  return (
    <div
      className={`scroll-snap-container ${className}`}
      style={{
        scrollSnapType: `${directionMap[direction]} ${type}`,
        scrollPadding: padding,
        overflowX: direction === 'horizontal' || direction === 'both' ? 'scroll' : 'hidden',
        overflowY: direction === 'vertical' || direction === 'both' ? 'scroll' : 'hidden',
        display: direction === 'horizontal' ? 'flex' : 'grid',
        gap: '1rem',
      }}
      data-scroll-snap-align={align}
    >
      {children}
    </div>
  );
}

/**
 * Scroll Snap Item
 * 스냅 포인트가 되는 아이템
 */
interface ScrollSnapItemProps {
  children: ReactNode;
  align?: 'start' | 'center' | 'end' | 'none';
  stop?: 'normal' | 'always';
  className?: string;
}

export function ScrollSnapItem({
  children,
  align = 'center',
  stop = 'normal',
  className = '',
}: ScrollSnapItemProps) {
  return (
    <div
      className={`scroll-snap-item ${className}`}
      style={{
        scrollSnapAlign: align,
        scrollSnapStop: stop,
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

/**
 * 브랜드 포트폴리오용 Scroll Snap Carousel
 * 가로 스크롤 + 중앙 정렬
 */
interface BrandCarouselProps {
  children: ReactNode;
  className?: string;
}

export function BrandCarousel({ children, className = '' }: BrandCarouselProps) {
  return (
    <ScrollSnapContainer
      direction="horizontal"
      type="mandatory"
      align="center"
      padding="2rem"
      className={`
        brand-carousel
        -mx-4 px-4
        md:-mx-8 md:px-8
        ${className}
      `}
    >
      {children}
    </ScrollSnapContainer>
  );
}

/**
 * 세로 페이지 스냅
 * 풀스크린 섹션용
 */
interface FullPageSnapProps {
  children: ReactNode;
  className?: string;
}

export function FullPageSnap({ children, className = '' }: FullPageSnapProps) {
  return (
    <div
      className={`full-page-snap ${className}`}
      style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
      }}
    >
      {children}
    </div>
  );
}

/**
 * 풀스크린 섹션 아이템
 */
interface FullPageSectionProps {
  children: ReactNode;
  className?: string;
}

export function FullPageSection({ children, className = '' }: FullPageSectionProps) {
  return (
    <section
      className={`full-page-section ${className}`}
      style={{
        height: '100vh',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
      }}
    >
      {children}
    </section>
  );
}

/**
 * 사용 예시:
 *
 * // 브랜드 캐러셀
 * <BrandCarousel>
 *   <ScrollSnapItem>
 *     <BrandCard brand={wing} />
 *   </ScrollSnapItem>
 *   <ScrollSnapItem>
 *     <BrandCard brand={cocolic} />
 *   </ScrollSnapItem>
 * </BrandCarousel>
 *
 * // 풀스크린 페이지
 * <FullPageSnap>
 *   <FullPageSection>섹션 1</FullPageSection>
 *   <FullPageSection>섹션 2</FullPageSection>
 * </FullPageSnap>
 *
 * // 커스텀 컨테이너
 * <ScrollSnapContainer direction="both" type="proximity">
 *   <ScrollSnapItem align="start">아이템</ScrollSnapItem>
 * </ScrollSnapContainer>
 */
