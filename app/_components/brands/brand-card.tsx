import Link from 'next/link';
import Image from 'next/image';

interface BrandCardProps {
  logo: string;
  brandName: string;
  description: string;
  link: string;
}

export default function BrandCard({
  logo,
  brandName,
  description,
  link,
}: BrandCardProps) {
  return (
    <Link href={link}>
      <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
        <div className="flex justify-center mb-6">
          <Image
            src={logo}
            alt={`${brandName} 로고`}
            width={150}
            height={80}
            className="object-contain h-20"
          />
        </div>
        <h3 className="text-2xl font-bold text-[--color-charcoal] text-center mb-4">
          {brandName}
        </h3>
        <p className="text-gray-600 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
