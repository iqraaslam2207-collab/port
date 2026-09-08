import { ArrowUp } from "lucide-react";
import { site } from "../data/site.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-zinc-500">
          © {year} {site.name}. All rights reserved.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
