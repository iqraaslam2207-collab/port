import { projects } from "../data/site.js";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-forest">Selected work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Four live product screens.
          </h2>
          <p className="mt-3 text-base text-mute">
            Travel, commerce, interiors, and a hotel guest page — each one you can open.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16">
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
