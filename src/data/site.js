export const withBase = (path = "") => {
  const base = import.meta.env.BASE_URL || "/";
  const clean = String(path).replace(/^\/+/, "");
  return `${base}${clean}`;
};

export const site = {
  name: "Iqra Aslam",
  monogram: "IA",
  role: "Full-stack Engineer",
  location: "Faisalabad, Pakistan",
  timezone: "Asia/Karachi",
  timezoneLabel: "PKT · UTC+5",
  email: "iqraaslam2207@gmail.com",
  resumeUrl: withBase("resume.html"),
  available: true,
  availabilityLabel: "Available for new projects",
  github: "https://github.com/iqraaslam2207-collab",
  linkedin: "",
  headline: "Full-stack developer who ships the whole product.",
  pitch:
    "I build booking apps, storefronts, and dashboards with MongoDB, Express, React, and Node.js. You get a real interface you can click — not a mockup.",
  about: [
    "I’m Iqra Aslam, a full-stack developer in Faisalabad. I take a feature from the database to the browser: search, carts, booking flows, and the screens people actually use.",
    "If you need a web app, a storefront, or a product page that already looks like a product, write to me. I’m available for freelance work.",
  ],
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#architecture", label: "Architecture" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const socials = [
  { name: "GitHub", href: site.github, icon: "github" },
  { name: "LinkedIn", href: site.linkedin, icon: "linkedin" },
  { name: "Email", href: `mailto:${site.email}`, icon: "mail" },
].filter((item) => Boolean(item.href));

export const techCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces that stay fast, readable, and component-driven.",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "WebSockets"],
  },
  {
    id: "backend",
    title: "Backend & Data",
    description: "APIs and persistence with explicit contracts.",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST / GraphQL"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Repeatable delivery on Linux from local to live.",
    items: ["Docker", "DigitalOcean", "Linux", "CI / CD pipelines", "GitHub Actions"],
  },
  {
    id: "specialties",
    title: "Specialties",
    description: "How the system is shaped before the first commit.",
    items: ["System architecture", "AI engineering", "API security", "MERN product delivery"],
  },
];

export const projects = [
  {
    id: "holiday-directory",
    title: "Holiday Directory",
    year: "2026",
    image: withBase("images/holiday-live.jpg"),
    alt: "Holiday Directory vacation rental homepage with destination search",
    liveUrl: "https://iqraaslam2207-collab.github.io/holiday-directory/home.html",
    repoUrl: "https://github.com/iqraaslam2207-collab/holiday-directory",
    tags: ["JavaScript", "Search", "Booking", "Responsive"],
    points: [
      "Needed search, packages, and a booking form on a vacation-rental site.",
      "Built listing cards, filters, and a request form that works on phones.",
      "Live site with destination search and a complete enquiry path.",
    ],
  },
  {
    id: "marketplace",
    title: "Marketplace storefront",
    year: "2026",
    image: withBase("images/daraz-live.jpg"),
    alt: "Marketplace storefront with promotions, catalog grid, and cart",
    liveUrl: "https://iqraaslam2207-collab.github.io/daraz-clone/",
    repoUrl: "https://github.com/iqraaslam2207-collab/daraz-clone",
    tags: ["JavaScript", "Catalog", "Cart", "E-commerce"],
    points: [
      "Needed a dense shop homepage: promotions, catalog, and cart.",
      "Split the page into catalog grid and cart state, mobile-first.",
      "Responsive storefront that still reads clearly on a small screen.",
    ],
  },
  {
    id: "nestora",
    title: "Nestora Design",
    year: "2026",
    image: withBase("images/nestora-live.jpg"),
    alt: "Nestora Design furniture studio homepage",
    liveUrl: "https://github.com/iqraaslam2207-collab/Nestora-Design",
    repoUrl: "https://github.com/iqraaslam2207-collab/Nestora-Design",
    tags: ["React", "Vite", "Brand system"],
    points: [
      "A furniture studio site that had to feel like a product, not a flyer.",
      "React + Vite components for collections, story, and contact.",
      "Brand site ready to grow into a shop later.",
    ],
  },
  {
    id: "maison-soleil",
    title: "Maison Soleil",
    year: "2026",
    image: withBase("images/hotel-live.jpg"),
    alt: "Maison Soleil hotel booking confirmation dashboard",
    liveUrl:
      "https://iqraaslam2207-collab.github.io/hotel-booking-confirmation/hotel-booking-confirmation-page-main/",
    repoUrl: "https://github.com/iqraaslam2207-collab/hotel-booking-confirmation",
    tags: ["HTML", "CSS", "Guest ops"],
    points: [
      "Hotel confirmation had to show receipt, Wi-Fi, and breakfast — not just “thanks”.",
      "Clear layout so a guest can find the details in one glance.",
      "Works as a small guest dashboard on phone and desktop.",
    ],
  },
];

export const experience = [
  {
    id: "freelance",
    period: "2026 — Present",
    title: "Freelance full-stack developer",
    org: "Faisalabad, Pakistan",
    summary:
      "I design and build web apps for travel, shops, and hotels — from the data to the screen.",
    impact: "Four live sites with search, cart, booking, and confirmation flows.",
  },
  {
    id: "holiday-sprint",
    period: "2026",
    title: "Holiday Directory",
    org: "Client / personal delivery",
    summary: "Search, listings, packages, and a booking request form for vacation rentals.",
    impact: "Live site with destination search.",
  },
  {
    id: "commerce-sprint",
    period: "2026",
    title: "Marketplace storefront",
    org: "Personal delivery",
    summary: "Shop homepage with promotions, product grid, and cart.",
    impact: "Fully responsive e-commerce clone.",
  },
  {
    id: "react-studio",
    period: "2026",
    title: "Nestora Design",
    org: "Personal delivery",
    summary: "Furniture studio in React: collections, story, and contact.",
    impact: "Vite + React brand site.",
  },
];
