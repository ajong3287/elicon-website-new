import Link from 'next/link';
import Image from 'next/image';
import { AnchorTooltip } from '@/app/_components/ui/AnchorPositioned';

interface Badge {
  text: string;
  color: 'blue' | 'green' | 'teal' | 'orange';
}

interface BrandCardProps {
  logo: string;
  brandName: string;
  description: string;
  subtitle?: string;
  badges?: Badge[];
  highlights?: string[];
  link: string;
}

const badgeColors = {
  blue: 'bg-blue-100 text-blue-700 border-blue-200',
  green: 'bg-green-100 text-green-700 border-green-200',
  teal: 'bg-teal-100 text-teal-700 border-teal-200',
  orange: 'bg-orange-100 text-orange-700 border-orange-200',
};

// 4축 디자인: 브랜드별 색상
const brandColors: Record<string, string> = {
  'Wing': 'text-[--color-wing-red]',
  'Cocolic': 'text-[--color-cocolic-blue]',
  'Seanex': 'text-[--color-seanex-cyan]',
};

export default function BrandCard({
  logo,
  brandName,
  description,
  subtitle,
  badges,
  highlights,
  link,
}: BrandCardProps) {
  return (
    <Link href={link}>
      <div className="@container group glass-card glass-hover rounded-lg p-6 shadow-md hover:shadow-2xl hover:scale-[1.05] hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-[--color-bright-teal]/50 h-full flex flex-col relative overflow-hidden">
        {/* 노이즈 텍스처 레이어 (2025 트렌드) */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: 'url(/noise.svg)',
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat'
          }}
        ></div>

        {/* 호버 시 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[--color-bright-teal]/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {/* 로고 - View Transition */}
        <div className="relative z-10 flex justify-center mb-4">
          <div
            className="group-hover:scale-110 transition-transform duration-500"
            style={{ viewTransitionName: `brand-logo-${brandName.toLowerCase()}` } as React.CSSProperties}
          >
            <Image
              src={logo}
              alt={`${brandName} 로고`}
              width={150}
              height={80}
              className="object-contain h-20"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
            />
          </div>
        </div>

        {/* 브랜드명 + Anchor Tooltip (Trend #37) */}
        <div className="relative z-10 flex items-center justify-center gap-2 mb-2">
          <h3 className={`text-2xl font-brand ${brandColors[brandName] || 'text-[--color-charcoal]'} group-hover:scale-110 transition-all duration-300`}>
            {brandName}
          </h3>
          <AnchorTooltip
            id={`brand-info-${brandName.toLowerCase()}`}
            trigger={
              <svg
                className="w-5 h-5 text-gray-400 hover:text-[--color-bright-teal] transition-colors cursor-help"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            content={`${brandName} 브랜드 상세 정보 보기`}
            position="top"
          />
        </div>

        {/* 서브타이틀 */}
        {subtitle && (
          <p className="relative z-10 text-sm text-gray-500 text-center mb-3">{subtitle}</p>
        )}

        {/* 배지 - Container Query 적용 */}
        {badges && badges.length > 0 && (
          <div className="relative z-10 flex flex-wrap justify-center gap-2 mb-4 @sm:gap-3">
            {badges.map((badge, index) => (
              <span
                key={index}
                className={`text-xs font-semibold px-2 py-1 rounded-full border ${badgeColors[badge.color]} group-hover:scale-110 transition-transform duration-300`}
              >
                {badge.text}
              </span>
            ))}
          </div>
        )}

        {/* 메인 설명 */}
        <p className="relative z-10 text-gray-700 text-center font-medium leading-relaxed mb-4">
          {description}
        </p>

        {/* 하이라이트 */}
        {highlights && highlights.length > 0 && (
          <div className="relative z-10 mt-auto pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors">
            <ul className="space-y-2 text-sm text-gray-600">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                  <span className="text-[--color-bright-teal] mr-2 mt-0.5 group-hover/item:scale-125 transition-transform">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Link>
  );
}
