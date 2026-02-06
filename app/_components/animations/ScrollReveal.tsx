'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className = '',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    switch (direction) {
      case 'up':
        return {
          hidden: { ...baseVariants.hidden, y: 50 },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case 'down':
        return {
          hidden: { ...baseVariants.hidden, y: -50 },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case 'left':
        return {
          hidden: { ...baseVariants.hidden, x: 50 },
          visible: { ...baseVariants.visible, x: 0 },
        };
      case 'right':
        return {
          hidden: { ...baseVariants.hidden, x: -50 },
          visible: { ...baseVariants.visible, x: 0 },
        };
      case 'scale':
        return {
          hidden: { ...baseVariants.hidden, scale: 0.8 },
          visible: { ...baseVariants.visible, scale: 1 },
        };
      case 'rotate':
        return {
          hidden: { ...baseVariants.hidden, rotate: -10 },
          visible: { ...baseVariants.visible, rotate: 0 },
        };
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1], // Custom cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
