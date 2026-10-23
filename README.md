# The Dawn Treader Book Shop: Next.js redesign

Next.js 14 (App Router), plain JavaScript, no database. Run it:

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## What is where
- `app/`: every route (`/`, `/shop`, `/books`, `/books/[slug]`, `/sell-books`, `/appraisals`, `/gift-certificates`, `/reading-room`, `/reading-room/[slug]`, `/visit`, `/faq`, `/contact`, `/thanks`, `/privacy`, `/terms`), plus `sitemap.js`, `robots.js` and `api/img` (placeholder images).
- `lib/data.js`: all books, stories, FAQ and contact facts. Edit here, pages update.
- `lib/img.js`: **swap images here.** Return real URLs (files in `/public` or https links) instead of `/api/img` placeholders. If you use https links with `next/image`, allow the host in `next.config.js`.
- `app/globals.css`: tokens (colors, dark mode), layout and motion. Motion uses CSS plus IntersectionObserver, no libraries, and respects reduced motion.

## Placeholders to replace
Prices, the three "Sample" listings, Lorem ipsum story bodies, Privacy and Terms text, all images. Forms submit to `/thanks`; wire them to a form service. Gift certificate buttons also go to `/thanks`; wire to PayPal or a store.

## Why these pages
Five main pages, each with one visitor intent and one action: Home (route), Shop (buy), Sell Your Books (acquire), The Reading Room (authority and return visits), Visit (local trust). Not four: the live site makes Home double as About and has no address/hours page. Not six: Appraisals and Gift Certificates would be thin pages competing with their parents, so they are secondary pages linked in context, and Search Console should decide which earn a nav slot. Catalog, book, story, FAQ, contact and legal pages are templates or utilities.

## SEO built in
Unique title, description, canonical and one H1 per page; keyword slugs (redirect the old `?page_id=` URLs with 301s); BookStore JSON-LD in `app/layout.js`; sitemap and robots; descriptive alt text; pinch-zoom allowed; fonts via `next/font`.

## Confirm with the shop
Which buy list is current, what "Donate my books" covers, edition data for the Asimov and bell hooks stories (the live site shows the same publisher and year for both), whether the site stays on the `shop.` subdomain, and real photos.
