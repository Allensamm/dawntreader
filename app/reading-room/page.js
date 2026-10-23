import Link from 'next/link';
import Banner from '../../components/Banner';
import { POSTS } from '../../lib/data';
import { cover } from '../../lib/img';
export const metadata = { title: 'The Reading Room: Stories Behind Rare Books', description: 'Stories behind rare and collectible books from The Dawn Treader Book Shop in Ann Arbor.', alternates: { canonical: '/reading-room' } };
export default function Journal() {
  return (
    <>
      <Banner here="The Reading Room" hue={150} />
      <section><div className="w">
        <p className="k">The Reading Room</p><h1>Stories behind rare books.</h1>
        <p style={{ marginTop: '1rem' }}>Now and then one book gets the long look it deserves: who wrote it, why it matters, and what makes this copy worth keeping.</p>
        <div style={{ marginTop: '1.5rem' }}>{POSTS.map((p) => (
          <Link key={p.slug} className="row2" href={`/reading-room/${p.slug}`}>
            <img alt={`Cover of ${p.title}`} loading="lazy" src={cover(p)} style={{ width: 64, aspectRatio: '5/7', objectFit: 'cover' }} />
            <div><h3 style={{ fontSize: '1.5rem' }}>{p.title}</h3><small style={{ color: 'var(--mut)' }}>{p.author} · {p.date}</small><p className="post-excerpt">{p.excerpt}</p></div><span className="chip">{p.status}</span>
          </Link>))}</div>
        <div className="card reading-cta" style={{ marginTop: '2rem' }}><p className="k">Keep browsing</p><h3>Looking for the book that sparked a story?</h3><p>Call or email the shop and we’ll check availability, suggest a related title, or help you begin a wish list.</p><Link className="btn" href="/contact">Ask a bookseller</Link></div>
      </div></section>
    </>
  );
}
