import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B 카탈로그 | 엘리콘",
  description:
    "Wing 편광 선글라스, Seanex 에기 - B2B 도매 카탈로그. 제조사 직영, 45년 전통.",
};

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="/catalog" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-[#1A2C4B]">
              ELICON
            </span>
            <span className="text-xs text-gray-400 font-medium">
              B2B CATALOG
            </span>
          </a>
          <nav className="flex items-center gap-4 text-sm">
            <a
              href="/catalog"
              className="text-gray-500 hover:text-[#1A2C4B] transition-colors"
            >
              카탈로그
            </a>
            <a
              href="/catalog/proposal"
              className="text-gray-500 hover:text-[#1A2C4B] transition-colors"
            >
              제안서
            </a>
            <a
              href="/catalog/flyer"
              className="text-gray-500 hover:text-[#1A2C4B] transition-colors"
            >
              전단지
            </a>
            <a
              href="https://eliconstore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-1.5 bg-[#1A2C4B] text-white text-xs rounded-md hover:bg-[#2A3C5B] transition-colors"
            >
              도매몰
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-[#1A2C4B] text-white py-10 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-2">ELICON</h3>
              <p className="text-sm text-gray-300">
                (주)한국오지케이 · 엘리콘 사업부
              </p>
              <p className="text-sm text-gray-400 mt-1">
                강원특별자치도 원주시 문막읍 동화공단로 101-3
              </p>
              <p className="text-sm text-gray-400">
                사업자등록번호: 224-81-23769
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">B2B 문의</h3>
              <p className="text-sm text-gray-300">담당: 서종원 대표</p>
              <p className="text-sm text-gray-400 mt-1">
                도매몰: eliconstore.com
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">브랜드</h3>
              <div className="flex gap-4 text-sm text-gray-300">
                <span>Wing</span>
                <span>Cocolic</span>
                <span>Seanex</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} ELICON. 45년 전통 국내 제조.
          </div>
        </div>
      </footer>
    </div>
  );
}
