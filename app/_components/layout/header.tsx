import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          엘리콘
        </Link>

        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/brands" className="hover:text-blue-600">
                Brands
              </Link>
            </li>
            <li>
              <Link href="/partnership" className="hover:text-blue-600">
                Partnership
              </Link>
            </li>
            <li>
              <a
                href="https://eliconstore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                쇼핑몰
              </a>
            </li>
            <li>
              <a
                href="https://blog.elicon.co.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                블로그
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
