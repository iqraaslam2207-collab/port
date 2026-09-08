import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "../data/site.js";
import StatusBadge from "./StatusBadge.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

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
      { rootMargin: "-42% 0px -48% 0px", threshold: [0.15, 0.35] }
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
      <div className="pointer-events-auto glass glow-border mx-auto grid max-w-5xl grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl px-3 py-2 sm:px-4">
        <a href="#home" className="flex items-center gap-2.5" onClick={close}>
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-violet/30 bg-panel font-mono text-[11px] font-semibold text-ink">
            {site.monogram}
          </span>
          <span className="hidden text-sm font-semibold lg:block">{site.name}</span>
        </a>

        <nav className="hidden items-center justify-center gap-0.5 md:flex" aria-label="Primary">
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

        <div className="flex items-center justify-end gap-2">
          <StatusBadge label={site.availabilityLabel} className="hidden sm:inline-flex" />
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
          <div className="mt-3 flex items-center justify-between gap-3 px-1">
            <StatusBadge label={site.availabilityLabel} />
            <a href={site.resumeUrl} className="text-sm text-mute" onClick={close}>
              Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
