import { site } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-violet-300/80">
            About
          </p>
          <h2 className="mt-3 max-w-sm text-3xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-4xl">
            Product-minded engineering, built to last.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="max-w-2xl space-y-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="text-sm text-zinc-500">
            {site.location} · {site.timezoneLabel}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
