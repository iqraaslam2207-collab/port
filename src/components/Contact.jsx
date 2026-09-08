import { useEffect, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { site } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [clock, setClock] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  useEffect(() => {
    const tick = () => {
      setClock(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: site.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(site.email);
      } else {
        throw new Error("clipboard unavailable");
      }
      setCopied(true);
    } catch {
      const field = document.createElement("textarea");
      field.value = site.email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
      setCopied(true);
    }
    window.setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const nextErrors = {};

    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Please enter a valid email.";
    if (message.length < 10) nextErrors.message = "Add a little more about the project.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const subject = `Project enquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email client to send the message.");
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 rounded-3xl border border-zinc-800/80 bg-zinc-950/55 p-6 backdrop-blur-md sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-violet-300/80">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-4xl">
              Start a project.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              Email is fastest. If the form is easier, it opens a message in your mail client — nothing is stored on a server.
            </p>

            <div className="mt-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Direct email</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-100"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {site.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 px-2.5 py-1 text-xs text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-50"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <p className="mt-4 text-sm text-zinc-400">
                Local time · {site.timezoneLabel}
                {clock ? <span className="text-zinc-200"> · {clock}</span> : null}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="grid gap-4" onSubmit={onSubmit} noValidate>
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-sm text-zinc-300">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  className="rounded-xl border border-zinc-800 bg-zinc-950/70 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600"
                />
                {errors.name ? <p className="text-xs text-red-400">{errors.name}</p> : null}
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="email" className="text-sm text-zinc-300">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@email.com"
                  className="rounded-xl border border-zinc-800 bg-zinc-950/70 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600"
                />
                {errors.email ? <p className="text-xs text-red-400">{errors.email}</p> : null}
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm text-zinc-300">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="What should we build?"
                  className="resize-y rounded-xl border border-zinc-800 bg-zinc-950/70 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600"
                />
                {errors.message ? <p className="text-xs text-red-400">{errors.message}</p> : null}
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
              >
                Send message
              </button>
              {status ? (
                <p className="text-sm text-emerald-400" role="status">
                  {status}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
