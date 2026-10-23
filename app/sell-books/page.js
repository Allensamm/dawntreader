import Link from 'next/link';
import Banner from '../../components/Banner';
import Reveal from '../../components/Reveal';
import { art } from '../../lib/images';
import { SITE } from '../../lib/data';
export const metadata = { title: 'Sell Your Books in Ann Arbor, Cash or Trade', description: 'We pay cash or trade for books, make house visits within about 50 miles of Ann Arbor, and offer free appraisals of 1 to 5 rare books.', alternates: { canonical: '/sell-books' } };
const WANT = {
  'Fiction & genre': ['Modern & contemporary fiction', 'Horror', 'Science fiction & fantasy (especially vintage mass-market paperbacks)', 'Manga & anime', 'Graphic novels'],
  'Ideas & belief': ['Philosophy, ancient & modern', 'Classical studies', 'Occult, magick, witchcraft & tarot', 'Spirituality', 'Christianity, Judaism & Islam', 'Eastern wisdom & philosophy'],
  'History & society': ['U.S. history & politics', 'Cultural studies', 'Sociology', 'European history', 'Western civilization', 'Russian history', 'French history', 'Middle Eastern history', 'Military history', 'Ancient Near East & Byzantium', 'Incan, Aztec & Mayan civilizations', 'American Indian studies', 'Asian studies'],
  'Science, medicine & music': ['Physics, engineering, chemistry, biology, geology & astronomy', 'Medicine: clinical, diagnostic, reference & historical', 'Sheet music, musician biographies & music theory'],
};
const WAYS = [
  ['In the shop', 'No limit on how many books you bring. We make offers in person, because price depends on condition, popularity and what we already stock.', ['/visit', 'Visit the shop'], 'browse', 'Shelves of books waiting to be discovered'],
  ['House visits', 'More than about 10 boxes, or a whole lot? Call or email photos of your bookcases. We travel around 50 miles, and have gone as far as the UP and Indiana. We box and load the books ourselves and leave you a check that day.', ['/contact', 'Request a house visit'], 'sell', 'A well-loved collection of old books'],
  ['Appraisals', 'Book an appointment and the owner will appraise 1 to 5 rare books for free, with a written value and care suggestions. We can’t appraise entire collections for free.', ['/appraisals', 'About appraisals'], 'request', 'Notes and an open book on a desk'],
];
export default function Sell() {
  return (
    <>
      <Banner here="Sell Your Books" hue={30} />
      <section><div className="w">
        <p className="k">Sell or donate books</p><h1>Sell your books in Ann Arbor, for cash or trade.</h1>
        <p style={{ marginTop: '1rem', fontSize: '1.15rem' }}>Retiring? Moving? Shelves full-to-bursting? We have rehomed hundreds of thousands of books, and townies, organizations and institutions have trusted us with theirs for decades.</p>
        <div className="ct"><a className="btn" href={`tel:${SITE.tel}`}>Call {SITE.phone}</a><a className="btn o" href={`mailto:${SITE.email}?subject=Books%20to%20sell`}>Email photos of your shelves</a></div>
      </div></section>
      <section className="alt"><div className="w">
        <h2>How it works</h2>
        <div className="grid">
          <Reveal className="step"><b>1</b><h3>Call ahead</h3><p>Tell us how many books or boxes you have. We ask a few questions, then name the best time to bring them, usually the same day.</p></Reveal>
          <Reveal className="step"><b>2</b><h3>Bring them in</h3><p>Walk-ins are welcome during open hours. We supply a handcart, and staff can often help unload. Parking is easiest 11 am–4 pm, Monday–Thursday.</p></Reveal>
          <Reveal className="step"><b>3</b><h3>Get your offer</h3><p>Often as little as 15 minutes, up to 24 hours for large amounts. Offers are cash, check or trade.</p></Reveal>
        </div>
        <p style={{ marginTop: '1.5rem' }}><small>Friday and Saturday are our busiest days, so we strongly suggest another day. Bringing more than 5 boxes? Please call first.</small></p>
      </div></section>
      <section><div className="w sell-prep"><div><p className="k">Before you bring books</p><h2>A few things that help us make a fair offer.</h2><p>Offers depend on condition, reader interest and what is already on our shelves. The more we can see of the actual copy, the more useful the conversation will be.</p></div><div className="card"><h3>Good to know</h3><ul><li>We buy paperback and hardcover books published between 1440 and 2024.</li><li>Clean, complete copies without highlighting, underlining or marginalia generally have more value.</li><li>We can’t take books with mold, insect or rodent damage, or extensive deterioration.</li><li>When in doubt, call. The subject list is a guide, not a wall.</li></ul></div></div></section>
      <section><div className="w">
        <h2>Three ways to sell</h2>
        <div className="grid">{WAYS.map(([t, d, [h, l], image, alt], i) => (
          <Reveal key={t} className="card visual-card"><img className="im" loading="lazy" alt={alt} src={art(image, { width: 1000, height: 640 })} /><div className="card-body"><span className="card-index">0{i + 1}</span><h3>{t}</h3><p>{d}</p><Link href={h}>{l} →</Link></div></Reveal>))}</div>
      </div></section>
      <section className="alt"><div className="w">
        <h2>What we buy</h2>
        <p>Books published between 1440 and 2024, in paperback or hardcover. We can’t take books that are moldy, bug- or rodent-eaten, or badly damaged. We pay more for good-to-fine copies without highlighting, underlining or marginalia.</p>
        {Object.entries(WANT).map(([g, l]) => (<div key={g}><p className="k" style={{ marginTop: '1.2rem' }}>{g}</p>{l.map((t) => <span className="tag" key={t}>{t}</span>)}</div>))}
        <p style={{ marginTop: '1.2rem' }}>Don’t let this list limit you. If your situation doesn’t quite fit, <Link href="/contact">contact us</Link> and we’ll figure it out. Questions? See the <Link href="/faq">FAQ</Link>.</p>
      </div></section>
    </>
  );
}
