import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { site, socials } from "../data/site.js";
import { usePortfolio } from "../context/PortfolioContext.jsx";
import Reveal from "./Reveal.jsx";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export default function Contact() {
  const { showToast } = usePortfolio();
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const nextErrors = {};
    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email.";
    if (message.length < 10) nextErrors.message = "Add a little more about the project.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const subject = `Project enquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email client.");
    showToast("Opening mail client");
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="scroll-mt-28 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Contact</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Let’s build something scalable.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="max-w-md text-mute">
              Email is fastest. The form opens your mail client — nothing is stored on a server.
            </p>
            <a href={`mailto:${site.email}`} className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-ink">
              <Mail className="h-5 w-5 text-cyan" />
              {site.email}
            </a>
            <ul className="mt-6 flex flex-wrap gap-2">
              {socials.map((item) => {
                const Icon = icons[item.icon] || Mail;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-mute hover:text-ink"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 font-mono text-[11px] text-mute">
              {site.location} · {site.timezoneLabel}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="glass grid gap-4 rounded-2xl p-5 sm:p-7" onSubmit={onSubmit} noValidate>
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-sm">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  className="rounded-xl border border-line bg-black/25 px-3 py-2.5 text-sm"
                />
                {errors.name ? <p className="text-xs text-cyan">{errors.name}</p> : null}
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="rounded-xl border border-line bg-black/25 px-3 py-2.5 text-sm"
                />
                {errors.email ? <p className="text-xs text-cyan">{errors.email}</p> : null}
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm">
                  Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="resize-y rounded-xl border border-line bg-black/25 px-3 py-2.5 text-sm"
                />
                {errors.message ? <p className="text-xs text-cyan">{errors.message}</p> : null}
              </div>
              <button type="submit" className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-void">
                Send message
              </button>
              {status ? (
                <p className="text-sm text-signal" role="status">
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
