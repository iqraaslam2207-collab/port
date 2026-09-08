import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { projects, site, socials } from "../data/site.js";
import Reveal from "./Reveal.jsx";
import StatusBadge from "./StatusBadge.jsx";

const icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Hero() {
  const preview = projects.slice(0, 2);

  return (
    <section id="home" className="pt-10 sm:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pb-24">
        <Reveal>
          <StatusBadge label={site.availabilityLabel} className="mb-6 inline-flex" />
          <p className="mb-3 text-sm font-medium text-forest">
            {site.role} · {site.location}
          </p>
          <h1 className="max-w-xl text-[clamp(2.2rem,5.4vw,3.9rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
            {site.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            {site.pitch}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-mango px-4 py-2.5 text-sm font-semibold text-ink"
            >
              See the work
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-line px-4 py-2.5 text-sm font-medium hover:bg-paper"
            >
              Get in touch
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Social">
            {socials.map((item) => {
              const Icon = icons[item.icon] || Mail;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1.5 text-xs text-mute hover:text-ink"
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="relative" aria-hidden="true">
          {preview.map((project, index) => (
            <article key={project.id} className={`window ${index === 1 ? "-mt-8 ml-8 sm:ml-14" : ""}`}>
              <div className="window-chrome">
                <span />
                <span />
                <span />
                <span className="ml-2 truncate text-[11px] text-mute">
                  {project.title}
                </span>
              </div>
              <img
                src={project.image}
                alt=""
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
