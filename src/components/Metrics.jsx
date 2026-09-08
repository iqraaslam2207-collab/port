import { metrics } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Metrics() {
  return (
    <section aria-label="Impact metrics" className="px-4 pb-8">
      <Reveal className="glass mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-line sm:grid-cols-4">
        {metrics.map((item) => (
          <article key={item.label} className="bg-panel/60 px-5 py-6">
            <p className="font-mono text-2xl font-medium tracking-tight text-ink sm:text-3xl">{item.value}</p>
            <p className="mt-2 text-sm text-mute">{item.label}</p>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
