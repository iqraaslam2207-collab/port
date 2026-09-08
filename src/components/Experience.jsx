import { experience } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-violet-300/80">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-4xl">
            Milestones and deliveries
          </h2>
        </Reveal>

        <ol className="relative mt-12 border-l border-zinc-800/80 pl-6 sm:pl-8">
          {experience.map((item, index) => (
            <li key={item.id} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-zinc-600 bg-zinc-950 sm:-left-[37px]"
                aria-hidden="true"
              />
              <Reveal delay={index * 0.05}>
                <time className="inline-flex rounded-full border border-zinc-800/80 bg-zinc-900/50 px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-300">
                  {item.period}
                </time>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-50">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{item.org}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">{item.summary}</p>
                <p className="mt-2 max-w-2xl text-sm text-zinc-300">{item.impact}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
