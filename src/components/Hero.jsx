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
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pb-28">
        <Reveal>
          <StatusBadge label={site.availabilityLabel} className="mb-6 inline-flex" />
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-violet-300/80">
            {site.role} · {site.location}
          </p>
          <h1 className="max-w-xl text-[clamp(2.35rem,6vw,4.35rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-zinc-50">
            {site.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {site.pitch}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
            >
              View Selected Work
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
            >
              Get in Touch
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
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-950/50 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-50"
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="relative" aria-hidden="true">
          <div className="absolute -inset-6 rounded-[2rem] bg-violet-500/5 blur-2xl" aria-hidden="true" />
          <div className="relative">
            {preview.map((project, index) => (
              <article
                key={project.id}
                className={`overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/80 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)] ${
                  index === 1 ? "-mt-10 ml-8 sm:ml-16" : ""
                }`}
              >
                <div className="flex items-center gap-1.5 border-b border-zinc-800/80 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="ml-2 truncate text-[11px] tracking-wide text-zinc-500">
                    {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                  </span>
                </div>
                <img
                  src={project.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </article>
            ))}
            <p className="mt-4 text-right text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              System previews · live product surfaces
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
