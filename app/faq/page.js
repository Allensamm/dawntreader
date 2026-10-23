import Link from 'next/link';
import Banner from '../../components/Banner';
import { FAQ } from '../../lib/data';
export const metadata = { title: 'FAQ', description: 'Answers about selling books, offers, house visits, shipping and parking at The Dawn Treader Book Shop.', alternates: { canonical: '/faq' } };
export default function Faq() {
  const more = [
    ['How do I buy a book I saw online?', 'For select rare and unusual titles, visit our AbeBooks storefront. For a particular title or an item marked “in the shop,” call or email us and we’ll confirm price and availability.'],
    ['How do gift certificates arrive?', 'Gift certificates are mailed by USPS. Please allow time for delivery, especially if the certificate is for a specific occasion.'],
    ['Can you tell me whether a book is valuable from a photo?', 'Photographs can help us decide how best to proceed, especially for a large collection. For an offer or appraisal, we need to see the books in person because edition and condition matter.'],
    ['What if my collection does not match the subject list?', 'Please call anyway. The “seeking” list reflects current interests and needs, but it is not a complete list of what we will consider.'],
  ];
  return (<><Banner here="FAQ" hue={150} /><section><div className="w narrow"><p className="k">Practical answers</p><h1>Frequently asked questions</h1><p style={{ marginTop: '1rem' }}>A few useful details before you visit, sell, or begin a search. If your situation is unusual, please get in touch—we’re happy to talk it through.</p><div style={{ marginTop: '1.5rem' }}>{[...FAQ, ...more].map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div><p style={{ marginTop: '1.5rem' }}>Still have a question? <Link href="/contact">Contact us</Link>.</p></div></section></>);
}
