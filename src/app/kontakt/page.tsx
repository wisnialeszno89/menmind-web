"use client";

import { useState } from "react";
import Link from "next/link";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX"; // <-- WSTAW SWÓJ

export default function ContactPL() {
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
        <p className="text-sm text-zinc-400">Waypoint · kontakt</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Kontakt
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          Napisz krótko, o co chodzi. Jeśli podasz maila, mogę odpisać bezpośrednio.
          Jeśli nie — potraktuję to jako anonimową sugestię.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot antyspam */}
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label className="block text-sm font-medium text-zinc-200">
                Wiadomość <span className="text-zinc-500">(wymagane)</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Napisz co chcesz przekazać…"
                className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/30 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-cyan-400/40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-200">
                Email <span className="text-zinc-500">(opcjonalnie)</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="np. adam@mail.com"
                className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/30 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-cyan-400/40"
              />
              <p className="mt-2 text-xs text-zinc-500">
                Jeśli wpiszesz email — będę mógł odpisać.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition disabled:opacity-60"
              >
                {status === "sending" ? "Wysyłam..." : "Wyślij"}
              </button>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
              >
                ← Wróć na start
              </Link>
            </div>

            {status === "sent" && (
              <p className="text-sm text-emerald-200">
                ✅ Wysłane. Dzięki — to naprawdę pomaga rozwijać Waypoint.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-300">
                ⚠️ Coś poszło nie tak. Spróbuj ponownie za chwilę.
              </p>
            )}

            <p className="text-xs text-zinc-500">
              Prosimy nie wysyłać danych wrażliwych. Waypoint nie jest usługą interwencyjną.
              W nagłym kryzysie dzwoń 112.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}