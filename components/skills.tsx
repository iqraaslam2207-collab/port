import { skillGroups } from "@/lib/skills";

export function Skills() {
  return (
    <section id="skills" className="section-anchor px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="kicker mb-4">Stack</p>
          <h2 className="text-4xl font-light">Tools I ship with</h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <h3 className="mb-2 text-lg text-gold">{group.label}</h3>
              <p className="mb-4 text-sm leading-6 text-fg-muted">{group.blurb}</p>
              <ul className="space-y-2 text-sm text-fg">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
