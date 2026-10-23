import Link from 'next/link';
import { notFound } from 'next/navigation';
import Banner from '../../../components/Banner';
import { POSTS } from '../../../lib/data';
import { cover } from '../../../lib/img';
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }) {
  const p = POSTS.find((x) => x.slug === params.slug);
  return p ? { title: `${p.title} by ${p.author}`, description: `The story behind ${p.title} by ${p.author}, from The Reading Room at The Dawn Treader Book Shop.`, alternates: { canonical: `/reading-room/${p.slug}` } } : {};
}
export default function Post({ params }) {
  const i = POSTS.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const p = POSTS[i];
  return (
    <>
      <Banner trail={[['/reading-room', 'The Reading Room']]} here={p.title} hue={p.hue} />
      <article><section><div className="w">
        <p className="k">The Reading Room · {p.date}</p><h1 style={{ fontSize: 'clamp(2.2rem,5vw,3.6rem)' }}>{p.title}</h1><p>by {p.author}</p>
        <img className="cvr" style={{ maxWidth: 300, margin: '1.5rem 0' }} alt={`Cover of ${p.title}`} src={cover(p)} />
        <div className="story-body">{p.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="ct">
          {p.bookSlug ? <Link className="btn" href={`/books/${p.bookSlug}`}>See this book</Link> : <span className="chip">Sold</span>}
          {i > 0 && <Link className="btn o" href={`/reading-room/${POSTS[i - 1].slug}`}>← Newer story</Link>}
          {i < POSTS.length - 1 && <Link className="btn o" href={`/reading-room/${POSTS[i + 1].slug}`}>Older story →</Link>}
        </div>
      </div></section></article>
    </>
  );
}
