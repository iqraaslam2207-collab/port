"use client";

import { useEffect, useId, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#main"
          className="max-w-[11rem] text-[0.95rem] font-semibold uppercase leading-tight tracking-[0.12em] text-gold sm:max-w-none sm:text-xl sm:tracking-[0.16em]"
          aria-label={`${site.name} home`}
        >
          {site.wordmark}
        </a>
        <div className="flex items-center gap-8">
          <nav
            className="hidden items-center gap-10 text-sm tracking-wide md:flex"
            aria-label="Primary"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-fg-muted transition-colors duration-150 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center text-xl md:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span aria-hidden>{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <nav
          id={menuId}
          aria-label="Mobile"
          className="flex flex-col items-center gap-6 border-t border-line py-6 text-sm md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gold"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
