'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';
import { submitContactForm, type ContactFormState } from '@/app/_actions/contact';

/**
 * Submit Button with Loading State
 * useFormStatus를 활용한 로딩 상태 자동 추적 (2025 트렌드)
 */
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="scroll-fade-in w-full bg-[--color-bright-teal] text-white py-4 rounded-lg font-semibold hover:bg-[#00A893] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[--color-bright-teal] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
    >
      {pending ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          제출 중...
        </span>
      ) : (
        '문의하기 →'
      )}
    </button>
  );
}

/**
 * Contact Form with Server Actions
 * Next.js 15 + React 19 패턴 (2025 트렌드)
 */
export default function ContactForm() {
  const initialState: ContactFormState = { success: undefined };

  // useActionState: 폼 상태 및 액션 관리 (React 19)
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  // Toast 알림 처리
  useEffect(() => {
    if (state.success === true && state.message) {
      toast.success(state.message, {
        duration: 5000,
        icon: '✅',
        style: {
          borderRadius: '12px',
          background: '#00BFA5',
          color: '#fff',
          padding: '16px',
        },
      });
    } else if (state.success === false && state.message) {
      toast.error(state.message, {
        duration: 4000,
        icon: '❌',
        style: {
          borderRadius: '12px',
          background: '#f44336',
          color: '#fff',
          padding: '16px',
        },
      });
    }
  }, [state]);

  return (
    <div className="scroll-scale-in bg-white p-8 rounded-lg border-2 border-[--color-soft-gray] shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-[--color-charcoal] mb-4 text-center">
        파트너십 문의
      </h2>
      <p className="text-center text-gray-600 mb-8">
        빠른 상담을 원하시면 성함과 연락처만 남겨주세요. 전문 매니저가 즉시
        연락드리겠습니다.
      </p>

      {/* Server Action Form */}
      <form action={formAction} className="space-y-6">
        {/* 성함 (필수) */}
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:border-transparent transition-all duration-200"
            placeholder="성함을 입력해주세요"
          />
          {state.errors?.name && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {state.errors.name[0]}
            </p>
          )}
        </div>

        {/* 연락처 (필수) */}
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:border-transparent transition-all duration-200"
            placeholder="연락 가능한 전화번호를 입력해주세요"
          />
          {state.errors?.contactNumber && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {state.errors.contactNumber[0]}
            </p>
          )}
        </div>

        {/* 회사명 (선택) */}
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:border-transparent transition-all duration-200"
            placeholder="회사명을 입력해주세요"
          />
        </div>

        {/* 이메일 (선택) */}
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:border-transparent transition-all duration-200"
            placeholder="이메일을 입력해주세요"
          />
          {state.errors?.email && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {state.errors.email[0]}
            </p>
          )}
        </div>

        {/* 문의 유형 (선택) */}
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:border-transparent transition-all duration-200"
          >
            <option value="">문의 유형을 선택해주세요</option>
            <option value="distribution">유통 파트너십</option>
            <option value="wholesale">도매 문의</option>
            <option value="collaboration">협업 제안</option>
            <option value="other">기타 문의</option>
          </select>
        </div>

        {/* 문의 내용 (선택) */}
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-bright-teal] focus:border-transparent transition-all duration-200 resize-none"
            placeholder="추가로 전달하실 내용이 있다면 입력해주세요"
          />
        </div>

        {/* Submit Button (useFormStatus) */}
        <SubmitButton />

        {/* 안내 메시지 */}
        <p className="text-xs text-gray-500 text-center mt-4">
          제출하신 정보는 파트너십 상담 목적으로만 사용되며, 안전하게 보호됩니다.
        </p>
      </form>
    </div>
  );
}
