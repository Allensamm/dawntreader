'use client';
import { useEffect, useRef } from 'react';
export default function Reveal({ children, className = '', style }) {
  const r = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.classList.add('in'); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(r.current);
    return () => io.disconnect();
  }, []);
  return <div ref={r} className={`rv ${className}`} style={style}>{children}</div>;
}
