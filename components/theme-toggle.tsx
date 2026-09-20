"use client";

import { useEffect } from "react";
import {
  applyTheme,
  persistTheme,
  resolveTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";

export function ThemeToggle() {
  useEffect(() => {
    applyTheme(resolveTheme());

    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onSystem = () => {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        applyTheme(media.matches ? "light" : "dark");
      }
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY) return;
      applyTheme(resolveTheme());
    };

    media.addEventListener("change", onSystem);
    window.addEventListener("storage", onStorage);
    return () => {
      media.removeEventListener("change", onSystem);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  function toggle() {
    const current = document.documentElement.dataset.theme;
    const next: Theme = current === "light" ? "dark" : "light";
    persistTheme(next);
  }

  return (
    <button
      type="button"
      className="inline-flex size-10 cursor-pointer items-center justify-center rounded border border-line text-fg-muted transition-colors duration-150 hover:border-gold hover:text-gold"
      aria-label="Toggle light and dark mode"
      onClick={toggle}
    >
      <span className="grid size-5 place-items-center" aria-hidden>
        <SunIcon className="theme-icon-sun col-start-1 row-start-1 size-5" />
        <MoonIcon className="theme-icon-moon col-start-1 row-start-1 size-5" />
      </span>
    </button>
  );
}

function SunIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="3.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 3.2v2.1M12 18.7v2.1M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M3.2 12h2.1M18.7 12h2.1M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M15.4 3.6a7.8 7.8 0 1 0 4.9 12.4 6.4 6.4 0 0 1-4.9-12.4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
