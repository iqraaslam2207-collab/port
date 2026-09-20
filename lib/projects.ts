export type CaseStudy = {
  id: string;
  title: string;
  kind: "ecommerce" | "travel" | "design" | "dashboard" | "intern";
  problem: string;
  metrics: { value: string; label: string }[];
  tags: readonly string[];
  image: string;
  imageAlt: string;
  live: string;
  github: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "daraz-clone",
    title: "Daraz Clone",
    kind: "ecommerce",
    problem:
      "Responsive Daraz-style storefront with search, flash sale, categories, and cart UI — HTML, CSS, and JavaScript.",
    metrics: [
      { value: "Flash sale", label: "product row" },
      { value: "EN / UR", label: "language" },
    ],
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    image: "/projects/daraz-clone.jpg",
    imageAlt:
      "Daraz clone homepage with orange header, Hot Deals banner, and Flash Sale product row",
    live: "https://iqraaslam2207-collab.github.io/daraz-clone/",
    github: "https://github.com/iqraaslam2207-collab/daraz-clone",
  },
  {
    id: "roamify-travels",
    title: "Roamify Travels",
    kind: "travel",
    problem:
      "Travel agency landing page in Next.js and Tailwind — hero, destinations, and a booking inquiry flow.",
    metrics: [
      { value: "Next.js", label: "stack" },
      { value: "Booking", label: "inquiry UI" },
    ],
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/roamify-travels.jpg",
    imageAlt:
      "Roamify Travels homepage with ocean-cliff hero, booking bar, and destination cards",
    live: "https://roamify-travels.netlify.app/",
    github: "https://github.com/iqraaslam2207-collab/roamify-travels",
  },
  {
    id: "holiday-directory",
    title: "Holiday Directory",
    kind: "travel",
    problem:
      "Vacation rental directory — search stays, city guides, and last-minute deals with a live GitHub Pages demo.",
    metrics: [
      { value: "Live", label: "GitHub Pages" },
      { value: "Rentals", label: "search" },
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/holiday-directory-hero.jpg",
    imageAlt:
      "Holiday Directory homepage with map, camera, and stay search: What are you looking for, Location, Categories",
    live: "https://iqraaslam2207-collab.github.io/holiday-directory/home.html",
    github: "https://github.com/iqraaslam2207-collab/holiday-directory",
  },
  {
    id: "nestora-design",
    title: "Nestora Design",
    kind: "design",
    problem:
      "Furniture and interior storefront in React and Vite — collections, product pages, and a working contact form.",
    metrics: [
      { value: "Vite", label: "stack" },
      { value: "Live", label: "GitHub Pages" },
    ],
    tags: ["React", "Vite", "Tailwind CSS"],
    image: "/projects/nestora-design.jpg",
    imageAlt:
      "Nestora Design homepage with hero, Explore Collection, and furniture product grid",
    live: "https://iqraaslam2207-collab.github.io/Nestora-Design/",
    github: "https://github.com/iqraaslam2207-collab/Nestora-Design",
  },
  {
    id: "maison-soleil",
    title: "Maison Soleil",
    kind: "dashboard",
    problem:
      "Hotel booking confirmation dashboard — guest details, Wi-Fi copy, print, and calendar download.",
    metrics: [
      { value: "Guest", label: "confirmation" },
      { value: "ICS", label: "calendar" },
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/maison-soleil.jpg",
    imageAlt:
      "Maison Soleil hotel booking confirmation with stay details, amenities, and guest information",
    live: "https://iqraaslam2207-collab.github.io/hotel-booking-confirmation/",
    github: "https://github.com/iqraaslam2207-collab/hotel-booking-confirmation",
  },
  {
    id: "codealpha-calculator",
    title: "CodeAlpha Calculator",
    kind: "intern",
    problem:
      "Internship calculator with keyboard support and safer evaluation — HTML, CSS, and JavaScript.",
    metrics: [
      { value: "Keys", label: "keyboard" },
      { value: "Live", label: "GitHub Pages" },
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/codealpha-calculator.jpg",
    imageAlt: "Simple Calculator with a dark keypad and orange equals button",
    live: "https://iqraaslam2207-collab.github.io/CodeAlpha-Calculator/",
    github: "https://github.com/iqraaslam2207-collab/CodeAlpha-Calculator",
  },
  {
    id: "codealpha-gallery",
    title: "CodeAlpha Gallery",
    kind: "intern",
    problem:
      "Internship image gallery with category filters and a lightbox — HTML, CSS, and JavaScript.",
    metrics: [
      { value: "Filters", label: "categories" },
      { value: "Live", label: "GitHub Pages" },
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/codealpha-gallery.jpg",
    imageAlt: "Image gallery with All, Nature, Architecture, and Travel filters",
    live: "https://iqraaslam2207-collab.github.io/-CodeAlpha-Image-Gallery-/",
    github: "https://github.com/iqraaslam2207-collab/-CodeAlpha-Image-Gallery-",
  },
];
