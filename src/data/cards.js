// Biarmor Digital Wedding Cards Catalogue Data

export const WHATSAPP_NUMBER = "919000000000"; // Replace with your official WhatsApp number
export const COMPANY_NAME = "Biarmor";

export const CATEGORIES = [
  { id: "all", label: "All Designs" },
  { id: "wedding", label: "Wedding" },
  { id: "engagement", label: "Engagement" },
  { id: "nikkah", label: "Nikkah / Islamic" },
  { id: "christian", label: "Church / Christian" },
  { id: "destination", label: "Destination" },
  { id: "minimal", label: "Modern Minimal" },
];

export const CARDS_DATA = [
  {
    id: "engagement-taupe",
    title: "Joel & Jismy",
    subtitle: "Burgundy florals · typed cover · RSVP",
    type: "ENGAGEMENT",
    category: ["engagement", "wedding"],
    tier: "Scroll Animation",
    price: "2,500",
    url: "https://engagement-taupe.vercel.app/",
    thumbnail: "/thumbnails/engagement.webp",
  },
  {
    id: "wedding-card-taupe",
    title: "Joel & Jismy",
    subtitle: "Luxury floral arch · couple story",
    type: "WEDDING",
    category: ["wedding", "christian"],
    tier: "Basic Animation",
    price: "1,500",
    url: "https://wedding-card-taupe-nu.vercel.app/",
    thumbnail: "/thumbnails/wedding-arch.webp",
  },
  {
    id: "noufel-weds-sithika",
    title: "Noufel & Sithika",
    subtitle: "Islamic arch · Bismillah · Mughal motif",
    type: "NIKKAH",
    category: ["nikkah", "engagement", "wedding"],
    tier: "Scroll Animation",
    price: "2,500",
    url: "https://noufel-weds-sithika.vercel.app/?invite=1",
    thumbnail: "/thumbnails/noufel-sithika.svg",
  },
  {
    id: "angel-weddd-dist",
    title: "Alessia & Matteo",
    subtitle: "Lake Como · Italian editorial layout",
    type: "DESTINATION",
    category: ["destination", "wedding", "minimal"],
    tier: "Scroll Animation",
    price: "2,500",
    url: "https://angel-weddd-dist.vercel.app/",
    thumbnail: "/thumbnails/angel-matteo.jpg",
  },
  {
    id: "alen-ammu",
    title: "Alen & Ammu",
    subtitle: "Classic romantic · Church & reception",
    type: "WEDDING",
    category: ["wedding", "christian"],
    tier: "Basic Animation",
    price: "1,500",
    url: "https://alen-ammu.vercel.app/",
    thumbnail: "/thumbnails/alen-ammu.jpg",
  },
  {
    id: "vijay-angel",
    title: "Vijay & Angel",
    subtitle: "Mar Thoma church · scripture & hymns",
    type: "CHURCH WEDDING",
    category: ["christian", "wedding"],
    tier: "Basic Animation",
    price: "1,500",
    url: "https://vijay-angel-dist.vercel.app/?v=8",
    thumbnail: "/thumbnails/vijay-angel.jpg",
  },
  {
    id: "riya-joel",
    title: "Dr. Riya & Joel",
    subtitle: "2-Day royal wedding & reception",
    type: "ROYAL WEDDING",
    category: ["wedding", "christian"],
    tier: "Scroll Animation",
    price: "2,500",
    url: "https://riya-joel-vv2x.vercel.app/?v=2",
    thumbnail: "/thumbnails/riya-joel.jpg",
  },
  {
    id: "jobin-amitha",
    title: "Jobin & Amitha",
    subtitle: "Modern minimal monogram · clean scroll",
    type: "MODERN MINIMAL",
    category: ["minimal", "wedding"],
    tier: "Basic Animation",
    price: "1,500",
    url: "https://jobin-amitha.vercel.app/?v=4",
    thumbnail: "/thumbnails/jobin-amitha.jpg",
  },
  {
    id: "wedding-invitation-royale",
    title: "Riya & Joel",
    subtitle: "Golden floral frame · vintage charm",
    type: "ROYAL VINTAGE",
    category: ["wedding", "minimal"],
    tier: "Static Design",
    price: "1,000",
    url: "https://wedding-invitaion1.vercel.app/",
    thumbnail: "/thumbnails/royale.jpg",
  }
];

export const PRICING_PACKAGES = [
  {
    id: "scroll",
    badge: "PREMIUM EXPERIENCE",
    title: "Scroll Animations",
    subtitle: "Full Interactive Storytelling",
    price: "2,500",
    desc: "Rich interactive journey with scroll-triggered entrance animations, parallax effects & music.",
    features: [
      "Dynamic scroll-triggered animations",
      "Custom background music / song sync",
      "Interactive countdown timer",
      "Multi-section timeline & events",
      "Interactive Google Maps navigation",
      "Online RSVP confirmation"
    ],
    highlight: true
  },
  {
    id: "basic",
    badge: "POPULAR PICK",
    title: "Basic Animations",
    subtitle: "Smooth Motion & Music",
    price: "1,500",
    desc: "Smooth entry opening animations with custom music, couple story & essential details.",
    features: [
      "Smooth opening / entrance animation",
      "Custom background music included",
      "Couple story & ceremony schedule",
      "Google Maps venue location",
      "Online RSVP confirmation button",
      "1-click WhatsApp shareable link"
    ],
    highlight: false
  },
  {
    id: "static",
    badge: "ESSENTIAL",
    title: "Static Designs",
    subtitle: "Without Animation",
    price: "1,000",
    desc: "Clean & elegant digital web card without animations. Lightweight & fast-loading.",
    features: [
      "Clean, elegant typography & layout",
      "Full event details, date & timings",
      "Direct Google Maps venue link",
      "Hosts & family details",
      "100% mobile-friendly design",
      "Easy WhatsApp sharing"
    ],
    highlight: false
  }
];

export const PRICING_NOTE = "We can also customise the design based on your preferences. The pricing may vary depending on the number of pages and your specific requirements.";

export const FAQ_DATA = [
  {
    q: "Why choose an interactive digital card instead of a normal image or video?",
    a: "An interactive digital card opens like the real thing with music, countdown timers, Google Maps directions, and 1-tap WhatsApp RSVP. Your guests will love the seamless experience."
  },
  {
    q: "Can we add our favourite song or religious chants?",
    a: "Yes! You can choose any Malayalam, Hindi, English, or instrumental prayer song. The audio plays automatically as guests open the card."
  },
  {
    q: "Will this link work on all Android and iPhone devices?",
    a: "Yes, 100% responsive and tested on all modern mobile browsers (Safari, Chrome, WhatsApp in-app browser). No apps or software needed."
  },
  {
    q: "How do I share it with my guests on WhatsApp?",
    a: "We give you a custom branded link with a rich preview card (couple photo + message). You can simply forward it to your family, relatives, and WhatsApp groups with 1 tap."
  }
];
