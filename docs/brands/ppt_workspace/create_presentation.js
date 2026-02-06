const PptxGenJS = require('pptxgenjs');

async function createPresentation() {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = '엘리콘 (ELICON)';
  pptx.company = '주식회사 한국오지케이';
  pptx.title = '엘리콘 브랜드 포트폴리오';

  console.log('🔄 Creating PowerPoint presentation...');

  // Slide 1: Cover
  const slide1 = pptx.addSlide();
  slide1.background = { path: 'gradient_dark.png' };
  slide1.addText('엘리콘 브랜드 포트폴리오', {
    x: 0.5, y: 1.5, w: 9.0, h: 1.0,
    fontSize: 36, bold: true, color: 'FFFFFF', align: 'center'
  });
  slide1.addText('Wing • Cocolic • Seanex', {
    x: 0.5, y: 2.8, w: 9.0, h: 0.6,
    fontSize: 24, color: 'ECF0F1', align: 'center', fontFace: 'Arial'
  });
  slide1.addText('주식회사 한국오지케이 (OGK)', {
    x: 0.5, y: 3.6, w: 9.0, h: 0.4,
    fontSize: 16, color: 'BDC3C7', align: 'center'
  });

  // Slide 2: Company Introduction
  const slide2 = pptx.addSlide();
  slide2.background = { fill: 'F8F9FA' };
  slide2.addText('회사 소개', {
    x: 0.5, y: 0.3, w: 9.0, h: 0.6,
    fontSize: 28, bold: true, color: '2C3E50', align: 'center'
  });

  slide2.addText('한국오지케이 (OGK)', {
    x: 0.5, y: 1.2, w: 4.2, h: 0.5,
    fontSize: 18, bold: true, color: '34495E'
  });
  slide2.addText([
    { text: '설립: ', options: { bold: true } },
    { text: '1979년 (45년 역사)' },
    { text: '\n위치: ', options: { bold: true } },
    { text: '강원특별자치도 원주시' },
    { text: '\n사업: ', options: { bold: true } },
    { text: '안경·선글라스·스포츠용품 제조/유통' }
  ], {
    x: 0.5, y: 1.8, w: 4.2, h: 2.0,
    fontSize: 13, color: '2C3E50', lineSpacing: 24
  });

  slide2.addText('핵심 역량', {
    x: 5.3, y: 1.2, w: 4.2, h: 0.5,
    fontSize: 18, bold: true, color: '34495E'
  });
  slide2.addText([
    { text: '• 45년 축적된 제조 기술력\n' },
    { text: '• 3개 브랜드 다각화 포트폴리오\n' },
    { text: '• B2B/B2C 통합 유통 채널\n' },
    { text: '• 압도적 가성비 경쟁력' }
  ], {
    x: 5.3, y: 1.8, w: 4.2, h: 2.0,
    fontSize: 13, color: '2C3E50', lineSpacing: 24
  });

  // Slide 3: Brand Comparison
  const slide3 = pptx.addSlide();
  slide3.background = { fill: 'F8F9FA' };
  slide3.addText('3개 브랜드 한눈에', {
    x: 0.5, y: 0.3, w: 9.0, h: 0.6,
    fontSize: 28, bold: true, color: '2C3E50', align: 'center'
  });

  const comparisonRows = [
    [
      { text: '브랜드', options: { bold: true, fill: { color: 'F2F2F2' } } },
      { text: 'Wing (윙)', options: { bold: true, fill: { color: 'E3EFFF' } } },
      { text: 'Cocolic (코코릭)', options: { bold: true, fill: { color: 'FFE6F2' } } },
      { text: 'Seanex (씨넥스)', options: { bold: true, fill: { color: 'E8F5E1' } } }
    ],
    ['카테고리', '스포츠 선글라스', '어린이 안경', '낚시용품 (에기)'],
    ['타겟', '20~40대 남성', '3~10세 부모', '30~60대 남성'],
    ['가격대', '29,900원', '19,900~39,900원', '4,000원/개'],
    ['핵심 가치', '가성비 (오클리 1/8)', '안전성 (UV400)', '실적 (리뷰 55,578개)'],
    ['경쟁 우위', '압도적 가격', '부모 안심', '검증된 품질']
  ];

  slide3.addTable(comparisonRows, {
    x: 0.5, y: 1.2, w: 9.0, h: 3.5,
    fontSize: 11, border: { pt: 1, color: 'CCCCCC' },
    align: 'center', valign: 'middle'
  });

  // Slide 4: Wing Brand
  const slide4 = pptx.addSlide();
  slide4.background = { fill: 'F8F9FA' };

  const wingHeader = slide4.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: '4472C4' }
  });
  slide4.addImage({ path: 'wing-logo.jpg', x: 5.5, y: 0.1, w: 1.2, h: 0.6 });
  slide4.addText('Wing (윙)', {
    x: 0.5, y: 0.15, w: 4.5, h: 0.5,
    fontSize: 28, bold: true, color: 'FFFFFF'
  });
  slide4.addText('스포츠 선글라스', {
    x: 0.5, y: 0.48, w: 4.5, h: 0.3,
    fontSize: 16, color: 'ECF0F1'
  });

  slide4.addText('핵심 가치', {
    x: 0.5, y: 1.2, w: 4.5, h: 0.5,
    fontSize: 18, bold: true, color: '4472C4'
  });
  slide4.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 1.8, w: 4.0, h: 2.0,
    fill: { color: 'E3EFFF' }
  });
  slide4.addText([
    { text: '압도적 가성비\n', options: { bold: true, fontSize: 14 } },
    { text: '오클리 240,000원\n', options: { fontSize: 13 } },
    { text: 'Wing 29,900원\n', options: { bold: true, color: '4472C4', fontSize: 13 } },
    { text: '→ 1/8 가격!\n\n', options: { bold: true, fontSize: 13 } },
    { text: '45년 기술력으로\n동일한 품질 보장', options: { fontSize: 12 } }
  ], {
    x: 0.7, y: 2.0, w: 3.6, h: 1.6,
    color: '2C3E50', lineSpacing: 18
  });

  slide4.addText('타겟 고객', {
    x: 5.0, y: 1.2, w: 4.5, h: 0.5,
    fontSize: 18, bold: true, color: '4472C4'
  });
  slide4.addText([
    { text: '• 연령: 20~40대 남성\n' },
    { text: '• 활동: 라이딩, 골프, 등산, 낚시\n' },
    { text: '• 니즈: 가성비 + 품질' }
  ], {
    x: 5.0, y: 1.8, w: 4.5, h: 1.0,
    fontSize: 13, color: '2C3E50', lineSpacing: 22
  });

  slide4.addText('판매 포인트', {
    x: 5.0, y: 2.9, w: 4.5, h: 0.5,
    fontSize: 18, bold: true, color: '4472C4'
  });
  slide4.addText([
    { text: 'B2B: ', options: { bold: true } },
    { text: '"오클리 1/8 가격에 동일 품질"\n' },
    { text: 'B2C: ', options: { bold: true } },
    { text: '"24만원짜리를 3만원에!"' }
  ], {
    x: 5.0, y: 3.5, w: 4.5, h: 0.8,
    fontSize: 12, color: '2C3E50', lineSpacing: 20
  });

  // Slide 5: Wing Products
  const slide5 = pptx.addSlide();
  slide5.background = { fill: 'F8F9FA' };

  const wingProdHeader = slide5.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.7,
    fill: { color: '4472C4' }
  });
  slide5.addText('Wing 제품 라인업 (베스트셀러)', {
    x: 0.5, y: 0.15, w: 9.0, h: 0.4,
    fontSize: 26, bold: true, color: 'FFFFFF'
  });

  // Product images - 3 products displayed
  const wingImages = [
    '/Users/elicon_mark/Library/CloudStorage/GoogleDrive-ajong3287@gmail.com/내 드라이브/20_경영관리/40_거래처별/오지케이(OGK)/상품이미지 창고/3. 로빈/대표이미지/로빈_네이비.jpg',
    '/Users/elicon_mark/Library/CloudStorage/GoogleDrive-ajong3287@gmail.com/내 드라이브/20_경영관리/40_거래처별/오지케이(OGK)/상품이미지 창고/3. 로빈/대표이미지/로빈_오렌지.jpg',
    '/Users/elicon_mark/Library/CloudStorage/GoogleDrive-ajong3287@gmail.com/내 드라이브/20_경영관리/40_거래처별/오지케이(OGK)/상품이미지 창고/2. 니모/대표이미지/니모_블랙.jpg'
  ];

  let imgX = 0.8;
  for (let i = 0; i < 3; i++) {
    try {
      slide5.addImage({ path: wingImages[i], x: imgX, y: 1.0, w: 2.5, h: 1.8 });
    } catch (e) {
      // If image fails, add placeholder box
      slide5.addShape(pptx.ShapeType.rect, {
        x: imgX, y: 1.0, w: 2.5, h: 1.8,
        fill: { color: 'E3EFFF' },
        line: { color: '4472C4', pt: 2, dashType: 'dash' }
      });
      slide5.addText('제품 이미지\n위치:', {
        x: imgX, y: 1.4, w: 2.5, h: 1.0,
        fontSize: 10, align: 'center', color: '4472C4'
      });
    }
    imgX += 3.0;
  }

  const wingProductRows = [
    [
      { text: '편광 선글라스', options: { bold: true } },
      { text: '스포츠 선글라스', options: { bold: true } },
      { text: '라이딩 선글라스', options: { bold: true } }
    ],
    ['29,900원', '29,900원', '29,900원'],
    ['자외선 차단\n반사광 제거', '활동성\n내구성', '공기역학\n밀착감']
  ];

  slide5.addTable(wingProductRows, {
    x: 0.8, y: 3.0, w: 8.4, h: 1.5,
    fontSize: 10, border: { pt: 1, color: 'CCCCCC' },
    align: 'center', valign: 'middle'
  });

  // Slide 6: Cocolic Brand
  const slide6 = pptx.addSlide();
  slide6.background = { fill: 'F8F9FA' };

  const colicHeader = slide6.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: 'E76F9D' }
  });
  slide6.addImage({ path: 'cocolic-logo.jpg', x: 5.5, y: 0.1, w: 1.2, h: 0.6 });
  slide6.addText('Cocolic (코코릭)', {
    x: 0.5, y: 0.15, w: 4.5, h: 0.5,
    fontSize: 28, bold: true, color: 'FFFFFF'
  });
  slide6.addText('어린이 안경', {
    x: 0.5, y: 0.48, w: 4.5, h: 0.3,
    fontSize: 16, color: 'FFFFFF'
  });

  slide6.addText('핵심 가치', {
    x: 0.5, y: 1.2, w: 4.5, h: 0.5,
    fontSize: 18, bold: true, color: 'E76F9D'
  });
  slide6.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 1.8, w: 4.0, h: 2.0,
    fill: { color: 'FFE6F2' }
  });
  slide6.addText([
    { text: '부모 안심\n', options: { bold: true, fontSize: 14 } },
    { text: '• UV400 자외선 완벽 차단\n', options: { fontSize: 12 } },
    { text: '• 유해물질 검사 완료\n', options: { fontSize: 12 } },
    { text: '• 안전 인증 획득\n\n', options: { fontSize: 12 } },
    { text: '가격: 19,900~39,900원\n', options: { fontSize: 12 } },
    { text: '→ 일반 안경 1/2 가격', options: { bold: true, fontSize: 12 } }
  ], {
    x: 0.7, y: 2.0, w: 3.6, h: 1.6,
    color: '2C3E50', lineSpacing: 16
  });

  slide6.addText('타겟 고객', {
    x: 5.0, y: 1.2, w: 4.5, h: 0.5,
    fontSize: 18, bold: true, color: 'E76F9D'
  });
  slide6.addText([
    { text: '• 연령: 3~10세 아이의 부모\n' },
    { text: '• 니즈: 안전성 + 가성비\n' },
    { text: '• 관심사: 자외선, 시력 보호' }
  ], {
    x: 5.0, y: 1.8, w: 4.5, h: 1.0,
    fontSize: 13, color: '2C3E50', lineSpacing: 22
  });

  slide6.addText('판매 포인트', {
    x: 5.0, y: 2.9, w: 4.5, h: 0.5,
    fontSize: 18, bold: true, color: 'E76F9D'
  });
  slide6.addText([
    { text: 'B2B: ', options: { bold: true } },
    { text: '"안전 인증 완료, 부모님이 믿고 삽니다"\n' },
    { text: 'B2C: ', options: { bold: true } },
    { text: '"우리 아이 눈 건강, 안전하게!"' }
  ], {
    x: 5.0, y: 3.5, w: 4.5, h: 0.8,
    fontSize: 12, color: '2C3E50', lineSpacing: 20
  });

  // Slide 7: Cocolic Products
  const slide7 = pptx.addSlide();
  slide7.background = { fill: 'F8F9FA' };

  const colicProdHeader = slide7.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.7,
    fill: { color: 'E76F9D' }
  });
  slide7.addText('Cocolic 제품 라인업', {
    x: 0.5, y: 0.15, w: 9.0, h: 0.4,
    fontSize: 26, bold: true, color: 'FFFFFF'
  });

  // Product images - 3 products displayed
  const colicImages = [
    '/Users/elicon_mark/Library/CloudStorage/GoogleDrive-ajong3287@gmail.com/다른 컴퓨터/헬리오스네오16/xampp/htdocs/mysite/cocolic_automation/cocolic_real_images_20250622_165337/COCOLIC_3102832_토니_화이트.jpg',
    '/Users/elicon_mark/Library/CloudStorage/GoogleDrive-ajong3287@gmail.com/다른 컴퓨터/헬리오스네오16/xampp/htdocs/mysite/cocolic_automation/cocolic_real_images_20250622_165337/COCOLIC_3102848_모리_블랙.jpg',
    '/Users/elicon_mark/Library/CloudStorage/GoogleDrive-ajong3287@gmail.com/다른 컴퓨터/헬리오스네오16/xampp/htdocs/mysite/cocolic_automation/cocolic_real_images_20250622_165337/COCOLIC_3940695_마리나_블랙.jpg'
  ];

  let colicImgX = 0.8;
  for (let i = 0; i < 3; i++) {
    try {
      slide7.addImage({ path: colicImages[i], x: colicImgX, y: 1.0, w: 2.5, h: 1.8 });
    } catch (e) {
      // If image fails, add placeholder box
      slide7.addShape(pptx.ShapeType.rect, {
        x: colicImgX, y: 1.0, w: 2.5, h: 1.8,
        fill: { color: 'FFE6F2' },
        line: { color: 'E76F9D', pt: 2, dashType: 'dash' }
      });
      slide7.addText('제품 이미지\n위치:', {
        x: colicImgX, y: 1.4, w: 2.5, h: 1.0,
        fontSize: 10, align: 'center', color: 'E76F9D'
      });
    }
    colicImgX += 3.0;
  }

  const colicProductRows = [
    [
      { text: '토니 (베이직)', options: { bold: true } },
      { text: '모리 (액티브)', options: { bold: true } },
      { text: '마리나 (프리미엄)', options: { bold: true } }
    ],
    ['19,900원', '29,900원', '39,900원'],
    ['일상용\n가볍고 편안함', '스포츠용\n충격 흡수', '블루라이트 차단\n눈 보호']
  ];

  slide7.addTable(colicProductRows, {
    x: 0.8, y: 3.0, w: 8.4, h: 1.5,
    fontSize: 10, border: { pt: 1, color: 'CCCCCC' },
    align: 'center', valign: 'middle'
  });

  // Slide 8: Seanex Brand
  const slide8 = pptx.addSlide();
  slide8.background = { fill: 'F8F9FA' };

  const seanexHeader = slide8.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: '70AD47' }
  });
  slide8.addImage({ path: 'seanex-logo.png', x: 5.5, y: 0.1, w: 1.2, h: 0.6 });
  slide8.addText('Seanex (씨넥스)', {
    x: 0.5, y: 0.15, w: 4.5, h: 0.5,
    fontSize: 28, bold: true, color: 'FFFFFF'
  });
  slide8.addText('낚시용품 (에기)', {
    x: 0.5, y: 0.48, w: 4.5, h: 0.3,
    fontSize: 16, color: 'FFFFFF'
  });

  slide8.addText('핵심 가치', {
    x: 0.5, y: 1.2, w: 4.5, h: 0.5,
    fontSize: 18, bold: true, color: '70AD47'
  });
  slide8.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 1.8, w: 4.0, h: 2.0,
    fill: { color: 'E8F5E1' }
  });
  slide8.addText([
    { text: '압도적 시장 검증\n', options: { bold: true, fontSize: 14 } },
    { text: '55,578개 리뷰\n', options: { bold: true, fontSize: 13 } },
    { text: '평점 4.90/5.0\n\n', options: { fontSize: 13 } },
    { text: '일본 브랜드: 7,000~11,000원\n', options: { fontSize: 12 } },
    { text: 'Seanex: 4,000원/개\n', options: { bold: true, color: '70AD47', fontSize: 12 } },
    { text: '→ 2배 저렴!', options: { bold: true, fontSize: 12 } }
  ], {
    x: 0.7, y: 2.0, w: 3.6, h: 1.6,
    color: '2C3E50', lineSpacing: 16
  });

  slide8.addText('타겟 고객', {
    x: 5.0, y: 1.2, w: 4.5, h: 0.5,
    fontSize: 18, bold: true, color: '70AD47'
  });
  slide8.addText([
    { text: '• 연령: 30~60대 남성\n' },
    { text: '• 활동: 쭈꾸미/갑오징어 낚시\n' },
    { text: '• 구매: 연 4~12회 (소모품)' }
  ], {
    x: 5.0, y: 1.8, w: 4.5, h: 1.0,
    fontSize: 13, color: '2C3E50', lineSpacing: 22
  });

  slide8.addText('판매 포인트', {
    x: 5.0, y: 2.9, w: 4.5, h: 0.5,
    fontSize: 18, bold: true, color: '70AD47'
  });
  slide8.addText([
    { text: 'B2B: ', options: { bold: true } },
    { text: '"55,578개 리뷰, 평점 4.90으로 재구매율이 매우 높습니다."\n' },
    { text: 'B2C: ', options: { bold: true } },
    { text: '"DUEL, Yo-Zuri 절반 가격에 똑같은 조과!"' }
  ], {
    x: 5.0, y: 3.5, w: 4.5, h: 0.8,
    fontSize: 11, color: '2C3E50', lineSpacing: 18
  });

  // Slide 9: Seanex Products
  const slide9 = pptx.addSlide();
  slide9.background = { fill: 'F8F9FA' };

  const seanexProdHeader = slide9.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.7,
    fill: { color: '70AD47' }
  });
  slide9.addText('Seanex 제품 라인업 (베스트셀러)', {
    x: 0.5, y: 0.15, w: 9.0, h: 0.4,
    fontSize: 26, bold: true, color: 'FFFFFF'
  });

  // Product images - 3 products displayed
  const seanexImages = [
    '/Users/elicon_mark/Library/CloudStorage/GoogleDrive-ajong3287@gmail.com/내 드라이브/20_경영관리/40_거래처별/써모랩/쪼꼬미기존/23_24 쪼꼬미/축광_크리스탈/001.jpg',
    '/Users/elicon_mark/Library/CloudStorage/GoogleDrive-ajong3287@gmail.com/내 드라이브/20_경영관리/40_거래처별/써모랩/쪼꼬미기존/23_24 쪼꼬미/축광_크리스탈/003.jpg',
    '/Users/elicon_mark/Library/CloudStorage/GoogleDrive-ajong3287@gmail.com/내 드라이브/20_경영관리/40_거래처별/써모랩/쪼꼬미기존/23_24 쪼꼬미/24 쪼꼬미 네츄럴 5종.jpg'
  ];

  let seanexImgX = 0.8;
  for (let i = 0; i < 3; i++) {
    try {
      slide9.addImage({ path: seanexImages[i], x: seanexImgX, y: 1.0, w: 2.5, h: 1.8 });
    } catch (e) {
      // If image fails, add placeholder box
      slide9.addShape(pptx.ShapeType.rect, {
        x: seanexImgX, y: 1.0, w: 2.5, h: 1.8,
        fill: { color: 'E8F5E1' },
        line: { color: '70AD47', pt: 2, dashType: 'dash' }
      });
      slide9.addText('제품 이미지\n위치:', {
        x: seanexImgX, y: 1.4, w: 2.5, h: 1.0,
        fontSize: 10, align: 'center', color: '70AD47'
      });
    }
    seanexImgX += 3.0;
  }

  const seanexProductRows = [
    [
      { text: '에기 (축광)', options: { bold: true } },
      { text: '에기 (크리스탈)', options: { bold: true } },
      { text: '에기 세트 (5종)', options: { bold: true } }
    ],
    ['4,000원', '4,000원', '18,000원'],
    ['리뷰: 55,578개\n평점: 4.90/5.0', '리뷰: 20,000개+\n평점: 4.85/5.0', '리뷰: 15,000개+\n평점: 4.92/5.0']
  ];

  slide9.addTable(seanexProductRows, {
    x: 0.8, y: 3.0, w: 8.4, h: 1.5,
    fontSize: 10, border: { pt: 1, color: 'CCCCCC' },
    align: 'center', valign: 'middle'
  });

  // Slide 10: Competitive Advantage
  const slide10 = pptx.addSlide();
  slide10.background = { fill: 'F8F9FA' };
  slide10.addText('경쟁 우위 분석', {
    x: 0.5, y: 0.3, w: 9.0, h: 0.6,
    fontSize: 28, bold: true, color: '2C3E50', align: 'center'
  });

  const competitiveRows = [
    [
      { text: '비교 항목', options: { bold: true, fill: { color: 'F2F2F2' } } },
      { text: 'Wing', options: { bold: true, fill: { color: 'E3EFFF' } } },
      { text: 'Cocolic', options: { bold: true, fill: { color: 'FFE6F2' } } },
      { text: 'Seanex', options: { bold: true, fill: { color: 'E8F5E1' } } }
    ],
    ['가격 경쟁력', '오클리 대비 1/8', '일반 안경 대비 1/2', 'DUEL/Yo-Zuri 대비 1/2'],
    ['품질 검증', '45년 OGK 기술력', '안전 인증 완료', '리뷰 55,578개'],
    ['마진율', '30~40%', '35~45%', '25~35%'],
    ['재구매율', '높음', '매우 높음', '매우 높음 (소모품)'],
    ['시장 포지션', '가성비 1위', '어린이 안경 전문', '낚시 에기 1위']
  ];

  slide10.addTable(competitiveRows, {
    x: 0.5, y: 1.2, w: 9.0, h: 3.5,
    fontSize: 10, border: { pt: 1, color: 'CCCCCC' },
    align: 'center', valign: 'middle'
  });

  // Slide 11: Sales Conditions
  const slide11 = pptx.addSlide();
  slide11.background = { fill: 'F8F9FA' };
  slide11.addText('판매 조건', {
    x: 0.5, y: 0.3, w: 9.0, h: 0.6,
    fontSize: 28, bold: true, color: '2C3E50', align: 'center'
  });

  slide11.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 4.2, h: 2.8,
    fill: { color: 'FFFFFF' },
    line: { color: 'E0E0E0', pt: 2 }
  });
  slide11.addText('결제 및 배송', {
    x: 0.7, y: 1.3, w: 3.8, h: 0.4,
    fontSize: 16, bold: true, color: '34495E'
  });
  slide11.addText([
    { text: '결제 조건:\n', options: { bold: true } },
    { text: '• 초도 거래: 선입금\n' },
    { text: '• 정기 거래: 월말 결제\n\n' },
    { text: '배송:\n', options: { bold: true } },
    { text: '• 무료배송: 5만원 이상\n' },
    { text: '• 배송 기간: 2~3일' }
  ], {
    x: 0.7, y: 1.8, w: 3.8, h: 1.9,
    fontSize: 12, color: '2C3E50', lineSpacing: 18
  });

  slide11.addShape(pptx.ShapeType.rect, {
    x: 5.3, y: 1.1, w: 4.2, h: 2.8,
    fill: { color: 'FFFFFF' },
    line: { color: 'E0E0E0', pt: 2 }
  });
  slide11.addText('반품 및 마진율', {
    x: 5.5, y: 1.3, w: 3.8, h: 0.4,
    fontSize: 16, bold: true, color: '34495E'
  });
  slide11.addText([
    { text: '반품/교환:\n', options: { bold: true } },
    { text: '• 기간: 수령 후 7일 이내\n' },
    { text: '• 조건: 미개봉, 상품 하자\n\n' },
    { text: '예상 마진율:\n', options: { bold: true } },
    { text: '• Wing: 30~40%\n' },
    { text: '• Cocolic: 35~45%\n' },
    { text: '• Seanex: 25~35%' }
  ], {
    x: 5.5, y: 1.8, w: 3.8, h: 1.9,
    fontSize: 12, color: '2C3E50', lineSpacing: 18
  });

  slide11.addText('※ 상세 가격표는 별도 문의 (B2B 도매가 협의 가능)', {
    x: 0.5, y: 4.2, w: 9.0, h: 0.4,
    fontSize: 13, bold: true, color: '2C3E50', align: 'center'
  });

  // Slide 12: Contact
  const slide12 = pptx.addSlide();
  slide12.background = { path: 'gradient_dark.png' };
  slide12.addText('고객 지원 및 문의', {
    x: 0.5, y: 0.8, w: 9.0, h: 0.8,
    fontSize: 36, bold: true, color: 'FFFFFF', align: 'center'
  });

  slide12.addShape(pptx.ShapeType.rect, {
    x: 1.5, y: 1.8, w: 7.0, h: 1.2,
    fill: { color: 'rgba(255,255,255,0.1)' }
  });
  slide12.addText([
    { text: '주식회사 한국오지케이 (ELICON)\n', options: { bold: true } },
    { text: '강원특별자치도 원주시 문막읍 동화공단로 101-3\n' },
    { text: '영업 시간: 평일 09:00~18:00', options: { color: '3498DB', bold: true } }
  ], {
    x: 1.7, y: 2.0, w: 6.6, h: 0.8,
    fontSize: 16, color: 'FFFFFF', align: 'center', lineSpacing: 22
  });

  slide12.addText([
    { text: 'Wing 공식몰: wing.co.kr\n' },
    { text: 'Cocolic 공식몰: cocolic.com\n' },
    { text: '엘리콘스토어: eliconstore.com' }
  ], {
    x: 1.5, y: 3.2, w: 7.0, h: 0.6,
    fontSize: 14, color: 'ECF0F1', align: 'center', lineSpacing: 20
  });

  slide12.addText('함께 성장하겠습니다', {
    x: 0.5, y: 4.2, w: 9.0, h: 0.4,
    fontSize: 18, bold: true, color: 'FFFFFF', align: 'center'
  });

  // Save presentation
  const outputPath = '../엘리콘_브랜드_영업자료.pptx';
  await pptx.writeFile({ fileName: outputPath });

  console.log('✅ PowerPoint presentation created successfully!');
  console.log('📁 File saved to:', outputPath);
  console.log('\n📊 Presentation details:');
  console.log('   - Total slides: 12');
  console.log('   - Slide 1: Cover (gradient background)');
  console.log('   - Slide 2: Company introduction');
  console.log('   - Slide 3: Brand comparison table');
  console.log('   - Slides 4-5: Wing brand and products');
  console.log('   - Slides 6-7: Cocolic brand and products');
  console.log('   - Slides 8-9: Seanex brand and products');
  console.log('   - Slide 10: Competitive advantage analysis');
  console.log('   - Slide 11: Sales conditions');
  console.log('   - Slide 12: Contact information (gradient background)');
}

createPresentation().catch(console.error);
