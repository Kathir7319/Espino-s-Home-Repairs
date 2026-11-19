export const BUSINESS_INFO = {
  name: "Espino's Home Repairs",
  tagline: "Fuquay-Varina Handyman & Remodeling",
  owner: "Mateo & Marco Espino",
  phone: "(919) 555-0184",
  phoneRaw: "9195550184",
  smsPrompt: "Hi Mateo, I need a handyman quote for a repair in Fuquay-Varina:",
  email: "quotes@espinoshomerepairs.com",
  location: "Fuquay-Varina, NC",
  fullAddress: "Downtown Fuquay-Varina & South Wake County, NC",
  servingRadius: "Fuquay-Varina, Holly Springs, Willow Spring, Angier, Garner, and Apex",
  hours: "Monday – Saturday: 7:30 AM – 6:00 PM (Emergency weekend slots available)",
  yearEstablished: "2018",
  warranty: "1-Year Craftsmanship Guarantee on All Labor",
  insured: "Fully Licensed & Insured in North Carolina",
};

export const PRICING_RATES = [
  {
    id: "hourly",
    title: "Standard Hourly Rate",
    rate: "$75",
    unit: "/ Hour",
    badge: "Punch List Favorite",
    minimum: "2-hour minimum ($150)",
    bestFor: "Best for a small collection of miscellaneous punch-list items.",
    highlights: [
      "2-Hour Minimum commitment",
      "Door alignments, latch adjustments",
      "Small drywall hole patches & sanding",
      "Faucet swaps & toilet flush valves",
      "Hardware, mirror & curtain installations",
      "No hidden travel fees inside Fuquay-Varina"
    ],
    popular: false,
    ctaText: "Book Hourly Service",
  },
  {
    id: "half-day",
    title: "Half-Day Package",
    rate: "$270",
    unit: "4 Hours",
    badge: "Most Popular",
    minimum: "Save $30 vs Hourly",
    bestFor: "Perfect for tackling dedicated tasks like a full room paint touch-up or multiple minor plumbing and door fixes.",
    highlights: [
      "Dedicated 4-hour craftsman block",
      "Complete room repaint or ceiling patch",
      "Multi-room interior door trimming & weatherstripping",
      "Install new bathroom vanity faucet + toilet rebuild",
      "Baseboard or shoe molding installation (up to 60 linear ft)",
      "Detailed cleanup and debris haul included"
    ],
    popular: true,
    ctaText: "Reserve Half-Day Block",
  },
  {
    id: "full-day",
    title: "Full-Day Overhaul Package",
    rate: "$520",
    unit: "8 Hours",
    badge: "Best Value for Big Lists",
    minimum: "Save $80 vs Hourly",
    bestFor: "Ideal for move-in / move-out punch lists, extensive trim replacements, or multiple rooms needing updates.",
    highlights: [
      "Full 8-hour day with senior craftsman",
      "Tackle 8 to 15 assorted repair punch items",
      "Full room drywall restoration + texture blend",
      "Comprehensive interior trim & casing upgrades",
      "Multi-fixture plumbing & hardware replacements",
      "Direct homeowner material consultation included"
    ],
    popular: false,
    ctaText: "Reserve Full-Day Overhaul",
  }
];

export const SERVICES = [
  {
    id: "drywall-repair",
    title: "Drywall Repair",
    shortDesc: "Fixing holes, stress cracks, water damage patches, and texture matching.",
    icon: "SquareDashedBottomCode",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    fullDesc: "Drywall damage stands out like a sore thumb in well-lit Carolina homes. Whether it's an accidental doorknob puncture, settle cracks from changing humidity, or a stained ceiling cutout following a plumbing repair, we deliver seamless repairs that make damage vanish completely.",
    capabilities: [
      "Doorknob holes & large wall punctures",
      "Ceiling water leak cutouts & structural patching",
      "Settlement & foundation stress crack repair",
      "Seamless knockdown, orange peel & smooth texture matching",
      "Dust-controlled sanding & primer prep ready for paint"
    ],
    commonTime: "1 to 3 hours per patch area",
    priceRange: "Starting at $150 (2-hr minimum)"
  },
  {
    id: "doors-windows",
    title: "Door & Window Fixes",
    shortDesc: "Aligning sticky doors, replacing hardware, weather stripping, and window trim repair.",
    icon: "DoorOpen",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    fullDesc: "North Carolina's summer humidity can cause doors to bind against jambs, drafty windows to waste your HVAC dollars, and loose latch plates to compromise privacy. We re-hang, plane, align, and seal your doors and windows with precision.",
    capabilities: [
      "Planing sticking interior & exterior wood doors",
      "Replacing deadbolts, smart locks, handlesets & hinges",
      "Perimeter weather stripping & bottom sweep replacements",
      "Pocket door realignment & track lubrication",
      "Rotten exterior brickmold & window sill trim rebuilds"
    ],
    commonTime: "1 to 2 hours per door/window",
    priceRange: "Typical repair $75 - $150"
  },
  {
    id: "trim-carpentry",
    title: "Trim & Finish Carpentry",
    shortDesc: "Installing baseboards, crown molding, door casings, and custom accent trim.",
    icon: "Ruler",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    fullDesc: "Finish carpentry elevates ordinary builder-grade rooms into standout spaces. We cut tight 45-degree miters, cope inside corners, and caulk every seam for an architecturally crisp, polished appearance.",
    capabilities: [
      "Modern 5-inch craftsman baseboards & shoe moldings",
      "Crown molding installation & seamless corner copes",
      "Board & batten, shiplap, and wainscoting accent walls",
      "Window stools, aprons, and interior casing wraps",
      "Interior closet shelving and custom pantry trim"
    ],
    commonTime: "Half-day to 2-day projects",
    priceRange: "Custom quote or Half-Day Package"
  },
  {
    id: "interior-painting",
    title: "Interior Painting",
    shortDesc: "Accent walls, room touch-ups, trim painting, and localized repair painting.",
    icon: "Paintbrush",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    fullDesc: "A fresh coat of paint breathes new life into living rooms, hallways, and bedrooms. We handle the dirty prep work that DIYers hate—filling pinholes, taping straight cutlines, and applying uniform double-coat finishes without roller splatters.",
    capabilities: [
      "Designer accent walls with crisp, razor-sharp lines",
      "High-traffic hallway, stairwell & baseboard scuff repaints",
      "Patch blending and localized color matching",
      "Interior door slab & trim enamel refinishing",
      "Kitchen cabinet touch-ups & bathroom moisture-resistant coats"
    ],
    commonTime: "Half-day ($270) to full-day blocks",
    priceRange: "Starting at $270 package"
  },
  {
    id: "minor-plumbing",
    title: "Minor Plumbing",
    shortDesc: "Fixing leaky faucets, replacing showerheads, running toilet repairs, and simple fixture swaps.",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
    fullDesc: "You don't need an expensive commercial master plumber just to fix a running toilet or swap a dated kitchen faucet. We take care of residential plumbing punch-list items quickly, cleanly, and without exorbitant dispatch fees.",
    capabilities: [
      "Kitchen sink pull-down faucet & sprayer replacements",
      "Running toilet rebuilds (flappers, fill valves & wax rings)",
      "Bathroom vanity faucet & pop-up drain assembly swaps",
      "Under-sink P-trap leak repairs & garbage disposal installs",
      "High-pressure rain showerhead & wand upgrades"
    ],
    commonTime: "1 to 2 hours per fixture",
    priceRange: "Standard hourly or $150 minimum"
  }
];

export const NEIGHBORHOODS = [
  "Bentwinds Golf Community",
  "Ballentine",
  "Partin Place",
  "South Lakes",
  "Sunset Bluffs",
  "Alston Ridge",
  "Carriage Heights",
  "Downtown Fuquay Historic District",
  "Downtown Varina Commercial & Residential",
  "Crooked Creek",
  "Braxton Village",
  "Banks Road Corridor",
  "Willow Spring Borders",
  "Holly Springs Border / Sunset Lake"
];

export const TESTIMONIALS = [
  {
    name: "Sarah & David M.",
    neighborhood: "South Lakes, Fuquay-Varina",
    review: "Espino's is the real deal. Sent Mateo three photos of a cracked doorframe and a water stain on our ceiling. Had a straightforward quote within 20 minutes. He arrived on time, laid drop cloths everywhere, and finished with flawless texture matching. Truly a breath of fresh air!",
    service: "Drywall Patch & Door Frame Realignment",
    rating: 5,
    date: "October 2026"
  },
  {
    name: "Mark T.",
    neighborhood: "Bentwinds, Fuquay-Varina",
    review: "As a property owner, finding an honest handyman who actually communicates is rare. Marco did the Half-Day package to replace two vanity faucets and repair four sticky exterior doors. Clear pricing, no BS, exceptional craftsmanship.",
    service: "Half-Day Package (Plumbing & Doors)",
    rating: 5,
    date: "September 2026"
  },
  {
    name: "Elena G.",
    neighborhood: "Partin Place, Fuquay-Varina",
    review: "The photo quote process was so easy! I didn't have to take an afternoon off work just for someone to look at my to-do list. The craftsman baseboards and living room paint touch-ups look showroom-quality.",
    service: "Trim Carpentry & Accent Painting",
    rating: 5,
    date: "November 2026"
  }
];

export const BEFORE_AFTER_GALLERY = [
  {
    id: 1,
    category: "Drywall Repair",
    title: "Water Damage Ceiling Patch & Texture Match",
    location: "Sunset Bluffs, Fuquay-Varina",
    description: "Repaired 3x2 ft ceiling cutout after upstairs shower valve leak. Matched subtle knockdown texture and sealed with stain-blocking primer.",
    timeSpent: "3.5 Hours",
    beforeLabel: "Water Stained & Cut Out",
    afterLabel: "Flawless Seamless Finish",
    beforeImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    category: "Trim & Finish Carpentry",
    title: "Craftsman Wainscoting & Custom Casing",
    location: "Downtown Fuquay Historic Home",
    description: "Transformed builder-grade dining entryway with custom board-and-batten trim, primed and painted in crisp satin white.",
    timeSpent: "1.5 Days",
    beforeLabel: "Bare Builder Drywall",
    afterLabel: "Handcrafted Wainscoting",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
    afterImage: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    category: "Door & Window Fixes",
    title: "Sticky Front Entryway Alignment & Lockset",
    location: "Bentwinds Community",
    description: "Planed dragging mahogany entry door, reinforced sagging hinge screws with 3-inch security lags, and installed keyless digital deadbolt.",
    timeSpent: "2 Hours",
    beforeLabel: "Dragging Bottom & Loose Latch",
    afterLabel: "Smooth Glide & Digital Lock",
    beforeImage: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=700&q=80",
    afterImage: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    category: "Minor Plumbing",
    title: "Kitchen Farmhouse Faucet & Disposal Rebuild",
    location: "Ballentine Subdivision",
    description: "Removed corroded 10-year builder faucet and malfunctioning disposal. Fitted high-arc matte black commercial pull-down spray.",
    timeSpent: "2.5 Hours",
    beforeLabel: "Leaking P-Trap & Corroded Spout",
    afterLabel: "Clean Commercial Faucet & Traps",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80",
    afterImage: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=700&q=80"
  }
];

export const FAQS = [
  {
    q: "How does the Photo Quote process work?",
    a: "It's super simple! Instead of scheduling a site visit during your busy workday, snap 2 to 3 clear photos of the repair area using your smartphone, describe what needs fixing in our online form, and hit submit. We review your photos and send back an accurate estimate within a few business hours."
  },
  {
    q: "Are materials included in your hourly or package rates?",
    a: "Materials are billed separately at direct store receipt cost with zero markup, or you can purchase and have the materials ready on-site prior to our arrival. Our rates reflect pure, skilled craftsman labor, professional tools, and complete cleanup."
  },
  {
    q: "Is there a minimum service charge?",
    a: "Yes, our standard hourly service carries a 2-hour minimum ($150). This guarantees dedicated time for our craftsman to set up, tackle several small tasks from your punch list, and properly test everything before leaving."
  },
  {
    q: "What areas around Fuquay-Varina do you service?",
    a: "We proudly serve all of Fuquay-Varina, NC (Downtown Fuquay, Downtown Varina, South Lakes, Bentwinds, Ballentine, Partin Place) as well as neighboring towns including Holly Springs, Willow Spring, Angier, and southern Apex."
  },
  {
    q: "Do you bring your own tools and clean up afterward?",
    a: "Always! We arrive in a fully-equipped service van with professional dust containment, drop cloths, commercial HEPA vacuums, and professional-grade carpentry and plumbing tools. Your home will be left clean and tidy."
  }
];
