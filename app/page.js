import Link from 'next/link';
import Reveal from '../components/Reveal';
import Count from '../components/Count';
import OpenNow from '../components/OpenNow';
import BookCard from '../components/BookCard';
import { BOOKS, CATS, POSTS, SITE } from '../lib/data';
import { cover } from '../lib/img';
import { art } from '../lib/images';

export const metadata = { title: { absolute: 'Rare & Antiquarian Books in Ann Arbor | The Dawn Treader Book Shop' }, alternates: { canonical: '/' } };
const grid = { gridTemplateColumns: 'repeat(auto-fill,minmax(190px,1fr))' };

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero-img" alt="Rows of books in a warmly lit library" src={art('hero', { width: 2000, height: 1300, position: 'right' })} fetchPriority="high" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="w hero-grid">
          <div className="hero-copy">
            <p className="k">Rare &amp; antiquarian books · Maps &amp; prints</p>
            <h1>Rare &amp; antiquarian books, found in Ann Arbor.</h1>
            <p>More than 70,000 titles, from fifty-cent paperbacks to incunabula, on the shelves of a shop that has been buying and selling books since 1976. We ship worldwide.</p>
            <div className="ct"><Link className="btn" href="/books">Browse rare books</Link><Link className="btn o" href="/sell-books">Sell us your books</Link></div>
            <div className="st"><span className="pulse" aria-hidden="true" />514 E Liberty St · <OpenNow /></div>
          </div>
          <aside className="hero-note">
            <span className="hero-note-mark">✦</span>
            <p>Every shelf holds a chance encounter.</p>
            <small>Open seven days a week in the heart of Ann Arbor.</small>
          </aside>
        </div>
      </section>
      <div className="stats"><div className="w grid">
        <div><b><Count to={70000} /></b><span>titles in the shop</span></div>
        <div><b>1976</b><span>Ann Arbor’s best browse since</span></div>
        <div><b>1440–2024</b><span>publication years we buy</span></div>
        <div><b>1–2 days</b><span>to mail phone &amp; email orders</span></div>
      </div></div>
      <section className="home-intro"><div className="w intro-grid">
        <Reveal><p className="k">Ann Arbor’s best browse</p><h2>A bookshop with room for the serious search and the happy accident.</h2><p>Dawn Treader has grown from a tiny basement shop into a spacious storefront with more than 70,000 titles. Some readers arrive with a long-sought first edition in mind. Others find a paperback, a map, or a book they didn’t know they needed. Both are very much the point.</p><p>Our shelves range from current reading copies to long-surviving incunabula, with prices from fifty cents to many thousands of dollars. We buy with the same curiosity we sell with: a book’s next reader matters.</p></Reveal>
        <Reveal className="shelf-directory"><p className="k">A few places to begin</p><h3>Follow your curiosity</h3><div>{CATS.map((category, i) => <Link key={category} href={`/books?cat=${encodeURIComponent(category)}`}><span>0{i + 1}</span>{category}<b>→</b></Link>)}</div><Link className="directory-link" href="/shop">Or ask a bookseller for a trail to follow →</Link></Reveal>
      </div></section>
      <section><div className="w">
        <Reveal><p className="k">Two ways in</p><h2>What brings you to the shelves?</h2></Reveal>
        <div className="grid discovery-grid">
          <Reveal className="card visual-card"><img className="im" loading="lazy" alt="A book-lined wall in an independent bookshop" src={art('browse', { width: 1000, height: 640 })} /><div className="card-body"><span className="card-index">01</span><h3>Find something rare</h3><p>Browse our rare and collectible books, maps and prints online, or tell us what you’re hunting for. We reply with pricing and availability.</p><Link className="btn" href="/shop">Start looking</Link></div></Reveal>
          <Reveal className="card visual-card"><img className="im" loading="lazy" alt="A close view of well-loved antique book spines" src={art('sell', { width: 1000, height: 640 })} /><div className="card-body"><span className="card-index">02</span><h3>Sell or appraise books</h3><p>Retiring, moving, shelves full-to-bursting? We pay cash or trade, and we travel about 50 miles from Ann Arbor to collect larger lots.</p><Link className="btn" href="/sell-books">See how selling works</Link></div></Reveal>
        </div>
      </div></section>
      <section className="alt imprint-section"><div className="w grid" style={{ alignItems: 'center' }}>
        <Reveal className="quote-block"><p className="q">“Best bookstore ever.”</p><p style={{ marginTop: '1rem' }}><small>LeVar Burton, during a campus visit to Ann Arbor. <a href="https://www.annarbor.com/entertainment/actor-levar-burton-in-ann-arbor-and-apparently-enjoying-it/" rel="noopener">Read the story</a></small></p></Reveal>
        <Reveal>
          <div className="story-image"><img loading="lazy" alt="Books gathered in an old library" src={art('story', { width: 900, height: 760 })} /><span>Since<br />1976</span></div>
          <p className="k">Your booksellers</p><h2>From a basement shop to 70,000 books.</h2>
          <p>Bill Gillmore opened Dawn Treader in 1976 as a tiny basement shop. In June 2022 it passed to Africa Schaumann, who had managed it for four years. Her expertise is rare and antiquarian books, and she is trained in book conservation and preservation.</p>
          <Link href="/visit">Our story and how to find us →</Link>
        </Reveal>
      </div></section>
      <section className="collection-callout"><div className="w collection-grid">
        <Reveal className="collection-copy"><p className="k">The joy is in the search</p><h2>Some books are found. Others find you.</h2><p>Follow a subject down a rabbit hole, ask about the title that got away, or take home a small surprise from the under-$10 shelves.</p><Link href="/visit">Make an afternoon of it →</Link></Reveal>
        <Reveal className="collection-image"><img loading="lazy" alt="Antique books with richly textured bindings" src={art('shop', { width: 1200, height: 820 })} /><span className="image-caption">Browse slowly</span></Reveal>
      </div></section>
      <section className="how-we-help alt"><div className="w"><Reveal><p className="k">More than a transaction</p><h2>Bring us a book, a question, or a room full of both.</h2></Reveal><div className="grid service-grid">
        <Reveal><span className="service-number">01</span><h3>For collectors</h3><p>Ask about an edition, a signature, a missing volume, or a title you’ve been meaning to find for years. We can confirm availability and point you to the best way to purchase.</p><Link href="/shop">Start a book search →</Link></Reveal>
        <Reveal><span className="service-number">02</span><h3>For books in need of a next shelf</h3><p>Bring books in for cash or trade, arrange a house visit for a larger group, or make an appointment to appraise one to five rare books.</p><Link href="/sell-books">See how selling works →</Link></Reveal>
        <Reveal><span className="service-number">03</span><h3>For the simply curious</h3><p>Come in, take your time, and browse across centuries and subjects. The shop is open every day, and a bookseller is always close by.</p><Link href="/visit">Plan your visit →</Link></Reveal>
      </div></div></section>
      <section><div className="w">
        <Reveal><p className="k">Featured</p><h2>Rare books on the shelf</h2></Reveal>
        <div className="grid" style={grid}>{BOOKS.slice(0, 4).map((b) => <BookCard key={b.slug} b={b} />)}</div>
        <p style={{ marginTop: '1.5rem' }}><Link className="btn" href="/books">Browse all rare books</Link></p>
      </div></section>
      <section className="alt"><div className="w">
        <Reveal><p className="k">The Reading Room</p><h2>Stories behind the books</h2></Reveal>
        <div className="grid" style={grid}>
          {[4, 2, 1].map((i) => { const p = POSTS[i]; return (
            <Link key={p.slug} className="card" href={`/reading-room/${p.slug}`} style={{ textDecoration: 'none' }}>
              <img className="cvr" loading="lazy" alt={`Cover of ${p.title}`} src={cover(p)} />
              <h3 style={{ fontSize: '1.35rem', marginTop: '.8rem' }}>{p.title}</h3><p className="k" style={{ margin: 0 }}>{p.author}</p>
            </Link>); })}
        </div>
        <p style={{ marginTop: '1.5rem' }}><Link href="/reading-room">Read all the stories →</Link></p>
      </div></section>
      <section className="visit-cta"><img loading="lazy" alt="A reader enjoying a quiet moment with a book" src={art('gift', { width: 1800, height: 700 })} /><div className="visit-cta-wash" aria-hidden="true" /><Reveal className="w"><p className="k">A good place to linger</p><h2>Step in out of the noise.</h2><p>Open Monday to Saturday, 11 am to 8 pm, and Sunday, 11 am to 6 pm.</p><Link className="btn" href="/visit">Plan your visit</Link></Reveal></section>
    </>
  );
}
