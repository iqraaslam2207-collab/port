import { experience } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Sprints, systems, shipped work.</h2>
        </Reveal>

        <ol className="relative mt-12 border-l border-line pl-6 sm:pl-8">
          {experience.map((item, index) => (
            <li key={item.id} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-violet sm:-left-[37px]" />
              <Reveal delay={index * 0.05}>
                <time className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">{item.period}</time>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-cyan/80">{item.org}</p>
                <p className="mt-3 max-w-2xl text-sm text-mute">{item.summary}</p>
                <p className="mt-2 max-w-2xl text-sm text-ink">{item.impact}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
