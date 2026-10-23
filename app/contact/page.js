import Link from 'next/link';
import Banner from '../../components/Banner';
import EmailForm from '../../components/EmailForm';
import { SITE } from '../../lib/data';
export const metadata = { title: 'Contact the Shop', description: 'Call (734) 995-1008 or send a message to The Dawn Treader Book Shop in Ann Arbor.', alternates: { canonical: '/contact' } };
export default function Contact() {
  return (
    <><Banner here="Contact" hue={200} /><section><div className="w"><p className="k">Talk to a bookseller</p><h1>Contact the shop</h1><p style={{ marginTop: '1rem' }}>For a specific title, a group of books to sell, or a question about a copy, the quickest path is a call or email. Tell us a little about what you have in mind and we’ll point you in the right direction.</p>
      <div className="grid" style={{ marginTop: '1.5rem' }}>
        <EmailForm />
        <div className="card contact-card"><h3>Visit, call or email</h3><p>{SITE.addr[0]}<br />{SITE.addr[1]}</p><p><a href={`tel:${SITE.tel}`}>{SITE.phone}</a><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p><p><small>Open Monday–Saturday, 11 am–8 pm; Sunday, 11 am–6 pm. For more than five boxes of books, please call before coming in.</small></p><Link href="/visit">Hours, parking and directions →</Link></div>
      </div></div></section></>
  );
}
