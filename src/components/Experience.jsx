import { experience } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-forest">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Work and deliveries
          </h2>
        </Reveal>

        <ol className="relative mt-12 border-l border-line pl-6 sm:pl-8">
          {experience.map((item, index) => (
            <li key={item.id} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-line bg-mango sm:-left-[37px]"
                aria-hidden="true"
              />
              <Reveal delay={index * 0.04}>
                <time className="text-xs font-medium text-mute">{item.period}</time>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-mute">{item.org}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute">{item.summary}</p>
                <p className="mt-2 max-w-2xl text-sm">{item.impact}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
