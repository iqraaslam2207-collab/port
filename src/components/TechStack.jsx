import { useState } from "react";
import { techCategories } from "../data/site.js";
import Reveal from "./Reveal.jsx";
import TechBadge from "./TechBadge.jsx";

export default function TechStack() {
  const [active, setActive] = useState(techCategories[0].id);
  const current = techCategories.find((item) => item.id === active) || techCategories[0];

  return (
    <section id="architecture" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-violet-300/80">
            Architecture / Tech Stack
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-4xl">
            Capabilities, grouped the way systems are built.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible" role="tablist" aria-label="Tech categories">
            {techCategories.map((category) => {
              const selected = category.id === active;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(category.id)}
                  className={`whitespace-nowrap rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                    selected
                      ? "border-zinc-600 bg-zinc-900 text-zinc-50"
                      : "border-zinc-800/80 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  {category.title}
                </button>
              );
            })}
          </div>

          <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-6 backdrop-blur-md sm:p-8">
            <h3 className="text-xl font-semibold tracking-tight text-zinc-50">{current.title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">{current.description}</p>
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
