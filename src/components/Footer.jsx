import { Github, Linkedin, Mail } from "lucide-react";
import { site, socials } from "../data/site.js";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex flex-wrap items-center gap-2">
          {socials.map((item) => {
            const Icon = icons[item.icon] || Mail;
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-mute hover:text-ink"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
        <a href="#home" className="text-sm text-mute hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  );
}
