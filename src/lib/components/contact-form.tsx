"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Icon from "@/lib/components/icon";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-2 w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/30 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15";

const labelClass = "text-xs font-medium uppercase tracking-wider text-ink/50";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      // TODO: wire this up to your email / CRM endpoint (e.g. an API route or form service)
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 px-2 py-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-semibold text-ink">Message sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink/60">
          Thanks for reaching out. Our team will get back to you as soon as
          possible, usually within one business day. For anything urgent, give
          the office a call directly.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm({ name: "", email: "", phone: "", message: "" });
            setStatus("idle");
          }}
          className="btn-secondary mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="jane@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what you need — a new appointment, a question about insurance, anything at all."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your message. Please try again, or call
          the office directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <Icon name="send" className="h-4 w-4" />
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
