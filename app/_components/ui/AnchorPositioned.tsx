import { ReactNode } from 'react';

/**
 * CSS Anchor Positioning API (Trend #37)
 * 요소 간 자동 위치 연결 (툴팁, 드롭다운)
 * - 뷰포트 끝에서 자동 반전
 * - JavaScript 라이브러리 불필요 (Popper.js 대체)
 * - 브라우저 지원: Chrome 125+ (2025년 5월~), 점진적 향상
 */

interface AnchorPositionedProps {
  children: ReactNode;
  anchorName: string;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
  fallbacks?: string[];
  offset?: number;
  className?: string;
}

/**
 * Anchor Positioned Element
 * 앵커 요소에 상대적으로 위치하는 요소
 */
export default function AnchorPositioned({
  children,
  anchorName,
  position = 'top',
  fallbacks = ['bottom', 'left', 'right'],
  offset = 8,
  className = '',
}: AnchorPositionedProps) {
  const positionAreaMap: Record<string, string> = {
    'top': 'top',
    'bottom': 'bottom',
    'left': 'left',
    'right': 'right',
    'top-start': 'top left',
    'top-end': 'top right',
    'bottom-start': 'bottom left',
    'bottom-end': 'bottom right',
  };

  return (
    <div
      className={`anchor-positioned ${className}`}
      style={{
        // @ts-ignore - CSS Anchor Positioning은 최신 기능
        positionAnchor: `--${anchorName}`,
        positionArea: positionAreaMap[position],
        positionTryFallbacks: fallbacks.join(', '),
        margin: `${offset}px`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Anchor Element
 * 기준점이 되는 요소
 */
interface AnchorElementProps {
  children: ReactNode;
  anchorName: string;
  className?: string;
}

export function AnchorElement({ children, anchorName, className = '' }: AnchorElementProps) {
  return (
    <div
      className={`anchor-element ${className}`}
      style={{
        // @ts-ignore - CSS Anchor Positioning
        anchorName: `--${anchorName}`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Tooltip with Anchor Positioning
 * 자동으로 위치를 조정하는 툴팁
 */
interface AnchorTooltipProps {
  trigger: ReactNode;
  content: ReactNode;
  id: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export function AnchorTooltip({
  trigger,
  content,
  id,
  position = 'top',
  className = '',
}: AnchorTooltipProps) {
  return (
    <>
      <AnchorElement anchorName={id} className="inline-block">
        <div className="tooltip-trigger group cursor-help">
          {trigger}
          <AnchorPositioned
            anchorName={id}
            position={position}
            fallbacks={['bottom', 'left', 'right']}
            className={`
              tooltip-content
              hidden group-hover:block
              bg-gray-900 dark:bg-gray-100
              text-white dark:text-gray-900
              px-3 py-2
              rounded-lg
              text-sm
              whitespace-nowrap
              shadow-lg
              z-50
              ${className}
            `}
          >
            {content}
          </AnchorPositioned>
        </div>
      </AnchorElement>
    </>
  );
}

/**
 * Dropdown Menu with Anchor Positioning
 * 자동으로 위치를 조정하는 드롭다운
 */
interface AnchorDropdownProps {
  trigger: ReactNode;
  content: ReactNode;
  id: string;
  position?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  isOpen?: boolean;
  className?: string;
}

export function AnchorDropdown({
  trigger,
  content,
  id,
  position = 'bottom-start',
  isOpen = false,
  className = '',
}: AnchorDropdownProps) {
  return (
    <>
      <AnchorElement anchorName={id}>
        {trigger}
      </AnchorElement>

      {isOpen && (
        <AnchorPositioned
          anchorName={id}
          position={position}
          fallbacks={['bottom-end', 'top-start', 'top-end']}
          className={`
            dropdown-content
            bg-white dark:bg-gray-800
            border border-gray-200 dark:border-gray-700
            rounded-lg
            shadow-xl
            min-w-[200px]
            z-50
            ${className}
          `}
        >
          {content}
        </AnchorPositioned>
      )}
    </>
  );
}

/**
 * 사용 예시:
 *
 * // 기본 Tooltip
 * <AnchorTooltip
 *   id="help-tooltip"
 *   trigger={<span>도움말</span>}
 *   content="여기를 클릭하세요"
 *   position="top"
 * />
 *
 * // 드롭다운 메뉴
 * <AnchorDropdown
 *   id="user-menu"
 *   trigger={<button>사용자 메뉴</button>}
 *   content={
 *     <ul>
 *       <li>프로필</li>
 *       <li>설정</li>
 *       <li>로그아웃</li>
 *     </ul>
 *   }
 *   isOpen={isMenuOpen}
 * />
 *
 * // 커스텀 앵커
 * <AnchorElement anchorName="my-anchor">
 *   <button>앵커</button>
 * </AnchorElement>
 * <AnchorPositioned anchorName="my-anchor" position="bottom">
 *   연결된 요소
 * </AnchorPositioned>
 */
