export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: 'Portable Cabins' | 'Container Spaces' | 'Prefabricated Structures' | 'Pre-Engineered Buildings' | 'Panels & Doors';
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  keyFeatures: string[];
  specifications: ProductSpecification[];
  applications: string[];
  standardSizes: string[];
  leadTime: string;
  insulationType: string;
  customizationOptions: string[];
  featured?: boolean;
}

export const sampleProducts: ProductItem[] = [
  {
    id: 'prod-01',
    slug: 'container-offices',
    name: 'Container Offices',
    category: 'Container Spaces',
    tagline: 'Rugged, rapid-deployment modern workspace solutions engineered from premium shipping containers.',
    shortDescription: 'Modern, fully furnished modular container offices designed for construction sites, remote operations, and corporate facility expansions.',
    fullDescription: 'AU Portable Solutions Container Offices combine high-tensile structural integrity with contemporary architectural design. Engineered using reinforced corten steel containers or bespoke prefabricated framing, these units arrive fully insulated, wired, and ready for immediate plug-and-play occupancy. Built to withstand extreme environmental conditions, they offer superior thermal comfort, acoustic dampening, and high aesthetic appeal.',
    image: '/images/container-office.jpg',
    gallery: [
      '/images/container-office.jpg',
      '/images/hero-banner.jpg',
      '/images/container-facade.jpg'
    ],
    keyFeatures: [
      'Heavy-duty corten steel / structural tube frame chassis',
      'High-density PUF or Rockwool wall & ceiling insulation',
      'Factory-fitted concealed electrical wiring with MCB protection & LED lighting',
      'Heavy-duty vinyl / marine-ply flooring with anti-skid overlay',
      'Powder-coated aluminium sliding windows with safety grill',
      'Pre-wired for air conditioning (split/window units)'
    ],
    specifications: [
      { label: 'Standard Dimensions', value: '20 ft x 8 ft x 8.5 ft / 40 ft x 8 ft x 8.5 ft (Customizable)' },
      { label: 'Structural Framework', value: 'Heavy structural steel profiles with anti-corrosive epoxy primer' },
      { label: 'Wall & Ceiling Insulation', value: '50mm / 80mm PUF sandwich panels (Density: 40±2 kg/m³)' },
      { label: 'Flooring System', value: '18mm marine grade ply with 1.5mm heavy-duty PVC vinyl finish' },
      { label: 'Doors', value: 'Insulated steel door with mortise lock and weather seal' },
      { label: 'Windows', value: 'Aluminium sliding windows with double glazed or float glass & mesh' },
      { label: 'Electricals', value: 'Fire-retardant copper wiring, LED fixtures, modular sockets, AC points' },
      { label: 'Exterior Paint', value: 'Two-coat marine epoxy primer + polyurethane weather-resistant topcoat' }
    ],
    applications: [
      'Construction & Infrastructure Project Offices',
      'Mining, Energy & Remote Site Basecamps',
      'Commercial Real Estate Sales Lounges',
      'Highway Toll & Industrial Plant Administration'
    ],
    standardSizes: ['10 ft x 8 ft', '20 ft x 8 ft', '30 ft x 10 ft', '40 ft x 10 ft', 'Multi-modular linked complexes'],
    leadTime: '7 - 14 working days',
    insulationType: 'Rigid Polyurethane Foam (PUF) / Rockwool',
    customizationOptions: ['Attached executive washroom', 'Pantry & kitchenette unit', 'Glass curtain wall facade', 'Smart climate control automation'],
    featured: true
  },
  {
    id: 'prod-02',
    slug: 'portable-office-cabins',
    name: 'Portable Office Cabins',
    category: 'Portable Cabins',
    tagline: 'Versatile, lightweight, and thermally optimized porta cabins for dynamic site operations.',
    shortDescription: 'Liftable, relocatable porta cabins manufactured with light steel frameworks and insulated sandwich panels for executive job-site comfort.',
    fullDescription: 'Our Portable Office Cabins provide a comfortable, climate-controlled working environment where permanent construction is impractical. Manufactured under rigorous factory conditions, each cabin features precision-cut structural members, tongue-and-groove insulated panels, and reliable lifting lugs for rapid relocation between project phases.',
    image: '/images/portable-cabin.jpg',
    gallery: [
      '/images/portable-cabin.jpg',
      '/images/container-office.jpg',
      '/images/peb-building.jpg'
    ],
    keyFeatures: [
      'Turnkey factory-manufactured assembly with integrated lifting hooks',
      'Excellent thermal insulation for hot summers and cold winters',
      'Maintenance-free pre-painted galvanized steel (PPGI) surfaces',
      'Modular layout adaptable for individual offices or shared teams',
      'Weather-tight sealing on all joints, doors, and window perimeters'
    ],
    specifications: [
      { label: 'Standard Dimensions', value: '16 ft x 8 ft / 20 ft x 10 ft / 24 ft x 10 ft' },
      { label: 'Wall Panels', value: '50mm thick EPS / PUF insulated sandwich panels' },
      { label: 'Roof System', value: 'Self-draining sloping roof with insulated core panels' },
      { label: 'Base Frame', value: 'Welded steel I-beam / C-channel skid chassis' },
      { label: 'Interior Walls', value: 'Pre-coated GI sheets or decorative laminated boards' },
      { label: 'Lifting Mechanism', value: 'Engineered 4-point top corner lifting lugs' }
    ],
    applications: [
      'Site Engineering Offices',
      'Supervisory & Field Management Cabins',
      'Temporary Administrative Stations',
      'Institutional & Utility Outposts'
    ],
    standardSizes: ['12 ft x 8 ft', '16 ft x 8 ft', '20 ft x 10 ft', '24 ft x 10 ft', 'Custom'],
    leadTime: '5 - 10 working days',
    insulationType: 'PUF / EPS Core Panels',
    customizationOptions: ['Integrated toilet & plumbing', 'Built-in workstations & cabinetry', 'Overhead sunshade canopies'],
    featured: true
  },
  {
    id: 'prod-03',
    slug: 'security-cabins',
    name: 'Security Cabins & Guard Rooms',
    category: 'Portable Cabins',
    tagline: '360-degree perimeter visibility, robust weather protection, and turnkey compactness.',
    shortDescription: 'Compact, durable security guard cabins with panoramic windows for access control, gated communities, and industrial facilities.',
    fullDescription: 'AU Portable Solutions Security Cabins are engineered to provide security personnel with safety, all-weather comfort, and uninterrupted 360-degree visibility. Constructed with high-strength steel tubing and thermal insulated wall panels, these cabins fit seamlessly into entry gates, factory checkpoints, parking plazas, and residential societies.',
    image: '/images/security-cabin.jpg',
    gallery: [
      '/images/security-cabin.jpg',
      '/images/portable-cabin.jpg'
    ],
    keyFeatures: [
      '3-sided or 4-sided large glazed windows for full vantage monitoring',
      'Integrated writing desk and electrical charging points',
      'Compact footprint suitable for tight entrances and sidewalks',
      'Pre-installed external lighting brackets and weather canopy',
      'High insulation value protecting against direct solar heat'
    ],
    specifications: [
      { label: 'Standard Dimensions', value: '4 ft x 4 ft, 6 ft x 4 ft, 6 ft x 6 ft, 8 ft x 8 ft' },
      { label: 'Wall Panels', value: '40mm / 50mm PUF / EPS insulated sandwich panels' },
      { label: 'Windows', value: 'Anodized aluminium sliding windows with clear float glass' },
      { label: 'Desk & Counter', value: 'Built-in wooden/steel writing ledge with drawer' },
      { label: 'Roof Projection', value: 'Overhanging weather canopy for rain and sun protection' }
    ],
    applications: [
      'Industrial Plant Gatehouses',
      'Gated Residential Communities & Commercial Towers',
      'Toll Plazas & Parking Facility Control',
      'Event Venues & Temporary Access Checkpoints'
    ],
    standardSizes: ['4 ft x 4 ft', '6 ft x 4 ft', '6 ft x 6 ft', '8 ft x 6 ft', '8 ft x 8 ft'],
    leadTime: '3 - 7 working days',
    insulationType: 'PUF / EPS Sandwich Panel',
    customizationOptions: ['Mounted CCTV bracket', 'Attached powder room', 'Bullet-resistant glazing options', 'Siren / PA system integration'],
    featured: true
  },
  {
    id: 'prod-04',
    slug: 'farmhouse-containers',
    name: 'Farmhouse Containers & Modular Cottages',
    category: 'Container Spaces',
    tagline: 'Modern luxury, sustainable architecture, and rapid deployment for weekend retreats.',
    shortDescription: 'Architecturally designed container cottages and farmhouse retreats featuring wooden aesthetics, expansive glass, and eco-friendly comfort.',
    fullDescription: 'Blending industrial resilience with contemporary resort aesthetics, our Farmhouse Containers provide rapid-assembly vacation homes, eco-tourism chalets, and private weekend retreats. Designed to sit lightly on agricultural or hilly terrain without requiring heavy concrete foundations, each cottage can be styled with wooden claddings, glass decks, and stylish interior finishes.',
    image: '/images/farmhouse-container.jpg',
    gallery: [
      '/images/farmhouse-container.jpg',
      '/images/container-facade.jpg',
      '/images/container-office.jpg'
    ],
    keyFeatures: [
      'Designer timber-composite or ACP exterior facade claddings',
      'Expansive floor-to-ceiling double-glazed aluminium sliding doors',
      'Complete luxury interior fittings including en-suite bathroom & kitchenette',
      'Fast placement on minimal pier footings, preserving natural landscape',
      'Acoustic and thermal insulation for whisper-quiet year-round relaxation'
    ],
    specifications: [
      { label: 'Standard Dimensions', value: '20 ft x 10 ft / 30 ft x 10 ft / 40 ft x 10 ft / Multi-unit T-shape or L-shape' },
      { label: 'Cladding Options', value: 'WPC fluted panels, charred timber look, or textured weathercoat' },
      { label: 'Insulation', value: '80mm Rockwool or PUF thermal barrier (Fire Rating: Class 1)' },
      { label: 'Interior Lining', value: 'Cement board / moisture-resistant gypsum with designer wallpaper/paint' },
      { label: 'Flooring', value: 'SPC luxury vinyl planks or vitrified tile look' }
    ],
    applications: [
      'Agricultural Land & Private Weekend Sanctuaries',
      'Eco-Resorts, Glamping Sites & Wellness Retreats',
      'Guest Cottages & Garden Studios',
      'Boutique Vineyard & Plantation Accommodations'
    ],
    standardSizes: ['20 ft x 10 ft (Studio)', '30 ft x 10 ft (1 BHK)', '40 ft x 12 ft (2 BHK Modular)'],
    leadTime: '14 - 25 working days',
    insulationType: 'High-density Rockwool / PUF',
    customizationOptions: ['Rooftop timber deck with staircase', 'Off-grid solar power package', 'Pergola & veranda extensions', 'Smart home automation'],
    featured: true
  },
  {
    id: 'prod-05',
    slug: 'staff-accommodation',
    name: 'Staff Accommodation & Labour Sheds',
    category: 'Portable Cabins',
    tagline: 'Hygienic, comfortable, and scalable workforce housing for high-productivity sites.',
    shortDescription: 'Heavy-duty bunkhouses, labour colonies, and engineer barracks designed for safety, thermal ease, and long-term durability in remote camps.',
    fullDescription: 'Providing proper living quarters for remote personnel is essential for workforce well-being and project milestones. AU Portable Solutions designs and fabricates modular staff accommodation units, bunkhouses, and low-cost mass housing tailored for large infrastructure projects, mining sites, and industrial complexes. Built to adhere to safety standards, they offer optimal ventilation, fire-safe panels, and easy maintenance.',
    image: '/images/staff-accommodation.jpg',
    gallery: [
      '/images/staff-accommodation.jpg',
      '/images/bunk-house.jpg',
      '/images/portable-cabin.jpg'
    ],
    keyFeatures: [
      'High-capacity bunk bed configurations with personal lockers',
      'Fire-safe insulation panels (Rockwool or flame-retardant EPS)',
      'Optimized cross-ventilation with mosquito mesh on all windows',
      'Washable, anti-microbial interior wall panel surfaces',
      'Integrated electrical distribution boards with earthing & safety trips'
    ],
    specifications: [
      { label: 'Capacity Options', value: '4-person, 8-person, 12-person or multi-room colony' },
      { label: 'Standard Dimensions', value: '20 ft x 10 ft / 30 ft x 10 ft / 40 ft x 10 ft' },
      { label: 'Insulation', value: '50mm PUF / 60mm EPS sandwich panels' },
      { label: 'Roofing', value: 'Trapezoidal profiled insulated sandwich roofing sheets' },
      { label: 'Sanitary Integration', value: 'Optional attached washroom modules with septic readiness' }
    ],
    applications: [
      'Large Infrastructure & Highway Construction Camps',
      'Mining, Oil & Gas Field Personnel Lodging',
      'Factory Worker Dormitories & Labour Sheds',
      'Disaster Relief & Temporary Humanitarian Shelters'
    ],
    standardSizes: ['20 ft x 10 ft (4 Bunks)', '30 ft x 10 ft (8 Bunks)', '40 ft x 10 ft (12 Bunks)'],
    leadTime: '7 - 14 working days',
    insulationType: 'PUF / EPS / Rockwool Fire-Rated',
    customizationOptions: ['Modular communal dining/mess hall', 'Attached communal shower/toilet blocks', 'Lockers & bunk bed packages'],
    featured: false
  },
  {
    id: 'prod-06',
    slug: 'prefabricated-structures',
    name: 'Prefabricated Structures',
    category: 'Prefabricated Structures',
    tagline: 'Rapid assembly, cost-effective, and engineered for large-scale institutional and commercial needs.',
    shortDescription: 'Turnkey prefab buildings including site canteens, clean rooms, schools, railway shelters, and solar inverter rooms.',
    fullDescription: 'Our Prefabricated Structures portfolio covers engineered light-gauge steel frame (LGSF) and modular column-beam buildings for institutional, commercial, and utility requirements. Fabricated with robotic precision in-house, these structures dramatically cut down on-site construction schedules while guaranteeing consistent dimensional accuracy and structural resilience.',
    image: '/images/prefab-structure.jpg',
    gallery: [
      '/images/prefab-structure.jpg',
      '/images/peb-building.jpg',
      '/images/manufacturing-plant.jpg'
    ],
    keyFeatures: [
      'Rapid dry construction eliminating curing delays and water dependencies',
      'Engineered for seismic and wind load tolerances',
      'Flexible architectural partitions and ceiling integrations',
      'Ideal for clean rooms, solar inverter shelters, and site canteens',
      'Significant reduction in foundation cost and environmental impact'
    ],
    specifications: [
      { label: 'Structure System', value: 'Light Gauge Steel Frame (LGSF) or tubular steel trusses' },
      { label: 'Span Capabilities', value: 'Clear spans from 6m to 18m without internal columns' },
      { label: 'Cladding & Roofing', value: 'Insulated sandwich panels or profile GI sheeting' },
      { label: 'Foundation Requirement', value: 'Simple concrete raft or pedestal footings' },
      { label: 'Lifespan', value: '25+ years with minimal scheduled maintenance' }
    ],
    applications: [
      'Prefab Canteens & Dining Halls',
      'Solar Inverter & Power Distribution Enclosures',
      'Railway & Transit Utility Shelters',
      'Clean Rooms & Acoustic Testing Enclosures',
      'Telecom & Military Camps'
    ],
    standardSizes: ['Custom engineered according to architectural layout plans'],
    leadTime: '14 - 30 working days',
    insulationType: 'PUF / Glasswool / Rockwool',
    customizationOptions: ['HVAC integration', 'Acoustic baffle ceilings', 'Fire sprinkler integration'],
    featured: true
  },
  {
    id: 'prod-07',
    slug: 'pre-engineered-buildings',
    name: 'Pre-Engineered Buildings (PEB)',
    category: 'Pre-Engineered Buildings',
    tagline: 'Heavy-duty steel span structures designed for logistics, factories, and industrial warehousing.',
    shortDescription: 'Large-span pre-engineered steel buildings with continuous H-beam welding, custom purlins, and premium insulated roofing systems.',
    fullDescription: 'AU Portable Solutions delivers high-performance Pre-Engineered Buildings (PEB) engineered for industrial sheds, logistics warehouses, aircraft hangars, and manufacturing plants. Utilizing continuous H-beam welding, CNC punching, and C/Z cold-formed purlins, our PEB solutions offer optimum strength-to-weight ratios, unobstructed floor spaces, and rapid on-site bolted assembly.',
    image: '/images/peb-building.jpg',
    gallery: [
      '/images/peb-building.jpg',
      '/images/prefab-structure.jpg',
      '/images/manufacturing-plant.jpg'
    ],
    keyFeatures: [
      'Engineered primary frames with high-tensile steel plate (Grade 345/355 MPa)',
      'Cold-formed Z and C purlins for secondary structural framing',
      'Large clear-span capabilities up to 60+ meters without intermediate columns',
      '100% bolted connections for rapid site erection and future expansion',
      'Integrated crane beam supports, ventilation louvers, and skylights'
    ],
    specifications: [
      { label: 'Primary Framing', value: 'Built-up I-sections and continuous welded H-beams' },
      { label: 'Secondary Framing', value: 'Galvanized cold-formed C & Z purlins and girts' },
      { label: 'Roof & Wall Sheeting', value: 'Bare Galvalume / pre-painted GI or PUF insulated panels' },
      { label: 'Design Codes', value: 'IS 800, IS 875 (Wind Loads), MBMA guidelines' },
      { label: 'Clear Height', value: '6m to 16m eaves height (Customizable)' }
    ],
    applications: [
      'Logistics & Warehousing Distribution Hubs',
      'Factory Buildings & Manufacturing Plants',
      'Aircraft Hangars & Rail Maintenance Workshops',
      'Agricultural & Poultry Sheds',
      'Auditoriums & Commercial Exhibition Centers'
    ],
    standardSizes: ['Engineered to custom building length, width, and eave height'],
    leadTime: '30 - 45 working days',
    insulationType: 'Roof PUF / Glasswool insulation under-deck',
    customizationOptions: ['Overhead EOT crane runway beams', 'Mezzanine floor systems', 'Continuous ridge ventilators', 'Canopy extensions'],
    featured: true
  },
  {
    id: 'prod-08',
    slug: 'container-cafes',
    name: 'Container Cafés & Marketing Offices',
    category: 'Container Spaces',
    tagline: 'Practicality meets contemporary design for India\'s dynamic retail and coffee culture.',
    shortDescription: 'Plug-and-play café containers and promotional retail booths equipped with service counters, electrical fittings, and weatherproof aesthetics.',
    fullDescription: 'Our café and marketing-office containers pair practicality with contemporary design, giving food brands, pop-up restaurants, and real estate developers an inviting space that fits modern consumer culture. Offering customized 10 ft to 20 ft configurations, each unit is built with food-grade internal linings, service counters, ample storage, and robust electrical connections to power heavy commercial appliances.',
    image: '/images/container-cafe.jpg',
    gallery: [
      '/images/container-cafe.jpg',
      '/images/farmhouse-container.jpg',
      '/images/container-office.jpg'
    ],
    keyFeatures: [
      'Hydraulic or manual flap serving windows with awning overhang',
      'Stainless steel / solid surface preparation counters and under-counter cabinetry',
      'Food-grade wipeable wall claddings and non-slip commercial flooring',
      'Pre-plumbed for espresso machines, sink basins, and wastewater outlets',
      'Warm architectural lighting, custom branding signages, and menu board provisions'
    ],
    specifications: [
      { label: 'Container Size', value: '10 ft x 8 ft / 15 ft x 8 ft / 20 ft x 8 ft' },
      { label: 'Serving Window', value: 'Pneumatic lift-up shutter with gas struts & folding service ledge' },
      { label: 'Internal Lining', value: 'SS-304 food-grade splashbacks & washable anti-bacterial panels' },
      { label: 'Plumbing', value: 'Fresh water pump inlet, dual SS sinks, grease trap ready' },
      { label: 'Electricals', value: 'Heavy 3-phase/single-phase wiring for commercial ovens & chillers' }
    ],
    applications: [
      'Specialty Coffee Kiosks & Quick Service Restaurants (QSR)',
      'Beachside, Hillstation & Highway Pop-up Eateries',
      'Real Estate Experience Centers & On-Site Marketing Lounges',
      'Exhibition & Event Merchandise Stores'
    ],
    standardSizes: ['10 ft x 8 ft (Compact Kiosk)', '20 ft x 8 ft (Full Service Café)', '20 ft x 16 ft (Double Module with Indoor Seating)'],
    leadTime: '10 - 20 working days',
    insulationType: '50mm High-density PUF',
    customizationOptions: ['Rooftop customer seating deck', 'Exterior timber slats & neon logo branding', 'Integrated exhaust hood with ducting'],
    featured: true
  },
  {
    id: 'prod-09',
    slug: 'sandwich-panels',
    name: 'Sandwich Panels (PUF, EPS, Rockwool)',
    category: 'Panels & Doors',
    tagline: 'High-thermal efficiency, acoustic damping, and lightweight insulated building panels.',
    shortDescription: 'Continuous-line manufactured sandwich panels in PUF, EPS, Rockwool, and Glasswool cores for cold storages, clean rooms, and prefab walls.',
    fullDescription: 'AU Portable Solutions supplies a comprehensive range of insulated sandwich panels engineered for maximum thermal insulation, acoustic barrier performance, and fire safety. Manufactured on automated continuous profiling lines with precision tongue-and-groove jointing, our panels minimize thermal bridges and drastically reduce operational heating and cooling expenses.',
    image: '/images/sandwich-panels.jpg',
    gallery: [
      '/images/sandwich-panels.jpg',
      '/images/manufacturing-plant.jpg',
      '/images/cutting-machine.jpg'
    ],
    keyFeatures: [
      'Available core choices: PUF (Polyurethane Foam), EPS, Rockwool, Glasswool',
      'Tongue and groove interlocking joints with concealed cam locks',
      'High structural strength-to-weight ratio allowing longer purlin spans',
      'Excellent acoustic damping and sound transmission reduction',
      'Corrosion-resistant PPGI, Aluminium, or Stainless Steel skin facings'
    ],
    specifications: [
      { label: 'Thickness Range', value: '40mm, 50mm, 60mm, 80mm, 100mm, 120mm, 150mm' },
      { label: 'Core Density (PUF)', value: '40 ± 2 kg/m³ with closed cell content > 90%' },
      { label: 'Skin Materials', value: '0.45mm – 0.6mm PPGI / PPGL / Stainless Steel (SS 304)' },
      { label: 'Panel Width', value: 'Standard 1000mm / 1150mm' },
      { label: 'Thermal Conductivity', value: '0.022 W/m.K (PUF) ensuring optimum thermal barrier' }
    ],
    applications: [
      'Cold Storage Facilities & Controlled Atmosphere Rooms',
      'Pharmaceutical Clean Rooms & Laboratories',
      'Prefabricated Cabin Walls & Industrial Roofs',
      'Acoustic Generator Enclosures & Telecom Shelters'
    ],
    standardSizes: ['Custom lengths up to 12 meters to eliminate horizontal joints'],
    leadTime: '3 - 7 working days',
    insulationType: 'PUF, EPS, Rockwool, Glasswool',
    customizationOptions: ['Food-grade antimicrobial coating', 'Micro-ribbed or flat surface profiles', 'Fire-rated rockwool cores up to 2 hours'],
    featured: false
  },
  {
    id: 'prod-10',
    slug: 'insulated-doors',
    name: 'Insulated Doors (Clean Room & Cold Room)',
    category: 'Panels & Doors',
    tagline: 'Precision engineered thermal sealing and hygiene-grade access doors.',
    shortDescription: 'Heavy-duty insulated aluminium, clean room, and cold room doors with polyurethane foam cores and airtight perimeter gaskets.',
    fullDescription: 'Our Insulated Doors are engineered for industrial, commercial, and temperature-controlled environments. From clean room single/double leaf swing doors with flush vision panels to heavy-duty cold room hinged overlap doors featuring heavy EPDM gaskets and European hardware, our doors prevent air leakage, thermal ingress, and contamination.',
    image: '/images/insulated-doors.jpg',
    gallery: [
      '/images/insulated-doors.jpg',
      '/images/sandwich-panels.jpg'
    ],
    keyFeatures: [
      'Single or double leaf configuration with heavy-duty European hinges',
      'Polyurethane foam injected core (60mm to 150mm for cold storage)',
      'Four-sided heavy-duty EPDM weather gaskets for absolute seal',
      'Flush vision glass integration for clean room safety observation',
      'Internal emergency safety release mechanism on cold room latches'
    ],
    specifications: [
      { label: 'Door Types', value: 'Aluminium Commercial, Clean Room Flush, Cold Room Overlap' },
      { label: 'Core Insulation', value: 'Polyurethane Foam (PUF) 40±2 kg/m³ / Rockwool / Honeycomb' },
      { label: 'Core Thicknesses', value: 'Cold Room: 60 / 80 / 100 / 120 / 150 mm; Clean Room: 40 / 50 mm' },
      { label: 'Frame Construction', value: 'Anodized aluminium or 3-side thermal-break PVC frame mounted to wall panels' },
      { label: 'Hardware', value: 'Heavy-duty hinges, handles, locks, overhead door closer, and SS kick plate' }
    ],
    applications: [
      'Cold Storages, Blast Freezers & Meat Processing Facilities',
      'Pharmaceutical Manufacturing Clean Rooms & Biotech Labs',
      'Hospitals, Operating Theatres & Pathology Labs',
      'Commercial Food Processing & Dairy Units'
    ],
    standardSizes: ['Standard sizes: 900x2100mm, 1200x2100mm, 1800x2100mm, plus custom architectural openings'],
    leadTime: '5 - 12 working days',
    insulationType: 'Injected PUF / Rockwool',
    customizationOptions: ['Automatic drop-down bottom door seal', 'Interlocking access control sensors', 'Heater wire on cold room frame to prevent freezing'],
    featured: false
  },
  {
    id: 'prod-11',
    slug: 'aluminium-glass-windows',
    name: 'Aluminium & Glass Windows',
    category: 'Panels & Doors',
    tagline: 'Smooth operation, weatherproof sealing, and customized glazing for modular spaces.',
    shortDescription: 'Industrial and commercial grade aluminium sliding windows, fixed architectural glazing, and clean/cold room viewing panels.',
    fullDescription: 'AU Portable Solutions supplies high-grade window assemblies designed specifically for integration with insulated sandwich panels and container wall cutouts. Featuring precision-extruded aluminium frames, smooth nylon roller tracks, and weather-sealed interlocking sashes, they ensure maximum natural daylight without compromising thermal performance.',
    image: '/images/windows.jpg',
    gallery: [
      '/images/windows.jpg',
      '/images/portable-cabin.jpg'
    ],
    keyFeatures: [
      'Available in Sliding Sashes, Fixed Glazing, and Clean Room Double Glass',
      'Durable powder-coated or anodized aluminium frames',
      'Heavy-duty insect mesh and integrated safety steel grill options',
      'EPDM rubber beading preventing water ingress during torrential rains'
    ],
    specifications: [
      { label: 'Window Types', value: 'Aluminium Sliding, Fixed Glazing, Clean & Cold Room Glass' },
      { label: 'Frame Material', value: 'Extruded Aluminium Alloy 6063-T6 (Powder Coated / Anodized)' },
      { label: 'Glass Specification', value: '5mm / 6mm Clear Float, Frosted, or Double Glazed Hermetically Sealed' },
      { label: 'Sealing', value: 'Co-extruded EPDM gaskets with silicone structural sealant' }
    ],
    applications: [
      'Site Offices & Portable Cabins',
      'Container Cafés & Display Showrooms',
      'Clean Rooms & Cold Storage Inspection Ports',
      'Industrial Control Booths'
    ],
    standardSizes: ['3 ft x 3 ft', '4 ft x 3 ft', '4 ft x 4 ft', 'Customized window cutouts'],
    leadTime: '3 - 7 working days',
    insulationType: 'Double Glazed Air Gap Option',
    customizationOptions: ['Tinted / reflective solar glass', 'Integrated venetian blinds between glass', 'High-security expanded metal mesh'],
    featured: false
  },
  {
    id: 'prod-12',
    slug: 'bunk-houses',
    name: 'Liftable Bunk Houses',
    category: 'Portable Cabins',
    tagline: 'Heavy-chassis, crane-liftable multi-person accommodations for rugged field sites.',
    shortDescription: 'Rigid steel-skid bunk houses engineered for frequent crane hoisting, truck transport, and rough remote terrain deployments.',
    fullDescription: 'Engineered for high mobility and intense field service, our Liftable Bunk Houses are equipped with heavy channel skids and certified corner lifting lugs. Widely chosen by construction contractors, drilling rigs, and railway contractors, these units provide complete thermal insulation, electrical distributions, and space-efficient furnishings.',
    image: '/images/bunk-house.jpg',
    gallery: [
      '/images/bunk-house.jpg',
      '/images/staff-accommodation.jpg',
      '/images/portable-cabin.jpg'
    ],
    keyFeatures: [
      'Structural steel skid base capable of multiple relocations without deformation',
      'Integrated heavy lifting lugs engineered for crane rigging',
      'High-grade PUF insulated walls and roof for extreme weather resistance',
      'Configurable with bunk beds, storage lockers, and washroom modules'
    ],
    specifications: [
      { label: 'Standard Dimensions', value: '20 ft x 8 ft / 30 ft x 10 ft / 40 ft x 10 ft' },
      { label: 'Skid Base', value: '150mm x 75mm heavy structural channel frame' },
      { label: 'Insulation', value: '50mm PUF sandwich panels' },
      { label: 'Flooring', value: '18mm cement fibre board with 2mm heavy-duty anti-skid PVC' }
    ],
    applications: [
      'Mining and Exploration Basecamps',
      'Pipeline and Highway Construction Crews',
      'Disaster Relief Rapid Response Teams'
    ],
    standardSizes: ['20 ft x 8 ft', '30 ft x 10 ft', '40 ft x 10 ft'],
    leadTime: '7 - 12 working days',
    insulationType: 'PUF Sandwich Panels',
    customizationOptions: ['Heavy-duty HVAC package', 'Integrated bunk beds with reading lamps', 'Anti-vandalism external window shutters'],
    featured: false
  }
];

export const productCategories = [
  'All Products',
  'Portable Cabins',
  'Container Spaces',
  'Prefabricated Structures',
  'Pre-Engineered Buildings',
  'Panels & Doors'
] as const;
