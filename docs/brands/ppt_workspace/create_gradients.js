const sharp = require('sharp');

async function createGradients() {
  // Gradient for slide 1 and 12 (dark blue gradient)
  const darkGradientSvg = `
    <svg width="720" height="405" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2C3E50;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#34495E;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="720" height="405" fill="url(#grad1)" />
    </svg>
  `;

  await sharp(Buffer.from(darkGradientSvg))
    .png()
    .toFile('gradient_dark.png');

  console.log('✅ Gradient backgrounds created');
}

createGradients().catch(console.error);
