import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/site.js";
import { usePortfolio } from "../context/PortfolioContext.jsx";
import Reveal from "./Reveal.jsx";
import TechBadge from "./TechBadge.jsx";
import TiltCard from "./TiltCard.jsx";

export default function Projects() {
  const { activeStack } = usePortfolio();
  const featured = projects.find((project) => project.featured) || projects[0];
  const rest = projects.filter((project) => project.id !== featured.id);

  return (
    <section id="projects" className="scroll-mt-28 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Featured work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Production surfaces, not case-study filler.</h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <FeatureCard project={featured} dimmed={isDimmed(featured.id, activeStack)} featured />
          {rest.map((project) => (
            <FeatureCard key={project.id} project={project} dimmed={isDimmed(project.id, activeStack)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function isDimmed(id, activeStack) {
  if (!activeStack) return false;
  return !activeStack.projectIds.includes(id);
}

function FeatureCard({ project, featured = false, dimmed = false }) {
  const isLive = project.liveUrl && project.liveUrl !== project.repoUrl;

  return (
    <TiltCard className={featured ? "lg:col-span-2 lg:row-span-2" : ""}>
      <article
        className={`glass group h-full overflow-hidden rounded-2xl transition-[opacity,box-shadow] duration-300 ${
          dimmed ? "opacity-35" : "hover:shadow-[0_0_0_1px_rgb(124_58_237_/_0.45),0_24px_60px_-32px_rgb(124_58_237_/_0.55)]"
        }`}
      >
        <a href={project.liveUrl || project.repoUrl} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
          <img
            src={project.image}
            alt={project.alt}
            className={`w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04] ${
              featured ? "aspect-[16/9] lg:aspect-[16/8.4]" : "aspect-[16/10]"
            }`}
          />
        </a>
        <div className={`p-5 ${featured ? "sm:p-7" : ""}`}>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">
            {project.kicker} · {project.year}
          </p>
          <h3 className={`mt-2 font-semibold tracking-tight ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-mute">{project.summary}</p>
          {featured && project.flow ? (
            <ol className="mt-5 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-mute">
              {project.flow.map((step, index) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="rounded-md border border-line px-2 py-1 text-ink">{step}</span>
                  {index < project.flow.length - 1 ? <span className="text-violet">→</span> : null}
                </li>
              ))}
            </ol>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TechBadge key={tag} label={tag} />
            ))}
          </div>
          <div className="mt-5 flex items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink"
            >
              {isLive ? "Live demo" : "Open"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-mute hover:text-ink"
              aria-label={`${project.title} GitHub`}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
