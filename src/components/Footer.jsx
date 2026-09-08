import { ArrowUp } from "lucide-react";
import { site } from "../data/site.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-mute">
          © {year} {site.name}
        </p>
        <a href="#home" className="inline-flex items-center gap-2 text-sm text-mute hover:text-ink">
          Back to top
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
