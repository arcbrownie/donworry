/**
 * SVG를 기반으로 favicon.ico를 생성하는 스크립트
 * 
 * 사용법:
 * 1. npm install --save-dev sharp to-ico
 * 2. node scripts/generate-favicon.js
 */

import sharp from 'sharp';
import { toIco } from 'to-ico';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [16, 32, 48, 64, 128, 256];

async function generateFavicon() {
  try {
    const svgPath = path.join(__dirname, '../public/favicon.svg');
    const outputPath = path.join(__dirname, '../public/favicon.ico');
    
    console.log('📦 SVG 파일 읽는 중...');
    const svgBuffer = fs.readFileSync(svgPath);
    
    console.log('🔄 여러 크기의 PNG 생성 중...');
    const pngBuffers = await Promise.all(
      sizes.map(async (size) => {
        const png = await sharp(svgBuffer)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
          .png()
          .toBuffer();
        return png;
      })
    );
    
    console.log('💾 ICO 파일 생성 중...');
    const icoBuffer = await toIco(pngBuffers);
    
    fs.writeFileSync(outputPath, icoBuffer);
    console.log('✅ favicon.ico 생성 완료!');
    console.log(`   위치: ${outputPath}`);
    console.log(`   포함된 크기: ${sizes.join(', ')}px`);
    
  } catch (error) {
    console.error('❌ 오류 발생:', error.message);
    console.error('\n💡 해결 방법:');
    console.error('   1. 필요한 패키지 설치: npm install --save-dev sharp to-ico');
    console.error('   2. 또는 온라인 변환 도구 사용: https://convertio.co/svg-ico/');
    process.exit(1);
  }
}

generateFavicon();
