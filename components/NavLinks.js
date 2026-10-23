'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const L = [['/shop', 'Shop'], ['/reading-room', 'The Reading Room'], ['/visit', 'Visit'], ['/contact', 'Contact']];
export default function NavLinks() {
  const p = usePathname();
  const on = (h) => p === h || p.startsWith(h + '/') || (h === '/shop' && p.startsWith('/books'));
  return (
    <nav aria-label="Main">
      {L.map(([h, l]) => <Link key={h} href={h} className={on(h) ? 'on' : ''}>{l}</Link>)}
      <Link href="/sell-books" className="btn">Sell Your Books</Link>
    </nav>
  );
}
