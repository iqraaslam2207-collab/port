import { site } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-medium text-forest">About</p>
          <h2 className="mt-3 max-w-sm text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Faisalabad. Full-stack. Freelance.
          </h2>
        </Reveal>
        <Reveal delay={0.06} className="max-w-2xl space-y-5 text-base leading-relaxed text-mute sm:text-lg">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
