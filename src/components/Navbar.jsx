import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, site } from "../data/site.js";
import StatusBadge from "./StatusBadge.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#projects");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.12, 0.3] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-4">
      <div className="pointer-events-auto glass glow-border mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-2xl px-3 py-2.5 sm:px-4">
        <a href="#home" className="flex items-center gap-2.5" onClick={close}>
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-panel font-mono text-[11px] font-semibold text-ink">
            {site.monogram}
          </span>
          <span className="hidden text-sm font-semibold sm:block">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-1.5 text-[13px] transition-colors ${
                active === link.href ? "bg-white/10 text-ink" : "text-mute hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <StatusBadge label={site.availabilityLabel} className="hidden sm:inline-flex" />
          <a
            href={site.resumeUrl}
            className="hidden items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-[13px] text-ink hover:border-violet/50 sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="pointer-events-auto glass mx-auto mt-2 max-w-5xl rounded-2xl p-3 md:hidden">
          <nav className="grid gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={close} className="rounded-lg px-3 py-2.5 text-sm text-ink">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 px-1">
            <StatusBadge label={site.availabilityLabel} />
          </div>
        </div>
      ) : null}
    </header>
  );
}
