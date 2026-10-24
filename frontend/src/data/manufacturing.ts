export interface ManufacturingProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface EquipmentItem {
  name: string;
  functionDescription: string;
  category: 'Framing & Steel' | 'Panel Production' | 'Forming & Shaping' | 'Surface Treatment';
}

export const manufacturingSteps: ManufacturingProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Cutting',
    subtitle: 'High Precision CNC Sizing',
    description: 'Structural steel components, beams, and cold-rolled plates are cut to exact engineering blueprints using advanced CNC plasma and high-accuracy mechanical cutters, ensuring tight tolerances for subsequent welding.',
    details: [
      'High-definition CNC plasma cutting for heavy plates',
      'Minimal thermal distortion along cutting margins',
      'Strict dimensional verification before sub-assembly'
    ]
  },
  {
    stepNumber: '02',
    title: 'Shearing',
    subtitle: 'Accurate Sheet & Plate Preparation',
    description: 'High-tonnage hydraulic shearing machinery shears sheet metal and coil stock into cleanly squared wall skins, flashing sections, and gutter blanks with burr-free edges.',
    details: [
      'Hydraulic guillotine shearing with automatic blade gap setting',
      'Burr-free sheet edges ready for roll-forming or bending',
      'Zero distortion on pre-painted galvanized steel (PPGI)'
    ]
  },
  {
    stepNumber: '03',
    title: 'Bending',
    subtitle: 'Structural Cold-Forming & Press Braking',
    description: 'Heavy hydraulic press brakes and purlin roll-formers bend structural sections into C and Z purlins, base channels, corner posts, and customized architectural profiles.',
    details: [
      'Multi-axis CNC press braking for consistent angle repeatability',
      'C & Z purlin cold forming for robust building skeletons',
      'Reinforced corner pillar and base runner profiling'
    ]
  },
  {
    stepNumber: '04',
    title: 'Foaming',
    subtitle: 'Automated High-Density Core Injection',
    description: 'Utilizing specialized high-pressure Cannon foaming machinery, rigid polyurethane foam (PUF) is injected between pre-treated steel sheets to produce monolithic sandwich panels with uniform 40±2 kg/m³ density.',
    details: [
      'High-pressure Cannon metering and mixing dispensers',
      'Uniform 40±2 kg/m³ closed-cell core density across every panel',
      'Exceptional thermal insulation and acoustic barrier creation'
    ]
  },
  {
    stepNumber: '05',
    title: 'Finishing',
    subtitle: 'Sealing, Electrical, Painting & Quality Control',
    description: 'Cabins and modular sections undergo multi-coat epoxy priming and weather-resistant topcoats, followed by concealed conduit wiring, window/door fitment, silicone weather-sealing, and multi-point QA inspections.',
    details: [
      'Shot blasting and anti-corrosive epoxy primer application',
      'Concealed fire-retardant electrical wiring & testing',
      'Precision door, window, and seal installation with water-leak testing'
    ]
  },
  {
    stepNumber: '06',
    title: 'Dispatch',
    subtitle: 'Protective Packaging & Safe Transit',
    description: 'Finished modular units and disassembled PEB steel frameworks are securely shrink-wrapped, corner-protected, crane-lifted, and dispatched on flatbed trailers for nationwide deployment.',
    details: [
      'Protective transit wrapping to prevent scuffs and moisture ingress',
      'Engineered corner lifting lugs for crane-assisted loading',
      'Coordinated transport logistics direct to client project sites'
    ]
  }
];

export const manufacturingEquipment: EquipmentItem[] = [
  {
    name: 'Continuous H-Beam Welding Machine',
    functionDescription: 'Automated continuous submerged arc welding for fabricating heavy built-up primary frames in PEB structures.',
    category: 'Framing & Steel'
  },
  {
    name: 'CNC Plasma Cutting Machine',
    functionDescription: 'Computer-controlled high-speed plasma torch for clean profile cutting of heavy structural steel plates.',
    category: 'Framing & Steel'
  },
  {
    name: 'Continuous Sandwich Panel Machine',
    functionDescription: 'High-speed automated production line profiling, injecting, and curing insulated PUF and EPS panels.',
    category: 'Panel Production'
  },
  {
    name: 'Cannon Foaming Machine',
    functionDescription: 'Precision Italian-engineered high-pressure polyurethane foaming system ensuring uniform core density.',
    category: 'Panel Production'
  },
  {
    name: 'Hydraulic Shearing Machine',
    functionDescription: 'Heavy-duty hydraulic guillotine for clean, straight-edge cutting of sheet metal and plates.',
    category: 'Forming & Shaping'
  },
  {
    name: 'C/Z Purlin Machine',
    functionDescription: 'Continuous cold roll-former producing secondary structural purlins and girts with pre-punched hole patterns.',
    category: 'Framing & Steel'
  },
  {
    name: 'CNC Punching Machine',
    functionDescription: 'Precision multi-station turret punch press for accurate bolt holes, service openings, and connection brackets.',
    category: 'Forming & Shaping'
  },
  {
    name: 'LGSF (Light Gauge Steel Frame) Machine',
    functionDescription: 'Automated roll-forming system fabricating precision cold-formed steel studs and tracks for modular wall panels.',
    category: 'Framing & Steel'
  },
  {
    name: 'Roof Profile Machine',
    functionDescription: 'Roll forming line producing high-crested trapezoidal roofing sheets with weather-tight capillary grooves.',
    category: 'Forming & Shaping'
  },
  {
    name: 'Shot Blasting & Painting Facility',
    functionDescription: 'Surface preparation booth removing mill scale and rust followed by multi-coat protective industrial paint spraying.',
    category: 'Surface Treatment'
  }
];
