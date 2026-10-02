export type CaseStudy = {
  id: string;
  title: string;
  kind: "ecommerce" | "travel";
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
];
