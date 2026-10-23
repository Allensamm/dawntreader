import Link from 'next/link';
import Banner from '../../components/Banner';
import Reveal from '../../components/Reveal';
import EmailForm from '../../components/EmailForm';
import { art } from '../../lib/images';
import { SITE } from '../../lib/data';
export const metadata = { title: 'Buy Rare & Collectible Books Online', description: 'Browse our AbeBooks storefront, ask us for a specific title, or give a gift certificate. Phone and email orders are mailed within 1 to 2 days.', alternates: { canonical: '/shop' } };
export default function Shop() {
  return (
    <>
      <Banner here="Shop" hue={200} />
      <section><div className="w">
        <p className="k">Shop online</p><h1>Shop rare &amp; collectible books online.</h1>
        <p style={{ marginTop: '1rem' }}>Three ways to bring a book home, from the easiest to the most personal. We mail completed phone and email orders within 1–2 days, then your package travels on the shipping service you select.</p>
        <div className="grid" style={{ marginTop: '2rem' }}>
          <Reveal className="card visual-card"><img className="im" loading="lazy" alt="A shelf of books in a warmly lit library" src={art('shop', { width: 1000, height: 640 })} /><div className="card-body"><span className="card-index">01</span><h3>Browse our rare books</h3><p>Select rare and unusual titles, with more added every week. Our AbeBooks storefront carries the full online list.</p><Link className="btn" href="/books">Browse rare books</Link> <a href={SITE.abe} rel="noopener">AbeBooks →</a></div></Reveal>
          <Reveal className="card visual-card"><img className="im" loading="lazy" alt="A handwritten note beside an open book" src={art('request', { width: 1000, height: 640 })} /><div className="card-body"><span className="card-index">02</span><h3>Ask us for a specific book</h3><p>Tell us the title and we’ll reply with pricing and availability.</p>
            <EmailForm compact kind="Book request" bookRequest />
            <p style={{ margin: '.8rem 0 0' }}><small>Or call <a href={`tel:${SITE.tel}`}>{SITE.phone}</a></small></p></div></Reveal>
          <Reveal className="card visual-card"><img className="im" loading="lazy" alt="A stack of books ready to be given as a gift" src={art('gift', { width: 1000, height: 640 })} /><div className="card-body"><span className="card-index">03</span><h3>Give a gift certificate</h3><p>{[10, 25, 50, 100].map((v) => <Link key={v} className="tag" href="/gift-certificates">${v}</Link>)}</p><p>Certificates are mailed by USPS, so allow time for delivery.</p></div></Reveal>
        </div>
        <div className="shop-promise"><span>01</span><p><b>Tell us what you’re seeking.</b> A title, author, subject or a photograph of the book is enough to begin.</p><span>02</span><p><b>We confirm the details.</b> A bookseller replies with availability, price and the best purchase path.</p><span>03</span><p><b>We send it carefully.</b> Completed phone and email orders leave the shop within 1–2 days.</p></div>
      </div></section>
    </>
  );
}
