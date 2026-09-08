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
  headline: "Full-stack engineering for intelligent, durable systems.",
  pitch:
    "I design high-performance applications with clean APIs and interfaces that stay coherent as they scale. Architecture first, then the pixels — so products ship fast without becoming fragile.",
  about: [
    "I’m Iqra Aslam, a full-stack engineer in Faisalabad. I take a product from data model to production UI — search, carts, booking flows, and the APIs that keep them honest.",
    "The work is systems-shaped: clear boundaries, predictable state, and interfaces that still feel quiet when the feature set grows. I care about performance, accessibility, and the kind of code another engineer can extend.",
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
      "Challenge: a rental marketplace UX — search, packages, and booking — without a booking engine behind it.",
      "Architecture: modular listing state, composed package views, and a validated request flow.",
      "Impact: a live vacation-rental surface with destination search and a complete booking enquiry path.",
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
      "Challenge: marketplace density — nav, promotions, catalog, and cart — on a single storefront.",
      "Architecture: componentized catalog grid and cart state on a mobile-first layout system.",
      "Impact: a fully responsive commerce homepage that holds promotional and product information without collapsing.",
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
      "Challenge: a furniture studio that had to feel like a product, not a brochure.",
      "Architecture: Vite + React component system for collections, story, and contact.",
      "Impact: a coherent brand surface with reusable UI primitives ready to grow into commerce.",
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
      "Challenge: post-booking confirmation as an operational dashboard, not a thank-you page.",
      "Architecture: semantic information hierarchy for receipt, Wi-Fi, and breakfast logistics.",
      "Impact: a guest-ready confirmation portal that reads in one glance on mobile and desktop.",
    ],
  },
];

export const experience = [
  {
    id: "freelance",
    period: "2026 — Present",
    title: "Independent Full-Stack Engineer",
    org: "Freelance · Faisalabad, PK",
    summary:
      "End-to-end product work: interface architecture, REST-shaped data, and production UI for travel, commerce, and hospitality.",
    impact: "Four live product surfaces shipped with search, cart, booking, and confirmation flows.",
  },
  {
    id: "holiday-sprint",
    period: "2026",
    title: "Holiday Directory — product sprint",
    org: "Selected delivery",
    summary:
      "Designed the listing/search/booking path as a single coherent system, then implemented it as a responsive public site.",
    impact: "Live rental directory with destination search and packaged stay enquiry.",
  },
  {
    id: "commerce-sprint",
    period: "2026",
    title: "Marketplace storefront — commerce delivery",
    org: "Selected delivery",
    summary:
      "Rebuilt a dense marketplace homepage: promotional rails, catalog, and cart interaction under a strict visual grid.",
    impact: "Responsive e-commerce clone used as a production-quality storefront reference.",
  },
  {
    id: "react-studio",
    period: "2026",
    title: "Nestora Design — React studio",
    org: "Selected delivery",
    summary:
      "Moved a furniture brand into a componentized React architecture so collections and story could share one design language.",
    impact: "Vite + React studio site with a reusable visual system.",
  },
];
