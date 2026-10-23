import { BOOKS, POSTS, SITE } from '../lib/data';
export default function sitemap() {
  const pages = ['', '/shop', '/books', '/sell-books', '/appraisals', '/gift-certificates', '/reading-room', '/visit', '/faq', '/contact'];
  return [...pages.map((p) => ({ url: SITE.url + p })), ...BOOKS.map((b) => ({ url: `${SITE.url}/books/${b.slug}` })), ...POSTS.map((p) => ({ url: `${SITE.url}/reading-room/${p.slug}` }))];
}
