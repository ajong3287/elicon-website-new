'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

/**
 * Micro-interactions (Trend #32)
 * 작지만 섬세한 UI 인터랙션으로 사용자 경험 향상
 * - 버튼 ripple 효과
 * - 호버 시 scale/shadow 변화
 * - 포커스 링 애니메이션
 * - 체크박스/토글 스위치 애니메이션
 */

interface MicroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Micro-interaction Button
 * 호버, 클릭, 포커스 시 섬세한 애니메이션
 */
export function MicroButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}: MicroButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Ripple 효과 생성
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'ripple';

    const rippleContainer = button.querySelector('.ripple-container');
    rippleContainer?.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);

    onClick?.(e);
  };

  const baseStyles = `
    relative overflow-hidden
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    active:scale-95
    hover:shadow-lg
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantStyles = {
    primary: 'bg-bright-teal text-white hover:bg-deep-navy focus:ring-bright-teal',
    secondary: 'bg-deep-navy text-white hover:bg-bright-teal focus:ring-deep-navy',
    ghost: 'bg-transparent text-deep-navy hover:bg-soft-gray focus:ring-charcoal',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span className="ripple-container absolute inset-0 overflow-hidden rounded-inherit" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

/**
 * Animated Toggle Switch
 * 부드러운 전환 애니메이션
 */
interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export function ToggleSwitch({
  checked,
  onChange,
  label,
  disabled = false,
}: ToggleSwitchProps) {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <div
          className="
            w-11 h-6
            bg-gray-300 dark:bg-gray-700
            rounded-full
            peer
            peer-checked:bg-bright-teal
            peer-focus:ring-4 peer-focus:ring-bright-teal/20
            transition-all duration-300 ease-out
            group-hover:shadow-md
          "
        />
        <div
          className="
            absolute top-0.5 left-0.5
            w-5 h-5
            bg-white
            rounded-full
            shadow-md
            transition-all duration-300 ease-out
            peer-checked:translate-x-5
            peer-checked:scale-110
          "
        />
      </div>
      {label && (
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {label}
        </span>
      )}
    </label>
  );
}

/**
 * Animated Checkbox
 * 체크 시 스케일 애니메이션
 */
interface AnimatedCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export function AnimatedCheckbox({
  checked,
  onChange,
  label,
}: AnimatedCheckboxProps) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div
          className="
            w-5 h-5
            border-2 border-gray-300 dark:border-gray-600
            rounded
            peer-checked:bg-bright-teal peer-checked:border-bright-teal
            peer-focus:ring-2 peer-focus:ring-bright-teal/20
            transition-all duration-200 ease-out
            group-hover:border-bright-teal
            peer-checked:scale-110
          "
        >
          <svg
            className={`
              w-full h-full text-white
              transition-all duration-200
              ${checked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
            `}
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M4 10l4 4 8-8" />
          </svg>
        </div>
      </div>
      {label && (
        <span className="text-sm text-gray-900 dark:text-gray-100">
          {label}
        </span>
      )}
    </label>
  );
}

/**
 * Hover Card with Lift Effect
 * 호버 시 들어 올려지는 효과
 */
interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

export function HoverCard({ children, className = '' }: HoverCardProps) {
  return (
    <div
      className={`
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-2xl
        active:scale-98
        ${className}
      `}
    >
      {children}
    </div>
  );
}
