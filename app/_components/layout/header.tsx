'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/app/_components/ui/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg'
          : 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700'
      }`}
      style={
        isScrolled
          ? {
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }
          : {}
      }
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            엘리콘
          </Link>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              className="text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:ring-offset-2 rounded-md p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 토글"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav aria-label="메인 네비게이션">
              <ul className="flex gap-6">
                <li>
                  <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:ring-offset-2 rounded-md px-2 py-1">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/brands" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:ring-offset-2 rounded-md px-2 py-1">
                    Brands
                  </Link>
                </li>
                <li>
                  <Link href="/partnership" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:ring-offset-2 rounded-md px-2 py-1">
                    Partnership
                  </Link>
                </li>
                <li>
                  <a
                    href="https://eliconstore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:ring-offset-2 rounded-md px-2 py-1"
                    aria-label="B2C Shop (새 창에서 열림)"
                  >
                    B2C Shop
                  </a>
                </li>
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>

        {isMenuOpen && (
          <nav id="mobile-menu" aria-label="모바일 네비게이션" className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/about"
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:ring-offset-2 rounded-md px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:ring-offset-2 rounded-md px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership"
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:ring-offset-2 rounded-md px-2 py-1"
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
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:ring-offset-2 rounded-md px-2 py-1"
                  aria-label="B2C Shop (새 창에서 열림)"
                >
                  B2C Shop
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
