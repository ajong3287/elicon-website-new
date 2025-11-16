'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            엘리콘
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 토글"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:block">
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
                  B2C Shop
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

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/about"
                  className="block hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="block hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership"
                  className="block hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Partnership
                </Link>
              </li>
              <li>
                <a
                  href="https://eliconstore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-blue-600"
                >
                  B2C Shop
                </a>
              </li>
              <li>
                <a
                  href="https://blog.elicon.co.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-blue-600"
                >
                  블로그
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
