'use client';

import { useState, MouseEvent, ReactNode } from 'react';

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  rippleColor?: string;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

export default function RippleButton({
  children,
  className = '',
  onClick,
  href,
  rippleColor = 'rgba(255, 255, 255, 0.6)',
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (event: MouseEvent<HTMLElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple: Ripple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // 500ms 후 ripple 제거
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 500);

    if (onClick) {
      onClick();
    }
  };

  const buttonContent = (
    <>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            background: rippleColor,
          }}
        />
      ))}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`relative overflow-hidden ${className}`}
        onClick={createRipple}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={createRipple}
    >
      {buttonContent}
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        .animate-ripple {
          animation: ripple 500ms ease-out;
        }
      `}</style>
    </button>
  );
}
