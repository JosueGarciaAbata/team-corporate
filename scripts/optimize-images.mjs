import sharp from 'sharp';
import { readdirSync, mkdirSync, statSync } from 'fs';
import { join } from 'path';

const DIR     = 'public/assets/img/services';
const MAX_W   = 1080;
const MAX_H   = 720;
const QUALITY = 72;

// Map: original filename → safe output filename
const FILES = [
  ['Ciberseguridad.webp',          'ciberseguridad.webp'],
  ['Consultor\u00EDa Tech.webp',   'consultoria-tech.webp'],
  ['Data & Analytics.webp',        'data-analytics.webp'],
  ['desarrollo-movil.webp',        'desarrollo-movil.webp'],
  ['desarrollo-web.webp',          'desarrollo-web.webp'],
  ['Dise\u00F1oui.webp',          'disenoui.webp'],
  ['Inteligencia Artificial.webp', 'inteligencia-artificial.webp'],
  ['Marketing Digital.webp',       'marketing-digital.webp'],
  ['Soluciones Cloud.webp',        'soluciones-cloud.webp'],
];

console.log('\n🔧 Optimizando imágenes...\n');

for (const [original, safeName] of FILES) {
  const input  = join(DIR, original);
  const output = join(DIR, safeName);

  // Skip if already optimized (output exists and is smaller)
  try {
    const inSize  = statSync(input).size;
    try {
      const outSize = statSync(output).size;
      if (outSize < inSize && output !== input) {
        console.log(`  ⏭  ${safeName}  (ya optimizado)`);
        continue;
      }
    } catch { /* output doesn't exist yet, proceed */ }
  } catch {
    console.warn(`  ⚠️  No encontrado: ${original}`);
    continue;
  }

  try {
    const meta = await sharp(input).metadata();
    process.stdout.write(`  → ${original}  (${meta.width}x${meta.height})  `);

    // Write to a buffer first, then save — avoids file-lock issues on Windows
    const buffer = await sharp(input)
      .resize(MAX_W, MAX_H, { fit: 'cover', position: 'centre', withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 4 })
      .toBuffer();

    await sharp(buffer).toFile(output);

    const kb = (statSync(output).size / 1024).toFixed(0);
    const outMeta = await sharp(output).metadata();
    console.log(`✅  ${safeName}  (${outMeta.width}x${outMeta.height})  ${kb} KB`);
  } catch (err) {
    console.error(`❌  ${original}: ${err.message}`);
  }
}

console.log('\n✅ Listo.\n');

