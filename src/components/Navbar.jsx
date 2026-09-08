import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
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
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
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
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a href="#home" className="flex items-center gap-2.5" onClick={close}>
          <span className="grid h-8 w-8 place-items-center rounded-md bg-ink text-[11px] font-semibold text-canvas">
            {site.monogram}
          </span>
          <span className="hidden text-sm font-semibold sm:block">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-1.5 text-[13px] ${
                active === link.href ? "bg-paper text-ink" : "text-mute hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <StatusBadge label={site.availabilityLabel} className="hidden md:inline-flex" />
          <a
            href={site.resumeUrl}
            className="inline-flex items-center gap-1.5 rounded-md bg-mango px-3 py-1.5 text-[13px] font-semibold text-ink"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-md border border-line lg:hidden"
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
        <div id="mobile-nav" className="border-t border-line bg-canvas px-4 py-3 lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-md px-3 py-2.5 text-sm hover:bg-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
