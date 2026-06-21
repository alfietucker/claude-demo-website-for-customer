export const SITE = {
  name: "Apex Roofing Perth",
  phone: "(08) 6555 1234",
  phoneHref: "tel:+61865551234",
  email: "quotes@apexroofingperth.com.au",
  address: "Perth, Western Australia",
  hours: "Mon–Sat 7am–6pm · 24/7 Emergency",
  rating: 4.9,
  reviewCount: 287,
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  hero: string;
  problems: string[];
  process: { step: string; detail: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "roof-repairs-perth",
    title: "Roof Repairs Perth",
    short: "Fast, reliable roof repairs for tile and metal roofs across Perth — fixed right the first time.",
    hero: "Cracked tiles, lifted ridge caps, leaking flashings and rusted valleys are the most common roofing problems we see across Perth homes. Left alone, a small repair becomes a ceiling collapse. Our local team responds quickly, diagnoses the real cause, and finishes the job cleanly so you can stop worrying about the next storm.",
    problems: [
      "Cracked or slipped tiles letting water into the roof cavity",
      "Lifted or weathered ridge capping and bedding",
      "Rusted valleys, gutters and flashings",
      "Sagging or damaged sarking",
      "Storm damage and broken tiles after Perth squalls",
    ],
    process: [
      { step: "Free on-site inspection", detail: "We climb the roof, photograph every issue, and explain it in plain English." },
      { step: "Fixed-price quote", detail: "No hidden extras. Your written quote covers materials, labour and clean-up." },
      { step: "Quality repair", detail: "Licensed roofers complete the work using premium Australian-made materials." },
      { step: "Workmanship warranty", detail: "Every repair is backed by our written workmanship warranty." },
    ],
    benefits: [
      "Same-week response across the Perth metro area",
      "Licensed, insured and locally owned",
      "Premium Colorbond and Bristile-grade materials",
      "Workmanship warranty in writing",
    ],
    faqs: [
      { q: "How much does a roof repair cost in Perth?", a: "Small repairs typically start from $350. After a free inspection, we provide a fixed written quote so you know exactly what you'll pay." },
      { q: "How quickly can you get to me?", a: "Most repairs are inspected within 48 hours. For active leaks we offer same-day emergency callouts." },
      { q: "Do you repair both tile and metal roofs?", a: "Yes — our team is fully trained on concrete tile, terracotta, Colorbond and Zincalume roof systems." },
    ],
  },
  {
    slug: "roof-restoration-perth",
    title: "Roof Restoration Perth",
    short: "Bring tired Perth roofs back to life with a full restoration — clean, repair, re-bed, re-point and re-coat.",
    hero: "A full roof restoration extends the life of your roof by 10–15 years for a fraction of the cost of replacement. We high-pressure clean, replace broken tiles, re-bed and re-point ridge caps, then apply premium membrane coatings designed for the harsh WA sun.",
    problems: [
      "Faded, chalky or moss-covered tiles",
      "Cracked bedding and pointing on ridge caps",
      "Surface rust on Colorbond sheets",
      "Reduced thermal performance and higher cooling bills",
    ],
    process: [
      { step: "Inspection & report", detail: "We document the current condition with photos and a full scope of works." },
      { step: "High-pressure clean", detail: "Decades of dirt, lichen and oxidisation are stripped back to clean surface." },
      { step: "Repairs & re-bedding", detail: "Broken tiles replaced, ridge caps re-bedded and flexible re-pointing applied." },
      { step: "Premium membrane coating", detail: "Three coats of UV-stable Australian-made membrane finish the job." },
    ],
    benefits: [
      "Extends roof life by 10–15 years",
      "Improves street appeal and resale value",
      "Heat-reflective coatings reduce cooling costs",
      "10-year product warranty on coatings",
    ],
    faqs: [
      { q: "How long does a roof restoration take?", a: "Most Perth homes are restored within 3–5 working days, weather permitting." },
      { q: "Will it really last 10+ years?", a: "Yes — when prepared properly and coated with a premium membrane system, a restored roof routinely lasts 10–15 years before its next service." },
      { q: "Can you match my existing tile colour?", a: "We carry a wide colour range and can tint membrane to match heritage and modern profiles." },
    ],
  },
  {
    slug: "roof-replacement-perth",
    title: "Roof Replacement Perth",
    short: "Full roof replacement using premium Colorbond, Zincalume and tile systems — built to last in WA conditions.",
    hero: "When repair is no longer viable, a full replacement is the safest long-term choice. We strip the old roof, upgrade insulation and sarking, then install your new roof to Australian Standards using premium materials guaranteed for decades.",
    problems: [
      "Roofs over 40 years old with widespread leaks",
      "Severe rust through Zincalume or galvanised sheets",
      "Major storm or fire damage",
      "Renovations or second-storey additions",
    ],
    process: [
      { step: "Detailed scope & quote", detail: "Measure, design and price your replacement with a fixed written quote." },
      { step: "Old roof removal", detail: "Safe strip-down and removal of old materials with full site protection." },
      { step: "Structural & insulation upgrade", detail: "Battens checked, sarking and insulation upgraded for energy performance." },
      { step: "New roof installation", detail: "Premium Colorbond or tile system installed to Australian Standards." },
    ],
    benefits: [
      "50-year manufacturer warranty on Colorbond",
      "Upgraded insulation included",
      "Engineered for cyclonic wind ratings",
      "Full clean-up and site rectification",
    ],
    faqs: [
      { q: "How long does a roof replacement take?", a: "A typical Perth home is replaced in 5–10 working days." },
      { q: "Do you handle insurance claims?", a: "Yes — we prepare reports, photos and quotes that insurers accept." },
      { q: "Can I stay in the house during replacement?", a: "Yes. The interior remains sealed at all times and work is timed around your day." },
    ],
  },
  {
    slug: "re-roofing-perth",
    title: "Re-Roofing Perth",
    short: "Replace tile with Colorbond, or upgrade old metal to a modern profile — re-roofing done right.",
    hero: "Re-roofing is the fastest way to modernise your home, cut cooling costs and remove the worry of ongoing leaks. We specialise in tile-to-Colorbond conversions, a popular upgrade across Perth's older suburbs.",
    problems: [
      "Heavy old tile roofs straining the structure",
      "Constant tile breakages and leaks",
      "Outdated colour or profile reducing kerb appeal",
      "Poor thermal performance",
    ],
    process: [
      { step: "Engineering check", detail: "We verify the structure for the new lightweight metal load." },
      { step: "Strip & dispose", detail: "Old tiles removed, sorted and recycled where possible." },
      { step: "Sarking & batten upgrade", detail: "New thermal sarking and battens to current Australian Standards." },
      { step: "Colorbond install", detail: "Your chosen Colorbond profile installed, sealed and flashed." },
    ],
    benefits: [
      "Up to 80% lighter than tile",
      "22 modern Colorbond colours",
      "Lower cooling costs",
      "Lifetime durability",
    ],
    faqs: [
      { q: "Is tile-to-metal re-roofing expensive?", a: "It costs less than you'd expect and adds significant resale value. We provide fixed pricing after a site visit." },
      { q: "Will the home be exposed during works?", a: "We work in stages and tarp at the end of each day so your home is always weather-tight." },
      { q: "Which Colorbond colour is most popular?", a: "Monument, Basalt, Surfmist and Woodland Grey are the top sellers across Perth." },
    ],
  },
  {
    slug: "metal-roofing-perth",
    title: "Metal Roofing Perth",
    short: "Premium Colorbond and Zincalume metal roofing for Perth homes and businesses.",
    hero: "Metal roofing is now the standard across Western Australia for good reason — it's lightweight, durable, energy-efficient and beautiful. We install the full Colorbond range with workmanship that's built to outlast the warranty.",
    problems: [
      "Old corroded Zincalume sheets",
      "Poor flashings causing leaks",
      "Inefficient insulation under metal",
      "Storm-damaged sheets and ridges",
    ],
    process: [
      { step: "Design & colour selection", detail: "Choose profile and colour with samples on-site." },
      { step: "Premium materials ordered", detail: "Genuine Colorbond steel delivered direct from BlueScope." },
      { step: "Precision installation", detail: "Sheets laid, fixed and sealed to Australian Standards." },
      { step: "Final inspection", detail: "Every fixing, flashing and seal checked before sign-off." },
    ],
    benefits: [
      "Up to 50-year manufacturer warranty",
      "Fire-resistant and termite-proof",
      "Heat-reflective Thermatech® technology",
      "100% recyclable",
    ],
    faqs: [
      { q: "Is metal roofing noisy in the rain?", a: "With modern sarking and insulation, you'll barely notice it — it's no louder than a tile roof." },
      { q: "Will it rust?", a: "Genuine Colorbond carries a 36-year perforation warranty against corrosion when correctly installed." },
      { q: "Which profile is best for Perth?", a: "Trimdek and Kliplok are the most popular — we'll recommend based on your roof pitch and design." },
    ],
  },
  {
    slug: "tile-roofing-perth",
    title: "Tile Roofing Perth",
    short: "Concrete and terracotta tile roofing, repairs and restorations for classic Perth homes.",
    hero: "Tile roofs remain a Perth favourite for their timeless look and excellent thermal mass. We install, repair and restore both concrete and terracotta tile systems with the craftsmanship traditional rooflines deserve.",
    problems: [
      "Slipped, cracked or broken tiles",
      "Failed bedding and pointing on ridges",
      "Moss, lichen and algae growth",
      "Failed sarking allowing leaks",
    ],
    process: [
      { step: "Roof assessment", detail: "Identify every issue with full photo documentation." },
      { step: "Tile replacement", detail: "Source matching tiles or upgrade to a new profile." },
      { step: "Re-bed & re-point", detail: "Flexible pointing prevents future cracking." },
      { step: "Optional restoration", detail: "Add membrane coating for a like-new finish." },
    ],
    benefits: [
      "Excellent thermal mass keeps homes cool",
      "Heritage-correct for older Perth suburbs",
      "Long lifespan with proper maintenance",
      "Wide colour and profile selection",
    ],
    faqs: [
      { q: "Can broken tiles be replaced individually?", a: "Yes — we keep a wide stock of common Perth tile profiles." },
      { q: "What's flexible pointing?", a: "Modern pointing compounds flex with temperature changes, so they don't crack like old cement bedding." },
      { q: "How often should tile roofs be serviced?", a: "Every 10–15 years is a good interval for a full inspection and restoration." },
    ],
  },
  {
    slug: "commercial-roofing-perth",
    title: "Commercial Roofing Perth",
    short: "Commercial roofing for warehouses, strata, retail and industrial properties across Perth.",
    hero: "We work with property managers, strata committees, builders and business owners across Perth to deliver commercial roofing projects on time, on budget and with zero disruption to operations.",
    problems: [
      "Leaks impacting tenant operations",
      "Failing box gutters and downpipes",
      "Rusted industrial metal sheets",
      "Compliance and asbestos concerns",
    ],
    process: [
      { step: "Site assessment", detail: "Drone survey and full condition report." },
      { step: "Scope & compliance", detail: "Detailed specification meeting AS1562 and WHS requirements." },
      { step: "Programmed works", detail: "Staged works to keep your business operating." },
      { step: "Hand-over pack", detail: "Photos, warranties and maintenance schedule provided." },
    ],
    benefits: [
      "Public liability to $20M",
      "Drone inspections and detailed reports",
      "Out-of-hours work available",
      "Trusted by Perth strata managers",
    ],
    faqs: [
      { q: "Do you handle asbestos roofs?", a: "Yes — we work with licensed asbestos removalists for safe removal and replacement." },
      { q: "Can you work after hours?", a: "Yes. We frequently schedule weekend and night works to avoid trading disruption." },
      { q: "Do you provide maintenance contracts?", a: "We offer annual inspection and maintenance plans tailored to your property." },
    ],
  },
  {
    slug: "roof-leak-repairs-perth",
    title: "Roof Leak Repairs Perth",
    short: "Stop the leak today — fast, accurate roof leak detection and repair across Perth.",
    hero: "Roof leaks rarely come from where the water shows up on the ceiling. Our team uses experience, moisture mapping and physical inspection to find the true source first time — then fix it properly.",
    problems: [
      "Brown ceiling stains and bubbling paint",
      "Water dripping through downlights",
      "Damp smells in the roof cavity",
      "Leaks only during heavy or wind-driven rain",
    ],
    process: [
      { step: "Leak detection", detail: "Inspect roof, ceiling and cavity to trace the true source." },
      { step: "Temporary make-safe", detail: "Stop active leaks immediately to protect your interior." },
      { step: "Permanent repair", detail: "Replace failed components and re-flash properly." },
      { step: "Leak test", detail: "Hose test the repair before sign-off." },
    ],
    benefits: [
      "Same-day emergency response",
      "Workmanship warranty on every repair",
      "Insurance reports provided",
      "Honest pricing — no fear tactics",
    ],
    faqs: [
      { q: "Why does my roof leak only in heavy rain?", a: "Wind-driven rain finds gaps that gentle showers don't. These are usually flashing, valley or capping issues." },
      { q: "Will my insurance cover the leak?", a: "Storm and impact damage is often covered. We'll provide the report and photos your insurer needs." },
      { q: "Can you fix the ceiling damage too?", a: "We can connect you with trusted local plasterers once the leak is fixed and dry." },
    ],
  },
  {
    slug: "emergency-roofing-perth",
    title: "Emergency Roofing Perth",
    short: "24/7 emergency roof repairs — storm damage, active leaks and make-safe across Perth.",
    hero: "When a storm rolls through Perth and the roof gives way, every minute matters. Our emergency crew is on call 24/7 to tarp, make-safe and stop further damage so your home and family are protected.",
    problems: [
      "Storm-torn sheets and missing tiles",
      "Trees through the roof",
      "Active interior leaks during heavy rain",
      "Wind damage to ridges and flashings",
    ],
    process: [
      { step: "Call our 24/7 line", detail: "Speak to a real roofer, not a call centre." },
      { step: "Rapid make-safe", detail: "Tarp, board-up and stop the damage today." },
      { step: "Insurance report", detail: "Detailed photos and report for your claim." },
      { step: "Permanent repair", detail: "Schedule the full repair once cleared by your insurer." },
    ],
    benefits: [
      "24/7 emergency response",
      "Immediate make-safe",
      "Direct liaison with major insurers",
      "Licensed and fully insured",
    ],
    faqs: [
      { q: "How fast can you arrive?", a: "Within Perth metro we aim to be on-site within 2–4 hours for genuine emergencies." },
      { q: "Do you bill the insurer directly?", a: "In most cases, yes — once your claim is approved." },
      { q: "What does an emergency callout cost?", a: "Our standard callout fee is transparent and quoted before we attend." },
    ],
  },
  {
    slug: "gutter-replacement-perth",
    title: "Gutter Replacement Perth",
    short: "New Colorbond gutters, downpipes and fascia — installed clean and watertight.",
    hero: "Failing gutters cause some of the most expensive water damage we see. We replace gutters, downpipes and fascia with premium Colorbond components, properly sloped and fixed so water goes where it should.",
    problems: [
      "Rusted-through or sagging gutters",
      "Overflow into eaves and walls",
      "Failed downpipes and blockages",
      "Rotten or damaged fascia",
    ],
    process: [
      { step: "Measure & quote", detail: "Length, profile and colour confirmed on-site." },
      { step: "Old gutter removal", detail: "Clean strip-out and disposal." },
      { step: "Fascia & bracket prep", detail: "Replace damaged fascia and install premium brackets." },
      { step: "New gutter install", detail: "Colorbond gutters cut, joined and sealed on-site." },
    ],
    benefits: [
      "Genuine Colorbond components",
      "Quad, half-round and box profiles",
      "Leaf guard available",
      "Workmanship warranty included",
    ],
    faqs: [
      { q: "Do I need to replace fascia too?", a: "Only if it's damaged. We'll inspect and only quote what's necessary." },
      { q: "Should I add leaf guard?", a: "If you have overhanging trees, yes — it dramatically reduces blockages and cleaning." },
      { q: "How long do new gutters last?", a: "Colorbond gutters routinely last 20+ years in Perth conditions." },
    ],
  },
];

export type Suburb = {
  slug: string;
  name: string;
  region: string;
  blurb: string;
};

export const SUBURBS: Suburb[] = [
  { slug: "joondalup", name: "Joondalup", region: "Northern Suburbs", blurb: "From the lakeside estates of Connolly to the family streets around Edgewater, Joondalup roofs face strong coastal winds and salt-laden air. We've restored hundreds of Colorbond and tile roofs across the area." },
  { slug: "wanneroo", name: "Wanneroo", region: "Northern Suburbs", blurb: "Wanneroo's mix of older brick-and-tile homes and newer estates keeps our crews busy with everything from re-bedding to full tile-to-metal re-roofs." },
  { slug: "hillarys", name: "Hillarys", region: "Coastal Northern", blurb: "Hillarys homes battle constant sea breeze and UV exposure. We specialise in restorations and Colorbond replacements that handle coastal conditions." },
  { slug: "osborne-park", name: "Osborne Park", region: "Inner Northern", blurb: "Osborne Park's mix of light-industrial and residential properties means we handle both commercial and home roofing in the area regularly." },
  { slug: "morley", name: "Morley", region: "North-Eastern", blurb: "The classic Perth brick-and-tile homes of Morley often need ridge re-bedding and tile replacement — services we deliver every week." },
  { slug: "midland", name: "Midland", region: "Eastern Suburbs", blurb: "From heritage homes near the railway to the newer estates in Midvale, Midland's varied roof stock keeps our team versatile." },
  { slug: "fremantle", name: "Fremantle", region: "Southern Coastal", blurb: "Fremantle's heritage tile roofs and limestone homes need a delicate, experienced hand. We're trusted by local owners and property managers." },
  { slug: "rockingham", name: "Rockingham", region: "Southern Coastal", blurb: "Rockingham's coastal location means salt corrosion and storm damage are common — we replace and restore with materials rated for harsh conditions." },
  { slug: "canning-vale", name: "Canning Vale", region: "Southern Suburbs", blurb: "Newer Canning Vale estates with concrete tile roofs benefit hugely from preventative restoration before the first major leak appears." },
  { slug: "armadale", name: "Armadale", region: "South-Eastern", blurb: "Armadale's older housing stock often shows the wear of decades — we handle full replacements, leak repairs and storm restoration." },
  { slug: "ellenbrook", name: "Ellenbrook", region: "North-Eastern", blurb: "Ellenbrook's newer family homes are reaching the age where re-bedding and minor repairs prevent bigger problems down the track." },
  { slug: "baldivis", name: "Baldivis", region: "Southern Suburbs", blurb: "Baldivis's rapidly growing community trusts us for re-roofing, gutter replacement and the occasional storm emergency." },
];

export const REVIEWS = [
  { name: "Sarah M.", suburb: "Hillarys", service: "Roof Restoration", rating: 5, text: "Apex restored our 25-year-old tile roof and it honestly looks brand new. Professional crew, on-time, and the quote was exactly what we paid. Highly recommend." },
  { name: "David K.", suburb: "Morley", service: "Roof Leak Repair", rating: 5, text: "Had a leak through our kitchen ceiling during a storm. Apex were here the next morning, found the real source (a flashing, not the obvious spot) and fixed it for a fair price." },
  { name: "Linda T.", suburb: "Fremantle", service: "Tile Replacement", rating: 5, text: "Heritage home, fussy owner — they delivered. Matched the old tiles, cleaned up beautifully, and treated our place with respect." },
  { name: "Mark P.", suburb: "Canning Vale", service: "Re-Roofing", rating: 5, text: "Replaced our heavy concrete tiles with Colorbond Monument. House feels cooler already and the kerb appeal is on another level." },
  { name: "Jenna R.", suburb: "Joondalup", service: "Gutter Replacement", rating: 5, text: "New gutters and downpipes done in two days. Tidy, professional, and the price beat two other quotes." },
  { name: "Tom & Bec", suburb: "Baldivis", service: "Emergency Repair", rating: 5, text: "Storm took half our ridge off. Apex tarped that night and had it fully repaired within a week. Lifesavers." },
];

export const PROJECTS = [
  { title: "Full Colorbond Re-Roof", location: "Hillarys", problem: "30-year-old terracotta tiles cracking and leaking after every storm.", solution: "Stripped tiles, upgraded sarking and insulation, installed Colorbond Monument Kliplok.", outcome: "Lighter, watertight, cooler in summer and a 50-year warranty." },
  { title: "Tile Roof Restoration", location: "Morley", problem: "Faded, moss-covered tiles with failing ridge bedding.", solution: "High-pressure clean, broken tile replacement, flexible re-pointing, 3-coat premium membrane.", outcome: "Like-new appearance with a 10-year coating warranty." },
  { title: "Commercial Warehouse Repair", location: "Osborne Park", problem: "Multiple leaks impacting tenant operations across a 2,400 m² warehouse.", solution: "Drone survey, sectional repairs, full box gutter replacement, sealed all penetrations.", outcome: "Zero leaks since handover. Now on annual maintenance program." },
  { title: "Storm Emergency Make-Safe", location: "Baldivis", problem: "High wind tore ridge capping and 14 sheets after a winter storm.", solution: "Same-day tarp, insurance report, full re-sheet and ridge replacement within the week.", outcome: "Insured repair completed cleanly with zero interior damage." },
  { title: "Heritage Tile Repair", location: "Fremantle", problem: "1920s home with cracked Marseille tiles and failing valley.", solution: "Sourced matching reclaimed tiles, replaced valley iron, re-bedded ridges.", outcome: "Character of the home preserved, fully watertight." },
  { title: "Gutter & Fascia Replacement", location: "Canning Vale", problem: "Rusted-through quad gutters causing overflow into eaves.", solution: "Replaced fascia, installed new Colorbond Surfmist gutters and downpipes.", outcome: "Clean lines, watertight, leaf-guard installed." },
];
