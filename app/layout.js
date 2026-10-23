import './globals.css';
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE } from '../lib/data';

const fh = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--fh', display: 'swap' });
const fb = Source_Sans_3({ subsets: ['latin'], weight: ['400', '600'], variable: '--fb', display: 'swap' });

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Rare & Antiquarian Books in Ann Arbor | The Dawn Treader Book Shop', template: '%s | Dawn Treader Book Shop' },
  description: 'Rare and antiquarian books, maps and prints from an Ann Arbor shop open since 1976. Browse online, sell your books for cash or trade, or visit 514 E Liberty St.',
  openGraph: { type: 'website', siteName: SITE.name, locale: 'en_US' },
};
const ld = {
  '@context': 'https://schema.org', '@type': 'BookStore', name: SITE.name, url: SITE.url, telephone: '+1-734-995-1008', email: SITE.email, foundingDate: '1976',
  address: { '@type': 'PostalAddress', streetAddress: '514 E Liberty St', addressLocality: 'Ann Arbor', addressRegion: 'MI', postalCode: '48104', addressCountry: 'US' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '11:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '11:00', closes: '18:00' },
  ],
  sameAs: [SITE.abe],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fh.variable} ${fb.variable}`}>
      <body>
        <noscript><style>{'.rv{opacity:1!important;transform:none!important}'}</style></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
