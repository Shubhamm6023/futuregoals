/* Generates PNG app icons (192, 512, 512 maskable) from the Future icon design.
   Pure Node — no dependencies. Run: node scripts/make-icons.js */
const zlib = require('zlib');
const fs = require('fs');

/* ---- minimal PNG encoder (RGBA, 8-bit) ---- */
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}
function encodePNG(width, height, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // color type RGBA
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (width * 4 + 1)] = 0; // filter: none
    rgba.copy(raw, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

/* ---- geometry (unit space, from icon.svg on a 128 canvas) ---- */
const LIME = [196, 243, 107];
const DARK = [20, 32, 13];
const RECT_R = 28 / 128;                     // corner radius (normalized)
const SEG1 = [[31 / 128, 88 / 128], [84 / 128, 35 / 128]];   // diagonal
const SEG2 = [[51 / 128, 35 / 128], [84 / 128, 35 / 128], [84 / 128, 68 / 128]]; // hook
const STROKE = 14 / 128;                     // stroke width (normalized)

function segDist(px, py, a, b) {
  const abx = b[0] - a[0], aby = b[1] - a[1];
  const t = Math.max(0, Math.min(1, ((px - a[0]) * abx + (py - a[1]) * aby) / (abx * abx + aby * aby)));
  return Math.hypot(px - (a[0] + t * abx), py - (a[1] + t * aby));
}
function rrDist(px, py, hw, hh, r) {
  const dx = Math.abs(px - 0.5) - hw;
  const dy = Math.abs(py - 0.5) - hh;
  const ax = Math.max(dx, 0), ay = Math.max(dy, 0);
  return Math.hypot(ax, ay) + Math.min(Math.max(dx, dy), 0) - r;
}
function arrowCover(px, py, s) {
  const c = (p) => [0.5 + (p[0] - 0.5) * s, 0.5 + (p[1] - 0.5) * s];
  const p1 = c(SEG1[0]), p2 = c(SEG1[1]);
  const q1 = c(SEG2[0]), q2 = c(SEG2[1]), q3 = c(SEG2[2]);
  const half = (STROKE * s) / 2;
  return Math.min(segDist(px, py, p1, p2), segDist(px, py, q1, q2), segDist(px, py, q2, q3)) <= half ? 1 : 0;
}

function render(size, { maskable }) {
  const px = Buffer.alloc(size * size * 4);
  const aa = 1; // 4 samples per pixel for AA
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let r = 0, g = 0, b = 0, a = 0, n = 0;
      for (const [ox, oy] of [[0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75]]) {
        const u = (x + ox) / size, v = (y + oy) / size;
        let covRect;
        if (maskable) covRect = 1; // full-bleed background
        else {
          const d = rrDist(u, v, 0.5 - RECT_R, 0.5 - RECT_R, RECT_R);
          covRect = Math.max(0, Math.min(1, -d * size));
        }
        if (covRect <= 0) continue;
        const s = maskable ? 0.7 : 1;
        const covArrow = arrowCover(u, v, s) * covRect;
        const cr = LIME[0] * covRect, cg = LIME[1] * covRect, cb = LIME[2] * covRect;
        r += cr + (DARK[0] - cr) * covArrow;
        g += cg + (DARK[1] - cg) * covArrow;
        b += cb + (DARK[2] - cb) * covArrow;
        a += covRect * 255;
        n++;
      }
      if (!n) continue;
      const i = (y * size + x) * 4;
      px[i] = Math.round(r / n);
      px[i + 1] = Math.round(g / n);
      px[i + 2] = Math.round(b / n);
      px[i + 3] = Math.round(a / n);
    }
  }
  return encodePNG(size, size, px);
}

const out = [
  ['icon-192.png', render(192, { maskable: false })],
  ['icon-512.png', render(512, { maskable: false })],
  ['icon-maskable-512.png', render(512, { maskable: true })]
];
for (const [name, buf] of out) {
  fs.writeFileSync(name, buf);
  console.log('wrote', name, buf.length, 'bytes');
}