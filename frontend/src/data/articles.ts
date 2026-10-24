export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: 'Modular Construction' | 'Technical Guides' | 'Industry Trends' | 'Sustainability';
  readTime: string;
  date: string;
  author: string;
  summary: string;
  content: string[];
  image: string;
  isSampleArticle: boolean;
}

export const sampleArticles: ArticleItem[] = [
  {
    id: 'art-01',
    slug: 'advantages-of-prefabricated-modular-construction',
    title: '5 Reasons Industrial Projects are Switching to Modular Prefab Cabins',
    category: 'Modular Construction',
    readTime: '4 min read',
    date: 'Sample Publication',
    author: 'AU Engineering Editorial (Sample)',
    summary: 'Discover why leading developers and infrastructure teams are adopting factory-built modular cabins to slash timelines, curb waste, and ensure consistent thermal comfort.',
    content: [
      'Traditional on-site masonry and RCC construction for temporary facilities is plagued by weather delays, unpredictable contractor timelines, and high labor overhead.',
      'Factory-manufactured porta cabins and container offices are constructed inside controlled manufacturing environments. Structural frames are cut, welded, and painted while insulated sandwich panels are machine-assembled, ensuring strict quality benchmarks.',
      'Upon site delivery via flatbed truck, installation requires mere hours or days on simple pedestal footings. Once the project concludes, these units can be easily unhooked and relocated to the next site, preserving capital investment.'
    ],
    image: '/images/container-office.jpg',
    isSampleArticle: true
  },
  {
    id: 'art-02',
    slug: 'choosing-sandwich-panels-puf-rockwool-eps',
    title: 'Comparing Sandwich Panels: PUF vs. Rockwool vs. EPS for Extreme Climates',
    category: 'Technical Guides',
    readTime: '6 min read',
    date: 'Sample Publication',
    author: 'AU Engineering Editorial (Sample)',
    summary: 'A comprehensive technical comparison of Polyurethane Foam (PUF), Rockwool, and Expanded Polystyrene (EPS) cores to help you select the ideal panel for your project.',
    content: [
      'Choosing the right core insulation dictates thermal energy efficiency, fire safety compliance, and structural purlin spacing in modular buildings.',
      'Polyurethane Foam (PUF) offers the lowest thermal conductivity (~0.022 W/m.K), making it the gold standard for cold storages, deep freezers, and hot desert site offices.',
      'Rockwool (Mineral Wool) is inherently non-combustible with fire endurance ratings exceeding 2 hours, making it mandatory for hazardous industrial enclosures, battery rooms, and high-density workforce barracks.',
      'Expanded Polystyrene (EPS) provides an economical, lightweight barrier suitable for standard porta cabins and temporary living camps where budgets are tight.'
    ],
    image: '/images/sandwich-panels.jpg',
    isSampleArticle: true
  },
  {
    id: 'art-03',
    slug: 'container-cafes-and-pop-up-retail-spaces',
    title: 'Container Cafés & Pop-Up Retail: How Modular Architecture Empowers Food Brands',
    category: 'Industry Trends',
    readTime: '5 min read',
    date: 'Sample Publication',
    author: 'AU Engineering Editorial (Sample)',
    summary: 'Why shipping container cafés with hydraulic serving awnings and rooftop decks are becoming the preferred launchpad for specialty food and beverage entrepreneurs.',
    content: [
      'In today’s fast-moving retail market, securing high-street brick-and-mortar leases often involves onerous multi-year lock-ins and costly fit-outs.',
      'Container cafés offer a compact footprint (10 ft to 20 ft) paired with contemporary industrial aesthetics. Factory-fitted with food-grade stainless steel surfaces, heavy 3-phase wiring, and built-in plumbing, they arrive ready for kitchen equipment installation.',
      'With hydraulic lift-up awnings and optional rooftop customer seating, these modular structures stand out visually and can be relocated if zoning or foot-traffic patterns shift.'
    ],
    image: '/images/container-cafe.jpg',
    isSampleArticle: true
  },
  {
    id: 'art-04',
    slug: 'how-to-prepare-site-for-porta-cabin-delivery',
    title: 'How to Prepare Your Site for Smooth Porta Cabin & Container Delivery',
    category: 'Technical Guides',
    readTime: '5 min read',
    date: 'Sample Publication',
    author: 'AU Engineering Editorial (Sample)',
    summary: 'A step-by-step contractor checklist covering ground leveling, pedestal plinths, crane access clearances, and utility hookups.',
    content: [
      'Before your portable cabin or modular container arrives from the factory, smooth site preparation is the key to preventing delays during unloading and commissioning.',
      'First, ensure the ground is leveled and compacted. For standard porta cabins, concrete sleeper blocks or PCC pads beneath the corner skids are generally sufficient to prevent settling.',
      'Second, confirm road access clearances for 20 ft or 40 ft flatbed trailers, including overhead powerline clearances and turning radius. Ensure a mobile crane or heavy-duty forklift is positioned for safe rigging.'
    ],
    image: '/images/manufacturing-plant.jpg',
    isSampleArticle: true
  }
];

export const articleCategories = [
  'All Articles',
  'Modular Construction',
  'Technical Guides',
  'Industry Trends',
  'Sustainability'
] as const;
