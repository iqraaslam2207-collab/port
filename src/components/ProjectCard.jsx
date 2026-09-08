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
        style={{ perspective: 1200 }}
      >
        <motion.div
          className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)]"
          whileHover={
            reduce
              ? undefined
              : { rotateX: 4, rotateY: reverse ? 5 : -5, scale: 1.015 }
          }
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.alt}
              className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
          </div>
        </motion.div>
      </a>

      <div>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-zinc-50">{project.title}</h3>
          <span className="text-xs tracking-wide text-zinc-500">{project.year}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-400">
          {project.points.map((point) => (
            <li
              key={point}
              className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-violet-400"
            >
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
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-100 hover:text-white"
            >
              {isLive ? "Live demo" : "Open project"}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-100"
            aria-label={`${project.title} GitHub repository`}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            Repository
          </a>
        </div>
      </div>
    </article>
  );
}
