import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const ContactLeadSchema = z.object({
  name: z.string().min(1, '성함을 입력해주세요'),
  contactNumber: z.string().min(1, '연락처를 입력해주세요'),
  companyName: z.string().optional(),
  email: z.string().email('올바른 이메일 형식이 아닙니다').optional().or(z.literal('')),
  inquiryType: z.string().optional(),
  message: z.string().optional(),
});

type ContactLead = z.infer<typeof ContactLeadSchema>;

async function sendSMS(data: ContactLead): Promise<void> {
  const adminPhone = process.env.ADMIN_PHONE_NUMBER;
  const smsApiKey = process.env.SMS_API_KEY;

  if (!adminPhone || !smsApiKey) {
    console.warn('SMS 환경변수 미설정: ADMIN_PHONE_NUMBER 또는 SMS_API_KEY');
    return;
  }

  console.log('SMS 전송 시뮬레이션:', {
    to: adminPhone,
    message: `[엘리콘 문의] ${data.name} / ${data.contactNumber}`,
  });
}

async function sendEmail(data: ContactLead): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL_ADDRESS;
  const emailApiKey = process.env.EMAIL_API_KEY;

  if (!adminEmail || !emailApiKey) {
    console.warn('Email 환경변수 미설정: ADMIN_EMAIL_ADDRESS 또는 EMAIL_API_KEY');
    return;
  }

  console.log('Email 전송 시뮬레이션:', {
    to: adminEmail,
    subject: `[엘리콘 B2B 문의] ${data.name}`,
    body: JSON.stringify(data, null, 2),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validationResult = ContactLeadSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: '입력 데이터가 유효하지 않습니다',
          details: validationResult.error.issues,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    await Promise.all([sendSMS(data), sendEmail(data)]);

    return NextResponse.json(
      {
        success: true,
        message: '문의가 성공적으로 접수되었습니다.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: '서버 오류가 발생했습니다.',
      },
      { status: 500 }
    );
  }
}
