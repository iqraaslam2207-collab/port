import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, site } from "../data/site.js";
import StatusBadge from "./StatusBadge.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={`pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 backdrop-blur-md transition-colors duration-300 sm:px-4 ${
          scrolled
            ? "border-zinc-800/80 bg-zinc-950/80 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.8)]"
            : "border-zinc-800/60 bg-zinc-950/55"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 shrink-0" onClick={close}>
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-[11px] font-semibold tracking-tight text-zinc-50">
            {site.monogram}
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-zinc-100 sm:block">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-1.5 text-[13px] transition-colors ${
                active === link.href
                  ? "bg-zinc-900 text-zinc-50"
                  : "text-zinc-400 hover:bg-zinc-900/70 hover:text-zinc-100"
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
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-[13px] font-medium text-zinc-100 transition-colors hover:border-zinc-700 hover:bg-zinc-800"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-800 text-zinc-200 lg:hidden"
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
        <div
          id="mobile-nav"
          className="pointer-events-auto mx-auto mt-2 max-w-6xl rounded-2xl border border-zinc-800/80 bg-zinc-950/95 p-3 backdrop-blur-md lg:hidden"
        >
          <nav className="grid gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-lg px-3 py-2.5 text-sm text-zinc-200 hover:bg-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 px-3 pb-2">
            <StatusBadge label={site.availabilityLabel} />
          </div>
        </div>
      ) : null}
    </header>
  );
}
