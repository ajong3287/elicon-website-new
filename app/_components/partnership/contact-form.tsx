'use client';

import { useState } from 'react';

interface ContactFormData {
  name: string;
  contactNumber: string;
  companyName?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    contactNumber: '',
    companyName: '',
    email: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('제출에 실패했습니다.');
      }

      setNotification({
        type: 'success',
        message:
          '문의가 성공적으로 접수되었습니다. 전문 매니저가 곧 연락드리겠습니다.',
      });
      setFormData({
        name: '',
        contactNumber: '',
        companyName: '',
        email: '',
        inquiryType: '',
        message: '',
      });
    } catch (error) {
      setNotification({
        type: 'error',
        message: '문의 접수 중 오류가 발생했습니다. 다시 시도해 주세요.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg border-2 border-[--color-soft-gray]">
      <h2 className="text-3xl font-bold text-[--color-charcoal] mb-4 text-center">
        파트너십 문의
      </h2>
      <p className="text-center text-gray-600 mb-8">
        빠른 상담을 원하시면 성함과 연락처만 남겨주세요. 전문 매니저가 즉시
        연락드리겠습니다.
      </p>

      {notification && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            notification.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {notification.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-[--color-deep-navy] mb-2"
          >
            성함 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal]"
            placeholder="성함을 입력해주세요"
          />
        </div>

        <div>
          <label
            htmlFor="contactNumber"
            className="block text-sm font-semibold text-[--color-deep-navy] mb-2"
          >
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            required
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal]"
            placeholder="연락 가능한 전화번호를 입력해주세요"
          />
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            회사명 (선택사항)
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal]"
            placeholder="회사명을 입력해주세요"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            이메일 (선택사항)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal]"
            placeholder="이메일을 입력해주세요"
          />
        </div>

        <div>
          <label
            htmlFor="inquiryType"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            문의 유형 (선택사항)
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal]"
          >
            <option value="">문의 유형을 선택해주세요</option>
            <option value="distribution">유통 파트너십</option>
            <option value="wholesale">도매 문의</option>
            <option value="collaboration">협업 제안</option>
            <option value="other">기타 문의</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            문의 내용 (선택사항)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal]"
            placeholder="추가로 전달하실 내용이 있다면 입력해주세요"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[--color-bright-teal] text-white py-4 rounded-lg font-semibold hover:bg-[#00A893] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? '제출 중...' : '문의하기'}
        </button>
      </form>
    </div>
  );
}
