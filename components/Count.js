'use client';
import { useEffect, useRef, useState } from 'react';
export default function Count({ to }) {
  const [v, setV] = useState(to), r = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const s = performance.now();
      const f = (n) => { const p = Math.min((n - s) / 1400, 1); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(f); };
      requestAnimationFrame(f);
    }, { threshold: 0.3 });
    io.observe(r.current);
    return () => io.disconnect();
  }, [to]);
  return <span ref={r}>{v.toLocaleString('en-US')}+</span>;
}
