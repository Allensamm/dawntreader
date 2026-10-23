import Link from 'next/link';
import Banner from '../../components/Banner';
import BookCard from '../../components/BookCard';
import { BOOKS, CATS } from '../../lib/data';
export const metadata = { title: 'Rare & Collectible Books', description: 'Sample listings of rare and collectible books, maps and prints from The Dawn Treader Book Shop in Ann Arbor.', alternates: { canonical: '/books' } };
export default function Books({ searchParams }) {
  const cat = searchParams?.cat || 'All';
  const list = BOOKS.filter((b) => cat === 'All' || b.cat === cat);
  return (
    <>
      <Banner trail={[['/shop', 'Shop']]} here="Rare Books" hue={350} />
      <section><div className="w">
        <h1>Rare &amp; collectible books</h1>
        <p style={{ marginTop: '1rem' }}>A changing selection from the shelves: first editions, signed copies, literary landmarks and the occasional unexpected treasure. These highlights are a place to begin—our <a href="https://www.abebooks.com/dawn-treader-bookshop-ann-arbor-mi/9543/sf" rel="noopener">AbeBooks storefront</a> carries the current online list.</p>
        <div className="catalog-note"><b>Looking for maps, prints, or a specific title?</b> The website cannot show all 70,000 books. <Link href="/shop">Tell us what you’re hunting for</Link> and we’ll check the shelves.</div>
        <p>{['All', ...CATS].map((c) => <Link key={c} href={c === 'All' ? '/books' : `/books?cat=${encodeURIComponent(c)}`} className={`tag${cat === c ? ' act' : ''}`}>{c}</Link>)}</p>
        {list.length ? <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(190px,1fr))', marginTop: '1.5rem' }}>{list.map((b) => <BookCard key={b.slug} b={b} />)}</div> : <div className="empty-shelf"><p className="k">Beyond the online highlights</p><h2>There may be more on the shelf.</h2><p>Maps, prints and many other subjects move through the shop without appearing in this editorial selection. Tell us what you’re looking for and a bookseller will check the current stock.</p><Link className="btn" href="/contact">Ask about {cat.toLowerCase()}</Link></div>}
      </div></section>
    </>
  );
}
