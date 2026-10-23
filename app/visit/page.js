import Link from 'next/link';
import Banner from '../../components/Banner';
import Reveal from '../../components/Reveal';
import OpenNow from '../../components/OpenNow';
import { art } from '../../lib/images';
import { SITE } from '../../lib/data';
export const metadata = { title: 'Visit Dawn Treader Book Shop, 514 E Liberty St, Ann Arbor', description: 'Open Monday to Saturday 11 am to 8 pm and Sunday 11 am to 6 pm at 514 E Liberty St, Ann Arbor, MI 48104. Call (734) 995-1008.', alternates: { canonical: '/visit' } };
export default function Visit() {
  return (
    <>
      <Banner here="Visit" hue={280} />
      <section><div className="w">
        <p className="k">Come in and browse</p><h1>Visit the shop at 514 E Liberty St, Ann Arbor.</h1><p style={{ marginTop: '1rem', fontSize: '1.15rem' }}>Dawn Treader is the kind of bookshop that rewards an unhurried afternoon. Come with a title in mind, or come with none at all—the shelves have a way of introducing themselves.</p>
        <div className="grid" style={{ marginTop: '2rem' }}>
          <Reveal className="card"><h3>Hours</h3><p>Monday–Saturday: 11 am–8 pm<br />Sunday: 11 am–6 pm</p><p style={{ color: 'var(--gt)', fontWeight: 600 }}><OpenNow /></p></Reveal>
          <Reveal className="card"><h3>Find us</h3><p>{SITE.addr[0]}<br />{SITE.addr[1]}</p><a className="btn" href="https://maps.google.com/?q=514+E+Liberty+St+Ann+Arbor+MI+48104" rel="noopener">Open in Maps</a></Reveal>
          <Reveal className="card"><h3>Talk to us</h3><p><a href={`tel:${SITE.tel}`}>{SITE.phone}</a><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p><p><small>Parking out front is easiest 11 am–4 pm, Monday–Thursday. Friday and Saturday are our busiest days.</small></p><Link href="/contact">Send a message →</Link></Reveal>
        </div>
      </div></section>
      <section className="alt"><div className="w">
        <div className="visit-image"><img loading="lazy" alt="Tall book-lined shelves inside an independent bookshop" src={art('visit', { width: 1800, height: 720 })} /><span>Leave time to browse.</span></div>
        <div className="visit-practical"><div><p className="k">When to come</p><h3>For an easier arrival</h3><p>Street parking out front is usually simplest Monday through Thursday, between 11 am and 4 pm. Fridays and Saturdays are our busiest times.</p></div><div><p className="k">Bringing books?</p><h3>Give us a heads-up</h3><p>Walk-ins are welcome, but if you are bringing more than five boxes, please call ahead. We can supply a handcart and may be able to help unload.</p></div><div><p className="k">Looking for one title?</p><h3>Ask at the counter</h3><p>With more than 70,000 titles in the shop, a quick conversation can be the fastest route to the right shelf.</p></div></div>
        <h2>Our story</h2>
        <div className="grid">
          <Reveal className="card"><b className="k">1976</b><p>Bill Gillmore founds the shop as a tiny basement store.</p></Reveal>
          <Reveal className="card"><b className="k">Growing</b><p>It grows into a spacious storefront with more than 70,000 titles.</p></Reveal>
          <Reveal className="card"><b className="k">June 2022</b><p>Manager Africa Schaumann buys the shop. Her expertise is rare and antiquarian books, with training in conservation and preservation.</p></Reveal>
        </div>
      </div></section>
    </>
  );
}
