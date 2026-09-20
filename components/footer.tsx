import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-xl font-semibold uppercase tracking-[0.2em] text-gold">
            {site.wordmark}
          </p>
          <p className="mt-2 text-sm text-fg-faint">{site.title}</p>
        </div>
        <div className="flex gap-8 text-sm text-fg-muted">
          <a href="#work" className="hover:text-gold">
            Work
          </a>
          <a href="#skills" className="hover:text-gold">
            Skills
          </a>
          <a href="#contact" className="hover:text-gold">
            Contact
          </a>
        </div>
        <p className="text-sm text-fg-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
