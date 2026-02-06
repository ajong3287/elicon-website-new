'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressBarProps {
  color?: string;
  height?: number;
  position?: 'top' | 'bottom';
  showOnlyWhenScrolling?: boolean;
}

export default function ScrollProgressBar({
  color = 'var(--color-bright-teal)',
  height = 3,
  position = 'top',
  showOnlyWhenScrolling = false,
}: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();

  // Spring animation for smooth progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const positionStyles = position === 'top'
    ? { top: 0 }
    : { bottom: 0 };

  return (
    <motion.div
      className="fixed left-0 right-0 z-[100] origin-left"
      style={{
        scaleX,
        height: `${height}px`,
        backgroundColor: color,
        ...positionStyles,
      }}
      initial={{ opacity: showOnlyWhenScrolling ? 0 : 1 }}
      animate={{
        opacity: scrollYProgress.get() > 0 || !showOnlyWhenScrolling ? 1 : 0
      }}
      transition={{ duration: 0.2 }}
      role="progressbar"
      aria-label="페이지 스크롤 진행도"
      aria-valuenow={Math.round(scrollYProgress.get() * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
