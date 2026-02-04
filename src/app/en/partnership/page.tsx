"use client";

import { useState } from "react";
import Link from "next/link";

export default function PartnershipEN() {
  const action = process.env.NEXT_PUBLIC_PARTNER_FORM_ACTION_EN ?? "";
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · partnership</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Partner application
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          If you offer real value for men (training, trips, legal help, support,
          community) — you can apply. We review manually and publish only solid,
          helpful services.
        </p>

        {/* ✅ BUTTONS (packages + contact) */}
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/en/partnership/packages"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-800/50 px-4 py-2 text-sm font-semibold text-zinc-100 ring-1 ring-zinc-700/70 hover:bg-zinc-800/70 transition"
          >
            View partnership packages →
          </Link>

          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
          >
            Contact →
          </Link>
        </div>

        <section className="mt-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Application form
          </h2>

          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            Fill in the details. If you have a PDF/offer or links — attach them.
          </p>

          {!action ? (
            <div className="mt-6 rounded-2xl border border-zinc-800/60 bg-zinc-950/20 p-5">
              <p className="text-sm text-zinc-200 font-semibold">
                The form is not connected yet.
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                Set{" "}
                <span className="text-zinc-200 font-medium">
                  NEXT_PUBLIC_PARTNER_FORM_ACTION_EN
                </span>{" "}
                in <span className="text-zinc-200 font-medium">.env.local</span>{" "}
                (e.g. Formspree), then come back here.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/en"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-800/50 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700/70 hover:bg-zinc-800/70 transition"
                >
                  ← Back home
                </Link>
              </div>
            </div>
          ) : sent ? (
            <div className="mt-6 rounded-2xl border border-zinc-800/60 bg-zinc-950/20 p-6">
              <h3 className="text-lg font-semibold text-zinc-100">
                Thanks — application sent ✅
              </h3>

              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                If it’s a good fit, we’ll reach out by email. Usually within
                24–72 hours.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/en/partners"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-900/30 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-800/60 hover:bg-zinc-800/40 transition"
                >
                  View resources →
                </Link>

                <Link
                  href="/en"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-800/50 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700/70 hover:bg-zinc-800/70 transition"
                >
                  ← Back
                </Link>
              </div>
            </div>
          ) : (
            <form
              action={action}
              method="POST"
              encType="multipart/form-data"
              className="mt-6 grid grid-cols-1 gap-4"
              onSubmit={() => setSent(true)}
            >
              {/* ✅ Formspree redirect */}
              <input
                type="hidden"
                name="_redirect"
                value="https://menmind.app/en/thanks"
              />
              <input
                type="hidden"
                name="_subject"
                value="MenMind — partner application (EN)"
              />

              {/* Honeypot anti-spam */}
              <input type="text" name="_gotcha" className="hidden" />

              {/* Meta */}
              <input
                type="hidden"
                name="source"
                value="menmind.app/partnership (EN)"
              />
              <input type="hidden" name="language" value="en" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name / company" name="name" required />
                <Field
                  label="Contact email"
                  name="email"
                  type="email"
                  required
                />
              </div>

              <Field
                label="Your offer (short & clear)"
                name="offer"
                textarea
                placeholder="e.g. 1:1 training / legal mediation / men’s outdoor trips..."
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="City (or: Online)"
                  name="city"
                  placeholder="e.g. Berlin / London / Online"
                  required
                />
                <Field
                  label="Website / Instagram / link"
                  name="link"
                  placeholder="https://..."
                />
              </div>

              <Field
                label="Who is this for?"
                name="target"
                textarea
                placeholder="e.g. men in crisis, fathers, divorce, pressure..."
              />

              <Field
                label="Why does it work? (2–3 sentences)"
                name="proof"
                textarea
                placeholder="e.g. experience, approach, numbers, style of work..."
              />

              <div className="rounded-2xl border border-zinc-800/60 bg-zinc-950/20 p-4">
                <p className="text-sm font-semibold text-zinc-100">
                  Attachments (optional)
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  You can add a PDF/offer/price list (if your form provider
                  supports it).
                </p>

                <input
                  type="file"
                  name="attachment"
                  className="mt-3 w-full text-sm text-zinc-300 file:mr-4 file:rounded-xl file:border-0 file:bg-zinc-800/50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-zinc-200 hover:file:bg-zinc-800/70 transition"
                />
              </div>

              <div className="mt-2 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-5 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
                >
                  Send application →
                </button>

                <Link
                  href="/en"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-800/50 px-5 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700/70 hover:bg-zinc-800/70 transition"
                >
                  ← Back
                </Link>
              </div>

              <p className="mt-3 text-xs text-zinc-500">
                By submitting, you confirm the information is accurate. We review
                manually and publish only verified value.
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
          rows={4}
          className="mt-2 w-full rounded-xl border border-zinc-800/60 bg-zinc-950/20 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-cyan-500/20"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="mt-2 w-full rounded-xl border border-zinc-800/60 bg-zinc-950/20 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-cyan-500/20"
        />
      )}
    </label>
  );
}