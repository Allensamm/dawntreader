import { ph, cover } from '../../../lib/svg';
export function GET(req) {
  const p = new URL(req.url).searchParams;
  const t = p.get('t') || '', a = p.get('a') || '', h = Number(p.get('h')) || 200, w = Math.min(Number(p.get('w')) || 800, 2000), ht = Math.min(Number(p.get('ht')) || 400, 1200);
  const svg = p.get('k') === 'cv' ? cover(t, a, h) : ph(t, h, w, ht);
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=31536000, immutable' } });
}
