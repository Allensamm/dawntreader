import Link from 'next/link';
export default function NotFound() {
  return (<section><div className="w"><h1>Page not found</h1><p style={{ marginTop: '1rem' }}>That page isn’t on our shelves.</p><Link className="btn" href="/">Back home</Link></div></section>);
}
