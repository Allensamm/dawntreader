'use client';
import { useEffect, useState } from 'react';
export default function OpenNow() {
  const [s, setS] = useState('');
  useEffect(() => {
    const t = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Detroit' }));
    const d = t.getDay(), h = t.getHours() + t.getMinutes() / 60, c = d ? 20 : 18;
    setS(h >= 11 && h < c ? `Open now until ${c - 12} pm` : 'Closed now, opens 11 am');
  }, []);
  return <span className="st">{s}</span>;
}
