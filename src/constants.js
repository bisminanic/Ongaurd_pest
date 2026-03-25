// ─── PALETTE ─────────────────────────────────────
export const navy  = "#1B3A6B";
export const green = "#5BC728";
export const gd    = "#399e14";
export const off   = "#f4f8f0";
export const muted = "#5c6778";

// ─── IMAGE MAP (picsum – always loads) ───────────
const P = (id, w, h) => `https://picsum.photos/id/${id}/${w}/${h}`;

export const IMG = {
  // Hero
  heroMain : P(1060, 1900, 1100),
  heroL2   : P(251,   900,  600),
  heroL3   : P(380,   900,  600),
  techCard : P(164,   700,  900),
  homeCard : P(251,   600,  420),
  // Services
  svc1: P(292,  800, 560),
  svc2: P(260,  800, 560),
  svc3: P(1003, 800, 560),
  svc4: P(388,  800, 560),
  svc5: P(317,  800, 560),
  svc6: P(1025, 800, 560),
  // About
  aboutA  : P(453,  900, 700),
  aboutB  : P(177,  700, 500),
  aboutBg : P(338, 1200, 800),
  // Strips
  strip1: P(174, 1900, 800),
  strip2: P(368, 1900, 800),
  // Process
  processBg : P(380,  1900, 1100),
  processL2 : P(1043, 1900, 1100),
  // Stats
  statsBg : P(1043, 1900, 1100),
  statsL2 : P(16,   1900, 1100),
  // Testimonials
  testiMain : P(338, 1400, 900),
  testiL2   : P(48,  1400, 900),
  // Contact
  contactBg : P(218, 1900, 1100),
  contactL2 : P(380, 1900, 1100),
  // Deco
  deco3: P(1016, 500, 700),
};

// ─── SERVICE DATA ─────────────────────────────────
export const SVCS = [
  { ic: "🪳", t: "Cockroach Control",  img: IMG.svc1, d: "Advanced gel baiting & residual sprays eliminating cockroaches from every crack permanently." },
  { ic: "🐀", t: "Rodent Control",     img: IMG.svc2, d: "Integrated trapping, bait stations & proofing — banish rats, stop gnawing & disease spread." },
  { ic: "🦟", t: "Mosquito Control",   img: IMG.svc3, d: "ULV fogging + larvicidal treatment cuts populations 90%+. Protect against dengue & malaria." },
  { ic: "🐜", t: "Termite Treatment",  img: IMG.svc4, d: "Pre & post-construction anti-termite soil treatment with long-term warranty." },
  { ic: "🛏️", t: "Bed Bug Treatment", img: IMG.svc5, d: "Heat + chemical therapy for 100% bed bug elimination — guaranteed or we re-treat free." },
  { ic: "🌿", t: "Eco-Friendly Plans", img: IMG.svc6, d: "Organic, child-safe, pet-safe formulations. Powerful on pests. Gentle on your family." },
];

// ─── TESTIMONIALS DATA ────────────────────────────
export const REVS = [
  { name: "Rahul Sharma",  role: "Homeowner, Noida",               text: "OnGuard eliminated our severe cockroach problem in a single visit. Absolutely professional — odourless chemicals and our kids were safe within hours!", stars: 5, av: "RS" },
  { name: "Priya Mehta",   role: "Restaurant Owner, Connaught Place", text: "3 years on their AMC plan and not a single pest complaint. Safe products, always on time. Essential for any food business.", stars: 5, av: "PM" },
  { name: "Amit Singh",    role: "Property Manager, Gurgaon",       text: "Major termite infestation handled with surgical precision. Detailed report, excellent follow-up, total transparency.", stars: 5, av: "AS" },
];

// ─── TICKER ITEMS ─────────────────────────────────
export const TICKER_ITEMS = [
  "🪳 Cockroach Control",
  "🐀 Rodent Control",
  "🦟 Mosquito Fogging",
  "🐜 Termite Treatment",
  "🛏️ Bed Bug Control",
  "🌿 Eco-Friendly Plans",
  "✅ 100% Guaranteed",
  "📞 24/7 Emergency",
];

// ─── PROCESS STEPS ────────────────────────────────
export const STEPS = [
  { n: "01", t: "Free Inspection",   ic: "🔍", d: "Expert visits at no cost — identifies pest species, severity, and entry points." },
  { n: "02", t: "Custom Plan",       ic: "📋", d: "Tailored treatment based on property layout, pest type, and family safety needs." },
  { n: "03", t: "Treatment Day",     ic: "💊", d: "Certified technicians apply targeted eco-friendly products with industry-grade equipment." },
  { n: "04", t: "30-Day Follow-Up",  ic: "✅", d: "We verify results. Pests return within 30 days? Re-treatment at zero cost." },
];

// ─── STATS DATA ───────────────────────────────────
export const STATS = [
  { n: 15,    suf: "+", label: "Yrs Experience",   ic: "🏆" },
  { n: 10000, suf: "+", label: "Pests Eliminated",  ic: "🪲" },
  { n: 500,   suf: "+", label: "Happy Clients",     ic: "😊" },
  { n: 98,    suf: "%", label: "Success Rate",      ic: "✅" },
];
