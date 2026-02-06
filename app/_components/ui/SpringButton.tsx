'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SpringButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  scaleAmount?: number;
}

export default function SpringButton({
  children,
  className = '',
  onClick,
  href,
  scaleAmount = 0.95,
}: SpringButtonProps) {
  const springConfig = {
    type: 'spring' as const,
    stiffness: 400,
    damping: 17,
  };

  const variants = {
    idle: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: scaleAmount },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        variants={variants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
        transition={springConfig}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={className}
      onClick={onClick}
      variants={variants}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      transition={springConfig}
    >
      {children}
    </motion.button>
  );
}
