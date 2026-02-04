"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactEN() {
  const action = process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION_EN ?? "";
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · contact</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Contact</h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          Send us a message — short and clear. We usually reply within 24–72 hours.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="mb-6 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
            <p className="text-sm text-zinc-400">General email:</p>
            <p className="mt-1 text-sm font-semibold text-zinc-100">
              kontakt.menmind@gmail.com
            </p>
            <p className="mt-2 text-xs text-zinc-500">
              Yes, it works. No, you don’t need a carrier pigeon 🕊️
            </p>
          </div>

          {!action ? (
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-200 font-semibold">
                Contact form is not connected yet.
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                Set{" "}
                <span className="text-zinc-200 font-medium">
                  NEXT_PUBLIC_CONTACT_FORM_ACTION_EN
                </span>{" "}
                in <span className="text-zinc-200 font-medium">Vercel</span> or{" "}
                <span className="text-zinc-200 font-medium">.env.local</span>.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/en"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
                >
                  ← Back
                </Link>
              </div>
            </div>
          ) : sent ? (
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-6">
              <h3 className="text-lg font-semibold text-zinc-100">
                Thanks — message sent ✅
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                If we need more info, we’ll reach out via email.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/en"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-5 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
                >
                  ← Back home
                </Link>

                <Link
                  href="/en/navimind?state=contact"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-5 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
                >
                  Talk in chat →
                </Link>
              </div>
            </div>
          ) : (
            <form
              action={action}
              method="POST"
              className="grid grid-cols-1 gap-4"
              onSubmit={() => setSent(true)}
            >
              {/* Formspree extras */}
              <input
                type="hidden"
                name="_redirect"
                value="https://menmind.app/en/thanks"
              />
              <input
                type="hidden"
                name="_subject"
                value="MenMind — contact (EN)"
              />

              {/* Honeypot anti-spam */}
              <input type="text" name="_gotcha" className="hidden" />

              {/* Meta */}
              <input
                type="hidden"
                name="source"
                value="menmind.app/contact (EN)"
              />
              <input type="hidden" name="language" value="en" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>

              <Field
                label="Message"
                name="message"
                textarea
                required
                placeholder="e.g. I’d like to collaborate / I have a question / I need help with..."
              />

              <div className="mt-2 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-5 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
                >
                  Send →
                </button>

                <Link
                  href="/en"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-5 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
                >
                  ← Back
                </Link>
              </div>

              <p className="mt-3 text-xs text-zinc-500">
                By sending this message, you agree we may contact you by email.
              </p>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-zinc-200">{label}</span>

      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={5}
          className="mt-2 w-full rounded-xl border border-zinc-800/70 bg-zinc-950/30 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-cyan-500/20"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="mt-2 w-full rounded-xl border border-zinc-800/70 bg-zinc-950/30 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-cyan-500/20"
        />
      )}
    </label>
  );
}
