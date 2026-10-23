export const SITE = { name: 'The Dawn Treader Book Shop', url: 'https://shop.dawntreaderbooks.com', phone: '(734) 995-1008', tel: '+17349951008', email: 'dawntreaderbooks@gmail.com', abe: 'https://www.abebooks.com/dawn-treader-bookshop-ann-arbor-mi/9543/sf', addr: ['514 E Liberty St', 'Ann Arbor, MI 48104'] };
export const slug = (t) => t.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const CATS = ['Fiction', 'Nonfiction', 'Poetry', 'Children’s', 'Graphic Novels', 'Maps and Prints', 'Collectibles'];

// These are editorial highlights, not a live inventory feed. Availability changes
// quickly; the detail pages direct a reader to the appropriate purchase path.
const B = [
  ['Fatal Interview: Sonnets', 'Edna St. Vincent Millay', 'Signed first edition, Harper and Brothers, 1931', 'Available online', 'Poetry', 350],
  ['Independence Day', 'Richard Ford', 'Advance reading copy, Alfred A. Knopf, 1995', 'Available online', 'Fiction', 200],
  ['The Bed Book', 'Sylvia Plath', 'First American edition, Harper & Row, 1976', 'Available online', 'Children’s', 25],
  ['Little Women', 'Louisa May Alcott', 'First thus, The John C. Winston Company, 1926', 'Available online', 'Children’s', 150],
  ['The Metamorphosis', 'Franz Kafka and Peter Kuper', 'Signed, Crown Publishers, 2003', 'Available online', 'Graphic Novels', 0],
  ['If Beale Street Could Talk', 'James Baldwin', 'First edition, The Dial Press, 1974', 'Available online', 'Fiction', 230],
  ['A Christmas Book: An Anthology for Moderns', 'D. B. Wyndham Lewis and G. C. Heseltine', 'First edition, J. M. Dent & Sons, Ltd., 1928', 'Available online', 'Collectibles', 90],
  ['Asimov’s Guide to Shakespeare', 'Isaac Asimov', 'First edition, Simon and Schuster, 1952', 'In the shop', 'Nonfiction', 300, true],
  ['Sisters of the Yam', 'bell hooks', 'First edition, Simon and Schuster, 1952', 'In the shop', 'Nonfiction', 330, true],
  ['You’re in Love, Charlie Brown', 'Charles M. Schulz', 'First edition, The World Publishing Company, 1968', 'Sold', 'Children’s', 45],
];

const BOOK_COPY = {
  'Fatal Interview: Sonnets': 'Millay’s seventh collection gathers sonnets of love, rupture and memory. This signed 1931 first edition is a bright entry point into one of the defining poetic voices of the Jazz Age.',
  'Independence Day': 'An advance reading copy of Richard Ford’s Pulitzer- and PEN/Faulkner-winning novel, following Frank Bascombe over one unsettled Fourth of July weekend.',
  'The Bed Book': 'A first American edition of Sylvia Plath’s imaginative children’s story, in which a bed is not simply furniture but the starting place for every kind of journey.',
  'Little Women': 'A 1926 edition of Alcott’s classic, illustrated by Clara Miller Burd—an artist whose work also appeared in the decorative arts and American stained glass.',
  'The Metamorphosis': 'Peter Kuper’s signed graphic interpretation of Kafka’s unsettling novella, rendered in a stark, high-contrast visual language that gives Gregor Samsa’s transformation fresh force.',
  'If Beale Street Could Talk': 'A first edition of Baldwin’s tender, unflinching novel about Tish, Fonny and the sustaining work of family love amid systemic injustice.',
  'A Christmas Book: An Anthology for Moderns': 'A 1928 first edition edited with Dominic Wyndham Lewis’s knowing, satirical eye—an offbeat holiday anthology for readers who prefer their traditions with a little bite.',
  'Asimov’s Guide to Shakespeare': 'Asimov’s unusual companion to Shakespeare approaches the plays through their historical, legendary and geographical settings rather than the familiar comedy-history-tragedy shelf.',
  'Sisters of the Yam': 'A foundational bell hooks work on healing, self-recovery, love and community, offered here as a first-edition copy for readers drawn to her enduring thought.',
  'You’re in Love, Charlie Brown': 'A first-edition tie-in to the 1967 Peanuts television special, centred on Charlie Brown’s summer-crush anxieties and the quiet strength of his friends.',
};

export const BOOKS = B.map(([title, author, edition, price, cat, hue, shopOnly]) => ({ title, author, edition, price, cat, hue, shopOnly: !!shopOnly, slug: slug(title), summary: BOOK_COPY[title] }));
const P = [
  ['Asimov’s Guide to Shakespeare', 'Isaac Asimov', 'July 27, 2026', 'In shop'], ['The Bed Book', 'Sylvia Plath', 'July 23, 2026', 'Buy online'],
  ['Independence Day', 'Richard Ford', 'July 4, 2026', 'Buy online'], ['Sisters of the Yam', 'bell hooks', 'June 16, 2026', 'In shop'],
  ['Fatal Interview: Sonnets', 'Edna St. Vincent Millay', 'April 23, 2026', 'Buy online'], ['Little Women', 'Louisa May Alcott', 'March 26, 2026', 'Buy online'],
  ['The Metamorphosis', 'Franz Kafka and Peter Kuper', 'March 18, 2026', 'Buy online'], ['You’re in Love, Charlie Brown', 'Charles M. Schulz', 'February 14, 2026', 'Sold'],
  ['If Beale Street Could Talk', 'James Baldwin', 'February 1, 2026', 'Buy online'], ['A Christmas Book: An Anthology for Moderns', 'D. B. Wyndham Lewis and G. C. Heseltine', 'December 24, 2025', 'Buy online'],
];
const POST_COPY = {
  'Asimov’s Guide to Shakespeare': [
    'Isaac Asimov is best known for speculative fiction, but this companion to Shakespeare reveals another pleasure of his work: making a vast subject feel navigable. The Guide began as a companion to the Signet Classic Shakespeare editions he kept close at hand.',
    'Rather than sorting plays into the standard comedies, histories and tragedies, Asimov traces the settings and source worlds behind them—Greek, Roman, Italian and English. It is not a conventional work of criticism; it is an energetic invitation to see the plays’ histories, myths and maps more clearly.',
  ],
  'The Bed Book': [
    'Written for her children, Sylvia Plath’s The Bed Book gives the ordinary piece of furniture an adventurous double life. A bed can travel, bounce, fly and hold the kind of imaginative world that children make for themselves at bedtime.',
    'That playfulness offers a useful counterpoint to the narrow version of Plath that often dominates memory of her. This first American edition is a small, bright reminder of her humour, her affection and the imaginative range of her writing.',
  ],
  'Independence Day': [
    'Richard Ford’s Independence Day returns to Frank Bascombe during a Fourth of July weekend that is supposed to be ordinary. Divorce, fatherhood, work and the stubbornness of the American dream make the days anything but simple.',
    'The novel became the first to receive both the Pulitzer Prize and the PEN/Faulkner Award for Fiction. This advance reading copy belongs to the long, attentive path a book takes before it reaches a reader’s shelf.',
  ],
  'Sisters of the Yam': [
    'In Sisters of the Yam, bell hooks writes with candour about trauma, healing, beauty, grief, addiction, work and passion. The result is both a work of witness and a practical meditation on the conditions that make self-recovery possible.',
    'The book sits naturally beside hooks’s wider writing on race, feminism, class and love. Her decision to write under her great-grandmother’s name keeps attention on the ideas—and on the long line of women whose lives made those ideas possible.',
  ],
  'Fatal Interview: Sonnets': [
    'Edna St. Vincent Millay’s Fatal Interview is a sequence of sonnets shaped by desire, loss and the unstable work of remembering. Its 1931 publication comes late enough in her career to show both the discipline and daring that made her a central literary figure.',
    'Millay’s public life was as vivid as her verse: performer, activist, prize-winning poet and Greenwich Village original. This signed first edition brings a little of that complicated, electric literary world close to hand.',
  ],
  'Little Women': [
    'Louisa May Alcott’s Little Women has endured because the March sisters feel both specific to their Civil War setting and perpetually recognisable. This 1926 edition adds a second story: the visual work of illustrator Clara Miller Burd.',
    'Burd worked across book illustration and the decorative arts, including stained glass. Her watercolours invite the reader to enter Alcott’s world through a distinctly early-twentieth-century visual imagination.',
  ],
  'The Metamorphosis': [
    'Peter Kuper’s signed adaptation of Kafka’s The Metamorphosis brings a graphic artist’s urgency to Gregor Samsa’s bewildering transformation. Black-and-white pages, sharpened by red, make the story’s absurdity feel immediate rather than distant.',
    'A hand-drawn illustration on the endpaper makes this copy especially engaging for collectors. It is a reminder that a later interpretation can become its own material object and its own route into a classic text.',
  ],
  'You’re in Love, Charlie Brown': [
    'This first-edition novelization grows out of the 1967 Peanuts television special. Charlie Brown’s crush on the little red-haired girl gives the book its comic, recognisable nervousness.',
    'Read closely, it is also a story about the friends already around him: Linus, Lucy, Peppermint Patty, Sally and Snoopy. The anxious hero may be looking for a single sign of affection, but his world is already full of small acts of care.',
  ],
  'If Beale Street Could Talk': [
    'James Baldwin’s fifth novel is at once an intimate love story and a clear-eyed account of the forces that press on a family. Tish and Fonny’s future is disrupted by a false accusation, while the people who love them work to hold one another close.',
    'Baldwin refuses an easy resolution. His attention to family, faith, racial injustice and desire makes the book feel both particular to its moment and continuously urgent for readers now.',
  ],
  'A Christmas Book: An Anthology for Moderns': [
    'Dominic Wyndham Lewis made a career out of wit, journalism and literary satire. In this 1928 anthology, he plays the grump only partly: the selection gently resists the most predictable pieces of seasonal nostalgia.',
    'The result is a holiday book with an appetite for the overlooked. It rewards a long winter afternoon and makes a fine gift for readers who prefer their traditions a little strange, funny and literary.',
  ],
};

export const POSTS = P.map(([title, author, date, status], i) => ({ title, author, date, status, hue: (i * 37) % 360, slug: slug(title), bookSlug: BOOKS.find((b) => b.title === title)?.slug || null, excerpt: BOOK_COPY[title], body: POST_COPY[title] }));
export const FAQ = [
  ['What kinds of books do you buy?', 'Books published between 1440 and 2024, in paperback or hardcover, except those that are moldy, bug- or rodent-eaten, or badly damaged.'],
  ['How fast will I get an offer?', 'Often as little as 15 minutes, and up to 24 hours depending on the number of books.'],
  ['Do you make house visits?', 'For about 10 or more boxes, or a whole lot, we typically travel within a 50-mile radius of Ann Arbor. Call or email photos of your bookcases.'],
  ['Do you ship worldwide?', 'Yes. Phone and email orders are mailed within 1 to 2 days.'],
  ['Where can I park?', 'Street parking out front is easiest 11 am–4 pm, Monday–Thursday. We can’t validate parking.'],
];
