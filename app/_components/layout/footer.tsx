export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">회사 정보</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              (주)엘리콘<br />
              대표이사: 서종원<br />
              사업자등록번호: 270-81-00234<br />
              본사: 경기도 화성시 동탄지성로 333 101-402<br />
              서울사무실: 서울시 강남구 언주로97길 7 5층
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">고객 지원</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              이메일: mark@elicon.co.kr<br />
              전화: 010-5407-3287<br />
              <br />
              <span className="text-xs text-gray-500">평일 09:00 - 18:00 (주말/공휴일 휴무)</span>
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">브랜드 & 소셜</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/elicon_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <span>📷</span> 엘리콘 공식 인스타그램
                </a>
              </li>
              <li>
                <a
                  href="https://blog.naver.com/elicon1201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <span>📝</span> 엘리콘 공식 블로그
                </a>
              </li>
              <li className="text-gray-500 text-xs mt-3">
                운영 브랜드: Wing, Cocolic, Seanex
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>© 2015-2025 Elicon. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-2">B2B 유통 전문 기업 · 39개 파트너사 협력</p>
        </div>
      </div>
    </footer>
  );
}
