"use client";

import { useState } from "react";
import Link from "next/link";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX"; // <-- PUT YOURS

export default function ContactEN() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">Waypoint · contact</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Contact
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          Send a short message. If you add your email, I can reply directly.
          If not — I’ll treat it as an anonymous suggestion.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Anti-spam honeypot */}
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label className="block text-sm font-medium text-zinc-200">
                Message <span className="text-zinc-500">(required)</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your message…"
                className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/30 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-cyan-400/40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-200">
                Email <span className="text-zinc-500">(optional)</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="e.g. adam@mail.com"
                className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/30 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-cyan-400/40"
              />
              <p className="mt-2 text-xs text-zinc-500">
                If you provide an email — I can reply to you directly.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send"}
              </button>

              <Link
                href="/en"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
              >
                ← Back home
              </Link>
            </div>

            {status === "sent" && (
              <p className="text-sm text-emerald-200">
                ✅ Sent. Thank you — it genuinely helps improve Waypoint.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-300">
                ⚠️ Something went wrong. Please try again in a moment.
              </p>
            )}

            <p className="text-xs text-zinc-500">
              Please don’t send sensitive data. Waypoint is not an emergency service.
              In a crisis, call your local emergency number.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}