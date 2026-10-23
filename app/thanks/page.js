import Link from 'next/link';
import Banner from '../../components/Banner';
export const metadata = { title: 'Thank You', robots: { index: false } };
export default function Thanks() {
  return (<><Banner here="Thank you" hue={120} /><section><div className="w narrow"><p className="k">The next chapter</p><h1>Thank you.</h1><p style={{ marginTop: '1rem' }}>We appreciate you spending time with Dawn Treader. If you sent an email, a bookseller will be in touch; if you came looking for your next read, there are plenty more shelves to explore.</p><div className="ct"><Link className="btn" href="/">Back home</Link><Link className="btn o" href="/books">Browse rare books</Link></div></div></section></>);
}
