'use client';

import { useState } from 'react';

export default function WingLogo3D() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-[500px] w-full flex items-center justify-center">
      {/* 배경 효과 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-teal-600/10 rounded-2xl"></div>

      {/* Wing 로고 */}
      <div
        className="relative z-10 transition-all duration-700 ease-out"
        style={{
          transform: isHovered ? 'scale(1.1) rotateY(15deg)' : 'scale(1) rotateY(0deg)',
          transformStyle: 'preserve-3d',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="/images/wing-logo-transparent.png"
          alt="Wing 로고 - 1978년부터 45년 전통의 스포츠 아이웨어"
          className="h-64 w-auto object-contain drop-shadow-2xl"
          style={{
            filter: isHovered ? 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.6))' : 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
          }}
        />

        {/* 브랜드 태그라인 */}
        <div className="mt-6 text-center">
          <p className="text-white text-sm font-medium opacity-90">
            1978년부터 45년 전통
          </p>
          <p className="text-[--color-bright-teal] text-xs mt-1">
            스포츠 아이웨어 전문 브랜드
          </p>
        </div>
      </div>

      {/* 부드러운 펄스 애니메이션 (배경) */}
      <div
        className="absolute inset-0 rounded-2xl opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          animation: 'pulse 3s ease-in-out infinite',
        }}
      ></div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
