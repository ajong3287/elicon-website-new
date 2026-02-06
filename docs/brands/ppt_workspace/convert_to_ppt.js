const html2pptx = require('html2pptx');
const PptxGenJS = require('pptxgenjs');

async function createPresentation() {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = '엘리콘 (ELICON)';
  pptx.company = '주식회사 한국오지케이';
  pptx.title = '엘리콘 브랜드 포트폴리오';

  console.log('🔄 Converting HTML slides to PowerPoint...');

  // Slide 1: Cover (with gradient background)
  const slide1 = pptx.addSlide();
  slide1.background = { path: 'gradient_dark.png' };
  await html2pptx({ slide: slide1, htmlFile: 'slide01.html' });

  // Slide 2: Company introduction
  const slide2 = pptx.addSlide();
  await html2pptx({ slide: slide2, htmlFile: 'slide02.html' });

  // Slide 3: Brand comparison with table
  const slide3 = pptx.addSlide();
  await html2pptx({ slide: slide3, htmlFile: 'slide03.html' });

  // Add comparison table to slide 3
  const comparisonRows = [
    [
      { text: '브랜드', opts: { bold: true, fill: 'F2F2F2' } },
      { text: 'Wing (윙)', opts: { bold: true, fill: 'E3EFFF' } },
      { text: 'Cocolic (코코릭)', opts: { bold: true, fill: 'FFE6F2' } },
      { text: 'Seanex (씨넥스)', opts: { bold: true, fill: 'E8F5E1' } }
    ],
    ['카테고리', '스포츠 선글라스', '어린이 안경', '낚시용품 (에기)'],
    ['타겟', '20~40대 남성', '3~10세 부모', '30~60대 남성'],
    ['가격대', '29,900원', '19,900~39,900원', '4,000원/개'],
    ['핵심 가치', '가성비 (오클리 1/8)', '안전성 (UV400)', '실적 (리뷰 55,578개)'],
    ['경쟁 우위', '압도적 가격', '부모 안심', '검증된 품질']
  ];

  slide3.addTable(comparisonRows, {
    x: 0.5,
    y: 1.2,
    w: 9.0,
    h: 3.5,
    fontSize: 11,
    border: { pt: 1, color: 'CCCCCC' },
    align: 'center',
    valign: 'middle'
  });

  // Slide 4: Wing brand
  const slide4 = pptx.addSlide();
  await html2pptx({ slide: slide4, htmlFile: 'slide04.html' });

  // Slide 5: Wing products with table
  const slide5 = pptx.addSlide();
  await html2pptx({ slide: slide5, htmlFile: 'slide05.html' });

  const wingProductRows = [
    [
      { text: '제품명', opts: { bold: true, fill: 'E3EFFF' } },
      { text: '가격', opts: { bold: true, fill: 'E3EFFF' } },
      { text: '특징', opts: { bold: true, fill: 'E3EFFF' } }
    ],
    ['편광 선글라스', '29,900원', '자외선 차단 + 반사광 제거'],
    ['스포츠 선글라스', '29,900원', '활동성 + 내구성'],
    ['라이딩 선글라스', '29,900원', '공기역학 + 밀착감'],
    ['골프 선글라스', '29,900원', '시야 확보 + 편안함']
  ];

  slide5.addTable(wingProductRows, {
    x: 0.5,
    y: 1.5,
    w: 9.0,
    h: 3.0,
    fontSize: 11,
    border: { pt: 1, color: 'CCCCCC' },
    align: 'center',
    valign: 'middle'
  });

  // Slide 6: Cocolic brand
  const slide6 = pptx.addSlide();
  await html2pptx({ slide: slide6, htmlFile: 'slide06.html' });

  // Slide 7: Cocolic products with table
  const slide7 = pptx.addSlide();
  await html2pptx({ slide: slide7, htmlFile: 'slide07.html' });

  const colicProductRows = [
    [
      { text: '제품명', opts: { bold: true, fill: 'FFE6F2' } },
      { text: '가격', opts: { bold: true, fill: 'FFE6F2' } },
      { text: '특징', opts: { bold: true, fill: 'FFE6F2' } }
    ],
    ['베이직 안경', '19,900원', '일상용, 가볍고 편안함'],
    ['액티브 안경', '29,900원', '스포츠용, 충격 흡수'],
    ['블루라이트 차단 안경', '39,900원', '디지털 기기용, 눈 보호']
  ];

  slide7.addTable(colicProductRows, {
    x: 0.5,
    y: 1.5,
    w: 9.0,
    h: 2.5,
    fontSize: 11,
    border: { pt: 1, color: 'CCCCCC' },
    align: 'center',
    valign: 'middle'
  });

  // Slide 8: Seanex brand
  const slide8 = pptx.addSlide();
  await html2pptx({ slide: slide8, htmlFile: 'slide08.html' });

  // Slide 9: Seanex products with table
  const slide9 = pptx.addSlide();
  await html2pptx({ slide: slide9, htmlFile: 'slide09.html' });

  const seanexProductRows = [
    [
      { text: '제품명', opts: { bold: true, fill: 'E8F5E1' } },
      { text: '가격', opts: { bold: true, fill: 'E8F5E1' } },
      { text: '리뷰', opts: { bold: true, fill: 'E8F5E1' } },
      { text: '평점', opts: { bold: true, fill: 'E8F5E1' } }
    ],
    ['에기 (쭈꾸미용)', '4,000원', '55,578개', '4.90/5.0'],
    ['에기 (갑오징어용)', '4,000원', '20,000개+', '4.85/5.0'],
    ['에기 세트 (10개)', '38,000원', '15,000개+', '4.92/5.0']
  ];

  slide9.addTable(seanexProductRows, {
    x: 0.5,
    y: 1.5,
    w: 9.0,
    h: 2.5,
    fontSize: 11,
    border: { pt: 1, color: 'CCCCCC' },
    align: 'center',
    valign: 'middle'
  });

  // Slide 10: Competitive advantage with table
  const slide10 = pptx.addSlide();
  await html2pptx({ slide: slide10, htmlFile: 'slide10.html' });

  const competitiveRows = [
    [
      { text: '비교 항목', opts: { bold: true, fill: 'F2F2F2' } },
      { text: 'Wing', opts: { bold: true, fill: 'E3EFFF' } },
      { text: 'Cocolic', opts: { bold: true, fill: 'FFE6F2' } },
      { text: 'Seanex', opts: { bold: true, fill: 'E8F5E1' } }
    ],
    ['가격 경쟁력', '오클리 대비 1/8', '일반 안경 대비 1/2', 'DUEL/Yo-Zuri 대비 1/2'],
    ['품질 검증', '45년 OGK 기술력', '안전 인증 완료', '리뷰 55,578개'],
    ['마진율', '30~40%', '35~45%', '25~35%'],
    ['재구매율', '높음', '매우 높음', '매우 높음 (소모품)'],
    ['시장 포지션', '가성비 1위', '어린이 안경 전문', '낚시 에기 1위']
  ];

  slide10.addTable(competitiveRows, {
    x: 0.5,
    y: 1.2,
    w: 9.0,
    h: 3.5,
    fontSize: 10,
    border: { pt: 1, color: 'CCCCCC' },
    align: 'center',
    valign: 'middle'
  });

  // Slide 11: Sales conditions
  const slide11 = pptx.addSlide();
  await html2pptx({ slide: slide11, htmlFile: 'slide11.html' });

  // Slide 12: Contact (with gradient background)
  const slide12 = pptx.addSlide();
  slide12.background = { path: 'gradient_dark.png' };
  await html2pptx({ slide: slide12, htmlFile: 'slide12.html' });

  // Save presentation
  const outputPath = '../엘리콘_브랜드_영업자료.pptx';
  await pptx.writeFile({ fileName: outputPath });

  console.log('✅ PowerPoint presentation created successfully!');
  console.log('📁 File saved to:', outputPath);
}

createPresentation().catch(console.error);
