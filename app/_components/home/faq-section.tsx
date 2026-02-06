'use client';

import { useState } from 'react';
import ScrollReveal from '@/app/_components/animations/ScrollReveal';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { faqData, type FAQItem } from '@/lib/data/faq-data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // 검색 필터링
  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-4xl px-4">
        {/* 헤더 */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <HelpCircle className="w-8 h-8 text-[--color-bright-teal]" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-[--color-charcoal]">
                자주 묻는 질문
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              엘리콘에 대해 궁금하신 점을 빠르게 확인하세요
            </p>
          </div>
        </ScrollReveal>

        {/* 검색창 */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="질문 검색 (예: 파트너십, 배송, 결제)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[--color-bright-teal] focus:outline-none transition-colors text-lg"
            />
          </div>
        </ScrollReveal>

        {/* FAQ 목록 */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <ScrollReveal
                key={faq.id}
                direction="up"
                delay={0.3 + index * 0.1}
              >
                <FAQItem
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => toggleFAQ(index)}
                />
              </ScrollReveal>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                검색 결과가 없습니다. 다른 키워드로 검색해보세요.
              </p>
            </div>
          )}
        </div>

        {/* 추가 문의 CTA */}
        <ScrollReveal direction="up" delay={0.9}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              원하는 답변을 찾지 못하셨나요?
            </p>
            <a
              href="/partnership"
              className="inline-block bg-[--color-bright-teal] hover:bg-[#009688] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              파트너십 문의하기
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// FAQ 개별 아이템 컴포넌트
function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? 'border-[--color-bright-teal] shadow-lg'
          : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      {/* 질문 (클릭 가능) */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start gap-4 flex-1">
          <span
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
              isOpen
                ? 'bg-[--color-bright-teal] text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {index + 1}
          </span>
          <h3
            className={`text-lg md:text-xl font-bold transition-colors ${
              isOpen ? 'text-[--color-bright-teal]' : 'text-[--color-charcoal]'
            }`}
          >
            {faq.question}
          </h3>
        </div>
        <ChevronDown
          className={`flex-shrink-0 w-6 h-6 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[--color-bright-teal]' : ''
          }`}
        />
      </button>

      {/* 답변 (확장/축소) */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-6 pt-0 pl-[4.5rem] bg-gray-50">
          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
