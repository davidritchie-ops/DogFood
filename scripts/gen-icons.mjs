import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(here, '../public/icon.svg');
const out = (name) => resolve(here, '../public', name);

const svg = await readFile(svgPath);

const targets = [
  { size: 192, file: 'icon-192.png' },
  { size: 512, file: 'icon-512.png' },
  { size: 180, file: 'apple-touch-icon.png' },
];

for (const { size, file } of targets) {
  await sharp(svg).resize(size, size).png().toFile(out(file));
  console.log(`wrote ${file} (${size}x${size})`);
}
