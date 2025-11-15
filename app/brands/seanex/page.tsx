import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seanex 브랜드 | 엘리콘',
  description: 'A급 제조사 파트너십으로 탄생한 전문 해양 레저 장비 브랜드 Seanex. 전문가들이 신뢰하는 고품질.',
};

export default function SeanexBrandPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-full md:w-1/3 bg-gray-50 p-8 rounded-lg flex justify-center">
            <Image
              src="/images/brands/seanex-logo.png"
              alt="Seanex 로고"
              width={250}
              height={130}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Seanex</h1>
            <p className="text-xl text-blue-600 font-semibold mb-4">
              전문 해양 레저 장비
            </p>
            <p className="text-gray-700 leading-relaxed">
              Seanex는 A급 제조사 파트너십을 기반으로 탄생한 전문 해양 레저 장비
              브랜드입니다. 바다를 사랑하는 전문가들이 신뢰하는 고품질 장비로
              안전하고 즐거운 해양 활동을 지원합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">브랜드 철학</h2>
        <div className="bg-blue-50 p-8 rounded-lg">
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            "바다와 함께하는 모든 순간을 안전하게"
          </p>
          <p className="text-gray-700 leading-relaxed">
            Seanex는 해양 활동의 즐거움과 안전을 동시에 추구합니다. A급 제조사와의
            긴밀한 파트너십을 통해 검증된 품질의 장비를 제공하며, 전문가와 애호가
            모두가 신뢰할 수 있는 제품을 만들어갑니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">핵심 가치</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border-2 border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">전문성</h3>
            <p className="text-gray-600">
              해양 레저 전문가들의 실제 경험을 반영한 제품 개발
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">안전성</h3>
            <p className="text-gray-600">
              A급 제조사의 엄격한 품질 관리와 안전 테스트
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">내구성</h3>
            <p className="text-gray-600">
              해양 환경에 최적화된 소재와 설계로 오랜 사용 보장
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">대표 제품 라인업</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              전문 낚시 장비
            </h3>
            <p className="text-gray-600 mb-2">
              바다낚시 전문가들이 인정하는 고성능 낚시 장비 시리즈
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>- 강력한 내구성의 낚싯대와 릴</li>
              <li>- 해양 환경에 강한 부식 방지 처리</li>
              <li>- 다양한 어종과 낚시 기법에 대응</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              해양 안전 장비
            </h3>
            <p className="text-gray-600 mb-2">
              해양 활동 시 필수적인 안전 장비 및 보호 용품
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>- 국제 안전 기준 인증 구명조끼</li>
              <li>- 방수 및 부력 기능 최적화</li>
              <li>- 시인성 높은 컬러와 반사 소재 적용</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              보트 액세서리
            </h3>
            <p className="text-gray-600 mb-2">
              보트 및 요트 운용에 필요한 전문 장비와 액세서리
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>- 항해 및 정박 보조 장비</li>
              <li>- 내구성 강화 로프 및 계류 장치</li>
              <li>- 해양 환경 대응 방수 수납함</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              워터 스포츠 용품
            </h3>
            <p className="text-gray-600 mb-2">
              다이빙, 서핑 등 워터 스포츠를 위한 전문 장비
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>- 고품질 잠수복과 스노클링 장비</li>
              <li>- 서핑보드 및 관련 액세서리</li>
              <li>- 방수 기능 강화 스포츠 가방</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">제조사 정보</h2>
        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            A급 제조사 파트너십
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Seanex는 해양 장비 분야에서 오랜 경험과 기술력을 보유한 A급 제조사들과
            긴밀한 파트너십을 유지하고 있습니다. 엄격한 품질 관리 시스템과 국제
            안전 기준 준수를 통해 전문가들이 신뢰하는 고품질 제품을 생산합니다.
            지속적인 기술 혁신과 사용자 피드백 반영으로 더 나은 제품을 만들어갑니다.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">전문 분야</p>
              <p className="font-semibold">해양 레저 장비 제조</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">파트너십</p>
              <p className="font-semibold">A급 제조사</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">품질 기준</p>
              <p className="font-semibold">국제 안전 인증</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">특징</p>
              <p className="font-semibold">전문가 신뢰 브랜드</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Seanex 제품 구매하기</h2>
        <p className="mb-6">
          엘리콘 쇼핑몰에서 Seanex 브랜드의 다양한 제품을 만나보세요.
        </p>
        <a
          href="https://eliconstore.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          쇼핑몰 바로가기
        </a>
      </section>

      <div className="mt-8 text-center">
        <Link
          href="/brands"
          className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
        >
          ← 브랜드 목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
