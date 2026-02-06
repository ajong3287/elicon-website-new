'use server';

import { revalidatePath } from 'next/cache';

// 타입 정의
export interface ContactFormState {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    contactNumber?: string[];
    email?: string[];
    companyName?: string[];
    inquiryType?: string[];
    message?: string[];
  };
}

// Validation 함수
function validateContactForm(formData: FormData): ContactFormState {
  const errors: ContactFormState['errors'] = {};

  // 필수 필드 검증
  const name = formData.get('name') as string;
  const contactNumber = formData.get('contactNumber') as string;

  if (!name || name.trim().length < 2) {
    errors.name = ['성함은 최소 2자 이상이어야 합니다.'];
  }

  if (!contactNumber || !/^[0-9-+() ]{10,}$/.test(contactNumber)) {
    errors.contactNumber = ['올바른 연락처를 입력해주세요.'];
  }

  // 선택 필드 검증 (입력된 경우)
  const email = formData.get('email') as string;
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ['올바른 이메일 형식이 아닙니다.'];
  }

  return Object.keys(errors).length > 0
    ? { success: false, errors }
    : { success: true };
}

/**
 * B2B 파트너십 문의 Server Action
 * React 19 + Next.js 15 패턴
 */
export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  // 1. 검증
  const validation = validateContactForm(formData);
  if (!validation.success) {
    return validation;
  }

  // 2. 데이터 추출
  const contactData = {
    name: formData.get('name') as string,
    contactNumber: formData.get('contactNumber') as string,
    companyName: (formData.get('companyName') as string) || undefined,
    email: (formData.get('email') as string) || undefined,
    inquiryType: (formData.get('inquiryType') as string) || undefined,
    message: (formData.get('message') as string) || undefined,
    submittedAt: new Date().toISOString(),
  };

  try {
    // 3. 데이터 저장 (실제 구현 필요)
    // TODO: 데이터베이스 저장, 이메일 전송 등
    console.log('📩 B2B 문의 접수:', contactData);

    // 시뮬레이션 (실제로는 DB 저장)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 4. 캐시 재검증
    revalidatePath('/partnership');

    // 5. 성공 응답
    return {
      success: true,
      message: `${contactData.name}님, 문의가 성공적으로 접수되었습니다! 전문 매니저가 ${contactData.contactNumber}로 곧 연락드리겠습니다.`,
    };
  } catch (error) {
    console.error('❌ 문의 접수 실패:', error);
    return {
      success: false,
      message: '문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
    };
  }
}
