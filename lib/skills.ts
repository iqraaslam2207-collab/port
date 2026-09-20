export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    blurb: "Interfaces that stay fast after the demo.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Zustand",
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    blurb: "Contracts, auth, and realtime — not just CRUD.",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "JWT",
      "OAuth",
    ],
  },
  {
    id: "data",
    label: "Databases & Cloud",
    blurb: "Data that survives traffic, deploys that survive Monday.",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Docker",
      "CI/CD",
      "DigitalOcean",
      "AWS",
    ],
  },
  {
    id: "cms",
    label: "CMS & custom solutions",
    blurb: "WordPress treated as infrastructure, not a plugin pile.",
    items: [
      "Custom themes",
      "WooCommerce",
      "Headless WP",
      "WPGraphQL",
      "REST API",
      "ACF Pro",
      "Performance",
    ],
  },
] as const;

export const heroStack = [
  { id: "react", label: "React" },
  { id: "next", label: "Next.js" },
  { id: "node", label: "Node.js" },
  { id: "mongo", label: "MongoDB" },
  { id: "postgres", label: "PostgreSQL" },
  { id: "wp", label: "WordPress" },
] as const;

export type HeroStackId = (typeof heroStack)[number]["id"];
