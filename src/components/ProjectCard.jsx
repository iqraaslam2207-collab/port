import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import TechBadge from "./TechBadge.jsx";

export default function ProjectCard({ project, reverse = false }) {
  const reduce = useReducedMotion();
  const isLive = Boolean(project.liveUrl && project.liveUrl !== project.repoUrl);

  return (
    <article
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
        reverse ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      <a
        href={project.liveUrl || project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <motion.div
          className="window"
          whileHover={reduce ? undefined : { y: -4 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="window-chrome">
            <span />
            <span />
            <span />
          </div>
          <img
            src={project.image}
            alt={project.alt}
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </motion.div>
      </a>

      <div>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-[-0.03em]">{project.title}</h3>
          <span className="text-xs text-mute">{project.year}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-mute">
          {project.points.map((point) => (
            <li key={point} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-mango">
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest"
            >
              {isLive ? "Live site" : "Open project"}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-mute hover:text-ink"
            aria-label={`${project.title} GitHub repository`}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            Code
          </a>
        </div>
      </div>
    </article>
  );
}
