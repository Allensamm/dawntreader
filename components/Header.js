import Link from 'next/link';
import NavLinks from './NavLinks';
export default function Header() {
  return (<header><div className="w"><Link className="br" href="/">The Dawn Treader Book Shop<small>Ann Arbor · Since 1976</small></Link><NavLinks /></div></header>);
}
