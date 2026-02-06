import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export default function Skeleton({
  className,
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse',
}: SkeletonProps) {
  const baseStyles = 'bg-gray-200 dark:bg-gray-700';

  const variantStyles = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const animationStyles = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%]',
    none: '',
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        animationStyles[animation],
        className
      )}
      style={style}
      role="status"
      aria-label="로딩 중..."
    />
  );
}

// Preset Skeleton Components for common use cases
export function SkeletonText({ lines = 1, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          height={16}
          width={i === lines - 1 ? '80%' : '100%'}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('p-6 border rounded-lg space-y-4', className)}>
      <Skeleton variant="rectangular" height={200} />
      <SkeletonText lines={2} />
      <Skeleton variant="rectangular" height={40} />
    </div>
  );
}

export function SkeletonBrandCard({ className }: { className?: string }) {
  return (
    <div className={cn('bg-white rounded-2xl p-8 shadow-md border border-gray-100 space-y-6', className)}>
      {/* Logo Skeleton */}
      <div className="flex items-center gap-4">
        <Skeleton variant="circular" width={64} height={64} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" height={24} width="60%" />
          <Skeleton variant="text" height={16} width="40%" />
        </div>
      </div>

      {/* Badges Skeleton */}
      <div className="flex gap-2">
        <Skeleton variant="rectangular" height={24} width={100} />
        <Skeleton variant="rectangular" height={24} width={120} />
      </div>

      {/* Description Skeleton */}
      <SkeletonText lines={3} />

      {/* Highlights Skeleton */}
      <div className="space-y-2">
        <Skeleton variant="text" height={20} width="90%" />
        <Skeleton variant="text" height={20} width="85%" />
        <Skeleton variant="text" height={20} width="80%" />
      </div>

      {/* Button Skeleton */}
      <Skeleton variant="rectangular" height={48} />
    </div>
  );
}
