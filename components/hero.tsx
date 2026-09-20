import { heroStack } from "@/lib/skills";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center px-6 text-center">
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute inset-0"
      />
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="kicker mb-6">{site.title}</p>
        <h1 className="mb-8 text-[clamp(2.4rem,7vw,4.5rem)] font-light leading-[1.1]">
          Scalable web apps
          <br />
          for modern products
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-fg-muted">
          Node.js, Express, React, Next.js, MongoDB, PostgreSQL, REST/GraphQL
          APIs, and custom WordPress — built for speed, auth, and editors who
          ship.
        </p>
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center rounded bg-gold px-8 py-3 font-medium text-ink transition-colors duration-150 hover:bg-gold-hover"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded border border-line px-8 py-3 font-medium text-fg transition-colors duration-150 hover:border-gold hover:text-gold"
          >
            Get in touch
          </a>
        </div>
        <p className="text-sm tracking-wide text-fg-faint">
          {heroStack.map((item) => item.label).join("  ·  ")}
        </p>
      </div>
    </section>
  );
}
