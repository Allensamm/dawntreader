import Link from 'next/link';
import { SITE } from '../lib/data';
export default function Footer() {
  return (
    <footer>
      <div className="w grid">
        <div><b>{SITE.name}</b><br />{SITE.addr[0]}<br />{SITE.addr[1]}<br /><a href={`tel:${SITE.tel}`}>{SITE.phone}</a><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
        <div><b>Shop</b><br /><Link href="/shop">Shop online</Link><br /><Link href="/books">Rare books</Link><br /><Link href="/gift-certificates">Gift certificates</Link><br /><a href={SITE.abe} rel="noopener">AbeBooks storefront</a></div>
        <div><b>Sell</b><br /><Link href="/sell-books">Sell your books</Link><br /><Link href="/appraisals">Appraisals</Link><br /><Link href="/faq">FAQ</Link></div>
        <div><b>The shop</b><br /><Link href="/reading-room">The Reading Room</Link><br /><Link href="/visit">Visit</Link><br /><Link href="/contact">Contact</Link><br /><Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link></div>
      </div>
      <div className="w footer-bottom"><p>Rare &amp; antiquarian books, maps and prints in Ann Arbor since 1976.</p><p>© {new Date().getFullYear()} The Dawn Treader Book Shop</p></div>
    </footer>
  );
}
