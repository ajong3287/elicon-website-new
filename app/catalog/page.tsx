import Link from "next/link";

const catalogs = [
  {
    title: "낚시점 B2B 입점 제안서",
    description:
      "Wing 편광 선글라스 + Seanex 에기 도매 파트너십. 6페이지 상세 제안.",
    href: "/catalog/proposal",
    badge: "제안서",
    icon: "📋",
    pages: "6 pages",
  },
  {
    title: "낚시점 전용 전단지",
    description: "핵심 제품 + 입점 혜택 요약. 매장 방문·우편 배포용.",
    href: "/catalog/flyer",
    badge: "전단지",
    icon: "📄",
    pages: "양면 1장",
  },
];

export default function CatalogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <section className="text-center mb-16">
        <p className="text-sm font-medium text-[#00BFA5] tracking-widest uppercase mb-3">
          B2B Catalog
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1A2C4B] mb-4 font-[family-name:var(--font-pretendard)]">
          엘리콘 B2B 카탈로그
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          45년 전통 국내 제조. Wing 편광 선글라스, Seanex 국산 1위 에기.
          <br />
          제조사 직영 도매로 최적의 마진을 제공합니다.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {catalogs.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group block border border-gray-200 rounded-2xl p-8 hover:border-[#00BFA5] hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">{item.icon}</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-[#1A2C4B] text-white rounded-full">
                {item.badge}
              </span>
            </div>
            <h2 className="text-xl font-bold text-[#1A2C4B] mb-2 group-hover:text-[#00BFA5] transition-colors">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{item.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{item.pages}</span>
              <span className="text-sm text-[#00BFA5] font-medium group-hover:translate-x-1 transition-transform">
                보기 →
              </span>
            </div>
          </Link>
        ))}
      </section>

      <section className="bg-gradient-to-br from-[#1A2C4B] to-[#2A3C5B] rounded-2xl p-8 sm:p-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-[#00BFA5]">45년</p>
            <p className="text-sm text-gray-300 mt-1">제조 역사</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#00BFA5]">42곳</p>
            <p className="text-sm text-gray-300 mt-1">기존 거래처</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#00BFA5]">55,578</p>
            <p className="text-sm text-gray-300 mt-1">Seanex 에기 리뷰</p>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-[#1A2C4B] mb-6">
          브랜드 포트폴리오
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-xl p-6">
            <p className="text-2xl font-bold text-[#e63946] mb-1">Wing</p>
            <p className="text-sm text-gray-500 mb-3">스포츠 아이웨어</p>
            <p className="text-xs text-gray-400">
              편광 선글라스 · 수경 · 고글
            </p>
            <p className="text-xs text-gray-400 mt-1">
              44,000 ~ 99,000원
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <p className="text-2xl font-bold text-[#457b9d] mb-1">Cocolic</p>
            <p className="text-sm text-gray-500 mb-3">키즈 아이웨어</p>
            <p className="text-xs text-gray-400">
              키즈 선글라스 · 물안경 · 헬멧
            </p>
            <p className="text-xs text-gray-400 mt-1">KC 안전인증</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <p className="text-2xl font-bold text-[#06b6d4] mb-1">Seanex</p>
            <p className="text-sm text-gray-500 mb-3">낚시용품 (에기)</p>
            <p className="text-xs text-gray-400">
              쪼꼬미 에기 · 리뷰 55,578개
            </p>
            <p className="text-xs text-gray-400 mt-1">평점 4.90/5.0</p>
          </div>
        </div>
      </section>
    </div>
  );
}
