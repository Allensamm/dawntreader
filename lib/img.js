// Branded typographic covers served by /api/img. Replace these with photographed
// book jackets or catalog photography as that library becomes available.
const q = (o) => '/api/img?' + new URLSearchParams(o).toString();
export const cover = (b) => q({ k: 'cv', t: b.title, a: b.author, h: b.hue });
export const photo = (t = 'Image', h = 200, w = 800, ht = 400) => q({ k: 'ph', t, h, w, ht });
