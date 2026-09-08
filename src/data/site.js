export const withBase = (path = "") => {
  const base = import.meta.env.BASE_URL || "/";
  const clean = String(path).replace(/^\/+/, "");
  return `${base}${clean}`;
};

export const site = {
  name: "Iqra Aslam",
  monogram: "IA",
  role: "Full Stack Developer & AI Engineer",
  location: "Faisalabad, Pakistan",
  timezone: "Asia/Karachi",
  timezoneLabel: "PKT · UTC+5",
  email: "iqraaslam2207@gmail.com",
  resumeUrl: withBase("resume.html"),
  available: true,
  availabilityLabel: "Available for Hire",
  github: "https://github.com/iqraaslam2207-collab",
  linkedin: "",
  headline: "Full-stack engineering for intelligent, production-grade systems.",
  pitch:
    "I design reliable product surfaces, scalable APIs, and agent-ready architectures — from search and booking flows to the interfaces people actually use.",
};

export const navLinks = [
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

export const metrics = [
  { value: "99.9%", label: "Uptime architectures" },
  { value: "<100ms", label: "API latency targets" },
  { value: "5+", label: "Production systems" },
  { value: "4", label: "Live product surfaces" },
];

export const terminalLines = [
  { prompt: "$", text: "iactl status --stack production" },
  { prompt: ">", text: "gateway ......... healthy   41ms" },
  { prompt: ">", text: "api.core ........ ready     REST · GraphQL" },
  { prompt: ">", text: "agents.runtime .. idle      tools wired" },
  { prompt: ">", text: "realtime ........ sockets   3 rooms live" },
  { prompt: "$", text: "iactl deploy --safe" },
  { prompt: "ok", text: "shipped. no regressions." },
];

export const techCategories = [
  {
    id: "frontend",
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "WebSockets"],
    projectIds: ["holiday-directory", "marketplace", "nestora", "maison-soleil"],
  },
  {
    id: "backend",
    title: "Backend & Realtime",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST / GraphQL"],
    projectIds: ["holiday-directory", "marketplace"],
  },
  {
    id: "ai",
    title: "AI & Systems",
    items: ["System architecture", "AI engineering", "Agent workflows", "API security"],
    projectIds: ["nestora", "holiday-directory"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    items: ["Docker", "DigitalOcean", "Linux", "CI / CD", "GitHub Actions"],
    projectIds: ["holiday-directory", "marketplace", "nestora", "maison-soleil"],
  },
];

export const projects = [
  {
    id: "holiday-directory",
    title: "Holiday Directory",
    kicker: "Flagship · Travel systems",
    year: "2026",
    featured: true,
    image: withBase("images/holiday-live.jpg"),
    alt: "Holiday Directory vacation rental homepage with destination search",
    liveUrl: "https://iqraaslam2207-collab.github.io/holiday-directory/home.html",
    repoUrl: "https://github.com/iqraaslam2207-collab/holiday-directory",
    tags: ["JavaScript", "Search", "Booking"],
    flow: ["Search", "Listings", "Packages", "Enquiry"],
    summary: "Vacation-rental platform with destination search, packages, and a booking request path.",
  },
  {
    id: "marketplace",
    title: "Marketplace",
    kicker: "Commerce",
    year: "2026",
    featured: false,
    image: withBase("images/daraz-live.jpg"),
    alt: "Marketplace storefront with promotions, catalog grid, and cart",
    liveUrl: "https://iqraaslam2207-collab.github.io/daraz-clone/",
    repoUrl: "https://github.com/iqraaslam2207-collab/daraz-clone",
    tags: ["Catalog", "Cart", "Responsive"],
    summary: "Dense e-commerce homepage: promotions, product grid, and cart state.",
  },
  {
    id: "nestora",
    title: "Nestora Design",
    kicker: "React studio",
    year: "2026",
    featured: false,
    image: withBase("images/nestora-live.jpg"),
    alt: "Nestora Design furniture studio homepage",
    liveUrl: "https://github.com/iqraaslam2207-collab/Nestora-Design",
    repoUrl: "https://github.com/iqraaslam2207-collab/Nestora-Design",
    tags: ["React", "Vite"],
    summary: "Furniture studio in a componentized React architecture.",
  },
  {
    id: "maison-soleil",
    title: "Maison Soleil",
    kicker: "Guest ops",
    year: "2026",
    featured: false,
    image: withBase("images/hotel-live.jpg"),
    alt: "Maison Soleil hotel booking confirmation dashboard",
    liveUrl:
      "https://iqraaslam2207-collab.github.io/hotel-booking-confirmation/hotel-booking-confirmation-page-main/",
    repoUrl: "https://github.com/iqraaslam2207-collab/hotel-booking-confirmation",
    tags: ["HTML", "Dashboard"],
    summary: "Post-booking guest dashboard: receipt, Wi-Fi, breakfast logistics.",
  },
];

export const experience = [
  {
    id: "freelance",
    period: "2026 — Present",
    title: "Independent Full-Stack & AI Engineer",
    org: "Freelance · Faisalabad",
    summary: "Shipping product UIs, APIs, and system shape for travel, commerce, and hospitality.",
    impact: "Four live surfaces: search, cart, booking, confirmation.",
  },
  {
    id: "holiday-sprint",
    period: "2026",
    title: "Holiday Directory",
    org: "Production delivery",
    summary: "Listing, search, and enquiry as one coherent rental system.",
    impact: "Live vacation directory.",
  },
  {
    id: "commerce-sprint",
    period: "2026",
    title: "Marketplace storefront",
    org: "Production delivery",
    summary: "Promotions, catalog, and cart under a strict commerce grid.",
    impact: "Responsive storefront clone.",
  },
  {
    id: "react-studio",
    period: "2026",
    title: "Nestora Design",
    org: "React delivery",
    summary: "Brand collections and story on a Vite + React component system.",
    impact: "Studio site ready to extend into commerce.",
  },
];
