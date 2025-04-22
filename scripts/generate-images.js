const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/favicon.svg'));
  
  // Generate favicon.ico (16x16)
  await sharp(svgBuffer)
    .resize(16, 16)
    .toFile(path.join(__dirname, '../public/favicon-16x16.png'));
  
  // Generate apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));
  
  // Generate favicon.ico (multi-size)
  await sharp(svgBuffer)
    .resize(32, 32)
    .toFile(path.join(__dirname, '../public/favicon.ico'));
}

generateFavicons().catch(console.error); 