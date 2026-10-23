const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
export function ph(t, hue, w = 800, h = 400) {
  let s = '', x = 0, r = hue * 7 + 3;
  while (x < w) { r = (r * 9301 + 49297) % 233280; const bw = 18 + (r % 34), bh = h * 0.35 + ((r % 100) / 100) * h * 0.4; s += `<rect x="${x}" y="${h - bh}" width="${bw - 3}" height="${bh}" fill="hsl(${(hue + (r % 40)) % 360},35%,${22 + (r % 18)}%)"/>`; x += bw; }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B5560"/><stop offset="1" stop-color="#0F2A35"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#g)"/>${s}<text x="${w / 2}" y="${h * 0.3}" text-anchor="middle" font-family="Georgia,serif" font-size="${h / 12}" fill="#F1E8D6" fill-opacity=".85">${esc(t)}</text></svg>`;
}
export function cover(t, a, hue) {
  const L = []; let c = '';
  t.split(' ').forEach((w) => { if (c && (c + ' ' + w).length > 13) { L.push(c); c = w; } else c = c ? c + ' ' + w : w; }); L.push(c);
  const tx = L.map((l, i) => `<text x="150" y="${130 + i * 34}" text-anchor="middle" font-family="Georgia,serif" font-size="28" fill="#F1E8D6">${esc(l)}</text>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 420"><rect width="300" height="420" fill="hsl(${hue},40%,26%)"/><rect x="14" y="14" width="272" height="392" fill="none" stroke="#D9A857" stroke-width="2"/><rect x="26" y="26" width="248" height="368" fill="none" stroke="#D9A857" stroke-opacity=".5"/>${tx}<path d="M110 350h80" stroke="#D9A857" stroke-width="2"/><text x="150" y="378" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#D9A857">${esc(a.length > 34 ? a.slice(0, 33) + '…' : a)}</text></svg>`;
}
