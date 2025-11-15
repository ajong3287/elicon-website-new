export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">회사 정보</h3>
            <p className="text-sm text-gray-600">
              엘리콘<br />
              대표자: 서성은<br />
              사업자등록번호: 123-45-67890<br />
              주소: 서울특별시 강남구
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">외부 링크</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="https://eliconstore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  엘리콘 쇼핑몰
                </a>
              </li>
              <li>
                <a
                  href="https://blog.elicon.co.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  블로그
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">고객 지원</h3>
            <p className="text-sm text-gray-600">
              이메일: contact@elicon.co.kr<br />
              전화: 02-1234-5678
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          Copyright 2025 Elicon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
