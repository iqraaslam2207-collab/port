import { ArrowUp } from "lucide-react";
import { site } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">
          © {new Date().getFullYear()} {site.name}
        </p>
        <a href="#home" className="inline-flex items-center gap-2 text-sm text-mute hover:text-ink">
          Back to top
          <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
