import Skeleton, { SkeletonBrandCard } from '@/app/_components/ui/Skeleton';

export default function BrandsLoading() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header Skeleton */}
        <div className="text-center mb-16 space-y-4">
          <Skeleton variant="text" height={48} width="60%" className="mx-auto" />
          <Skeleton variant="text" height={24} width="50%" className="mx-auto" />
        </div>

        {/* Brand Cards Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonBrandCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
