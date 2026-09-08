import { techCategories } from "../data/site.js";
import { usePortfolio } from "../context/PortfolioContext.jsx";
import TechBadge from "./TechBadge.jsx";

export default function TechStack() {
  const { activeStack, setActiveStack } = usePortfolio();

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
            className={`glass rounded-2xl p-4 text-left transition-shadow ${
              active ? "shadow-[0_0_0_1px_rgb(6_182_212_/_0.5),0_0_28px_-12px_rgb(6_182_212_/_0.8)]" : ""
            }`}
          >
            <h3 className="text-sm font-semibold">{category.title}</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {category.items.map((item) => (
                <TechBadge key={item} label={item} />
              ))}
            </div>
          </button>
        );
      })}
    </div>
  );
}
