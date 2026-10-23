import Link from 'next/link';
import Banner from '../../components/Banner';
import { SITE } from '../../lib/data';
export const metadata = { title: 'Book Appraisals in Ann Arbor', description: 'The owner appraises 1 to 5 rare books for free, with a written value and care suggestions.', alternates: { canonical: '/appraisals' } };
export default function Appraisals() {
  return (
    <>
      <Banner trail={[['/sell-books', 'Sell Your Books']]} here="Appraisals" hue={100} />
      <section><div className="w narrow">
        <p className="k">A closer look</p><h1>Book appraisals in Ann Arbor</h1>
        <p style={{ marginTop: '1rem', fontSize: '1.15rem' }}>Have a book that deserves a second opinion? Schedule a time with the owner to look at one to five rare books. It is a courtesy offered at no charge; appraisals of entire collections are not available for free.</p>
        <div className="appraisal-steps">
          <div><span>01</span><h3>Make an appointment</h3><p>Call the shop and tell us a little about the book or books you would like to bring in. We’ll find a time when the owner can give them proper attention.</p></div>
          <div><span>02</span><h3>Bring up to five books</h3><p>Bring the actual copies rather than only photographs when you can. Edition, condition, binding and marks of ownership all matter to the conversation.</p></div>
          <div><span>03</span><h3>Leave with useful notes</h3><p>You’ll receive a written assessment of what the book is, what it is worth, and care suggestions should you decide to keep it.</p></div>
        </div>
        <div className="appraisal-callout"><h2>Thinking about a whole library?</h2><p>For a larger group of books, the selling process is the right starting point. Tell us how many boxes you have or email a few photographs of the shelves; for sizable collections, house visits may be possible within roughly 50 miles of Ann Arbor.</p><Link href="/sell-books">Learn how we buy collections →</Link></div>
        <div className="ct"><a className="btn" href={`tel:${SITE.tel}`}>Call {SITE.phone} to schedule</a><Link className="btn o" href="/contact">Email the shop</Link></div>
      </div></section>
    </>
  );
}
