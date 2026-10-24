export interface ProjectItem {
  id: string;
  title: string;
  category: 'Offices & Commercial' | 'Retail & Cafés' | 'Industrial & Warehouses' | 'Remote Accommodations';
  scope: string;
  clientPlaceholder: string;
  locationPlaceholder: string;
  image: string;
  units: string;
  completionTimeline: string;
  description: string;
  highlights: string[];
  isSampleEntry: boolean;
}

export const sampleProjects: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'Multi-Storey Modular Site Office Complex',
    category: 'Offices & Commercial',
    scope: 'Double-decker container site office with conference room and executive cabins',
    clientPlaceholder: '[Commercial Infrastructure Client - To Be Confirmed]',
    locationPlaceholder: '[Regional Project Site / City]',
    image: '/images/container-office.jpg',
    units: '8 Modular Units (40 ft & 20 ft combined)',
    completionTimeline: '18 Days Deployment',
    description: 'A fully integrated multi-storey modular office engineered for high-density site management. Features thermal insulated PUF wall claddings, internal steel staircase, central air-conditioning ducting, and executive restroom modules.',
    highlights: ['Two-tier stacked layout', 'Concealed high-load electricals', 'Panoramic UV-tinted glass sashes'],
    isSampleEntry: true
  },
  {
    id: 'proj-02',
    title: 'Artisan Pop-Up Container Café & Outdoor Deck',
    category: 'Retail & Cafés',
    scope: 'Turnkey 20ft container café with hydraulic serving window and rooftop terrace',
    clientPlaceholder: '[Hospitality Brand Client - To Be Confirmed]',
    locationPlaceholder: '[Urban Commercial Hub / City]',
    image: '/images/container-cafe.jpg',
    units: '1 Custom Modified 20 ft High-Cube Container',
    completionTimeline: '12 Days Fabrication',
    description: 'Contemporary container café engineered with SS-304 food-grade preparation surfaces, concealed plumbing with grease trap readiness, automated hydraulic awnings, and a weather-resistant rooftop timber deck.',
    highlights: ['Pneumatic canopy awning', 'Food-grade stainless steel interior', 'Rooftop customer seating'],
    isSampleEntry: true
  },
  {
    id: 'proj-03',
    title: 'Pre-Engineered Logistics Warehouse & Distribution Shed',
    category: 'Industrial & Warehouses',
    scope: 'Clear-span industrial steel shed with continuous H-beams and PUF roof panels',
    clientPlaceholder: '[Logistics & Supply Chain Client - To Be Confirmed]',
    locationPlaceholder: '[Industrial Corridor / City]',
    image: '/images/peb-building.jpg',
    units: '35,000 Sq. Ft. Clear-Span PEB Structure',
    completionTimeline: '45 Days On-Site Erection',
    description: 'Large-scale pre-engineered building utilizing continuous welded H-beams and cold-formed Z purlins. Built with insulated roof and wall panels to reduce interior temperatures by up to 8°C under direct sunlight.',
    highlights: ['Zero internal obstruction span', 'Overhead crane bracket provisions', 'Natural daylight skylight strips'],
    isSampleEntry: true
  },
  {
    id: 'proj-04',
    title: 'Remote Workforce Accommodation Colony',
    category: 'Remote Accommodations',
    scope: 'Turnkey living barracks, sanitary modules, and mess canteen for field personnel',
    clientPlaceholder: '[Energy / Mining Enterprise - To Be Confirmed]',
    locationPlaceholder: '[Remote Operations Site]',
    image: '/images/staff-accommodation.jpg',
    units: '16 Bunkhouse Cabins + 2 Dining Modules',
    completionTimeline: '21 Days Turnkey Supply',
    description: 'Engineered workforce accommodation designed for severe weather conditions. Each cabin is equipped with Class-1 fire-rated insulated wall panels, cross-ventilation mosquito screens, and heavy-duty electrical distributions.',
    highlights: ['Rigid channel skid bases', 'Rapid plug-and-play sanitary hookups', 'Flame-retardant wall cores'],
    isSampleEntry: true
  },
  {
    id: 'proj-05',
    title: 'Highway Toll Plaza & Security Control Outposts',
    category: 'Offices & Commercial',
    scope: 'Compact all-weather security booths with 360-degree perimeter visibility',
    clientPlaceholder: '[Infrastructure Concessionaire - To Be Confirmed]',
    locationPlaceholder: '[National Express Highway]',
    image: '/images/security-cabin.jpg',
    units: '12 Guard & Toll Cabins',
    completionTimeline: '10 Days Turnkey Supply',
    description: 'Heavy-gauge steel cabins designed for 24/7 highway operations. Features all-around toughened safety glass windows, built-in communication consoles, and weather overhang canopies.',
    highlights: ['360° visual monitoring', 'Overhanging rain/sun canopy', 'Pre-wired surveillance conduits'],
    isSampleEntry: true
  },
  {
    id: 'proj-06',
    title: 'Luxury Modular Farmhouse Retreat Cottage',
    category: 'Offices & Commercial',
    scope: 'Eco-friendly weekend villa container with composite wood cladding and glass deck',
    clientPlaceholder: '[Private Residential Client - To Be Confirmed]',
    locationPlaceholder: '[Country Hills / Estate]',
    image: '/images/farmhouse-container.jpg',
    units: '2 Linked 30 ft Modular Cottages',
    completionTimeline: '20 Days Turnkey Supply',
    description: 'A sustainable modular sanctuary blending modern architectural lines with natural surroundings. Built on minimal foundation piers to protect tree roots and topography, offering high acoustic isolation.',
    highlights: ['Wood-plastic composite cladding', 'Floor-to-ceiling glass patio sliders', 'Off-grid solar ready'],
    isSampleEntry: true
  }
];

export const projectCategories = [
  'All Projects',
  'Offices & Commercial',
  'Retail & Cafés',
  'Industrial & Warehouses',
  'Remote Accommodations'
] as const;

export interface MajorOrderSample {
  no: number;
  client: string;
  requirement: string;
  qty: string;
  location: string;
  status: 'Sample Entry / Executed' | 'Sample Entry / In Progress';
}

export const sampleMajorOrders: MajorOrderSample[] = [
  { no: 1, client: '[Client Name 1 - To Be Confirmed]', requirement: 'Porta Site Office Cabins (20x10 ft)', qty: '08 Nos', location: '[Site Location 1]', status: 'Sample Entry / Executed' },
  { no: 2, client: '[Client Name 2 - To Be Confirmed]', requirement: 'Pre-Engineered Factory Shed', qty: '18,000 sq ft', location: '[Site Location 2]', status: 'Sample Entry / Executed' },
  { no: 3, client: '[Client Name 3 - To Be Confirmed]', requirement: 'Staff Accommodation Bunkhouses', qty: '12 Nos', location: '[Site Location 3]', status: 'Sample Entry / Executed' },
  { no: 4, client: '[Client Name 4 - To Be Confirmed]', requirement: 'Container Cafés & Marketing Outlets', qty: '04 Nos', location: '[Site Location 4]', status: 'Sample Entry / Executed' },
  { no: 5, client: '[Client Name 5 - To Be Confirmed]', requirement: 'Security Guard Cabins', qty: '15 Nos', location: '[Site Location 5]', status: 'Sample Entry / Executed' },
  { no: 6, client: '[Client Name 6 - To Be Confirmed]', requirement: 'PUF Insulated Cold Room Panels', qty: '4,500 sq m', location: '[Site Location 6]', status: 'Sample Entry / In Progress' },
  { no: 7, client: '[Client Name 7 - To Be Confirmed]', requirement: 'LGSF Modular School & Clinic Modules', qty: '06 Nos', location: '[Site Location 7]', status: 'Sample Entry / In Progress' },
  { no: 8, client: '[Client Name 8 - To Be Confirmed]', requirement: 'Liftable Porta Cabins for Mining Camps', qty: '10 Nos', location: '[Site Location 8]', status: 'Sample Entry / In Progress' },
];
