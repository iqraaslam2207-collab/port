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
    <section id="contact" className="scroll-mt-24 border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 border border-line bg-paper p-6 sm:p-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-medium text-forest">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Start a project.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mute">
              Email is fastest. The form opens your mail app — nothing is stored on a server.
            </p>
            <div className="mt-8">
              <p className="text-xs text-mute">Direct email</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-sm font-semibold">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {site.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1 text-xs hover:bg-canvas"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-forest" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <p className="mt-4 text-sm text-mute">
                Local time · {site.timezoneLabel}
                {clock ? <span className="text-ink"> · {clock}</span> : null}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <form className="grid gap-4" onSubmit={onSubmit} noValidate>
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-sm">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  className="rounded-md border border-line bg-canvas px-3 py-2.5 text-sm"
                />
                {errors.name ? <p className="text-xs text-red-700">{errors.name}</p> : null}
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="email" className="text-sm">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@email.com"
                  className="rounded-md border border-line bg-canvas px-3 py-2.5 text-sm"
                />
                {errors.email ? <p className="text-xs text-red-700">{errors.email}</p> : null}
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="What should we build?"
                  className="resize-y rounded-md border border-line bg-canvas px-3 py-2.5 text-sm"
                />
                {errors.message ? <p className="text-xs text-red-700">{errors.message}</p> : null}
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center rounded-md bg-mango px-4 py-2.5 text-sm font-semibold text-ink"
              >
                Send message
              </button>
              {status ? (
                <p className="text-sm text-forest" role="status">
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
