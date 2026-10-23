import Link from 'next/link';
import { art } from '../lib/images';

const bannerArt = {
  'Sell Your Books': 'sell',
  'Gift certificates': 'gift',
  'Visit': 'visit',
  'Shop': 'shop',
  'The Reading Room': 'story',
  'Rare Books': 'browse',
  'Appraisals': 'appraisals',
};

export default function Banner({ trail = [], here, hue = 200 }) {
  const source = bannerArt[here] || 'browse';
  return (
    <div className="ban" style={{ '--banner-hue': hue }}>
      <img alt="" src={art(source, { width: 1800, height: 560 })} />
      <div className="ban-wash" aria-hidden="true" />
      <div className="w crumb"><Link href="/">Home</Link>{trail.map(([h, l]) => <span key={h}> <i>›</i> <Link href={h}>{l}</Link></span>)} <i>›</i> <span>{here}</span></div>
    </div>
  );
}
