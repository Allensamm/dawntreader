// Editorial photography for the site. Each image is deliberately cropped per use
// so the visual system feels art-directed rather than like a collection of stock cards.
// These are remote Unsplash delivery URLs; replace the source IDs with commissioned
// Dawn Treader photography when it becomes available.
const sources = {
  library: 'photo-1507842217343-583bb7270b66',
  shelves: 'photo-1524995997946-a1c2e315a42f',
  volumes: 'photo-1526243741027-444d633d7365',
  study: 'photo-1481627834876-b7833e8f5570',
  bindings: 'photo-1543002588-bfa74002ed7e',
  letter: 'photo-1455390582262-044cdead277a',
  reading: 'photo-1495446815901-a7297e633e8d',
};

export const ART = {
  hero: sources.library,
  browse: sources.shelves,
  sell: sources.volumes,
  story: sources.study,
  shop: sources.bindings,
  request: sources.letter,
  gift: sources.reading,
  visit: sources.shelves,
  appraisals: sources.volumes,
};

export function art(source, { width = 1600, height = 1000, position = 'center' } = {}) {
  const id = ART[source] || source;
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=86&crop=entropy&fm=jpg&ixlib=rb-4.1.0&ixid=MnwxMjA3fDB8MHxzZWFyY2h8fHx8ZW58MHx8fDB8fHww&fp-x=${position}`;
}
