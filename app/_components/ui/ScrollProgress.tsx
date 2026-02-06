'use client';

import { useEffect, useState } from 'react';

/**
 * Scroll Progress Indicator (Trend #34)
 * 페이지 스크롤 진행도를 시각적으로 표시
 * - 페이지 읽기 진행도 추적
 * - 긴 콘텐츠 페이지에 유용
 * - 사용자 참여도 향상
 */

interface ScrollProgressProps {
  position?: 'top' | 'bottom';
  height?: number;
  color?: string;
  backgroundColor?: string;
  zIndex?: number;
  showPercentage?: boolean;
}

export default function ScrollProgress({
  position = 'top',
  height = 3,
  color = 'linear-gradient(90deg, #00BFA5 0%, #1A2C4B 100%)',
  backgroundColor = 'transparent',
  zIndex = 9999,
  showPercentage = false,
}: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const totalScrollable = documentHeight - windowHeight;
      const progress = (scrollTop / totalScrollable) * 100;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    // 초기 계산
    calculateScrollProgress();

    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', calculateScrollProgress, { passive: true });
    window.addEventListener('resize', calculateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, []);

  const positionStyles = {
    top: { top: 0 },
    bottom: { bottom: 0 },
  };

  return (
    <>
      {/* Progress Bar Container */}
      <div
        className="fixed left-0 right-0 w-full"
        style={{
          ...positionStyles[position],
          height: `${height}px`,
          backgroundColor,
          zIndex,
        }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="페이지 읽기 진행도"
      >
        {/* Progress Bar Fill */}
        <div
          className="h-full transition-all duration-150 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background: color,
          }}
        />
      </div>

      {/* Optional Percentage Display */}
      {showPercentage && (
        <div
          className="fixed right-4 px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg text-sm font-medium"
          style={{
            [position === 'top' ? 'top' : 'bottom']: '1rem',
            zIndex: zIndex + 1,
          }}
        >
          {Math.round(scrollProgress)}%
        </div>
      )}
    </>
  );
}

/**
 * Circular Scroll Progress
 * 원형 진행 표시기 (고정 위치)
 */
interface CircularScrollProgressProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export function CircularScrollProgress({
  size = 60,
  strokeWidth = 4,
  color = '#00BFA5',
  position = 'bottom-right',
}: CircularScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const totalScrollable = documentHeight - windowHeight;
      const progress = (scrollTop / totalScrollable) * 100;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    calculateScrollProgress();
    window.addEventListener('scroll', calculateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, []);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (scrollProgress / 100) * circumference;

  const positionClasses = {
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'top-right': 'top-8 right-8',
    'top-left': 'top-8 left-8',
  };

  return (
    <div
      className={`fixed ${positionClasses[position]} z-50`}
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-200 dark:text-gray-700"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-150 ease-out"
        />
      </svg>
      {/* Percentage Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-deep-navy dark:text-white">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </div>
  );
}

/**
 * 사용 예시:
 *
 * // 기본 (상단 바)
 * <ScrollProgress />
 *
 * // 커스텀 색상 + 퍼센티지 표시
 * <ScrollProgress
 *   color="linear-gradient(90deg, #FF6B6B 0%, #4ECDC4 100%)"
 *   showPercentage={true}
 * />
 *
 * // 원형 진행 표시기
 * <CircularScrollProgress position="bottom-right" />
 */
