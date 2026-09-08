import { useEffect, useState } from "react";
import { ArrowRight, Copy, Check } from "lucide-react";
import { site, terminalLines } from "../data/site.js";
import { usePortfolio } from "../context/PortfolioContext.jsx";
import Reveal from "./Reveal.jsx";
import StatusBadge from "./StatusBadge.jsx";

export default function Hero() {
  const { showToast } = usePortfolio();
  const [copied, setCopied] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    if (visibleCount >= terminalLines.length) return undefined;
    const id = window.setTimeout(() => setVisibleCount((count) => count + 1), 420);
    return () => window.clearTimeout(id);
  }, [visibleCount]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      const field = document.createElement("textarea");
      field.value = site.email;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    showToast("Email copied to clipboard");
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="px-4 pt-28 pb-12 sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal immediate>
          <StatusBadge label={site.availabilityLabel} className="mb-6 inline-flex sm:hidden" />
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
            {site.role} · {site.location}
          </p>
          <h1 className="max-w-xl text-[clamp(2.4rem,5.8vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.05em]">
            {site.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            {site.pitch}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-void"
            >
              Explore Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-ink"
            >
              {copied ? <Check className="h-4 w-4 text-signal" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy Email"}
            </button>
          </div>
        </Reveal>

        <Reveal immediate delay={0.12}>
          <div className="glass glow-border overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-[11px] text-mute">ia@systems — zsh</span>
            </div>
            <div className="min-h-[240px] space-y-2 bg-black/25 p-4 font-mono text-[12px] leading-6 sm:text-[13px]">
              {terminalLines.slice(0, visibleCount).map((line, index) => (
                <p key={`${line.text}-${index}`} className={line.prompt === "ok" ? "text-signal" : "text-mute"}>
                  <span className="text-violet">{line.prompt}</span> {line.text}
                </p>
              ))}
              <span className="inline-block h-4 w-1.5 animate-pulse bg-cyan/80" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
