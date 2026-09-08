import { projects } from "../data/site.js";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-violet-300/80">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-4xl">
            Featured projects
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Live product surfaces — each one with a concrete engineering problem, an architectural response, and a measurable outcome.
          </p>
        </Reveal>

        <div className="mt-14 space-y-20">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.04}>
              <ProjectCard project={project} reverse={index % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
