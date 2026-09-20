import { timeline } from "@/lib/timeline";

export function Experience() {
  return (
    <section id="experience" className="section-anchor bg-bg-elevated px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="kicker mb-4">Experience</p>
          <h2 className="text-4xl font-light">Recent chapters</h2>
        </div>
        <ol className="divide-y divide-line border-y border-line">
          {timeline.map((item) => (
            <li key={item.year} className="grid gap-2 py-8 sm:grid-cols-[5.5rem_1fr] sm:gap-8">
              <p className="text-sm font-medium text-gold">{item.year}</p>
              <div>
                <h3 className="text-xl font-light">{item.title}</h3>
                <p className="mt-1 text-sm text-fg-faint">{item.org}</p>
                <p className="mt-3 text-[15px] leading-7 text-fg-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
