import Link from 'next/link';
import { notFound } from 'next/navigation';
import Banner from '../../../components/Banner';
import BookCard from '../../../components/BookCard';
import { BOOKS, SITE } from '../../../lib/data';
import { cover } from '../../../lib/img';
export const generateStaticParams = () => BOOKS.map((b) => ({ slug: b.slug }));
export function generateMetadata({ params }) {
  const b = BOOKS.find((x) => x.slug === params.slug);
  return b ? { title: `${b.title} by ${b.author}`, description: `${b.title} by ${b.author}. ${b.edition}. From The Dawn Treader Book Shop, Ann Arbor.`, alternates: { canonical: `/books/${b.slug}` } } : {};
}
export default function Book({ params }) {
  const b = BOOKS.find((x) => x.slug === params.slug);
  if (!b) notFound();
  const action = b.price === 'Sold'
    ? <Link className="btn" href={`/contact?subject=${encodeURIComponent(`Finding a copy of ${b.title}`)}`}>Help me find a copy</Link>
    : b.shopOnly
      ? <Link className="btn" href="/visit">Find it in the shop</Link>
      : <a className="btn" href={SITE.abe} rel="noopener">Check AbeBooks</a>;
  return (
    <>
      <Banner trail={[['/shop', 'Shop'], ['/books', 'Rare Books']]} here={b.title} hue={b.hue} />
      <section><div className="w">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '2.5rem', alignItems: 'start' }}>
          <img className="cvr" style={{ maxWidth: 340 }} alt={`Cover of ${b.title}`} src={cover(b)} />
          <div>
            <p className="k">{b.cat}</p><h1 style={{ fontSize: 'clamp(2.2rem,5vw,3.4rem)' }}>{b.title}</h1>
            <p>by {b.author}</p><p><b>{b.edition}</b></p><p className="availability" style={{ fontSize: '1.1rem' }}>{b.price}</p><p className="book-summary">{b.summary}</p>
            <div className="ct">{action}<Link className="btn o" href={`/contact?subject=${encodeURIComponent(`Question about ${b.title}`)}`}>Ask about this book</Link></div>
            <div className="book-note"><b>Availability changes quickly.</b><br />For a condition report, shipping quote, or confirmation that this copy is still on the shelf, call <a href={`tel:${SITE.tel}`}>{SITE.phone}</a> or email the shop. Completed phone and email orders are mailed within 1–2 days.</div>
          </div>
        </div>
        <h2 style={{ marginTop: '3rem' }}>You may also like</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(190px,1fr))' }}>{BOOKS.filter((x) => x.slug !== b.slug).slice(0, 4).map((x) => <BookCard key={x.slug} b={x} />)}</div>
      </div></section>
    </>
  );
}
