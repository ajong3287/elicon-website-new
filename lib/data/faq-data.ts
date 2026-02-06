/**
 * FAQ 데이터
 *
 * 엘리콘 홈페이지 FAQ 섹션용 데이터
 * 검색 최적화 키워드 포함
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'b2b' | 'product' | 'shipping';
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'B2B 파트너십은 어떻게 시작하나요?',
    answer: '파트너십 페이지에서 간단한 문의 폼을 작성해주시면, 담당자가 1영업일 내 연락드립니다. 업체명, 연락처, 간단한 문의 내용만 입력하시면 됩니다. 검증된 브랜드(Wing, Cocolic, Seanex)와 안정적인 공급망으로 장기 협력 파트너십을 지원합니다.',
    category: 'b2b',
  },
  {
    id: 'faq-2',
    question: '엘리콘의 주요 브랜드는 무엇인가요?',
    answer: '엘리콘은 Wing(윙피싱), Cocolic(코코릭), Seanex(씨넥스) 3개 브랜드를 운영합니다. Wing은 한국오지케이(40년 업력) 제조, Cocolic은 써모랩(국산 히트상품 제조사) 제조로, 모두 A급 제조사 배경을 가지고 있습니다. 각 브랜드 상세 페이지에서 대표 제품과 제조사 정보를 확인하실 수 있습니다.',
    category: 'product',
  },
  {
    id: 'faq-3',
    question: '최소 주문 수량(MOQ)이 있나요?',
    answer: 'B2B 파트너십의 경우 브랜드별, 제품별로 최소 주문 수량이 상이합니다. 파트너십 문의 시 희망 제품과 수량을 함께 기재해주시면, 맞춤형 견적을 제공해드립니다. 일반 소비자의 경우 eliconstore.com에서 개별 구매 가능합니다.',
    category: 'b2b',
  },
  {
    id: 'faq-4',
    question: '납품 및 배송은 어떻게 진행되나요?',
    answer: 'B2B 파트너십의 경우 계약 조건에 따라 택배, 화물, 직배송 등 다양한 방식으로 납품 가능합니다. 일반적으로 주문 확정 후 3~7 영업일 내 배송됩니다. 긴급 납품이 필요한 경우 별도 협의 가능합니다. 일반 소비자는 eliconstore.com에서 CJ대한통운 택배로 배송받으실 수 있습니다.',
    category: 'shipping',
  },
  {
    id: 'faq-5',
    question: '결제 방법은 무엇이 있나요?',
    answer: 'B2B 파트너십의 경우 세금계산서 발행, 현금 결제, 신용카드 결제 등 다양한 결제 방식을 지원합니다. 장기 거래 시 월 단위 정산도 가능합니다. 일반 소비자는 eliconstore.com에서 신용카드, 계좌이체, 간편결제(네이버페이, 카카오페이) 등을 이용하실 수 있습니다.',
    category: 'b2b',
  },
  {
    id: 'faq-6',
    question: '제품 샘플을 받아볼 수 있나요?',
    answer: 'B2B 파트너십 검토 시 제품 샘플 제공이 가능합니다. 파트너십 문의 시 "샘플 요청"을 함께 기재해주시면, 담당자가 샘플 제공 가능 여부 및 조건을 안내해드립니다. 단, 샘플은 협업 가능성이 높은 업체를 우선으로 제공됩니다.',
    category: 'product',
  },
  {
    id: 'faq-7',
    question: '기존 파트너사는 어떤 곳들이 있나요?',
    answer: '엘리콘은 39개 B2B 파트너사와 협력 중입니다. 주요 파트너로는 조이웍스, 다솔낚시마트 등이 있으며, 온라인 쇼핑몰, 오프라인 매장, 유통업체 등 다양한 분야의 파트너사와 함께하고 있습니다. 파트너십 페이지에서 성공 사례를 확인하실 수 있습니다.',
    category: 'general',
  },
];
