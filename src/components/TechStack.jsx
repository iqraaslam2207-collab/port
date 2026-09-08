import { useState } from "react";
import { techCategories } from "../data/site.js";
import Reveal from "./Reveal.jsx";
import TechBadge from "./TechBadge.jsx";

export default function TechStack() {
  const [active, setActive] = useState(techCategories[0].id);
  const current = techCategories.find((item) => item.id === active) || techCategories[0];

  return (
    <section id="architecture" className="scroll-mt-24 border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-forest">Stack</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Tools I use to ship.
          </h2>
        </Reveal>

        <Reveal delay={0.06} className="mt-10 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div className="flex gap-2 overflow-x-auto lg:flex-col" role="tablist" aria-label="Tech categories">
            {techCategories.map((category) => {
              const selected = category.id === active;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(category.id)}
                  className={`whitespace-nowrap rounded-md border px-4 py-3 text-left text-sm ${
                    selected ? "border-ink bg-ink text-canvas" : "border-line bg-paper text-mute hover:text-ink"
                  }`}
                >
                  {category.title}
                </button>
              );
            })}
          </div>

          <article className="rounded-lg border border-line bg-paper p-6 sm:p-8">
            <h3 className="text-xl font-semibold">{current.title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-mute">{current.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {current.items.map((item) => (
                <TechBadge key={item} label={item} />
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
