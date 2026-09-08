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
  const [clock, setClock] = useState("");

  useEffect(() => {
    if (visibleCount >= terminalLines.length) return undefined;
    const id = window.setTimeout(() => setVisibleCount((count) => count + 1), 380);
    return () => window.clearTimeout(id);
  }, [visibleCount]);

  useEffect(() => {
    const tick = () => {
      setClock(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: site.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

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
    <section id="home" className="relative overflow-hidden px-4 pt-28 pb-10 sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal immediate>
          <StatusBadge label={site.availabilityLabel} className="mb-6 inline-flex sm:hidden" />
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
            {site.role} · {site.location}
          </p>
          <h1 className="max-w-xl text-[clamp(2.5rem,6vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.055em]">
            {site.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            {site.pitch}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary group inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold">
              Explore Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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

        <Reveal immediate delay={0.1} className="relative">
          <div className="mesh pointer-events-none absolute -inset-10 -z-10" aria-hidden="true" />
          <div className="glass glow-border overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-[11px] text-mute">ia@systems — zsh</span>
              <span className="ml-auto font-mono text-[10px] text-cyan/80">{clock ? `${site.timezoneLabel.split(" · ")[0]} ${clock}` : site.timezoneLabel}</span>
            </div>
            <div className="min-h-[248px] space-y-2 bg-black/30 p-4 font-mono text-[12px] leading-6 sm:text-[13px]">
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
