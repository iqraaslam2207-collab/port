import { useMemo, useState } from "react";
import Reveal from "./Reveal.jsx";

export default function Playground() {
  const [rps, setRps] = useState(18);
  const [burst, setBurst] = useState(0);
  const limit = 24;
  const windowMs = 1000;

  const result = useMemo(() => {
    const incoming = rps + burst;
    const allowed = Math.min(incoming, limit);
    const rejected = Math.max(0, incoming - limit);
    const remaining = Math.max(0, limit - allowed);
    return {
      allowed: rejected === 0,
      incoming,
      accepted: allowed,
      rejected,
      remaining,
      retryAfterMs: rejected ? windowMs : 0,
      latencyMs: 38 + Math.round(incoming * 1.4),
    };
  }, [rps, burst]);

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Architecture showcase</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            API rate-limit visualizer
          </h2>
          <p className="mt-3 text-sm text-mute">
            Token-bucket model: {limit} requests / {windowMs}ms. Push the slider or fire a burst to watch 429s appear.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="glass mt-8 grid gap-6 rounded-2xl p-5 sm:p-7 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <label htmlFor="rps" className="font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
              Requests / second · {rps}
            </label>
            <input
              id="rps"
              type="range"
              min="1"
              max="60"
              value={rps}
              onChange={(event) => setRps(Number(event.target.value))}
              className="mt-3 w-full accent-violet"
            />
            <button
              type="button"
              onClick={() => {
                setBurst(20);
                window.setTimeout(() => setBurst(0), 900);
              }}
              className="mt-5 rounded-xl border border-line px-4 py-2 text-sm text-ink hover:border-cyan/40"
            >
              Fire +20 burst
            </button>
            <div className="mt-6 grid grid-cols-12 gap-1.5">
              {Array.from({ length: 24 }).map((_, index) => {
                const filled = index < result.accepted;
                const overflow = index >= result.accepted && index < Math.min(24, result.incoming);
                return (
                  <span
                    key={index}
                    className={`h-7 rounded-sm ${
                      filled ? "bg-signal/80" : overflow ? "bg-violet/70" : "bg-white/6"
                    }`}
                  />
                );
              })}
            </div>
            <p className="mt-3 font-mono text-[11px] text-mute">
              green = accepted · violet = 429
            </p>
          </div>

          <pre className="overflow-x-auto rounded-xl bg-black/35 p-4 font-mono text-[12px] leading-6 text-cyan">
{JSON.stringify(
  {
    route: "/v1/search",
    windowMs,
    limit,
    allowed: result.allowed,
    accepted: result.accepted,
    rejected: result.rejected,
    remaining: result.remaining,
    retryAfterMs: result.retryAfterMs,
    latencyMs: result.latencyMs,
  },
  null,
  2
)}
          </pre>
        </Reveal>
      </div>
    </section>
  );
}
