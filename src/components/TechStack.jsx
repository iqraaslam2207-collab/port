import { techCategories } from "../data/site.js";
import { usePortfolio } from "../context/PortfolioContext.jsx";
import Reveal from "./Reveal.jsx";
import TechBadge from "./TechBadge.jsx";

export default function TechStack() {
  const { activeStack, setActiveStack } = usePortfolio();

  return (
    <section id="architecture" className="scroll-mt-28 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Technical capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Hover a stack. Watch the work respond.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {techCategories.map((category) => {
            const active = activeStack?.id === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onMouseEnter={() => setActiveStack(category)}
                onMouseLeave={() => setActiveStack(null)}
                onFocus={() => setActiveStack(category)}
                onBlur={() => setActiveStack(null)}
                className={`glass rounded-2xl p-5 text-left transition-shadow ${
                  active ? "shadow-[0_0_0_1px_rgb(6_182_212_/_0.45)]" : ""
                }`}
              >
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <TechBadge key={item} label={item} />
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
