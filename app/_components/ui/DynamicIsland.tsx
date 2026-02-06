'use client';

import { Toaster, ToastBar, toast as hotToast } from 'react-hot-toast';
import { CheckCircle2, XCircle, Info, AlertCircle, X } from 'lucide-react';

/**
 * Dynamic Island Toaster
 * iOS 16 스타일 알림 시스템 (2025 트렌드)
 *
 * Features:
 * - Pill-shaped design with spring animations
 * - Blur backdrop effect (Glassmorphism)
 * - Auto-progress indicator
 * - Smooth expand/collapse animations
 */
export default function DynamicIsland() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        // 기본 스타일
        style: {
          background: 'transparent',
          boxShadow: 'none',
          padding: 0,
        },
        // 성공 토스트
        success: {
          duration: 4000,
          iconTheme: {
            primary: '#00BFA5',
            secondary: '#fff',
          },
        },
        // 에러 토스트
        error: {
          duration: 5000,
          iconTheme: {
            primary: '#f44336',
            secondary: '#fff',
          },
        },
        // 로딩 토스트
        loading: {
          duration: Infinity,
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <div
              className={`
                dynamic-island-toast
                relative overflow-hidden
                backdrop-blur-xl
                rounded-full
                shadow-2xl
                transition-all duration-500 ease-out
                ${t.visible ? 'animate-island-expand' : 'animate-island-collapse'}
                ${getToastColorClass(t.type)}
              `}
              style={{
                willChange: 'transform, opacity',
              }}
            >
              {/* Glassmorphism 배경 */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-2xl" />

              {/* 노이즈 텍스처 (미묘한 디테일) */}
              <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage: 'url(/noise.svg)',
                  backgroundSize: '100px 100px',
                }}
              />

              {/* Progress bar */}
              {t.duration && t.duration !== Infinity && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 overflow-hidden">
                  <div
                    className="h-full bg-white/60"
                    style={{
                      animation: `shrink ${t.duration}ms linear forwards`,
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 flex items-center gap-3 px-5 py-3">
                {/* Icon */}
                <div className="flex-shrink-0">
                  {getToastIcon(t.type, icon)}
                </div>

                {/* Message */}
                <div className="flex-1 text-sm font-medium text-white">
                  {message}
                </div>

                {/* Close button */}
                {t.type !== 'loading' && (
                  <button
                    onClick={() => hotToast.dismiss(t.id)}
                    className="flex-shrink-0 p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
                    aria-label="닫기"
                  >
                    <X className="w-4 h-4 text-white/80" />
                  </button>
                )}
              </div>
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}

/**
 * 토스트 타입별 색상 클래스
 */
function getToastColorClass(type: string): string {
  switch (type) {
    case 'success':
      return 'bg-gradient-to-r from-[#00BFA5]/90 to-[#00D4B8]/90';
    case 'error':
      return 'bg-gradient-to-r from-[#f44336]/90 to-[#e91e63]/90';
    case 'loading':
      return 'bg-gradient-to-r from-[#1A2C4B]/90 to-[#2A3C5B]/90';
    default:
      return 'bg-gradient-to-r from-[#2196F3]/90 to-[#03A9F4]/90';
  }
}

/**
 * 토스트 타입별 아이콘
 */
function getToastIcon(type: string, defaultIcon: React.ReactNode) {
  const iconClass = 'w-5 h-5';

  switch (type) {
    case 'success':
      return <CheckCircle2 className={`${iconClass} text-white`} />;
    case 'error':
      return <XCircle className={`${iconClass} text-white`} />;
    case 'loading':
      return (
        <div className="relative">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      );
    default:
      return <Info className={`${iconClass} text-white`} />;
  }
}

/**
 * Helper: Dynamic Island 스타일 토스트 헬퍼 함수
 */
export const dynamicToast = {
  success: (message: string) =>
    hotToast.success(message, {
      position: 'top-center',
    }),

  error: (message: string) =>
    hotToast.error(message, {
      position: 'top-center',
    }),

  loading: (message: string) =>
    hotToast.loading(message, {
      position: 'top-center',
    }),

  info: (message: string) =>
    hotToast(message, {
      position: 'top-center',
      icon: <Info className="w-5 h-5 text-white" />,
    }),

  dismiss: (toastId?: string) => hotToast.dismiss(toastId),
};
