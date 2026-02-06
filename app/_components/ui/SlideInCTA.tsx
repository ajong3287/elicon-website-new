'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import RippleButton from '@/app/_components/ui/RippleButton';
import toast from 'react-hot-toast';

export default function SlideInCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // 쿠키 확인 (24시간 내 닫았으면 표시 안 함)
    const dismissed = localStorage.getItem('cta-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const now = Date.now();
      if (now - dismissedTime < 24 * 60 * 60 * 1000) {
        setIsDismissed(true);
        return;
      }
    }

    let timeoutId: NodeJS.Timeout;

    // 스크롤 70% 이상 또는 3초 체류 시 표시
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 70) {
        setIsVisible(true);
      }
    };

    // 3초 후 자동 표시
    timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // 이탈 의도 감지 (마우스가 화면 상단 벗어남)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('cta-dismissed', Date.now().toString());
    toast.success('24시간 동안 표시하지 않습니다', {
      icon: '👋',
      duration: 3000,
    });
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div
      className="fixed bottom-4 right-4 z-50 animate-slide-in-right"
      style={{
        animation: 'slideInRight 0.5s ease-out'
      }}
    >
      <div className="glass-dark bg-gradient-to-br from-[--color-bright-teal]/90 to-[--color-deep-navy]/90 text-white rounded-lg shadow-2xl p-6 max-w-sm relative">
        {/* 닫기 버튼 */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
          aria-label="닫기"
        >
          <X size={20} />
        </button>

        {/* 내용 */}
        <h3 className="text-xl font-bold mb-2">
          🎯 B2B 파트너십 문의
        </h3>
        <p className="text-sm text-white/90 mb-4">
          40년 제조 노하우와 55,578개 검증 리뷰로<br />
          귀사의 비즈니스 성장을 지원합니다
        </p>

        <div className="flex gap-3">
          <RippleButton
            href="/partnership"
            className="flex-1 bg-white text-[--color-bright-teal] px-4 py-2 rounded-md font-semibold text-center hover:bg-gray-100 transition-all duration-200 text-sm"
            rippleColor="rgba(0, 191, 166, 0.4)"
          >
            문의하기
          </RippleButton>
          <RippleButton
            onClick={handleDismiss}
            className="flex-1 bg-white/20 text-white px-4 py-2 rounded-md font-semibold hover:bg-white/30 transition-all duration-200 text-sm"
            rippleColor="rgba(255, 255, 255, 0.3)"
          >
            나중에
          </RippleButton>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
