import Image from "next/image";
import { caseStudies, type CaseStudy } from "@/lib/projects";

export function Work() {
  return (
    <section id="work" className="section-anchor bg-bg-elevated px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="kicker mb-4">Selected work</p>
          <h2 className="text-4xl font-light">Case studies</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((project) => (
            <CaseCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ project }: { project: CaseStudy }) {
  return (
    <article className="group overflow-hidden border border-line bg-bg transition-colors duration-300 hover:border-gold">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg-elevated">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <p className="mb-2 text-xs tracking-wide text-gold">{kindLabel(project.kind)}</p>
        <h3 className="mb-2 text-lg">{project.title}</h3>
        <p className="mb-4 text-sm leading-6 text-fg-muted">{project.problem}</p>
        <dl className="mb-4 flex gap-6">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dd className="text-sm font-medium text-fg">{metric.value}</dd>
              <dt className="text-[11px] text-fg-faint">{metric.label}</dt>
            </div>
          ))}
        </dl>
        <div className="flex gap-4 text-sm">
          <a
            href={project.live}
            {...(project.live.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="text-gold hover:text-gold-hover"
          >
            Live demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted hover:text-fg"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

function kindLabel(kind: CaseStudy["kind"]): string {
  switch (kind) {
    case "ecommerce":
      return "E-commerce";
    case "travel":
      return "Travel";
    case "design":
      return "Interior";
    case "dashboard":
      return "Dashboard";
    case "intern":
      return "Internship";
    default: {
      const _exhaustive: never = kind;
      return _exhaustive;
    }
  }
}
