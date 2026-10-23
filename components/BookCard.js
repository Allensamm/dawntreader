import Link from 'next/link';
import { cover } from '../lib/img';
export default function BookCard({ b }) {
  return (
    <Link className="card" href={`/books/${b.slug}`} style={{ textDecoration: 'none' }}>
      <img className="cvr" loading="lazy" alt={`Cover of ${b.title}`} src={cover(b)} />
      <h3 style={{ fontSize: '1.35rem', marginTop: '.8rem' }}>{b.title}</h3>
      <p style={{ margin: 0 }}>{b.author}</p>
      <p className="k" style={{ margin: '.4rem 0 0' }}>{b.price}</p>
    </Link>
  );
}
