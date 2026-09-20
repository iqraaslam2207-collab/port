"use client";

import { useId, useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sent";

export function Contact() {
  const formId = useId();
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Name, email, and a short brief are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email.");
      return;
    }

    setError(null);
    setStatus("sent");
    const subject = encodeURIComponent("Project inquiry");
    const body = encodeURIComponent(
      `Hi ${site.name},\n\n${message}\n\n— ${name}\n${email}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-anchor px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="kicker mb-4">Get in touch</p>
        <h2 className="mb-6 text-4xl font-light">Let’s build together</h2>
        <p className="mb-8 text-fg-muted">
          {site.timezone} · {site.utcOffset}. {site.availability}.
        </p>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <button
            type="button"
            onClick={() => void copyEmail()}
            className="text-gold hover:text-gold-hover"
          >
            {copied ? "Copied" : site.email}
          </button>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted hover:text-gold"
          >
            GitHub
          </a>
          {site.linkedin ? (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-gold"
            >
              LinkedIn
            </a>
          ) : null}
        </div>

        {status === "sent" ? (
          <p role="status" className="text-lg font-light">
            Thanks — your mail client should open next.
          </p>
        ) : (
          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5 text-left">
            <Field id={`${formId}-name`} name="name" label="Name" placeholder="Your name" />
            <Field
              id={`${formId}-email`}
              name="email"
              label="Email"
              type="email"
              placeholder="Your email"
            />
            <div>
              <label htmlFor={`${formId}-message`} className="sr-only">
                Brief
              </label>
              <textarea
                id={`${formId}-message`}
                name="message"
                rows={5}
                className="field resize-y"
                placeholder="Your message"
              />
            </div>
            {error ? (
              <p className="text-sm text-danger" role="alert">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              className="cursor-pointer rounded bg-gold py-3 font-medium text-ink transition-colors duration-150 hover:bg-gold-hover"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  placeholder,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="field"
      />
    </div>
  );
}
