import Skeleton, { SkeletonText } from '@/app/_components/ui/Skeleton';

export default function WingLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero Section Skeleton */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-full md:w-1/3 bg-[--color-soft-gray] p-8 rounded-lg flex justify-center">
            <Skeleton variant="rectangular" width={250} height={130} />
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <Skeleton variant="text" height={40} width="40%" />
            <Skeleton variant="text" height={28} width="70%" />
            <SkeletonText lines={3} />
          </div>
        </div>
      </section>

      {/* 3D Interactive Model Section Skeleton */}
      <section className="mb-16">
        <Skeleton variant="text" height={36} width="50%" className="mx-auto mb-8" />
        <Skeleton variant="text" height={20} width="40%" className="mx-auto mb-6" />
        <Skeleton variant="rectangular" height={500} className="rounded-xl" />
      </section>

      {/* Brand Philosophy Section Skeleton */}
      <section className="mb-16">
        <Skeleton variant="text" height={36} width="30%" className="mb-8" />
        <div className="bg-[--color-soft-gray] p-8 rounded-lg space-y-4">
          <Skeleton variant="text" height={28} width="80%" />
          <SkeletonText lines={4} />
        </div>
      </section>

      {/* Core Strengths Section Skeleton */}
      <section className="mb-16">
        <Skeleton variant="text" height={36} width="30%" className="mb-8" />
        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-lg border-2 border-[--color-soft-gray] space-y-4"
            >
              <Skeleton variant="text" height={28} width="70%" />
              <SkeletonText lines={3} />
            </div>
          ))}
        </div>
      </section>

      {/* Product Lineup Section Skeleton */}
      <section className="mb-16">
        <Skeleton variant="text" height={36} width="30%" className="mb-8" />
        <div className="grid md:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <Skeleton variant="rectangular" height={200} />
              <Skeleton variant="text" height={24} width="60%" />
              <SkeletonText lines={2} />
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Feed Section Skeleton */}
      <section className="mb-16">
        <Skeleton variant="text" height={36} width="40%" className="mx-auto mb-4" />
        <Skeleton variant="text" height={20} width="50%" className="mx-auto mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} variant="rectangular" height={200} />
          ))}
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="bg-gradient-to-r from-[--color-deep-navy] to-[--color-bright-teal] p-12 rounded-xl">
        <div className="text-center space-y-6">
          <Skeleton variant="text" height={36} width="60%" className="mx-auto" />
          <Skeleton variant="text" height={20} width="50%" className="mx-auto" />
          <Skeleton variant="rectangular" height={56} width={200} className="mx-auto" />
        </div>
      </section>
    </div>
  );
}
