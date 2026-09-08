import { experience } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Sprints, systems, shipped work.</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <article className="glass h-full rounded-2xl p-5 sm:p-6">
                <time className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyan">{item.period}</time>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-mute">{item.org}</p>
                <p className="mt-3 text-sm text-mute">{item.summary}</p>
                <p className="mt-3 text-sm text-ink">{item.impact}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
