import Skeleton, { SkeletonBrandCard } from '@/app/_components/ui/Skeleton';

export default function HomeLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl text-center z-10 space-y-8">
          <Skeleton variant="text" height={48} width="80%" className="mx-auto" />
          <Skeleton variant="text" height={32} width="60%" className="mx-auto" />
          <div className="flex gap-4 justify-center mt-8">
            <Skeleton variant="rectangular" height={56} width={200} />
            <Skeleton variant="rectangular" height={56} width={200} />
          </div>
        </div>
      </section>

      {/* Stats Section Skeleton */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12 space-y-4">
            <Skeleton variant="text" height={40} width="50%" className="mx-auto" />
            <Skeleton variant="text" height={24} width="40%" className="mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 space-y-4"
              >
                <Skeleton variant="rectangular" height={56} width={56} />
                <Skeleton variant="text" height={48} width="60%" />
                <Skeleton variant="text" height={24} width="80%" />
                <Skeleton variant="text" height={16} width="90%" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Elicon Section Skeleton */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16 space-y-4">
            <Skeleton variant="text" height={40} width="50%" className="mx-auto" />
            <Skeleton variant="text" height={24} width="40%" className="mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 space-y-6"
              >
                <Skeleton variant="rectangular" height={64} width={64} />
                <Skeleton variant="text" height={32} width="80%" />
                <Skeleton variant="text" height={20} width="100%" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Portfolio Section Skeleton */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <Skeleton variant="text" height={40} width="70%" className="mx-auto" />
          </div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:grid-rows-2">
            <div className="md:row-span-2">
              <SkeletonBrandCard />
            </div>
            <SkeletonBrandCard />
            <SkeletonBrandCard />
          </div>
        </div>
      </section>
    </div>
  );
}
